import { Company } from '../types';

export const listenLabs: Company = {
    id: 'listen-labs',
    name: 'Listen Labs',
    description: 'Autonomous market researcher that runs AI interviews and delivers customer insights.',
    website: 'https://listenlabs.ai',
    screenshot: '/screenshots/listen-labs-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/listen-labs-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

    // Business
    stage: 'Series B',
    valuation: 'Unknown',
    totalFunding: '$100M (Series B announced)',
    fundingHistory: [
      { stage: 'Series A', amount: '$27M', date: '2025-04', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$69M', date: '2026-01', leadInvestors: ['Ribbit Capital'] },
    ],
    revenue: '8-figure annualized revenue (2025)',
    growth: '15x annualized revenue in 9 months; 1M interviews conducted',
    runway: 'Strong (Series B announced Jan 2026)',
    customers: 'Microsoft, Sweetgreen, Perplexity, Robinhood, Canva (and hundreds of companies)',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '15x annualized revenue in 9 months (2025)',
      userGrowth: '1M interviews; 30M+ participant network',
      signals: [
        'Series B led by Ribbit; total funding $100M',
        '15x revenue growth and 8-figure annualized revenue',
        'Adoption by enterprise teams (Microsoft, Sweetgreen, Canva)',
      ],
      tam: '$56B global market research industry (2023)',
      marketShare: '<0.1% of TAM = 1000x+ upside potential',
      ceiling: 'Early innings: replacing agency-led research with AI automation',
      tailwinds: [
        'Faster product cycles require continuous research',
        'AI adoption lowering cost of qualitative research',
        'Remote-first teams need scalable feedback loops',
      ],
      headwinds: [
        'Enterprise skepticism about AI research quality',
        'Research ethics and bias concerns',
        'Competitive pressure from traditional research platforms',
      ],
      moatType: 'data-flywheel',
      moatStrength: 'Growing: interview data improves models and workflows.',
    },

    // Competition
    competitors: [
      {
        name: 'UserTesting',
        description: 'Remote user research and testing platform.',
        whyTheyWin: 'Large participant network and enterprise adoption.',
      },
      {
        name: 'Maze',
        description: 'Product research and testing platform.',
        whyTheyWin: 'Strong product analytics and design team adoption.',
      },
      {
        name: 'dscout',
        description: 'Qualitative research and diary study platform.',
        whyTheyWin: 'Deep qualitative research tooling and panels.',
      },
    ],
    marketPosition: 'AI-native market research automation',
    moat: [
      'Large participant network (30M+)',
      'Automated interview + analysis workflows',
      'Rapid iteration cycle with AI researchers',
    ],
    vsGiants: 'AI-first automated interviews vs traditional research platforms.',

    // AI-Native Level
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Audio-based note-taking with AI features. Building on proven note-taking needs.',
    aiDesignChallenges: [
      'Conversation design for AI interviewers',
      'Ensuring research rigor and validity in AI-led studies',
      'Explaining AI insights and evidence to researchers',
      'Balancing speed with depth in qualitative research UX',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Alfred Wahlforss',
        role: 'Co-founder & CEO',
        background: 'Entrepreneur focused on AI-powered research automation',
      },
    ],
    whyBuilding:
      'Enable every team to run high-quality user research continuously using autonomous AI interviews.',
    beliefs: [
      'Real user insights should be accessible to every team',
      'AI can run interviews at scale without losing depth',
      'Speed and rigor can coexist in research workflows',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series B with $100M total funding',
      'Rapid revenue growth and enterprise adoption',
      'Clear AI-native workflow with strong design leverage',
    ],
    redFlags: [
      'Research quality and bias risk in AI-led interviews',
      'Highly competitive research tooling market',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '11-50 employees (startups.gallery)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Interview flow logic and probing strategies',
          'Bias mitigation in question and response handling',
          'Research protocol templates and guardrails',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality scoring for AI interviews',
          'Insight validation and evidence strength metrics',
          'Human review workflows for research teams',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Conversation UI for AI interviews',
          'Insight dashboards and evidence linking',
          'Workflow for study setup and participant management',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Call centers and customer service teams analyzing customer conversations',
        secondary: 'Sales and support managers coaching teams based on conversation data',
    },
    userProblems: [
        'Quality assurance teams cannot manually review thousands of customer calls',
        'Customer insights and sentiment hidden in unstructured conversation data',
        'Compliance violations in customer calls go undetected without systematic review',
        'Training and coaching sales reps requires listening to hours of call recordings',
        'Finding specific customer issues or complaints requires manual search through calls',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Founding Product Designer',
        location: 'San Francisco, CA (Onsite)',
        url: 'https://www.builtinseattle.com/job/founding-product-designer/6686342',
        level: 'Founding',
        type: 'full-time',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Conversation design and research tooling are core',
        'Strong AI-native product with clear UX leverage',
      ],
      whyNot: [
        'Market research buyers can be conservative',
        'Risk of commoditization in AI research tools',
      ],
      nextActions: [
        'Try a demo interview flow',
        'Track research quality metrics and customer retention',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T20:00:00',
    sources: [
    { title: 'Source', url: 'https://listenlabs.ai' },
    { title: 'Source', url: 'https://listenlabs.ai/founders-letter' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/listen-labs-raises-69-million-series-b-to-bring-customer-voices-into-every-decision-302661000.html' },
    { title: 'Source', url: 'https://www.linkedin.com/company/listenlabss' },
    { title: 'Source', url: 'https://www.linkedin.com/posts/alfredwahlforss_1m-people-told-us-their-opinions-activity-7338255020802455552--xfu' },
    { title: 'Source', url: 'https://www.crunchbase.com/funding_round/listen-labs-series-a--76d4ebf6' },
    { title: 'Source', url: 'https://www.crunchbase.com/organization/listen-labs' },
    { title: 'Source', url: 'https://www.builtinseattle.com/job/founding-product-designer/6686342' },
    { title: 'Source', url: 'https://www.researchworld.com/global-insights-industry-sector-reaches-usd-150-billion-market-research-sector-at-usd-56-billion/' }
  ],
  };
