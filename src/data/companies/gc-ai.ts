import { Company } from '../types';

export const gcAi: Company = {
  id: 'gc-ai',
  name: 'GC AI',
  description:
    'In-house legal AI platform for enterprise legal teams to review and manage legal work faster.',
  website: 'https://gc.ai/',
    screenshot: '/screenshots/gc-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/gc-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'legal'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$60M',
  fundingHistory: [
    { stage: 'Series B', amount: '$60M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Enterprise legal teams and in-house counsel.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B stage legal AI platform',
      'Remote team serving enterprise legal workflows',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Legal AI adoption is growing as enterprises seek efficiency gains.',
    tailwinds: [
      'Enterprises are adopting legal AI copilots',
      'Pressure to reduce legal review time',
      'Growing acceptance of AI-assisted contract review',
    ],
    headwinds: [
      'Trust and accuracy concerns in legal AI',
      'Slow enterprise procurement',
      'Regulatory and compliance constraints',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate if GC AI builds strong legal domain data advantages.',
  },

  // Competition
  competitors: [
    {
      name: 'Harvey',
      description: 'AI assistant for legal professionals.',
      whyTheyWin: 'Strong enterprise adoption and brand recognition.',
    },
    {
      name: 'Ironclad AI',
      description: 'Contract lifecycle management with AI features.',
      whyTheyWin: 'Integrated CLM workflow and enterprise footprint.',
    },
    {
      name: 'CoCounsel',
      description: 'Legal AI assistant by Thomson Reuters.',
      whyTheyWin: 'Trusted legal brand and data access.',
    },
  ],
  marketPosition: 'Enterprise-focused legal AI for in-house counsel and legal operations.',
  moat: [
    'Legal domain workflow focus',
    'AI workflows tuned for enterprise legal teams',
    'Potential data flywheel from legal review usage',
  ],
  vsGiants: 'Competes with legacy legal research and CLM vendors by focusing on AI-native workflows.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: GC AI is built around AI for legal workflows.',
  aiDesignChallenges: [
    'Trust design for AI legal outputs',
    'Workflow orchestration for legal review',
    'Auditable and explainable AI interactions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Cecilia Ziniti',
      role: 'Co-founder & CEO',
      background: '20-year legal veteran; former general counsel at Amazon Alexa, Cruise, and Replit.',
    },
    {
      name: 'Bardia Pourvakil',
      role: 'Co-founder & CTO',
      background: 'Early engineer at Roam Research and Replit; co-founded GC AI in November 2023.',
    },
  ],
  whyBuilding:
    'Help in-house legal teams move faster with AI-assisted review and analysis.',
  beliefs: [
    'Legal teams need modern AI tooling',
    'AI should improve accuracy and speed, not replace judgment',
    'Enterprise legal workflows require auditability',
  ],
  designPhilosophy: 'Trustworthy AI with clear review workflows and audit trails.',
  greenFlags: [
    'Clear enterprise legal pain point',
    'Series B stage in a growing legal AI market',
  ],
  redFlags: [
    'Regulatory and compliance risk',
    'Competitive legal AI landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI review workflows and guardrails',
        'Approval and escalation logic',
        'Permissions and document access controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'AI output quality scoring',
        'Human-in-the-loop feedback loops',
        'Audit and compliance review dashboards',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Legal review workspace UX',
        'Document annotation interfaces',
        'Search and retrieval UX for legal data',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'In-house legal teams at mid-market and enterprise companies',
    secondary: 'Legal operations teams managing contracts',
  },
  userProblems: [
    'Legal review cycles are slow and manual',
    'Teams need faster contract analysis without sacrificing accuracy',
    'Legal teams need audit trails for AI-generated outputs',
    'Workflow handoffs across legal and business teams are inefficient',
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
      'High-impact AI workflows for legal teams',
      'Trust and explainability design challenges',
    ],
    whyNot: [
      'Enterprise legal procurement cycles are long',
      'Regulatory scrutiny on AI outputs',
    ],
    nextActions: [
      'Track enterprise adoption signals',
      'Monitor hiring for design and product roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'Source', url: 'https://gc.ai/' },
    { title: 'Source', url: 'https://gc.ai/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/gc-ai' }
  ],
};
