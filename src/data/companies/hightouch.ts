import { Company } from '../types';

export const hightouch: Company = {
  id: 'hightouch',
  name: 'Hightouch',
  description:
    'Data activation platform that syncs warehouse data into SaaS tools so teams can run personalized marketing, sales, and lifecycle workflows.',
  website: 'https://hightouch.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Business
  stage: 'Series C',
  valuation: '$1.2B (Feb 2025)',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$80M',
      date: '2025-02',
      valuation: '$1.2B',
      leadInvestors: ['Sapphire Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'PetSmart, WHOOP, and Accor (per Series C announcement).',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C: $80M led by Sapphire Ventures (Feb 2025)',
      'Valuation reported at $1.2B (Feb 2025)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: data activation is still consolidating across the modern data stack.',
    tailwinds: [
      'Warehouse adoption as source of truth for customer data',
      'Demand for personalization across go-to-market teams',
      'Shift from point tools to unified data activation',
    ],
    headwinds: [
      'Competition from data platform incumbents',
      'Complex integrations across data stacks',
      'Data governance and privacy requirements',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong if Hightouch becomes the default activation layer for warehouses.',
  },

  // Competition
  competitors: [
    {
      name: 'Census',
      description: 'Data activation platform syncing warehouse data to SaaS tools.',
      whyTheyWin: 'Strong integrations and developer adoption.',
    },
    {
      name: 'Segment (Twilio)',
      description: 'Customer data platform with activation features.',
      whyTheyWin: 'Broad enterprise adoption and ecosystem reach.',
    },
    {
      name: 'mParticle',
      description: 'Customer data platform focused on enterprise data activation.',
      whyTheyWin: 'Enterprise distribution and governance capabilities.',
    },
  ],
  marketPosition: 'Warehouse-native data activation for marketing, sales, and lifecycle teams.',
  moat: [
    'Deep integrations with data warehouses and SaaS tools',
    'Warehouse-native architecture preferred by data teams',
    'Growing customer base and usage footprint',
  ],
  vsGiants: 'Focused on warehouse-native activation vs legacy CDPs.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Hightouch adds AI decisioning to data activation workflows but remains rooted in the data stack.',
  aiDesignChallenges: [
    'Trust and transparency for AI decisioning',
    'Data governance and consent management UX',
    'Operational workflows across multiple GTM teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tejas Manohar',
      role: 'Co-founder',
      background: 'Former Stripe and Segment; co-founded Hightouch.',
    },
    {
      name: 'Kashish Gupta',
      role: 'Co-founder',
      background: 'Former engineer at Segment; co-founded Hightouch.',
    },
    {
      name: 'Josh Curl',
      role: 'Co-founder',
      background: 'Former engineer at Segment; co-founded Hightouch.',
    },
  ],
  whyBuilding:
    'Help teams activate warehouse data into the tools they already use, without complex engineering work.',
  beliefs: [
    'The warehouse is the source of truth for customer data',
    'Activation should be self-serve for GTM teams',
    'Data teams should not be blocked by custom ETL work',
  ],
  designPhilosophy: 'Make data activation powerful but approachable for non-technical teams.',
  greenFlags: [
    'Strong growth and top-tier investors',
    'Clear product-market fit in the modern data stack',
  ],
  redFlags: [
    'Crowded data activation market',
    'High expectations for data reliability and governance',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Activation logic and rule-building workflows',
        'Permissions and governance controls',
        'Automation and orchestration flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality monitoring and sync health dashboards',
        'AI decisioning metrics and validation',
        'Pipeline error handling and recovery UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Segment builder and audience management',
        'Activation status and reporting views',
        'Self-serve onboarding and docs UX',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Data, marketing, and lifecycle teams',
    secondary: 'Sales and revenue operations teams',
  },
  userProblems: [
    'Warehouse data is hard to activate in SaaS tools',
    'GTM teams depend on data teams for custom pipelines',
    'Data sync failures are hard to detect and debug',
    'Personalization requires better data access',
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
      'High-leverage product in the modern data stack',
      'Complex workflow and governance UX challenges',
    ],
    whyNot: [
      'Competitive landscape with strong incumbents',
      'High reliability expectations for data pipelines',
    ],
    nextActions: [
      'Track product releases and AI decisioning roadmap',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T19:25:00',
  sources: [
    { title: 'Hightouch website', url: 'https://hightouch.com/' },
    { title: 'Hightouch Series C announcement', url: 'https://hightouch.com/blog/announcing-our-series-c' },
    { title: 'Hightouch Series C (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/hightouch-raises-80m-series-c-at-1-2b-valuation-to-help-companies-launch-ai-decisioning-302373196.html' },
    { title: 'Hightouch co-founder bio (Tejas)', url: 'https://hightouch.com/authors/tejas-manohar' },
    { title: 'Hightouch co-founder bio (Kashish)', url: 'https://hightouch.com/authors/kashish-gupta' },
    { title: 'Hightouch co-founder bio (Josh)', url: 'https://hightouch.com/authors/josh-curl' },
    { title: 'Hightouch jobs (Greenhouse)', url: 'https://boards.greenhouse.io/hightouch' },
  ],
};
