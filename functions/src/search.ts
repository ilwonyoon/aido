import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

const anthropicApiKey = defineSecret('ANTHROPIC_API_KEY');

// ── Types ──────────────────────────────────────────────────────────

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

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

// ── Intent Schema ──────────────────────────────────────────────────

const IntentSchema = z.object({
  region: z.array(z.string()).default([]),
  stage: z.array(z.string()).default([]),
  level: z.array(z.string()).default([]),
  cat: z.array(z.string()).default([]),
  remote: z.enum(['yes', 'no', 'any']).default('any'),
  hasRoles: z.enum(['required', 'preferred', 'any']).default('preferred'),
  companies: z.array(z.string()).default([]),
  follow_up: z.boolean().default(false),
  needs_clarification: z.boolean().default(false),
  clarification_question: z.string().nullable().default(null),
});

type Intent = z.infer<typeof IntentSchema>;

// ── Prompts ────────────────────────────────────────────────────────

const INTENT_PROMPT = `Extract search filters from the user query. Return ONLY valid JSON matching this schema:
{
  "region": string[],     // sf-bay-area, nyc, seattle, boston, austin, la, toronto, london, remote-only, other-us, other-intl
  "stage": string[],      // pre-seed, seed, series-a, series-b, series-c, series-d-plus, growth, other
  "level": string[],      // A, B, C, D
  "cat": string[],        // ai-models, developer-tools, creative-media, productivity, sales-marketing, enterprise-ops, vertical-saas, healthcare, fintech, security, robotics, data-infrastructure, hr-recruiting, legal, education, climate-energy, biotech
  "remote": "yes"|"no"|"any",
  "hasRoles": "required"|"preferred"|"any",
  "companies": string[],  // company names mentioned by user (exact as typed)
  "follow_up": boolean,   // true if referencing previous conversation
  "needs_clarification": boolean,
  "clarification_question": string|null
}

Rules:
- "0→1" or "early stage" → stage: ["seed","pre-seed","series-a"]
- "growth" or "late stage" → stage: ["series-c","series-d-plus","growth"]
- If query is too vague to filter (e.g. "추천해줘", "help"), set needs_clarification=true
- For clarification_question, respond in the SAME LANGUAGE as the query
- Return ONLY JSON. No markdown fences. No explanation.`;

const RECOMMEND_PROMPT = `You are Upcider, an AI career advisor for product designers at AI companies.

Given a filtered list of relevant companies, recommend the best matches.

RULES:
- Respond in the same language the user uses
- Recommend 3-5 companies with specific reasons
- Reference actual data from the list (stage, region, remote, open roles)
- Be honest about data gaps
- Format company names as links: [Company Name](/company/{id})
- For every recommended company, include this link line:
  [Company](/company/{id}) · [Jobs](/jobs) · [Insights](/insights)
- Use this structure:
  1) short summary
  2) "### [Company Name](/company/{id})" sections (one company per section)
  3) concise next-step suggestions
- Data keys: id, name, desc, level (AI-native A-D), cat, stage, region, remote, roles (count), titles (role names)`;

// ── Module-level Cache ─────────────────────────────────────────────

let cachedIndex: Record<string, CompactCompany> | null = null;
let cachedLookup: Record<string, string> | null = null;

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

function getSearchData(): { index: Record<string, CompactCompany>; lookup: Record<string, string> } {
  if (!cachedIndex) {
    cachedIndex = loadSearchIndex();
    cachedLookup = buildNameLookup(cachedIndex);
  }
  return { index: cachedIndex, lookup: cachedLookup! };
}

// ── Name Lookup ────────────────────────────────────────────────────

function buildNameLookup(index: Record<string, CompactCompany>): Record<string, string> {
  const lookup: Record<string, string> = {};
  for (const [id, company] of Object.entries(index)) {
    lookup[company.name.toLowerCase()] = id;
    lookup[id.toLowerCase()] = id;
  }
  return lookup;
}

function resolveCompanyNames(
  names: string[],
  lookup: Record<string, string>,
  index: Record<string, CompactCompany>
): CompactCompany[] {
  const resolved: CompactCompany[] = [];
  const seen = new Set<string>();

  for (const name of names) {
    const key = name.toLowerCase();

    // Exact match by name or ID
    const exactId = lookup[key];
    if (exactId && index[exactId] && !seen.has(exactId)) {
      resolved.push(index[exactId]);
      seen.add(exactId);
      continue;
    }

    // Fuzzy: company name includes query or vice versa
    const match = Object.values(index).find(
      (c) =>
        !seen.has(c.id) &&
        (c.name.toLowerCase().includes(key) || key.includes(c.name.toLowerCase()))
    );
    if (match) {
      resolved.push(match);
      seen.add(match.id);
    }
  }

  return resolved;
}

// ── Intent Extraction (Call 1) ─────────────────────────────────────

