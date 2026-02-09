import { Company } from '../types';

export const interaction: Company = {
  id: 'interaction',
  name: 'InteraXon',
  description: 'Neurotechnology company behind Muse, a brain-sensing wearable for meditation and mental wellness.',
  website: 'https://choosemuse.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2c', 'prosumer'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$28.8M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Consumers and wellness practitioners using Muse neurofeedback devices',

  // Competition
  competitors: [
    {
      name: 'Oura',
      description: 'Wearable health ring with sleep and recovery insights.',
      whyTheyWin: 'Large consumer adoption and strong brand.',
    },
    {
      name: 'Whoop',
      description: 'Wearable health and performance tracking platform.',
      whyTheyWin: 'Subscription model and strong athlete community.',
    },
    {
      name: 'Emotiv',
      description: 'EEG headset for brain-computer interface and research use cases.',
      whyTheyWin: 'Research-focused EEG ecosystem.',
    },
  ],
  marketPosition: 'Consumer neurotech wearables focused on meditation and brain-sensing insights.',
  moat: ['Muse EEG device ecosystem', 'Brand recognition in consumer neurofeedback'],
  vsGiants: 'Differentiates with brain-sensing focus rather than general health metrics.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports signal processing and personalized neurofeedback insights.',
  aiDesignChallenges: [
    'Communicating brain signal insights in accessible language',
    'Designing calm, trust-building wellness experiences',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ariel Garten',
      role: 'Co-founder',
      background: 'Co-founded InteraXon and helped bring Muse to market.',
    },
    {
      name: 'Trevor Coleman',
      role: 'Co-founder',
      background: 'Co-founded InteraXon and led product and business operations.',
    },
    {
      name: 'Chris Aimone',
      role: 'Co-founder',
      background: 'Co-founded InteraXon and led neuroscience and signal processing strategy.',
    },
  ],
  whyBuilding: 'Make brain health and mental wellness measurable and accessible.',
  beliefs: ['Neurofeedback can improve wellbeing', 'Wearables should provide actionable mental health insights'],
  greenFlags: ['Strong consumer brand in neurotech', 'Clear wellness use case'],
  redFlags: ['Hardware-heavy consumer business'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Neurofeedback logic and personalization UX'] },
    evaluation: { level: 'medium', tasks: ['Signal quality and session feedback UX'] },
    interface: { level: 'high', tasks: ['Consumer mobile app and device onboarding UX'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Meditation and wellness consumers',
    secondary: 'Clinics and coaches using neurofeedback tools',
  },
  userProblems: [
    'Meditation progress is hard to measure objectively',
    'Consumers want clear feedback on mental wellness practices',
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
    whyJoin: ['Consumer wellness UX and neurofeedback product challenges'],
    whyNot: ['Hardware lifecycle complexity'],
    nextActions: ['Verify current Muse product roadmap and hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$28.8M total funding (Seedtable)'],
    tam: 'Wearable wellness and neurofeedback market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into clinical neurofeedback and mental health services',
    tailwinds: ['Consumer interest in brain health and mental wellness'],
    headwinds: ['Wearables market is crowded'],
    moatType: 'brand',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:10:00',
  sources: [
    { title: 'Source', url: 'https://choosemuse.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
