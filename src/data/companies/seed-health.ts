import { Company } from '../types';

export const seedHealth: Company = {
  id: 'seed-health',
  name: 'Seed',
  description: 'Microbes for human and planetary health Health & Wellness.',
  website: 'https://seed.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  screenshot: '/screenshots/seed-health-screenshot.png',
    ogImage: '/screenshots/seed-health-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$40M',
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
  marketPosition: 'Microbes for human and planetary health Health & Wellness',
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
    { name: 'Ara Katz', role: 'Co-Founder & Co-CEO', background: 'Previously founded an e-commerce startup. Invested in Mind Body Green. Led Seed to become Target\'s top-selling probiotics brand.' },
    { name: 'Raja Dhir', role: 'Co-Founder & Co-CEO', background: 'Life sciences entrepreneur. Leads Seed\'s R&D, clinical trial design, supply chain, and IP strategy.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '201-500 employees (startups.gallery)',
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
  lastUpdated: '2026-02-01T13:05:00',
  sources: [
    { title: 'Source', url: 'https://seed.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/seed-health' }
  ],
};
