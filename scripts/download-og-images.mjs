#!/usr/bin/env node

/**
 * Download OG images from extracted URLs
 *
 * Takes the output from extract-og-urls.mjs and downloads/optimizes images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const CONFIG = {
  outputDir: path.join(rootDir, 'public', 'og-images'),
  maxWidth: 800,
  quality: 85,
  format: 'webp'
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Download image from URL
 */
async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;

        return downloadImage(redirectUrl).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

/**
 * Optimize and save image
 */
async function optimizeAndSave(buffer, companyId) {
  const filename = `${companyId}-og.${CONFIG.format}`;
  const filepath = path.join(CONFIG.outputDir, filename);

  await sharp(buffer)
    .resize(CONFIG.maxWidth, null, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: CONFIG.quality })
    .toFile(filepath);

  const stats = fs.statSync(filepath);
  const sizeKB = (stats.size / 1024).toFixed(2);

  return { filepath, sizeKB };
}

/**
 * Process a single company
 */
async function processCompany(company) {
  if (!company.ogImage || !company.success) {
    console.log(`⏭️  ${company.name}: No OG image to download`);
    return {
      ...company,
      downloaded: false,
    };
  }

  console.log(`\nProcessing: ${company.name}`);
  console.log(`  URL: ${company.ogImage}`);

  // Check if already exists
  const existingFile = path.join(CONFIG.outputDir, `${company.companyId}-og.webp`);
  if (fs.existsSync(existingFile)) {
    console.log(`  ✓ Already exists`);
    return {
      ...company,
      downloaded: true,
      localPath: `/og-images/${company.companyId}-og.webp`,
    };
  }

  try {
    const buffer = await downloadImage(company.ogImage);
    const { filepath, sizeKB } = await optimizeAndSave(buffer, company.companyId);

    console.log(`  ✓ Downloaded and optimized: ${sizeKB} KB`);

    return {
      ...company,
      downloaded: true,
      localPath: `/og-images/${company.companyId}-og.webp`,
    };
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}`);
    return {
      ...company,
      downloaded: false,
      error: error.message,
    };
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node download-og-images.mjs <og-urls-file.json>');
    console.error('Example: node download-og-images.mjs og-urls-0-40.json');
    process.exit(1);
  }

  const inputFile = args[0];
  const inputPath = path.join(__dirname, inputFile);

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
  }

  console.log('⬇️  OG Image Downloader\n');
  console.log(`Input: ${inputFile}\n`);

  const companies = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  console.log(`Found ${companies.length} companies\n`);

  const results = [];

  for (const company of companies) {
    const result = await processCompany(company);
    results.push(result);

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // Save results
  const outputFile = inputFile.replace('og-urls-', 'og-downloaded-');
  const outputPath = path.join(__dirname, outputFile);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  // Summary
  const downloaded = results.filter(r => r.downloaded).length;
  const failed = results.filter(r => !r.downloaded).length;

  console.log(`\n✅ Complete!`);
  console.log(`  Downloaded: ${downloaded}/${companies.length}`);
  console.log(`  Failed/Skipped: ${failed}/${companies.length}`);
  console.log(`  Output: ${outputPath}`);
}

main().catch(console.error);
