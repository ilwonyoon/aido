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
    valuation: 'Unknown',
    totalFunding: 'Self-funded (community-funded)',
    fundingHistory: [],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',

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
    redFlags: ['Unknown design culture', 'Competitive market', 'Discord-first may limit reach'],

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
      stage: 'steady',
      revenueGrowth: "$300M ARR (estimated 2025), ~1.5x YoY",
      userGrowth: "20M+ users, strong creative community",
      signals: [
        "$300M+ ARR (bootstrapped, no VC funding)",
        "20M+ registered users",
        "Profitable since launch",
        "Small team (~100 people) = extreme efficiency",
        "Discord-native with 20M+ community members",
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
        'Unknown team size and structure',
        'Discord-first UX may be limiting',
      ],
      nextActions: ['Check if Product Designer role is still open', 'Use Midjourney extensively'],
      notes: 'Bootstrapped creative AI company with strong community.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Midjourney Careers',
        url: 'https://www.midjourney.com/careers',
      },
      {
        title: 'Midjourney (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Midjourney',
      },
    ],
  };
