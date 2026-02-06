import { Company } from '../types';

export const ada: Company = {
  id: 'ada',
  name: 'Ada',
  description: 'AI customer service platform that automates support conversations with chatbots and automation.',
  website: 'https://www.ada.cx',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$56M+ (as of 2020)',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Customer support and CX teams at large digital businesses',

  // Competition
  competitors: [
    {
      name: 'Intercom',
      description: 'Customer communication platform with AI support tools.',
      whyTheyWin: 'Large installed base and multi-product suite.',
    },
    {
      name: 'Zendesk',
      description: 'Customer service platform with AI and automation tooling.',
      whyTheyWin: 'Enterprise footprint and mature ticketing system.',
    },
    {
      name: 'Forethought',
      description: 'AI-first customer support automation platform.',
      whyTheyWin: 'AI-native positioning and rapid iteration cadence.',
    },
  ],
  marketPosition: 'No/low-code AI customer service automation for enterprise support teams.',
  moat: [
    'Conversation automation tuned for enterprise CX workflows',
    'Strong customer service specialization',
  ],
  vsGiants: 'Differentiates with AI-first customer support experience rather than broader CRM suites.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to automated customer service experiences and resolution workflows.',
  aiDesignChallenges: [
    'Designing trust and handoff for automated support',
    'Optimizing resolution quality and deflection UX',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mike Murchison',
      role: 'Co-founder & CEO',
      background: 'Co-founded Ada to modernize customer support automation.',
    },
    {
      name: 'David Hariri',
      role: 'Co-founder',
      background: 'Co-founded Ada and helped build the AI customer service platform.',
    },
  ],
  whyBuilding: 'Scale customer support without sacrificing personalization or quality.',
  beliefs: [
    'Automation should improve, not degrade, customer experience',
    'AI should handle repetitive support while humans focus on complex issues',
  ],
  greenFlags: ['Large market tailwind in customer service automation'],
  redFlags: ['Competitive support platform landscape'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Automation flows and escalation logic design', 'Trust and transparency UI'] },
    evaluation: { level: 'high', tasks: ['Quality metrics and deflection tracking UX'] },
    interface: { level: 'medium', tasks: ['Conversation builder and admin dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Customer support and CX leaders',
    secondary: 'Product support teams at digital-first companies',
  },
  userProblems: [
    'Support ticket volume is growing faster than teams can scale',
    'Automation tools are hard to implement and maintain',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Core AI support workflow challenges', 'Large enterprise CX impact'],
    whyNot: ['Highly competitive category with incumbent suites'],
    nextActions: ['Validate current design team size and hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Series B funding $44M (2020)'],
    tam: 'Large customer service automation market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to become core AI CX automation layer',
    tailwinds: ['Enterprise demand for AI support automation'],
    headwinds: ['Incumbent support platforms expanding AI features'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:35:00',
  sources: [
    { title: 'Ada', url: 'https://www.ada.cx' },
    { title: 'VentureBeat - Ada raises $44M Series B', url: 'https://venturebeat.com/ai/ada-raises-44-million-to-automate-customer-support-with-ai-chatbots/' },
    { title: 'FinSMEs - Ada Support raises $2.5M', url: 'https://www.finsmes.com/2017/07/ada-support-raises-2-5m-in-funding.html' },
  ],
};
