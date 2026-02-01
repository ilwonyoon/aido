import { Company } from '../types';

export const decart: Company = {
  id: 'decart',
  name: 'Decart',
  description: 'Real-time generative AI platform for interactive experiences.',
  website: 'https://decart.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['video-generation'],
  markets: ['prosumer', 'b2b'],
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  valuation: '$3.1B (Aug 2025)',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$21M',
      date: '2024-10',
      leadInvestors: ['Sequoia Capital'],
    },
    {
      stage: 'Series A',
      amount: '$32M',
      date: '2024-12',
      leadInvestors: ['Benchmark'],
    },
    {
      stage: 'Series B',
      amount: '$100M',
      date: '2025-08',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Runway',
      description: 'Generative AI platform for video and media creation.',
      whyTheyWin: 'Broad creator adoption and production tooling.',
    },
    {
      name: 'Pika',
      description: 'AI video generation product for creators.',
      whyTheyWin: 'Fast iteration and creator-focused UX.',
    },
    {
      name: 'Luma AI',
      description: 'Generative 3D and video tools.',
      whyTheyWin: 'Strong 3D pipeline and model performance.',
    },
  ],
  marketPosition: 'Real-time generative AI platform focused on interactive experiences.',
  moat: [
    'Real-time rendering and interaction focus',
    'System-level optimization for low latency',
    'Positioning around interactive experiences',
  ],
  vsGiants: 'Competes on real-time interaction rather than offline generation pipelines.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Generative AI technology is the core product and value.',
  aiDesignChallenges: [
    'Designing low-latency generative workflows',
    'Balancing creative control with real-time outputs',
    'Communicating system constraints to creators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Enable real-time generative experiences that feel interactive and responsive.',
  beliefs: [
    'Real-time interaction unlocks new creative experiences',
    'Generative systems need to be fast and controllable',
    'Product and research should be tightly integrated',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Strong funding and valuation signals',
    'Clear real-time differentiation',
  ],
  redFlags: [
    'High compute and infrastructure costs',
    'Highly competitive generative media space',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Real-time generation control logic',
        'Latency and performance constraints',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality evaluation for generated outputs',
        'Feedback loops for model performance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Creator tools and interactive UI',
        'Workflow management for real-time outputs',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Creators and developers building interactive AI experiences',
    secondary: 'Studios exploring real-time generative media',
  },
  userProblems: [
    'Generative tools are slow for real-time use',
    'Interactive workflows lack reliable controls',
    'Latency makes experiences feel unresponsive',
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
      'Real-time generative UX challenges',
      'Strong funding signal for ambitious product',
    ],
    whyNot: [
      'Compute-heavy product risk',
      'Crowded generative media market',
    ],
    nextActions: [
      'Monitor for product design openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Decart Company', url: 'https://decart.ai/company' },
    { title: 'Decart About', url: 'https://about.decart.ai' },
    { title: 'Decart seed round (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/decart-raises-21-million-seed-round-to-build-the-real-time-generative-ai-platform-302259619.html' },
    { title: 'Decart Series A (TechCrunch)', url: 'https://techcrunch.com/2024/12/05/decart-raises-32m-as-it-releases-an-open-source-model-that-can-handle-large-data-sets/' },
    { title: 'Decart on startups.gallery', url: 'https://startups.gallery/companies/decart' },
  ],
};
