import { Company } from '../types';

export const leddartech: Company = {
  id: 'leddartech',
  name: 'LeddarTech',
  description: 'Automotive sensing and perception software company focused on ADAS and autonomous mobility.',
  website: 'https://leddartech.com',
  headquarters: 'Quebec, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$344.0M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Automotive OEMs and Tier-1 suppliers for ADAS and autonomy',

  // Competition
  competitors: [
    {
      name: 'Mobileye',
      description: 'ADAS and autonomous driving perception platform.',
      whyTheyWin: 'Large OEM partnerships and production deployments.',
    },
    {
      name: 'Luminar',
      description: 'Autonomous sensing and perception platform.',
      whyTheyWin: 'Hardware + software integration.',
    },
    {
      name: 'Velodyne',
      description: 'Lidar and perception platform for autonomous systems.',
      whyTheyWin: 'Established lidar footprint in autonomy.',
    },
  ],
  marketPosition: 'Automotive sensing and perception software for ADAS and autonomy.',
  moat: ['Perception software IP for automotive sensing', 'Deep partnerships with OEMs and Tier-1s'],
  vsGiants: 'Differentiates with software-driven perception stack rather than full vehicle autonomy suites.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI perception is core to automotive sensing and autonomy.',
  aiDesignChallenges: [
    'Designing validation and safety workflows for perception systems',
    'Communicating confidence and sensor fusion insights',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Yvan Mimeault',
      role: 'Founder',
      background: 'Founded LeddarTech to develop sensing and perception solutions for automotive systems.',
    },
  ],
  whyBuilding: 'Enable safer and smarter vehicles with advanced sensing and perception.',
  beliefs: ['Perception is foundational to autonomy', 'Sensor fusion is key to safe ADAS'],
  greenFlags: ['Large funding base', 'Strong automotive partnerships'],
  redFlags: ['Capital-intensive automotive market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Sensor fusion workflows', 'Safety monitoring UX'] },
    evaluation: { level: 'medium', tasks: ['Perception QA and validation dashboards'] },
    interface: { level: 'medium', tasks: ['Operator tools and analytics UIs'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Automotive perception and ADAS teams',
    secondary: 'Tier-1 suppliers integrating sensing stacks',
  },
  userProblems: [
    'Automotive perception validation is complex and expensive',
    'OEMs need reliable sensor fusion for safety compliance',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Autonomy safety UX and validation problems'],
    whyNot: ['Automotive program timelines are long'],
    nextActions: ['Track mobility platform hiring and partnerships'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$344.0M total funding (Seedtable)'],
    tam: 'Automotive sensing and ADAS market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to become core perception layer for automotive systems',
    tailwinds: ['ADAS adoption and safety regulation'],
    headwinds: ['Automotive OEM consolidation and long cycles'],
    moatType: 'technology',
    moatStrength: 'Strong',
  },

  // Meta
  lastUpdated: '2026-02-04T21:15:00',
  sources: [
    { title: 'Source', url: 'https://leddartech.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
