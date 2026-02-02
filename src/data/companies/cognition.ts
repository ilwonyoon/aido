import { Company } from '../types';

export const cognition: Company = {
    id: 'cognition',
    name: 'Cognition',
    description: 'AI software engineer. Devin can autonomously complete entire coding projects.',
    website: 'https://cognition.ai',
    screenshot: '/screenshots/cognition-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/cognition-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools'],

    stage: 'Series A',
    valuation: '$2B → $10B (2025)',
    totalFunding: '$400M+',
    fundingHistory: [
      { stage: 'Seed', amount: '$21M', date: '2023-11', leadInvestors: ['Founders Fund'] },
      { stage: 'Series A', amount: '$175M', date: '2024-04', valuation: '$2B', leadInvestors: ['Founders Fund'] },
      { stage: 'Unknown', amount: '$175M', date: '2025-04', valuation: '$10B', leadInvestors: ['Index Ventures'] },
    ],
    revenue: '~$73M ARR (June 2025)',
    growth: 'Explosive — $1M to $73M ARR in 9 months',
    runway: 'Strong',
    customers: 'Engineering teams, enterprises',

    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer, 1.8M+ paid users',
        whyTheyWin: 'GitHub distribution (100M+ developers), Microsoft backing, IDE integration',
      },
      {
        name: 'Cursor',
        description: 'AI-native code editor, $9B valuation',
        whyTheyWin: 'Best-in-class UX, fast iteration, developer-loved product',
      },
      {
        name: 'Claude Code (Anthropic)',
        description: 'Agentic coding assistant, $500M+ ARR',
        whyTheyWin: 'Claude model quality, Anthropic backing, terminal-native workflow',
      },
    ],
    marketPosition: 'First "AI software engineer" positioning',
    moat: [
      'First mover in autonomous coding agent',
      '10 IOI gold medalists on team',
      'Full project execution vs suggestions',
      'Founders Fund backing',
    ],
    vsGiants: 'Full autonomy positioning vs Copilot\'s "assistant" framing. Complete project execution rather than suggestions. IOI champion team gives credibility. Enterprise use case (delegate entire tasks) vs developer productivity.',

    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building autonomous AI software engineer (Devin). Zero-to-one in AI agents for coding.',
    aiDesignChallenges: [
      'Agentic UX: showing AI work in progress',
      'Trust in autonomous code changes',
      'Debugging AI-written code',
      'Human-AI collaboration on projects',
    ],

    founders: [
      {
        name: 'Scott Wu',
        role: 'CEO',
        background: 'Harvard, 3x IOI gold medalist, ex-Lunchclub CTO',
      },
      {
        name: 'Steven Hao',
        role: 'Co-founder',
        background: 'IOI gold medalist',
      },
      {
        name: 'Walden Yan',
        role: 'Co-founder',
        background: 'IOI gold medalist',
      },
    ],
    whyBuilding:
      'Software engineering is bottleneck for progress. AI that can truly code autonomously unlocks exponential productivity.',
    beliefs: [
      'AI can do full software engineering, not just assist',
      'Competitive programming background → better reasoning',
      'Autonomous agents are the future',
    ],
    greenFlags: [
      'Strongest technical founding team (10 IOI golds)',
      'First to demonstrate autonomous coding',
      'Explosive growth',
      'Founders Fund lead investor',
    ],
    redFlags: [
      'Extremely competitive space (Cursor, Claude)',
      'Product still maturing',
      'High expectations may create pressure',
    ],

    designTeam: {
      teamSize: '~3-5 (small, engineering-heavy)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Agent autonomy boundaries',
          'Code review/approval flows',
          'Error recovery logic',
          'Human intervention points',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Code quality assessment',
          'Task completion metrics',
          'Developer satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Agent work visualization',
          'Code diff review UX',
          'Project progress dashboard',
          'Developer collaboration tools',
        ],
      },
    },
    productStage: '0→1',

    // Product & User Context
    targetAudiences: {
        primary: 'Software engineering managers and tech leads managing development teams',
        secondary: 'Enterprise engineering teams needing to scale output without hiring',
    },
    userProblems: [
        'Hiring senior engineers costs $150K-$300K+ per year limiting team growth',
        'Junior engineers require extensive mentorship and produce slower output',
        'Engineering backlogs grow faster than teams can hire and onboard talent',
        'Routine coding tasks consume developer time that could go to architecture and innovation',
        'Remote teams across timezones struggle with synchronous pair programming',
    ],

    designerLinks: [
      {
        name: 'Cognition Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://cognition.ai/blog',
        description: 'Product updates and demos',
      },
    ],
    openRoles: [],

    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Extremely technical culture. Small, elite team (~20 people). Engineers from IOI/ICPC backgrounds.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Competitive programming culture. No designer culture info — engineer-centric team.',
      },
      {
        source: 'linkedin',
        sentiment: 'neutral',
        content: 'SF-based. No design leadership info — potential first design hire opportunity.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — Series B but small team size, limited data.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. No salary data available.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (beta stage, limited availability)",
      userGrowth: "Beta users, waitlist of thousands",
      signals: [
        "$2.2B valuation at Series B (fastest AI startup to unicorn: <6 months)",
        "$104M raised from Founders Fund, Khosla, Peter Thiel",
        "Viral launch demo (HN #1, Twitter trending)",
        "Competitive programming pedigree founders (IOI gold medalists)",
        "Beta access only — building scarcity",
      ],

      tam: "$100B+ (Software development globally addressable by AI agents)",
      marketShare: "<0.01% (pre-launch, beta only)",
      ceiling: "Very early innings: AI software engineers don't exist yet as proven category. Market forming, Devin defining the space.",
      tailwinds: [
        "Developer shortage driving AI agent demand",
        "Cursor proving developers want AI coding tools",
        "Agentic AI capabilities improving rapidly",
        "Enterprise willingness to pay for productivity gains",
      ],
      headwinds: [
        "Extremely hyped launch created skepticism after demos",
        "GitHub Copilot Workspace announced (Microsoft distribution)",
        "Cursor, Replit, and others iterating toward agent features",
        "Developer trust: will engineers give up control?",
        "Code quality and security concerns for autonomous agents",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Technical capability lead from competitive programming talent, but agentic coding is early and unproven. First-mover brand in 'AI software engineer' category. No network effects yet.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Cutting-edge AI agent design',
        'Early stage — can shape product',
        'Elite technical team',
        'Agentic UX is new frontier',
      ],
      whyNot: [
        'Engineering-dominated culture',
        'Very competitive market',
        'High pressure environment',
      ],
      nextActions: [
        'Try Devin on a real project',
        'Research agentic UX patterns',
        'Understand competitive landscape',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Cognition Funding - Contrary Research',
        url: 'https://research.contrary.com/company/cognition',
      },
      {
        title: 'Devin Introduction',
        url: 'https://cognition.ai/blog/introducing-devin',
      },
    ],
  };
