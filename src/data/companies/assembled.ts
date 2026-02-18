import { Company } from '../types';

export const assembled: Company = {
  id: 'assembled',
  name: 'Assembled',
  description: 'Workforce management and AI agents platform for customer support teams, unifying human and AI agent scheduling, forecasting, and performance analytics.',
  website: 'https://www.assembled.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/assembled-og.webp',

  // Category
  category: 'enterprise-ops' as const,

  // Multi-dimensional Tags
  aiTypes: ['automation', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  industries: ['productivity'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$70.7M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3.1M', date: '2020-03', leadInvestors: ['Stripe'] },
    { stage: 'Series A', amount: '$16.5M', date: '2021-03', leadInvestors: ['Emergence Capital'] },
    { stage: 'Series B', amount: '$51M', date: '2022-05', leadInvestors: ['NEA'] },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'AI resolution volume grew 62x in 2025',
  runway: 'Strong (no new raise since May 2022 — suggests cash efficiency)',
  customers: '300+ customers including Stripe, Canva, Robinhood, Duolingo, Zoom',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: '4.5B+ events scheduled in 2025',
    signals: [
      '$51M Series B led by NEA (May 2022)',
      '62x AI resolution volume growth in 2025',
      '9+ new integrations launched in 2025',
    ],
    tam: '$15B+ workforce management software market',
    marketShare: '<1% of TAM — large upside if AI agents thesis plays out',
    ceiling: 'Mid-innings: transitioning from WFM tool to full support operations OS',
    tailwinds: [
      'AI agents replacing L1 support — need unified human+AI management',
      'BPO cost pressure driving automation demand',
      'Customer support becoming strategic differentiator',
    ],
    headwinds: [
      'Zendesk Tymeshift bundling WFM with help desk',
      'Legacy WFM vendors (NICE, Verint) adding AI features',
      'No new fundraise since 2022 — growth pace unclear',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: deep integration with help desks + scheduling workflows create lock-in',
  },

  // Competition
  competitors: [
    {
      name: 'Zendesk (Tymeshift)',
      description: 'All-in-one help desk + WFM platform after Tymeshift acquisition.',
      whyTheyWin: 'Bundled with existing Zendesk ecosystem — zero switching cost for Zendesk customers.',
    },
    {
      name: 'NICE/Verint/Calabrio',
      description: 'Legacy enterprise contact center WFM solutions.',
      whyTheyWin: 'Deep enterprise footprint and compliance features for large contact centers.',
    },
    {
      name: 'Dialpad (Surfboard)',
      description: 'Lightweight, design-led WFM tool acquired by Dialpad in 2024.',
      whyTheyWin: 'Part of Dialpad\'s unified communications stack targeting mid-market.',
    },
  ],
  marketPosition: 'Leading modern WFM platform for tech-native support teams',
  moat: [
    'Deep integrations with major help desks (Zendesk, Salesforce, Intercom)',
    'Unified human + AI agent management — unique positioning',
    'Strong customer base of tech-native companies (Stripe, Canva, Robinhood)',
  ],
  vsGiants: 'Purpose-built for modern support teams vs legacy WFM vendors. Unified AI+human management vs Zendesk\'s bolted-on approach.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: AI agents and copilot are core differentiators built on top of proven WFM workflow. Product existed before AI but AI is now central to value prop.',
  aiDesignChallenges: [
    'Designing unified dashboards for human and AI agent performance',
    'AI agent autonomy controls — when to escalate to humans',
    'Trust calibration: showing AI resolution quality to support leaders',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ryan Wang',
      role: 'Co-founder & CEO',
      background: 'Former ML engineer at Stripe (fraud detection, support automation). UChicago MS Statistics.',
    },
    {
      name: 'John Wang',
      role: 'Co-founder & CTO',
      background: 'Former Stripe engineer. 12+ years building developer tooling.',
    },
    {
      name: 'Brian Sze',
      role: 'Co-founder',
      background: 'Former Stripe engineer. Early employee when Stripe had <100 people.',
    },
  ],
  whyBuilding: 'Saw every support leader at Stripe using messy spreadsheets to manage teams. Built the OS for support operations that treats AI agents as first-class teammates.',
  beliefs: [
    'AI agents and humans should be managed together, not separately',
    'Support operations is a strategic function, not a cost center',
    'The best WFM tools are built by people who lived the problem',
  ],
  greenFlags: [
    'All 3 founders are ex-Stripe — deep domain expertise',
    'Stripe led their seed round — strong signal of founder quality',
    'AI agents pivot is well-timed with market shift',
  ],
  redFlags: [
    'No fundraise since May 2022 — unclear if by choice or market conditions',
    'Zendesk bundling WFM threatens mid-market positioning',
    'Revenue figures not publicly disclosed — growth trajectory opaque',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~2-3 (small company ~118 employees, no verified Product Designer role currently listed)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent escalation logic and routing rules design',
        'Scheduling constraint systems (80+ compliance rules)',
        'Forecasting model configuration and adjustment UX',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'AI agent resolution quality scoring and QA dashboards',
        'Human vs AI performance comparison analytics',
        'Customer satisfaction feedback loop design',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Unified human + AI workforce dashboard',
        'Schedule builder and real-time adherence monitoring',
        'AI copilot in-desk experience for support agents',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Support operations leaders and WFM managers at mid-market to enterprise companies',
    secondary: 'CX directors evaluating AI agent deployment alongside human teams',
  },
  userProblems: [
    'Managing human and AI agents in separate systems creates blind spots',
    'Spreadsheet-based scheduling cannot handle 80+ compliance rules at scale',
    'No unified view of human + AI agent capacity and performance',
    'AI agent deployment lacks quality controls and escalation design',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.0,
      content: 'Smart, talented teammates with strong creative freedom. Customer-focused culture. Leadership shows genuine care.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Assembled-EI_IE1379368.11,20.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Mixed signals on leadership quality — some reviews cite favoritism and lack of mentorship. High turnover mentioned.',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-Assembled-E1379368-RVW77192733.htm',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'High-impact design on AI+human unified management — novel UX challenge',
      'Ex-Stripe founders with deep domain expertise',
      'Small design team = high ownership and influence',
    ],
    whyNot: [
      'WFM is operationally complex but not design-forward domain',
      'No fundraise since 2022 — growth trajectory unclear',
      'Mixed leadership reviews on Glassdoor',
    ],
    nextActions: [
      'Monitor AI agent product evolution',
      'Check if design team grows in 2026',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Assembled Series B announcement', url: 'https://www.assembled.com/blog/assembled-raises-51m-in-series-b-fundraising' },
    { title: 'TechCrunch — Assembled Seed', url: 'https://techcrunch.com/2020/03/11/assembled-raises-3-1m-led-by-stripe-to-build-the-operating-system-for-support-teams/' },
    { title: 'Assembled 2025 Year in Review', url: 'https://www.assembled.com/blog/assembled-year-in-review-2025' },
    { title: 'Assembled Careers (Ashby)', url: 'https://jobs.ashbyhq.com/assembledhq' },
    { title: 'Glassdoor — Assembled Reviews', url: 'https://www.glassdoor.com/Overview/Working-at-Assembled-EI_IE1379368.11,20.htm' },
  ],
};
