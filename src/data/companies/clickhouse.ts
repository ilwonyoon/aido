import { Company } from '../types';

export const clickhouse: Company = {
  id: 'clickhouse',
  name: 'ClickHouse',
  description:
    'Cloud data warehouse and real-time analytics database for fast, scalable analytics workloads.',
  website: 'https://clickhouse.com/',
    screenshot: '/screenshots/clickhouse-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/clickhouse-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['other'],

  // Business
  stage: 'Series D',
  valuation: 'Unknown',
  totalFunding: '$1.05B+ (disclosed rounds)',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$250M',
      date: '2021-10',
      valuation: '$2B',
      leadInvestors: ['Coatue', 'Altimeter', 'Lightspeed Venture Partners', 'Redpoint Ventures'],
    },
    {
      stage: 'Series C',
      amount: '$350M',
      date: '2025-05',
      leadInvestors: [
        'Khosla Ventures',
        'BOND',
        'IVP',
        'Battery Ventures',
        'Bessemer Venture Partners',
        'Index Ventures',
        'Lightspeed Venture Partners',
        'GIC',
        'Benchmark',
        'Coatue',
        'FirstMark',
        'Nebius',
      ],
    },
    {
      stage: 'Series D',
      amount: '$400M',
      date: '2026-01',
      leadInvestors: [
        'Dragoneer Investment Group',
        'Bessemer Venture Partners',
        'GIC',
        'Index Ventures',
        'Khosla Ventures',
        'Lightspeed Venture Partners',
        'T. Rowe Price Associates',
        'WCM Investment Management',
      ],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers:
    '3,000+ ClickHouse Cloud customers; examples include Meta, Cursor, Sony, Tesla, Capital One, Lovable, Decagon, Polymarket, Airwallex, Memorial Sloan Kettering, Lyft, Instacart, Anthropic, Sierra, Poolside, Weights & Biases, and LangChain.',

  // Growth & Potential
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series D funding to scale ClickHouse Cloud',
      '3,000+ customers on ClickHouse Cloud',
      'ARR growing 250%+ year over year',
      'Series C noted 2,000+ customers and 300%+ growth',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Real-time analytics infrastructure demand keeps expanding.',
    tailwinds: [
      'Explosion of real-time data workloads',
      'Modernization of analytics stacks',
      'Cloud data warehouse adoption',
    ],
    headwinds: [
      'Intense competition from cloud data platforms',
      'High expectations for performance and reliability',
      'Rising cloud infrastructure costs',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if ClickHouse remains a top-performance analytics database.',
  },

  // Competition
  competitors: [
    {
      name: 'Snowflake',
      description: 'Cloud data platform for analytics.',
      whyTheyWin: 'Enterprise adoption and ecosystem.',
    },
    {
      name: 'BigQuery',
      description: 'Google cloud data warehouse.',
      whyTheyWin: 'Cloud integration and scale.',
    },
    {
      name: 'Databricks',
      description: 'Data lakehouse platform for analytics and AI.',
      whyTheyWin: 'Unified data + AI platform depth.',
    },
  ],
  marketPosition: 'High-performance real-time analytics database and cloud data warehouse.',
  moat: [
    'Performance for real-time analytics workloads',
    'Open-source adoption and ecosystem growth',
    'ClickHouse Cloud managed offering',
  ],
  vsGiants: 'Competes with cloud data warehouses by emphasizing performance and efficiency.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: ClickHouse is data infrastructure, not an AI-native product.',
  aiDesignChallenges: [
    'Developer UX for complex data workloads',
    'Observability and performance tuning',
    'Clear onboarding and migration flows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aaron Katz',
      role: 'Co-Founder & CEO',
      background: 'Led the business team behind ClickHouse; now CEO.',
    },
    {
      name: 'Yury Izrailevsky',
      role: 'Co-Founder',
      background: 'Led cloud engineering; co-founded ClickHouse Inc.',
    },
    {
      name: 'Alexey Milovidov',
      role: 'Co-Founder',
      background: 'Created ClickHouse and serves as technical co-founder.',
    },
  ],
  whyBuilding:
    'Deliver the fastest analytics database for modern data teams and real-time workloads.',
  beliefs: [
    'Performance at scale is essential for analytics',
    'Open source drives adoption and trust',
    'Cloud-managed services should reduce operational burden',
  ],
  designPhilosophy: 'Developer-first performance and reliability with clear operational visibility.',
  greenFlags: [
    'Strong funding for cloud growth',
    'Widely adopted open-source database',
  ],
  redFlags: [
    'Competitive data infrastructure market',
    'High performance expectations',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Query performance workflow design',
        'Access control and permissions',
        'Reliability and failover UX',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Performance and cost analytics',
        'Usage and billing dashboards',
        'Reliability and incident reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console and onboarding',
        'Query exploration UI',
        'Docs and learning UX',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Data engineering and analytics teams',
    secondary: 'Developers building real-time data products',
  },
  userProblems: [
    'Real-time analytics performance is hard to achieve',
    'Operational overhead for data warehouses is high',
    'Scaling analytics stacks is complex',
    'Costs can grow quickly without visibility',
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
      'High-scale data infrastructure UX challenges',
      'Open-source product with cloud growth',
    ],
    whyNot: [
      'Competitive data platform market',
      'High reliability and performance expectations',
    ],
    nextActions: [
      'Track product and cloud adoption',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:55:00',
  sources: [
    { title: 'Source', url: 'https://clickhouse.com/company/our-story' },
    { title: 'Source', url: 'https://clickhouse.com/company/careers' },
    { title: 'Source', url: 'https://clickhouse.com/blog/clickhouse-inc-raises-250-million-at-2-billion-valuation-to-support-open-source-community-and-new-cloud-service' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20250529254399/en/ClickHouse-Raises-%24350-Million-Series-C-to-Power-Analytics-for-the-AI-Era' },
    { title: 'Source', url: 'https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres' }
  ],
};
