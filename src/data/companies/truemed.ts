import { Company } from '../types';

export const truemed: Company = {
  id: 'truemed',
  name: 'Truemed',
  description:
    'Platform that enables shoppers to use HSA/FSA funds for eligible health and wellness products.',
  website: 'https://www.truemed.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['infrastructure', 'healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Merchants and consumers using HSA/FSA purchasing.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage with remote team',
      'HSA/FSA commerce enablement focus',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: HSA/FSA commerce expansion continues as wellness spend grows.',
    tailwinds: [
      'Rising consumer spend on health and wellness',
      'Merchants seeking HSA/FSA conversion lift',
      'Employer and consumer interest in tax-advantaged benefits',
    ],
    headwinds: [
      'Regulatory compliance for HSA/FSA eligibility',
      'Complex medical documentation workflows',
      'Merchant adoption friction',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Truemed becomes the standard HSA/FSA checkout layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Flex',
      description: 'HSA/FSA payment and eligibility tooling for merchants.',
      whyTheyWin: 'Merchant partnerships and checkout integrations.',
    },
    {
      name: 'Sika',
      description: 'HSA/FSA eligibility and payments platform.',
      whyTheyWin: 'Early partnerships with wellness brands.',
    },
    {
      name: 'Truepill (HSA/FSA services)',
      description: 'Healthcare infrastructure platform with payment workflows.',
      whyTheyWin: 'Healthcare distribution and compliance depth.',
    },
  ],
  marketPosition: 'HSA/FSA enablement platform for health and wellness commerce.',
  moat: [
    'Embedded compliance workflows for HSA/FSA eligibility',
    'Merchant integration and conversion focus',
    'Consumer-friendly eligibility experience',
  ],
  vsGiants: 'Focuses on HSA/FSA checkout enablement vs broad healthcare platforms.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI-Feature: Truemed focuses on eligibility and compliance workflows, with limited AI dependence.',
  aiDesignChallenges: [
    'Clarity around eligibility and medical documentation',
    'Trust and transparency for consumers',
    'Streamlined checkout for HSA/FSA purchases',
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
    'Make it easy to use HSA/FSA funds for health and wellness purchases.',
  beliefs: [
    'Healthcare spending should be flexible and consumer-friendly',
    'Eligibility workflows should be simple and fast',
    'Merchants benefit from HSA/FSA-enabled checkout',
  ],
  designPhilosophy: 'Make eligibility workflows clear and low-friction.',
  greenFlags: [
    'Clear market demand in wellness commerce',
    'Series A indicates growth',
  ],
  redFlags: [
    'Compliance and documentation complexity',
    'Merchant adoption risks',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Eligibility workflow logic',
        'Documentation and compliance flow design',
        'Payment and approval rules',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Conversion and approval metrics',
        'Eligibility success tracking',
        'Support and dispute workflows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Checkout and eligibility UX',
        'Consumer onboarding flows',
        'Merchant dashboard and reporting',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Health and wellness merchants',
    secondary: 'Consumers using HSA/FSA funds',
  },
  userProblems: [
    'HSA/FSA eligibility is confusing for consumers',
    'Merchants lose conversions without HSA/FSA support',
    'Documentation requirements add friction',
    'Compliance workflows are slow and manual',
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
      'Clear product value in healthcare commerce',
      'High leverage UX improvements in checkout flow',
    ],
    whyNot: [
      'Regulatory complexity and documentation overhead',
      'Competitive space',
    ],
    nextActions: [
      'Track merchant adoption and growth',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:45:00',
  sources: [
    { title: 'Truemed website', url: 'https://www.truemed.com/' },
    { title: 'Truemed on startups.gallery', url: 'https://startups.gallery/companies/truemed' },
  ],
};
