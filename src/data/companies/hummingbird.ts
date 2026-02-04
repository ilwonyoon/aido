import { Company } from '../types';

export const hummingbird: Company = {
  id: 'hummingbird',
  name: 'Hummingbird',
  description:
    'AI platform that helps financial institutions detect and prevent financial crime with automated investigations and compliance workflows.',
  website: 'https://www.hummingbird.co/',
    screenshot: '/screenshots/hummingbird-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/hummingbird-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$30M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Banks, fintechs, and financial institutions.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B stage with remote team',
      'AI-first financial crime workflows',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Large market: AML and compliance tooling is growing with regulatory pressure.',
    tailwinds: [
      'Regulatory pressure on financial crime compliance',
      'AI adoption in compliance teams',
      'Demand for faster investigations and audits',
    ],
    headwinds: [
      'High accuracy requirements for compliance',
      'Long enterprise sales cycles',
      'Competitive regtech market',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if Hummingbird becomes the default AML investigation layer.',
  },

  // Competition
  competitors: [
    {
      name: 'ComplyAdvantage',
      description: 'AML compliance and risk data platform.',
      whyTheyWin: 'Deep compliance datasets and enterprise adoption.',
    },
    {
      name: 'Unit21',
      description: 'AML transaction monitoring and investigations.',
      whyTheyWin: 'Product depth and integrations.',
    },
    {
      name: 'Feedzai',
      description: 'AI-driven fraud and AML platform.',
      whyTheyWin: 'Large enterprise footprint and model maturity.',
    },
  ],
  marketPosition: 'AI-native investigations platform for financial crime compliance.',
  moat: [
    'AI-driven investigation workflows',
    'Integrated case management for AML teams',
    'Potential data flywheel from investigations',
  ],
  vsGiants: 'Focused on AML investigations vs generic compliance tooling.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Hummingbird uses AI to automate and accelerate compliance investigations.',
  aiDesignChallenges: [
    'Trust and explainability for AI alerts',
    'Evidence trails and auditability',
    'Workflow design for investigators and analysts',
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
    'Help compliance teams fight financial crime with faster, more accurate investigations.',
  beliefs: [
    'Compliance teams need better tools for investigations',
    'AI can reduce false positives and speed decisions',
    'Auditability and transparency are essential',
  ],
  designPhilosophy: 'Make investigations clear, auditable, and efficient.',
  greenFlags: [
    'Series B indicates growth and adoption',
    'Clear market need in compliance tooling',
  ],
  redFlags: [
    'High regulatory and accuracy requirements',
    'Competitive regtech market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Investigation workflow logic',
        'Alert triage and escalation flows',
        'Permissions and audit controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Alert accuracy metrics',
        'Case resolution tracking',
        'Feedback loops for model tuning',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Case management dashboards',
        'Investigation timelines and evidence views',
        'Reporting and compliance exports',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Compliance and AML investigation teams',
    secondary: 'Risk and fraud teams at financial institutions',
  },
  userProblems: [
    'AML investigations are slow and manual',
    'False positives waste analyst time',
    'Compliance teams need clear audit trails',
    'Legacy tooling is fragmented and inefficient',
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
      'Clear AI-native compliance use case',
      'High design leverage in investigative workflows',
    ],
    whyNot: [
      'Regulatory complexity and high accuracy bar',
      'Long enterprise sales cycles',
    ],
    nextActions: [
      'Track product updates and customer traction',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:45:00',
  sources: [
    { title: 'Hummingbird website', url: 'https://www.hummingbird.co/' },
    { title: 'Hummingbird on startups.gallery', url: 'https://startups.gallery/companies/hummingbird' },
  ],
};
