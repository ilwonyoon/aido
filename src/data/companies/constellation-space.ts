import { Company } from '../types';

export const constellationSpace: Company = {
  id: 'constellation-space',
  name: 'Constellation Space',
  description: 'AI operating system for mega-scale satellite networks. ConstellationOS predicts satellite link failures minutes ahead and autonomously prevents data loss — targeting SpaceX Starlink, Amazon Kuiper, and LEO operators.',
  website: 'https://www.constellationspace.ai',
  screenshot: '/screenshots/constellation-space-screenshot.png',
  headquarters: 'Seattle, WA',
  remote: 'Unknown',

  ogImage: '/og-images/constellation-space-og.webp',

  aiTypes: ['automation', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['infrastructure', 'other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K',
  fundingHistory: [
    { stage: 'Seed', amount: '$500K', date: '2026-01', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown (pre-revenue; in design partner phase)',
  growth: 'Early — design partner testing with commercial/government LEO operators',
  runway: 'YC-backed seed',
  customers: 'LEO satellite operators (commercial and government)',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown (pre-revenue)',
    userGrowth: 'Design partners; no public user counts',
    signals: [
      'YC W26 acceptance — strong aerospace + AI founder pedigree (SpaceX, Blue Origin, NASA)',
      'SpaceX Starlink at 9M+ subscribers Q1 2026; Amazon Kuiper deploying 700 satellites by mid-2026',
      'Defense and government LEO spending accelerating via Space Development Agency',
    ],
    tam: '$10B+ satellite network management & mission assurance software (LEO segment scaling rapidly)',
    marketShare: '<0.01% of TAM — very early',
    ceiling: 'Early innings — LEO operator count growing from hundreds to tens of thousands of nodes',
    tailwinds: [
      'Explosion of LEO constellations — SpaceX, Amazon Kuiper, Eutelsat, Telesat all scaling fast',
      'Autonomous network management critical as satellite counts exceed human monitoring capacity',
      'US government and Space Force increasing LEO investment',
      'Predictive AI in infrastructure ops is a broad trend reducing downtime costs',
      'Regulatory pressure on satellite operators for reliability SLAs',
    ],
    headwinds: [
      'Very small TAM today — LEO software spend concentrated in a few large operators',
      'Long sales cycles with government and defense primes',
      'Aalyria (Alphabet spin-out, $100M Series B) is a well-funded direct competitor',
      'Defense primes (Raytheon, Kratos, Lockheed) build siloed in-house solutions',
      'SpaceX and Amazon may build their own orchestration software internally',
    ],
    moatType: 'technology',
    moatStrength: 'Deep domain expertise from SpaceX/Blue Origin/NASA founders; proprietary telemetry prediction models — but early and unproven at scale.',
  },

  competitors: [
    {
      name: 'Aalyria',
      description: 'Google/Alphabet spin-out doing satellite network orchestration via Spacetime platform. $100M Series B at $1.3B valuation, DARPA/Space Force contracts.',
      whyTheyWin: 'Deep government relationships, massive funding, Alphabet pedigree, and head start with DoD.',
    },
    {
      name: 'Raytheon / Kratos / Lockheed',
      description: 'Defense primes building custom constellation management systems for government programs.',
      whyTheyWin: 'Existing DoD contracts, compliance infrastructure, and decades of aerospace trust.',
    },
    {
      name: 'SpaceX (internal)',
      description: 'SpaceX builds proprietary Starlink network management in-house.',
      whyTheyWin: 'Vertical integration and massive proprietary data advantage from operating the largest LEO constellation.',
    },
  ],
  marketPosition: 'AI-first autonomous mission assurance for LEO satellite networks',
  moat: [
    'Founders with direct SpaceX, Blue Origin, NASA operating experience',
    'Predictive ML on environmental + antenna telemetry (proprietary models)',
    'Minutes-ahead failure prediction enabling proactive rerouting',
  ],
  vsGiants: 'Agile AI-native layer vs. legacy defense prime point solutions; positioned as horizontal OS across operators rather than siloed builds.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — remove AI and ConstellationOS ceases to exist. Failure prediction and autonomous rerouting are entirely ML-driven.',
  aiDesignChallenges: [
    'Designing operator dashboards that communicate AI confidence in failure predictions',
    'Visualizing complex multi-satellite network state and routing decisions',
    'Human-in-the-loop override design: when to auto-commit vs. require operator approval',
    'Alert fatigue prevention — surfacing only high-value predictions',
  ],

  founders: [
    {
      name: 'Kamran Majid',
      role: 'CEO & Co-founder',
      background: 'SpaceX satellite software engineer; NASA internships.',
    },
    {
      name: 'Raaid Kabir',
      role: 'CTO & Co-founder',
      background: '14 months at Blue Origin as Embedded Software Engineer II — power converter verification.',
    },
    {
      name: 'Laith Altarabishi',
      role: 'Co-founder',
      background: 'ML/systems background; UT Austin MS ECE.',
    },
    {
      name: 'Omeed Tehrani',
      role: 'Co-founder',
      background: 'Senior SWE at Capital One (ML infra); prior co-founder experience.',
    },
  ],
  whyBuilding: 'Founders built and operated satellite systems at SpaceX, Blue Origin, and NASA — firsthand experience with the reactive firefighting model that constellation management requires today. Building the proactive, autonomous alternative.',
  beliefs: [
    'Satellite networks at mega-scale cannot be managed by humans reactively — only AI-native orchestration works',
    'Predictive failure prevention is 10x more valuable than faster human response',
    'The LEO infrastructure layer will be as critical as terrestrial internet infrastructure within a decade',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Uniquely credentialed founders — SpaceX, Blue Origin, NASA with direct satellite ops experience',
    'Strong market timing: LEO operator count accelerating rapidly in 2025-2026',
    'YC W26 — validated by top-tier accelerator',
    'Clear wedge: autonomous mission assurance is an unmet need as constellations scale',
  ],
  redFlags: [
    'Very early — design partner stage, pre-revenue',
    'Aalyria is well-funded ($100M) and has DoD contracts already',
    'TAM is concentrated — SpaceX/Amazon may build in-house rather than buy',
    'Long enterprise and government sales cycles; capital-intensive path to revenue',
    'Only 4-person team at launch',
  ],

  designTeam: {
    teamSize: 'None — 4-person founding engineering team',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Autonomous policy commit workflows — when AI acts vs. alerts',
        'Failure prediction confidence thresholds and override logic',
        'Network rerouting decision visualization',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Operator review of AI prediction accuracy over time',
        'Incident post-mortem dashboards',
        'SLA compliance monitoring views',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Real-time satellite constellation state visualization',
        'Alert and prediction feed with contextual detail',
        'API console for operator integration',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'LEO satellite network operators and mission assurance engineers at commercial and government constellation operators',
    secondary: 'Defense contractors and space agencies managing multi-satellite constellations',
  },
  userProblems: [
    'Current satellite link failures are discovered reactively — after data loss has already occurred',
    'Manual monitoring of thousands of satellite nodes is humanly impossible at mega-scale',
    'Existing tools are siloed per operator with no horizontal orchestration layer',
    'Network engineers spend hours on firefighting rather than proactive optimization',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Unique domain — satellite infrastructure + AI is genuinely novel design territory',
      'Founding team with exceptional credibility in a hard-to-fake domain',
      'Product stage 0→1 means high designer leverage from day one',
    ],
    whyNot: [
      'Very niche B2B infrastructure — limited design surface at early stage',
      'Pre-revenue, 4-person team — no design role likely for 12-18+ months',
      'Aerospace/defense culture may be less design-forward',
      'Aalyria already has a head start with DoD; path to revenue is uncertain',
    ],
    nextActions: [
      'Monitor for Series A fundraise — design hire signal',
      'Check careers page at constellationspace.ai in 6 months',
    ],
  },

  lastUpdated: '2026-04-29T00:00:00',
  sources: [
    { title: 'Constellation Space - Y Combinator', url: 'https://www.ycombinator.com/companies/constellation-space' },
    { title: 'Launch HN: Constellation Space (YC W26)', url: 'https://news.ycombinator.com/item?id=46721933' },
    { title: 'Constellation Space - Crunchbase', url: 'https://www.crunchbase.com/organization/constellation-space' },
    { title: 'Constellation Space - Tracxn', url: 'https://tracxn.com/d/companies/constellationspace/__aY0YCyn9UqcBO13vOEH2WbAzziRLCgFPxxL1Sryd3z4' },
    { title: 'ConstellationOS website', url: 'https://www.constellationspace.ai/' },
    { title: 'LEO Satellite Market - MarketsandMarkets', url: 'https://www.marketsandmarkets.com/Market-Reports/leo-satellite-market-252330251.html' },
  ],
};
