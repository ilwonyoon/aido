import { Company } from '../types';

export const llmarena: Company = {
    id: 'llmarena',
    name: 'LLMArena',
    description: 'Open-source project that provides evaluations and benchmarks for large language models.',
    website: 'https://lmarena.ai',
    headquarters: 'San Francisco, CA',
    remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools'],

    // Business
    stage: 'Series A',
    valuation: '$1.7B (Jan 2026)',
    totalFunding: '$150M',
    fundingHistory: [
      { stage: 'Series A', amount: '$150M', date: '2026-01', valuation: '$1.7B' },
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
        name: 'Granola',
        description: 'AI productivity tool for knowledge work.',
        whyTheyWin: 'Clear consumer product focus and user adoption.',
      },
    ],
    marketPosition: 'Open-source benchmarking and evaluation platform for LLMs.',
    moat: [
      'Community-driven evaluation and transparency',
      'Strong focus on reproducible LLM benchmarks',
    ],
    vsGiants: 'Competes via open benchmarks rather than closed evaluation suites.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI evaluation and benchmarking are the core product features.',
    aiDesignChallenges: [
      'Designing fair and transparent model evaluation workflows',
      'Presenting nuanced benchmark results clearly',
      'Supporting open-source community contributions',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Anastasios N. Angelopoulos',
        role: 'Co-founder',
        background: 'Co-founder of LMArena and ML researcher.',
      },
      {
        name: 'Wei-Lin Chiang',
        role: 'Co-founder',
        background: 'Co-founder of LMArena and ML researcher.',
      },
      {
        name: 'Ion Stoica',
        role: 'Co-founder',
        background: 'Systems researcher and co-founder at UC Berkeley.',
      },
    ],
    whyBuilding: 'Create transparent, community-driven benchmarks for LLMs.',
    beliefs: [
      'Open evaluation improves AI quality',
      'Benchmarks must be easy to interpret and trust',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series A at $1.7B valuation (Jan 2026)',
      'Open-source momentum in the LLM ecosystem',
    ],
    redFlags: [
      'Benchmark integrity can be contentious',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '11-50 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Evaluation workflow configuration',
          'Result aggregation and scoring logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Benchmark definition and QA workflows',
          'User feedback mechanisms for evaluations',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Leaderboards and comparison UI',
          'Dataset and experiment management',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'AI researchers and ML engineers',
      secondary: 'AI product teams comparing model quality',
    },
    userProblems: [
      'Model performance is difficult to compare fairly',
      'Benchmark results are often opaque or inconsistent',
      'Teams need reliable evaluation baselines',
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
        'Open-source evaluation platform with strong technical impact',
      ],
      whyNot: [
        'Benchmark integrity can be contentious',
      ],
      nextActions: [
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:58:34',
    sources: [
      { title: 'LLMArena (startups.gallery)', url: 'https://startups.gallery/companies/llmarena' },
      { title: 'LLMArena funding (TechCrunch)', url: 'https://techcrunch.com/2026/01/07/llm-arena-raises-150m-series-a-at-1-7b-valuation/' },
      { title: 'LLMArena founders (Contrary Research)', url: 'https://research.contrary.com/company/lmarena' },
      { title: 'LMArena', url: 'https://lmarena.ai/' },
    ],
  };
