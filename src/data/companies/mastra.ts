import { Company } from '../types';

export const mastra: Company = {
  id: 'mastra',
  name: 'Mastra',
  description: 'The Typescript agent framework.',
  website: 'https://mastra.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://mastra.ai/api/og/page?title=The%20TypeScript%20Agent%20Framework',
  screenshot: '/screenshots/mastra-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$13M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'The Typescript agent framework.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'The Typescript agent framework',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: [
    'Unknown',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sam Bhagwat',
      role: 'Co-founder & CEO',
      background: 'Co-founded Gatsby (used by hundreds of thousands of developers); YC-backed.',
    },
    {
      name: 'Shane Thomas',
      role: 'Co-founder',
      background: 'Former staff engineer and head of product at Gatsby.',
    },
    {
      name: 'Abhi Aiyer',
      role: 'Co-founder',
      background: 'Former principal engineer at Gatsby.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Unknown'],
    },
    evaluation: {
      level: 'low',
      tasks: ['Unknown'],
    },
    interface: {
      level: 'medium',
      tasks: ['Unknown'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Unknown',
  },
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
  lastUpdated: '2026-02-01T12:30:00',
  sources: [
    { title: 'Source', url: 'https://mastra.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/mastra' }
  ],
};
