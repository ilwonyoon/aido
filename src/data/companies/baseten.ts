import { Company } from '../types';

export const baseten: Company = {
  id: 'baseten',
  name: 'Baseten',
  description:
    'Model inference platform that helps teams deploy and scale AI models with production-grade latency and reliability.',
  website: 'https://www.baseten.co/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/baseten-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series E',
  valuation: '$5B (Jan 2026)',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series E',
      amount: '$300M',
      date: '2026-01',
      valuation: '$5B',
      leadInvestors: ['IVP', 'CapitalG'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series E: $300M at $5B valuation (Jan 2026)',
      'Focus on scaling model inference in production',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: enterprise AI deployment remains a major bottleneck.',
    tailwinds: [
      'Enterprises pushing AI models into production',
      'Demand for lower-latency inference at scale',
      'Growth of multimodal and agentic applications',
    ],
    headwinds: [
      'Competition from hyperscalers and infra incumbents',
      'Rising infrastructure costs for GPU-intensive workloads',
      'Differentiation risk as inference becomes commoditized',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Baseten becomes the default inference layer for production AI.',
  },

  // Competition
  competitors: [
    {
      name: 'Modal',
      description: 'Serverless infrastructure for AI workloads and inference.',
      whyTheyWin: 'Strong developer experience and fast iteration.',
    },
    {
      name: 'Replicate',
      description: 'API platform for running and hosting ML models.',
      whyTheyWin: 'Large model catalog and developer adoption.',
    },
    {
      name: 'Together AI',
      description: 'Inference platform and model hosting for AI teams.',
      whyTheyWin: 'Scale and access to large model infrastructure.',
    },
  ],
  marketPosition: 'Production-grade inference platform for deploying and scaling AI models.',
  moat: [
    'Optimized inference performance and reliability',
    'Developer tooling for model deployment workflows',
    'Platform focus on production latency and scaling',
  ],
  vsGiants: 'Focuses on optimized inference workflows vs generalized cloud platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Baseten exists to operationalize AI model inference at scale.',
  aiDesignChallenges: [
    'Surfacing latency and cost tradeoffs for inference',
    'Developer UX for model deployment and scaling',
    'Trust and reliability in production AI pipelines',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tuhin Srivastava',
      role: 'Co-founder & CEO',
      background: 'Co-founded Baseten and leads the product and company strategy.',
    },
    {
      name: 'Anurag Agrawal',
      role: 'Co-founder & CTO',
      background: 'Co-founded Baseten and leads technical development.',
    },
    {
      name: 'John Hill',
      role: 'Co-founder & CPO',
      background: 'Co-founded Baseten and leads product vision.',
    },
  ],
  whyBuilding:
    'Make it easier for teams to deploy and scale AI models with production-grade inference.',
  beliefs: [
    'Inference performance is the bottleneck for AI products',
    'Developers need clear control over latency and cost',
    'Model deployment should feel as simple as shipping code',
  ],
  designPhilosophy: 'Make complex infrastructure approachable for developers.',
  greenFlags: [
    'Large Series E round to scale infrastructure',
    'Clear focus on production AI deployment',
  ],
  redFlags: [
    'Heavy competition from big cloud providers',
    'High infrastructure costs and pricing pressure',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Inference routing and scaling policies',
        'Failure handling and fallback strategies',
        'Cost and latency optimization controls',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Performance benchmarking dashboards',
        'Cost and usage analytics',
        'Quality and reliability monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Model deployment flows and onboarding',
        'Team management and access controls',
        'Operational dashboards for infra teams',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'ML and platform engineers deploying production models',
    secondary: 'AI product teams scaling inference workloads',
  },
  userProblems: [
    'Deploying AI models to production is slow and complex',
    'Inference latency and cost are hard to balance',
    'Scaling GPU workloads is expensive and error-prone',
    'Monitoring inference quality and reliability is difficult',
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
    fitScore: 7,
    whyJoin: [
      'High-impact infrastructure for AI products',
      'Large funding round suggests growth and stability',
    ],
    whyNot: [
      'Infrastructure-heavy domain with complex constraints',
      'Market crowded with well-funded competitors',
    ],
    nextActions: [
      'Track developer adoption and customer case studies',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'Baseten website', url: 'https://www.baseten.co/' },
    { title: 'Baseten Series E announcement', url: 'https://www.baseten.co/blog/announcing-baseten-s-300m-series-e/' },
    { title: 'Baseten careers', url: 'https://www.baseten.com/resources/careers/' },
    { title: 'Baseten on startups.gallery', url: 'https://startups.gallery/companies/baseten' },
    { title: 'Baseten founders (South Park Commons)', url: 'https://www.southparkcommons.com/companies/baseten' },
  ],
};
