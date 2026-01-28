import { Company } from '../types';

export const parahelp: Company = {
  id: 'parahelp',
  name: 'Parahelp',
  description:
    'AI support agent that automates complex customer support tickets for fast-moving software companies.',
  website: 'https://parahelp.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai'],
  markets: ['b2b'],
  industries: ['developer-tools', 'sales-marketing'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$21.2M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.2M',
      date: '2025-09',
      leadInvestors: ['Hidden Capital'],
    },
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2025-09',
      leadInvestors: ['Alt Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Perplexity, Replit, HeyGen, Framer, Bolt.new, Photoroom',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Launched in August 2024',
      'YC S24 company with a 7-person team (YC profile)',
      'Raised Seed and Series A in Sept 2025',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI-native support agents still emerging.',
    tailwinds: [
      'Support teams under pressure to reduce response times',
      'AI agents can resolve tickets end-to-end',
      'Customer support budgets shifting toward automation',
    ],
    headwinds: [
      'Entrenched incumbents like Zendesk and Intercom',
      'Trust issues with AI handling customer tickets',
      'Complex integrations across support stacks',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Growing if Parahelp becomes the default AI agent for support workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Intercom (Fin)',
      description: 'AI support agent integrated into Intercom.',
      whyTheyWin: 'Existing customer base and deep support workflow integrations.',
    },
    {
      name: 'Zendesk AI',
      description: 'AI automation features built into Zendesk.',
      whyTheyWin: 'Incumbent platform with broad enterprise adoption.',
    },
    {
      name: 'Ada',
      description: 'AI customer service automation platform.',
      whyTheyWin: 'Mature AI support workflows and enterprise focus.',
    },
  ],
  marketPosition: 'AI support agent focused on end-to-end ticket resolution for software companies.',
  moat: [
    'AI-native workflows for complex ticket automation',
    'Fast onboarding without engineers',
    'Strong early adoption among AI-native companies',
  ],
  vsGiants: 'Built natively for AI workflows vs legacy support platforms retrofitting AI.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI agents are the core differentiator, automating support workflows end-to-end.',
  aiDesignChallenges: [
    'Trust design for AI handling customer tickets',
    'Context design across CRM, billing, and product systems',
    'Human handoff and escalation workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mads Liechti',
      role: 'Co-founder',
      background: 'Co-founded Parahelp.',
    },
    {
      name: 'Anker Ryhl',
      role: 'Co-founder',
      background: 'Co-founded Parahelp.',
    },
  ],
  whyBuilding:
    'Believe that context, not intelligence, is the bottleneck for AI agents in support workflows.',
  beliefs: [
    'Context beats raw intelligence for real-world automation',
    'Support should be automated end-to-end, not partially',
    'Fast onboarding matters for adoption',
  ],
  designPhilosophy: 'Automation that feels trustworthy and seamless for customers and agents.',
  greenFlags: [
    'Strong investor network and YC backing',
    'Early adoption by AI-native companies',
  ],
  redFlags: [
    'Highly competitive support automation market',
    'Customer trust risks with AI support agents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '7 total employees (YC profile)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent decision logic for ticket automation',
        'Policy enforcement and exception handling',
        'Multi-system context mapping',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Ticket resolution success metrics',
        'Confidence scoring for automation quality',
        'Human review workflows and QA audits',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Agent dashboard for support operations',
        'Approval and escalation flows',
        'Conversation review and QA tooling',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Customer support teams at software companies',
    secondary: 'Customer success and operations teams',
  },
  userProblems: [
    'Support teams struggle with high ticket volume',
    'Automation tools require long onboarding and setup',
    'AI support fails without deep context across tools',
    'Manual escalations slow down response times',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'In-person in San Francisco with no recurring meetings and daily written sign-offs.',
      url: 'https://parahelp.com/careers',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'AI-native workflow automation with clear design leverage',
      'Early-stage company with strong momentum',
    ],
    whyNot: [
      'Crowded market with strong incumbents',
      'In-person only culture',
    ],
    nextActions: [
      'Monitor product demos and automation quality',
      'Track design or product hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T15:25:00',
  sources: [
    { title: 'Parahelp website', url: 'https://parahelp.com/' },
    { title: 'Parahelp Series A and Seed', url: 'https://parahelp.com/blog/announcing-our-series-a-and-seed' },
    { title: 'Parahelp careers', url: 'https://parahelp.com/careers' },
    { title: 'Parahelp YC company page', url: 'https://www.ycombinator.com/companies/parahelp' },
  ],
};
