import { Company } from '../types';

export const mistral: Company = {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'European AI lab building open-weight and commercial LLMs. The French challenger to OpenAI.',
    website: 'https://mistral.ai',
    screenshot: '/screenshots/mistral-screenshot.png',
    headquarters: 'Paris, France',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/mistral-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

    stage: 'Series C',
    valuation: '€11.7B (~$13.8B) (Sep 2025)',
    totalFunding: '€2.79B+ (~$3.0B+)',
    fundingHistory: [
      { stage: 'Seed', amount: '€105M', date: '2023-06', leadInvestors: ['Lightspeed'] },
      { stage: 'Series A', amount: '€385M', date: '2023-12', leadInvestors: ['a16z'] },
      { stage: 'Series B', amount: '€600M', date: '2024-06', valuation: '$6.2B', leadInvestors: ['General Catalyst'] },
      { stage: 'Series C', amount: '€1.7B', date: '2025-09', valuation: '€11.7B', leadInvestors: ['ASML'] },
    ],
    revenue: 'Growing (not disclosed)',
    growth: 'Reached €11.7B valuation in ~2 years after founding',
    customers: 'Enterprises, developers, European companies',

    competitors: [
      {
        name: 'OpenAI',
        description: 'GPT models, ChatGPT, market leader',
        whyTheyWin: 'First mover, brand recognition, Microsoft partnership',
      },
      {
        name: 'Anthropic',
        description: 'Claude, safety-focused AI',
        whyTheyWin: 'Enterprise trust, Claude quality, safety reputation',
      },
      {
        name: 'Cohere',
        description: 'Enterprise LLM platform',
        whyTheyWin: 'Enterprise focus, RAG expertise, data privacy',
      },
    ],
    marketPosition: 'European AI champion, open-weight leader',
    moat: [
      'Open-weight models — developer trust',
      'European data sovereignty positioning',
      'Ex-DeepMind/Meta AI founding team',
      'ASML backing — hardware advantage',
    ],

    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building open-weight foundation models from scratch. Creating European AI sovereignty. Zero-to-one in regional AI leadership.',
    aiDesignChallenges: [
      'API and developer experience',
      'Model playground and testing tools',
      'Enterprise deployment interfaces',
      'AI safety and control UX',
    ],

    founders: [
      {
        name: 'Arthur Mensch',
        role: 'CEO',
        background: 'Ex-DeepMind, École Polytechnique, PhD in ML',
      },
      {
        name: 'Guillaume Lample',
        role: 'Chief Scientist',
        background: 'Ex-Meta AI, created LLaMA, Carnegie Mellon',
      },
      {
        name: 'Timothée Lacroix',
        role: 'CTO',
        background: 'Ex-Meta AI, École Normale Supérieure, optimization expert',
      },
    ],
    whyBuilding:
      'Saw opportunity to build European AI champion. Believed open-weight models could compete with closed APIs. Wanted to keep AI development in Europe.',
    beliefs: [
      'Open-weight models benefit everyone',
      'Europe needs AI sovereignty',
      'Efficiency over brute-force scaling',
      'Science-first approach to AI',
    ],
    greenFlags: [
      'World-class founding team (DeepMind, Meta AI)',
      'Open-weight philosophy — developer love',
      'European funding and support',
      'ASML partnership — hardware access',
    ],
    redFlags: [
      'Competing with OpenAI/Anthropic',
      'European talent market smaller',
      'Less enterprise presence than US competitors',
    ],

    designTeam: {
      teamSize: '~5-10 (engineering-heavy)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Model behavior controls',
          'Safety guardrails UX',
          'Fine-tuning interfaces',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Model quality evaluation tools',
          'Benchmark visualization',
          'User feedback integration',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'API console and playground',
          'Documentation experience',
          'Enterprise deployment dashboard',
          'Model comparison tools',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'European enterprises and developers requiring AI with data sovereignty',
        secondary: 'AI researchers and developers globally seeking open-weight foundation models',
    },
    userProblems: [
        'Using US-based AI providers creates data sovereignty and regulatory compliance concerns',
        'Enterprises need to self-host AI models for security and control but lack quality options',
        'Closed-source AI models limit customization and fine-tuning for specific use cases',
        'European companies face pressure to keep data processing within EU jurisdiction',
        'Developers want transparent AI models they can inspect, modify, and deploy anywhere',
    ],

    designerLinks: [
      {
        name: 'Mistral Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://mistral.ai/news',
        description: 'Model releases and research',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer, Web apps',
        location: 'Paris / London / New York / Berlin / Barcelona / Amsterdam / Luxembourg / Brussels',
        url: 'https://jobs.lever.co/mistral/282e0150-5664-48e4-aa41-843493efdd4c',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. French AI talent concentration. Fast-moving despite large funding.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Strong developer community support. Open-weight models earn goodwill.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Limited reviews — young company. European work culture expected.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No salary data yet. European comp + equity.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M ARR (estimated 2025), ~3x YoY",
      userGrowth: "Developers globally, enterprise adoption growing",
      signals: [
        "Series C announced at €11.7B post-money valuation (Sep 2025)",
        "Total disclosed funding reached at least €2.79B",
        "One of the highest-valued AI startups in Europe",
        "DeepMind/Meta AI research talent founders",
        "European open-weight AI champion",
      ],

      tam: "$500B+ (Foundation model market = all AI applications)",
      marketShare: "<0.1% (competing against OpenAI, Anthropic, Google)",
      ceiling: "Early innings: Foundation model market is forming. European sovereignty angle creates regional moat, but global market dominated by US/Chinese players.",
      tailwinds: [
        "European data sovereignty concerns favor Mistral over US providers",
        "Open-weight models capture developer trust and experimentation",
        "EU AI regulations may favor European providers",
        "French government support (AI strategy)",
        "Enterprise demand for self-hosted models (security, control)",
      ],
      headwinds: [
        "OpenAI, Anthropic, Google have larger compute budgets",
        "Meta's open-source Llama is free and competitive",
        "Limited consumer distribution vs ChatGPT",
        "European market smaller than US/Asia",
        "Talent competition with US AI labs (higher comp)",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Research talent and European positioning create differentiation. Open-weight strategy builds developer mindshare but limits monetization. No network effects, model quality is competitive moat.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'L4 AI-native company',
        'World-class founding team',
        'Remote Europe option',
        'Open-weight philosophy',
        '$14B but still early-stage feel',
      ],
      whyNot: [
        'Paris-based (timezone)',
        'Smaller than Anthropic/OpenAI',
        'Engineering-dominated culture',
      ],
      nextActions: [
        'Research Mistral product roadmap',
        'Try Mistral API and models',
        'Check timezone compatibility',
      ],
    },

    lastUpdated: '2026-02-13',
    sources: [
    { title: 'Mistral AI Series C announcement (official)', url: 'https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai' },
    { title: 'Mistral AI Careers', url: 'https://mistral.ai/careers' },
    { title: 'Mistral AI Product Designer, Web apps (Lever)', url: 'https://jobs.lever.co/mistral/282e0150-5664-48e4-aa41-843493efdd4c' },
    { title: 'TechCrunch - Mistral on cusp of $14B valuation (reporting context)', url: 'https://techcrunch.com/2025/09/03/mistral-the-french-ai-giant-is-reportedly-on-the-cusp-of-securing-a-14-billion-valuation/' },
    { title: 'Bloomberg - Mistral set for €12B ($14B) valuation (reporting context)', url: 'https://www.bloomberg.com/news/articles/2025-09-03/mistral-set-for-14-billion-valuation-with-new-funding-round' },
    { title: 'Crunchbase - Mistral AI company financials', url: 'https://www.crunchbase.com/organization/mistral-ai/company_financials' }
  ],
  };
