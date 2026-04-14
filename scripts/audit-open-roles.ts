import fs from 'fs';
import path from 'path';

import { companies } from '../src/data/companies/index';
import type { Company, OpenRole } from '../src/data/types';

type ScopeClassification = 'in-scope' | 'out-of-scope' | 'needs-review';
type UrlClassification = 'specific-job' | 'generic-careers' | 'ambiguous';
type VerificationStatus = 'ok' | 'broken' | 'redirect' | 'blocked' | 'timeout' | 'error';
type TitleEvidence = 'matched' | 'not-matched' | 'unknown';
type QueueRecommendation = 'queue-a-repair' | 'queue-b-refresh' | 'queue-c-review' | 'queue-d-stable';

interface RoleAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly lastUpdated: string;
  readonly title: string;
  readonly location: string;
  readonly url: string;
  readonly scope: ScopeClassification;
  readonly urlType: UrlClassification;
  readonly status: VerificationStatus;
  readonly httpStatus?: number;
  readonly finalUrl?: string;
  readonly redirectUrl?: string;
  readonly titleEvidence: TitleEvidence;
  readonly queue: QueueRecommendation;
  readonly reasons: string[];
}

interface CompanyAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly lastUpdated: string;
  readonly roleCount: number;
  readonly queue: QueueRecommendation;
  readonly roles: ReadonlyArray<RoleAuditResult>;
}

interface AuditReport {
  readonly generatedAt: string;
  readonly scope: {
    readonly companiesWithOpenRoles: number;
    readonly totalRoles: number;
    readonly selectedCompanies: number;
    readonly batch?: number;
    readonly batchSize?: number;
    readonly policy: string;
  };
  readonly summary: {
    readonly rolesByScope: Record<ScopeClassification, number>;
    readonly rolesByUrlType: Record<UrlClassification, number>;
    readonly rolesByStatus: Record<VerificationStatus, number>;
    readonly rolesByQueue: Record<QueueRecommendation, number>;
    readonly titleEvidence: Record<TitleEvidence, number>;
    readonly companiesByQueue: Record<QueueRecommendation, number>;
  };
  readonly queues: {
    readonly repair: string[];
    readonly refresh: string[];
    readonly review: string[];
    readonly stable: string[];
  };
  readonly companies: ReadonlyArray<CompanyAuditResult>;
}

interface AuditOptions {
  readonly batch?: number;
  readonly size?: number;
  readonly json: boolean;
}

const PROJECT_ROOT = process.cwd();
const RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'research');
const HOST_LAST_HIT = new Map<string, number>();
const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};
const OUT_OF_SCOPE_PATTERNS = [
  /\bux research\b/i,
  /\buser research\b/i,
  /\bresearcher\b/i,
  /\bresearch\b/i,
  /\bapprentice\b/i,
  /\bintern(ship)?\b/i,
  /\bmotion\b/i,
  /\bbrand\b/i,
  /\bvisual\b/i,
  /\bgraphic\b/i,
  /\bmarketing\b/i,
  /\bcontent\b/i,
  /\bvoice\b/i,
  /\bindustrial\b/i,
  /\binterior\b/i,
  /\bdesign engineer\b/i,
  /\bcreative\b/i,
];
const IN_SCOPE_PATTERNS = [
  /\bproduct designer\b/i,
  /\bproduct design manager\b/i,
  /\bsenior design manager\b/i,
  /\bdirector,?\s+product design\b/i,
  /\bhead of product design\b/i,
  /\bprincipal product designer\b/i,
  /\bstaff product designer\b/i,
  /\bfounding product designer\b/i,
  /\blead product designer\b/i,
  /\bdesign lead\b/i,
];
const SPECIFIC_JOB_PATTERNS = [
  /job-boards\.greenhouse\.io\/[\w-]+\/jobs\/\d+/i,
  /boards\.greenhouse\.io\/[\w-]+\/jobs\/\d+/i,
  /jobs\.ashbyhq\.com\/[\w%.+-]+\/[\da-f-]{36}/i,
  /jobs\.lever\.co\/[\w-]+\/[\da-f-]{36}/i,
  /\/jobs\/[\da-f-]{36}/i,
  /\/jobs\/\d{5,}/i,
  /\/careers\/[\w-]+-\d{5,}/i,
  /\/careers\/jobs\/\d+/i,
  /monster\.com\/job-openings\//i,
  /linkedin\.com\/jobs\/view\/\d+/i,
  /indeed\.com\/viewjob/i,
  /wellfound\.com\/jobs\/\d+/i,
  /careers\.redpoint\.com\/companies\/[\w-]+\/jobs\/\d+/i,
  /\/careers\/[\w-]+-[\w-]+-[\w-]+\/?$/i,
  /\/careers\/\d{5,}/i,
  /\/careers\/[\w-]+\?gh_jid=\d+/i,
  /\/careers\/[\w-]+\/[\da-f-]{36}/i,
];
const GENERIC_CAREERS_PATTERNS = [
  /^https?:\/\/[^/]+\/careers\/?$/i,
  /^https?:\/\/[^/]+\/jobs\/?$/i,
  /^https?:\/\/[^/]+\/careers\/?#/i,
  /^https?:\/\/jobs\.ashbyhq\.com\/[\w%-]+\/?$/i,
  /^https?:\/\/[^/]+\/careers\/?\?/i,
  /^https?:\/\/www\.ycombinator\.com\/companies\/[\w-]+\/jobs\/?$/i,
];
const CLOSED_SIGNAL_PATTERNS = [
  /\bpage not found\b/i,
  /\bjob (is )?no longer available\b/i,
  /\bposition (has been )?filled\b/i,
  /\bno longer accepting applications\b/i,
  /\bthis position has been closed\b/i,
  /\bjob posting has expired\b/i,
  /\bthis role is no longer available\b/i,
];

