import { Company } from '../types';

export const weavAir: Company = {
  id: 'weavair',
  name: 'WeavAir',
  description:
    'AI-powered digital twin platform that measures and predicts emissions, energy efficiency, and building performance using multi-sensor IoT data.',
  website: 'https://weavair.com',
  headquarters: 'Warsaw, Poland',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '€0.5M–€1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',
  fundingHistory: [],

  // Competition
  competitors: [
    {
      name: 'Measurabl',
      description: 'ESG and carbon accounting software for real estate portfolios.',
      whyTheyWin: 'Deep integrations with property managers and ESG reporting standards.',
    },
    {
      name: 'C3 AI Energy Management',
      description: 'Enterprise AI suite for energy and asset performance optimization.',
      whyTheyWin: 'Large enterprise deployments and broad AI platform capabilities.',
    },
    {
      name: 'Carbon Lighthouse',
      description: 'Building energy optimization and analytics platform.',
      whyTheyWin: 'Established footprint in commercial real estate energy efficiency.',
    },
  ],
  marketPosition:
    'AI-driven digital twin and emissions intelligence for buildings and infrastructure operators.',
  moat: [
    'Multi-sensor IoT + satellite data ingestion for real-time monitoring',
    'Predictive diagnostics delivering faster detection and response',
    'Proven savings claims from energy and operations optimization',
  ],
  vsGiants:
    'Focuses on vertical-specific digital twin tooling rather than general-purpose analytics platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is a core differentiator powering predictive diagnostics and emissions intelligence.',
  aiDesignChallenges: [
    'Designing dashboards that translate complex sensor data into actionable insights',
    'Trust and explainability for AI-driven sustainability recommendations',
    'Balancing real-time alerts with long-term planning workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Natalia Mykhaylova',
      role: 'Founder & CEO',
      background:
        'Founder and CEO leading WeavAir’s AI-powered digital twin platform for sustainability and smart infrastructure.',
    },
  ],
  whyBuilding:
    'WeavAir is focused on helping organizations optimize energy use and reduce emissions through real-time, data-driven intelligence.',
  beliefs: [
    'Operational energy data should be measurable and actionable in real time',
    'Sustainability outcomes require predictive analytics, not just reporting',
    'Digital twins can unlock efficiency across legacy infrastructure',
  ],
  greenFlags: [
    'Recognized with multiple awards for sustainability innovation',
    'Partnerships with major IoT and semiconductor providers',
    'Clear ESG and emissions reduction value proposition',
  ],
  redFlags: [
    'Funding transparency is limited',
    'Competitive market with well-capitalized energy analytics incumbents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Predictive anomaly detection logic for emissions and energy systems',
        'Configurable alert thresholds and escalation workflows',
        'Automation rules for energy optimization recommendations',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model accuracy and diagnostics validation',
        'Benchmarking energy savings and ESG impact',
        'User feedback loops for alert relevance',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Digital twin dashboard UX for building operators',
        'Sensor data visualization and analytics reporting',
        'Portfolio-level ESG performance summaries',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise building operators and infrastructure owners',
    secondary: 'ESG and sustainability teams tracking emissions performance',
  },
  userProblems: [
    'Lack of real-time visibility into emissions and energy performance',
    'Difficulty translating sensor data into operational decisions',
    'Inefficient maintenance planning leading to higher costs and downtime',
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
    whyJoin: ['Climate tech mission', 'AI-driven infrastructure optimization'],
    whyNot: ['Limited transparency on funding and scale'],
    nextActions: ['Monitor hiring for product/design roles'],
  },

  // Meta
  lastUpdated: '2026-02-11T14:10:00',
  sources: [
    { title: 'WeavAir - Official Website', url: 'https://weavair.com/' },
    { title: 'WeavAir Company Directory (EU-Startups)', url: 'https://www.eu-startups.com/directory/weavair/' },
    { title: 'WeavAir Partnership Feature (Infineon)', url: 'https://www.infineon.com/partners/partner-news/2025/weavair' },
    { title: 'WeavAir Company Profile (Crunchbase)', url: 'https://www.crunchbase.com/organization/weavair' },
    { title: 'WeavAir Event Profile (E-Boost)', url: 'https://www.b2match.com/e/e-boost-1/participations/535076' },
  ],
};
