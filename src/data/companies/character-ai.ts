import { Company } from '../types';

export const characterAi: Company = {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Conversational AI platform for creating and chatting with AI characters, enabling personalized AI interactions.',
    website: 'https://character.ai',
    headquarters: 'Menlo Park, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series A',
    valuation: '$5B (Sept 2024, post-Google deal)',
    totalFunding: '$193M',
    fundingHistory: [
      { stage: 'Seed', amount: '$43M', date: '2021-12', leadInvestors: ['a16z'] },
      { stage: 'Series A', amount: '$150M', date: '2023-03', valuation: '$1B', leadInvestors: ['Andreessen Horowitz'] },
    ],
    revenue: 'Not disclosed (consumer monetization)',
    growth: '208M visits/month, 16M+ chatbots created',
    runway: 'Strong — Google licensing deal in Aug 2024',
    customers: '208M monthly visits, avg 120 min/session',

    // Competition
    competitors: [
      {
        name: 'ChatGPT',
        description: 'General-purpose AI chatbot by OpenAI',
        whyTheyWin: 'Brand recognition, multi-modal capabilities, broader use cases',
      },
      {
        name: 'Replika',
        description: 'AI companion chatbot',
        whyTheyWin: 'Emotional connection focus, established companion AI brand',
      },
      {
        name: 'Janitor AI',
        description: 'Unrestricted character AI platform',
        whyTheyWin: 'No content filters, NSFW allowed, appeals to users wanting freedom',
      },
      {
        name: 'Inflection AI (Pi)',
        description: 'Personal AI assistant focused on emotional intelligence',
        whyTheyWin: 'Emotional intelligence focus, backed by massive funding',
      },
    ],
    marketPosition: 'Leader in character-based AI chat, #1 in entertainment AI',
    moat: [
      '16M+ user-created characters = massive content moat',
      'Engagement: 120 min/session (vs 15 min for ChatGPT)',
      'Community-driven content creation',
      'Google licensing deal: founders now leading Gemini',
      'Network effects: more characters = more users',
    ],
    vsGiants: 'Character.AI focuses on entertainment/roleplay vs ChatGPT\'s productivity. Different use case, different retention.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Creating AI companions and characters from scratch. Zero-to-one in conversational AI entertainment.',
    aiDesignChallenges: [
      'Character consistency: keeping AI characters in-character across conversations',
      'Emotional engagement: designing for parasocial relationships',
      'Content moderation: balancing freedom vs safety',
      'Memory: maintaining context across long conversations',
      'Discovery: helping users find interesting characters among 16M+',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Noam Shazeer',
        role: 'Co-founder (now at Google)',
        background: 'Former Google engineer, lead author on Transformer paper. Built LaMDA at Google.',
      },
      {
        name: 'Daniel De Freitas',
        role: 'Co-founder (now at Google)',
        background: 'Lead designer of LaMDA at Google. Deep expertise in conversational AI.',
      },
    ],
    whyBuilding: 'Shazeer and De Freitas left Google because they wanted to build conversational AI that people could actually use, not just research. Character.AI was their vision for AI that\'s fun, creative, and engaging.',
    beliefs: [
      'AI should be entertaining, not just productive',
      'Personalized AI characters > one-size-fits-all chatbot',
      'Community-created content is the future',
      'Long-form conversation = true AI understanding',
    ],
    designPhilosophy: 'Design for emotional engagement and long-form conversation. Make AI characters feel alive.',
    greenFlags: [
      'Founders built LaMDA at Google — deep AI expertise',
      'Massive engagement: 120 min/session',
      'Community moat: 16M+ user-created characters',
      'Google deal: founders now leading Gemini',
    ],
    redFlags: [
      'Founders left for Google (Aug 2024) — leadership transition',
      'Content moderation challenges: lawsuits over teen suicides',
      'Monetization unclear: consumer AI is hard to monetize',
      'Heavy content filters frustrate users → competitors gain share',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Karandeep Anand (CEO after founders left)',
      teamSize: '~50-100 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing character consistency: keeping AI in-character',
          'Building memory systems: context across long conversations',
          'Defining character personalities and behaviors',
          'Creating feedback loops for character quality',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing content moderation: balancing safety vs freedom',
          'Building quality metrics for character interactions',
          'Creating user feedback systems for character improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Chat interface optimized for long conversations',
          'Character creation tools for community',
          'Discovery: finding interesting characters among 16M+',
          'Emotional engagement: design for parasocial relationships',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Gen Z and millennials seeking AI companionship and entertainment',
        secondary: 'Writers, roleplayers, and creative storytellers exploring character interactions',
    },
    userProblems: [
        'Loneliness and lack of social connection drive need for always-available conversation',
        'Traditional entertainment (games, social media) lacks personalized, responsive experiences',
        'Creative writers need interactive characters for story development and roleplay',
        'Language learners want conversational practice without judgment or scheduling',
        'People seek emotional support and non-judgmental conversation partners',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Menlo Park, CA (Hybrid)',
        url: 'https://jobs.ashbyhq.com/character/',
        type: 'full-time',
        aboutRole: 'Create user-centered designs for AI entertainment products, crafting interfaces that spark curiosity and offer endless ways to explore.',
        responsibilities: [
          'Collaborate with product, engineering, and AI teams',
          'Design immersive experiences at the intersection of storytelling, gaming, and social connection',
          'Create interfaces for millions of users',
          'Build design systems for character-based AI',
        ],
        whyInteresting: 'Designing for 208M monthly users. Building the future of AI entertainment. Working on parasocial AI relationships.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.8,
        content: 'Fast-paced startup culture. Founders left for Google in 2024, causing some uncertainty.',
      },
    ],

    growthMetrics: {
      stage: 'plateau',
      revenueGrowth: "$100M+ ARR (estimated), slowing growth",
      userGrowth: "208M monthly visits, but losing share to competitors",
      signals: [
        "Google acqui-hire of founders for $2.7B (2024)",
        "208M monthly visits (peak traffic)",
        "16M+ user-created characters",
        "Consumer subscription model ($10/month premium)",
        "Founders left for Google, new CEO Karandeep Anand",
      ],

      tam: "$50B+ (AI entertainment, social, companionship)",
      marketShare: "~0.2% (consumer AI chat market)",
      ceiling: "Mid innings but slowing: Peaked in 2023-2024, now losing traffic to ChatGPT, Claude, and less-filtered competitors. Founder departure signals plateau.",
      tailwinds: [
        "Loneliness epidemic drives demand for AI companionship",
        "Gen Z comfortable with parasocial AI relationships",
        "16M+ characters = user-generated content moat",
        "Mobile app (iOS/Android) = sticky engagement",
      ],
      headwinds: [
        "Founders left for Google (brain drain, strategic uncertainty)",
        "Heavy content moderation pushes users to competitors (Replika, Chai)",
        "ChatGPT gaining consumer share with better quality",
        "Teen suicide lawsuit created PR crisis",
        "Monetization struggling (premium subscriptions not enough)",
        "Google acqui-hire may have been exit rather than partnership",
      ],

      moatType: 'network-effects',
      moatStrength: "Low-Medium: 16M user-created characters create weak network effects. But users can switch to less-filtered alternatives easily. Founder departure weakened moat.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 4: AI is the product',
        'Massive scale: 208M monthly visits',
        'Creative product: entertainment AI vs boring productivity tools',
        'Community-driven: 16M+ user-created characters',
      ],
      whyNot: [
        'Founders left for Google — leadership uncertainty',
        'Content moderation challenges: lawsuits, safety concerns',
        'Consumer monetization is hard',
        'Heavy filters frustrate users',
      ],
      nextActions: [
        'Use Character.AI extensively to understand product',
        'Research new CEO Karandeep Anand',
        'Follow Character.AI designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T10:45:00',
    sources: [
      {
        title: 'Character.AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Character.ai',
      },
      {
        title: 'Google hires Character.AI founders',
        url: 'https://techcrunch.com/2024/08/02/character-ai-ceo-noam-shazeer-returns-to-google/',
      },
      {
        title: 'Character.AI valuation after Google deal',
        url: 'https://www.oreateai.com/blog/characterais-bold-return-to-google-a-25-billion-acquisition/fa44e864e4e84a728d18224c87276e52',
      },
    ],
  };
