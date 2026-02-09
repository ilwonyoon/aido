import { Company } from '../types';

export const suger: Company = {
  id: 'suger',
  name: 'Suger',
  description:
    'GTM platform for cloud marketplaces that helps software teams sell and expand through marketplace channels.',
  website: 'https://www.suger.io/',
  screenshot: '/screenshots/suger-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/suger-og.webp',


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
    { stage: 'Series A', amount: '$15M', date: '2025-02' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Software companies selling through cloud marketplaces.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage GTM platform for cloud marketplaces',
      'Onsite team based in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Marketplace GTM infrastructure is expanding as cloud sales grow.',
    tailwinds: [
      'Cloud marketplace adoption is rising',
      'Enterprises want faster procurement via marketplaces',
      'SaaS GTM teams need automation for listings and co-sell',
    ],
    headwinds: [
      'Long enterprise sales cycles',
      'Dependence on marketplace platform policies',
      'Competition from services and marketplace partners',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Suger becomes the default GTM layer for cloud marketplaces.',
  },

  // Competition
  competitors: [
    {
      name: 'Tackle',
      description: 'Cloud marketplace management platform.',
      whyTheyWin: 'Established enterprise relationships and integrations.',
    },
    {
      name: 'Pax8 Marketplace',
      description: 'Cloud marketplace for SaaS channel sales.',
      whyTheyWin: 'Distribution network and partner ecosystem.',
    },
    {
      name: 'AWS Marketplace services',
      description: 'Marketplace tooling and partner services from AWS.',
      whyTheyWin: 'Native platform access and scale.',
    },
  ],
  marketPosition: 'GTM workflow platform for software companies selling through cloud marketplaces.',
  moat: [
    'Marketplace integrations across cloud providers',
    'Workflow automation for listing, pricing, and co-sell',
    'GTM analytics tied to marketplace performance',
  ],
  vsGiants: 'Competes by focusing on marketplace GTM UX vs general-purpose sales tools.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Suger is a GTM platform where AI is not the core product.',
  aiDesignChallenges: [
    'Complex marketplace workflow orchestration UX',
    'Clear visibility into listing and co-sell status',
    'Collaboration between sales, finance, and ops teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jon Yoo',
      role: 'Co-founder & CEO',
      background: 'Leading Suger to automate cloud marketplace GTM workflows for software companies.',
    },
    {
      name: 'Chengjun Yuan',
      role: 'Co-founder & CTO',
      background: 'Building the technical platform for cloud marketplace automation at Suger.',
    },
    {
      name: 'Ruming Zhen',
      role: 'Co-founder',
      background: 'Co-founded Suger to streamline B2B marketplace transactions.',
    },
  ],
  whyBuilding:
    'Reduce friction for software companies selling through cloud marketplaces.',
  beliefs: [
    'Marketplace GTM is becoming a core sales channel',
    'GTM workflows should be automated end-to-end',
    'Data-driven co-sell processes improve revenue outcomes',
  ],
  designPhilosophy: 'Operational clarity and workflow automation for GTM teams.',
  greenFlags: [
    'Clear enterprise GTM pain point',
    'Onsite team for fast iteration',
  ],
  redFlags: [
    'Marketplace policy dependence',
    'Enterprise adoption cycles can be slow',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Workflow automation for listing and co-sell',
        'Approval and compliance flows',
        'Rules and routing for marketplace processes',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Marketplace performance metrics',
        'Pipeline health dashboards',
        'Conversion and revenue analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'GTM operator consoles',
        'Marketplace listing and offer setup',
        'Collaboration workflows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'SaaS GTM teams selling through cloud marketplaces',
    secondary: 'RevOps and finance teams managing marketplace revenue',
  },
  userProblems: [
    'Marketplace listing and co-sell workflows are fragmented',
    'GTM teams lack visibility into marketplace deal status',
    'Manual processes slow down approvals and procurement',
    'Marketplace revenue analytics are hard to centralize',
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
      'Complex B2B workflow design challenges',
      'GTM automation and analytics product space',
    ],
    whyNot: [
      'Enterprise sales cycles can be long',
      'Marketplace dependencies add constraints',
    ],
    nextActions: [
      'Track marketplace partnerships and product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'Source', url: 'https://www.suger.io/' },
    { title: 'Source', url: 'https://startups.gallery/companies/suger' }
  ],
};
