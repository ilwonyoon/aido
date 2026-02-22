import { Company } from '../types';

export const unstructured: Company = {
  id: 'unstructured',
  name: 'Unstructured',
  description: 'Automated ETL platform for preparing data for LLMs.',
  website: 'https://unstructured.io',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  category: 'developer-tools' as const,

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Not disclosed',
  totalFunding: '$65M',
  fundingHistory: [
    { stage: 'Seed', amount: 'Undisclosed', date: '2022', leadInvestors: ['Madrona'] },
    { stage: 'Series A', amount: 'Undisclosed', date: '2023', leadInvestors: ['Bain Capital Ventures'] },
    { stage: 'Series B', amount: '$40M', date: '2024-03', leadInvestors: ['Menlo Ventures'] },
  ],
  revenue: '~$7.7M (2024)',
  growth: '6M+ open-source library downloads',
  runway: 'Strong — $65M total raised',
  customers: '45,000+ organizations, 1/3 of Fortune 500',

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
      name: 'Brian Raymond',
      role: 'Founder & CEO',
      background: 'Former CIA Intelligence Officer. White House NSC Director for Iraq. VP Global Public Sector at Primer.ai. Investment banking at Harris Williams.',
    },
  ],
  whyBuilding: 'Make unstructured data ready for LLM applications.',
  beliefs: [
    'Data preparation is the bottleneck for LLM adoption',
    'Automated ETL should reduce engineering burden',
    'Developer-first workflows drive adoption',
  ],
  designPhilosophy: 'Developer-first data preparation. Automated pipelines that reduce engineering burden for AI teams.',
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
    teamSize: '~85 employees total',
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
  lastUpdated: '2026-02-05T22:30:00',
  sources: [
    { title: 'Source', url: 'https://unstructured.io' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20240314620374/en/Unstructured-Raises-$40M-Series-B-From-Menlo-Ventures-Databricks-Ventures-IBM-Ventures-and-NVIDIA-to-Make-Enterprise-Data-LLM-ready' },
    { title: 'Source', url: 'https://www.madrona.com/featuredleader/unstructured/' }
  ],
};
