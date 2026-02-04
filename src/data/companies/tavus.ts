import { Company } from '../types';

export const tavus: Company = {
    id: 'tavus',
    name: 'Tavus',
    description: 'AI-powered personalized video generation platform. Face and voice cloning for sales, marketing, and training at scale.',
    website: 'https://tavus.io',
  screenshot: '/screenshots/tavus-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/tavus-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'video-generation', 'audio-generation'],
  markets: ['b2c'],
  category: 'ai-models' as const,

  industries: ['infrastructure', 'developer-tools'],

    stage: 'Series B',
    valuation: '$80M',
    totalFunding: '$64.2M',
    fundingHistory: [
      { stage: 'Seed', amount: '$6.1M', date: '2023-03', leadInvestors: ['Sequoia Capital', 'Y Combinator'] },
      { stage: 'Series A', amount: '$18M', date: '2024-03', leadInvestors: ['Scale Venture Partners'] },
      { stage: 'Series B', amount: '$40M', date: '2025-11', valuation: '$80M', leadInvestors: ['Index Ventures'] },
    ],
    revenue: 'N/A',
    growth: 'API-first developer platform, enterprise customers',
    runway: '36+ months',
    customers: 'Sales teams, marketers, customer success teams',

    competitors: [
      {
        name: 'Synthesia',
        description: '$1B+ valuation AI video platform',
        whyTheyWin: 'Market leader with $180M raised, 50+ languages, enterprise-grade features',
      },
      {
        name: 'HeyGen',
        description: 'AI video creator with avatar marketplace',
        whyTheyWin: 'Lower pricing, faster generation, large template library',
      },
      {
        name: 'D-ID',
        description: 'Talking head video generation',
        whyTheyWin: 'Longer track record (2017), established in creative industry',
      },
    ],
    marketPosition: 'Developer-first API platform for personalized video at scale',
    moat: [
      'Phoenix Model: Hyper-realistic avatars',
      'Hummingbird Model: Advanced lip-sync technology',
      'Conversational Video Interface (600ms latency)',
      'API-first platform for developers',
      'YC S21 + Sequoia backing',
    ],
    vsGiants: 'API-first vs Synthesia\'s UI-first approach. Focus on real-time conversational video (600ms latency) vs batch generation. Developer platform play enables embedding in existing workflows. Personalization at scale vs generic template approach.',

    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Personalized video generation at scale is a category created by AI. Phoenix/Hummingbird models, real-time conversational video (600ms), API-first platform all zero-to-one innovations.',
    aiDesignChallenges: [
      'Avatar realism and uncanny valley avoidance',
      'Real-time conversation design (600ms latency)',
      'Personalization variable management',
      'API developer experience',
      'Output quality consistency at scale',
    ],

    founders: [
      {
        name: 'Hassaan Raza',
        role: 'CEO',
        background: 'University of Texas at Austin, ex-Apple engineer, ex-Google engineer',
      },
      {
        name: 'Quinn Favret',
        role: 'COO',
        background: 'Stanford Graduate School of Business, University of Michigan Ross School of Business',
      },
    ],
    whyBuilding:
      'Video personalization is the most effective communication medium, but creating personalized videos manually doesn\'t scale. AI should enable 1:1 video communication at scale.',
    beliefs: [
      'Personalized video is the highest-engagement communication medium',
      'API-first platforms enable broader adoption than UI-only tools',
      'Real-time conversational video is the next frontier',
    ],
    greenFlags: [
      'YC S21 batch + Sequoia backing',
      'API-first developer platform strategy',
      'Real-time conversational video (600ms latency) is cutting-edge',
      '$64.2M raised — strong runway',
    ],
    redFlags: [
      'Synthesia has $1B+ valuation and market lead',
      'Competitive space with many alternatives',
      'Video generation quality race is expensive',
      'Limited public design team visibility',
    ],

    designTeam: {
      teamSize: '~3-5',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Avatar behavior and emotion design',
          'Conversational video interaction patterns',
          'Personalization variable logic',
          'Real-time latency optimization',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Avatar realism assessment',
          'Lip-sync accuracy metrics',
          'Personalization effectiveness',
          'API reliability and performance',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'API documentation and developer UX',
          'Dashboard for video management',
          'Avatar creation workflows',
          'Variable mapping interfaces',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Sales and marketing teams at B2B companies needing personalized outreach at scale',
        secondary: 'Customer success teams, recruiters, training departments, and developers building video features',
    },
    userProblems: [
        'Personalized video outreach doesn\'t scale — recording individual videos for each prospect is impossible',
        'Generic email and text outreach has low engagement and response rates',
        'Video creation requires on-camera time, editing skills, and high production costs',
        'Maintaining personal touch in automated workflows is challenging',
        'Integrating video into existing sales and marketing tech stacks is difficult',
    ],

    designerLinks: [
      {
        name: 'Tavus Twitter',
        role: 'Company',
        platform: 'twitter',
        url: 'https://twitter.com/tavus_io',
        description: 'Product updates and demos',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco, CA',
        type: 'full-time',
        url: 'https://jobs.ashbyhq.com/tavus',
        requirements: [
          '3+ years product design experience',
          'Experience with developer tools or API products',
          'Understanding of AI/ML product design',
        ],
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'YC S21 batch. 40 employees. Developer-first culture. Strong engineering team (9 engineering roles open).',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Active on social media with product demos. Fast-moving with frequent feature launches.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — early-stage startup with limited public employee feedback.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design salary data available.',
      },
    ],

    growthMetrics: {
      stage: 'early-growth',
      revenueGrowth: "Unknown (API pricing model, enterprise customers)",
      userGrowth: "Developer platform with API-first approach",
      signals: [
        "$64.2M raised across 3 rounds in 24 months (2023-2025)",
        "Sequoia, Scale VC, Index Ventures — tier-1 investors",
        "YC S21 batch (strong network and validation)",
        "12 open roles (1 Design, 9 Engineering) — hiring actively",
        "Conversational Video Interface with 600ms latency (cutting-edge tech)",
      ],

      tam: "$8B+ (video personalization for sales, marketing, training)",
      marketShare: "<1% (early market, competing against Synthesia's lead)",
      ceiling: "Early innings: Personalized video is proven (Synthesia $1B+), but real-time conversational video is new frontier. API-first strategy could unlock broader distribution.",
      tailwinds: [
        "Personalized video outperforms generic content in engagement",
        "Sales and marketing teams need scalable personalization tools",
        "API-first platforms enable embedding in existing workflows",
        "Real-time conversational video opens new use cases",
        "Developer platforms have strong network effects",
      ],
      headwinds: [
        "Synthesia has $1B+ valuation and market leadership",
        "Many alternatives (HeyGen, D-ID, Elai.io) in competitive space",
        "Video generation compute costs are high",
        "Quality and realism arms race requires constant investment",
        "Enterprise sales cycles are long",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Phoenix/Hummingbird models and conversational video tech are differentiated. API-first strategy creates integration lock-in. YC/Sequoia network provides customer access. But video generation is commoditizing.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-Core product (Level B)',
        'API-first developer platform',
        'YC S21 + Sequoia backing',
        'Real-time conversational video is cutting-edge',
      ],
      whyNot: [
        'Synthesia has strong market lead',
        'Limited design team visibility',
        'B2B enterprise sales — slower feedback loops',
        'Competitive space with many alternatives',
      ],
      nextActions: [
        'Try Tavus API and dashboard',
        'Research Phoenix Model demos',
        'Compare UX with Synthesia and HeyGen',
        'Check if design team has public portfolio',
      ],
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Tavus Series B Funding',
        url: 'https://www.crunchbase.com/organization/tavus',
      },
      {
        title: 'Tavus Product Features',
        url: 'https://tavus.io',
      },
    ],
  };
