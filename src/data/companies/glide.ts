import { Company } from '../types';

export const glide: Company = {
  id: 'glide',
  name: 'Glide',
  description:
    'No-code platform that lets teams build and deploy apps from spreadsheets and data sources.',
  website: 'https://www.glideapps.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/glide-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2022-04',
      leadInvestors: ['Benchmark'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Small businesses and teams building internal tools (per YC profile).',

  // Growth & Potential
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $20M led by Benchmark (Apr 2022)',
      'Growing adoption of no-code app builders',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'No-code internal tools adoption continues to grow in SMB and enterprise teams.',
    tailwinds: [
      'Rising demand for internal tools and automation',
      'Non-technical teams adopting no-code platforms',
      'Budget pressure favors DIY tooling',
    ],
    headwinds: [
      'Crowded no-code space',
      'Platform commoditization risk',
      'Enterprise requirements for security and governance',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Glide becomes the default internal app builder.',
  },

  // Competition
  competitors: [
    {
      name: 'Airtable',
      description: 'Database and app-building platform for teams.',
      whyTheyWin: 'Strong ecosystem and brand adoption.',
    },
    {
      name: 'Retool',
      description: 'Internal tools platform for developers.',
      whyTheyWin: 'Powerful customization for technical teams.',
    },
    {
      name: 'Softr',
      description: 'No-code app builder for business workflows.',
      whyTheyWin: 'Quick setup and strong template library.',
    },
  ],
  marketPosition: 'No-code internal app builder that starts from spreadsheets and data sources.',
  moat: [
    'Spreadsheet-native onboarding and simplicity',
    'Fast time-to-value for internal tools',
    'Growing template and community ecosystem',
  ],
  vsGiants: 'Focuses on fast, spreadsheet-native app building vs complex enterprise platforms.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI-Feature: Glide is a no-code platform where AI can enhance workflows but is not core.',
  aiDesignChallenges: [
    'Guiding non-technical users through app creation',
    'Balancing power and simplicity for templates',
    'Governance and permissions for shared apps',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'David Siegel',
      role: 'Co-founder',
      background: 'Co-founded Glide to make app building accessible to non-developers.',
    },
    {
      name: 'Jason Smith',
      role: 'Co-founder',
      background: 'Co-founded Glide and leads product development.',
    },
    {
      name: 'Mark Probst',
      role: 'Co-founder',
      background: 'Co-founded Glide and leads engineering.',
    },
  ],
  whyBuilding:
    'Let anyone build useful apps from data without engineering resources.',
  beliefs: [
    'Software creation should be accessible to non-developers',
    'Spreadsheets are the universal business interface',
    'Speed to app is more important than perfect custom code',
  ],
  designPhilosophy: 'Make app creation feel simple and intuitive.',
  greenFlags: [
    'Strong no-code adoption tailwind',
    'Series A backing from Benchmark',
  ],
  redFlags: [
    'Crowded no-code market',
    'Hard to sustain differentiation long-term',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Template logic and onboarding flows',
        'Permissions and role management UX',
        'Automation and workflow setup',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Template performance and usage analytics',
        'Conversion and activation metrics',
        'User feedback loops for builder improvements',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'App builder UI and preview flows',
        'Component editing and layout tools',
        'Publishing and sharing experiences',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Non-technical teams building internal tools',
    secondary: 'Operations and business teams managing workflows',
  },
  userProblems: [
    'Teams need apps but lack engineering resources',
    'Spreadsheets are powerful but limited for workflows',
    'Custom software takes too long to build',
    'Internal tool requests pile up in engineering backlogs',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Large surface area for UX improvements',
      'Strong no-code market tailwinds',
    ],
    whyNot: [
      'Crowded market and pricing pressure',
      'Differentiation risk over time',
    ],
    nextActions: [
      'Track product iteration speed and community growth',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Glide YC profile', url: 'https://www.ycombinator.com/companies/glide' },
    { title: 'Glide website', url: 'https://www.glideapps.com/' },
    { title: 'Glide Series A (TechCrunch)', url: 'https://techcrunch.com/2022/04/20/glide-raises-20m-series-a-for-no-code-app-building/' },
    { title: 'Glide on startups.gallery', url: 'https://startups.gallery/companies/glide' },
    { title: 'Glide jobs page', url: 'https://www.glideapps.com/jobs' },
  ],
};