function parseArgs(argv: string[]): AuditOptions {
  const batchIndex = argv.indexOf('--batch');
  const sizeIndex = argv.indexOf('--size');
  const batch = batchIndex >= 0 ? Number(argv[batchIndex + 1]) : undefined;
  const size = sizeIndex >= 0 ? Number(argv[sizeIndex + 1]) : undefined;

  if (batch !== undefined && (!Number.isFinite(batch) || batch < 1)) {
    throw new Error('--batch must be a positive integer');
  }

  if (size !== undefined && (!Number.isFinite(size) || size < 1)) {
    throw new Error('--size must be a positive integer');
  }

  return {
    batch,
    size,
    json: argv.includes('--json'),
  };
}

function logProgress(message: string): void {
  process.stderr.write(`${message}\n`);
}

function classifyScope(title: string): ScopeClassification {
  if (OUT_OF_SCOPE_PATTERNS.some((pattern) => pattern.test(title))) {
    return 'out-of-scope';
  }

  if (IN_SCOPE_PATTERNS.some((pattern) => pattern.test(title))) {
    return 'in-scope';
  }

  if (/\bdesigner\b/i.test(title)) {
    return 'needs-review';
  }

  return 'out-of-scope';
}

function classifyUrl(url: string): UrlClassification {
  if (SPECIFIC_JOB_PATTERNS.some((pattern) => pattern.test(url))) {
    return 'specific-job';
  }

  if (GENERIC_CAREERS_PATTERNS.some((pattern) => pattern.test(url))) {
    return 'generic-careers';
  }

  return 'ambiguous';
}

function isBlockedStatus(status: number): boolean {
  return status === 401 || status === 403 || status === 429 || status === 503;
}

function hasClosedSignals(text: string): boolean {
  return CLOSED_SIGNAL_PATTERNS.some((pattern) => pattern.test(text));
}

function extractTitleEvidence(body: string, title: string): TitleEvidence {
  const normalizedBody = body.toLowerCase();
  const normalizedTitle = title.toLowerCase();
  if (normalizedBody.includes(normalizedTitle)) {
    return 'matched';
  }

  const tokens = normalizedTitle
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 4)
    .filter((token) => !['product', 'designer', 'design', 'senior', 'staff', 'principal', 'founding'].includes(token));

  if (tokens.length === 0) {
    return 'unknown';
  }

  const matchedTokenCount = tokens.filter((token) => normalizedBody.includes(token)).length;
  return matchedTokenCount >= Math.min(2, tokens.length) ? 'matched' : 'not-matched';
}

