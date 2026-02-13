import { Company } from '../types';

export const elevenlabs: Company = {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI audio platform for speech generation, voice agents, dubbing, and developer APIs.',
    website: 'https://elevenlabs.io',
    screenshot: '/screenshots/elevenlabs-screenshot.png',
    headquarters: 'New York, NY',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/elevenlabs-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2b', 'enterprise', 'prosumer'],
  category: 'creative-media' as const,

  industries: ['infrastructure'],

    stage: 'Series D',
    valuation: '$11B (Feb 2026)',
    totalFunding: '$781M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2M', date: '2023-01', leadInvestors: ['Credo Ventures'] },
      { stage: 'Series A', amount: '$19M', date: '2023-06', leadInvestors: ['Nat Friedman', 'Daniel Gross'] },
      { stage: 'Series B', amount: '$80M', date: '2024-01', valuation: '$1.1B', leadInvestors: ['a16z', 'Sequoia'] },
      { stage: 'Series C', amount: '$180M', date: '2025-01', valuation: '$3.3B', leadInvestors: ['a16z'] },
      { stage: 'Series D', amount: '$500M', date: '2026-02', valuation: '$11B', leadInvestors: ['Sequoia Capital'] },
    ],
    revenue: '>$330M ARR (end of 2025)',
    growth: 'From >$200M ARR (Sep 2025) to >$330M ARR (Dec 2025)',
    runway: 'Strong',
    customers: 'Millions of users; enterprise customers include Deutsche Telekom, Square, Meta, and Revolut',

    competitors: [
      {
        name: 'Amazon Polly',
        description: 'AWS text-to-speech service',
        whyTheyWin: 'AWS distribution, enterprise integrations, pay-as-you-go pricing at scale',
      },
      {
        name: 'Google Cloud TTS',
        description: 'Google\'s text-to-speech API',
        whyTheyWin: 'WaveNet quality, 40+ languages, Google Cloud ecosystem',
      },
      {
        name: 'Resemble AI',
        description: 'Voice cloning and real-time voice conversion',
        whyTheyWin: 'Real-time voice conversion, gaming/entertainment focus',
      },
    ],
    marketPosition: 'Market leader in quality voice synthesis',
    moat: [
      'Best-in-class voice quality',
      'First mover in natural TTS',
      'Strong API adoption',
      'a16z + Sequoia backing',
    ],
    vsGiants: 'Quality differentiation — ElevenLabs voices are noticeably more natural than AWS/Google. Specialized focus vs generic cloud services. Voice cloning capability that cloud giants avoid due to liability concerns.',

    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Creating human-quality AI voice synthesis from scratch. Defining voice AI category.',
    aiDesignChallenges: [
      'Voice customization UX',
      'Multi-language support',
      'Real-time voice feedback',
      'Ethics and consent in voice cloning',
    ],

    founders: [
      {
        name: 'Piotr Dąbkowski',
        role: 'CEO',
        background: 'Ex-Google ML engineer, Poland',
      },
      {
        name: 'Mati Staniszewski',
        role: 'CTO',
        background: 'Ex-Palantir deployment strategist',
      },
    ],
    whyBuilding:
      'Growing up in Poland watching poorly dubbed American films. Wanted to make content accessible in every language with natural voice.',
    beliefs: [
      'Voice is the most natural interface',
      'Content should be accessible in every language',
      'Quality is non-negotiable',
      'AI voice must be ethical (consent-based)',
    ],
    greenFlags: [
      'Clear market leader in quality',
      'Strong revenue growth',
      'a16z + Sequoia investors',
      'Polish founders — unique perspective',
      'API-first business model',
    ],
    redFlags: [
      'Voice cloning ethics concerns',
      'Growing fast — culture may change',
      'Enterprise sales complexity',
    ],

    designTeam: {
      teamSize: '~10-15',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Voice consent and verification',
          'Clone quality thresholds',
          'Language model behavior',
          'Content moderation for voice',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Voice naturalness scoring',
          'User preference learning',
          'Clone accuracy metrics',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Voice studio interface',
          'Project management',
          'API documentation UX',
          'Dubbing workflow',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Publishers, audiobook producers, and content creators needing voice-over',
        secondary: 'Game studios, filmmakers, and developers building voice-enabled applications',
    },
    userProblems: [
        'Professional voice actors cost $100-$500+ per hour limiting audiobook and content production',
        'Localizing content into multiple languages requires hiring native voice talent',
        'Game developers need thousands of voice lines for NPCs but lack budget for full cast',
        'Content creators want consistent narration voice across videos without hiring talent',
        'Accessibility features like text-to-speech need natural-sounding voices not robotic ones',
    ],

    designerLinks: [
      {
        name: 'ElevenLabs Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://elevenlabs.io/blog',
        description: 'Product and research updates',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Remote, London (+1 more)',
        url: 'https://elevenlabs.io/careers/89da00ec-11b0-4359-913b-c3a89c1013bc/product-designer',
      },
    ],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.2,
        content: 'Fast growth, ambitious team. Remote-friendly. Polish engineering excellence.',
        url: 'https://www.glassdoor.com/Reviews/ElevenLabs-Reviews-E8772871.htm',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Scaling pains as company grows (~100 people). Good comp, high expectations. Limited design team culture info.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'European distributed team (Poland, UK, US). Engineering-centric culture.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. SWE reference: Senior $200-300K estimated (Remote).',
        url: 'https://www.levels.fyi/companies/elevenlabs/',
      },
    ],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: ">$200M ARR by Sep 2025 and >$330M ARR by end of 2025",
      userGrowth: "Millions of users and thousands of business customers",
      signals: [
        "Series D: $500M at $11B valuation (Feb 2026)",
        "Total funding reached $781M",
        ">$330M ARR by end of 2025",
        "Thousands of businesses and millions of end users",
        "Top-tier investor base (Sequoia, a16z, ICONIQ)",
      ],

      tam: "$15B+ (Voice AI for audiobooks, gaming, content, accessibility)",
      marketShare: "~0.5% = 30x upside",
      ceiling: "Mid-innings: Voice cloning is proven, but enterprise adoption (gaming, audiobooks, ads) is early. Market expanding as quality improves.",
      tailwinds: [
        "Audiobook market growing, voice AI reduces production costs 10x",
        "Gaming industry adopting dynamic voice (NPCs, localization)",
        "Content creators need multilingual voice at scale",
        "Accessibility use cases (voice preservation, text-to-speech)",
        "Remote-first company = global talent",
      ],
      headwinds: [
        "OpenAI/Google adding voice to foundation models",
        "Voice cloning ethical concerns and regulation risk",
        "High compute costs for real-time voice synthesis",
        "Competition from PlayHT, Resemble.ai in specific verticals",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Best-in-class voice quality and emotional range creates technical moat. Voice library and cloning tech have some switching costs. No strong network effects, but brand in voice AI is growing.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'Level 4 AI-native',
        'Market leader with clear differentiation',
        'Strong revenue — stable',
        'Voice is fascinating domain',
        'Remote-friendly',
      ],
      whyNot: [
        'Growing fast — may lose startup feel',
        'Ethics complexity in voice cloning',
      ],
      nextActions: [
        'Build something with ElevenLabs API',
        'Research voice UX patterns',
        'Connect with designers there',
      ],
    },

    lastUpdated: '2026-02-13',
    sources: [
    { title: 'ElevenLabs Series D Announcement', url: 'https://elevenlabs.io/blog/series-d' },
    { title: 'TechCrunch - ElevenLabs raises $500M at $11B valuation', url: 'https://techcrunch.com/2026/02/04/elevenlabs-raises-500m-from-sequioia-at-a-11-billion-valuation/' },
    { title: 'ElevenLabs Careers', url: 'https://elevenlabs.io/careers' },
    { title: 'ElevenLabs Product Designer role', url: 'https://elevenlabs.io/careers/89da00ec-11b0-4359-913b-c3a89c1013bc/product-designer' },
    { title: 'LinkedIn Jobs - ElevenLabs', url: 'https://www.linkedin.com/company/elevenlabsio/jobs' }
  ],
  };
