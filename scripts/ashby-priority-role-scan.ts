import fs from 'fs';
import path from 'path';

import { companies } from '../src/data/companies/index';
import type { Company, OpenRole } from '../src/data/types';
import { getCompanyQualityScore } from '../src/lib/companyScoring';

type ScanStatus =
  | 'ashby-current-design-roles'
  | 'ashby-no-design-roles'
  | 'ashby-fetch-failed'
  | 'ats-or-design-signal'
  | 'no-fast-signal';

interface AshbyPosting {
  readonly id: string;
  readonly title: string;
  readonly location?: string;
  readonly url: string;
  readonly roleFamily: 'product-design' | 'design-engineering' | 'other-design' | 'out-of-scope';
  readonly roleSignal: 'founding' | 'first-design-hire' | 'senior' | 'staff' | 'lead' | 'head' | 'standard';
}

interface CompanyScanResult {
  readonly rank: number;
  readonly priorityScore: number;
  readonly priorityBand: 'P0' | 'P1' | 'P2' | 'P3';
  readonly companyId: string;
  readonly companyName: string;
  readonly fitScore: number;
  readonly aiNativeLevel: Company['aiNativeLevel'];
  readonly headquarters: string;
  readonly lastUpdated: string;
  readonly currentOpenRoles: number;
  readonly knownAshbySlugs: string[];
  readonly discoveredAshbySlugs: string[];
  readonly atsHints: string[];
  readonly designSignalUrls: string[];
  readonly ashbyDesignPostings: AshbyPosting[];
  readonly status: ScanStatus;
  readonly recommendedAction: 'update-openRoles' | 'remove-stale-openRoles' | 'run-job-scraper' | 'manual-review' | 'defer';
  readonly notes: string[];
}

interface ScanReport {
  readonly generatedAt: string;
  readonly totalCompanies: number;
  readonly scannedCompanies: number;
  readonly summary: Record<ScanStatus, number> & {
    readonly updateOpenRoles: number;
    readonly runJobScraper: number;
    readonly manualReview: number;
  };
  readonly methodology: string[];
  readonly results: CompanyScanResult[];
}

type MutableScanSummary = {
  -readonly [K in keyof ScanReport['summary']]: number;
};

const PROJECT_ROOT = process.cwd();
const RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'research');
const TODAY = new Date().toISOString().slice(0, 10);
const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

const SF_BAY_AREA = [
  'San Francisco',
  'Palo Alto',
  'Mountain View',
  'Menlo Park',
  'Sunnyvale',
  'San Jose',
  'Berkeley',
  'Oakland',
  'Redwood City',
  'Foster City',
  'Santa Clara',
  'San Mateo',
  'San Francisco Bay Area',
];

const DESIGN_INCLUDE = [
  /\bfounding product designer\b/i,
  /\bfounding designer\b/i,
  /\bfirst designer\b/i,
  /\bfirst design hire\b/i,
  /\bproduct designer\b/i,
  /\bproduct design manager\b/i,
  /\bdirector,?\s+product design\b/i,
  /\bhead of product design\b/i,
  /\bstaff product designer\b/i,
  /\bprincipal product designer\b/i,
  /\blead product designer\b/i,
  /\bux designer\b/i,
  /\bui\/ux designer\b/i,
];

const DESIGN_ENGINEERING = [
  /\bdesign engineer\b/i,
  /\bdesigner who codes\b/i,
  /\bfrontend designer\b/i,
  /\bcreative technologist\b/i,
];

const DESIGN_EXCLUDE = [
  /\bbrand designer\b/i,
  /\bweb\s*&\s*brand\b/i,
  /\bvisual designer\b/i,
  /\bgraphic designer\b/i,
  /\bmarketing designer\b/i,
  /\bpresentation designer\b/i,
  /\bweb designer\b/i,
  /\bmotion designer\b/i,
  /\bmotion graphics designer\b/i,
  /\bcreative designer\b/i,
  /\bperformance creative\b/i,
  /\bdesign recruiter\b/i,
  /\bdesign sourcer\b/i,
  /\bproduct\s*&\s*design sourcer\b/i,
  /\bpeople business partner\b/i,
  /\bux researcher\b/i,
  /\buser researcher\b/i,
  /\bintern\b/i,
  /\bapprentice\b/i,
];

function parseArgs(argv: string[]): { limit?: number; json: boolean } {
  const limitIndex = argv.indexOf('--limit');
  const limit = limitIndex >= 0 ? Number(argv[limitIndex + 1]) : undefined;
  if (limit !== undefined && (!Number.isFinite(limit) || limit < 1)) {
    throw new Error('--limit must be a positive integer');
  }
  return {
    limit,
    json: argv.includes('--json'),
  };
}

