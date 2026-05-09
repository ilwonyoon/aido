import { Company } from '../types';

export const deepgram: Company = {
    id: 'deepgram',
    name: 'Deepgram',
    description: 'AI-powered, voice-enabled data for developers.',
    website: 'https://deepgram.com',
    screenshot: '/screenshots/deepgram-screenshot.png',
    headquarters: 'San Francisco, CA',
    region: 'sf-bay-area' as const,
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/deepgram-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

    // Business
    stage: 'Series C',
    normalizedStage: 'series-c' as const,
    valuation: 'Unknown',
    totalFunding: '$130M',
    fundingHistory: [
      { stage: 'Series C', amount: '$130M', date: '2026-01' },
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
        name: 'Subtle Computing',
        description: 'Real-time conversation capture and memory tooling.',
        whyTheyWin: 'Focus on memory-driven conversation workflows.',
      },
    ],
    marketPosition: 'Developer-first speech AI platform for voice products.',
    moat: [
      'Developer-friendly APIs for speech AI',
      'Focus on latency and accuracy for production voice systems',
    ],
    vsGiants: 'Competes by focusing on voice-specific APIs rather than full cloud suites.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI speech models are the core product offering.',
    aiDesignChallenges: [
      'Designing reliable transcription and voice agent workflows',
      'Communicating accuracy and latency tradeoffs',
      'Building scalable developer experiences for voice APIs',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Scott Stephenson',
        role: 'Co-founder & CEO',
        background: 'Co-founded Deepgram and leads company strategy.',
      },
      {
        name: 'Adam Sypniewski',
        role: 'Co-founder',
        background: 'Engineer and co-founder focused on speech AI systems.',
      },
      {
        name: 'Noah Shutty',
        role: 'Co-founder',
        background: 'Co-founder with engineering and systems background.',
      },
    ],
    whyBuilding: 'Provide high-accuracy speech AI infrastructure for developers and businesses.',
    beliefs: [
      'Voice is a primary interface for AI products',
      'APIs should be fast, reliable, and developer-first',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series C funding in Jan 2026',
      'Remote-friendly operations',
    ],
    redFlags: [
      'Competitive voice AI market',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '51-200 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Voice processing workflows and error recovery',
          'Agent orchestration and call flows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Accuracy benchmarking and QA tooling',
          'Feedback loops for transcription quality',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Developer docs and API dashboards',
          'Admin tools for managing voice deployments',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
      primary: 'Developers building voice AI applications',
      secondary: 'Businesses deploying voice agents',
    },
    userProblems: [
      'Speech AI accuracy is inconsistent across domains',
      'Voice systems require robust latency and reliability',
      'Deployment and monitoring tools are fragmented',
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
        'Voice AI infrastructure with large-scale impact',
      ],
      whyNot: [
        'Competitive voice AI landscape',
      ],
      nextActions: [
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:58:34',
    sources: [
    { title: 'Source', url: 'https://startups.gallery/companies/deepgram' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/deepgram' },
    { title: 'Source', url: 'https://deepgram.com/careers' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/Deepgram' }
  ],
};
