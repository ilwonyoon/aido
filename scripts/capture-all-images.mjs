#!/usr/bin/env node

/**
 * Master script to capture ALL company images at high resolution (1440px+)
 *
 * Process:
 * 1. Extract OG image URLs from all 205 companies
 * 2. Download OG images at 1440px width
 * 3. Capture screenshots for failed companies using Playwright
 * 4. Generate final report
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run(command, description) {
  console.log(`\n📍 ${description}...`);
  try {
    const output = execSync(command, {
      encoding: 'utf-8',
      stdio: 'inherit',
      cwd: __dirname
    });
    console.log(`   ✓ Complete`);
    return true;
  } catch (error) {
    console.log(`   ✗ Failed: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 AIDO High-Resolution Image Capture Pipeline');
  console.log('================================================\n');
  console.log('Target: 205 companies @ 1440px+ resolution\n');

  const startTime = Date.now();

  // Step 1: Extract OG URLs (already running in background)
  console.log('⏭️  Step 1: OG URL extraction (already started)');
  console.log('   Waiting for completion...\n');

  // Wait for og-urls file to appear
  const ogUrlsFile = path.join(__dirname, 'og-urls-0-205.json');
  let attempts = 0;
  while (!fs.existsSync(ogUrlsFile) && attempts < 120) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    attempts++;
    if (attempts % 6 === 0) {
      console.log(`   Still waiting... (${attempts * 5}s)`);
    }
  }

  if (!fs.existsSync(ogUrlsFile)) {
    console.log('   ✗ Timeout waiting for OG URLs extraction');
    process.exit(1);
  }

  console.log('   ✓ OG URLs extracted\n');

  // Step 2: Download OG images
  run(
    'node download-og-images.mjs og-urls-0-205.json',
    'Step 2: Downloading OG images at 1440px'
  );

  // Step 3: Capture screenshots for failed companies
  run(
    'node capture-failed-screenshots.mjs',
    'Step 3: Capturing screenshots for failed companies'
  );

  // Step 4: Generate report
  console.log('\n📊 Final Report');
  console.log('================\n');

  const downloadedFile = path.join(__dirname, 'og-downloaded-0-205.json');
  const screenshotFile = path.join(__dirname, 'og-screenshot-results.json');

  let totalSuccess = 0;
  let totalFailed = 0;

  if (fs.existsSync(downloadedFile)) {
    const downloaded = JSON.parse(fs.readFileSync(downloadedFile, 'utf-8'));
    const dlSuccess = downloaded.filter(c => c.downloaded).length;
    totalSuccess += dlSuccess;
    totalFailed += (downloaded.length - dlSuccess);
    console.log(`OG Images:    ${dlSuccess}/${downloaded.length}`);
  }

  if (fs.existsSync(screenshotFile)) {
    const screenshots = JSON.parse(fs.readFileSync(screenshotFile, 'utf-8'));
    const ssSuccess = screenshots.filter(c => c.success).length;
    totalSuccess += ssSuccess;
    totalFailed += (screenshots.length - ssSuccess);
    console.log(`Screenshots:  ${ssSuccess}/${screenshots.length}`);
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log(`\n✅ Pipeline Complete!`);
  console.log(`   Total Success: ${totalSuccess}/205`);
  console.log(`   Total Failed: ${totalFailed}/205`);
  console.log(`   Success Rate: ${(totalSuccess/205*100).toFixed(1)}%`);
  console.log(`   Time Elapsed: ${elapsed} minutes`);
}

main().catch(console.error);
