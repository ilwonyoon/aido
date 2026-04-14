import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';

import { companies } from '../src/data/companies/index';
import type { Company, OpenRole } from '../src/data/types';

type QueueRecommendation = 'queue-a-repair' | 'queue-b-refresh' | 'queue-c-review' | 'queue-d-stable';
type ScopeClassification = 'in-scope' | 'out-of-scope' | 'needs-review';
type DecisionType = 'replace' | 'remove' | 'skip';
type ProviderType = 'ashby' | 'greenhouse' | 'unknown';

interface RoleAuditResult {
  readonly companyId: string;
  readonly title: string;
  readonly location: string;
  readonly url: string;
  readonly queue: QueueRecommendation;
}

interface CompanyAuditResult {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly queue: QueueRecommendation;
  readonly roles: ReadonlyArray<RoleAuditResult>;
}

interface AuditReport {
  readonly generatedAt: string;
  readonly companies: ReadonlyArray<CompanyAuditResult>;
}

interface ProviderJob {
  readonly title: string;
  readonly url: string;
  readonly location?: string;
  readonly scope: ScopeClassification;
}

interface RoleDecision {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly previousTitle: string;
  readonly previousLocation: string;
  readonly previousUrl: string;
  readonly action: DecisionType;
  readonly provider: ProviderType;
  readonly reason: string;
  readonly discoveryUrl?: string;
  readonly nextTitle?: string;
  readonly nextLocation?: string;
  readonly nextUrl?: string;
}

interface CompanyChange {
  readonly companyId: string;
  readonly companyName: string;
  readonly companyFile: string;
  readonly decisions: ReadonlyArray<RoleDecision>;
  readonly before: number;
  readonly after: number;
}

interface RefreshOptions {
  readonly reportPath: string;
  readonly companyIds?: Set<string>;
  readonly json: boolean;
}

interface BrowserFallbackResult {
  readonly title: string;
  readonly url: string;
  readonly links: Array<{ readonly text: string; readonly href: string }>;
  readonly hasProductDesigner?: boolean;
  readonly hasStaffProductDesigner?: boolean;
  readonly hasProductDesignManager?: boolean;
  readonly hasDesignDiscipline?: boolean;
}

const PROJECT_ROOT = process.cwd();
const RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'research');
const TODAY = new Date().toISOString().slice(0, 10);
const HOST_LAST_HIT = new Map<string, number>();
const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};
const PLAYWRIGHT_WRAPPER = path.join(process.env.CODEX_HOME ?? path.join(os.homedir(), '.codex'), 'skills', 'playwright', 'scripts', 'playwright_cli.sh');

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
  /\bweb designer\b/i,
  /\bvideo editor\b/i,
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

function parseArgs(argv: string[]): RefreshOptions {
  const reportIndex = argv.indexOf('--report');
  const companyIndex = argv.indexOf('--company');
  const reportPathArg = reportIndex >= 0 ? argv[reportIndex + 1] : undefined;
  const companyArg = companyIndex >= 0 ? argv[companyIndex + 1] : undefined;

  if (reportIndex >= 0 && !reportPathArg) {
    throw new Error('--report requires a file path');
  }

  if (companyIndex >= 0 && !companyArg) {
    throw new Error('--company requires a comma-separated company id list');
  }

  let reportPath = reportPathArg ? path.resolve(PROJECT_ROOT, reportPathArg) : '';
  if (!reportPath) {
    const candidates = fs
      .readdirSync(RESEARCH_DIR)
      .filter((entry) => /^open-role-audit-\d{4}-\d{2}-\d{2}(?:-batch-\d+)?\.json$/.test(entry))
      .sort()
      .reverse();

    if (candidates.length === 0) {
      throw new Error('No open-role audit report found in src/data/research');
    }

    reportPath = path.join(RESEARCH_DIR, candidates[0]);
  }

  return {
    reportPath,
    companyIds: companyArg ? new Set(companyArg.split(',').map((entry) => entry.trim()).filter(Boolean)) : undefined,
    json: argv.includes('--json'),
  };
}

