import { Company } from '../types';

export const jasper: Company = {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI marketing platform for enterprises, enabling teams to create on-brand content at scale with generative AI.',
    website: 'https://jasper.ai',
    screenshot: '/screenshots/jasper-screenshot.png',
    headquarters: 'Austin, TX',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/jasper-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'creative-media' as const,

  industries: ['infrastructure', 'creative-media'],

    // Business
    stage: 'Series A',
    valuation: '$1.2B (2024, post-layoffs)',
    totalFunding: '$131M',
    fundingHistory: [
      { stage: 'Seed', amount: '$6M', date: '2021-10', leadInvestors: ['Foundation Capital'] },
      { stage: 'Series A', amount: '$125M', date: '2022-10', valuation: '$1.5B', leadInvestors: ['Insight Partners'] },
    ],
    revenue: '$88M ARR (2025)',
    growth: 'Slowed after 2023 peak, layoffs in Sept 2023',
    runway: 'Moderate — $125M Series A funds, but slower growth',
    customers: '100,000+ customers',

    // Competition
    competitors: [
      {
        name: 'Copy.ai',
        description: 'AI-native GTM strategy platform',
        whyTheyWin: 'Simpler product, GTM focus, less overwhelming UI',
      },
      {
        name: 'Writesonic',
        description: 'AI-powered content generation with SEO focus',
        whyTheyWin: 'SEO features, cheaper pricing',
      },
      {
        name: 'Typeface',
        description: 'Enterprise generative AI for marketing',
        whyTheyWin: 'Ex-Adobe CTO founder, Fortune 500 focus',
      },
      {
        name: 'Writer.com',
        description: 'Enterprise AI writing platform',
        whyTheyWin: 'Proprietary Palmyra LLM, brand voice consistency',
      },
    ],
    marketPosition: 'Early leader in AI content, now facing strong competition',
    moat: [
      'First-mover advantage: launched early in AI content wave',
      '100,000+ customers = data flywheel',
      'Brand recognition in AI marketing',
      'Enterprise pivot: moving upmarket',
    ],
    vsGiants: 'Jasper was first to market but now faces competition from Typeface (ex-Adobe), Writer.com, and simpler tools like Copy.ai.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI is core differentiator. Jasper\'s value is AI-powered content generation. But product could exist as content management tool without AI (less valuable).',
    aiDesignChallenges: [
      'Brand voice consistency: AI generating on-brand content',
      'Template vs freeform: balancing structure with flexibility',
      'Workflow integration: embedding AI into marketing processes',
      'Quality control: enterprise standards for AI content',
      'Overwhelming UI: simplifying complex AI features',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Dave Rogenmoser',
        role: 'Co-founder (stepped down 2023)',
        background: 'Serial entrepreneur. Founded Jasper (formerly Jarvis) in early 2021. Stepped down as CEO in Sept 2023, now Chairman.',
      },
      {
        name: 'Chris Hull',
        role: 'Co-founder',
        background: 'Technical co-founder.',
      },
      {
        name: 'John Philip Morgan',
        role: 'Co-founder',
        background: 'Co-founder who stepped down with Rogenmoser in 2023.',
      },
    ],
    whyBuilding: 'Rogenmoser saw the explosion of GPT-3 and realized content marketers needed AI tools. Jasper was one of the first to market with AI writing, catching the wave early.',
    beliefs: [
      'AI will transform marketing workflows (original vision)',
      'Enterprise-first: serve marketing teams, not individual creators',
      'Brand consistency: AI needs to understand company voice',
      'Workflow orchestration: content creation is multi-step',
    ],
    designPhilosophy: 'Enterprise marketing AI with brand control. Simplify complex AI for marketers.',
    greenFlags: [
      'First-mover: early in AI content wave',
      '100,000+ customers',
      'Enterprise pivot: Jasper Studio for custom AI apps',
      'New CEO: Timothy Young (ex-Dropbox President)',
    ],
    redFlags: [
      'Founders stepped down (Sept 2023) — leadership uncertainty',
      'Valuation down: $1.5B → $1.2B (20% haircut)',
      'Layoffs in 2023',
      'Overwhelming UI: users complain about complexity',
      'Strong competition: Typeface, Copy.ai, Writer.com',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Timothy Young (joined Sept 2023, ex-Dropbox President)',
      teamSize: '~50-100 (estimated, post-layoffs)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Designing brand voice: AI understanding company style',
          'Building workflow orchestration for marketing campaigns',
          'Defining AI behaviors for different content types',
          'Creating feedback loops for brand consistency',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing quality metrics for AI content',
          'Building approval workflows for enterprise',
          'Creating brand compliance checks',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Simplifying overwhelming UI (current pain point)',
          'Content creation interfaces for marketers',
          'Jasper Studio: no-code AI app builder',
          'Campaign management dashboards',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Marketing teams and content marketers creating blog posts, ads, and copy',
        secondary: 'Small business owners and solopreneurs needing content at scale',
    },
    userProblems: [
        'Creating high-quality marketing copy and blog content takes hours per piece',
        'Hiring freelance writers costs $100-$500+ per article limiting content output',
        'Maintaining consistent brand voice across multiple writers is difficult',
        'SEO content production requires volume most teams cannot sustain',
        'Blank page syndrome slows content creation requiring extensive research and outlining',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
              title: 'Principal Product Designer',
              location: 'Austin, TX / Remote',
              url: 'https://jobs.ashbyhq.com/Jasper%20AI',
              level: 'Principal',
              type: 'full-time',
              aboutRole: 'Shape Jasper\'s AI tools\' user experience, mentor designers, and prototype workflows, collaborating closely with PMs and engineers.',
              responsibilities: [
                'Lead design of AI-powered marketing tools',
                'Mentor junior designers',
                'Prototype workflows for AI content creation',
                'Collaborate with PMs, engineers, and marketers',
                'Simplify complex AI features',
              ],
              requirements: [
                'Principal-level experience (10+ years)',
                'Experience designing AI/ML products',
                'Strong portfolio of enterprise design',
                'Understanding of marketing workflows',
              ],
              whyInteresting: 'Fixing Jasper\'s overwhelming UI problem. Designing for 100,000+ customers. Working with new CEO from Dropbox.',
            }
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.7,
        content: 'Founders stepped down in 2023. Layoffs. New CEO Timothy Young (ex-Dropbox) brings stability.',
      },
    ],

    growthMetrics: {
      stage: 'plateau',
      revenueGrowth: "$88M ARR (2025), <1.5x YoY (slowing from 3x in 2022-2023)",
      userGrowth: "100,000+ customers, but churn increasing",
      signals: [
        "$1.2B valuation (down from $1.5B peak = 20% haircut)",
        "$88M ARR but slowing growth",
        "Founders stepped down in Sept 2023",
        "Layoffs in 2023",
        "New CEO Timothy Young (ex-Dropbox President) brought in to stabilize",
      ],

      tam: "$30B+ (Enterprise marketing and creative software)",
      marketShare: "~0.3% (first-mover advantage fading)",
      ceiling: "Mid innings but slowing: Jasper caught early AI wave but losing to better-funded, better-positioned competitors. Ceiling limited by UI complexity and competition.",
      tailwinds: [
        "100,000+ customers = data and distribution base",
        "Enterprise pivot (Jasper Studio) targeting bigger deals",
        "New CEO from Dropbox brings enterprise SaaS expertise",
        "Remote-first = cost efficiency",
      ],
      headwinds: [
        "Typeface has ex-Adobe CTO and Fortune 500 focus",
        "Copy.ai, Writesonic winning on simplicity and price",
        "ChatGPT, Claude can generate marketing copy (free/cheap)",
        "UI complexity driving churn ('overwhelming' feedback)",
        "Founders departed = vision/momentum lost",
        "Valuation down and layoffs signal struggling growth",
      ],

      moatType: 'switching-costs',
      moatStrength: "Low-Medium: 100K customers create some scale advantages, but content generation is commoditizing. Switching costs are low (AI writing is generic). First-mover advantage eroded.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 3: AI is core differentiator',
        '100,000+ customers',
        'Principal Product Designer role (senior level)',
        'Yes',
        'Clear design challenge: simplify overwhelming UI',
      ],
      whyNot: [
        'Founders left (Sept 2023) — leadership uncertainty',
        'Valuation down, layoffs',
        'Strong competition: Typeface, Copy.ai, Writer.com',
        'Slower growth post-2023',
      ],
      nextActions: [
        'Try Jasper product extensively',
        'Research Timothy Young (new CEO)',
        'Connect with Jasper designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'Source', url: 'https://www.jasper.ai/blog/jasper-announces-125m-series-a-funding' },
    { title: 'Source', url: 'https://getlatka.com/companies/jasper.ai' },
    { title: 'Source', url: 'https://www.jasper.ai/blog/jasper-new-ceo' },
    { title: 'Source', url: 'https://sqmagazine.co.uk/jasper-ai-statistics/' }
  ],
  };
