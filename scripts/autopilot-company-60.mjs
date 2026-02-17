#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const PROJECT_DIR = '/Users/ilwonyoon/Documents/AIDO/aido';
const CLAUDE_BIN = '/Users/ilwonyoon/.local/bin/claude';
const LOG_FILE = path.join(PROJECT_DIR, 'scripts', 'autopilot-company-60.log');
const REPORT_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', `autopilot-60-report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
const TARGETS_FILE = path.join(PROJECT_DIR, 'src', 'data', 'research', 'autopilot-targets-60.json');

const ROUND_TIMEOUT_MS = 5 * 60 * 1000;
const VERIFY_TIMEOUT_MS = 8 * 60 * 1000;
const ROUND_MAX_TURNS = 12;
const VERIFY_MAX_TURNS = 20;
const BATCH_SIZE = 10;
const TARGET_COUNT = 60;
const CONCURRENCY = 4;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  fs.appendFileSync(LOG_FILE, `${line}\n`);
  process.stdout.write(`${line}\n`);
}

function slugifyName(rawName) {
  return rawName
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/\binc\.?\b/g, ' ')
    .replace(/\bcompany\b/g, ' ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function getExistingCompanyIds() {
  const dir = path.join(PROJECT_DIR, 'src', 'data', 'companies');
  return new Set(
    fs.readdirSync(dir)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  );
}

function loadTargets() {
  const existingIds = getExistingCompanyIds();

  const intakePath = path.join(PROJECT_DIR, 'src', 'data', 'research', 'new-company-intake-seedtable-69-2026-02-04.json');
  const intake = JSON.parse(fs.readFileSync(intakePath, 'utf8'));

  const galleryPath = path.join(PROJECT_DIR, 'src', 'data', 'research', 'startups-gallery-bay-area-unresearched-2026-01-27.json');
  const gallery = JSON.parse(fs.readFileSync(galleryPath, 'utf8'));

  const candidates = [];
  const seenNames = new Set();

  const addCandidate = (name, source) => {
    const normalizedName = name.trim();
    const key = normalizedName.toLowerCase();
    if (!normalizedName || seenNames.has(key)) return;
    const companyId = slugifyName(normalizedName);
    if (!companyId || existingIds.has(companyId)) return;
    seenNames.add(key);
    candidates.push({ name: normalizedName, companyId, source });
  };

  for (const item of intake.items) {
    if (item.status === 'queued') addCandidate(item.name, 'seedtable-69-queued');
  }

  for (const [city, info] of Object.entries(gallery.cities || {})) {
    const companies = info?.companies || [];
    for (const company of companies) {
      addCandidate(company.name, `startups-gallery-${city}`);
      if (candidates.length >= TARGET_COUNT) break;
    }
    if (candidates.length >= TARGET_COUNT) break;
  }

  const selected = candidates.slice(0, TARGET_COUNT);
  fs.writeFileSync(TARGETS_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), total: selected.length, items: selected }, null, 2));
  return selected;
}

function filePathFor(companyId) {
  return path.join(PROJECT_DIR, 'src', 'data', 'companies', `${companyId}.ts`);
}

