import { Company } from '../types';

export const fortunaAi: Company = {
  id: 'fortuna-ai',
  name: 'Fortuna.ai',
  description: 'AI company delivering financial services solutions for organizations with data-driven insights.',
  website: 'https://fortuna.ai',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$160.0K',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Financial services organizations and teams needing AI insights',

  // Competition
  competitors: [
    {
      name: 'Personetics',
      description: 'AI personalization for banking and fintech.',
      whyTheyWin: 'Large banking adoption.',
    },
    {
      name: 'Zest AI',
      description: 'AI credit underwriting platform.',
      whyTheyWin: 'Deep ML focus on lending decisions.',
    },
    {
      name: 'Cleo',
      description: 'Consumer fintech assistant platform.',
      whyTheyWin: 'Strong consumer brand and engagement.',
    },
  ],
  marketPosition: 'AI-driven insights and automation for financial services workflows.',
  moat: ['Early fintech AI focus'],
  vsGiants: 'Differentiates with AI-first financial services focus.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports financial data analysis and automation workflows.',
  aiDesignChallenges: [
    'Designing trust in AI financial insights',
    'Communicating risk and compliance clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Omer Jamal',
      role: 'Founder',
      background: 'Founded Fortuna.ai to apply AI to financial services.',
    },
    {
      name: 'Asad Naeem',
      role: 'Co-founder',
      background: 'Co-founded Fortuna.ai and led product development.',
    },
  ],
  whyBuilding: 'Bring AI-powered insights and automation to financial services teams.',
  beliefs: ['Financial decisions benefit from AI-driven data analysis', 'Automation can reduce operational risk'],
  greenFlags: ['Clear fintech AI application'],
  redFlags: ['Very early funding stage'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Financial analytics UX'] },
    evaluation: { level: 'medium', tasks: ['Risk and compliance reporting UX'] },
    interface: { level: 'medium', tasks: ['Financial dashboards and automation flows'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Financial services operations teams',
    secondary: 'Fintech product teams',
  },
  userProblems: [
    'Financial data is complex and hard to interpret',
    'Manual workflows slow down decisions',
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
    whyJoin: ['Fintech analytics UX challenges'],
    whyNot: ['Very early stage and limited funding'],
    nextActions: ['Validate product status and traction'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$160K total funding (Seedtable)'],
    tam: 'Financial services AI and analytics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Limited by early-stage funding',
    tailwinds: ['AI adoption in fintech'],
    headwinds: ['Regulatory complexity'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T21:15:00',
  sources: [
    { title: 'Source', url: 'https://fortuna.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
