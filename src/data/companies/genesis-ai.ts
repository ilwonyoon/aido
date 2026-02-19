import { Company } from '../types';

export const genesisAi: Company = {
  id: 'genesis-ai',
  name: 'Genesis AI',
  description: 'Global physical AI laboratory building universal robotics foundation models and simulation infrastructure for general-purpose robots.',
  website: 'https://genesis-ai.company',
  headquarters: 'Palo Alto, CA',
  region: 'sf-bay-area' as const,
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/genesis-ai-og.webp',

  aiTypes: ['foundation-model', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  stage: 'Seed',

  normalizedStage: 'seed' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$105M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$105M',
      date: '2025-07',
      leadInvestors: ['Eclipse Ventures', 'Khosla Ventures'],
    },
  ],
  revenue: 'Pre-revenue',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Pre-product (research stage)',

  competitors: [
    {
      name: 'Physical Intelligence',
      description: 'Builds universal robotic intelligence via pi-zero VLA model.',
      whyTheyWin: '$400M+ funding and strong foundation model approach for robotic manipulation.',
    },
    {
      name: 'Skild AI',
      description: 'General-purpose AI for robots with a universal model approach.',
      whyTheyWin: '$4B valuation and large-scale data strategy.',
    },
    {
      name: 'Figure AI',
      description: 'Humanoid robots for manufacturing and general-purpose tasks.',
      whyTheyWin: 'Integrated hardware + software approach with visible demos.',
    },
  ],
  marketPosition: 'Open-source-first robotics foundation model lab',
  moat: [
    'Open-source simulation engine attracts research community contributions',
    'Full-stack approach: simulation + foundation model + robot deployment',
    'Academic pedigree: originated from 18-university research collaboration',
  ],
  vsGiants: 'Unlike Google DeepMind or NVIDIA (closed), Genesis bets on open-source simulation infra and community-driven data generation to build a competitive foundation model.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — building universal robotics foundation models from scratch. Zero-to-one innovation in physical AI.',
  aiDesignChallenges: [
    'Simulation visualization: making physics engine output comprehensible for non-roboticists',
    'Robot behavior authoring: designing interfaces for specifying and debugging robot tasks',
    'Developer experience: API and tooling design for open-source robotics platform',
  ],

  founders: [
    {
      name: 'Zhou Xian',
      role: 'Co-founder',
      background: 'CMU Robotics PhD. Initiated the Genesis open-source physics engine project with 18-university collaboration.',
    },
    {
      name: 'Théophile Gervet',
      role: 'Co-founder',
      background: 'Former vision-language model lead at Mistral AI, co-creator of Pixtral. CMU AI PhD. Founding member of Skild AI.',
    },
  ],
  whyBuilding: 'Believes unlocking unlimited physical labor through general-purpose robots will free humans to focus on creativity and curiosity.',
  beliefs: [
    'Open-source simulation accelerates the entire robotics field',
    'Universal foundation models can control any robot for any task',
    'Synthetic data + real-world interaction is the path to robust robot intelligence',
  ],
  greenFlags: [
    '$105M seed — one of the largest robotics seed rounds ever',
    'Tier-1 investors: Khosla, Eclipse, plus Eric Schmidt and HongShan as backers',
    'World-class team from CMU, Mistral, NVIDIA, Tesla Optimus, and original PyTorch creator',
    'Open-source strategy builds community moat and talent pipeline',
  ],
  redFlags: [
    'Pre-revenue and pre-product — high execution risk',
    'Robotics foundation models are unproven at commercial scale',
    'Competing against heavily funded rivals (Physical Intelligence $400M, Skild $4B valuation)',
  ],

  designTeam: {
    teamSize: 'Not publicly disclosed (research-heavy lab, ~40+ total staff, design team likely minimal or nonexistent)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Robot task specification and behavior authoring workflows',
        'Simulation parameter tuning and scenario design',
        'Failure mode visualization and debugging interfaces',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Robot performance benchmarking dashboards',
        'Sim-to-real transfer quality metrics',
        'Foundation model evaluation and comparison tools',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer-facing API documentation and playground',
        'Simulation visualization and 3D scene editor',
        'Open-source community portal and contribution tools',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Robotics researchers and engineers building general-purpose robots',
    secondary: 'Enterprise customers seeking to automate physical labor (logistics, manufacturing)',
  },
  userProblems: [
    'No universal foundation model exists for controlling diverse robot hardware',
    'Existing physics simulators are fragmented and lack generative capabilities',
    'Collecting real-world robot training data is slow and expensive',
    'Sim-to-real transfer remains unreliable for complex manipulation tasks',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Flat org structure, massive ownership, full transparency, everyone is an IC first. Voice in company direction.',
      url: 'https://genesis-ai.company/join-us/',
    },
    {
      source: 'techcrunch',
      sentiment: 'neutral',
      content: 'Stealth-to-launch timeline and heavy research hiring suggest an execution model optimized for deep technical milestones over broad GTM.',
      url: 'https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$105M seed round — one of the largest in robotics history',
      'Emerged from stealth July 2025 with 40+ researchers',
      'Backed by Eric Schmidt, Xavier Niel, and HongShan alongside top VCs',
    ],
    tam: '$100B+ (general-purpose robotics and physical AI)',
    ceiling: 'Very early innings: general-purpose robotics is a nascent market with massive long-term potential',
    tailwinds: [
      'AI hardware costs declining, enabling more simulation compute',
      'Growing demand for automation of physical labor (logistics, manufacturing)',
      'Foundation model paradigm proven in language/vision, now extending to robotics',
    ],
    headwinds: [
      'Robotics foundation models unproven at commercial scale',
      'Long time-to-market for physical products vs pure software',
      'Well-funded competition from Physical Intelligence, Skild, Figure, and big tech labs',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Emerging: open-source simulation engine could build community lock-in, but still very early',
  },

  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level A AI-native — building foundational robotics intelligence from scratch',
      'Open-source ethos and academic pedigree signal strong engineering culture',
      '$105M seed gives long runway for ambitious 0→1 work',
    ],
    whyNot: [
      'Pre-product stage with high uncertainty',
      'Research lab culture — design roles may not exist yet',
      'No known design team or open design positions',
    ],
    nextActions: [
      'Monitor for product launch and design hiring signals',
      'Track open-source community growth around Genesis simulation engine',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Genesis AI - Official Website', url: 'https://genesis-ai.company' },
    { title: 'TechCrunch - Genesis AI launches with $105M seed funding', url: 'https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/' },
    { title: 'PR Newswire - Genesis AI emerges from stealth', url: 'https://www.prnewswire.com/news-releases/genesis-ai-emerges-from-stealth-with-105m-to-build-universal-robotics-foundation-model-and-horizontal-platform-for-general-purpose-physical-ai-302495016.html' },
    { title: 'Genesis AI Careers - no Product Design roles found', url: 'https://genesis-ai.company/join-us/' },
    { title: 'Genesis AI Crunchbase Profile', url: 'https://www.crunchbase.com/organization/genesis-ai' },
  ],
};
