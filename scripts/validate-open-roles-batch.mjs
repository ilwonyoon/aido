#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const ROOT = process.cwd();
const COMPANIES_DIR = path.join(ROOT, 'src', 'data', 'companies');
const TODAY = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
const batch = Number(args.includes('--batch') ? args[args.indexOf('--batch') + 1] : 1);
const size = Number(args.includes('--size') ? args[args.indexOf('--size') + 1] : 10);
const targetsFileArg = args.includes('--targets') ? args[args.indexOf('--targets') + 1] : null;

if (!Number.isFinite(batch) || batch < 1 || !Number.isFinite(size) || size < 1) {
  console.error('Usage: node scripts/validate-open-roles-batch.mjs --batch <n> [--size 10]');
  process.exit(1);
}

function run(cmd, argv) {
  const r = spawnSync(cmd, argv, { cwd: ROOT, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
  if (r.status !== 0) {
    throw new Error(`${cmd} failed: ${r.stderr || r.stdout}`);
  }
  return r.stdout;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const hostLastHit = new Map();

async function rateLimitByHost(urlStr) {
  let host = '';
  try {
    host = new URL(urlStr).host;
  } catch {
    return;
  }
  const now = Date.now();
  const last = hostLastHit.get(host) || 0;
  const wait = 2200 - (now - last);
  if (wait > 0) await sleep(wait);
  hostLastHit.set(host, Date.now());
}

function extractOpenRolesBlock(content) {
  const marker = 'openRoles: [';
  const start = content.indexOf(marker);
  if (start === -1) return null;

  let i = start + marker.length;
  let depth = 1;
  while (i < content.length && depth > 0) {
    const ch = content[i];
    if (ch === '[') depth += 1;
    if (ch === ']') depth -= 1;
    i += 1;
  }
  if (depth !== 0) return null;

  const blockStart = start + marker.length;
  const blockEnd = i - 1;
  return { start, blockStart, blockEnd, end: i };
}

function extractRoleObjects(blockText) {
  const roles = [];
  let i = 0;
  while (i < blockText.length) {
    if (blockText[i] !== '{') {
      i += 1;
      continue;
    }
    const objStart = i;
    let depth = 1;
    i += 1;
    while (i < blockText.length && depth > 0) {
      if (blockText[i] === '{') depth += 1;
      if (blockText[i] === '}') depth -= 1;
      i += 1;
    }
    const objEnd = i;
    const raw = blockText.slice(objStart, objEnd);
    const title = raw.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1] || null;
    const url = raw.match(/url:\s*['"`](https?:\/\/[^'"`]+)['"`]/)?.[1] || null;
    if (title && url) {
      roles.push({ raw, title, url });
    }
  }
  return roles;
}

function isJobLikeUrl(urlStr) {
  return /\/jobs?\//i.test(urlStr) || /job-boards\.greenhouse\.io/i.test(urlStr) || /jobs\.ashbyhq\.com/i.test(urlStr) || /boards\.greenhouse\.io/i.test(urlStr) || /jobs\.lever\.co/i.test(urlStr);
}

function isSpecificJobUrl(urlStr) {
  return [
    /job-boards\.greenhouse\.io\/[\w-]+\/jobs\/\d+/i,
    /boards\.greenhouse\.io\/[\w-]+\/jobs\/\d+/i,
    /jobs\.ashbyhq\.com\/[\w%.+-]+\/[\da-f-]{36}/i,
    /jobs\.lever\.co\/[\w-]+\/[\da-f-]{36}/i,
    /\/jobs\/\d{5,}/i,
    /\/careers\/[\w-]+-\d{5,}/i,
  ].some((re) => re.test(urlStr));
}

function isGenericCareerPage(urlStr) {
  try {
    const u = new URL(urlStr);
    return /^\/(careers?|jobs?)\/?$/i.test(u.pathname);
  } catch {
    return false;
  }
}

function hasClosedSignals(text) {
  return [
    /\b404\b/i,
    /\bpage not found\b/i,
    /\bjob (is )?no longer available\b/i,
    /\bposition (has been )?filled\b/i,
    /\bno longer accepting applications\b/i,
    /\bthis position has been closed\b/i,
    /\bjob posting has expired\b/i,
    /\bthis role is no longer available\b/i,
  ].some((re) => re.test(text));
}

function hasBlockedSignals(status, text) {
  if ([401, 403, 429, 503].includes(status)) return true;
  return /(captcha|access denied|forbidden|temporarily unavailable|rate limit)/i.test(text);
}

async function fetchWithTimeout(urlStr, timeoutMs = 20000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await rateLimitByHost(urlStr);
    const res = await fetch(urlStr, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AIDO-RoleValidator/1.0)',
        Accept: 'text/html,application/xhtml+xml',
      },
      signal: controller.signal,
    });
    const text = await res.text();
    return { ok: true, status: res.status, finalUrl: res.url, text };
  } catch (err) {
    return { ok: false, error: String(err) };
  } finally {
    clearTimeout(t);
  }
}

async function fallbackSearch(companyName, roleTitle, domainHint) {
  const q = encodeURIComponent(`"${companyName}" "${roleTitle}" site:${domainHint} 2026`);
  const url = `https://duckduckgo.com/html/?q=${q}`;
  const r = await fetchWithTimeout(url, 20000);
  if (!r.ok) return { found: false, reason: 'search-failed' };

  const text = r.text || '';
  const titleWords = roleTitle.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 4).slice(0, 3);
  const hasTitleWord = titleWords.some((w) => text.toLowerCase().includes(w));
  const hasDomain = text.toLowerCase().includes(domainHint.toLowerCase());
  const closedMention = /(no longer available|expired|filled|closed)/i.test(text);

  if (hasDomain && hasTitleWord && !closedMention) return { found: true, reason: 'search-match' };
  return { found: false, reason: closedMention ? 'search-closed' : 'search-no-match' };
}

async function validateRole(companyName, role) {
  const jobLike = isJobLikeUrl(role.url);
  const specificJob = isSpecificJobUrl(role.url);
  const result = await fetchWithTimeout(role.url);
  if (!result.ok) {
    const host = new URL(role.url).host;
    const s = await fallbackSearch(companyName, role.title, host);
    if (s.found) return { active: true, reason: `fallback:${s.reason}`, finalUrl: role.url };
    return { active: !jobLike, reason: `fallback:${s.reason}`, finalUrl: role.url };
  }

  const body = result.text || '';
  const status = result.status;
  const finalUrl = result.finalUrl || role.url;

  if (status >= 400) {
    if ([401, 403, 429, 503].includes(status)) {
      const host = new URL(role.url).host;
      const s = await fallbackSearch(companyName, role.title, host);
      if (s.found) return { active: true, reason: `fallback:${s.reason}`, finalUrl };
      return { active: !jobLike, reason: `fallback:${s.reason}`, finalUrl };
    }
    return { active: false, reason: `http-${status}`, finalUrl };
  }
  if (hasClosedSignals(body)) return { active: false, reason: 'closed-signal', finalUrl };

  if (isJobLikeUrl(role.url) && isGenericCareerPage(finalUrl)) {
    return { active: false, reason: 'redirected-to-generic-careers', finalUrl };
  }

  if (hasBlockedSignals(status, body)) {
    const host = new URL(role.url).host;
    const s = await fallbackSearch(companyName, role.title, host);
    if (s.found) return { active: true, reason: `fallback:${s.reason}`, finalUrl };
    return { active: !jobLike, reason: `fallback:${s.reason}`, finalUrl };
  }

  if (!specificJob && jobLike) {
    const words = role.title.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 4).slice(0, 3);
    const titleSeen = words.some((w) => body.toLowerCase().includes(w));
    if (!titleSeen) {
      const host = new URL(role.url).host;
      const s = await fallbackSearch(companyName, role.title, host);
      if (s.found) return { active: true, reason: `fallback:${s.reason}`, finalUrl };
      return { active: false, reason: `fallback:${s.reason}`, finalUrl };
    }
  }

  return { active: true, reason: 'url-active', finalUrl };
}

function updateLastUpdated(content, dateStr) {
  if (/lastUpdated:\s*['"`][^'"`]+['"`]/.test(content)) {
    return content.replace(/lastUpdated:\s*['"`][^'"`]+['"`]/, `lastUpdated: '${dateStr}'`);
  }
  return content;
}

function reindentObject(raw, indent) {
  const lines = raw.split('\n');
  const nonEmpty = lines.filter((l) => l.trim().length > 0);
  const minIndent = nonEmpty.length ? Math.min(...nonEmpty.map((l) => (l.match(/^\s*/) || [''])[0].length)) : 0;
  return lines.map((l) => `${indent}${l.slice(minIndent)}`).join('\n');
}

function replaceOpenRoles(content, block, keptRaw) {
  const before = content.slice(0, block.blockStart);
  const after = content.slice(block.blockEnd);
  if (keptRaw.length === 0) {
    return `${before}${after}`;
  }
  const openRolesLineStart = content.lastIndexOf('\n', block.start) + 1;
  const openRolesIndent = (content.slice(openRolesLineStart, block.start).match(/^\s*/) || [''])[0];
  const roleIndent = `${openRolesIndent}  `;
  const formatted = keptRaw.map((r) => reindentObject(r, roleIndent));
  const joined = `\n${formatted.join(',\n')}\n${openRolesIndent}`;
  return `${before}${joined}${after}`;
}

async function main() {
  const companies = targetsFileArg
    ? JSON.parse(fs.readFileSync(path.resolve(ROOT, targetsFileArg), 'utf8'))
    : JSON.parse(run('node', ['scripts/list-companies-with-roles.mjs', '--json']));
  const start = (batch - 1) * size;
  const selected = companies.slice(start, start + size);
  if (selected.length === 0) {
    console.log(JSON.stringify({ batch, size, selected: 0, done: true }, null, 2));
    return;
  }

  const report = {
    batch,
    size,
    targets: targetsFileArg || 'live',
    date: TODAY,
    selectedIds: selected.map((c) => c.id),
    checked: [],
    totalRolesBefore: 0,
    totalRolesAfter: 0,
    totalRemoved: 0,
    changedFiles: [],
  };

  for (const company of selected) {
    const filePath = path.join(COMPANIES_DIR, `${company.id}.ts`);
    const original = fs.readFileSync(filePath, 'utf8');
    const block = extractOpenRolesBlock(original);
    if (!block) continue;
    const blockText = original.slice(block.blockStart, block.blockEnd);
    const roleObjects = extractRoleObjects(blockText);

    const keptRaw = [];
    let removed = 0;
    const roleChecks = [];

    for (const role of roleObjects) {
      const v = await validateRole(company.name, role);
      roleChecks.push({ title: role.title, url: role.url, ...v });
      if (v.active) keptRaw.push(role.raw);
      else removed += 1;
    }

    let updated = replaceOpenRoles(original, block, keptRaw);
    updated = updateLastUpdated(updated, TODAY);

    if (updated !== original) {
      fs.writeFileSync(filePath, updated);
      report.changedFiles.push(`src/data/companies/${company.id}.ts`);
    }

    report.totalRolesBefore += roleObjects.length;
    report.totalRolesAfter += keptRaw.length;
    report.totalRemoved += removed;
    report.checked.push({
      id: company.id,
      name: company.name,
      before: roleObjects.length,
      after: keptRaw.length,
      removed,
      roleChecks,
    });
  }

  const outPath = path.join(ROOT, 'src', 'data', 'research', `role-validation-batch-${batch}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ ...report, reportPath: `src/data/research/role-validation-batch-${batch}.json` }, null, 2));
}

await main();
