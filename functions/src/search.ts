import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

const anthropicApiKey = defineSecret('ANTHROPIC_API_KEY');

const SYSTEM_PROMPT = `You are Upcider, an AI career advisor for product designers at AI companies.

Given a filtered list of relevant companies, recommend the best matches for the user's query.

RULES:
- Always respond in the same language the user uses (Korean or English)
- Recommend 3-5 companies with specific reasons
- Reference actual data from the company list (stage, region, remote, open roles)
- Be honest about data gaps
- Format company names as links: [Company Name](/company/{id})
- Keys in company data: id, name, desc (description), level (AI-native level A-D), cat (category), stage (funding stage), region, remote, roles (open role count), titles (role titles)`;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type CompactCompany = {
  id: string;
  name: string;
  desc: string;
  level: string;
  cat: string;
  stage: string;
  region: string;
  remote: string;
  roles: number;
  titles?: string[];
};

function loadSearchIndex(): Record<string, CompactCompany> {
  const candidates = [
    path.join(__dirname, '../data/search-index.json'),
    path.join(__dirname, '../../src/data/search-index.json'),
    path.join(process.cwd(), 'src/data/search-index.json'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return JSON.parse(fs.readFileSync(candidate, 'utf-8')) as Record<string, CompactCompany>;
    }
  }

  throw new Error('search-index.json not found');
}

function filterCompanies(
  index: Record<string, CompactCompany>,
  query: string,
  limit = 40
): CompactCompany[] {
  const q = query.toLowerCase();
  const entries = Object.values(index);

  const scored = entries.map((company) => {
    let score = 0;
    const text = `${company.name} ${company.desc} ${company.cat} ${(company.titles ?? []).join(' ')}`.toLowerCase();

    // keyword match in name/desc/cat
    const words = q.split(/\s+/).filter((w) => w.length > 2);
    for (const word of words) {
      if (text.includes(word)) score += 5;
    }

    // region
    if ((q.includes('sf') || q.includes('san francisco') || q.includes('bay area')) && company.region === 'sf-bay-area') score += 15;
    if ((q.includes('nyc') || q.includes('new york')) && company.region === 'nyc') score += 15;
    if (q.includes('remote') && company.remote === 'Yes') score += 15;
    if (q.includes('hybrid') && company.remote === 'Hybrid') score += 10;

    // stage
    if ((q.includes('series a') || q.includes('series-a')) && company.stage === 'series-a') score += 15;
    if ((q.includes('series b') || q.includes('series-b')) && company.stage === 'series-b') score += 15;
    if ((q.includes('series c') || q.includes('series-c')) && company.stage === 'series-c') score += 15;
    if ((q.includes('seed') || q.includes('early')) && (company.stage === 'seed' || company.stage === 'pre-seed')) score += 15;
    if ((q.includes('0→1') || q.includes('0-1') || q.includes('early stage')) && ['seed', 'pre-seed', 'series-a'].includes(company.stage)) score += 10;

    // AI level
    if ((q.includes('level a') || q.includes('ai native') || q.includes('ai-native')) && company.level === 'A') score += 10;

    // has open roles
    if (company.roles > 0) score += 3;
    if ((q.includes('hiring') || q.includes('open role') || q.includes('role') || q.includes('job')) && company.roles > 0) score += 10;

    return { company, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.company);
}

export const search = onRequest(
  {
    secrets: [anthropicApiKey],
    cors: [
      'https://aido-d2cc0.web.app',
      /https:\/\/aido-d2cc0--.*\.web\.app$/,
      'http://localhost:3000',
    ],
    timeoutSeconds: 60,
    memory: '256MiB',
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed');
      return;
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const message = body?.message;
    const history = (body?.history ?? []) as ChatMessage[];

    if (!message || typeof message !== 'string') {
      res.status(400).send('Missing message');
      return;
    }

    let searchIndex: Record<string, CompactCompany>;
    try {
      searchIndex = loadSearchIndex();
    } catch (error) {
      console.error('Failed to load search index:', error);
      res.status(500).send('Search index unavailable');
      return;
    }

    // Filter to top ~40 relevant companies instead of sending all 500+
    const relevant = filterCompanies(searchIndex, message);
    const client = new Anthropic({ apiKey: anthropicApiKey.value() });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      const userMessageWithContext = `Relevant companies (${relevant.length} of ${Object.keys(searchIndex).length} total, pre-filtered for your query):\n${JSON.stringify(relevant)}\n\nQuery: ${message}`;

      const stream = await client.messages.stream({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        system: [
          {
            type: 'text' as const,
            text: SYSTEM_PROMPT,
            cache_control: { type: 'ephemeral' as const },
          },
        ],
        messages: [
          ...history
            .filter((h) => (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
            .slice(-6) // last 3 exchanges only
            .map((h) => ({ role: h.role, content: h.content })),
          { role: 'user', content: userMessageWithContext },
        ],
      });

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
        }
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error) {
      console.error('Search error:', error);
      res.write(`data: ${JSON.stringify({ error: 'Search failed' })}\n\n`);
      res.end();
    }
  }
);
