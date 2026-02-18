import { Company } from '../types';

export const laurel: Company = {
  id: 'laurel',
  name: 'Laurel',
  description: 'AI time intelligence platform that automatically captures and categorizes professional work activities, turning time data into business insights for law, accounting, and consulting firms.',
  website: 'https://www.laurel.ai',
  headquarters: 'Los Angeles, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/laurel-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['legal'],

  // Business
  stage: 'Series C',
  valuation: '$510M (Jun 2025)',
  totalFunding: '$156M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$10M',
      date: '2019-11',
      leadInvestors: ['BoxGroup'],
    },
    {
      stage: 'Series B',
      amount: '$36.5M',
      date: '2022-03',
      leadInvestors: ['ACME Capital', 'Anthos Capital'],
    },
    {
      stage: 'Series C',
      amount: '$100M',
      date: '2025-06',
      valuation: '$510M',
      leadInvestors: ['IVP'],
    },
  ],
  revenue: '$7.5M ARR (2024)',
  growth: '300% ARR growth YoY, 500% usage increase',
  runway: 'Strong (Series C in Jun 2025)',
  customers: '100+ top firms including EY, Grant Thornton, Latham & Watkins, Freshfields',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '300% ARR YoY',
    userGrowth: '500% usage increase over last 12 months',
    signals: [
      '$100M Series C at $510M valuation (Jun 2025)',
      '100+ top law/accounting/consulting firms as clients',
      'Expanded from legal into accounting and consulting verticals',
    ],
    tam: '$5B+ professional services time management market',
    marketShare: '<3% of TAM = significant upside',
    ceiling: 'Early innings: most firms still use manual timekeeping',
    tailwinds: [
      'AI adoption in professional services accelerating',
      'Billable hour recovery directly tied to profitability',
      'Post-GPT product rebuild gave tech moat',
    ],
    headwinds: [
      'Legacy time tracking incumbents with deep integrations',
      'Enterprise sales cycles are long and complex',
      'Vertical focus limits total addressable market',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong: 1B+ work activities processed, deep domain expertise in legal/accounting billing',
  },

  // Competition
  competitors: [
    {
      name: 'Clockwise',
      description: 'AI calendar management and time optimization for teams',
      whyTheyWin: 'Broader productivity focus, strong integrations with Google Calendar',
    },
    {
      name: 'BigTime',
      description: 'Time and billing software for professional services',
      whyTheyWin: 'Established market presence with full billing suite',
    },
    {
      name: 'Clio',
      description: 'Legal practice management platform with time tracking',
      whyTheyWin: 'All-in-one legal management, large installed base',
    },
  ],
  marketPosition: 'Leading AI-native time intelligence platform for professional services',
  moat: [
    'Proprietary ML trained on 1B+ professional work activities',
    'Deep vertical expertise in legal/accounting billing workflows',
    'GPT-3 pivot gave 2-year head start on AI-native time capture',
  ],
  vsGiants: 'Microsoft/Google offer basic time tracking; Laurel provides AI-native capture that understands billable context across professional services',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — ML automatically captures, categorizes, and analyzes work activities without manual input, transforming a traditionally manual workflow.',
  aiDesignChallenges: [
    'Designing trust in automated time capture — professionals must believe AI-logged hours are accurate',
    'Surfacing actionable time intelligence insights without overwhelming busy professionals',
    'Balancing automation with user control for billable hour categorization',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ryan Alshak',
      role: 'CEO & Founder',
      background: 'Former corporate litigator (USC Law). Built Time by Ping in 2016, pivoted to AI-native Laurel in 2022 after early GPT-3 access.',
    },
    {
      name: 'Kourosh Zamani',
      role: 'COO & Co-founder',
      background: 'Co-founder focused on operations and go-to-market strategy.',
    },
  ],
  whyBuilding: 'As a corporate litigator billing $650/hr, Alshak experienced firsthand how manual timekeeping wastes professionals\' most valuable resource. After his mother\'s terminal illness, returning time became a personal mission.',
  beliefs: [
    'Time is the most valuable resource and should be treated with respect',
    'AI should eliminate busywork so professionals can focus on meaningful work',
    'Only 3 of 9 working hours create leverage — AI can fix that',
  ],
  greenFlags: [
    '$100M Series C with top-tier investors (IVP, GV, OpenAI\'s Kevin Weil)',
    'Clear founder-market fit: ex-lawyer solving his own pain point',
    '28 min/day recovered per user = direct ROI proof',
    '300% ARR growth signals strong product-market fit',
  ],
  redFlags: [
    'Revenue still relatively small ($7.5M) for a $510M valuation',
    'Narrow vertical focus (legal/accounting) limits designer variety',
    'Enterprise sales dependency = slower growth ceiling',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~3-5 (1 Staff PD role open, VP Product hired from Airbnb)',
    notableMembers: [
      { name: 'Vincent Huang', role: 'Product Leader (10+ years Product & Design)' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI time capture categorization logic and rules',
        'Automated billable vs non-billable classification workflows',
        'Time intelligence dashboard data model design',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Time entry accuracy verification flows',
        'Profitability impact measurement dashboards',
        'User trust calibration for AI-generated time entries',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise dashboard for time analytics and insights',
        'Time entry review and approval interfaces',
        'Integration UX with Outlook, Zoom, Slack, and billing systems',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Partners and associates at law, accounting, and consulting firms',
    secondary: 'Firm administrators and finance teams tracking profitability',
  },
  userProblems: [
    'Manual timekeeping is tedious and inaccurate, losing billable hours',
    'Professionals average only 3 productive hours out of 9-hour workdays',
    'Firms lack visibility into how time is actually spent across teams',
    'Existing time tracking tools require manual input and disruption',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'inc.com',
      sentiment: 'positive',
      content: 'Company values "sanctifying time" — treating people\'s right to spend time with intention as a core principle.',
      url: 'https://www.inc.com/inc-custom-studio/an-ai-startup-that-sanctifies-time/90987555',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Remote-first culture with team across US, Prague, Brno, Vancouver, and Dublin. Company retreats to maintain cohesion.',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level B AI-native with clear design challenges around trust and automation',
      'Staff PD role open — high-impact IC position',
      '$510M valuation with $100M Series C runway',
    ],
    whyNot: [
      'Narrow vertical (legal/accounting) may limit design variety',
      'Small design team — less mentorship opportunity',
      'Revenue-to-valuation ratio suggests high expectations',
    ],
    nextActions: [
      'Monitor Staff PD role and team growth',
      'Review product demo for design quality assessment',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Laurel Official Website', url: 'https://www.laurel.ai' },
    { title: 'Fortune - Laurel raises $100M Series C', url: 'https://fortune.com/2025/06/10/exclusive-laurel-raises-100-series-c-to-map-where-the-time-goes/' },
    { title: 'BusinessWire - Series C Announcement', url: 'https://www.businesswire.com/news/home/20250610987398/en/AI-Time-Platform-Laurel-Raises-$100-Million-to-Transform-the-Professional-Services-Industry' },
    { title: 'Laurel Series B Announcement', url: 'https://www.laurel.ai/resources-post/laurel-raises-36-5m-series-b-to-return-time-to-the-world' },
    { title: 'Laurel Ashby Jobs Board', url: 'https://jobs.ashbyhq.com/laurel/' },
  ],
};