async function rateLimitHost(url: string): Promise<void> {
  let host = '';
  try {
    host = new URL(url).host;
  } catch {
    return;
  }

  const now = Date.now();
  const lastHit = HOST_LAST_HIT.get(host) ?? 0;
  const waitMs = 1500 - (now - lastHit);
  if (waitMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }
  HOST_LAST_HIT.set(host, Date.now());
}

async function fetchAudit(url: string, urlType: UrlClassification): Promise<{
  readonly status: VerificationStatus;
  readonly httpStatus?: number;
  readonly finalUrl?: string;
  readonly redirectUrl?: string;
  readonly body?: string;
}> {
  await rateLimitHost(url);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: BROWSER_HEADERS,
    });
    const body = await response.text();
    const finalUrl = response.url;

    clearTimeout(timeoutId);

    if (response.status >= 200 && response.status < 300) {
      if (urlType !== 'generic-careers' && hasClosedSignals(body)) {
        return {
          status: 'broken',
          httpStatus: response.status,
          finalUrl,
          body,
        };
      }

      if (finalUrl !== url && classifyUrl(finalUrl) === 'generic-careers') {
        return {
          status: 'redirect',
          httpStatus: response.status,
          finalUrl,
          redirectUrl: finalUrl,
          body,
        };
      }

      return {
        status: 'ok',
        httpStatus: response.status,
        finalUrl,
        body,
      };
    }

    if (isBlockedStatus(response.status)) {
      return {
        status: 'blocked',
        httpStatus: response.status,
        finalUrl,
        body,
      };
    }

    if (response.status >= 300 && response.status < 400) {
      return {
        status: 'redirect',
        httpStatus: response.status,
        redirectUrl: response.headers.get('location') ?? undefined,
        finalUrl,
        body,
      };
    }

    if (response.status === 404 || response.status === 410) {
      return {
        status: 'broken',
        httpStatus: response.status,
        finalUrl,
        body,
      };
    }

    return {
      status: 'error',
      httpStatus: response.status,
      finalUrl,
      body,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      return { status: 'timeout' };
    }
    return { status: 'error' };
  }
}

function summarizeQueue(role: Pick<RoleAuditResult, 'scope' | 'urlType' | 'status' | 'titleEvidence'>): QueueRecommendation {
  if (role.scope === 'out-of-scope' || role.status === 'broken' || role.status === 'redirect' || role.urlType === 'generic-careers') {
    return 'queue-a-repair';
  }

  if (role.scope === 'needs-review' || role.urlType === 'ambiguous') {
    return 'queue-c-review';
  }

  if (role.status === 'blocked' || role.status === 'timeout' || role.status === 'error' || role.titleEvidence === 'not-matched') {
    return 'queue-b-refresh';
  }

  return 'queue-d-stable';
}

function summarizeCompanyQueue(roles: ReadonlyArray<RoleAuditResult>): QueueRecommendation {
  if (roles.some((role) => role.queue === 'queue-a-repair')) {
    return 'queue-a-repair';
  }

  if (roles.some((role) => role.queue === 'queue-b-refresh')) {
    return 'queue-b-refresh';
  }

  if (roles.some((role) => role.queue === 'queue-c-review')) {
    return 'queue-c-review';
  }

  return 'queue-d-stable';
}

function sortTargets(sourceCompanies: ReadonlyArray<Company>): Company[] {
  return [...sourceCompanies].sort((left, right) => {
    const lastUpdatedCompare = left.lastUpdated.localeCompare(right.lastUpdated);
    if (lastUpdatedCompare !== 0) {
      return lastUpdatedCompare;
    }

    if (left.openRoles.length !== right.openRoles.length) {
      return right.openRoles.length - left.openRoles.length;
    }

    return left.name.localeCompare(right.name);
  });
}

function selectTargets(sourceCompanies: ReadonlyArray<Company>, options: AuditOptions): Company[] {
  const sorted = sortTargets(sourceCompanies);
  if (options.batch === undefined || options.size === undefined) {
    return sorted;
  }

  const startIndex = (options.batch - 1) * options.size;
  return sorted.slice(startIndex, startIndex + options.size);
}

