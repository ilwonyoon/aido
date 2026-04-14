import fs from 'fs';
import path from 'path';

type QueueRecommendation = 'queue-a-repair' | 'queue-b-refresh' | 'queue-c-review' | 'queue-d-stable';

interface CompanyAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly lastUpdated: string;
  readonly roleCount: number;
  readonly queue: QueueRecommendation;
}

interface AuditReport {
  readonly generatedAt: string;
  readonly companies: ReadonlyArray<CompanyAuditResult>;
}

interface QueueBatch {
  readonly batch: number;
  readonly focus: 'repair' | 'refresh' | 'review';
  readonly companies: ReadonlyArray<{
    readonly companyId: string;
    readonly companyName: string;
    readonly companyFile: string;
    readonly lastUpdated: string;
    readonly roleCount: number;
  }>;
}

const PROJECT_ROOT = process.cwd();
const RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'research');
const TODAY = new Date().toISOString().slice(0, 10);

function parseArgs(argv: string[]): { readonly reportPath: string; readonly batchSize: number } {
  const reportIndex = argv.indexOf('--report');
  const sizeIndex = argv.indexOf('--batch-size');

  const batchSize = sizeIndex >= 0 ? Number(argv[sizeIndex + 1]) : 5;
  if (!Number.isFinite(batchSize) || batchSize < 1) {
    throw new Error('--batch-size must be a positive integer');
  }

  if (reportIndex >= 0) {
    const reportPath = argv[reportIndex + 1];
    if (!reportPath) {
      throw new Error('--report requires a file path');
    }
    return { reportPath: path.resolve(PROJECT_ROOT, reportPath), batchSize };
  }

  const candidates = fs
    .readdirSync(RESEARCH_DIR)
    .filter((entry) => /^open-role-audit-\d{4}-\d{2}-\d{2}(?:-batch-\d+)?\.json$/.test(entry))
    .sort()
    .reverse();

  if (candidates.length === 0) {
    throw new Error('No open-role audit report found in src/data/research');
  }

  return {
    reportPath: path.join(RESEARCH_DIR, candidates[0]),
    batchSize,
  };
}

function loadReport(reportPath: string): AuditReport {
  return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as AuditReport;
}

function sortCompanies(companies: ReadonlyArray<CompanyAuditResult>): CompanyAuditResult[] {
  return [...companies].sort((left, right) => {
    const updatedCompare = left.lastUpdated.localeCompare(right.lastUpdated);
    if (updatedCompare !== 0) {
      return updatedCompare;
    }

    if (left.roleCount !== right.roleCount) {
      return right.roleCount - left.roleCount;
    }

    return left.companyName.localeCompare(right.companyName);
  });
}

function chunkCompanies(
  companies: ReadonlyArray<CompanyAuditResult>,
  focus: QueueBatch['focus'],
  batchSize: number
): QueueBatch[] {
  const batches: QueueBatch[] = [];
  for (let index = 0; index < companies.length; index += batchSize) {
    const slice = companies.slice(index, index + batchSize);
    batches.push({
      batch: batches.length + 1,
      focus,
      companies: slice.map((company) => ({
        companyId: company.companyId,
        companyName: company.companyName,
        companyFile: company.companyFile,
        lastUpdated: company.lastUpdated,
        roleCount: company.roleCount,
      })),
    });
  }
  return batches;
}

function main(): void {
  const { reportPath, batchSize } = parseArgs(process.argv.slice(2));
  const report = loadReport(reportPath);

  const repair = sortCompanies(report.companies.filter((company) => company.queue === 'queue-a-repair'));
  const refresh = sortCompanies(report.companies.filter((company) => company.queue === 'queue-b-refresh'));
  const review = sortCompanies(report.companies.filter((company) => company.queue === 'queue-c-review'));

  const plan = {
    generatedAt: new Date().toISOString(),
    sourceAuditReport: path.relative(PROJECT_ROOT, reportPath),
    batchSize,
    summary: {
      repairCompanies: repair.length,
      refreshCompanies: refresh.length,
      reviewCompanies: review.length,
    },
    batches: {
      repair: chunkCompanies(repair, 'repair', batchSize),
      refresh: chunkCompanies(refresh, 'refresh', batchSize),
      review: chunkCompanies(review, 'review', batchSize),
    },
  };

  const outputPath = path.join(RESEARCH_DIR, `open-role-queue-plan-${TODAY}.json`);
  fs.writeFileSync(outputPath, `${JSON.stringify(plan, null, 2)}\n`);
  process.stdout.write(
    `${JSON.stringify(
      {
        queuePlanPath: path.relative(PROJECT_ROOT, outputPath),
        summary: plan.summary,
        batches: {
          repair: plan.batches.repair.length,
          refresh: plan.batches.refresh.length,
          review: plan.batches.review.length,
        },
      },
      null,
      2
    )}\n`
  );
}

main();
