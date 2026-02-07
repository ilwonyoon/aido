import { Company } from '../types';

export const console: Company = {
  id: 'console',
  name: 'Console',
  description: 'AI coworker for IT teams to automate support tasks.',
  website: 'https://console.co',
    screenshot: '/screenshots/console-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/console-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$23M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$23M',
      date: '2025-09',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Moveworks',
      description: 'AI platform for IT support automation.',
      whyTheyWin: 'Large enterprise adoption and broad workflow coverage.',
    },
    {
      name: 'Aisera',
      description: 'AI service desk automation for IT teams.',
      whyTheyWin: 'Enterprise IT integrations and established buyer base.',
    },
    {
      name: 'ServiceNow (AI)',
      description: 'Enterprise ITSM platform with AI features.',
      whyTheyWin: 'Deep enterprise footprint and platform lock-in.',
    },
  ],
  marketPosition: 'AI-native coworker for IT operations and service desk workflows.',
  moat: [
    'AI-first automation for IT support tasks',
    'Workflow integration across IT systems',
    'Focus on reducing IT team workload',
  ],
  vsGiants: 'Competes on AI-native UX rather than legacy ITSM platforms.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to the IT automation experience.',
  aiDesignChallenges: [
    'Designing trustworthy IT automation and approvals',
    'Handling exceptions and escalations cleanly',
    'Communicating AI actions in compliance-sensitive workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Andrei Serban',
      role: 'Co-founder & CEO',
      background: 'Former product lead at Rippling on apps and integrations; previously founded coding security startup Fuzzbuzz (acquired by Rippling).',
    },
    {
      name: 'Neal Chandra',
      role: 'Co-founder',
      background: 'Co-founded Console in 2024 in San Francisco.',
    },
  ],
  whyBuilding: 'Make IT support faster by automating routine workflows.',
  beliefs: [
    'IT teams should focus on strategic work, not tickets',
    'Automation must be safe and auditable',
    'Great IT tools reduce downtime and friction',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear IT automation pain point',
    'Series A funding suggests traction',
  ],
  redFlags: [
    'Enterprise IT workflows can be slow to change',
    'High expectations for reliability and security',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Automation rules and escalation logic',
        'AI action workflows for IT tasks',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Monitoring automation success rates',
        'User feedback loops for workflow accuracy',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'IT operations dashboards',
        'Ticketing and action status UIs',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'IT support teams and service desk managers',
    secondary: 'IT operations leaders',
  },
  userProblems: [
    'IT tickets are repetitive and slow to resolve',
    'Manual workflows cause delays and errors',
    'Service desk teams lack automation coverage',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (in-person)',
      type: 'full-time',
      url: 'https://console.com/careers',
      aboutRole: 'Design AI-powered IT support and automation experiences.',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'AI automation with clear enterprise impact',
      'Complex workflow design for IT teams',
    ],
    whyNot: [
      'Enterprise adoption cycles can be slow',
      'Strong incumbents in ITSM',
    ],
    nextActions: [
      'Review role details for team and scope',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Console', url: 'https://console.co' },
    { title: 'Console Careers', url: 'https://console.com/careers' },
    { title: 'Console on startups.gallery', url: 'https://startups.gallery/companies/console' },
  ],
};