function loadReport(reportPath: string): AuditReport {
  return JSON.parse(fs.readFileSync(reportPath, 'utf8')) as AuditReport;
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
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

function unique<T>(values: ReadonlyArray<T>): T[] {
  return [...new Set(values)];
}

function rootDomain(hostname: string): string {
  const parts = hostname.split('.').filter(Boolean);
  return parts.slice(-2).join('.');
}

function buildDiscoveryUrls(company: Company, role: OpenRole): string[] {
  const sourceUrls = company.sources
    .map((source) => source.url)
    .filter((url) => /(careers?|jobs|greenhouse|ashbyhq|lever)/i.test(url));

  return unique([role.url, ...sourceUrls]);
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
  const waitMs = 1200 - (now - lastHit);
  if (waitMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }
  HOST_LAST_HIT.set(host, Date.now());
}

async function fetchText(url: string): Promise<{ readonly ok: boolean; readonly status: number; readonly finalUrl: string; readonly text: string }> {
  await rateLimitHost(url);
  const response = await fetch(url, {
    method: 'GET',
    headers: BROWSER_HEADERS,
    redirect: 'follow',
  });

  return {
    ok: response.ok,
    status: response.status,
    finalUrl: response.url,
    text: await response.text(),
  };
}

function extractJsonObjectAfter(text: string, marker: string): string | null {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) {
    return null;
  }

  let index = markerIndex + marker.length;
  while (index < text.length && /\s/.test(text[index])) {
    index += 1;
  }

  if (text[index] !== '{') {
    return null;
  }

  const start = index;
  let depth = 0;
  let inString = false;
  let quote = '"';
  let escaped = false;

  for (; index < text.length; index += 1) {
    const char = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === '{') {
      depth += 1;
      continue;
    }

    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return text.slice(start, index + 1);
      }
    }
  }

  return null;
}

function findAshbySlug(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.host !== 'jobs.ashbyhq.com') {
      return null;
    }

    const slug = parsed.pathname.split('/').filter(Boolean)[0];
    return slug ?? null;
  } catch {
    return null;
  }
}

function findAshbySlugInHtml(text: string): string | null {
  const match = text.match(/jobs\.ashbyhq\.com\/([^\/"'?\s<]+)(?:\/embed|\/[\da-f-]{8,}|["'?<\s])/i);
  return match?.[1] ?? null;
}

function findGreenhouseSlug(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.host === 'job-boards.greenhouse.io' || parsed.host === 'boards.greenhouse.io') {
      return parsed.pathname.split('/').filter(Boolean)[0] ?? null;
    }
  } catch {
    return null;
  }

  return null;
}

function findGreenhouseSlugInHtml(text: string): string | null {
  const apiMatch = text.match(/boards-api\.greenhouse\.io\/v1\/boards\/([\w-]+)\/jobs/i);
  if (apiMatch) {
    return apiMatch[1];
  }

  const boardMatch = text.match(/job-boards\.greenhouse\.io\/([\w-]+)/i);
  if (boardMatch) {
    return boardMatch[1];
  }

  const embedMatch = text.match(/boards\.greenhouse\.io\/embed\/job_board\/js\?for=([\w-]+)/i);
  if (embedMatch) {
    return embedMatch[1];
  }

  return null;
}

function selectReplacementJob(currentTitle: string, jobs: ReadonlyArray<ProviderJob>): ProviderJob | null {
  const normalizedCurrent = normalizeTitle(currentTitle);
  const inScopeJobs = jobs.filter((job) => job.scope === 'in-scope');

  const exact = inScopeJobs.filter((job) => normalizeTitle(job.title) === normalizedCurrent);
  if (exact.length === 1) {
    return exact[0];
  }

  const prefix = inScopeJobs.filter((job) => normalizeTitle(job.title).startsWith(`${normalizedCurrent} `));
  if (prefix.length === 1) {
    return prefix[0];
  }

  if (inScopeJobs.length === 1) {
    return inScopeJobs[0];
  }

  return null;
}

function buildProviderDecision(
  company: Company,
  role: OpenRole,
  companyFile: string,
  provider: ProviderType,
  discoveryUrl: string,
  jobs: ReadonlyArray<ProviderJob>
): RoleDecision {
  const replacement = selectReplacementJob(role.title, jobs);
  if (replacement) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'replace',
      provider,
      reason:
        replacement.title === role.title
          ? `${provider} board confirmed a job-specific posting for the current role`
          : `${provider} board confirmed the role with an expanded current title`,
      discoveryUrl,
      nextTitle: replacement.title,
      nextLocation: role.location,
      nextUrl: replacement.url,
    };
  }

  const inScopeJobs = jobs.filter((job) => job.scope === 'in-scope');
  const reviewJobs = jobs.filter((job) => job.scope === 'needs-review');

  if (inScopeJobs.length === 0 && reviewJobs.length === 0) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'remove',
      provider,
      reason: `${provider} board has no current Product Design IC or leadership roles`,
      discoveryUrl,
    };
  }

  return {
    companyId: company.id,
    companyName: company.name,
    companyFile,
    previousTitle: role.title,
    previousLocation: role.location,
    previousUrl: role.url,
    action: 'skip',
    provider,
    reason: `${provider} board has multiple or ambiguous design roles that still need review`,
    discoveryUrl,
  };
}

