import { Company } from '../types';

export const nuvo: Company = {
  id: 'nuvo',
  name: 'Nuvo',
  description: 'Make trade credit your competitive advantage.',
  website: 'https://nuvo.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/642b1089873d6b67a004d671/67c9e0da191c497b2d12f597_Nuvo_Logo_2025.svg',
  screenshot: '/screenshots/nuvo-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['data'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$4.95M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Census', description: 'Reverse ETL platform for syncing data warehouse to business tools', whyTheyWin: 'Strong reverse ETL focus' },
    { name: 'Cleo', description: 'Cloud-based integration platform for supply chain and B2B data exchange', whyTheyWin: 'Enterprise B2B data exchange' },
    { name: 'Lume', description: 'AI-powered customer data mapping and integration automation', whyTheyWin: 'AI-first data mapping' },
  ],
  marketPosition: 'Embeddable AI-powered data onboarding SDK for SaaS companies — automated data mapping, validation, and cleaning with GDPR-compliant front-end processing',
  moat: ['Embeddable SDK approach', 'GDPR-compliant front-end processing', 'Automated AI data mapping'],
  vsGiants: 'Census and Fivetran handle backend data sync; nuvo focuses on the front-end customer data import experience with embeddable SDKs',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Ben Hartig', role: 'Co-Founder', background: 'Previously ran a marketplace business. Identified data onboarding pain point from client work importing product data.' },
    { name: 'Michael Zittermann', role: 'Co-Founder', background: 'Co-founded marketplace business with Ben Hartig. Spun out nuvo after recognizing universal data import challenges.' },
  ],
  whyBuilding: 'Every SaaS product needs data import but customer onboarding is painful. nuvo provides embeddable data import that just works.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'SaaS companies needing embeddable data import and onboarding for their customers' },
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
  lastUpdated: '2026-02-02T18:00:00',
  sources: [
    { title: 'Nuvo', url: 'https://nuvo.com' },
    { title: 'Nuvo on startups.gallery', url: 'https://startups.gallery/companies/nuvo' },
  ],
};
