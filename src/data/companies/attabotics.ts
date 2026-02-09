import { Company } from '../types';

export const attabotics: Company = {
  id: 'attabotics',
  name: 'Attabotics',
  description:
    'Robotics and software platform for automated storage and retrieval systems that modernizes fulfillment centers with vertical warehouse technology.',
  website: 'https://attabotics.com',
  headquarters: 'Calgary, AB, Canada',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Series C',
  valuation: 'Not publicly disclosed',
  totalFunding: 'US$165M+',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$71.7M',
      date: '2022-11',
      leadInvestors: ['Export Development Canada'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Major retailers across apparel, food & beverage, and home goods sectors',

  // Competition
  competitors: [
    {
      name: 'Daifuku',
      description: 'Global automated storage and retrieval systems (ASRS) provider.',
      whyTheyWin: 'Scale, global footprint, and long-standing logistics automation expertise.',
    },
    {
      name: 'Swisslog',
      description: 'Warehouse automation and robotics solutions for distribution centers.',
      whyTheyWin: 'Broad automation portfolio and deep integration capabilities.',
    },
    {
      name: 'Dematic',
      description: 'Supply chain automation provider for warehouses and fulfillment centers.',
      whyTheyWin: 'Large enterprise customer base and integrated material handling systems.',
    },
  ],
  marketPosition: 'Vertical robotics-based ASRS platform aimed at retrofitting and modernizing legacy fulfillment centers.',
  moat: [
    'Patented vertical storage architecture for dense urban fulfillment',
    'Integrated hardware + software stack optimized for warehouse retrofits',
    'Strong capital backing to scale robotics manufacturing and deployments',
  ],
  vsGiants:
    'Competes by focusing on retrofit-friendly vertical systems rather than greenfield mega-warehouse automation from global incumbents.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'Automation and data-driven optimization are core to Attabotics’ fulfillment robotics platform.',
  aiDesignChallenges: [
    'Visualizing real-time warehouse throughput and robot status',
    'Designing exception handling for automated storage and retrieval flows',
    'Balancing operator control with autonomous system optimization',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Scott Gravelle',
      role: 'Founder & CEO',
      background: 'Entrepreneur and engineer leading Attabotics’ warehouse robotics platform.',
    },
  ],
  whyBuilding:
    'Founded to reinvent warehouse fulfillment by using vertical robotics to modernize legacy distribution centers.',
  beliefs: [
    'Fulfillment efficiency depends on dense, automated storage systems',
    'Retrofitting existing warehouses is faster than building new mega-sites',
    'Automation must integrate seamlessly with human operators',
  ],
  greenFlags: ['$165M+ funding and government-backed support', 'Clear focus on warehouse modernization pain points'],
  redFlags: ['Hardware-heavy deployments require long sales cycles', 'Capital-intensive scaling and manufacturing risk'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Robotic task orchestration and exception workflows',
        'Inventory routing and slotting optimization logic',
        'Operational safeguards for warehouse automation',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Performance monitoring for throughput and system uptime',
        'Root-cause analysis for automation bottlenecks',
        'Operator feedback loops for workflow optimization',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Control room dashboards for fulfillment operators',
        'Incident management and alerting interfaces',
        'Reporting tools for warehouse leadership',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise logistics and warehouse operations teams',
    secondary: 'Supply chain leadership and automation engineering teams',
  },
  userProblems: [
    'Legacy fulfillment centers struggle to meet modern throughput demands',
    'Warehouse retrofits are expensive and disruptive to operations',
    'Operators need real-time visibility into automation performance',
    'Capital projects require clear ROI and deployment predictability',
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
    fitScore: 5,
    whyJoin: ['Robotics + industrial UX challenges', 'Impact on supply chain modernization'],
    whyNot: ['Hardware deployment complexity', 'Long enterprise procurement cycles'],
    nextActions: ['Track automation partnerships and customer deployments', 'Monitor hiring signals'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://attabotics.com/about-us/' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20221115005757/en/Attabotics-Secures-%2471.7-Million-USD-to-Revolutionize-Legacy-Fulfillment-Centers' },
    { title: 'Source', url: 'https://www.cnbc.com/2022/11/15/robotics-supply-chain-company-attabotics-raises-71-million.html' },
    { title: 'Source', url: 'https://attabotics.com/careers/' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/global-automated-storage--retrieval-system-asrs-market-to-2024-led-by-daifuku-murata-machinery-ssi-schaefer-tgw-logistics-group-and-kardex-group-300848015.html' }
  ],
};
