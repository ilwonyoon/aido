import { Company } from '../types';

export const middesk: Company = {
  id: 'middesk',
  name: 'Middesk',
  description: 'Business identity platform.',
  website: 'https://middesk.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/63beb0e2461232502d3d70a6/67fd277ecced752309a0caa6_middesk-home-v2-opengraph.webp',
  screenshot: '/screenshots/middesk-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$57M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Business identity platform',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Kyle Mack', role: 'Co-Founder & CEO', background: 'Founded Middesk in 2019 to build business identity infrastructure.' },
    { name: 'Kurt Ruppel', role: 'Co-Founder & CTO', background: 'Co-founded Middesk in 2019. Leads technical development.' },
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
  lastUpdated: '2026-02-01T14:20:00',
  sources: [
    { title: 'Middesk', url: 'https://middesk.com' },
    { title: 'Middesk on startups.gallery', url: 'https://startups.gallery/companies/middesk' },
  ],
};
