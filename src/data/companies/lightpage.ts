import { Company } from '../types';

export const lightpage: Company = {
  id: 'lightpage',
  name: 'Lightpage',
  description:
    'Workspace for faster writing and thinking with AI assistance and a minimal editor.',
  website: 'https://lightpage.com/',
    screenshot: '/screenshots/lightpage-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/lightpage-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['productivity'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Writers, researchers, and teams using AI-assisted writing workflows.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Focus on AI-assisted writing workflows',
      'San Francisco headquarters',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI writing tools continue to expand in adoption.',
    tailwinds: [
      'Demand for faster writing and knowledge work',
      'AI-assisted drafting becoming mainstream',
      'Teams adopting lightweight docs tools',
    ],
    headwinds: [
      'Crowded AI writing market',
      'Differentiation vs incumbent editors',
      'User retention challenges',
    ],
    moatType: 'brand',
    moatStrength: 'Moderate if Lightpage delivers a uniquely fast writing workflow.',
  },

  // Competition
  competitors: [
    {
      name: 'Notion AI',
      description: 'Docs and workspace with AI assistance.',
      whyTheyWin: 'Large user base and integrated workspace.',
    },
    {
      name: 'Coda',
      description: 'Docs platform with AI features.',
      whyTheyWin: 'Strong team workflows and templates.',
    },
    {
      name: 'Google Docs + Gemini',
      description: 'Docs with AI-assisted writing features.',
      whyTheyWin: 'Distribution and familiarity.',
    },
  ],
  marketPosition: 'Minimal, AI-assisted writing workspace focused on speed and clarity.',
  moat: [
    'Lightweight writing workflow and focus',
    'AI assistance integrated into writing flow',
    'Potential for strong user habit formation',
  ],
  vsGiants: 'Focuses on minimal writing flow vs feature-heavy workspaces.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI assistance is core to Lightpage writing workflows.',
  aiDesignChallenges: [
    'Maintaining writer control with AI assistance',
    'Clarity on AI suggestions and edits',
    'Balancing speed with accuracy and tone',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Kasra Kyanzadeh',
      role: 'Founder & CEO',
      background: '13 years of experience building product-led engineering teams; 4th hire at Airtable; first employee at Watershed.',
    },
  ],
  whyBuilding:
    'Help people write faster and think more clearly with AI assistance.',
  beliefs: [
    'Writing tools should reduce friction',
    'AI should accelerate thinking, not replace it',
    'Focus improves creativity and clarity',
  ],
  designPhilosophy: 'Minimal, distraction-free writing with clear AI support.',
  greenFlags: [
    'Clear user value in writing speed',
    'Strong market tailwinds for AI writing',
  ],
  redFlags: [
    'Crowded AI writing category',
    'Retention risk if value is not differentiated',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI suggestion workflows and controls',
        'Editing and revision logic',
        'User preferences and personalization',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality metrics for AI suggestions',
        'User feedback loops for writing outcomes',
        'Usage and retention analytics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Minimal editor UI and writing flow',
        'Inline AI assistance surfaces',
        'Document organization and navigation',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Writers, researchers, and knowledge workers',
    secondary: 'Teams needing fast, clear writing workflows',
  },
  userProblems: [
    'Writing is slow and often blocked',
    'Feedback and revisions are time-consuming',
    'AI tools can feel intrusive or unclear',
    'Users want simpler, faster writing workflows',
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
    fitScore: 6,
    whyJoin: [
      'Clear AI writing use case with design leverage',
      'Opportunity to craft a minimal writing experience',
    ],
    whyNot: [
      'Highly competitive space',
      'Differentiation risk against incumbents',
    ],
    nextActions: [
      'Track product updates and user adoption',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Lightpage website', url: 'https://lightpage.com/' },
    { title: 'Lightpage on startups.gallery', url: 'https://startups.gallery/companies/lightpage' },
  ],
};
