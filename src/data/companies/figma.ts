import { Company } from '../types';

export const figma: Company = {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative design platform. The Google Docs of design tools.',
    website: 'https://figma.com',
    screenshot: '/screenshots/figma-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/figma-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['infrastructure', 'creative-media'],

    stage: 'Public (NYSE: FIG)',
    valuation: '$57B market cap (July 2025 IPO)',
    totalFunding: '$615M pre-IPO',
    fundingHistory: [
      { stage: 'Seed', amount: '$3.8M', date: '2013-06', leadInvestors: ['Index Ventures'] },
      { stage: 'Series A', amount: '$14M', date: '2015-12', leadInvestors: ['Greylock'] },
      { stage: 'Series B', amount: '$25M', date: '2018-02', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series C', amount: '$40M', date: '2019-04', leadInvestors: ['Sequoia'] },
      { stage: 'Series D', amount: '$50M', date: '2020-04', valuation: '$2B', leadInvestors: ['a16z'] },
      { stage: 'Series E', amount: '$200M', date: '2021-06', valuation: '$10B', leadInvestors: ['Various'] },
      { stage: 'Series F', amount: 'N/A', date: '2025-07', valuation: '$57B', leadInvestors: ['Public'] },
    ],
    revenue: '$820M (2025)',
    growth: 'Strong, IPO validated',
    customers: 'Designers worldwide, enterprises, startups',

    competitors: [
      {
        name: 'Adobe XD',
        description: 'Adobe\'s design tool (discontinued)',
        whyTheyWin: 'Was Adobe ecosystem, now Figma won',
      },
      {
        name: 'Sketch',
        description: 'Mac-native design tool',
        whyTheyWin: 'Mac-native performance, offline-first, loyal base',
      },
      {
        name: 'Framer',
        description: 'Design + code publishing',
        whyTheyWin: 'Design-to-production workflow, website builder',
      },
    ],
    marketPosition: 'Dominant design tool for product teams',
    moat: [
      'Real-time collaboration (first mover)',
      'Browser-based — no install friction',
      'Network effects from team adoption',
      'Ecosystem of plugins and community',
    ],

    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Industry-leading design tool adding AI features. Stable, successful business with AI enhancement.',
    aiDesignChallenges: [
      'AI-assisted design generation',
      'Design-to-code with AI',
      'Smart component suggestions',
      'Accessibility checker AI',
    ],

    founders: [
      {
        name: 'Dylan Field',
        role: 'CEO',
        background: 'Brown dropout, Thiel Fellow, ex-LinkedIn/Flipboard intern',
      },
      {
        name: 'Evan Wallace',
        role: 'Co-founder (left 2021)',
        background: 'Brown CS, built WebGL renderer, ex-Microsoft/Pixar',
      },
    ],
    whyBuilding:
      'Saw design tools were stuck in desktop era. Believed browser could enable real-time collaboration that would transform how teams design.',
    beliefs: [
      'Design should be collaborative',
      'Browser can match native performance',
      'Lower barriers to design',
      'Community and ecosystem matter',
    ],
    designPhilosophy:
      'Design is a team sport. Focus on collaboration, accessibility, and lowering barriers. Make design tools for everyone, not just designers.',
    greenFlags: [
      'Market leader in design tools',
      'Public company — stability',
      'Strong engineering culture',
      'Adobe deal showed value ($20B offer)',
    ],
    redFlags: [
      'Public company — less startup energy',
      'AI features catching up to hype',
      'Large company bureaucracy',
    ],

    designTeam: {
      teamSize: '~100+ (large design org)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI generation logic',
          'Smart selection algorithms',
          'Design-to-code conversion',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'AI output quality metrics',
          'User productivity measurement',
          'Feature adoption tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Core editor experience',
          'Prototyping tools',
          'Design system features',
          'FigJam collaboration',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Product designers and design teams at technology companies',
        secondary: 'UX researchers, product managers, and engineers collaborating on product design',
    },
    userProblems: [
        'Design collaboration requires sending files back and forth losing version control',
        'Designers on distributed teams cannot work together in real-time like developers do with code',
        'Installing and maintaining desktop design tools creates friction and compatibility issues',
        'Sharing design work with non-designers for feedback requires exporting static files',
        'Scaling design systems across teams requires manual component distribution and updates',
    ],

    designerLinks: [
      {
        name: 'Figma Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://figma.com/blog',
        description: 'Product updates and design insights',
      },
      {
        name: 'Dylan Field',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://twitter.com/zoink',
        description: 'Company updates, design industry thoughts',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer - Design, Dev, & AI Tools',
        location: 'San Francisco, CA • New York, NY • United States',
        url: 'https://job-boards.greenhouse.io/figma/jobs/5711468004',
      },
      {
        title: 'Product Designer, AI Models',
        location: 'San Francisco, CA • New York, NY • United States',
        url: 'https://job-boards.greenhouse.io/figma/jobs/5711913004',
      },
    ],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.5,
        content: 'Great culture, strong design team. Compensation competitive. Work-life balance good for tech.',
        url: 'https://www.glassdoor.com/Reviews/Figma-Reviews-E1537054.htm',
      },
      {
        source: 'blind',
        sentiment: 'positive',
        content: 'Good comp, RSUs valuable post-IPO. Culture still startup-ish despite size.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        rating: 4.4,
        content: 'Product Designer: $150K-200K+ base. Strong equity component.',
        url: 'https://www.levels.fyi/companies/figma/',
      },
    ],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: "$820M (2025), ~1.5x YoY",
      userGrowth: "Millions of designers globally, enterprise adoption growing",
      signals: [
        "$57B market cap at IPO (July 2025)",
        "$820M revenue (2025), growing steadily",
        "Dominant design tool for product teams",
        "Adobe attempted $20B acquisition (blocked by regulators)",
        "Public company validation",
      ],

      tam: "$15B+ (Design and creative software market)",
      marketShare: "~5% = 3x upside (already market leader in product design)",
      ceiling: "Late innings: Figma already won product design tool category. Growth depends on expanding to adjacent markets (design-to-code, prototyping, whiteboarding).",
      tailwinds: [
        "Real-time collaboration is now table stakes for all tools",
        "Browser-based removes install friction",
        "Community plugins and templates create ecosystem lock-in",
        "Enterprise adoption increasing as design teams scale",
      ],
      headwinds: [
        "Adobe XD discontinued but Adobe still owns creative suite ecosystem",
        "Sketch maintaining loyal Mac-native user base",
        "Framer competing in design-to-production workflow",
        "Public company: growth expectations, bureaucracy increasing",
        "AI features behind expectations (Figma AI underwhelming)",
      ],

      moatType: 'network-effects',
      moatStrength: "Strong: Real-time collaboration creates team-level network effects (designers pull in their teams). Plugin ecosystem and community files create switching costs. Market leader brand is defensible.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Leader in design tools',
        'Work on tools designers use',
        'Strong comp and stability (public)',
        'AI features growing',
      ],
      whyNot: [
        'Not AI-native company',
        'Large company, less impact per person',
        'Hybrid required for most roles',
      ],
      nextActions: [
        'Monitor AI team growth',
        'Check if fully remote opens up',
        'Research Figma AI roadmap',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Figma IPO - CNBC',
        url: 'https://www.cnbc.com/2024/05/16/figma-tender-offer-values-company-at-12point5-billion.html',
      },
      {
        title: 'Figma S-1 Filing',
        url: 'https://getlatka.com/blog/figma-revenue/',
      },
    ],
  };
