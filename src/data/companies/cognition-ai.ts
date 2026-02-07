import { Company } from '../types';

export const cognitionAi: Company = {
  id: 'cognition-ai',
  name: 'Cognition',
  description: 'The first software engineer.',
  website: 'https://cognition.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cognition.ai/assets/images/cover.jpg',
  screenshot: '/screenshots/cognition-ai-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$400M',
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
  marketPosition: 'The first software engineer',
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
      name: 'Scott Wu',
      role: 'Co-founder & CEO',
      background: 'Three-time gold medalist at the International Olympiad in Informatics (IOI), placing 1st in 2014; also co-founded Lunchclub.',
    },
    {
      name: 'Steven Hao',
      role: 'Co-founder',
      background: 'Gold medalist at the International Olympiad in Informatics (IOI); co-founded Cognition in August 2023 to build Devin, the first AI software engineer.',
    },
    {
      name: 'Walden Yan',
      role: 'Co-founder',
      background: 'Gold medalist at the International Olympiad in Informatics (IOI); co-founded Cognition to build autonomous AI software engineering.',
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
  lastUpdated: '2026-02-01T13:20:00',
  sources: [
    { title: 'Cognition', url: 'https://cognition.ai' },
    { title: 'Cognition on startups.gallery', url: 'https://startups.gallery/companies/cognition-ai' },
  ],
};
