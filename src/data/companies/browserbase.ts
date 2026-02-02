import { Company } from '../types';

export const browserbase: Company = {
  id: 'browserbase',
  name: 'Browserbase',
  description: 'A web browser for your AI.',
  website: 'https://www.browserbase.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.browserbase.com/assets/social_share.png?v=2',
  screenshot: 'https://iad.microlink.io/PyikUqr7w8KED0l4hBEpB-VhzZM1g-EzI_5976H5PYkUl8iBIod8_ZV9BLLv4P-SuF8pfG8Y3VrM_nor6SkNSA.png',

  // Multi-dimensional Tags
  aiTypes: ['agent', 'automation'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$300M',
  totalFunding: '$67.5M',
  revenue: '~$3M (first 16 months)',
  growth: 'Zero to $67.5M raised in ~18 months',
  runway: 'Unknown',
  customers: '1,000+ orgs, 20K+ developers',

  // Competition
  competitors: [
    { name: 'Steel.dev', description: 'Open-source headless browser API', whyTheyWin: 'Open-source, sub-1s session start' },
    { name: 'Apify', description: 'Full-stack cloud automation with 4K+ pre-built actors', whyTheyWin: 'Pre-built scrapers, large marketplace' },
    { name: 'Bright Data', description: 'Large-scale scraping with proxy network', whyTheyWin: 'Massive proxy infrastructure' },
  ],
  marketPosition: 'Leading cloud browser infrastructure for AI agents — #1 by funding, powering 50M+ sessions for Perplexity and Vercel',
  moat: ['First mover in AI browser infra', 'Open-source Stagehand (20.6K stars)', 'Network of top-tier angel investors'],
  vsGiants: 'Traditional scraping tools not built for AI agents; Browserbase purpose-built for agentic web interaction',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Paul Klein IV', role: 'Founder & CEO', background: 'SFSU. Former Tech Lead at Twilio, Director at Mux. a16z scout at Hawk Hill Ventures.' },
  ],
  whyBuilding: 'AI agents need to interact with the web — but headless browsers are painful. Cloud browser infrastructure makes it trivial.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Developers building AI agents that interact with the web' },
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
  lastUpdated: '2026-02-02T17:30:00',
  sources: [
    { title: 'Browserbase', url: 'https://www.browserbase.com' },
    { title: 'Browserbase on startups.gallery', url: 'https://startups.gallery/companies/browserbase' },
  ],
};
