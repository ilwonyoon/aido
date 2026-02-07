import { Company } from '../types';

export const miter: Company = {
  id: 'miter',
  name: 'Miter',
  description: 'Meeting management product focused on structured agendas and notes.',
  website: 'https://miter.co',
    screenshot: '/screenshots/miter-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/miter-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['conversation-ai'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['productivity'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$23M',
  fundingHistory: [
    { stage: 'Series A', amount: '$23M', date: '2025-05' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Fellow',
      description: 'Meeting management and collaboration platform.',
      whyTheyWin: 'Established adoption in team meeting workflows.',
    },
    {
      name: 'Notion',
      description: 'Docs and collaboration platform used for meeting notes.',
      whyTheyWin: 'Wide usage and flexible docs.',
    },
    {
      name: 'Otter.ai',
      description: 'Meeting transcription and notes platform.',
      whyTheyWin: 'Strong transcription and meeting capture features.',
    },
  ],
  marketPosition: 'Meeting workflow product focused on structure and accountability.',
  moat: [
    'Structured meeting workflows',
    'Agenda-first collaboration model',
    'Focus on accountability and follow-through',
  ],
  vsGiants: 'Competes on structured meeting UX rather than generic docs or chat.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may enhance meeting workflows but is not the core product.',
  aiDesignChallenges: [
    'Designing frictionless meeting preparation',
    'Keeping meeting notes actionable',
    'Balancing structure with flexibility',
  ],

  // Founders & Vision
  founders: [
    { name: 'Dave Feldman', role: 'Founder & CEO', background: 'Former VP Design at Heap. Founded Miter in 2020.' },
    { name: 'Damian Wisniewski', role: 'Co-Founder & COO', background: 'Co-founded Miter to fix meeting workflows.' },
  ],
  whyBuilding: 'Help teams run better meetings with structure and clarity.',
  beliefs: [
    'Meetings should drive action, not confusion',
    'Structure improves team alignment',
    'Lightweight tools can reduce meeting fatigue',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear workflow focus on meetings',
    'Simple value proposition',
  ],
  redFlags: [
    'Meeting tooling is competitive',
    'Product appears to have shut down',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Agenda and action item workflows',
        'Team follow-up logic',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Measuring meeting effectiveness',
        'User feedback loops for adoption',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Meeting agenda and notes UI',
        'Collaboration and follow-up views',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Teams that run recurring meetings',
    secondary: 'Managers and team leads',
  },
  userProblems: [
    'Meetings lack structure and follow-through',
    'Notes and action items are scattered',
    'Meeting prep is time-consuming',
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
    fitScore: 2,
    whyJoin: [
      'If revived, clear meeting workflow UX challenges',
    ],
    whyNot: [
      'Company appears shut down',
    ],
    nextActions: [
      'Confirm current operating status',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:05:37',
  sources: [
    { title: 'Miter', url: 'https://miter.co' },
    { title: 'Miter on startups.gallery', url: 'https://startups.gallery/companies/miter' },
  ],
};
