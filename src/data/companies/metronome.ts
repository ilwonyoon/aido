import { Company } from '../types';

export const metronome: Company = {
  id: 'metronome',
  name: 'Metronome',
  description:
    'Usage-based billing platform for modern software companies.',
  website: 'https://metronome.com/',
    screenshot: '/screenshots/metronome-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/metronome-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$50M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$50M',
      date: '2024-08',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'SaaS companies with usage-based pricing models.',

  // Growth & Potential
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C funding for usage-based billing',
      'Remote team with San Francisco base',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Usage-based billing expands with modern pricing adoption.',
    tailwinds: [
      'Growth in usage-based pricing models',
      'SaaS companies need flexible billing tooling',
      'Demand for real-time usage tracking',
    ],
    headwinds: [
      'Complex integrations with data systems',
      'Competition from billing platforms',
      'High reliability expectations',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Metronome becomes the default usage-based billing layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Stripe Billing',
      description: 'Billing platform with usage-based features.',
      whyTheyWin: 'Payments distribution and product breadth.',
    },
    {
      name: 'Chargebee',
      description: 'Subscription billing and revenue ops platform.',
      whyTheyWin: 'Enterprise adoption and integrations.',
    },
    {
      name: 'Zuora',
      description: 'Enterprise billing and revenue recognition platform.',
      whyTheyWin: 'Enterprise depth and compliance tooling.',
    },
  ],
  marketPosition: 'Usage-based billing infrastructure for modern SaaS.',
  moat: [
    'Usage-based pricing specialization',
    'Real-time billing and usage tracking',
    'Developer-friendly integrations',
  ],
  vsGiants: 'Competes by focusing on usage-based billing depth vs general billing suites.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Metronome is billing infrastructure, not AI-native.',
  aiDesignChallenges: [
    'Complex pricing and billing workflows',
    'Data integrations and reconciliation',
    'Trustworthy financial reporting',
  ],

  // Founders & Vision
  founders: [
    { name: 'Scott Woody', role: 'Co-Founder & CEO', background: 'Former engineer at Dropbox. Previously an exited founder.' },
    { name: 'Kevin Liu', role: 'Co-Founder & Chairman', background: 'Former CEO of Metronome, exited founder. Previously at Dropbox.' },
    { name: 'Ledion Bitincka', role: 'Co-Founder', background: 'Co-founded Metronome in 2019.' },
  ],
  whyBuilding:
    'Give SaaS companies flexible billing infrastructure for usage-based pricing.',
  beliefs: [
    'Modern pricing requires real-time billing',
    'Billing infrastructure should be developer-first',
    'Accuracy and transparency build customer trust',
  ],
  designPhilosophy: 'Clear billing workflows with real-time visibility.',
  greenFlags: [
    'Strong pricing model tailwinds',
    'Series C scale',
  ],
  redFlags: [
    'Integration complexity',
    'Competitive billing market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Usage metering workflows',
        'Pricing configuration logic',
        'Billing approvals and controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Usage analytics dashboards',
        'Revenue and billing reporting',
        'Invoice accuracy monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Billing configuration UI',
        'Customer usage views',
        'Integration and onboarding flows',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'SaaS finance and engineering teams',
    secondary: 'Revenue operations teams',
  },
  userProblems: [
    'Usage-based billing is complex to implement',
    'Pricing changes require careful configuration',
    'Teams need real-time usage visibility',
    'Billing accuracy is critical for trust',
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
      'Complex billing workflow design',
      'Infrastructure product UX challenges',
    ],
    whyNot: [
      'Competitive billing market',
      'High reliability expectations',
    ],
    nextActions: [
      'Track product updates and partnerships',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Source', url: 'https://metronome.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/metronome' }
  ],
};
