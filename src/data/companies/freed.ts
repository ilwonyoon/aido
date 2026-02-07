import { Company } from '../types';

export const freed: Company = {
  id: 'freed',
  name: 'Freed',
  description: 'AI Scribe for happier clinicians.',
  website: 'https://www.getfreed.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6626cd90a59907680f6ccb64/68d1bac5ecc2952f7db814fb_OpenGraph.jpg',
  screenshot: '/screenshots/freed-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
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
  marketPosition: 'AI Scribe for happier clinicians',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Erez Druk', role: 'Co-founder & CEO', background: 'Former Facebook software engineer; previously founded UrbanLeap; inspired by wife medical documentation burden.' },
    { name: 'Andrey Bannikov', role: 'Co-founder & CTO', background: 'Spent a decade at Facebook before co-founding Freed in 2023.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '51-200 employees (startups.gallery)' },
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
    { title: 'Freed', url: 'https://www.getfreed.ai' },
    { title: 'Freed on startups.gallery', url: 'https://startups.gallery/companies/freed' },
  ],
};
