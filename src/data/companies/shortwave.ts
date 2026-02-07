import { Company } from '../types';

export const shortwave: Company = {
  id: 'shortwave',
  name: 'Shortwave',
  description: 'AI-native email and productivity platform focused on faster workflows.',
  website: 'https://www.shortwave.com',
    screenshot: '/screenshots/shortwave-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/shortwave-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['infrastructure', 'productivity'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$9M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Superhuman',
      description: 'Premium email client focused on speed and productivity.',
      whyTheyWin: 'Strong brand and power-user adoption.',
    },
    {
      name: 'Gmail',
      description: 'Google email platform with AI features.',
      whyTheyWin: 'Default distribution and ecosystem integration.',
    },
    {
      name: 'Hey',
      description: 'Opinionated email product with workflow controls.',
      whyTheyWin: 'Distinct positioning and loyal users.',
    },
  ],
  marketPosition: 'AI-first email experience designed for faster triage and collaboration.',
  moat: [
    'AI-native email workflows',
    'Productivity focus for power users',
    'Collaboration features built into inbox workflows',
  ],
  vsGiants: 'Competes on AI-native workflows rather than default inbox distribution.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is a core differentiator for email productivity workflows.',
  aiDesignChallenges: [
    'Designing reliable AI summaries and triage',
    'Balancing automation with manual control',
    'Building trust in AI-driven inbox actions',
  ],

  // Founders & Vision
  founders: [
    { name: 'Andrew Lee', role: 'Co-Founder & CEO', background: 'Co-founder of Firebase (acquired by Google in 2014). Built products used by millions at Firebase and Google.' },
    { name: 'Jacob Wenger', role: 'Co-Founder & CPO', background: 'Co-founded Shortwave. Previously at Firebase and Google.' },
  ],
  whyBuilding: 'Make email faster and more manageable with AI workflows.',
  beliefs: [
    'Email overload requires smarter tooling',
    'AI can reduce manual triage work',
    'Speed and focus are essential for productivity',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear AI productivity focus',
    'Strong product differentiation vs traditional email clients',
  ],
  redFlags: [
    'Heavy reliance on third-party email ecosystems',
    'Incumbents can add similar AI features',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Inbox automation and triage logic',
        'AI-driven reply and summary workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring productivity gains from AI features',
        'User feedback loops on AI accuracy',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Inbox UI and email composition experience',
        'Collaboration and workflow controls',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Professionals managing high-volume inboxes',
    secondary: 'Teams coordinating email-based workflows',
  },
  userProblems: [
    'Inbox overload slows down work',
    'Manual triage is time-consuming',
    'Existing email clients lack strong workflow automation',
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
    fitScore: 6,
    whyJoin: [
      'AI-first productivity UX',
      'Opportunity to design core inbox workflows',
    ],
    whyNot: [
      'Strong competition from incumbents',
      'Reliance on email platform integrations',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:05:37',
  sources: [
    { title: 'Shortwave AI Email', url: 'https://www.shortwave.com/ai-email/a' },
    { title: 'Shortwave on startups.gallery', url: 'https://startups.gallery/companies/shortwave' },
  ],
};
