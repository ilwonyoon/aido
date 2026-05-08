import { Company } from '../types';

export const arkhamTechnologies: Company = {
  id: 'arkham-technologies',
  name: 'Arkham Technologies',
  description:
    'Data and AI platform helping large enterprises unify fragmented operational data, build trusted business metrics, and deploy AI systems for complex workflows.',
  website: 'https://www.arkham.tech/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  subcategories: ['infrastructure'],
  industries: ['infrastructure'],

  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Role listing cites enterprise customers including Circle K and Kimberly-Clark and a Deloitte partnership.',
  runway: 'Unknown',
  customers: 'Large enterprise operations teams in retail, CPG, credit, solar, insurance, manufacturing, and M&A.',

  competitors: [
    {
      name: 'Palantir',
      description: 'Enterprise ontology, data integration, and AI operations platform.',
      whyTheyWin: 'Deep enterprise footprint and strong deployment muscle.',
    },
    {
      name: 'Databricks',
      description: 'Data and AI platform for analytics, lakehouse, and ML workflows.',
      whyTheyWin: 'Broad data platform adoption and strong ecosystem.',
    },
    {
      name: 'C3 AI',
      description: 'Enterprise AI application platform for industrial and operational use cases.',
      whyTheyWin: 'Long-standing enterprise AI positioning and packaged vertical apps.',
    },
  ],
  marketPosition: 'Enterprise data and AI platform for operational transformation',
  moat: [
    'Operational ontology layer across fragmented enterprise systems',
    'Forward-deployed enterprise AI workflows',
    'Customer-specific data and AI implementation knowledge',
  ],
  vsGiants:
    'Competes by combining platform, ontology, and hands-on AI deployment for specific enterprise operations rather than only selling a generic cloud data layer.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is core to Arkham Technologies: the platform unifies operational data and lets teams build AI systems and agents tailored to enterprise workflows.',
  aiDesignChallenges: [
    'Interfaces for humans supervising AI-driven operational workflows',
    'Review, approval, override, and exception handling for AI agents',
    'Text-rich decision surfaces for operators working across complex enterprise data',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founding team',
      background: 'Building enterprise data and AI systems for operational teams.',
    },
  ],
  whyBuilding:
    'Arkham Technologies wants enterprises to turn fragmented operational data into trusted metrics, AI-ready entities, and practical AI transformation.',
  beliefs: [
    'Enterprise AI starts with trusted operational data',
    'Humans need clear interfaces to guide and supervise AI agents',
    'Complex operations require decision-focused, role-specific applications',
  ],
  greenFlags: [
    'Founding Product Designer role focused on AI-native operational interfaces',
    'Specific design problems around agent supervision, approvals, and overrides',
    'Role listing cites enterprise customers and Deloitte partnership',
  ],
  redFlags: [
    'Official ATS source was not found; role is verified through BuiltIn and LinkedIn listings',
    'Public funding and founder details are limited',
    'Enterprise implementation work may be services-heavy',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI-driven operational workflow design',
        'Agent review, approval, override, and supervision flows',
        'Role-specific applications for operators across web and mobile',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Forecasting, replenishment, pricing, and exception review surfaces',
        'Operator clarity and decision confidence',
        'AI action auditability and correction loops',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise operations dashboards',
        'Design system from the ground up',
        'Dense text and data interfaces for AI-assisted decisions',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise operations, data, and technology teams',
    secondary: 'Retail, CPG, insurance, manufacturing, and private equity operators',
  },
  userProblems: [
    'Enterprise data is fragmented across many systems',
    'Operational teams need trusted metrics before using AI',
    'AI agents need clear human review and override paths',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'needs_review',
      sourceType: 'other',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.builtinsf.com/job/founding-product-designer/8314100',
      aboutRole:
        'Shape AI-native operational interfaces where humans supervise, review, and guide AI agents across enterprise workflows.',
      whyInteresting:
        'Strong fit for AI product design: agent supervision, dense operational data, and design systems from zero.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Role listing describes an in-person Bay Area role with high ownership and direct collaboration with the founding team.',
      url: 'https://www.builtinsf.com/job/founding-product-designer/8314100',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Founding Product Designer role in AI-native enterprise operations',
      'Deep interaction design around AI agents and human supervision',
      'Opportunity to define design systems and product direction early',
    ],
    whyNot: [
      'Official ATS source still needs verification',
      'Company public details are relatively sparse',
      'Enterprise deployment may involve heavy customer-specific work',
    ],
    nextActions: [
      'Find official careers or ATS source for the role',
      'Verify founder and funding details',
      'Read Arkham medium post linked from the role before outreach',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Live Founding Product Designer listing on BuiltIn and LinkedIn',
      'Official website positions Arkham as a Data and AI platform for enterprise operations',
      'Role listing cites customers including Circle K and Kimberly-Clark',
    ],
    tam: 'Enterprise data platform, AI operations, and vertical workflow automation market',
    marketShare: 'Early',
    ceiling: 'High if Arkham becomes the operational AI layer for large enterprises.',
    tailwinds: [
      'Enterprises are investing in AI transformation',
      'Operational data quality is a prerequisite for useful AI agents',
      'Human-in-the-loop AI workflow design is still early',
    ],
    headwinds: [
      'Large incumbents dominate enterprise data platforms',
      'Long enterprise sales and implementation cycles',
      'Service-heavy deployments can slow product scalability',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if customer-specific ontology and workflow knowledge compounds.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Arkham Technologies Website', url: 'https://www.arkham.tech/' },
    { title: 'Founding Product Designer on BuiltIn SF', url: 'https://www.builtinsf.com/job/founding-product-designer/8314100' },
    { title: 'Founding Product Designer on LinkedIn', url: 'https://www.linkedin.com/jobs/view/founding-product-designer-at-arkham-technologies-4366631181' },
  ],
};
