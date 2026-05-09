import { Company } from '../types';

export const indexCompany: Company = {
  id: 'index',
  name: 'Index',
  description:
    'Platform that helps companies launch and manage their own index funds.',
  website: 'https://index.com/',
    screenshot: '/screenshots/index-screenshot.png',
    ogImage: '/screenshots/index-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$2.6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2.6M',
      date: '2024-12',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Fintech teams and investment platforms launching index funds.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed funding for index fund platform',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Index fund infrastructure grows as fintech platforms expand.',
    tailwinds: [
      'Rising interest in low-cost index products',
      'Fintech platforms launching investment products',
      'Demand for turnkey fund infrastructure',
    ],
    headwinds: [
      'Regulatory complexity in finance',
      'Long sales cycles and compliance approvals',
      'Trust and security requirements',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Index becomes the default index fund infrastructure platform.',
  },

  // Competition
  competitors: [
    {
      name: 'Apex Clearing',
      description: 'Clearing and custody services for fintechs.',
      whyTheyWin: 'Infrastructure scale and partnerships.',
    },
    {
      name: 'DriveWealth',
      description: 'Brokerage infrastructure for fintech platforms.',
      whyTheyWin: 'APIs and global reach.',
    },
    {
      name: 'Wealthfront',
      description: 'Automated investing platform.',
      whyTheyWin: 'Established consumer brand and scale.',
    },
  ],
  marketPosition: 'Index fund infrastructure for fintech and investment platforms.',
  moat: [
    'Specialization in index fund launch workflows',
    'Compliance and reporting automation',
    'Potential integrations with investment platforms',
  ],
  vsGiants: 'Competes by focusing on turnkey index fund infrastructure vs full brokerage stacks.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Index is fintech infrastructure, not AI-native.',
  aiDesignChallenges: [
    'Trust and compliance UX for finance workflows',
    'Complex onboarding and approvals',
    'Transparent reporting and auditability',
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
    'Make it easy for platforms to launch compliant index fund products.',
  beliefs: [
    'Fintech platforms need simpler fund infrastructure',
    'Compliance workflows should be automated',
    'Transparency builds trust in investment products',
  ],
  designPhilosophy: 'Clear, trustworthy workflows for high-stakes finance actions.',
  greenFlags: [
    'Growing fintech infrastructure demand',
    'Seed funding for early product build',
  ],
  redFlags: [
    'Regulatory and compliance complexity',
    'Long enterprise sales cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Fund setup workflows',
        'Compliance approvals and audits',
        'Regulatory reporting automation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Compliance status dashboards',
        'Fund performance reporting',
        'Audit and risk monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Fund configuration UI',
        'Reporting and investor views',
        'Onboarding and documentation flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Fintech product teams launching investment products',
    secondary: 'Operations and compliance teams',
  },
  userProblems: [
    'Launching index funds requires complex compliance steps',
    'Fintech teams need turnkey infrastructure',
    'Reporting and audit workflows are burdensome',
    'Time-to-launch is slow in regulated finance',
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
      'Complex fintech workflow design',
      'Opportunity to simplify regulated processes',
    ],
    whyNot: [
      'Compliance-heavy domain',
      'Long sales cycles',
    ],
    nextActions: [
      'Track product adoption and partnerships',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Source', url: 'https://index.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/index' }
  ],
};
