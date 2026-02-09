import { Company } from '../types';

export const exa: Company = {
  id: 'exa',
  name: 'Exa',
  description:
    'AI search engine and API that provides web data for AI agents, research, and applications.',
  website: 'https://exa.ai',
    screenshot: '/screenshots/exa-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/exa-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'search-retrieval'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$700M (Sept 2025)',
  totalFunding: '$85M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$85M',
      date: '2025-09',
      valuation: '$700M',
      leadInvestors: ['Benchmark'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Databricks, Notion (reported)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B: $85M led by Benchmark (Sept 2025)',
      'Rebranded from Metaphor in 2024',
      'Expanding adoption of AI search and web data APIs',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI-native search and web data for agents is still emerging.',
    tailwinds: [
      'Rising demand for high-quality web data in AI apps',
      'Agentic workflows require reliable retrieval and search',
      'Developer adoption of AI infrastructure APIs growing',
    ],
    headwinds: [
      'Competition from large search and AI infrastructure providers',
      'Data licensing and web access constraints',
      'Differentiation risk as retrieval becomes commoditized',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if Exa becomes the default retrieval layer for AI agents.',
  },

  // Competition
  competitors: [
    {
      name: 'Perplexity',
      description: 'AI search and answer engine with strong consumer adoption.',
      whyTheyWin: 'Brand awareness and consumer distribution.',
    },
    {
      name: 'Google (Search/Vertex AI)',
      description: 'Search and AI tooling integrated across Google products.',
      whyTheyWin: 'Scale, distribution, and infrastructure.',
    },
    {
      name: 'Tavily',
      description: 'Search API for AI agents and applications.',
      whyTheyWin: 'Developer-first API adoption and integrations.',
    },
  ],
  marketPosition: 'AI-native web search and retrieval API for agents and research tools.',
  moat: [
    'Search tuned for AI retrieval use cases',
    'API-first developer adoption',
    'Focus on reliable web data and relevance',
  ],
  vsGiants: 'Focuses on AI retrieval APIs rather than consumer search products.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Exa provides AI-native retrieval infrastructure that powers agent workflows.',
  aiDesignChallenges: [
    'Trust and relevance design for AI retrieval results',
    'Evaluation frameworks for search quality',
    'Developer UX for API onboarding and tuning',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'William Bryk',
      role: 'Co-founder & CEO',
      background: 'Co-founded Exa (formerly Metaphor).',
    },
    {
      name: 'Jeffrey Wang',
      role: 'Co-founder',
      background: 'Co-founded Exa (formerly Metaphor).',
    },
  ],
  whyBuilding:
    'Build the best retrieval layer for AI systems by making the web searchable for agents.',
  beliefs: [
    'Retrieval quality is core to AI accuracy',
    'APIs should be developer-first and simple',
    'Search must be optimized for AI use cases, not just humans',
  ],
  designPhilosophy: 'Developer-centric tooling with transparent relevance and evaluation.',
  greenFlags: [
    'Series B led by Benchmark',
    'Growing adoption for AI retrieval APIs',
  ],
  redFlags: [
    'Strong competition from large search platforms',
    'Potential commoditization of retrieval APIs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Relevance tuning workflows and guardrails',
        'Query interpretation and routing',
        'Result ranking and filtering logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Search quality evaluation dashboards',
        'Benchmarking relevance and recall',
        'Human feedback loops for tuning',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'API onboarding and docs UX',
        'Developer console for query testing',
        'Usage analytics and billing UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building AI agents and research tools',
    secondary: 'AI product teams needing web data retrieval',
  },
  userProblems: [
    'AI applications need reliable web data retrieval',
    'Search APIs are not optimized for agent use cases',
    'Relevance tuning is hard without good evaluation tools',
    'Developers need fast onboarding and clear documentation',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Designer',
      location: 'San Francisco, CA (In-person)',
      url: 'https://jobs.ashbyhq.com/exa/10444567-e515-4504-9d7d-54a273625b35',
      type: 'full-time',
      aboutRole: 'Design product interfaces, developer-facing tools, and brand experience for Exa.',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Fully in-person team in San Francisco (exceptions possible).',
      url: 'https://exa.ai/careers',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Core retrieval infrastructure with high design leverage',
      'Developer tooling and evaluation UX challenges',
    ],
    whyNot: [
      'Crowded AI search market with big incumbents',
      'Unclear design team size and leadership',
    ],
    nextActions: [
      'Monitor developer adoption and API usage growth',
      'Track design hiring and product updates',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T15:25:00',
  sources: [
    { title: 'Source', url: 'https://exa.ai/' },
    { title: 'Source', url: 'https://www.finsmes.com/2025/09/exa-raises-85m-in-series-b-funding.html' },
    { title: 'Source', url: 'https://exa.ai/blog/series-b' },
    { title: 'Source', url: 'https://exa.ai/careers' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/exa/10444567-e515-4504-9d7d-54a273625b35' },
    { title: 'Source', url: 'https://startups.gallery/companies/exa' }
  ],
};
