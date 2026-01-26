import { Company } from '../types';

export const vercel: Company = {
    id: 'vercel',
    name: 'Vercel',
    description: 'Frontend cloud platform and creator of Next.js. Building the infrastructure for AI-native web.',
    website: 'https://vercel.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series F',
    valuation: '$9.3B (Sept 2025)',
    totalFunding: '$863M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2.1M', date: '2016-08', leadInvestors: ['CRV'] },
      { stage: 'Series A', amount: '$21M', date: '2020-04', leadInvestors: ['Accel'] },
      { stage: 'Series B', amount: '$40M', date: '2020-12', valuation: '$500M', leadInvestors: ['GV'] },
      { stage: 'Series C', amount: '$102M', date: '2021-06', valuation: '$1.1B', leadInvestors: ['Bedrock'] },
      { stage: 'Series D', amount: '$150M', date: '2021-11', valuation: '$2.5B', leadInvestors: ['GIC'] },
      { stage: 'Series E', amount: '$250M', date: '2024-05', valuation: '$3.25B', leadInvestors: ['Accel'] },
      { stage: 'Series F', amount: '$300M', date: '2025-09', valuation: '$9.3B', leadInvestors: ['Accel', 'GIC'] },
    ],
    revenue: '~$200M ARR (May 2025)',
    growth: '82% YoY',
    runway: 'Strong — efficient growth, $300M fresh capital',
    customers: 'Uber, Notion, Zapier, PayPal, Under Armour',

    // Competition
    competitors: [
      {
        name: 'Netlify',
        description: 'Frontend deployment platform',
        whyTheyWin: 'Early mover in JAMstack, strong developer community',
      },
      {
        name: 'AWS Amplify',
        description: 'AWS frontend hosting',
        whyTheyWin: 'AWS ecosystem integration, enterprise relationships',
      },
      {
        name: 'Cloudflare Pages',
        description: 'Edge hosting with Cloudflare network',
        whyTheyWin: 'Global edge network, competitive pricing',
      },
    ],
    marketPosition: '#1 in Frontend-as-a-Service',
    moat: [
      'Next.js framework dominance — 500K+ developers',
      'v0 AI product generating $42M ARR in first year',
      'AI SDK: 3M downloads/week',
      'Best DX in deployment — git push and done',
    ],
    vsGiants: 'Owns the Next.js ecosystem. v0 positions them for AI-native development. Not trying to be all of AWS — focused on frontend excellence.',

    // AI-Native Level
    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. v0 and AI SDK are significant but not core platform.',
    aiDesignChallenges: [
      'v0: AI-generated UI component design and iteration',
      'AI SDK: developer experience for AI integration',
      'Deployment UX: making complex infrastructure feel simple',
      'Pricing and packaging: AI credits and usage models',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Guillermo Rauch',
        role: 'CEO',
        background: 'Creator of Socket.io, Next.js. Argentinian. Started coding as teen.',
      },
    ],
    whyBuilding:
      'Guillermo saw that the web was too slow and deployment too hard. Created Next.js and Vercel to make web development magical.',
    beliefs: [
      'Developer experience is everything',
      'The web should be fast by default',
      'Ship fast, iterate faster',
      'Open source wins (Next.js)',
    ],
    designPhilosophy:
      'Vercel-style: minimal, fast, dark mode, premium feel. Their aesthetic has become industry standard for developer tools.',
    greenFlags: [
      'v0 is the leading AI UI generator',
      'Remote-friendly culture',
      'Strong design culture — Vercel aesthetic is iconic',
      'Multiple Product Designer roles open',
    ],
    redFlags: [
      'Not purely AI — infrastructure company with AI features',
      'Competition from cloud giants increasing',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Director of Product Design',
      teamSize: 'Medium (20+)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'v0: AI component generation rules and constraints',
          'Deployment automation logic',
          'Usage limits and pricing tier logic',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'v0 output quality metrics',
          'Developer satisfaction measurement',
          'Deployment success rates',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'v0 AI interface and iteration flows',
          'Vercel dashboard and deployment UX',
          'Pricing, checkout, and billing flows',
          'Team and enterprise admin features',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [
      {
        name: 'Guillermo Rauch',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://twitter.com/rauchg',
        description: 'Prolific tweeter about web, design, and AI',
      },
      {
        name: 'Vercel Design',
        role: 'Company',
        platform: 'blog',
        url: 'https://vercel.com/blog?tag=design',
        description: 'Vercel design blog posts',
      },
    ],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Remote (US) or SF/NY/London/Berlin',
        url: 'https://vercel.com/careers/senior-product-designer-us-5227493004',
        team: 'Product Design',
        level: 'Senior',
        type: 'full-time',
        compensation: '$156K-$234K base (SF)',
        aboutRole: 'Work across entire product solving complex, nuanced web challenges.',
        responsibilities: [
          'Design thoughtful, systems-based solutions',
          'Customer research and requirements gathering',
          'Deliver visual specs and oversee implementation',
          'Work on pricing, packaging, checkout flows',
        ],
        requirements: [
          'Strong systems thinking',
          'Comfort with modern design tools (Figma, v0, Cursor)',
          'Experience with complex B2B products',
        ],
        whyInteresting: 'Shape the tools that shape the web. Remote-friendly. Iconic design culture.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Remote-first, global team. Strong design culture. Guillermo is design-minded CEO.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Vercel aesthetic is industry benchmark. Team ships fast, high quality bar.',
      },
      {
        source: 'glassdoor',
        sentiment: 'positive',
        content: 'Good work-life balance for startup. Remote flexibility. Competitive comp.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Senior Product Designer: $156K-$234K base. Equity on top.',
        url: 'https://www.levels.fyi/companies/vercel/salaries/product-designer',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$300M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "1M+ developers, 3M+ sites deployed",
      signals: [
        "$3.25B valuation at Series E",
        "$700M+ total funding (Accel, GV, a16z)",
        "1M+ developers, 3M+ sites deployed",
        "Powers Next.js (most popular React framework)",
        "v0 launched = AI coding product expansion",
      ],

      tam: "$30B+ (Cloud deployment, hosting, and dev tools for web developers)",
      marketShare: "~1% (competing with AWS, Netlify, CloudFlare)",
      ceiling: "Mid innings: Developer infrastructure market is crowded, but Vercel owns Next.js ecosystem. v0 opens adjacent AI market ($100B+ if successful).",
      tailwinds: [
        "Next.js framework adoption growing (React dominance)",
        "Developer experience bar rising (Vercel sets standard)",
        "v0 AI coding tool expanding TAM beyond infrastructure",
        "Vercel aesthetic influences entire industry",
        "Remote-first = global talent access",
      ],
      headwinds: [
        "AWS has massive market share and ecosystem lock-in",
        "Netlify, CloudFlare, Railway competing on pricing",
        "v0 faces Cursor, Replit, GitHub Copilot competition",
        "Open-source Next.js can be deployed anywhere (reduces lock-in)",
        "Infrastructure commoditization pressure",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Next.js ecosystem creates switching costs, but framework is open-source. Developer experience and aesthetic brand are defensible. v0 could add AI moat if it wins.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'v0 is leading AI UI tool — frontier design work',
        'Remote-friendly with great culture',
        'Vercel aesthetic is industry-defining',
        'Guillermo is design-minded founder',
      ],
      whyNot: [
        'Not purely AI company — infrastructure focus',
        'May be less cutting-edge AI than pure AI companies',
      ],
      nextActions: ['Apply to Senior Product Designer', 'Use v0 extensively to understand product'],
      notes: 'Best of both worlds: AI features + proven business. Remote OK is huge plus.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Vercel Series F - Official Blog',
        url: 'https://vercel.com/blog/series-f',
      },
      {
        title: 'Vercel Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/vercel/',
      },
    ],
  };
