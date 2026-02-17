import { Company } from '../types';

export const hex: Company = {
  id: 'hex',
  name: 'Hex',
  description: 'AI-powered data workspace unifying SQL, Python, R, and no-code tools for collaborative analytics, data science, and interactive data apps.',
  website: 'https://hex.tech',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/hex-og.webp',

  // Tags
  aiTypes: ['data-analysis', 'code-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Series C',
  valuation: '$500M–$1B',
  totalFunding: '$172M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Undisclosed',
      date: '2020-07',
      leadInvestors: ['BoxGroup'],
    },
    {
      stage: 'Series A',
      amount: '$16M',
      date: '2021-10',
      leadInvestors: ['Redpoint Ventures', 'Amplify Partners'],
    },
    {
      stage: 'Series B',
      amount: '$52M',
      date: '2022-03',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series C',
      amount: '$70M',
      date: '2025-05',
      leadInvestors: ['Avra'],
    },
  ],
  revenue: '~$20M ARR',
  growth: 'Unknown',
  customers: 'Reddit, StubHub, HubSpot, Cisco, Figma, Anthropic, Rivian, NBA',

  // Competition
  competitors: [
    {
      name: 'Deepnote',
      description: 'Collaborative AI-powered data notebook with Jupyter compatibility',
      whyTheyWin: 'Simpler UX for smaller teams, strong Jupyter ecosystem integration',
    },
    {
      name: 'Mode Analytics',
      description: 'BI and collaborative analytics platform for data teams',
      whyTheyWin: 'Established enterprise customer base and SQL-centric workflow',
    },
    {
      name: 'Databricks Notebooks',
      description: 'Unified analytics platform with notebook interface',
      whyTheyWin: 'Bundled with Databricks lakehouse, massive enterprise footprint',
    },
  ],
  marketPosition: 'Leading collaborative data workspace bridging data science and business analytics',
  moat: [
    'Multi-language workspace (SQL + Python + R + no-code) in one surface',
    'Enterprise trust: Anthropic, Figma, Cisco as customers',
    'AI-native features (Magic AI) deeply integrated into data workflows',
    'Network effects from shared notebooks and data apps',
  ],
  vsGiants: 'Databricks/Snowflake offer compute but lack collaborative UX; Hex wins on analyst experience and shareable data apps',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI (Magic AI) is core differentiator — auto-generates SQL/Python, explains results, and builds visualizations. But the product can function without AI as a notebook/analytics tool.',
  aiDesignChallenges: [
    'AI code generation trust: showing confidence levels for auto-generated SQL/Python',
    'Multi-modal output design: blending code, charts, and natural language in one surface',
    'Progressive disclosure for technical vs non-technical users in the same workspace',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Barry McCardel',
      role: 'CEO & Co-founder',
      background: 'Ex-Palantir, Northwestern University. Built data products at Palantir before founding Hex.',
    },
    {
      name: 'Caitlin Colgrove',
      role: 'CTO & Co-founder',
      background: 'Ex-Palantir, Stanford. Head of Data Engineering at Remix (Via). Full-stack engineer and engineering manager.',
    },
    {
      name: 'Glen Takahashi',
      role: 'Chief Architect & Co-founder',
      background: 'Ex-Palantir. Worked with Barry and Caitlin on data analytics products.',
    },
  ],
  whyBuilding: 'Founders met at Palantir and saw that modern data tools were fragmented — notebooks for data scientists, BI tools for analysts. They wanted one collaborative workspace for all data work.',
  beliefs: [
    'Data work should be collaborative, not siloed by role',
    'AI should augment every step of the analytics workflow',
    'Beautiful, interactive data apps should be easy to build and share',
  ],
  greenFlags: [
    'Strong customer roster (Anthropic, Figma, Cisco, Reddit)',
    '$172M raised from top-tier investors (a16z, Sequoia, Redpoint)',
    'All three co-founders are ex-Palantir with deep data product experience',
    'Glassdoor: "exceptional place to be a designer" with high quality bar',
  ],
  redFlags: [
    'Glassdoor mentions CEO micro-managing and rapid firing concerns',
    'Competing against Databricks/Snowflake with far greater resources',
    'Revenue still modest (~$20M) relative to funding raised',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~5-8 (3 design roles open: Brand, Design Engineer, Web Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI code generation interaction patterns (Magic AI)',
        'Notebook cell execution flow and dependency graphs',
        'Data app builder logic and component behavior',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI output quality feedback loops for generated SQL/Python',
        'Data visualization accuracy and relevance scoring',
        'User trust signals for AI-generated insights',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Multi-pane workspace: code editor, charts, data tables, AI chat',
        'Interactive data app builder and publishing',
        'Collaborative editing with real-time multiplayer',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Data scientists and analytics engineers at mid-to-large companies',
    secondary: 'Business analysts who need self-serve data exploration without deep coding skills',
  },
  userProblems: [
    'Data notebooks (Jupyter) are powerful but not shareable or collaborative',
    'BI tools are shareable but lack coding flexibility for complex analysis',
    'Non-technical stakeholders cannot interact with data science outputs',
    'AI-generated code needs trust and transparency in analytics workflows',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles — no Product Designer roles found (Brand Designer, Design Engineer, Web Designer only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 3.8,
      content: '"Exceptional place to be a designer — high quality bar, designers are trusted, challenged, and asked to do some of the best work of their careers."',
      url: 'https://www.glassdoor.com/Reviews/Hex-Reviews-E8099329.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: '"One of the best meeting cultures I have experienced. Amazing transparency practices."',
      url: 'https://www.glassdoor.com/Reviews/Hex-Reviews-E8099329.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: '"Rapid, frequent firing instills job insecurity. CEO micro-managing concerns."',
      url: 'https://www.glassdoor.com/Reviews/Hex-Reviews-E8099329.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '~$20M ARR (Latka estimate)',
    signals: [
      '$70M Series C led by Avra (May 2025)',
      'Acquired Hashboard (BI platform) to expand analytics capabilities',
      'Customers include Anthropic, Figma, Cisco, Reddit, NBA',
    ],
    tam: '$30B+ (data analytics and BI market)',
    ceiling: 'Mid innings: replacing fragmented notebook/BI stacks with unified workspace',
    tailwinds: [
      'AI making data analysis accessible to non-technical users',
      'Modern data stack adoption driving demand for collaborative tools',
      'Enterprise data teams growing rapidly',
    ],
    headwinds: [
      'Databricks/Snowflake adding notebook and AI features natively',
      'Jupyter ecosystem deeply entrenched in data science workflows',
      'Commoditization risk from AI coding assistants',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Medium: shared notebooks and data apps create organizational lock-in',
  },

  // Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level B AI-native with interesting AI-data intersection design problems',
      'Strong customer roster signals product-market fit',
      'Glassdoor praises design culture and quality bar',
    ],
    whyNot: [
      'No Product Designer roles currently open',
      'Revenue modest relative to $172M raised',
      'Glassdoor concerns about leadership style',
    ],
    nextActions: [
      'Monitor hex.tech/careers for Product Designer openings',
      'Review Magic AI product for design quality assessment',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Hex Lands $70M Series C (BusinessWire)', url: 'https://www.businesswire.com/news/home/20250528505112/en/Hex-Lands-$70M-to-Transform-Data-Science-and-Analytics-With-AI' },
    { title: 'Hex Series C — Fortune exclusive', url: 'https://fortune.com/2025/05/28/exclusive-hex-raises-a-70-million-series-c-to-double-down-on-data-in-the-ai-era/' },
    { title: 'Hex $52M Series B (TechCrunch)', url: 'https://techcrunch.com/2022/03/22/hex-scores-52m-series-b-to-grow-data-science-collaboration-platform/' },
    { title: 'Hex Careers — no Product Design roles', url: 'https://hex.tech/careers/' },
    { title: 'Hex Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/Hex-Reviews-E8099329.htm' },
  ],
};
