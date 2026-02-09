import { Company } from '../types';

export const terramera: Company = {
  id: 'terramera',
  name: 'Terramera',
  description:
    'Agtech company using AI-driven crop protection and plant science to deliver sustainable agricultural products.',
  website: 'https://www.terramera.com',
  headquarters: 'Vancouver, BC, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$82M+',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Agricultural producers and crop-input partners focused on sustainable crop protection.',

  // Competition
  competitors: [
    {
      name: 'Indigo Ag',
      description: 'Agtech platform offering biological crop products and data analytics.',
      whyTheyWin: 'Large-scale agricultural data network.',
    },
    {
      name: 'Pivot Bio',
      description: 'Microbial crop nutrition products for sustainable agriculture.',
      whyTheyWin: 'Strong product-market fit in crop nutrition.',
    },
    {
      name: 'Bayer Crop Science',
      description: 'Global crop protection and agriculture solutions leader.',
      whyTheyWin: 'Scale, distribution, and R&D investment.',
    },
  ],
  marketPosition: 'AI-powered crop protection and plant science platform for sustainable agriculture.',
  moat: [
    'AI-driven formulation and efficacy optimization',
    'Proprietary plant science IP and data',
    'Sustainable crop protection positioning',
  ],
  vsGiants: 'Competes by pairing AI-driven R&D with sustainable crop products versus traditional chemistry-only approaches.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to product efficacy modeling and crop protection development.',
  aiDesignChallenges: [
    'Explaining AI-driven efficacy to growers and partners',
    'Integrating field data into product performance insights',
    'Balancing scientific rigor with usable agronomy dashboards',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Karn Manhas',
      role: 'Founder & CEO',
      background: 'Founded Terramera to bring sustainable crop protection to global agriculture.',
    },
  ],
  whyBuilding:
    'Help agriculture transition to sustainable crop protection with AI-driven plant science.',
  beliefs: [
    'Sustainable agriculture must scale globally',
    'AI can accelerate product discovery and efficacy',
    'Grower trust depends on measurable outcomes',
  ],
  greenFlags: ['Large market need for sustainable inputs', 'Strong R&D focus and IP'],
  redFlags: ['Long commercialization cycles', 'Regulatory and adoption hurdles'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Field trial workflow logic',
        'Data ingestion and validation rules',
        'AI-driven recommendations for agronomists',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Performance analytics for crop treatments',
        'Efficacy reporting for partners',
        'Model validation and outcome review',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agronomy dashboards for field data',
        'Product performance reporting UI',
        'Partner collaboration portals',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Agricultural producers and agronomy teams',
    secondary: 'Crop input partners and sustainability leaders',
  },
  userProblems: [
    'Growers need sustainable crop protection that performs reliably',
    'Field trial data is hard to synthesize into actionable insights',
    'Legacy crop protection relies on chemistry with environmental tradeoffs',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['AI-driven sustainability mission', 'Complex agronomy data UX'],
    whyNot: ['Long product validation cycles', 'Regulatory complexity'],
    nextActions: ['Track funding updates', 'Monitor product launches and hiring'],
  },

  // Meta
  lastUpdated: '2026-02-06T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.terramera.com' },
    { title: 'Source', url: 'https://www.terramera.com/team' },
    { title: 'Source', url: 'https://www.bdc.ca/en/about/mediaroom/news-releases/bdc-invests-10-million-terramera-sustainable-ag' }
  ],
};
