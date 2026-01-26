import { Company } from '../types';

export const elevenlabs: Company = {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice platform. Text-to-speech, voice cloning, dubbing.',
    website: 'https://elevenlabs.io',
    headquarters: 'New York, NY',
    remote: 'Yes',

    stage: 'Series C',
    valuation: '$3.3B',
    totalFunding: '$281M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2M', date: '2022-07', leadInvestors: ['Credo Ventures'] },
      { stage: 'Series A', amount: '$19M', date: '2023-01', leadInvestors: ['Nat Friedman', 'Daniel Gross'] },
      { stage: 'Series B', amount: '$80M', date: '2024-01', valuation: '$1.1B', leadInvestors: ['a16z', 'Sequoia'] },
      { stage: 'Series C', amount: '$180M', date: '2025-01', valuation: '$3.3B', leadInvestors: ['a16z'] },
    ],
    revenue: '~$330M ARR (2025)',
    growth: '260% growth in 9 months (2024)',
    runway: 'Strong',
    customers: 'Publishers, game studios, content creators',

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

    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Voice generation is 100% AI.',
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
        location: 'Remote, London',
        url: 'https://elevenlabs.io/careers/a4a9cda2-c5d8-47f0-989d-21617b58ab39',
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
      revenueGrowth: "$80M ARR (2024), targeting $100M+ (2025) = ~1.5x YoY",
      userGrowth: "1M+ users, 100+ enterprise customers",
      signals: [
        "$80M ARR with profitability path",
        "$1.1B valuation (Series B)",
        "1M+ registered users across creators, enterprises, publishers",
        "100+ enterprise customers including publishers, game studios",
        "Andreessen Horowitz backing",
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

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'ElevenLabs Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/01/30/elevenlabs-raises-180-million-series-c/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/elevenlabs/',
      },
    ],
  };
