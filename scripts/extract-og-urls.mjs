#!/usr/bin/env node

/**
 * Extract OG Image URLs directly from company websites
 *
 * Fetches HTML and parses meta tags - faster and more reliable than Microlink
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fetch HTML from URL
 */
async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 10000,
    };

    protocol.get(url, options, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;

        console.log(`  → Redirect to ${redirectUrl}`);
        return fetchHTML(redirectUrl).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    }).on('error', reject).on('timeout', () => {
      reject(new Error('Request timeout'));
    });
  });
}

/**
 * Extract OG image URL from HTML
 */
function extractOGImage(html) {
  // Match og:image meta tag
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                       html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);

  if (ogImageMatch) {
    return ogImageMatch[1];
  }

  // Fallback: try twitter:image
  const twitterMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i) ||
                       html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']twitter:image["']/i);

  if (twitterMatch) {
    return twitterMatch[1];
  }

  return null;
}

/**
 * Process a single company
 */
async function processCompany(company) {
  console.log(`\nProcessing: ${company.name}`);
  console.log(`  URL: ${company.website}`);

  try {
    let url = company.website;
    if (!url.startsWith('http')) {
      url = `https://${url}`;
    }

    const html = await fetchHTML(url);
    const ogImage = extractOGImage(html);

    if (ogImage) {
      // Make absolute URL if relative
      const absoluteUrl = ogImage.startsWith('http')
        ? ogImage
        : new URL(ogImage, url).href;

      console.log(`  ✓ Found: ${absoluteUrl}`);
      return {
        companyId: company.id,
        name: company.name,
        website: company.website,
        ogImage: absoluteUrl,
        success: true,
      };
    } else {
      console.log(`  ✗ No OG image found`);
      return {
        companyId: company.id,
        name: company.name,
        website: company.website,
        ogImage: null,
        success: false,
      };
    }
  } catch (error) {
    console.log(`  ✗ Error: ${error.message}`);
    return {
      companyId: company.id,
      name: company.name,
      website: company.website,
      ogImage: null,
      success: false,
      error: error.message,
    };
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const start = args.includes('--start') ? parseInt(args[args.indexOf('--start') + 1]) : 0;
  const end = args.includes('--end') ? parseInt(args[args.indexOf('--end') + 1]) : 5;

  console.log('🔍 OG Image URL Extractor\n');
  console.log(`Range: ${start} to ${end}\n`);

  // Load companies
  const companiesPath = path.join(__dirname, 'companies.json');
  if (!fs.existsSync(companiesPath)) {
    console.error('❌ companies.json not found. Run: node scripts/export-companies.mjs');
    process.exit(1);
  }

  const allCompanies = JSON.parse(fs.readFileSync(companiesPath, 'utf-8'));
  const companies = allCompanies.slice(start, end);

  console.log(`Processing ${companies.length} companies...\n`);

  const results = [];

  for (const company of companies) {
    const result = await processCompany(company);
    results.push(result);

    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Save results
  const outputPath = path.join(__dirname, `og-urls-${start}-${end}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`\n✅ Complete!`);
  console.log(`  Successful: ${successful}/${companies.length}`);
  console.log(`  Failed: ${failed}/${companies.length}`);
  console.log(`  Output: ${outputPath}`);
}

main().catch(console.error);
