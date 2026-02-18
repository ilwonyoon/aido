#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const PROJECT_DIR = '/Users/ilwonyoon/Documents/AIDO/aido';
const CLAUDE_BIN = '/Users/ilwonyoon/.local/bin/claude';
const TARGETS_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'autopilot-targets-60.json');
const COMPANIES_DIR = path.join(PROJECT_DIR, 'src', 'data', 'companies');
const LOG_FILE = path.join(PROJECT_DIR, 'scripts', 'quality-upgrade-low-score.log');
const REPORT_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'quality-upgrade-report.json');

const args = process.argv.slice(2);
const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : 10;
const floor = args.includes('--floor') ? Number(args[args.indexOf('--floor') + 1]) : 84;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  fs.appendFileSync(LOG_FILE, `${line}\n`);
  console.log(line);
}

function run(cmd, argv, timeoutMs = 12 * 60 * 1000) {
  const res = spawnSync(cmd, argv, {
    cwd: PROJECT_DIR,
    encoding: 'utf8',
    timeout: timeoutMs,
    maxBuffer: 8 * 1024 * 1024,
  });
  if (res.stdout?.trim()) fs.appendFileSync(LOG_FILE, `${res.stdout}\n`);
  if (res.stderr?.trim()) fs.appendFileSync(LOG_FILE, `${res.stderr}\n`);
  const timedOut = !!res.error && res.error.code === 'ETIMEDOUT';
  return { ok: !timedOut && res.status === 0, timedOut, status: res.status, error: res.error?.message || null };
}

function norm(v) {
  return String(v || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function resolveId(targetId, allIds) {
  if (allIds.includes(targetId)) return targetId;
  const t = norm(targetId);
  for (const id of allIds) {
    if (norm(id) === t) return id;
  }
  const contains = allIds
    .map((id) => ({ id, n: norm(id) }))
    .filter((x) => x.n && (t.includes(x.n) || x.n.includes(t)))
    .sort((a, b) => b.n.length - a.n.length);
  return contains[0]?.id || null;
}

function scoreCompany(companyId) {
  const s = run('node', ['scripts/score-company-quality.mjs', companyId], 60 * 1000);
  if (!s.ok) return null;
  const out = fs.readFileSync(LOG_FILE, 'utf8');
  const blocks = out.split(`Company: ${companyId}`);
  const last = blocks[blocks.length - 1] || '';
  const m = last.match(/Score:\s*(\d+)\/100/);
  return m ? Number(m[1]) : null;
}

function qa(companyId) {
  const file = path.join(COMPANIES_DIR, `${companyId}.ts`);
  if (!fs.existsSync(file)) return { exists: false, issues: ['missing file'] };
  const content = fs.readFileSync(file, 'utf8');
  const issues = [];
  if (!/openRoles\s*:\s*\[/.test(content)) issues.push('openRoles missing');
  if (!/fundingHistory\s*:\s*\[/.test(content)) issues.push('fundingHistory missing');
  if (/leadInvestors\s*:\s*\[[^\]]*(Unknown investor|TBD|unknown investor)[^\]]*\]/i.test(content)) issues.push('leadInvestors placeholder');
  if (!/(ogImage|screenshot)\s*:/.test(content)) issues.push('visual asset missing');
  return { exists: true, issues };
}

function extractWebsite(companyId) {
  const file = path.join(COMPANIES_DIR, `${companyId}.ts`);
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, 'utf8');
  return content.match(/website\s*:\s*['"]([^'"]+)['"]/i)?.[1] || null;
}

function runOg(companyId) {
  const website = extractWebsite(companyId);
  if (!website) return { ok: false, reason: 'website missing' };
  return run('node', ['scripts/fetch-og-single.mjs', companyId, website], 4 * 60 * 1000);
}

function prompt(name, companyId) {
  return `/company-researcher ${name}

Quality Upgrade Pass for existing file: src/data/companies/${companyId}.ts

Goal: raise completeness/quality score with concrete, source-backed updates.
Required upgrades:
- Strengthen competitors (>=3 high-quality entries with whyTheyWin)
- Enrich cultureInsights (>=2 with source URLs)
- Improve growthMetrics signals/tailwinds/headwinds with concrete statements
- Ensure sources include >=5 links and >=3 distinct domains
- Keep investor rule: unknown lead investors must be leadInvestors: []
- Keep openRoles consistent with job-scraper results
- Collect visual asset via automation rule if missing
- Do NOT run git commands`;
}

function main() {
  const targets = JSON.parse(fs.readFileSync(TARGETS_FILE, 'utf8')).items || [];
  const allIds = fs.readdirSync(COMPANIES_DIR).filter((f) => f.endsWith('.ts')).map((f) => f.replace(/\.ts$/, ''));

  const mapped = targets
    .map((t) => ({ ...t, resolvedId: resolveId(t.companyId, allIds) }))
    .filter((t) => t.resolvedId);

  const ranked = mapped
    .map((t) => ({ ...t, score: scoreCompany(t.resolvedId) }))
    .filter((t) => Number.isFinite(t.score))
    .sort((a, b) => a.score - b.score);

  const selected = ranked.filter((r) => r.score < floor).slice(0, Math.max(1, limit));
  log(`START quality-upgrade | limit=${limit} floor=${floor} selected=${selected.length}`);

  const report = {
    startedAt: new Date().toISOString(),
    limit,
    floor,
    selected: selected.map((s) => ({ targetId: s.companyId, resolvedId: s.resolvedId, beforeScore: s.score })),
    results: [],
  };

  for (const row of selected) {
    const q0 = qa(row.resolvedId);
    log(`RUN ${row.resolvedId} (${row.score})`);
    const res = run(CLAUDE_BIN, ['-p', prompt(row.name, row.resolvedId), '--max-turns', '28', '--dangerously-skip-permissions'], 18 * 60 * 1000);
    let q1 = qa(row.resolvedId);
    let ogRes = null;
    if (q1.exists && q1.issues.includes('visual asset missing')) {
      ogRes = runOg(row.resolvedId);
      q1 = qa(row.resolvedId);
    }
    const after = scoreCompany(row.resolvedId);
    report.results.push({
      targetId: row.companyId,
      resolvedId: row.resolvedId,
      beforeScore: row.score,
      afterScore: after,
      delta: Number.isFinite(after) ? after - row.score : null,
      qaBefore: q0.issues,
      qaAfter: q1.issues,
      run: res,
      og: ogRes,
    });
    log(`DONE ${row.resolvedId} ${row.score} -> ${after ?? 'n/a'} | issues=${q1.issues.join(',') || 'none'}`);
    fs.writeFileSync(REPORT_FILE, `${JSON.stringify(report, null, 2)}\n`);
  }

  report.completedAt = new Date().toISOString();
  fs.writeFileSync(REPORT_FILE, `${JSON.stringify(report, null, 2)}\n`);
  log(`COMPLETE upgraded=${report.results.length}`);
}

main();
