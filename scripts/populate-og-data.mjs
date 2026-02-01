#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CONFIG = {
  downloadedFile: path.join(rootDir, 'scripts', 'og-downloaded-0-205.json'),
  screenshotsFile: path.join(rootDir, 'scripts', 'og-screenshot-results.json'),
  companiesDir: path.join(rootDir, 'src', 'data', 'companies'),
};

async function main() {
  console.log('🔄 Populating OG Image data to company files...\n');

  // Read both result files and merge
  const downloaded = JSON.parse(fs.readFileSync(CONFIG.downloadedFile, 'utf-8'));
  const screenshots = JSON.parse(fs.readFileSync(CONFIG.screenshotsFile, 'utf-8'));

  // Convert screenshots to map for easy lookup
  const screenshotsMap = new Map(
    screenshots.map(s => [s.id, s])
  );

  // Merge: downloaded as base, override with screenshots if available
  const results = downloaded.map(d => {
    const screenshot = screenshotsMap.get(d.companyId);
    if (screenshot && screenshot.success) {
      return {
        id: d.companyId,
        name: d.name,
        success: true,
        localPath: screenshot.localPath
      };
    }
    return {
      id: d.companyId,
      name: d.name,
      success: d.downloaded,
      localPath: d.localPath
    };
  });

  console.log(`Found ${results.length} companies (${downloaded.length} downloaded + ${screenshots.length} screenshots)\n`);

  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const company of results) {
    const companyFilePath = path.join(CONFIG.companiesDir, `${company.id}.ts`);

    // Check if company file exists
    if (!fs.existsSync(companyFilePath)) {
      console.log(`⏭️  ${company.name}: No file found at ${companyFilePath}`);
      skippedCount++;
      continue;
    }

    try {
      // Read company file
      let content = fs.readFileSync(companyFilePath, 'utf-8');

      // Check if already has ogImage or screenshot fields
      if (content.includes('ogImage:') || content.includes('screenshot:')) {
        console.log(`⏭️  ${company.name}: Already has image fields`);
        skippedCount++;
        continue;
      }

      // Determine what to add
      const fieldsToAdd = [];
      if (company.success && company.localPath) {
        fieldsToAdd.push(`ogImage: '${company.localPath}'`);
      }
      // Note: screenshots are stored with -og.webp suffix if they're the only available image
      // So we don't need a separate screenshot field

      if (fieldsToAdd.length === 0) {
        console.log(`⏭️  ${company.name}: No images to add`);
        skippedCount++;
        continue;
      }

      // Find insertion point: after 'remote' field and before multi-dimensional tags
      const remoteMatch = content.match(/remote:\s*['"].*?['"],?\n/);
      if (!remoteMatch) {
        console.log(`⚠️  ${company.name}: Could not find 'remote' field for insertion`);
        errorCount++;
        continue;
      }

      const insertionIndex = remoteMatch.index + remoteMatch[0].length;

      // Build insertion text
      const indentation = '    ';
      const insertionText = `\n${indentation}// OG Image\n${indentation}${fieldsToAdd.join(',\n' + indentation)},\n`;

      // Insert into content
      const newContent =
        content.slice(0, insertionIndex) +
        insertionText +
        content.slice(insertionIndex);

      // Write back to file
      fs.writeFileSync(companyFilePath, newContent, 'utf-8');

      console.log(`✅ ${company.name}: Added ${fieldsToAdd.length} field(s)`);
      updatedCount++;

    } catch (error) {
      console.error(`❌ ${company.name}: Error - ${error.message}`);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Updated: ${updatedCount}`);
  console.log(`   Skipped: ${skippedCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Total: ${results.length}`);
  console.log('='.repeat(50));
}

main().catch(console.error);
