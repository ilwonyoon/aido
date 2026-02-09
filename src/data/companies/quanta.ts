import { Company } from '../types';

export const quanta: Company = {
  id: 'quanta',
  name: 'Quanta',
  description:
    'Zero DevOps Postgres platform that helps teams run reliable databases without infrastructure work.',
  website: 'https://quanta.com/',
    screenshot: '/screenshots/quanta-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/quanta-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$15M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2024-10',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Engineering teams running Postgres at scale.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A funding for zero-DevOps Postgres',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Managed database adoption grows with developer productivity demand.',
    tailwinds: [
      'Developer preference for managed databases',
      'Postgres adoption across SaaS stacks',
      'Need for reliability without ops overhead',
    ],
    headwinds: [
      'Competition from cloud providers',
      'Switching costs can be low',
      'Reliability expectations are high',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Quanta delivers superior reliability and performance.',
  },

  // Competition
  competitors: [
    {
      name: 'Supabase',
      description: 'Developer platform with managed Postgres.',
      whyTheyWin: 'Strong developer ecosystem.',
    },
    {
      name: 'Neon',
      description: 'Serverless Postgres platform.',
      whyTheyWin: 'Cloud-native scaling and developer focus.',
    },
    {
      name: 'AWS RDS',
      description: 'Managed database service by AWS.',
      whyTheyWin: 'Scale and integration with AWS ecosystem.',
    },
  ],
  marketPosition: 'Zero-DevOps Postgres platform for developers.',
  moat: [
    'Operational simplicity for Postgres',
    'Developer-first experience',
    'Performance and reliability tuning',
  ],
  vsGiants: 'Competes with cloud providers by emphasizing simplicity and developer UX.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Quanta is a database infrastructure product, not AI-native.',
  aiDesignChallenges: [
    'Developer onboarding and setup UX',
    'Reliability and incident visibility',
    'Clear performance and usage reporting',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founder information not publicly available.',
    },
  ],
  whyBuilding:
    'Eliminate database operations burden so teams can focus on product development.',
  beliefs: [
    'Developers should not run database infrastructure',
    'Reliability is a product feature',
    'Managed services should be developer-first',
  ],
  designPhilosophy: 'Simple, reliable database UX with clear operational visibility.',
  greenFlags: [
    'Strong developer productivity tailwinds',
    'Series A funding for product scale',
  ],
  redFlags: [
    'Cloud provider competition',
    'High reliability expectations',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Provisioning and scaling workflows',
        'Backup and recovery logic',
        'Permissions and access management',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Performance metrics dashboards',
        'Reliability and incident analytics',
        'Usage and cost reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console UI',
        'Onboarding and documentation',
        'API key and integration flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Engineering and platform teams',
    secondary: 'Startup developers running Postgres',
  },
  userProblems: [
    'Database operations are time-consuming',
    'Teams need reliable Postgres without DevOps',
    'Scaling and backups are complex to manage',
    'Visibility into performance is limited',
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
      'Developer infrastructure UX challenges',
      'Opportunity to simplify database workflows',
    ],
    whyNot: [
      'Highly competitive infrastructure market',
      'High reliability expectations',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Source', url: 'https://quanta.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/quanta' }
  ],
};
