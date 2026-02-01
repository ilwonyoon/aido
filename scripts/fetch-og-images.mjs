#!/usr/bin/env node

/**
 * Fetch OG Images Script
 *
 * This script:
 * 1. Reads all companies from the database
 * 2. Fetches OG images and screenshots using Microlink API
 * 3. Downloads and optimizes images (WebP format, resized)
 * 4. Saves to public/og-images/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Configuration
const CONFIG = {
  outputDir: path.join(rootDir, 'public', 'og-images'),
  maxWidth: 800, // Resize to max 800px width
  quality: 85, // WebP quality
  format: 'webp'
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Fetch image data from Microlink API
 */
async function fetchImageData(url, mode = 'og') {
  try {
    const params = new URLSearchParams({
      url: url,
      screenshot: mode === 'screenshot' ? 'true' : 'false',
      meta: 'true'
    });

    const apiUrl = `https://api.microlink.io?${params.toString()}`;
    console.log(`Fetching ${mode} for ${url}...`);

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'success') {
      const imageUrl = mode === 'screenshot'
        ? data.data.screenshot?.url
        : (data.data.image?.url || data.data.logo?.url);

      return {
        imageUrl,
        title: data.data.title,
        description: data.data.description
      };
    }

    throw new Error(`Microlink API returned status: ${data.status}`);
  } catch (error) {
    console.error(`Error fetching ${mode} for ${url}:`, error.message);
    return null;
  }
}

/**
 * Download and optimize image
 */
async function downloadAndOptimize(imageUrl, companyId, type = 'og') {
  return new Promise((resolve, reject) => {
    const filename = `${companyId}-${type}.${CONFIG.format}`;
    const filepath = path.join(CONFIG.outputDir, filename);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`  ✓ Already exists: ${filename}`);
      resolve(filepath);
      return;
    }

    console.log(`  Downloading ${imageUrl}...`);

    https.get(imageUrl, (response) => {
      const chunks = [];

      response.on('data', (chunk) => chunks.push(chunk));

      response.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);

          // Optimize with Sharp
          await sharp(buffer)
            .resize(CONFIG.maxWidth, null, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: CONFIG.quality })
            .toFile(filepath);

          const stats = fs.statSync(filepath);
          const sizeKB = (stats.size / 1024).toFixed(2);

          console.log(`  ✓ Optimized: ${filename} (${sizeKB} KB)`);
          resolve(filepath);
        } catch (error) {
          console.error(`  ✗ Optimization failed:`, error.message);
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Process a single company
 */
async function processCompany(company) {
  console.log(`\nProcessing: ${company.name}`);

  const results = {
    companyId: company.id,
    name: company.name,
    website: company.website,
    og: null,
    screenshot: null
  };

  try {
    // Fetch OG image
    const ogData = await fetchImageData(company.website, 'og');
    if (ogData?.imageUrl) {
      try {
        results.og = await downloadAndOptimize(ogData.imageUrl, company.id, 'og');
      } catch (error) {
        console.error(`  ✗ Failed to download OG image:`, error.message);
      }
    }

    // Fetch Screenshot
    const screenshotData = await fetchImageData(company.website, 'screenshot');
    if (screenshotData?.imageUrl) {
      try {
        results.screenshot = await downloadAndOptimize(screenshotData.imageUrl, company.id, 'screenshot');
      } catch (error) {
        console.error(`  ✗ Failed to download screenshot:`, error.message);
      }
    }

    // Wait a bit to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));

  } catch (error) {
    console.error(`Error processing ${company.name}:`, error.message);
  }

  return results;
}

/**
 * Parse CLI arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    start: 0,
    end: null,
    resume: false,
    testMode: process.env.TEST_MODE === 'true',
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--start' && args[i + 1]) {
      options.start = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--end' && args[i + 1]) {
      options.end = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--resume') {
      options.resume = true;
    }
  }

  return options;
}

/**
 * Load or initialize manifest
 */
function loadManifest(manifestPath) {
  if (fs.existsSync(manifestPath)) {
    return JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  }
  return [];
}

/**
 * Save manifest incrementally
 */
function saveManifest(manifestPath, results) {
  fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2));
}

/**
 * Main execution
 */
async function main() {
  const options = parseArgs();

  console.log('🖼️  OG Image Fetcher & Optimizer\n');
  console.log(`Output directory: ${CONFIG.outputDir}`);
  console.log(`Image format: ${CONFIG.format}`);
  console.log(`Max width: ${CONFIG.maxWidth}px`);
  console.log(`Quality: ${CONFIG.quality}%\n`);

  // Load companies from JSON
  const companiesPath = path.join(__dirname, 'companies.json');
  if (!fs.existsSync(companiesPath)) {
    console.error('❌ companies.json not found. Run: node scripts/export-companies.mjs');
    process.exit(1);
  }
  let companies = JSON.parse(fs.readFileSync(companiesPath, 'utf-8'));

  // Load existing manifest for resume mode
  const manifestPath = path.join(CONFIG.outputDir, 'manifest.json');
  let results = options.resume ? loadManifest(manifestPath) : [];
  const processedIds = new Set(results.map(r => r.companyId));

  // Apply range filter
  if (options.testMode) {
    companies = companies.slice(0, 3);
    console.log(`⚠️  TEST MODE: Processing only ${companies.length} companies\n`);
  } else {
    const end = options.end || companies.length;
    companies = companies.slice(options.start, end);
    console.log(`📊 Range: ${options.start} to ${end}`);
    console.log(`Found ${companies.length} companies to process\n`);
  }

  // Filter out already processed if resume mode
  if (options.resume) {
    const originalCount = companies.length;
    companies = companies.filter(c => !processedIds.has(c.id));
    console.log(`⏭️  Resume mode: Skipping ${originalCount - companies.length} already processed\n`);
  }

  let processed = 0;

  for (const company of companies) {
    try {
      const result = await processCompany(company);

      // Update or add result
      const existingIndex = results.findIndex(r => r.companyId === company.id);
      if (existingIndex >= 0) {
        results[existingIndex] = result;
      } else {
        results.push(result);
      }

      processed++;

      // Save manifest after each company (incremental save)
      saveManifest(manifestPath, results);

      console.log(`Progress: ${processed}/${companies.length}`);
    } catch (error) {
      console.error(`❌ Failed to process ${company.name}:`, error.message);
      // Continue with next company
    }
  }

  console.log(`\n✅ Complete! Processed ${processed} companies`);
  console.log(`Manifest saved to: ${manifestPath}`);

  // Summary
  const withOG = results.filter(r => r.og).length;
  const withScreenshot = results.filter(r => r.screenshot).length;

  console.log(`\nSummary:`);
  console.log(`  OG Images: ${withOG}/${results.length}`);
  console.log(`  Screenshots: ${withScreenshot}/${results.length}`);
}

main().catch(console.error);
