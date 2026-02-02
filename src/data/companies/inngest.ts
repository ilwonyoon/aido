import { Company } from '../types';

export const inngest: Company = {
  id: 'inngest',
  name: 'Inngest',
  description:
    'Developer platform for running reliable background functions and event-driven workflows without managing infrastructure.',
  website: 'https://www.inngest.com/',
    screenshot: '/screenshots/inngest-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/inngest-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers building event-driven applications.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage with remote team',
      'Focused on reliable serverless background functions',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Developer workflow automation and orchestration is still expanding.',
    tailwinds: [
      'Growth in event-driven architectures',
      'Demand for reliable background jobs',
      'Developer preference for managed infrastructure',
    ],
    headwinds: [
      'Competition from cloud providers',
      'Switching costs can be low',
      'Complexity in reliability requirements',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Inngest becomes a default background job orchestration layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Temporal',
      description: 'Workflow orchestration platform for developers.',
      whyTheyWin: 'Enterprise adoption and feature depth.',
    },
    {
      name: 'AWS Step Functions',
      description: 'Managed workflow orchestration by AWS.',
      whyTheyWin: 'Cloud distribution and integrations.',
    },
    {
      name: 'Trigger.dev',
      description: 'Developer platform for background jobs and workflows.',
      whyTheyWin: 'Developer-focused experience and integrations.',
    },
  ],
  marketPosition: 'Developer-first platform for reliable background functions and event workflows.',
  moat: [
    'Developer-first API and tooling',
    'Reliability focus for background functions',
    'Integrations across modern stacks',
  ],
  vsGiants: 'Focuses on developer UX and reliability vs cloud-native orchestration tools.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Inngest is infrastructure for background jobs, not AI-native.',
  aiDesignChallenges: [
    'Developer UX for workflow setup',
    'Reliability and observability for async jobs',
    'Clear error recovery and retry logic',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Make background functions reliable and easy for developers to run at scale.',
  beliefs: [
    'Developers should not manage orchestration infrastructure',
    'Reliability is a product feature',
    'Workflows should be observable and debuggable',
  ],
  designPhilosophy: 'Developer-first workflows with clear visibility into execution.',
  greenFlags: [
    'Remote-friendly team',
    'Clear developer pain point',
  ],
  redFlags: [
    'Competition from cloud providers',
    'Reliability expectations are high',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Workflow and event orchestration UX',
        'Retry and error handling logic',
        'Permissions and execution controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Workflow performance metrics',
        'Failure diagnostics and debugging',
        'Alerting and monitoring UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console and onboarding',
        'Execution logs and trace views',
        'Docs and examples UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building event-driven apps',
    secondary: 'Platform engineering teams',
  },
  userProblems: [
    'Background jobs are unreliable and hard to manage',
    'Developers lack visibility into async workflows',
    'Retry logic is complex to implement',
    'Observability is fragmented across tools',
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
      'Developer tooling with strong workflow UX',
      'Clear product-market need for reliability',
    ],
    whyNot: [
      'Competitive space with large incumbents',
      'High reliability bar',
    ],
    nextActions: [
      'Track product adoption and integrations',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T21:15:00',
  sources: [
    { title: 'Inngest website', url: 'https://www.inngest.com/' },
    { title: 'Inngest on startups.gallery', url: 'https://startups.gallery/companies/inngest' },
  ],
};
