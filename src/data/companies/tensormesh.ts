import { Company } from '../types';

export const tensormesh: Company = {
  id: 'tensormesh',
  name: 'Tensormesh',
  description: 'Caching layer for LLM inference to reduce latency and costs.',
  website: 'https://tensormesh.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68f027846c58012d6d1902ac/6903c9cdaa1db289d98ced83_Tensormesh_Black_whitebg-p-1200-630.png',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$4.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$4.5M',
      date: '2025-01',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Akamai (AI caching)',
      description: 'Edge and caching infrastructure for AI workloads.',
      whyTheyWin: 'Scale and edge footprint.',
    },
    {
      name: 'Vercel AI Cache',
      description: 'Caching for AI responses in developer platforms.',
      whyTheyWin: 'Developer adoption and platform integration.',
    },
    {
      name: 'OpenAI (built-in cache)',
      description: 'Model providers building inference optimizations.',
      whyTheyWin: 'First-party model control and scale.',
    },
  ],
  marketPosition: 'Infrastructure layer focused on caching and accelerating LLM inference.',
  moat: [
    'Specialized caching for LLM inference',
    'Latency and cost optimization focus',
    'Infrastructure-first positioning',
  ],
  vsGiants: 'Competes on focused LLM caching rather than general edge infrastructure.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure is the core product.',
  aiDesignChallenges: [
    'Designing developer setup for caching workflows',
    'Communicating cache performance gains clearly',
    'Balancing configurability with simplicity',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Reduce inference latency and cost through smart caching.',
  beliefs: [
    'LLM infrastructure needs performance optimization',
    'Caching is essential for real-time AI apps',
    'Developer-first setup drives adoption',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear infrastructure problem with rising demand',
    'Seed funding signal',
  ],
  redFlags: [
    'Dependence on model providers',
    'Competitive infra market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Caching logic and invalidation workflows',
        'Latency and throughput controls',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Performance monitoring and alerts',
        'Cost savings reporting UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboard and metrics UI',
        'Configuration and onboarding flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI platform teams optimizing inference',
    secondary: 'Developers building latency-sensitive AI apps',
  },
  userProblems: [
    'LLM inference latency hurts UX',
    'Cost of repeated queries is high',
    'Caching AI responses is complex',
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
    fitScore: 5,
    whyJoin: [
      'AI infra UX with clear performance metrics',
      'Opportunity to design developer dashboards',
    ],
    whyNot: [
      'Crowded infra tooling market',
      'Infrastructure buying cycles can be slow',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:55:00',
  sources: [
    { title: 'Tensormesh', url: 'https://tensormesh.ai' },
    { title: 'Tensormesh Seed (Tensormesh blog)', url: 'https://tensormesh.ai/blog/seed-round' },
    { title: 'Tensormesh on startups.gallery', url: 'https://startups.gallery/companies/tensormesh' },
  ],
};
