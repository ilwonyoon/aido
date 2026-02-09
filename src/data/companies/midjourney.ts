import { Company } from '../types';

export const midjourney: Company = {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generative AI service that creates images from text prompts, accessed via web and Discord.',
    website: 'https://www.midjourney.com/',
    screenshot: '/screenshots/midjourney-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/midjourney-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['image-generation'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['creative-media'],

    // Business
    stage: 'Bootstrapped',
    valuation: '~$10B (estimated, based on $500M revenue at 20x multiple)',
    totalFunding: 'Self-funded (bootstrapped, no VC funding)',
    fundingHistory: [],
    revenue: '~$500M (2025)',
    growth: '67% YoY ($300M in 2024 to $500M in 2025)',
    runway: 'Profitable since Aug 2022 — self-sustaining, no burn',
    customers: '21M+ Discord users, ~1.4M paying subscribers, 100K+ enterprise customers',

    // Competition
    competitors: [
      {
        name: 'OpenAI DALL·E',
        description: 'Text-to-image model',
        whyTheyWin: 'OpenAI brand and ChatGPT integration',
      },
      {
        name: 'Stable Diffusion',
        description: 'Open-source text-to-image ecosystem',
        whyTheyWin: 'Open-source, free to use',
      },
    ],
    moat: [
      'Community-backed research and fast iteration with small team',
      'Strong aesthetic quality in image generation',
    ],

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Created new category of AI-generated imagery for creatives. Building from zero with bootstrapped model.',
    aiDesignChallenges: [
      'Designing prompt-to-image creative workflows across web and Discord',
      'Building tools that scale creator feedback into product decisions',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'David Holz',
        role: 'Founder & CEO',
        background: 'Co-founder of Leap Motion',
      },
    ],
    whyBuilding:
      'A community-backed research group focused on bold bets around the future of the human experience.',
    beliefs: [
      'Build tools that make people dream bigger and more capable',
      'Create AI tools that augment people rather than replace them',
    ],
    greenFlags: ['AI-native company', 'Growth potential', 'Strong community', 'Self-funded success'],
    redFlags: ['Design culture not well documented', 'Competitive market (DALL-E, Stable Diffusion, Adobe Firefly)', 'Discord-first may limit enterprise reach'],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small team',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Image generation quality control and prompt understanding',
          'Creative workflow optimization',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Image quality metrics and user satisfaction',
          'Community feedback loops',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Discord bot UX and web interface',
          'Prompt building and iteration tools',
          'Image gallery and organization',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Digital artists, illustrators, and creative professionals',
        secondary: 'Marketing teams, content creators, and hobbyists exploring AI art',
    },
    userProblems: [
        'Creating high-quality visual artwork requires advanced illustration skills many lack',
        'Hiring illustrators or photographers for concept art is expensive and time-consuming',
        'Rapid iteration and experimentation with visual ideas is limited by manual creation speed',
        'Stock photo libraries lack unique, specific imagery matching creative vision',
        'Creatives want to explore artistic styles and concepts beyond their technical skills',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Remote (Bay Area and London preferred)',
        url: 'https://www.midjourney.com/careers',
      },
    ],

    cultureInsights: [],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$500M revenue (2025), 67% YoY ($300M in 2024)",
      userGrowth: "21M+ registered Discord users, ~1.4M paying subscribers, 1.2-2.5M DAU",
      signals: [
        "$500M revenue in 2025 (bootstrapped, no VC funding)",
        "21M+ registered users, ~1.4M paying subscribers",
        "Profitable since Aug 2022 — no external funding needed",
        "Small team (~107-163 people) = $3-5M revenue per employee",
        "10x revenue growth from $50M (2022) to $500M (2025)",
      ],

      tam: "$15B+ (Creative software, design, and content creation)",
      marketShare: "~2% (leading AI image generation for creators)",
      ceiling: "Mid-late innings: AI image generation is maturing. Midjourney won the creative/artistic segment, but commercial/enterprise adoption requires different features.",
      tailwinds: [
        "Bootstrapped = no VC pressure, sustainable business",
        "Creative community is loyal and vocal",
        "Discord distribution creates engagement moat",
        "Quality leader in artistic/creative generation",
        "Profitable allows R&D investment without burn pressure",
      ],
      headwinds: [
        "DALL-E 3 integrated into ChatGPT (massive distribution)",
        "Stable Diffusion open-source allows free self-hosting",
        "Adobe Firefly targeting commercial users with copyright protection",
        "Discord UX limits enterprise/professional adoption",
        "Copyright and legal concerns around training data",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Brand as best creative AI image tool is strong among artists. Discord community creates engagement moat. But no network effects, and model quality is replicable.",
    },

    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Bootstrapped — no VC pressure',
        'Creative AI at its best',
        'Remote-friendly',
      ],
      whyNot: [
        'Small team (~107-163 people) — design team structure unclear',
        'Discord-first UX may be limiting',
      ],
      nextActions: ['Check if Product Designer role is still open', 'Use Midjourney extensively'],
      notes: 'Bootstrapped creative AI company with strong community.',
    },

    lastUpdated: '2025-01-26',
    sources: [
    { title: 'Source', url: 'https://www.midjourney.com/careers' },
    { title: 'Source', url: 'https://en.wikipedia.org/wiki/Midjourney' }
  ],
  };
