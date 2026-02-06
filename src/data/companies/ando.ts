import { Company } from '../types';

export const ando: Company = {
  id: 'ando',
  name: 'Ando',
  description: 'Work messaging reimagined for modern teams.',
  website: 'https://ando.so',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/r9G3LxGxqoTXR8ifRbRwYiduc4Q5-8e99wEYjSaTYPC758bGdXTEKLG8gSjKKznNZNYdGA6ePN_sG47IsiC7_A.png',

    // OG Image
    ogImage: '/og-images/ando-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [],
  revenue: 'Pre-revenue',
  growth: 'Early stage - growth metrics N/A',
  runway: 'Not publicly disclosed',
  customers: 'Primary audience: Teams seeking lightweight messaging tools',

  // Competition
  competitors: [
    {
      name: 'Slack',
      description: 'Team communication platform for chat and collaboration.',
      whyTheyWin: 'Massive adoption and integrations ecosystem.',
    },
    {
      name: 'Microsoft Teams',
      description: 'Enterprise messaging and collaboration suite.',
      whyTheyWin: 'Bundled distribution with Microsoft 365.',
    },
    {
      name: 'Discord',
      description: 'Community and team chat platform.',
      whyTheyWin: 'Strong real-time communication UX and communities.',
    },
  ],
  marketPosition: 'New take on team messaging with modern UX.',
  moat: [
    'Focus on reimagined messaging UX',
    'Potential differentiation in interaction patterns',
    'Early-stage flexibility for experimentation',
  ],
  vsGiants: 'Competes on UX differentiation rather than platform breadth.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may augment messaging, but core product is communication.',
  aiDesignChallenges: [
    'Reducing communication overload',
    'Designing smarter triage or summaries if AI is added',
    'Balancing new UX with familiar patterns',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Reimagine work messaging for modern teams.',
  beliefs: [
    'Team communication tools should feel lighter and faster',
    'Design can reduce messaging fatigue',
    'New interaction patterns can improve collaboration',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Large, proven market opportunity',
    'Early stage allows bold UX experimentation',
  ],
  redFlags: [
    'Dominant incumbents with strong network effects',
    'High switching costs for teams',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Messaging logic and notification handling',
        'Conversation structure and organization',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Measuring engagement and message effectiveness',
        'User feedback on new interaction patterns',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Chat UI, inbox design, and message composition',
        'Team collaboration spaces',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Teams seeking lightweight messaging tools',
    secondary: 'Startups experimenting with new collaboration workflows',
  },
  userProblems: [
    'Chat tools create overload and distraction',
    'Conversations get lost in busy channels',
    'Existing tools feel heavy and complex',
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
    fitScore: 4,
    whyJoin: [
      'Opportunity to rethink team communication UX',
      'Greenfield product with design influence',
    ],
    whyNot: [
      'Incumbents have deep network effects',
      'High switching costs for teams',
    ],
    nextActions: [
      'Monitor for product design roles or product launch signals',
    ],
  },

  // Meta
  lastUpdated: '2026-02-04T18:40:00',
  sources: [
    { title: 'Ando', url: 'https://ando.so' },
    { title: 'Ando on startups.gallery', url: 'https://startups.gallery/companies/ando' },
  ],
};
