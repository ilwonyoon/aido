import { Company } from '../types';

export const typeface: Company = {
    id: 'typeface',
    name: 'Typeface',
    description: 'Generative AI platform for enterprise marketing content, enabling businesses to create personalized, on-brand content at scale.',
    website: 'https://typeface.ai',
  screenshot: '/screenshots/typeface-screenshot.png',
    headquarters: 'Palo Alto, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/typeface-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2c', 'b2b', 'enterprise'],
  category: 'creative-media' as const,

  industries: ['infrastructure', 'creative-media'],

    // Business
    stage: 'Series B',
    valuation: '$1B (Jun 2023)',
    totalFunding: '$206M',
    fundingHistory: [
      { stage: 'Series A', amount: '$65M', date: '2023-02', leadInvestors: ['Lightspeed Venture Partners', 'GV', 'M12'] },
      { stage: 'Series B', amount: '$100M', date: '2023-06', valuation: '$1B', leadInvestors: ['Salesforce Ventures'] },
    ],
    revenue: 'Not disclosed (enterprise sales)',
    growth: 'Fortune 500 customers within first year',
    runway: 'Strong — well-capitalized',
    customers: 'Fortune 500 companies, enterprise marketing teams',

    // Competition
    competitors: [
      {
        name: 'Jasper',
        description: 'AI marketing content platform',
        whyTheyWin: 'First-mover advantage, strong brand in content creation',
      },
      {
        name: 'Copy.ai',
        description: 'AI copywriting tool',
        whyTheyWin: 'Simpler product, easier adoption for SMBs',
      },
      {
        name: 'Writesonic',
        description: 'AI writing assistant',
        whyTheyWin: 'Lower price point, more accessible',
      },
      {
        name: 'Adobe Firefly',
        description: 'Adobe\'s generative AI for creative workflows',
        whyTheyWin: 'Adobe ecosystem, deep integration with Creative Cloud',
      },
    ],
    marketPosition: 'Leader in enterprise generative AI for marketing',
    moat: [
      'Enterprise focus: built for Fortune 500 vs SMBs',
      'Brand personalization: custom AI trained on company brand',
      'Salesforce/Google/Microsoft partnerships',
      'Founder credibility: Abhay Parasnis (ex-CTO of Adobe)',
      'Workflow orchestration: not just content generation',
    ],
    vsGiants: 'Typeface focuses on enterprise brand control vs generic AI tools. Adobe Firefly is creative-first, Typeface is marketing-first.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI is core differentiator. Typeface\'s value prop is AI-powered content generation. But could exist as traditional content management without AI (less valuable).',
    aiDesignChallenges: [
      'Brand consistency: ensuring AI generates on-brand content',
      'Workflow integration: embedding AI into existing marketing processes',
      'Multi-modal content: text, images, video generation',
      'Personalization at scale: custom AI per enterprise customer',
      'Quality control: enterprise standards for AI-generated content',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Abhay Parasnis',
        role: 'CEO & Co-founder',
        background: 'Former CTO, CPO & EVP of Adobe (2015-2022). Prior GM at Microsoft (2002-2011). Deep enterprise software expertise.',
      },
      {
        name: 'Vishal Sood',
        role: 'Co-founder',
        background: 'Enterprise software background.',
      },
      {
        name: 'Tran Anh',
        role: 'Co-founder',
        background: 'Enterprise software background.',
      },
    ],
    whyBuilding: 'Parasnis saw the explosion of generative AI while at Adobe. He left to build Typeface because he believed enterprise marketing needed AI-native tools, not retrofitted legacy software.',
    beliefs: [
      'Generative AI will transform enterprise marketing',
      'Brand control is critical: enterprises need personalized AI',
      'Workflow orchestration > content generation alone',
      'Enterprise-first: serve Fortune 500, not prosumers',
      'Partnerships with Salesforce/Google/Microsoft = distribution',
    ],
    designPhilosophy: 'Enterprise-grade AI with brand control. Design for marketing teams, not individual creators.',
    greenFlags: [
      'Founder pedigree: Parasnis was CTO of Adobe',
      'Enterprise traction: Fortune 500 within first year',
      'Strategic partnerships: Salesforce, Google, Microsoft',
      'Well-funded: $206M raised at $1B valuation',
      'Timing: caught generative AI wave early',
    ],
    redFlags: [
      'Competitive market: Jasper, Copy.ai, Adobe all competing',
      'Long enterprise sales cycles',
      'Adobe integration advantage: Firefly in Creative Cloud',
      'Unclear differentiation vs Jasper at enterprise level',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~30-50 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing brand personalization: how AI learns company brand',
          'Building workflow orchestration: multi-step marketing campaigns',
          'Defining AI behaviors for different content types (social, email, long-form)',
          'Creating feedback loops for brand consistency',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing quality metrics for AI-generated content',
          'Building approval workflows for enterprise marketing',
          'Creating brand compliance checks',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Content creation interfaces for marketing teams',
          'Campaign management dashboards',
          'Brand asset libraries',
          'Multi-modal content generation (text, images, video)',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Enterprise marketing teams creating branded content at scale',
        secondary: 'Brand managers ensuring consistency across campaigns and channels',
    },
    userProblems: [
        'Creating on-brand marketing content requires designers and copywriters limiting speed',
        'Brand guidelines scattered across documents make consistency hard to enforce',
        'Agencies charge $5K-$50K+ per campaign limiting content production velocity',
        'Personalizing content for different segments requires manual recreation',
        'Marketing teams lack design skills to create professional visual assets',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Palo Alto, CA (Hybrid)',
        url: 'https://job-boards.greenhouse.io/typeface/jobs/4616989007',
        type: 'full-time',
        aboutRole: 'Create and execute design solutions for generative AI tools that empower marketing teams to create personalized content at scale.',
        responsibilities: [
          'Design user-friendly, visually appealing products',
          'Work with cross-functional teams to ensure products meet customer needs',
          'Build design systems for AI-powered marketing tools',
        ],
        whyInteresting: 'Designing for Fortune 500 marketing teams. Building enterprise AI tools with massive scale impact.',
      },
      {
        title: 'Staff Product Designer',
        location: 'Palo Alto, CA',
        url: 'https://job-boards.greenhouse.io/typeface/jobs/4617046007',
        level: 'Staff',
        type: 'full-time',
        compensation: '$175K-$240K',
        aboutRole: 'Lead end-to-end design for multiple product areas and features in AI-powered marketing platform.',
        responsibilities: [
          'Lead end-to-end design for multiple product areas',
          'Create design solutions and coordinate cross-functional shipping',
          'Ensure products are user-friendly and visually appealing',
          'Mentor junior designers',
          'Work independently with minimal guidance',
        ],
        requirements: [
          '10+ years experience with Bachelor\'s degree',
          'Strong portfolio demonstrating design skills and attention to detail',
          'Generative AI experience with AI tools',
          'Ability to thrive in fast-paced, high-change environments',
          'Proficiency with Figma',
        ],
        preferred: [
          'B2B/SaaS product design experience',
          'AI product design experience',
          'HTML/CSS and front-end development knowledge',
        ],
        teamInfo: 'Design team with veterans from Adobe, Microsoft, Google, and top AI companies.',
        whyInteresting: 'Hybrid 3 days/week. Leadership role in enterprise AI marketing design. Working with ex-Adobe CTO (Abhay Parasnis). $165M raised from Microsoft, GV, Salesforce Ventures. Competitive equity, flexible PTO, daily meals, mentorship with AI leaders.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Strong enterprise culture, ex-Adobe team brings professionalism and rigor.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$50M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "Fortune 500 customers, enterprise adoption growing",
      signals: [
        "$1B valuation at Series C",
        "$206M total raised (GV, Salesforce Ventures, M12)",
        "Fortune 500 customers within first year",
        "Strategic partnerships: Salesforce, Google, Microsoft",
        "Ex-Adobe CTO founder (Abhay Parasnis)",
      ],

      tam: "$30B+ (Enterprise marketing and creative software)",
      marketShare: "<0.2% (early enterprise AI marketing adoption)",
      ceiling: "Early-mid innings: Enterprise marketing AI is nascent. Typeface competing against Adobe (incumbent) and Jasper (early mover). Ceiling depends on enterprise adoption speed.",
      tailwinds: [
        "CMOs under pressure to create more content with less budget",
        "Brand control requirements favor enterprise-specific AI",
        "Salesforce/Google/Microsoft partnerships = distribution",
        "Marketing budgets are large ($200B+ globally)",
        "Ex-Adobe founder credibility with enterprise buyers",
      ],
      headwinds: [
        "Adobe owns enterprise creative market and adding AI features",
        "Jasper had first-mover advantage in AI marketing content",
        "Copy.ai, Writesonic, and 100+ competitors",
        "Enterprise sales cycles are 12-18 months",
        "Generative AI content quality vs brand standards gap",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Enterprise integrations (Salesforce, DAMs) and brand customization create switching costs. But content generation is commoditizing. Partnerships provide distribution moat.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level 3: AI is core differentiator',
        'Founder credibility: Parasnis (ex-CTO Adobe)',
        'Enterprise focus: Fortune 500 customers',
        'Well-funded: $206M at $1B valuation',
        'Multiple Product Designer roles open',
      ],
      whyNot: [
        'Enterprise sales: slower, more conservative',
        'Competitive: Jasper, Copy.ai, Adobe all competing',
        'Marketing domain: less exciting than other verticals?',
      ],
      nextActions: [
        'Try Typeface product',
        'Research Abhay Parasnis background',
        'Connect with Typeface designers on LinkedIn',
        'Apply for Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T11:00:00',
    sources: [
    { title: 'Source', url: 'https://techcrunch.com/2023/06/29/typeface-which-is-building-generative-ai-for-brands-raises-100m-at-a-1b-valuation/' },
    { title: 'Source', url: 'https://www.linkedin.com/pulse/abhay-parasnis-typeface-1-billion-valuation-brett-stapper-uxake' },
    { title: 'Source', url: 'https://tracxn.com/d/companies/typeface/__9jDBm6q1mJzBb-dsOYViFE4NRwFTNrCwreA895blLoM' }
  ],
  };
