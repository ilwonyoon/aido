import { Company } from '../types';

export const artie: Company = {
  id: 'artie',
  name: 'Artie',
  description:
    'Real-time data replication platform that syncs operational data across systems without lag.',
  website: 'https://www.artie.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/KYk67MVkJsivsyQm4HOiPX29KIlw0PlkBkFIIXBU_2LQbgC6DaQXRJIix2DrWgrGDC1OXc4_WsOcHF33iSPlcQ.png',

    // OG Image
    ogImage: '/og-images/artie-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['infrastructure', 'creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$12M',
      date: '2026-01',
      leadInvestors: ['Standard Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $12M led by Standard Capital (Jan 2026)',
      'Focus on real-time data replication for operational systems',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: real-time data sync is still a major enterprise pain point.',
    tailwinds: [
      'Demand for low-latency data pipelines',
      'Growth in event-driven architectures and streaming data',
      'Increasing complexity of data stacks in SaaS',
    ],
    headwinds: [
      'Competition from incumbents and open-source tooling',
      'Enterprise trust requirements for data consistency',
      'Long sales cycles in data infrastructure',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Artie becomes default for real-time data replication.',
  },

  // Competition
  competitors: [
    {
      name: 'Fivetran',
      description: 'ETL platform for moving data into warehouses.',
      whyTheyWin: 'Large enterprise footprint and mature integrations.',
    },
    {
      name: 'Airbyte',
      description: 'Open-source data integration platform.',
      whyTheyWin: 'Community adoption and extensibility.',
    },
    {
      name: 'Confluent (Kafka)',
      description: 'Streaming data platform for real-time pipelines.',
      whyTheyWin: 'Deep enterprise usage and ecosystem scale.',
    },
  ],
  marketPosition: 'Real-time data replication for operational systems and analytics.',
  moat: [
    'Low-latency replication focused on operational use cases',
    'Simplified integration across complex data stacks',
    'Developer-first tooling for data reliability',
  ],
  vsGiants: 'Focuses on realtime replication vs batch-heavy data integration platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Artie is infrastructure that enables AI and real-time systems to access fresh data.',
  aiDesignChallenges: [
    'Trust and correctness for realtime replication',
    'Visibility into latency, lag, and sync status',
    'Clear configuration for data source and target systems',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jacqueline Cheong',
      role: 'Co-founder & CEO',
      background: 'Co-founded Artie and leads the real-time data replication platform.',
    },
    {
      name: 'Robin Tang',
      role: 'Co-founder & CTO',
      background: 'Co-founded Artie and leads technical development.',
    },
  ],
  whyBuilding:
    'Enable teams to sync operational data in real time so systems stay consistent and up to date.',
  beliefs: [
    'Data should be realtime, not delayed by batch pipelines',
    'Operational systems need trustworthy, low-latency sync',
    'Developer-first tooling accelerates adoption',
  ],
  designPhilosophy: 'Make complex data infrastructure understandable and easy to operate.',
  greenFlags: [
    'Clear focus on painful data infrastructure problems',
    'New Series A round to scale the platform',
  ],
  redFlags: [
    'Competitive space with strong incumbents',
    'Enterprise adoption may be slow',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Replication rules and conflict resolution flows',
        'Observability and incident workflows for data drift',
        'Permissions and access control for sensitive data',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Lag and reliability dashboards',
        'Alerting thresholds and monitoring UX',
        'Change impact validation tooling',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Connector setup and onboarding flows',
        'Replication status UI and health summaries',
        'Developer docs and configuration UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Data engineers and platform teams',
    secondary: 'Engineering teams needing realtime operational data',
  },
  userProblems: [
    'Batch data pipelines are too slow for operational use',
    'Maintaining reliable replication across systems is complex',
    'Data freshness issues cause inconsistent customer experiences',
    'Monitoring data lag and errors is fragmented',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      url: 'https://www.artie.com/careers/product-designer',
      type: 'full-time',
      aboutRole:
        'Own end-to-end product design for Artie, from discovery to UI, in a high-ownership, hands-on team.',
      responsibilities: [
        'Own product design projects from research and ideation to delivery',
        'Collaborate with engineering and product to shape solutions',
        'Create wireframes, high-fidelity UI, and interactive prototypes',
      ],
      requirements: [
        'Proven experience designing complex products for technical users',
        'Ability to simplify complex workflows into clear interfaces',
        'Strong visual design and prototyping skills',
      ],
      preferred: [
        'Experience with data infrastructure or developer tools',
        'Comfort working in a fast-moving early-stage environment',
      ],
      compensation: '$150K-$250K + equity',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'In-person, high-ownership team with fast-paced execution (per careers page).',
      url: 'https://www.artie.com/careers/product-designer',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Clear design ownership in early-stage infrastructure company',
      'High-impact problems around realtime data systems',
    ],
    whyNot: [
      'Early-stage risks and unclear product-market fit',
      'Competitive and technical domain',
    ],
    nextActions: [
      'Track product adoption and case studies',
      'Monitor design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'Artie website', url: 'https://www.artie.com/' },
    { title: 'Artie Series A announcement', url: 'https://www.artie.com/blogs/artie-series-a-real-time-data-streaming-platform' },
    { title: 'Artie Series A (FinSMEs)', url: 'https://www.finsmes.com/2026/01/artie-raises-12m-in-series-a-funding.html' },
    { title: 'Artie Product Designer role', url: 'https://www.artie.com/careers/product-designer' },
    { title: 'Artie on startups.gallery', url: 'https://startups.gallery/companies/artie' },
  ],
};
