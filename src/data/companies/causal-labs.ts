import { Company } from '../types';

export const causalLabs: Company = {
  id: 'causal-labs',
  name: 'Causal Labs',
  description: 'AI physics models to predict and control the weather.',
  website: 'https://www.getcausal.ai',
    screenshot: '/screenshots/causal-labs-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6977a9c6055cd296356ce1d0/69786945ff11eafe3793296d_44720ecd47dcbec811e851d0560d3a99_Open%20Graph.png',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$6M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Enterprises needing climate and weather prediction models.',

  // Competition
  competitors: [
    {
      name: 'Tomorrow.io',
      description: 'Weather intelligence platform.',
      whyTheyWin: 'Broad enterprise customer base.',
    },
    {
      name: 'Spire Weather',
      description: 'Weather data and forecasting services.',
      whyTheyWin: 'Satellite data advantage.',
    },
    {
      name: 'Google DeepMind Weather',
      description: 'AI weather forecasting research.',
      whyTheyWin: 'Massive research resources.',
    },
  ],
  marketPosition: 'Physics-based AI weather prediction for enterprise use cases.',
  moat: [
    'AI physics model focus',
    'Enterprise-grade forecasting use cases',
    'Potentially defensible data + model IP',
  ],
  vsGiants: 'Competes by focusing on specialized physics models for operational forecasting.',

  // AI-native analysis
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI is the core product: physics-based weather models.',
  aiDesignChallenges: [
    'Communicating uncertainty in forecasts',
    'Designing trust in probabilistic predictions',
    'Making model outputs actionable for operators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dar Mehta',
      role: 'Co-founder & CEO',
      background: 'Former Cruise ML engineer; co-founded Causal Labs to build AI physics models for weather prediction and control.',
    },
    {
      name: 'Yue Kelsie Zhao',
      role: 'Co-founder & CTO',
      background: 'Former Cruise ML engineer; technical co-founder building Large Physics foundation Models (LPMs) for atmospheric simulation.',
    },
  ],
  whyBuilding: 'Traditional weather forecasting is limited; physics-based AI can improve accuracy.',
  beliefs: [
    'AI can improve climate forecasting',
    'Operational decisions need better prediction tools',
    'Uncertainty must be communicated clearly',
  ],
  greenFlags: [
    'Clear technical differentiation',
    'Climate risk is a growing enterprise priority',
  ],
  redFlags: [
    'Long enterprise sales cycles',
    'High R&D costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Forecast interpretation flows', 'Decision-support logic'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Model performance dashboards', 'Calibration metrics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Forecast visualization tools', 'Operator workflows'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Enterprises with weather-sensitive operations',
    secondary: 'Climate risk and analytics teams',
  },
  userProblems: [
    'Weather predictions lack actionable precision',
    'Operational decisions need confidence ranges',
    'Current tools are hard to integrate into workflows',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['High-stakes data visualization', 'AI-native product'],
    whyNot: ['Deep technical domain', 'Enterprise-heavy sales'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Seed-stage climate AI startup'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Enterprise weather prediction market remains early-stage.',
    tailwinds: ['Climate risk focus', 'AI adoption in forecasting'],
    headwinds: ['R&D costs', 'Enterprise procurement timelines'],
    moatType: 'technology',
    moatStrength: 'Physics-based AI models with specialized focus.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:40:00',
  sources: [
    { title: 'Source', url: 'https://www.getcausal.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/causal-labs' }
  ],
};
