import { Company } from '../types';

export const mem: Company = {
  id: 'mem',
  name: 'Mem',
  description: 'Your AI knowledge assistant.',
  website: 'https://mem.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://storage.googleapis.com/mem-public-assets/sq-f.jpg',
  screenshot: '/screenshots/mem-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$23.5M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'Your AI knowledge assistant.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'Your AI knowledge assistant',
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
      name: 'Kevin Moody',
      role: 'Co-founder & Co-CEO',
      background: 'Former PM at Google and software engineer at Google X; Stanford CS graduate focused on Systems & AI.',
    },
    {
      name: 'Dennis Xu',
      role: 'Co-founder & Co-CEO',
      background: 'Co-founded Mem to build the world\'s first self-organizing workspace powered by AI.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
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
    { title: 'Source', url: 'https://mem.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/mem' }
  ],
};
