import { Company } from '../types';

export const sauronSystems: Company = {
  id: 'sauron-systems',
  name: 'Sauron Systems',
  description:
    'Home security and monitoring system focused on real-time perception, analytics, and incident response.',
  website: 'https://www.sauron.systems/',
    screenshot: '/screenshots/sauron-systems-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/sauron-systems-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['developer-tools', 'security'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$18M',
  fundingHistory: [
    { stage: 'Seed', amount: '$18M', date: '2024-12' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Homeowners and property teams deploying smart security systems.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage with remote team',
      'Consumer security platform focus',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: smart home perception and analytics is still evolving.',
    tailwinds: [
      'Rising demand for smart home security',
      'Sensor costs declining',
      'Consumer adoption of subscription security services',
    ],
    headwinds: [
      'Crowded consumer security market',
      'Privacy concerns around home monitoring',
      'Hardware deployment complexity',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Sauron builds trusted perception and analytics.',
  },

  // Competition
  competitors: [
    {
      name: 'Ring',
      description: 'Consumer smart home security and cameras.',
      whyTheyWin: 'Distribution and brand recognition.',
    },
    {
      name: 'Nest',
      description: 'Google-backed smart home security devices.',
      whyTheyWin: 'Ecosystem integrations and hardware adoption.',
    },
    {
      name: 'SimpliSafe',
      description: 'Home security and monitoring services.',
      whyTheyWin: 'Subscription model and consumer trust.',
    },
  ],
  marketPosition: 'Perception-driven home security system with real-time analytics.',
  moat: [
    'Perception-focused security analytics',
    'Integrated hardware and software system',
    'Potential for higher-quality incident detection',
  ],
  vsGiants: 'Focuses on perception and analytics depth vs commodity cameras.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Perception and analytics are core to the security product.',
  aiDesignChallenges: [
    'Trust and explainability of detection events',
    'Privacy controls for home monitoring',
    'Reducing false positives and alert fatigue',
  ],

  // Founders & Vision
  founders: [
    { name: 'Jack Abraham', role: 'Co-Founder', background: 'Serial entrepreneur. Founded Sauron in 2024 after security frustrations at his Miami Beach residence.' },
    { name: 'Kevin Hartz', role: 'Co-Founder', background: 'Co-founded Eventbrite. Co-founded Sauron in 2024 for military-grade home security.' },
    { name: 'Vasumathi Raman', role: 'Co-Founder', background: 'Co-founded Sauron in 2024.' },
  ],
  whyBuilding:
    'Deliver a perception-first home security system that improves detection and response.',
  beliefs: [
    'Security should be proactive and intelligent',
    'Perception quality drives trust',
    'Home monitoring must respect privacy',
  ],
  designPhilosophy: 'Make security alerts clear, trustworthy, and actionable.',
  greenFlags: [
    'Series A momentum',
    'Clear consumer security use case',
  ],
  redFlags: [
    'Privacy concerns in home monitoring',
    'Hardware deployment complexity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Alert logic and incident workflows',
        'Privacy and consent controls',
        'Detection sensitivity configuration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Detection accuracy metrics',
        'Alert review and audit history',
        'User feedback loops for tuning',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Security monitoring dashboards',
        'Incident history and playback UX',
        'Device setup and onboarding',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Homeowners seeking smart security',
    secondary: 'Property managers and operators',
  },
  userProblems: [
    'Traditional security systems generate too many false alerts',
    'Home monitoring lacks clear context for incidents',
    'Setup and configuration can be complex',
    'Users want more trust and transparency in alerts',
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
      'Clear product-market need in smart security',
      'Strong design leverage in trust and alert UX',
    ],
    whyNot: [
      'Hardware complexity',
      'Privacy risks',
    ],
    nextActions: [
      'Track product launches and customer adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:45:00',
  sources: [
    { title: 'Source', url: 'https://www.sauron.systems/' },
    { title: 'Source', url: 'https://startups.gallery/companies/sauron-systems' }
  ],
};
