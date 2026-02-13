#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const LOG_PATH = path.join(ROOT, 'src', 'data', 'research', 'skill-optimization-log.json');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) continue;
    const key = token.replace(/^--/, '');
    const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : 'true';
    out[key] = value;
    if (value !== 'true') i += 1;
  }
  return out;
}

function ensureLogFile() {
  if (!fs.existsSync(path.dirname(LOG_PATH))) {
    fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
  }
  if (!fs.existsSync(LOG_PATH)) {
    const initial = {
      version: 1,
      createdAt: new Date().toISOString(),
      runs: [],
    };
    fs.writeFileSync(LOG_PATH, `${JSON.stringify(initial, null, 2)}\n`);
  }
}

function readLog() {
  ensureLogFile();
  return JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8'));
}

function writeLog(data) {
  fs.writeFileSync(LOG_PATH, `${JSON.stringify(data, null, 2)}\n`);
}

function toNum(v, fallback = 0) {
  if (v === undefined) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function tokenizeEstimate(chars) {
  return Math.round(chars / 4);
}

function parseList(v) {
  if (!v) return [];
  return v
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);
}

function usage() {
  console.log('Usage:');
  console.log('node scripts/log-skill-iteration.mjs \\');
  console.log('  --company <company-id> \\');
  console.log('  --phase <baseline|improved|validated> \\');
  console.log('  --job-input-chars <n> --job-output-chars <n> \\');
  console.log('  --research-input-chars <n> --research-output-chars <n> \\');
  console.log('  --quality-score <0-100> --quality-bar <0-100> \\');
  console.log('  --satisfaction <1-5> \\');
  console.log('  --challenges "item1|item2" \\');
  console.log('  --improvements "item1|item2" \\');
  console.log('  --notes "free text"');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help === 'true' || !args.company) {
    usage();
    process.exit(args.company ? 0 : 1);
  }

  const log = readLog();
  const now = new Date().toISOString();
  const runId = `run-${now.slice(0, 10)}-${String(log.runs.length + 1).padStart(3, '0')}`;

  const jobInputChars = toNum(args['job-input-chars']);
  const jobOutputChars = toNum(args['job-output-chars']);
  const researchInputChars = toNum(args['research-input-chars']);
  const researchOutputChars = toNum(args['research-output-chars']);

  const entry = {
    runId,
    date: now,
    companyId: args.company,
    phase: args.phase || 'baseline',
    tokenUsage: {
      jobScraper: {
        input: tokenizeEstimate(jobInputChars),
        output: tokenizeEstimate(jobOutputChars),
        total: tokenizeEstimate(jobInputChars + jobOutputChars),
      },
      companyResearcher: {
        input: tokenizeEstimate(researchInputChars),
        output: tokenizeEstimate(researchOutputChars),
        total: tokenizeEstimate(researchInputChars + researchOutputChars),
      },
      total: tokenizeEstimate(jobInputChars + jobOutputChars + researchInputChars + researchOutputChars),
      estimationMethod: 'chars/4',
    },
    quality: {
      score: toNum(args['quality-score']),
      bar: toNum(args['quality-bar']),
      gap: toNum(args['quality-score']) - toNum(args['quality-bar']),
      satisfaction: toNum(args.satisfaction),
    },
    challenges: parseList(args.challenges),
    improvements: parseList(args.improvements),
    notes: args.notes || '',
  };

  log.runs.push(entry);
  writeLog(log);

  console.log(`Logged iteration: ${runId}`);
  console.log(`Company: ${entry.companyId}`);
  console.log(`Estimated tokens (total): ${entry.tokenUsage.total}`);
  console.log(`Quality: ${entry.quality.score}/100 (bar ${entry.quality.bar})`);
}

main();

