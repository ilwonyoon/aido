import * as fs from 'fs';
import * as path from 'path';
import { companies } from '../src/data/companies/index';

// Tier 0: fitScore 9 companies (highest priority)
const TIER_0_ORDER: ReadonlyArray<string> = [
  'anthropic',
  'cursor',
  'linear',
  'replit',
  'gamma',
  'lovable',
];

// Tier 1: fitScore 8 companies
const TIER_1_ORDER: ReadonlyArray<string> = [
  'elevenlabs',
  'granola',
  'mistral',
  'vercel',
  'midjourney',
  'harvey',
  'superhuman',
  'glean',
  'grammarly',
  'heygen',
  'cohere',
  'suno',
  'ambience-healthcare',
  'abridge',
  'listen-labs',
  'factory',
  'fal',
  'ivo',
  'resolve-ai',
  'reevo',
  'openrouter',
];

interface LogEntry {
  readonly companyId: string;
  readonly status: 'success' | 'error';
}

interface ResearchLog {
  readonly version: number;
  readonly lastRun: string | null;
  readonly runs: ReadonlyArray<LogEntry>;
}

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DEEP_RESEARCH_DIR = path.join(PROJECT_ROOT, 'src', 'data', 'deep-research');
const LOG_FILE = path.join(PROJECT_ROOT, 'scripts', 'daily-research-log.json');

function readLog(): ResearchLog {
  try {
    const raw = fs.readFileSync(LOG_FILE, 'utf-8');
    return JSON.parse(raw) as ResearchLog;
  } catch {
    return { version: 1, lastRun: null, runs: [] };
  }
}

function isCompleted(companyId: string, log: ResearchLog): boolean {
  // Check if deep-research markdown already exists
  const mdPath = path.join(DEEP_RESEARCH_DIR, `${companyId}.md`);
  if (fs.existsSync(mdPath)) {
    return true;
  }

  // Check if log has a successful run for this company
  const successfulRun = log.runs.find(
    (r) => r.companyId === companyId && r.status === 'success'
  );
  return successfulRun !== undefined;
}

function getCompanyName(companyId: string): string | undefined {
  const company = companies.find((c) => c.id === companyId);
  return company?.name;
}

function pickNext(): string {
  const log = readLog();

  // Try Tier 0 first
  for (const id of TIER_0_ORDER) {
    if (!isCompleted(id, log)) {
      const name = getCompanyName(id);
      if (name) {
        return `${name}|${id}|0`;
      }
    }
  }

  // Then Tier 1
  for (const id of TIER_1_ORDER) {
    if (!isCompleted(id, log)) {
      const name = getCompanyName(id);
      if (name) {
        return `${name}|${id}|1`;
      }
    }
  }

  return 'NONE';
}

const result = pickNext();
process.stdout.write(result);
