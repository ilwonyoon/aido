import { Company } from '../types';

export const micro1: Company = {
  id: 'micro1',
  name: 'Micro1',
  description:
    'Hiring platform for sourcing and placing software engineers quickly.',
  website: 'https://micro1.ai/',
    screenshot: '/screenshots/micro1-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/micro1-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$35M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$35M',
      date: '2024-09',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Companies hiring engineers at scale.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A funding for hiring platform',
      'Onsite team in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Hiring platforms grow with demand for engineering talent.',
    tailwinds: [
      'Hiring teams need faster sourcing workflows',
      'Global talent access is expanding',
      'Engineering hiring remains competitive',
    ],
    headwinds: [
      'Competitive recruiting market',
      'Macro hiring slowdowns',
      'Reliance on two-sided marketplace dynamics',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Micro1 builds a strong talent marketplace.',
  },

  // Competition
  competitors: [
    {
      name: 'Toptal',
      description: 'Freelance talent marketplace.',
      whyTheyWin: 'Brand and talent network scale.',
    },
    {
      name: 'Hired',
      description: 'Tech talent marketplace for companies.',
      whyTheyWin: 'Established marketplace and hiring flows.',
    },
    {
      name: 'AngelList Talent',
      description: 'Hiring platform for startups.',
      whyTheyWin: 'Startup-focused network.',
    },
  ],
  marketPosition: 'Hiring marketplace focused on engineering talent placement.',
  moat: [
    'Talent marketplace network effects',
    'Faster hiring workflows',
    'Matchmaking and screening processes',
  ],
  vsGiants: 'Competes by focusing on speed and quality of engineering placements.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Micro1 likely uses AI to match and screen candidates, but hiring is the core workflow.',
  aiDesignChallenges: [
    'Trust and transparency in candidate matching',
    'Workflow clarity for hiring managers',
    'Candidate experience and communication',
  ],

  // Founders & Vision
  founders: [
    { name: 'Ali Ansari', role: 'Founder & CEO', background: 'Founded Micro1 in 2022 to reinvent engineering hiring with AI-powered vetting and matching.' },
  ],
  whyBuilding:
    'Help companies hire engineers faster with a streamlined marketplace.',
  beliefs: [
    'Hiring should be faster and less manual',
    'Quality talent matching is a competitive advantage',
    'Candidate experience matters for success',
  ],
  designPhilosophy: 'Transparent, fast hiring workflows for both sides of the market.',
  greenFlags: [
    'Strong demand for engineering talent',
    'Series A funding for scale',
  ],
  redFlags: [
    'Marketplace dynamics are hard to balance',
    'Hiring cycles are sensitive to macro conditions',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Matching and screening workflows',
        'Candidate pipeline routing',
        'Offer and acceptance logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Hiring funnel analytics',
        'Match quality evaluation',
        'Time-to-hire reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Employer dashboards',
        'Candidate profiles and messaging',
        'Interview scheduling UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Hiring managers and recruiters',
    secondary: 'Engineers seeking new roles',
  },
  userProblems: [
    'Hiring engineers is slow and time-consuming',
    'Matching quality is inconsistent',
    'Recruiters need better pipeline visibility',
    'Candidates want clear and fast communication',
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
      'Marketplace and workflow design challenges',
      'Hiring platform with scale potential',
    ],
    whyNot: [
      'Market sensitivity to hiring cycles',
      'Competitive recruiting landscape',
    ],
    nextActions: [
      'Track hiring volume and growth',
      'Monitor product updates',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T10:25:00',
  sources: [
    { title: 'Source', url: 'https://micro1.ai/' },
    { title: 'Source', url: 'https://startups.gallery/companies/micro1' }
  ],
};
