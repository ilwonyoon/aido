import { Company } from '../types';

export const letta: Company = {
    id: 'letta',
    name: 'Letta',
    description: 'Open-source agent development platform for building advanced AI agents with memory.',
    website: 'https://www.letta.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

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
        name: 'LangChain',
        description: 'Framework for building LLM applications and agent workflows.',
        whyTheyWin: 'Strong developer adoption and ecosystem.',
      },
      {
        name: 'LlamaIndex',
        description: 'Data framework for LLM applications with indexing and retrieval.',
        whyTheyWin: 'Developer tooling for data/agent pipelines.',
      },
    ],
    marketPosition: 'Open-source agent platform focused on durable memory and controllable behavior.',
    moat: [
      'Open-source community and agent-centric developer tooling',
      'Emphasis on memory systems for long-lived agents',
    ],
    vsGiants: 'Competes by focusing on agent infrastructure rather than full-stack AI platforms.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI agents with memory are the core product surface.',
    aiDesignChallenges: [
      'Designing long-term memory and retrieval UX for agents',
      'Making agent behavior transparent and controllable',
      'Developer workflows for agent iteration and testing',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Charles Packer',
        role: 'Co-founder',
        background: 'Co-founder and CEO of Letta.',
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
      'Open-source approach for adoption',
    ],
    redFlags: [
      'Early-stage platform with evolving standards',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company size 11-50)',
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

    // Open Roles
    openRoles: [
      {
        title: 'Research Engineer / Scientist, Memory',
        location: 'San Francisco Office',
        url: 'https://jobs.ashbyhq.com/letta/fc0ae0d3-bc03-4afd-ab79-299444885e88',
        postedDate: '2025-09',
      },
      {
        title: 'Research Engineer / Scientist, Self-Improvement',
        location: 'San Francisco Office',
        url: 'https://jobs.ashbyhq.com/letta/d95271e3-f1ae-4317-8ecd-f25a79a0165c',
        postedDate: '2025-08',
      },
      {
        title: 'Research Engineer / Scientist, Post-Training',
        location: 'San Francisco Office',
        url: 'https://jobs.ashbyhq.com/letta/57165f1b-e99e-4f9e-bda2-8f220ba68af7',
        postedDate: '2025-02',
      },
      {
        title: 'Product Engineer, Agent Development Environment',
        location: 'San Francisco Office',
        url: 'https://jobs.ashbyhq.com/letta/8433f17d-e271-490e-967a-a628e727ff34',
        postedDate: '2024-11',
      },
      {
        title: 'Software Engineer, Agent Platform',
        location: 'San Francisco Office',
        url: 'https://jobs.ashbyhq.com/letta/5375a3dc-c886-41c0-a2de-08d0412204d8',
        postedDate: '2024-09',
      },
    ],

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
    lastUpdated: '2026-01-27T00:00:00',
    sources: [
      { title: 'Letta (startups.gallery)', url: 'https://startups.gallery/companies/letta' },
      { title: 'Letta About', url: 'https://www.letta.com/about' },
      { title: 'LangChain', url: 'https://www.langchain.com/' },
      { title: 'LlamaIndex', url: 'https://www.llamaindex.ai/' },
    ],
  };
