import { Company } from '../types';

export const sesameAi: Company = {
  id: 'sesame-ai',
  name: 'Sesame AI',
  description: 'Voice assistant platform focused on high-quality natural speech and conversation.',
  website: 'https://www.sesame.com',
    screenshot: '/screenshots/sesame-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.datocms-assets.com/143763/1730375369-sesame-og.png?auto=format&amp;fit=max&amp;w=1200',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'audio-generation'],
  markets: ['b2c'],
  industries: ['other'],

  // Business
  stage: 'Series B',
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
  runway: 'Unknown',
  customers: 'Consumer voice assistant users',

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'Voice-enabled assistants and realtime AI experiences.',
      whyTheyWin: 'Large model ecosystem and distribution.',
    },
    {
      name: 'Google Assistant',
      description: 'Voice assistant integrated into Android and Google services.',
      whyTheyWin: 'Massive consumer distribution.',
    },
    {
      name: 'Amazon Alexa',
      description: 'Voice assistant and smart home ecosystem.',
      whyTheyWin: 'Hardware ecosystem and large user base.',
    },
  ],
  marketPosition: 'Consumer voice assistant focused on natural conversational experience.',
  moat: [
    'Focus on natural voice experience quality',
    'Consumer-first conversational design',
    'Large funding round supporting model development',
  ],
  vsGiants: 'Competes on voice quality and user experience against platform incumbents.',

  // AI-native analysis
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI speech and conversation are the product.',
  aiDesignChallenges: [
    'Designing trustworthy conversational behavior',
    'Managing latency and turn-taking in voice UX',
    'Building user trust with natural-sounding responses',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Voice assistants need more natural, human-like conversation quality.',
  beliefs: [
    'Voice UX should feel natural and fluid',
    'Latency and quality are critical to adoption',
    'AI assistants should earn user trust through tone and clarity',
  ],
  greenFlags: [
    'Large Series B round announced',
    'Clear product focus on voice quality',
  ],
  redFlags: [
    'Competing with platform incumbents',
    'High compute and model costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Conversational flow design', 'Safety and escalation rules'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Voice quality evaluation', 'User feedback loops'],
    },
    interface: {
      level: 'medium',
      tasks: ['Voice interaction UI', 'Settings and personalization'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Consumers using voice assistants for daily tasks',
    secondary: 'Early adopters of AI-first assistants',
  },
  userProblems: [
    'Existing voice assistants feel robotic',
    'Latency breaks conversational flow',
    'Users struggle to trust AI responses',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Voice UX frontier', 'High-impact AI product'],
    whyNot: ['Expensive model development', 'Intense competition'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B funding announced'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Voice assistants remain a large consumer market opportunity.',
    tailwinds: ['Consumer adoption of voice AI', 'Improved speech models'],
    headwinds: ['Platform lock-in', 'High compute costs'],
    moatType: 'technology',
    moatStrength: 'Focus on voice quality and naturalness.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Sesame AI on startups.gallery', url: 'https://startups.gallery/companies/sesameai' },
    { title: 'Sesame funding (TechCrunch)', url: 'https://techcrunch.com/2025/10/03/former-openai-researchers-launch-sesame-an-ai-powered-voice-assistant/' },
  ],
};