function unique<T>(values: ReadonlyArray<T>): T[] {
  return [...new Set(values)];
}

function isSfBayArea(company: Company): boolean {
  return SF_BAY_AREA.some((city) => company.headquarters.includes(city));
}

function priorityScore(company: Company): number {
  const fit = company.tracking.fitScore * 100;
  const ai = company.aiNativeLevel === 'A' ? 45 : company.aiNativeLevel === 'B' ? 30 : company.aiNativeLevel === 'C' ? 10 : 0;
  const sf = isSfBayArea(company) ? 30 : 0;
  const roles = company.openRoles.length > 0 ? 25 : 0;
  const quality = Math.min(getCompanyQualityScore(company), 120);
  return fit + ai + sf + roles + quality;
}

function priorityBand(score: number): CompanyScanResult['priorityBand'] {
  if (score >= 900) return 'P0';
  if (score >= 780) return 'P1';
  if (score >= 650) return 'P2';
  return 'P3';
}

function rankCompanies(source: ReadonlyArray<Company>): Company[] {
  return [...source].sort((left, right) => {
    const scoreDiff = priorityScore(right) - priorityScore(left);
    if (scoreDiff !== 0) return scoreDiff;
    if (left.lastUpdated !== right.lastUpdated) return left.lastUpdated.localeCompare(right.lastUpdated);
    return left.name.localeCompare(right.name);
  });
}

function extractAshbySlug(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.host !== 'jobs.ashbyhq.com') return null;
    return parsed.pathname.split('/').filter(Boolean)[0] ?? null;
  } catch {
    return null;
  }
}

function extractAshbyLinks(text: string): string[] {
  const links = [...text.matchAll(/https?:\/\/jobs\.ashbyhq\.com\/[^"' <>)\\]+/gi)].map((match) =>
    match[0].replace(/[.,;]+$/, '')
  );
  const paths = [...text.matchAll(/href=["'](\/[^"']*)["']/gi)]
    .map((match) => match[1])
    .filter((href) => href.includes('jobs.ashbyhq.com'));
  return unique([...links, ...paths]);
}

function extractAtsHints(text: string): string[] {
  const urls = [
    ...text.matchAll(/https?:\/\/(?:jobs\.ashbyhq\.com|job-boards\.greenhouse\.io|boards\.greenhouse\.io|jobs\.lever\.co)\/[^"' <>)\\]+/gi),
  ].map((match) => match[0].replace(/[.,;]+$/, ''));
  return unique(urls).slice(0, 20);
}

function candidateCareerUrls(company: Company): string[] {
  const sourceUrls = company.sources
    .map((source) => source.url)
    .filter((url) => /(career|jobs|hiring|ashbyhq|greenhouse|lever)/i.test(url));
  const website = company.website.replace(/\/$/, '');
  return unique([...sourceUrls, `${website}/careers`, `${website}/jobs`]).slice(0, 5);
}

async function fetchText(url: string, timeoutMs = 9000): Promise<{ ok: boolean; status?: number; finalUrl: string; text: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      headers: BROWSER_HEADERS,
      redirect: 'follow',
      signal: controller.signal,
    });
    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      text: await response.text(),
    };
  } catch {
    return { ok: false, finalUrl: url, text: '' };
  } finally {
    clearTimeout(timeout);
  }
}

function extractJsonObjectAfter(text: string, marker: string): string | null {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) return null;

  let index = markerIndex + marker.length;
  while (index < text.length && /\s/.test(text[index])) index += 1;
  if (text[index] !== '{') return null;

  const start = index;
  let depth = 0;
  let inString = false;
  let quote = '"';
  let escaped = false;

  for (; index < text.length; index += 1) {
    const char = text[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) inString = false;
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) return text.slice(start, index + 1);
    }
  }

  return null;
}

function roleFamily(title: string): AshbyPosting['roleFamily'] {
  if (DESIGN_ENGINEERING.some((pattern) => pattern.test(title))) return 'design-engineering';
  if (DESIGN_EXCLUDE.some((pattern) => pattern.test(title))) return 'out-of-scope';
  if (DESIGN_INCLUDE.some((pattern) => pattern.test(title))) return 'product-design';
  if (/\bdesigner\b|\bdesign\b/i.test(title)) return 'other-design';
  return 'out-of-scope';
}

function roleSignal(title: string): AshbyPosting['roleSignal'] {
  if (/\bfirst designer\b|\bfirst design hire\b/i.test(title)) return 'first-design-hire';
  if (/\bfounding\b/i.test(title)) return 'founding';
  if (/\bstaff\b/i.test(title)) return 'staff';
  if (/\bsenior\b/i.test(title)) return 'senior';
  if (/\blead\b/i.test(title)) return 'lead';
  if (/\bhead\b|\bdirector\b|\bvp\b/i.test(title)) return 'head';
  return 'standard';
}

