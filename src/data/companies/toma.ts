import { Company } from '../types';

export const toma: Company = {
    id: 'toma',
    name: 'Toma',
    description: 'AI voice agents for automotive industry. Handles phone calls, scheduling, and customer service for car dealerships.',
    website: 'https://www.toma.com',
  screenshot: '/screenshots/toma-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/toma-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2b'],
  industries: ['sales-marketing'],

    stage: 'Series A',
    valuation: 'N/A',
    totalFunding: '$17M',
    fundingHistory: [
      { stage: 'Series A', amount: '$17M', date: '2025-06', leadInvestors: ['Andreessen Horowitz'] },
    ],
    revenue: '7-figure ARR, approaching 8-figure',
    growth: '100+ dealerships, thousands of calls daily, 138X ROI for clients',
    runway: '36+ months',
    customers: 'Car dealerships (service, parts, sales)',

    competitors: [
      {
        name: 'Numa',
        description: 'AI agent platform for dealerships',
        whyTheyWin: 'Broader multi-industry platform, established customer base beyond automotive',
      },
      {
        name: 'OpenMic AI',
        description: 'Voice-first dealership AI platform',
        whyTheyWin: 'Similar focus on automotive voice, may have different tech approach',
      },
      {
        name: 'Rosie AI',
        description: 'Automotive AI platform',
        whyTheyWin: 'Focused on automotive AI, potentially broader product suite',
      },
    ],
    marketPosition: 'Automotive-first AI voice agents with proven ROI',
    moat: [
      'Deep automotive domain expertise',
      'DMS integration complexity',
      'Compliance and edge case handling',
      'Word-of-mouth growth without sales team',
      'Y Combinator + a16z backing',
    ],
    vsGiants: 'Vertical specialization vs horizontal AI voice platforms. Deep automotive integration vs generic voice agents. Proven 138X ROI vs unproven solutions. Word-of-mouth traction shows product-market fit.',

    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core: AI voice agents are the core differentiator. Built on proven voice AI workflows but specialized for automotive compliance and workflows.',
    aiDesignChallenges: [
      'Voice conversation design for automotive domain',
      'Edge case handling (angry customers, complex requests)',
      'DMS integration UX',
      'Call quality and success metrics',
      'Multi-channel (voice + SMS) orchestration',
    ],

    founders: [
      {
        name: 'Monik Pamecha',
        role: 'CEO',
        background: 'UC Berkeley (Information Management), ex-Braze, ex-Uber, ex-Turing.com. Previous founder (Skindex acquired)',
      },
      {
        name: 'Anthony Krivonos',
        role: 'CTO',
        background: 'Columbia University (Computer Engineering), ex-Scale AI, ex-Lyft, ex-AWS. Previous founder (SayHi acquired)',
      },
    ],
    whyBuilding:
      'Underserved industries deserve great software. Car dealerships handle thousands of calls but lack AI automation. AI voice agents can transform customer experience and generate massive ROI.',
    beliefs: [
      'Vertical AI wins over horizontal',
      'Product-market fit drives word-of-mouth growth',
      'Deep domain expertise is defensible',
      'ROI proves value faster than sales pitches',
    ],
    greenFlags: [
      'YC W24 + a16z Series A',
      '7-figure → 8-figure ARR in less than 1 year',
      '100+ dealerships through word-of-mouth (no sales team)',
      '138X ROI for clients',
      'Both founders have previous exits',
    ],
    redFlags: [
      '5 days in-office (SF only)',
      'Very early stage (Series A)',
      'Automotive-only focus limits TAM',
      'Voice AI quality arms race',
    ],

    designTeam: {
      teamSize: '~1-3',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'AI conversation flow design',
          'Edge case handling logic',
          'Compliance rules for automotive',
          'Multi-turn dialogue patterns',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Call quality metrics',
          'Customer satisfaction tracking',
          'ROI measurement dashboard',
          'Voice understanding accuracy',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Dealership admin dashboard',
          'Call history and analytics',
          'DMS integration configuration',
          'Voice agent settings and training',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Car dealership service departments overwhelmed with phone calls for appointments and parts',
        secondary: 'Dealership sales teams, BDC (Business Development Centers), and parts departments',
    },
    userProblems: [
        'Service advisors spend hours on phone scheduling appointments instead of servicing cars',
        'Missed calls lead to lost revenue and customers going to competitors',
        'After-hours calls go to voicemail, losing immediate booking opportunities',
        'Manual scheduling is error-prone and requires constant back-and-forth',
        'Training staff on phone etiquette and processes is expensive and time-consuming',
    ],

    designerLinks: [
      {
        name: 'Toma LinkedIn',
        role: 'Company',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/company/tomavoice',
        description: 'Company updates and team',
      },
      {
        name: 'Monik Pamecha',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://x.com/monikkinom',
        description: 'Founder insights',
      },
    ],
    openRoles: [
      {
        title: 'Designer of Everything',
        location: 'San Francisco, CA',
        type: 'full-time',
        url: 'https://www.toma.com/jobs',
        requirements: [
          '3+ years digital product design',
          'Figma expertise',
          'AI prototyping tools (Lovable, Replit)',
          'Ownership mindset',
        ],
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'YC W24 batch. Small team, high ownership. Grew through word-of-mouth without sales team.',
      },
      {
        source: 'ycombinator',
        sentiment: 'positive',
        content: 'Strong founder backgrounds (both previous exits). Fast traction (7→8 figure ARR in <1 year).',
      },
      {
        source: 'techcrunch',
        sentiment: 'positive',
        content: '138X ROI for clients. Andreessen Horowitz led Series A validates product-market fit.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — very early stage startup.',
      },
    ],

    growthMetrics: {
      stage: 'early-growth',
      revenueGrowth: "7-figure ARR → approaching 8-figure in less than 1 year",
      userGrowth: "100+ dealerships through word-of-mouth (no sales team)",
      signals: [
        "$17M Series A from Andreessen Horowitz (June 2025)",
        "YC W24 batch with strong traction",
        "138X ROI for dealership clients",
        "7-figure → 8-figure ARR in <1 year",
        "Word-of-mouth growth without sales team",
        "Both founders have previous exits",
      ],

      tam: "$3B+ (AI automation for automotive dealerships: 16K+ dealerships in US)",
      marketShare: "<1% (100+ dealerships out of 16,000+)",
      ceiling: "Early innings: Automotive AI voice is nascent. Proven ROI enables rapid expansion. Potential to expand to other dealership workflows (parts, sales) and other underserved industries.",
      tailwinds: [
        "Car dealerships are understaffed and overwhelmed with calls",
        "Proven 138X ROI makes buying decision easy",
        "Voice AI quality improving rapidly",
        "DMS integration creates switching costs",
        "Word-of-mouth growth shows strong product-market fit",
      ],
      headwinds: [
        "Automotive-only limits TAM (16K US dealerships)",
        "Numa and other competitors entering space",
        "Voice AI quality race requires constant investment",
        "Dealership buying cycles can be slow",
        "Economic downturn affects car sales and dealership budgets",
      ],

      moatType: 'vertical-specialization',
      moatStrength: "Medium: Deep automotive domain expertise and DMS integration create switching costs. Word-of-mouth traction validates product-market fit. But voice AI is commoditizing and competitors are entering.",
    },

    tracking: {
      status: 'watching',
      fitScore: 5,
      whyJoin: [
        'AI-Core product (Level B)',
        'YC + a16z backing',
        'Proven product-market fit (138X ROI)',
        '"Designer of Everything" role — high ownership',
      ],
      whyNot: [
        '5 days in-office (SF only)',
        'Automotive-only limits scope',
        'Very early stage (Series A)',
        'Voice AI work may be specialized',
      ],
      nextActions: [
        'Try Toma demo or request access',
        'Research automotive dealership workflows',
        'Compare with Numa and other voice AI platforms',
        'Understand DMS integration complexity',
      ],
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'TechCrunch: Toma AI voice agents',
        url: 'https://techcrunch.com/2025/06/05/tomas-ai-voice-agents-have-taken-off-at-car-dealerships-and-attracted-funding-from-a16z/',
      },
      {
        title: 'Y Combinator: Toma',
        url: 'https://www.ycombinator.com/companies/toma',
      },
      {
        title: 'Andreessen Horowitz: Investing in Toma',
        url: 'https://a16z.com/announcement/investing-in-toma/',
      },
    ],
  };
