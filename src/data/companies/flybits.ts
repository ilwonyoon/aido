import { Company } from '../types';

export const flybits: Company = {
  id: 'flybits',
  name: 'Flybits',
  description: 'AI context platform for financial institutions to deliver personalized customer experiences.',
  website: 'https://flybits.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$41.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Banks and financial institutions optimizing customer engagement',

  // Competition
  competitors: [
    {
      name: 'Personetics',
      description: 'AI-driven personalization platform for banks.',
      whyTheyWin: 'Deep banking personalization footprint.',
    },
    {
      name: 'MX',
      description: 'Financial data platform with personalization layers.',
      whyTheyWin: 'Large fintech integration ecosystem.',
    },
    {
      name: 'Appier',
      description: 'AI marketing and personalization platform.',
      whyTheyWin: 'Broader marketing automation coverage.',
    },
  ],
  marketPosition: 'Contextual AI platform for banking personalization and engagement.',
  moat: ['Contextual data platform for financial services'],
  vsGiants: 'Differentiates with context intelligence specialized for banks.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports contextual personalization and engagement workflows.',
  aiDesignChallenges: [
    'Designing privacy-safe personalization UX',
    'Making context-driven AI recommendations explainable',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hossein Rahnama',
      role: 'Founder & CEO',
      background: 'Founded Flybits to bring context-aware AI personalization to financial services.',
    },
  ],
  whyBuilding: 'Enable financial institutions to deliver smarter, context-aware customer experiences.',
  beliefs: ['Personalization must respect privacy and trust', 'Context drives better customer engagement'],
  greenFlags: ['Strong fintech personalization niche'],
  redFlags: ['Long enterprise sales cycles in banking'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Context modeling UX', 'Personalization workflow design'] },
    evaluation: { level: 'medium', tasks: ['Engagement outcome analytics UX'] },
    interface: { level: 'medium', tasks: ['Banking personalization dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Retail banking product and CX teams',
    secondary: 'Digital banking transformation leaders',
  },
  userProblems: [
    'Banks struggle to personalize digital experiences safely',
    'Customer engagement is hard to optimize without contextual data',
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
    whyJoin: ['Fintech personalization UX challenges'],
    whyNot: ['Banking procurement complexity'],
    nextActions: ['Track design roles and partner announcements'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$41.5M total funding (Seedtable)'],
    tam: 'Financial services personalization and engagement market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into broader customer intelligence platform',
    tailwinds: ['Digital banking transformation'],
    headwinds: ['Bank compliance and slow procurement cycles'],
    moatType: 'vertical-specialization',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T20:30:00',
  sources: [
    { title: 'Source', url: 'https://flybits.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
