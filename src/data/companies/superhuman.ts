import { Company } from '../types';

export const superhuman: Company = {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'The fastest email experience ever made. Now part of Grammarly, building AI productivity suite with agents that work wherever people work.',
    website: 'https://superhuman.com',
  screenshot: '/screenshots/superhuman-screenshot.png',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/superhuman-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2c'],
  industries: ['creative-media', 'productivity'],

    // Business
    stage: 'Acquired (Grammarly, 2025)',
    valuation: '$825M (last known, Aug 2021)',
    totalFunding: '$118M',
    fundingHistory: [
      {
        stage: 'Series C',
        amount: '$33M',
        date: '2019-06',
        valuation: '$260M',
        leadInvestors: ['Andreessen Horowitz'],
      },
    ],
    revenue: '$20M ARR (estimated before acquisition)',
    growth: 'Unknown',
    runway: 'N/A (acquired)',
    customers: 'Undisclosed',

    // Competition
    competitors: [
      {
        name: 'Shortwave',
        description: 'AI email client',
        whyTheyWin: 'More AI features, faster feature velocity',
      },
      {
        name: 'Spark Mail',
        description: 'Smart email client',
        whyTheyWin: 'Cross-platform, team collaboration',
      },
      {
        name: 'Gmail',
        description: 'Google\'s email',
        whyTheyWin: 'Free, massive ecosystem, AI features',
      },
    ],
    marketPosition: 'Premium email client for power users. Now part of Grammarly productivity suite.',
    moat: [
      'Obsessive focus on speed and craft',
      'High NPS (Net Promoter Score)',
      'Strong brand among tech elite',
      'Now backed by Grammarly resources',
    ],
    vsGiants: 'Premium UX vs Gmail. Speed-obsessed vs Outlook. Now integrating with Grammarly AI.',

    // AI-Native Level
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Established email client adding AI writing and triage. Proven product with AI augmentation.',
    aiDesignChallenges: [
      'Integrating AI without sacrificing speed',
      'Designing AI agents for email workflows',
      'Cross-product AI (email + writing + docs)',
      'Maintaining "fastest email" while adding AI',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Rahul Vohra',
        role: 'CEO & Co-Founder',
        background: 'Founded Rapportive (sold to LinkedIn). Obsessed with product-market fit. Game designer mindset.',
      },
      {
        name: 'Vivek Sodera',
        role: 'Co-Founder',
        background: 'Engineering leader. Previously at Rapportive.',
      },
      {
        name: 'Conrad Irwin',
        role: 'Co-Founder',
        background: 'Engineering. Previously at Rapportive.',
      },
    ],
    whyBuilding: 'Email is broken. People waste hours daily. We can make them feel superhuman with speed + AI.',
    beliefs: [
      'Speed is the most important feature',
      'Obsess over every detail',
      'Manual onboarding for every user',
      'Ignore most customer feedback (focus on product vision)',
      'Position around a single attribute',
    ],
    designPhilosophy: 'Speed above all. Every interaction should feel instant. Design for power users.',
    greenFlags: [
      'Rahul Vohra is product genius (PMF framework)',
      'Obsessive craft and quality',
      'Grammarly acquisition brings resources',
      'Yes',
    ],
    redFlags: [
      'Acquired (less autonomy?)',
      'Premium pricing ($30/mo) limits growth',
      'Email-only product (before acquisition)',
      'Slow feature velocity historically',
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
          'Design AI agent behaviors for email',
          'Define automation vs manual control',
          'Design cross-product AI interactions (email + Grammarly)',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Speed metrics and monitoring',
          'AI suggestion quality evaluation',
          'User research on AI effectiveness',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Desktop email client design',
          'Keyboard-driven interactions',
          'Enterprise admin experiences',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Executives, founders, and professionals managing 100+ emails daily',
        secondary: 'Sales professionals and customer-facing teams living in email',
    },
    userProblems: [
        'Email overload makes inbox zero impossible leading to missed important messages',
        'Gmail and Outlook lack keyboard shortcuts slowing down email triage',
        'Finding past emails and conversations requires slow search and scrolling',
        'Email takes hours daily pulling professionals away from deep work',
        'Drafting and sending emails lacks AI assistance for faster responses',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Remote, North America',
        url: 'https://www.ziprecruiter.com/c/Superhuman/Job/Senior-Product-Designer/-in-Remote,US?jid=35e67684977e99fc',
        level: 'Senior',
        type: 'full-time',
        compensation: '$155,000 – $240,000/year (USD)',
        aboutRole: 'Partner with product managers to set vision and build roadmap. Elevate design culture at Superhuman.',
        requirements: [
          '5+ years of relevant product design experience',
          'Mastery of prototyping, visual and interaction design, typography, layout',
          'Strong portfolio',
        ],
        whyInteresting: 'Work with Rahul Vohra. Obsessive craft culture. Now part of Grammarly AI suite.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: "$50M+ ARR (estimated 2024 before acquisition)",
      userGrowth: "Unknown (premium product, selective growth)",
      signals: [
        "Acquired by Grammarly in 2024",
        "~$50M ARR pre-acquisition",
        "$125M total raised (a16z, IVP)",
        "Product visionary founder (Rahul Vohra)",
        "Cult following among power users",
      ],

      tam: "$10B+ (Email productivity for professionals)",
      marketShare: "~0.5% (premium positioning)",
      ceiling: "Mid-late innings: Superhuman defined premium email category but growth limited by $30/month price. Acquisition by Grammarly suggests ceiling reached.",
      tailwinds: [
        "Grammarly acquisition = distribution boost (30M+ users)",
        "Premium brand and obsessive quality culture",
        "Keyboard-first UX creates switching costs",
        "AI features expanding use cases",
      ],
      headwinds: [
        "Gmail/Outlook free and 'good enough' for most",
        "$30/month price limits TAM significantly",
        "Acquired = exit rather than growth story",
        "Slow feature velocity historically",
        "Email clients mature market",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Cult brand among power users and keyboard-driven UX create loyalty. But limited scale (premium pricing). Acquisition suggests moat insufficient for standalone growth.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Rahul Vohra is product visionary',
        'Obsessive craft and quality culture',
        'Now part of Grammarly (more resources)',
        'Remote-first, good comp',
        'Speed-obsessed design philosophy',
      ],
      whyNot: [
        'Acquired (less autonomy post-Grammarly)',
        'Slow feature velocity historically',
        'Email-only (before acquisition)',
        'Premium pricing limits TAM',
      ],
      nextActions: [
        'Use Superhuman for 2 weeks',
        'Read Rahul Vohra on Lenny\'s Podcast',
        'Understand Grammarly integration plan',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:10:00',
    sources: [
      {
        title: 'Grammarly acquires Superhuman',
        url: 'https://techcrunch.com/2025/07/01/grammarly-acquires-ai-email-client-superhuman/',
      },
      {
        title: 'Rahul Vohra on Lenny newsletter podcast',
        url: 'https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra',
      },
    ],
  };
