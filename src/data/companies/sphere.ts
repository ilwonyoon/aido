import { Company } from '../types';

export const sphere: Company = {
  id: 'sphere',
  name: 'Sphere',
  description: 'Global tax compliance platform for modern finance teams.',
  website: 'https://getsphere.com',
  screenshot: '/screenshots/sphere-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/sphere-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'fintech'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$21M',
  fundingHistory: [
    { stage: 'Series A', amount: '$21M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Avalara',
      description: 'Sales tax compliance and automation platform.',
      whyTheyWin: 'Large partner ecosystem and enterprise adoption.',
    },
    {
      name: 'TaxJar',
      description: 'Sales tax automation for ecommerce businesses.',
      whyTheyWin: 'Strong SMB and ecommerce integrations.',
    },
    {
      name: 'Vertex',
      description: 'Enterprise tax automation and compliance software.',
      whyTheyWin: 'Enterprise-scale tax compliance footprint.',
    },
  ],
  marketPosition: 'Modern tax compliance platform aimed at global operations teams.',
  moat: [
    'Workflow focus on global tax operations',
    'Automation for compliance-heavy finance teams',
    'Potential integrations across finance systems',
  ],
  vsGiants: 'Competes on modern UX and automation rather than legacy compliance tools.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI likely supports compliance workflows but is not the core product.',
  aiDesignChallenges: [
    'Designing compliance workflows with high auditability',
    'Balancing automation with manual review for taxes',
    'Communicating regulatory changes clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Simplify and automate global tax compliance for finance teams.',
  beliefs: [
    'Tax compliance should be automated where possible',
    'Finance teams need clarity and auditability',
    'Global operations require unified workflows',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear enterprise compliance pain point',
    'Series A stage suggests growing adoption',
  ],
  redFlags: [
    'Regulatory complexity across jurisdictions',
    'Long sales cycles in finance teams',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Compliance workflow logic and approvals',
        'Automation rules for tax calculations',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Auditability checks and compliance reporting',
        'Quality tracking for tax calculations',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Finance dashboards and reporting views',
        'Workflow UI for compliance tasks',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Finance and tax compliance teams',
    secondary: 'Controllers and finance leadership',
  },
  userProblems: [
    'Global tax compliance is complex and fragmented',
    'Manual processes slow down close and reporting',
    'Finance teams need better visibility into obligations',
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
      'Opportunity to modernize complex compliance UX',
      'Enterprise finance workflows with high impact',
    ],
    whyNot: [
      'Regulatory complexity slows iteration',
      'Challenging enterprise sales cycles',
    ],
    nextActions: [
      'Watch for product design openings and team signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Sphere', url: 'https://getsphere.com' },
    { title: 'Sphere Careers', url: 'https://getsphere.com/join-us' },
    { title: 'Sphere on startups.gallery', url: 'https://startups.gallery/companies/sphere' },
  ],
};
