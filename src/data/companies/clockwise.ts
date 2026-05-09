import { Company } from '../types';

export const clockwise: Company = {
  id: 'clockwise',
  name: 'Clockwise',
  description: 'AI-powered scheduling for a better workday.',
  website: 'https://www.getclockwise.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6336f6e0b70611d51dfeba5b/6375defae3f1363faa3bb79d_clockwise-og-image2.png',
  screenshot: '/screenshots/clockwise-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: 'Unknown',
  totalFunding: '$45M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Unknown',
      description: 'AI-powered scheduling for a better workday.',
      whyTheyWin: 'Unknown',
    },
  ],
  marketPosition: 'AI-powered scheduling for a better workday',
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
      name: 'Matt Martin',
      role: 'Co-founder & CEO',
      background: 'Former software engineer at RelateIQ (acquired by Salesforce); B.A. from Dartmouth, J.D. from UPenn Law; founded Clockwise in 2016.',
    },
    {
      name: 'Gary Lerhaupt',
      role: 'Co-founder',
      background: 'Former RelateIQ colleague; co-founded Clockwise to build AI-powered time management and calendar optimization.',
    },
    {
      name: 'Mike Grinolds',
      role: 'Co-founder',
      background: 'Former RelateIQ alumnus; co-founded Clockwise to reimagine how teams manage their calendars and schedules.',
    },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
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
    { title: 'Source', url: 'https://www.getclockwise.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/clockwise' }
  ],
};