function isDesignSignal(text: string): boolean {
  return DESIGN_INCLUDE.some((pattern) => pattern.test(text)) || DESIGN_ENGINEERING.some((pattern) => pattern.test(text));
}

async function scanAshbySlug(slug: string): Promise<{ ok: boolean; postings: AshbyPosting[]; note?: string }> {
  const boardUrl = `https://jobs.ashbyhq.com/${slug}`;
  const response = await fetchText(boardUrl);
  if (!response.ok) {
    return { ok: false, postings: [], note: `Ashby board failed: ${response.status ?? 'fetch-error'}` };
  }

  const jsonText = extractJsonObjectAfter(response.text, 'window.__appData =');
  if (!jsonText) {
    return { ok: false, postings: [], note: 'Ashby app data not found' };
  }

  const appData = JSON.parse(jsonText) as {
    readonly jobBoard?: {
      readonly jobPostings?: Array<{
        readonly id: string;
        readonly title: string;
        readonly locationName?: string;
        readonly location?: { readonly name?: string };
      }>;
    };
  };

  const rawPostings = appData.jobBoard?.jobPostings ?? [];
  const postings = rawPostings
    .map((posting) => {
      const family = roleFamily(posting.title);
      return {
        id: posting.id,
        title: posting.title,
        location: posting.locationName ?? posting.location?.name,
        url: `https://jobs.ashbyhq.com/${slug}/${posting.id}`,
        roleFamily: family,
        roleSignal: roleSignal(posting.title),
      };
    })
    .filter((posting) => posting.roleFamily !== 'out-of-scope');

  return { ok: true, postings };
}

function currentRoleTitles(company: Company): string[] {
  return company.openRoles.map((role) => role.title);
}

function currentRoleUrls(company: Company): string[] {
  return company.openRoles.map((role) => role.url);
}

function hasSameRole(currentRoles: ReadonlyArray<OpenRole>, posting: AshbyPosting): boolean {
  const normalizedPosting = posting.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  return currentRoles.some((role) => {
    const normalizedCurrent = role.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    return normalizedCurrent === normalizedPosting || role.url === posting.url;
  });
}

function decideAction(company: Company, status: ScanStatus, postings: ReadonlyArray<AshbyPosting>, atsHints: ReadonlyArray<string>): CompanyScanResult['recommendedAction'] {
  if (status === 'ashby-current-design-roles') {
    const hasNew = postings.some((posting) => !hasSameRole(company.openRoles, posting));
    if (hasNew) return 'update-openRoles';
    return 'manual-review';
  }

  if (status === 'ashby-no-design-roles' && company.openRoles.some((role) => role.url.includes('ashbyhq.com'))) {
    return 'remove-stale-openRoles';
  }

  if (status === 'ats-or-design-signal' || atsHints.length > 0) return 'run-job-scraper';
  if (status === 'ashby-fetch-failed') return 'manual-review';
  return 'defer';
}

async function scanCompany(company: Company, rank: number): Promise<CompanyScanResult> {
  const knownAshbySlugs = unique(
    [...currentRoleUrls(company), ...company.sources.map((source) => source.url)]
      .map(extractAshbySlug)
      .filter((slug): slug is string => Boolean(slug))
  );

  const atsHints: string[] = [];
  const discoveredAshbySlugs: string[] = [];
  const designSignalUrls: string[] = [];
  const notes: string[] = [];

  if (knownAshbySlugs.length === 0) {
    for (const url of candidateCareerUrls(company)) {
      const response = await fetchText(url);
      if (!response.ok) continue;
      const hints = extractAtsHints(response.text);
      atsHints.push(...hints);
      const slugs = [...extractAshbyLinks(response.text), ...hints]
        .map(extractAshbySlug)
        .filter((slug): slug is string => Boolean(slug));
      discoveredAshbySlugs.push(...slugs);
      if (isDesignSignal(response.text)) {
        designSignalUrls.push(response.finalUrl);
      }
    }
  }

  const allSlugs = unique([...knownAshbySlugs, ...discoveredAshbySlugs]);
  const ashbyDesignPostings: AshbyPosting[] = [];
  let ashbyFailed = false;

  for (const slug of allSlugs) {
    const result = await scanAshbySlug(slug);
    if (!result.ok) {
      ashbyFailed = true;
      if (result.note) notes.push(`${slug}: ${result.note}`);
      continue;
    }
    ashbyDesignPostings.push(...result.postings);
  }

  let status: ScanStatus = 'no-fast-signal';
  if (ashbyDesignPostings.length > 0) status = 'ashby-current-design-roles';
  else if (allSlugs.length > 0 && !ashbyFailed) status = 'ashby-no-design-roles';
  else if (ashbyFailed) status = 'ashby-fetch-failed';
  else if (atsHints.length > 0 || designSignalUrls.length > 0) status = 'ats-or-design-signal';

  if (currentRoleTitles(company).length > 0) notes.push(`current roles: ${currentRoleTitles(company).join('; ')}`);
  if (ashbyDesignPostings.length > 0) notes.push(`ashby design roles: ${ashbyDesignPostings.map((role) => role.title).join('; ')}`);

  const score = priorityScore(company);
  return {
    rank,
    priorityScore: score,
    priorityBand: priorityBand(score),
    companyId: company.id,
    companyName: company.name,
    fitScore: company.tracking.fitScore,
    aiNativeLevel: company.aiNativeLevel,
    headquarters: company.headquarters,
    lastUpdated: company.lastUpdated,
    currentOpenRoles: company.openRoles.length,
    knownAshbySlugs,
    discoveredAshbySlugs: unique(discoveredAshbySlugs),
    atsHints: unique(atsHints),
    designSignalUrls: unique(designSignalUrls),
    ashbyDesignPostings: unique(ashbyDesignPostings.map((posting) => posting.url)).map((url) => ashbyDesignPostings.find((posting) => posting.url === url)!),
    status,
    recommendedAction: decideAction(company, status, ashbyDesignPostings, atsHints),
    notes,
  };
}

