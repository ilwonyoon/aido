import { Company } from '../types';

export const sitefire: Company = {
  id: 'sitefire',
  name: 'Sitefire',
  description: 'Marketing suite for the agentic web — helps brands improve AI visibility by monitoring and automating content that gets cited by ChatGPT, Gemini, and Google AI Mode.',
  website: 'https://sitefire.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  aiTypes: ['automation', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown (YC W26)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Unknown',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (early revenue — BMW, Xtrackers, DWS as clients)',
  growth: 'Early; one client saw AI bot requests grow from ~200/day to ~570/day within 10 days of AI-optimized articles; $249/month Lite tier',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Small to mid-sized brands losing traffic from Google AI Overviews; enterprise brands seeking AI discoverability',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — early stage',
    userGrowth: 'Early enterprise clients in Europe; BMW, Xtrackers, DWS named customers',
    signals: [
      'YC W26 backing',
      'Named enterprise clients: BMW, Xtrackers, DWS — unusually strong for seed stage',
      '185% increase in AI bot requests for one client within 10 days of optimization',
      'GEO (Generative Engine Optimization) is a newly defined category with no dominant player',
      'TechCrunch feature in YC W26 Demo Day coverage',
    ],
    tam: '$80B+ global digital marketing and SEO market; GEO is an emerging subcategory estimated at $2B+ by 2027',
    marketShare: '<0.1% of TAM',
    ceiling: 'Every brand with a web presence will need AI visibility tooling as AI search displaces traditional Google — this is the next SEO',
    tailwinds: [
      'AI search engines (ChatGPT Search, Google AI Mode, Perplexity) displacing traditional Google search',
      'Brands experiencing 20-40% organic traffic declines from AI Overviews need alternatives',
      'GEO is an entirely new discipline — first-mover advantage for tooling layer',
      'Content marketing budgets shifting from SEO to AI discoverability',
      'European enterprise brands (BMW, DWS) already investing — regulatory digital compliance driver',
    ],
    headwinds: [
      'Profound, AirOps, and Peec already building in GEO space with head start',
      'AI search citation algorithms are opaque and change frequently — hard to optimize reliably',
      'Market education required — most marketing teams do not yet know what GEO is',
      'Large digital marketing agencies building in-house GEO capabilities',
      '2-person team scaling against well-resourced competitors',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Proprietary citation signal data across ChatGPT, Gemini, and Google AI Mode; growing faster as more clients add data.',
  },

  // Competition
  competitors: [
    {
      name: 'Profound',
      description: 'AI search visibility analytics and content optimization platform.',
      whyTheyWin: 'Earlier market entry, stronger analytics depth, enterprise brand recognition.',
    },
    {
      name: 'AirOps',
      description: 'AI content workflow automation for marketing teams.',
      whyTheyWin: 'Broader content automation platform with existing customer base.',
    },
    {
      name: 'Peec',
      description: 'AI search monitoring and citation analytics.',
      whyTheyWin: 'Analytics-focused positioning with clean brand and developer-friendly API.',
    },
    {
      name: 'Surfer SEO',
      description: 'Content optimization platform for traditional and AI search.',
      whyTheyWin: 'Large existing SEO customer base transitioning to GEO features.',
    },
  ],
  marketPosition: 'Fully automated GEO agency — monitoring, content creation, and CMS publishing in a single workflow',
  moat: [
    'Citation signal data flywheel: more clients = more citation data = better optimization recommendations',
    'CMS publishing integrations (Framer, Webflow) reduce activation friction vs analytics-only tools',
    'Agency-like automation model — hands-off for marketing teams vs self-serve SEO tools',
  ],
  vsGiants: 'Fully automated content-to-citation loop vs point analytics tools from Profound and Peec',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Infrastructure: Sitefire agents do the work — analyzing which pages get cited, generating optimized content, and pushing to CMS automatically. Remove the AI and there is no product.',
  aiDesignChallenges: [
    'Citation monitoring dashboard: communicating which prompts, keywords, and pages drive AI citations',
    'Content recommendation UX: showing why Sitefire suggests a new article vs optimizing an existing one',
    'CMS integration flow: configuring Framer/Webflow connections with appropriate brand guardrails',
    'ROI visualization: attributing AI bot traffic growth to specific content changes',
    'Prompt library design: helping clients build and manage synthetic prompts for monitoring',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jochen Madler',
      role: 'Co-founder & CEO',
      background: 'Valedictorian of Germany\'s top finance program; deep reinforcement learning and optimization research at Stanford; PhD at Technical University Munich (TUM).',
    },
    {
      name: 'Vincent Jeltsch',
      role: 'Co-founder & CTO',
      background: 'Software engineering and healthcare program experience; worked with Jochen for years before founding Sitefire.',
    },
  ],
  whyBuilding: 'Google AI Overviews are quietly destroying brand organic traffic. Jochen and Vincent saw brands like BMW urgently need a new discipline for AI-age discoverability — and built the automated agency to do it.',
  beliefs: [
    'AI search engines will become the primary discovery surface for brands within 3 years',
    'GEO is not SEO with AI — it requires entirely different content and citation mechanics',
    'Brands need an automated agent, not another analytics dashboard, to compete in AI search',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Named enterprise clients (BMW, Xtrackers, DWS) at seed stage — extraordinary validation',
    'TechCrunch Demo Day feature — market journalist validation of the category',
    '185% AI traffic lift for one client in 10 days — concrete, fast ROI story',
    'First-mover in fully automated GEO (vs analytics-only competitors)',
  ],
  redFlags: [
    'Citation algorithms are a black box — optimization advice based on opaque signals',
    'Profound and AirOps are ahead with more funding and brand awareness',
    'Category education required — most marketing teams are still in SEO mindset',
    '2-person team selling into enterprise (BMW) — scaling support will be challenging',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0 — 2-person technical founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Prompt monitoring logic: how Sitefire decides which synthetic prompts to track per brand',
        'Content generation guardrails: brand voice constraints in automated article creation',
        'CMS publishing rules: when to auto-publish vs require human approval',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Citation share dashboard: tracking brand vs competitor citations across AI search engines',
        'Content performance attribution: connecting specific articles to AI traffic growth',
        'ROI reporting: communicating AI visibility lift to marketing leadership',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Brand setup flow: configuring keywords, CMS, and monitoring scope',
        'Content review UI: human-in-the-loop approval for generated articles',
        'Competitor tracking: monitoring competitor citation share by category',
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
    fitScore: 5,
    whyJoin: [
      'GEO is the next SEO — genuine new category at an early, defining moment',
      'Enterprise clients at seed stage signal real market pull, not just developer interest',
      'Dashboard and analytics design work is substantial — ROI visualization, citation monitoring',
      'European roots with Stanford-level research background — international, analytical culture',
    ],
    whyNot: [
      '2-person team unlikely to hire designer before Series A',
      'Citation algorithm opacity makes design decisions hard to validate empirically',
      'Profound and AirOps already ahead — late-mover risk in a fast-moving space',
      'Content generation quality bar is the real product — design is secondary to AI accuracy',
    ],
    nextActions: [
      'Monitor Series A raise and US enterprise expansion',
      'Watch for product differentiation vs Profound as GEO market matures',
    ],
  },

  // Meta
  lastUpdated: '2026-04-23T00:00:00',
  sources: [
    { title: 'Sitefire YC Profile', url: 'https://www.ycombinator.com/companies/sitefire' },
    { title: 'Launch HN: Sitefire (YC W26)', url: 'https://news.ycombinator.com/item?id=47457472' },
    { title: 'Sitefire Product Hunt', url: 'https://www.producthunt.com/products/sitefire-ai' },
    { title: 'Extruct AI: Sitefire Funding', url: 'https://www.extruct.ai/hub/sitefire-ai/' },
    { title: 'TechCrunch YC W26 Demo Day', url: 'https://techcrunch.com/2026/03/26/16-of-the-most-interesting-startups-from-yc-w26-demo-day/' },
  ],
};
