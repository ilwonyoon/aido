import { Company } from '../types';

export const brex: Company = {
    id: 'brex',
    name: 'Brex',
    description: 'AI-powered spend platform. Corporate cards, banking, travel, expense automation.',
    website: 'https://www.brex.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/uY2tg8SgFL0l1USfMjQ3ysoMeL7M2iA8FAV79OMQ4B5hSmsBhTU-GjrirTqhytblU97SUsZtsUd5fdX2GyPHFA.png',

    // OG Image
    ogImage: '/og-images/brex-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'fintech'],

    stage: 'Series E+',
    valuation: '$12.3B',
    totalFunding: '$1.2B',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Unknown',
      signals: ['AI agents automating expenses', 'Expanding intelligent finance', 'Hiring Staff Product Designers ($240K-$300K)'],
      tam: '$25B (corporate spend management)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with Ramp, Amex',
      tailwinds: ['AI expense automation', 'Corporate spend software adoption', 'Fintech innovation'],
      headwinds: ['Ramp competition ($32B valuation)', 'American Express incumbency', 'Economic downturn'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Financial workflows create stickiness',
    },
    competitors: [
      {
        name: 'Ramp',
        description: 'AI-powered corporate card and expense management',
        whyTheyWin: '$32B valuation, faster growth, aggressive pricing',
      },
      {
        name: 'American Express',
        description: 'Legacy corporate card with rewards programs',
        whyTheyWin: 'Enterprise relationships, brand trust, global acceptance',
      },
      {
        name: 'Navan (TripActions)',
        description: 'Corporate travel and expense platform',
        whyTheyWin: 'Travel + expense in one platform, strong corporate travel market',
      },
    ],
    marketPosition: 'AI-powered spend platform for startups and growth companies',
    moat: [
      'Financial OS: cards + banking + travel + expense automation',
      'AI expense automation agents',
      'Integrated financial workflows create switching costs',
      'Strong startup/tech company customer base',
    ],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Corporate card platform with AI expense features. Established business adding AI capabilities.',
    aiDesignChallenges: [
      'AI expense automation: teaching agents to categorize and approve expenses',
      'Financial workflow design: connecting cards, banking, travel, expenses',
      'Trust in AI decisions: when to automate vs require human approval',
      'Multi-stakeholder UX: employees, finance teams, executives',
    ],
    founders: [
      {
        name: 'Henrique Dubugras',
        role: 'Co-Founder & CEO',
        background: 'Born in São Paulo, Brazil (1995). Met Franceschi through Twitter argument in 2012. Co-founded Pagar.me (payments startup) at age 16. Moved to US, joined Y Combinator. Founded Brex at 22 (2017). Now 29 and billionaire. Lives in Los Angeles.',
      },
      {
        name: 'Pedro Franceschi',
        role: 'Co-Founder & CTO',
        background: 'Native of Rio de Janeiro, Brazil. First person to jailbreak iPhone 3G in Brazil at age 13. Co-founded Pagar.me with Dubugras at age 15. Learned fintech scale and regulation from Pagar.me. Founded Brex at 22 (2017). Now 29 and billionaire.',
      },
    ],
    whyBuilding: 'Experienced how hard it was to get corporate cards and banking for startups when building Pagar.me. Built Brex to solve financial infrastructure for fast-growing companies. Being acquired by Capital One ($5.15B, Jan 2026).',
    beliefs: [
      'Long-term thinking: have an opinion on how the world will be shaped in the future',
      'Balance short-term execution with long-term vision',
      'Solve one real problem well, then earn the right to solve the next one',
      'Execute carefully, learn fast, adapt constantly',
      'Dream big but execute with discipline',
    ],
    greenFlags: ['Brazilian billionaire founders (29 years old)', 'Acquired by Capital One for $5.15B (Jan 2026)', 'Strong financial OS vision', 'Y Combinator pedigree'],
    redFlags: ['Being acquired by Capital One (may lose startup culture)', 'Ramp competition ($32B valuation, growing faster)', 'Hybrid work policy'],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'AI expense automation: when agents categorize vs ask for confirmation',
          'Approval workflows: designing multi-level spending controls',
          'Financial rule engines: creating flexible spend policies',
          'Banking and card integration behavior',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Expense categorization accuracy metrics',
          'Automation confidence scoring',
          'User satisfaction with AI decisions',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Corporate card management dashboard',
          'Expense submission and approval flows',
          'Banking and cash management UI',
          'Travel booking and integration',
          'Admin controls and policies',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Startups and high-growth companies managing corporate spending',
        secondary: 'Finance teams and controllers at mid-market technology companies',
    },
    userProblems: [
        'Traditional business credit cards require personal guarantees and established credit history',
        'Expense management requires manual receipt collection and reconciliation',
        'Corporate card programs lack real-time spend controls and visibility',
        'Finance teams spend days closing books and reconciling expenses',
        'Employees waiting for expense reimbursements creates friction and delays',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.brex.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', '$12.3B'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Brex product', 'Research founders'],
    },
    lastUpdated: '2026-01-27T00:05:00',
    sources: [
      {'title': 'Brex AI Finance', 'url': 'https://www.brex.com/journal/rise-of-the-ai-first-financial-os'},
      {'title': 'Brex Hiring', 'url': 'https://www.dice.com/job-detail/22a3f1c8-1b2b-4b33-8aef-7af070183269'},
      {'title': 'Brex Founders Story', 'url': 'https://biz.bio/founders/henrique-dubugras-and-pedro-franceschi-the-young-founders-who-rebuilt-startup-finance-from-the-inside-out/'},
      {'title': 'Brex Wikipedia', 'url': 'https://en.wikipedia.org/wiki/Brex'},
      {'title': 'Henrique Dubugras Profile', 'url': 'https://fintechmagazine.com/articles/henrique-dubugras-the-27-year-old-billionaire-behind-brex'},
    ],
  };
