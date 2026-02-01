// Auto-generated company ID to domain mapping
// Used for fetching favicons in articles

export const companyDomains: Record<string, string> = {
  'anthropic': 'anthropic.com',
  'openai': 'openai.com',
  'linear': 'linear.app',
  'cursor': 'cursor.com',
  'replit': 'replit.com',
  'vercel': 'vercel.com',
  'perplexity': 'perplexity.ai',
  'xai': 'x.ai',
  'elevenlabs': 'elevenlabs.io',
  'mistral-ai': 'mistral.ai',
  'harvey': 'harvey.ai',
  'pika': 'pika.art',
  'granola': 'granola.ai',
  'toma': 'toma.tech',
  'listen-labs': 'listenlabs.ai',
};

export function getCompanyDomain(companyId: string): string | null {
  return companyDomains[companyId] || null;
}
