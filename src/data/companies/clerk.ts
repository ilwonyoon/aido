import { Company } from '../types';

export const clerk: Company = {
  id: 'clerk',
  name: 'Clerk',
  description: 'Authentication and user management platform for developers.',
  website: 'https://clerk.com',
    screenshot: '/screenshots/clerk-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/clerk-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$105M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$50M',
      date: '2025-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Auth0',
      description: 'Developer-focused authentication platform.',
      whyTheyWin: 'Mature ecosystem and enterprise adoption.',
    },
    {
      name: 'Firebase Auth',
      description: 'Authentication service within Firebase platform.',
      whyTheyWin: 'Default option for many Firebase developers.',
    },
    {
      name: 'Supabase Auth',
      description: 'Open-source authentication for developers.',
      whyTheyWin: 'Open-source appeal and integrated backend stack.',
    },
  ],
  marketPosition: 'Developer-first authentication with modern UI and tooling.',
  moat: [
    'Developer experience focus with polished UX',
    'Drop-in auth UI components',
    'Strong integrations with modern web stacks',
  ],
  vsGiants: 'Competes on developer experience and speed-to-implementation.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Authentication platform is not AI-first.',
  aiDesignChallenges: [
    'Designing reliable onboarding and identity workflows',
    'Balancing security requirements with usability',
    'Communicating auth state clearly across apps',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Colin Sidoti',
      role: 'Co-founder & CEO',
      background: 'Co-founded Clerk in 2019 with his brother to make authentication easier for developers; grew managed users to 500% in 5 months.',
    },
    {
      name: 'Braden Sidoti',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder at Clerk building developer-first authentication and user management infrastructure.',
    },
  ],
  whyBuilding: 'Make authentication easier to implement and manage for developers.',
  beliefs: [
    'Authentication should be simple and secure',
    'Great DX drives adoption',
    'Developers need reliable auth UI and APIs',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Strong developer demand for auth tooling',
    'Series C indicates growth and adoption',
  ],
  redFlags: [
    'Highly competitive auth market',
    'Security and compliance expectations are high',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Auth flow logic and error handling',
        'Session management and state UX',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Tracking auth success rates and drop-offs',
        'User feedback on auth flows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Authentication UI components',
        'Developer dashboard and settings UX',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building apps that need authentication',
    secondary: 'Product teams managing identity infrastructure',
  },
  userProblems: [
    'Auth setup is time-consuming and complex',
    'Security requirements are hard to manage in-house',
    'User onboarding flows often fail due to auth friction',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/clerk/0c35b81a-76c9-4d6b-ab1e-e13b9112f4fa',
      aboutRole: 'Design product experiences for developer authentication workflows.',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Large developer ecosystem and product impact',
      'Opportunity to design auth UX at scale',
    ],
    whyNot: [
      'Competitive market with incumbents',
      'Security constraints limit design flexibility',
    ],
    nextActions: [
      'Review role details and team structure',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Source', url: 'https://clerk.com' },
    { title: 'Source', url: 'https://clerk.com/careers' },
    { title: 'Source', url: 'https://clerk.com/blog/series-c' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/clerk/0c35b81a-76c9-4d6b-ab1e-e13b9112f4fa' },
    { title: 'Source', url: 'https://startups.gallery/companies/clerk' }
  ],
};
