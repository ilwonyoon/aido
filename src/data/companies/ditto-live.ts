import { Company } from '../types';

export const dittoLive: Company = {
  id: 'ditto-live',
  name: 'Ditto Live',
  description:
    'Edge connectivity platform for resilient device communication and synchronization.',
  website: 'https://www.ditto.com/',
    screenshot: '/screenshots/ditto-live-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/ditto-live-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$82M',
  fundingHistory: [
    { stage: 'Series B', amount: '$82M', date: '2025-03' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Teams building edge-connected devices and applications.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B stage with remote team',
      'Resilient edge connectivity focus',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Growing market: edge device connectivity and offline-first systems.',
    tailwinds: [
      'Growth of IoT and edge computing',
      'Need for resilient device communication',
      'Offline-first workflows in field operations',
    ],
    headwinds: [
      'Complex deployments across heterogeneous devices',
      'Competition from infrastructure incumbents',
      'Operational reliability expectations',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Ditto becomes a default edge connectivity layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Twilio IoT',
      description: 'IoT connectivity and messaging platform.',
      whyTheyWin: 'Scale and existing enterprise adoption.',
    },
    {
      name: 'Particle',
      description: 'IoT platform for device management and connectivity.',
      whyTheyWin: 'Developer tooling and hardware ecosystem.',
    },
    {
      name: 'AWS IoT',
      description: 'Cloud-based IoT services and device connectivity.',
      whyTheyWin: 'Cloud distribution and ecosystem.',
    },
  ],
  marketPosition: 'Resilient edge connectivity platform for device communication.',
  moat: [
    'Edge-first connectivity and sync focus',
    'Developer tooling for device networks',
    'Resilience in low-connectivity environments',
  ],
  vsGiants: 'Focuses on edge resilience vs cloud-first IoT stacks.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Ditto Live is connectivity infrastructure, not AI-native.',
  aiDesignChallenges: [
    'Visibility into device health and connectivity',
    'Reliability and incident workflows',
    'Developer UX for integrating device networks',
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
    'Make device connectivity resilient and reliable across edge environments.',
  beliefs: [
    'Edge connectivity must work even without reliable internet',
    'Developers need better tools for device networks',
    'Resilience is a core product requirement',
  ],
  designPhilosophy: 'Make complex connectivity systems understandable and reliable.',
  greenFlags: [
    'Growing demand for edge connectivity',
    'Clear product focus on resilience',
  ],
  redFlags: [
    'Infrastructure-heavy domain',
    'Competitive IoT market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Device sync and reliability rules',
        'Connection health workflows',
        'Permissions and access management',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Connectivity metrics and alerts',
        'Incident and outage analysis',
        'Device performance monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Device management dashboards',
        'Connectivity status and diagnostics UI',
        'Developer onboarding and setup',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'IoT and edge device teams',
    secondary: 'Developers building offline-capable apps',
  },
  userProblems: [
    'Device connectivity is unreliable in the field',
    'Edge systems need resilient synchronization',
    'Troubleshooting device networks is complex',
    'Cloud-first systems fail in offline scenarios',
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
      'Clear infrastructure value in edge connectivity',
      'Interesting reliability and observability UX challenges',
    ],
    whyNot: [
      'Infrastructure-heavy market',
      'Competitive IoT ecosystem',
    ],
    nextActions: [
      'Track product adoption and deployments',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:45:00',
  sources: [
    { title: 'Ditto website', url: 'https://www.ditto.com/' },
    { title: 'Ditto Live on startups.gallery', url: 'https://startups.gallery/companies/ditto-live' },
  ],
};
