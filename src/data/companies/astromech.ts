import { Company } from '../types';

export const astromech: Company = {
  id: 'astromech',
  name: 'Astromech',
  description: 'Navigating the code of life.',
  website: 'https://www.astromech.bio',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/H5AHBdlLcLJkL_2WJlI4Nobhrq9Rg1vXA7FN2lZVRNiyp1cWR2lUd6X3KPtij7FXRa6ilhi--qbc6-8_v8p_Yw.png',
    ogImage: 'https://iad.microlink.io/H5AHBdlLcLJkL_2WJlI4Nobhrq9Rg1vXA7FN2lZVRNiyp1cWR2lUd6X3KPtij7FXRa6ilhi--qbc6-8_v8p_Yw.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$30M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Navigating the code of life',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    {
      name: 'Ben Lamm',
      role: 'Co-founder & CEO',
      background: 'TIME100 Next honoree; co-founder of Colossal Biosciences; serial entrepreneur expanding into AI-biotechnology with Astromech.',
    },
    {
      name: 'George Church',
      role: 'Co-founder',
      background: 'Harvard professor and world-renowned geneticist and synthetic biology researcher; co-founded Astromech to apply AI to biotechnology.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '11-50 employees (startups.gallery)' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Unknown' },
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
  lastUpdated: '2026-02-01T13:35:00',
  sources: [
    { title: 'Source', url: 'https://www.astromech.bio' },
    { title: 'Source', url: 'https://startups.gallery/companies/astromech' }
  ],
};
