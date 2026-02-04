import { Company } from '../types';

export const letta: Company = {
    id: 'letta',
    name: 'Letta',
    description: 'Memory for AI agents and applications.',
    website: 'https://www.letta.com',
    screenshot: '/screenshots/letta-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/letta-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['other'],

    // Business
    stage: 'Seed',
    valuation: 'Unknown',
    totalFunding: '$10M',
    fundingHistory: [
      { stage: 'Seed', amount: '$10M', date: '2024-09' },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',
    customers: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Mem0',
        description: 'Memory infrastructure for AI applications.',
        whyTheyWin: 'Developer-first memory APIs and tooling.',
      },
      {
        name: 'Elicit',
        description: 'AI research assistant for knowledge work.',
        whyTheyWin: 'Strong positioning in research and knowledge workflows.',
      },
    ],
    marketPosition: 'Memory platform for AI agents and applications.',
    moat: [
      'Focus on long-term memory for agents',
      'Clear developer tooling for memory workflows',
    ],
    vsGiants: 'Competes on memory specialization rather than full-stack AI platforms.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI agent memory is the core product surface.',
    aiDesignChallenges: [
      'Designing long-term memory and retrieval UX for agents',
      'Making agent behavior transparent and controllable',
      'Developer workflows for agent iteration and testing',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Charles Packer',
        role: 'Co-founder & CEO',
        background: 'Co-founder of Letta and CEO.',
      },
      {
        name: 'Sarah Wooders',
        role: 'Co-founder',
        background: 'Co-founder of Letta.',
      },
    ],
    whyBuilding: 'Enable developers to build AI agents with durable memory and controllable behavior.',
    beliefs: [
      'Memory is central to useful AI agents',
      'Agent development should feel like modern software engineering',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Seed funding and clear memory-first positioning',
    ],
    redFlags: [
      'Early-stage platform with evolving standards',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '11-50 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Agent memory and retrieval logic',
          'Control surfaces for agent behavior',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Agent performance evaluation and debugging',
          'User feedback loops for agent improvement',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Developer tooling and dashboards',
          'Agent configuration workflows',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'Developers building AI agents',
      secondary: 'AI product teams shipping agent workflows',
    },
    userProblems: [
      'Agent behavior is hard to control and debug',
      'Memory management across sessions is inconsistent',
      'Iteration cycles are slow without proper tooling',
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
        'Agent memory platform with deep UX challenges',
      ],
      whyNot: [
        'Limited public product detail',
      ],
      nextActions: [
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:58:34',
    sources: [
      { title: 'Letta (startups.gallery)', url: 'https://startups.gallery/companies/letta' },
      { title: 'Letta founders (SaaS News)', url: 'https://www.thesaasnews.com/news/letta-raises-10-million-in-seed-round' },
      { title: 'Letta Jobs (Ashby)', url: 'https://jobs.ashbyhq.com/letta' },
    ],
  };
