import { Company } from '../types';

export const chillwallAi: Company = {
  id: 'chillwall-ai',
  name: 'Chillwall AI',
  description: 'Deep learning company focused on analytics for event management and big data use cases.',
  website: 'https://chillwall.ai',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$87.2K',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Event management and analytics teams seeking AI insights',

  // Competition
  competitors: [
    {
      name: 'Eventbrite Analytics',
      description: 'Event analytics and ticketing insights.',
      whyTheyWin: 'Large event platform distribution.',
    },
    {
      name: 'Bizzabo',
      description: 'Event platform with analytics tools.',
      whyTheyWin: 'Integrated event management workflows.',
    },
    {
      name: 'Cvent',
      description: 'Enterprise event management platform.',
      whyTheyWin: 'Large enterprise event footprint.',
    },
  ],
  marketPosition: 'AI analytics for event management and data-driven decision making.',
  moat: ['Applied deep learning analytics for event data'],
  vsGiants: 'Differentiates with AI analytics layer vs full event platforms.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI analytics support event data insights and forecasting.',
  aiDesignChallenges: [
    'Designing actionable insights for event teams',
    'Communicating data-driven recommendations clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Michael Campanelli',
      role: 'Founder',
      background: 'Founded Chillwall AI to apply deep learning to event analytics.',
    },
    {
      name: 'Ian Knowles',
      role: 'Co-founder',
      background: 'Co-founded Chillwall AI and led analytics development.',
    },
  ],
  whyBuilding: 'Help event teams make smarter decisions with AI analytics.',
  beliefs: ['Event performance should be data-driven', 'AI can improve event outcomes'],
  greenFlags: ['Clear applied analytics focus'],
  redFlags: ['Small funding base and niche market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Forecasting and insight UX'] },
    evaluation: { level: 'medium', tasks: ['Performance analytics dashboards'] },
    interface: { level: 'medium', tasks: ['Event analytics visualization UI'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Event managers and operations teams',
    secondary: 'Marketing teams running live events',
  },
  userProblems: [
    'Event data is fragmented and hard to interpret',
    'Teams lack forecasting tools for event performance',
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
    whyJoin: ['Applied analytics UX challenges'],
    whyNot: ['Small market and early-stage funding'],
    nextActions: ['Verify current team size and traction'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$87.2K total funding (Seedtable)'],
    tam: 'Event management analytics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Limited by niche event analytics market',
    tailwinds: ['Events industry rebound'],
    headwinds: ['Small budgets and competition from larger platforms'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T21:15:00',
  sources: [
    { title: 'Source', url: 'https://chillwall.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
