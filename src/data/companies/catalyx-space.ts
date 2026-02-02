import { Company } from '../types';

export const catalyxSpace: Company = {
  id: 'catalyx-space',
  name: 'Catalyx Space',
  description: 'In-space infrastructure platform providing power, compute, and communications for space missions.',
  website: 'https://catalyx.space',
    screenshot: '/screenshots/catalyx-space-screenshot.png',
    ogImage: '/screenshots/catalyx-space-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$7.1M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$1.7M',
      date: '2025-01',
    },
    {
      stage: 'Seed',
      amount: '$5.4M',
      date: '2025-10',
      leadInvestors: ['Outlander VC'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Axiom Space',
      description: 'Commercial space infrastructure and modules.',
      whyTheyWin: 'Large capital backing and partnerships.',
    },
    {
      name: 'SpaceX (Starlink)',
      description: 'Satellite communications and infrastructure.',
      whyTheyWin: 'Scale and launch capabilities.',
    },
    {
      name: 'Varda',
      description: 'In-space manufacturing platform.',
      whyTheyWin: 'Operational in-space mission footprint.',
    },
  ],
  marketPosition: 'In-space infrastructure platform focused on scalable power, compute, and comms.',
  moat: [
    'Infrastructure-first approach for in-space services',
    'Modular platform for multiple mission types',
    'Early funding for platform buildout',
  ],
  vsGiants: 'Competes on modular infrastructure services rather than end-to-end mission platforms.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may support infrastructure operations but is not the core product.',
  aiDesignChallenges: [
    'Designing reliable infrastructure monitoring UX',
    'Communicating system health and constraints',
    'Balancing automation with mission safety',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Provide scalable infrastructure for space missions.',
  beliefs: [
    'Space missions need shared infrastructure',
    'Modularity increases mission speed and flexibility',
    'Reliable power and compute enable new space applications',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear infrastructure niche in space tech',
    'Seed funding signal',
  ],
  redFlags: [
    'Capital-intensive hardware development',
    'Long timelines for deployment',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'System operations and monitoring logic',
        'Automation workflows for mission control',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Reliability and uptime monitoring',
        'Incident response workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operations dashboards',
        'Mission configuration UX',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Space mission operators and satellite companies',
    secondary: 'Research teams building in-space systems',
  },
  userProblems: [
    'Space missions lack shared infrastructure services',
    'Power and compute are constrained in orbit',
    'Mission setup is costly and slow',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: [
      'Infrastructure-first space tech challenges',
      'Opportunity to design mission control UX',
    ],
    whyNot: [
      'Hardware and aerospace timelines are long',
      'High regulatory and operational risk',
    ],
    nextActions: [
      'Monitor for product design roles as platform matures',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Catalyx Space', url: 'https://catalyx.space' },
    { title: 'Catalyx Space Funding', url: 'https://catalyx.space/funding' },
    { title: 'Catalyx Space Seed (Business Wire)', url: 'https://www.businesswire.com/news/home/20251030616788/en/Catalyx-Space-Announces-5.4M-Seed-Round-to-Build-In-Space-Infrastructure' },
    { title: 'Catalyx Space on startups.gallery', url: 'https://startups.gallery/companies/catalyx-space' },
  ],
};
