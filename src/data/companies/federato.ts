import { Company } from '../types';

export const federato: Company = {
  id: 'federato',
  name: 'Federato',
  description:
    'AI-native RiskOps platform for insurance carriers, combining underwriting, portfolio optimization, appetite, and broker workflows.',
  website: 'https://www.federato.ai/',
  screenshot: '/screenshots/federato-screenshot.png',
  headquarters: 'Palo Alto, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/federato-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series D',
  valuation: 'Unknown',
  totalFunding: '$180M+',
  fundingHistory: [
    { stage: 'Series D', amount: '$100M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong after 2025 Series D.',
  customers: 'Commercial insurers, specialty carriers, MGAs, and brokers.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $100M Series D in November 2025, bringing total capital raised above $180M',
      'Positions RiskOps as an AI-native operating layer for underwriting and portfolio decisions',
      'Targets high-value commercial insurance workflows with complex risk selection and appetite logic',
    ],
    tam: 'Commercial insurance underwriting and portfolio management software.',
    marketShare: 'Unknown',
    ceiling: 'Could become a system of intelligence above core insurance systems if underwriting teams adopt it daily.',
    tailwinds: [
      'Carriers need faster underwriting and better portfolio visibility',
      'Specialty insurance has high-value workflows with fragmented tools',
      'AI can help summarize submissions, prioritize risks, and enforce appetite',
    ],
    headwinds: [
      'Insurance carrier implementations can be slow',
      'Deep integrations with core systems are required',
      'Underwriters need explainability and trust before relying on automated recommendations',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Potentially strong if Federato becomes the underwriting workbench and accumulates carrier-specific decision data.',
  },

  competitors: [
    { name: 'Guidewire', description: 'Core insurance software platform.', whyTheyWin: 'Deep incumbent footprint across large carriers.' },
    { name: 'Duck Creek', description: 'Policy, billing, claims, and analytics software for insurers.', whyTheyWin: 'Established enterprise insurance relationships.' },
    { name: 'Akur8', description: 'Insurance pricing and reserving platform.', whyTheyWin: 'Focused actuarial and pricing depth.' },
  ],
  marketPosition: 'AI-native underwriting and portfolio operating layer for commercial insurance.',
  moat: [
    'RiskOps workflow focus across appetite, underwriting, and portfolio management',
    'Carrier-specific data and decision history can compound over time',
    'High switching costs once embedded in underwriting operations',
  ],
  vsGiants:
    'Competes by sitting closer to day-to-day underwriting decisions than broad core-system vendors.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI supports submission intake, risk analysis, appetite matching, and portfolio decision workflows.',
  aiDesignChallenges: [
    'Make AI recommendations explainable to underwriters',
    'Design exception handling when risk appetite is ambiguous',
    'Balance automation with human judgment in high-dollar risk decisions',
  ],

  founders: [
    { name: 'Will Ross', role: 'Co-founder & CEO', background: 'Co-founded Federato to modernize insurance underwriting and portfolio management.' },
    { name: 'William Steenbergen', role: 'Co-founder & CTO', background: 'Co-founded Federato with a focus on data-driven insurance operations.' },
  ],
  whyBuilding:
    'Help insurers make better risk decisions by connecting underwriting work, portfolio goals, and AI-driven analysis.',
  beliefs: [
    'Insurance underwriting needs real-time decision support',
    'AI should augment expert underwriters rather than hide decisions',
    'Portfolio-level context should shape individual risk selection',
  ],
  designPhilosophy:
    'Turn complex insurance operations into clear, auditable decision workflows.',
  greenFlags: [
    'Large recent funding round',
    'Clear vertical wedge with expensive workflows',
    'Strong design surface around underwriting productivity',
  ],
  redFlags: [
    'Enterprise sales and implementation cycles can be long',
    'Carrier data quality varies widely',
    'Incumbent core-system vendors may bundle adjacent capabilities',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Underwriting workbench flows', 'Risk appetite logic', 'Portfolio optimization and exception states'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Recommendation quality', 'Underwriter adoption', 'Quote/bind conversion and portfolio outcomes'],
    },
    interface: {
      level: 'medium',
      tasks: ['Submission triage UI', 'Risk detail pages', 'Analytics dashboards'],
    },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Commercial insurance underwriters and portfolio leaders',
    secondary: 'Insurance executives, brokers, and operations teams',
  },
  userProblems: [
    'Underwriters spend time across disconnected tools',
    'Submission intake and appetite checks are slow',
    'Portfolio goals are hard to translate into daily underwriting decisions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: ['High-value insurance workflow', 'Strong AI/product design challenge around trust and explainability'],
    whyNot: ['Enterprise implementation complexity', 'Less consumer-facing visual design surface'],
    nextActions: ['Monitor design openings', 'Track customer case studies and product launches'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Federato website', url: 'https://www.federato.ai/' },
    { title: 'Federato Series D coverage', url: 'https://finance.yahoo.com/news/ai-driven-insurance-platform-federato-100310804.html' },
  ],
};
