import { Company } from '../types';

export const firecrawl: Company = {
  id: 'firecrawl',
  name: 'Firecrawl',
  description:
    'Web data and crawling platform designed to help teams extract and structure web content at scale.',
  website: 'https://www.firecrawl.dev/',
    screenshot: '/screenshots/firecrawl-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/firecrawl-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['infrastructure', 'creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$14.5M',
  fundingHistory: [
    { stage: 'Series A', amount: '$14.5M', date: '2025-08' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and data teams building web data pipelines.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Hiring for engineering and ops roles',
      'Positioned as a developer-first crawling platform',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Web data tooling grows as AI and analytics demand more structured data.',
    tailwinds: [
      'Growing demand for web data ingestion',
      'AI apps need structured web content',
      'Automation in data pipelines',
    ],
    headwinds: [
      'Regulatory and compliance constraints on scraping',
      'Competition from data infrastructure vendors',
      'Reliability expectations at scale',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Firecrawl delivers reliable large-scale crawling.',
  },

  // Competition
  competitors: [
    {
      name: 'Common Crawl',
      description: 'Open web crawl dataset provider.',
      whyTheyWin: 'Scale and established dataset.',
    },
    {
      name: 'Apify',
      description: 'Web scraping and automation platform.',
      whyTheyWin: 'Developer ecosystem and tooling depth.',
    },
    {
      name: 'Bright Data',
      description: 'Enterprise web data collection platform.',
      whyTheyWin: 'Enterprise scale and infrastructure.',
    },
  ],
  marketPosition: 'Developer-first web data crawling and extraction platform.',
  moat: [
    'Developer tooling for scalable crawling',
    'Structured output for AI and analytics use cases',
    'API-driven workflows',
  ],
  vsGiants: 'Competes by focusing on developer UX vs enterprise web data vendors.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Firecrawl supports AI workflows by enabling structured web data access.',
  aiDesignChallenges: [
    'Reliable data extraction workflows',
    'Clear API and developer onboarding',
    'Monitoring and observability for crawls',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Make web data extraction fast and reliable for developers and AI teams.',
  beliefs: [
    'Web data should be easy to access programmatically',
    'Structured data accelerates AI development',
    'Developer UX matters for infra adoption',
  ],
  designPhilosophy: 'Developer-first workflows with transparency and reliability.',
  greenFlags: [
    'Clear developer pain point',
    'Growing AI data demand',
  ],
  redFlags: [
    'Compliance and scraping constraints',
    'Competitive data tooling space',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Crawl configuration and orchestration',
        'Rate limits and retry logic',
        'Access controls and permissions',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Crawl success metrics',
        'Data quality validation',
        'Cost and usage analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboard UX',
        'API setup and onboarding',
        'Monitoring and logs UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building data pipelines',
    secondary: 'AI teams needing web data ingestion',
  },
  userProblems: [
    'Web data extraction is fragile and hard to scale',
    'Teams need structured data for AI pipelines',
    'Monitoring crawls is time-consuming',
    'Compliance constraints add complexity',
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
      'Developer infrastructure UX challenges',
      'AI data pipeline focus',
    ],
    whyNot: [
      'Compliance risk in web data',
      'Competitive infrastructure market',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Firecrawl website', url: 'https://www.firecrawl.site/' },
    { title: 'Firecrawl careers', url: 'https://www.firecrawl.dev/careers' },
    { title: 'Firecrawl YC job page', url: 'https://www.ycombinator.com/jobs/78XV5jQ8' },
  ],
};
