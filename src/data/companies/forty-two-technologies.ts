import { Company } from '../types';

export const fortyTwoTechnologies: Company = {
  id: 'forty-two-technologies',
  name: '42 Technologies',
  description: 'AI-powered retail analytics platform helping merchants optimize merchandising and demand forecasting.',
  website: 'https://42technologies.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Retailers and merchandising teams optimizing inventory decisions',

  // Competition
  competitors: [
    {
      name: 'RetailNext',
      description: 'Retail analytics platform for in-store and shopper behavior.',
      whyTheyWin: 'Strong retail analytics adoption and sensor integrations.',
    },
    {
      name: 'Blue Yonder',
      description: 'Enterprise supply chain and retail planning platform.',
      whyTheyWin: 'Large enterprise footprint and planning suite depth.',
    },
    {
      name: 'o9 Solutions',
      description: 'Enterprise planning and supply chain analytics software.',
      whyTheyWin: 'Broad planning platform adoption.',
    },
  ],
  marketPosition: 'AI-driven retail analytics for merchandising and planning.',
  moat: ['Retail forecasting and merchandising focus', 'Data-driven retail insights'],
  vsGiants: 'Differentiates with retail-specific analytics vs broad supply chain suites.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports demand forecasting and merchandising insights.',
  aiDesignChallenges: [
    'Making complex retail analytics actionable for planners',
    'Designing trust in AI-driven demand forecasts',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Cathy Han',
      role: 'Co-founder & CEO',
      background: 'Co-founded 42 Technologies to apply AI to retail analytics.',
    },
    {
      name: 'Nick Porter',
      role: 'Co-founder',
      background: 'Co-founded 42 Technologies and led data science initiatives.',
    },
  ],
  whyBuilding: 'Help retailers make smarter, faster merchandising decisions with AI.',
  beliefs: ['Retail planning needs real-time analytics', 'AI can reduce inventory waste'],
  greenFlags: ['Clear retail analytics niche'],
  redFlags: ['Retail budgets fluctuate with macro conditions'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Forecast logic and scenario modeling UX'] },
    evaluation: { level: 'medium', tasks: ['Model accuracy monitoring and feedback loops'] },
    interface: { level: 'medium', tasks: ['Retail analytics dashboards and planning UI'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Retail merchandisers and planners',
    secondary: 'Inventory and supply chain teams',
  },
  userProblems: [
    'Retail planning is slow and reactive',
    'Forecasting errors create lost revenue and excess inventory',
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
    whyJoin: ['Retail analytics UX and forecasting challenges'],
    whyNot: ['Retail analytics may be niche for design impact'],
    nextActions: ['Verify current product design hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Seedtable listing'],
    tam: 'Retail analytics and planning software market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader retail planning suite',
    tailwinds: ['Retail demand for AI forecasting'],
    headwinds: ['Competition from enterprise planning suites'],
    moatType: 'vertical-specialization',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T20:30:00',
  sources: [
    { title: 'Source', url: 'https://42technologies.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
