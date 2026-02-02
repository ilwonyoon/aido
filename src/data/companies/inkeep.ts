import { Company } from '../types';

export const inkeep: Company = {
  id: 'inkeep',
  name: 'Inkeep',
  description: 'AI support you can trust.',
  website: 'https://www.inkeep.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://inkeep.com/images/og-image.png',
  screenshot: '/screenshots/inkeep-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['agent', 'search-retrieval'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$13M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Anthropic, Midjourney, Clay, PostHog',

  // Competition
  competitors: [
    { name: 'Kapa.ai', description: 'AI-powered documentation assistant for developer-facing products', whyTheyWin: 'Developer docs specialization' },
    { name: 'Mendable', description: 'YC-backed chat-powered search for docs', whyTheyWin: 'One-line deployment simplicity' },
    { name: 'Glean', description: 'Enterprise AI search across all company apps ($4.6B valuation)', whyTheyWin: 'Enterprise scale and funding' },
  ],
  marketPosition: 'No-code + code AI agent platform for CX/ops teams, transforming documentation into conversational AI assistants — serves Anthropic, Midjourney, Clay, PostHog',
  moat: ['Anthropic + Midjourney as customers', 'Khosla Ventures + YC backing', 'Two-way sync between no-code builder and TypeScript SDK'],
  vsGiants: 'Glean targets broad enterprise search; Inkeep specializes in turning product documentation into AI-powered customer support agents',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Nick Gomez', role: 'Co-Founder & CEO', background: 'MIT (Business & CS). Previously at Microsoft leading developer experiences in identity space for 3 years.' },
    { name: 'Robert Tran', role: 'Co-Founder & CTO', background: 'MIT (MS in CS, BS in CS & Math). Former Head of Engineering at illumis (acquired by ComplySci).' },
  ],
  whyBuilding: 'Product documentation is a goldmine of support knowledge, but customers still struggle to find answers. AI agents should surface the right docs instantly.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '11-50 employees (startups.gallery)' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Developer-facing companies needing AI-powered documentation search and support' },
  userProblems: ['Unknown'],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Unknown'],
    whyNot: ['Unknown'],
    nextActions: ['Research'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Unknown'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Unknown',
    tailwinds: ['Unknown'],
    headwinds: ['Unknown'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-02T18:00:00',
  sources: [
    { title: 'Inkeep', url: 'https://www.inkeep.com' },
    { title: 'Inkeep on startups.gallery', url: 'https://startups.gallery/companies/inkeep' },
  ],
};
