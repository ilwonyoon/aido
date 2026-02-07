import { Company } from '../types';

export const upwind: Company = {
  id: 'upwind',
  name: 'Upwind',
  description: 'Cloud security happens at runtime.',
  website: 'https://www.upwind.io',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://www.upwind.io/wp-content/uploads/2026/01/upwind-preview-link-image-1200x630-1.png',
  screenshot: '/screenshots/upwind-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$250M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Cloud security happens at runtime',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Amiram Shachar', role: 'Co-founder & CEO', background: 'Previously founded Spot.io (acquired by NetApp for ~$450M in 2020). Built Upwind to protect cloud infrastructure at runtime.' },
    { name: 'Lavi Ferdman', role: 'Co-founder & SVP of Growth', background: 'Previously at Spot.io. Co-founded Upwind with the team behind the cloud optimization platform.' },
    { name: 'Liran Polak', role: 'Co-founder', background: 'Previously at Spot.io. Part of the founding team building runtime cloud security at Upwind.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '201-500 employees (startups.gallery)' },
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
    { title: 'Upwind', url: 'https://www.upwind.io' },
    { title: 'Upwind on startups.gallery', url: 'https://startups.gallery/companies/upwind' },
  ],
};