function buildReasons(
  scope: ScopeClassification,
  urlType: UrlClassification,
  verification: Awaited<ReturnType<typeof fetchAudit>>,
  titleEvidence: TitleEvidence
): string[] {
  const reasons: string[] = [];

  if (scope === 'out-of-scope') {
    reasons.push('title is outside Product Designer / Product Design leadership scope');
  } else if (scope === 'needs-review') {
    reasons.push('title needs manual review before keeping in Product Design tracking');
  }

  if (urlType === 'generic-careers') {
    reasons.push('URL points to a generic careers page instead of a job-specific posting');
  } else if (urlType === 'ambiguous') {
    reasons.push('URL pattern is ambiguous and may not point to a durable job detail page');
  }

  if (verification.status === 'broken') {
    reasons.push(`URL returned a broken or closed signal${verification.httpStatus ? ` (HTTP ${verification.httpStatus})` : ''}`);
  } else if (verification.status === 'redirect') {
    reasons.push('URL redirected away from the expected job detail page');
  } else if (verification.status === 'blocked') {
    reasons.push(`URL blocked automated verification${verification.httpStatus ? ` (HTTP ${verification.httpStatus})` : ''}`);
  } else if (verification.status === 'timeout') {
    reasons.push('URL timed out during verification');
  } else if (verification.status === 'error') {
    reasons.push('URL verification failed with a non-recoverable error');
  }

  if (titleEvidence === 'not-matched') {
    reasons.push('job title was not found in the fetched page body');
  }

  if (reasons.length === 0) {
    reasons.push('role passed the current audit checks');
  }

  return reasons;
}

async function auditRole(company: Company, role: OpenRole): Promise<RoleAuditResult> {
  const scope = classifyScope(role.title);
  const urlType = classifyUrl(role.url);
  const verification = await fetchAudit(role.url, urlType);
  const titleEvidence =
    verification.body && verification.status !== 'blocked'
      ? extractTitleEvidence(verification.body, role.title)
      : 'unknown';
  const queue = summarizeQueue({
    scope,
    urlType,
    status: verification.status,
    titleEvidence,
  });

  return {
    companyId: company.id,
    companyName: company.name,
    companyFile: `src/data/companies/${company.id}.ts`,
    lastUpdated: company.lastUpdated,
    title: role.title,
    location: role.location,
    url: role.url,
    scope,
    urlType,
    status: verification.status,
    httpStatus: verification.httpStatus,
    finalUrl: verification.finalUrl,
    redirectUrl: verification.redirectUrl,
    titleEvidence,
    queue,
    reasons: buildReasons(scope, urlType, verification, titleEvidence),
  };
}

async function auditCompany(company: Company, options: AuditOptions): Promise<CompanyAuditResult> {
  logProgress(`Auditing ${company.name} (${company.openRoles.length} roles)`);

  const roles: RoleAuditResult[] = [];
  for (const role of company.openRoles) {
    roles.push(await auditRole(company, role));
  }

  return {
    companyId: company.id,
    companyName: company.name,
    companyFile: `src/data/companies/${company.id}.ts`,
    lastUpdated: company.lastUpdated,
    roleCount: company.openRoles.length,
    queue: summarizeCompanyQueue(roles),
    roles,
  };
}

