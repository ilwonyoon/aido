#!/usr/bin/env node

/**
 * Lists all companies that have non-empty openRoles.
 * Used by role-validator skill to identify validation targets.
 *
 * Usage: node scripts/list-companies-with-roles.mjs [--json]
 */

import fs from 'fs';
import path from 'path';

const companiesDir = path.resolve('src/data/companies');
const files = fs.readdirSync(companiesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(companiesDir, file), 'utf-8');

  // Extract role titles and URLs
  const titleMatches = [...content.matchAll(/title:\s*['"`](.+?)['"`]/g)];
  const urlMatches = [...content.matchAll(/url:\s*['"`](https?:\/\/.+?)['"`]/g)];

  // Check if this is inside openRoles (not other arrays)
  const openRolesMatch = content.match(/openRoles:\s*\[([\s\S]*?)\](?=,?\s*\n\s*\w)/);
  if (!openRolesMatch || openRolesMatch[1].trim() === '') continue;

  const openRolesBlock = openRolesMatch[1];
  const roleTitles = [...openRolesBlock.matchAll(/title:\s*['"`](.+?)['"`]/g)].map(m => m[1]);
  const roleUrls = [...openRolesBlock.matchAll(/url:\s*['"`](https?:\/\/.+?)['"`]/g)].map(m => m[1]);

  if (roleTitles.length === 0) continue;

  // Extract lastUpdated
  const lastUpdatedMatch = content.match(/lastUpdated:\s*['"`](.+?)['"`]/);
  const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : 'unknown';

  // Extract company name
  const nameMatch = content.match(/name:\s*['"`](.+?)['"`]/);
  const name = nameMatch ? nameMatch[1] : file.replace('.ts', '');

  results.push({
    id: file.replace('.ts', ''),
    name,
    roleCount: roleTitles.length,
    lastUpdated,
    roles: roleTitles.map((title, i) => ({
      title,
      url: roleUrls[i] || 'no-url',
    })),
  });
}

// Sort: most roles first, then oldest lastUpdated
results.sort((a, b) => b.roleCount - a.roleCount || a.lastUpdated.localeCompare(b.lastUpdated));

const isJson = process.argv.includes('--json');

if (isJson) {
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log(`\n📋 Companies with openRoles: ${results.length}`);
  console.log(`📊 Total roles: ${results.reduce((sum, r) => sum + r.roleCount, 0)}\n`);
  console.log('─'.repeat(80));

  for (const company of results) {
    console.log(`\n${company.name} (${company.id}) — ${company.roleCount} roles — updated: ${company.lastUpdated}`);
    for (const role of company.roles) {
      console.log(`  • ${role.title}`);
      console.log(`    ${role.url}`);
    }
  }
}
