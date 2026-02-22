import { Company } from '../types';

export const nooks: Company = {
  id: 'nooks',
  name: 'Nooks',
  description: 'AI sales assistant platform that supports outbound and inbound sales workflows.',
  website: 'https://www.nooks.ai',
    screenshot: '/screenshots/nooks-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6822db388c44137c00f8c124/685ee7f0d8929272d1cc402d_OG-Nooks_V%2002.png',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$70M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$43M',
      date: '2024-10',
      leadInvestors: ['Kleiner Perkins'],
    },
  ],
  revenue: 'Unknown',
  growth: 'high-growth trajectory (public % not disclosed)',
  runway: 'Estimated 18-24 months post 2024-10 round ($43M); exact runway not publicly disclosed',
  customers: 'Primary audience: Sales teams and SDR managers',

  // Competition
  competitors: [
    {
      name: 'Gong',
      description: 'Revenue intelligence platform with conversation analytics.',
      whyTheyWin: 'Strong enterprise adoption and analytics depth.',
    },
    {
      name: 'Outreach',
      description: 'Sales engagement platform for outbound workflows.',
      whyTheyWin: 'Deep sales workflow integrations.',
    },
    {
      name: 'Regie.ai',
      description: 'AI sales engagement and content generation.',
      whyTheyWin: 'AI-first sales enablement focus.',
    },
  ],
  marketPosition: 'AI sales assistant focused on accelerating outbound and inbound sales work.',
  moat: [
    'Sales workflow integration depth',
    'AI-driven call and outreach automation',
    'Positioning around sales productivity gains',
  ],
  vsGiants: 'Competes by embedding AI directly into daily sales workflows.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to automated sales workflows and call support.',
  aiDesignChallenges: [
    'Designing AI coaching without overwhelming reps',
    'Balancing automation with sales rep control',
    'Maintaining trust in AI-assisted communications',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Sales teams need AI help to scale outreach without losing personalization.',
  beliefs: [
    'AI can amplify sales teams rather than replace them',
    'Sales workflows should be faster and more personalized',
    'Data-driven coaching improves performance',
  ],
  greenFlags: [
    'Series B funding announced with total $70M',
    'Clear positioning in AI sales productivity',
  ],
  redFlags: [
    'Crowded sales tooling market',
    'AI adoption risk in customer communications',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['AI-assisted call workflows', 'Automated sales tasks'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Performance analytics', 'Coaching feedback loops'],
    },
    interface: {
      level: 'medium',
      tasks: ['Sales dashboards', 'Call and outreach interfaces'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Sales teams and SDR managers',
    secondary: 'RevOps teams monitoring sales performance',
  },
  userProblems: [
    'Outbound sales workflows are time-consuming',
    'AI tools feel fragmented across the stack',
    'Sales teams need more consistent coaching',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['AI-driven sales UX', 'Enterprise workflows'],
    whyNot: ['Crowded category', 'Sales adoption risk'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B funding and $70M total raised'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI sales assistants are still early in adoption.',
    tailwinds: ['AI adoption in sales', 'Remote selling demand'],
    headwinds: ['Incumbent sales platforms', 'Buyer trust concerns'],
    moatType: 'data-flywheel',
    moatStrength: 'Sales interaction data improves AI performance.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Source', url: 'https://www.nooks.ai' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/nooks-raises-43m-series-b-and-announces-noam-shazeer-of-nvidia-and-jaime-lichtenstein-joining-board-302254870.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/nooks' }
  ],
};
