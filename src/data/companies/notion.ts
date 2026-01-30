import { Company } from '../types';

export const notion: Company = {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, wikis, and project management.',
    website: 'https://notion.so',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['productivity'],

    stage: 'Series D (IPO potential)',
    valuation: '$10B (2021) → $11B tender (2024)',
    totalFunding: '$352.7M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2M', date: '2013-03', leadInvestors: ['First Round'] },
      { stage: 'Series A', amount: '$10M', date: '2019-04', valuation: '$800M', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$50M', date: '2020-07', valuation: '$2B', leadInvestors: ['Index Ventures'] },
      { stage: 'Series C', amount: '$275M', date: '2021-10', valuation: '$10B', leadInvestors: ['Sequoia', 'Coatue'] },
    ],
    revenue: '$500M ARR (Sept 2025)',
    growth: '~50% YoY',
    customers: '4M+ paying customers, 50% of Fortune 500',

    competitors: [
      {
        name: 'Confluence',
        description: 'Atlassian\'s wiki and documentation tool',
        whyTheyWin: 'Enterprise standard, Jira integration, established IT relationships',
      },
      {
        name: 'Coda',
        description: 'Doc-meets-spreadsheet platform',
        whyTheyWin: 'More powerful formulas, better for structured data, Google Docs alternative',
      },
      {
        name: 'Linear',
        description: 'Modern project management',
        whyTheyWin: 'Better for engineering workflows, speed-focused',
      },
    ],
    marketPosition: 'Default workspace for modern teams and individuals',
    moat: [
      'Consumer-grade UX in B2B space',
      'Block-based flexibility',
      'Strong brand with Gen Z and knowledge workers',
      'Network effects from templates and sharing',
    ],

    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Established workspace product with AI as major enhancement. Stable business adding AI capabilities to proven platform.',
    aiDesignChallenges: [
      'AI writing assistant integration',
      'Q&A across workspace knowledge',
      'AI without disrupting existing workflows',
      'Balancing AI features with simplicity',
    ],

    founders: [
      {
        name: 'Ivan Zhao',
        role: 'CEO',
        background: 'UBC Cognitive Science, designer background, built tools for thinking',
      },
      {
        name: 'Simon Last',
        role: 'Co-founder',
        background: 'Technical co-founder, built core architecture',
      },
    ],
    whyBuilding:
      'Inspired by tools like HyperCard and Smalltalk. Wanted to create a tool that\'s simple enough for anyone but powerful enough for complex work.',
    beliefs: [
      'Tools shape how we think',
      'Software should feel like physical craft',
      'Simplicity and power can coexist',
      'Accessible to non-technical users',
    ],
    designPhilosophy:
      'Ivan Zhao comes from design. Focus on timeless, crafted software. Inspired by German cameras, Japanese toys, Coca-Cola mass appeal.',
    greenFlags: [
      'Designer-founder CEO',
      'Strong product-market fit',
      'Profitable and sustainable',
      'Iconic brand among knowledge workers',
    ],
    redFlags: [
      'AI features playing catch-up',
      'Enterprise complexity increasing',
      'Large company (800+ employees)',
    ],

    designTeam: {
      designHead: 'Unknown',
      teamSize: '~50-60',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI writing suggestions',
          'Knowledge graph for Q&A',
          'Smart defaults and templates',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'AI answer quality metrics',
          'User engagement tracking',
          'Feature adoption analysis',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Block-based editing UX',
          'Cross-platform consistency',
          'Design system at scale',
          'Mobile experience',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Knowledge workers and teams needing flexible docs, wikis, and project management',
        secondary: 'Individuals using Notion for personal note-taking, journaling, and life organization',
    },
    userProblems: [
        'Teams use disconnected tools for docs, wikis, tasks, and databases creating information silos',
        'Traditional productivity tools lack flexibility forcing workflows into rigid structures',
        'Knowledge scattered across Google Docs, Dropbox, and project management tools is hard to find',
        'Collaborative documentation tools like Confluence feel slow and complex for modern teams',
        'Personal note-taking apps lack structure for managing complex projects and linked information',
    ],

    designerLinks: [
      {
        name: 'Notion Design Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://notion.so/blog',
        description: 'Design and product updates',
      },
    ],
    openRoles: [],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.3,
        content: 'Strong design culture. Designer-CEO influence. Good work-life balance for tech.',
        url: 'https://www.glassdoor.com/Reviews/Notion-Reviews-E1727417.htm',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Comp competitive but not top-tier. Culture shifting as company grows. Still good design team.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        rating: 4.2,
        content: 'Product Designer: $108K base avg. Total comp varies with level.',
        url: 'https://www.levels.fyi/companies/notion/',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$500M ARR (Sept 2025), ~1.5-2x YoY",
      userGrowth: "4M+ paying customers, 50% of Fortune 500",
      signals: [
        "$500M ARR, profitable",
        "$10B → $11B valuation (tender offer 2024)",
        "4M+ paying customers, 100M+ total users",
        "50% of Fortune 500 using Notion",
        "IPO-ready (Series D stage)",
      ],

      tam: "$50B+ (Productivity software for all knowledge workers)",
      marketShare: "~1% = 50x upside",
      ceiling: "Mid innings: Productivity tools market is mature (Microsoft Office, Google Workspace dominate), but Notion capturing modern team workflows. Ceiling depends on enterprise adoption depth.",
      tailwinds: [
        "Gen Z/millennial workforce prefers Notion over legacy tools",
        "Remote work drives demand for flexible collaboration",
        "Templates and community create network effects",
        "Block-based architecture enables customization vs rigid tools",
      ],
      headwinds: [
        "Microsoft/Google have distribution through enterprise bundles",
        "Notion AI playing catch-up to competitors",
        "Confluence entrenched in large enterprises",
        "Performance issues at scale (large workspaces)",
        "Enterprise feature gaps vs Confluence",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Switching costs from accumulated content and workflows create moat. Template sharing and community provide weak network effects. Brand with knowledge workers is strong, but feature set is replicable.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Designer-founder company',
        'Iconic, well-loved product',
        'Large design team — learn from others',
        'Stable, profitable business',
      ],
      whyNot: [
        'Not AI-native (AI is add-on)',
        'Large company, less startup energy',
        'Hybrid required',
      ],
      nextActions: [
        'Monitor AI feature development',
        'Check if fully remote roles open',
        'Research design team structure',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Notion $10B Valuation - SaaStr',
        url: 'https://www.saastr.com/notion-and-growing-into-your-10b-valuation-a-masterclass-in-patience/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/notion/',
      },
    ],
  };
