import { Company } from '../types';

export const surgeAi: Company = {
  id: 'surge-ai',
  name: 'Surge AI',
  description:
    'Human feedback and data labeling platform powering frontier AI training, evaluation, and RLHF.',
  website: 'https://surgehq.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/surge-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Bootstrapped',
  valuation: 'Unknown',
  totalFunding: 'Bootstrapped (no venture funding disclosed)',
  revenue: 'Unknown',
  growth: 'Profitable from day one',
  runway: 'Profitable (self-funded)',
  customers: 'OpenAI, Anthropic, Meta, Google (and other AI labs)',

  // Growth & Potential
  growthMetrics: {
    stage: 'unknown',
    signals: [
      'Profitable without venture funding',
      'Powering leading AI labs (OpenAI, Anthropic, Meta, Google)',
      'US-based expert workforce for high-quality labeling',
    ],
    tam: 'Unknown',
    ceiling: 'Early innings: demand for high-quality human data scales with frontier AI.',
    tailwinds: [
      'Rapid growth of RLHF and human feedback workflows',
      'AI labs investing heavily in data quality and evaluation',
      'Shift toward higher-quality, domain-expert labeling',
    ],
    headwinds: [
      'Pricing pressure from lower-cost labeling providers',
      'Commoditization of basic data labeling services',
      'Regulatory scrutiny around data provenance and labor',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if quality and reliability continue to outpace commodity providers.',
  },

  // Competition
  competitors: [
    {
      name: 'Scale AI',
      description: 'Data labeling and AI data platform for training models.',
      whyTheyWin: 'Large-scale operations and enterprise adoption.',
    },
    {
      name: 'Labelbox',
      description: 'Data labeling platform for training data and model evaluation.',
      whyTheyWin: 'End-to-end tooling for labeling workflows and model evaluation.',
    },
    {
      name: 'Appen',
      description: 'Global data annotation and AI training data provider.',
      whyTheyWin: 'Large global workforce and long enterprise track record.',
    },
  ],
  marketPosition: 'Premium human feedback and labeling for frontier AI teams.',
  moat: [
    'US-based expert workforce focused on high-quality labels',
    'Custom tooling for RLHF and evaluation workflows',
    'Trusted relationships with leading AI labs',
  ],
  vsGiants: 'Competes on label quality and expert workforce rather than pure scale.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: The business exists to power AI model training and evaluation with human data and feedback.',
  aiDesignChallenges: [
    'Quality assurance design for high-stakes labeling tasks',
    'Workflow design for expert annotators and reviewers',
    'Feedback loops between model errors and labeling guidelines',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Edwin Chen',
      role: 'Founder & CEO',
      background: 'Former Facebook AI and Microsoft engineer; founded Surge AI in 2020.',
    },
  ],
  whyBuilding:
    'Provide the human intelligence and feedback needed to raise the ceiling on AI model performance.',
  beliefs: [
    'Smart is not the same as useful',
    'High-quality human data is essential for frontier AI',
    'Human feedback should scale with AI capability',
  ],
  designPhilosophy: 'Quality-first workflows and tooling for expert human contributors.',
  greenFlags: [
    'Profitable without venture funding',
    'Trusted by top AI labs',
    'Clear quality differentiation in a crowded market',
  ],
  redFlags: [
    'Data labeling commoditization risk',
    'Market sensitivity to pricing and labor dynamics',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Jean Massad (Design Lead)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Defining annotation logic and guidelines for RLHF tasks',
        'Designing review workflows for disagreement resolution',
        'Quality control decision trees for expert labeling',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Designing scoring frameworks for label quality',
        'Confidence metrics for human feedback reliability',
        'Feedback loops from model errors to labeling revisions',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Annotator tooling and task UIs',
        'Reviewer dashboards and audit logs',
        'Customer-facing labeling progress dashboards',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'AI labs and ML teams needing high-quality training data',
    secondary: 'Enterprise teams building AI evaluation and RLHF pipelines',
  },
  userProblems: [
    'Model performance is limited by low-quality or inconsistent labels',
    'RLHF workflows require expert annotators and careful review',
    'Scaling human feedback without sacrificing quality is difficult',
    'Enterprises need reliable provenance and audit trails for training data',
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
      'High-impact work on human feedback workflows',
      'Quality-first culture with AI lab partnerships',
    ],
    whyNot: [
      'Data labeling market can commoditize quickly',
      'Design roles may be limited in a services-heavy model',
    ],
    nextActions: [
      'Review public product materials and demos',
      'Monitor hiring for product/design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T12:30:00',
  sources: [
    { title: 'Surge AI website', url: 'https://surgehq.ai/' },
    { title: 'Surge AI About', url: 'https://surgehq.ai/about' },
    { title: 'Surge AI Careers', url: 'https://surgehq.ai/careers' },
    { title: 'Surge AI on startups.gallery', url: 'https://startups.gallery/companies/surge-ai' },
    { title: 'Scale AI documentation', url: 'https://scale.com/docs' },
    { title: 'Labelbox platform', url: 'https://labelbox.com/product/platform/' },
    { title: 'Appen data annotation', url: 'https://www.appen.com/solutions/data-annotation/' },
  ],
};
