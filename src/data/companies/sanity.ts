import { Company } from '../types';

export const sanity: Company = {
  id: 'sanity',
  name: 'Sanity',
  description: 'Content Operating System for structured content and developer-first workflows.',
  website: 'https://www.sanity.io',
    screenshot: '/screenshots/sanity-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.sanity.io/images/3do82whm/next/85765ad960a5a13761600d98d9e46e64da186087-1200x630.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$85M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$85M',
      date: '2025-05',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Contentful',
      description: 'Headless CMS for developers and enterprises.',
      whyTheyWin: 'Enterprise adoption and mature platform.',
    },
    {
      name: 'Contentstack',
      description: 'Headless CMS for enterprise digital teams.',
      whyTheyWin: 'Enterprise features and partner ecosystem.',
    },
    {
      name: 'Strapi',
      description: 'Open-source headless CMS.',
      whyTheyWin: 'Open-source community and flexible hosting.',
    },
  ],
  marketPosition: 'Developer-first content platform for structured content and composable workflows.',
  moat: [
    'Developer-first content modeling and APIs',
    'Composable content workflows',
    'Strong community and tooling ecosystem',
  ],
  vsGiants: 'Competes on developer experience and flexibility rather than monolithic CMS suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may enhance content workflows but is not the core product.',
  aiDesignChallenges: [
    'Designing flexible content modeling UX',
    'Balancing developer controls with editor usability',
    'Scaling collaboration for content teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Provide a content operating system for modern digital experiences.',
  beliefs: [
    'Structured content enables faster digital iteration',
    'Developers and editors need shared workflows',
    'Composable systems scale better than monoliths',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear developer-first positioning',
    'Series C funding signal',
  ],
  redFlags: [
    'Crowded CMS market',
    'Enterprise adoption requires long sales cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Content modeling logic and schemas',
        'Workflow configuration for editorial teams',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Measuring content workflow success',
        'User feedback loops for editor UX',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Editor UI and content tooling',
        'Developer dashboards and configuration UX',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building content-driven products',
    secondary: 'Content and marketing teams',
  },
  userProblems: [
    'Legacy CMS platforms slow down development',
    'Content workflows are fragmented across teams',
    'Structured content is hard to maintain at scale',
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
    fitScore: 6,
    whyJoin: [
      'Developer-first product with strong UX challenges',
      'Large ecosystem and tooling impact',
    ],
    whyNot: [
      'Highly competitive CMS market',
      'Enterprise sales cycles can be long',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Sanity Series C announcement', url: 'https://www.sanity.io/blog/sanity-funding-round-series-c' },
    { title: 'Sanity Series C (Bullhound)', url: 'https://www.bullhound.com/news/sanity-raises-85-million-series-c-funding-round' },
    { title: 'Sanity on startups.gallery', url: 'https://startups.gallery/companies/sanity' },
  ],
};
