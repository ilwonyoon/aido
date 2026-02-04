import type { Company } from '@/data/types';

// Parse funding amount strings like "$27B+", "$3.6B", "$228M", "$24M" to millions
export function parseFundingAmount(str: string | undefined): number {
  if (!str || str === 'Unknown' || str === 'N/A') return 0;

  const cleaned = str.replace(/[,$+~]/g, '').trim();
  const match = cleaned.match(/([\d.]+)\s*(B|M|K)?/i);
  if (!match) return 0;

  const num = parseFloat(match[1]);
  if (isNaN(num)) return 0;

  const suffix = (match[2] || '').toUpperCase();
  if (suffix === 'B') return num * 1000;
  if (suffix === 'K') return num / 1000;
  return num; // default: millions
}

// Funding stage score (0-30)
function getFundingStageScore(stage: string): number {
  const s = stage.toLowerCase();
  if (s.includes('series f')) return 30;
  if (s.includes('series e')) return 27;
  if (s.includes('series d')) return 25;
  if (s.includes('series c')) return 22;
  if (s.includes('series b')) return 18;
  if (s.includes('series a')) return 14;
  if (s === 'seed') return 8;
  if (s.includes('pre-seed') || s.includes('pre-series')) return 5;
  if (s.includes('public') || s.includes('ipo')) return 30;
  return 3;
}

// Total funding amount score (0-30), logarithmic scale in millions
function getFundingAmountScore(totalFunding: string | undefined): number {
  const amount = parseFundingAmount(totalFunding);
  if (amount <= 0) return 0;
  if (amount >= 5000) return 30;  // $5B+
  if (amount >= 1000) return 25;  // $1B+
  if (amount >= 500) return 20;   // $500M+
  if (amount >= 200) return 15;   // $200M+
  if (amount >= 50) return 10;    // $50M+
  if (amount >= 10) return 5;     // $10M+
  return 2;
}

const TOP_ORGS = [
  'openai', 'google', 'deepmind', 'meta', 'apple', 'stripe',
  'anthropic', 'microsoft', 'amazon', 'tesla', 'spacex',
  'airbnb', 'coinbase', 'uber', 'square', 'palantir',
  'figma', 'notion', 'vercel', 'linear',
];

const ELITE_SCHOOLS = [
  'phd', 'stanford', 'mit', 'harvard', 'cmu', 'carnegie mellon',
  'berkeley', 'caltech', 'oxford', 'cambridge', 'princeton', 'yale',
];

const LEADERSHIP_ROLES = [
  'vp ', 'vice president', 'cto', 'ceo', 'cpo', 'coo', 'cfo',
  'head of', 'director', 'principal', 'staff engineer', 'staff designer',
  'chief', 'partner at',
];

const COMPETITION_RESEARCH = [
  'ioi', 'icpc', 'acm', 'gold medal', 'deepmind', 'google brain',
  'fair', 'research scientist', 'research lead',
];

const FOUNDER_SIGNALS = [
  'co-founded', 'co-founder', 'founded', 'founder of',
  'acquired', 'yc', 'y combinator', 'techstars',
  'serial entrepreneur', 'exited',
];

// Score a single founder's background (0-30)
function scoreFounderBackground(background: string): number {
  if (!background || background === 'Unknown') return 0;

  const bg = background.toLowerCase();
  let score = 0;

  // Top org experience (+8)
  if (TOP_ORGS.some(org => bg.includes(org))) {
    score += 8;
  }

  // Leadership seniority (+6)
  if (LEADERSHIP_ROLES.some(role => bg.includes(role))) {
    score += 6;
  }

  // Elite education (+5)
  if (ELITE_SCHOOLS.some(school => bg.includes(school))) {
    score += 5;
  }

  // Competition/research (+5)
  if (COMPETITION_RESEARCH.some(sig => bg.includes(sig))) {
    score += 5;
  }

  // Previous founder/exit (+6)
  if (FOUNDER_SIGNALS.some(sig => bg.includes(sig))) {
    score += 6;
  }

  return Math.min(score, 30);
}

// Founder strength score (0-30), averaged across all founders
function getFounderScore(company: Company): number {
  const { founders } = company;
  if (!founders || founders.length === 0) return 0;

  const scores = founders.map(f => scoreFounderBackground(f.background));
  const maxScore = Math.max(...scores);
  const avgScore = scores.reduce((sum, s) => sum + s, 0) / scores.length;

  // Weight toward strongest founder (70% max, 30% avg)
  return Math.min(Math.round(maxScore * 0.7 + avgScore * 0.3), 30);
}

// Revenue bonus (0-10)
function getRevenueScore(revenue: string | undefined): number {
  const amount = parseFundingAmount(revenue);
  if (amount <= 0) return 0;
  if (amount >= 1000) return 10; // $1B+ ARR
  if (amount >= 500) return 8;
  if (amount >= 200) return 6;
  if (amount >= 50) return 4;
  if (amount >= 10) return 2;
  return 1;
}

// Open roles bonus (0-15)
function getOpenRolesScore(company: Company): number {
  const count = company.openRoles.length;
  if (count === 0) return 0;
  if (count >= 3) return 15;
  if (count >= 2) return 12;
  return 8; // 1 role
}

// Combined company quality score (0-115)
export function getCompanyQualityScore(company: Company): number {
  const stageScore = getFundingStageScore(company.stage);
  const amountScore = getFundingAmountScore(company.totalFunding);
  const founderScore = getFounderScore(company);
  const revenueScore = getRevenueScore(company.revenue);
  const rolesScore = getOpenRolesScore(company);

  return stageScore + amountScore + founderScore + revenueScore + rolesScore;
}
