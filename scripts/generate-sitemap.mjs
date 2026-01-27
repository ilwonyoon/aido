import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read companies data
const companiesIndexPath = path.join(__dirname, '../src/data/companies/index.ts');
const indexContent = fs.readFileSync(companiesIndexPath, 'utf-8');

// Extract company IDs from export statement
const exportMatch = indexContent.match(/export \{ (.+) \}/);
if (!exportMatch) {
  console.error('Could not find company exports');
  process.exit(1);
}

const companyIds = exportMatch[1]
  .split(',')
  .map(id => id.trim())
  .filter(id => id && !id.startsWith('get')); // Filter out utility functions

const baseUrl = 'https://aido-d2cc0.web.app';
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/jobs</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/ai-levels</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/macro</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
${companyIds
  .map(
    (id) => `  <url>
    <loc>${baseUrl}/company/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// Write to public directory (Next.js will copy to out during build)
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`✓ Generated sitemap with ${companyIds.length + 4} URLs`);
