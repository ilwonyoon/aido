import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const companiesDir = path.join(__dirname, '../src/data/companies');
const outputPath = path.join(__dirname, '../src/data/search-index.json');

function toEvaluableModule(source) {
  return source
    .replace(/^import\s+[^\n]+\n/gm, '')
    .replace(/export\s+const\s+\w+\s*:\s*Company\s*=\s*/, 'const company = ')
    .replace(/\s+as const/g, '')
    .concat('\nmodule.exports = company;\n');
}

function loadCompanyFromTs(filePath) {
  const source = fs.readFileSync(filePath, 'utf-8');
  const code = toEvaluableModule(source);
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(code, sandbox, { filename: filePath });
  return sandbox.module.exports;
}

function compactCompany(company) {
  const openRoles = Array.isArray(company.openRoles) ? company.openRoles : [];
  const titles = openRoles
    .slice(0, 2)
    .map((r) => String(r?.title || '').slice(0, 35))
    .filter(Boolean);

  const entry = {
    id: company.id,
    name: company.name,
    desc: String(company.description || '').slice(0, 60),
    level: company.aiNativeLevel,
    cat: company.category,
    stage: company.normalizedStage,
    region: company.region,
    remote: company.remote,
    roles: openRoles.length,
  };

  if (titles.length > 0) entry.titles = titles;

  return entry;
}

const files = fs
  .readdirSync(companiesDir)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

const index = {};

for (const file of files) {
  const company = loadCompanyFromTs(path.join(companiesDir, file));
  if (!company || !company.id) continue;
  index[company.id] = compactCompany(company);
}

fs.writeFileSync(outputPath, `${JSON.stringify(index, null, 2)}\n`);
console.log(`Generated search index: ${Object.keys(index).length} companies -> src/data/search-index.json`);
