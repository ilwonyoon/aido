import { Company } from '../types';

export const town: Company = {
  id: 'town',
  name: 'Town',
  description:
    'Software platform focused on making financial workflows easier to run for modern businesses.',
  website: 'https://town.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Finance teams and operators at early-stage businesses.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed-stage finance software company',
      'Onsite team based in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Finance ops tooling adoption continues to expand in SMBs.',
    tailwinds: [
      'SMBs need simpler finance tooling',
      'Rising complexity in modern finance stacks',
      'Demand for automation in back-office workflows',
    ],
    headwinds: [
      'Competitive fintech landscape',
      'High trust and compliance expectations',
      'Longer sales cycles with finance teams',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Town builds deep workflow adoption in finance teams.',
  },

  // Competition
  competitors: [
    {
      name: 'Ramp',
      description: 'Corporate finance platform with spend controls.',
      whyTheyWin: 'Scale, distribution, and product breadth.',
    },
    {
      name: 'Brex',
      description: 'Corporate card and finance automation platform.',
      whyTheyWin: 'Brand and integrated spend stack.',
    },
    {
      name: 'Mercury',
      description: 'Banking for startups with cash management tools.',
      whyTheyWin: 'Strong startup focus and product experience.',
    },
  ],
  marketPosition: 'Finance workflow software for early-stage businesses.',
  moat: [
    'Finance workflow specialization for SMBs',
    'Potential integrations with banking and expense tools',
    'UX simplification for complex finance tasks',
  ],
  vsGiants: 'Competes with fintech platforms by focusing on workflow simplicity and speed.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Town is a fintech software platform rather than an AI-native product.',
  aiDesignChallenges: [
    'High-trust finance workflow UX',
    'Clear reporting and audit experiences',
    'Onboarding and data integrations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Simplify finance workflows so businesses can operate with less overhead.',
  beliefs: [
    'Finance workflows should be intuitive for operators',
    'Automation reduces back-office burden',
    'Modern businesses need real-time financial visibility',
  ],
  designPhilosophy: 'Clarity and trust for high-stakes finance actions.',
  greenFlags: [
    'Clear fintech pain point',
    'Focused on simplifying finance operations',
  ],
  redFlags: [
    'Fintech compliance complexity',
    'Competitive incumbent landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Finance workflow automation',
        'Approval and permissions logic',
        'Error handling for sensitive actions',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Spend and cash flow analytics',
        'Compliance reporting',
        'Operational performance dashboards',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operator dashboards',
        'Onboarding and integrations',
        'Reporting and audit views',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Finance operators and founders at early-stage companies',
    secondary: 'Finance teams seeking automated workflows',
  },
  userProblems: [
    'Finance workflows are fragmented across tools',
    'Manual processes slow down month-end close',
    'Teams lack real-time visibility into finances',
    'Compliance and approval flows are cumbersome',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'High-trust fintech workflow design',
      'Opportunity to simplify complex finance UX',
    ],
    whyNot: [
      'Highly regulated domain',
      'Competitive fintech market',
    ],
    nextActions: [
      'Track product launch signals',
      'Monitor hiring updates',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Town website', url: 'https://town.com/' },
    { title: 'Town on startups.gallery', url: 'https://startups.gallery/companies/town' },
  ],
};
