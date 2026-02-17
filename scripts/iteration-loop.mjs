#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const PROJECT_DIR = '/Users/ilwonyoon/Documents/AIDO/aido';
const CLAUDE_BIN = '/Users/ilwonyoon/.local/bin/claude';
const TARGETS_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'autopilot-targets-60.json');
const STATE_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'iteration-loop-state.json');
const METRICS_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'iteration-loop-metrics.json');
const LOG_FILE = path.join(PROJECT_DIR, 'scripts', 'iteration-loop.log');
const BLOCKED_COMPANIES = new Set(['nextai']);

const args = process.argv.slice(2);
const pass = (args.includes('--pass') ? args[args.indexOf('--pass') + 1] : 'all').toUpperCase(); // A|B|C|ALL
const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  fs.appendFileSync(LOG_FILE, `${line}\n`);
  console.log(line);
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function companyFile(companyId) {
  return path.join(PROJECT_DIR, 'src', 'data', 'companies', `${companyId}.ts`);
}

function norm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function resolveCompanyFile(companyId) {
  const direct = companyFile(companyId);
  if (fs.existsSync(direct)) return direct;

  const dir = path.join(PROJECT_DIR, 'src', 'data', 'companies');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).map(f => f.replace(/\.ts$/, ''));
  const target = norm(companyId);

  for (const id of files) {
    if (norm(id) === target) return path.join(dir, `${id}.ts`);
  }

  const contains = files
    .map(id => ({ id, n: norm(id) }))
    .filter(x => x.n && (target.includes(x.n) || x.n.includes(target)))
    .sort((a, b) => b.n.length - a.n.length);

  if (contains.length > 0) return path.join(dir, `${contains[0].id}.ts`);
  return direct;
}

function qa(companyId) {
  const p = resolveCompanyFile(companyId);
  if (!fs.existsSync(p)) return { exists: false, issues: ['missing file'] };
  const c = fs.readFileSync(p, 'utf8');
  const issues = [];
  if (!/openRoles\s*:\s*\[/.test(c)) issues.push('openRoles missing');
  if (!/fundingHistory\s*:\s*\[/.test(c)) issues.push('fundingHistory missing');
  if (/leadInvestors\s*:\s*\[[^\]]*(Unknown investor|TBD|unknown investor)[^\]]*\]/i.test(c)) issues.push('leadInvestors placeholder');
  if (!/(ogImage|screenshot)\s*:/.test(c)) issues.push('visual asset missing');
  return { exists: true, issues };
}

