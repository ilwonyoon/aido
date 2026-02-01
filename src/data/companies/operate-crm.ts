import { Company } from '../types';

export const operateCrm: Company = {
  id: 'operate-crm',
  name: 'Operate CRM',
  description:
    'CRM built to run directly in Slack for faster relationship management and follow-ups.',
  website: 'https://operate.so/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/operate-crm-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Founders, operators, and teams managing relationships in Slack.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Seed-stage CRM product for Slack workflows',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Slack-native productivity tools can scale with strong integrations.',
    tailwinds: [
      'Slack remains central to team workflows',
      'Demand for lightweight CRMs',
      'Team preference for tools embedded in chat',
    ],
    headwinds: [
      'Competition from established CRMs',
      'Workflow switching and adoption barriers',
      'Platform dependency on Slack',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Operate becomes the default Slack CRM layer.',
  },

  // Competition
  competitors: [
    {
      name: 'Airtable',
      description: 'Flexible database and CRM workflows.',
      whyTheyWin: 'Configurable workflows and enterprise adoption.',
    },
    {
      name: 'Notion CRM templates',
      description: 'Lightweight CRM workflows inside Notion.',
      whyTheyWin: 'Workspace consolidation and flexibility.',
    },
    {
      name: 'Salesforce',
      description: 'Enterprise CRM platform.',
      whyTheyWin: 'Deep feature set and market dominance.',
    },
  ],
  marketPosition: 'Slack-native CRM for teams that live in chat.',
  moat: [
    'Slack-native workflow integration',
    'Fast relationship management inside chat',
    'Lightweight CRM for early teams',
  ],
  vsGiants: 'Competes by embedding CRM in Slack rather than heavy standalone platforms.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Operate CRM is a productivity tool, not AI-native.',
  aiDesignChallenges: [
    'Fast, low-friction relationship workflows',
    'Slack-first UI constraints',
    'Maintaining data accuracy in lightweight tools',
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
    'Help teams manage relationships without leaving Slack.',
  beliefs: [
    'Teams should manage relationships in their workflow',
    'CRM should be lightweight and fast',
    'Chat-based work needs native tools',
  ],
  designPhilosophy: 'Fast, minimal UI inside Slack contexts.',
  greenFlags: [
    'Clear product focus on Slack-native workflows',
    'Seed-stage velocity',
  ],
  redFlags: [
    'Dependency on Slack platform changes',
    'Competition from broader productivity suites',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'CRM automation in Slack workflows',
        'Notifications and reminders logic',
        'Data syncing between Slack and CRM',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Engagement and activity metrics',
        'Pipeline tracking dashboards',
        'Usage analytics for team adoption',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Slack app UI and commands',
        'Contact and relationship views',
        'Quick-add and follow-up flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Teams managing relationships in Slack',
    secondary: 'Founders and operators needing lightweight CRM',
  },
  userProblems: [
    'Traditional CRMs feel heavy for early teams',
    'Context switching out of Slack slows follow-ups',
    'Relationship management is fragmented across tools',
    'Teams want faster reminders and notes in chat',
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
      'Slack-native product UX challenges',
      'Early-stage productivity tool',
    ],
    whyNot: [
      'Platform dependency risk',
      'Competitive CRM space',
    ],
    nextActions: [
      'Track product traction',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Operate website', url: 'https://operate.so/' },
    { title: 'Operate CRM on startups.gallery', url: 'https://startups.gallery/companies/operate-crm' },
  ],
};
