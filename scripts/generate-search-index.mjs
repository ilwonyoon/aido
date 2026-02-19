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

  return {
    id: company.id,
    name: company.name,
    description: company.description,
    aiNativeLevel: company.aiNativeLevel,
    category: company.category,
    normalizedStage: company.normalizedStage,
    region: company.region,
    remote: company.remote,
    productStage: company.productStage,
    totalFunding: company.totalFunding,
    hasOpenRoles: openRoles.length > 0,
    roleCount: openRoles.length,
    roleTitles: openRoles.map((r) => r?.title).filter(Boolean),
    designTeamSize: company.designTeam?.teamSize || 'Unknown',
    designWorkType: {
      logic: company.designWorkType?.logicBehavior?.level,
      evaluation: company.designWorkType?.evaluation?.level,
      interface: company.designWorkType?.interface?.level,
    },
    designPhilosophy: company.designPhilosophy || '',
    greenFlags: Array.isArray(company.greenFlags) ? company.greenFlags.slice(0, 3) : [],
    redFlags: Array.isArray(company.redFlags) ? company.redFlags.slice(0, 2) : [],
    fitScore: company.tracking?.fitScore || 0,
  };
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
