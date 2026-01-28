import { Company } from '../types';

export const overlapAi: Company = {
  id: 'overlap-ai',
  name: 'Overlap',
  description:
    'AI meeting intelligence platform focused on capturing context, decisions, and action items for teams.',
  website: 'https://overlap.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'YC-backed company (W23)',
      'AI meeting intelligence focus',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI meeting assistants are still consolidating.',
    tailwinds: [
      'Remote and hybrid teams need meeting clarity',
      'AI summaries and action extraction improving',
      'Demand for knowledge capture from meetings',
    ],
    headwinds: [
      'Crowded meeting intelligence market',
      'Privacy and compliance concerns',
      'Differentiation vs incumbents',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Overlap develops unique context capture and workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Otter.ai',
      description: 'Meeting transcription and summaries.',
      whyTheyWin: 'Strong brand and widespread adoption.',
    },
    {
      name: 'Fireflies.ai',
      description: 'Meeting assistant for transcripts and summaries.',
      whyTheyWin: 'Broad integrations and competitive pricing.',
    },
    {
      name: 'Fathom',
      description: 'AI meeting assistant focused on summaries.',
      whyTheyWin: 'Fast product iteration and user-friendly UX.',
    },
  ],
  marketPosition: 'AI meeting intelligence for context capture and team alignment.',
  moat: [
    'Focused on capturing decisions and context',
    'Integration into team workflows',
    'Potential for data flywheel from meeting insights',
  ],
  vsGiants: 'Focused on team workflows vs generic transcription tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Overlap relies on AI to capture, summarize, and structure meeting context.',
  aiDesignChallenges: [
    'Trust and accuracy for AI summaries',
    'Privacy and consent UX',
    'Action item extraction and accountability flows',
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
    'Help teams retain meeting context and turn conversations into clear outcomes.',
  beliefs: [
    'Meetings should create clarity, not confusion',
    'AI can surface critical decisions and next steps',
    'Teams need shared context to move faster',
  ],
  designPhilosophy: 'Make meeting intelligence clear, actionable, and trustworthy.',
  greenFlags: [
    'YC backing and early momentum',
    'Clear pain point for modern teams',
  ],
  redFlags: [
    'Crowded market with strong incumbents',
    'Privacy and compliance risks',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Summarization and decision extraction logic',
        'Permissions and consent controls',
        'Workflow routing for action items',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Summary accuracy and confidence metrics',
        'Feedback loops for AI improvements',
        'Meeting outcome tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Meeting recap views and summaries',
        'Task tracking and follow-up UX',
        'Search and knowledge retrieval',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Product, engineering, and ops teams',
    secondary: 'Leaders who need meeting visibility',
  },
  userProblems: [
    'Meetings create notes that are hard to share',
    'Action items get lost in conversations',
    'Teams lack shared context on decisions',
    'Summaries are often incomplete or inaccurate',
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
      'Clear AI-native meeting assistant use case',
      'High-impact workflow design problems',
    ],
    whyNot: [
      'Competitive market and low differentiation',
      'Privacy and compliance risks',
    ],
    nextActions: [
      'Monitor product differentiation and adoption',
      'Track design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Overlap website', url: 'https://overlap.ai/' },
    { title: 'Overlap YC profile', url: 'https://www.ycombinator.com/companies/overlap' },
    { title: 'Overlap on startups.gallery', url: 'https://startups.gallery/companies/overlap-ai' },
  ],
};
