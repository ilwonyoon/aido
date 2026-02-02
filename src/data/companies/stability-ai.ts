import { Company } from '../types';

export const stabilityAi: Company = {
    id: 'stability-ai',
    name: 'Stability AI',
    description: 'Generative AI company known for Stable Diffusion and models across image, video, audio, and 3D.',
    website: 'https://stability.ai/',
  screenshot: '/screenshots/stability-ai-screenshot.png',
    headquarters: 'London, UK',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/stability-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['image-generation', 'audio-generation', 'code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools', 'creative-media'],

    // Business
    stage: 'Private',
    valuation: 'Unknown',
    totalFunding: 'Not publicly disclosed',
    fundingHistory: [
      {
        stage: 'Unknown',
        amount: 'Undisclosed',
        date: '2025-03',
        leadInvestors: ['WPP'],
      },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Midjourney',
        description: 'Text-to-image with community focus',
        whyTheyWin: 'Bootstrapped, strong aesthetic',
      },
      {
        name: 'OpenAI DALL·E',
        description: 'Text-to-image by OpenAI',
        whyTheyWin: 'OpenAI brand power',
      },
    ],
    moat: [
      'Open visual media models spanning image, video, 3D, and audio',
      'Enterprise-focused creative production tooling',
    ],

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Open-source AI models (Stable Diffusion) created new category. Building from zero with community-driven approach.',
    aiDesignChallenges: [
      'Designing enterprise-grade creative workflows across multiple media types',
      'Balancing open access with responsible use and licensing',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Emad Mostaque',
        role: 'Co-founder',
        background: 'Co-founded Stability AI in 2019',
      },
      {
        name: 'Cyrus Hodes',
        role: 'Co-founder',
        background: 'Co-founded Stability AI in 2019',
      },
    ],
    whyBuilding:
      'Unlock the power of open-source generative AI to expand human creativity.',
    beliefs: [
      'Open-source generative AI should empower creators and enterprises',
      'Professional-grade creative AI should work across image, video, 3D, and audio',
    ],

    greenFlags: ['AI-native company', 'Growth potential'],

    redFlags: ['Unknown design culture', 'Competitive market'],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Multi-modal generation control',
          'Enterprise workflow automation',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Model quality evaluation',
          'Enterprise customer satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Enterprise creative tooling UI',
          'Model selection and configuration',
          'Asset management across media types',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Developers and researchers building AI applications with open-source models',
        secondary: 'Digital artists and designers using AI for image generation',
    },
    userProblems: [
        'Closed-source AI models limit customization and require ongoing API costs',
        'Running large AI models locally requires expensive GPUs and technical expertise',
        'Commercial AI image tools restrict usage rights and require subscriptions',
        'Fine-tuning AI models for specific use cases requires access to base weights',
        'Reliance on third-party APIs creates dependency risk for production applications',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    cultureInsights: [],

    growthMetrics: {
      stage: 'declining',
      revenueGrowth: "$50M ARR (estimated), declining",
      userGrowth: "Millions of users, but losing to competitors",
      signals: [
        "$1B valuation (down from peak)",
        "Founder Emad Mostaque forced out (2024)",
        "Layoffs and restructuring",
        "$101M raised but burning fast",
        "Open-source Stable Diffusion widely adopted but not monetized",
      ],

      tam: "$15B+ (Creative AI software for images, video, audio)",
      marketShare: "<0.5% (despite Stable Diffusion dominance in open-source)",
      ceiling: "Late innings / declining: Stable Diffusion was breakthrough but company failed to monetize. Enterprise pivot struggling, talent leaving.",
      tailwinds: [
        "Open-source community adoption of Stable Diffusion models",
        "Multi-modal capabilities (image, video, audio, 3D)",
        "Enterprise demand for self-hosted AI (security, control)",
      ],
      headwinds: [
        "Failed to monetize open-source model (users host themselves)",
        "Midjourney, DALL-E captured consumer market with better UX",
        "Founder departure and governance issues hurt credibility",
        "Talent exodus to competitors (Anthropic, OpenAI)",
        "Runway, Pika winning video generation",
        "Burning cash with unclear path to profitability",
      ],

      moatType: 'none',
      moatStrength: "Low: Open-source strategy captured mindshare but created no moat. Free self-hosting means no switching costs. Company struggling despite model success.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Open-source AI pioneer',
        'Multi-modal creative tools',
      ],
      whyNot: [
        'No Product Designer roles open',
        'Company direction unclear after leadership changes',
      ],
      nextActions: ['Monitor for stability and hiring'],
      notes: 'Open-source focus is interesting but unclear product direction.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Stability AI WPP investment',
        url: 'https://stability.ai/news/stability-ai-announces-investment-from-wpp-and-new-partnership-to-shape-the-future-of-media-and-entertainment-production',
      },
      {
        title: 'Stability AI (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Stability_AI',
      },
    ],
  };
