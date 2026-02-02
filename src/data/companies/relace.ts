import { Company } from '../types';

export const relace: Company = {
  id: 'relace',
  name: 'Relace',
  description: 'LLM platform for fast, production-grade code generation.',
  website: 'https://relace.ai',
    screenshot: '/screenshots/relace-screenshot.png',
    ogImage: '/screenshots/relace-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$23M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$23M',
      date: '2025-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'OpenAI (Codex)',
      description: 'Code generation models and APIs.',
      whyTheyWin: 'Model quality and ecosystem adoption.',
    },
    {
      name: 'Anthropic (Claude)',
      description: 'General-purpose LLMs used for code assistance.',
      whyTheyWin: 'Strong reasoning and enterprise trust.',
    },
    {
      name: 'DeepSeek',
      description: 'Open LLMs with code generation capabilities.',
      whyTheyWin: 'Open access and developer community adoption.',
    },
  ],
  marketPosition: 'LLM platform optimized for fast, production code generation.',
  moat: [
    'Performance-optimized code generation',
    'Focus on production reliability',
    'Platform positioning for developers',
  ],
  vsGiants: 'Competes on speed and production reliability rather than broad model scope.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'LLM capabilities are the core product.',
  aiDesignChallenges: [
    'Designing reliable code generation workflows',
    'Communicating model limits for production use',
    'Developer trust in generated outputs',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Enable fast and reliable code generation for production workloads.',
  beliefs: [
    'Speed and reliability are essential for code generation',
    'Developers need stronger guarantees for production use',
    'Specialized models can outperform general systems',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series A funding signal',
    'Clear technical focus on code generation',
  ],
  redFlags: [
    'Highly competitive LLM market',
    'Rapidly evolving model landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Code generation workflows and guardrails',
        'Prompting and validation flows',
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
        'Developer dashboards and API onboarding',
        'Monitoring and logs UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers using LLMs for code generation',
    secondary: 'AI teams shipping production code tools',
  },
  userProblems: [
    'Code generation outputs are inconsistent',
    'Speed and latency impact developer workflows',
    'Production reliability is hard to guarantee',
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
      'Deep developer tooling UX challenges',
      'Clear technical focus on reliability',
    ],
    whyNot: [
      'Highly competitive model space',
      'Rapid tech shifts',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Relace Series A', url: 'https://relace.ai/blog/series-a' },
    { title: 'Relace', url: 'https://relace.ai' },
    { title: 'Relace on startups.gallery', url: 'https://startups.gallery/companies/relace' },
  ],
};
