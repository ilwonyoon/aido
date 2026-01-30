#!/usr/bin/env node

/**
 * Capture screenshots for companies that failed OG image download
 * Uses Playwright to visit websites and take high-res screenshots
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

async function getFailedCompanies() {
  const downloadedFile = path.join(__dirname, 'og-downloaded-0-205.json');

  if (!fs.existsSync(downloadedFile)) {
    console.log('❌ No download results found');
    return [];
  }

  const downloaded = JSON.parse(fs.readFileSync(downloadedFile, 'utf-8'));
  const failed = downloaded.filter(c => !c.downloaded);

  console.log(`Found ${failed.length} failed companies to screenshot\n`);

  return failed.map(c => ({
    id: c.companyId,
    url: c.website,
    name: c.name
  }));
}

async function captureScreenshot(browser, company) {
  console.log(`📸 ${company.name}`);
  console.log(`   ${company.url}`);

  try {
    const page = await browser.newPage();
    await page.setViewportSize({ width: CONFIG.width, height: CONFIG.height });

    await page.goto(company.url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await page.waitForTimeout(3000);

    const screenshotBuffer = await page.screenshot({
      type: 'png',
      fullPage: false
    });

    await page.close();

    // Optimize with Sharp
    const filename = `${company.id}-og.${CONFIG.format}`;
    const filepath = path.join(CONFIG.outputDir, filename);

    await sharp(screenshotBuffer)
      .resize(1440, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: CONFIG.quality })
      .toFile(filepath);

    const stats = fs.statSync(filepath);
    const sizeKB = (stats.size / 1024).toFixed(2);

    console.log(`   ✓ ${sizeKB} KB\n`);

    return { ...company, success: true, localPath: `/og-images/${filename}`, sizeKB };

  } catch (error) {
    console.log(`   ✗ ${error.message}\n`);
    return { ...company, success: false, error: error.message };
  }
}

async function main() {
  console.log('📷 Playwright Screenshot Capturer\n');
  console.log('================================\n');

  const companies = await getFailedCompanies();

  if (companies.length === 0) {
    console.log('✨ No companies to screenshot!');
    return;
  }

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const company of companies) {
    const result = await captureScreenshot(browser, company);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await browser.close();

  // Save results
  const outputFile = path.join(__dirname, 'og-screenshot-results.json');
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  const successful = results.filter(r => r.success).length;
  console.log(`✅ Complete: ${successful}/${companies.length} successful`);
  console.log(`📄 Results: ${outputFile}`);
}

main().catch(console.error);
