import { Company } from '../types';

export const linear: Company = {
    id: 'linear',
    name: 'Linear',
    description: 'Issue tracking and project management for high-performance teams. The anti-Jira.',
    website: 'https://linear.app',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

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
    customers: 'Vercel, Ramp, Watershed, high-growth startups',

    competitors: [
      {
        name: 'Jira',
        description: 'Atlassian\'s dominant project management tool',
        whyTheyWin: 'Enterprise standard, deep integrations, Atlassian ecosystem',
      },
      {
        name: 'Asana',
        description: 'Work management platform',
        whyTheyWin: 'Broader use case beyond engineering, established enterprise presence',
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace with project features',
        whyTheyWin: 'Flexibility, docs + projects together, consumer-grade UX',
      },
    ],
    marketPosition: 'Premium choice for fast-moving engineering teams',
    moat: [
      'Best-in-class UX — developers love it',
      'Speed and keyboard-first design',
      'Finnish design craft DNA',
      'Word-of-mouth growth from developer advocacy',
    ],

    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. AI-powered triage, writing, search.',
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
      designHead: 'Karri Saarinen (CEO, ex-designer)',
      teamSize: '~10-15',
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

    designerLinks: [
      {
        name: 'Karri Saarinen',
        role: 'CEO & Co-founder',
        platform: 'twitter',
        url: 'https://twitter.com/karrisaarinen',
        description: 'Design thoughts, Linear updates',
      },
      {
        name: 'Linear Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://linear.app/blog',
        description: 'Product and design updates',
      },
    ],
    openRoles: [
      {
        title: 'Senior / Staff Product Designer',
        location: 'North America',
        url: 'https://linear.app/careers/a039835d-cde7-42ef-8250-80c3dc0ed9cf',
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
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "~$50M ARR (estimated, 2x YoY)",
      userGrowth: "25,000+ companies, growing steadily",
      signals: [
        "$1.6B valuation at Series C",
        "$152M total funding (Sequoia, a16z)",
        "25,000+ companies including Vercel, Stripe, Coinbase",
        "Profitable company (no burn)",
        "Designer-founder CEO (Karri Saarinen, ex-Airbnb Principal Designer)",
      ],

      tam: "$10B+ (Project management and issue tracking for software teams)",
      marketShare: "~0.5% (competing against Jira's dominance)",
      ceiling: "Mid innings: Engineering tools market is mature, but Linear is taking share from Jira. Ceiling depends on expanding beyond engineering teams.",
      tailwinds: [
        "Developer community strongly advocates for Linear over Jira",
        "Remote-first work increases need for async collaboration tools",
        "Modern engineering teams reject legacy enterprise tools",
        "Speed and polish create viral word-of-mouth",
      ],
      headwinds: [
        "Jira has massive enterprise footprint and Atlassian ecosystem lock-in",
        "Notion, Asana expanding into project management",
        "Limited to engineering teams (not cross-functional like Asana)",
        "Enterprise sales cycle is slow vs product-led growth",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Workflow integration creates switching costs, and developer brand loyalty is strong. But no network effects. Quality and speed are defensible through design craft, but replicable.",
    },

    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Designer-CEO company',
        'Remote-first culture',
        'Product loved by developers',
        'Finnish design craft',
        'Profitable, sustainable growth',
      ],
      whyNot: [
        'Not L4 AI-native',
        'Smaller than Anthropic-scale impact',
      ],
      nextActions: [
        'Use Linear daily to understand product',
        'Follow Karri Saarinen\'s design thinking',
        'Apply for Senior/Staff role',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Linear Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/',
      },
      {
        title: 'Linear Blog - Series C Announcement',
        url: 'https://linear.app/now/building-our-way',
      },
      {
        title: 'Sequoia Spotlight',
        url: 'https://sequoiacap.com/article/linear-spotlight/',
      },
    ],
  };