async function resolveAshby(boardUrl: string, company: Company, role: OpenRole, companyFile: string): Promise<RoleDecision> {
  const slug = findAshbySlug(boardUrl);
  if (!slug) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'skip',
      provider: 'ashby',
      reason: 'Ashby board slug could not be determined',
      discoveryUrl: boardUrl,
    };
  }

  const response = await fetchText(`https://jobs.ashbyhq.com/${slug}`);
  if (!response.ok) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'skip',
      provider: 'ashby',
      reason: `Ashby board lookup failed with HTTP ${response.status}`,
      discoveryUrl: boardUrl,
    };
  }

  const jsonText = extractJsonObjectAfter(response.text, 'window.__appData =');
  if (!jsonText) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'skip',
      provider: 'ashby',
      reason: 'Ashby board payload could not be extracted',
      discoveryUrl: boardUrl,
    };
  }

  const appData = JSON.parse(jsonText) as { readonly jobBoard?: { readonly jobPostings?: Array<{ readonly id: string; readonly title: string }> } };
  const postings = appData.jobBoard?.jobPostings ?? [];
  const jobs = postings.map((posting) => ({
    title: posting.title,
    url: `https://jobs.ashbyhq.com/${slug}/${posting.id}`,
    scope: classifyScope(posting.title),
  }));

  return buildProviderDecision(company, role, companyFile, 'ashby', boardUrl, jobs);
}

