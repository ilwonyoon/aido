import { Company } from '../types';

export const owner: Company = {
  id: 'owner',
  name: 'Owner',
  description: 'Online ordering and restaurant marketing system.',
  website: 'https://owner.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/669009b2b750c70ec24fd4b8_owner-og.jpg',
  screenshot: '/screenshots/owner-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$120M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'Online ordering and restaurant marketing system.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'Online ordering and restaurant marketing system',
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
    { name: 'Adam Guild', role: 'Co-Founder & CEO', background: 'Founded Owner.com to help independent restaurants manage online presence.' },
    { name: 'Dean Bloembergen', role: 'Co-Founder', background: 'Co-founded Owner.com in 2021.' },
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
  lastUpdated: '2026-02-01T12:30:00',
  sources: [
    { title: 'Source', url: 'https://owner.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/owner' }
  ],
};
