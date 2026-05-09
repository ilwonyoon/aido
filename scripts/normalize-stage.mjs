import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const companiesDir = path.join(__dirname, '../src/data/companies');

function normalizeFundingStage(stage) {
  const s = String(stage || '').toLowerCase().trim();

  if (s.includes('pre-seed') || s.includes('pre-series a')) return 'pre-seed';
  if (s === 'seed') return 'seed';
  if (s.startsWith('series a')) return 'series-a';
  if (s.startsWith('series b')) return 'series-b';
  if (s.startsWith('series c')) return 'series-c';
  if (s.startsWith('series d') || s.startsWith('series e') || s.startsWith('series f')) return 'series-d-plus';
  if (s.includes('public') || s.includes('private') || s.includes('bootstrapped')) return 'growth';

  return 'other';
}

const files = fs
  .readdirSync(companiesDir)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

let updated = 0;
let skipped = 0;
let missing = 0;

for (const file of files) {
  const filePath = path.join(companiesDir, file);
  const source = fs.readFileSync(filePath, 'utf-8');

  if (/^\s*normalizedStage\s*:/m.test(source)) {
    skipped += 1;
    continue;
  }

  const stageLine = source.match(/^(\s*)stage:\s*(['"])([^'"\n]+)\2\s*,\s*$/m);
  if (!stageLine) {
    missing += 1;
    continue;
  }

  const indent = stageLine[1];
  const stageValue = stageLine[3];
  const normalized = normalizeFundingStage(stageValue);
  const insertion = `${stageLine[0]}\n${indent}normalizedStage: '${normalized}' as const,`;

  const next = source.replace(stageLine[0], insertion);
  if (next !== source) {
    fs.writeFileSync(filePath, next);
    updated += 1;
  }
}

console.log(`normalize-stage: updated=${updated}, skipped=${skipped}, missingStage=${missing}`);
