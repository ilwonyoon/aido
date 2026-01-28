import { Company } from '../types';

export const pallet: Company = {
  id: 'pallet',
  name: 'Pallet',
  description: 'AI workers for logistics operations and back-office workflows.',
  website: 'https://pallet.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Project44',
      description: 'Logistics visibility platform for tracking freight.',
      whyTheyWin: 'Deep carrier integrations and enterprise adoption.',
    },
    {
      name: 'FourKites',
      description: 'Supply chain visibility and predictive analytics.',
      whyTheyWin: 'Large network and established logistics partnerships.',
    },
    {
      name: 'Samsara',
      description: 'Connected operations platform with fleet and logistics tooling.',
      whyTheyWin: 'Hardware + software platform footprint.',
    },
  ],
  marketPosition: 'AI automation platform for logistics operations and workflow execution.',
  moat: [
    'Workflow automation tailored to logistics operations',
    'AI agent approach to back-office tasks',
    'Operational focus on freight and supply chain teams',
  ],
  vsGiants: 'Competes on AI-native automation rather than legacy logistics suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the primary differentiator for automating logistics workflows.',
  aiDesignChallenges: [
    'Designing reliable agent workflows for operational tasks',
    'Exception handling and human-in-the-loop approvals',
    'Trust and auditability for AI-driven decisions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Automate manual logistics operations with AI workers.',
  beliefs: [
    'Operations teams need AI that can execute, not just summarize',
    'Logistics workflows are ripe for automation',
    'Human oversight is essential for operational reliability',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear automation value proposition for logistics teams',
    'Series B stage indicates market traction',
  ],
  redFlags: [
    'Operational complexity and variability in logistics data',
    'Established incumbents with large enterprise contracts',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow logic for logistics tasks',
        'Approval and exception routing',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring automation accuracy and time saved',
        'Feedback loops for failed task resolution',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operational dashboards for logistics teams',
        'Task queue UI and audit history',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Logistics and supply chain operations teams',
    secondary: 'Freight brokers and 3PL operators',
  },
  userProblems: [
    'Manual back-office logistics tasks are time-consuming',
    'Operational data lives across too many systems',
    'Exception handling slows down freight operations',
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
    fitScore: 5,
    whyJoin: [
      'AI automation for a large operational market',
      'Complex workflow design challenges',
    ],
    whyNot: [
      'Heavy enterprise sales cycles in logistics',
      'Hard to displace entrenched incumbents',
    ],
    nextActions: [
      'Monitor for design leadership roles as team scales',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Pallet', url: 'https://pallet.com' },
    { title: 'Pallet Jobs (Greenhouse)', url: 'https://boards.greenhouse.io/pallet' },
    { title: 'Pallet on startups.gallery', url: 'https://startups.gallery/companies/pallet' },
  ],
};
