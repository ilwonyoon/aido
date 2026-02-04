import { Company } from '../types';

export const macroscope: Company = {
  id: 'macroscope',
  name: 'Macroscope',
  description:
    'AI platform that analyzes codebases to provide leaders and engineers with real-time visibility into product and engineering progress.',
  website: 'https://macroscope.com/',
    screenshot: '/screenshots/macroscope-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/macroscope-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$40M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$10M',
      date: '2022-05',
      leadInvestors: ['GV'],
    },
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2024-05',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $30M led by Lightspeed (May 2024)',
      'Total funding reported at $40M',
      'Supported by Lightspeed, Thrive, and GV',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI code intelligence for leadership and teams is still emerging.',
    tailwinds: [
      'Engineering leaders need better visibility into codebase changes',
      'AI code analysis becoming more accurate and useful',
      'Demand for productivity and alignment tools in software orgs',
    ],
    headwinds: [
      'Integration friction with existing dev tooling',
      'Trust and accuracy expectations for AI analysis',
      'Competition from analytics and dev tooling incumbents',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate if Macroscope becomes the default source of truth for code intelligence.',
  },

  // Competition
  competitors: [
    {
      name: 'LinearB',
      description: 'Engineering productivity analytics for code and delivery workflows.',
      whyTheyWin: 'Deep integrations and established enterprise adoption.',
    },
    {
      name: 'GitHub (Insights)',
      description: 'Built-in analytics and insights for GitHub repositories.',
      whyTheyWin: 'Native distribution and built-in usage.',
    },
    {
      name: 'Pluralsight Flow',
      description: 'Engineering analytics platform for velocity and code changes.',
      whyTheyWin: 'Established market presence and enterprise relationships.',
    },
  ],
  marketPosition: 'AI-native codebase intelligence for leadership visibility and engineering clarity.',
  moat: [
    'Deep codebase analysis with AI summarization',
    'Focus on leadership visibility and alignment',
    'Potential data flywheel from ongoing code insights',
  ],
  vsGiants: 'Focuses on leadership-facing code intelligence vs developer tooling suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Macroscope uses AI to interpret codebases and generate actionable insights.',
  aiDesignChallenges: [
    'Trust and explainability for AI-derived code insights',
    'Workflow integration with existing engineering tools',
    'Presenting complex code intelligence to non-technical leaders',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Kayvon Beykpour',
      role: 'Co-founder',
      background: 'Former product leader; co-founded Macroscope.',
    },
    {
      name: 'Joe Bernstein',
      role: 'Co-founder',
      background: 'Former engineering leader; co-founded Macroscope.',
    },
    {
      name: 'Rob Bishop',
      role: 'Co-founder',
      background: 'Former engineering leader; co-founded Macroscope.',
    },
  ],
  whyBuilding:
    'Help teams understand what is happening in their codebase and align leadership with engineering reality.',
  beliefs: [
    'Code is the source of truth for product progress',
    'Leaders need real-time visibility into engineering work',
    'AI can make complex codebases understandable',
  ],
  designPhilosophy: 'Make code intelligence clear, trustworthy, and accessible.',
  greenFlags: [
    'Top-tier investors with strong developer tooling track record',
    'Clear pain point for engineering leaders',
  ],
  redFlags: [
    'Trust and accuracy requirements are high',
    'Competitive market with analytics incumbents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI insight generation and reliability controls',
        'Permissions and access for sensitive code data',
        'Change tracking and attribution workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Confidence metrics for AI code summaries',
        'Alerting and anomaly detection UX',
        'User feedback loops for insight quality',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Leadership dashboards for code activity',
        'Engineering team reporting views',
        'Timeline and change exploration UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Engineering leaders and product executives',
    secondary: 'Engineering managers and platform teams',
  },
  userProblems: [
    'Leaders lack real-time visibility into codebase changes',
    'Engineering progress is hard to summarize accurately',
    'Existing analytics miss the nuance of code-level decisions',
    'Teams need alignment across product and engineering work',
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
    fitScore: 7,
    whyJoin: [
      'Clear design leverage in AI-driven code intelligence',
      'Strong investor backing and developer tooling focus',
    ],
    whyNot: [
      'Integration complexity with dev stacks',
      'Trust and accuracy risks in AI insights',
    ],
    nextActions: [
      'Track product evolution and customer case studies',
      'Monitor design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T19:25:00',
  sources: [
    { title: 'Macroscope website', url: 'https://macroscope.com/' },
    { title: 'Macroscope blog (AI code intelligence)', url: 'https://macroscope.com/blog' },
    { title: 'Macroscope Series A (Lightspeed)', url: 'https://lsvp.com/stories/macroscope/' },
    { title: 'Macroscope funding (CNBC)', url: 'https://www.cnbc.com/2024/05/16/macroscope-ai-software-startup-raises-30-million-to-see-what-engineers-are-doing.html' },
    { title: 'Macroscope on startups.gallery', url: 'https://startups.gallery/companies/macroscope' },
    { title: 'Macroscope jobs (Ashby)', url: 'https://jobs.ashbyhq.com/macroscope' },
  ],
};