function buildHistoryContext(history: ChatMessage[], maxMessages = 4): string {
  const recent = history
    .filter((h) => (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
    .slice(-maxMessages)
    .map((h) => `${h.role.toUpperCase()}: ${h.content.slice(0, 240)}`);

  return recent.join('\n');
}

function inferCompaniesFromHistory(
  history: ChatMessage[],
  lookup: Record<string, string>,
  index: Record<string, CompactCompany>
): string[] {
  const inferred: string[] = [];
  const seen = new Set<string>();
  const recent = history
    .filter((h) => typeof h.content === 'string')
    .slice(-8)
    .reverse();

  for (const item of recent) {
    const content = item.content;
    const idMatches = content.matchAll(/\(\/company\/([a-z0-9-]+)\)/g);
    for (const m of idMatches) {
      const id = m[1];
      if (index[id] && !seen.has(id)) {
        seen.add(id);
        inferred.push(id);
      }
    }

    if (inferred.length >= 3) break;

    const tokens = content
      .toLowerCase()
      .split(/[^a-z0-9-]+/)
      .filter(Boolean);

    for (const token of tokens) {
      const hit = lookup[token];
      if (hit && index[hit] && !seen.has(hit)) {
        seen.add(hit);
        inferred.push(hit);
      }
      if (inferred.length >= 3) break;
    }

    if (inferred.length >= 3) break;
  }

  return inferred;
}

async function extractIntent(client: Anthropic, message: string, history: ChatMessage[]): Promise<Intent> {
  const historyContext = buildHistoryContext(history);
  const contextMessage = historyContext
    ? `Conversation context:\n${historyContext}\n\nCurrent user query:\n${message}`
    : message;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 300,
    system: INTENT_PROMPT,
    messages: [{ role: 'user', content: contextMessage }],
  });

  const text = response.content[0]?.type === 'text' ? response.content[0].text : '';

  // Layer 1: direct parse
  try {
    return IntentSchema.parse(JSON.parse(text));
  } catch { /* fall through */ }

  // Layer 2: regex extract
  const match = text.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      return IntentSchema.parse(JSON.parse(match[0]));
    } catch { /* fall through */ }
  }

  // Layer 3: fallback to empty intent (matches everything)
  return IntentSchema.parse({});
}

// ── Intent-based Filtering ─────────────────────────────────────────

function filterByIntent(
  index: Record<string, CompactCompany>,
  intent: Intent,
  limit = 15
): CompactCompany[] {
  const entries = Object.values(index);

  const scored = entries.map((company) => {
    let score = 0;

    if (intent.region.length > 0) {
      score += intent.region.includes(company.region) ? 20 : -5;
    }

    if (intent.stage.length > 0) {
      score += intent.stage.includes(company.stage) ? 20 : -5;
    }

    if (intent.level.length > 0) {
      score += intent.level.includes(company.level) ? 15 : -3;
    }

    if (intent.cat.length > 0) {
      score += intent.cat.includes(company.cat) ? 15 : -3;
    }

    if (intent.remote === 'yes' && (company.remote === 'Yes' || company.region === 'remote-only')) {
      score += 15;
    }

    if (company.roles > 0) {
      score += intent.hasRoles === 'required' ? 20 : intent.hasRoles === 'preferred' ? 10 : 3;
    } else if (intent.hasRoles === 'required') {
      score -= 50;
    }

    return { company, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.company);
}

// ── SSE Helpers ────────────────────────────────────────────────────

type SseResponse = {
  write: (chunk: string) => void;
  end: () => void;
};

function ssePhase(res: SseResponse, phase: string) {
  res.write(`data: ${JSON.stringify({ phase })}\n\n`);
}

function sseText(res: SseResponse, text: string) {
  res.write(`data: ${JSON.stringify({ text })}\n\n`);
}

function sseDone(res: SseResponse) {
  res.write('data: [DONE]\n\n');
  res.end();
}

// ── Main Handler ───────────────────────────────────────────────────

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

    let index: Record<string, CompactCompany>;
    let lookup: Record<string, string>;
    try {
      const data = getSearchData();
      index = data.index;
      lookup = data.lookup;
    } catch (error) {
      console.error('Failed to load search index:', error);
      res.status(500).send('Search index unavailable');
      return;
    }

    const client = new Anthropic({ apiKey: anthropicApiKey.value() });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      // ── Call 1: Intent extraction (no company data) ──
      ssePhase(res, 'analyzing');
      let intent = await extractIntent(client, message, history);

      const looksLikeFollowUp = /\b(them|they|it|that company|that one)\b/i.test(message)
        || /(그 회사|그곳|거기|걔네|거긴)/.test(message);

      if (intent.companies.length === 0 && (intent.follow_up || looksLikeFollowUp)) {
        const inferredCompanyIds = inferCompaniesFromHistory(history, lookup, index);
        if (inferredCompanyIds.length > 0) {
          intent = {
            ...intent,
            companies: inferredCompanyIds,
            needs_clarification: false,
            clarification_question: null,
          };
        }
      }

      // ── Branch: Clarification needed ──
      if (intent.needs_clarification && intent.clarification_question) {
        sseText(res, intent.clarification_question);
        sseDone(res);
        return;
      }

      // ── Server-side filter ──
      ssePhase(res, 'searching');
      let filtered: CompactCompany[];

      if (intent.companies.length > 0) {
        // Specific companies mentioned → resolve by name
        filtered = resolveCompanyNames(intent.companies, lookup, index);
        // If resolution failed, fallback to intent filter
        if (filtered.length === 0) {
          filtered = filterByIntent(index, intent);
        }
      } else {
        filtered = filterByIntent(index, intent);
      }

      // ── Call 2: Recommendation (filtered companies only) ──
      const companyContext = `Matching companies (${filtered.length} of ${Object.keys(index).length}):\n${JSON.stringify(filtered)}`;

      const stream = await client.messages.stream({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        system: [
          {
            type: 'text' as const,
            text: RECOMMEND_PROMPT,
            cache_control: { type: 'ephemeral' as const },
          },
        ],
        messages: [
          ...history
            .filter((h) => (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
            .slice(-6)
            .map((h) => ({ role: h.role, content: h.content })),
          { role: 'user', content: `${companyContext}\n\nQuery: ${message}` },
        ],
      });

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          sseText(res, event.delta.text);
        }
      }

      sseDone(res);
    } catch (error) {
      console.error('Search error:', error);
      res.write(`data: ${JSON.stringify({ error: 'Search failed' })}\n\n`);
      res.end();
    }
  }
);
