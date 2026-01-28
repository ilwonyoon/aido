import { Company } from '../types';

export const cursor: Company = {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor that helps developers write code faster with intelligent autocomplete and chat.',
    website: 'https://cursor.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'conversation-ai'],
  markets: ['b2b'],
  industries: ['developer-tools'],

    // Business
    stage: 'Series D',
    valuation: '$29.3B (Nov 2025)',
    totalFunding: '$3.6B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$8M', date: '2023-03', leadInvestors: ['OpenAI Startup Fund'] },
      { stage: 'Series A', amount: '$20M', date: '2024-01', valuation: '$400M', leadInvestors: ['Andreessen Horowitz'] },
      { stage: 'Series B', amount: '$105M', date: '2024-12', valuation: '$2.5B', leadInvestors: ['Thrive Capital', 'a16z'] },
      { stage: 'Series C', amount: '$900M', date: '2025-06', valuation: '$9.9B', leadInvestors: ['Thrive Capital'] },
      { stage: 'Series D', amount: '$2.3B', date: '2025-11', valuation: '$29.3B', leadInvestors: ['Accel', 'Coatue'] },
    ],
    revenue: '~$1B+ ARR (Dec 2025)',
    growth: 'Fastest SaaS ever: $1M→$1B ARR in ~2 years',
    runway: 'Strong — profitable, $2.3B cash',
    customers: 'Millions of developers globally',

    // Competition
    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'Microsoft-backed AI coding assistant, integrated in VS Code',
        whyTheyWin: 'Distribution through GitHub/VS Code, enterprise adoption',
      },
      {
        name: 'Replit',
        description: 'Browser-based IDE with AI features',
        whyTheyWin: 'No setup required, strong education market',
      },
      {
        name: 'Codeium',
        description: 'Free AI code completion',
        whyTheyWin: 'Free tier, enterprise deployment options',
      },
    ],
    marketPosition: '#1 in AI Code Editors',
    moat: [
      'Best-in-class AI coding UX (Composer, multi-file edits)',
      'Tab completion feels magical — high switching cost',
      'Model-agnostic: uses Claude, GPT-4, custom models',
      'Fastest-growing SaaS company ever by ARR',
    ],
    vsGiants: 'Outpacing GitHub Copilot in features and UX. Built on VS Code but better AI integration. Pure focus on AI-first development vs Microsoft spreading across many products.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building AI-first code editor from zero. Creating new category of AI-native development tools. High risk, high upside.',
    aiDesignChallenges: [
      'Composer UX: multi-file AI edits with context awareness',
      'Tab completion: making AI suggestions feel natural, not intrusive',
      'Agent mode: designing for autonomous coding tasks',
      'Trust and transparency: showing what AI changed and why',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Michael Truell',
        role: 'CEO',
        background: 'MIT CS, dropped out to build Cursor. Father is tech investor.',
      },
      {
        name: 'Sualeh Asif',
        role: 'CPO',
        background: 'MIT Mathematics, competitive programming background',
      },
      {
        name: 'Arvid Lunnemark',
        role: 'CTO',
        background: 'MIT CSAIL research, ML infrastructure',
      },
      {
        name: 'Aman Sanger',
        role: 'Product Lead',
        background: 'MIT CSAIL research, AI/ML systems',
      },
    ],
    whyBuilding:
      'Four MIT friends saw that coding would be fundamentally transformed by AI. Left school to build the editor they wanted to use themselves.',
    beliefs: [
      'AI will write most code in the future',
      'Developer experience must be magical, not clunky',
      'Stay small, move fast, ship constantly',
      'Product quality over marketing',
    ],
    designPhilosophy:
      'Make AI feel like a brilliant pair programmer, not a chatbot. Every interaction should feel faster than coding alone.',
    greenFlags: [
      'Founders are 25-year-old billionaires who still code',
      'Product-obsessed culture, ship extremely fast',
      'Small team (< 50) at $29B valuation',
      'Design roles report to Engineering — integrated',
    ],
    redFlags: [
      'No dedicated design leadership yet',
      'Hypergrowth may change culture rapidly',
      'In-person only (SF/NY)',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small (< 5 designers)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Composer: defining multi-file edit behavior and constraints',
          'Tab completion: when to suggest, how aggressive',
          'Agent mode: autonomous task execution rules',
          'Context management: what AI sees and uses',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Suggestion acceptance rate optimization',
          'User satisfaction with AI edits',
          'Speed vs accuracy tradeoffs',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Code diff visualization for AI changes',
          'Inline AI suggestions without disruption',
          'Composer multi-file editing UI',
          'Settings and model selection',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Professional software engineers at technology companies',
        secondary: 'Individual developers and engineering students learning to code',
    },
    userProblems: [
        'Manual coding is slow compared to thinking speed — developers spend hours typing boilerplate',
        'Understanding large codebases with thousands of files wastes time navigating and searching',
        'Context-switching between documentation, Stack Overflow, and IDE breaks flow state',
        'Repetitive coding tasks consume developer time that could go to solving hard problems',
        'AI coding assistants produce low-quality suggestions that require extensive editing',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco or New York City',
        url: 'https://cursor.com/careers/product-designer',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Four MIT friends, all 25, now billionaires. Still code daily. Extremely flat organization.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Ship velocity is legendary. Multiple major features per month. Product quality obsession.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Small team, intense pace. In-person required. Strong equity upside.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Limited salary data. Strong equity packages given valuation trajectory.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "~$1B+ ARR (Dec 2025), 10x+ YoY (fastest SaaS ever: $1M→$1B in ~2 years)",
      userGrowth: "Millions of developers globally, 30,000+ teams",
      signals: [
        "$29.3B valuation at Series D (11x from $2.5B in 11 months)",
        "$1B+ ARR = fastest SaaS ever to $1B",
        "Millions of developers, default AI coding tool",
        "Profitable with strong unit economics",
        "Four 25-year-old MIT billionaire founders still coding daily",
      ],

      tam: "$100B+ (All software development globally)",
      marketShare: "~1% = 100x upside",
      ceiling: "Very early innings: AI coding is nascent. Cursor defining the category. Potential to replace VS Code/IDEs entirely as AI capabilities improve.",
      tailwinds: [
        "AI coding wave: every developer will use AI tools",
        "Tab completion creates switching costs (habit formation)",
        "Claude partnership = best-in-class model access",
        "Developer word-of-mouth drives viral growth",
        "Small team (<50) at $29B = extreme efficiency",
      ],
      headwinds: [
        "GitHub Copilot has Microsoft distribution (bundled with GitHub)",
        "VS Code could integrate AI features natively",
        "Replit, Codeium, and others competing for market",
        "Model providers (Anthropic, OpenAI) could build own editors",
        "In-person only limits talent pool",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium-Strong: Tab completion and workflow integration create high switching costs (muscle memory, productivity gains). Product quality and ship velocity are defensive. No network effects, but developer brand loyalty building.",
    },

    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Frontier AI coding UX — defining the future',
        'Tiny team, massive valuation = huge ownership potential',
        'Product-obsessed founders who ship fast',
      ],
      whyNot: [
        'No design leadership — you must be self-directed',
        'In-person only (SF/NY)',
        'Hypergrowth culture may not suit everyone',
      ],
      nextActions: ['Apply to Product Designer role', 'Try Cursor extensively first'],
      notes: 'Most exciting AI code editor. Design role could shape entire industry.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Cursor $29.3B Series D - CNBC',
        url: 'https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html',
      },
      {
        title: 'Cursor Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/cursor/',
      },
    ],
  };