function makeEmptyCounter<T extends string>(keys: readonly T[]): Record<T, number> {
  return keys.reduce<Record<T, number>>((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {} as Record<T, number>);
}

function buildSummary(results: ReadonlyArray<CompanyAuditResult>): AuditReport['summary'] {
  const rolesByScope = makeEmptyCounter<ScopeClassification>(['in-scope', 'out-of-scope', 'needs-review']);
  const rolesByUrlType = makeEmptyCounter<UrlClassification>(['specific-job', 'generic-careers', 'ambiguous']);
  const rolesByStatus = makeEmptyCounter<VerificationStatus>(['ok', 'broken', 'redirect', 'blocked', 'timeout', 'error']);
  const rolesByQueue = makeEmptyCounter<QueueRecommendation>([
    'queue-a-repair',
    'queue-b-refresh',
    'queue-c-review',
    'queue-d-stable',
  ]);
  const titleEvidence = makeEmptyCounter<TitleEvidence>(['matched', 'not-matched', 'unknown']);
  const companiesByQueue = makeEmptyCounter<QueueRecommendation>([
    'queue-a-repair',
    'queue-b-refresh',
    'queue-c-review',
    'queue-d-stable',
  ]);

  for (const company of results) {
    companiesByQueue[company.queue] += 1;

    for (const role of company.roles) {
      rolesByScope[role.scope] += 1;
      rolesByUrlType[role.urlType] += 1;
      rolesByStatus[role.status] += 1;
      rolesByQueue[role.queue] += 1;
      titleEvidence[role.titleEvidence] += 1;
    }
  }

  return {
    rolesByScope,
    rolesByUrlType,
    rolesByStatus,
    rolesByQueue,
    titleEvidence,
    companiesByQueue,
  };
}

function buildQueues(results: ReadonlyArray<CompanyAuditResult>): AuditReport['queues'] {
  const repair: string[] = [];
  const refresh: string[] = [];
  const review: string[] = [];
  const stable: string[] = [];

  for (const company of results) {
    if (company.queue === 'queue-a-repair') {
      repair.push(company.companyId);
    } else if (company.queue === 'queue-b-refresh') {
      refresh.push(company.companyId);
    } else if (company.queue === 'queue-c-review') {
      review.push(company.companyId);
    } else {
      stable.push(company.companyId);
    }
  }

  return { repair, refresh, review, stable };
}

function buildReport(
  results: ReadonlyArray<CompanyAuditResult>,
  targetCompanies: ReadonlyArray<Company>,
  allCompaniesWithRoles: ReadonlyArray<Company>,
  options: AuditOptions
): AuditReport {
  const summary = buildSummary(results);

  return {
    generatedAt: new Date().toISOString(),
    scope: {
      companiesWithOpenRoles: allCompaniesWithRoles.length,
      totalRoles: allCompaniesWithRoles.reduce((total, company) => total + company.openRoles.length, 0),
      selectedCompanies: targetCompanies.length,
      batch: options.batch,
      batchSize: options.size,
      policy:
        'Audit existing openRoles only. Keep Product Designer IC roles and Product Design leadership roles, require job-specific URLs when possible, and flag blocked or ambiguous cases for follow-up.',
    },
    summary,
    queues: buildQueues(results),
    companies: results,
  };
}

function writeReport(report: AuditReport, options: AuditOptions): string {
  fs.mkdirSync(RESEARCH_DIR, { recursive: true });
  const dateStamp = new Date().toISOString().slice(0, 10);
  const suffix = options.batch !== undefined ? `-batch-${options.batch}` : '';
  const reportPath = path.join(RESEARCH_DIR, `open-role-audit-${dateStamp}${suffix}.json`);
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  return path.relative(PROJECT_ROOT, reportPath);
}

function printHumanSummary(report: AuditReport, reportPath: string): void {
  const lines = [
    `Open-role audit complete`,
    `Report: ${reportPath}`,
    `Companies audited: ${report.scope.selectedCompanies}/${report.scope.companiesWithOpenRoles}`,
    `Roles audited: ${report.scope.totalRoles}`,
    `Queue A repair: ${report.queues.repair.length} companies`,
    `Queue B refresh: ${report.queues.refresh.length} companies`,
    `Queue C review: ${report.queues.review.length} companies`,
    `Queue D stable: ${report.queues.stable.length} companies`,
    `Broken URLs: ${report.summary.rolesByStatus.broken}`,
    `Redirected URLs: ${report.summary.rolesByStatus.redirect}`,
    `Blocked URLs: ${report.summary.rolesByStatus.blocked}`,
    `Generic careers URLs: ${report.summary.rolesByUrlType['generic-careers']}`,
    `Out-of-scope roles: ${report.summary.rolesByScope['out-of-scope']}`,
  ];

  process.stdout.write(`${lines.join('\n')}\n`);
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const companiesWithRoles = companies.filter((company) => company.openRoles.length > 0);
  const targetCompanies = selectTargets(companiesWithRoles, options);

  const results: CompanyAuditResult[] = [];
  for (const company of targetCompanies) {
    results.push(await auditCompany(company, options));
  }

  const report = buildReport(results, targetCompanies, companiesWithRoles, options);
  const reportPath = writeReport(report, options);

  if (options.json) {
    process.stdout.write(
      `${JSON.stringify(
        {
          reportPath,
          summary: report.summary,
          queues: report.queues,
        },
        null,
        2
      )}\n`
    );
    return;
  }

  printHumanSummary(report, reportPath);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${message}\n`);
  process.exit(1);
});
