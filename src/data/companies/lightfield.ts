import { Company } from '../types';

export const lightfield: Company = {
  id: 'lightfield',
  name: 'Lightfield',
  description: 'AI-native CRM for modern revenue teams.',
  website: 'https://lightfield.app',
    screenshot: '/screenshots/lightfield-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/lightfield-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$43M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$43M',
      date: '2025-08',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Salesforce',
      description: 'Enterprise CRM platform with AI features.',
      whyTheyWin: 'Large enterprise footprint and ecosystem.',
    },
    {
      name: 'HubSpot',
      description: 'CRM and marketing automation platform.',
      whyTheyWin: 'SMB-friendly UX and broad product suite.',
    },
    {
      name: 'Attio',
      description: 'Modern CRM for startups and growth teams.',
      whyTheyWin: 'Modern UX and flexible data model.',
    },
  ],
  marketPosition: 'AI-native CRM with modern workflows for revenue teams.',
  moat: [
    'AI-first CRM workflows',
    'Modern UX focused on speed and adoption',
    'Automation for sales and revenue ops',
  ],
  vsGiants: 'Competes on AI-native workflows rather than legacy CRM complexity.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to the CRM experience and workflow automation.',
  aiDesignChallenges: [
    'Designing AI recommendations for sales workflows',
    'Balancing automation with sales team control',
    'Explaining AI-driven insights and prioritization',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Keith Peiris',
      role: 'Co-founder & CEO',
      background: 'Former co-founder and CEO of Tome (viral AI presentation app with 20M+ users); pivoted to build Lightfield.',
    },
    {
      name: 'Henri Liriani',
      role: 'Co-founder & President',
      background: 'Former co-founder of Tome; now leading Lightfield as an AI-native CRM for founder-led sales.',
    },
  ],
  whyBuilding: 'Replace legacy CRM with AI-native workflows for revenue teams.',
  beliefs: [
    'Sales teams need more automation and less data entry',
    'AI should surface next-best actions',
    'Modern CRM must be fast and intuitive',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series B funding suggests strong momentum',
    'Clear pain point in CRM UX',
  ],
  redFlags: [
    'Crowded CRM market with incumbents',
    'Enterprise sales cycles can be long',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Sales automation logic and rules',
        'AI-driven task prioritization',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring AI recommendation accuracy',
        'User feedback on automation outcomes',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'CRM dashboards and pipeline UX',
        'Workflow UI for sales teams',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Sales and revenue operations teams',
    secondary: 'Founders and go-to-market leaders',
  },
  userProblems: [
    'CRM data entry is manual and time-consuming',
    'Sales teams lack visibility into pipeline health',
    'Legacy CRMs are complex and slow to adopt',
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
      'AI-first CRM with clear UX challenges',
      'Opportunity to modernize legacy workflows',
    ],
    whyNot: [
      'Highly competitive CRM market',
      'Long enterprise sales cycles',
    ],
    nextActions: [
      'Monitor for design roles and product traction',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Lightfield', url: 'https://lightfield.app' },
    { title: 'Lightfield Help', url: 'https://support.lightfield.app' },
    { title: 'Lightfield on startups.gallery', url: 'https://startups.gallery/companies/lightfield' },
  ],
};
