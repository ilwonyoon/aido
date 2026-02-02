import { Company } from '../types';

export const unstructured: Company = {
  id: 'unstructured',
  name: 'Unstructured',
  description: 'Automated ETL platform for preparing data for LLMs.',
  website: 'https://unstructured.io',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.sanity.io/images/d35hevy9/production/f19dac06a6b8d3e66fe818be470470e4cb954635-1200x628.jpg?rect=2,0,1196,628&amp;w=1200&amp;h=630&amp;max-h=3840&amp;max-w=3840&amp;q=85&amp;auto=format',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2024-11',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'LlamaIndex',
      description: 'Data framework for LLM applications.',
      whyTheyWin: 'Developer adoption and ecosystem tooling.',
    },
    {
      name: 'LangChain',
      description: 'Framework for building LLM applications.',
      whyTheyWin: 'Broad community and integrations.',
    },
    {
      name: 'Pinecone',
      description: 'Vector database and retrieval infrastructure.',
      whyTheyWin: 'Managed infrastructure and enterprise adoption.',
    },
  ],
  marketPosition: 'ETL and data preparation platform optimized for LLM workflows.',
  moat: [
    'Automated ingestion and parsing for unstructured data',
    'Developer-first tooling for LLM pipelines',
    'Focus on data preparation at scale',
  ],
  vsGiants: 'Competes on specialized LLM data prep rather than general ETL suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure for LLM data pipelines is the core product.',
  aiDesignChallenges: [
    'Designing reliable ingestion and parsing workflows',
    'Balancing configurability with speed to integrate',
    'Communicating data quality and extraction results',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Make unstructured data ready for LLM applications.',
  beliefs: [
    'Data preparation is the bottleneck for LLM adoption',
    'Automated ETL should reduce engineering burden',
    'Developer-first workflows drive adoption',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series B funding signal',
    'Clear LLM data infrastructure focus',
  ],
  redFlags: [
    'Highly competitive LLM tooling ecosystem',
    'Rapidly evolving developer frameworks',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Data ingestion and transformation logic',
        'Parsing configuration and validation',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Data quality metrics and monitoring',
        'Feedback loops for extraction accuracy',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and pipeline status UI',
        'Integration and onboarding flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'AI and data engineering teams',
    secondary: 'Developers building LLM apps',
  },
  userProblems: [
    'Unstructured data is hard to parse for LLMs',
    'ETL pipelines are brittle and slow to maintain',
    'Quality control for extracted data is difficult',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Core AI infrastructure workflows',
      'Opportunity to design developer pipelines UX',
    ],
    whyNot: [
      'Crowded developer tooling market',
      'Platform differentiation is challenging',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T16:20:00',
  sources: [
    { title: 'Unstructured', url: 'https://unstructured.io' },
    { title: 'Unstructured Series B (Business Wire)', url: 'https://www.businesswire.com/news/home/20241105005078/en/Unstructured-Raises-40M-Series-B-to-Build-the-Data-Layer-for-AI' },
    { title: 'Unstructured on startups.gallery', url: 'https://startups.gallery/companies/unstructured' },
  ],
};