function qaCheck(companyId) {
  const file = filePathFor(companyId);
  if (!fs.existsSync(file)) return { exists: false, issues: ['company file missing'] };

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

function buildResearchPrompt(name) {
  return `/company-researcher ${name}\n\nIMPORTANT INSTRUCTIONS:\n- Complete full pipeline end-to-end for this company only.\n- Run job-scraper first and sync openRoles from that result.\n- For fundingHistory, if lead investors are unknown (especially first round), use leadInvestors: [] (no placeholder text).\n- Collect visual assets via automation rules (ogImage/screenshot), do not guess URLs manually.\n- Do not ask clarification questions; proceed with best-effort for the most likely company match.\n- If data is limited, still generate the company file with strict unknown-handling rules.\n- Do NOT run git commands.`;
}

function buildBatchVerifyPrompt(batch, qaResults) {
  const lines = qaResults.map((q) => `- ${q.name} (${q.companyId}): ${q.issues.length ? q.issues.join(', ') : 'no local issue found'}`);
  const companyList = batch.map((c) => `- ${c.name} -> src/data/companies/${c.companyId}.ts`).join('\n');

  return `Batch verification pass for 10 companies.\n\nCompanies:\n${companyList}\n\nLocal QA findings:\n${lines.join('\n')}\n\nExecute strict 10/10 verification for all listed companies:\n1) fundingHistory dates and investor fields\n2) unknown lead investors must be leadInvestors: []\n3) openRoles consistency with job-scraper output\n4) visual assets via automation only (ogImage/screenshot)\n5) fix issues directly in files\n\nDo not run git commands.`;
}

function runClaude(prompt, label, timeoutMs, maxTurns) {
  return new Promise((resolve) => {
    log(`RUN ${label}`);
    const child = spawn(CLAUDE_BIN, ['-p', prompt, '--max-turns', String(maxTurns), '--dangerously-skip-permissions'], {
      cwd: PROJECT_DIR,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let finished = false;

    const timer = setTimeout(() => {
      if (finished) return;
      child.kill('SIGTERM');
      setTimeout(() => {
        if (!finished) child.kill('SIGKILL');
      }, 3000);
    }, timeoutMs);

    child.stdout.on('data', (d) => { stdout += d.toString(); });
    child.stderr.on('data', (d) => { stderr += d.toString(); });

    child.on('close', (code, signal) => {
      finished = true;
      clearTimeout(timer);

      if (stdout.trim()) fs.appendFileSync(LOG_FILE, `${stdout}\n`);
      if (stderr.trim()) fs.appendFileSync(LOG_FILE, `${stderr}\n`);

      const timedOut = signal === 'SIGTERM' || signal === 'SIGKILL';
      const ok = !timedOut && code === 0;
      log(`${ok ? 'OK' : 'FAIL'} ${label}${timedOut ? ' (timeout)' : ''}`);
      resolve({ ok, timedOut, code, signal });
    });
  });
}

async function runQueue(items, concurrency, fn) {
  const results = new Array(items.length);
  let idx = 0;

  async function worker() {
    while (true) {
      const current = idx;
      idx += 1;
      if (current >= items.length) return;
      results[current] = await fn(items[current], current);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

async function main() {
  fs.writeFileSync(LOG_FILE, `=== Autopilot 60 START ${new Date().toISOString()} ===\n`);

  const targets = loadTargets();
  if (targets.length < TARGET_COUNT) {
    log(`WARNING: requested ${TARGET_COUNT}, but only ${targets.length} candidates available.`);
  }

  log(`Selected ${targets.length} target companies.`);

  const report = {
    startedAt: new Date().toISOString(),
    targetCount: targets.length,
    batchSize: BATCH_SIZE,
    concurrency: CONCURRENCY,
    batches: [],
  };

  for (let i = 0; i < targets.length; i += BATCH_SIZE) {
    const batchIndex = Math.floor(i / BATCH_SIZE) + 1;
    const batch = targets.slice(i, i + BATCH_SIZE);

    const batchResult = {
      batch: batchIndex,
      companies: batch,
      round1: [],
      qaBeforeVerify: [],
      round2: null,
      qaAfterVerify: [],
    };

    log(`=== BATCH ${batchIndex} ROUND 1 (parallel research ${batch.length}) ===`);
    batchResult.round1 = await runQueue(batch, CONCURRENCY, async (company) => {
      const res = await runClaude(buildResearchPrompt(company.name), `R1 ${company.name}`, ROUND_TIMEOUT_MS, ROUND_MAX_TURNS);
      return {
        ...company,
        ...res,
        fileExistsAfterRound1: fs.existsSync(filePathFor(company.companyId)),
      };
    });

    batchResult.qaBeforeVerify = batch.map((company) => ({ ...company, ...qaCheck(company.companyId) }));

    log(`=== BATCH ${batchIndex} ROUND 2 (single batch verify) ===`);
    batchResult.round2 = await runClaude(
      buildBatchVerifyPrompt(batch, batchResult.qaBeforeVerify),
      `R2 Batch ${batchIndex}`,
      VERIFY_TIMEOUT_MS,
      VERIFY_MAX_TURNS
    );

    batchResult.qaAfterVerify = batch.map((company) => ({ ...company, ...qaCheck(company.companyId) }));

    const passed = batchResult.qaAfterVerify.filter((x) => x.issues.length === 0).length;
    log(`BATCH ${batchIndex} QA PASSED ${passed}/${batch.length}`);

    for (const q of batchResult.qaAfterVerify) {
      if (q.issues.length) log(`QA issues ${q.name}: ${q.issues.join(', ')}`);
    }

    report.batches.push(batchResult);
    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  }

  report.completedAt = new Date().toISOString();
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  const totalQa = report.batches.flatMap((b) => b.qaAfterVerify);
  const passed = totalQa.filter((x) => x.issues.length === 0).length;

  log(`=== Autopilot 60 COMPLETE | QA passed ${passed}/${totalQa.length} ===`);
  log(`Report: ${REPORT_FILE}`);
  log(`Targets: ${TARGETS_FILE}`);
}

await main();
