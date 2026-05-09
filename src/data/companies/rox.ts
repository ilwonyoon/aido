import { Company } from '../types';

export const rox: Company = {
  id: 'rox',
  name: 'Rox',
  description:
    'Household wallet platform built to help families manage shared spending and payments.',
  website: 'https://rox.com/',
    screenshot: '/screenshots/rox-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/rox-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'fintech'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$50M',
  fundingHistory: [
    { stage: 'Series A', amount: '$50M', date: '2024-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Families and households managing shared finances.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed-stage household finance product',
      'San Francisco-based team',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Household finance tools can scale with strong user trust and retention.',
    tailwinds: [
      'Rising interest in shared finance tools',
      'Consumers seek transparency in household spending',
      'Mobile-first finance apps continue to grow',
    ],
    headwinds: [
      'Trust and security expectations in fintech',
      'Competitive consumer finance market',
      'Regulatory and compliance complexity',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Rox becomes the default household wallet.',
  },

  // Competition
  competitors: [
    {
      name: 'Splitwise',
      description: 'Shared expense tracking app.',
      whyTheyWin: 'Strong user base and brand recognition.',
    },
    {
      name: 'Zeta',
      description: 'Joint banking app for couples.',
      whyTheyWin: 'Joint account focus and banking integrations.',
    },
    {
      name: 'Apple Cash Family',
      description: 'Family payments and allowances within Apple ecosystem.',
      whyTheyWin: 'Ecosystem distribution and trust.',
    },
  ],
  marketPosition: 'Household wallet and shared spending platform for families.',
  moat: [
    'Shared household finance workflows',
    'Potential switching costs in linked financial accounts',
    'Family-focused budgeting and controls',
  ],
  vsGiants: 'Competes by focusing on household collaboration vs general-purpose finance apps.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Rox is a consumer finance platform, not AI-native.',
  aiDesignChallenges: [
    'Trust and security in shared finance tools',
    'Shared permissions and controls UX',
    'Onboarding for multiple household members',
  ],

  // Founders & Vision
  founders: [
    { name: 'Ishan Mukherjee', role: 'Co-Founder & CEO', background: 'Former Chief Growth Officer at New Relic, scaled self-serve business from $0-$100M ARR.' },
    { name: 'Avanika Narayan', role: 'Co-Founder', background: 'Co-founded Rox in 2024.' },
    { name: 'Diogo Ribeiro', role: 'Co-Founder', background: 'Co-founded Rox in 2024.' },
  ],
  whyBuilding:
    'Make it easy for households to manage shared spending and financial goals.',
  beliefs: [
    'Household finances should be transparent and collaborative',
    'Mobile-first finance tools can improve trust',
    'Clear controls are essential for shared accounts',
  ],
  designPhilosophy: 'Simple, trusted workflows for shared family finances.',
  greenFlags: [
    'Clear consumer finance problem',
    'Household collaboration focus',
  ],
  redFlags: [
    'High trust bar for consumer fintech',
    'Crowded personal finance market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Shared account permissions and controls',
        'Budgeting and spending rules',
        'Approvals for transactions',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Household spending analytics',
        'Budget progress tracking',
        'Security and fraud monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Household dashboards',
        'Shared budgeting UI',
        'Payment and transfer flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Families and households sharing finances',
    secondary: 'Couples managing joint expenses',
  },
  userProblems: [
    'Households struggle to track shared spending',
    'Permissions and controls are hard to set up',
    'Budget visibility is fragmented across accounts',
    'Trust and transparency are critical for shared finances',
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
      'Consumer fintech UX challenges',
      'Shared household workflow design',
    ],
    whyNot: [
      'Regulatory complexity',
      'Highly competitive finance market',
    ],
    nextActions: [
      'Track product launch updates',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Source', url: 'https://rox.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/rox' }
  ],
};
