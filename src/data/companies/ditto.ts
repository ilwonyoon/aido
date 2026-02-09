import { Company } from '../types';

export const ditto: Company = {
  id: 'ditto',
  name: 'Ditto',
  description:
    'Edge sync platform that provides resilient, offline-first data synchronization for apps and devices.',
  website: 'https://www.ditto.live/',
    screenshot: '/screenshots/ditto-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/ditto-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$1.5M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Enterprises building apps for offline and edge environments.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Remote team with San Francisco headquarters',
      'Focus on edge sync and offline-first data platforms',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: edge and offline-first data sync adoption is growing.',
    tailwinds: [
      'Edge computing and offline-first apps demand reliable sync',
      'Growth of IoT and field operations',
      'Need for resilient, low-latency data systems',
    ],
    headwinds: [
      'Complexity of distributed data consistency',
      'Competition from cloud-native databases',
      'Education and adoption challenges for new paradigms',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Ditto becomes the default edge sync layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Realm (MongoDB)',
      description: 'Mobile database with sync capabilities.',
      whyTheyWin: 'MongoDB ecosystem and adoption.',
    },
    {
      name: 'Couchbase',
      description: 'NoSQL database with offline sync features.',
      whyTheyWin: 'Enterprise adoption and performance.',
    },
    {
      name: 'Firebase',
      description: 'Realtime database and backend services.',
      whyTheyWin: 'Developer familiarity and ecosystem.',
    },
  ],
  marketPosition: 'Edge sync platform for offline-first and resilient data workflows.',
  moat: [
    'Edge-native sync architecture',
    'Developer tooling for offline-first apps',
    'Resilience across unreliable networks',
  ],
  vsGiants: 'Focuses on offline-first sync vs general cloud databases.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Ditto is primarily data infrastructure, not AI core.',
  aiDesignChallenges: [
    'Trust and transparency in sync status',
    'Developer UX for debugging sync issues',
    'Operational visibility into edge deployments',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Adam Fish',
      role: 'Co-founder & CEO',
      background: 'Former VP of Product at Realm Inc (acquired by MongoDB); previously co-founded Roobiq, a mobile sales platform.',
    },
    {
      name: 'Max Alexander',
      role: 'Co-founder & CPO',
      background: 'Co-founded Ditto in 2018 and serves as Chief Product Officer.',
    },
  ],
  whyBuilding:
    'Enable apps to sync data reliably even with poor connectivity and edge environments.',
  beliefs: [
    'Offline-first should be a default for critical apps',
    'Edge data needs reliable, resilient synchronization',
    'Developers need better tooling for distributed data',
  ],
  designPhilosophy: 'Make distributed data behavior visible and understandable.',
  greenFlags: [
    'Strong demand for edge and offline workflows',
    'Clear technical differentiation in sync architecture',
  ],
  redFlags: [
    'Complex adoption for new data paradigms',
    'Competition from established databases',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Sync conflict handling and resolution flows',
        'Consistency and reliability controls',
        'Permissions and data governance',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Sync health dashboards and alerts',
        'Latency and consistency metrics',
        'Incident debugging workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console and onboarding UI',
        'Monitoring and analytics surfaces',
        'Documentation and examples UX',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building offline-first and edge apps',
    secondary: 'Platform teams managing distributed data systems',
  },
  userProblems: [
    'Offline apps need reliable sync across devices',
    'Distributed data consistency is hard to manage',
    'Debugging sync failures is time-consuming',
    'Edge deployments require better observability',
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
      'Strong technical product with clear infrastructure value',
      'Complex reliability and observability UX challenges',
    ],
    whyNot: [
      'Infrastructure domain with long sales cycles',
      'Competitive database market',
    ],
    nextActions: [
      'Track product adoption and customer case studies',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Source', url: 'https://www.ditto.live/' },
    { title: 'Source', url: 'https://startups.gallery/companies/ditto' }
  ],
};
