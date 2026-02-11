
import * as fs from 'fs';
import * as path from 'path';

const companiesDir = path.join(process.cwd(), 'src/data/companies');
const indexFile = path.join(companiesDir, 'index.ts');

// Helper to convert filename to variable name if not found in content
// (Fallback mechanism, though we prefer reading the file)
function toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

async function generateIndex() {
    const files = fs.readdirSync(companiesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'index-company.ts');

    const imports: string[] = [];
    const exports: string[] = [];

    for (const file of files) {
        const content = fs.readFileSync(path.join(companiesDir, file), 'utf-8');
        const match = content.match(/export const (\w+)\s*:/) || content.match(/export const (\w+)\s*=/);

        if (match) {
            const variableName = match[1];
            const importPath = `./${file.replace('.ts', '')}`;
            imports.push(`import { ${variableName} } from '${importPath}';`);
            exports.push(variableName);
        } else {
            console.warn(`Warning: No named export found in ${file}`);
        }
    }

    // Sort imports and exports for stability
    imports.sort();
    // exports.sort(); // Maybe preserve some order? No, alphabetical is better for strict determination.

    const fileContent = `import { Company } from '../types';

${imports.join('\n')}

export const companies: Company[] = [
  ${exports.join(',\n  ')},
];

// Individual company exports removed (unused - companies array is sufficient)

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: 'A' | 'B' | 'C' | 'D'): Company[] {
  return companies.filter((c) => c.aiNativeLevel === level);
}
`;

    fs.writeFileSync(indexFile, fileContent);
    console.log(`Successfully generated index.ts with ${exports.length} companies.`);
}

generateIndex().catch(console.error);
