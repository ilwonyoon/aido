import { Company } from '../types';

export const pika: Company = {
    id: 'pika',
    name: 'Pika',
    description: 'AI video generation and editing platform. Text-to-video, image-to-video.',
    website: 'https://pika.art',
    screenshot: '/screenshots/pika-screenshot.png',
    headquarters: 'Palo Alto, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/pika-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['video-generation', 'code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

    stage: 'Series B',
    valuation: '$470M',
    totalFunding: '$115M',
    fundingHistory: [
      { stage: 'Seed', amount: '$5.5M', date: '2023-04', leadInvestors: ['Lightspeed'] },
      { stage: 'Series A', amount: '$55M', date: '2023-11', valuation: '$200M', leadInvestors: ['Lightspeed'] },
      { stage: 'Series B', amount: '$80M', date: '2024-06', valuation: '$470M', leadInvestors: ['Spark Capital'] },
    ],
    revenue: 'N/A',
    growth: '500K+ users, millions of videos weekly',
    runway: '24+ months',
    customers: 'Creators, marketers, casual users',

    competitors: [
      {
        name: 'Runway',
        description: 'Gen-3 video model, $1.5B+ valuation',
        whyTheyWin: 'Pro-grade tools, Hollywood partnerships (A24, Paramount), established in creative industry',
      },
      {
        name: 'OpenAI Sora',
        description: 'Text-to-video from OpenAI',
        whyTheyWin: 'OpenAI brand, quality benchmark setter, will have ChatGPT distribution',
      },
      {
        name: 'Kling (Kuaishou)',
        description: 'Chinese AI video model',
        whyTheyWin: 'Massive compute resources, 700M+ MAU distribution in China',
      },
    ],
    marketPosition: 'Consumer-friendly alternative to Runway',
    moat: [
      'Stanford AI Lab pedigree',
      'User-friendly interface vs competitors',
      'Fast iteration on model improvements',
      'Strong creator community',
    ],
    vsGiants: 'Consumer-first simplicity vs Runway\'s pro-grade complexity. Faster iteration cycle than Sora (which has slow rollout). Not fighting for Hollywood — capturing everyday creators. Model-agnostic approach allows adopting best techniques.',

    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Creating consumer-first AI video generation category. Zero-to-one in accessible video creation.',
    aiDesignChallenges: [
      'Prompt engineering for video',
      'Generation preview and iteration',
      'Quality control and output consistency',
      'Creative control vs AI automation',
    ],

    founders: [
      {
        name: 'Demi Guo',
        role: 'CEO',
        background: 'Stanford AI Lab PhD (dropped out), youngest Meta AI Research employee',
      },
      {
        name: 'Chenlin Meng',
        role: 'CTO',
        background: 'Stanford AI Lab, 28+ research papers, DDIM inventor',
      },
    ],
    whyBuilding:
      'Video creation is too hard. AI should make it effortless for everyone to bring creative visions to life.',
    beliefs: [
      'Creativity should be accessible to everyone',
      'AI is a creative partner, not replacement',
      'Simple UX unlocks mass adoption',
    ],
    greenFlags: [
      'Stanford AI Lab founders — cutting-edge research',
      'Small team (48) — high impact',
      'Consumer-first approach',
      'Strong traction with creators',
    ],
    redFlags: [
      'Extremely competitive space (Runway, Sora)',
      'Model quality race is expensive',
      'Consumer monetization challenges',
    ],

    designTeam: {
      teamSize: '~5-8',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Prompt interpretation feedback',
          'Generation quality thresholds',
          'Content moderation rules',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Video quality assessment',
          'User satisfaction metrics',
          'Generation success rates',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Prompt input UX',
          'Video preview and editing tools',
          'Generation queue management',
          'Export and sharing flows',
          'Mobile-first design',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Social media content creators and marketing teams',
        secondary: 'Independent filmmakers, educators, and hobbyists exploring video creation',
    },
    userProblems: [
        'Creating engaging video content for social media requires video editing skills and expensive tools',
        'Stock video libraries lack specific, unique footage matching creative vision',
        'Animating still images or product shots requires motion graphics expertise',
        'Rapid iteration and experimentation with video concepts is time-consuming',
        'Professional video production is too expensive for small content budgets',
    ],

    designerLinks: [
      {
        name: 'Pika Twitter',
        role: 'Company',
        platform: 'twitter',
        url: 'https://twitter.com/paborwicz',
        description: 'Product updates and demos',
      },
    ],
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Palo Alto, CA',
        type: 'full-time',
        url: 'https://jobs.ashbyhq.com/pika/cc4dffe4-2cad-4287-a28b-b875ee35b541',
        aboutRole: 'Lead design for AI video creation experiences across mobile and web',
        responsibilities: [
          'Lead design from concept to polished execution',
          'Develop product strategies and transform bold ideas into shipped features',
          'Balance systematic design thinking with meticulous craft',
          'Advocate for end-users through user flows, typography, color, spacing, animation',
        ],
        requirements: [
          '4-8 years product design (UI/UX) experience',
          'Multiple shipped mobile applications',
          'Proficiency with Apple Human Interface Guidelines',
          'Rapid prototyping and iteration skills',
        ],
        preferred: [
          'Background designing creation tools, social platforms, or games',
          'Design-engineering or high-fidelity prototype animation skills',
          'Local to Palo Alto area',
        ],
        whyInteresting: 'On-site 5 days/week. Small energetic team building AI video creation tools. Focus on democratizing video production. Emphasis on craft and user-centered design.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. Stanford AI PhD founders. Fast-paced, small team (~30 people).',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Actively engages with creative community. Culture of rapid iteration on user feedback.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — Series B startup but limited data available.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. No salary data on levels.fyi yet.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (freemium model, early monetization)",
      userGrowth: "500K+ users, millions of videos generated weekly",
      signals: [
        "$115M raised in 14 months (Seed → Series B)",
        "$470M valuation (2.4x from $200M in 7 months)",
        "500K+ registered users generating millions of videos weekly",
        "Stanford AI Lab PhD founders (DDIM inventor, youngest Meta AI researcher)",
        "Lightspeed → Spark Capital tier-1 investors",
      ],

      tam: "$20B+ (AI video generation for creators, marketers, entertainment)",
      marketShare: "<1% (very early market, competing for consumer adoption)",
      ceiling: "Very early innings: AI video generation is nascent, quality improving rapidly. Consumer use cases just emerging beyond experimentation.",
      tailwinds: [
        "AI video quality improving exponentially (text→video becoming production-ready)",
        "Creator economy driving demand for fast, low-cost video production",
        "Social media pushing video-first content",
        "Consumer-first simplicity vs Runway's complexity captures broader market",
      ],
      headwinds: [
        "Runway has $1.5B+ valuation and Hollywood partnerships",
        "OpenAI Sora will have ChatGPT distribution advantage",
        "Compute costs are extremely high (video generation expensive)",
        "Quality race requires constant R&D investment",
        "Monetization challenging in consumer AI (free expectations)",
      ],

      moatType: 'technology',
      moatStrength: "Low-Medium: Research talent and model quality are advantages, but AI video is commoditizing. User-friendly UX and creator community provide some defensibility. No network effects yet.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Level 4 AI-native',
        'Creative tools space',
        'Small team — high impact',
        'Stanford AI Lab founders',
      ],
      whyNot: [
        'Hyper-competitive market',
        'Consumer product — harder monetization',
        'May need strong visual design skills',
      ],
      nextActions: [
        'Use Pika to create sample videos',
        'Compare UX with Runway',
        'Research Stanford AI Lab network',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Pika Series B - Washington Post',
        url: 'https://www.washingtonpost.com/technology/2024/06/04/pika-funding-openai-sora-google-video/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/pika/',
      },
    ],
  };
