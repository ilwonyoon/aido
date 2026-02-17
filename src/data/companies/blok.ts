import { Company } from '../types';

export const blok: Company = {
  id: 'blok',
  name: 'Blok',
  description: 'AI-powered product experimentation platform that uses synthetic user personas to simulate real-world app usage and predict user reactions before launch.',
  website: 'https://www.joinblok.co',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',
  ogImage: '/og-images/blok-og.webp',

  category: 'developer-tools' as const,
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  industries: ['developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$7.5M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$2.5M',
      date: '2024-01',
      leadInvestors: ['Protagonist'],
    },
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2025-07',
      leadInvestors: ['MaC Venture Capital'],
    },
  ],
  revenue: 'Pre-revenue (targeting mid-single-digit millions)',
  growth: 'Early — product behind waitlist with initial finance/healthcare customers',
  runway: 'Strong (fresh $5M seed, Jul 2025)',
  customers: 'Early adopters in financial services and consumer health',

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Waitlist-based with select early customers',
    signals: [
      '$5M seed led by MaC Venture Capital (Jul 2025)',
      'Angels from Google, Apple, Meta, Discord, Pinterest',
      'Compresses 4-6 week testing cycles to hours',
    ],
    tam: '$52B global testing software market',
    marketShare: '<0.01% of TAM = massive upside',
    ceiling: 'Early innings: predictive UX testing is a nascent category',
    tailwinds: [
      'Rising product experimentation costs in regulated industries',
      'AI-native testing replacing slow A/B testing cycles',
      'Demand for faster product iteration loops',
    ],
    headwinds: [
      'Unproven category — synthetic persona accuracy must be demonstrated',
      'Incumbent A/B testing tools (Optimizely, LaunchDarkly)',
      'Compute costs for large-scale persona simulations',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Emerging: behavioral data from early customers trains better personas over time',
  },

  competitors: [
    {
      name: 'Optimizely',
      description: 'Leading A/B testing and experimentation platform',
      whyTheyWin: 'Established market presence and enterprise integrations',
    },
    {
      name: 'LaunchDarkly',
      description: 'Feature management and experimentation platform',
      whyTheyWin: 'Developer-first approach with strong feature flag ecosystem',
    },
    {
      name: 'Maze',
      description: 'Rapid user testing platform for product teams',
      whyTheyWin: 'Large panel of real testers and Figma integration',
    },
  ],
  marketPosition: 'First mover in AI-powered predictive product experimentation',
  moat: [
    'Predictive simulation vs retrospective A/B testing',
    'Behavioral data flywheel from customer event logs',
    'Speed advantage: hours vs weeks for experiment results',
  ],
  vsGiants: 'Traditional testing tools (Optimizely, Google Optimize) are retrospective — Blok is predictive, removing the need to ship code before learning',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Synthetic user personas and predictive simulation are the core value — without AI, the product cannot exist.',
  aiDesignChallenges: [
    'Persona fidelity: designing trust in synthetic user predictions',
    'Simulation transparency: helping PMs understand why personas react certain ways',
    'Experiment design UX: making complex simulations accessible to non-technical users',
  ],

  founders: [
    {
      name: 'Tom Charman',
      role: 'CEO & Co-founder',
      background: 'Serial entrepreneur. Previously co-founded Nava (travel) and Rassa (learning).',
    },
    {
      name: 'Olivia Higgs',
      role: 'Co-founder',
      background: 'Serial entrepreneur. Previously co-founded ventures in travel and learning with Charman.',
    },
  ],
  whyBuilding: 'Interviewed 100+ product engineers and found testing cycles of 6-8 weeks are a bottleneck, especially in regulated industries. Built Blok to compress this to hours.',
  beliefs: [
    'Product experimentation should be predictive, not retrospective',
    'Synthetic users trained on real data can reliably simulate human behavior',
    'Speed of learning is the ultimate product competitive advantage',
  ],
  greenFlags: [
    'Strong angel backing from FAANG product/eng leaders',
    'Clear problem validation (100+ PM interviews)',
    'Novel category with no direct competitors',
    'Regulated industry focus (finance, healthcare) = high willingness to pay',
  ],
  redFlags: [
    'Very early stage — product still behind waitlist',
    'Unproven core assumption (synthetic personas matching real users)',
    'Small team with limited public hiring signal',
  ],

  designTeam: {
    teamSize: 'Unknown (early-stage, likely 0-1 dedicated designers)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Persona behavior modeling and configuration',
        'Experiment setup workflows and guardrails',
        'Simulation parameter design',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Prediction accuracy visualization and trust indicators',
        'Experiment result interpretation dashboards',
        'Persona-vs-reality comparison views',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Experiment builder UI',
        'Persona profile visualization',
        'Results dashboard and analytics',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Product managers and engineers at regulated-industry companies (fintech, healthtech)',
    secondary: 'Growth teams at consumer apps needing faster experimentation',
  },
  userProblems: [
    'A/B testing cycles take 4-8 weeks, delaying product decisions',
    'Regulated industries cannot run live experiments on real users easily',
    'Engineering resources are wasted building features that underperform',
    'Product teams drown in data signals without clear actionable predictions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level A AI-native — design defines the entire product experience',
      '0→1 product stage with massive design influence opportunity',
      'Novel UX challenges: designing for synthetic persona simulations',
    ],
    whyNot: [
      'Very early stage — small team, uncertain product-market fit',
      'No visible design team or open design roles',
      'Waitlist-stage product limits design portfolio material',
    ],
    nextActions: [
      'Monitor for Product Designer job postings',
      'Track product launch from waitlist to general availability',
    ],
  },

  lastUpdated: '2026-02-14',
  sources: [
    { title: 'TechCrunch — Blok raises $7.5M', url: 'https://techcrunch.com/2025/07/09/blok-is-using-ai-persons-to-simulate-real-world-app-usage/' },
    { title: 'SiliconANGLE — Blok funding details', url: 'https://siliconangle.com/2025/07/09/blok-raises-7-5m-build-ai-agents-simulate-human-behavior-accelerate-software-testing/' },
    { title: 'Blok official website', url: 'https://www.joinblok.co/' },
    { title: 'Blok Crunchbase profile', url: 'https://www.crunchbase.com/organization/blok-5bbe' },
    { title: 'Blok careers — no Product Design roles found', url: 'https://www.joinblok.co/' },
  ],
};
