import { Company } from '../types';

export const linear: Company = {
    id: 'linear',
    name: 'Linear',
    description: 'Issue tracking and project management for high-performance teams. The anti-Jira.',
    website: 'https://linear.app',
    screenshot: '/screenshots/linear-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/linear-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['productivity'],

    stage: 'Series C',
    valuation: '$1.25B (June 2025)',
    totalFunding: '$134M',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.2M', date: '2019-11', leadInvestors: ['Sequoia'] },
      { stage: 'Series A', amount: '$13M', date: '2020-12', leadInvestors: ['Sequoia'] },
      { stage: 'Series B', amount: '$35M', date: '2023-09', leadInvestors: ['Accel'] },
      { stage: 'Series C', amount: '$82M', date: '2025-06', valuation: '$1.25B', leadInvestors: ['Accel'] },
    ],
    revenue: '$100M ARR (June 2025)',
    growth: '12x in 18 months ($8.4M → $100M)',
    customers: 'OpenAI, Vercel, Cursor, Ramp, Scale AI, Cash App, Mercury, Brex, Coinbase, Substack — 66% of Forbes Top 50 AI companies',

    competitors: [
      {
        name: 'Jira (Atlassian)',
        description: 'Dominant project management tool with 42% market share, $5.2B Atlassian revenue',
        whyTheyWin: 'Enterprise standard, deep Atlassian ecosystem (Confluence, Bitbucket), 20+ year headstart, regulatory compliance features',
      },
      {
        name: 'ClickUp',
        description: '"Everything app for work" — $300M revenue, $4B valuation',
        whyTheyWin: 'Broadest feature set, aggressive pricing, 3x Linear revenue, cross-functional beyond engineering',
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace — $600M revenue, $11B valuation',
        whyTheyWin: 'Flexibility, docs + projects together, consumer-grade UX. Often complementary (used alongside Linear)',
      },
      {
        name: 'GitHub Projects',
        description: 'Free issue tracking bundled with GitHub (Microsoft, 100M+ developers)',
        whyTheyWin: 'Free, already where developers live. Shipped sub-issues and issue types in 2025. Zero context switching for GitHub-native teams.',
      },
      {
        name: 'Monday.com',
        description: 'Public work management platform — $1.18B revenue',
        whyTheyWin: 'Massive resources, Monday Dev targets engineering, strong non-technical adoption',
      },
    ],
    marketPosition: 'Premium choice for fast-moving engineering teams',
    moat: [
      'Best-in-class UX — developers love it',
      'Speed and keyboard-first design',
      'Finnish design craft DNA',
      'Word-of-mouth growth from developer advocacy',
    ],

    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Successful project management tool with AI features added. Stable product with AI enhancement.',
    aiDesignChallenges: [
      'AI-assisted issue creation and triage',
      'Smart suggestions without being intrusive',
      'AI search across projects',
      'Automated workflow recommendations',
    ],

    founders: [
      {
        name: 'Karri Saarinen',
        role: 'CEO',
        background: 'Ex-Airbnb Principal Designer, Ex-Coinbase Head of Design',
      },
      {
        name: 'Jori Lallo',
        role: 'CPO',
        background: 'Ex-Coinbase Engineer, YC alum (Kippt)',
      },
      {
        name: 'Tuomas Artman',
        role: 'CTO',
        background: 'Ex-Uber Senior Engineer, Ex-Groupon',
      },
    ],
    whyBuilding:
      'Frustrated with Jira at Airbnb. Built a Chrome extension to simplify it — became so popular they decided to build the tool they wished existed.',
    beliefs: [
      'Software should be fast and feel magical',
      'Design is a competitive advantage',
      'Keyboard-first, speed matters',
      'Finnish design: simplicity, function, durability',
    ],
    designPhilosophy:
      'CEO is a designer. Design-led company from founding. Finnish heritage emphasizes craft, simplicity, and attention to detail.',
    greenFlags: [
      'CEO is a designer — design matters here',
      'Remote-first, distributed team',
      'Profitable mindset — bootstrapped initially',
      'Strong brand love from developers',
    ],
    redFlags: [
      'Competitive space (Jira, Notion)',
      'Enterprise sales complexity as they scale',
    ],

    designTeam: {
      cpo: 'Jori Lallo (Co-founder)',
      designHead: 'Conor Muirhead (Head of Product Design, ex-37signals/Basecamp 7yr)',
      teamSize: '~8-10 designers + design engineers',
      notableMembers: [
        { name: 'Karri Saarinen', role: 'CEO & Designer-Founder (ex-Airbnb Principal Designer)' },
        { name: 'Conor Muirhead', role: 'Head of Product Design (ex-37signals/Basecamp, ex-Rewatch)' },
        { name: 'Adrien Griveau', role: 'Founding Designer (ex-Microsoft Outlook Mobile)' },
        { name: 'Emiel Janson', role: 'Staff Product Designer (ex-Rise co-founder, ex-Temper Head of Design)' },
        { name: 'Gavin Nelson', role: 'Designer (ex-GitHub Senior Product Designer)' },
        { name: 'Yann-Edern Gillet', role: 'Product Designer' },
        { name: 'Paul Macgregor', role: 'Designer (ex-Twitter 5yr, ex-Tumblr)' },
        { name: 'Paco Coursey', role: 'Design Engineer (ex-Vercel)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI triage logic',
          'Smart prioritization',
          'Workflow automation rules',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Team velocity metrics',
          'AI suggestion accuracy',
          'User satisfaction tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Keyboard-first interactions',
          'Speed optimization',
          'Cross-platform consistency',
          'Design system maintenance',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Software engineering teams at fast-moving startups and technology companies',
        secondary: 'Product managers and designers working closely with engineering teams',
    },
    userProblems: [
        'Jira is slow, clunky, and filled with unnecessary complexity slowing down engineering workflows',
        'Issue tracking tools lack keyboard shortcuts forcing constant mouse usage',
        'Project management software designed for general teams does not fit engineering workflows',
        'Context-switching between tools for planning, development, and communication wastes time',
        'Legacy tools feel dated and frustrate developers who expect modern, fast software',
    ],

    designerLinks: [
      {
        name: 'Karri Saarinen',
        role: 'CEO & Co-founder',
        platform: 'twitter',
        url: 'https://twitter.com/karrisaarinen',
        description: 'Design thoughts, Linear updates',
      },
      {
        name: 'Karri Saarinen',
        role: 'CEO & Co-founder',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/karrisaarinen/',
        description: 'CEO, ex-Airbnb Principal Designer',
      },
      {
        name: 'Conor Muirhead',
        role: 'Head of Product Design',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/conormuirhead/',
        description: 'Ex-37signals/Basecamp (7yr), ex-Rewatch Head of Design',
      },
      {
        name: 'Adrien Griveau',
        role: 'Founding Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/adrien-griveau-2397b8126/',
        description: 'First design hire, ex-Microsoft',
      },
      {
        name: 'Emiel Janson',
        role: 'Staff Product Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/emieljanson/',
        description: 'Co-founded Rise, ex-Temper Head of Design',
      },
      {
        name: 'Gavin Nelson',
        role: 'Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/gavin-nelson/',
        description: 'Ex-GitHub Senior Product Designer, Stanford',
      },
      {
        name: 'Yann-Edern Gillet',
        role: 'Product Designer',
        platform: 'blog',
        url: 'https://yannglt.com/',
        description: 'Personal blog with Linear design reflections',
      },
      {
        name: 'Paco Coursey',
        role: 'Design Engineer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/pacocoursey/',
        description: 'Ex-Vercel, owns Linear website and brand',
      },
      {
        name: 'Linear Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://linear.app/blog',
        description: 'Product and design updates',
      },
      {
        name: 'Linear Method',
        role: 'Company',
        platform: 'blog',
        url: 'https://linear.app/method',
        description: 'Official methodology and design process documentation',
      },
    ],
    openRoles: [
      {
        title: 'Senior / Staff Product Designer',
        location: 'North America',
        url: 'https://linear.app/careers/a039835d-cde7-42ef-8250-80c3dc0ed9cf',
      },
      {
        title: 'Designer (Web & Brand)',
        location: 'North America / Europe',
        url: 'https://linear.app/careers/4f10c2ca-d19a-42b5-9e1f-d1794c43dd89',
      },
    ],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.8,
        content: 'Remote-first, async culture. High bar for quality. Finnish work-life balance values.',
        url: 'https://www.glassdoor.com/Reviews/Linear-Reviews-E3834586.htm',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Developer community loves Linear. Strong brand advocacy. "The anti-Jira" positioning resonates.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Limited salary data. Remote-first means location-adjusted comp.',
        url: 'https://www.levels.fyi/companies/linear/',
      },
      {
        source: 'careers',
        sentiment: 'positive',
        content: 'Designers have <3 hours meetings/week. Paid work trial for hiring (no whiteboard). Design is a reference, not deliverable — real design is the shipped app.',
        url: 'https://linear.app/method/manage-design-projects',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Flat design org: CEO → Head of Product Design → ICs. No design managers. Only 2 PMs company-wide. Designers embedded in every user-facing feature team.',
        url: 'https://www.lennysnewsletter.com/p/how-linear-builds-product',
      },
      {
        source: 'careers',
        sentiment: 'positive',
        content: 'Coworking hubs in Berlin, NYC, SF added in 2025 — no attendance requirement. "Builders deserve freedom of place, rhythm, and deep focus."',
        url: 'https://linear.app/now/designing-remote-work-at-linear',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M ARR (June 2025), 12x in 18 months from $8.4M",
      userGrowth: "15,000+ companies (June 2025), NRR 140-145%",
      signals: [
        "$1.25B valuation at Series C (June 2025)",
        "$134M total funding (Sequoia, Accel)",
        "15,000+ companies including OpenAI, Vercel, Cursor, Ramp, Scale AI",
        "Profitable since 2021 — negative lifetime burn rate",
        "Enterprise ARR grew 2,000% YoY (Jan 2025)",
        "Profits grew 280% in 2024",
        "Only 0.5% of revenue spent on marketing",
        "66% of Forbes Top 50 AI companies use Linear",
        "First Fortune 100 customer signed (Jan 2025)",
      ],

      tam: "$10B+ (Project management and issue tracking for software teams)",
      marketShare: "~1% of $10B PM market, but 20-30%+ among startups/high-growth tech",
      ceiling: "Mid innings: Engineering tools market is mature, but Linear is taking share from Jira. Agent Orchestration Platform (Linear for Agents) expands TAM. Ceiling depends on cross-functional expansion beyond engineering teams.",
      tailwinds: [
        "Developer community strongly advocates for Linear over Jira",
        "AI coding agents (Devin, Codegen) need a PM platform — Linear for Agents positions it as the OS",
        "Remote-first work increases need for async collaboration tools",
        "Modern engineering teams reject legacy enterprise tools",
        "Speed and polish create viral word-of-mouth — 3.7x faster than Jira",
      ],
      headwinds: [
        "GitHub Projects is free and improving (sub-issues, issue types shipped 2025)",
        "Jira has massive enterprise footprint and Atlassian ecosystem lock-in",
        "ClickUp at $300M revenue / $4B valuation is well-funded indirect competitor",
        "Limited to engineering teams (not cross-functional like Asana/Monday)",
        "$1.25B valuation means equity upside requires $10B+ exit",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium-Strong: Design craft (CEO is designer), PLG (0.5% marketing spend), opinionated workflows create behavioral lock-in, Agent Platform creates new infrastructure moat. No network effects but strong brand loyalty.",
    },

    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Designer-CEO company — Karri personally designs screens',
        'Remote-first, async culture (<3hr meetings/week)',
        'Product loved by developers — 3.7x faster than Jira',
        'Finnish design craft DNA — quality is the primary moat',
        'Profitable since 2021, $100M ARR, 12x growth',
        'World-class design peers: ex-37signals, GitHub, Microsoft, Airbnb',
        'Novel design challenge: human-AI agent collaboration UX',
      ],
      whyNot: [
        'Not L4 AI-native (AI is feature, not product)',
        'Flat org = limited upward growth path (no design manager track)',
        '$1.25B entry = moderate equity upside',
      ],
      nextActions: [
        'Apply for Senior/Staff Product Designer role',
        'Use Linear daily to build deep product intuition',
        'Study Karri Saarinen interviews (Lenny, First Round, Config)',
        'Read Yann Gillet 1-year reflection + Adrien Griveau Dive Club',
        'Prepare portfolio piece showing keyboard-first or agent-collaboration UX',
      ],
      notes: 'Deep research completed 2026-02-10. See src/data/deep-research/linear.md for full report. Score: 9.0/10.',
    },

    lastUpdated: '2026-02-10',
    sources: [
      { title: 'TechCrunch — Series C ($82M at $1.25B)', url: 'https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/' },
      { title: 'Linear Blog — Building Our Way (Series C)', url: 'https://linear.app/now/building-our-way' },
      { title: 'Sequoia Capital Spotlight', url: 'https://sequoiacap.com/article/linear-spotlight/' },
      { title: 'Lenny\'s Podcast — Inside Linear', url: 'https://www.lennysnewsletter.com/p/inside-linear-building-with-taste' },
      { title: 'First Round Review — Path to PMF', url: 'https://review.firstround.com/linears-path-to-product-market-fit/' },
      { title: 'Figma Blog — 10 Rules (Config 2024)', url: 'https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/' },
      { title: 'Pragmatic Engineer — Linear', url: 'https://newsletter.pragmaticengineer.com/p/linear' },
      { title: 'Aakash Gupta — How Linear Grows', url: 'https://www.news.aakashg.com/p/how-linear-grows' },
      { title: 'Linear for Agents (May 2025)', url: 'https://linear.app/changelog/2025-05-20-linear-for-agents' },
      { title: 'Deep Research Report', url: 'src/data/deep-research/linear.md' },
    ],
  };
