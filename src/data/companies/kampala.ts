import { Company } from '../types';

export const kampala: Company = {
  id: 'kampala',
  name: 'Kampala (by Zatanna)',
  description: 'Reverse-engineers websites, mobile apps, and desktop apps into reliable APIs for AI agents — using MITM proxy to capture network traffic and output typed, hosted endpoints.',
  website: 'https://www.zatanna.ai',
  screenshot: '/screenshots/kampala-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // OG Image
  ogImage: '/og-images/kampala-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '~$500K (YC standard)',
  fundingHistory: [
    { stage: 'Seed', amount: '~$500K', date: '2026-01', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown (early)',
  growth: 'Launched Product Hunt April 2026; HN launch April 2026',
  runway: 'Unknown (YC-backed)',
  customers: 'AI companies needing reliable integrations; engineering teams replacing RPA/browser automation',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown (pre-revenue or very early)',
    userGrowth: 'Recently launched; 77 upvotes on Product Hunt (April 2026)',
    signals: [
      'YC W26 acceptance — validated idea and team',
      'HN Launch thread April 2026 with strong developer interest',
      'Product Hunt launch April 16, 2026 — #28 on daily leaderboard',
      'Competitor space (RPA/browser automation) worth $10B+',
    ],
    tam: '$13.7B RPA/automation market (2026 est.); AI agent tooling TAM expanding rapidly',
    marketShare: '<0.1% of TAM = massive upside if API-layer approach wins',
    ceiling: 'Early innings — AI agents need reliable integrations; browser automation is a known pain point',
    tailwinds: [
      'Explosion of AI agents needing programmatic access to legacy software',
      'Browser automation (Playwright, Selenium) is brittle and expensive to maintain',
      'RPA incumbents (UiPath, Automation Anywhere) are slow and overpriced',
      'API-first economy — developers prefer clean APIs over UI scraping',
      'YC network effect for early enterprise pilots',
    ],
    headwinds: [
      'Anti-bot infrastructure arms race (targets may block MITM approach)',
      'Legal risk — reverse engineering TOS may conflict with enterprise customers',
      'Small founding team (3 people, COO still finishing undergrad)',
      'Browser-use and Stagehand gaining momentum as alternative approach',
      'Niche initially (dental tech roots) — horizontal expansion unproven',
    ],
    moatType: 'technology',
    moatStrength: 'Technical differentiation: captures HTTP requests vs replaying browser clicks — more reliable and faster. Anti-bot infra is hard to replicate.',
  },

  // Competition
  competitors: [
    {
      name: 'UiPath / Automation Anywhere',
      description: 'RPA incumbents with enterprise browser automation.',
      whyTheyWin: 'Enterprise relationships, compliance certifications, large sales teams.',
    },
    {
      name: 'Stagehand / browser-use',
      description: 'AI-native browser automation using LLM-driven clicks.',
      whyTheyWin: 'Works without network access; simpler mental model for devs.',
    },
    {
      name: 'Relay.app / Bardeen',
      description: 'No-code automation with browser-based integrations.',
      whyTheyWin: 'Larger non-technical user base; easier onboarding for SMBs.',
    },
  ],
  marketPosition: 'The API layer for legacy software — faster, cheaper, more reliable than browser automation',
  moat: [
    'MITM proxy approach captures actual HTTP requests (not brittle UI clicks)',
    'Anti-bot infrastructure built in — handles rate limiting, auth, CAPTCHAs',
    "Hosted APIs: managed infra so customers don't have to self-host",
  ],
  vsGiants: "Goes under the UI layer where giants can't follow without breaking their no-code positioning.",

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core Product: AI/ML is the core mechanism for analyzing captured traffic, inferring types, mapping auth flows, and generating structured API contracts. Without AI, this is manual reverse engineering.',
  aiDesignChallenges: [
    'Capture session UX — guiding users through MITM setup without technical friction',
    'Surfacing inferred API structure in a readable, trustworthy way',
    'Handling ambiguous captures — what if the AI misidentifies an endpoint?',
    'Error states when anti-bot detection fires mid-session',
    'Trust UI for "this is the API your app uses" — users need confidence before deploying to agents',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Rithvik Vanga',
      role: 'CEO & Co-founder',
      background: 'Former engineer at Coinbase and Hamming AI; John Deere (2 years). Started building dental tech integrations.',
    },
    {
      name: 'Alex Blackwell',
      role: 'CTO & Co-founder',
      background: '3 years at Pikkit doing JavaScript reverse engineering and anti-bot work. Built and sold Arbster (~$600 MRR). Deep expertise in network traffic analysis.',
    },
    {
      name: 'Tarun Vedula',
      role: 'COO & Co-founder',
      background: 'Internships at Amazon, AT&T, John Deere. Still completing undergrad in 2026.',
    },
  ],
  whyBuilding: 'Originally built as internal tooling while working in dental tech, where they needed to integrate with insurance payer dashboards and legacy software. Realized the tooling had broad applicability for any AI agent needing software access.',
  beliefs: [
    'Software should be interoperable without requiring explicit API support',
    'AI agents need request-layer access, not brittle UI simulation',
    'The next era of automation is driven by AI agents, not RPA bots',
    'Anti-bot is a solvable infrastructure problem worth owning end-to-end',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Alex Blackwell has direct, hands-on reverse engineering experience (not a pivot)',
    'YC W26 — validated by top accelerator',
    'Real prior pain: built internally for dental tech customers before productizing',
    'Technical moat in anti-bot infra — rare to have this in-house',
  ],
  redFlags: [
    'COO still finishing undergrad — execution bandwidth concern',
    'Small 3-person team taking on large integration problem',
    'Legal/TOS risk: MITM approach may violate terms of service for some targets',
    'Browser-use / Stagehand gaining traction as competing paradigm',
    'No disclosed revenue or customer counts',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '0 (3-person founding team, no designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Capture session wizard — guiding users through MITM proxy setup',
        'API surface generation — how to present inferred endpoints, auth, types',
        'Agent harness config — designing how agents consume generated APIs',
        'Error handling logic when captures fail or anti-bot fires',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Confidence signals: how to communicate API accuracy to users',
        'Testing/validation UX for generated API contracts',
        'Monitoring dashboard for hosted API health',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'MCP integration UI for coding agents',
        'Export flows (script, hosted API)',
        'Developer console and API management dashboard',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI engineers and backend developers building agents that need to interact with legacy software',
    secondary: 'Engineering teams replacing brittle RPA/browser-automation workflows',
  },
  userProblems: [
    'Browser automation breaks constantly — any UI change kills the integration',
    'Building integrations with legacy systems (insurance, dental, ERP) takes weeks',
    'RPA tools are expensive and require dedicated specialists to maintain',
    'AI agents can\'t reliably use computer-use for mission-critical workflows',
    'No API? No integration — unless you reverse engineer it manually',
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
    fitScore: 5,
    whyJoin: [
      'Genuinely hard UX problem: making MITM proxy legible for non-security engineers',
      'Zero-to-one product design opportunity — no designer on team',
      'Interesting AI agent tooling space with real dev pain',
    ],
    whyNot: [
      '3-person team, no funding beyond YC — high execution risk',
      'Developer-tools product may be low on UI/design investment early',
      'Legal risk around reverse engineering TOS could kill growth',
      'Product stage too early for full-time designer hire',
    ],
    nextActions: [
      'Monitor for Series A raise',
      'Watch for designer job posting',
      'Track HN and Product Hunt traction',
    ],
  },

  // Meta
  lastUpdated: '2026-04-30T00:00:00',
  sources: [
    { title: 'Launch HN: Kampala (YC W26) – Reverse-Engineer Apps into APIs', url: 'https://news.ycombinator.com/item?id=47794514' },
    { title: 'Zatanna — Turn software workflows into reliable APIs for AI agents', url: 'https://www.zatanna.ai/' },
    { title: 'Zatanna: Turning all software into agent-first APIs | Y Combinator', url: 'https://www.ycombinator.com/companies/zatanna' },
    { title: 'Kampala by Zatanna | Product Hunt', url: 'https://www.producthunt.com/products/kampala-by-zatanna' },
    { title: 'Zatanna | LinkedIn', url: 'https://www.linkedin.com/company/usezatanna' },
    { title: 'Kampala (YC W26) – Best of Show HN', url: 'https://bestofshowhn.com/yc-w26/kampala' },
  ],
};
