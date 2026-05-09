import { Company } from '../types';

export const anara: Company = {
  id: 'anara',
  name: 'Anara',
  description: 'AI for researchers.',
  website: 'https://anara.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://anara.com/images/og-main-anara.png',
  screenshot: 'https://iad.microlink.io/RjNPfde0ucT5WnFNFBVPtf2e4mHkzOIB7kZYap57KEhQhqvcIYf6OUR3PcdOggZjxCMlWCuIlMDNNv18VuQRJQ.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$2.4M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'AI for researchers.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'AI for researchers',
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
      name: 'Naveed Janmohamed',
      role: 'Founder & CEO',
      background: 'Founded Anara (formerly Unriddle) to reshape how researchers engage with scientific literature; backed by YC and the founders of GitHub and Reddit.',
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
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      url: 'https://jobs.ashbyhq.com/anara/4e660933-c8aa-4344-9a33-25968dd28255',
      type: 'full-time',
    },
  ],

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
  lastUpdated: '2026-02-19',
  sources: [
    { title: 'Source', url: 'https://anara.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/anara' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/anara/4e660933-c8aa-4344-9a33-25968dd28255' }
  ],
};
