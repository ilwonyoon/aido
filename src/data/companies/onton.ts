import { Company } from '../types';

export const onton: Company = {
  id: 'onton',
  name: 'Onton',
  description:
    'AI shopping platform focused on helping users discover and buy products with AI guidance.',
  website: 'https://www.onton.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$10M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$7.5M',
      date: '2025-11',
      leadInvestors: ['Footwork', 'Liquid 2 Ventures', 'Parable Ventures', '43'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Consumers shopping for everyday and specialty products.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $7.5M seed round to build an AI shopping platform',
      'Reported 600,000+ users and 3 million queries since May 2025 launch',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI shopping platforms can grow as consumers adopt AI assistants for commerce.',
    tailwinds: [
      'Rising adoption of AI shopping assistants',
      'Consumers want faster discovery',
      'Growth in social and AI-assisted commerce',
    ],
    headwinds: [
      'Competitive ecommerce landscape',
      'Trust and accuracy in product recommendations',
      'Retention risk in consumer apps',
    ],
    moatType: 'network-effects',
    moatStrength: 'Moderate if Onton builds strong consumer engagement and data loops.',
  },

  // Competition
  competitors: [
    {
      name: 'Perplexity Shopping',
      description: 'AI search and shopping assistant.',
      whyTheyWin: 'Strong search experience and model quality.',
    },
    {
      name: 'Google Shopping',
      description: 'Shopping discovery within Google.',
      whyTheyWin: 'Search distribution and scale.',
    },
    {
      name: 'Amazon Rufus',
      description: 'AI shopping assistant inside Amazon.',
      whyTheyWin: 'Marketplace depth and data scale.',
    },
  ],
  marketPosition: 'AI-native shopping experience for product discovery and purchasing.',
  moat: [
    'AI-driven product recommendations',
    'Consumer engagement data loops',
    'Focus on end-to-end shopping journey',
  ],
  vsGiants: 'Competes by offering AI-first shopping experiences vs traditional marketplaces.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Onton is built around AI-driven shopping guidance.',
  aiDesignChallenges: [
    'Trust and transparency in AI recommendations',
    'Preference capture for personalized shopping',
    'Balancing automation with user control',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Zach Hudson',
      role: 'Co-Founder',
      background: 'Co-founded Onton to build an AI shopping platform.',
    },
    {
      name: 'Alex Gunnarson',
      role: 'Co-Founder',
      background: 'Co-founded Onton to build consumer AI shopping experiences.',
    },
  ],
  whyBuilding:
    'Make shopping faster and more personalized with AI guidance.',
  beliefs: [
    'AI can simplify product discovery',
    'Personalization improves shopping outcomes',
    'Consumers want transparent recommendations',
  ],
  designPhilosophy: 'Friendly, guided shopping experiences with clear controls.',
  greenFlags: [
    'Rapid early user growth',
    'Strong investor support',
  ],
  redFlags: [
    'Consumer retention risk',
    'Competitive ecommerce landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Recommendation and ranking logic',
        'Preference capture workflows',
        'Trust and safety guardrails',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Recommendation quality metrics',
        'Engagement and retention analytics',
        'Feedback loops for model improvement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Shopping discovery UI',
        'Product comparison and checkout flows',
        'Personalized recommendation surfaces',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Consumers shopping online',
    secondary: 'Shoppers seeking AI-assisted recommendations',
  },
  userProblems: [
    'Product discovery is time-consuming',
    'Recommendations can feel generic or biased',
    'Shoppers want more personalized guidance',
    'Trust in AI recommendations is still forming',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Consumer AI product design challenges',
      'Personalization and trust UX',
    ],
    whyNot: [
      'Retention risk in consumer apps',
      'Competitive ecommerce landscape',
    ],
    nextActions: [
      'Track product engagement metrics',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Onton website', url: 'https://www.onton.com/' },
    { title: 'Onton funding coverage (TechCrunch)', url: 'https://techcrunch.com/2025/11/11/onton-raises-7-5m-to-build-an-ai-based-shopping-platform/' },
    { title: 'Onton funding press release (GlobeNewswire)', url: 'https://www.globenewswire.com/news-release/2025/11/11/2988257/0/en/Onton-Raises-7-5M-for-AI-Shopping-Platform-Attracts-600K-Users.html' },
    { title: 'Onton company profile (F6S)', url: 'https://www.f6s.com/company/onton' },
  ],
};
