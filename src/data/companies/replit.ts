import { Company } from '../types';

export const replit: Company = {
    id: 'replit',
    name: 'Replit',
    description: 'AI-powered software creation platform enabling anyone to build applications using natural language.',
    website: 'https://replit.com',
    screenshot: '/screenshots/replit-screenshot.png',
    headquarters: 'Foster City, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/replit-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

    // Business
    stage: 'Series D',
    valuation: '$9B (Jan 2026)',
    totalFunding: '$650M+',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.5M', date: '2018-03', leadInvestors: ['Y Combinator'] },
      { stage: 'Series A', amount: '$20M', date: '2021-03', valuation: '$300M', leadInvestors: ['a16z'] },
      { stage: 'Series B', amount: '$80M', date: '2022-04', valuation: '$1.16B', leadInvestors: ['Coatue'] },
      { stage: 'Series C', amount: '$250M', date: '2025-09', valuation: '$3B', leadInvestors: ['Prysm Capital'] },
      { stage: 'Series D', amount: '$400M', date: '2026-01', valuation: '$9B', leadInvestors: ['Georgian'] },
    ],
    revenue: '$240M (2025), projected $1B (2026)',
    growth: '300% valuation increase in 4 months ($3B → $9B)',
    runway: 'Strong — well-capitalized, path to $1B revenue',
    customers: '150,000+ paying customers',

    // Competition
    competitors: [
      {
        name: 'Cursor',
        description: 'AI-powered code editor with Composer feature',
        whyTheyWin: 'Better for existing codebases, stronger IDE, $20/mo Pro tier',
      },
      {
        name: 'Windsurf',
        description: 'AI code editor with Cascade agentic AI',
        whyTheyWin: 'Competitive $15/mo pricing, strong code quality, Git workflows',
      },
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer by GitHub/OpenAI',
        whyTheyWin: 'GitHub integration, brand trust, Microsoft distribution',
      },
      {
        name: 'Lovable',
        description: 'AI app builder',
        whyTheyWin: 'Hit $100M ARR in 8 months (fastest-growing startup ever?)',
      },
      {
        name: 'Bolt.new',
        description: 'AI-powered full-stack app builder',
        whyTheyWin: 'Simpler, faster for prototypes',
      },
    ],
    marketPosition: 'Leader in AI-native coding platforms, Replit Agent is fastest-growing AI product',
    moat: [
      'Real-time multiplayer: Google Docs for code',
      'Replit Agent: natural language → full apps',
      'Built-in infrastructure: hosting, deployment, databases',
      'Educational moat: millions learned to code on Replit',
      'Network effects: community of creators',
    ],
    vsGiants: 'Replit is full-stack AI platform vs Cursor/Windsurf (editors). Different use case: build from scratch vs edit existing code.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product (Ghostwriter). Building browser-based AI coding platform from zero. Creating accessible development environment.',
    aiDesignChallenges: [
      'Natural language → code: designing conversational interfaces for building software',
      'Multi-file editing: AI making changes across entire codebase',
      'Real-time collaboration: multiplayer coding with AI',
      'Debugging AI: how users fix AI-generated code',
      'Context management: keeping AI aware of entire project',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Amjad Masad',
        role: 'CEO & Co-founder',
        background: 'Jordanian-American engineer. Worked at Facebook (2013-2016). Built Replit as side project in Jordan, relaunched in 2016.',
      },
      {
        name: 'Haya Odeh',
        role: 'Co-founder (Design & UX)',
        background: 'Amjad\'s wife. Handles design and user experience for Replit. Deep understanding of creator workflows.',
      },
      {
        name: 'Faris Masad',
        role: 'Co-founder (Technical)',
        background: 'Amjad\'s brother. Co-founded the technical platform.',
      },
    ],
    whyBuilding: 'Masad believes coding should be accessible to everyone, not just CS majors. Replit started as a simple online IDE, evolved into AI-native platform after seeing the power of LLMs.',
    beliefs: [
      'Software creation should be as easy as describing what you want',
      'AI will democratize coding: 1B software creators by 2030',
      'Real-time collaboration is the future of coding',
      'Infrastructure should be invisible: focus on creation, not deployment',
      'Community-driven: empower creators, not gatekeep',
    ],
    designPhilosophy: 'Make software creation accessible and collaborative. Design for creators, not just developers.',
    greenFlags: [
      'Explosive growth: $3B → $9B in 4 months',
      'Revenue: $240M (2025), projected $1B (2026)',
      'Founder-led: Masad and Odeh are deeply product-focused',
      'AI-native: Replit Agent is a breakout product',
      'Real-time multiplayer: unique moat',
    ],
    redFlags: [
      'Intense competition: Cursor, Windsurf, Lovable all growing fast',
      'Lovable hit $100M ARR in 8 months (faster than Replit Agent)',
      'Price pressure: Windsurf at $15/mo vs Replit\'s higher tiers',
      'Controversial founder: Masad called "terrorist sympathizer" in media',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Haya Odeh (Co-founder & VP of Design)',
      teamSize: '~10-15 designers (estimated for 335 employees)',
      notableMembers: [
        { name: 'Zade Kaylani', role: 'Product Designer' },
        { name: 'Aman Mathur', role: 'Product Manager & Designer (Product Lead, Agent)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing AI Agent: natural language → full apps',
          'Multi-file editing: AI understanding entire codebase',
          'Real-time collaboration: multiplayer with AI',
          'Context management: keeping AI aware of project structure',
          'Debugging flows: how users fix AI-generated code',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing confidence indicators for AI-generated code',
          'Building testing and verification workflows',
          'Creating feedback loops for AI improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Conversational interface for Replit Agent',
          'Real-time multiplayer IDE',
          'Code editor with AI assistance',
          'Deployment and infrastructure management',
          'Community and discovery features',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Non-technical founders, creators, and professionals who want to build software',
        secondary: 'Students learning to code and developers prototyping ideas quickly',
    },
    userProblems: [
        'Building custom software requires hiring expensive developers or learning to code for years',
        'Setting up development environments with dependencies and configuration is frustrating',
        'Prototyping MVP ideas takes months when outsourcing or learning to code',
        'Collaboration on code projects requires complex git workflows and local setup',
        'Deploying applications to production requires infrastructure knowledge most non-developers lack',
    ],

    // Designer Links
    designerLinks: [
      {
        name: 'Haya Odeh',
        role: 'Co-founder & VP of Design',
        platform: 'twitter',
        url: 'https://twitter.com/hayaodeh',
        description: 'Co-founder leading design at Replit. 2024 ASU+GSV Power of Women awardee.',
      },
      {
        name: 'Haya Odeh',
        role: 'Co-founder & VP of Design',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/haya-odeh-b0725928/',
        description: 'Co-founder & VP of Design since 2015.',
      },
      {
        name: 'Zade Kaylani',
        role: 'Product Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/zadekaylani/',
        description: 'Product designer at Replit. USC Astronautical Engineering grad. Portfolio: zade.design',
      },
      {
        name: 'Aman Mathur',
        role: 'Product Manager & Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/aman-mathur/',
        description: 'Product lead for Replit Agent. 8 years AI product experience.',
      },
      {
        name: 'Replit Design Blog',
        role: 'Design Team',
        platform: 'blog',
        url: 'https://blog.replit.com/category/design',
        description: 'Replit design blog with posts on RUI design system, tokens, and design mode.',
      },
    ],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Founder-led, product-obsessed culture. Amjad is extremely public about product decisions on Twitter.',
        url: 'https://twitter.com/amasad',
      },
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.2,
        content: 'Incredible autonomy and ownership. Remote-oriented culture with international team. High agency, smart coworkers, management encourages career-building projects.',
        url: 'https://www.glassdoor.com/Reviews/Replit-Reviews-E1519977.htm',
      },
      {
        source: 'glassdoor',
        sentiment: 'negative',
        content: 'Disorganized, excessive hours expected. Leadership described as out of touch, culture of intimidation. Terminations regularly threatened. "Go fast and break things" mentality.',
        url: 'https://www.glassdoor.com/Reviews/Employee-Review-Replit-E1519977-RVW101157872.htm',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Software Engineer total comp: $150K-$205K. Product Designer comp data limited. Competitive but below FAANG levels.',
        url: 'https://www.levels.fyi/companies/replit/salaries',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$253M ARR (Oct 2025), 2,352% YoY. $10M -> $100M in 5.5 months.",
      userGrowth: "40M+ users across 200+ countries, 2M+ apps created by Agent",
      signals: [
        "$9B valuation (3x from $3B in 4 months after Replit Agent launch)",
        "$630M Series D funding",
        "30M+ registered users",
        "Replit Agent: 1M+ apps created",
        "Co-founder Haya Odeh leads design (strong design DNA)",
      ],

      tam: "$100B+ (All software development globally)",
      marketShare: "<0.5% but growing extremely fast",
      ceiling: "Early innings: Replit Agent defining AI-native IDE category. Browser-based, no-setup advantage is massive. Ceiling depends on capturing next generation of developers.",
      tailwinds: [
        "No-setup friction = massive onboarding advantage",
        "Browser-based enables instant collaboration",
        "Education market adoption (K-12, universities use Replit)",
        "Replit Agent democratizes coding (non-developers can build)",
        "Real-time multiplayer creates network effects",
      ],
      headwinds: [
        "Cursor raised $29B = well-funded direct competitor",
        "GitHub Copilot Workspace targeting same space",
        "Lovable, Windsurf, Bolt all competing in AI IDEs",
        "Local development (VS Code) still preferred by pros",
        "Compute costs extremely high (hosting + AI inference)",
      ],

      moatType: 'network-effects',
      moatStrength: "Medium: Real-time collaboration and community create network effects. No-setup advantage is defensible. But AI IDE market is extremely competitive and rapidly evolving.",
    },

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'AI-native Level 4: AI is the product (Replit Agent)',
        'Explosive growth: $3B → $9B in 4 months',
        'Co-founder leads design: Haya Odeh (amazing signal)',
        'Product Designer role open',
        'Real-time collaboration: unique design challenge',
        'Mission-driven: democratizing software creation',
      ],
      whyNot: [
        'Intense competition: Cursor, Windsurf, Lovable',
        'Founder controversy: Masad called "terrorist sympathizer"',
        'In-office 3x/week: Mon/Wed/Fri in Foster City',
        'Design team turnover: key designers (Barron, Tyler, Omar) all left',
        'Glassdoor: culture of intimidation, excessive hours cited',
      ],
      nextActions: [
        'Use Replit Agent extensively — build 2-3 projects',
        'Follow Amjad Masad and Haya Odeh on Twitter',
        'Apply for Product Designer, B2B role',
        'Study RUI design system blog posts for interview prep',
        'Research Replit Design Mode (Gemini 3 powered)',
        'Network with Zade Kaylani or Barron Webster for insider perspective',
      ],
      notes: 'Deep research completed 2026-02-11. See src/data/deep-research/replit.md for full report. Decision score: 7.65/10.',
    },

    // Meta
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'Wikipedia: Replit', url: 'https://en.wikipedia.org/wiki/Replit' },
    { title: 'Replit $400M Series D', url: 'https://techfundingnews.com/replit-grabs-400m-at-9b-valuation-in-the-ai-coding-race-with-openai-and-cursor/' },
    { title: 'Amjad Masad Controversy', url: 'https://sfstandard.com/2026/01/07/called-terrorist-sympathizer-now-ai-company-valued-3b/' },
    { title: 'Wikipedia: Amjad Masad', url: 'https://en.wikipedia.org/wiki/Amjad_Masad' },
    { title: 'Sacra: Replit at $253M ARR', url: 'https://sacra.com/research/replit-at-253m-arr-growing-2352-yoy/' },
    { title: 'SaaStr: $10M to $100M in 5.5 Months', url: 'https://www.saastr.com/100mreplit/' },
    { title: 'Replit $250M Series C', url: 'https://replit.com/news/funding-announcement' },
    { title: 'TechCrunch: Replit found its market', url: 'https://techcrunch.com/2025/10/02/after-nine-years-of-grinding-replit-finally-found-its-market-can-it-keep-it/' },
    { title: 'Replit Design System (RUI)', url: 'https://blog.replit.com/rui-eng' },
    { title: 'Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/Replit-Reviews-E1519977.htm' },
    { title: 'Replit Usage Statistics 2026', url: 'https://www.index.dev/blog/replit-usage-statistics' },
    { title: 'Vibe Coding TAM', url: 'https://www.saastr.com/the-vibe-coding-tam-how-big-can-this-market-really-get/' },
  ],
  };
