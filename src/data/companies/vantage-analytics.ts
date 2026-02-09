import { Company } from '../types';

export const vantageAnalytics: Company = {
  id: 'vantage-analytics',
  name: 'Vantage Analytics',
  description: 'Predictive analytics platform helping retail and growth teams optimize revenue decisions.',
  website: 'https://vantageanalytics.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$1.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Retail and growth teams using predictive analytics for revenue planning',

  competitors: [
    {
      name: 'Looker',
      description: 'Business intelligence platform for enterprise analytics.',
      whyTheyWin: 'Large ecosystem and data stack integrations.',
    },
    {
      name: 'Tableau',
      description: 'Data visualization and analytics platform.',
      whyTheyWin: 'Strong data visualization adoption.',
    },
    {
      name: 'Amplitude',
      description: 'Product analytics and growth platform.',
      whyTheyWin: 'Strong growth analytics and experimentation tooling.',
    },
  ],
  marketPosition: 'Predictive analytics layer for retail and growth optimization.',
  moat: ['Applied predictive analytics for commercial teams'],
  vsGiants: 'Differentiates with focused predictive revenue workflows for operators.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports forecasting and recommendation generation.',
  aiDesignChallenges: [
    'Designing forecast explainability',
    'Converting analytics output into actionable workflows',
  ],

  founders: [
    {
      name: 'Brandon Kane',
      role: 'Founder',
      background: 'Founded Vantage Analytics to deliver predictive analytics for growth teams.',
    },
    {
      name: 'Aran Hamilton',
      role: 'Co-founder',
      background: 'Co-founded Vantage Analytics and contributed to product strategy.',
    },
  ],
  whyBuilding: 'Enable teams to make better commercial decisions with predictive analytics.',
  beliefs: ['Predictive analytics should be usable by business operators'],
  greenFlags: ['Clear applied analytics use case'],
  redFlags: ['Early-stage and limited disclosed scale'],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Forecasting workflow UX'] },
    evaluation: { level: 'medium', tasks: ['Model performance and confidence displays'] },
    interface: { level: 'medium', tasks: ['Operator dashboards and reports'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Growth, revenue, and retail operations teams',
    secondary: 'Marketing analysts and business leaders',
  },
  userProblems: [
    'Teams make decisions with lagging, fragmented data',
    'Forecasting workflows are hard to operationalize',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Early predictive analytics product design challenges'],
    whyNot: ['Small funding base and unclear hiring signal'],
    nextActions: ['Verify current product momentum and team size'],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$1.1M total funding (Seedtable)'],
    tam: 'Predictive analytics and revenue intelligence market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader decision intelligence tooling',
    tailwinds: ['Growing demand for predictive planning'],
    headwinds: ['Competes with larger analytics platforms'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  lastUpdated: '2026-02-04T21:35:00',
  sources: [
    { title: 'Source', url: 'https://vantageanalytics.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
