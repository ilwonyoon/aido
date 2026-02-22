import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const companiesDir = path.join(__dirname, '../src/data/companies');

const SF_BAY = [
  'san francisco', 'palo alto', 'mountain view', 'sunnyvale', 'san jose', 'redwood city',
  'menlo park', 'cupertino', 'santa clara', 'oakland', 'berkeley', 'south san francisco',
  'san mateo', 'foster city',
];
const NYC = ['new york', 'brooklyn', 'manhattan'];
const LA = ['los angeles', 'santa monica', 'venice', 'culver city', 'hollywood'];
const SEATTLE = ['seattle', 'bellevue', 'redmond'];
const AUSTIN = ['austin'];
const BOSTON = ['boston', 'cambridge, ma'];
const LONDON = ['london'];
const TORONTO = ['toronto'];

const US_STATE_TOKENS = [
  'al','ak','az','ar','ca','co','ct','de','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','ma',
  'mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn',
  'tx','ut','vt','va','wa','wv','wi','wy','dc',
  'united states','usa','u.s.','u.s.a.',
];

function includesAny(hq, needles) {
  return needles.some((n) => hq.includes(n));
}

function inferRegion(headquarters, remote) {
  const hqRaw = String(headquarters || '').trim();
  const hq = hqRaw.toLowerCase();
  const remoteVal = String(remote || '').trim().toLowerCase();

  if (remoteVal === 'yes' && (!hq || hq === 'remote')) return 'remote-only';

  if (includesAny(hq, SF_BAY)) return 'sf-bay-area';
  if (includesAny(hq, NYC)) return 'nyc';
  if (includesAny(hq, LA)) return 'la';
  if (includesAny(hq, SEATTLE)) return 'seattle';
  if (includesAny(hq, AUSTIN)) return 'austin';
  if (includesAny(hq, BOSTON)) return 'boston';
  if (includesAny(hq, LONDON)) return 'london';
  if (includesAny(hq, TORONTO)) return 'toronto';

  const isUsByCountry = /,\s*usa\b|,\s*us\b|united states|u\.s\.a\.|u\.s\./.test(hq);
  const isUsByState = new RegExp(`,\\s*(${US_STATE_TOKENS.join('|')})(\\b|\\s*$)`, 'i').test(hqRaw);

  if (isUsByCountry || isUsByState) return 'other-us';
  return 'other-intl';
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

  if (/^\s*region\s*:/m.test(source)) {
    skipped += 1;
    continue;
  }

  const hqLine = source.match(/^(\s*)headquarters:\s*(['"])(.*?)\2\s*,\s*$/m);
  if (!hqLine) {
    missing += 1;
    continue;
  }

  const indent = hqLine[1];
  const headquarters = hqLine[3];
  const remoteMatch = source.match(/^\s*remote:\s*(['"])(.*?)\1\s*,\s*$/m);
  const remote = remoteMatch ? remoteMatch[2] : 'Unknown';

  const region = inferRegion(headquarters, remote);
  const insertion = `${hqLine[0]}\n${indent}region: '${region}' as const,`;

  const next = source.replace(hqLine[0], insertion);
  if (next !== source) {
    fs.writeFileSync(filePath, next);
    updated += 1;
  }
}

console.log(`normalize-location: updated=${updated}, skipped=${skipped}, missingHQ=${missing}`);
