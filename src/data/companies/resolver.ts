import { Company } from '../types';

export const resolver: Company = {
  id: 'resolver',
  name: 'Resolver',
  description: 'Risk intelligence and GRC platform for enterprise risk, compliance, and incident management.',
  website: 'https://www.resolver.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['security'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$20.0M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise risk, compliance, and security teams',

  // Competition
  competitors: [
    {
      name: 'ServiceNow GRC',
      description: 'Enterprise GRC platform within ServiceNow ecosystem.',
      whyTheyWin: 'Large enterprise distribution.',
    },
    {
      name: 'MetricStream',
      description: 'Enterprise risk and compliance management platform.',
      whyTheyWin: 'Established enterprise GRC presence.',
    },
    {
      name: 'RSA Archer',
      description: 'Enterprise GRC platform for risk and compliance.',
      whyTheyWin: 'Longstanding enterprise adoption.',
    },
  ],
  marketPosition: 'Risk intelligence platform unifying risk, compliance, and incident workflows.',
  moat: ['Risk intelligence platform coverage', 'Cross-domain risk and compliance tooling'],
  vsGiants: 'Differentiates with unified risk intelligence and incident workflow focus.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI assists with risk analytics and incident workflows.',
  aiDesignChallenges: [
    'Designing clear risk prioritization UX',
    'Making compliance workflows auditable and human-friendly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mike Wertman',
      role: 'Founder',
      background: 'Founded Resolver to modernize enterprise risk and compliance workflows.',
    },
  ],
  whyBuilding: 'Help enterprises anticipate and respond to risk faster.',
  beliefs: ['Risk management should be data-driven', 'Compliance needs better workflow tooling'],
  greenFlags: ['Clear enterprise risk management market'],
  redFlags: ['Competitive GRC category'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Risk scoring and prioritization UX'] },
    evaluation: { level: 'medium', tasks: ['Audit and compliance reporting UX'] },
    interface: { level: 'medium', tasks: ['Incident and risk dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Risk and compliance leaders',
    secondary: 'Security operations teams',
  },
  userProblems: [
    'Risk data is siloed across teams and tools',
    'Compliance reporting is manual and error-prone',
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
    whyJoin: ['Risk workflow UX and compliance automation challenges'],
    whyNot: ['Crowded enterprise GRC market'],
    nextActions: ['Track enterprise product design hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$20.0M total funding (Seedtable)'],
    tam: 'Enterprise risk and compliance software market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to expand into full resilience platform',
    tailwinds: ['Regulatory pressure on risk reporting'],
    headwinds: ['Long enterprise procurement cycles'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:45:00',
  sources: [
    { title: 'Source', url: 'https://www.resolver.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
