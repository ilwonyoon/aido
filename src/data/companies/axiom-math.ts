import { Company } from '../types';

export const axiomMath: Company = {
  id: 'axiom-math',
  name: 'Axiom (Math)',
  description:
    'Building a self-improving superintelligent reasoner, starting with an AI mathematician.',
  website: 'https://axiommath.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/axiom-math-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['creative-media'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$64M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$64M',
      date: '2025-10',
      leadInvestors: ['B Capital', 'Greycroft', 'Madrona', 'Menlo Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: '24+ months (per funding notes)',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$64M seed led by B Capital (Oct 2025)',
      'Founded in 2025 to build an AI mathematician platform',
    ],
    tam: 'Unknown',
    ceiling: 'Early innings: AI mathematical reasoning remains a frontier problem.',
    tailwinds: [
      'Rapid improvements in reasoning models and verification tooling',
      'Demand for provably correct reasoning in high-stakes domains',
      'Increased investment in AI research labs and frontier models',
    ],
    headwinds: [
      'High bar for correctness and formal proof quality',
      'Competition from large frontier model labs',
      'Long research cycles before product-market fit',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if Axiom can deliver reliable proof-grade reasoning at scale.',
  },

  // Competition
  competitors: [
    {
      name: 'Harmonic',
      description: 'AI lab pursuing mathematical superintelligence and reasoning systems.',
      whyTheyWin: 'Focused on math reasoning with strong funding and a focused mission.',
    },
    {
      name: 'OpenAI',
      description: 'Frontier reasoning models used for math and proof-like tasks.',
      whyTheyWin: 'Scale, distribution, and large research budgets.',
    },
    {
      name: 'Google DeepMind',
      description: 'Frontier reasoning research across math and scientific domains.',
      whyTheyWin: 'Deep research bench and compute resources.',
    },
  ],
  marketPosition: 'AI mathematician and reasoning engine for complex proofs and verification.',
  moat: [
    'Focus on proof-grade reasoning and formal correctness',
    'High-talent research team drawn from leading AI labs',
    'Mission-driven positioning around mathematical superintelligence',
  ],
  vsGiants: 'Specialized focus on mathematical reasoning vs general-purpose assistants.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: The core product is an AI mathematician; the company does not exist without AI.',
  aiDesignChallenges: [
    'Trust design for proof correctness and uncertainty',
    'Evaluation design for formal reasoning quality',
    'Interface design for step-by-step proofs and verification workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Carina Hong',
      role: 'Founder & CEO',
      background: 'Co-founded Axiom Math to build an AI mathematician.',
    },
    {
      name: 'Shubho Sengupta',
      role: 'CTO',
      background: 'Co-founded Axiom Math and leads technical development.',
    },
  ],
  whyBuilding:
    'Build a self-improving reasoning engine that can solve complex mathematical problems and produce proofs.',
  beliefs: [
    'Mathematical reasoning is a path to more reliable AI',
    'Proof-grade correctness matters for real-world impact',
    'Talent density accelerates progress on hard problems',
  ],
  designPhilosophy: 'Proof-first UX: clarity, rigor, and transparency in reasoning steps.',
  greenFlags: [
    'Large seed round for deep research runway',
    'Clear mission and focused research direction',
  ],
  redFlags: [
    'Long timelines for productization',
    'High technical risk and compute costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Reasoning workflow design for proof generation',
        'Error handling and counterexample surfacing',
        'Guardrails for hallucinated proofs or invalid steps',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Proof verification metrics and scoring',
        'Human review workflows for correctness',
        'Benchmarking against formal systems and human experts',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Step-by-step proof visualization',
        'Interactive theorem exploration and validation',
        'Knowledge graph of assumptions and dependencies',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Researchers and technical teams needing formal reasoning',
    secondary: 'Industries requiring provably correct reasoning (finance, cryptography, verification)',
  },
  userProblems: [
    'Complex proofs are slow and difficult to verify manually',
    'Existing AI systems struggle with rigorous mathematical correctness',
    'Researchers lack tools that explain and validate reasoning steps',
    'High-stakes domains require provable correctness, not just plausibility',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Frontier reasoning and proof UX challenges',
      'Mission-driven research culture',
    ],
    whyNot: [
      'Long research timelines before user-facing product scale',
      'Unclear design team maturity',
    ],
    nextActions: [
      'Track public demos or research releases',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T14:30:00',
  sources: [
    { title: 'Axiom Math website', url: 'https://axiommath.ai' },
    { title: 'Axiom Math Join Us', url: 'https://axiommath.ai/join-us' },
    { title: 'Axiom (Math) on startups.gallery', url: 'https://startups.gallery/companies/axiom-math' },
    { title: 'Axiom Math funding (Sacra)', url: 'https://sacra.com/c/axiom-math/' },
    { title: 'Axiom Math founder background (Business Insider)', url: 'https://www.businessinsider.com/axiom-math-stanford-dropout-meta-ai-researchers-startup-2025-12' },
  ],
};
