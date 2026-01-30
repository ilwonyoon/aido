import { Company } from '../types';

export const shopify: Company = {
    id: 'shopify',
    name: 'Shopify',
    description: 'E-commerce platform with AI-powered tools (Sidekick, Magic) for merchants. Enables anyone to build and run an online store.',
    website: 'https://www.shopify.com',
    headquarters: 'Ottawa, Canada',
    remote: 'Hybrid',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

    stage: 'Public (IPO 2015)',
    valuation: '$218B market cap',
    totalFunding: '$122M (pre-IPO)',
    fundingHistory: [
      { stage: 'Series C', amount: '$100M', date: '2013-12', leadInvestors: ['OMERS', 'Insight Partners'] },
    ],
    revenue: '$10.7B (2024)',
    growth: '$8.88B annual revenue, 47% market cap growth YoY',
    runway: 'Public company — profitable',
    customers: 'E-commerce merchants (SMBs to enterprises)',

    competitors: [
      {
        name: 'Amazon (Seller Central)',
        description: 'E-commerce giant with seller platform',
        whyTheyWin: 'Massive traffic, logistics infrastructure, marketplace network effects',
      },
      {
        name: 'WooCommerce',
        description: 'WordPress e-commerce plugin',
        whyTheyWin: 'Open-source, lower cost, WordPress ecosystem',
      },
      {
        name: 'BigCommerce',
        description: 'Enterprise e-commerce platform',
        whyTheyWin: 'Lower transaction fees, no revenue share for large merchants',
      },
    ],
    marketPosition: 'Leading independent e-commerce platform for merchants who want to own their brand',
    moat: [
      'App ecosystem (8,000+ apps)',
      'Payment infrastructure (Shopify Payments)',
      'Point-of-sale retail integration',
      'Developer platform and API',
      'Brand loyalty ("Powered by Shopify")',
    ],
    vsGiants: 'Merchant-first vs Amazon\'s customer-first. Ownership and branding vs marketplace. Platform ecosystem vs closed system. AI tools (Sidekick, Magic) democratize merchant capabilities.',

    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI Feature: AI is a major feature (Sidekick, Magic, automated content generation) but core product is e-commerce platform infrastructure.',
    aiDesignChallenges: [
      'Sidekick conversational UI and proactive insights',
      'Magic content generation quality control',
      'AI tool discoverability across merchant workflows',
      'Balancing automation with merchant control',
      'Agentic commerce and Universal Commerce Protocol',
    ],

    founders: [
      {
        name: 'Tobi Lütke',
        role: 'CEO',
        background: 'German-Canadian programmer, moved to Canada in 2002. Built Shopify to sell snowboards online. Self-taught developer.',
      },
    ],
    whyBuilding:
      'Enable anyone to build a business. Commerce should be accessible to everyone, not just big companies. Merchants should own their customer relationships and brand.',
    beliefs: [
      'Commerce is a human right — anyone should be able to sell',
      'Merchants deserve to own their customer data and brand',
      'AI should multiply productivity, not replace people',
      'Platform ecosystems unlock more value than closed systems',
      'Reflexive AI usage is now baseline expectation',
    ],
    greenFlags: [
      'Profitable public company ($10.7B revenue, $1.78B profit)',
      '$218B market cap — massive scale',
      'AI-first CEO mandate (Tobi Lütke)',
      '750+ designers — strong design culture',
      'Remote-friendly with global offices',
      'App ecosystem creates network effects',
    ],
    redFlags: [
      'Public company — quarterly pressure',
      'AI is feature, not core (Level C)',
      'E-commerce platform work may feel distant from cutting-edge AI',
      'Large org (slower decision-making)',
    ],

    designTeam: {
      teamSize: '750+',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Sidekick proactive insights logic',
          'Magic content generation workflows',
          'Agentic commerce interaction patterns',
          'Merchant notification and nudge design',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'AI-generated content quality metrics',
          'Sidekick helpfulness tracking',
          'Merchant productivity improvements',
          'AI feature adoption rates',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'E-commerce admin dashboard',
          'Point-of-sale interfaces',
          'Mobile merchant apps',
          'Checkout and storefront themes',
          'App ecosystem integrations',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'SMB e-commerce merchants building their brand online (DTC, dropshipping, creators)',
        secondary: 'Enterprise brands, retail stores with omnichannel needs, developers building commerce apps',
    },
    userProblems: [
        'Building an e-commerce store requires technical expertise and is expensive',
        'Managing inventory, payments, shipping, and taxes is complex',
        'Creating product descriptions, marketing content, and images takes too much time',
        'Understanding analytics and optimizing the business requires data expertise',
        'Scaling an online store means stitching together many tools and services',
    ],

    designerLinks: [
      {
        name: 'Shopify Careers - Designers',
        role: 'Company',
        platform: 'careers',
        url: 'https://www.shopify.com/careers/ux-designers_2e7f4ee3-5570-4d21-a0c0-a0baddd66bb5',
        description: 'Designer roles at Shopify',
      },
      {
        name: 'Tobi Lütke',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://x.com/tobi',
        description: 'CEO insights on AI-first strategy',
      },
    ],
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'Remote (global)',
        type: 'full-time',
        url: 'https://www.shopify.com/careers',
        requirements: [
          'Lead design projects of significant scope and complexity',
          'Creative vision, strategy, and execution',
          'Collaborate with 750+ designers globally',
        ],
      },
    ],

    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Tobi Lütke (CEO): "Reflexive AI usage is now a baseline expectation at Shopify." AI-first mandate with access to Claude, Copilot, Cursor.',
      },
      {
        source: 'careers',
        sentiment: 'positive',
        content: '750+ designers and content designers. Focus on enabling people to make commerce better at global scale. Company of generalists.',
      },
      {
        source: 'inc.com',
        sentiment: 'positive',
        content: 'CEO uses AI "all the time." Performance reviews now include AI integration. Hiring requires proving AI can\'t do the task first.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Public company with quarterly pressure. Large org means slower decisions but more stability.',
      },
    ],

    growthMetrics: {
      stage: 'mature-growth',
      revenueGrowth: "$10.7B revenue (2024), $1.78B profit",
      userGrowth: "Millions of merchants globally, 47% market cap growth YoY",
      signals: [
        "$218B market cap (Jan 2026)",
        "$10.7B revenue, $1.78B profit (2024)",
        "Public company since 2015 (IPO)",
        "750+ designers — strong design culture",
        "AI-first CEO mandate (Tobi Lütke)",
        "Sidekick and Magic AI tools launched (2024-2026)",
      ],

      tam: "$500B+ (global e-commerce platform market)",
      marketShare: "~10% (leading independent platform, behind Amazon)",
      ceiling: "Mature but growing: E-commerce continues to grow globally. AI tools (Sidekick, Magic) unlock new merchant capabilities. Agentic commerce is nascent frontier.",
      tailwinds: [
        "E-commerce continues to grow vs physical retail",
        "DTC brands prefer owning customer data vs Amazon",
        "AI tools democratize merchant capabilities (content, insights)",
        "App ecosystem creates network effects",
        "Point-of-sale integrates online + offline retail",
      ],
      headwinds: [
        "Amazon marketplace has massive traffic advantage",
        "WooCommerce is open-source and cheaper",
        "Economic downturn reduces consumer spending",
        "AI tools commoditize merchant advantages (everyone gets same Magic)",
        "Public company quarterly pressure",
      ],

      moatType: 'platform-ecosystem',
      moatStrength: "High: App ecosystem (8,000+ apps) creates network effects. Shopify Payments and infrastructure lock-in. Brand loyalty among merchants. But AI features are replicable by competitors.",
    },

    tracking: {
      status: 'watching',
      fitScore: 4,
      whyJoin: [
        'AI-first CEO mandate (Tobi Lütke)',
        '750+ designers — strong design culture',
        'Remote-friendly, global offices',
        'Stable public company with strong growth',
      ],
      whyNot: [
        'AI is feature, not core (Level C)',
        'Large org — slower decision-making',
        'E-commerce platform may feel distant from AI frontier',
        'Public company quarterly pressure',
      ],
      nextActions: [
        'Try Sidekick and Magic tools as a merchant',
        'Research Shopify design team culture',
        'Compare AI features with cutting-edge AI-native companies',
        'Understand Universal Commerce Protocol and agentic commerce vision',
      ],
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Shopify Magic and Sidekick',
        url: 'https://www.shopify.com/magic',
      },
      {
        title: 'Shopify Winter 26 Edition',
        url: 'https://www.shopify.com/news/winter-26-edition-renaissance',
      },
      {
        title: 'Shopify CEO AI-First Strategy',
        url: 'https://www.inc.com/ben-sherry/shopify-ceo-to-employees-use-ai-now/91173063',
      },
      {
        title: 'Shopify Careers',
        url: 'https://www.shopify.com/careers',
      },
    ],
  };
