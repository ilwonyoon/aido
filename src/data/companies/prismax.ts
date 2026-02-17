import type { Company } from '../types';

export const prismax: Company = {
  id: 'prismax',
  name: 'PrismaX',
  description: 'Decentralized robotics intelligence platform that scales teleoperation data collection and foundation models for physical AI, powered by crypto incentive mechanisms.',
  website: 'https://prismax.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/prismax-og.webp',
  category: 'ai-models' as const,
  aiTypes: ['foundation-model', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  industries: ['infrastructure'],
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$11M',
      date: '2025-06',
      leadInvestors: ['a16z CSX'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',
  competitors: [
    {
      name: 'Olis Robotics',
      description: 'Remote robot monitoring and error recovery platform for industrial automation',
      whyTheyWin: 'Established industrial customer base and proven remote diagnostics',
    },
    {
      name: 'Telexistence',
      description: 'Teleoperation robotics for retail and logistics with avatar-like remote control',
      whyTheyWin: 'Live deployments in convenience stores and retail environments in Japan',
    },
    {
      name: 'Scale AI',
      description: 'Data labeling and AI training data platform serving enterprise and government',
      whyTheyWin: 'Dominant position in AI data labeling with $14B valuation and deep enterprise relationships',
    },
  ],
  marketPosition: 'First mover in decentralized teleoperation data marketplace for robotics foundation models',
  moat: [
    'Data flywheel: teleop generates training data that improves models which make teleop faster',
    'Crypto incentive layer attracts distributed operator workforce at scale',
    'a16z CSX backing provides robotics ecosystem access',
  ],
  vsGiants: 'Differentiated by decentralized approach — Google/NVIDIA collect proprietary robotics data internally, PrismaX crowdsources it via token incentives',
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — building robotics foundation models from scratch using novel decentralized teleoperation data pipeline. No product exists without AI.',
  aiDesignChallenges: [
    'Teleoperation UX: designing intuitive remote control interfaces for diverse robot hardware',
    'Data quality visualization: showing operators and customers data contribution value and model improvement',
    'Incentive transparency: making token-based reward mechanics understandable to non-crypto users',
  ],
  founders: [
    {
      name: 'Bayley Wang',
      role: 'CEO & Co-founder',
      background: 'Decade+ robotics researcher, worked with MIT team on 2012 DARPA Robotics Challenge. Also co-founded Kura Technologies and Carmel Sciences.',
    },
    {
      name: 'Chyna Qu',
      role: 'Co-founder',
      background: 'Background in blockchain and decentralized systems, expertise in crypto incentive design for crowdsourcing data at scale.',
    },
  ],
  whyBuilding: 'Physical AI and robotics cannot scale without affordable, high-quality data. PrismaX creates a fair-value marketplace where data producers are compensated for powering foundation models.',
  beliefs: [
    'Robotics data should be crowdsourced and fairly compensated, not hoarded by big labs',
    'Teleoperation is the bridge between human skill and robot autonomy',
    'Decentralized incentives solve the data scarcity problem that holds back physical AI',
  ],
  greenFlags: [
    'a16z CSX led $11M seed — strong signal for robotics AI thesis',
    'Novel data flywheel model combining Web3 incentives with robotics training',
    'Growing physical AI market with massive unmet data needs',
  ],
  redFlags: [
    'Very early stage — launched June 2025, pre-revenue',
    'Web3/token dependency adds regulatory and market risk',
    'Robotics foundation models are extremely hard to build and validate',
  ],
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Teleoperation control mapping and robot behavior configuration',
        'Data validation pipeline design for quality assurance',
        'Operator task assignment and skill-matching logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Data contribution quality scoring and feedback',
        'Model accuracy benchmarking dashboards',
        'Operator performance metrics and reward transparency',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Remote teleoperation control interface for multiple robot types',
        'Data marketplace and contribution portal',
        'Token reward tracking and payout dashboard',
      ],
    },
  },
  productStage: '0→1',
  targetAudiences: {
    primary: 'Robotics companies needing large-scale training data for foundation models',
    secondary: 'Teleoperators and data contributors earning rewards for remote robot control',
  },
  userProblems: [
    'Robotics companies cannot afford in-house data collection at the scale needed for foundation models',
    'No standardized teleoperation protocol exists — each company builds siloed solutions',
    'Physical AI data is orders of magnitude harder to collect than text or image data',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$11M seed led by a16z CSX (June 2025)',
      'Launched at a16z CSX Demo Day',
      'Supports Unitree G1, Reachy 2, MIT Mini-Cheetah robots',
    ],
    tam: '$50B+ (robotics data and teleoperation market)',
    ceiling: 'Early innings: robotics data infrastructure is nascent with growing demand from autonomous systems.',
    tailwinds: [
      'Explosion of humanoid robot development (Tesla, Figure, 1X)',
      'Foundation model approach proven in language/vision, now extending to robotics',
      'Growing demand for physical AI training data',
    ],
    headwinds: [
      'Crypto/token model faces regulatory uncertainty',
      'Robotics data collection inherently slower than digital data',
      'Competition from well-funded internal data efforts at big labs',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Early: data flywheel not yet proven at scale, but crypto incentives could unlock network effects',
  },
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level A AI-native — building robotics foundation models from scratch',
      'Novel design challenges at intersection of teleoperation UX and data marketplace',
      'a16z backing signals strong institutional conviction',
    ],
    whyNot: [
      'Very early stage with unproven product-market fit',
      'Web3/crypto dependency adds complexity and risk',
      'No visible design team or design leadership yet',
    ],
    nextActions: [
      'Monitor for Product Design job postings',
      'Watch for product launch and user traction signals',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'PrismaX Official Blog — $11M Raise Announcement', url: 'https://blog.prismax.ai/prismax-raises-11m-ai-robotics-teleoperation' },
    { title: 'The Robot Report — PrismaX Launches', url: 'https://www.therobotreport.com/prismax-launches-with-11m-to-scale-virtual-datasets-for-robotics-foundation-models/' },
    { title: 'Crunchbase — PrismaX Company Profile', url: 'https://www.crunchbase.com/organization/prismax' },
    { title: 'PrismaX Careers — No Product Design roles found', url: 'https://www.prismax.ai/careers' },
  ],
};
