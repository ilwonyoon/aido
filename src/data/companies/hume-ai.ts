import { Company } from '../types';

export const humeAi: Company = {
  id: 'hume-ai',
  name: 'Hume AI',
  description: 'Voice AI research lab and platform building empathic speech-language models and real-time voice interfaces.',
  website: 'https://www.hume.ai',
    screenshot: '/screenshots/hume-ai-screenshot.png',
  headquarters: 'New York, NY',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/hume-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'audio-generation'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed (Series B announced Mar 2024)',
  totalFunding: '~$74M cumulative (Jan 2026)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2022-09',
      leadInvestors: ['Comcast Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$19M',
      date: '2023-03',
      leadInvestors: ['Union Square Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$50M',
      date: '2024-03',
      leadInvestors: ['EQT Ventures'],
    },
  ],
  revenue: 'Projected ~$100M revenue in 2026 (reported Jan 2026)',
  growth: 'Leadership transition announced Jan 2026 with continued model launch plan',
  runway: 'Improved by Series B capital; exact runway not disclosed',
  customers: 'Developers and enterprises in customer service, healthcare, wellness, and voice-enabled applications',

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
  marketPosition: 'Empathic voice AI platform focused on emotional intelligence, turn-taking, and low-latency conversational speech.',
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
      role: 'Founder (former CEO, joined Google DeepMind Jan 2026)',
      background: 'Former Google researcher and scientist focused on emotional expression and semantic space theory.',
    },
    {
      name: 'Andrew Ettinger',
      role: 'CEO (appointed Jan 2026)',
      background: 'Former COO at Hume AI; led commercialization and enterprise strategy.',
    },
  ],
  whyBuilding: 'Build AI systems that measure and optimize for human emotional well-being.',
  beliefs: [
    'AI should serve human goals and emotional well-being',
    'Emotionally aware interfaces enable more natural human-computer interaction',
    'Scientific rigor should drive product quality in AI',
  ],
  designPhilosophy: 'Design for emotionally aware, low-latency voice experiences that feel natural while preserving user trust and control.',
  greenFlags: [
    '$50M Series B led by EQT Ventures (Mar 2024)',
    'Clear differentiation via empathic voice interface (EVI)',
  ],
  redFlags: [
    'Crowded voice AI market with well-funded incumbents',
    'High expectations for safety and privacy in emotion-aware AI',
    'Leadership transition risk after CEO change in Jan 2026',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~1-3 (1 PD role open + Head of Design mentioned in job posting)',
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
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Mission-driven culture centered on human well-being and responsible AI development.',
      url: 'https://job-boards.greenhouse.io/humeai/jobs/4004597008',
    },
    {
      source: 'techcrunch',
      sentiment: 'neutral',
      content: 'Market sees voice as strategic AI interface, but competition for talent and model quality is intense.',
      url: 'https://www.wired.com/story/google-hires-hume-ai-ceo-licensing-deal-gemini',
    },
    {
      source: 'linkedin',
      sentiment: 'neutral',
      content: 'Post-Series B and CEO transition phase suggests scaling from research-heavy org toward commercialization.',
      url: 'https://www.prnewswire.com/news-releases/hume-ai-appoints-new-ceo-302668103.html',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Empathic voice AI product with deep UX challenges',
      'Remote-friendly with hubs in NYC and San Jose',
    ],
    whyNot: [
      'Crowded voice AI market',
    ],
    nextActions: [
      'Monitor post-transition product roadmap updates',
      'Track Product Designer opening status and location flexibility',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Hume AI About', url: 'https://www.hume.ai/about/' },
    { title: 'Hume AI Careers', url: 'https://www.hume.ai/careers' },
    { title: 'Hume AI Product Designer role (Greenhouse)', url: 'https://job-boards.greenhouse.io/humeai/jobs/4004597008' },
    { title: 'Business Wire - Hume AI announces $50M Series B and EVI', url: 'https://www.businesswire.com/news/home/20240326359639/en/Hume-AI-Announces-%2450-Million-Fundraise-and-Empathic-Voice-Interface' },
    { title: 'Hume Blog - Series B and EVI announcement', url: 'https://www.hume.ai/blog/series-b-evi-announcement' },
    { title: 'PR Newswire - Hume AI appoints new CEO (Jan 22, 2026)', url: 'https://www.prnewswire.com/news-releases/hume-ai-appoints-new-ceo-302668103.html' },
    { title: 'WIRED - Google hires former Hume AI CEO and engineers (Jan 2026)', url: 'https://www.wired.com/story/google-hires-hume-ai-ceo-licensing-deal-gemini' }
  ],
};
