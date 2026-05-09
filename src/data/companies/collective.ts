import { Company } from '../types';

export const collective: Company = {
  id: 'collective',
  name: 'Collective',
  description:
    'Back-office platform that provides accounting, taxes, and financial services for self-employed professionals.',
  website: 'https://www.collective.com/',
    screenshot: '/screenshots/collective-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/collective-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['prosumer'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$50M (announced)',
  fundingHistory: [
    {
      stage: 'Unknown',
      amount: '$50M',
      date: '2023-07',
      leadInvestors: ['CapitalG'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Self-employed professionals and small business owners.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $50M to expand finance services for self-employed professionals',
      'AI-powered platform for back-office workflows',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Demand grows as more professionals go independent and need finance automation.',
    tailwinds: [
      'Growth of independent workforce',
      'Demand for simplified back-office workflows',
      'Automation in finance operations',
    ],
    headwinds: [
      'High trust and compliance requirements',
      'Competitive finance software landscape',
      'Complex regulatory requirements',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Collective becomes the default finance platform for independents.',
  },

  // Competition
  competitors: [
    {
      name: 'Bench',
      description: 'Bookkeeping service for small businesses.',
      whyTheyWin: 'Service model and established customer base.',
    },
    {
      name: 'Pilot',
      description: 'Finance and bookkeeping for startups.',
      whyTheyWin: 'Startup-focused offering and scale.',
    },
    {
      name: 'QuickBooks',
      description: 'Accounting software for SMBs.',
      whyTheyWin: 'Market dominance and ecosystem.',
    },
  ],
  marketPosition: 'All-in-one back-office platform for self-employed professionals.',
  moat: [
    'Vertical specialization for independent workers',
    'Bundled accounting and tax workflows',
    'Potential switching costs for finance management',
  ],
  vsGiants: 'Competes by focusing on self-employed workflows vs broad SMB accounting tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Collective uses AI to streamline finance workflows, but the core is finance services.',
  aiDesignChallenges: [
    'Trust and transparency in financial automation',
    'Clear workflows for taxes and compliance',
    'Onboarding and document collection UX',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hooman Radfar',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur; built and sold AddThis to Oracle (2016); founding partner at Expa with Uber co-founder Garrett Camp.',
    },
    {
      name: 'Ugur Kaner',
      role: 'Co-founder',
      background: 'Co-founded Collective to support self-employed professionals with automated back-office finance services.',
    },
    {
      name: 'Bugra Akcay',
      role: 'Co-founder',
      background: 'Co-founded Collective to build an AI-powered finance platform designed specifically for the self-employed.',
    },
  ],
  whyBuilding:
    'Make running a business easier for self-employed professionals with automated finance services.',
  beliefs: [
    'Independent work is growing rapidly',
    'Finance operations should be automated and trustworthy',
    'Simpler workflows improve compliance and confidence',
  ],
  designPhilosophy: 'Clear, trusted financial workflows for non-experts.',
  greenFlags: [
    'Strong market tailwinds for independent work',
    'Significant funding to scale services',
  ],
  redFlags: [
    'Regulatory and compliance complexity',
    'High trust expectations in finance',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '201-500 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Tax and compliance workflows',
        'Financial data ingestion and validation',
        'Approval and review flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Financial reporting dashboards',
        'Tax readiness and risk monitoring',
        'Accuracy and reconciliation metrics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Client dashboard UX',
        'Onboarding and document upload flows',
        'Support and communication tools',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Self-employed professionals and freelancers',
    secondary: 'Small business owners managing finances',
  },
  userProblems: [
    'Back-office finance tasks are time-consuming',
    'Taxes and compliance are confusing',
    'Financial workflows lack transparency',
    'Tools are fragmented across vendors',
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
      'Impact on independent workers',
    ],
    whyNot: [
      'Regulatory complexity',
      'Competitive finance software market',
    ],
    nextActions: [
      'Track product expansion',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Source', url: 'https://www.collective.com/careers' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20230711005255/en/Collective-Raises-%2450M-to-Become-the-First-AI-Powered-Finance-Platform-Designed-Specifically-for-the-Self-Employed' },
    { title: 'Source', url: 'https://www.linkedin.com/company/collectiveinc/' }
  ],
};
