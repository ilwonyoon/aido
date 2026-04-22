import { Company } from '../types';

export const voygr: Company = {
  id: 'voygr',
  name: 'Voygr',
  description: 'Real-world place intelligence API for AI apps and agents — validates and enriches place data at scale by combining accurate location records with continuous web context (news, events, business status changes).',
  website: 'https://voygr.tech',
  headquarters: 'Unknown',
  remote: 'Unknown',

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC Seed)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (enterprise pilot stage)',
  growth: 'Processing tens of thousands of places per day for enterprise customers',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Enterprise: mapping/tech companies, transportation and logistics platforms, travel industry',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — pre-revenue, pilot stage',
    userGrowth: 'Processing tens of thousands of places/day for enterprise customers',
    signals: [
      'YC W26 backing — top-tier accelerator endorsement',
      'Enterprise customers already in production (leading mapping and tech companies)',
      '40% of Google searches and ~20% of LLM prompts involve local context (massive demand)',
      '25-30% of business records become stale annually — no one owns continuous refresh',
    ],
    tam: '$10B+ location data and place intelligence market; addressable sub-market = enterprise location data services',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Early innings: agents and AI apps need real-time place context; Google Maps API is not built for this use case',
    tailwinds: [
      'AI agent adoption driving demand for structured real-world data APIs',
      'LLMs failing on local queries (1-in-12 error rate) creates demand for specialized data',
      '25-30% annual business record churn makes real-time refresh a must-have',
      'Enterprise logistics and travel rely on accurate place data for core operations',
      'Google Maps API not designed for agent-scale, queryable, fresh context',
    ],
    headwinds: [
      'Google Maps Platform is deeply entrenched with developer trust and distribution',
      'Google Gemini + Maps grounding is a direct competitive threat from incumbent',
      'Foursquare, HERE, and TomTom have large existing place datasets and enterprise relationships',
      'Data freshness requires continuous crawling — high operational cost at scale',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Growing moat: each enterprise customer adds validation signal; fresh web context is hard to replicate at scale for incumbents.',
  },

  // Competition
  competitors: [
    {
      name: 'Google Maps Platform',
      description: 'Dominant maps and places API with global coverage.',
      whyTheyWin: 'Massive dataset, developer trust, distribution via Google Cloud, and Gemini grounding integration.',
    },
    {
      name: 'Foursquare',
      description: 'Place data and location intelligence for enterprise.',
      whyTheyWin: 'Established enterprise contracts, large place database, brand recognition in location data.',
    },
    {
      name: 'HERE Technologies',
      description: 'Maps and location data API for automotive, logistics, and enterprise.',
      whyTheyWin: 'Deep automotive and logistics industry partnerships; strong EU coverage.',
    },
  ],
  marketPosition: 'The only place intelligence API built for AI agents — continuous, queryable, web-enriched place profiles vs static map snapshots',
  moat: [
    'ML-first place validation trained by Yarik Markov (10+ years ML at Google/Meta/Apple)',
    'Fresh web context layer (news, events, status changes) beyond static coordinates',
    'Enterprise validation pipeline processes place-churn at scale (~25-30%/year)',
  ],
  vsGiants: 'Real-time web-enriched place intelligence vs static 10-15 attribute snapshots from Google Maps API',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: ML and search infrastructure are what make Voygr work. Without AI/ML (from Yarik\'s background at Google/Meta/Apple), you just have a static places database. The continuous web enrichment and validation are ML-powered.',
  aiDesignChallenges: [
    'API developer experience: how do engineers integrate and trust place data in agent workflows?',
    'Data freshness dashboard: how do enterprise customers monitor place record health?',
    'Confidence scoring UI: how to communicate data freshness and validation confidence?',
    'Debugging agent failures: when an agent gets bad place data, how do ops teams diagnose it?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Vlad Baskakov',
      role: 'CEO & Co-founder',
      background: 'Former Google Maps product strategist (15+ years). Led product strategy and go-to-market for Maps APIs with billions of users. Also worked at McKinsey and in ridesharing/travel. MBA from Harvard.',
    },
    {
      name: 'Yarik Markov',
      role: 'CTO & Co-founder',
      background: '20 years in technology. 10+ years leading ML infrastructure and search engineering teams at Google, Meta, and Apple.',
    },
  ],
  whyBuilding: 'Google Maps tells you a restaurant is "4.2 stars, open till 10" — but not that the chef left last month or that wait times doubled. LLMs get 1-in-12 local queries wrong because the underlying data is static. Voygr builds continuous place intelligence that agents can actually trust.',
  beliefs: [
    'Static maps APIs were built for humans navigating; AI agents need queryable, real-time place context',
    '25-30% of place records become stale annually — continuous refresh is not a feature, it\'s the product',
    'The team with the deepest domain match wins: Google Maps product + Apple/Google/Meta ML',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Exceptional domain match: CEO led Google Maps APIs, CTO led ML/search at Google/Meta/Apple',
    'Processing enterprise customers in production already (leading mapping and tech companies)',
    'Clear customer pain: AI agents fail on local queries at known rates',
    'YC W26 backing',
  ],
  redFlags: [
    'Google Gemini + Maps grounding is a direct incumbent threat',
    'API-only product in early stage — design investment is very low priority',
    'Data freshness at scale = high operational complexity and cost',
    'Tiny team going up against deeply entrenched Google Maps ecosystem',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 2-4, technical founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'API query behavior design (what fields to expose, how to paginate)',
        'Data confidence scoring logic and thresholds',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Place record freshness dashboard for enterprise monitoring',
        'Validation accuracy benchmarks and error reporting',
        'Data quality metrics and coverage reporting',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Developer console and API key management',
        'Usage analytics dashboard for enterprise customers',
        'Documentation and onboarding portal',
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
    fitScore: 4,
    whyJoin: [
      'Founding team has exceptional domain expertise (Google Maps + top ML)',
      'Interesting AI agent infrastructure layer with growing strategic importance',
      'Clear problem with quantified pain ($10B+ market)',
    ],
    whyNot: [
      'API/data product — minimal design surface at this stage',
      'Developer-tool company: design is low priority vs ML and data engineering',
      'Google as direct incumbent threat makes this high-risk',
      'Very early stage — unlikely to hire designers before Series A',
    ],
    nextActions: [
      'Monitor for Series A and enterprise customer announcements',
      'Watch for dashboard or enterprise console product launch',
    ],
  },

  // Meta
  lastUpdated: '2026-04-22T00:00:00',
  sources: [
    { title: 'Voygr YC Profile', url: 'https://www.ycombinator.com/companies/voygr' },
    { title: 'Launch HN: Voygr (YC W26)', url: 'https://news.ycombinator.com/item?id=47401042' },
    { title: 'Voygr Website', url: 'https://voygr.tech' },
  ],
};
