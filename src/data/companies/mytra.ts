import { Company } from '../types';

export const mytra: Company = {
  id: 'mytra',
  name: 'Mytra',
  description:
    'Software-defined industrial robotics platform that automates material handling with AI-powered robotics and intelligence.',
  website: 'https://mytra.ai/',
    screenshot: '/screenshots/mytra-screenshot.png',
  headquarters: 'Brisbane, CA',
  region: 'other-us' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/mytra-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: 'Unknown',
  totalFunding: '$200M+',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$78M',
      date: '2024-07',
    },
    {
      stage: 'Series C',
      amount: '$120M',
      date: '2026-01',
      leadInvestors: ['Avenir Growth Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Fortune 100 food company and a Fortune 500 industrial supply distributor (per funding announcement).',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C: $120M led by Avenir Growth Capital (Jan 2026)',
      'Total funding reported as $200M+',
      'Expansion into large enterprise deployments',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: autonomous material handling still scaling in warehouses.',
    tailwinds: [
      'Labor shortages in logistics and warehousing',
      'Rising demand for automation in supply chains',
      'AI/robotics adoption accelerating in enterprise ops',
    ],
    headwinds: [
      'Long deployment cycles in industrial environments',
      'High hardware and integration costs',
      'Trust and safety requirements for robotics',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Mytra becomes the default software-defined robotics platform.',
  },

  // Competition
  competitors: [
    {
      name: 'Locus Robotics',
      description: 'Warehouse robotics platform for fulfillment.',
      whyTheyWin: 'Large deployments and operational experience.',
    },
    {
      name: '6 River Systems',
      description: 'Robotics solutions for warehouse automation.',
      whyTheyWin: 'Enterprise customer base and fulfillment focus.',
    },
    {
      name: 'Symbotic',
      description: 'AI-powered warehouse automation platform.',
      whyTheyWin: 'Scale and deep enterprise relationships.',
    },
  ],
  marketPosition: 'Software-defined robotics platform for material handling automation.',
  moat: [
    'Integrated robotics + software platform',
    'Focus on AI-driven autonomy and coordination',
    'Enterprise deployments with large customers',
  ],
  vsGiants: 'Focuses on flexible software-defined robotics rather than fixed automation systems.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Mytra relies on AI and software-defined robotics to automate industrial workflows.',
  aiDesignChallenges: [
    'Human-robot interaction and safety UX',
    'Operational visibility for autonomous systems',
    'Trust and override controls for warehouse teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Vijay Sankaran',
      role: 'Co-founder & CEO',
      background: 'Co-founded Mytra to build software-defined industrial robotics.',
    },
    {
      name: 'Aayush Shah',
      role: 'Co-founder',
      background: 'Co-founded Mytra and leads technical development.',
    },
    {
      name: 'Arvind Krishnaswamy',
      role: 'Co-founder',
      background: 'Co-founded Mytra and leads engineering.',
    },
  ],
  whyBuilding:
    'Enable autonomous material handling with software-defined robotics that scale across warehouses.',
  beliefs: [
    'Robotics should be configurable like software',
    'AI can unlock flexible automation in logistics',
    'Operational visibility is essential for trust',
  ],
  designPhilosophy: 'Make autonomous operations transparent and controllable for teams.',
  greenFlags: [
    'Large Series C round with top-tier investors',
    'Enterprise deployments with major customers',
  ],
  redFlags: [
    'Hardware-heavy business with long sales cycles',
    'Operational and safety risks in industrial settings',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Autonomy policies and safety guardrails',
        'Coordination flows between robots and humans',
        'Exception handling and manual override UX',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Operational KPIs and throughput dashboards',
        'Reliability and incident tracking',
        'Simulation and testing UX for deployments',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Warehouse control center interfaces',
        'Setup and deployment workflows',
        'Operator training and onboarding tools',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Warehouse operations and logistics teams',
    secondary: 'Enterprise automation and robotics leaders',
  },
  userProblems: [
    'Labor shortages make fulfillment unreliable',
    'Warehouse operations are complex and hard to automate',
    'Existing automation lacks flexibility and adaptability',
    'Operators need real-time visibility into autonomous systems',
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
      'High-impact robotics product with strong funding',
      'Complex human-robot interaction challenges',
    ],
    whyNot: [
      'Hardware-heavy business with longer cycles',
      'Industrial domain with high operational risk',
    ],
    nextActions: [
      'Monitor customer deployments and product maturity',
      'Track design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Source', url: 'https://mytra.ai/' },
    { title: 'Source', url: 'https://mytra.ai/company' },
    { title: 'Source', url: 'https://mytra.ai/news/series-c' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/mytra-raises-120-million-series-c-to-scale-its-industrial-robotics-platform-302353228.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/mytra' }
  ],
};
