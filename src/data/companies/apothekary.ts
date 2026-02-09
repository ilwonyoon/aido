import { Company } from '../types';

export const apothekary: Company = {
  id: 'apothekary',
  name: 'Apothekary',
  description: "Mother Nature's farmacy.",
  website: 'https://apothekary.co',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.sanity.io/images/4yfa4c0n/production/2908d99a0b3e2d128cf533a4d5ab7fed988b7571-300x300.png?w=300&fm=webp',
  screenshot: 'https://iad.microlink.io/NKkfkHeBJ9ZlCxrsfSuLjpJ8YDzuH4DsNYdcVdbmCn0RWq0xf0yBp_fdIOXkdT98Bvz-47QKprF-G6jmYV-VUg.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
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
  marketPosition: "Mother Nature's farmacy",
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
      name: 'Shizu Okusa',
      role: 'Founder & CEO',
      background: 'Former Goldman Sachs (distressed assets); previously founded a juice company; launched Apothekary to make plant-medicine fun and accessible.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
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
    { title: 'Source', url: 'https://apothekary.co' },
    { title: 'Source', url: 'https://startups.gallery/companies/apothekary' }
  ],
};
