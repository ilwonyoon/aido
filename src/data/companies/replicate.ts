import { Company } from '../types';

export const replicate: Company = {
  id: 'replicate',
  name: 'Replicate',
  description: 'Model hosting and APIs for running machine learning models in production.',
  website: 'https://replicate.com',
    screenshot: '/screenshots/replicate-screenshot.png',
    ogImage: '/screenshots/replicate-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',


  // Multi-dimensional Tags
  aiTypes: ['model-platform'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$40M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2023-12',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Hugging Face',
      description: 'Model hub and inference endpoints.',
      whyTheyWin: 'Large model ecosystem and community adoption.',
    },
    {
      name: 'Together AI',
      description: 'Model hosting and inference platform.',
      whyTheyWin: 'Broad model coverage and infrastructure scale.',
    },
    {
      name: 'RunPod',
      description: 'GPU cloud and model hosting tools.',
      whyTheyWin: 'Cost-competitive compute and flexible deployment.',
    },
  ],
  marketPosition: 'Developer-focused model hosting platform with API-first access.',
  moat: [
    'Simple API for model deployment',
    'Community of model creators and users',
    'Focus on developer experience',
  ],
  vsGiants: 'Competes on ease-of-use and API simplicity for model hosting.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure is the core product offering.',
  aiDesignChallenges: [
    'Simplifying model deployment workflows',
    'Trust and transparency in model behavior',
    'Balancing power users with beginner-friendly UI',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Developers need simple, reliable tooling to run and share AI models.',
  beliefs: [
    'AI infrastructure should be easy to use',
    'APIs enable faster iteration and adoption',
    'Open model ecosystems drive innovation',
  ],
  greenFlags: [
    'Series B funding announced',
    'Developer-first positioning',
  ],
  redFlags: [
    'Highly competitive model hosting space',
    'Compute cost volatility',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Model deployment flows', 'Usage policy and quota logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Performance metrics dashboards', 'Model quality evaluation'],
    },
    interface: {
      level: 'medium',
      tasks: ['API dashboards', 'Model catalog UX'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers deploying AI models into products',
    secondary: 'AI researchers sharing models via APIs',
  },
  userProblems: [
    'Deploying models to production is complex',
    'Model hosting costs are hard to predict',
    'Developers need faster iteration cycles',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Developer-first AI infrastructure', 'Strong product UX leverage'],
    whyNot: ['Competitive market', 'Infra-heavy product cycles'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B funding announced'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Model hosting remains a rapidly growing segment.',
    tailwinds: ['AI app growth', 'Demand for hosted models'],
    headwinds: ['Commodity GPU pricing', 'Platform competition'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Developer ecosystem and API simplicity.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Replicate Series B', url: 'https://replicate.com/blog/series-b' },
    { title: 'Replicate jobs', url: 'https://replicate.com/about/jobs' },
    { title: 'Replicate on startups.gallery', url: 'https://startups.gallery/companies/replicate' },
  ],
};