async function resolveGreenhouse(slug: string, discoveryUrl: string, company: Company, role: OpenRole, companyFile: string): Promise<RoleDecision> {
  const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/${slug}/jobs`);
  if (!response.ok) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'skip',
      provider: 'greenhouse',
      reason: `Greenhouse API lookup failed with HTTP ${response.status}`,
      discoveryUrl,
    };
  }

  const payload = (await response.json()) as {
    readonly jobs?: Array<{
      readonly title: string;
      readonly absolute_url: string;
    }>;
  };

  const jobs = (payload.jobs ?? []).map((job) => ({
    title: job.title,
    url: job.absolute_url,
    scope: classifyScope(job.title),
  }));

  return buildProviderDecision(company, role, companyFile, 'greenhouse', discoveryUrl, jobs);
}

function parsePlaywrightResult(output: string): unknown | null {
  const marker = '### Result';
  const start = output.lastIndexOf(marker);
  if (start === -1) {
    return null;
  }

  const afterMarker = output.slice(start + marker.length);
  const endMarker = '\n### Ran Playwright code';
  const end = afterMarker.indexOf(endMarker);
  const raw = (end === -1 ? afterMarker : afterMarker.slice(0, end)).trim();
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function runPlaywrightSequence(session: string, commands: string[]): unknown | null {
  if (!fs.existsSync(PLAYWRIGHT_WRAPPER)) {
    return null;
  }

  const shellScript = [
    'set -euo pipefail',
    `export PWCLI=${JSON.stringify(PLAYWRIGHT_WRAPPER)}`,
    ...commands.map((command) => `PLAYWRIGHT_CLI_SESSION=${JSON.stringify(session)} "$PWCLI" ${command}`),
  ].join('\n');

  try {
    const output = execFileSync('/bin/bash', ['-lc', shellScript], {
      cwd: PROJECT_ROOT,
      encoding: 'utf8',
      maxBuffer: 8 * 1024 * 1024,
    });
    return parsePlaywrightResult(output);
  } catch {
    return null;
  }
}

function buildBrowserDecision(
  company: Company,
  role: OpenRole,
  companyFile: string,
  reason: string,
  action: DecisionType
): RoleDecision {
  return {
    companyId: company.id,
    companyName: company.name,
    companyFile,
    previousTitle: role.title,
    previousLocation: role.location,
    previousUrl: role.url,
    action,
    provider: 'unknown',
    reason,
    discoveryUrl: role.url,
  };
}

function resolveBrowserFallback(company: Company, role: OpenRole, companyFile: string): RoleDecision | null {
  if (company.id === 'canva') {
    const session = `canva-${Date.now()}`;
    const result = runPlaywrightSequence(session, [
      `open ${JSON.stringify('https://www.canva.com/careers')} --headed`,
      `goto ${JSON.stringify('https://www.lifeatcanva.com/en/jobs/')}`,
      `eval ${JSON.stringify(
        "() => ({title: document.title, url: location.href, hasProductDesigner: document.body.innerText.includes('Product Designer'), hasStaffProductDesigner: document.body.innerText.includes('Staff Product Designer'), hasProductDesignManager: document.body.innerText.includes('Product Design Manager'), links: Array.from(document.links).map(a => ({text:(a.textContent||'').trim(), href:a.href})).filter(x => /designer|product/i.test(x.text+' '+x.href)).slice(0,200)})"
      )}`,
    ]) as BrowserFallbackResult | null;

    if (result && !result.hasProductDesigner && !result.hasStaffProductDesigner && !result.hasProductDesignManager) {
      return buildBrowserDecision(company, role, companyFile, 'browser fallback verified the Canva jobs page has no current Product Designer or Product Design leadership role', 'remove');
    }
  }

  if (company.id === 'shopify') {
    const session = `shopify-${Date.now()}`;
    const result = runPlaywrightSequence(session, [
      `open ${JSON.stringify('https://www.shopify.com/careers/disciplines/product')}`,
      `eval ${JSON.stringify(
        "() => ({title: document.title, url: location.href, hasProductDesigner: document.body.innerText.includes('Product Designer'), hasStaffProductDesigner: document.body.innerText.includes('Staff Product Designer'), hasDesignDiscipline: document.body.innerText.includes('Design Apprentice') || document.body.innerText.includes('Designer'), links: Array.from(document.links).map(a => ({text:(a.textContent||'').trim(), href:a.href})).filter(x => /design/i.test(x.text+' '+x.href)).slice(0,120)})"
      )}`,
    ]) as BrowserFallbackResult | null;

    if (result && !result.hasProductDesigner && !result.hasStaffProductDesigner) {
      return buildBrowserDecision(company, role, companyFile, 'browser fallback verified Shopify careers has no current Product Designer listing on the product discipline page', 'remove');
    }
  }

  if (company.id === 'midjourney') {
    const session = `midjourney-${Date.now()}`;
    const result = runPlaywrightSequence(session, [
      `open ${JSON.stringify('https://www.midjourney.com/careers')} --headed`,
      `eval ${JSON.stringify(
        "() => ({title: document.title, url: location.href, hasProductDesigner: document.body.innerText.includes('Product Designer'), links: Array.from(document.links).map(a => ({text:(a.textContent||'').trim(), href:a.href})).filter(x => /designer|product|frontend/i.test(x.text+' '+x.href)).slice(0,80)})"
      )}`,
    ]) as BrowserFallbackResult | null;

    if (result?.hasProductDesigner) {
      return buildBrowserDecision(company, role, companyFile, 'browser fallback confirmed Midjourney still has a Product Designer opening, but only as a generic section without a durable job-specific URL', 'skip');
    }
  }

  return null;
}

async function resolveRole(company: Company, companyFile: string, role: OpenRole): Promise<RoleDecision> {
  const discoveryUrls = buildDiscoveryUrls(company, role);
  let offDomainRedirect: string | null = null;

  for (const discoveryUrl of discoveryUrls) {
    const ashbySlug = findAshbySlug(discoveryUrl);
    if (ashbySlug) {
      return resolveAshby(`https://jobs.ashbyhq.com/${ashbySlug}`, company, role, companyFile);
    }

    const greenhouseSlug = findGreenhouseSlug(discoveryUrl);
    if (greenhouseSlug) {
      return resolveGreenhouse(greenhouseSlug, discoveryUrl, company, role, companyFile);
    }

    try {
      const response = await fetchText(discoveryUrl);
      if (!response.ok) {
        continue;
      }

      try {
        const originalHost = new URL(discoveryUrl).host;
        const finalHost = new URL(response.finalUrl).host;
        if (rootDomain(originalHost) !== rootDomain(finalHost)) {
          offDomainRedirect = response.finalUrl;
        }
      } catch {
        // Ignore URL parsing failures for redirect heuristics.
      }

      const htmlAshbySlug = findAshbySlugInHtml(response.text);
      if (htmlAshbySlug) {
        return resolveAshby(`https://jobs.ashbyhq.com/${htmlAshbySlug}`, company, role, companyFile);
      }

      const htmlGreenhouseSlug = findGreenhouseSlugInHtml(response.text);
      if (htmlGreenhouseSlug) {
        const greenhouseDecision = await resolveGreenhouse(htmlGreenhouseSlug, response.finalUrl, company, role, companyFile);
        if (greenhouseDecision.action !== 'skip' || !offDomainRedirect || !/lookup failed/i.test(greenhouseDecision.reason)) {
          return greenhouseDecision;
        }
      }
    } catch {
      continue;
    }
  }

  if (offDomainRedirect) {
    return {
      companyId: company.id,
      companyName: company.name,
      companyFile,
      previousTitle: role.title,
      previousLocation: role.location,
      previousUrl: role.url,
      action: 'remove',
      provider: 'unknown',
      reason: `official careers URL redirected off-domain to ${offDomainRedirect} without a supported ATS role listing`,
      discoveryUrl: role.url,
    };
  }

  const browserFallback = resolveBrowserFallback(company, role, companyFile);
  if (browserFallback) {
    return browserFallback;
  }

  return {
    companyId: company.id,
    companyName: company.name,
    companyFile,
    previousTitle: role.title,
    previousLocation: role.location,
    previousUrl: role.url,
    action: 'skip',
    provider: 'unknown',
    reason: 'No supported ATS provider could be discovered from the current role or source URLs',
  };
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

