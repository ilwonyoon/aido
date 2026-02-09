import { Company } from '../types';

export const subbyx: Company = {
    id: 'subbyx',
    name: 'Subbyx',
    description: 'AI platform for tech product subscription management and circular economy based in Italy.',
    website: 'https://subbyx.com',
    headquarters: 'Milan, Italy',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2c'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['other'],
    stage: 'Early-Stage',
  totalFunding: '\u20AC20M Total (Seed + Pre-seed)',
    valuation: 'Unknown',
    growth: 'High (Expanding retail partnerships to 450+)',
  competitors: [
    { name: 'Zuora', description: 'Enterprise subscription management and billing platform.', whyTheyWin: 'Market leader in subscription billing with deep enterprise integrations.' },
    { name: 'Recurly', description: 'Subscription billing and revenue management platform.', whyTheyWin: 'Strong mid-market presence with flexible billing engine.' },
    { name: 'Chargebee', description: 'Subscription billing and revenue operations platform.', whyTheyWin: 'Comprehensive subscription lifecycle management with global payment support.' },
  ],
  moat: [
    'AI-powered device matching based on user lifestyle and budget analysis',
    'Circular economy model combining subscription with refurbished device marketplace',
    'Network of 450+ retail partnerships across European markets',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Unknown', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Providing personalized tech product subscription experiences through AI and promoting sustainable consumption.',
    beliefs: [
            'In an era where usage and experience matter more than ownership, subscriptions will become the standard for tech product consumption.',
            'AI should serve as a curator, matching the right product from vast refurbished inventory to each user\'s exact needs.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'UX for the AI assistant (Subl!me) that analyzes user lifestyle and budget to recommend optimal devices and plans.',
            'Transparent information presentation and certification design to build trust in refurbished products.',
        ],
    userProblems: [
            'Burden of high upfront costs for using the latest electronics.',
            'Uncertainty about quality and complex management when purchasing used devices.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Sustainability, Flexible Consumption. Benefits: Leading circular economy business in the European market, opportunity to build O2O services combining AI and retail operations.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI device recommendation engine based on lifestyle and budget inputs', 'Subscription lifecycle management logic (upgrades, swaps, returns)'] },
    evaluation: { level: 'medium', tasks: ['Device recommendation accuracy and user satisfaction metrics', 'Subscription retention and churn analysis dashboards'] },
    interface: { level: 'medium', tasks: ['Consumer-facing subscription browsing and AI assistant interface', 'Retail partner portal for inventory and subscription fulfillment'] },
  },

  designerLinks: [],
  openRoles: [],

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [],
    whyNot: [],
    nextActions: [],
  },

  lastUpdated: '2026-02-09T18:12:58.343Z',
  sources: [
    { title: 'Source', url: 'https://subbyx.com' },
    { title: 'Source', url: 'https://startupitalia.eu/subbyx-investment-round' }
  ],
};
