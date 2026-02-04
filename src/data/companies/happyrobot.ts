import { Company } from '../types';

export const happyrobot: Company = {
  id: 'happyrobot',
  name: 'Happyrobot',
  description:
    'Voice AI workers for logistics teams, focused on automating calls and coordination.',
  website: 'https://www.happyrobot.ai/',
    screenshot: '/screenshots/happyrobot-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/happyrobot-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$44M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$44M',
      date: '2024-11',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Logistics and freight companies needing call automation.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B funding for voice AI in logistics',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Voice AI adoption grows with logistics automation demand.',
    tailwinds: [
      'Labor shortages in logistics operations',
      'Rising adoption of voice AI agents',
      'Pressure to automate call-heavy workflows',
    ],
    headwinds: [
      'Accuracy requirements for voice automation',
      'Integration with legacy logistics systems',
      'Change management for operations teams',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Happyrobot delivers reliable voice automation at scale.',
  },

  // Competition
  competitors: [
    {
      name: 'Dialpad AI',
      description: 'AI voice platform for business communications.',
      whyTheyWin: 'Established enterprise footprint and voice tech.',
    },
    {
      name: 'Avaamo',
      description: 'AI agents for enterprise customer service.',
      whyTheyWin: 'Enterprise integrations and automation depth.',
    },
    {
      name: 'Intercom AI',
      description: 'AI customer support platform.',
      whyTheyWin: 'Product suite and customer base.',
    },
  ],
  marketPosition: 'Voice AI automation tailored to logistics operations.',
  moat: [
    'Logistics-specific voice workflows',
    'Operational integrations with freight systems',
    'Potential data advantage from call volume',
  ],
  vsGiants: 'Competes with general-purpose voice platforms by specializing in logistics.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Happyrobot is built around voice AI agents for logistics.',
  aiDesignChallenges: [
    'Trust and reliability for AI calls',
    'Human handoff and escalation UX',
    'Operational visibility into AI actions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Automate logistics calls so teams can focus on higher-value work.',
  beliefs: [
    'Voice AI can handle repetitive logistics coordination',
    'Operations teams need reliable automation tools',
    'Human oversight is essential for critical workflows',
  ],
  designPhilosophy: 'Reliable AI with clear handoffs and operational transparency.',
  greenFlags: [
    'Strong logistics automation tailwinds',
    'Series B funding for scale',
  ],
  redFlags: [
    'High reliability expectations',
    'Integration complexity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice agent workflow orchestration',
        'Escalation and fallback logic',
        'Permissions and compliance controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Call quality scoring',
        'Operational performance dashboards',
        'AI outcome analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Ops console and call monitoring',
        'Workflow configuration UI',
        'Notifications and alerts',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Logistics operations teams',
    secondary: 'Freight and supply chain managers',
  },
  userProblems: [
    'Operations teams spend too much time on calls',
    'Coordination and updates are manual',
    'AI automation must be reliable and auditable',
    'Legacy systems make integration difficult',
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
      'High-impact AI ops workflows',
      'Voice AI product design challenges',
    ],
    whyNot: [
      'Reliability requirements are high',
      'Operations-heavy product surface',
    ],
    nextActions: [
      'Track customer adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Happyrobot website', url: 'https://www.happyrobot.ai/' },
    { title: 'Happyrobot on startups.gallery', url: 'https://startups.gallery/companies/happyrobot' },
  ],
};
