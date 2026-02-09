import { Company } from '../types';

export const willow: Company = {
  id: 'willow',
  name: 'Willow',
  description: 'Write 4X faster with voice dictation.',
  website: 'https://willow.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  screenshot: '/screenshots/willow-screenshot.png',
    ogImage: '/screenshots/willow-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$4.2M',
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
  marketPosition: 'Write 4X faster with voice dictation',
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
      name: 'Allan Guo',
      role: 'Co-founder & CEO',
      background: 'Co-founded Willow Voice in 2024. Building AI dictation that is 40%+ more accurate than built-in tools. Backed by Y Combinator.',
    },
    {
      name: 'Ian Ye',
      role: 'Co-founder',
      background: 'Co-founded Willow to build voice-first typing across Mac and iOS platforms.',
    },
    {
      name: 'Lawrence Liu',
      role: 'Co-founder & CTO',
      background: 'Building the AI speech-to-text engine that powers Willow Voice dictation.',
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
  lastUpdated: '2026-02-01T13:20:00',
  sources: [
    { title: 'Source', url: 'https://willow.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/willow' }
  ],
};
