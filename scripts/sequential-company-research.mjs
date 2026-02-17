#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const PROJECT_DIR = '/Users/ilwonyoon/Documents/AIDO/aido';
const CLAUDE_BIN = '/Users/ilwonyoon/.local/bin/claude';
const TARGETS_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'autopilot-targets-60.json');
const CHECKPOINT_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'sequential-progress.json');
const LOG_FILE = path.join(PROJECT_DIR, 'scripts', 'sequential-company-research.log');

const args = process.argv.slice(2);
const batchArg = args.includes('--batch') ? Number(args[args.indexOf('--batch') + 1]) : null;
const retryFailedOnly = args.includes('--retry-failed-only');
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  fs.appendFileSync(LOG_FILE, `${line}\n`);
  console.log(line);
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function filePathFor(companyId) {
  return path.join(PROJECT_DIR, 'src', 'data', 'companies', `${companyId}.ts`);
}

function qaCheck(companyId) {
  const file = filePathFor(companyId);
  if (!fs.existsSync(file)) return { exists: false, issues: ['missing file'] };

  const content = fs.readFileSync(file, 'utf8');
  const issues = [];

  if (!/openRoles\s*:\s*\[/.test(content)) issues.push('openRoles missing');
  if (!/fundingHistory\s*:\s*\[/.test(content)) issues.push('fundingHistory missing');
  if (/leadInvestors\s*:\s*\[[^\]]*(Unknown investor|TBD|unknown investor)[^\]]*\]/i.test(content)) {
    issues.push('leadInvestors placeholder');
  }
  if (!/(ogImage|screenshot)\s*:/.test(content)) issues.push('visual asset missing');

  return { exists: true, issues };
}

