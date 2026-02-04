import { Company } from '../types';

export const tempo: Company = {
  id: 'tempo',
  name: 'Tempo',
  description: 'Payments-focused blockchain designed for high-throughput settlement.',
  website: 'https://tempo.xyz',
  screenshot: '/screenshots/tempo-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://tempo.xyz/images/opengraph/og-image.png',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['fintech'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$500M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$500M',
      date: '2025-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Aptos',
      description: 'High-throughput Layer 1 blockchain.',
      whyTheyWin: 'Large ecosystem and funding.',
    },
    {
      name: 'Solana',
      description: 'High-performance Layer 1 blockchain.',
      whyTheyWin: 'Large developer ecosystem and adoption.',
    },
    {
      name: 'Sui',
      description: 'Layer 1 blockchain focused on scalability.',
      whyTheyWin: 'Strong technical team and funding.',
    },
  ],
  marketPosition: 'Payments-first blockchain infrastructure for fast settlement.',
  moat: [
    'Focus on payments throughput and settlement',
    'Performance-driven engineering focus',
    'Large funding round for infrastructure buildout',
  ],
  vsGiants: 'Competes with high-performance L1 chains on throughput and payments focus.',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is not core to the product; blockchain infrastructure is the focus.',
  aiDesignChallenges: [
    'Making payments infrastructure understandable to non-crypto teams',
    'Balancing developer tooling with compliance expectations',
    'Reducing onboarding friction for new participants',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Payments infrastructure needs faster, cheaper settlement for modern commerce.',
  beliefs: [
    'Payments should settle quickly and cheaply',
    'Developers need simpler blockchain tooling',
    'Performance is critical for payments adoption',
  ],
  greenFlags: [
    'Large Series A funding announced',
    'Clear focus on payments use cases',
  ],
  redFlags: [
    'Volatile crypto market conditions',
    'Competition among L1s is intense',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Payments flow logic', 'Wallet and settlement rules'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Network monitoring dashboards', 'Performance analytics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Developer tooling UI', 'Payments integration experiences'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Payments developers and fintech teams',
    secondary: 'Web3 builders focused on settlement and payments',
  },
  userProblems: [
    'Current blockchains struggle with payments throughput',
    'Payments settlement is too slow and expensive',
    'Developer tooling for payments is fragmented',
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
    fitScore: 4,
    whyJoin: ['Payments infrastructure impact', 'High-scale systems'],
    whyNot: ['Crypto market risk', 'Unclear AI differentiation'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$500M Series A announced'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Payments-first chains could capture new settlement flows.',
    tailwinds: ['Payments modernization', 'Global interest in faster settlement'],
    headwinds: ['Crypto regulation', 'Ecosystem bootstrapping challenges'],
    moatType: 'technology',
    moatStrength: 'Payments-first infrastructure focus.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Tempo launch', url: 'https://tempo.xyz/launch' },
    { title: 'Tempo on startups.gallery', url: 'https://startups.gallery/companies/tempo' },
  ],
};
