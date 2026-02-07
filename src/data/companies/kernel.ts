import { Company } from '../types';

export const kernel: Company = {
  id: 'kernel',
  name: 'Kernel',
  description: 'Browser infrastructure for web agents and automations.',
  website: 'https://kernel.sh',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.kernel.sh/og-image.png',
  screenshot: '/screenshots/kernel-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$22M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'Browser infrastructure for web agents and automations.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'Browser infrastructure for web agents and automations',
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
      name: 'Catherine Jue',
      role: 'Co-founder & CEO',
      background: 'Co-founded Sway Finance (YC S16); led Cash App\'s forward deployed engineers and docs platform.',
    },
    {
      name: 'Rafael Garcia',
      role: 'Co-founder & CTO',
      background: 'Co-founder/CTO of Clever (YC S12), which exited for $500M in 2021.',
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
    { title: 'Kernel', url: 'https://kernel.sh' },
    { title: 'Kernel on startups.gallery', url: 'https://startups.gallery/companies/kernel' },
  ],
};
