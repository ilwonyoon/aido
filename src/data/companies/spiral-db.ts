import { Company } from '../types';

export const spiralDb: Company = {
  id: 'spiral-db',
  name: 'SpiralDB',
  description:
    'Data platform for storage- and compute-efficient datasets used in AI pre-training and data infrastructure.',
  website: 'https://www.spiraldb.com/',
  headquarters: 'New York, NY',
  remote: 'Unknown',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'search-retrieval'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$22M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$22M',
      date: '2023-11',
      leadInvestors: ['Amplify Partners', 'General Catalyst'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'AI teams and data infrastructure organizations building large datasets.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $22M Seed + Series A for AI data infrastructure',
      'Focus on compute- and storage-efficient datasets',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI data infrastructure demand grows with model training scale.',
    tailwinds: [
      'Rising costs of AI training data',
      'Need for efficient data pipelines',
      'Demand for scalable AI infrastructure',
    ],
    headwinds: [
      'Highly technical buyer audience',
      'Competitive AI infrastructure market',
      'Long enterprise procurement cycles',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if SpiralDB becomes the standard for dataset efficiency.',
  },

  // Competition
  competitors: [
    {
      name: 'Databricks',
      description: 'Data platform for AI and analytics.',
      whyTheyWin: 'Unified data + AI workflows at scale.',
    },
    {
      name: 'Snowflake',
      description: 'Cloud data platform and warehouse.',
      whyTheyWin: 'Enterprise adoption and ecosystem.',
    },
    {
      name: 'Weights & Biases',
      description: 'AI experiment tracking and tooling.',
      whyTheyWin: 'Strong developer adoption in ML workflows.',
    },
  ],
  marketPosition: 'Efficient data infrastructure for AI pre-training datasets.',
  moat: [
    'Storage and compute efficiency for datasets',
    'Infrastructure for large-scale AI data pipelines',
    'Specialization in AI training data',
  ],
  vsGiants: 'Competes by focusing on dataset efficiency vs broad data platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: SpiralDB builds infrastructure for AI training data workflows.',
  aiDesignChallenges: [
    'Complex data pipeline UX',
    'Performance and cost visibility',
    'Developer onboarding for infrastructure tools',
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
    'Reduce the cost and complexity of preparing datasets for AI pre-training.',
  beliefs: [
    'AI datasets should be more efficient to store and compute',
    'Infrastructure can unlock faster model training cycles',
    'Developer tooling should simplify data operations',
  ],
  designPhilosophy: 'Developer-first infrastructure with clear performance insights.',
  greenFlags: [
    'Strong infrastructure tailwinds',
    'Focused on AI training data efficiency',
  ],
  redFlags: [
    'Highly technical adoption path',
    'Competitive infrastructure landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Data pipeline orchestration',
        'Access controls and permissions',
        'Scaling and resource allocation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Performance and cost analytics',
        'Dataset health monitoring',
        'Pipeline reliability dashboards',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console UX',
        'Onboarding and documentation',
        'Dataset management UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'AI infrastructure and ML teams',
    secondary: 'Data engineering teams managing large datasets',
  },
  userProblems: [
    'Training data costs are growing rapidly',
    'Managing large datasets is complex',
    'Data pipelines are hard to optimize',
    'Teams lack visibility into storage and compute efficiency',
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
    fitScore: 6,
    whyJoin: [
      'AI infrastructure UX challenges',
      'High-leverage data tooling',
    ],
    whyNot: [
      'Highly technical domain',
      'Competitive infrastructure market',
    ],
    nextActions: [
      'Track product updates',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'SpiralDB website', url: 'https://www.spiraldb.com/' },
    { title: 'SpiralDB funding announcement', url: 'https://www.spiraldb.com/post/announcing-spiral' },
    { title: 'SpiralDB careers', url: 'https://www.spiraldb.com/careers' },
    { title: 'SpiralDB LinkedIn', url: 'https://www.linkedin.com/company/spiraldb/' },
    { title: 'SpiralDB funding coverage (The SaaS News)', url: 'https://www.thesaasnews.com/news/spiral-raises-22m-for-large-data-infrastructure' },
  ],
};
