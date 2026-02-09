import { Company } from '../types';

export const extropic: Company = {
  id: 'extropic',
  name: 'Extropic',
  description:
    'Building thermodynamic computing hardware that is far more energy-efficient than GPUs for probabilistic AI workloads.',
  website: 'https://extropic.ai',
    screenshot: '/screenshots/extropic-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/extropic-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$14.1M',
  revenue: 'Unknown',
  growth: 'early-growth trajectory (public % not disclosed)',
  runway: 'Unknown',
  customers: 'Primary audience: AI infrastructure teams and researchers building probabilistic models',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$14.1M raised to date (seed stage)',
      'Building thermodynamic chips for probabilistic AI workloads',
    ],
    tam: 'Unknown',
    ceiling: 'Early innings: alternative AI compute architectures remain experimental.',
    tailwinds: [
      'AI compute demand growing faster than GPU supply',
      'Energy costs drive interest in efficient hardware',
      'Hardware innovation cycles in AI infrastructure',
    ],
    headwinds: [
      'Long hardware development cycles',
      'High capital intensity and manufacturing complexity',
      'Competition from established GPU and accelerator providers',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if thermodynamic computing delivers major efficiency gains.',
  },

  // Competition
  competitors: [
    {
      name: 'NVIDIA',
      description: 'Dominant provider of GPUs for AI training and inference.',
      whyTheyWin: 'Massive ecosystem, performance lead, and developer lock-in.',
    },
    {
      name: 'Cerebras',
      description: 'AI accelerator hardware with wafer-scale chips.',
      whyTheyWin: 'Purpose-built AI hardware and strong enterprise adoption.',
    },
    {
      name: 'Tenstorrent',
      description: 'AI compute accelerators and RISC-V based architectures.',
      whyTheyWin: 'Chip design talent and flexible compute stack.',
    },
  ],
  marketPosition: 'Energy-efficient hardware for probabilistic AI and sampling-heavy workloads.',
  moat: [
    'Thermodynamic computing approach vs traditional deterministic chips',
    'Founding team with deep physics and AI research background',
    'Focus on probabilistic workloads that are poorly served by GPUs',
  ],
  vsGiants: 'Targets probabilistic workloads where deterministic GPUs are inefficient.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Extropic exists to power AI workloads more efficiently, but the product is hardware infrastructure.',
  aiDesignChallenges: [
    'Communicating probabilistic compute concepts to developers',
    'Tooling for benchmarking vs traditional GPU workflows',
    'Trust design around accuracy, determinism, and reproducibility',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Guillaume Verdon',
      role: 'Founder & CEO',
      background: 'Physicist and AI researcher; leads Extropic.',
    },
    {
      name: 'Trevor McCourt',
      role: 'Co-founder',
      background: 'Co-founded Extropic to build thermodynamic computing hardware.',
    },
  ],
  whyBuilding:
    'Enable far more energy-efficient AI by using probabilistic, thermodynamic compute instead of traditional chips.',
  beliefs: [
    'Compute efficiency is the bottleneck for AI scale',
    'Probabilistic hardware can unlock new AI capabilities',
    'Energy efficiency must improve dramatically to sustain AI growth',
  ],
  designPhilosophy: 'Developer-facing hardware platforms must be explainable, measurable, and trustworthy.',
  greenFlags: [
    'Experienced technical founders with strong research backgrounds',
    'Clear differentiation in compute architecture',
  ],
  redFlags: [
    'Hardware commercialization risk and long cycles',
    'Heavy capital requirements to scale manufacturing',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Developer workflow logic for probabilistic compute',
        'Configuration and tuning for sampling-based workloads',
        'Error handling for non-deterministic outputs',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Benchmarking and evaluation tooling for performance claims',
        'Quality metrics for probabilistic inference',
        'Visualization of accuracy vs efficiency tradeoffs',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer consoles for monitoring performance and cost',
        'SDK documentation UX and onboarding flows',
        'Dashboards for workload profiling and optimization',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI infrastructure teams and researchers building probabilistic models',
    secondary: 'Enterprises running sampling-heavy AI workloads',
  },
  userProblems: [
    'AI workloads are bottlenecked by energy and compute costs',
    'Sampling-based models are inefficient on deterministic hardware',
    'Teams need reliable benchmarking to trust new hardware',
    'Long hardware development cycles make evaluation difficult',
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
    fitScore: 6,
    whyJoin: [
      'Frontier hardware + AI intersection',
      'Potential for differentiated compute platform design',
    ],
    whyNot: [
      'Hardware risk and longer product cycles',
      'Unclear design team growth trajectory',
    ],
    nextActions: [
      'Monitor technical benchmarks and prototype releases',
      'Track developer tooling announcements',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T14:30:00',
  sources: [
    { title: 'Source', url: 'https://extropic.ai' },
    { title: 'Source', url: 'https://extropic.ai/about' },
    { title: 'Source', url: 'https://extropic.ai/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/extropic' },
    { title: 'Source', url: 'https://www.wired.com/story/extropic-probabilistic-computing-chips/' }
  ],
};