function extractWebsite(companyId) {
  const file = filePathFor(companyId);
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, 'utf8');
  const m = content.match(/website\s*:\s*['\"]([^'\"]+)['\"]/);
  return m?.[1] || null;
}

function runCommand(cmd, argv, opts = {}) {
  const timeout = opts.timeout ?? 20 * 60 * 1000;
  const result = spawnSync(cmd, argv, {
    cwd: PROJECT_DIR,
    encoding: 'utf8',
    timeout,
    maxBuffer: 8 * 1024 * 1024,
  });

  if (result.stdout?.trim()) fs.appendFileSync(LOG_FILE, `${result.stdout}\n`);
  if (result.stderr?.trim()) fs.appendFileSync(LOG_FILE, `${result.stderr}\n`);

  const timedOut = !!result.error && result.error.code === 'ETIMEDOUT';
  return {
    ok: !timedOut && result.status === 0,
    timedOut,
    status: result.status,
    error: result.error?.message || null,
  };
}

function runClaude(prompt, maxTurns, timeoutMs, label) {
  log(`RUN ${label}`);
  const r = runCommand(CLAUDE_BIN, ['-p', prompt, '--max-turns', String(maxTurns), '--dangerously-skip-permissions'], { timeout: timeoutMs });
  log(`${r.ok ? 'OK' : 'FAIL'} ${label}${r.timedOut ? ' (timeout)' : ''}`);
  return r;
}

function runFetchOg(companyId) {
  const website = extractWebsite(companyId);
  if (!website) return { ok: false, reason: 'website missing' };
  log(`RUN OG ${companyId} (${website})`);
  const r = runCommand('node', ['scripts/fetch-og-single.mjs', companyId, website], { timeout: 4 * 60 * 1000 });
  log(`${r.ok ? 'OK' : 'FAIL'} OG ${companyId}`);
  return r;
}

function buildResearchPrompt(name, companyId) {
  return `/company-researcher ${name}\n\nIMPORTANT INSTRUCTIONS:\n- Complete full pipeline end-to-end for this company only.\n- Run job-scraper first and sync openRoles from that result.\n- For fundingHistory, if lead investors are unknown (especially first round), use leadInvestors: [] (no placeholder text).\n- Collect visual assets via automation rules (ogImage/screenshot), do not guess URLs manually.\n- Do not ask clarification questions; proceed best-effort.\n- If data is limited, still generate src/data/companies/${companyId}.ts with strict unknown-handling rules.\n- Do NOT run git commands.`;
}

function buildRepairPrompt(name, companyId, issues) {
  return `/company-researcher ${name}\n\nREPAIR PASS:\n- Fix src/data/companies/${companyId}.ts only.\n- Current issues: ${issues.join(', ')}\n- Enforce: unknown lead investors => leadInvestors: []\n- Ensure openRoles exists and matches job-scraper output\n- Ensure visual asset fields are handled via automation rules\n- Do NOT run git commands.`;
}

function selectTargets(all) {
  let items = all;
  if (batchArg && Number.isFinite(batchArg) && batchArg > 0) {
    const start = (batchArg - 1) * 10;
    items = items.slice(start, start + 10);
  }
  if (Number.isFinite(limitArg) && limitArg > 0) {
    items = items.slice(0, limitArg);
  }
  return items;
}

function main() {
  if (!fs.existsSync(TARGETS_FILE)) {
    console.error(`Missing targets: ${TARGETS_FILE}`);
    process.exit(1);
  }

  const targetsData = readJson(TARGETS_FILE, { items: [] });
  const targets = selectTargets(targetsData.items || []);
  const checkpoint = readJson(CHECKPOINT_FILE, { startedAt: new Date().toISOString(), records: {} });

  log(`START sequential mode | targets=${targets.length}${batchArg ? ` | batch=${batchArg}` : ''}${retryFailedOnly ? ' | retryFailedOnly=true' : ''}`);

  for (const t of targets) {
    const prev = checkpoint.records[t.companyId];
    if (prev?.status === 'done') {
      log(`SKIP done ${t.companyId}`);
      continue;
    }
    if (retryFailedOnly && prev && prev.status !== 'failed') {
      log(`SKIP non-failed ${t.companyId}`);
      continue;
    }

    const record = {
      name: t.name,
      companyId: t.companyId,
      attempts: (prev?.attempts || 0) + 1,
      updatedAt: new Date().toISOString(),
      status: 'running',
      issues: [],
      logs: [],
    };

    const r1 = runClaude(buildResearchPrompt(t.name, t.companyId), 28, 18 * 60 * 1000, `R1 ${t.name}`);
    record.logs.push({ step: 'research', ...r1 });

    let qa = qaCheck(t.companyId);

    if (qa.exists && qa.issues.includes('visual asset missing')) {
      const og = runFetchOg(t.companyId);
      record.logs.push({ step: 'og', ...og });
      qa = qaCheck(t.companyId);
    }

    if (qa.issues.length > 0) {
      const r2 = runClaude(buildRepairPrompt(t.name, t.companyId, qa.issues), 20, 10 * 60 * 1000, `R2 ${t.name}`);
      record.logs.push({ step: 'repair', ...r2 });
      qa = qaCheck(t.companyId);

      if (qa.exists && qa.issues.includes('visual asset missing')) {
        const og2 = runFetchOg(t.companyId);
        record.logs.push({ step: 'og-after-repair', ...og2 });
        qa = qaCheck(t.companyId);
      }
    }

    record.issues = qa.issues;
    record.exists = qa.exists;
    record.status = qa.exists && qa.issues.length === 0 ? 'done' : 'failed';
    record.updatedAt = new Date().toISOString();

    checkpoint.records[t.companyId] = record;
    checkpoint.updatedAt = new Date().toISOString();
    writeJson(CHECKPOINT_FILE, checkpoint);

    log(`${record.status.toUpperCase()} ${t.companyId}${record.issues.length ? ` | issues=${record.issues.join(', ')}` : ''}`);
  }

  const records = Object.values(checkpoint.records);
  const done = records.filter((r) => r.status === 'done').length;
  const failed = records.filter((r) => r.status === 'failed').length;
  const running = records.filter((r) => r.status === 'running').length;

  log(`SUMMARY done=${done} failed=${failed} running=${running} totalTracked=${records.length}`);
  writeJson(CHECKPOINT_FILE, checkpoint);
}

main();
