import { Company } from '../types';

export const item: Company = {
  id: 'item',
  name: 'Item',
  description:
    'Automated CRM for sales teams that handles logging, emails, and deal tracking with AI agents.',
  website: 'https://www.item.app/',
    screenshot: '/screenshots/item-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/item-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'early-growth trajectory (public % not disclosed)',
  runway: 'Unknown',
  customers: 'Primary audience: Sales teams and account executives',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'YC Fall 2025 batch company (F25)',
      'Small team (3 people per YC profile)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI agents for sales workflows are still forming.',
    tailwinds: [
      'Sales teams seeking automation for CRM hygiene',
      'Growing acceptance of AI copilots in revenue workflows',
      'Need for better data quality in sales pipelines',
    ],
    headwinds: [
      'Entrenched CRM incumbents',
      'Trust and adoption barriers for AI-led workflows',
      'Integration complexity across sales stacks',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Item becomes the default AI assistant for CRM operations.',
  },

  // Competition
  competitors: [
    {
      name: 'Salesforce',
      description: 'Market-leading CRM platform with AI features.',
      whyTheyWin: 'Enterprise adoption and ecosystem scale.',
    },
    {
      name: 'HubSpot',
      description: 'CRM and marketing automation platform.',
      whyTheyWin: 'Strong SMB adoption and integrated suite.',
    },
    {
      name: 'Pipedrive',
      description: 'Sales CRM focused on pipeline management.',
      whyTheyWin: 'Simple UX and widespread sales team usage.',
    },
  ],
  marketPosition: 'AI-native CRM assistant focused on automating sales workflows and data entry.',
  moat: [
    'AI-first workflows designed around automation',
    'Reduced manual CRM maintenance for sales teams',
    'Potential for proprietary workflow data over time',
  ],
  vsGiants: 'AI-first automation vs legacy CRMs retrofitting copilots.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Item is built around AI agents to automate CRM workflows.',
  aiDesignChallenges: [
    'Trust and transparency for automated CRM updates',
    'Workflow design for AI-assisted sales tasks',
    'Human override and audit trails for critical actions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Andres Santanilla',
      role: 'Founder',
      background: 'Founded Item to build an AI-first CRM for sales teams.',
    },
  ],
  whyBuilding:
    'Automate CRM work so sales teams can focus on customers instead of data entry.',
  beliefs: [
    'CRM systems should update themselves',
    'AI can remove tedious sales ops work',
    'Data quality is critical for pipeline decisions',
  ],
  designPhilosophy: 'Make AI automation feel reliable and hands-off.',
  greenFlags: [
    'YC backing and early validation',
    'Clear pain point for sales teams',
  ],
  redFlags: [
    'Strong incumbents with deep integrations',
    'Adoption risk if AI automation feels unreliable',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '3 total employees (YC profile)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent workflows for CRM tasks',
        'Permission and approval logic',
        'Error recovery and human handoff',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality metrics for AI-generated updates',
        'User feedback loops for corrections',
        'Confidence scoring for automated actions',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Sales workflow dashboards and summaries',
        'Review and approval UI for AI actions',
        'Notifications and alerting UX',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Sales teams and account executives',
    secondary: 'Sales operations and revenue leaders',
  },
  userProblems: [
    'Manual CRM updates waste sales time',
    'Deal information gets stale quickly',
    'Sales teams struggle to keep data accurate',
    'CRM tools feel like overhead rather than help',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'neutral',
      content: 'YC F25 company with a small team (3 people).',
      url: 'https://www.ycombinator.com/companies/item',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'AI-first workflow automation in sales',
      'Small team with end-to-end ownership',
    ],
    whyNot: [
      'Very early stage with high uncertainty',
      'Competitive CRM market',
    ],
    nextActions: [
      'Track product launch and early customer traction',
      'Monitor design or product hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'Source', url: 'https://www.ycombinator.com/companies/item' },
    { title: 'Source', url: 'https://www.item.app/' },
    { title: 'Source', url: 'https://startups.gallery/companies/item-app' }
  ],
};
