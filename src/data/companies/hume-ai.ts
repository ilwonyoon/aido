import { Company } from '../types';

export const humeAi: Company = {
  id: 'hume-ai',
  name: 'Hume AI',
  description: 'Research lab and technology company building empathic AI and voice interfaces optimized for human well-being.',
  website: 'https://www.hume.ai',
    screenshot: '/screenshots/hume-ai-screenshot.png',
  headquarters: 'New York, NY',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/hume-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'search-retrieval'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$50M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$50M',
      date: '2024-03',
      leadInvestors: ['EQT Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'OpenAI (Voice)',
      description: 'Real-time voice assistants and speech-to-speech interfaces in ChatGPT.',
      whyTheyWin: 'Massive distribution and model scale.',
    },
    {
      name: 'ElevenLabs',
      description: 'AI voice generation and conversational voice platform.',
      whyTheyWin: 'Strong voice quality and developer adoption.',
    },
    {
      name: 'Deepgram',
      description: 'Voice AI platform for speech recognition and voice agents.',
      whyTheyWin: 'Developer-first APIs and enterprise adoption.',
    },
  ],
  marketPosition: 'Empathic voice AI platform focused on emotional understanding and response quality.',
  moat: [
    'Emotion-focused models and datasets rooted in scientific research',
    'Empathic Voice Interface (EVI) as a differentiated product surface',
    'Research lab + product loop for model improvements',
  ],
  vsGiants: 'Competes on empathic, emotionally aware voice experiences rather than generic voice AI.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI voice models are the product; no Hume AI without AI.',
  aiDesignChallenges: [
    'Designing trustworthy emotion-aware interactions without overstepping user comfort',
    'Communicating model limits and uncertainty in real-time voice',
    'Balancing latency, expressiveness, and control in voice interfaces',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alan Cowen',
      role: 'Founder',
      background: 'Former Google researcher and scientist focused on emotional expression and semantic space theory.',
    },
  ],
  whyBuilding: 'Build AI systems that measure and optimize for human emotional well-being.',
  beliefs: [
    'AI should serve human goals and emotional well-being',
    'Emotionally aware interfaces enable more natural human-computer interaction',
    'Scientific rigor should drive product quality in AI',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    '$50M Series B led by EQT Ventures (Mar 2024)',
    'Clear differentiation via empathic voice interface (EVI)',
  ],
  redFlags: [
    'Crowded voice AI market with well-funded incumbents',
    'High expectations for safety and privacy in emotion-aware AI',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice interaction logic and interruption handling',
        'Agent behavior boundaries and emotional response controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Evaluating empathy and satisfaction in voice responses',
        'User feedback loops for emotional accuracy',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Cross-platform voice UI and interaction patterns',
        'Developer UX for integrating voice features',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers and product teams building voice AI experiences',
    secondary: 'Enterprises deploying empathic AI assistants',
  },
  userProblems: [
    'Voice assistants feel robotic and lack emotional nuance',
    'Integrating high-quality voice AI into apps is complex',
    'Latency and response timing reduce conversation quality',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [
    {
      title: 'Product Designer',
      location: 'NYC, San Jose, or Remote',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/humeai/jobs/4004597008',
      compensation: '$120K-$170K',
      aboutRole: 'Design cross-platform voice AI product experiences with the Head of Design.',
      responsibilities: [
        'Create user flows and visual designs for a cross-platform consumer interface',
        'Collaborate with AI research, engineering, and product teams',
        'Translate complex AI capabilities into clear product experiences',
      ],
      requirements: [
        '2+ years of relevant design experience',
        'Expertise in cross-platform applications and interaction design',
        'Proficiency with Figma, Sketch, and Adobe Creative Suite',
        'Familiarity with frontend libraries such as React',
      ],
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Empathic voice AI product with deep UX challenges',
      'Remote-friendly with hubs in NYC and San Jose',
    ],
    whyNot: [
      'Crowded voice AI market',
    ],
    nextActions: [
      'Monitor design leadership openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.hume.ai/about/' },
    { title: 'Source', url: 'https://www.hume.ai/contact' },
    { title: 'Source', url: 'https://www.hume.ai/careers' },
    { title: 'Source', url: 'https://job-boards.greenhouse.io/humeai/jobs/4004597008' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20240326359639/en/Hume-AI-Announces-%2450-Million-Fundraise-and-Empathic-Voice-Interface' },
    { title: 'Source', url: 'https://www.hume.ai/blog/series-b-evi-announcement' },
    { title: 'Source', url: 'https://openai.com' },
    { title: 'Source', url: 'https://elevenlabs.io' },
    { title: 'Source', url: 'https://deepgram.com' }
  ],
};
