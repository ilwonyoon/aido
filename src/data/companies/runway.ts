import { Company } from '../types';

export const runway: Company = {
    id: 'runway',
    name: 'Runway',
    description: 'Generative AI company building video and multimedia creation tools.',
    website: 'https://runwayml.com/',
    headquarters: 'New York City, NY',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/runway-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools', 'creative-media'],

    // Business
    stage: 'Series D',
    valuation: 'Unknown',
    totalFunding: '$536.5M (as of Apr 2025)',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$308M',
        date: '2025-04',
        leadInvestors: ['General Atlantic'],
      },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Strong — $308M Series D',

    // Competition
    competitors: [
      {
        name: 'Pika',
        description: 'Text-to-video generation',
        whyTheyWin: 'Faster iteration, simpler UX',
      },
    ],
    moat: [
      'Focus on world simulators for media generation',
      'Runway Studios as in-house film and animation arm',
    ],

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Defining professional AI video creation tools. Zero-to-one in creative AI for Hollywood and professionals.',
    aiDesignChallenges: [
      'Designing creation workflows for text-to-video and multimedia generation',
      'Helping users control consistency across scenes and outputs',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Cristóbal Valenzuela',
        role: 'Co-founder & CEO',
        background: 'Co-founded Runway in 2018',
      },
      {
        name: 'Anastasis Germanidis',
        role: 'Co-founder & CTO',
        background: 'Co-founded Runway in 2018',
      },
      {
        name: 'Alejandro Matamala',
        role: 'Co-founder & CDO',
        background: 'Co-founded Runway in 2018',
      },
    ],
    whyBuilding:
      'Build AI to simulate the world through merging art and science.',
    beliefs: [
      'World simulators are the next media ecosystem',
      'AI should expand what creators can produce',
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
          'Video generation quality and consistency control',
          'Scene-to-scene coherence logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Video quality metrics',
          'User creative workflow satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Video editing and generation interface',
          'Multi-modal creation tools',
          'Asset management and organization',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Professional filmmakers, VFX artists, and video production studios',
        secondary: 'Content creators and marketing teams needing high-quality video assets',
    },
    userProblems: [
        'Professional video production requires expensive crews, equipment, and months of post-production',
        'VFX and CGI work costs $50K-$500K+ per minute for Hollywood-grade quality',
        'Rapid prototyping and storyboarding for film requires manual illustration skills',
        'B-roll and background footage requires location shoots or expensive stock libraries',
        'Exploring creative variations and alternate takes is limited by production budgets',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    cultureInsights: [],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "Millions of creators, Hollywood partnerships (A24, Paramount)",
      signals: [
        "$1.5B valuation at Series E",
        "$536M total funding (a16z, Coatue, Nvidia)",
        "Hollywood partnerships: A24, Paramount using Gen-3",
        "Used in professional film production",
        "Gen-3 model = industry benchmark quality",
      ],

      tam: "$20B+ (Professional video production, film, advertising, content creation)",
      marketShare: "~0.5% (early market, targeting pro users)",
      ceiling: "Early-mid innings: AI video is nascent but improving fast. Runway targeting high-end production, not consumer mass market.",
      tailwinds: [
        "Video production costs dropping 10-100x with AI",
        "Hollywood exploring AI for VFX, pre-viz, B-roll",
        "Content creator economy driving demand",
        "Gen-3 model quality creates professional use cases",
        "a16z + Nvidia backing = strategic advantages",
      ],
      headwinds: [
        "Pika targeting consumer market with simpler UX",
        "OpenAI Sora will have ChatGPT distribution",
        "Compute costs extremely high (burns cash)",
        "Copyright concerns from Hollywood (AI training data)",
        "Luma, Kling, and Chinese competitors with cheaper models",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Pro-grade quality and Hollywood relationships create moat, but model capabilities are replicable. Brand in professional video production is building. No network effects.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Cutting-edge video AI',
        'Strong funding ($536M)',
        'Creative tooling focus',
      ],
      whyNot: [
        'No Product Designer roles open',
        'NYC-based may limit remote flexibility',
      ],
      nextActions: ['Monitor careers page for openings'],
      notes: 'Watch for Product Designer openings.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Runway Series D - TechCrunch',
        url: 'https://techcrunch.com/2025/04/03/runway-best-known-for-its-video-generating-models-raises-308m/',
      },
      {
        title: 'Runway (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Runway_(company)',
      },
    ],
  };
