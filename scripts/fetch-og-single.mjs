#!/usr/bin/env node

/**
 * Fetch OG image for a single company
 * Usage: node scripts/fetch-og-single.mjs <company-id> <company-website>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CONFIG = {
  outputDir: path.join(rootDir, 'public', 'og-images'),
  companiesDir: path.join(rootDir, 'src', 'data', 'companies'),
  maxWidth: 1440,
  quality: 90,
  format: 'webp'
};

async function fetchOGImage(website) {
  const url = `https://api.microlink.io?url=${encodeURIComponent(website)}&meta=true`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.status === 'success' && json.data) {
            resolve({
              ogImage: json.data.image?.url || json.data.logo?.url || null,
              title: json.data.title || null,
              description: json.data.description || null
            });
          } else {
            resolve({ ogImage: null });
          }
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = imageUrl.startsWith('https:') ? https : http;
    
    protocol.get(imageUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, outputPath).then(resolve).catch(reject);
      }
      
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          
          // Optimize with Sharp
          await sharp(buffer)
            .resize(CONFIG.maxWidth, null, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: CONFIG.quality })
            .toFile(outputPath);
          
          const stats = fs.statSync(outputPath);
          const sizeKB = (stats.size / 1024).toFixed(2);
          
          resolve({ success: true, sizeKB });
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

async function updateCompanyFile(companyId, ogImagePath) {
  const companyFilePath = path.join(CONFIG.companiesDir, `${companyId}.ts`);
  
  if (!fs.existsSync(companyFilePath)) {
    throw new Error(`Company file not found: ${companyFilePath}`);
  }
  
  let content = fs.readFileSync(companyFilePath, 'utf-8');
  
  // Check if already has ogImage field
  if (content.includes('ogImage:')) {
    console.log('⏭️  Company file already has ogImage field, skipping update');
    return;
  }
  
  // Find insertion point after 'remote' field
  const remoteMatch = content.match(/remote:\s*['"].*?['"],?\n/);
  if (!remoteMatch) {
    throw new Error('Could not find "remote" field for insertion');
  }
  
  const insertionIndex = remoteMatch.index + remoteMatch[0].length;
  const indentation = '    ';
  const insertionText = `\n${indentation}// OG Image\n${indentation}ogImage: '${ogImagePath}',\n`;
  
  const newContent =
    content.slice(0, insertionIndex) +
    insertionText +
    content.slice(insertionIndex);
  
  fs.writeFileSync(companyFilePath, newContent, 'utf-8');
  console.log('✅ Updated company file with ogImage field');
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node fetch-og-single.mjs <company-id> <company-website>');
    process.exit(1);
  }
  
  const [companyId, website] = args;
  
  console.log(`\n🔍 Fetching OG image for: ${companyId}`);
  console.log(`   Website: ${website}\n`);
  
  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  try {
    // Fetch OG metadata
    const { ogImage } = await fetchOGImage(website);
    
    if (!ogImage) {
      console.log('⚠️  No OG image found');
      return;
    }
    
    console.log(`📥 OG Image URL: ${ogImage}`);
    
    // Download and optimize
    const outputPath = path.join(CONFIG.outputDir, `${companyId}-og.webp`);
    const { sizeKB } = await downloadImage(ogImage, outputPath);
    
    console.log(`✅ Downloaded: ${sizeKB} KB`);
    
    // Update company file
    const ogImagePath = `/og-images/${companyId}-og.webp`;
    await updateCompanyFile(companyId, ogImagePath);
    
    console.log(`\n✨ Complete! OG image added to company file.\n`);
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
