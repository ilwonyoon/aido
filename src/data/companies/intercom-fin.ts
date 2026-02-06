import { Company } from '../types';

export const intercomFin: Company = {
    id: 'intercom-fin',
    name: 'Intercom (Fin)',
    description: 'AI customer service platform with Fin AI Agent. Handles support conversations at scale.',
    website: 'https://www.intercom.com',
    screenshot: '/screenshots/intercom-fin-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/intercom-fin-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['infrastructure', 'sales-marketing'],

    stage: 'Private',
    valuation: 'Unknown',
    totalFunding: '$250M',
    revenue: '$343M (2024)',
    growth: '25% YoY',
    customers: 'User growth signal: Fin approaching $100M ARR',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '25% YoY ($343M in 2024)',
      userGrowth: 'Fin approaching $100M ARR',
      signals: ['Fin approaching $100M ARR', 'Opening Berlin R&D hub', 'Hiring 100 people for AI team', '25% growth reacceleration from 10%'],
      tam: '$15B (customer support software)',
      marketShare: '2.3% = 43x upside potential',
      ceiling: 'Mid-stage: Expanding AI Agent to full customer experience',
      tailwinds: ['AI customer support becoming must-have', 'Enterprise adoption', 'Fin 3 launch momentum'],
      headwinds: ['Competition from Zendesk, Freshdesk', 'AI agent quality concerns', 'Customer trust issues'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Embedded in workflows, but competitors catching up',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for customer messaging. Proven customer communication workflow with AI.',
    aiDesignChallenges: [],
    founders: [
      {
        name: 'Eoghan McCabe',
        role: 'Co-founder',
        background: 'Co-founded Intercom to modernize business customer communication.',
      },
      {
        name: 'Des Traynor',
        role: 'Co-founder',
        background: 'Co-founded Intercom and led product/strategy across messaging and support.',
      },
      {
        name: 'Ciaran Lee',
        role: 'Co-founder',
        background: 'Co-founded Intercom and led engineering organization growth.',
      },
      {
        name: 'David Barrett',
        role: 'Co-founder',
        background: 'Co-founded Intercom and helped scale the company from Ireland to global markets.',
      },
    ],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: ['AI-native company', 'Growth potential'],
    redFlags: ['Unknown design culture', 'Competitive market'],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Customer support teams at SaaS and technology companies',
        secondary: 'Product teams using chat for onboarding and engagement',
    },
    userProblems: [
        'Customer support teams cannot scale to answer repetitive questions without hiring',
        'Support tickets pile up during nights and weekends when teams are offline',
        'Finding answers in documentation and past tickets takes support agents minutes per query',
        'Customers want instant answers not waiting hours for support ticket responses',
        'Scaling support quality across global teams and timezones is expensive',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.intercom.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Intercom (Fin) product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Intercom Berlin Hub', 'url': 'https://www.intercom.com/blog/our-next-research-and-development-hub-berlin/'}, {'title': 'Intercom Fin Growth', 'url': 'https://www.growthunhinged.com/p/intercoms-bet-on-ai'}],
  };
