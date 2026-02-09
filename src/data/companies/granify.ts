import { Company } from '../types';

export const granify: Company = {
  id: 'granify',
  name: 'Granify',
  description: 'AI personalization platform for e-commerce retailers that optimizes conversion and search experiences.',
  website: 'https://granify.com',
  headquarters: 'Edmonton, AB, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$12.6M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise retailers and e-commerce teams seeking conversion optimization',

  // Competition
  competitors: [
    {
      name: 'Dynamic Yield',
      description: 'Personalization platform for e-commerce and digital experiences.',
      whyTheyWin: 'Global enterprise adoption and personalization depth.',
    },
    {
      name: 'Nosto',
      description: 'E-commerce personalization and merchandising platform.',
      whyTheyWin: 'Broad retail customer base and integrations.',
    },
    {
      name: 'Bloomreach',
      description: 'Commerce experience platform with personalization and search.',
      whyTheyWin: 'Integrated commerce search + personalization suite.',
    },
  ],
  marketPosition: 'AI-driven e-commerce personalization focused on conversion and search optimization.',
  moat: ['Behavioral data-driven personalization for retail', 'Search and product spotlight optimization'],
  vsGiants: 'Differentiates with ML-driven conversion optimization rather than full commerce platform.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI powers personalization and conversion optimization workflows.',
  aiDesignChallenges: [
    'Designing trust in personalization recommendations',
    'Balancing merchant control with automated optimization',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jeff Lawrence',
      role: 'Founder & CEO',
      background: 'Founded Granify to apply machine learning to e-commerce personalization.',
    },
  ],
  whyBuilding: 'Increase e-commerce conversion rates with AI personalization.',
  beliefs: ['Personalization improves revenue outcomes', 'AI can automate optimization at scale'],
  greenFlags: ['Clear e-commerce personalization niche'],
  redFlags: ['Retail market cycles and competition'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Personalization rules and triggers UX'] },
    evaluation: { level: 'medium', tasks: ['Experiment analysis and uplift tracking'] },
    interface: { level: 'medium', tasks: ['Retail personalization dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'E-commerce growth and merchandising teams',
    secondary: 'Digital marketing teams optimizing conversion',
  },
  userProblems: [
    'Retailers struggle to personalize at scale',
    'Conversion optimization requires constant experimentation',
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
    whyJoin: ['E-commerce personalization UX challenges'],
    whyNot: ['Competitive personalization platforms'],
    nextActions: ['Track design hiring and product updates'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$12.6M total funding (Seedtable)'],
    tam: 'E-commerce personalization and conversion optimization market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into broader commerce optimization suite',
    tailwinds: ['Retail demand for conversion optimization'],
    headwinds: ['Competition from larger commerce platforms'],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:45:00',
  sources: [
    { title: 'Source', url: 'https://granify.com' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20220811005718/en/Granify-Now-Personalizing-Search-Results' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
