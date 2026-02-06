import { Company } from '../types';

export const cerebriAi: Company = {
  id: 'cerebri-ai',
  name: 'Cerebri AI',
  description: 'Enterprise AI decision intelligence platform focused on customer and revenue optimization use cases.',
  website: 'https://cerebriai.com',
  headquarters: 'Austin, TX',
  remote: 'Unknown',

  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$16.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise teams optimizing customer lifetime value and retention',

  competitors: [
    {
      name: 'Hightouch',
      description: 'Data activation platform for customer and growth teams.',
      whyTheyWin: 'Strong warehouse-native activation ecosystem.',
    },
    {
      name: 'Amplitude',
      description: 'Product analytics and experimentation platform.',
      whyTheyWin: 'Large analytics footprint and strong product tooling.',
    },
    {
      name: 'Pega',
      description: 'Enterprise decisioning and workflow automation platform.',
      whyTheyWin: 'Enterprise relationships and broad platform suite.',
    },
  ],
  marketPosition: 'AI decision intelligence layer for enterprise revenue and customer workflows.',
  moat: ['Enterprise decisioning workflows', 'Customer data modeling and optimization'],
  vsGiants: 'Differentiates with focused decision intelligence for business outcomes.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is used to drive predictive recommendations and optimization decisions.',
  aiDesignChallenges: [
    'Designing trust in recommendations tied to revenue outcomes',
    'Communicating model impact and confidence clearly',
  ],

  founders: [
    {
      name: 'Thejas Prasad',
      role: 'Co-founder',
      background: 'Co-founded Cerebri AI and focused on AI decisioning for enterprise use cases.',
    },
    {
      name: 'Jean Belanger',
      role: 'Co-founder',
      background: 'Co-founded Cerebri AI and led enterprise platform strategy.',
    },
  ],
  whyBuilding: 'Help enterprises make better customer and revenue decisions with AI.',
  beliefs: ['Enterprise decisions should be data-driven', 'AI recommendations must be explainable and actionable'],
  greenFlags: ['Clear enterprise decisioning use case'],
  redFlags: ['Competitive enterprise analytics landscape'],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Recommendation logic UX', 'Decision workflow design'] },
    evaluation: { level: 'medium', tasks: ['Outcome measurement and attribution UX'] },
    interface: { level: 'medium', tasks: ['Enterprise analytics dashboards'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Enterprise analytics and growth teams',
    secondary: 'Marketing and revenue operations teams',
  },
  userProblems: [
    'Teams struggle to connect data insights to business decisions',
    'Decision quality is inconsistent without predictive guidance',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Decision intelligence UX and analytics design challenges'],
    whyNot: ['Crowded B2B analytics category'],
    nextActions: ['Check for current product design and analytics UX roles'],
  },

  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$16.5M total funding (Seedtable)'],
    tam: 'Enterprise decision intelligence and analytics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader enterprise AI operating layer',
    tailwinds: ['Demand for ROI-linked AI decisions'],
    headwinds: ['Competition from incumbent analytics suites'],
    moatType: 'vertical-specialization',
    moatStrength: 'Unknown',
  },

  lastUpdated: '2026-02-04T21:35:00',
  sources: [
    { title: 'Cerebri AI', url: 'https://cerebriai.com' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
