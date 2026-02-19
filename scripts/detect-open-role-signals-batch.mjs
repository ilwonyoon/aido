#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const COMPANIES_DIR = path.join(ROOT, 'src', 'data', 'companies');
const TODAY = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
const batch = Number(args.includes('--batch') ? args[args.indexOf('--batch') + 1] : 1);
const size = Number(args.includes('--size') ? args[args.indexOf('--size') + 1] : 10);
const targetsFileArg = args.includes('--targets') ? args[args.indexOf('--targets') + 1] : null;

if (!Number.isFinite(batch) || batch < 1 || !Number.isFinite(size) || size < 1) {
  console.error('Usage: node scripts/detect-open-role-signals-batch.mjs --batch <n> [--size 10] [--targets <json>]');
  process.exit(1);
}

const hostLastHit = new Map();
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
async function rateLimitByHost(urlStr) {
  try {
    const host = new URL(urlStr).host;
    const now = Date.now();
    const last = hostLastHit.get(host) || 0;
    const wait = 2200 - (now - last);
    if (wait > 0) await sleep(wait);
    hostLastHit.set(host, Date.now());
  } catch {}
}

async function fetchPage(urlStr, timeoutMs = 15000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await rateLimitByHost(urlStr);
    const res = await fetch(urlStr, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AIDO-RoleSignalScanner/1.0)',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    const text = await res.text();
    return { ok: true, status: res.status, finalUrl: res.url, text };
  } catch (err) {
    return { ok: false, error: String(err), finalUrl: urlStr };
  } finally {
    clearTimeout(t);
  }
}

