import { Company } from '../types';

export const tigereye: Company = {
  id: 'tigereye',
  name: 'TigerEye',
  description:
    'AI-powered business intelligence platform that helps go-to-market teams forecast, plan, and execute with real-time insights.',
  website: 'https://tigereye.com/',
  screenshot: '/screenshots/tigereye-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/tigereye-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Acquired',
  valuation: 'Unknown',
  totalFunding: '$35M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2022-09',
      leadInvestors: ['Initialized Capital'],
    },
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2022-09',
      leadInvestors: ['Initialized Capital', 'Next47'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'GTM teams at high-growth B2B companies (per company overview).',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
  signals: [
      'Raised $35M total including a $30M Series A (Sept 2022)',
      'Joined Lennar in 2026',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Unclear post-acquisition focus and roadmap.',
    tailwinds: [
      'Revenue teams demand better forecasting accuracy',
      'AI adoption in sales and revenue operations',
      'Need for unified GTM data and insights',
    ],
    headwinds: [
      'Crowded revenue intelligence market',
      'Data quality and trust issues in forecasting',
      'Uncertain product roadmap after acquisition',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate if TigerEye captures unique GTM signals and workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Clari',
      description: 'Revenue platform for forecasting and pipeline visibility.',
      whyTheyWin: 'Enterprise adoption and deep CRM integrations.',
    },
    {
      name: 'Gong',
      description: 'Revenue intelligence and conversation analytics.',
      whyTheyWin: 'Strong brand and sales org adoption.',
    },
    {
      name: 'Forecast',
      description: 'AI-assisted forecasting and pipeline management.',
      whyTheyWin: 'Focused product for sales planning.',
    },
  ],
  marketPosition: 'AI-native GTM intelligence for forecasting and planning.',
  moat: [
    'AI-driven insights from CRM and GTM data',
    'Focused on revenue planning workflows',
    'Potentially strong signal capture across sales data',
  ],
  vsGiants: 'Focused on GTM planning vs broad CRM suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: TigerEye uses AI to automate forecasting and revenue intelligence workflows.',
  aiDesignChallenges: [
    'Trust and explainability for AI-generated forecasts',
    'Workflow design for GTM planning and execution',
    'Data quality and integration across revenue systems',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Saeed Barzi',
      role: 'Co-founder & CEO',
      background: 'Former VP at Salesforce; co-founded TigerEye.',
    },
    {
      name: 'Emil Almassi',
      role: 'Co-founder',
      background: 'Former engineering leader at Salesforce; co-founded TigerEye.',
    },
  ],
  whyBuilding:
    'Give GTM teams a unified, AI-powered view of revenue performance and planning.',
  beliefs: [
    'Forecasting should be real-time and explainable',
    'GTM teams need AI-native planning workflows',
    'Data quality is critical to revenue decision-making',
  ],
  designPhilosophy: 'Make revenue intelligence clear, actionable, and trusted.',
  greenFlags: [
    'Strong early funding and investor support',
    'Experienced founders from Salesforce',
  ],
  redFlags: [
    'Acquisition creates uncertainty for roadmap',
    'Highly competitive GTM intelligence market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Forecasting logic and AI explainability',
        'Pipeline health and risk classification',
        'Permissions and data governance workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Forecast accuracy metrics',
        'Deal risk scoring and model evaluation',
        'Feedback loops for AI recommendations',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Revenue dashboards and planning views',
        'Scenario modeling UX',
        'Team collaboration and reporting',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Revenue, sales, and GTM operations teams',
    secondary: 'Executives and finance leaders',
  },
  userProblems: [
    'Forecasting accuracy is low and manual',
    'Revenue data is fragmented across tools',
    'Leaders lack real-time visibility into pipeline risk',
    'GTM planning is slow without reliable insights',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Fully remote team (per careers page).',
      url: 'https://tigereye.com/careers',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Clear GTM intelligence use case for AI',
      'Strong founder background in enterprise sales tooling',
    ],
    whyNot: [
      'Acquisition uncertainty',
      'Crowded market with strong incumbents',
    ],
    nextActions: [
      'Track post-acquisition product direction',
      'Monitor hiring signals and team updates',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T19:25:00',
  sources: [
    { title: 'TigerEye website', url: 'https://tigereye.com/' },
    { title: 'TigerEye about', url: 'https://tigereye.com/about' },
    { title: 'TigerEye careers', url: 'https://tigereye.com/careers' },
    { title: 'TigerEye acquisition announcement', url: 'https://tigereye.com/' },
    { title: 'TigerEye funding (Axios)', url: 'https://www.axios.com/2022/09/08/tigereye-series-a' },
    { title: 'TigerEye on startups.gallery', url: 'https://startups.gallery/companies/tigereye' },
  ],
};
