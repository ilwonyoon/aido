import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

const anthropicApiKey = defineSecret('ANTHROPIC_API_KEY');

const SYSTEM_PROMPT = `You are Upcider, an AI career advisor for product designers looking for opportunities at AI companies.

You have access to a database of {count} AI companies. When a user asks about companies or roles, analyze their preferences and recommend the best matches.

RULES:
- Always respond in the same language the user uses (Korean or English)
- Recommend 3-5 companies per query with specific reasons
- Reference actual data (funding, team size, open roles, design philosophy)
- Be honest about data gaps ("I don't have salary data for this company")
- Format company names as links: [Company Name](/company/{id})
- If the user asks about interview prep, use the company's designWorkType, aiDesignChallenges, and product info

COMPANY DATABASE:
{searchIndex}`;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

function loadSearchIndex() {
  const candidates = [
    path.join(__dirname, '../data/search-index.json'),
    path.join(__dirname, '../../src/data/search-index.json'),
    path.join(process.cwd(), '../src/data/search-index.json'),
    path.join(process.cwd(), 'src/data/search-index.json'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return JSON.parse(fs.readFileSync(candidate, 'utf-8')) as Record<string, unknown>;
    }
  }

  throw new Error('search-index.json not found');
}

export const search = onRequest(
  {
    secrets: [anthropicApiKey],
    cors: [
      'https://aido-d2cc0.web.app',
      /https:\/\/aido-d2cc0--.*\.web\.app$/,
      'http://localhost:3000',
    ],
    timeoutSeconds: 120,
    memory: '512MiB',
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

    let searchIndex: Record<string, unknown>;
    try {
      searchIndex = loadSearchIndex();
    } catch (error) {
      console.error('Failed to load search index:', error);
      res.status(500).send('Search index unavailable');
      return;
    }

    const companyCount = Object.keys(searchIndex).length;
    const client = new Anthropic({ apiKey: anthropicApiKey.value() });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      const systemText = SYSTEM_PROMPT
        .replace('{count}', String(companyCount))
        .replace('{searchIndex}', JSON.stringify(searchIndex));

      const stream = await client.messages.stream({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: [{
          type: 'text',
          text: systemText,
          cache_control: { type: 'ephemeral' },
        }] as any,
        messages: [
          ...history
            .filter((h) => (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
            .map((h) => ({ role: h.role, content: h.content })),
          { role: 'user', content: message },
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
