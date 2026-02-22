import { Company } from '../types';

export const tandem: Company = {
  id: 'tandem',
  name: 'Tandem',
  description: 'Accelerate access to medicine.',
  website: 'https://tandemhealth.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/67ef895ebcae5ebab6aa5d30/68710df48d829cfdda30f397_Meta-img-general.png',
  screenshot: '/screenshots/tandem-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
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
  marketPosition: 'Accelerate access to medicine',
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
      name: 'Lukas Saari',
      role: 'Co-founder & CEO',
      background: 'Previously led McKinsey Nordic healthcare digitization and AI practice. Experience in ML at Spotify.',
    },
    {
      name: 'Oscar Boldt-Christmas',
      role: 'Co-founder & CCO',
      background: 'Former Senior Partner at McKinsey leading the European healthcare practice for 20 years.',
    },
    {
      name: 'Oliver Astrand',
      role: 'Co-founder & CTO',
      background: 'AI researcher at GoogleX and Uber. Developed AI products at startups Depict and Mavenoid.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
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
  lastUpdated: '2026-02-01T13:05:00',
  sources: [
    { title: 'Source', url: 'https://tandemhealth.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/tandem' }
  ],
};
