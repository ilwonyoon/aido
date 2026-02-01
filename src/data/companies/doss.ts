import { Company } from '../types';

export const doss: Company = {
  id: 'doss',
  name: 'Doss',
  description:
    'Accounting automation platform designed to help teams close the books faster.',
  website: 'https://www.doss.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/doss-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2024-08',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Finance teams automating close and reporting.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A funding for accounting automation',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Accounting automation demand grows as finance teams modernize.',
    tailwinds: [
      'Finance teams seek faster close cycles',
      'Automation adoption in back-office workflows',
      'Increasing complexity of finance stacks',
    ],
    headwinds: [
      'High trust and compliance requirements',
      'Competitive finance software market',
      'Integration complexity with ERP systems',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Doss becomes the default close automation tool.',
  },

  // Competition
  competitors: [
    {
      name: 'BlackLine',
      description: 'Accounting automation and close management platform.',
      whyTheyWin: 'Enterprise adoption and mature feature set.',
    },
    {
      name: 'FloQast',
      description: 'Close management software for accounting teams.',
      whyTheyWin: 'Strong mid-market adoption.',
    },
    {
      name: 'Runway',
      description: 'Finance planning and reporting platform.',
      whyTheyWin: 'Modern finance stack integrations.',
    },
  ],
  marketPosition: 'Accounting automation platform for faster close cycles.',
  moat: [
    'Finance workflow specialization',
    'Automation of close tasks',
    'Integrations with finance systems',
  ],
  vsGiants: 'Competes by focusing on automation and modern workflows for finance teams.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Doss is a finance automation platform, not AI-native.',
  aiDesignChallenges: [
    'High-trust finance UX',
    'Workflow visibility and audit trails',
    'Integration setup and data mapping',
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
    'Help finance teams close faster with automation and modern workflows.',
  beliefs: [
    'Close automation frees teams for higher-value work',
    'Finance workflows should be transparent and auditable',
    'Modern tooling improves accuracy and speed',
  ],
  designPhilosophy: 'Clear, trustworthy finance workflows.',
  greenFlags: [
    'Strong finance automation demand',
    'Series A funding for growth',
  ],
  redFlags: [
    'Compliance and accuracy requirements',
    'Competitive finance software landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Close workflow automation',
        'Approval and audit logic',
        'Integration and data validation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Close progress dashboards',
        'Accuracy and reconciliation metrics',
        'Audit reporting and exports',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Finance team dashboards',
        'Task management UX',
        'Reporting and audit views',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Finance and accounting teams',
    secondary: 'Controllers and CFO organizations',
  },
  userProblems: [
    'Month-end close is slow and manual',
    'Finance teams need better visibility into close progress',
    'Audit requirements are time-consuming',
    'System integrations are complex to maintain',
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
      'High-trust finance workflow design',
      'Automation of core accounting processes',
    ],
    whyNot: [
      'Compliance-heavy domain',
      'Competitive market',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Doss website', url: 'https://www.doss.com/' },
    { title: 'Doss on startups.gallery', url: 'https://startups.gallery/companies/doss' },
  ],
};
