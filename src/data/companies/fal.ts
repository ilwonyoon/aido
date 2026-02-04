import { Company } from '../types';

export const fal: Company = {
  id: 'fal',
  name: 'fal',
  description:
    'Generative media platform for developers to build and run AI media workflows.',
  website: 'https://fal.ai/',
    screenshot: '/screenshots/fal-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/fal-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series D',
  valuation: 'Unknown',
  totalFunding: '$140M',
  fundingHistory: [
    { stage: 'Series D', amount: '$140M', date: '2025-12' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers building generative media products and workflows.',

  // Growth & Potential
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series D stage generative media platform',
      'Remote team serving developer workflows',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Generative media infrastructure demand continues to grow.',
    tailwinds: [
      'Rapid adoption of generative media',
      'Developer demand for scalable inference',
      'Growing ecosystem of AI media apps',
    ],
    headwinds: [
      'Compute costs and infrastructure scaling',
      'Competitive infrastructure platforms',
      'Model commoditization risk',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if fal becomes a default inference platform for media workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Replicate',
      description: 'Hosted ML inference platform for developers.',
      whyTheyWin: 'Developer-friendly API and model catalog.',
    },
    {
      name: 'Stability AI platform',
      description: 'Generative model provider and tooling.',
      whyTheyWin: 'Model access and ecosystem recognition.',
    },
    {
      name: 'Runway',
      description: 'Generative media tools and platform.',
      whyTheyWin: 'Strong creative tooling and brand.',
    },
  ],
  marketPosition: 'Developer-focused platform for generative media workflows and inference.',
  moat: [
    'Developer API and workflow tooling',
    'Model hosting and inference infrastructure',
    'Ecosystem integrations for media pipelines',
  ],
  vsGiants: 'Competes by offering developer-first workflows vs cloud provider ML platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: fal provides generative AI infrastructure as the product.',
  aiDesignChallenges: [
    'Trust and reliability for AI media outputs',
    'Infrastructure UX for scaling inference',
    'Evaluation and monitoring for model quality',
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
    'Enable developers to build and ship generative media experiences quickly.',
  beliefs: [
    'Generative media will power new product categories',
    'Developer-first infrastructure unlocks innovation',
    'Scalable inference is essential for media apps',
  ],
  designPhilosophy: 'Developer-first workflows with scalable infrastructure UX.',
  greenFlags: [
    'Strong demand for generative media infrastructure',
    'Developer-focused platform positioning',
  ],
  redFlags: [
    'High compute costs',
    'Intense platform competition',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Workflow orchestration for media generation',
        'Rate limits, usage tiers, and permissions',
        'Pipeline configuration and deployment',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model quality evaluation and monitoring',
        'Usage analytics and cost controls',
        'Feedback loops for model improvements',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console and API UX',
        'Media preview and asset management',
        'Docs and onboarding flows',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building generative media apps',
    secondary: 'AI product teams shipping media features',
  },
  userProblems: [
    'Scaling generative media inference is expensive',
    'Developers need reliable APIs for media workflows',
    'Quality control for AI outputs is difficult',
    'Integrations across media pipelines are fragmented',
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
    fitScore: 8,
    whyJoin: [
      'Developer infrastructure + AI design challenges',
      'High-growth generative media space',
    ],
    whyNot: [
      'Compute-heavy business model',
      'Competitive infrastructure landscape',
    ],
    nextActions: [
      'Track developer adoption and platform usage',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'fal website', url: 'https://fal.ai/' },
    { title: 'fal careers', url: 'https://fal.ai/careers' },
    { title: 'fal on startups.gallery', url: 'https://startups.gallery/companies/fal' },
  ],
};