async function mapLimit<T, R>(values: ReadonlyArray<T>, limit: number, worker: (value: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(values.length);
  let nextIndex = 0;

  async function run(): Promise<void> {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(values[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, run));
  return results;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const ranked = rankCompanies(companies);
  const selected = options.limit ? ranked.slice(0, options.limit) : ranked;

  const results = await mapLimit(selected, 8, async (company, index) => {
    process.stderr.write(`Scanning #${index + 1} ${company.name}\n`);
    return scanCompany(company, index + 1);
  });

  const summary = results.reduce<MutableScanSummary>(
    (accumulator, result) => {
      accumulator[result.status] += 1;
      if (result.recommendedAction === 'update-openRoles') accumulator.updateOpenRoles += 1;
      if (result.recommendedAction === 'run-job-scraper') accumulator.runJobScraper += 1;
      if (result.recommendedAction === 'manual-review') accumulator.manualReview += 1;
      return accumulator;
    },
    {
      'ashby-current-design-roles': 0,
      'ashby-no-design-roles': 0,
      'ashby-fetch-failed': 0,
      'ats-or-design-signal': 0,
      'no-fast-signal': 0,
      updateOpenRoles: 0,
      runJobScraper: 0,
      manualReview: 0,
    }
  );

  const report: ScanReport = {
    generatedAt: new Date().toISOString(),
    totalCompanies: companies.length,
    scannedCompanies: results.length,
    summary,
    methodology: [
      'Rank all companies by fitScore, AI-native level, SF Bay Area location, existing openRoles, and company quality score.',
      'Use existing Ashby URLs from openRoles and sources first.',
      'For companies without known Ashby URLs, fetch only likely careers/jobs pages and record ATS/design signals.',
      'Parse Ashby job boards from window.__appData.jobBoard.jobPostings; do not send full HTML to the model.',
      'Classify only product-design and design-engineering roles; exclude brand, marketing, research, web, motion, intern, and presentation roles.',
    ],
    results,
  };

  fs.mkdirSync(RESEARCH_DIR, { recursive: true });
  const outputPath = path.join(RESEARCH_DIR, `ashby-priority-role-scan-${TODAY}.json`);
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);

  const compact = {
    reportPath: path.relative(PROJECT_ROOT, outputPath),
    totalCompanies: report.totalCompanies,
    scannedCompanies: report.scannedCompanies,
    summary,
    topUpdateCandidates: results
      .filter((result) => result.recommendedAction === 'update-openRoles')
      .slice(0, 20)
      .map((result) => ({
        rank: result.rank,
        id: result.companyId,
        name: result.companyName,
        currentOpenRoles: result.currentOpenRoles,
        ashbyDesignRoles: result.ashbyDesignPostings.map((posting) => posting.title),
      })),
    topScraperCandidates: results
      .filter((result) => result.recommendedAction === 'run-job-scraper')
      .slice(0, 20)
      .map((result) => ({
        rank: result.rank,
        id: result.companyId,
        name: result.companyName,
        atsHints: result.atsHints.slice(0, 3),
        designSignalUrls: result.designSignalUrls.slice(0, 3),
      })),
  };

  process.stdout.write(`${JSON.stringify(options.json ? compact : compact, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
