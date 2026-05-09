import { Company } from '../types';

export const axiom: Company = {
  id: 'axiom',
  name: 'Axiom',
  description: 'Logging, re-invented.',
  website: 'https://axiom.co',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://axiom.co/social-card-main.png',
  screenshot: 'https://iad.microlink.io/Q_Mh58xPczPNaUqzHMZxg8crEQDu7pygREpCfqFBIanD6MRS_bj2O3oNOKUqGBrU_6uEszTz79-9ZlXzjcC7Dw.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$15M',
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
  marketPosition: 'Logging, re-invented',
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
      name: 'Neil Jagdish Patel',
      role: 'Co-founder & CEO',
      background: 'Co-founded Axiom to reinvent logging and observability with a serverless approach to event data storage.',
    },
    {
      name: 'Seif Lotfy',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder building Axiom\'s cloud-native log management and observability platform.',
    },
    {
      name: 'Gordon Allott',
      role: 'Co-founder',
      background: 'Co-founded Axiom to build next-generation logging infrastructure for developers.',
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
  lastUpdated: '2026-02-01T13:05:00',
  sources: [
    { title: 'Source', url: 'https://axiom.co' },
    { title: 'Source', url: 'https://startups.gallery/companies/axiom' }
  ],
};
