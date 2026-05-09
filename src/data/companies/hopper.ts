import { Company } from '../types';

export const hopper: Company = {
  id: 'hopper',
  name: 'Hopper',
  description: 'Travel app using AI and data science to predict prices and help consumers book trips.',
  website: 'https://hopper.com',
  headquarters: 'Montreal, QC, Canada',
  region: 'other-intl' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2c'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$633.6M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Consumers booking travel via mobile-first app',

  // Competition
  competitors: [
    {
      name: 'Expedia',
      description: 'Large online travel agency platform.',
      whyTheyWin: 'Massive inventory and distribution scale.',
    },
    {
      name: 'Booking.com',
      description: 'Global travel booking platform.',
      whyTheyWin: 'Global inventory and brand recognition.',
    },
    {
      name: 'Trip.com',
      description: 'Online travel agency and booking platform.',
      whyTheyWin: 'International reach and scale.',
    },
  ],
  marketPosition: 'AI-first consumer travel booking app with predictive pricing.',
  moat: ['Predictive pricing and timing insights', 'Strong consumer app adoption'],
  vsGiants: 'Differentiates with AI-driven price prediction and mobile-first experience.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI powers price prediction and personalized travel offers.',
  aiDesignChallenges: [
    'Designing trust in AI price predictions',
    'Balancing deal discovery with booking confidence',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Frédéric Lalonde',
      role: 'Founder & CEO',
      background: 'Founded Hopper to apply data science and AI to travel booking.',
    },
  ],
  whyBuilding: 'Help travelers book at the best time and price with AI predictions.',
  beliefs: ['Data-driven predictions can save travelers money', 'Mobile-first booking is the future'],
  greenFlags: ['Large funding base', 'Strong consumer travel presence'],
  redFlags: ['Travel demand volatility'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Price prediction explanation UX', 'Booking timing workflows'] },
    evaluation: { level: 'medium', tasks: ['Prediction accuracy and trust metrics'] },
    interface: { level: 'high', tasks: ['Consumer travel booking flows and mobile UI'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Consumers booking flights and hotels',
    secondary: 'Price-sensitive travelers',
  },
  userProblems: [
    'Travel pricing is volatile and hard to predict',
    'Consumers want deals without complex search',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Consumer travel UX + data science collaboration'],
    whyNot: ['Travel category swings with macro conditions'],
    nextActions: ['Track product design hiring and travel AI roadmap'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$633.6M total funding (Seedtable)'],
    tam: 'Global consumer travel booking market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to expand into full-stack travel fintech',
    tailwinds: ['Rebound in travel demand', 'Mobile-first booking adoption'],
    headwinds: ['Highly competitive OTA market'],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:10:00',
  sources: [
    { title: 'Source', url: 'https://hopper.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
