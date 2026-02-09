import { Company } from '../types';

export const base44: Company = {
    id: 'base44',
    name: 'Base44',
    description: 'AI-powered no-code app builder that turns natural language into fully functional web applications.',
    website: 'https://base44.com',
    headquarters: 'Tel Aviv, Israel',
    remote: 'Yes',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/gbNDlXv7_rE5XVorwYMw8uxCvhRC1dC59PLpEJsabI37QCXSGfNwVw7NqDJl7sPm-lSr46o_-c5xJ6YA996oKw.png',

    // OG Image
    ogImage: '/og-images/base44-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

    // Business
    stage: 'Acquired',
    valuation: '$80M (acquisition by Wix, Jun 2025)',
    totalFunding: '$0 (bootstrapped)',
    fundingHistory: [
      { stage: 'Unknown', amount: '$0', date: '2025-02', leadInvestors: ['Bootstrapped'] },
    ],
    revenue: '$1M ARR (3 weeks after launch), $189K monthly profit (6 months)',
    growth: 'Hit $1M ARR in 3 weeks, 400K+ users in 6 months, acquired for $80M',
    runway: 'Acquired by Wix (Jun 2025)',
    customers: '400,000+ users',

    // Competition
    competitors: [
      {
        name: 'Replit',
        description: 'AI-native coding platform with Replit Agent',
        whyTheyWin: 'Full developer control, real IDE, better for complex projects',
      },
      {
        name: 'Lovable',
        description: 'AI app builder with GitHub sync',
        whyTheyWin: 'Fastest MVP creation, production code export, GitHub integration',
      },
      {
        name: 'Bolt.new',
        description: 'AI full-stack app builder with GitHub integration',
        whyTheyWin: 'Full code ownership, GitHub export from start, no lock-in',
      },
      {
        name: 'v0 (Vercel)',
        description: 'AI UI component generator',
        whyTheyWin: 'Vercel ecosystem, React/Next.js focus, component-level generation',
      },
    ],
    marketPosition: 'All-in-one no-code platform for non-technical founders. Won 2025 vibe coding shootout.',
    moat: [
      'Full-stack generation: backend, frontend, database, auth automatically',
      'Built-in analytics and data visibility rules',
      'Non-technical founder friendly',
      'Wix distribution and resources post-acquisition',
    ],
    vsGiants: 'Base44 is full no-code vs Replit/Cursor (developer tools). Different use case: non-coders building apps vs developers coding faster.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Natural language → full-stack apps. Creating accessible app development for non-coders.',
    aiDesignChallenges: [
      'Natural language → full-stack code: designing conversational interface for app building',
      'Managing complexity: how to expose advanced features without overwhelming users',
      'Trust and transparency: showing users what AI is building',
      'In-app editing: letting users modify AI-generated code visually',
      'Data modeling: helping non-technical users design databases',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Maor Shlomo',
        role: 'Founder & CEO',
        background: 'Israeli programmer, Forbes 30 Under 30. Previously CEO & Co-founder of Explorium (data science startup). Built Base44 solo while traveling Southeast Asia with just a laptop.',
      },
    ],
    whyBuilding: 'Maor wanted to build something lean and profitable with full control—a different approach than his previous venture. He believed AI and no-code tools could democratize software development.',
    beliefs: [
      'AI and no-code tools transform how companies build and scale',
      'Software development should be accessible to everyone, not just developers',
      'Build in public: share honestly—failures, lessons, numbers',
      'Community-led growth: enable others, not just personal branding',
      'Lean and profitable beats VC-funded growth',
    ],
    designPhilosophy: 'Reduce the barrier to entry for software development. Make AI accessible and practical.',
    greenFlags: [
      'Bootstrapped to $80M exit in 6 months',
      'Hit $1M ARR in 3 weeks',
      '400K+ users with 0 funding',
      'Profitable from day 1: $189K monthly profit',
      'Won 2025 vibe coding shootout (best overall)',
      'Acquired by Wix (Jun 2025) but operating independently',
    ],
    redFlags: [
      'Solo founder: potential execution risk (but mitigated by Wix acquisition)',
      'Acquired: may lose independence and speed',
      'No back-end code export: lock-in risk',
      'Limited customization vs developer-focused tools',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~8 (pre-acquisition)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing natural language → full-stack app generation',
          'Data modeling UX for non-technical users',
          'AI agent behavior: when to ask questions vs make decisions',
          'Multi-step app building: breaking down complex requests',
          'Context management: keeping AI aware of existing app structure',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing preview and testing workflows',
          'Building error detection and correction flows',
          'Creating feedback loops for AI improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Conversational interface for app building',
          'In-app visual code editor',
          'Data management and database UI',
          'Authentication and user management',
          'Analytics and monitoring dashboards',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Non-technical founders and entrepreneurs who want to build SaaS products',
        secondary: 'Small business owners and makers who need internal tools or MVPs quickly',
    },
    userProblems: [
        'Building MVP requires hiring expensive developers or learning to code for months',
        'No-code tools like Bubble have steep learning curves and limitations',
        'Outsourcing development to agencies is slow and costly ($50K+ for MVP)',
        'Non-technical founders can\'t iterate quickly on product ideas',
        'Setting up backend, database, auth, and deployment is too technical',
    ],

    // Designer Links
    designerLinks: [
      {
        name: 'Maor Shlomo',
        role: 'Founder & CEO',
        platform: 'linkedin',
        url: 'https://il.linkedin.com/in/maor-shlomo-1088b4144',
        description: 'Founder of Base44. Built in public on LinkedIn, sharing journey to $80M exit.',
      },
    ],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Now part of Wix, Base44 operates as independent product unit. Maor built with 8-person team, bootstrapped mindset, transparent culture.',
        url: 'https://www.linkedin.com/posts/maor-shlomo-1088b4144_base44-is-being-acquired-by-wix-theres-activity-7341088575049891840-afDn',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$1M ARR in 3 weeks, $189K monthly profit at 6 months',
      userGrowth: '400,000+ users in 6 months',
      signals: [
        'Acquired by Wix for $80M in 6 months',
        'Hit $1M ARR in 3 weeks',
        'Profitable from day 1 (bootstrapped)',
        'Forbes 30 Under 30 founder',
        'Won 2025 vibe coding shootout',
      ],

      tam: '$15B+ (no-code/low-code market)',
      marketShare: '<0.01% but fastest-growing',
      ceiling: 'Early innings: AI no-code category just beginning. Wix distribution unlocks enterprise market.',
      tailwinds: [
        'No-code AI tools reducing barrier to entry for software creation',
        'Non-technical founders increasingly building SaaS products',
        'Wix distribution (200M+ users) unlocks massive reach',
        'Community-led growth and build-in-public momentum',
      ],
      headwinds: [
        'Intense competition: Replit, Lovable, Bolt all well-funded',
        'No back-end code export creates lock-in concerns',
        'Developer tools (Cursor, Replit) expanding to non-developers',
        'May lose agility post-acquisition',
      ],

      moatType: 'platform-ecosystem',
      moatStrength: 'Medium: Full-stack generation and Wix ecosystem provide defensibility. But AI no-code market is crowded and rapidly evolving.',
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level 4: AI is the product',
        'Fastest bootstrapped exit ever ($80M in 6 months)',
        'Wix resources + Base44 independence',
        'Won 2025 vibe coding shootout (validation)',
        'Mission-driven: democratizing software creation',
      ],
      whyNot: [
        'Acquired: may lose startup speed and culture',
        'Small team: limited design roles',
        'Tel Aviv HQ (though remote-friendly)',
        'No back-end export: product lock-in concerns',
      ],
      nextActions: [
        'Try Base44 extensively',
        'Follow Maor Shlomo on LinkedIn',
        'Track Wix integration and product evolution',
        'Compare with Replit Agent and Lovable',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T23:30:00',
    sources: [
    { title: 'Source', url: 'https://www.aixploria.com/en/base44-ai/' },
    { title: 'Source', url: 'https://www.lennysnewsletter.com/p/the-base44-bootstrapped-startup-success-story-maor-shlomo' },
    { title: 'Source', url: 'https://www.inc.com/ben-sherry/vibe-coding-base44-wix-avishai-abrahami-maor-shlomo/91267959' },
    { title: 'Source', url: 'https://base44.com/blog/base44-vs-replit' },
    { title: 'Source', url: 'https://il.linkedin.com/in/maor-shlomo-1088b4144' }
  ],
  };