function replaceField(raw: string, field: 'title' | 'location' | 'url', nextValue: string): string {
  const safeValue = nextValue.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const pattern = new RegExp(`${field}:\\s*['"\`][^'"\`]+['"\`]`);
  return raw.replace(pattern, `${field}: '${safeValue}'`);
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

function applyDecisions(companyFile: string, decisions: ReadonlyArray<RoleDecision>): CompanyChange | null {
  const absolutePath = path.resolve(PROJECT_ROOT, companyFile);
  const original = fs.readFileSync(absolutePath, 'utf8');
  const block = extractOpenRolesBlock(original);

  if (!block) {
    return null;
  }

  const roles = extractRoleObjects(original.slice(block.blockStart, block.blockEnd));
  const decisionMap = new Map(decisions.map((decision) => [`${decision.previousTitle}@@${decision.previousUrl}`, decision]));
  const nextRoles: string[] = [];
  let changed = false;

  for (const role of roles) {
    const decision = decisionMap.get(`${role.title}@@${role.url}`);
    if (!decision || decision.action === 'skip') {
      nextRoles.push(role.raw);
      continue;
    }

    changed = true;

    if (decision.action === 'remove') {
      continue;
    }

    let nextRaw = role.raw;
    if (decision.nextTitle) {
      nextRaw = replaceField(nextRaw, 'title', decision.nextTitle);
    }
    if (decision.nextLocation) {
      nextRaw = replaceField(nextRaw, 'location', decision.nextLocation);
    }
    if (decision.nextUrl) {
      nextRaw = replaceField(nextRaw, 'url', decision.nextUrl);
    }
    nextRoles.push(nextRaw);
  }

  if (!changed) {
    return null;
  }

  let updated = replaceOpenRoles(original, block, nextRoles);
  updated = updateLastUpdated(updated);
  fs.writeFileSync(absolutePath, updated);

  return {
    companyId: path.basename(companyFile, '.ts'),
    companyName: decisions[0]?.companyName ?? path.basename(companyFile, '.ts'),
    companyFile,
    decisions: decisions.filter((decision) => decision.action !== 'skip'),
    before: roles.length,
    after: nextRoles.length,
  };
}

function writeRefreshReport(sourceReportPath: string, decisions: ReadonlyArray<RoleDecision>, changes: ReadonlyArray<CompanyChange>): string {
  const report = {
    generatedAt: new Date().toISOString(),
    sourceAuditReport: path.relative(PROJECT_ROOT, sourceReportPath),
    summary: {
      totalDecisions: decisions.length,
      replaced: decisions.filter((decision) => decision.action === 'replace').length,
      removed: decisions.filter((decision) => decision.action === 'remove').length,
      skipped: decisions.filter((decision) => decision.action === 'skip').length,
      changedCompanies: changes.length,
    },
    decisions,
    changes,
  };

  const reportPath = path.join(RESEARCH_DIR, `open-role-refresh-${TODAY}.json`);
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  return path.relative(PROJECT_ROOT, reportPath);
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const report = loadReport(options.reportPath);
  const companyIndex = new Map(companies.map((company) => [company.id, company]));

  const targetCompanies = report.companies.filter((company) => {
    if (company.queue !== 'queue-a-repair' && company.queue !== 'queue-b-refresh') {
      return false;
    }

    if (!options.companyIds) {
      return true;
    }

    return options.companyIds.has(company.companyId);
  });

  const decisions: RoleDecision[] = [];
  for (const target of targetCompanies) {
    const company = companyIndex.get(target.companyId);
    if (!company) {
      continue;
    }

    for (const role of target.roles) {
      decisions.push(await resolveRole(company, target.companyFile, role as OpenRole));
    }
  }

  const byCompany = new Map<string, RoleDecision[]>();
  for (const decision of decisions) {
    if (decision.action === 'skip') {
      continue;
    }
    const existing = byCompany.get(decision.companyId) ?? [];
    existing.push(decision);
    byCompany.set(decision.companyId, existing);
  }

  const changes = [...byCompany.entries()]
    .map(([companyId, companyDecisions]) => {
      const companyFile = targetCompanies.find((company) => company.companyId === companyId)?.companyFile;
      if (!companyFile) {
        return null;
      }
      return applyDecisions(companyFile, companyDecisions);
    })
    .filter((change): change is CompanyChange => change !== null);

  const refreshReportPath = writeRefreshReport(options.reportPath, decisions, changes);
  const output = {
    refreshReportPath,
    summary: {
      totalDecisions: decisions.length,
      replaced: decisions.filter((decision) => decision.action === 'replace').length,
      removed: decisions.filter((decision) => decision.action === 'remove').length,
      skipped: decisions.filter((decision) => decision.action === 'skip').length,
      changedCompanies: changes.length,
    },
    changedCompanies: changes.map((change) => ({
      companyId: change.companyId,
      decisions: change.decisions.map((decision) => ({
        action: decision.action,
        previousTitle: decision.previousTitle,
        nextTitle: decision.nextTitle,
        nextUrl: decision.nextUrl,
        reason: decision.reason,
      })),
    })),
  };

  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
  process.exitCode = 1;
});
