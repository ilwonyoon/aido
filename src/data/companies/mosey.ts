import { Company } from '../types';

export const mosey: Company = {
  id: 'mosey',
  name: 'Mosey',
  description: 'Compliance automation platform for state and local payroll requirements.',
  website: 'https://www.mosey.com',
    screenshot: '/screenshots/mosey-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://mosey.com/img/og-image.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['productivity'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$21M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2022-08',
      leadInvestors: ['Canaan'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Rippling',
      description: 'HR and payroll platform with compliance features.',
      whyTheyWin: 'Broad HR suite and strong distribution.',
    },
    {
      name: 'Gusto',
      description: 'Payroll and HR platform for SMBs.',
      whyTheyWin: 'SMB adoption and payroll depth.',
    },
    {
      name: 'Remote',
      description: 'Global payroll and compliance platform.',
      whyTheyWin: 'International coverage and compliance tooling.',
    },
  ],
  marketPosition: 'Automation-first compliance platform for multi-state payroll and hiring.',
  moat: [
    'Compliance automation for state-by-state requirements',
    'Workflow tooling for payroll and reporting',
    'Focus on distributed hiring compliance',
  ],
  vsGiants: 'Competes on compliance automation depth rather than broad HR suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may assist automation but core product is compliance workflows.',
  aiDesignChallenges: [
    'Designing clear compliance guidance',
    'Balancing automation with auditability',
    'Communicating deadlines and requirements to operators',
  ],

  // Founders & Vision
  founders: [
    { name: 'Alex Kehayias', role: 'Founder & CEO', background: 'Former engineering manager at Stripe, built and headed Stripe Atlas. Previously product manager at Morgan Stanley.' },
  ],
  whyBuilding: 'Make state and local compliance simple for distributed teams.',
  beliefs: [
    'Compliance should be automated where possible',
    'Distributed hiring is growing',
    'Clear workflows reduce compliance risk',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear compliance pain point',
    'Series A funding signal',
  ],
  redFlags: [
    'Complex regulatory landscape',
    'Enterprise adoption may be slow',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Compliance workflows and approval logic',
        'State-specific rules and automation',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Tracking compliance success and risk flags',
        'User feedback loops for clarity',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Compliance dashboards and filings UI',
        'Onboarding and setup flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'HR and finance teams managing multi-state compliance',
    secondary: 'Distributed teams hiring across states',
  },
  userProblems: [
    'Multi-state compliance is confusing and manual',
    'Deadlines and filings are easy to miss',
    'Small teams lack dedicated compliance expertise',
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
      'Clear compliance workflow UX problems',
      'Opportunity to reduce operational risk for teams',
    ],
    whyNot: [
      'Regulatory complexity slows iteration',
      'Crowded HR and payroll market',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Source', url: 'https://www.mosey.com' },
    { title: 'Source', url: 'https://techcrunch.com/2022/08/04/mosey-secures-fresh-capital-to-help-companies-comply-with-payroll-rules/' },
    { title: 'Source', url: 'https://startups.gallery/companies/mosey' }
  ],
};
