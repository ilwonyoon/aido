import { Company } from '../types';

export const conductor: Company = {
  id: 'conductor',
  name: 'Conductor',
  description:
    'Native Mac app for secure, high-performance local AI models and workflows.',
  website: 'https://www.conductor.build/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'automation'],
  markets: ['b2b'],
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and teams running local AI models on macOS.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Focus on local AI workflows for macOS',
      'Developer-first distribution via native Mac app',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: local AI runtime tooling is still emerging.',
    tailwinds: [
      'Rising interest in local AI and privacy',
      'Apple silicon performance enabling local models',
      'Developers want faster iteration without cloud cost',
    ],
    headwinds: [
      'Rapidly evolving model ecosystem',
      'Competition from open-source runtimes',
      'Unclear long-term monetization',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Conductor becomes the default local AI runtime for Mac users.',
  },

  // Competition
  competitors: [
    {
      name: 'Ollama',
      description: 'Local LLM runtime for running models on-device.',
      whyTheyWin: 'Developer adoption and open-source community.',
    },
    {
      name: 'LM Studio',
      description: 'Desktop app for running local models.',
      whyTheyWin: 'Strong UX and model support.',
    },
    {
      name: 'Jan',
      description: 'Open-source local AI desktop app.',
      whyTheyWin: 'Open-source distribution and community.',
    },
  ],
  marketPosition: 'Native Mac app for local AI model workflows and performance.',
  moat: [
    'Mac-native UX and performance focus',
    'Local-first privacy and control',
    'Developer-friendly local workflows',
  ],
  vsGiants: 'Focuses on local-first Mac workflows vs cloud AI platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Conductor is a local AI runtime and workflow tool for models.',
  aiDesignChallenges: [
    'Balancing performance and ease of setup',
    'Model management and compatibility UX',
    'Transparency around local resource usage',
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
    'Give developers a fast, private way to run AI locally on Mac.',
  beliefs: [
    'Local AI should be fast and accessible',
    'Privacy-first workflows matter for developers',
    'Native apps can deliver better performance and UX',
  ],
  designPhilosophy: 'Make local AI workflows simple and delightful on macOS.',
  greenFlags: [
    'Strong local AI tailwinds',
    'Focused macOS product experience',
  ],
  redFlags: [
    'Fast-moving model ecosystem',
    'Open-source alternatives',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Model management and configuration flows',
        'Workflow orchestration for local runs',
        'Resource and performance controls',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Performance and resource metrics',
        'Model compatibility testing UX',
        'Error diagnostics and recovery flows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Native Mac UI and onboarding',
        'Model library and prompt workflows',
        'Local workflow management screens',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers running local AI models on Mac',
    secondary: 'Teams needing private AI workflows',
  },
  userProblems: [
    'Local model setup is complex and time-consuming',
    'Performance tuning is opaque',
    'Developers need simple model management',
    'Privacy concerns limit cloud AI use cases',
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
      'Strong local AI tailwinds and developer focus',
      'Opportunity to define UX for local models',
    ],
    whyNot: [
      'Open-source competition',
      'Unclear long-term differentiation',
    ],
    nextActions: [
      'Track product adoption and community growth',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Conductor website', url: 'https://www.conductor.build/' },
    { title: 'Conductor on startups.gallery', url: 'https://startups.gallery/companies/conductor' },
  ],
};
