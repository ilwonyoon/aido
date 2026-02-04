import { Company } from '../types';

export const chaiDiscovery: Company = {
  id: 'chai-discovery',
  name: 'Chai Discovery',
  description: 'AI-first drug discovery company engineering better molecules with foundation models.',
  website: 'https://www.chaidiscovery.com/',
    screenshot: '/screenshots/chai-discovery-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/chai-discovery-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$1.3B (Dec 2025)',
  totalFunding: '$225M (reported)',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$70M',
      date: '2025-08',
      leadInvestors: ['Menlo Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$130M',
      date: '2025-12',
      valuation: '$1.3B',
      leadInvestors: ['General Catalyst', 'Oak HC/FT'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B: $130M at $1.3B valuation (Dec 2025)',
      'Series A: $70M led by Menlo Ventures (Aug 2025)',
      'Reported total funding of $225M (TechCrunch)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI-first drug discovery still proving clinical impact.',
    tailwinds: [
      'Rising demand for faster drug discovery pipelines',
      'Advances in foundation models for biology',
      'Investment momentum in AI-native biotech',
    ],
    headwinds: [
      'Long validation cycles and regulatory hurdles',
      'High capital requirements for wet lab and trials',
      'Competitive landscape with well-funded peers',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if proprietary models and data compound across programs.',
  },

  // Competition
  competitors: [
    {
      name: 'Recursion',
      description: 'Techbio platform for drug discovery using machine learning.',
      whyTheyWin: 'Large data assets and public-market scale.',
    },
    {
      name: 'Insilico Medicine',
      description: 'AI-driven drug discovery company with multiple pipelines.',
      whyTheyWin: 'Deep pipeline and extensive funding history.',
    },
    {
      name: 'Isomorphic Labs',
      description: 'AI drug discovery company backed by Alphabet.',
      whyTheyWin: 'Access to top AI research and resources.',
    },
  ],
  marketPosition: 'AI-first drug discovery focused on molecular design using foundation models.',
  moat: [
    'AI-native modeling of molecular structures and properties',
    'Rapid iteration from model output to candidate molecules',
    'Strong funding enables long-term R&D investment',
  ],
  vsGiants: 'Focused on AI-native drug discovery vs traditional pharma R&D.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: The product is an AI-driven drug discovery engine; it does not exist without AI.',
  aiDesignChallenges: [
    'Interpretability and trust in model-generated molecules',
    'Workflow design bridging wet lab and AI outputs',
    'Evaluation and validation of candidate molecules',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Josh Meier',
      role: 'Founder & CEO',
      background: 'Founded Chai Discovery to build AI-first drug discovery workflows.',
    },
  ],
  whyBuilding:
    'Use AI foundation models to accelerate and improve drug discovery outcomes.',
  beliefs: [
    'AI can dramatically shorten drug discovery timelines',
    'Model interpretability and validation matter for trust',
    'Biology needs AI-native tooling to scale',
  ],
  designPhilosophy: 'Bridge AI insights with lab workflows and scientific rigor.',
  greenFlags: [
    'Large Series B at unicorn valuation',
    'Strong investor backing across rounds',
  ],
  redFlags: [
    'Long regulatory timelines for validation',
    'Capital-intensive R&D path',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Model-driven molecule generation workflows',
        'Human-in-the-loop review and validation steps',
        'Safety and compliance boundaries for AI outputs',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Metrics and dashboards for model confidence',
        'Experiment tracking and outcome analysis',
        'Feedback loops between lab results and models',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Researcher tooling for experiment setup',
        'Visualization of molecular candidates',
        'Collaboration and annotation workflows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Drug discovery researchers and computational biologists',
    secondary: 'Pharma R&D teams seeking AI acceleration',
  },
  userProblems: [
    'Drug discovery cycles are slow and expensive',
    'Evaluating AI-generated molecules is complex',
    'Scientists need transparent, validated model outputs',
    'Bridging AI workflows and lab experiments is difficult',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (In-person)',
      url: 'https://jobs.ashbyhq.com/chaidiscovery',
      type: 'full-time',
      aboutRole: 'Design product experiences for AI-first drug discovery teams.',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'AI-native biotech with large funding and ambitious scope',
      'Complex design problems around trust and science workflows',
    ],
    whyNot: [
      'Long validation cycles and research risk',
      'Highly specialized domain',
    ],
    nextActions: [
      'Track scientific milestones and partnerships',
      'Monitor design or product hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'Chai Discovery website', url: 'https://www.chaidiscovery.com/' },
    { title: 'Chai Discovery Series B (TechCrunch)', url: 'https://techcrunch.com/2025/12/15/openai-backed-biotech-firm-chai-discovery-raises-130m-series-b-at-1-3b-valuation/' },
    { title: 'Chai Discovery on startups.gallery', url: 'https://startups.gallery/companies/chai-discovery' },
    { title: 'Chai Discovery Product Designer role (Ashby)', url: 'https://jobs.ashbyhq.com/chaidiscovery' },
  ],
};
