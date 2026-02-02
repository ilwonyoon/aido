import { Company } from '../types';

export const campfire: Company = {
  id: 'campfire',
  name: 'Campfire',
  description: 'AI-first ERP for finance.',
  website: 'https://campfire.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.sanity.io/images/zu7n19wi/production/bfbbbc1d37198bd8c8e47cdb9330c5248fa6a8b4-1200x630.png?rect=0,2,1200,627&w=1200&h=627&fit=crop&auto=format',
  screenshot: 'https://iad.microlink.io/v3Mc6_ayAUVZ0W-GjxplHgQtVjpgyH53bfnWNKy4O-sTSTU60kJzoNK6Dlp-sbkpaye7PDrttOOgDUUcPe85-w.png',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  industries: ['fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Finance teams seeking modern ERP workflows.',

  // Competition
  competitors: [
    {
      name: 'NetSuite',
      description: 'Enterprise ERP platform.',
      whyTheyWin: 'Large installed base and feature breadth.',
    },
    {
      name: 'Oracle Fusion',
      description: 'Enterprise finance and ERP suite.',
      whyTheyWin: 'Enterprise procurement and integration depth.',
    },
    {
      name: 'Ramp',
      description: 'Finance automation platform.',
      whyTheyWin: 'Modern UX and embedded finance workflows.',
    },
  ],
  marketPosition: 'Modern finance ERP with AI-driven automation.',
  moat: [
    'AI-first finance automation',
    'Modern ERP UX vs legacy systems',
    'Workflow speed for finance ops',
  ],
  vsGiants: 'Competes by providing faster, AI-enabled finance workflows vs legacy ERPs.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to automating finance ERP workflows.',
  aiDesignChallenges: [
    'Trust in automated financial decisions',
    'Clear auditability for AI actions',
    'Reducing complexity in ERP flows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Legacy ERPs are slow and complex; finance teams need modern automation.',
  beliefs: [
    'Finance workflows should be automated',
    'Modern UX can replace legacy ERP friction',
    'AI can reduce operational overhead',
  ],
  greenFlags: [
    'Series B stage indicates traction',
    'Clear value in finance automation',
  ],
  redFlags: [
    'Enterprise ERP space is highly competitive',
    'Long procurement cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Automation rules', 'Approval workflows'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Finance analytics and reporting', 'Automation quality review'],
    },
    interface: {
      level: 'medium',
      tasks: ['ERP dashboards', 'Transaction review UI'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Finance and accounting teams',
    secondary: 'Ops teams managing approvals',
  },
  userProblems: [
    'Finance operations are slow and manual',
    'Legacy ERPs are complex to use',
    'Approval workflows are fragmented',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['High-impact workflow UX in finance', 'AI automation focus'],
    whyNot: ['Enterprise adoption complexity'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B stage'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'ERP modernization remains early-stage for many mid-market firms.',
    tailwinds: ['Finance automation demand', 'Legacy ERP replacement cycle'],
    headwinds: ['Enterprise switching costs', 'Incumbent competition'],
    moatType: 'switching-costs',
    moatStrength: 'ERP data and workflows create stickiness.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:35:00',
  sources: [
    { title: 'Campfire', url: 'https://campfire.ai' },
    { title: 'Campfire on startups.gallery', url: 'https://startups.gallery/companies/campfire' },
  ],
};
