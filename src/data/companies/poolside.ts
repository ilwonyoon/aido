import { Company } from '../types';

export const poolside: Company = {
  id: 'poolside',
  name: 'Poolside',
  description: 'Frontier AI company building foundation models for software development.',
  website: 'https://poolside.ai',
    screenshot: '/screenshots/poolside-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://poolside.ai/og/og-home.png',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['enterprise'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$3B (Oct 2024)',
  totalFunding: '$626M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$500M',
      date: '2024-10',
      leadInvestors: ['Bain Capital Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'Frontier AI lab with code generation models.',
      whyTheyWin: 'Scale, distribution, and ecosystem adoption.',
    },
    {
      name: 'Anthropic',
      description: 'Frontier model provider with enterprise adoption.',
      whyTheyWin: 'Safety positioning and strong enterprise partnerships.',
    },
    {
      name: 'Mistral',
      description: 'Frontier and open LLMs for enterprise use.',
      whyTheyWin: 'Open model strategy and EU footprint.',
    },
  ],
  marketPosition: 'Frontier AI lab focused on operational intelligence for software development.',
  moat: [
    'Frontier model development for code and software workflows',
    'Large funding base for compute and research',
    'Enterprise focus for secure model deployment',
  ],
  vsGiants: 'Competes by focusing on software development intelligence and enterprise readiness.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Foundation model development is the core product.',
  aiDesignChallenges: [
    'Designing developer trust in model outputs',
    'Balancing safety controls with usability',
    'Communicating model performance and limits',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Deliver frontier AI systems that accelerate software development.',
  beliefs: [
    'Software development is a prime target for AI productivity',
    'Frontier models need to be enterprise-ready',
    'Safety and performance must evolve together',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Significant Series B funding signal',
    'Enterprise positioning with strong investor backing',
  ],
  redFlags: [
    'High competition among frontier labs',
    'Large compute and talent costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflows and model behavior controls',
        'Developer tooling for model usage',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Benchmarking and evaluation UX',
        'Feedback loops for model quality',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and integrations',
        'Enterprise admin and governance UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise software and platform teams',
    secondary: 'Developers using AI for code workflows',
  },
  userProblems: [
    'Developer productivity tools are fragmented',
    'Enterprise teams need safe AI model deployment',
    'Model outputs require reliability and transparency',
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
      'Frontier AI research with enterprise UX challenges',
      'Opportunity to shape model UX and tooling',
    ],
    whyNot: [
      'Highly competitive frontier model space',
      'Long research timelines',
    ],
    nextActions: [
      'Monitor for product design leadership roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Poolside', url: 'https://poolside.ai' },
    { title: 'Poolside Series B (TechCrunch)', url: 'https://techcrunch.com/2024/10/02/poolside-raises-500m-series-b-at-3b-valuation-to-build-ai-coding-models/' },
    { title: 'Poolside on startups.gallery', url: 'https://startups.gallery/companies/poolside' },
  ],
};
