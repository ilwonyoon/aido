import { Company } from '../types';

export const captain: Company = {
  id: 'captain',
  name: 'Captain',
  description: 'API-first unified data layer for enterprise RAG pipelines — indexes files from S3, SharePoint, and Google Drive with 20%+ higher accuracy than standard RAG pipelines on the Open-RAG Benchmark.',
  website: 'https://www.runcaptain.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  aiTypes: ['ai-infrastructure', 'search-retrieval'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (YC Seed)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K',
      date: '2025-09',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Early; $295/month per 1,000 pages; SOC 2 Type II certified; 20%+ accuracy advantage on Open-RAG Benchmark',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Enterprise engineering teams building AI agents that need accurate file retrieval at scale',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — early stage',
    userGrowth: 'Early customers; benchmark-validated accuracy advantage',
    signals: [
      'YC W26 backing with Garry Tan as personal coaching pick (rare CEO-level involvement)',
      'Top of Open-RAG Benchmark with 20%+ accuracy over standard RAG',
      'SOC 2 Type II certified — unusually mature for a 2-person seed startup',
      'Multimodal: indexes text, images, and video in a single pipeline',
      'Enterprise-grade: role-based access control, PII detection',
    ],
    tam: '$4.5B+ enterprise search and knowledge management market; rapidly expanding with AI agent adoption',
    marketShare: '<0.1% of TAM',
    ceiling: 'Every AI agent needs reliable file retrieval — infrastructure play at the foundation of the agentic stack',
    tailwinds: [
      'AI agent deployments require accurate, scalable knowledge retrieval at enterprise scale',
      'Companies abandoning DIY RAG pipelines due to accuracy and maintenance costs',
      'Multimodal enterprise content (video, images, PDFs) growing rapidly',
      'SOC 2 and compliance requirements pushing enterprises toward managed RAG services',
      'Open-RAG Benchmark creating verifiable standard for retrieval accuracy',
    ],
    headwinds: [
      'Cloud hyperscalers (GCP Vertex AI Search, AWS Kendra + Bedrock) have built-in RAG with enterprise distribution',
      'Open-source frameworks (LlamaIndex, LangChain) are free alternatives',
      'Enterprise trust barrier: uploading sensitive documents to a 2-person startup',
      'Heavy competition in RAG infrastructure from both startups and platform giants',
      'Commoditization risk as foundation model providers add retrieval natively',
    ],
    moatType: 'technology',
    moatStrength: 'Open-RAG Benchmark leadership; embedding normalization technique across modalities; SOC 2 Type II at seed stage.',
  },

  // Competition
  competitors: [
    {
      name: 'Vertex AI Search (Google)',
      description: 'GCP-hosted enterprise search with RAG capabilities.',
      whyTheyWin: 'Google distribution, deep GCP ecosystem integration, enterprise trust.',
    },
    {
      name: 'AWS Kendra + Bedrock',
      description: 'AWS-native enterprise search and RAG.',
      whyTheyWin: 'AWS distribution, enterprise contracts, broad data source support.',
    },
    {
      name: 'Glean',
      description: 'Enterprise AI search across company knowledge.',
      whyTheyWin: 'Strong enterprise traction, broad integrations, work graph understanding.',
    },
    {
      name: 'Onyx (formerly Danswer)',
      description: 'Open-source enterprise AI search platform.',
      whyTheyWin: 'Free, self-hostable, large developer community, no data egress concerns.',
    },
  ],
  marketPosition: 'API-first managed RAG with benchmark-verified accuracy advantage over DIY pipelines',
  moat: [
    'Embedding normalization across modalities — semantic grouping vs type-based clustering',
    'Open-RAG Benchmark leadership with 20%+ accuracy advantage',
    'SOC 2 Type II at seed stage signals enterprise-ready security posture',
  ],
  vsGiants: 'Benchmark-verifiable accuracy vs generic retrieval from hyperscaler RAG products',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI Infrastructure: Captain IS the AI retrieval infrastructure — the product does not exist without AI. The entire value proposition is AI-powered embedding, normalization, and hybrid search.',
  aiDesignChallenges: [
    'Developer onboarding: making API configuration intuitive for non-ML engineers',
    'Accuracy visualization: communicating benchmark results and retrieval confidence to non-technical stakeholders',
    'Access control UI: designing role-based permissions for multi-org enterprise deployments',
    'Monitoring dashboard: surfacing retrieval quality metrics, latency, and indexing status',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Lewis Polansky',
      role: 'Co-founder & CEO',
      background: 'Self-taught full-stack engineer; applied to YC 3 times with 4 pivots before Captain; previously worked on hallucination solutions for code generation.',
    },
    {
      name: 'Edgar Babajanyan',
      role: 'Co-founder & CTO',
      background: 'Published AI/NLP researcher at Purdue NLP lab; research directly informed Captain\'s chunking techniques; built production OCR engines and RAG systems at Reality Interactive.',
    },
  ],
  whyBuilding: 'Four years building RAG pipelines for companies taught Lewis and Edgar that standard RAG is too inaccurate and too hard to maintain. Captain removes the plumbing so teams can focus on what they\'re building, not on retrieval infrastructure.',
  beliefs: [
    'RAG accuracy is a solved problem if you do embedding normalization correctly',
    'Enterprise AI agents are only as good as their retrieval layer',
    'Managed, SOC 2-certified RAG infrastructure will replace DIY pipelines at scale',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Garry Tan personal coaching pick — rare CEO-level YC conviction signal',
    'Open-RAG Benchmark: 20%+ accuracy advantage with verifiable, public proof',
    'SOC 2 Type II at seed stage — unusually enterprise-ready',
    'Edgar\'s research background directly informs the core technical differentiation',
  ],
  redFlags: [
    '2-person team facing AWS, GCP, and well-funded startups in the same space',
    'Enterprise trust barrier: sensitive documents uploaded to early-stage startup',
    'Open-source alternatives (Onyx, LlamaIndex) are free and self-hostable',
    'Pricing ($295/month for 1,000 pages) may be difficult to justify vs DIY builds',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0 — 2-person technical founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'API configuration UX: chunk size, embedding model, re-ranking settings',
        'Access control logic: role-based permission hierarchy design',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Retrieval accuracy dashboard: visualizing benchmark scores and per-query confidence',
        'Indexing status monitoring: progress, failures, and error states for large corpora',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Developer portal: API key management, usage analytics, billing',
        'Data source connection setup: S3, SharePoint, Google Drive integrations',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Garry Tan personal coaching pick signals unusually high YC conviction',
      'Open-RAG Benchmark leadership is a rare, verifiable technical advantage',
      'Foundation infrastructure play — RAG is table stakes for every AI agent',
    ],
    whyNot: [
      'Infrastructure product: minimal design surface at this stage',
      '2-person technical team unlikely to hire designer before Series A',
      'Facing AWS, GCP, and Glean with $500K seed — massive distribution disadvantage',
      'Enterprise trust barrier for sensitive data may slow growth significantly',
    ],
    nextActions: [
      'Monitor for Series A raise and enterprise customer announcements',
      'Watch benchmark performance vs Vertex AI Search and Kendra',
    ],
  },

  // Meta
  lastUpdated: '2026-04-23T00:00:00',
  sources: [
    { title: 'Captain YC Profile', url: 'https://www.ycombinator.com/companies/captain' },
    { title: 'Launch HN: Captain (YC W26)', url: 'https://news.ycombinator.com/item?id=47366011' },
    { title: 'Captain Website', url: 'https://www.runcaptain.com' },
    { title: 'Tracxn: Run Captain Profile', url: 'https://tracxn.com/d/companies/runcaptain/__HrglCwEGTGCBdFrs4INQG-YAPKm8MaRuKcIiA5xjF5M' },
  ],
};
