import { Company } from '../types';

export const reducto: Company = {
  id: 'reducto',
  name: 'Reducto',
  description: 'Document ingestion API.',
  website: 'https://reducto.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://reducto.ai/opengraph-image-pztefn.png?dad257abe5b90369',
  screenshot: '/screenshots/reducto-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$75M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'Document ingestion API.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'Document ingestion API',
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
    { name: 'Adit Abraham', role: 'Co-Founder & CEO', background: 'Former Product Manager at Google (Ads and Search). Machine learning research at MIT Media Lab.' },
    { name: 'Raunak Chowdhuri', role: 'Co-Founder & CTO', background: 'Former engineer at Google and Nvidia. Co-founded Reducto in 2023.' },
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
  lastUpdated: '2026-02-01T12:30:00',
  sources: [
    { title: 'Source', url: 'https://reducto.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/reducto' }
  ],
};
