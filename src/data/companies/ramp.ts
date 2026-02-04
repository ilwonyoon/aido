import { Company } from '../types';

export const ramp: Company = {
    id: 'ramp',
    name: 'Ramp',
    description: 'AI-powered finance automation platform. Corporate cards, expense management, and bill payments—designed to save companies time and money.',
    website: 'https://ramp.com',
    screenshot: '/screenshots/ramp-screenshot.png',

    // Location
    headquarters: 'New York, NY',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/ramp-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'creative-media'],

    // Business
    stage: 'Series D+',
    valuation: '$32B',
    totalFunding: '$750M+',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$300M',
        date: '2025-11',
        valuation: '$32B',
        leadInvestors: ['Founders Fund', 'Thrive Capital'],
      },
    ],
    revenue: '$1B ARR (100% YoY growth)',
    growth: '100% YoY. Crossed $1B ARR in Nov 2025',
    runway: 'Strong (just raised $300M)',
    customers: '50,000+ businesses',

    // Competition
    competitors: [
      {
        name: 'Brex',
        description: 'Corporate cards and spend management',
        whyTheyWin: 'Earlier mover, international expansion',
      },
      {
        name: 'Navan (formerly TripActions)',
        description: 'Corporate cards + travel',
        whyTheyWin: 'Travel integration, international',
      },
      {
        name: 'American Express',
        description: 'Traditional corporate cards',
        whyTheyWin: 'Brand, rewards, enterprise relationships',
      },
    ],
    marketPosition: 'Fastest-growing finance automation platform. AI-first approach. "Autonomous finance."',
    moat: [
      'AI-powered automation and insights',
      '$1B ARR, 100% growth',
      'Network effects (spend data)',
      'Eric Glyman and Karim Atiyeh (repeat founders)',
      'Strong investors (Founders Fund, Thrive)',
    ],
    vsGiants: 'AI-first vs traditional Amex. Faster product velocity vs Brex. "Autonomous finance."',

    // AI-Native Level
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Finance platform adding AI for spend intelligence. Proven fintech product with AI features.',
    aiDesignChallenges: [
      'AI-powered expense categorization',
      'Automated approval workflows',
      'Anomaly detection and alerts',
      'Finance insights and recommendations',
      'Enterprise admin and controls',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Eric Glyman',
        role: 'CEO & Co-Founder',
        background: 'Founded Paribus (sold to Capital One). Harvard. Obsessed with saving customers money.',
      },
      {
        name: 'Karim Atiyeh',
        role: 'CTO & Co-Founder',
        background: 'Co-founded Paribus. Harvard. Engineering leader.',
      },
      {
        name: 'Gene Lee',
        role: 'Co-Founder',
        background: 'Engineering.',
      },
    ],
    whyBuilding: 'Companies waste money on bad spend decisions. AI can help them spend less and move faster.',
    beliefs: [
      'Help companies spend less (not more)',
      'AI should automate finance workflows',
      'Speed and efficiency over features',
      'Asymmetric bets and bold moves',
    ],
    designPhilosophy: 'Simple, fast, intelligent. AI should be invisible but powerful.',
    greenFlags: [
      'Eric Glyman and Karim Atiyeh (repeat founders)',
      '$32B valuation, $1B ARR',
      '100% YoY growth (rare at scale)',
      'Strong AI vision',
    ],
    redFlags: [
      'New York hybrid (not remote)',
      'Fintech can be dry for designers',
      'Fierce competition from Brex, Amex',
      'High-pressure, high-growth culture',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI categorization behaviors',
          'Define automated approval workflows',
          'Anomaly detection and alert logic',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Accuracy metrics for AI categorization',
          'User research on finance workflows',
          'A/B testing on automation features',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Finance dashboards and insights',
          'Mobile expense capture',
          'Enterprise admin controls',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Finance teams and controllers at mid-market and enterprise companies',
        secondary: 'Employees needing corporate cards and expense management',
    },
    userProblems: [
        'Traditional corporate cards lack real-time spend visibility and control',
        'Expense reporting requires manual receipt collection and categorization',
        'Finance teams cannot enforce spend policies without manual review',
        'Reconciling expenses across teams takes days of manual accounting work',
        'Approval workflows for purchases slow down business operations',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Principal Product Designer',
        location: 'New York, NY',
        url: 'https://jobs.ashbyhq.com/ramp/6e7b0226-d806-4efb-972c-1e7d0e1690cf',
        level: 'Principal',
        type: 'full-time',
        aboutRole: 'Lead design for AI-powered finance automation. Design for 50,000+ businesses.',
        whyInteresting: 'Work with repeat founders. $1B ARR, 100% growth. Autonomous finance vision.',
      },
      {
        title: 'Staff Product Designer',
        location: 'New York, NY',
        url: 'https://jobs.ashbyhq.com/ramp/eca54d0e-232a-4c3e-bfcc-d6c6add393f5',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Design for AI-powered finance platform. High-growth, high-impact role.',
        whyInteresting: '$32B valuation. Fastest-growing fintech. AI-first approach.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$1B ARR (2025), 100% YoY (rare at scale)",
      userGrowth: "50,000+ businesses",
      signals: ["$32B valuation", "$1B ARR with 100% growth", "Repeat founders (Eric Glyman, Karim Atiyeh)", "50K+ businesses"],
      tam: "$200B+ (Corporate spend management)",
      marketShare: "~0.5% = 400x upside",
      ceiling: "Mid innings: Corporate cards growing but competitors (Brex, Navan) strong. AI automation differentiator.",
      tailwinds: ["AI-powered finance automation", "100% YoY growth at $1B scale", "Repeat founders", "Fintech consolidation trend"],
      headwinds: ["Brex, Navan competing", "Banks offering corporate cards", "Fintech margins compress", "NY hybrid limits talent"],
      moatType: 'switching-costs',
      moatStrength: "Medium: Finance workflows create switching costs. AI automation defensible. But corporate cards commoditizing.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Eric Glyman and Karim Atiyeh (repeat founders)',
        '$32B valuation, $1B ARR',
        '100% YoY growth (rare at scale)',
        'AI-native Level 3: AI is core',
        'Multiple senior roles (Principal, Staff)',
      ],
      whyNot: [
        'New York hybrid (not remote)',
        'Fintech domain might be dry',
        'High-pressure culture',
        'Unknown design team culture',
      ],
      nextActions: [
        'Research Eric Glyman (CEO)',
        'Try Ramp product',
        'Connect with Ramp designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:40:00',
    sources: [
      {
        title: 'Ramp $32B valuation, $1B ARR',
        url: 'https://techstartups.com/2025/11/17/ramp-hits-32b-valuation-with-new-300m-funding-round-as-investors-double-down-on-autonomous-finance/',
      },
      {
        title: 'Eric Glyman on SaaStr',
        url: 'https://www.saastr.com/the-first-100000000-arr-at-ramp-how-ceo-eric-glyman-and-cto-karim-atiyah-built-a-finance-platform-through-asymmetric-bets/',
      },
    ],
  };
