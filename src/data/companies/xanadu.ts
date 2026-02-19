import { Company } from '../types';

export const xanadu: Company = {
  id: 'xanadu',
  name: 'Xanadu',
  description: 'Quantum computing company building photonic quantum hardware and software for AI and optimization workloads.',
  website: 'https://xanadu.ai',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$137.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Research institutions and enterprises exploring quantum computing applications',

  // Competition
  competitors: [
    {
      name: 'PsiQuantum',
      description: 'Photonic quantum computing hardware company.',
      whyTheyWin: 'Large funding and long-term hardware roadmap.',
    },
    {
      name: 'IonQ',
      description: 'Quantum computing company with trapped-ion hardware.',
      whyTheyWin: 'Public company distribution and hardware maturity.',
    },
    {
      name: 'Rigetti',
      description: 'Quantum computing hardware and software platform.',
      whyTheyWin: 'Cloud-accessible quantum compute and partnerships.',
    },
  ],
  marketPosition: 'Photonic quantum computing platform with open-source software ecosystem.',
  moat: ['Photonic hardware approach', 'Open-source quantum software tooling (PennyLane)'],
  vsGiants: 'Differentiated by photonic hardware and developer-friendly quantum software stack.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a key application domain for its quantum computing platform.',
  aiDesignChallenges: [
    'Designing accessible quantum developer workflows',
    'Communicating complex hardware capabilities to enterprise buyers',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Christian Weedbrook',
      role: 'Founder & CEO',
      background: 'Quantum computing researcher who founded Xanadu in 2016.',
    },
  ],
  whyBuilding: 'Make quantum computing practical and accessible through photonic hardware and open software.',
  beliefs: [
    'Quantum computing can unlock new capabilities for AI and optimization',
    'Open-source tooling accelerates adoption',
  ],
  greenFlags: ['Strong funding base', 'Clear differentiation in photonic approach'],
  redFlags: ['Long timelines to commercial quantum advantage'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Quantum workflow UX', 'Modeling and simulation interfaces'] },
    evaluation: { level: 'medium', tasks: ['Performance benchmarking and reliability UX'] },
    interface: { level: 'medium', tasks: ['Developer tooling and cloud access UI'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Quantum researchers and enterprise innovation teams',
    secondary: 'Developers experimenting with quantum ML toolchains',
  },
  userProblems: [
    'Quantum computing workflows are complex and hard to access',
    'Teams need developer-friendly tooling to experiment with quantum ML',
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
    whyJoin: ['Deep-tech UX challenges', 'Frontier tech with AI adjacency'],
    whyNot: ['Long commercialization cycles'],
    nextActions: ['Track hiring for design and developer experience roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$137.1M total funding (Seedtable)'],
    tam: 'Emerging quantum computing and AI infrastructure market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential platform for quantum ML tooling',
    tailwinds: ['Growing quantum research investment'],
    headwinds: ['Uncertain commercial timelines'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:55:00',
  sources: [
    { title: 'Source', url: 'https://xanadu.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
