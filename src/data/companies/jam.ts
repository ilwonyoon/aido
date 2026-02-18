import { Company } from '../types';

export const jam: Company = {
  id: 'jam',
  name: 'Jam',
  description: 'Bug reporting platform that auto-captures technical context — console logs, network requests, repro steps — in one-click reports for engineering teams.',
  website: 'https://jam.dev',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/jam-og.webp',

  // Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$12.4M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3.5M', date: '2020-10', leadInvestors: ['Union Square Ventures'] },
    { stage: 'Series A', amount: '$8.9M', date: '2024-02', leadInvestors: ['GGV Capital'] },
  ],
  revenue: '~$2.4M ARR',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '200K+ users, 75K+ at Series A; Salesforce, Unilever, Autodesk, Toast',

  // Competition
  competitors: [
    {
      name: 'Marker.io',
      description: 'Visual bug reporting tool for websites with annotation and project management integrations',
      whyTheyWin: 'Established in visual feedback space with deep PM tool integrations',
    },
    {
      name: 'BugHerd',
      description: 'Visual feedback and bug tracking tool pinned directly to web pages',
      whyTheyWin: 'Strong in agency/client workflows with on-page annotation',
    },
    {
      name: 'Instabug',
      description: 'Mobile-focused bug reporting and crash analytics platform',
      whyTheyWin: 'Dominant in mobile bug reporting with SDK-based crash analytics',
    },
  ],
  marketPosition: 'Leading one-click bug reporting tool for cross-functional teams',
  moat: [
    'Browser extension captures full technical context automatically (console, network, repro steps)',
    '13.7M+ Jams created — strong usage data flywheel',
    '13+ integrations (Jira, Linear, Slack, GitHub) embed into existing workflows',
  ],

  // AI
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a growing feature for auto-generating repro steps and summarizing bugs, but core value is deterministic technical capture.',
  aiDesignChallenges: [
    'Designing AI-generated repro steps that engineers trust and can verify',
    'Balancing automatic context capture with privacy/noise concerns',
    'Surfacing AI bug summaries without losing technical precision',
  ],

  // Founders
  founders: [
    {
      name: 'Dani Grant',
      role: 'Co-founder & CEO',
      background: 'Former analyst at Union Square Ventures, PM at Cloudflare. NYU HCI degree.',
    },
    {
      name: 'Mohd Irtefa',
      role: 'Co-founder',
      background: 'Former PM at Cloudflare. Co-created Jam after experiencing debugging pain firsthand.',
    },
  ],
  whyBuilding: 'Experienced frustrating debugging cycles at Cloudflare and built Jam to eliminate back-and-forth between reporters and engineers.',
  beliefs: [
    'Bug reporting should be effortless for non-technical reporters',
    'Engineers deserve full technical context with every bug report',
    'Great developer tools integrate into existing workflows, not replace them',
  ],
  greenFlags: [
    'GGV Capital + Figma Ventures backing; angels include Vercel CEO and Mixpanel founder',
    'Strong product-led growth: 200K+ users, 13.7M Jams created',
    'Hiring Principal Designer — signal of design investment at early stage',
  ],
  redFlags: [
    'Small revenue (~$2.4M ARR) relative to market competition',
    'Competing against well-funded tools (Sentry, Linear) expanding into bug reporting',
    '22-person team — limited resources for enterprise scaling',
  ],

  // Design
  designTeam: {
    teamSize: '~1-2 (no verified Product Design role currently listed)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Designing auto-capture triggers and context selection logic',
        'Bug report workflow from capture to ticket creation',
        'Integration configuration across 13+ tools',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring quality of AI-generated repro steps',
        'Bug report completeness scoring',
        'User satisfaction with capture accuracy',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Browser extension UI for one-click capture',
        'Bug report viewer with console/network log display',
        'Dashboard for team bug triage and analytics',
      ],
    },
  },
  productStage: '1→10',

  // Users
  targetAudiences: {
    primary: 'Engineering and QA teams needing structured bug reports',
    secondary: 'Product managers and customer support filing bugs for developers',
  },
  userProblems: [
    'Bug reporters lack technical context, causing back-and-forth with engineers',
    'Reproducing bugs is time-consuming — 15-60 min per ticket wasted',
    'Console logs and network requests are lost by the time a bug is reported',
    'Non-technical team members struggle to file useful bug reports',
  ],

  // Links & Roles
  designerLinks: [],
  openRoles: [],

  // Culture
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 5.0,
      content: 'Small senior team that works well together. Fast-paced startup culture.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Jam-EI_IE7863503.11,14.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Series A messaging emphasizes rapid iteration and deep integration into existing engineering workflows.',
      url: 'https://jam.dev/blog/jam-raises-8-9m-series-a-led-by-ggv-capital/',
    },
  ],

  // Growth
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: '75K → 200K+ users (2024-2026)',
    signals: [
      '$8.9M Series A from GGV Capital + Figma Ventures (Feb 2024)',
      '13.7M+ Jams created — strong usage engagement',
      'Hiring across engineering, design, and sales',
    ],
    tam: '$600M+ (bug tracking software market by 2026)',
    ceiling: 'Mid-market: expanding from individual users to enterprise team workflows',
    tailwinds: [
      'Remote/distributed teams increase need for async bug reporting',
      'AI integration adds value to automated context capture',
      'Growing complexity of web apps drives demand for debugging tools',
    ],
    headwinds: [
      'Large DevOps platforms (Atlassian, Linear) adding similar features',
      'Open-source alternatives (Requestly) competing on price',
      'Market fragmentation across mobile, web, and desktop bug reporting',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: workflow integrations and team habits create stickiness',
  },

  // Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Principal Designer role — high impact as first/early design hire',
      'Product-led growth company with strong user engagement',
      'Developer tools space with clear design challenges',
    ],
    whyNot: [
      'Level C AI-native — AI is feature, not core product',
      'Small revenue and team size — higher risk',
      'Bug reporting is a competitive, commoditizing market',
    ],
    nextActions: [
      'Monitor if design team grows beyond Principal Designer hire',
      'Track revenue growth and enterprise adoption',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Jam.dev — Official Website', url: 'https://jam.dev' },
    { title: 'Jam Series A Announcement', url: 'https://jam.dev/blog/jam-raises-8-9m-series-a-led-by-ggv-capital/' },
    { title: 'TechCrunch — Jam Seed Round ($3.5M)', url: 'https://techcrunch.com/2020/10/20/jam-raises-3-5-million-to-figma-tize-product-collaboration/' },
    { title: 'Jam Careers Page', url: 'https://jam.dev/careers' },
    { title: 'Latka — Jam Revenue Data', url: 'https://getlatka.com/companies/jam.dev' },
  ],
};
