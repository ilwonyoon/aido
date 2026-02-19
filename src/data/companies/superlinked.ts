import { Company } from '../types';

export const superlinked: Company = {
  id: 'superlinked',
  name: 'Superlinked',
  description: 'Python framework and cloud infrastructure for building high-performance vector search and recommendation systems from complex enterprise data.',
  website: 'https://superlinked.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/superlinked-og.webp',
  aiTypes: ['ai-infrastructure', 'search-retrieval'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  totalFunding: '$9.5M+',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: 'Undisclosed',
      date: '2022-01',
      leadInvestors: ['MMC Ventures', 'Episode 1 Ventures'],
    },
    {
      stage: 'Seed',
      amount: '$9.5M',
      date: '2024-03',
      leadInvestors: ['Index Ventures', 'Theory Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Enterprise clients in e-commerce, media, and manufacturing',
  competitors: [
    {
      name: 'Marqo',
      description: 'End-to-end vector search platform with native embedding model fine-tuning',
      whyTheyWin: 'Full-stack approach combining embeddings + vector DB in one platform',
    },
    {
      name: 'Jina AI',
      description: 'Multimodal embeddings and neural retrieval infrastructure',
      whyTheyWin: 'Strong open-source community and mature multimodal embedding models',
    },
    {
      name: 'Chroma',
      description: 'Open-source embedding database for AI applications',
      whyTheyWin: 'Developer-friendly lightweight setup, strong OSS adoption',
    },
  ],
  marketPosition: 'Emerging player in vector compute layer between raw data and vector databases',
  moat: [
    'Omni-modal embedding framework: combines structured + unstructured data into unified vectors',
    'Open-source community (2K+ GitHub stars) driving developer adoption',
    'Deep integrations with LangChain, LlamaIndex, and major vector DBs',
  ],
  vsGiants: 'Operates in compute layer below vector DB providers (Pinecone, Weaviate). Not competing with foundation model companies but enabling their enterprise deployment.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: The entire product is an AI infrastructure framework for embedding generation and vector search. AI is the core differentiator enabling enterprise-scale semantic search and recommendations.',
  aiDesignChallenges: [
    'Developer experience design for complex embedding pipelines',
    'Cloud dashboard UX for monitoring vector compute at scale',
    'Documentation and onboarding flows for technical framework adoption',
  ],
  founders: [
    {
      name: 'Daniel Svonava',
      role: 'CEO & Co-founder',
      background: 'Ex-Google/YouTube ML engineer. Built core ML infrastructure for YouTube Ads.',
    },
    {
      name: 'Ben Gutkovich',
      role: 'COO & Co-founder',
      background: 'Ex-McKinsey London digital strategy consultant. Led Fortune 500 digital transformation.',
    },
    {
      name: 'Jan Baeriswyl',
      role: 'Co-founder',
      background: 'Technical co-founder with ML infrastructure background.',
    },
  ],
  whyBuilding: 'Saw that enterprises struggled to convert complex semi-structured data into useful vector embeddings. Built the compute layer that sits between raw data and vector databases.',
  beliefs: [
    'Enterprise AI needs a dedicated compute layer for embeddings, not just storage',
    'Omni-modal data (text + structured + images) produces better search than text-only',
    'Open-source frameworks win developer trust before cloud monetization',
  ],
  greenFlags: [
    'Index Ventures + Theory Ventures (Tomasz Tunguz) backing at Seed',
    'Ex-Google/YouTube ML founder with production-scale experience',
    'Open-source first GTM with VectorHub developer community',
  ],
  redFlags: [
    'Very early stage — Seed funding, limited revenue visibility',
    'Crowded vector/embedding space with well-funded competitors',
    'No visible design team or design investment',
  ],
  designTeam: {
    teamSize: 'None visible (developer-tool focused, ~39 employees total)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Embedding pipeline configuration flows',
        'Data source integration workflows',
        'Query parameter tuning interfaces',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Search relevance quality metrics dashboards',
        'Embedding performance benchmarking UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Cloud management dashboard',
        'Developer documentation and onboarding',
        'VectorHub community platform',
      ],
    },
  },
  productStage: '0→1',
  targetAudiences: {
    primary: 'AI/ML engineers building enterprise search and recommendation systems',
    secondary: 'Data teams at e-commerce and media companies needing semantic search',
  },
  userProblems: [
    'Converting complex multi-modal enterprise data into useful vector embeddings is fragmented and manual',
    'Existing embedding tools handle text well but struggle with structured + unstructured data combinations',
    'No standard compute layer between raw data and vector databases for enterprise-scale pipelines',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Remote-first team across SF, London, Budapest, and Tel Aviv. Small team with deep ML infrastructure expertise (160+ years collective experience).',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$9.5M Seed from Index Ventures + Theory Ventures (Mar 2024)',
      'Open-source framework with 2K+ GitHub stars',
      'Samsung as strategic investor',
    ],
    tam: '$30B+ (vector database and AI infrastructure market)',
    ceiling: 'Early innings: Enterprise vector compute is nascent category',
    tailwinds: [
      'RAG adoption driving demand for better embedding infrastructure',
      'Enterprise AI deployments requiring production-grade vector pipelines',
    ],
    headwinds: [
      'Vector DB providers expanding into embedding compute',
      'Foundation model companies bundling retrieval capabilities',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: Omni-modal framework differentiation, but category is still forming',
  },
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Level B AI-Core infrastructure company with interesting technical challenges',
      'Backed by top-tier investors (Index Ventures, Theory Ventures)',
    ],
    whyNot: [
      'No design team or design roles — pure developer-tool play',
      'Very early stage with limited design opportunity',
      'Product is a Python framework, minimal UI surface area',
    ],
    nextActions: [
      'Monitor for Series A and potential cloud product UI needs',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Index Ventures — Superlinked Seed Announcement', url: 'https://www.indexventures.com/perspectives/superlinked-raises-95m-in-seed-funding-to-enable-enterprise-scale-ai-applications/' },
    { title: 'Crunchbase — Superlinked', url: 'https://www.crunchbase.com/organization/superlinked' },
    { title: 'Superlinked Careers — no Product Design roles found', url: 'https://jobs.superlinked.com/jobs' },
    { title: 'GitHub — superlinked/superlinked', url: 'https://github.com/superlinked/superlinked' },
    { title: 'Superlinked About', url: 'https://superlinked.com/about' },
  ],
};
