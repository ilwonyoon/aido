import { Company } from '../types';

export const airops: Company = {
  id: 'airops',
  name: 'Airops',
  description: 'Platform for brands to win AI search with content and workflows.',
  website: 'https://www.airops.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/5A3Rb8-DMCgcFtxIKQcyrqOgdo3bOugRNC-hIG5XY1H6Ra1wOSGn0kRXiNmLUx-HDOYop_yawUbEoxd79w1rDg.png',

    // OG Image
    ogImage: '/og-images/airops-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'automation'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['infrastructure', 'creative-media'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$40M',
  fundingHistory: [
    { stage: 'Series B', amount: '$40M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Estimated 18-24 months post 2025-11 round ($40M); exact runway not publicly disclosed',
  customers: 'Primary audience: Content marketing teams and SEO leads',

  // Competition
  competitors: [
    {
      name: 'Jasper',
      description: 'AI content platform for marketing teams.',
      whyTheyWin: 'Brand awareness and marketing workflows.',
    },
    {
      name: 'Writer',
      description: 'Enterprise AI writing and content governance platform.',
      whyTheyWin: 'Enterprise positioning and compliance controls.',
    },
    {
      name: 'Surfer',
      description: 'SEO and content optimization platform.',
      whyTheyWin: 'Strong SEO feature set and content marketing adoption.',
    },
  ],
  marketPosition: 'AI search and content platform for marketing teams.',
  moat: [
    'Workflow tooling for AI search optimization',
    'Focus on content teams and brand performance',
    'Platform positioning for AI-native search',
  ],
  vsGiants: 'Competes by focusing on AI search optimization rather than generic content tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to content optimization and search workflows.',
  aiDesignChallenges: [
    'Designing AI-assisted content workflows',
    'Measuring search performance impact',
    'Balancing automation with brand voice control',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Help brands compete in AI-driven search with better content workflows.',
  beliefs: [
    'AI is reshaping how people discover content',
    'Brands need AI-native content systems',
    'Performance measurement is essential for adoption',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear positioning around AI search shift',
    'Series B stage suggests traction',
  ],
  redFlags: [
    'Crowded content tooling market',
    'Rapidly changing AI search ecosystem',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Content generation logic and workflows',
        'Automation rules for content publishing',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring AI content performance',
        'Feedback loops for optimization quality',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Editorial dashboards and content pipeline UI',
        'Brand guideline management interfaces',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Content marketing teams and SEO leads',
    secondary: 'Growth teams optimizing search performance',
  },
  userProblems: [
    'AI search is changing content discovery',
    'Content teams need better automation and measurement',
    'Maintaining brand voice with AI is difficult',
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
      'AI-first marketing workflows with clear UX challenges',
      'Opportunity to design content performance tooling',
    ],
    whyNot: [
      'Highly competitive content tooling market',
      'Rapidly shifting AI search landscape',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Airops', url: 'https://www.airops.com' },
    { title: 'Airops Careers', url: 'https://www.airops.com/careers' },
    { title: 'Airops on startups.gallery', url: 'https://startups.gallery/companies/airops' },
  ],
};
