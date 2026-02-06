import { Company } from '../types';

export const heyday: Company = {
  id: 'heyday',
  name: 'Heyday',
  description: 'Conversational AI platform for e-commerce customer service and shopping assistance.',
  website: 'https://www.heyday.ai',
  headquarters: 'Montreal, QC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$184.7M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'E-commerce brands and customer support teams',

  // Competition
  competitors: [
    {
      name: 'Gorgias',
      description: 'E-commerce customer service platform.',
      whyTheyWin: 'Strong Shopify ecosystem integration.',
    },
    {
      name: 'Zendesk',
      description: 'Customer support platform with AI automation.',
      whyTheyWin: 'Enterprise footprint and ticketing system depth.',
    },
    {
      name: 'Intercom',
      description: 'Customer messaging platform with AI support tools.',
      whyTheyWin: 'Multi-product customer communication suite.',
    },
  ],
  marketPosition: 'Conversational AI assistant for ecommerce and customer service automation.',
  moat: ['Shopify and ecommerce integrations', 'AI-driven support automation workflows'],
  vsGiants: 'Differentiates with ecommerce-first conversational AI focus.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to conversational commerce and support automation.',
  aiDesignChallenges: [
    'Balancing AI automation with human support handoff',
    'Designing conversational shopping and support experiences',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Henry Shi',
      role: 'Co-founder',
      background: 'Co-founded Heyday to build conversational AI for ecommerce.',
    },
  ],
  whyBuilding: 'Help ecommerce brands scale customer support with AI.',
  beliefs: ['Conversational AI improves ecommerce experiences', 'Automation should reduce support friction'],
  greenFlags: ['Strong ecommerce focus', 'Large funding base'],
  redFlags: ['Highly competitive ecommerce support market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Conversation flows and product recommendation UX'] },
    evaluation: { level: 'medium', tasks: ['Support quality and resolution tracking'] },
    interface: { level: 'medium', tasks: ['Chat interfaces and agent tooling'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Ecommerce support and CX teams',
    secondary: 'Ecommerce growth and marketing teams',
  },
  userProblems: [
    'Support ticket volumes scale faster than teams',
    'Ecommerce customers expect instant responses',
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
    whyJoin: ['Ecommerce support UX challenges'],
    whyNot: ['Competitive AI support landscape'],
    nextActions: ['Track product design roles and Shopify ecosystem growth'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$184.7M total funding (Seedtable)'],
    tam: 'Ecommerce customer service automation market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into broader ecommerce AI support stack',
    tailwinds: ['Ecommerce support automation demand'],
    headwinds: ['Competition from support suites'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T21:15:00',
  sources: [
    { title: 'Heyday', url: 'https://www.heyday.ai' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
