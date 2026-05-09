import { Company } from '../types';

export const openrouter: Company = {
  id: 'openrouter',
  name: 'OpenRouter',
  description:
    'Unified API marketplace that lets developers access and route requests across multiple AI models.',
  website: 'https://openrouter.ai/',
    screenshot: '/screenshots/openrouter-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/openrouter-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'code-assistant'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$28M',
  fundingHistory: [
    { stage: 'Series A', amount: '$28M', date: '2025-06' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and teams building AI products with multi-model access.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Developer-first AI model marketplace',
      'San Francisco-based team',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Multi-model routing infrastructure grows with AI app adoption.',
    tailwinds: [
      'Developers need access to multiple AI models',
      'Cost optimization pushes model routing adoption',
      'AI app teams want unified billing and analytics',
    ],
    headwinds: [
      'Commoditization of model access',
      'Dependence on model providers',
      'Price competition among APIs',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if OpenRouter becomes the default model routing layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Together AI',
      description: 'Inference platform and model access for developers.',
      whyTheyWin: 'Infrastructure depth and model partnerships.',
    },
    {
      name: 'Replicate',
      description: 'Hosted model inference for developers.',
      whyTheyWin: 'Developer-first model marketplace and API.',
    },
    {
      name: 'Anyscale',
      description: 'AI infrastructure and serving for enterprise teams.',
      whyTheyWin: 'Enterprise infrastructure focus.',
    },
  ],
  marketPosition: 'Developer-focused model marketplace and routing API.',
  moat: [
    'Unified API across multiple models',
    'Routing and cost optimization features',
    'Developer ecosystem integrations',
  ],
  vsGiants: 'Competes with cloud AI platforms by providing model-agnostic routing and access.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: OpenRouter provides AI model access as the core product.',
  aiDesignChallenges: [
    'Model selection and routing UX',
    'Cost and latency transparency',
    'Trust and reliability for model outputs',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Give developers a single API to access and route across AI models.',
  beliefs: [
    'Developers should not be locked into one model provider',
    'Routing and evaluation improve AI product performance',
    'Transparent pricing and metrics build trust',
  ],
  designPhilosophy: 'Developer-first infrastructure with clear routing controls.',
  greenFlags: [
    'Strong developer need for model access',
    'Growing multi-model ecosystem',
  ],
  redFlags: [
    'High competition among AI infrastructure platforms',
    'Dependence on upstream model providers',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Routing and fallback logic configuration',
        'Permissions and API key management',
        'Reliability and error handling flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance comparisons',
        'Cost and latency analytics',
        'Quality evaluation workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboard UX',
        'API onboarding and docs',
        'Usage and billing views',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building AI products',
    secondary: 'AI teams optimizing model costs and quality',
  },
  userProblems: [
    'Developers need access to multiple AI models',
    'Routing between models is complex to build',
    'Cost and latency optimization is difficult',
    'Teams need consistent APIs across providers',
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
    fitScore: 8,
    whyJoin: [
      'AI infrastructure and developer UX challenges',
      'High leverage product for AI builders',
    ],
    whyNot: [
      'Highly competitive infrastructure space',
      'Dependency on upstream model availability',
    ],
    nextActions: [
      'Track product adoption and partnerships',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Source', url: 'https://openrouter.ai/' },
    { title: 'Source', url: 'https://startups.gallery/companies/openrouter' }
  ],
};
