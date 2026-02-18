import { Company } from '../types';

export const stable: Company = {
  id: 'stable',
  name: 'Stable',
  description: 'Virtual address + mailroom for startups.',
  website: 'https://www.usestable.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  screenshot: '/screenshots/stable-screenshot.png',
  ogImage: '/screenshots/stable-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'smb'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '~$150K',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '~$150K',
      date: '2020-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '1,800+ businesses',

  // Competition
  competitors: [
    {
      name: 'Earth Class Mail',
      description: 'Virtual mailbox and address service for businesses',
      whyTheyWin: 'Established brand with nationwide coverage',
    },
    {
      name: 'Anytime Mailbox',
      description: 'Virtual mailbox with 2,000+ locations worldwide',
      whyTheyWin: 'Largest network of physical locations',
    },
    {
      name: 'iPostal1',
      description: 'Digital mailbox service for businesses and individuals',
      whyTheyWin: 'Wide location variety with competitive pricing',
    },
  ],
  marketPosition: 'YC-backed virtual address platform focused on compliance guidance for startups',
  moat: [
    'Compliance-first approach: guides address switching with IRS/state',
    'YC network for startup customer acquisition',
    'Automation of mail scanning and forwarding workflows',
  ],
  vsGiants: 'Competes with traditional mail services (UPS, FedEx Office) on convenience and automation for distributed teams',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is a minor feature; core product is virtual address and mail management with some automation.',
  aiDesignChallenges: [
    'Mail scanning accuracy and OCR quality display',
    'Address compliance workflow UX across different states',
    'Notification design for incoming mail and packages',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sarah Ahmad',
      role: 'Co-founder & CEO',
      background: 'Founded Stable out of personal pain managing business mail as a remote founder. YC W20 batch.',
    },
    {
      name: 'Collin Pham',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder building the virtual mailroom platform. YC W20 batch.',
    },
  ],
  whyBuilding: 'Business registration and mail systems are stuck in the pre-remote era. Stable makes it simple for businesses to start and operate from anywhere.',
  beliefs: [
    'Remote-first businesses need modern infrastructure',
    'Compliance should be automated, not manual',
    'Physical mail is still critical for business operations',
  ],
  greenFlags: [
    'YC-backed with notable angel investors (Jack Altman, Geoff Donaker)',
    '1,800+ paying customers including Ethos Life and Hipcamp',
    'Clear product-market fit in growing remote work trend',
  ],
  redFlags: [
    'Very small team with limited funding (~$150K seed)',
    'Low-margin physical operations (mail handling)',
    'Not AI-native — limited design complexity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (small team, likely no dedicated designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'Address compliance workflow logic',
        'Mail forwarding rule configuration',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Mail scanning quality verification',
        'Address validation accuracy',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Mail dashboard and inbox UI',
        'Address management settings',
        'Mobile notification experience',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Remote-first startups needing a permanent business address',
    secondary: 'Distributed teams managing multi-state compliance',
  },
  userProblems: [
    'Need a legitimate business address without a physical office',
    'State compliance for business registration is confusing and manual',
    'Physical mail piles up with no one to manage it remotely',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 2,
    whyJoin: ['YC-backed startup with clear PMF'],
    whyNot: [
      'Level D AI — minimal design complexity',
      'Very small team with limited funding',
      'Not in AI-native design space',
    ],
    nextActions: ['Monitor for funding news'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '1,800+ business customers',
    signals: [
      'YC W20 batch graduate',
      'Notable angel investors from Lattice, Yelp, Apartment List',
    ],
    tam: '$5B+ (virtual office and mailroom market)',
    marketShare: 'Niche player in startup segment',
    ceiling: 'Expanding from startups to larger distributed companies',
    tailwinds: ['Remote work acceleration', 'State-by-state compliance complexity'],
    headwinds: ['Low barriers to entry', 'Physical operations limit margins'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: compliance expertise + YC network',
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Stable Official Website', url: 'https://www.usestable.com/' },
    { title: 'Stable About Page', url: 'https://www.usestable.com/about' },
    { title: 'Stable - Y Combinator', url: 'https://www.ycombinator.com/companies/stable' },
    { title: 'Stable - Crunchbase', url: 'https://www.crunchbase.com/organization/stable-bef3' },
    { title: 'Stable Careers - no Product Design roles found', url: 'https://www.workatastartup.com/companies/stable' },
  ],
};
