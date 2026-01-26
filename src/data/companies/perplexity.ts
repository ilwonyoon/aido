import { Company } from '../types';

export const perplexity: Company = {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered answer engine that provides direct answers with sources, challenging Google Search.',
    website: 'https://perplexity.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series D',
    valuation: '$20B (Sept 2025)',
    totalFunding: '$1.5B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$5M', date: '2022-08', leadInvestors: ['NEA'] },
      { stage: 'Series A', amount: '$26M', date: '2023-03', leadInvestors: ['NEA'] },
      { stage: 'Series B', amount: '$74M', date: '2024-01', valuation: '$520M', leadInvestors: ['IVP', 'Nvidia'] },
      { stage: 'Series C', amount: '$250M', date: '2024-08', valuation: '$3B', leadInvestors: ['SoftBank'] },
      { stage: 'Series D', amount: '$200M', date: '2025-09', valuation: '$20B', leadInvestors: ['SoftBank'] },
    ],
    revenue: '~$200M ARR (2025)',
    growth: '3x YoY (2024 $63M → 2025 $200M)',
    runway: 'Strong — well-funded, growing revenue',
    customers: '30M+ monthly active users',

    // Competition
    competitors: [
      {
        name: 'Google Search',
        description: 'Dominant search engine, adding AI overviews',
        whyTheyWin: 'Ubiquitous distribution, user habit, data moat',
      },
      {
        name: 'ChatGPT',
        description: 'OpenAI conversational AI with search capabilities',
        whyTheyWin: 'Brand recognition, GPT model quality',
      },
      {
        name: 'You.com',
        description: 'AI search engine',
        whyTheyWin: 'Earlier to market, developer features',
      },
    ],
    marketPosition: '#1 in AI Search Engines',
    moat: [
      'Best-in-class answer quality with source citations',
      'Multi-model approach (uses Claude, GPT-4, own models)',
      'Pro subscription with unlimited queries',
      'Chrome browser Comet launched for deeper integration',
    ],
    vsGiants: 'Attacking Google where it hurts — information retrieval. Not trying to be everything, just the best answer engine. Sources and transparency build trust vs Google AI Overviews.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Answer engine is 100% AI-powered.',
    aiDesignChallenges: [
      'Answer presentation: balancing brevity with depth',
      'Source citation UX: making citations trustworthy and accessible',
      'Follow-up queries: guiding users to better questions',
      'Multi-modal answers: images, videos, structured data',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Aravind Srinivas',
        role: 'CEO',
        background: 'PhD UC Berkeley, ex-OpenAI, ex-DeepMind, ex-Google Brain',
      },
      {
        name: 'Denis Yarats',
        role: 'CTO',
        background: 'Ex-Meta AI Research, ML infrastructure expert',
      },
      {
        name: 'Johnny Ho',
        role: 'CSO',
        background: 'Ex-Quora, #1 competitive programmer globally',
      },
      {
        name: 'Andy Konwinski',
        role: 'Co-founder',
        background: 'Databricks founding team',
      },
    ],
    whyBuilding:
      'Aravind saw that search was fundamentally broken — 10 blue links were obsolete. Wanted to give people answers, not websites.',
    beliefs: [
      'Search should give answers, not links',
      'Sources and citations build trust',
      'Speed matters — answers should be instant',
      'AI can democratize access to knowledge',
    ],
    designPhilosophy:
      'Clean, fast, trustworthy. Every answer should cite sources. No ads cluttering the experience.',
    greenFlags: [
      'World-class AI research team (OpenAI, DeepMind, Google Brain)',
      'Clear product vision that users love',
      'Jeff Bezos and Nvidia as investors',
      'Growing fast in competitive search market',
    ],
    redFlags: [
      'Taking on Google is extremely hard',
      'Small design team for the challenge',
      'Legal issues with publishers over content',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small (< 10)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Answer generation logic and formatting rules',
          'Source ranking and citation display logic',
          'Follow-up question suggestions',
          'Pro vs Free feature differentiation',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Answer quality metrics and evaluation',
          'Source accuracy verification UX',
          'User satisfaction measurement',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Answer display with inline citations',
          'Search input and suggestions',
          'Pro features and settings',
          'Mobile app experience',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles - NONE CURRENTLY
    openRoles: [
      {
        title: 'Product Designer - Enterprise Lead',
        location: 'San Francisco, CA',
        url: 'https://job-boards.greenhouse.io/perplexityai/jobs/4865846007',
      },
      {
        title: 'Product Designer - Growth',
        location: 'San Francisco, CA',
        url: 'https://job-boards.greenhouse.io/perplexityai/jobs/4865806007',
      },
      {
        title: 'AI Interaction Designer',
        location: 'San Francisco, CA',
        url: 'https://job-boards.greenhouse.io/perplexityai/jobs/4848736007',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Elite AI research team. Founders from top AI labs. Fast-paced startup culture.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Aravind is highly visible on Twitter, shares product thinking openly. Transparent culture.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Small team, intense environment. High expectations, strong talent density.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Designer: $100K-$200K+ estimated. Limited public data.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "~$200M ARR (2025), 3x YoY ($63M → $200M)",
      userGrowth: "30M+ monthly active users",
      signals: [
        "$20B valuation at Series D (6.7x from $3B in 13 months)",
        "$200M ARR with strong growth trajectory",
        "30M+ monthly active users",
        "Chrome browser 'Comet' launched (distribution play)",
        "SoftBank + Nvidia backing",
      ],

      tam: "$300B+ (Global search and information retrieval market)",
      marketShare: "<0.1% (Google has 90%+ of search)",
      ceiling: "Very early innings: AI search is nascent, user behavior is changing but Google habits are deeply ingrained. Ceiling depends on capturing next generation of information seekers.",
      tailwinds: [
        "Gen Z/millennials prefer direct answers over links",
        "AI answer quality improving rapidly",
        "Source citations build trust vs Google AI Overviews",
        "Comet browser extension deepens distribution",
        "Pro subscription model validated ($20/month unlimited)",
      ],
      headwinds: [
        "Google has ubiquitous distribution (default browser, mobile)",
        "ChatGPT brand recognition in conversational AI",
        "Publishers suing over content usage (legal risk)",
        "Google ramping up AI Overviews (fighting back)",
        "Search advertising model TBD (monetization risk)",
      ],

      moatType: 'brand',
      moatStrength: "Low-Medium: Product quality and answer accuracy are advantages, but no network effects. Multi-model approach (Claude, GPT-4) provides flexibility. Brand as 'AI search' leader is emerging but fragile against Google.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Attacking Google — ambitious mission',
        'World-class AI team (OpenAI, DeepMind alumni)',
        'Clean product with clear value prop',
      ],
      whyNot: [
        'No Product Designer roles open currently',
        'Small design team may limit growth',
        'Legal battles with publishers are concerning',
      ],
      nextActions: ['Monitor careers page for openings', 'Use Perplexity Pro to understand product deeply'],
      notes: 'Great product but no design openings. Keep watching.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Perplexity $20B Valuation - TechCrunch',
        url: 'https://techcrunch.com/2025/09/10/perplexity-reportedly-raised-200m-at-20b-valuation/',
      },
      {
        title: 'Perplexity Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/perplexity/',
      },
    ],
  };
