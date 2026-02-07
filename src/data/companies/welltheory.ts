import { Company } from '../types';

export const welltheory: Company = {
  id: 'welltheory',
  name: 'WellTheory',
  description: 'Digital health platform focused on autoimmune care.',
  website: 'https://www.welltheory.com',
  screenshot: '/screenshots/welltheory-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/welltheory-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2c'],
  category: 'vertical-saas' as const,

  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$14M',
  fundingHistory: [
    { stage: 'Series A', amount: '$14M', date: '2025-10' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Omada Health',
      description: 'Digital health programs for chronic conditions.',
      whyTheyWin: 'Enterprise partnerships and clinical programs.',
    },
    {
      name: 'Virta Health',
      description: 'Digital health program for metabolic care.',
      whyTheyWin: 'Clinical evidence and enterprise contracts.',
    },
    {
      name: 'Lark',
      description: 'Digital health coaching and monitoring.',
      whyTheyWin: 'Large payer and employer partnerships.',
    },
  ],
  marketPosition: 'Digital autoimmune care program with focus on personalized support.',
  moat: [
    'Specialization in autoimmune care',
    'Programmatic approach to digital health',
    'Potential partnerships with payers and employers',
  ],
  vsGiants: 'Competes on specialization and program focus rather than broad chronic care suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may support care workflows but is not the sole product.',
  aiDesignChallenges: [
    'Designing patient trust and adherence workflows',
    'Balancing personalization with clinical safety',
    'Communicating progress and outcomes clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ellen Rudolph',
      role: 'Co-founder & CEO',
      background: 'Previously led Product at Oscar Health and Everlane. Launched WellTheory in 2022 after autoimmune disease left her bedridden at 25.',
    },
    {
      name: 'Claire Rudolph',
      role: 'Co-founder',
      background: 'Ellen\'s sister. Has an autoimmune diagnosis that inspired the founding of WellTheory.',
    },
    {
      name: 'Wallace Torres',
      role: 'Co-founder',
      background: 'Wife struggled with autoimmune disease. Co-founded WellTheory to improve care for autoimmune patients.',
    },
  ],
  whyBuilding: 'Provide accessible digital care for people with autoimmune conditions.',
  beliefs: [
    'Patients need personalized support at scale',
    'Digital programs can improve chronic care outcomes',
    'Trust and safety are critical in healthcare',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Large healthcare need in autoimmune care',
    'Clear program-based value proposition',
  ],
  redFlags: [
    'Healthcare adoption is slow and regulated',
    'Clinical outcomes must be proven',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Care plan logic and personalization',
        'Scheduling and adherence workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Outcome tracking and program evaluation',
        'Patient feedback loops',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Patient app experience and coaching UI',
        'Progress tracking dashboards',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Patients with autoimmune conditions',
    secondary: 'Employers and payers seeking digital care programs',
  },
  userProblems: [
    'Autoimmune care is fragmented and hard to navigate',
    'Patients lack continuous support outside clinics',
    'Tracking symptoms and progress is difficult',
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
      'Mission-driven healthcare product',
      'Opportunity to design patient-centered UX',
    ],
    whyNot: [
      'Clinical constraints slow iteration',
      'Outcomes-based validation needed',
    ],
    nextActions: [
      'Monitor for design roles as product scales',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:05:37',
  sources: [
    { title: 'WellTheory', url: 'https://www.welltheory.com' },
    { title: 'WellTheory on startups.gallery', url: 'https://startups.gallery/companies/welltheory' },
  ],
};
