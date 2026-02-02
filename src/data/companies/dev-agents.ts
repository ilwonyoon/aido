import { Company } from '../types';

export const devAgents: Company = {
  id: 'dev-agents',
  name: 'Dev Agents',
  description:
    'Autonomous developer agents that help teams ship software faster.',
  website: 'https://sdsa.ai/',
    screenshot: '/screenshots/dev-agents-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/dev-agents-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$56M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$56M',
      date: '2024-07',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Engineering teams seeking AI developer agents.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed funding for autonomous dev agents',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Developer agent platforms grow with AI adoption in engineering.',
    tailwinds: [
      'Rising adoption of AI coding tools',
      'Pressure to accelerate software delivery',
      'Developer workflows evolving toward agents',
    ],
    headwinds: [
      'Quality and reliability expectations',
      'Competitive AI developer tooling space',
      'Enterprise trust barriers',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Dev Agents delivers reliable autonomous workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Cognition',
      description: 'Autonomous software engineer agent.',
      whyTheyWin: 'Brand recognition in AI agent space.',
    },
    {
      name: 'GitHub Copilot',
      description: 'AI coding assistant for developers.',
      whyTheyWin: 'Distribution and integration into GitHub.',
    },
    {
      name: 'Cursor',
      description: 'AI-native code editor.',
      whyTheyWin: 'Strong developer adoption and UX.',
    },
  ],
  marketPosition: 'Autonomous developer agents for software teams.',
  moat: [
    'Agent orchestration across dev workflows',
    'Potential learning from codebase usage',
    'Focus on autonomous task completion',
  ],
  vsGiants: 'Competes with AI coding tools by focusing on autonomous agents.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Dev Agents is built around AI agents for software development.',
  aiDesignChallenges: [
    'Trust and transparency in agent actions',
    'Workflow control and handoffs',
    'Error recovery and debugging UX',
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
    'Enable teams to ship software faster with autonomous developer agents.',
  beliefs: [
    'Agentic workflows can boost developer productivity',
    'Trust and oversight are required for autonomy',
    'Developers need tools that fit existing workflows',
  ],
  designPhilosophy: 'Transparent agents with clear control and recovery paths.',
  greenFlags: [
    'Strong AI developer tooling tailwinds',
    'Seed funding for rapid iteration',
  ],
  redFlags: [
    'High reliability expectations',
    'Crowded AI coding market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow orchestration',
        'Task delegation and approvals',
        'Error recovery and rollback flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance analytics',
        'Task success monitoring',
        'User feedback loops',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agent control panels',
        'Code review and diffs UI',
        'Notifications and activity logs',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Engineering teams and developers',
    secondary: 'Technical founders and operators',
  },
  userProblems: [
    'Developers need faster delivery cycles',
    'Autonomous agents require trust and control',
    'Debugging AI-generated changes is hard',
    'Teams need transparency into agent actions',
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
      'Agentic AI UX challenges',
      'Developer workflow design impact',
    ],
    whyNot: [
      'Competitive AI coding space',
      'High reliability expectations',
    ],
    nextActions: [
      'Track product releases',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Dev Agents website', url: 'https://sdsa.ai/' },
    { title: 'Dev Agents on startups.gallery', url: 'https://startups.gallery/companies/dev-agents' },
  ],
};
