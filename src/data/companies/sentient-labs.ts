import { Company } from '../types';

export const sentientLabs: Company = {
  id: 'sentient-labs',
  name: 'Sentient Labs',
  description: 'Ensuring AGI is open source.',
  website: 'https://sentient.foundation',
    screenshot: '/screenshots/sentient-labs-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68d66859b7a6a1c99da48cc7/68f24efadb8782726f98bff1_Open%20graph.png',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$85M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and organizations building with open-source AGI tools.',

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'Closed-source frontier AI models.',
      whyTheyWin: 'Scale and brand recognition.',
    },
    {
      name: 'Anthropic',
      description: 'Safety-focused frontier AI models.',
      whyTheyWin: 'Enterprise trust and funding scale.',
    },
    {
      name: 'Meta AI',
      description: 'Open-source Llama models.',
      whyTheyWin: 'Massive distribution and research scale.',
    },
  ],
  marketPosition: 'Open-source AGI initiative and tooling.',
  moat: [
    'Open-source positioning',
    'Community-driven development',
    'Potential ecosystem network effects',
  ],
  vsGiants: 'Competes by emphasizing open-source AGI vs closed frontier model companies.',

  // AI-native analysis
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI is the product with open-source AGI focus.',
  aiDesignChallenges: [
    'Balancing openness with safety',
    'Designing developer tooling for open models',
    'Building trust around open-source governance',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'AGI should be open-source and community-owned.',
  beliefs: [
    'Open-source accelerates AI progress',
    'Transparency builds trust in AI systems',
    'Communities should shape AGI development',
  ],
  greenFlags: [
    'Open-source alignment with developer communities',
  ],
  redFlags: [
    'Competing with well-funded frontier labs',
    'Open-source governance complexity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Developer tooling for model usage', 'Safety and governance flows'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Model evaluation and benchmarking', 'Community feedback loops'],
    },
    interface: {
      level: 'medium',
      tasks: ['Open-source platform UX', 'Documentation and onboarding'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Developers and researchers',
    secondary: 'Organizations adopting open-source AI',
  },
  userProblems: [
    'Access to open, frontier-grade AI is limited',
    'Open-source tooling is fragmented',
    'Governance and safety practices are unclear',
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
    whyJoin: ['Open-source AI mission', 'Community-first product design'],
    whyNot: ['Unclear commercialization path'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Seed-stage open-source AGI initiative'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Open-source AGI adoption is early but growing.',
    tailwinds: ['Open-source AI momentum', 'Regulatory focus on transparency'],
    headwinds: ['Frontier model funding arms race', 'Governance complexity'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Potential community and ecosystem network effects.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:50:00',
  sources: [
    { title: 'Sentient Foundation', url: 'https://sentient.foundation' },
    { title: 'Sentient Labs on startups.gallery', url: 'https://startups.gallery/companies/sentient-labs' },
  ],
};
