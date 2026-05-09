import { Company } from '../types';

export const variant: Company = {
  id: 'variant',
  name: 'Variant',
  description:
    'AI agents platform focused on automating complex workflows for enterprises.',
  website: 'https://variant.ai/',
  screenshot: '/screenshots/variant-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/variant-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['enterprise'],
  category: 'enterprise-ops' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$5.9M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5.9M', date: '2025-04' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Enterprises adopting AI agents for workflow automation.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Building AI agent workflows for enterprise automation',
      'San Francisco-based team',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Enterprise agent adoption grows as companies automate complex workflows.',
    tailwinds: [
      'Rapid enterprise interest in AI agents',
      'Need for workflow automation across teams',
      'Growing AI infrastructure adoption',
    ],
    headwinds: [
      'Enterprise trust and compliance requirements',
      'Competition from AI platform providers',
      'Integration complexity with legacy systems',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Variant builds enterprise-grade agent workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Adept',
      description: 'Agentic AI platform for enterprise workflows.',
      whyTheyWin: 'Early brand recognition in agentic AI.',
    },
    {
      name: 'Microsoft Copilot Studio',
      description: 'Enterprise platform for AI assistants.',
      whyTheyWin: 'Distribution and enterprise adoption.',
    },
    {
      name: 'ServiceNow',
      description: 'Workflow automation platform with AI features.',
      whyTheyWin: 'Deep enterprise penetration.',
    },
  ],
  marketPosition: 'Enterprise AI agent platform for workflow automation.',
  moat: [
    'Agentic workflow orchestration',
    'Enterprise integrations and compliance controls',
    'AI-driven process automation',
  ],
  vsGiants: 'Competes by focusing on agent-native workflows vs broader enterprise suites.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Variant is focused on AI agent automation as the core product.',
  aiDesignChallenges: [
    'Trust and control for autonomous workflows',
    'Human-in-the-loop approvals',
    'Auditability and compliance in agent actions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Daniel Bulhosa Solorzano',
      role: 'Co-founder',
      background: 'Experience at CMU. Building Variant to embed AI agents into enterprise workflows through Y Combinator.',
    },
    {
      name: 'Benjamin South Lee',
      role: 'Co-founder',
      background: 'Experience at Princeton. Co-founded Variant in 2024 to automate complex enterprise operations with AI agents.',
    },
  ],
  whyBuilding:
    'Automate enterprise workflows with AI agents that can execute complex tasks.',
  beliefs: [
    'AI agents will transform enterprise operations',
    'Workflows need automation with human oversight',
    'Enterprise trust requires transparency',
  ],
  designPhilosophy: 'Controlled automation with clear oversight and auditability.',
  greenFlags: [
    'Strong enterprise AI tailwinds',
    'Clear agentic workflow focus',
  ],
  redFlags: [
    'Enterprise sales complexity',
    'High reliability expectations',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow configuration',
        'Permissions and approvals',
        'Error handling and escalation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance metrics',
        'Workflow success analytics',
        'Audit trails and compliance reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Workflow builder UI',
        'Monitoring dashboards',
        'Integration setup flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise operations teams',
    secondary: 'IT and workflow automation leaders',
  },
  userProblems: [
    'Complex workflows are hard to automate',
    'Trust in AI-driven actions is limited',
    'Manual approvals slow down operations',
    'Integrations with legacy systems are painful',
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
      'Agentic workflow design challenges',
      'Enterprise automation impact',
    ],
    whyNot: [
      'Enterprise sales cycles',
      'Competitive AI platform landscape',
    ],
    nextActions: [
      'Track product announcements',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:40:00',
  sources: [
    { title: 'Source', url: 'https://variant.ai/' },
    { title: 'Source', url: 'https://startups.gallery/companies/variant' }
  ],
};
