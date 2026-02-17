import { Company } from '../types';

export const olipop: Company = {
  id: 'olipop',
  name: 'Olipop',
  description: 'Prebiotic soda brand combining classic flavors with gut-health functional ingredients. Public Benefit Corporation selling through 50K+ retail locations.',
  website: 'https://drinkolipop.com',
  headquarters: 'Oakland, CA',
  remote: 'Yes' as const,
  aiTypes: ['automation'],
  markets: ['b2c'],
  category: 'vertical-saas' as const,
  industries: ['other'],
  stage: 'Series C',
  valuation: '$1.85B',
  totalFunding: '$243M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2.5M',
      date: '2019-01',
      leadInvestors: ['Monogram Capital Partners'],
    },
    {
      stage: 'Series A',
      amount: '$10M',
      date: '2020-01',
      leadInvestors: ['Monogram Capital Partners', 'Collab Fund'],
    },
    {
      stage: 'Series B',
      amount: '$39.7M',
      date: '2022-02',
      leadInvestors: [],
    },
    {
      stage: 'Series C',
      amount: '$188M',
      date: '2024-12',
      leadInvestors: ['J.P. Morgan Private Capital Growth Equity'],
    },
    {
      stage: 'Series C',
      amount: '$50M',
      date: '2025-02',
      valuation: '$1.85B',
      leadInvestors: ['J.P. Morgan Private Capital Growth Equity'],
    },
  ],
  revenue: '$400M (2024)',
  growth: '2x YoY',
  runway: 'Profitable',
  customers: '50K+ retail locations across US',
  competitors: [
    {
      name: 'Poppi',
      description: 'Prebiotic soda brand acquired by PepsiCo for $1.95B',
      whyTheyWin: 'PepsiCo distribution muscle and aggressive marketing spend',
    },
    {
      name: 'Coca-Cola Simply Pop',
      description: 'Coca-Cola entry into prebiotic soda category (launched 2025)',
      whyTheyWin: 'Massive distribution network and brand recognition',
    },
    {
      name: 'Culture Pop',
      description: 'Independent prebiotic/probiotic soda brand',
      whyTheyWin: 'Lower price point and growing health-conscious niche audience',
    },
  ],
  marketPosition: '#1 nonalcoholic brand in US by dollar sales and unit growth',
  moat: [
    'Proprietary 9g fiber blend (chicory root, cassava, Jerusalem artichoke, nopal cactus)',
    'First-mover brand equity in prebiotic soda category',
    '50K+ retail doors distribution network',
  ],
  vsGiants: 'Competing against PepsiCo-backed Poppi and Coca-Cola Simply Pop; differentiated by deeper formulation science and established brand trust',
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'CPG beverage brand with no AI in core product. Standard enterprise software stack.',
  aiDesignChallenges: [
    'DTC e-commerce personalization and subscription optimization',
    'Brand consistency across 50K+ retail touchpoints',
    'Packaging design for new flavor launches',
  ],
  founders: [
    {
      name: 'Ben Goodwin',
      role: 'Co-Founder & CEO',
      background: 'Self-taught formulator. Launched kombucha brand in 2005, built Obi probiotic soda (2012), co-founded Olipop in 2018.',
    },
    {
      name: 'David Lester',
      role: 'Co-Founder',
      background: '10 years at Diageo in brand management (Sydney, São Paulo). Met Goodwin in 2013, co-built Obi, then co-founded Olipop.',
    },
  ],
  whyBuilding: 'Believed traditional soda could be reimagined with functional gut-health ingredients, making healthy choices feel like nostalgic indulgences.',
  beliefs: [
    'Health and indulgence are not mutually exclusive',
    'Gut microbiome health is foundational to overall wellness',
    'Transparency in ingredients builds lasting consumer trust',
  ],
  greenFlags: [
    'Profitable with $400M revenue and 2x YoY growth',
    '$1.85B valuation — category-defining unicorn',
    'Public Benefit Corporation structure signals mission alignment',
  ],
  redFlags: [
    'Not a tech/AI company — limited digital product design opportunities',
    'PepsiCo and Coca-Cola entering the category with massive resources',
    'Design roles are brand/packaging focused, not product/UX',
  ],
  designTeam: {
    designHead: 'Nick Elliott (former Head of Creative)',
    teamSize: '~5-8 (brand/packaging focused)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'DTC subscription flow logic',
        'Retail display configuration rules',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Packaging shelf impact testing',
        'Brand sentiment tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'DTC e-commerce and brand website',
        'Packaging and visual identity design',
        'Retail and marketing collateral',
      ],
    },
  },
  productStage: '10→100',
  targetAudiences: {
    primary: 'Health-conscious millennials and Gen Z (25-40) who want soda without the downsides',
    secondary: 'Parents seeking healthier beverage options for families',
  },
  userProblems: [
    'Traditional soda is unhealthy but alternatives taste like medicine',
    'Gut health products lack appealing flavors and branding',
    'Functional beverages feel clinical rather than enjoyable',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.9,
      content: 'Exceptional Culture & Values rating (4.9/5). Mission-driven, accessible co-founders, comprehensive benefits including 95% paid medical.',
      url: 'https://www.glassdoor.com/Reviews/Olipop-Reviews-E3050511.htm',
    },
  ],
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '2x YoY ($200M → $400M)',
    signals: [
      '$238M raised in Series C across two tranches',
      'Profitable since early 2024',
      '#1 nonalcoholic brand by dollar sales in US',
    ],
    tam: '$260B (US non-alcoholic beverage market)',
    ceiling: 'Competing for share of $80B US soda market with healthier alternative',
    tailwinds: [
      'Growing gut health awareness among consumers',
      'Shift away from sugary beverages',
      'Functional food and beverage category expanding rapidly',
    ],
    headwinds: [
      'PepsiCo acquired Poppi ($1.95B) — Big Beverage is coming',
      'Coca-Cola launched Simply Pop in 2025',
      'Category commoditization risk as more brands enter',
    ],
    moatType: 'brand',
    moatStrength: 'Strong: category-defining brand with proprietary formulation science',
  },
  tracking: {
    status: 'watching',
    fitScore: 2,
    whyJoin: [
      'Category-defining unicorn with strong brand and profitability',
      'Remote-first culture with excellent benefits',
    ],
    whyNot: [
      'Not an AI/tech company — Level D',
      'Design work is brand/packaging, not digital product',
      'No Product Designer (UX) roles open',
    ],
    nextActions: [
      'Monitor if they build a digital product team',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'CNBC — Olipop $1.85B valuation', url: 'https://www.cnbc.com/2025/02/12/olipop-prebiotic-soda-valued-at-1point85-billion-in-funding-round.html' },
    { title: 'CNBC — Founders story', url: 'https://www.cnbc.com/2023/09/16/how-olipops-founders-turned-100k-investment-into-healthier-soda-brand.html' },
    { title: 'Olipop Greenhouse Careers — no Product Design roles found', url: 'https://job-boards.greenhouse.io/olipop' },
    { title: 'Glassdoor — Olipop Reviews', url: 'https://www.glassdoor.com/Reviews/Olipop-Reviews-E3050511.htm' },
    { title: 'Fortune — Prebiotic soda competition', url: 'https://fortune.com/well/article/coca-cola-simply-pop-olipop-poppi-prebiotic-sodas-benefits/' },
  ],
};
