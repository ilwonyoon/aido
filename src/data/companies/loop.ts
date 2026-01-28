import { Company } from '../types';

export const loop: Company = {
  id: 'loop',
  name: 'Loop',
  description:
    'Business banking platform focused on stable, reliable payments and treasury workflows for startups and finance teams.',
  website: 'https://loop.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$35M (Series B reported)',
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
      'Series B reported at $35M (startups.gallery)',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: modern treasury and payments stack is still evolving.',
    tailwinds: [
      'Startups need more reliable, programmable payments',
      'Finance teams adopting modern banking platforms',
      'Demand for cost control and cash visibility',
    ],
    headwinds: [
      'Highly regulated financial services market',
      'Switching costs and bank partner dependencies',
      'Intense competition in fintech',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Loop becomes embedded in finance workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Mercury',
      description: 'Startup banking platform with modern APIs and UX.',
      whyTheyWin: 'Strong brand and product experience in startup banking.',
    },
    {
      name: 'Brex',
      description: 'Corporate card and spend management platform.',
      whyTheyWin: 'Large customer base and broad finance stack.',
    },
    {
      name: 'Ramp',
      description: 'Spend management platform with automation.',
      whyTheyWin: 'Automation features and enterprise adoption.',
    },
  ],
  marketPosition: 'Modern business banking and payments platform focused on stability and reliability.',
  moat: [
    'Payments reliability and treasury workflow focus',
    'Embedded finance operations for startups',
    'Potential for high switching costs in payments setups',
  ],
  vsGiants: 'Focuses on modern startup banking vs traditional banks and legacy fintech.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Loop is a fintech platform where AI is not core to the product.',
  aiDesignChallenges: [
    'Trust and transparency in payments workflows',
    'Risk and compliance UX for finance teams',
    'Real-time visibility into cash and payments status',
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
    'Deliver stable, reliable payments and banking workflows for modern businesses.',
  beliefs: [
    'Payments infrastructure should be reliable and transparent',
    'Finance teams need modern, easy-to-use tools',
    'Operational stability builds trust in financial systems',
  ],
  designPhilosophy: 'Clarity and trust in financial operations.',
  greenFlags: [
    'Series B financing indicates growth',
    'Clear focus on payments stability',
  ],
  redFlags: [
    'Heavily regulated market',
    'Intense fintech competition',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Payment setup and approval flows',
        'Risk and compliance checks',
        'Operational safeguards and controls',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Payment success and failure analytics',
        'Operational reliability dashboards',
        'Audit trails and reconciliation views',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Finance dashboards and cash visibility',
        'Payment creation and management UI',
        'User onboarding and account setup',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Finance teams at startups and SMBs',
    secondary: 'Founders and operations leaders',
  },
  userProblems: [
    'Payments systems are fragile and unreliable',
    'Finance teams need clearer cash visibility',
    'Banking workflows are slow and manual',
    'Compliance processes add friction to payments',
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
      'Clear product focus on payments reliability',
      'Design leverage in financial workflows',
    ],
    whyNot: [
      'Highly regulated domain',
      'Competitive fintech landscape',
    ],
    nextActions: [
      'Track product updates and customer traction',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Loop website', url: 'https://loop.com/' },
    { title: 'Loop careers', url: 'https://loop.com/careers' },
    { title: 'Loop on startups.gallery', url: 'https://startups.gallery/companies/loop' },
  ],
};
