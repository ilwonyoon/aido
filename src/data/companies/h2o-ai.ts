import { Company } from '../types';

export const h2oAi: Company = {
  id: 'h2o-ai',
  name: 'H2O.ai',
  description: 'Open-source machine learning and AI platform company focused on enterprise AI applications.',
  website: 'https://h2o.ai',
  headquarters: 'Mountain View, CA',
  region: 'sf-bay-area' as const,
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['model-platform', 'ai-infrastructure'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$251.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise AI teams across regulated and data-intensive industries',

  // Competition
  competitors: [
    {
      name: 'DataRobot',
      description: 'Enterprise AI platform for model development and deployment.',
      whyTheyWin: 'Strong enterprise automation and broad model operations stack.',
    },
    {
      name: 'Databricks',
      description: 'Lakehouse + AI platform with integrated ML tooling.',
      whyTheyWin: 'Data platform distribution and deep enterprise data integration.',
    },
    {
      name: 'SAS',
      description: 'Long-established enterprise analytics and AI software provider.',
      whyTheyWin: 'Incumbent relationships and legacy enterprise footprint.',
    },
  ],
  marketPosition: 'Enterprise AI platform with open-source roots and explainable AI focus.',
  moat: [
    'Long-running open-source ecosystem and enterprise adoption',
    'End-to-end AI lifecycle tooling with explainability positioning',
  ],
  vsGiants: 'Differentiates with open-source heritage, model transparency, and enterprise deployment flexibility.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to the product, focused on enterprise model building and operations.',
  aiDesignChallenges: [
    'Designing complex model workflows for mixed technical users',
    'Balancing low-code automation with expert-level control',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sri Satish Ambati',
      role: 'Co-founder & CEO',
      background: 'Co-founded H2O.ai and leads enterprise AI platform strategy.',
    },
    {
      name: 'Cliff Click',
      role: 'Co-founder & Chief Scientist',
      background: 'JVM and systems expert; early technical leader behind H2O open-source infrastructure.',
    },
  ],
  whyBuilding: 'Make AI and machine learning accessible and production-ready for mainstream enterprises.',
  beliefs: [
    'Open-source accelerates enterprise AI adoption',
    'Explainability and trust are critical for production AI',
  ],
  greenFlags: ['Strong funding base', 'Clear enterprise AI platform positioning'],
  redFlags: ['Crowded enterprise AI platform landscape'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Model workflow orchestration UX', 'Explainability and trust controls'] },
    evaluation: { level: 'high', tasks: ['Model quality monitoring surfaces', 'Experiment and deployment review UX'] },
    interface: { level: 'medium', tasks: ['Enterprise admin and analyst dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise data science and ML engineering teams',
    secondary: 'Business analytics teams adopting AI-assisted workflows',
  },
  userProblems: [
    'Productionizing ML in regulated and complex enterprise environments',
    'Maintaining explainability and governance across AI workflows',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Enterprise-scale AI workflow problems', 'High impact on trust and explainability UX'],
    whyNot: ['Platform category is highly competitive'],
    nextActions: ['Verify current design org and open product design roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$251.1M total funding (Seedtable)', 'Multi-region presence (US + EU)'],
    tam: 'Large enterprise AI/ML software market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand via enterprise AI governance and platform depth',
    tailwinds: ['Ongoing enterprise AI adoption', 'Need for explainable AI in regulated sectors'],
    headwinds: ['Competition from hyperscalers and integrated data platforms'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:10:00',
  sources: [
    { title: 'Source', url: 'https://h2o.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
