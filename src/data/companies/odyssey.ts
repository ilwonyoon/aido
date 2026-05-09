import { Company } from '../types';

export const odyssey: Company = {
  id: 'odyssey',
  name: 'Odyssey',
  description:
    'Generative world models that enable interactive video where viewers can explore and influence scenes in real time.',
  website: 'https://odyssey.ml/',
    screenshot: '/screenshots/odyssey-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/odyssey-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools', 'creative-media'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$18M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2024-11',
      leadInvestors: ['EQT Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'early-growth trajectory (public % not disclosed)',
  runway: 'Estimated 18-24 months post 2024-11 round ($18M); exact runway not publicly disclosed',
  customers: 'Primary audience: Creators and developers building interactive video experiences',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $18M led by EQT Ventures (Nov 2024)',
      'Focus on interactive video through world models',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: interactive video and world models are nascent.',
    tailwinds: [
      'Rising interest in AI-generated media',
      'Advances in video and world model research',
      'Demand for interactive and immersive content',
    ],
    headwinds: [
      'High compute costs for video generation',
      'Unclear consumer adoption patterns',
      'Competition from large model labs',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Odyssey leads world-model research for interactive video.',
  },

  // Competition
  competitors: [
    {
      name: 'Runway',
      description: 'Generative video platform for creators.',
      whyTheyWin: 'Strong creative tooling and distribution.',
    },
    {
      name: 'Pika',
      description: 'Text-to-video generation platform.',
      whyTheyWin: 'Fast iteration and creator adoption.',
    },
    {
      name: 'OpenAI (Sora)',
      description: 'Frontier video generation model.',
      whyTheyWin: 'Frontier model research and scale.',
    },
  ],
  marketPosition: 'Interactive video and world models focused on real-time exploration.',
  moat: [
    'World-model research tailored to interactive video',
    'Technical depth in rendering and simulation',
    'Early mover advantage in interactive media',
  ],
  vsGiants: 'Focused on interactive, real-time exploration vs static video generation.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    "AI-Native: Odyssey's product is AI world models for interactive video.",
  aiDesignChallenges: [
    'Explaining model constraints and uncertainty to users',
    'Designing controls for real-time video exploration',
    'Balancing creativity with safety and guardrails',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Oliver Cameron',
      role: 'Co-founder',
      background: 'Former Cruise VP of product; co-founded Odyssey.',
    },
    {
      name: 'Jeff Hawke',
      role: 'Co-founder',
      background: 'Former CEO of Voyage and VP at Wayve; AI PhD from Oxford.',
    },
  ],
  whyBuilding:
    'Enable interactive video experiences by combining world models with real-time rendering.',
  beliefs: [
    'World models unlock new forms of interactive media',
    'Real-time responsiveness is essential for immersion',
    'Creative tools should let users explore and direct scenes',
  ],
  designPhilosophy: 'Give creators intuitive control over complex world models.',
  greenFlags: [
    'Strong technical founders with autonomy and robotics experience',
    'Series A backing from EQT Ventures',
  ],
  redFlags: [
    'High compute costs and unclear consumer adoption',
    'Competitive field with large research labs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agentic controls for real-time scene generation',
        'Constraints and safety guardrails for content',
        'Workflow logic for interactive video sessions',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality metrics for video coherence',
        'Latency and performance monitoring UX',
        'Feedback loops for model improvement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Interactive video creation interfaces',
        'Prompting and control surfaces for exploration',
        'Playback and editing workflows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Creators and developers building interactive video experiences',
    secondary: 'Media teams exploring AI-driven storytelling',
  },
  userProblems: [
    'Traditional video generation is not interactive',
    'Creators need real-time control over scenes',
    'High compute costs limit experimentation',
    'Safety and content constraints are unclear',
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
    fitScore: 7,
    whyJoin: [
      'Frontier research in world models and interactive media',
      'High-leverage UX challenges for creators',
    ],
    whyNot: [
      'Compute costs and market uncertainty',
      'Competitive landscape with large incumbents',
    ],
    nextActions: [
      'Track public demos and research progress',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Source', url: 'https://odyssey.ml/' },
    { title: 'Source', url: 'https://odyssey.ml/learning-from-our-world' },
    { title: 'Source', url: 'https://odyssey.ml/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/odyssey' }
  ],
};
