import { Company } from '../types';

export const clearpathRobotics: Company = {
  id: 'clearpath-robotics',
  name: 'Clearpath Robotics',
  description: 'Autonomous robotics company building robot platforms and autonomy systems for industrial applications.',
  website: 'https://clearpathrobotics.com',
  headquarters: 'Kitchener, ON, Canada',
  remote: 'Unknown',

  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$79.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Industrial and logistics operators deploying autonomous robots',

  competitors: [
    {
      name: 'Boston Dynamics',
      description: 'Advanced robotics company for industrial and mobility applications.',
      whyTheyWin: 'Strong robotics brand and hardware innovation.',
    },
    {
      name: 'Locus Robotics',
      description: 'Warehouse autonomous mobile robots.',
      whyTheyWin: 'Large fulfillment deployments and logistics focus.',
    },
    {
      name: 'OTTO Motors',
      description: 'Autonomous material handling robots for industrial facilities.',
      whyTheyWin: 'Strong industrial AMR specialization.',
    },
  ],
  marketPosition: 'Industrial autonomy platform provider for robotics deployments.',
  moat: ['Robotics platform expertise', 'Autonomy stack for industrial environments'],
  vsGiants: 'Differentiates via industrial robotics specialization and deployment experience.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI autonomy and perception are central to robotics products.',
  aiDesignChallenges: [
    'Designing human-robot interaction for industrial workflows',
    'Building trust and control interfaces for autonomous systems',
  ],

  founders: [
    {
      name: 'Bryan Webb',
      role: 'Co-founder',
      background: 'Co-founded Clearpath Robotics and led early robotics platform development.',
    },
    {
      name: 'Matthew Rendall',
      role: 'Co-founder',
      background: 'Co-founded Clearpath Robotics and scaled autonomy product lines.',
    },
    {
      name: 'Patrick Martinson',
      role: 'Co-founder',
      background: 'Co-founded Clearpath Robotics with focus on robotics engineering and deployment.',
    },
  ],
  whyBuilding: 'Accelerate industrial automation with autonomous robotics platforms.',
  beliefs: ['Autonomous robots can improve safety and productivity', 'Industrial autonomy needs robust field operations'],
  greenFlags: ['Strong robotics category relevance'],
  redFlags: ['Hardware-heavy operational complexity'],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Autonomy behavior and operator control UX'] },
    evaluation: { level: 'medium', tasks: ['Fleet telemetry and safety evaluation workflows'] },
    interface: { level: 'medium', tasks: ['Robot fleet dashboard and operations UI'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Industrial operations and robotics teams',
    secondary: 'Logistics automation leaders',
  },
  userProblems: [
    'Manual material movement is costly and unsafe',
    'Deploying autonomy at scale requires robust monitoring workflows',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['High-impact human-robot interaction problems'],
    whyNot: ['Hardware execution complexity'],
    nextActions: ['Check product design and robotics UX hiring'],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$79.1M total funding (Seedtable)'],
    tam: 'Industrial robotics and autonomy market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can become core autonomy layer in industrial robotics',
    tailwinds: ['Labor shortages and automation demand'],
    headwinds: ['Long enterprise robotics sales cycles'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  lastUpdated: '2026-02-04T21:35:00',
  sources: [
    { title: 'Clearpath Robotics', url: 'https://clearpathrobotics.com' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