function extractCompanyMeta(content, id) {
  const name = content.match(/name:\s*['"`]([^'"`]+)['"`]/)?.[1] || id;
  const website = content.match(/website:\s*['"`](https?:\/\/[^'"`]+)['"`]/)?.[1] || null;
  const lastUpdated = content.match(/lastUpdated:\s*['"`]([^'"`]+)['"`]/)?.[1] || null;
  return { id, name, website, lastUpdated };
}

function hasEmptyOpenRoles(content) {
  const m = content.match(/openRoles:\s*\[([\s\S]*?)\](?=,?\s*\n\s*\w)/);
  return !!m && m[1].trim() === '';
}

function extractLikelyCareerUrls(content, website) {
  const urls = new Set();
  const sourceUrls = [...content.matchAll(/url:\s*['"`](https?:\/\/[^'"`]+)['"`]/g)].map((m) => m[1]);
  for (const u of sourceUrls) {
    if (/career|job|jobs|hiring|work-with-us/i.test(u)) urls.add(u);
  }
  if (website) {
    urls.add(`${website.replace(/\/$/, '')}/careers`);
    urls.add(`${website.replace(/\/$/, '')}/jobs`);
  }
  return [...urls];
}

function guessAtsUrls(company, careerUrls) {
  const set = new Set();
  const slugBase = company.id.toLowerCase();
  const slugSimple = slugBase.replace(/[^a-z0-9]/g, '');

  const seeds = [slugBase, slugSimple, slugBase.replace(/-ai$/, ''), slugSimple.replace(/ai$/, '')].filter(Boolean);
  for (const s of seeds) {
    set.add(`https://jobs.ashbyhq.com/${s}`);
    set.add(`https://job-boards.greenhouse.io/${s}`);
    set.add(`https://boards.greenhouse.io/${s}`);
    set.add(`https://jobs.lever.co/${s}`);
  }
  for (const u of careerUrls) {
    if (/ashbyhq|greenhouse|lever/i.test(u)) set.add(u);
  }
  return [...set];
}

function detectSignals(pageText) {
  const t = (pageText || '').toLowerCase();
  const designSignal = /(product designer|senior product designer|staff product designer|founding designer|design lead|ux designer|ui designer|head of design|product design)/i.test(pageText || '');
  const hiringSignal = /(open roles|job openings|we.?re hiring|join our team|positions|careers|hiring now)/i.test(pageText || '');
  const closedSignal = /(no open positions|no current openings|we aren't hiring|position closed|job not found|404)/i.test(pageText || '');
  const atsSignal = /(jobs\.ashbyhq\.com|greenhouse|jobs\.lever\.co|workdayjobs|smartrecruiters)/i.test(t);
  return { designSignal, hiringSignal, closedSignal, atsSignal };
}

async function fallbackSearch(company, domainHint) {
  const q = encodeURIComponent(`"${company.name}" "product designer" site:${domainHint} 2026`);
  const url = `https://duckduckgo.com/html/?q=${q}`;
  const r = await fetchPage(url, 12000);
  if (!r.ok) return { found: false };
  const txt = (r.text || '').toLowerCase();
  const found = txt.includes(company.name.toLowerCase().split(' ')[0]) && (txt.includes('product designer') || txt.includes('design'));
  return { found, evidenceUrl: url };
}

function classifyResult(evidences) {
  const hasHigh = evidences.some((e) => e.type === 'design-role');
  if (hasHigh) return 'HIGH';
  const hasMedium = evidences.some((e) => (e.type === 'hiring-signal' || e.type === 'ats-board') && e.source !== 'search-fallback');
  if (hasMedium) return 'MEDIUM';
  return 'LOW';
}

async function scanCompany(company, content) {
  const evidences = [];
  const careerUrls = extractLikelyCareerUrls(content, company.website).slice(0, 6);
  const atsUrls = guessAtsUrls(company, careerUrls).slice(0, 8);

  for (const url of careerUrls) {
    const r = await fetchPage(url);
    if (!r.ok || r.status >= 400) continue;
    const sig = detectSignals(r.text);
    if (sig.designSignal) evidences.push({ type: 'design-role', url: r.finalUrl, source: 'careers-page' });
    else if (sig.hiringSignal) evidences.push({ type: 'hiring-signal', url: r.finalUrl, source: 'careers-page' });
    if (sig.atsSignal) evidences.push({ type: 'ats-board', url: r.finalUrl, source: 'careers-page' });
  }

  for (const url of atsUrls) {
    const r = await fetchPage(url);
    if (!r.ok || r.status >= 400) continue;
    const sig = detectSignals(r.text);
    if (sig.designSignal) evidences.push({ type: 'design-role', url: r.finalUrl, source: 'ats' });
    else if (!sig.closedSignal && (sig.hiringSignal || sig.atsSignal)) evidences.push({ type: 'ats-board', url: r.finalUrl, source: 'ats' });
  }

  if (evidences.length === 0) {
    const domainHint = company.website ? new URL(company.website).host.replace(/^www\./, '') : `${company.id}.com`;
    const fb = await fallbackSearch(company, domainHint);
    if (fb.found) evidences.push({ type: 'hiring-signal', url: fb.evidenceUrl, source: 'search-fallback' });
  }

  const dedup = [];
  const seen = new Set();
  for (const e of evidences) {
    const k = `${e.type}|${e.url}`;
    if (seen.has(k)) continue;
    seen.add(k);
    dedup.push(e);
  }

  const signalLevel = classifyResult(dedup);
  return {
    companyId: company.id,
    companyName: company.name,
    website: company.website,
    signalLevel,
    evidenceCount: dedup.length,
    evidenceUrls: dedup.map((e) => ({ type: e.type, url: e.url, source: e.source })),
    nextAction: signalLevel === 'HIGH' ? 'run-job-scraper' : signalLevel === 'MEDIUM' ? 'manual-verify-careers' : 'defer',
    checkedAt: new Date().toISOString(),
  };
}

function loadNoRoleTargets() {
  if (targetsFileArg) {
    return JSON.parse(fs.readFileSync(path.resolve(ROOT, targetsFileArg), 'utf8'));
  }
  const files = fs.readdirSync(COMPANIES_DIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
  const all = [];
  for (const f of files) {
    const id = f.replace(/\.ts$/, '');
    const content = fs.readFileSync(path.join(COMPANIES_DIR, f), 'utf8');
    if (!hasEmptyOpenRoles(content)) continue;
    all.push(extractCompanyMeta(content, id));
  }
  all.sort((a, b) => a.id.localeCompare(b.id));
  return all;
}

async function main() {
  const targets = loadNoRoleTargets();
  const start = (batch - 1) * size;
  const selected = targets.slice(start, start + size);
  const results = [];

  for (const c of selected) {
    const file = path.join(COMPANIES_DIR, `${c.id}.ts`);
    const content = fs.readFileSync(file, 'utf8');
    const r = await scanCompany(c, content);
    results.push(r);
  }

  const summary = {
    high: results.filter((r) => r.signalLevel === 'HIGH').length,
    medium: results.filter((r) => r.signalLevel === 'MEDIUM').length,
    low: results.filter((r) => r.signalLevel === 'LOW').length,
  };

  const report = {
    date: TODAY,
    batch,
    size,
    targetsSource: targetsFileArg || 'live-no-open-roles',
    selectedCount: selected.length,
    selectedIds: selected.map((s) => s.id),
    summary,
    results,
  };

  const outPath = path.join(ROOT, 'src', 'data', 'research', `open-role-signals-batch-${batch}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ ...report, reportPath: `src/data/research/open-role-signals-batch-${batch}.json` }, null, 2));
}

await main();
