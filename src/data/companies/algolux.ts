import { Company } from '../types';

export const algolux: Company = {
  id: 'algolux',
  name: 'Algolux',
  description: 'Computer vision company developing perception software for autonomous and imaging systems.',
  website: 'https://algolux.com',
  headquarters: 'Montreal, QC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$38.3M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Autonomous vehicle and industrial imaging teams',

  // Competition
  competitors: [
    {
      name: 'Mobileye',
      description: 'Autonomous driving perception and ADAS platform.',
      whyTheyWin: 'Large automotive partnerships and production deployments.',
    },
    {
      name: 'Aurora',
      description: 'Self-driving technology platform.',
      whyTheyWin: 'Capital scale and OEM partnerships.',
    },
    {
      name: 'Luminar',
      description: 'Autonomous sensing and perception platform.',
      whyTheyWin: 'Hardware + software integration for perception.',
    },
  ],
  marketPosition: 'Perception software for autonomous and imaging systems using advanced AI.',
  moat: ['Perception algorithms for imaging and autonomy'],
  vsGiants: 'Differentiates with perception software focus rather than full autonomy stacks.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI perception is core to the product.',
  aiDesignChallenges: [
    'Designing validation workflows for perception accuracy',
    'Communicating confidence and edge cases to operators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Allan Benchetrit',
      role: 'Co-founder',
      background: 'Co-founded Algolux to build perception software for autonomous systems.',
    },
    {
      name: 'Felix Heide',
      role: 'Co-founder',
      background: 'Co-founded Algolux and led vision research programs.',
    },
  ],
  whyBuilding: 'Enable reliable machine vision for autonomy and imaging systems.',
  beliefs: ['Perception is a core bottleneck for autonomy', 'AI vision should be robust and explainable'],
  greenFlags: ['Clear autonomy/perception niche'],
  redFlags: ['Capital-intensive autonomous systems market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Perception QA and monitoring UX'] },
    evaluation: { level: 'medium', tasks: ['Model performance and failure analysis'] },
    interface: { level: 'medium', tasks: ['Operator tools and analytics dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Autonomous vehicle and robotics teams',
    secondary: 'Industrial imaging engineers',
  },
  userProblems: [
    'Perception systems are hard to validate and debug',
    'AI vision reliability needs clear monitoring and QA',
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
    whyJoin: ['Perception QA and validation UX'],
    whyNot: ['Autonomy market volatility'],
    nextActions: ['Verify current partnerships and product roadmap'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$38.3M total funding (Seedtable)'],
    tam: 'Autonomous perception and imaging software market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can become core perception layer for autonomy platforms',
    tailwinds: ['Autonomy and robotics adoption'],
    headwinds: ['Long commercialization timelines'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T21:00:00',
  sources: [
    { title: 'Algolux', url: 'https://algolux.com' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
