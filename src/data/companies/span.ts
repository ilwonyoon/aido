import { Company } from '../types';

export const span: Company = {
  id: 'span',
  name: 'Span',
  description: 'Developer intelligence platform for engineering teams.',
  website: 'https://span.app',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/span-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2025-11',
      leadInvestors: ['Alt Capital', 'Craft Ventures', 'SV Angel', 'BoxGroup', 'Bling Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'LinearB',
      description: 'Engineering analytics and developer productivity platform.',
      whyTheyWin: 'Established enterprise adoption and metrics tooling.',
    },
    {
      name: 'Jellyfish',
      description: 'Engineering intelligence platform for planning and reporting.',
      whyTheyWin: 'Strong enterprise reporting and planning features.',
    },
    {
      name: 'Pluralsight Flow',
      description: 'Developer analytics and productivity measurement.',
      whyTheyWin: 'Large enterprise footprint and analytics depth.',
    },
  ],
  marketPosition: 'Developer intelligence platform focused on engineering team visibility and performance.',
  moat: [
    'Engineering workflow analytics tailored to developer teams',
    'Integrations across code, CI, and project tooling',
    'Actionable insights for engineering leadership',
  ],
  vsGiants: 'Competes on developer-focused analytics rather than generic BI tools.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI likely enhances analytics but is not the sole product.',
  aiDesignChallenges: [
    'Explaining productivity metrics in human terms',
    'Balancing visibility with developer trust',
    'Designing actionable recommendations vs raw dashboards',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Help engineering leaders understand and improve team performance.',
  beliefs: [
    'Engineering teams need better visibility into work health',
    'Metrics should drive action, not surveillance',
    'Data from developer tools can reveal workflow bottlenecks',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear enterprise pain point in engineering visibility',
    'Series A funding indicates market demand',
  ],
  redFlags: [
    'Developer analytics can be perceived as surveillance',
    'Competitive space with established incumbents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Metric definitions and workflow logic',
        'Alerting and insight automation',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Data quality and metric reliability checks',
        'Feedback loops for insight usefulness',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Analytics dashboards and reporting UX',
        'Team and project performance views',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Engineering leaders and ops teams',
    secondary: 'CTOs and VPs of Engineering',
  },
  userProblems: [
    'Limited visibility into engineering throughput and bottlenecks',
    'Manual reporting for team performance is slow',
    'Metrics lack context and actionability',
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
      'Opportunity to design analytics for engineering leaders',
      'Clear enterprise workflow focus',
    ],
    whyNot: [
      'Risk of low adoption if seen as surveillance',
      'Crowded developer analytics market',
    ],
    nextActions: [
      'Monitor product design roles and product traction',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Span', url: 'https://span.app' },
    { title: 'Span Careers', url: 'https://span.app/careers' },
    { title: 'Span funding (FinSMEs)', url: 'https://www.finsmes.com/2025/11/span-raises-25m-in-seed-and-series-a-funding.html' },
    { title: 'Span on startups.gallery', url: 'https://startups.gallery/companies/span' },
  ],
};
