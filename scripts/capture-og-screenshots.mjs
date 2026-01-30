#!/usr/bin/env node

/**
 * Capture website screenshots for companies with missing OG images
 * Uses Playwright to visit actual websites and take screenshots
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const CONFIG = {
  outputDir: path.join(rootDir, 'public', 'og-images'),
  width: 1920,
  height: 1080,
  quality: 90,
  format: 'webp'
};

// Companies to capture (bot-blocked ones)
const companies = [
  { id: 'openai', url: 'https://openai.com' },
  { id: 'perplexity', url: 'https://www.perplexity.ai' },
  { id: 'midjourney', url: 'https://www.midjourney.com' },
  { id: 'xai', url: 'https://x.ai' },
  { id: 'canva', url: 'https://www.canva.com' },
  { id: 'gamma', url: 'https://gamma.app' },
  { id: 'tome', url: 'https://tome.app' },
  { id: 'sierra', url: 'https://sierra.ai' },
];

async function captureScreenshot(browser, company) {
  console.log(`\n📸 Capturing: ${company.id}`);
  console.log(`   URL: ${company.url}`);

  try {
    const page = await browser.newPage();

    // Set viewport to OG image dimensions
    await page.setViewportSize({ width: CONFIG.width, height: CONFIG.height });

    // Navigate with longer timeout and less strict waiting
    await page.goto(company.url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    // Wait for page to load and animations
    await page.waitForTimeout(3000);

    // Take screenshot
    const screenshotBuffer = await page.screenshot({
      type: 'png',
      fullPage: false
    });

    await page.close();

    // Optimize with Sharp
    const filename = `${company.id}-og.${CONFIG.format}`;
    const filepath = path.join(CONFIG.outputDir, filename);

    await sharp(screenshotBuffer)
      .resize(CONFIG.width, CONFIG.height, {
        fit: 'cover',
        position: 'top'
      })
      .webp({ quality: CONFIG.quality })
      .toFile(filepath);

    const stats = fs.statSync(filepath);
    const sizeKB = (stats.size / 1024).toFixed(2);

    console.log(`   ✓ Saved: ${sizeKB} KB`);

    return {
      ...company,
      success: true,
      localPath: `/og-images/${filename}`,
      sizeKB
    };

  } catch (error) {
    console.log(`   ✗ Failed: ${error.message}`);
    return {
      ...company,
      success: false,
      error: error.message
    };
  }
}

async function main() {
  console.log('🚀 OG Screenshot Capturer\n');
  console.log(`Capturing ${companies.length} websites...\n`);

  // Launch browser
  const browser = await chromium.launch({
    headless: true
  });

  const results = [];

  for (const company of companies) {
    const result = await captureScreenshot(browser, company);
    results.push(result);

    // Delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await browser.close();

  // Save results
  const outputFile = path.join(__dirname, 'og-screenshot-results.json');
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`\n✅ Complete!`);
  console.log(`   Successful: ${successful}/${companies.length}`);
  console.log(`   Failed: ${failed}/${companies.length}`);
  console.log(`   Results: ${outputFile}`);
}

main().catch(console.error);
