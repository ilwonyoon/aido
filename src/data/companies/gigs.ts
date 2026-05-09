import { Company } from '../types';

export const gigs: Company = {
  id: 'gigs',
  name: 'Gigs',
  description: 'Platform to launch and run mobile services with embedded connectivity.',
  website: 'https://gigs.com',
    screenshot: '/screenshots/gigs-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/gigs-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$73M',
  fundingHistory: [
    { stage: 'Series B', amount: '$73M', date: '2024-12' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Twilio',
      description: 'Communications APIs for messaging and voice.',
      whyTheyWin: 'Developer adoption and platform scale.',
    },
    {
      name: 'Vonage',
      description: 'Communications APIs and enterprise messaging.',
      whyTheyWin: 'Enterprise footprint and global carrier relationships.',
    },
    {
      name: 'Airalo',
      description: 'eSIM provider for travelers and consumers.',
      whyTheyWin: 'Brand recognition and consumer distribution.',
    },
  ],
  marketPosition: 'Embedded connectivity platform for brands launching mobile services.',
  moat: [
    'Carrier and connectivity integrations',
    'APIs for embedded telecom offerings',
    'Focus on launching mobile services for brands',
  ],
  vsGiants: 'Competes on embedded connectivity productization rather than raw telecom APIs.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Connectivity platform is not AI-first.',
  aiDesignChallenges: [
    'Designing reliable onboarding for complex telecom services',
    'Communicating usage, billing, and limits clearly',
    'Developer experience for API integrations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hermann Frank',
      role: 'Co-founder & CEO',
      background: 'Responsible for strategy and product at Gigs; founded the company in 2020.',
    },
    {
      name: 'Dennis Bauer',
      role: 'Co-founder & President',
      background: 'Responsible for growth and operations; co-founded Gigs in 2020 (YC 2021 batch).',
    },
  ],
  whyBuilding: 'Enable any brand to launch a mobile service quickly.',
  beliefs: [
    'Embedded connectivity unlocks new product experiences',
    'APIs should make telecom infrastructure accessible',
    'Great developer experience drives adoption',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear infrastructure opportunity in embedded connectivity',
    'Developer-first platform positioning',
  ],
  redFlags: [
    'Telecom integrations are complex and slow-moving',
    'Regulatory and carrier dependencies',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Plan configuration and provisioning logic',
        'Carrier workflow handling',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Monitoring provisioning success rates',
        'Error recovery for API workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and usage UI',
        'Billing and plan management UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Brands launching mobile services and MVNOs',
    secondary: 'Developers integrating connectivity APIs',
  },
  userProblems: [
    'Launching telecom services requires complex integrations',
    'Carrier relationships are slow to establish',
    'Billing and provisioning workflows are difficult to manage',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: [
      'Infrastructure product with deep platform UX',
      'Opportunity to design developer-first tooling',
    ],
    whyNot: [
      'Telecom market complexity',
      'Non-AI product focus',
    ],
    nextActions: [
      'Monitor for design roles if product surface grows',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Source', url: 'https://gigs.com' },
    { title: 'Source', url: 'https://gigs.com/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/gigs' }
  ],
};
