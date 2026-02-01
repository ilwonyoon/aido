import { Company } from '../types';

export const fastino: Company = {
  id: 'fastino',
  name: 'Fastino',
  description: 'Task-specific language models for production workflows.',
  website: 'https://fastino.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/fastino-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'automation'],
  markets: ['b2b'],
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$7M',
      date: '2024-11',
    },
    {
      stage: 'Seed',
      amount: '$17.5M',
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
      name: 'Cohere',
      description: 'Enterprise LLM platform for custom models and APIs.',
      whyTheyWin: 'Enterprise adoption and model infrastructure.',
    },
    {
      name: 'Together AI',
      description: 'Open and hosted model platform with fast inference.',
      whyTheyWin: 'Broad model ecosystem and developer adoption.',
    },
    {
      name: 'Anthropic',
      description: 'Frontier model provider for AI applications.',
      whyTheyWin: 'Model performance and enterprise trust.',
    },
  ],
  marketPosition: 'Task-specific language models focused on production efficiency.',
  moat: [
    'Focus on task-specific model performance',
    'Efficiency-driven LLM approach',
    'Positioning around production workloads',
  ],
  vsGiants: 'Competes on specialization and efficiency rather than general-purpose scale.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI models are the core product and value proposition.',
  aiDesignChallenges: [
    'Communicating model tradeoffs for specific tasks',
    'Designing evaluation and benchmarking workflows',
    'Building trust in model performance claims',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ash Lewis',
      role: 'Founder & CEO',
      background: 'Founded Fastino and leads the company.',
    },
  ],
  whyBuilding: 'Deliver faster, cheaper, task-specific language models for production.',
  beliefs: [
    'Task-specific models can outperform general-purpose ones',
    'Efficiency and cost matter for production AI',
    'Evaluation and benchmarks should be transparent',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear technical focus on specialization',
    'Seed funding signals investor interest',
  ],
  redFlags: [
    'Rapidly shifting model landscape',
    'High competition among LLM infrastructure providers',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Model configuration and evaluation logic',
        'Prompting and inference workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Benchmarking and quality evaluation UX',
        'Feedback loops for model performance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards for model usage',
        'Documentation and API onboarding UX',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI engineers and developers deploying LLMs',
    secondary: 'ML teams building task-specific models',
  },
  userProblems: [
    'General-purpose LLMs are expensive for production',
    'Model latency and cost are hard to optimize',
    'Evaluating task-specific performance is complex',
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
      'Deep AI infrastructure and model UX challenges',
      'Opportunity to shape evaluation workflows',
    ],
    whyNot: [
      'Highly competitive model ecosystem',
      'Market shifts quickly with frontier model releases',
    ],
    nextActions: [
      'Monitor for product design openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Fastino', url: 'https://fastino.ai' },
    { title: 'Fastino funding (Fastino blog)', url: 'https://fastino.ai/blog/seed-round' },
    { title: 'Fastino on startups.gallery', url: 'https://startups.gallery/companies/fastino' },
  ],
};
