import { Company } from '../types';

export const blacksmith: Company = {
  id: 'blacksmith',
  name: 'Blacksmith',
  description:
    'High-performance CI cloud that makes GitHub Actions runs faster and cheaper with a purpose-built hardware-software stack.',
  website: 'https://www.blacksmith.sh/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/nH3iElkyKBNk54-i4xmPhTo91R-V1JAOO0N30TcyjQRs4nAycx-5SeshV5jnRRPDBegkqMdq_97HladCICxJ2g.png',

    // OG Image
    ogImage: '/og-images/blacksmith-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$10M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.5M',
      date: '2025-05',
      leadInvestors: ['GV', 'Y Combinator'],
    },
    {
      stage: 'Series A',
      amount: '$10M',
      date: '2025-09',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '600+ organizations including Ashby, Finch, Clerk, Veed, and Mintlify (per seed announcement).',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $10M (Sept 2025)',
      'Seed: $3.5M led by GV and Y Combinator (May 2025)',
      '12,000+ users reported on company snapshot',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: CI workload unbundling from hyperscalers is still emerging.',
    tailwinds: [
      'Teams demand faster CI and lower compute costs',
      'Developer productivity budgets favor CI optimization',
      'CI workloads growing with larger codebases',
    ],
    headwinds: [
      'Incumbents bundled with broader developer platforms',
      'Procurement friction for dev tooling replacements',
      'Reliability expectations for build infrastructure',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Blacksmith becomes the default CI compute layer for GitHub Actions.',
  },

  // Competition
  competitors: [
    {
      name: 'GitHub Actions',
      description: 'Built-in CI/CD for GitHub repositories.',
      whyTheyWin: 'Native distribution and default adoption.',
    },
    {
      name: 'CircleCI',
      description: 'CI/CD platform with performance optimizations.',
      whyTheyWin: 'Established enterprise relationships and integrations.',
    },
    {
      name: 'Buildkite',
      description: 'CI platform for enterprise pipelines.',
      whyTheyWin: 'Flexible pipelines and enterprise trust.',
    },
  ],
  marketPosition: 'Purpose-built CI cloud focused on speed and cost for GitHub Actions workflows.',
  moat: [
    'Hardware-software stack optimized for CI workloads',
    'Drop-in compatibility with GitHub Actions',
    'Performance and cost advantages on common pipelines',
  ],
  vsGiants: 'Focuses on specialized CI performance rather than general developer platforms.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Blacksmith is CI infrastructure; AI is not core to the product.',
  aiDesignChallenges: [
    'Performance visibility and build reliability UX',
    'Fast onboarding from existing GitHub Actions pipelines',
    'Trust and security controls for CI execution',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aditya Jayaprakash',
      role: 'Co-founder & CEO',
      background: 'Former engineer at Cockroach Labs and Faire; co-founded Blacksmith.',
    },
    {
      name: 'Aayush Shah',
      role: 'Co-founder',
      background: 'Former engineer at Cockroach Labs; co-founded Blacksmith.',
    },
    {
      name: 'Aditya Maru',
      role: 'Co-founder',
      background: 'Former engineer at Cockroach Labs; co-founded Blacksmith.',
    },
  ],
  whyBuilding:
    'Deliver a CI cloud purpose-built for speed, cost, and reliability instead of general-purpose cloud infrastructure.',
  beliefs: [
    'CI is a distinct workload that deserves specialized infrastructure',
    'Faster CI directly improves developer velocity',
    'Developer tools should be drop-in and easy to adopt',
  ],
  designPhilosophy: 'Make CI performance and reliability visible and actionable.',
  greenFlags: [
    'Early customer adoption across hundreds of organizations',
    'Strong seed backing from GV and Y Combinator',
  ],
  redFlags: [
    'Heavy competition with bundled CI tools',
    'Reliability expectations are extremely high',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '10 total employees (company snapshot)',
    notableMembers: [
      { name: 'Gracie X.', role: 'Product Designer' },
      { name: 'Andrew Willis', role: 'Product Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'CI workflow setup and migration flows',
        'Reliability and failure recovery UX',
        'Permissions and security controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Build performance analytics and regressions',
        'Cost and compute usage insights',
        'Pipeline optimization recommendations',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Dashboard and pipeline status UX',
        'Developer onboarding and docs surfaces',
        'Monitoring and alerting experiences',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Engineering teams running CI pipelines on GitHub Actions',
    secondary: 'DevOps and platform engineering teams',
  },
  userProblems: [
    'CI runs are slow and block developer flow',
    'CI costs grow rapidly at scale',
    'Pipeline failures lack clear root-cause visibility',
    'Teams want drop-in performance improvements without rewriting workflows',
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
    fitScore: 7,
    whyJoin: [
      'Clear product value tied to developer productivity',
      'Strong early adoption and CI performance advantage',
    ],
    whyNot: [
      'Competitive space with incumbent CI platforms',
      'Infrastructure reliability expectations are intense',
    ],
    nextActions: [
      'Monitor new product launches and customer case studies',
      'Track design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Source', url: 'https://www.blacksmith.sh/company' },
    { title: 'Source', url: 'https://www.blacksmith.sh/blog/blacksmith-seed-announcement' },
    { title: 'Source', url: 'https://startups.gallery/companies/blacksmith' }
  ],
};
