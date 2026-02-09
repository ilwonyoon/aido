import { Company } from '../types';

export const corgi: Company = {
  id: 'corgi',
  name: 'Corgi',
  description:
    'AI-native full-stack insurance carrier focused on startups and high-growth companies.',
  website: 'https://www.corgi.insure/',
    screenshot: '/screenshots/corgi-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/corgi-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['smb'],
  category: 'creative-media' as const,

  industries: ['creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$108M',
  fundingHistory: [
    { stage: 'Series A', amount: '$108M', date: '2026-01' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Startups and high-growth companies (per YC profile).',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $108M to scale AI-native insurance platform (Jan 2026)',
      'Licensed, full-stack insurance carrier in the U.S.',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AI-native insurance underwriting is still emerging.',
    tailwinds: [
      'Startups demand faster and more transparent insurance',
      'AI-driven underwriting can reduce cycle times',
      'Insurtech adoption growing in SMB and startup segments',
    ],
    headwinds: [
      'Regulatory requirements for insurance carriers',
      'Capital intensity in underwriting and risk management',
      'Competition from incumbents and insurtech peers',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Corgi becomes the default insurer for startups.',
  },

  // Competition
  competitors: [
    {
      name: 'Hiscox',
      description: 'SMB and startup-focused insurance provider.',
      whyTheyWin: 'Brand trust and underwriting scale.',
    },
    {
      name: 'Embroker',
      description: 'Digital insurance broker for startups and SMBs.',
      whyTheyWin: 'Distribution and broker relationships.',
    },
    {
      name: 'Coalition',
      description: 'Cyber insurance and security platform.',
      whyTheyWin: 'Security-led underwriting and scale.',
    },
  ],
  marketPosition: 'AI-native, full-stack insurance carrier for startup risk profiles.',
  moat: [
    'Full-stack carrier model with AI-driven underwriting',
    'Focus on startup-specific risk profiles',
    'Regulatory approval as a licensed carrier',
  ],
  vsGiants: 'Focused on startup insurance with AI-native workflows vs generalist carriers.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Corgi uses AI to automate underwriting and policy management for startups.',
  aiDesignChallenges: [
    'Trust and transparency in AI underwriting decisions',
    'Workflow design for policy issuance and renewals',
    'Explaining coverage and pricing clearly to founders',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Nico Laqua',
      role: 'Co-founder & CEO',
      background: 'Co-founded Corgi to modernize insurance for startups.',
    },
    {
      name: 'Emily Yuan',
      role: 'Co-founder',
      background: 'Co-founded Corgi and leads product and growth.',
    },
  ],
  whyBuilding:
    'Make insurance faster, clearer, and more startup-friendly with AI-native workflows.',
  beliefs: [
    'Insurance should be as fast as modern startups',
    'AI can streamline underwriting and renewals',
    'Founders deserve transparent, simple coverage',
  ],
  designPhilosophy: 'Make complex insurance workflows simple and trustworthy.',
  greenFlags: [
    'Regulatory approval as a licensed carrier',
    'Large funding round for scaling',
  ],
  redFlags: [
    'Highly regulated, capital-intensive industry',
    'Long sales cycles and risk exposure',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Underwriting workflows and policy issuance logic',
        'Risk assessment and data validation flows',
        'Exception handling for edge cases',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quote accuracy and conversion metrics',
        'Renewal and claims funnel analytics',
        'User feedback and trust signals',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Founder-facing onboarding and quote UX',
        'Policy management dashboards',
        'Claims submission and status tracking',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Startups and high-growth companies',
    secondary: 'Founders and finance/ops leaders',
  },
  userProblems: [
    'Insurance onboarding is slow and opaque',
    'Coverage is hard to understand and compare',
    'Renewals and policy changes are time-consuming',
    'Founders need coverage aligned to startup risk',
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
      'AI-native approach in a legacy industry',
      'Opportunity to simplify complex insurance UX',
    ],
    whyNot: [
      'Regulatory and capital intensity',
      'Competition from incumbents and insurtech peers',
    ],
    nextActions: [
      'Track product launches and policy updates',
      'Monitor hiring signals in design or product',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Source', url: 'https://www.ycombinator.com/companies/corgi' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/corgi-raises-108-million-to-launch-its-ai-native-full-stack-insurance-carrier-302346204.html' },
    { title: 'Source', url: 'https://www.corgi.insure/' },
    { title: 'Source', url: 'https://startups.gallery/companies/corgi' }
  ],
};
