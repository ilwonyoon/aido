import { Company } from '../types';

export const humansand: Company = {
    id: 'humansand',
    name: 'Humans&',
    description: 'AI-generated collaborators that help teams do their most ambitious work.',
    website: 'https://humansand.ai',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // Business
    stage: 'Seed',
    valuation: '$4.48B (Jan 2026)',
    totalFunding: '$480M',
    fundingHistory: [
      { stage: 'Seed', amount: '$480M', date: '2026-01', valuation: '$4.48B' },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',
    customers: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Hume AI',
        description: 'Voice AI platform focused on expressive, natural interactions.',
        whyTheyWin: 'Research-driven approach to conversational quality.',
      },
      {
        name: 'Deepgram',
        description: 'Voice AI platform for speech recognition and agent workflows.',
        whyTheyWin: 'Established platform and developer adoption.',
      },
    ],
    marketPosition: 'AI collaborator platform focused on ambitious, team-scale work.',
    moat: [
      'Large seed round enabling rapid iteration',
      'Focus on collaborative AI workflows rather than standalone tools',
    ],
    vsGiants: 'Competes on collaboration-first AI product design rather than general-purpose assistants.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI is the core product surface for collaboration and creation.',
    aiDesignChallenges: [
      'Designing multi-agent collaboration workflows',
      'Ensuring clear user control and accountability',
      'Maintaining trust as AI collaborators take initiative',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Andi Peng',
        role: 'Co-founder',
        background: 'Former OpenAI researcher and lead on GPT-4o voice.',
      },
      {
        name: 'Georges Harik',
        role: 'Co-founder',
        background: 'Former OpenAI research engineer.',
      },
      {
        name: 'Eric Zelikman',
        role: 'Co-founder',
        background: 'Researcher in AI alignment and language models.',
      },
      {
        name: 'Yuchen He',
        role: 'Co-founder',
        background: 'Researcher focused on speech and language modeling.',
      },
      {
        name: 'Noah Goodman',
        role: 'Co-founder',
        background: 'Stanford professor focused on AI and cognitive science.',
      },
    ],
    whyBuilding: 'Enable teams to work with AI collaborators for ambitious, complex projects.',
    beliefs: [
      'AI collaboration should feel natural and empowering',
      'Teams need shared context and memory to work with AI effectively',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      '$480M seed round at $4.48B valuation (Jan 2026)',
    ],
    redFlags: [
      'High expectations for collaboration UX and AI reliability',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '1-10 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Collaborative AI workflows and delegation',
          'Control surfaces for AI autonomy and approvals',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality and trust measurement for AI collaborators',
          'Feedback loops for improving collaboration flows',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Shared workspaces for human+AI collaboration',
          'Coordination and handoff UX',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'Knowledge workers and creative teams',
      secondary: 'Organizations seeking AI collaboration at scale',
    },
    userProblems: [
      'Coordinating complex work across teams is slow',
      'AI tools are fragmented and hard to integrate into team workflows',
      'Teams need shared memory and context for collaboration',
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
        'Ambitious collaboration-focused AI product',
      ],
      whyNot: [
        'Very early-stage with limited public details',
      ],
      nextActions: [
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T12:00:00',
    sources: [
      { title: 'Humans& (startups.gallery)', url: 'https://startups.gallery/companies/humansand' },
      { title: 'Humans& funding + founders (TechCrunch)', url: 'https://techcrunch.com/2026/01/20/openai-alums-raise-480m-seed-round-for-humans-ai/' },
    ],
  };
