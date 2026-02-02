import { Company } from '../types';

export const sourcegraph: Company = {
    id: 'sourcegraph',
    name: 'Sourcegraph',
    description: 'Universal code search and AI coding assistant. Cody helps developers understand, write, and fix code faster across any codebase.',
    website: 'https://sourcegraph.com',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/sourcegraph-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'search-retrieval'],
  markets: ['b2b'],
  industries: ['developer-tools'],

    // Business
    stage: 'Series D',
    valuation: '$2.6B',
    totalFunding: '$223M',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$125M',
        date: '2021-07',
        valuation: '$2.625B',
        leadInvestors: ['Andreessen Horowitz'],
      },
    ],
    revenue: 'Unknown',
    growth: '800,000 developers using product (12 months)',
    runway: 'Unknown',
    customers: '54B+ lines of code indexed',

    // Competition
    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer by GitHub/Microsoft',
        whyTheyWin: 'Native GitHub integration, massive user base',
      },
      {
        name: 'Cursor',
        description: 'AI-first code editor',
        whyTheyWin: 'Better UX, focused product, faster iteration',
      },
      {
        name: 'Codeium',
        description: 'Free AI code completion',
        whyTheyWin: 'Free tier, aggressive pricing',
      },
    ],
    marketPosition: 'Strong in enterprise code search, pivoting to AI coding with Cody',
    moat: [
      'Universal code search across 54B+ lines of code',
      'Enterprise-grade security and compliance',
      'Deep codebase understanding from search tech',
      'Strong investor backing (a16z, Sequoia)',
    ],
    vsGiants: 'More comprehensive code search vs GitHub. Better context awareness vs Copilot.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for code search and intelligence. Proven developer workflow enhanced by AI.',
    aiDesignChallenges: [
      'Designing AI interactions for complex codebases',
      'Making code search + AI feel seamless',
      'Enterprise admin UX for AI features',
      'Context window visualization and control',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Quinn Slack',
        role: 'CEO & Co-Founder',
        background: 'Previously at Palantir. Stanford CS. Deep belief in developer productivity.',
      },
      {
        name: 'Beyang Liu',
        role: 'CTO & Co-Founder',
        background: 'Previously at Palantir. Stanford CS. Code search evangelist.',
      },
    ],
    whyBuilding: 'Every developer should be able to search and understand all code, everywhere. AI makes this possible at scale.',
    beliefs: [
      'Code search is fundamental to developer productivity',
      'AI should augment, not replace developers',
      'Universal access to code knowledge',
      'Enterprise-grade reliability matters',
    ],
    designPhilosophy: 'Design for power users. Fast, keyboard-driven, information-dense.',
    greenFlags: [
      'Strong technical founders with vision',
      '$2.6B valuation with solid investor backing',
      'Pivoted successfully from search to AI',
      'Remote-first culture',
    ],
    redFlags: [
      'Facing fierce competition from Cursor, GitHub Copilot',
      'Discontinued free Cody plans in 2025',
      'Revenue/growth metrics not public',
      'Product pivot risk (search → AI)',
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
          'Design AI agent behaviors for code understanding',
          'Define context gathering strategies',
          'Design autocomplete vs chat vs agent modes',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Design feedback loops for code suggestions',
          'Define quality metrics for AI responses',
          'User research on AI effectiveness',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'IDE-like interfaces for code search + AI',
          'Enterprise admin dashboards',
          'Web app and VS Code extension design',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Engineering teams at large companies with complex codebases',
        secondary: 'Engineering managers and platform teams improving developer productivity',
    },
    userProblems: [
        'Finding code across repositories and understanding dependencies wastes hours daily',
        'Onboarding engineers to massive codebases takes months of ramp-up time',
        'Code search in GitHub or GitLab returns too many results requiring manual filtering',
        'Refactoring and deprecation requires finding all usages across dozens of repositories',
        'Understanding code ownership and architecture requires asking colleagues',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "1.3M+ developers using code search, Cody AI growing fast",
      signals: [
        "$2.6B valuation at Series D",
        "$230M total raised (a16z, Sequoia)",
        "1.3M+ developers using Sourcegraph",
        "Ex-Palantir founders (Quinn Slack, Beyang Liu)",
        "Cody AI pivot = growth acceleration",
      ],

      tam: "$100B+ (Developer tools and AI coding assistance)",
      marketShare: "~0.1% (code search leader, AI coding growing)",
      ceiling: "Mid innings: Code search is mature product, but Cody AI is new battleground. Ceiling depends on Cody adoption vs Cursor/Copilot.",
      tailwinds: [
        "Code search moat: 1.3M+ developers using core product",
        "Enterprise relationships (Uber, Lyft, Dropbox)",
        "AI coding market exploding (Cody positioned to ride wave)",
        "Ex-Palantir founders understand enterprise sales",
      ],
      headwinds: [
        "Cursor dominant in AI coding ($29B valuation, better UX)",
        "GitHub Copilot has Microsoft distribution advantage",
        "Discontinued free plans alienated community",
        "Code search commoditizing (GitHub, GitLab adding features)",
        "Must be in SF (limits talent pool)",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Code search integrations and enterprise contracts create switching costs. But AI coding is new territory with no moat yet. Brand with developers is moderate.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level B: Cody is core product',
        'Strong technical founders (ex-Palantir)',
        '$2.6B valuation, well-funded',
        'Yes',
        'Designing for power users (high craft bar)',
      ],
      whyNot: [
        'Must be in San Francisco (not fully remote)',
        'Fierce competition from Cursor, GitHub',
        'Discontinued free plans (pricing pressure)',
        'Revenue growth unclear',
      ],
      nextActions: [
        'Try Cody extensively vs Cursor/Copilot',
        'Research Quinn Slack and Beyang Liu',
        'Connect with Sourcegraph designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:00:00',
    sources: [
      {
        title: 'Sourcegraph Series D $125M',
        url: 'https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/',
      },
      {
        title: 'Product Designer IC4 job posting',
        url: 'https://boards.greenhouse.io/sourcegraph91/jobs/5198247004',
      },
    ],
  };
