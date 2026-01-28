import { Company } from '../types';

export const numeral: Company = {
  id: 'numeral',
  name: 'Numeral',
  description: 'Ecommerce sales tax automation platform.',
  website: 'https://www.numeralhq.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'sales-marketing'],

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
      name: 'Avalara',
      description: 'Sales tax compliance and automation platform.',
      whyTheyWin: 'Large partner ecosystem and enterprise adoption.',
    },
    {
      name: 'TaxJar',
      description: 'Sales tax automation for ecommerce businesses.',
      whyTheyWin: 'Strong ecommerce integrations.',
    },
    {
      name: 'Vertex',
      description: 'Enterprise tax automation and compliance software.',
      whyTheyWin: 'Enterprise scale and deep tax expertise.',
    },
  ],
  marketPosition: 'Modern sales tax automation for ecommerce businesses.',
  moat: [
    'Ecommerce-focused tax workflows',
    'Automation for compliance-heavy teams',
    'Potential integrations with ecommerce platforms',
  ],
  vsGiants: 'Competes on modern UX and automation rather than legacy compliance tools.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI likely supports automation but is not the sole product.',
  aiDesignChallenges: [
    'Designing compliance workflows with auditability',
    'Balancing automation with manual review',
    'Communicating tax obligations clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Make sales tax compliance easier for ecommerce teams.',
  beliefs: [
    'Tax compliance should be automated where possible',
    'Ecommerce teams need clarity on obligations',
    'Great UX can reduce compliance anxiety',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear compliance pain point',
    'Modern ecommerce focus',
  ],
  redFlags: [
    'Regulatory complexity across jurisdictions',
    'Competitive tax automation market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Compliance logic and approvals',
        'Automation rules for filings',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Auditability checks and reporting',
        'Feedback loops for compliance errors',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Tax dashboards and reporting views',
        'Workflow UI for filings and registrations',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Ecommerce finance and tax teams',
    secondary: 'SMB founders handling compliance',
  },
  userProblems: [
    'Sales tax rules are complex and changing',
    'Manual filings are time-consuming',
    'Visibility into compliance status is limited',
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
      'Opportunity to simplify compliance UX',
      'Large and sticky ecommerce use case',
    ],
    whyNot: [
      'Complex regulatory environment',
      'Crowded tax automation market',
    ],
    nextActions: [
      'Monitor for product design openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Numeral', url: 'https://www.numeralhq.com' },
    { title: 'Numeral on YC Launch', url: 'https://www.ycombinator.com/launches/KxY-numeral-ecommerce-sales-tax-on-autopilot' },
    { title: 'Numeral on startups.gallery', url: 'https://startups.gallery/companies/numeral' },
  ],
};
