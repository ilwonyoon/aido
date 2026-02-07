import { Company } from '../types';

export const speakeasy: Company = {
  id: 'speakeasy',
  name: 'Speakeasy',
  description: 'Platform to generate SDKs, docs, and MCP servers from OpenAPI specs.',
  website: 'https://www.speakeasy.com',
  screenshot: '/screenshots/speakeasy-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://www.speakeasy.com/opengraph-image.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$15M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2024-09',
      leadInvestors: ['GV (Google Ventures)'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Stainless',
      description: 'API SDK generation and developer tooling platform.',
      whyTheyWin: 'Developer-first SDK workflows.',
    },
    {
      name: 'Fern',
      description: 'SDKs and API documentation generation from specs.',
      whyTheyWin: 'Fast spec-driven docs and SDKs.',
    },
    {
      name: 'ReadMe',
      description: 'API documentation and developer experience platform.',
      whyTheyWin: 'Broad adoption for API docs and portals.',
    },
  ],
  marketPosition: 'Spec-first developer tooling for SDKs, docs, and MCP servers.',
  moat: [
    'Spec-first automation for SDK and doc generation',
    'Developer experience focus',
    'OpenAPI-centered workflows',
  ],
  vsGiants: 'Competes on automated SDK and MCP generation rather than manual doc tooling.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI and automation are core to developer tooling workflows.',
  aiDesignChallenges: [
    'Designing reliable spec-to-SDK workflows',
    'Reducing friction in developer onboarding',
    'Balancing automation with customization controls',
  ],

  // Founders & Vision
  founders: [
    { name: 'Sagar Batchu', role: 'Co-Founder & CEO', background: 'Experienced API integration challenges at startups and enterprises. Founded Speakeasy in 2022.' },
    { name: 'Simon Yu', role: 'Co-Founder & CPO', background: 'Co-founded Speakeasy in 2022. Experienced API integration pain at both startups and large enterprises.' },
  ],
  whyBuilding: 'Make API developer experience faster with automated SDK and doc generation.',
  beliefs: [
    'Spec-first workflows reduce developer friction',
    'Automation should improve developer adoption',
    'Great DX drives platform growth',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series A funding signal',
    'Clear developer tooling focus',
  ],
  redFlags: [
    'Competitive API tooling market',
    'Adoption depends on spec quality',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Spec parsing and automation logic',
        'Customization and validation flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring SDK quality and adoption',
        'Feedback loops for generation accuracy',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboard and workflow UI',
        'Doc and SDK management experiences',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'API platform and developer experience teams',
    secondary: 'Startups launching APIs',
  },
  userProblems: [
    'Maintaining SDKs and docs is time-consuming',
    'Spec changes break developer workflows',
    'Onboarding developers requires better tooling',
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
      'Developer tooling with clear DX impact',
      'Spec-first automation challenges',
    ],
    whyNot: [
      'Crowded API tooling market',
      'Adoption hinges on developer trust',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Speakeasy', url: 'https://www.speakeasy.com' },
    { title: 'Speakeasy Series A', url: 'https://www.speakeasy.com/blog/series-a' },
    { title: 'Speakeasy Docs', url: 'https://www.speakeasy.com/docs' },
    { title: 'Speakeasy on startups.gallery', url: 'https://startups.gallery/companies/speakeasy' },
  ],
};
