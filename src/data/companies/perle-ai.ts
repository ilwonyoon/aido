import { Company } from '../types';

export const perleAi: Company = {
  id: 'perle-ai',
  name: 'Perle AI',
  description:
    'Agentic AI platform that helps teams deploy and manage AI agents for enterprise workflows.',
  website: 'https://perle.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/perle-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$5.6M (seed)',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed funding of $5.6M (PRNewswire)',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: enterprise agent platforms are still emerging.',
    tailwinds: [
      'Rising demand for AI agents in enterprise workflows',
      'Automation pressure across ops and knowledge work',
      'Growing maturity of LLM tooling and infrastructure',
    ],
    headwinds: [
      'Trust and safety requirements for agents',
      'Competitive landscape of agent platforms',
      'Integration complexity with legacy systems',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if Perle AI becomes the default agent orchestration layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Adept',
      description: 'Agentic AI platform for enterprise tasks.',
      whyTheyWin: 'Strong funding and product momentum.',
    },
    {
      name: 'Cognition',
      description: 'AI software engineering agents and automation.',
      whyTheyWin: 'Technical depth and model performance.',
    },
    {
      name: 'Dust',
      description: 'Enterprise AI agent platform and tooling.',
      whyTheyWin: 'Enterprise focus and product polish.',
    },
  ],
  marketPosition: 'Enterprise-focused agent platform for orchestrating AI workflows.',
  moat: [
    'Agent orchestration and workflow tooling',
    'Enterprise integration focus',
    'Early funding and product development',
  ],
  vsGiants: 'Focused on agent workflows vs general-purpose AI APIs.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Perle AI builds agentic systems that are core to the product.',
  aiDesignChallenges: [
    'Trust and safety design for autonomous agents',
    'Workflow transparency and auditability',
    'Human oversight and intervention controls',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Arun Puttaraju',
      role: 'Co-founder',
      background: 'Co-founded Perle AI to build enterprise agent infrastructure.',
    },
  ],
  whyBuilding:
    'Enable enterprises to deploy AI agents safely and effectively across workflows.',
  beliefs: [
    'Agents will reshape enterprise productivity',
    'Trust and control are essential for adoption',
    'Workflow visibility is critical for AI systems',
  ],
  designPhilosophy: 'Make agent workflows transparent and controllable.',
  greenFlags: [
    'Seed funding and early momentum',
    'Clear enterprise agent focus',
  ],
  redFlags: [
    'Highly competitive agent market',
    'Trust and safety challenges',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent orchestration logic and policies',
        'Escalation and fallback workflows',
        'Permissions and compliance controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent quality monitoring and evaluation',
        'Incident review workflows',
        'Human feedback loops for agent improvement',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agent management dashboards',
        'Workflow builder UX',
        'Audit trails and reporting interfaces',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise ops and AI platform teams',
    secondary: 'Developers building agentic workflows',
  },
  userProblems: [
    'Deploying AI agents without safety controls is risky',
    'Workflow transparency is limited in current tools',
    'Enterprises need compliance-ready agent systems',
    'Agent quality is hard to evaluate and monitor',
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
      'AI-native agent platform with strong upside',
      'High-impact design problems around trust and control',
    ],
    whyNot: [
      'Early-stage risk and unclear product traction',
      'Crowded agent platform market',
    ],
    nextActions: [
      'Track product launches and customer adoption',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Perle AI website', url: 'https://perle.ai/' },
    { title: 'Perle AI company page', url: 'https://perle.ai/company' },
    { title: 'Perle AI seed funding (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/perle-ai-raises-5-6m-seed-round-to-build-agentic-ai-workforce-302298293.html' },
    { title: 'Perle AI on startups.gallery', url: 'https://startups.gallery/companies/perle-ai' },
  ],
};
