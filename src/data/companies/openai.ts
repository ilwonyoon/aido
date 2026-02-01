import { Company } from '../types';

export const openai: Company = {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leading AI research company behind GPT-4, ChatGPT, and DALL-E. Pioneering AGI development.',
    website: 'https://openai.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/openai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'image-generation', 'search-retrieval'],
  markets: ['b2b'],
  industries: ['sales-marketing'],

    // Business
    stage: 'Series F',
    valuation: '$300B+ (2025)',
    totalFunding: '$57.9B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$1B', date: '2015-12', leadInvestors: ['Elon Musk', 'Sam Altman', 'Reid Hoffman'] },
      { stage: 'Series A', amount: '$1B', date: '2019-07', valuation: '$10B', leadInvestors: ['Microsoft'] },
      { stage: 'Series B', amount: '$10B', date: '2023-01', valuation: '$29B', leadInvestors: ['Microsoft'] },
      { stage: 'Series C', amount: '$300M', date: '2023-04', valuation: '$29B', leadInvestors: ['Sequoia', 'a16z'] },
      { stage: 'Series D', amount: '$6.6B', date: '2024-10', valuation: '$157B', leadInvestors: ['Thrive Capital'] },
      { stage: 'Series F', amount: '$40B', date: '2025-03', valuation: '$300B', leadInvestors: ['SoftBank'] },
    ],
    revenue: '~$20B+ ARR (Dec 2025)',
    growth: '3x YoY (2024 $6B → 2025 $20B)',
    runway: 'Burns $8B/year but well-funded for years',
    customers: '800M+ weekly users, 1M+ business customers',

    // Competition
    competitors: [
      {
        name: 'Anthropic',
        description: 'Claude models, safety-focused competitor',
        whyTheyWin: 'Safety narrative appeals to enterprises, Claude quality competitive',
      },
      {
        name: 'Google DeepMind',
        description: 'Gemini models integrated into Google',
        whyTheyWin: 'Unlimited resources, distribution through Google products',
      },
      {
        name: 'Meta AI',
        description: 'Llama open-source models',
        whyTheyWin: 'Open-source captures developer mindshare',
      },
    ],
    marketPosition: '#1 in Consumer AI, #1 in mindshare',
    moat: [
      'ChatGPT brand recognition is unmatched',
      'First-mover advantage in consumer AI',
      'Microsoft partnership ($13B+ investment)',
      'Best talent density in AI research',
    ],
    vsGiants: 'THE giant. Sets the pace for the industry. Brand synonymous with AI. Microsoft partnership provides distribution and resources.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building AGI is the mission. Creating foundational models that define the AI era. High risk, extreme upside potential.',
    aiDesignChallenges: [
      'ChatGPT UX: conversational AI at massive scale',
      'Multi-modal interactions: voice, vision, code in one product',
      'Enterprise features: teams, security, customization',
      'Operator/Agent UX: autonomous AI actions with human oversight',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Sam Altman',
        role: 'CEO',
        background: 'Ex-Y Combinator President, serial entrepreneur',
      },
      {
        name: 'Greg Brockman',
        role: 'President',
        background: 'Ex-Stripe CTO',
      },
    ],
    whyBuilding:
      'Founded in 2015 to ensure AGI benefits humanity. Sam Altman returned after brief ousting in 2023.',
    beliefs: [
      'AGI will be the most transformative technology in human history',
      'Safety and capability should advance together',
      'Broad distribution is better than hoarding AI',
      'Move fast, ship products to learn',
    ],
    designPhilosophy:
      'Make AI accessible to everyone. ChatGPT should be as easy as texting. Recently hiring top design talent (Jony Ive team).',
    greenFlags: [
      'Hired Jony Ive (Apple) and his team members',
      'Kevin Weil as CPO (ex-Instagram VP)',
      'Design investment increasing significantly',
      'Multiple Product Designer roles open',
    ],
    redFlags: [
      'Massive company — bureaucracy risk',
      'Governance drama (Sam Altman ousting)',
      'Safety team departures concerning',
      'In-person only (SF)',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Kevin Weil (ex-Instagram VP Product)',
      teamSize: 'Growing (50+)',
      notableMembers: [
        { name: 'Tang Tan', role: 'Design (ex-Jony Ive team, Apple)' },
        { name: 'Evans Hankey', role: 'Design (ex-Apple VP Design)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'ChatGPT personality and response patterns',
          'Multi-modal interaction logic (text, voice, vision)',
          'Operator/Agent autonomous action rules',
          'Custom GPT behavior configuration',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Response quality evaluation frameworks',
          'User satisfaction and engagement metrics',
          'Safety and alignment testing UX',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'ChatGPT web and mobile experiences',
          'Voice mode interface',
          'Enterprise dashboard and admin tools',
          'Developer platform and API documentation',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'General consumers and knowledge workers seeking AI assistance',
        secondary: 'Developers building AI applications via API and enterprise teams',
    },
    userProblems: [
        'Knowledge workers spend hours on research, writing, and analysis that could be accelerated',
        'Learning new topics requires extensive reading and synthesis of information',
        'Creative tasks like brainstorming and content generation hit productivity limits',
        'Developers need powerful AI models without building infrastructure from scratch',
        'Businesses need AI for customer support, automation, and data analysis at scale',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, ChatGPT',
        location: 'San Francisco, CA',
        url: 'https://openai.com/careers/product-designer-chatgpt-san-francisco/',
      },
      {
        title: 'Product Designer, Growth',
        location: 'San Francisco, CA',
        url: 'https://openai.com/careers/product-designer-growth-san-francisco/',
      },
    ],

    cultureInsights: [
      {
        source: 'blind',
        sentiment: 'positive',
        content: 'Top talent density. Competitive comp. Fast-paced. High expectations.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Major design investment — Jony Ive team hires signal design priority.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Intense work environment. Politics exist at senior levels. Great pay and equity.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        content: 'Product Designer: $200K-$310K base. Strong equity. Total comp very competitive.',
        url: 'https://www.levels.fyi/companies/openai/salaries/product-designer',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$20B ARR (2025), 10x+ YoY ($2B → $20B)",
      userGrowth: "300M+ weekly active users, fastest consumer app to 200M users",
      signals: [
        "$300B+ valuation target (restructuring to for-profit)",
        "$20B ARR = largest AI company by revenue",
        "300M+ weekly active ChatGPT users",
        "Microsoft $13B partnership",
        "Jony Ive team hired (design investment)",
      ],

      tam: "$500B+ (AI for all knowledge work, automation, creativity)",
      marketShare: "~4% = 25x upside potential",
      ceiling: "Mid innings: ChatGPT defined the AI assistant category, but market is rapidly evolving. Ceiling depends on maintaining model quality lead and expanding beyond chat.",
      tailwinds: [
        "ChatGPT brand is synonymous with AI (like 'Google' for search)",
        "Microsoft distribution through Office, Azure, Windows",
        "Developer platform (GPT Store, API) creates ecosystem",
        "o1 reasoning model opens new use cases (coding, math, science)",
        "AGI narrative drives enterprise willingness to pay premium",
      ],
      headwinds: [
        "Anthropic's Claude growing faster in enterprise (32% vs OpenAI's declining share)",
        "Google has unlimited compute and distribution advantages",
        "Safety team departures hurt reputation",
        "Governance drama (Sam Altman firing/rehiring) created uncertainty",
        "Expensive compute burns $5B+/year, path to profitability unclear",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Brand dominance in consumer AI is massive, but models are commoditizing. Developer ecosystem and Microsoft partnership create distribution moat. No strong network effects beyond GPT Store.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Define how billions interact with AI',
        'Working alongside Jony Ive team members',
        'Top compensation in the industry',
        'Most influential AI company',
      ],
      whyNot: [
        'Very large company now — not startup feel',
        'Governance drama and safety team departures',
        'In-person only (SF)',
        'May be harder to have outsized impact',
      ],
      nextActions: ['Apply to Product Designer role', 'Research which team (ChatGPT, Platform, Growth)'],
      notes: 'Biggest name in AI. Design investment increasing. Consider which team matters most.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'OpenAI $20B ARR - Sherwood News',
        url: 'https://sherwood.news/business/openais-arr-reached-over-usd20-billion-in-2025-cfo-says/',
      },
      {
        title: 'OpenAI Stats and Funding - Sacra',
        url: 'https://sacra.com/c/openai/',
      },
    ],
  };
