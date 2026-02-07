import { Company } from '../types';

export const superpower: Company = {
  id: 'superpower',
  name: 'Superpower',
  description: 'The most advanced platform to optimize your health.',
  website: 'https://www.superpower.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a46596a7cc1743771ce6f3_image%20(10).avif',
  screenshot: '/screenshots/superpower-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

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
  marketPosition: 'The most advanced platform to optimize your health',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Jacob Peters', role: 'Co-founder & CEO', background: 'Inspired by personal health challenges and $2M in medical bills from years of undiagnosed conditions.' },
    { name: 'Max Marchione', role: 'Co-founder', background: 'Spent decades navigating misdiagnoses from 20 doctors, motivating him to co-found Superpower.' },
    { name: 'Kevin Unkrich', role: 'Co-founder', background: 'Co-founded Superpower to build personalized health testing and optimization.' },
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
    { title: 'Superpower', url: 'https://www.superpower.com' },
    { title: 'Superpower on startups.gallery', url: 'https://startups.gallery/companies/superpower' },
  ],
};
