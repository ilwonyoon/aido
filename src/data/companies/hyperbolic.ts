import { Company } from '../types';

export const hyperbolic: Company = {
  id: 'hyperbolic',
  name: 'Hyperbolic',
  description: 'Building the open-access AI cloud.',
  website: 'https://hyperbolic.xyz',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.hyperbolic.ai/open-graph.png',
  screenshot: '/screenshots/hyperbolic-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$12M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'Unknown',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'Building the open-access AI cloud',
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
      name: 'Jasper (Yue) Zhang',
      role: 'Co-founder & CEO',
      background: 'PhD in Mathematics from UC Berkeley completed in two years; gold medalist at Alibaba Global Math Competition; former Citadel Securities and Avalanche Labs.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
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
  lastUpdated: '2026-02-01T12:45:00',
  sources: [
    { title: 'Source', url: 'https://hyperbolic.xyz' },
    { title: 'Source', url: 'https://startups.gallery/companies/hyperbolic' }
  ],
};
