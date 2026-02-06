import { Company } from '../types';

export const xpertsea: Company = {
  id: 'xpertsea',
  name: 'Xpertsea',
  description: 'AI and analytics platform for aquaculture operations and seafood supply chains.',
  website: 'https://xpertsea.com',
  headquarters: 'Quebec, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$31.3M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Aquaculture operators and seafood supply chain stakeholders',

  // Competition
  competitors: [
    {
      name: 'Aquabyte',
      description: 'Computer vision analytics for aquaculture operations.',
      whyTheyWin: 'Strong CV-based biomass estimation tooling.',
    },
    {
      name: 'Tidal',
      description: 'Aquaculture analytics and monitoring platform.',
      whyTheyWin: 'Integrated hardware + analytics monitoring stack.',
    },
    {
      name: 'eFishery',
      description: 'Aquaculture IoT and analytics platform.',
      whyTheyWin: 'Large emerging market footprint and hardware integration.',
    },
  ],
  marketPosition: 'Data and analytics platform for aquaculture productivity and transparency.',
  moat: ['Aquaculture-specific analytics and data pipelines'],
  vsGiants: 'Differentiates with aquaculture focus vs generalized agriculture analytics.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports analytics and performance optimization for aquaculture operations.',
  aiDesignChallenges: [
    'Visualizing complex aquaculture performance data',
    'Designing trust in data-driven farm recommendations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Valérie Robitaille',
      role: 'Co-founder',
      background: 'Co-founded Xpertsea and led data-driven aquaculture initiatives.',
    },
    {
      name: 'François Robitaille',
      role: 'Co-founder',
      background: 'Co-founded Xpertsea and built aquaculture technology programs.',
    },
    {
      name: 'Cody Andrews',
      role: 'Co-founder',
      background: 'Co-founded Xpertsea to improve aquaculture operations with data.',
    },
  ],
  whyBuilding: 'Improve sustainability and productivity in aquaculture with AI data insights.',
  beliefs: ['Seafood supply chains need better data transparency', 'AI can optimize aquaculture yield and quality'],
  greenFlags: ['Clear vertical niche', 'Sustainability tailwind'],
  redFlags: ['Smaller TAM compared to broad agtech'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Farm analytics and recommendation UX'] },
    evaluation: { level: 'medium', tasks: ['Data quality monitoring'] },
    interface: { level: 'medium', tasks: ['Operational dashboards for aquaculture teams'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Aquaculture farm operators',
    secondary: 'Seafood supply chain managers',
  },
  userProblems: [
    'Farm performance data is fragmented and manual',
    'Operators need better insights to improve yield',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Sustainability + data visualization challenges'],
    whyNot: ['Niche aquaculture market'],
    nextActions: ['Validate product footprint and hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$31.3M total funding (Seedtable)'],
    tam: 'Aquaculture analytics and operations market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader seafood supply chain analytics',
    tailwinds: ['Global demand for sustainable aquaculture'],
    headwinds: ['Industry fragmentation'],
    moatType: 'vertical-specialization',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T20:30:00',
  sources: [
    { title: 'Xpertsea', url: 'https://xpertsea.com' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
