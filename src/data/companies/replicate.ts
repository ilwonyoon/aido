import { Company } from '../types';

export const replicate: Company = {
  id: 'replicate',
  name: 'Replicate',
  description: 'Model hosting and APIs for running machine learning models in production.',
  website: 'https://replicate.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',


  category: 'developer-tools' as const,

  // Multi-dimensional Tags
  aiTypes: ['model-platform'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Acquired',
  valuation: '$350M (Dec 2023)',
  totalFunding: '$57.8M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5.3M', date: '2022', leadInvestors: ['Angel investors'] },
    { stage: 'Series A', amount: '$12.5M', date: '2023-02', leadInvestors: ['Andreessen Horowitz'] },
    { stage: 'Series B', amount: '$40M', date: '2023-12', leadInvestors: ['Andreessen Horowitz'] },
  ],
  revenue: '$5.3M ARR (2024)',
  growth: 'Acquired by Cloudflare (Nov 2025)',
  runway: 'N/A — acquired by Cloudflare',
  customers: '30,000+ paying customers, 2M+ registered users',

  // Competition
  competitors: [
    {
      name: 'Hugging Face',
      description: 'Model hub and inference endpoints.',
      whyTheyWin: 'Large model ecosystem and community adoption.',
    },
    {
      name: 'Together AI',
      description: 'Model hosting and inference platform.',
      whyTheyWin: 'Broad model coverage and infrastructure scale.',
    },
    {
      name: 'RunPod',
      description: 'GPU cloud and model hosting tools.',
      whyTheyWin: 'Cost-competitive compute and flexible deployment.',
    },
  ],
  marketPosition: 'Developer-focused model hosting platform with API-first access.',
  moat: [
    'Simple API for model deployment',
    'Community of model creators and users',
    'Focus on developer experience',
  ],
  vsGiants: 'Competes on ease-of-use and API simplicity for model hosting.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure is the core product offering.',
  aiDesignChallenges: [
    'Simplifying model deployment workflows',
    'Trust and transparency in model behavior',
    'Balancing power users with beginner-friendly UI',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ben Firshman',
      role: 'Founder & CEO',
      background: 'Former Product Lead at Docker. Creator of Docker Compose. 4x founder.',
    },
    {
      name: 'Andreas Jansson',
      role: 'Co-Founder',
      background: 'Former ML Engineer at Spotify. PhD in ML for Music.',
    },
  ],
  whyBuilding: 'Developers need simple, reliable tooling to run and share AI models.',
  beliefs: [
    'AI infrastructure should be easy to use',
    'APIs enable faster iteration and adoption',
    'Open model ecosystems drive innovation',
  ],
  greenFlags: [
    'Series B funding announced',
    'Developer-first positioning',
  ],
  redFlags: [
    'Highly competitive model hosting space',
    'Compute cost volatility',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~37 employees total',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Model deployment flows', 'Usage policy and quota logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Performance metrics dashboards', 'Model quality evaluation'],
    },
    interface: {
      level: 'medium',
      tasks: ['API dashboards', 'Model catalog UX'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers deploying AI models into products',
    secondary: 'AI researchers sharing models via APIs',
  },
  userProblems: [
    'Deploying models to production is complex',
    'Model hosting costs are hard to predict',
    'Developers need faster iteration cycles',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Developer-first AI infrastructure', 'Strong product UX leverage'],
    whyNot: ['Competitive market', 'Infra-heavy product cycles'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: '$5.3M ARR (2024), now part of Cloudflare',
    userGrowth: '2M+ users, 30K+ paying customers',
    signals: [
      'Acquired by Cloudflare (Nov 2025)',
      '$57.8M total funding (a16z, Sequoia, Y Combinator, Nvidia)',
      'Notable customers: Character AI, BuzzFeed, Unsplash',
      '2M+ registered users on platform',
    ],
    tam: '$15B+ (AI model hosting and inference infrastructure)',
    marketShare: '<1% (niche developer-focused segment)',
    ceiling: 'Now part of Cloudflare: acquired for infrastructure integration. Standalone growth ceiling reached.',
    tailwinds: ['Cloudflare distribution and scale', 'Growing demand for model hosting'],
    headwinds: ['Part of larger corporation now', 'Hugging Face and Together AI competition'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Medium: Developer-friendly API created loyalty but model hosting is commoditizing. Cloudflare acquisition validates the platform.',
  },

  // Meta
  lastUpdated: '2026-02-05T22:30:00',
  sources: [
    { title: 'Replicate Series B', url: 'https://replicate.com/blog/series-b' },
    { title: 'Replicate (TechCrunch)', url: 'https://techcrunch.com/2023/02/21/replicate-wants-to-take-the-pain-out-of-running-and-hosting-ml-models/' },
    { title: 'Replicate About', url: 'https://replicate.com/about' },
  ],
};
