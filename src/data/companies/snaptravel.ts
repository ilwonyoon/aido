import { Company } from '../types';

export const snaptravel: Company = {
  id: 'snaptravel',
  name: 'SnapTravel',
  description: 'AI-powered travel assistant that enables booking hotels through messaging channels.',
  website: 'https://www.super.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2c'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$21.2M (Series A total, 2018)',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Consumers booking hotels via messaging-based travel assistant',

  // Competition
  competitors: [
    {
      name: 'Hopper',
      description: 'Consumer travel app with predictive pricing and booking.',
      whyTheyWin: 'Strong brand recognition in consumer travel.',
    },
    {
      name: 'Trip.com',
      description: 'Global online travel agency and booking platform.',
      whyTheyWin: 'Global inventory and scale.',
    },
    {
      name: 'Expedia',
      description: 'Large online travel agency platform.',
      whyTheyWin: 'Massive inventory and distribution.',
    },
  ],
  marketPosition: 'Messaging-first AI travel assistant for hotel booking.',
  moat: ['Conversational booking workflow', 'Early adoption of AI travel assistant UX'],
  vsGiants: 'Differentiates via messaging-first conversational travel experience.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports conversational booking and personalization.',
  aiDesignChallenges: [
    'Designing trust in AI-driven travel recommendations',
    'Balancing automation with human fallback for high-stakes bookings',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hussein Fazal',
      role: 'Co-founder & CEO',
      background: 'Co-founded SnapTravel to bring AI-driven travel booking to messaging platforms.',
    },
    {
      name: 'Henry Shi',
      role: 'Co-founder',
      background: 'Co-founded SnapTravel and led product/engineering strategy.',
    },
  ],
  whyBuilding: 'Simplify travel booking through conversational AI and messaging.',
  beliefs: ['Consumers prefer low-friction messaging-based booking', 'AI can personalize travel at scale'],
  greenFlags: ['Clear consumer UX wedge in travel'],
  redFlags: ['Highly competitive OTA market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Conversation flow and recommendation UX'] },
    evaluation: { level: 'medium', tasks: ['Recommendation quality and trust signals'] },
    interface: { level: 'medium', tasks: ['Messaging and booking confirmation UX'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Consumers booking travel on mobile and messaging platforms',
    secondary: 'Price-sensitive travelers seeking deals',
  },
  userProblems: [
    'Travel booking is noisy and time-consuming',
    'Consumers want personalized deals without search friction',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Conversational commerce UX challenges'],
    whyNot: ['Travel booking margins and competition pressure'],
    nextActions: ['Confirm current brand status under Super.com'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Series A closed at $21.2M (2018)'],
    tam: 'Large consumer travel booking market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand within broader Super.com consumer fintech travel stack',
    tailwinds: ['Mobile-first travel booking adoption'],
    headwinds: ['OTA competition and thin margins'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T19:35:00',
  sources: [
    { title: 'Super.com press - Snaptravel Series A', url: 'https://www.super.com/press/snaptravel-raises-new-investment-closes-series-a-at-21-2-million' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
