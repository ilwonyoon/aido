import { Company } from '../types';

export const sesameAi: Company = {
  id: 'sesame-ai',
  name: 'Sesame',
  description: 'AI voice and companion computing company building lifelike voice agents and new voice-first hardware/software experiences.',
  website: 'https://www.sesame.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  ogImage: 'https://www.datocms-assets.com/143763/1730375369-sesame-og.png?auto=format&amp;fit=max&amp;w=1200',
  screenshot: '/screenshots/sesame-ai-screenshot.png',

  aiTypes: ['conversation-ai', 'audio-generation', 'foundation-model'],
  markets: ['b2c', 'prosumer'],
  category: 'creative-media' as const,
  subcategories: ['voice-ai', 'consumer-ai'],
  industries: ['creative-media'],

  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$250M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$250M',
      date: '2025-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong after $250M Series B',
  customers: 'Consumer voice assistant users and early adopters of lifelike AI companions.',

  competitors: [
    { name: 'OpenAI', description: 'Voice-enabled assistants and realtime AI experiences.', whyTheyWin: 'Large model ecosystem and distribution.' },
    { name: 'Google', description: 'Gemini and voice assistant products across Android and devices.', whyTheyWin: 'Consumer distribution and platform integration.' },
    { name: 'Amazon Alexa', description: 'Voice assistant and smart-home ecosystem.', whyTheyWin: 'Hardware ecosystem and installed base.' },
  ],
  marketPosition: 'Consumer voice AI company focused on natural, low-latency, emotionally fluid conversation.',
  moat: [
    'Team background in Oculus, Ubiquity6, Meta, Google, and Apple',
    'Focus on lifelike conversational voice and companion hardware/software',
    'Large funding base for model and product development',
  ],
  vsGiants: 'Sesame competes on voice quality, conversational feel, and dedicated product experience rather than broad platform distribution.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Voice AI is the core product and interaction model.',
  aiDesignChallenges: [
    'Designing natural turn-taking and latency-sensitive voice interactions',
    'Creating trust and boundaries for lifelike AI agents',
    'Bridging hardware, software, and voice-first interaction patterns',
    'Evaluating emotional tone, personality, and conversational quality',
  ],

  founders: [
    { name: 'Brendan Iribe', role: 'Co-Founder & CEO', background: 'Former Oculus co-founder and CEO.' },
    { name: 'Ankit Kumar', role: 'Co-Founder & CTO', background: 'Former CTO of Ubiquity6.' },
    { name: 'Ryan Brown', role: 'Co-Founder', background: 'Former Oculus and Reality Labs engineering leader.' },
  ],
  whyBuilding: 'Sesame is pursuing a future where computers can see, hear, and collaborate with people in ways that feel natural and human.',
  beliefs: [
    'Voice agents should feel natural enough for daily collaboration',
    'Hardware and software should be designed together for conversational AI',
    'Latency, tone, and trust are product fundamentals in voice AI',
  ],
  greenFlags: [
    'Product Designer role with $175K-$280K base range',
    'Frontier voice UX and AI companion design surface',
    'Strong founder/product pedigree from Oculus and spatial computing',
  ],
  redFlags: [
    'On-site San Francisco expectation',
    'Consumer AI and hardware-adjacent bets can be volatile',
    'Competes against platform giants with distribution advantages',
  ],

  designTeam: {
    teamSize: 'Design team hiring Product Designer; role collaborates with product managers, engineers, and cross-functional stakeholders.',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Voice interaction logic', 'Agent behavior and boundaries', 'Personalization'] },
    evaluation: { level: 'high', tasks: ['Voice quality evaluation', 'Usability testing', 'Conversation feedback loops'] },
    interface: { level: 'medium', tasks: ['Voice product UI', 'Settings', 'Hardware/software companion surfaces'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Consumers using lifelike voice AI for everyday collaboration and assistance',
    secondary: 'Early adopters of AI companion devices and voice-first computing',
  },
  userProblems: [
    'Existing voice assistants feel robotic and limited',
    'Conversational latency breaks natural flow',
    'Users need clear boundaries and trust cues with lifelike AI',
  ],

  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (On-site)',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/sesame/430ccfb7-2358-4ce9-9e00-fd84d4e28332',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-13',
      compensation: '$175K-$280K + equity',
      team: 'Product',
      aboutRole: 'Lead product design projects for lifelike voice agents and user-centered AI product experiences.',
      responsibilities: [
        'Lead design from concept through implementation',
        'Create wireframes, prototypes, user flows, and detailed UI specifications',
        'Conduct user research and usability testing',
      ],
      requirements: [
        '5+ years of full-time technical or product environment experience',
        'Strong product design craft and portfolio',
        'Willingness to work from the office',
      ],
      whyInteresting: 'Strong cash band and a rare chance to define voice-first AI interaction patterns.',
    },
  ],

  designerLinks: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'High base range',
      'Frontier AI voice interaction design',
      'Strong overlap with embodied/immersive product instincts',
    ],
    whyNot: [
      'On-site requirement',
      'Less developer-tool adjacent than Conductor',
      'Consumer AI risk and unclear business model',
    ],
    nextActions: [
      'Consider applying if voice/companion AI feels strategically interesting',
      'Frame around interaction model, trust, and multimodal/immersive experience design',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$250M Series B', 'Product Designer hiring with high cash range'],
    tam: 'Consumer voice AI, AI companions, and voice-first computing',
    marketShare: 'Unknown',
    ceiling: 'Large if voice-first AI becomes a daily computing interface.',
    tailwinds: ['Realtime voice models improving', 'Consumer interest in AI companions'],
    headwinds: ['Platform distribution', 'Hardware risk', 'Trust and safety constraints'],
    moatType: 'technology',
    moatStrength: 'Potentially strong if voice quality and product experience materially outperform incumbents.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'Sesame website', url: 'https://www.sesame.com' },
    { title: 'Product Designer at Sesame', url: 'https://jobs.ashbyhq.com/sesame/430ccfb7-2358-4ce9-9e00-fd84d4e28332' },
    { title: 'TechCrunch on Sesame launch/funding', url: 'https://techcrunch.com/2025/10/03/former-openai-researchers-launch-sesame-an-ai-powered-voice-assistant/' },
  ],
};
