import { Company } from '../types';

export const footprint: Company = {
  id: 'footprint',
  name: 'Footprint',
  description: 'Frictionless KYC + KYB.',
  website: 'https://footprint.us',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  screenshot: '/screenshots/footprint-screenshot.png',
    ogImage: '/screenshots/footprint-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['fintech', 'security'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$26M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Persona', description: 'Identity verification platform with embeddable SDK', whyTheyWin: 'Broad marketplace support' },
    { name: 'Alloy', description: 'Identity orchestration platform for fraud prevention', whyTheyWin: 'Orchestration layer flexibility' },
    { name: 'Plaid', description: 'Financial data network entering KYC via Cognito acquisition', whyTheyWin: 'Massive fintech distribution' },
  ],
  marketPosition: 'One-click KYC and portable identity platform — combines identity verification, fraud prevention, and PII vaulting in 5 lines of code (the Apple Pay of identity)',
  moat: ['Portable identity model (verify once, use everywhere)', 'PII vaulting + KYC in one product', 'QED Investors + Index Ventures backing'],
  vsGiants: 'Persona and Plaid require re-verification every time; Footprint makes identity portable — verify once, onboard everywhere',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Eli Wachs', role: 'Co-Founder & CEO', background: 'Stanford MBA. Previously led identity and data security investing at General Atlantic. Serial entrepreneur since high school.' },
    { name: 'Alex Grinman', role: 'Co-Founder & CTO', background: 'MIT CS, math, and cryptography. Founded KryptCo (mobile auth, acquired by Akamai). Former Principal Product Architect at Akamai.' },
  ],
  whyBuilding: 'Identity verification is repetitive and wasteful. Users verify themselves hundreds of times. Portable identity makes it one-and-done.',
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
  targetAudiences: { primary: 'Fintech companies and platforms needing KYC/identity verification and PII management' },
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
    { title: 'Footprint', url: 'https://footprint.us' },
    { title: 'Footprint on startups.gallery', url: 'https://startups.gallery/companies/footprint' },
  ],
};
