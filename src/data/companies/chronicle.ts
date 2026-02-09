import { Company } from '../types';

export const chronicle: Company = {
  id: 'chronicle',
  name: 'Chronicle',
  description: 'Cursor for slides.',
  website: 'https://chroniclehq.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://chroniclehq.com/meta/og.png',
  screenshot: '/screenshots/chronicle-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$7.5M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Cursor for slides',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    {
      name: 'Mayuresh Patole',
      role: 'Co-founder & CEO',
      background: 'Self-proclaimed presentation nerd who earned recognition for transforming standard PowerPoint into something unrecognizable; built Chronicle as the "Cursor for presentations."',
    },
    {
      name: 'Tejas Gawande',
      role: 'Co-founder',
      background: 'Co-founded Chronicle with Mayuresh at university to reinvent how presentations are created and delivered with AI.',
    },
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
    { title: 'Source', url: 'https://chroniclehq.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/chronicle' }
  ],
};
