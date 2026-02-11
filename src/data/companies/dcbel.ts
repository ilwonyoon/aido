import { Company } from '../types';

export const dcbel: Company = {
  id: 'dcbel',
  name: 'dcbel',
  description:
    'Home energy platform that combines bidirectional EV charging, solar, and battery management with AI-powered energy optimization.',
  website: 'https://www.dcbel.energy',
  headquarters: 'Montreal, QC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2c', 'prosumer'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$50M+',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$50M+',
      date: '2023-08',
      leadInvestors: ['Idealist Capital', 'Volvo Cars Tech Fund', 'Coatue', 'Real Ventures'],
    },
  ],

  // Competition
  competitors: [
    {
      name: 'Wallbox',
      description: 'Bidirectional EV charging and energy management solutions.',
      whyTheyWin: 'Early mover advantage and broad EV charging portfolio.',
    },
    {
      name: 'Enphase',
      description: 'Home energy management and solar + storage systems.',
      whyTheyWin: 'Large installed base and strong inverter ecosystem.',
    },
    {
      name: 'Fermata Energy',
      description: 'Vehicle-to-grid and bidirectional charging platform.',
      whyTheyWin: 'Utility partnerships and V2G deployment experience.',
    },
  ],
  marketPosition:
    'Consumer-focused home energy ecosystem integrating EV charging, solar, and storage with AI optimization.',
  moat: [
    'Integrated hardware + software stack for home energy management',
    'AI optimization across EV, solar, and battery systems',
    'Partnerships with automotive and energy ecosystem players',
  ],
  vsGiants:
    'Competes by delivering a fully integrated home energy station rather than standalone chargers.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to optimizing energy flows between EVs, solar, and the home grid.',
  aiDesignChallenges: [
    'Designing control experiences for bidirectional energy flows',
    'Building trust in automated energy optimization decisions',
    'Balancing real-time control with long-term savings goals',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Marc-Andre Forget',
      role: 'Co-founder & CEO',
      background:
        'Co-founded dcbel to build intelligent home energy systems that integrate EV charging, solar, and storage.',
    },
  ],
  whyBuilding:
    'dcbel is building a smarter home energy ecosystem so consumers can generate, store, and optimize their own power.',
  beliefs: [
    'Home energy systems should be intelligent and automated',
    'Bidirectional EV charging will be a core part of the grid',
    'Consumers need simple tools to manage complex energy flows',
  ],
  greenFlags: [
    'Series B funding with strategic energy and automotive investors',
    'Clear product-market fit in electrification and home energy trends',
  ],
  redFlags: ['Hardware execution risk and long product cycles'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Energy routing logic between EV, solar, and home loads',
        'Automation rules for peak/off-peak optimization',
        'Fail-safe and manual override design',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Monitoring energy savings and cost impact',
        'Testing AI optimization quality in diverse home setups',
        'Feedback loops for autonomous energy control',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Home energy dashboards for consumers',
        'Mobile app design for real-time control',
        'Visualization of energy flows and savings',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Homeowners with EVs and solar installations',
    secondary: 'Energy-conscious consumers managing household energy costs',
  },
  userProblems: [
    'Difficulty coordinating EV charging with solar and home energy use',
    'Lack of visibility into energy costs and savings opportunities',
    'Manual scheduling required to optimize energy usage',
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
    whyJoin: ['Energy transition mission', 'Complex multi-device UX challenges'],
    whyNot: ['Hardware-dependent scaling and regulatory complexity'],
    nextActions: ['Monitor product launches and hiring updates'],
  },

  // Meta
  lastUpdated: '2026-02-11T14:30:00',
  sources: [
    { title: 'dcbel - About', url: 'https://www.dcbel.energy/about' },
    { title: 'dcbel Series B Funding (dcbel Blog)', url: 'https://www.dcbel.energy/blog/dcbel-closes-series-b-at-50m-with-involvement-of-idealist-capital-volvo-cars-tech-fund-and-others' },
    { title: 'dcbel Additional Investment (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/dcbel-secures-investment-from-fidelity-private-shares-and-amazon-alexa-fund-302370227.html' },
    { title: 'dcbel Company Profile (Crunchbase)', url: 'https://www.crunchbase.com/organization/dcbel' },
  ],
};
