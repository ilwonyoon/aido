import { Company } from '../types';

export const nowadays: Company = {
  id: 'nowadays',
  name: 'Nowadays',
  description: 'AI for corporate events.',
  website: 'https://www.nowadays.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://nowadays.ai/opengraph-image.png',
  screenshot: '/screenshots/nowadays-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '$2M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'AI for corporate events',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Anna Sun', role: 'Co-Founder', background: 'Co-founded Nowadays in 2023 for AI-powered corporate event planning. YC alum.' },
    { name: 'Amy Yan', role: 'Co-Founder', background: 'Co-founded Nowadays in 2023. YC alum.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '1-10 employees (startups.gallery)' },
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
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/nowadays/jobs/hrkGPy8-founding-product-designer',
      compensation: '$100K-$150K + 0.25%-1.25%',
      aboutRole: 'Shape product design for an AI co-pilot for corporate retreats and event planning.',
      whyInteresting: 'Founding design role with high ownership across agentic planning workflows and operational interfaces.',
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
  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Source', url: 'https://www.nowadays.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/nowadays' },
    { title: 'Founding Product Designer at Nowadays', url: 'https://www.ycombinator.com/companies/nowadays/jobs/hrkGPy8-founding-product-designer' }
  ],
};
