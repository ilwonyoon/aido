import { Company } from '../types';

export const agave: Company = {
  id: 'agave',
  name: 'Agave',
  description:
    'AI financial operations platform for construction companies, automating ERP sync, AP invoice processing, expense workflows, vendor management, and construction finance data.',
  website: 'https://www.useagave.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['fintech', 'other-vertical'],
  industries: ['fintech', 'other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: '$XM+ recurring revenue cited in role listing',
  growth: '500+ paying customers, profitability, and hockey-stick growth cited in the YC role listing.',
  runway: 'Profitable and cash-flow positive for over two years according to role listing',
  customers: 'Construction contractors and finance teams using ERP-connected workflows',

  competitors: [
    {
      name: 'Procore',
      description: 'Construction management platform with financial and project workflows.',
      whyTheyWin: 'Massive construction customer footprint and system-of-record position.',
    },
    {
      name: 'Autodesk Construction Cloud',
      description: 'Construction software suite for project and field operations.',
      whyTheyWin: 'Enterprise construction distribution and deep toolchain adoption.',
    },
    {
      name: 'Constrafor',
      description: 'Construction finance and procurement platform.',
      whyTheyWin: 'Specialized construction finance workflows and contractor relationships.',
    },
  ],
  marketPosition: 'AI financial operations for construction',
  moat: [
    'ERP sync and workflow depth across construction finance operations',
    'Paying customer base and cash-flow-positive operation cited in role listing',
    'Construction-specific financial data and workflow specialization',
  ],
  vsGiants: 'Competes by layering AI-native finance workflows on top of construction systems rather than replacing ERP and project systems outright.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI and automation are core to Agave’s construction finance workflows, though the product is a vertical SaaS operations platform.',
  aiDesignChallenges: [
    'Designing AI-assisted invoice, expense, vendor, and ERP sync workflows',
    'Making construction finance automation trustworthy and auditable',
    'Unifying multiple construction financial products into a coherent platform',
  ],

  founders: [
    {
      name: 'Tom Reno',
      role: 'Co-founder & CEO',
      background: 'Former Amazon, Barclays Investment Bank, and Graphiq; YC profile lists him as co-founder/CEO.',
    },
    {
      name: 'Pooria Azimi',
      role: 'Co-founder',
      background: 'Former core engineer at Graphiq and Amazon; YC profile lists him as a co-founder of Agave.',
    },
    {
      name: 'John Zucchi',
      role: 'Co-founder',
      background: 'Former Amazon Alexa technical program manager, Graphiq product manager, and Barclays analyst.',
    },
  ],
  whyBuilding:
    'Agave helps construction teams automate financial operations that are still trapped across ERPs, field tools, invoices, and manual processes.',
  beliefs: [
    'Construction finance workflows can be made simple and automated',
    'AI should sit inside real operational systems, not just dashboards',
    'Vertical products need deep workflow fit before broad platform expansion',
  ],
  greenFlags: [
    'Live Founding Product Designer role in San Francisco',
    'Role explicitly says first design hire and design-system ownership',
    '500+ paying customers and profitability cited in role listing',
    'YC W22 company with vertical SaaS traction',
  ],
  redFlags: [
    'Construction finance is domain-heavy and integration-dependent',
    'Compensation/equity range is lower than some AI-native SF peers',
    'Platform expansion across 2-6 products this year may create scope pressure',
  ],

  designTeam: {
    teamSize: 'Hiring first design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'ERP sync, AP invoice automation, expenses, and vendor workflows',
        'AI-assisted financial operations flows across multiple construction products',
        'Workflow rules, approvals, and exception handling',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Invoice accuracy, sync reliability, and financial workflow auditability',
        'Customer research with construction finance teams',
        'Platform usability across multiple products and personas',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Design system from scratch',
        'Cross-product platform UX',
        'Construction finance dashboards, forms, and workflow surfaces',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Construction finance and operations teams',
    secondary: 'Contractors and project teams syncing field and finance data',
  },
  userProblems: [
    'Construction financial operations are fragmented across ERPs and field systems',
    'Invoice and vendor workflows are manual and error-prone',
    'Finance teams need automation without losing auditability and control',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/agave/jobs/Wr9IXT8-founding-product-designer',
      compensation: '$125K-$170K + 0.05%-0.20%',
      aboutRole:
        'First design hire owning Agave’s look, feel, usability, design system, and product UX as the company expands from one product to a platform.',
      whyInteresting:
        'Founding product design role with first-design-hire scope at a profitable vertical AI company with real customers.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'Role listing describes Agave as profitable, cash-flow positive for over two years, and hiring its first design hire.',
      url: 'https://www.ycombinator.com/companies/agave/jobs/Wr9IXT8-founding-product-designer',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Founding Product Designer title and first design hire scope',
      'Strong vertical SaaS traction with profitability and 500+ paying customers cited',
      'Hard workflow design problems across construction finance and AI automation',
    ],
    whyNot: [
      'Construction finance domain may be less visibly AI-native than frontier products',
      'Equity range is lower than some earlier-stage founding design roles',
      'Multiple product launches could stretch one designer thin',
    ],
    nextActions: [
      'Review Agave product flows and construction finance workflow examples',
      'Map portfolio examples to platform/design-system creation',
      'Clarify how much AI is used in AP, ERP sync, and vendor workflows',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '$XM+ recurring revenue and hockey-stick growth cited in role listing',
    userGrowth: '500+ paying customers cited in role listing',
    signals: [
      'YC W22 active company',
      'Live Founding Product Designer role',
      'Profitable and cash-flow positive for over two years according to role listing',
    ],
    tam: 'Construction finance, ERP integration, and back-office automation market',
    marketShare: 'Early but revenue-generating',
    ceiling: 'High if Agave becomes the AI financial operations layer for construction companies.',
    tailwinds: [
      'Construction back offices remain manual and integration-heavy',
      'AI automation can reduce invoice, vendor, and ERP workflow burden',
      'Vertical SaaS products with workflow depth can retain customers strongly',
    ],
    headwinds: [
      'Construction tech adoption can be slow',
      'ERP integrations are operationally heavy',
      'Incumbent construction platforms own distribution',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if customer workflow data and ERP integrations compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Agave Website', url: 'https://www.useagave.com/' },
    { title: 'Agave YC Company Profile', url: 'https://www.ycombinator.com/companies/agave' },
    { title: 'Founding Product Designer at Agave', url: 'https://www.ycombinator.com/companies/agave/jobs/Wr9IXT8-founding-product-designer' },
  ],
};
