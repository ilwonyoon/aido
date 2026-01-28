import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const companiesDir = path.join(__dirname, '../src/data/companies');

// Keyword-based tag inference
const AI_TYPE_KEYWORDS = {
  'foundation-model': ['foundation model', 'llm', 'large language model', 'gpt', 'claude', 'language model', 'ai model', 'frontier model'],
  'model-platform': ['model hosting', 'fine-tuning', 'model deployment', 'inference api', 'model serving'],
  'ai-infrastructure': ['mlops', 'ml infrastructure', 'training', 'vector database', 'embedding', 'orchestration', 'langchain'],
  'image-generation': ['image generation', 'image ai', 'visual ai', 'picture', 'illustration', 'midjourney', 'stable diffusion', 'dall-e'],
  'video-generation': ['video generation', 'video ai', 'video creation', 'avatar', 'animation'],
  'audio-generation': ['audio', 'music generation', 'voice', 'speech synthesis', 'text-to-speech', 'tts', 'podcast'],
  'code-assistant': ['code', 'coding', 'developer', 'ide', 'programming', 'software development', 'github', 'code editor', 'code completion'],
  'text-assistant': ['writing', 'copywriting', 'content generation', 'text generation', 'document'],
  'search-retrieval': ['search', 'retrieval', 'knowledge base', 'enterprise search', 'information retrieval', 'rag'],
  'conversation-ai': ['conversation', 'chat', 'customer support', 'sales call', 'meeting', 'transcription', 'dialogue'],
  'data-analysis': ['data analysis', 'analytics', 'business intelligence', 'data warehouse', 'metrics', 'reporting'],
  'automation': ['automation', 'workflow', 'integration', 'zapier', 'no-code'],
};

const MARKET_KEYWORDS = {
  'b2c': ['consumer', 'individual', 'personal', 'everyone', 'people'],
  'prosumer': ['creator', 'freelance', 'professional', 'indie', 'small team'],
  'smb': ['small business', 'smb', 'startup'],
  'b2b': ['business', 'team', 'company', 'organization'],
  'enterprise': ['enterprise', 'fortune 500', 'large company', 'corporation', 'large organization'],
};

const INDUSTRY_KEYWORDS = {
  'infrastructure': ['infrastructure', 'platform', 'api', 'foundation', 'model provider'],
  'developer-tools': ['developer', 'engineering', 'devops', 'code', 'software', 'ide', 'git'],
  'creative-media': ['creative', 'media', 'content', 'video', 'image', 'audio', 'music', 'design', 'art'],
  'productivity': ['productivity', 'collaboration', 'workspace', 'document', 'note', 'project management'],
  'sales-marketing': ['sales', 'marketing', 'revenue', 'crm', 'customer', 'lead', 'campaign'],
  'healthcare': ['health', 'medical', 'clinical', 'doctor', 'patient', 'hospital', 'pharmaceutical'],
  'fintech': ['financial', 'fintech', 'payment', 'banking', 'expense', 'accounting', 'tax'],
  'legal': ['legal', 'law', 'contract', 'compliance', 'regulatory'],
  'security': ['security', 'cybersecurity', 'threat', 'vulnerability', 'fraud'],
  'education': ['education', 'learning', 'teaching', 'student', 'course'],
  'other': [],
};

function inferTags(description, name, aiNativeLevel) {
  const text = `${name} ${description}`.toLowerCase();

  // Infer AI Types
  const aiTypes = [];
  for (const [type, keywords] of Object.entries(AI_TYPE_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) {
      aiTypes.push(type);
    }
  }
  // Default based on AI level if no match
  if (aiTypes.length === 0) {
    if (aiNativeLevel === 'A') aiTypes.push('foundation-model');
    else if (text.includes('ai')) aiTypes.push('text-assistant');
  }

  // Infer Markets
  const markets = [];
  for (const [market, keywords] of Object.entries(MARKET_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) {
      markets.push(market);
    }
  }
  // Default to b2b if no match
  if (markets.length === 0) {
    markets.push('b2b');
  }

  // Infer Industries
  const industries = [];
  for (const [industry, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (industry !== 'other' && keywords.some(kw => text.includes(kw))) {
      industries.push(industry);
    }
  }
  // Default to other if no match
  if (industries.length === 0) {
    industries.push('other');
  }

  return {
    aiTypes: aiTypes.slice(0, 3),
    markets: markets.slice(0, 3),
    industries: industries.slice(0, 2),
  };
}

function processCompanyFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);

  if (fileName === 'index.ts') return null;

  // Extract description
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const nameMatch = content.match(/name:\s*['"`]([^'"`]+)['"`]/);
  const levelMatch = content.match(/aiNativeLevel:\s*['"`]([ABCD])['"`]/);

  if (!descMatch || !nameMatch) {
    console.log(`Skipping ${fileName}: missing description or name`);
    return null;
  }

  const description = descMatch[1];
  const name = nameMatch[1];
  const aiNativeLevel = levelMatch ? levelMatch[1] : 'C';

  const tags = inferTags(description, name, aiNativeLevel);

  // Check if tags already exist
  if (content.includes('aiTypes:')) {
    console.log(`Skipping ${fileName}: already has tags`);
    return null;
  }

  // Find insertion point (after remote field)
  const remotePattern = /(\s*remote\??\s*:\s*['"`](?:Yes|Hybrid|No|Unknown)['"`]\s*,?\s*\n)/;
  const match = content.match(remotePattern);

  if (!match) {
    // Try inserting after headquarters
    const hqPattern = /(\s*headquarters\s*:\s*['"`][^'"`]+['"`]\s*,?\s*\n)/;
    const hqMatch = content.match(hqPattern);

    if (hqMatch) {
      const tagsStr = `
  // Multi-dimensional Tags
  aiTypes: [${tags.aiTypes.map(t => `'${t}'`).join(', ')}],
  markets: [${tags.markets.map(m => `'${m}'`).join(', ')}],
  industries: [${tags.industries.map(i => `'${i}'`).join(', ')}],
`;
      const newContent = content.replace(hqPattern, `$1${tagsStr}\n`);
      return { filePath, newContent, tags };
    }

    console.log(`Skipping ${fileName}: couldn't find insertion point`);
    return null;
  }

  const tagsStr = `
  // Multi-dimensional Tags
  aiTypes: [${tags.aiTypes.map(t => `'${t}'`).join(', ')}],
  markets: [${tags.markets.map(m => `'${m}'`).join(', ')}],
  industries: [${tags.industries.map(i => `'${i}'`).join(', ')}],
`;

  const newContent = content.replace(remotePattern, `$1${tagsStr}\n`);

  return { filePath, newContent, tags, name };
}

// Main
const files = fs.readdirSync(companiesDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => path.join(companiesDir, f));

console.log(`Processing ${files.length} company files...\n`);

let processed = 0;
let skipped = 0;

for (const file of files) {
  const result = processCompanyFile(file);
  if (result) {
    fs.writeFileSync(result.filePath, result.newContent);
    console.log(`✓ ${path.basename(file)}: ${result.tags.aiTypes.join(', ')} | ${result.tags.markets.join(', ')} | ${result.tags.industries.join(', ')}`);
    processed++;
  } else {
    skipped++;
  }
}

console.log(`\n✅ Processed: ${processed}`);
console.log(`⏭️  Skipped: ${skipped}`);
