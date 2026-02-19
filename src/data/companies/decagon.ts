import { Company } from '../types';

export const decagon: Company = {
  id: 'decagon',
  name: 'Decagon',
  description: 'Enterprise AI agents that autonomously resolve customer support tickets end-to-end across chat, email, voice, and SMS using Agent Operating Procedures (AOPs).',
  website: 'https://decagon.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',
  ogImage: '/og-images/decagon-og.webp',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['sales-marketing'],

  stage: 'Series D',

  normalizedStage: 'series-d-plus' as const,
  valuation: '$4.5B (Jan 2026)',
  totalFunding: '~$481M',
  fundingHistory: [
    { stage: 'Seed', amount: 'Undisclosed', date: '2023-01', leadInvestors: ['A*', 'Elad Gil'] },
    { stage: 'Series A', amount: '$30M', date: '2024-06', leadInvestors: ['Accel', 'a16z'] },
    { stage: 'Series B', amount: '$65M', date: '2024-10', leadInvestors: ['Bain Capital Ventures'] },
    { stage: 'Series C', amount: '$131M', date: '2025-06', valuation: '$1.5B', leadInvestors: ['Accel', 'a16z'] },
    { stage: 'Series D', amount: '$250M', date: '2026-01', valuation: '$4.5B', leadInvestors: ['Coatue', 'Index Ventures'] },
  ],
  revenue: '~$35M ARR (Oct 2025)',
  growth: '3.5x YoY',
  runway: 'Strong — $250M Series D, well-capitalized',
  customers: '100+ enterprise customers (Duolingo, Notion, Rippling, Eventbrite, Chime)',

  competitors: [
    {
      name: 'Sierra AI',
      description: 'AI agents for customer experience, co-founded by Bret Taylor (ex-Salesforce co-CEO)',
      whyTheyWin: 'Deep customization, $104M ARR, $10B valuation, enterprise brand trust from Bret Taylor',
    },
    {
      name: 'Intercom Fin',
      description: 'Incumbent customer service platform with AI agent add-on at $0.99/resolution',
      whyTheyWin: 'Massive existing customer base, integrated platform, established brand in CS space',
    },
    {
      name: 'Zendesk AI',
      description: 'Legacy customer service platform with AI features and massive installed base',
      whyTheyWin: 'Largest installed base in CS, enterprise trust, full-stack support platform',
    },
  ],
  marketPosition: 'Fastest-growing AI-native customer support platform, competing with Sierra for enterprise AI agent market',
  moat: [
    'Agent Operating Procedures (AOPs): proprietary NL-to-code compilation for agent behavior',
    'Enterprise customer base (Duolingo, Notion, Rippling) with high switching costs',
    '70%+ ticket deflection rates proven at scale',
    'Full omnichannel (chat, email, voice, SMS) in single platform',
  ],
  vsGiants: 'Unlike Zendesk/Intercom adding AI to legacy platforms, Decagon is AI-native from day one. AOPs replace rigid decision trees with adaptive LLM-driven logic. Faster deployment and higher deflection rates than bolt-on AI features.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Decagon agents autonomously resolve support tickets end-to-end — no pre-AI product existed. The AOP architecture is a novel AI-first framework for agent behavior.',
  aiDesignChallenges: [
    'Agent transparency: making multi-step AI reasoning auditable and explainable to CX teams',
    'AOP authoring UX: enabling non-technical CX managers to define complex agent behaviors in natural language',
    'Trust calibration: designing confidence signals when AI handles sensitive operations (refunds, identity verification)',
  ],

  founders: [
    {
      name: 'Jesse Zhang',
      role: 'CEO & Co-founder',
      background: 'Harvard CS, ex-Google engineer. Founded Lowkey (social gaming), acquired by Niantic.',
    },
    {
      name: 'Ashwin Sreenivas',
      role: 'President & Co-founder',
      background: 'Stanford CS (BS+MS), ex-Palantir. Founded Helia (AI video), acquired by Scale AI.',
    },
  ],
  whyBuilding: 'Both founders had prior successful exits and deep ML experience. They saw customer support as a massive market ripe for full AI automation — not just suggesting responses, but end-to-end resolution.',
  beliefs: [
    'AI agents should fully resolve tickets, not just assist human agents',
    'Non-technical CX teams should control agent behavior without code',
    'Enterprise-grade reliability and auditability are non-negotiable',
    'Speed of deployment is a competitive moat',
  ],
  greenFlags: [
    'Two founders with prior exits (Niantic, Scale AI acquisitions)',
    '$4.5B valuation with 3x jump in 6 months — strong investor conviction',
    'Marquee customers: Duolingo, Notion, Rippling, Eventbrite',
    'Forbes AI 50 (2025) recognition',
  ],
  redFlags: [
    'Sierra AI at $10B with 3x more revenue — intense competitive pressure',
    'No remote — 5 days/week in SF office only',
    'No design team yet — first designer hire, engineering-led culture',
    'Glassdoor 3.9/5 with below-average work-life balance (3.5/5)',
  ],

  designTeam: {
    teamSize: '~0 (hiring first Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AOP authoring: natural language to agent behavior mapping',
        'Agent autonomy boundaries and escalation patterns',
        'Multi-step workflow design for complex ticket resolution',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent quality scoring and conversation analytics dashboards',
        'Deflection rate monitoring and optimization tools',
        'A/B testing framework for agent behavior variants',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AOP builder and testing suite UI',
        'Omnichannel agent management dashboard',
        'Enterprise admin and permissions configuration',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise B2C companies with high-volume customer support (fintech, e-commerce, SaaS)',
    secondary: 'Mid-market companies looking to scale CX without hiring',
  },
  userProblems: [
    'Customer support costs growing linearly with user base — unsustainable at scale',
    'Legacy chatbots fail on complex multi-step requests (refunds, account changes)',
    'Human agent quality is inconsistent and hard to scale',
    'CX teams cannot configure AI behavior without engineering support',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 3.9,
      content: 'Strong engineering culture, collaborative environment, high quality bar, fast learning pace. 75% recommend to a friend.',
      url: 'https://www.glassdoor.com/Reviews/Decagon-Reviews-E2972902.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Intense workload with long hours, frequent direction changes. Work-life balance rated 3.5/5. Wearing many hats expected.',
      url: 'https://www.glassdoor.com/Reviews/Decagon-Reviews-E2972902.htm',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Fully in-office 5 days/week in San Francisco. No remote or hybrid options. Founders prioritize in-person collaboration.',
      url: 'https://decagon.ai/about',
    },
  ],

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '3.5x YoY ($10M → $35M ARR)',
    signals: [
      '$250M Series D at $4.5B — valuation tripled in 6 months',
      '100+ enterprise customers added in 2025',
      'Forbes AI 50 recognition (2025)',
    ],
    tam: '$60B+ (customer service automation and AI agent market)',
    ceiling: 'Early innings: <5% of enterprise support is fully AI-automated',
    tailwinds: [
      'Enterprise AI adoption accelerating post-2024',
      'Customer support costs are a top-3 OpEx line item for B2C companies',
      'LLM capabilities improving rapidly — enabling higher deflection rates',
    ],
    headwinds: [
      'Sierra AI has 3x revenue and strong enterprise brand from Bret Taylor',
      'Zendesk/Intercom adding AI features to massive installed bases',
      'Enterprise trust in fully autonomous AI for customer-facing interactions still developing',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate-Strong: AOP architecture is novel but replicable; customer lock-in through deep integrations',
  },

  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Level A AI-native — designing entirely new agent interaction paradigms',
      'First designer at $4.5B company — maximum ownership and influence',
      'Marquee customers (Duolingo, Notion, Rippling) — visible, impactful work',
      'Hypergrowth: valuation tripled in 6 months, 3.5x revenue growth',
    ],
    whyNot: [
      'No design peers or mentors — must build from zero alone',
      '5 days/week in-office SF — zero remote flexibility',
      'Engineering-first founders — design may need to earn its seat',
      'Intense culture with below-average work-life balance',
    ],
    nextActions: [
      'Apply for Product Designer role on Ashby',
      'Research AOP system deeper to prepare for portfolio alignment',
    ],
  },

  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Decagon Official Website', url: 'https://decagon.ai' },
    { title: 'Decagon Series D Announcement', url: 'https://decagon.ai/resources/series-d-announcement' },
    { title: 'BusinessWire — $4.5B Valuation', url: 'https://www.businesswire.com/news/home/20260128580542/en/Decagons-Valuation-Triples-to-$4.5-Billion-as-it-Ushers-in-the-Age-of-AI-Concierge' },
    { title: 'Sacra — Decagon vs Sierra Analysis', url: 'https://sacra.com/research/decagon-vs-sierra/' },
    { title: 'Ashby — Product Designer Role', url: 'https://jobs.ashbyhq.com/decagon/1117aac8-58b5-4b24-bc82-849317a52719' },
  ],
};
