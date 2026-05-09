import { Company } from '../types';

export const scout: Company = {
  id: 'scout',
  name: 'Scout',
  description:
    'AI insights platform for consumer products companies, turning POS and syndicated retail data into clear recommendations for sales teams.',
  website: 'https://cpgscout.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  subcategories: ['sales-marketing'],
  industries: ['sales-marketing', 'other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'YC W24 company with a live Founding Designer role in San Francisco.',
  runway: 'Unknown',
  customers: 'Consumer product brands using retailer and syndicated data',

  competitors: [
    {
      name: 'NielsenIQ',
      description: 'Retail measurement and consumer intelligence platform.',
      whyTheyWin: 'Massive syndicated data footprint and enterprise relationships.',
    },
    {
      name: 'Circana',
      description: 'Consumer behavior and retail analytics company.',
      whyTheyWin: 'Large-scale CPG analytics and market data coverage.',
    },
    {
      name: 'Traditional BI tools',
      description: 'Analytics dashboards used by CPG sales and revenue teams.',
      whyTheyWin: 'Existing reporting infrastructure and broad customization.',
    },
  ],
  marketPosition: 'AI insights for consumer product sales teams',
  moat: [
    'Vertical focus on CPG retail data workflows',
    'AI-assisted recommendations for accounts, SKUs, promotions, and distribution',
    'YC network and early founder-led product iteration',
  ],
  vsGiants: 'Competes by turning complex CPG analytics into focused, action-oriented sales recommendations rather than broad reporting dashboards.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI analysis and recommendations are core to the product experience, but Scout is a vertical analytics workflow for CPG teams.',
  aiDesignChallenges: [
    'Turning dense retail and syndicated data into clear recommendations',
    'Designing trust in AI-generated account, SKU, and promotion insights',
    'Balancing product UI, brand, and marketing design for an early-stage vertical SaaS product',
  ],

  founders: [
    {
      name: 'Sasha Zhang',
      role: 'Founder',
      background: 'Previously helped incubate SaaS startups at Menlo Labs and built supply chain data products at Wayfair; CMU and Wharton background.',
    },
  ],
  whyBuilding:
    'Scout helps consumer product brands understand where to grow by ingesting retailer portals and syndicated sources like SPINS and NielsenIQ.',
  beliefs: [
    'CPG teams need clearer recommendations from fragmented retail data',
    'AI can turn analytics into sales actions',
    'Early product and brand design can define how the category feels',
  ],
  greenFlags: [
    'Live YC Founding Designer role in San Francisco',
    'Role explicitly includes product screens, UI/UX, prototyping, and product-forward design',
    'Clear vertical workflow with rich data and recommendation design problems',
  ],
  redFlags: [
    'YC role taxonomy labels the role as Design / Brand / graphic design, so it is broader than pure product design',
    'Company funding and revenue metrics are not broadly public',
    'CPG data workflows can depend on messy retailer and syndicated sources',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'CPG analytics workflows for accounts, SKUs, promotions, and distribution',
        'AI recommendation and prioritization flows',
        'Prototype concepts from abstract product ideas',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Insight usefulness and sales-team decision quality',
        'Data clarity across retailer and syndicated sources',
        'Promotion, pricing, and distribution outcome tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Polished UI/UX in Figma',
        'Brand system and marketing surfaces',
        'Motion, micro-interactions, and campaign visuals',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'CPG sales and revenue teams',
    secondary: 'Consumer product founders and operators analyzing retail performance',
  },
  userProblems: [
    'Retailer and syndicated data is hard to translate into action',
    'Sales teams need to know which accounts, SKUs, and promotions to prioritize',
    'CPG analytics workflows are often slow, manual, and spreadsheet-heavy',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'brand-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/cpgscout/jobs/HfKMZye-founding-designer',
      compensation: '$100K-$150K + 0.10%-1.00%',
      aboutRole:
        'Own design across product, brand, and marketing, including polished UI/UX, prototypes, motion, brand system, and product-forward visual direction.',
      whyInteresting:
        'Adjacent founding design role with real product-screen ownership, but broader than pure product design because brand and motion are explicit parts of the scope.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'neutral',
      content: 'YC job listing describes a high-autonomy founding design role spanning product screens, brand moments, UI/UX, motion, and marketing.',
      url: 'https://www.ycombinator.com/companies/cpgscout/jobs/HfKMZye-founding-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Founding design role at a YC AI analytics company in San Francisco',
      'Clear product-design surface around dense CPG data and recommendations',
      'High autonomy across product, brand, and marketing',
    ],
    whyNot: [
      'Role is explicitly broader than product design and YC labels it Brand/graphic design',
      'AI-native level is more vertical analytics than AI-as-product',
      'Public traction details are limited',
    ],
    nextActions: [
      'Treat as adjacent unless the user wants brand-heavy founding design roles',
      'Review Scout product demo and CPG analytics workflow depth',
      'Clarify how much of the role is product UI versus brand/motion',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'YC W24 active company profile',
      'Live Founding Designer role on YC',
      'Official site positions Scout as AI-powered CPG analytics from syndicated data',
    ],
    tam: 'CPG retail analytics and sales intelligence market',
    marketShare: 'Early',
    ceiling: 'Meaningful if Scout becomes the AI insight layer for CPG sales teams.',
    tailwinds: [
      'CPG teams need faster insight from fragmented retail data',
      'AI can make analytics more action-oriented',
      'Vertical SaaS products can win through domain-specific workflows',
    ],
    headwinds: [
      'Incumbent data providers have strong relationships',
      'Data access and normalization can be messy',
      'Role scope may be split across product, brand, and marketing',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if Scout compounds vertical data workflows and recommendation feedback.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Scout Website', url: 'https://cpgscout.ai/' },
    { title: 'Scout YC Company Profile', url: 'https://www.ycombinator.com/companies/cpgscout' },
    { title: 'Founding Designer at Scout', url: 'https://www.ycombinator.com/companies/cpgscout/jobs/HfKMZye-founding-designer' },
  ],
};
