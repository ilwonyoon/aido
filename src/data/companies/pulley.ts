import { Company } from '../types';

export const pulley: Company = {
  id: 'pulley',
  name: 'Pulley',
  description: 'Equity management for high growth startups.',
  website: 'https://pulley.com',
    screenshot: '/screenshots/pulley-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68009f16fb924b0148b14053/689f4833e95a5c3bee7c29a9_Pulley.avif',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'smb'],
  category: 'vertical-saas' as const,

  industries: ['fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$40M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Startups and growth-stage companies managing cap tables.',

  // Competition
  competitors: [
    {
      name: 'Carta',
      description: 'Cap table management and equity administration.',
      whyTheyWin: 'Strong brand and enterprise adoption.',
    },
    {
      name: 'Shareworks',
      description: 'Equity plan management for public and private companies.',
      whyTheyWin: 'Large enterprise footprint.',
    },
    {
      name: 'Ledgy',
      description: 'Equity management platform for startups.',
      whyTheyWin: 'European market focus and modern UX.',
    },
  ],
  marketPosition: 'Modern cap table and equity management for startups.',
  moat: [
    'Focused on high-growth startup workflows',
    'Cleaner UX than legacy equity tools',
    'Operational automation for cap table admin',
  ],
  vsGiants: 'Competes by simplifying equity workflows for startups vs enterprise-heavy incumbents.',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Equity management SaaS; AI is not core to the product.',
  aiDesignChallenges: [
    'Designing trust for financial and equity data',
    'Reducing complexity in cap table workflows',
    'Clear auditability for equity transactions',
  ],

  // Founders & Vision
  founders: [
    { name: 'Yin Wu', role: 'Co-Founder & CEO', background: 'Serial entrepreneur. Sold previous company to Microsoft. Former youngest principal engineer at Microsoft. Stanford CS. 3x YC alum (S11, S13, W20).' },
    { name: 'Mark Erdmann', role: 'Co-Founder', background: 'Co-founded Pulley in 2019.' },
  ],
  whyBuilding: 'Equity management and cap table workflows are complex for fast-growing startups.',
  beliefs: [
    'Equity operations should be simple and transparent',
    'Startups need faster administrative workflows',
    'Compliance should not slow down growth',
  ],
  greenFlags: [
    'Series B stage indicates market traction',
    'Clear product focus on equity operations',
  ],
  redFlags: [
    'Highly competitive cap table market',
    'Procurement and compliance requirements',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Workflow automation for equity events', 'Permission and approval flows'],
    },
    evaluation: {
      level: 'low',
      tasks: ['Data accuracy validation', 'Audit trail clarity'],
    },
    interface: {
      level: 'medium',
      tasks: ['Cap table dashboards', 'Equity transaction UI'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Startup finance and operations teams',
    secondary: 'Founders and HR leaders',
  },
  userProblems: [
    'Cap table updates are manual and error-prone',
    'Equity grants and exercises are hard to track',
    'Compliance reporting is slow and fragmented',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Fintech workflows with clear UX leverage'],
    whyNot: ['Cap table space is crowded'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B stage'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Equity management market is mature but still digitizing.',
    tailwinds: ['Startup formation', 'Compliance digitization'],
    headwinds: ['Incumbent competition', 'Long sales cycles for larger customers'],
    moatType: 'switching-costs',
    moatStrength: 'Cap table data is sticky once integrated.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:10:00',
  sources: [
    { title: 'Source', url: 'https://pulley.com' },
    { title: 'Source', url: 'https://startups.gallery/companies/pulley' }
  ],
};
