#!/usr/bin/env node

/**
 * Export companies to JSON for scripts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract companies from individual company files
const companiesDir = path.join(__dirname, '../src/data/companies');
const files = fs.readdirSync(companiesDir).filter(f => f.endsWith('.ts'));

const companies = [];

for (const file of files) {
  const filePath = path.join(companiesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract company data using regex (simple approach)
  const idMatch = content.match(/id:\s*['"](.+?)['"]/);
  const nameMatch = content.match(/name:\s*['"](.+?)['"]/);
  const websiteMatch = content.match(/website:\s*['"](.+?)['"]/);

  if (idMatch && nameMatch && websiteMatch) {
    companies.push({
      id: idMatch[1],
      name: nameMatch[1],
      website: websiteMatch[1]
    });
  }
}

// Write to JSON
const outputPath = path.join(__dirname, 'companies.json');
fs.writeFileSync(outputPath, JSON.stringify(companies, null, 2));

console.log(`✅ Exported ${companies.length} companies to ${outputPath}`);
