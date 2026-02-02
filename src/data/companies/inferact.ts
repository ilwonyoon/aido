import { Company } from '../types';

export const inferact: Company = {
    id: 'inferact',
    name: 'Inferact',
    description: 'AI system that provides real-time instructions to customer support agents during live conversations.',
    website: 'https://inferact.ai',
    screenshot: '/screenshots/inferact-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/inferact-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'conversation-ai'],
  markets: ['b2b'],
  industries: ['developer-tools', 'sales-marketing'],

    // Business
    stage: 'Seed',
    valuation: '$800M (Jan 2026)',
    totalFunding: '$150M',
    fundingHistory: [
      { stage: 'Seed', amount: '$150M', date: '2026-01' },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',
    customers: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Synthesia',
        description: 'AI video platform for synthetic video creation.',
        whyTheyWin: 'Strong adoption in enterprise workflows and polished UX.',
      },
      {
        name: 'Hume AI',
        description: 'Voice AI platform focused on expressive, natural interactions.',
        whyTheyWin: 'Research-driven approach to conversational quality.',
      },
    ],
    marketPosition: 'Real-time AI guidance for customer support teams.',
    moat: [
      'Real-time instruction layer embedded into live support workflows',
      'Focus on low-latency guidance and operational impact',
    ],
    vsGiants: 'Differentiates by specializing in real-time agent guidance rather than general AI tooling.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI is central to live support guidance and decision support.',
    aiDesignChallenges: [
      'Designing low-latency guidance without disrupting agent workflows',
      'Communicating AI confidence and recommendations clearly',
      'Integrating with live support tooling and permissions',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Simon Mo',
        role: 'Co-founder & CEO',
        background: 'Co-creator of vLLM and ML systems researcher.',
      },
      {
        name: 'Woosuk Kwon',
        role: 'Co-founder',
        background: 'Co-creator of vLLM and ML systems researcher.',
      },
      {
        name: 'Kaichao You',
        role: 'Co-founder',
        background: 'ML systems researcher and vLLM contributor.',
      },
      {
        name: 'Roger Wang',
        role: 'Co-founder',
        background: 'ML systems engineer and vLLM contributor.',
      },
      {
        name: 'Joseph E. Gonzalez',
        role: 'Co-founder',
        background: 'UC Berkeley professor and ML systems researcher.',
      },
      {
        name: 'Ion Stoica',
        role: 'Co-founder',
        background: 'UC Berkeley professor and systems researcher.',
      },
    ],
    whyBuilding: 'Provide real-time AI guidance that improves customer support outcomes.',
    beliefs: [
      'AI should augment human agents in the moment',
      'Operational workflows need embedded guidance, not separate tools',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      '$150M seed round at $800M valuation (Jan 2026)',
      'Clear focus on real-time support workflows',
    ],
    redFlags: [
      'High expectations for latency and reliability',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '11-50 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Agent guidance logic and escalation design',
          'Real-time recommendation flows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Measuring quality and impact of guidance suggestions',
          'Feedback loops for agent corrections',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'In-app overlays and contextual prompts for agents',
          'Dashboards for supervisors and QA',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'Customer support teams and agents',
      secondary: 'Support operations leaders',
    },
    userProblems: [
      'Agents need real-time guidance during live conversations',
      'Support teams need consistent handling and faster resolutions',
      'Coaching and QA is hard to scale across large teams',
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
        'Real-time AI workflow design challenges',
      ],
      whyNot: [
        'High reliability requirements',
      ],
      nextActions: [
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:58:34',
    sources: [
      { title: 'Inferact (startups.gallery)', url: 'https://startups.gallery/companies/inferact' },
      { title: 'Inferact funding + founders (FinSMEs)', url: 'https://www.finsmes.com/2026/01/inferact-raises-150m-in-seed-funding.html' },
      { title: 'Inferact announcement', url: 'https://inferact.ai/announcing' },
      { title: 'Inferact Jobs (Ashby)', url: 'https://jobs.ashbyhq.com/Inferact' },
    ],
  };
