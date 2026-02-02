import { Company } from '../types';

export const cartesia: Company = {
  id: 'cartesia',
  name: 'Cartesia',
  description: 'Ultra-realistic, low-latency voice AI platform for real-time applications.',
  website: 'https://cartesia.ai',
    screenshot: '/screenshots/cartesia-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://framerusercontent.com/assets/nvFWoimT13QFzTrSNSycJkZp5o.jpg',

  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$100M',
  fundingHistory: [
    { stage: 'Series B', amount: '$100M', date: '2025-10' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'ElevenLabs',
      description: 'AI voice generation and voice cloning platform.',
      whyTheyWin: 'High voice quality and developer adoption.',
    },
    {
      name: 'Play.ht',
      description: 'Text-to-speech and voice API platform.',
      whyTheyWin: 'Broad language support and content workflows.',
    },
    {
      name: 'OpenAI (Voice)',
      description: 'Real-time voice capabilities in ChatGPT.',
      whyTheyWin: 'Distribution and model scale.',
    },
  ],
  marketPosition: 'Real-time voice AI platform built for low-latency, lifelike speech.',
  moat: [
    'Low-latency voice generation for real-time use cases',
    'Developer-first API with streaming performance',
    'Focus on expressive, controllable voices',
  ],
  vsGiants: 'Competes on latency and voice fidelity rather than general-purpose assistant platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Voice AI models are the core product.',
  aiDesignChallenges: [
    'Designing controls for expressive speech',
    'Communicating latency and performance tradeoffs',
    'Building trust in real-time voice outputs',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Enable real-time, human-like voice experiences for applications.',
  beliefs: [
    'Voice interfaces should feel fast and natural',
    'Low latency unlocks real-time AI experiences',
    'Developers need powerful, flexible voice APIs',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear differentiation on latency and fidelity',
    'Developer-first platform positioning',
  ],
  redFlags: [
    'Crowded voice AI market',
    'High expectations for reliability in real-time use',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Streaming voice generation controls',
        'Latency-aware interaction logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Voice quality evaluation and tuning',
        'User feedback loops for expressiveness',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and API settings',
        'Voice selection and configuration UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building voice applications',
    secondary: 'Enterprises deploying voice agents',
  },
  userProblems: [
    'Voice AI latency breaks conversational UX',
    'Existing voices lack expressiveness or control',
    'Developers need reliable streaming APIs',
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
      'Deep voice UX challenges with real-time constraints',
      'Strong developer platform focus',
    ],
    whyNot: [
      'Highly competitive voice AI market',
      'Quality expectations are extremely high',
    ],
    nextActions: [
      'Monitor for product design roles and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:55:00',
  sources: [
    { title: 'Cartesia Docs', url: 'https://docs.cartesia.ai' },
    { title: 'Cartesia Voice AI', url: 'https://cartesia.ai/product/ai-voice-generator' },
    { title: 'Cartesia on startups.gallery', url: 'https://startups.gallery/companies/cartesia' },
  ],
};
