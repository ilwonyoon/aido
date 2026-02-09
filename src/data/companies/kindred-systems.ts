import { Company } from '../types';

export const kindredSystems: Company = {
  id: 'kindred-systems',
  name: 'Kindred Systems',
  description: 'AI-powered robotics company building piece-picking systems for e-commerce and fulfillment operations.',
  website: 'https://kindred.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Acquired',
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'E-commerce and logistics operators using robotic pick-and-pack',

  // Competition
  competitors: [
    {
      name: 'RightHand Robotics',
      description: 'Robotic piece-picking systems for warehouse automation.',
      whyTheyWin: 'Focus on flexible picking hardware and software stack.',
    },
    {
      name: 'Covariant',
      description: 'AI robotics for warehouse automation and item picking.',
      whyTheyWin: 'Large model-driven robotics platform and enterprise scale.',
    },
    {
      name: 'Berkshire Grey',
      description: 'Robotic fulfillment solutions for warehouses and logistics.',
      whyTheyWin: 'Public company scale and large deployments.',
    },
  ],
  marketPosition: 'Advanced robotic picking for warehouse automation and e-commerce fulfillment.',
  moat: [
    'Robotic picking platform proven in logistics environments',
    'AI-driven perception and manipulation capabilities',
  ],
  vsGiants: 'Differentiated by focused robotic picking systems and warehouse deployment experience.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to perception and robotic manipulation behavior.',
  aiDesignChallenges: [
    'Designing operator trust and visibility for autonomous picking',
    'Balancing human oversight with robot autonomy in fulfillment workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Public founder details require verification from primary sources.',
    },
  ],
  whyBuilding: 'Automate complex warehouse picking tasks using AI and robotics.',
  beliefs: [
    'Robotic picking is a critical bottleneck in modern fulfillment',
    'AI vision + manipulation can unlock step-change productivity gains',
  ],
  greenFlags: ['Robotics acquisitions signal strategic value'],
  redFlags: ['Capital-intensive robotics deployments'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Robot behavior oversight dashboards', 'Exception handling workflows'] },
    evaluation: { level: 'medium', tasks: ['Performance monitoring and QA for pick accuracy'] },
    interface: { level: 'medium', tasks: ['Operator control panels and analytics views'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Warehouse operations teams',
    secondary: 'E-commerce fulfillment leaders',
  },
  userProblems: [
    'Manual picking is costly and error-prone at scale',
    'Labor shortages make fulfillment reliability harder',
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
    whyJoin: ['Robotics UX + human/AI collaboration challenges'],
    whyNot: ['Acquired status may reduce independent growth'],
    nextActions: ['Verify founder details and acquisition context'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Acquired by Ocado in 2020'],
    tam: 'Large warehouse automation and logistics robotics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Acquisition integrates robotics into broader fulfillment platforms',
    tailwinds: ['E-commerce automation demand', 'Warehouse labor constraints'],
    headwinds: ['Hardware deployment complexity'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:35:00',
  sources: [
    { title: 'Source', url: 'https://www.ocadogroup.com/newsroom/ocado-acquires-kindred-systems-and-haddington-dynamics' },
    { title: 'Source', url: 'https://www.cnbc.com/2020/11/02/ocado-acquires-kindred-systems-haddington-dynamics-robotics.html' }
  ],
};
