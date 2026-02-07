import { Company } from '../types';

export const kaedim: Company = {
  id: 'kaedim',
  name: 'Kaedim',
  description: 'Production ready on-demand 3D models.',
  website: 'https://www.kaedim3d.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://kaedim3d.com/opengraph-image.png?1d7674bc16ebb20a',
  screenshot: '/screenshots/kaedim-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
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
  marketPosition: 'Production ready on-demand 3D models',
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
      name: 'Konstantina Psoma',
      role: 'Co-founder & CEO',
      background: 'Grew up in Athens watching her father build software and mother immerse in art; co-founded Kaedim while studying CS at Bristol University.',
    },
    {
      name: 'Roman Bromidge',
      role: 'Co-founder & CTO',
      background: 'Co-founded Kaedim in 2019 while studying CS at Bristol University; focused on ML-powered 2D to 3D conversion.',
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
  lastUpdated: '2026-02-01T13:05:00',
  sources: [
    { title: 'Kaedim', url: 'https://www.kaedim3d.com' },
    { title: 'Kaedim on startups.gallery', url: 'https://startups.gallery/companies/kaedim' },
  ],
};
