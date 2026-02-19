import { Company } from '../types';

export const bindwell: Company = {
  id: 'bindwell',
  name: 'Bindwell',
  description:
    'Agriculture biotech company using AI models to discover safer, more effective pesticides.',
  website: 'https://bindwell.ai/',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/CAHilCWpc550x3P6xRGQyJf7-Y00IYycSSTOPOPuNdBx2wGSEHpXCHLZPlWUncHYzM4MIMEYPfF7cYuH8rtw-A.png',

    // OG Image
    ogImage: '/og-images/bindwell-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'code-assistant'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$6M',
      date: '2025-11',
      leadInvestors: ['General Catalyst', 'A Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Agrochemical partners evaluating new pesticide molecules.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed round to accelerate AI-driven pesticide discovery',
      'Developing first proprietary pesticide for invasive pests',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI-driven agrochemical discovery grows as demand for safer pesticides rises.',
    tailwinds: [
      'Global need for safer crop protection',
      'AI accelerates molecule discovery',
      'Regulatory pressure for targeted pesticides',
    ],
    headwinds: [
      'Long R&D and approval timelines',
      'Capital-intensive lab work',
      'Regulatory and safety scrutiny',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Bindwell delivers superior pesticide discovery outcomes.',
  },

  // Competition
  competitors: [
    {
      name: 'Bayer Crop Science',
      description: 'Global agrochemical and seed company.',
      whyTheyWin: 'Scale, distribution, and legacy IP.',
    },
    {
      name: 'Syngenta',
      description: 'Agricultural science and crop protection company.',
      whyTheyWin: 'R&D scale and global distribution.',
    },
    {
      name: 'BASF Agricultural Solutions',
      description: 'Crop protection and chemical products provider.',
      whyTheyWin: 'Scale and regulatory expertise.',
    },
  ],
  marketPosition: 'AI-first pesticide discovery and development company.',
  moat: [
    'AI-driven molecule discovery models',
    'In-house pesticide development pipeline',
    'Early lab validation capabilities',
  ],
  vsGiants: 'Competes on speed and novelty vs legacy agrochemical R&D workflows.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Bindwell is focused on AI-driven pesticide discovery.',
  aiDesignChallenges: [
    'Translating AI research into usable discovery workflows',
    'Trust and validation for AI-predicted molecules',
    'Operational UX for lab and R&D teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tyler Rose',
      role: 'Co-Founder',
      background: 'Co-founded Bindwell to apply AI to pesticide discovery.',
    },
    {
      name: 'Navvye Anand',
      role: 'Co-Founder',
      background: 'Co-founded Bindwell to build AI models for pesticide R&D.',
    },
  ],
  whyBuilding:
    'Accelerate discovery of safer pesticides by using AI to design new molecules.',
  beliefs: [
    'AI can speed up pesticide discovery',
    'Safer, targeted pesticides are critical for agriculture',
    'In-house validation is necessary for trust',
  ],
  designPhilosophy: 'Scientific rigor and safety-first decision-making.',
  greenFlags: [
    'Seed funding from top-tier investors',
    'Clear mission with global impact',
  ],
  redFlags: [
    'Long regulatory timelines',
    'High R&D costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI model experimentation workflows',
        'Lab validation pipelines',
        'Safety and compliance documentation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance evaluation',
        'Experimental validation tracking',
        'Regulatory reporting dashboards',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'R&D dashboards and reporting',
        'Collaboration workflows for researchers',
        'Experiment tracking tools',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Agrochemical R&D teams',
    secondary: 'Agriculture partners and regulators',
  },
  userProblems: [
    'Pesticide discovery is slow and expensive',
    'New molecules must be safer and more targeted',
    'Validation and regulatory compliance are complex',
    'R&D teams need faster iteration cycles',
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
    fitScore: 7,
    whyJoin: [
      'Mission-driven biotech with AI core',
      'Complex R&D workflow design challenges',
    ],
    whyNot: [
      'Long development timelines',
      'Regulatory-heavy environment',
    ],
    nextActions: [
      'Track clinical and lab milestones',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Source', url: 'https://bindwell.ai/' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/bindwell' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20251103558856/en/Bindwell-Raises-%246M-to-Discover-New-Safer-Pesticides-with-AI' },
    { title: 'Source', url: 'https://techcrunch.com/2025/11/13/teen-founders-raise-6m-to-reinvent-pesticides-using-ai-and-convince-paul-graham-to-join-in/' }
  ],
};
