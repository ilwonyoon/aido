#!/usr/bin/env node

/**
 * Populate OG Image Data into Company Files
 *
 * Reads manifest.json and updates company TypeScript files
 * with ogImage and screenshot fields.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const manifestPath = path.join(rootDir, 'public', 'og-images', 'manifest.json');
const companiesDir = path.join(rootDir, 'src', 'data', 'companies');

async function main() {
  console.log('📝 Populating OG image data into company files\n');

  // Load manifest
  if (!fs.existsSync(manifestPath)) {
    console.error('❌ Manifest not found:', manifestPath);
    console.error('Run: node scripts/fetch-og-images.mjs first');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  console.log(`Found ${manifest.length} companies in manifest\n`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const item of manifest) {
    try {
      const companyFile = path.join(companiesDir, `${item.companyId}.ts`);

      if (!fs.existsSync(companyFile)) {
        console.warn(`⚠️  Company file not found: ${item.companyId}.ts`);
        skipped++;
        continue;
      }

      let content = fs.readFileSync(companyFile, 'utf-8');

      // Check if already has ogImage/screenshot fields
      const hasOgImage = /ogImage:\s*['"]/.test(content);
      const hasScreenshot = /screenshot:\s*['"]/.test(content);

      if (hasOgImage && hasScreenshot) {
        console.log(`⏭️  ${item.name}: Already has OG data`);
        skipped++;
        continue;
      }

      // Prepare OG data lines
      const ogImageLine = item.og
        ? `  ogImage: '/og-images/${item.companyId}-og.webp',`
        : '';
      const screenshotLine = item.screenshot
        ? `  screenshot: '/og-images/${item.companyId}-screenshot.webp',`
        : '';

      // Find the location to insert (after website field)
      const websitePattern = /(website:\s*['"][^'"]+['"],?\s*\n)/;
      const match = content.match(websitePattern);

      if (!match) {
        console.warn(`⚠️  ${item.name}: Could not find website field`);
        errors++;
        continue;
      }

      // Insert OG fields after website
      const insertion = [];
      if (ogImageLine && !hasOgImage) insertion.push(ogImageLine);
      if (screenshotLine && !hasScreenshot) insertion.push(screenshotLine);

      if (insertion.length > 0) {
        content = content.replace(
          websitePattern,
          `${match[1]}${insertion.join('\n')}\n`
        );

        // Write back to file
        fs.writeFileSync(companyFile, content, 'utf-8');
        console.log(`✅ ${item.name}: Added ${insertion.length} field(s)`);
        updated++;
      } else {
        skipped++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${item.name}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Errors: ${errors}`);

  if (updated > 0) {
    console.log(`\n✅ Successfully populated OG data for ${updated} companies`);
    console.log(`Next step: git add . && git commit`);
  }
}

main().catch(console.error);
