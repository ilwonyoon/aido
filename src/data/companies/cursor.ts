import { Company } from '../types';

export const cursor: Company = {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor that helps developers write code faster with intelligent autocomplete and chat.',
    website: 'https://cursor.com',
    screenshot: '/screenshots/cursor-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/cursor-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'conversation-ai'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

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
    customers: '1M+ daily active users, 50,000+ teams, 50% of Fortune 500 (including Nvidia, Uber, Adobe, Stripe)',

    // Competition
    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'Microsoft-backed AI coding assistant, integrated in VS Code. 20M+ users, 40% market share',
        whyTheyWin: 'Distribution through GitHub (130M+ devs) / VS Code, enterprise bundle, all major AI models (GPT-5, Claude, o1)',
      },
      {
        name: 'Claude Code',
        description: 'Anthropic terminal-native AI coding agent. Growing rapidly',
        whyTheyWin: 'Best AI model for coding (Claude), no IDE overhead, autonomous agent capabilities',
      },
      {
        name: 'Google Gemini Code Assist',
        description: 'Google AI coding assistant. Hired Windsurf CEO + founders ($2.4B deal)',
        whyTheyWin: 'Gemini models, Windsurf talent acquisition, Google Cloud distribution',
      },
      {
        name: 'Replit',
        description: 'Browser-based IDE with AI features',
        whyTheyWin: 'No setup required, strong education market, browser-native',
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
        role: 'Former CTO (Left Oct 2025)',
        background: 'MIT CSAIL research, ML infrastructure. Left to found Integrous Research (AI safety lab).',
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
      'Ryo Lu (ex-Notion, Stripe) hired as Head of Design Jan 2025',
      'Flat org, no PM layer — designers own product decisions',
      '300+ employees at $29B valuation = extreme efficiency',
      'Acquired Graphite (code review) and Supermaven — building platform',
    ],
    redFlags: [
      'Engineering-dominated: <5 designers in 300+ person company',
      'CTO co-founder Arvid Lunnemark departed Oct 2025',
      'Hypergrowth (60 → 300+ in 9 months) changing culture rapidly',
      'In-person only (SF/NY)',
      'Pricing backlash: credit-based billing change frustrated users (Jun 2025)',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Ryo Lu (Head of Design, ex-Notion, Stripe, Asana)',
      teamSize: 'Small (< 5 designers)',
      notableMembers: [
        { name: 'Ryo Lu', role: 'Head of Design' },
      ],
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
    designerLinks: [
      { name: 'Ryo Lu', role: 'Head of Design', platform: 'linkedin', url: 'https://www.linkedin.com/in/ryo-lu-7060b534/' },
      { name: 'Ryo Lu', role: 'Head of Design', platform: 'twitter', url: 'https://x.com/ryolu_' },
      { name: 'Ryo Lu', role: 'Head of Design', platform: 'blog', url: 'https://ryo.lu/' },
    ],

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
        source: 'glassdoor',
        sentiment: 'positive',
        content: 'Glassdoor review: "Best place I\'ve ever worked. Exceptionally high level of trust and autonomy. Humble, kind, motivated, incredibly talented people. Very high bar but zero ego."',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Glassdoor review: "Pace faster than anything I\'ve ever experienced. Rapid change can feel a bit thrashy. Leadership sometimes makes rash decisions."',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Ryo Lu (Head of Design): "At Cursor the roles between designers, PMs, engineers are really muddy. We just do what it takes based on each person\'s unique strengths."',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Ship velocity is legendary. Releases every 2-4 weeks. Launched Cursor 2.0, visual editor, background agents, web/mobile agents in 2025.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Small team, intense pace. In-person required. Strong equity upside at $29.3B valuation.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Limited salary data (updated Feb 2026). Strong equity packages given $400M → $29.3B valuation trajectory in under 2 years.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "~$1B+ ARR (Dec 2025), 10x+ YoY (fastest SaaS ever: $1M→$1B in ~2 years)",
      userGrowth: "1M+ daily active users, 50,000+ teams, 50% Fortune 500 customers. 300+ employees (up from 60 in Mar 2025)",
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
        "Acquisitions (Supermaven, Graphite) building end-to-end platform",
      ],
      headwinds: [
        "GitHub Copilot has Microsoft distribution (bundled with GitHub)",
        "VS Code could integrate AI features natively",
        "Windsurf CEO + founders joined Google DeepMind ($2.4B deal) — Google investing heavily in AI coding",
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
        'Frontier AI coding UX — defining the future of software development',
        'Tiny design team (<5) at $29.3B company = massive ownership potential',
        'Ryo Lu (ex-Notion, Stripe) building elite design team from scratch',
        'Product-obsessed founders who ship fast, $1B+ ARR in 24 months',
      ],
      whyNot: [
        'Engineering-dominated: <5 designers in 300+ person org',
        'In-person only (SF/NY)',
        'Hypergrowth culture — pace faster than anything, potential burnout',
        'No PM layer — designers must be self-directed and own PM responsibilities',
      ],
      nextActions: [
        'Apply to Product Designer role',
        'Use Cursor intensively for 2+ weeks',
        'Study Ryo Lu public content (a16z, YC, Substack)',
        'Prepare product critique for interview',
      ],
      notes: 'Deep research completed 2026-02-11. See src/data/deep-research/cursor.md for full report. Score: 8.75/10.',
    },

    lastUpdated: '2026-02-11',
    sources: [
      { title: 'CNBC: Cursor Series D', url: 'https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html' },
      { title: 'Sacra: Cursor Revenue & Funding', url: 'https://sacra.com/c/cursor/' },
      { title: 'Contrary Research: Anysphere Breakdown', url: 'https://research.contrary.com/company/anysphere' },
      { title: 'Lenny: Rise of Cursor', url: 'https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell' },
      { title: 'Ryo Lu: Soulful Design', url: 'https://jdahl.substack.com/p/cursors-ryo-lu-on-soulful-design' },
      { title: 'Fortune: Cursor Acquires Graphite', url: 'https://fortune.com/2025/12/19/cursor-ai-coding-startup-graphite-competition-heats-up/' },
      { title: 'TechCrunch: Competition', url: 'https://techcrunch.com/2025/12/09/why-cursors-ceo-believes-openai-anthropic-competition-wont-crush-his-startup/' },
      { title: 'Glassdoor: Anysphere Reviews', url: 'https://www.glassdoor.com/Reviews/Anysphere-Reviews-E10847804.htm' },
    ],
  };
