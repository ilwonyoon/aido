import { Company } from '../types';

export const augment: Company = {
  id: 'augment',
  name: 'Augment',
  description: 'AI teammate for logistics.',
  website: 'https://www.augmentcode.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.augmentcode.com/api/og?title=Augment+Code+-+The+Software+Agent+Company',
  screenshot: 'https://iad.microlink.io/ZBi054vIT-Aa62fqXaZ6WoKbJMGrg9Nsuao2kmZdz2tg5egHxK48OQ9pVHI7p0pICq5kI2fY6cJTT4wrmJ7IMg.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$85M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'AI teammate for logistics',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    {
      name: 'Scott Dietzen',
      role: 'CEO',
      background: 'Former CEO of Pure Storage (grew from 0 to $1B+ revenue and IPO); Ph.D. in Computer Science (ML focus) from Carnegie Mellon.',
    },
    {
      name: 'Guy Gur-Ari',
      role: 'Co-founder & Chief Scientist',
      background: 'Former Google researcher who worked on training large language models and using them for hard reasoning tasks.',
    },
    {
      name: 'Igor Ostrovsky',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder building Augment\'s Context Engine for enterprise-scale AI coding assistance.',
    },
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
    { title: 'Source', url: 'https://www.augmentcode.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/augment' }
  ],
};
