import { Company } from '../types';

export const humbleOps: Company = {
  id: 'humble-ops',
  name: 'Humble Ops',
  description:
    'Ops team for AI apps, focused on making human review and escalation easy to manage.',
  website: 'https://humbleops.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/humble-ops-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['other'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'AI product teams needing human review workflows.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Pre-seed AI ops platform',
      'Focused on human-in-the-loop workflows',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI ops tooling demand expands as AI apps scale.',
    tailwinds: [
      'Growing need for human review in AI systems',
      'AI compliance and safety requirements',
      'Rising AI product complexity',
    ],
    headwinds: [
      'Early-stage market education required',
      'Competition from workflow automation tools',
      'Budget constraints in early AI teams',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Humble Ops becomes the default review layer for AI apps.',
  },

  // Competition
  competitors: [
    {
      name: 'Scale AI',
      description: 'Data and human review platform for AI teams.',
      whyTheyWin: 'Scale and enterprise adoption.',
    },
    {
      name: 'Humanloop',
      description: 'Human-in-the-loop tooling for AI feedback.',
      whyTheyWin: 'Focus on AI eval workflows.',
    },
    {
      name: 'Labelbox',
      description: 'Data labeling and review platform.',
      whyTheyWin: 'Large labeling ecosystem.',
    },
  ],
  marketPosition: 'AI ops platform for human review and escalation workflows.',
  moat: [
    'Human review workflow specialization',
    'Integration into AI product pipelines',
    'Operational tooling for AI quality control',
  ],
  vsGiants: 'Competes by focusing on lightweight ops tooling vs large labeling platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Humble Ops centers on AI product operations and human review.',
  aiDesignChallenges: [
    'Workflow design for human review queues',
    'Quality monitoring for AI outputs',
    'Escalation and auditability in AI ops',
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
    'Make it easy for AI teams to run human review and escalation workflows.',
  beliefs: [
    'Human review is essential for safe AI systems',
    'Ops tooling should be lightweight and fast to deploy',
    'Transparency builds trust in AI outputs',
  ],
  designPhilosophy: 'Clear, auditable workflows for AI operations.',
  greenFlags: [
    'Growing demand for human-in-the-loop AI ops',
    'AI-native workflow focus',
  ],
  redFlags: [
    'Early market adoption risk',
    'Competition from larger platforms',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Queue routing and escalation logic',
        'Permissions and reviewer roles',
        'Audit trails for decisions',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality scoring dashboards',
        'Reviewer performance analytics',
        'AI output monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Review console UX',
        'Workflow setup and configuration',
        'Notification and task assignment UI',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI product teams managing human review',
    secondary: 'Operations teams ensuring AI quality',
  },
  userProblems: [
    'AI teams need reliable human review workflows',
    'Escalation and audit trails are hard to manage',
    'Quality monitoring requires dedicated tooling',
    'Manual processes do not scale with AI usage',
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
      'High-impact AI ops workflows',
      'Human-in-the-loop design challenges',
    ],
    whyNot: [
      'Early-stage market uncertainty',
      'Competitive AI ops landscape',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Humble Ops website', url: 'https://humbleops.ai/' },
    { title: 'Humble Ops on startups.gallery', url: 'https://startups.gallery/companies/humble-ops' },
  ],
};
