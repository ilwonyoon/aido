#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const COMPANIES_DIR = path.join(ROOT, 'src', 'data', 'companies');

const GOLD_COMPANIES = ['anthropic', 'cursor', 'linear', 'replit', 'gamma', 'lovable'];

const SPECIFIC_JOB_PATTERNS = [
  /greenhouse\.io\/[\w-]+\/jobs\/\d+/i,
  /jobs\.ashbyhq\.com\/[\w%.+-]+\/[\da-f-]{36}/i,
  /jobs\.lever\.co\/[\w-]+\/[\da-f-]{36}/i,
  /\/jobs\/[\da-f-]{36}/i,
  /\/jobs\/\d{5,}/,
  /\/careers\/[\w-]+-\d{5,}/,
  /\/careers\/jobs\/\d+/,
  /linkedin\.com\/jobs\/view\/\d+/i,
];

const GENERIC_CAREERS_PATTERNS = [
  /^https?:\/\/[^/]+\/careers\/?$/i,
  /^https?:\/\/[^/]+\/jobs\/?$/i,
  /^https?:\/\/jobs\.ashbyhq\.com\/[\w%-]+\/?$/i,
];

function readCompanyFile(companyId) {
  const filePath = path.join(COMPANIES_DIR, `${companyId}.ts`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Company file not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function exists(text, key) {
  return new RegExp(`${key}\\s*:`).test(text);
}

function extractArrayBlock(text, key) {
  const marker = `${key}: [`;
  const start = text.indexOf(marker);
  if (start === -1) return '';

  let i = start + marker.length;
  let depth = 1;
  while (i < text.length && depth > 0) {
    const ch = text[i];
    if (ch === '[') depth += 1;
    if (ch === ']') depth -= 1;
    i += 1;
  }
  return text.slice(start + marker.length, i - 1);
}

function countObjectsInArrayBlock(block) {
  if (!block.trim()) return 0;
  return (block.match(/\{\s*/g) || []).length;
}

function extractUrls(text) {
  return [...text.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]);
}

function classifyUrl(url) {
  for (const pattern of SPECIFIC_JOB_PATTERNS) {
    if (pattern.test(url)) return 'specific-job';
  }
  for (const pattern of GENERIC_CAREERS_PATTERNS) {
    if (pattern.test(url)) return 'generic-careers';
  }
  return 'ambiguous';
}

function sourceDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'invalid';
  }
}

function scoreCompany(companyId) {
  const text = readCompanyFile(companyId);

  let score = 0;
  const issues = [];

  const requiredKeys = [
    'description',
    'website',
    'headquarters',
    'remote',
    'aiTypes',
    'markets',
    'category',
    'industries',
    'stage',
    'totalFunding',
    'founders',
    'openRoles',
    'sources',
    'lastUpdated',
  ];

  const presentCount = requiredKeys.filter((k) => exists(text, k)).length;
  score += Math.round((presentCount / requiredKeys.length) * 35);
  if (presentCount < requiredKeys.length) {
    issues.push(`Missing required keys: ${requiredKeys.filter((k) => !exists(text, k)).join(', ')}`);
  }

  const competitorsCount = countObjectsInArrayBlock(extractArrayBlock(text, 'competitors'));
  const sourcesUrls = extractUrls(extractArrayBlock(text, 'sources'));
  const foundersCount = countObjectsInArrayBlock(extractArrayBlock(text, 'founders'));
  const cultureCount = countObjectsInArrayBlock(extractArrayBlock(text, 'cultureInsights'));
  const challengesCount = (extractArrayBlock(text, 'aiDesignChallenges').match(/'/g) || []).length / 2;
  const rolesBlock = extractArrayBlock(text, 'openRoles');
  const roleUrls = extractUrls(rolesBlock);

  if (competitorsCount >= 3) score += 8;
  else issues.push(`competitors low (${competitorsCount})`);

  if (foundersCount >= 1) score += 8;
  else issues.push('founders missing');

  if (cultureCount >= 2) score += 5;
  else issues.push(`cultureInsights low (${cultureCount})`);

  if (challengesCount >= 3) score += 6;
  else issues.push(`aiDesignChallenges low (${challengesCount})`);

  const sourceDomains = new Set(sourcesUrls.map(sourceDomain).filter((d) => d !== 'invalid'));
  if (sourcesUrls.length >= 5) score += 10;
  else issues.push(`sources low (${sourcesUrls.length})`);

  if (sourceDomains.size >= 3) score += 8;
  else issues.push(`source domain diversity low (${sourceDomains.size})`);

  const hasOfficial = sourcesUrls.some((u) => /https?:\/\/([^.]+\.)?[^/]+\//i.test(u) && !u.includes('linkedin.com') && !u.includes('techcrunch.com'));
  if (hasOfficial) score += 4;
  else issues.push('official/company primary source not obvious');

  if (roleUrls.length === 0) {
    score += 8;
  } else {
    const specificCount = roleUrls.filter((u) => classifyUrl(u) === 'specific-job').length;
    const ratio = specificCount / roleUrls.length;
    score += Math.round(ratio * 8);
    if (ratio < 1) {
      issues.push(`openRoles URL quality: ${specificCount}/${roleUrls.length} specific-job URLs`);
    }
  }

  const industriesBlock = extractArrayBlock(text, 'industries');
  const categoryMatch = text.match(/category:\s*'([^']+)'/);
  const category = categoryMatch ? categoryMatch[1] : null;
  if (category === 'creative-media' && industriesBlock.includes("'infrastructure'")) {
    score -= 6;
    issues.push('category/industries mismatch: creative-media should not use infrastructure');
  }

  if (/unknown/gi.test(text)) {
    score -= 3;
    issues.push('contains Unknown placeholders');
  }

  return {
    companyId,
    score: Math.max(0, Math.min(100, score)),
    issues,
    metrics: {
      competitorsCount,
      foundersCount,
      cultureCount,
      challengesCount,
      sourcesCount: sourcesUrls.length,
      sourceDomains: sourceDomains.size,
      openRoleUrls: roleUrls.length,
      specificRoleUrls: roleUrls.filter((u) => classifyUrl(u) === 'specific-job').length,
    },
  };
}

function average(nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function main() {
  const args = process.argv.slice(2);
  const companyId = args[0];

  if (!companyId) {
    console.error('Usage: node scripts/score-company-quality.mjs <company-id>');
    process.exit(1);
  }

  const target = scoreCompany(companyId);
  const goldScores = GOLD_COMPANIES.map((id) => {
    try {
      return scoreCompany(id).score;
    } catch {
      return null;
    }
  }).filter((s) => s !== null);

  const bar = Math.round(average(goldScores));
  const gap = bar - target.score;

  console.log(`Company: ${target.companyId}`);
  console.log(`Score: ${target.score}/100`);
  console.log(`Quality Bar (gold average): ${bar}/100`);
  console.log(`Gap: ${gap > 0 ? `-${gap}` : `+${Math.abs(gap)}`}`);
  console.log('');
  console.log('Metrics:');
  console.log(JSON.stringify(target.metrics, null, 2));
  console.log('');
  if (target.issues.length === 0) {
    console.log('Issues: none');
  } else {
    console.log('Issues:');
    target.issues.forEach((issue) => console.log(`- ${issue}`));
  }
}

main();

