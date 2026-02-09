import { Company } from '../types';

export const alloy: Company = {
  id: 'alloy',
  name: 'Alloy',
  description:
    'Identity and fraud prevention platform for financial services and fintech companies.',
  website: 'https://www.alloy.com/',
  headquarters: 'New York, NY',
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/KGCrV6ucX-0DCYe8GbhT7aG9y2_IDu68_W7ic7fkeBBKiSWY9-RmixWVpaOGwU6dvPIGJqv-Oii9V5T0EqdRtA.png',

    // OG Image
    ogImage: '/og-images/alloy-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$150M+',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$52M',
      date: '2023-08',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Banks, fintechs, and financial institutions.',

  // Growth & Potential
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C funding to scale fraud and identity platform',
      'Adoption across banks and fintechs',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Identity verification demand grows with digital finance adoption.',
    tailwinds: [
      'Rising fraud and identity risks',
      'Digital onboarding growth',
      'Regulatory pressure on compliance',
    ],
    headwinds: [
      'Competitive fintech risk market',
      'Regulatory compliance requirements',
      'Long enterprise sales cycles',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate if Alloy builds strong identity and fraud data coverage.',
  },

  // Competition
  competitors: [
    {
      name: 'Persona',
      description: 'Identity verification platform for digital onboarding.',
      whyTheyWin: 'Developer-first UX and integrations.',
    },
    {
      name: 'Sardine',
      description: 'Fraud prevention and risk platform.',
      whyTheyWin: 'Strong fraud models and real-time detection.',
    },
    {
      name: 'Sift',
      description: 'Fraud detection platform for digital businesses.',
      whyTheyWin: 'Scale and enterprise adoption.',
    },
  ],
  marketPosition: 'Identity and fraud prevention platform for financial services.',
  moat: [
    'Unified onboarding and fraud workflow',
    'Data network across financial institutions',
    'Compliance-ready platform integrations',
  ],
  vsGiants: 'Competes on financial-service specialization vs general fraud tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Alloy uses AI-driven fraud detection but the core is identity infrastructure.',
  aiDesignChallenges: [
    'Trust and transparency in risk scoring',
    'Complex onboarding and compliance workflows',
    'Operational visibility for fraud teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tommy Nicholas',
      role: 'Co-founder & CEO',
      background: 'Co-founded Alloy in 2015 to build an identity and fraud prevention platform for financial services.',
    },
    {
      name: 'Laura Spiekerman',
      role: 'Co-founder & President',
      background: 'Co-founded Alloy to help financial institutions onboard customers securely while reducing fraud risk.',
    },
    {
      name: 'Charles Hearn',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder responsible for building Alloy\'s identity decisioning and fraud prevention platform.',
    },
  ],
  whyBuilding:
    'Help financial institutions onboard customers securely while reducing fraud risk.',
  beliefs: [
    'Identity verification must be accurate and fast',
    'Fraud prevention requires continuous learning',
    'Compliance workflows should be automated',
  ],
  designPhilosophy: 'High-trust workflows with clear risk signals.',
  greenFlags: [
    'Strong fintech demand',
    'Series C funding for scaling',
  ],
  redFlags: [
    'Regulatory complexity',
    'Enterprise sales cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Identity verification flows',
        'Risk scoring and approvals',
        'Compliance rules configuration',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Fraud detection analytics',
        'Operational performance dashboards',
        'Model monitoring and accuracy reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Fraud ops console',
        'Onboarding configuration',
        'Reporting and audit views',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Fintech and banking risk teams',
    secondary: 'Compliance and onboarding teams',
  },
  userProblems: [
    'Fraud risk is rising in digital finance',
    'Onboarding flows must balance speed and compliance',
    'Risk teams need clear visibility into decisions',
    'Compliance requirements are complex and evolving',
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
      'High-trust fintech workflow design',
      'Fraud and compliance UX challenges',
    ],
    whyNot: [
      'Regulatory-heavy domain',
      'Long enterprise cycles',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:40:00',
  sources: [
    { title: 'Source', url: 'https://www.alloy.com/' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20230809005141/en/Alloy-Raises-52M-Series-C-to-Advance-Identity-and-Fraud-Prevention' }
  ],
};
