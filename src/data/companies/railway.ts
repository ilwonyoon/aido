import { Company } from '../types';

export const railway: Company = {
  id: 'railway',
  name: 'Railway',
  description:
    'Developer cloud platform for building, deploying, and scaling applications without infrastructure setup.',
  website: 'https://railway.com/',
    screenshot: '/screenshots/railway-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/railway-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$100M',
      date: '2026-01',
      leadInvestors: ['TQ Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers:
    '2M+ users, 200k new users per month; used by 31% of the Fortune 500 (per FinSMEs)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B: $100M led by TQ Ventures (Jan 2026)',
      '2M users with 200k new users per month (per FinSMEs)',
      'Adopted by 31% of the Fortune 500 (per FinSMEs)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: modern cloud platforms still expanding developer adoption.',
    tailwinds: [
      'Developer teams want faster deployment and scaling',
      'Shift to platform engineering and self-serve infra',
      'Growth in AI-native apps needing rapid iteration',
    ],
    headwinds: [
      'Crowded market with hyperscalers and PaaS incumbents',
      'Pricing pressure from cloud vendors',
      'Switching costs can be low for smaller teams',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Railway becomes the default workflow for deployment and infra management.',
  },

  // Competition
  competitors: [
    {
      name: 'Render',
      description: 'Cloud platform for deploying and scaling apps.',
      whyTheyWin: 'Strong developer onboarding and reliability.',
    },
    {
      name: 'Vercel',
      description: 'Platform for frontend and full-stack deployment.',
      whyTheyWin: 'Large developer community and ecosystem adoption.',
    },
    {
      name: 'Fly.io',
      description: 'Developer platform for global app deployment.',
      whyTheyWin: 'Global edge presence and strong devops tooling.',
    },
  ],
  marketPosition: 'Developer-first cloud platform focused on fast deployment and scaling.',
  moat: [
    'High-velocity developer experience and onboarding',
    'Product-led growth via self-serve deployment',
    'Strong community adoption and references',
  ],
  vsGiants: 'Focuses on developer UX and speed vs complex hyperscaler workflows.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Railway is a general developer cloud platform; AI is not core to the product.',
  aiDesignChallenges: [
    'Developer onboarding and time-to-first-deploy',
    'Operational clarity for scaling and cost management',
    'Reliability and trust in deployment workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jake Cooper',
      role: 'Founder & CEO',
      background: 'Founded Railway to simplify cloud deployment for developers.',
    },
  ],
  whyBuilding:
    'Make it fast and simple for developers to ship production apps without infrastructure complexity.',
  beliefs: [
    'Deployment should feel as simple as pushing code',
    'Developers move faster with self-serve tooling',
    'Great DX is a competitive moat',
  ],
  designPhilosophy: 'Minimize friction and make cloud operations feel approachable.',
  greenFlags: [
    'Strong adoption metrics and rapid user growth',
    'Large funding round to scale product and team',
  ],
  redFlags: [
    'Intense competition from cloud incumbents',
    'Potential price pressure in infrastructure markets',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Deployment and environment configuration flows',
        'Scaling rules and operational guardrails',
        'Permissions and access controls',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Usage and cost analytics dashboards',
        'Deployment health metrics',
        'Performance monitoring UX',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Project setup and onboarding UI',
        'Deployment management and logs experience',
        'Billing and usage visibility',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers and platform teams deploying production apps',
    secondary: 'Startups and small teams needing fast infrastructure setup',
  },
  userProblems: [
    'Shipping apps requires complex infrastructure setup',
    'Developers struggle to understand deployment failures',
    'Scaling apps across environments is time-consuming',
    'Cloud cost visibility is opaque for small teams',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Remote role with a globally distributed team (per careers page).',
      url: 'https://railway.com/careers/product-designer',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Strong developer UX focus with broad impact',
      'High growth and product velocity',
    ],
    whyNot: [
      'Infrastructure domain can be less design-led',
      'Crowded market with price-based competition',
    ],
    nextActions: [
      'Track product updates and community adoption',
      'Monitor design hiring and org growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'Railway website', url: 'https://railway.com/' },
    { title: 'Railway Series B (FinSMEs)', url: 'https://www.finsmes.com/2026/01/railway-raises-100m-in-series-b-funding.html' },
    { title: 'Railway Product Designer role', url: 'https://railway.com/careers/product-designer' },
    { title: 'Railway on startups.gallery', url: 'https://startups.gallery/companies/railway' },
  ],
};
