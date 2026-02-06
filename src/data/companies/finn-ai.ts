import { Company } from '../types';

export const finnAi: Company = {
  id: 'finn-ai',
  name: 'Finn AI',
  description: 'Conversational AI assistant platform for banks and credit unions.',
  website: 'https://finn.ai',
  headquarters: 'Vancouver, BC, Canada',
  remote: 'Unknown',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$210.0K',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Banks and credit unions deploying AI assistants for customer service',

  competitors: [
    {
      name: 'Kasisto',
      description: 'Digital assistant platform for financial institutions.',
      whyTheyWin: 'Strong banking assistant specialization.',
    },
    {
      name: 'Personetics',
      description: 'AI personalization and engagement platform for banking.',
      whyTheyWin: 'Broader financial engagement and recommendation suite.',
    },
    {
      name: 'Glia',
      description: 'Digital customer service platform with AI for financial services.',
      whyTheyWin: 'Integrated service channels and banking focus.',
    },
  ],
  marketPosition: 'AI virtual assistant for banking and credit union customer interactions.',
  moat: ['Financial institution conversational workflows'],
  vsGiants: 'Differentiates with banking-specific assistant experiences and compliance alignment.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI powers conversational support and banking query automation.',
  aiDesignChallenges: [
    'Designing compliant conversational banking UX',
    'Balancing automation with human escalation in sensitive finance contexts',
  ],

  founders: [
    {
      name: 'Jake Tyler',
      role: 'Founder',
      background: 'Founded Finn AI to build AI virtual assistants for financial institutions.',
    },
    {
      name: 'Guru Atlu',
      role: 'Co-founder',
      background: 'Co-founded Finn AI and contributed to platform development.',
    },
    {
      name: 'Natalie Cartwright',
      role: 'Co-founder',
      background: 'Co-founded Finn AI and helped shape strategy and operations.',
    },
  ],
  whyBuilding: 'Modernize banking support with AI assistants tailored to finance workflows.',
  beliefs: ['Banking support should be instant and contextual', 'AI assistants should reduce operational cost without sacrificing trust'],
  greenFlags: ['Clear fintech assistant specialization'],
  redFlags: ['Small disclosed funding and intense competition'],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Conversation flow logic for financial use cases'] },
    evaluation: { level: 'medium', tasks: ['Assistant quality and resolution metrics'] },
    interface: { level: 'medium', tasks: ['Chat assistant and admin tooling UX'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Banking digital support and operations teams',
    secondary: 'Credit union customer experience teams',
  },
  userProblems: [
    'Financial institutions face high support volume and operational costs',
    'Generic chatbots fail in regulated and sensitive financial contexts',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Fintech conversational UX and trust design problems'],
    whyNot: ['Early stage and strong incumbents'],
    nextActions: ['Verify current operating status and product scope'],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$210K total funding (Seedtable)'],
    tam: 'Banking conversational AI and customer service market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader financial services automation',
    tailwinds: ['Bank demand for digital service automation'],
    headwinds: ['Regulatory constraints and incumbent competition'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  lastUpdated: '2026-02-04T21:35:00',
  sources: [
    { title: 'Finn AI', url: 'https://finn.ai' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
