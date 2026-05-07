import { Company } from '../types';

export const onyx: Company = {
  id: 'onyx',
  name: 'Onyx',
  description: 'Open source AI connected to your work.',
  website: 'https://www.onyx.app',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.onyx.app/onyx-thumbnail.png',
  screenshot: '/screenshots/onyx-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$10M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Open source AI connected to your work',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Yuhong Sun', role: 'Co-Founder & Co-CEO', background: 'Co-founded Onyx (formerly Danswer) in 2023 for open-source enterprise AI search.' },
    { name: 'Chris Weaver', role: 'Co-Founder & Co-CEO', background: 'Co-founded Onyx in 2023. YC alum.' },
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
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco',
      type: 'full-time',
      roleFamily: 'other-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/onyx-dot-app/68c29928-b9e8-4c1c-b76e-26a9cdd1df81',
      aboutRole: 'Own core UX, visual systems, and early design culture for an AI knowledge and search product.',
      whyInteresting: 'Founding design ownership on an AI knowledge workflow surface.',
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
  lastUpdated: '2026-02-01T14:20:00',
  sources: [
    { title: 'Source', url: 'https://www.onyx.app' },
    { title: 'Source', url: 'https://startups.gallery/companies/onyx' }
  ],
};
