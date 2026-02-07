import { Company } from '../types';

export const quo: Company = {
  id: 'quo',
  name: 'Quo',
  description: 'Business phone platform for modern teams.',
  website: 'https://quo.com',
    screenshot: '/screenshots/quo-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/quo-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$105M',
  fundingHistory: [
    { stage: 'Unknown', amount: '$105M', date: '2025-09' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'OpenPhone',
      description: 'Business phone system for startups and SMBs.',
      whyTheyWin: 'Strong product-market fit in SMBs.',
    },
    {
      name: 'Dialpad',
      description: 'AI-powered business communications platform.',
      whyTheyWin: 'Enterprise adoption and AI features.',
    },
    {
      name: 'Zoom Phone',
      description: 'Cloud phone system from Zoom.',
      whyTheyWin: 'Bundled distribution and platform scale.',
    },
  ],
  marketPosition: 'Modern business phone product with a focus on simplicity.',
  moat: [
    'Focused business phone UX',
    'Modern cloud communications stack',
    'Positioning for SMB and growth teams',
  ],
  vsGiants: 'Competes on modern UX and simplicity rather than enterprise bloat.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may enhance calling workflows but is not the core product.',
  aiDesignChallenges: [
    'Designing low-friction call management',
    'Balancing reliability with new AI features',
    'Communicating call insights clearly',
  ],

  // Founders & Vision
  founders: [
    { name: 'Mahyar Raissi', role: 'Co-Founder & CEO', background: 'Canadian entrepreneur. Co-founded OpenPhone (now Quo) in 2018. YC alum.' },
    { name: 'Daryna Kulya', role: 'Co-Founder & COO', background: 'Co-founded OpenPhone (now Quo) in 2018. Moved to Bay Area after YC.' },
  ],
  whyBuilding: 'Make business calling simple and modern for teams.',
  beliefs: [
    'Teams need a simpler phone system',
    'Modern UX increases adoption of business tools',
    'Reliability is essential for communication products',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear focus on business phone UX',
    'Remote-friendly positioning',
  ],
  redFlags: [
    'Competitive market with well-funded incumbents',
    'Reliability expectations are high for voice products',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Call routing and handling logic',
        'Voicemail and transcription workflows',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Monitoring call quality and reliability',
        'User feedback for call UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Call control UI and team inbox',
        'Admin and provisioning dashboards',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'SMB and startup teams using business phones',
    secondary: 'Customer support and sales teams',
  },
  userProblems: [
    'Legacy phone systems are complex to set up',
    'Teams lack visibility into call activity',
    'Call routing and collaboration are hard to manage',
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
      'Modern comms UX with clear customer pain points',
      'Opportunity to design simple voice workflows',
    ],
    whyNot: [
      'Crowded market with incumbents',
      'Voice reliability and compliance complexity',
    ],
    nextActions: [
      'Monitor careers page for design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Quo', url: 'https://quo.com' },
    { title: 'Quo Careers', url: 'https://quo.com/careers' },
    { title: 'Quo on startups.gallery', url: 'https://startups.gallery/companies/quo' },
  ],
};
