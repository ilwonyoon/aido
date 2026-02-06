import { Company } from '../types';

export const chroma: Company = {
  id: 'chroma',
  name: 'Chroma',
  description: 'Open-source embedding database for AI applications.',
  website: 'https://www.trychroma.com',
    screenshot: '/screenshots/chroma-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/chroma-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$18M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$18M',
      date: '2023-04',
      leadInvestors: ['Quiet Capital', 'Lux Capital'],
    },
  ],
  revenue: 'Pre-revenue',
  growth: 'Early stage - growth metrics N/A',
  runway: 'Estimated 18-24 months post 2023-04 round ($18M); exact runway not publicly disclosed',
  customers: 'Primary audience: AI developers building retrieval systems',

  // Competition
  competitors: [
    {
      name: 'Pinecone',
      description: 'Managed vector database for AI search and retrieval.',
      whyTheyWin: 'Enterprise adoption and managed infrastructure.',
    },
    {
      name: 'Weaviate',
      description: 'Open-source vector database with enterprise offerings.',
      whyTheyWin: 'Strong open-source community and feature set.',
    },
    {
      name: 'Qdrant',
      description: 'Vector database with open-source and cloud offerings.',
      whyTheyWin: 'Performance focus and developer adoption.',
    },
  ],
  marketPosition: 'Open-source vector database focused on developer adoption.',
  moat: [
    'Open-source community and developer adoption',
    'Simple integration for AI apps',
    'Focus on embeddings and retrieval workflows',
  ],
  vsGiants: 'Competes on open-source ease-of-use rather than enterprise lock-in.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI applications depend on vector search and embeddings.',
  aiDesignChallenges: [
    'Designing developer-friendly setup and onboarding',
    'Balancing simplicity with performance controls',
    'Explaining retrieval quality and evaluation',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Make vector databases accessible and simple for AI developers.',
  beliefs: [
    'Open-source drives adoption and trust',
    'Developers need simple AI infrastructure',
    'Embeddings are core to AI product success',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Strong open-source momentum',
    'Clear infrastructure niche for AI apps',
  ],
  redFlags: [
    'Highly competitive vector database market',
    'Differentiation can be difficult to sustain',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Data modeling and indexing workflows',
        'Configuration and performance tuning UI',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Retrieval evaluation and metrics',
        'Feedback loops for quality improvements',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboard and monitoring UI',
        'Docs and onboarding flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'AI developers building retrieval systems',
    secondary: 'Engineering teams shipping AI apps',
  },
  userProblems: [
    'Vector search infrastructure is complex to deploy',
    'Developers need reliable retrieval quality',
    'Monitoring and tuning embeddings is difficult',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'full-time',
      url: 'https://careers.trychroma.com/jobs/4447948005',
      aboutRole: 'Design product experiences for the Chroma developer platform.',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Developer tooling with strong AI relevance',
      'Opportunity to shape open-source product UX',
    ],
    whyNot: [
      'Crowded vector database landscape',
      'Open-source monetization pressure',
    ],
    nextActions: [
      'Review Product Designer role for scope and team context',
    ],
  },

  // Meta
  lastUpdated: '2026-02-04T18:40:00',
  sources: [
    { title: 'Chroma', url: 'https://www.trychroma.com' },
    { title: 'Chroma Careers', url: 'https://careers.trychroma.com' },
    { title: 'Chroma Product Designer (Ashby)', url: 'https://careers.trychroma.com/jobs/4447948005' },
    { title: 'Chroma funding (SaaS News)', url: 'https://saasnews.com/news/chroma-raises-18m-seed-funding' },
    { title: 'Chroma on startups.gallery', url: 'https://startups.gallery/companies/chroma' },
  ],
};
