import { Company } from '../types';

export const swae: Company = {
  id: 'swae',
  name: 'Swae',
  description: 'Idea meritocracy and innovation platform that helps organizations surface and evaluate ideas with AI support.',
  website: 'https://swae.io',
  headquarters: 'Vancouver, BC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$1.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Organizations running internal innovation and decision workflows',

  // Competition
  competitors: [
    {
      name: 'Brightidea',
      description: 'Enterprise innovation management platform.',
      whyTheyWin: 'Established enterprise innovation workflows.',
    },
    {
      name: 'Ideanote',
      description: 'Idea management and innovation software.',
      whyTheyWin: 'Simple onboarding and ideation workflows.',
    },
    {
      name: 'Spigit',
      description: 'Innovation management software for enterprises.',
      whyTheyWin: 'Deep enterprise integrations and reporting.',
    },
  ],
  marketPosition: 'Idea meritocracy platform for enterprise innovation and decision making.',
  moat: ['Structured idea evaluation workflows', 'Decision intelligence focus'],
  vsGiants: 'Differentiates with lightweight, AI-assisted idea evaluation.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI augments idea evaluation and decision support workflows.',
  aiDesignChallenges: [
    'Designing unbiased idea evaluation experiences',
    'Making collaboration and voting scalable',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Soushiant Zanganehpour',
      role: 'Founder',
      background: 'Founded Swae to enable collective intelligence inside organizations.',
    },
  ],
  whyBuilding: 'Help organizations make better decisions by capturing collective intelligence.',
  beliefs: ['Best ideas can come from anywhere', 'Structured feedback reduces bias'],
  greenFlags: ['Clear innovation workflow niche'],
  redFlags: ['Idea management tools can be underutilized'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Scoring and evaluation workflow UX'] },
    evaluation: { level: 'medium', tasks: ['Idea ranking and feedback analytics'] },
    interface: { level: 'medium', tasks: ['Idea submission and collaboration UI'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Innovation leaders and strategy teams',
    secondary: 'Cross-functional teams contributing ideas',
  },
  userProblems: [
    'Organizations struggle to surface high-quality ideas',
    'Decision-making is slow and biased without structured input',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Decision workflow UX challenges'],
    whyNot: ['Adoption risk for innovation platforms'],
    nextActions: ['Validate product maturity and hiring signals'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$1.1M total funding (Seedtable)'],
    tam: 'Enterprise innovation and idea management market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into broader decision intelligence tooling',
    tailwinds: ['Enterprise demand for innovation workflows'],
    headwinds: ['Innovation tools often deprioritized'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T20:45:00',
  sources: [
    { title: 'Source', url: 'https://swae.io' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
