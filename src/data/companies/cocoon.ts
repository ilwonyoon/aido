import { Company } from '../types';

export const cocoon: Company = {
  id: 'cocoon',
  name: 'Cocoon',
  description: 'Leave management platform for HR teams.',
  website: 'https://cocoon.com',
    screenshot: '/screenshots/cocoon-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/cocoon-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Navia',
      description: 'Leave of absence management platform.',
      whyTheyWin: 'Established HR partnerships and workflows.',
    },
    {
      name: 'Level',
      description: 'Leave management for employers and employees.',
      whyTheyWin: 'HR integrations and compliance focus.',
    },
    {
      name: 'Tilt',
      description: 'Leave administration for enterprise HR teams.',
      whyTheyWin: 'Compliance expertise and enterprise footprint.',
    },
  ],
  marketPosition: 'HR-focused leave management with a modern product experience.',
  moat: [
    'Specialization in leave management workflows',
    'Compliance-heavy HR process focus',
    'Automation of leave tracking and approvals',
  ],
  vsGiants: 'Competes on focused HR leave workflows rather than broad HR suites.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Leave management platform is not AI-first.',
  aiDesignChallenges: [
    'Designing compliant leave workflows',
    'Balancing automation with HR oversight',
    'Communicating policy requirements clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mahima Chawla',
      role: 'Co-founder & CEO',
      background: 'Former Product Manager at Square; founded Cocoon in 2020 to simplify the complicated world of employee leave for HR teams.',
    },
    {
      name: 'Amber Feng',
      role: 'Co-founder & CTO',
      background: 'Former Business Lead for Corporate Card & Banking at Stripe; technical co-founder building Cocoon\'s leave management platform.',
    },
    {
      name: 'Lauren Dai',
      role: 'Co-founder & COO',
      background: 'Former Stripe and Square employee; co-founded Cocoon to automate compliance, claims, and payroll for employee leave.',
    },
  ],
  whyBuilding: 'Simplify and modernize leave management for HR teams.',
  beliefs: [
    'Leave administration should be simpler and clearer',
    'Compliance needs better tooling',
    'Modern UX helps HR teams move faster',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear HR workflow pain point',
    'Specialized product focus',
  ],
  redFlags: [
    'Compliance and regulation complexity',
    'Enterprise sales cycles in HR',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Leave policy logic and approvals',
        'Workflow automation for HR teams',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Tracking leave compliance and accuracy',
        'Feedback loops for HR workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'HR dashboards and policy management UI',
        'Employee self-service workflows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'HR and people operations teams',
    secondary: 'Employees managing leave requests',
  },
  userProblems: [
    'Leave policies are complex to manage',
    'Manual approval workflows cause delays',
    'Compliance risk is high without good tooling',
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
      'Opportunity to modernize HR workflows',
      'Clear compliance UX challenges',
    ],
    whyNot: [
      'Enterprise HR sales cycles',
      'Not an AI-first product',
    ],
    nextActions: [
      'Monitor for design roles as product evolves',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:05:37',
  sources: [
    { title: 'Source', url: 'https://cocoon.com' },
    { title: 'Source', url: 'https://cocoon.com/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/cocoon' }
  ],
};
