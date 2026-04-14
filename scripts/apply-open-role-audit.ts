import fs from 'fs';
import path from 'path';

type ScopeClassification = 'in-scope' | 'out-of-scope' | 'needs-review';
type VerificationStatus = 'ok' | 'broken' | 'redirect' | 'blocked' | 'timeout' | 'error';

interface RoleAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly title: string;
  readonly url: string;
  readonly scope: ScopeClassification;
  readonly status: VerificationStatus;
}

interface CompanyAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly roles: ReadonlyArray<RoleAuditResult>;
}

interface AuditReport {
  readonly generatedAt: string;
  readonly companies: ReadonlyArray<CompanyAuditResult>;
}

interface RemovalTarget {
  readonly title: string;
  readonly url: string;
  readonly reason: 'broken' | 'redirect' | 'out-of-scope';
}

interface CompanyChange {
  readonly companyId: string;
  readonly companyFile: string;
  readonly removed: ReadonlyArray<RemovalTarget>;
  readonly before: number;
  readonly after: number;
}

const PROJECT_ROOT = process.cwd();
const RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'research');
const TODAY = new Date().toISOString().slice(0, 10);

function parseArgs(argv: string[]): { readonly reportPath: string } {
  const reportIndex = argv.indexOf('--report');
  if (reportIndex >= 0) {
    const reportPath = argv[reportIndex + 1];
    if (!reportPath) {
      throw new Error('--report requires a file path');
    }
    return { reportPath: path.resolve(PROJECT_ROOT, reportPath) };
  }

  const candidates = fs
    .readdirSync(RESEARCH_DIR)
    .filter((entry) => /^open-role-audit-\d{4}-\d{2}-\d{2}(?:-batch-\d+)?\.json$/.test(entry))
    .sort()
    .reverse();

  if (candidates.length === 0) {
    throw new Error('No open-role audit report found in src/data/research');
  }

  return { reportPath: path.join(RESEARCH_DIR, candidates[0]) };
}

function loadReport(reportPath: string): AuditReport {
  return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as AuditReport;
}

function extractOpenRolesBlock(content: string): { start: number; blockStart: number; blockEnd: number } | null {
  const marker = 'openRoles: [';
  const start = content.indexOf(marker);
  if (start === -1) return null;

  let index = start + marker.length;
  let depth = 1;
  while (index < content.length && depth > 0) {
    const char = content[index];
    if (char === '[') depth += 1;
    if (char === ']') depth -= 1;
    index += 1;
  }

  if (depth !== 0) return null;

  return {
    start,
    blockStart: start + marker.length,
    blockEnd: index - 1,
  };
}

