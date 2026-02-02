import { Company } from '../types';

export const osmosis: Company = {
  id: 'osmosis',
  name: 'Osmosis',
  description: 'Create task-specific models that beat foundation models.',
  website: 'https://osmosis.ai',
    screenshot: '/screenshots/osmosis-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68e57e4c53b55278417c1e17/68e59277aaa362cb3c144f66_a52a70f75bca1833de4b26e57e464b3d_Opengraph.jpg',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'ai-infrastructure'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Teams building specialized ML models.',

  // Competition
  competitors: [
    {
      name: 'OctoAI',
      description: 'Model hosting and optimization platform.',
      whyTheyWin: 'Broad model catalog and enterprise focus.',
    },
    {
      name: 'Together AI',
      description: 'Open model platform and inference APIs.',
      whyTheyWin: 'Large ecosystem and funding scale.',
    },
    {
      name: 'Baseten',
      description: 'Model deployment and serving infrastructure.',
      whyTheyWin: 'Strong developer tooling for deployment.',
    },
  ],
  marketPosition: 'Task-specific model creation to outperform generic foundation models.',
  moat: [
    'Focus on specialized model performance',
    'Developer-centric ML workflows',
    'Optimization for specific tasks and datasets',
  ],
  vsGiants: 'Competes by specializing models rather than relying on general-purpose LLMs.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to the product: building and optimizing specialized models.',
  aiDesignChallenges: [
    'Communicating model performance tradeoffs',
    'Making fine-tuning and evaluation intuitive',
    'Balancing power-user controls with simplicity',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Specialized models can outperform general LLMs on narrow tasks.',
  beliefs: [
    'Task-specific models are more efficient',
    'Performance and cost must be balanced',
    'Developers need better tooling for model specialization',
  ],
  greenFlags: [
    'Clear technical differentiation on task-specific performance',
    'Seed-stage focus on ML infrastructure',
  ],
  redFlags: [
    'Competes with well-funded model platforms',
    'Model performance claims require strong validation',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Model configuration workflows', 'Automation for training pipelines'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Evaluation dashboards', 'Benchmark comparisons'],
    },
    interface: {
      level: 'medium',
      tasks: ['Model management UI', 'Experiment tracking views'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'ML engineers and applied research teams',
    secondary: 'Product teams deploying AI features',
  },
  userProblems: [
    'Foundation models are expensive and overkill for narrow tasks',
    'Fine-tuning pipelines are complex and brittle',
    'Evaluating specialized model gains is time-consuming',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['AI infrastructure with clear performance UX', 'Early-stage product shaping'],
    whyNot: ['Highly technical market', 'Competitive ML infra space'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Seed-stage AI infrastructure focus'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Specialized model tooling market is still emerging.',
    tailwinds: ['Demand for cheaper AI', 'Specialized model adoption'],
    headwinds: ['Open-source commoditization', 'Big-tech platform competition'],
    moatType: 'technology',
    moatStrength: 'Model performance improvements for specific tasks.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:20:00',
  sources: [
    { title: 'Osmosis', url: 'https://osmosis.ai' },
    { title: 'Osmosis on startups.gallery', url: 'https://startups.gallery/companies/osmosis' },
  ],
};
