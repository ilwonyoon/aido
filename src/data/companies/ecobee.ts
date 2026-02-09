import { Company } from '../types';

export const ecobee: Company = {
  id: 'ecobee',
  name: 'ecobee',
  description:
    'Smart home company that builds connected thermostats, sensors, and related devices focused on energy efficiency and comfort.',
  website: 'https://www.ecobee.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2c', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Acquired (Generac)',
  valuation: '$770M (Nov 2021 acquisition)',
  totalFunding: '$146M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$61M',
      date: '2018-03',
      leadInvestors: ['Energy Impact Partners', 'Amazon Alexa Fund', 'Thomvest', 'Relay Ventures'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '2M+ connected homes',

  // Competition
  competitors: [
    {
      name: 'Google Nest',
      description: 'Smart thermostat platform tied to the Google Home ecosystem.',
      whyTheyWin: 'Strong brand recognition and smart home ecosystem integration.',
    },
    {
      name: 'Honeywell Home',
      description: 'Legacy HVAC brand offering smart thermostats and controls.',
      whyTheyWin: 'Broad HVAC channel relationships and installer distribution.',
    },
    {
      name: 'Emerson Sensi',
      description: 'Smart thermostat line from Emerson focused on app-based control.',
      whyTheyWin: 'Well-known HVAC brand with ENERGY STAR-certified devices.',
    },
  ],
  marketPosition: 'Smart thermostat and home energy management platform for residential customers and utility programs.',
  moat: [
    'Large installed base of connected homes that generates energy-saving data insights',
    'Deep integrations with major smart home ecosystems and HVAC systems',
    'Proven energy savings impact used in utility and sustainability programs',
  ],
  vsGiants: 'Competes with Google Nest and other legacy HVAC brands by emphasizing energy savings, room sensing, and cross-platform smart home compatibility.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI optimizes comfort and energy usage, but the core product remains a connected hardware thermostat and sensors.',
  aiDesignChallenges: [
    'Balancing automation with user trust and manual overrides',
    'Communicating energy savings clearly in everyday language',
    'Designing setup flows that reduce HVAC installation errors',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Stuart Lombard',
      role: 'Founder & CEO',
      background: 'Founded ecobee in 2007 to deliver smarter home energy management.',
    },
    {
      name: 'Mark Malchiondo',
      role: 'Co-founder',
      background: 'Co-founded ecobee and helped develop the early smart thermostat platform.',
    },
    {
      name: 'John Metselaar',
      role: 'Co-founder',
      background: 'Co-founded ecobee and led hardware engineering efforts.',
    },
  ],
  whyBuilding:
    'ecobee was founded to make home energy use more efficient while improving comfort through smart automation.',
  beliefs: [
    'Home energy efficiency should be accessible and easy to use',
    'Smart automation must respect user comfort and control',
    'Connected devices can drive meaningful sustainability outcomes',
  ],
  greenFlags: ['Acquired by Generac to scale home energy ecosystem', 'Large connected-home footprint'],
  redFlags: ['Hardware margins are pressured in consumer smart home', 'Competes with large platform ecosystems'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Automation logic for schedules and occupancy-based control',
        'Energy-saving recommendation rules',
        'Safety and reliability flows for HVAC control',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Energy savings reporting and benchmarking',
        'Device reliability monitoring',
        'User feedback loops for comfort calibration',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Thermostat UI and mobile app design',
        'Onboarding and installation guidance',
        'Multi-device and smart home ecosystem management',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Homeowners and renters seeking energy savings and comfort',
    secondary: 'Utilities and smart home program partners',
  },
  userProblems: [
    'Heating and cooling costs are unpredictable and often too high',
    'Smart thermostat setup can be complex for non-technical users',
    'Room-by-room comfort is difficult to maintain in larger homes',
    'Users want savings without sacrificing comfort or control',
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
    whyJoin: ['Consumer hardware + AI automation challenges', 'Sustainability impact via energy savings'],
    whyNot: ['Hardware business cycles', 'Competitive smart home market'],
    nextActions: ['Track Generac product roadmap integration', 'Monitor design hiring'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.ecobee.com/en-ca/about/' },
    { title: 'Source', url: 'https://www.ecobee.com/en-ca/careers/' },
    { title: 'Source', url: 'https://www.ecobee.com/en-ca/contact/' },
    { title: 'Source', url: 'https://investors.generac.com/news-releases/news-release-details/generac-acquire-ecobee-inc' },
    { title: 'Source', url: 'https://techcrunch.com/2018/03/07/ecobee-scores-a-61-million-series-c-with-help-from-amazon/' },
    { title: 'Source', url: 'https://www.cnbc.com/2018/03/06/amazon-alexa-fund-and-energy-impact-partners-invested-in-ecobee.html' },
    { title: 'Source', url: 'https://www.theverge.com/2025/1/6/24335022/ecobee-essential-thermostat-price-ces-2025' },
    { title: 'Source', url: 'https://www.energystar.gov/productfinder/product/certified-connected-thermostats/details/2380652' }
  ],
};
