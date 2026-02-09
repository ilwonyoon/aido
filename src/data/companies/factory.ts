import { Company } from '../types';

export const factory: Company = {
  id: 'factory',
  name: 'Factory',
  description:
    'AI software development platform with autonomous “Droids” that build, test, and ship code across the stack.',
  website: 'https://factory.ai',
    screenshot: '/screenshots/factory-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/factory-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$300M (Sept 2025)',
  totalFunding: '$50M (Series B announced)',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$50M',
      date: '2025-09',
      valuation: '$300M',
      leadInvestors: ['NEA'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Enterprise traction with measurable productivity gains',
  runway: 'Strong (Series B led by NEA)',
  customers: 'MongoDB, EY, Bayer, Zapier, Clari (and more)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    signals: ['Series B: $50M led by NEA (Sept 2025)'],
    tam: 'Unknown',
    ceiling: 'Early innings: autonomous software development is still emerging.',
    tailwinds: [
      'Strong enterprise appetite for AI-driven developer productivity',
      'Shift toward agentic workflows in software engineering',
      'Developer tooling budgets remain large and growing',
    ],
    headwinds: [
      'Intense competition from major platforms and AI-native startups',
      'Trust and reliability concerns for autonomous coding agents',
      'Rapid model improvements can commoditize tooling',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Droids outperform peers and integrate deeply into SDLC workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Cognition (Devin)',
      description: 'Autonomous AI software engineer for end-to-end tasks.',
      whyTheyWin: 'Strong agent positioning and brand momentum.',
    },
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer integrated into developer workflows.',
      whyTheyWin: 'Deep IDE integration and massive distribution via GitHub.',
    },
    {
      name: 'Replit',
      description: 'AI-assisted software development environment.',
      whyTheyWin: 'Integrated cloud IDE and strong developer community.',
    },
  ],
  marketPosition: 'Agent-native platform for autonomous software delivery (Droids across IDE/CI/CD).',
  moat: [
    'Droids orchestrate tasks across IDE, CI/CD, and ticketing systems',
    'Enterprise customer adoption (MongoDB, EY, Bayer, Zapier, Clari)',
    'Enterprise impact metrics and case studies',
  ],
  vsGiants: 'Competes with Copilot-style assistants by emphasizing autonomy and full SDLC coverage.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Autonomous software engineering agents are the product; Factory does not exist without AI.',
  aiDesignChallenges: [
    'Agent visibility: communicating what autonomous Droids are doing and why',
    'Safety and control: boundaries, approvals, and rollback workflows',
    'Evaluation design: measuring quality and productivity impact',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Matan Grinberg',
      role: 'Co-founder & CEO',
      background: 'Co-founded Factory in 2023; CEO focused on AI-native software development.',
    },
    {
      name: 'Eno Reyes',
      role: 'Co-founder',
      background: 'Co-founded Factory in 2023; background in software engineering and AI.',
    },
  ],
  whyBuilding:
    'Make software teams dramatically faster by delegating end-to-end engineering work to autonomous agents.',
  beliefs: [
    'Autonomy beats assistance for true productivity gains',
    'Software delivery should be measured in impact, not output',
    'Developers should orchestrate, not grind through routine tasks',
  ],
  designPhilosophy: 'Agent-first workflows with transparent control and quality guardrails.',
  greenFlags: [
    'Series B with $50M and top-tier investors',
    'Documented customer productivity gains',
    'Benchmark leadership in agent performance',
  ],
  redFlags: [
    'Highly competitive AI coding landscape',
    'Trust and reliability challenges for autonomous agents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent autonomy boundaries and escalation rules',
        'Task decomposition and execution planning',
        'Error recovery and rollback flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent quality metrics (code quality, test pass rates)',
        'Human review workflows and confidence scoring',
        'Benchmarking agent performance vs developer output',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Status visualization for long-running agent tasks',
        'Developer control panels for approvals and overrides',
        'Integrated UI across IDE, CI/CD, and ticketing tools',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise software engineering teams',
    secondary: 'Fast-scaling startups with large engineering backlogs',
  },
  userProblems: [
    'Engineering teams spend too much time on routine implementation work',
    'Velocity is limited by repetitive coding and testing tasks',
    'Context switching and backlog management reduce productivity',
    'Teams need visibility and control over autonomous code changes',
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
    fitScore: 8,
    whyJoin: [
      'Agentic UX and autonomy design challenges',
      'Strong funding and enterprise traction',
      'Clear differentiation via full SDLC automation',
    ],
    whyNot: [
      'Highly competitive market with fast-moving incumbents',
      'Unclear design leadership and team size',
    ],
    nextActions: [
      'Track product demos and benchmark performance updates',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T12:30:00',
  sources: [
    { title: 'Source', url: 'https://factory.ai/' },
    { title: 'Source', url: 'https://startups.gallery/companies/factory' },
    { title: 'Source', url: 'https://factory.ai/news/factory-announces-50m-series-b-at-300m-valuation' },
    { title: 'Source', url: 'https://openai.com/index/adding-enterprise-grade-software-engineering-to-codex-with-factory/' },
    { title: 'Source', url: 'https://www.cognition.ai/' },
    { title: 'Source', url: 'https://github.com/features/copilot' },
    { title: 'Source', url: 'https://replit.com/' }
  ],
};