function extractRoleObjects(blockText: string): Array<{ raw: string; title: string; url: string }> {
  const roles: Array<{ raw: string; title: string; url: string }> = [];
  let index = 0;

  while (index < blockText.length) {
    if (blockText[index] !== '{') {
      index += 1;
      continue;
    }

    const objectStart = index;
    let depth = 1;
    index += 1;

    while (index < blockText.length && depth > 0) {
      if (blockText[index] === '{') depth += 1;
      if (blockText[index] === '}') depth -= 1;
      index += 1;
    }

    const raw = blockText.slice(objectStart, index);
    const title = raw.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1];
    const url = raw.match(/url:\s*['"`](https?:\/\/[^'"`]+)['"`]/)?.[1];

    if (title && url) {
      roles.push({ raw, title, url });
    }
  }

  return roles;
}

function reindentObject(raw: string, indent: string): string {
  const lines = raw.split('\n');
  const nonEmpty = lines.filter((line) => line.trim().length > 0);
  const minIndent = nonEmpty.length
    ? Math.min(...nonEmpty.map((line) => (line.match(/^\s*/) || [''])[0].length))
    : 0;
  return lines.map((line) => `${indent}${line.slice(minIndent)}`).join('\n');
}

function replaceOpenRoles(
  content: string,
  block: { start: number; blockStart: number; blockEnd: number },
  keptRaw: ReadonlyArray<string>
): string {
  const before = content.slice(0, block.blockStart);
  const after = content.slice(block.blockEnd);

  if (keptRaw.length === 0) {
    return `${before}${after}`;
  }

  const openRolesLineStart = content.lastIndexOf('\n', block.start) + 1;
  const openRolesIndent = (content.slice(openRolesLineStart, block.start).match(/^\s*/) || [''])[0];
  const roleIndent = `${openRolesIndent}  `;
  const formatted = keptRaw.map((raw) => reindentObject(raw, roleIndent));
  const joined = `\n${formatted.join(',\n')}\n${openRolesIndent}`;
  return `${before}${joined}${after}`;
}

function updateLastUpdated(content: string): string {
  if (/lastUpdated:\s*['"`][^'"`]+['"`]/.test(content)) {
    return content.replace(/lastUpdated:\s*['"`][^'"`]+['"`]/, `lastUpdated: '${TODAY}'`);
  }
  return content;
}

function collectRemovalTargets(report: AuditReport): Map<string, RemovalTarget[]> {
  const removals = new Map<string, RemovalTarget[]>();

  for (const company of report.companies) {
    const companyRemovals = company.roles
      .flatMap((role): RemovalTarget[] => {
        if (role.scope === 'out-of-scope') {
          return [{ title: role.title, url: role.url, reason: 'out-of-scope' }];
        }

        if (role.status === 'broken') {
          return [{ title: role.title, url: role.url, reason: 'broken' }];
        }

        if (role.status === 'redirect') {
          return [{ title: role.title, url: role.url, reason: 'redirect' }];
        }

        return [];
      })
      .filter((target, index, all) => all.findIndex((entry) => entry.title === target.title && entry.url === target.url) === index);

    if (companyRemovals.length > 0) {
      removals.set(company.companyId, companyRemovals);
    }
  }

  return removals;
}

function applyRemovals(companyFile: string, removals: ReadonlyArray<RemovalTarget>): CompanyChange | null {
  const absolutePath = path.resolve(PROJECT_ROOT, companyFile);
  const original = fs.readFileSync(absolutePath, 'utf8');
  const block = extractOpenRolesBlock(original);

  if (!block) {
    return null;
  }

  const roles = extractRoleObjects(original.slice(block.blockStart, block.blockEnd));
  const removalKey = new Set(removals.map((removal) => `${removal.title}@@${removal.url}`));
  const keptRoles = roles.filter((role) => !removalKey.has(`${role.title}@@${role.url}`));

  if (keptRoles.length === roles.length) {
    return null;
  }

  let updated = replaceOpenRoles(
    original,
    block,
    keptRoles.map((role) => role.raw)
  );
  updated = updateLastUpdated(updated);
  fs.writeFileSync(absolutePath, updated);

  return {
    companyId: path.basename(companyFile, '.ts'),
    companyFile,
    removed: removals.filter((removal) => roles.some((role) => role.title === removal.title && role.url === removal.url)),
    before: roles.length,
    after: keptRoles.length,
  };
}

function writeRepairReport(sourceReportPath: string, changes: ReadonlyArray<CompanyChange>): string {
  const report = {
    generatedAt: new Date().toISOString(),
    sourceAuditReport: path.relative(PROJECT_ROOT, sourceReportPath),
    changedCompanies: changes.length,
    removedRoles: changes.reduce((total, change) => total + change.removed.length, 0),
    changes,
  };

  const reportPath = path.join(RESEARCH_DIR, `open-role-repair-${TODAY}.json`);
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  return path.relative(PROJECT_ROOT, reportPath);
}

function main(): void {
  const { reportPath } = parseArgs(process.argv.slice(2));
  const report = loadReport(reportPath);
  const removalsByCompany = collectRemovalTargets(report);
  const changes: CompanyChange[] = [];

  for (const company of report.companies) {
    const removals = removalsByCompany.get(company.companyId);
    if (!removals || removals.length === 0) {
      continue;
    }

    const change = applyRemovals(company.companyFile, removals);
    if (change && change.removed.length > 0) {
      changes.push(change);
    }
  }

  const repairReportPath = writeRepairReport(reportPath, changes);
  process.stdout.write(
    `${JSON.stringify(
      {
        sourceAuditReport: path.relative(PROJECT_ROOT, reportPath),
        repairReportPath,
        changedCompanies: changes.length,
        removedRoles: changes.reduce((total, change) => total + change.removed.length, 0),
        changes,
      },
      null,
      2
    )}\n`
  );
}

main();
