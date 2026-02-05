import { Company } from '../types';

export const cartesia: Company = {
  id: 'cartesia',
  name: 'Cartesia',
  description: 'Ultra-realistic, low-latency voice AI platform for real-time applications.',
  website: 'https://cartesia.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  valuation: 'Not disclosed',
  totalFunding: '$186M+',
  fundingHistory: [
    { stage: 'Seed', amount: '$22M', date: '2024-12', leadInvestors: ['Index Ventures'] },
    { stage: 'Series A', amount: '$64M', date: '2025-03', leadInvestors: ['Kleiner Perkins'] },
    { stage: 'Series B', amount: '$100M', date: '2025', leadInvestors: ['Kleiner Perkins'] },
  ],
  revenue: '$17M (2024)',
  growth: 'Rapid — from seed to Series B in under a year',
  runway: 'Strong — $186M+ raised',
  customers: '50,000+ customers including ServiceNow, Cresta, Decagon',

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
      name: 'Karan Goel',
      role: 'CEO & Co-Founder',
      background: 'PhD in CS from Stanford. Previously at Salesforce AI Research and Snorkel AI.',
    },
    {
      name: 'Albert Gu',
      role: 'Chief Scientist & Co-Founder',
      background: 'Stanford PhD researcher. Invented State Space Models (SSMs) architecture.',
    },
    {
      name: 'Arjun Desai',
      role: 'Co-Founder',
      background: 'PhD in Electrical Engineering from Stanford. Biomedical engineering and ML background.',
    },
    {
      name: 'Christopher Ré',
      role: 'Co-Founder & Advisor',
      background: 'Stanford CS Professor. MacArthur Fellow. Director of Stanford AI Lab, Machine Learning Group.',
    },
  ],
  whyBuilding: 'Enable real-time, human-like voice experiences for applications.',
  beliefs: [
    'Voice interfaces should feel fast and natural',
    'Low latency unlocks real-time AI experiences',
    'Developers need powerful, flexible voice APIs',
  ],
  designPhilosophy: 'Real-time voice experiences with ultra-low latency. SSM architecture for continuous, streaming AI.',
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
    teamSize: '~49 employees total',
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

  // Growth Metrics
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '$17M (2024), seed to Series B in <1 year',
    userGrowth: '50,000+ customers, millions of conversations monthly',
    signals: [
      '$186M+ raised (Kleiner Perkins, Index Ventures, NVIDIA)',
      'Sonic-3: fastest TTS in industry (45ms time-to-first-audio)',
      'SSM architecture inventors (S4, Mamba) — Stanford AI Lab origin',
      'Notable customers: ServiceNow, Cresta, Decagon',
      '42+ languages supported',
    ],
    tam: '$10B+ (Voice AI, conversational AI, TTS)',
    marketShare: '<1% (early market, fastest growing segment)',
    ceiling: 'Early innings: Voice AI is nascent. Cartesia owns latency advantage with SSM architecture. Real-time voice is critical for agent UX.',
    tailwinds: ['Voice agents becoming primary AI interface', 'Enterprise voice automation demand', 'SSM architecture advantages over transformers for streaming'],
    headwinds: ['ElevenLabs dominates voice quality perception', 'OpenAI building native voice capabilities', 'Commoditization risk as models improve'],
    moatType: 'technology',
    moatStrength: 'Strong: SSM architecture provides structural latency advantage. Stanford AI Lab pedigree. But voice quality is quickly replicable.',
  },

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Stanford AI Lab founding team with MacArthur Fellow',
      'Deep voice UX challenges with real-time constraints',
      'Hypergrowth: seed to $186M+ in under a year',
      'SSM architecture is genuinely novel technology',
    ],
    whyNot: [
      'Highly competitive voice AI market (ElevenLabs, OpenAI)',
      'Small team (~49), design team may be tiny',
    ],
    nextActions: [
      'Monitor for product design roles',
      'Try Sonic-3 API for voice quality evaluation',
    ],
  },

  // Meta
  lastUpdated: '2026-02-05T22:30:00',
  sources: [
    { title: 'Cartesia Company', url: 'https://cartesia.ai/company' },
    { title: 'Cartesia $64M Series A (Fortune)', url: 'https://fortune.com/2025/03/11/exclusive-cartesia-voice-ai-startup-raises-64-million-series-a/' },
    { title: 'Kleiner Perkins — Cartesia', url: 'https://www.kleinerperkins.com/perspectives/cartesia-pioneering-real-time-voice-ai/' },
    { title: 'Index Ventures — Cartesia', url: 'https://www.indexventures.com/perspectives/building-the-next-generation-of-real-time-ai-models-our-investment-in-cartesia/' },
  ],
};