function extractWebsite(companyId) {
  const p = resolveCompanyFile(companyId);
  if (!fs.existsSync(p)) return null;
  const c = fs.readFileSync(p, 'utf8');
  return c.match(/website\s*:\s*['\"]([^'\"]+)['\"]/i)?.[1] || null;
}

function runCmd(cmd, argv, timeoutMs) {
  const r = spawnSync(cmd, argv, {
    cwd: PROJECT_DIR,
    encoding: 'utf8',
    timeout: timeoutMs,
    maxBuffer: 8 * 1024 * 1024,
  });
  if (r.stdout?.trim()) fs.appendFileSync(LOG_FILE, `${r.stdout}\n`);
  if (r.stderr?.trim()) fs.appendFileSync(LOG_FILE, `${r.stderr}\n`);
  const timedOut = !!r.error && r.error.code === 'ETIMEDOUT';
  return { ok: !timedOut && r.status === 0, timedOut, status: r.status, error: r.error?.message || null };
}

function runClaude(prompt, maxTurns, timeoutMs, label) {
  log(`RUN ${label}`);
  const r = runCmd(CLAUDE_BIN, ['-p', prompt, '--max-turns', String(maxTurns), '--dangerously-skip-permissions'], timeoutMs);
  log(`${r.ok ? 'OK' : 'FAIL'} ${label}${r.timedOut ? ' (timeout)' : ''}`);
  return r;
}

function runOg(companyId) {
  const website = extractWebsite(companyId);
  if (!website) return { ok: false, reason: 'website missing' };
  log(`RUN OG ${companyId}`);
  const r = runCmd('node', ['scripts/fetch-og-single.mjs', companyId, website], 4 * 60 * 1000);
  log(`${r.ok ? 'OK' : 'FAIL'} OG ${companyId}`);
  return r;
}

function promptA(name, companyId) {
  return `/company-researcher ${name}\n\nPASS A (fast create):\n- Create/complete src/data/companies/${companyId}.ts\n- Must include openRoles and fundingHistory baseline\n- If lead investor unknown => leadInvestors: []\n- No clarification questions; best-effort\n- Do NOT run git commands.`;
}

function promptB(name, companyId, issues) {
  return `/company-researcher ${name}\n\nPASS B (repair):\n- Fix src/data/companies/${companyId}.ts\n- Current QA issues: ${issues.join(', ')}\n- Enforce investor unknown rule (leadInvestors: [])\n- Keep openRoles synced with job-scraper\n- Do NOT run git commands.`;
}

function promptC(name, companyId, issues) {
  return `/company-researcher ${name}\n\nPASS C (strict verify):\n- Final verification for src/data/companies/${companyId}.ts\n- Remaining issues: ${issues.join(', ')}\n- Fix all remaining QA issues\n- Do NOT run git commands.`;
}

function phaseList(targets, phase, state) {
  const records = state?.records || {};
  const base = targets.filter(t => !BLOCKED_COMPANIES.has(t.companyId) && records[t.companyId]?.status !== 'blocked');
  if (phase === 'A') return base.filter(t => !qa(t.companyId).exists);
  if (phase === 'B') return base.filter(t => qa(t.companyId).issues.length > 0);
  if (phase === 'C') return base.filter(t => qa(t.companyId).issues.length > 0);
  return base;
}

function upsertState(state, companyId, patch) {
  state.records[companyId] = { ...(state.records[companyId] || {}), ...patch, updatedAt: new Date().toISOString() };
}

function saveMetrics(metrics, entry) {
  metrics.entries.push(entry);
  metrics.updatedAt = new Date().toISOString();
  writeJson(METRICS_FILE, metrics);
}

function summarizeMetrics(metrics) {
  const byPass = { A: [], B: [], C: [] };
  for (const e of metrics.entries) byPass[e.pass]?.push(e.durationSec);
  const avg = (arr) => arr.length ? +(arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(1) : 0;
  return {
    totalRuns: metrics.entries.length,
    avgSecA: avg(byPass.A),
    avgSecB: avg(byPass.B),
    avgSecC: avg(byPass.C),
  };
}

function main() {
  const targets = readJson(TARGETS_FILE, { items: [] }).items || [];
  const selected = Number.isFinite(limit) && limit > 0 ? targets.slice(0, limit) : targets;

  const state = readJson(STATE_FILE, { startedAt: new Date().toISOString(), records: {} });
  const metrics = readJson(METRICS_FILE, { startedAt: new Date().toISOString(), entries: [] });

  const phases = pass === 'ALL' ? ['A', 'B', 'C'] : [pass];

  log(`START iteration loop | phases=${phases.join(',')} | targets=${selected.length}`);

  for (const ph of phases) {
    let list = phaseList(selected, ph, state);
    log(`PHASE ${ph} candidates=${list.length}`);

    for (const t of list) {
      const q0 = qa(t.companyId);
      const start = Date.now();
      let res;

      if (ph === 'A') {
        res = runClaude(promptA(t.name, t.companyId), 12, 8 * 60 * 1000, `A ${t.companyId}`);
      } else if (ph === 'B') {
        res = runClaude(promptB(t.name, t.companyId, q0.issues), 18, 10 * 60 * 1000, `B ${t.companyId}`);
      } else {
        res = runClaude(promptC(t.name, t.companyId, q0.issues), 20, 10 * 60 * 1000, `C ${t.companyId}`);
      }

      let q1 = qa(t.companyId);
      let ogRes = null;
      if (q1.exists && q1.issues.includes('visual asset missing')) {
        ogRes = runOg(t.companyId);
        q1 = qa(t.companyId);
      }

      const durationSec = Math.round((Date.now() - start) / 1000);
      const done = q1.exists && q1.issues.length === 0;
      const blocked = !done && q1.issues.includes('missing file') && BLOCKED_COMPANIES.has(t.companyId);

      upsertState(state, t.companyId, {
        name: t.name,
        lastPass: ph,
        status: done ? 'done' : (blocked ? 'blocked' : 'needs_work'),
        issues: q1.issues,
        lastResult: res,
        lastOgResult: ogRes,
        durationSec,
      });
      writeJson(STATE_FILE, state);

      saveMetrics(metrics, {
        at: new Date().toISOString(),
        pass: ph,
        companyId: t.companyId,
        ok: res.ok,
        durationSec,
        issuesAfter: q1.issues,
      });

      log(`${done ? 'DONE' : (blocked ? 'BLOCKED' : 'PENDING')} ${ph} ${t.companyId} | ${durationSec}s | issues=${q1.issues.join(',') || 'none'}`);
    }
  }

  const summary = summarizeMetrics(metrics);
  const finalTargets = selected.map(t => ({ ...t, ...qa(t.companyId) }));
  const passed = finalTargets.filter(x => x.exists && x.issues.length === 0).length;
  const created = finalTargets.filter(x => x.exists).length;

  log(`SUMMARY created=${created}/${selected.length} passed=${passed}/${selected.length} metrics=${JSON.stringify(summary)}`);
}

main();
