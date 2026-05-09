import { Company } from '../types';

export const lgnd: Company = {
  id: 'lgnd',
  name: 'LGND',
  description:
    'AI-native security and compliance platform focused on continuous monitoring and assurance.',
  website: 'https://www.lgnd.com/',
    screenshot: '/screenshots/lgnd-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/lgnd-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'legal'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$9M',
  fundingHistory: [
    { stage: 'Seed', amount: '$9M', date: '2025-07' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Security and compliance teams needing continuous assurance.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Building AI-native security and compliance workflows',
      'San Francisco-based team',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Continuous compliance adoption grows as security requirements rise.',
    tailwinds: [
      'Increasing compliance requirements',
      'Rising security scrutiny',
      'Demand for continuous monitoring',
    ],
    headwinds: [
      'Highly competitive security market',
      'Enterprise procurement cycles',
      'Trust and data sensitivity',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if LGND builds trusted continuous assurance workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Vanta',
      description: 'Security compliance automation platform.',
      whyTheyWin: 'Scale and enterprise adoption.',
    },
    {
      name: 'Drata',
      description: 'Compliance automation platform.',
      whyTheyWin: 'Fast onboarding and automation.',
    },
    {
      name: 'Secureframe',
      description: 'Compliance and risk management platform.',
      whyTheyWin: 'Modern compliance UX.',
    },
  ],
  marketPosition: 'AI-native continuous security and compliance assurance platform.',
  moat: [
    'Continuous monitoring workflows',
    'Automation of compliance evidence collection',
    'AI-assisted security insights',
  ],
  vsGiants: 'Competes by focusing on continuous assurance vs point-in-time audits.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: LGND builds AI-assisted security and compliance workflows.',
  aiDesignChallenges: [
    'Trust in automated security insights',
    'Auditability and evidence tracking',
    'Permissions and access controls',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Nat Manning',
      role: 'Co-founder',
      background: 'Former Chief Data Officer at USAID; co-founded Kettle, an AI-native reinsurance company.',
    },
    {
      name: 'Dan Hammer',
      role: 'Co-founder',
      background: 'Built mission-critical infrastructure in geospatial analytics throughout his career, including work at NASA.',
    },
    {
      name: 'Bruno Sanchez-Andrade Nuno',
      role: 'Co-founder',
      background: 'Former Chief Scientist at Mapbox; expert in Earth observation and geospatial data.',
    },
  ],
  whyBuilding:
    'Make compliance continuous and automated instead of periodic and manual.',
  beliefs: [
    'Security compliance should be continuous',
    'Automation reduces audit burden',
    'Trust comes from transparency and evidence',
  ],
  designPhilosophy: 'Clear compliance workflows with continuous monitoring.',
  greenFlags: [
    'Strong security tailwinds',
    'Clear compliance automation demand',
  ],
  redFlags: [
    'Competitive security tooling market',
    'High trust requirements',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Continuous monitoring workflows',
        'Evidence collection automation',
        'Risk and compliance controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Compliance dashboards',
        'Risk scoring analytics',
        'Audit readiness reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Security team consoles',
        'Evidence management UI',
        'Reporting and export workflows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Security and compliance teams',
    secondary: 'Risk and audit teams',
  },
  userProblems: [
    'Compliance evidence is time-consuming to collect',
    'Audits are periodic and stressful',
    'Security teams need continuous monitoring',
    'Trust and transparency are required for compliance',
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
      'Security and compliance UX challenges',
      'Automation of audit workflows',
    ],
    whyNot: [
      'Competitive security market',
      'Enterprise sales cycles',
    ],
    nextActions: [
      'Track product updates',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:40:00',
  sources: [
    { title: 'Source', url: 'https://www.lgnd.com/' }
  ],
};
