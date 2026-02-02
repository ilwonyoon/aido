import { Company } from '../types';

export const goodfire: Company = {
  id: 'goodfire',
  name: 'Goodfire',
  description:
    'AI interpretability platform focused on understanding and steering model behavior.',
  website: 'https://www.goodfire.ai/',
    screenshot: '/screenshots/goodfire-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/goodfire-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$50M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$50M',
      date: '2025-11',
      leadInvestors: ['Menlo Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'AI research teams and enterprises building safer models.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $50M Series A to scale interpretability research',
      'In-person team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Interpretability tooling demand grows as AI safety becomes critical.',
    tailwinds: [
      'Rising AI safety requirements',
      'Enterprise need for model transparency',
      'Regulatory focus on AI accountability',
    ],
    headwinds: [
      'Highly technical buyer audience',
      'Rapidly evolving research landscape',
      'Competition from internal AI research teams',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Goodfire delivers leading interpretability tooling.',
  },

  // Competition
  competitors: [
    {
      name: 'Anthropic Interpretability',
      description: 'Internal interpretability research and tooling.',
      whyTheyWin: 'Large research team and model access.',
    },
    {
      name: 'OpenAI Safety',
      description: 'Safety and interpretability research within OpenAI.',
      whyTheyWin: 'Scale and frontier model access.',
    },
    {
      name: 'Scale AI Safety tools',
      description: 'Safety and evaluation workflows for AI systems.',
      whyTheyWin: 'Enterprise tooling and evaluation infrastructure.',
    },
  ],
  marketPosition: 'Interpretability tooling to understand and steer AI model behavior.',
  moat: [
    'Interpretability research expertise',
    'Productized tooling for model steering',
    'Focus on safety and transparency workflows',
  ],
  vsGiants: 'Competes by offering dedicated interpretability tooling vs internal research stacks.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Goodfire focuses on AI interpretability as its core product.',
  aiDesignChallenges: [
    'Explainability UX for complex models',
    'Workflow design for research and evaluation',
    'Trust and transparency in model steering tools',
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
    'Make AI systems more understandable and controllable through interpretability tooling.',
  beliefs: [
    'AI safety requires model interpretability',
    'Transparency builds trust in AI systems',
    'Tooling should help teams steer model behavior',
  ],
  designPhilosophy: 'Scientific rigor with approachable interpretability UX.',
  greenFlags: [
    'Strong funding for safety research',
    'In-person team focus',
  ],
  redFlags: [
    'Highly technical market',
    'Rapidly evolving research landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Interpretability workflow design',
        'Model steering controls',
        'Evaluation and safety pipelines',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model behavior analytics',
        'Interpretability metrics',
        'Research experiment tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Research dashboards',
        'Visualization of model internals',
        'Tooling for model comparison',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI research and safety teams',
    secondary: 'Enterprises deploying frontier AI models',
  },
  userProblems: [
    'Model behavior is hard to interpret',
    'Teams need tooling to steer and debug models',
    'Safety evaluation workflows are complex',
    'Transparency is required for trust and compliance',
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
      'AI safety and interpretability focus',
      'Research-driven product challenges',
    ],
    whyNot: [
      'Highly technical domain',
      'Long research timelines',
    ],
    nextActions: [
      'Track research releases',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Goodfire company page', url: 'https://www.goodfire.ai/company' },
    { title: 'Goodfire careers', url: 'https://www.goodfire.ai/careers' },
    { title: 'Goodfire Series A announcement', url: 'https://www.goodfire.ai/blog/series-a' },
    { title: 'Goodfire Series A (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/goodfire-announces-50-million-series-a-to-expand-its-interpretability-research-and-build-ai-lens-for-understanding-model-behavior-302399266.html' },
  ],
};
