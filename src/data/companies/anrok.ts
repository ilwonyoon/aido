import { Company } from '../types';

export const anrok: Company = {
  id: 'anrok',
  name: 'Anrok',
  description:
    'Automated tax compliance platform for SaaS companies to manage sales tax and indirect taxes.',
  website: 'https://www.anrok.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/LXRyAoEKdj_bYWvwYSk0mGJrxblPdDTUWeo2QB41f5SHQ8Q58gV2jhufdkrv_HS718lWjQYfY4_yIjIvx83eBA.png',

    // OG Image
    ogImage: '/og-images/anrok-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['infrastructure', 'sales-marketing'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$55M',
  fundingHistory: [
    { stage: 'Series C', amount: '$55M', date: '2025-10' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'SaaS and digital services companies managing tax compliance.',

  // Growth & Potential
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C stage tax compliance platform',
      'Remote team serving SaaS finance and tax ops',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Tax compliance for SaaS will keep expanding as digital sales grow.',
    tailwinds: [
      'Regulatory complexity for digital taxes',
      'SaaS finance teams need automation',
      'Global expansion increases compliance needs',
    ],
    headwinds: [
      'Compliance accuracy requirements are strict',
      'Enterprise procurement cycles',
      'Competition from established tax platforms',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Anrok becomes the default SaaS tax compliance platform.',
  },

  // Competition
  competitors: [
    {
      name: 'Avalara',
      description: 'Tax compliance automation platform.',
      whyTheyWin: 'Scale and enterprise adoption.',
    },
    {
      name: 'Stripe Tax',
      description: 'Tax automation for online businesses.',
      whyTheyWin: 'Payments integration and distribution.',
    },
    {
      name: 'Vertex',
      description: 'Enterprise tax technology solutions.',
      whyTheyWin: 'Longstanding enterprise relationships.',
    },
  ],
  marketPosition: 'SaaS-focused tax compliance automation platform.',
  moat: [
    'Specialization in SaaS and digital tax workflows',
    'Automation of compliance and filings',
    'Integration with billing and finance systems',
  ],
  vsGiants: 'Competes with large tax platforms by specializing in SaaS workflows.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Anrok is a tax compliance SaaS platform, not AI-native.',
  aiDesignChallenges: [
    'High-trust compliance UX and audits',
    'Complex workflow design for tax teams',
    'Clear reporting and filing experiences',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Michelle Valentine',
      role: 'Co-founder & CEO',
      background: 'Former Product at Airtable and VC at Index Ventures; founded Anrok in 2020 to automate SaaS tax compliance.',
    },
    {
      name: 'Kannan Goundan',
      role: 'Co-founder & CTO',
      background: 'Previously at Dropbox; co-founded Anrok to build automated tax compliance infrastructure for SaaS companies.',
    },
  ],
  whyBuilding:
    'Automate SaaS tax compliance to reduce manual work and risk for finance teams.',
  beliefs: [
    'SaaS companies need specialized tax tooling',
    'Compliance workflows should be automated',
    'Accuracy and auditability are essential',
  ],
  designPhilosophy: 'Clarity, trust, and audit-ready workflows.',
  greenFlags: [
    'Clear regulatory pain point',
    'Series C scale with SaaS focus',
  ],
  redFlags: [
    'Strict compliance requirements',
    'Competition from established tax vendors',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Tax compliance workflows and approvals',
        'Rules configuration and exemptions',
        'Integration mapping for billing systems',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Accuracy and audit reporting',
        'Risk monitoring dashboards',
        'Compliance status tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Finance team console UX',
        'Reporting and filings UI',
        'Onboarding and configuration flows',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'SaaS finance and tax operations teams',
    secondary: 'Controllers and CFO organizations',
  },
  userProblems: [
    'Tax compliance is complex and error-prone',
    'SaaS companies face changing tax regulations',
    'Manual filings take too much time',
    'Finance teams need audit-ready reporting',
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
      'High-trust B2B workflow design',
      'Strong regulatory problem with product impact',
    ],
    whyNot: [
      'Compliance-heavy domain',
      'Enterprise sales cycles',
    ],
    nextActions: [
      'Track product expansion and integrations',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'Anrok website', url: 'https://www.anrok.com/' },
    { title: 'Anrok careers', url: 'https://www.anrok.com/careers' },
    { title: 'Anrok on startups.gallery', url: 'https://startups.gallery/companies/anrok' },
  ],
};
