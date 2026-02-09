import { Company } from '../types';

export const layerFinancial: Company = {
  id: 'layer-financial',
  name: 'Layer Financial',
  description:
    'Embedded accounting platform that lets SMB-focused software platforms offer accounting and bookkeeping products.',
  website: 'https://www.layerfi.com/',
    screenshot: '/screenshots/layer-financial-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/layer-financial-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['smb'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$6.6M',
  fundingHistory: [
    { stage: 'Seed', amount: '$6.6M', date: '2025-07' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'SMB software platforms embedding accounting workflows.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed-stage embedded accounting platform',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: embedded accounting in SMB platforms is still emerging.',
    tailwinds: [
      'Vertical SaaS platforms expanding financial tooling',
      'SMBs seeking simplified accounting workflows',
      'Embedded finance adoption across SaaS',
    ],
    headwinds: [
      'Regulatory and compliance complexity in accounting',
      'Integration burden across platforms',
      'Entrenched incumbents in accounting software',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Layer becomes the default embedded accounting layer.',
  },

  // Competition
  competitors: [
    {
      name: 'QuickBooks',
      description: 'SMB accounting platform and ecosystem.',
      whyTheyWin: 'Brand trust and large installed base.',
    },
    {
      name: 'Xero',
      description: 'Cloud accounting platform for SMBs.',
      whyTheyWin: 'Global SMB adoption and partner ecosystem.',
    },
    {
      name: 'Pilot',
      description: 'Outsourced bookkeeping and accounting services.',
      whyTheyWin: 'Managed service model and SMB focus.',
    },
  ],
  marketPosition: 'Embedded accounting infrastructure for SMB platforms.',
  moat: [
    'Embedded accounting workflows tailored to SMB platforms',
    'Potential deep integrations with platform partners',
    'Design-led UX for complex accounting tasks',
  ],
  vsGiants: 'Focuses on embedded accounting infrastructure vs direct SMB accounting suites.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Layer is accounting infrastructure; AI is not core to the product.',
  aiDesignChallenges: [
    'Trust and clarity for financial workflows',
    'Designing embedded UI that fits partner products',
    'Complex accounting flows made approachable for SMBs',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Justin Meretab',
      role: 'Co-founder & CEO',
      background: 'Former product leader on Square\'s Banking team; started Layer in 2023.',
    },
    {
      name: 'Daniel O\'Neel',
      role: 'Co-founder',
      background: 'Former engineering leader at Wealthfront.',
    },
  ],
  whyBuilding:
    'Enable SMB platforms to offer accounting and bookkeeping without building from scratch.',
  beliefs: [
    'Accounting tools should be embedded where SMBs already work',
    'Great UX can simplify complex finance workflows',
    "Platforms want to own more of their customers' financial stack",
  ],
  designPhilosophy: 'Make embedded accounting feel native and trustworthy.',
  greenFlags: [
    'Clear embedded finance tailwind',
    'Founding designer role indicates design priority',
  ],
  redFlags: [
    'Regulatory and compliance complexity',
    'Integration-heavy product surface area',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Accounting workflows and embedded UI logic',
        'Permissions and approval flows',
        'Exception handling for financial edge cases',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Financial reconciliation and accuracy checks',
        'Audit trails and compliance views',
        'Workflow success metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Embedded accounting UI and onboarding',
        'SMB-facing bookkeeping dashboards',
        'Partner-facing configuration tools',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'SMB platforms embedding accounting',
    secondary: 'SMBs using embedded bookkeeping tools',
  },
  userProblems: [
    'Accounting workflows are complex for SMBs',
    'Platforms want embedded finance without heavy build cost',
    'Embedded UIs must match partner product design',
    'Compliance and audit requirements slow product delivery',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA (On-site)',
      url: 'https://jobs.ashbyhq.com/layerfi/caabdf27-0b83-4ca8-b8c9-56c0a4d53a62',
      type: 'full-time',
      aboutRole:
        "Own design for embedded accounting products and evolve Layer's brand and design system.",
      responsibilities: [
        'Lead end-to-end product design from discovery to launch',
        'Design embedded UI patterns for SMB platforms',
        'Evolve the design system in partnership with engineering',
        'Partner with customers on onboarding and launch UX',
      ],
      requirements: [
        'Excellent visual design craft',
        'Systems thinking and design system experience',
        'Deep Figma fluency',
        'Strong communication and collaboration skills',
      ],
      preferred: [
        '5+ years of product design experience',
        'Experience as an early designer at a startup',
        'Background in SaaS or fintech for SMBs',
      ],
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Founding designer scope with end-to-end ownership',
      'Embedded finance workflow complexity',
    ],
    whyNot: [
      'Regulatory and accounting complexity',
      'High expectations for embedded UX consistency',
    ],
    nextActions: [
      'Track product partnerships and customer launches',
      'Monitor design hiring and org growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:30:00',
  sources: [
    { title: 'Source', url: 'https://www.layerfi.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/layer-financial' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/layerfi/caabdf27-0b83-4ca8-b8c9-56c0a4d53a62' }
  ],
};
