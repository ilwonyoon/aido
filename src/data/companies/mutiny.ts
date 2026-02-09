import { Company } from '../types';

export const mutiny: Company = {
  id: 'mutiny',
  name: 'Mutiny',
  description:
    'No-code platform for personalized B2B marketing experiences and conversion optimization.',
  website: 'https://www.mutinyhq.com/',
    screenshot: '/screenshots/mutiny-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/mutiny-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2c'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$50M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'B2B marketing teams and growth teams.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B stage marketing personalization platform',
      'Scaling enterprise customer adoption',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'B2B marketing personalization continues to expand as conversion optimization grows.',
    tailwinds: [
      'Rising demand for personalized marketing',
      'Growth teams investing in no-code tools',
      'Data-driven experiments are becoming standard',
    ],
    headwinds: [
      'Competitive martech landscape',
      'Integration complexity with marketing stacks',
      'ROI scrutiny from GTM teams',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if Mutiny becomes embedded in GTM workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Optimizely',
      description: 'Experimentation and personalization platform.',
      whyTheyWin: 'Enterprise footprint and experimentation depth.',
    },
    {
      name: 'VWO',
      description: 'Conversion optimization and personalization tooling.',
      whyTheyWin: 'Broad experimentation features.',
    },
    {
      name: 'HubSpot CMS',
      description: 'Marketing platform with personalization features.',
      whyTheyWin: 'Integrated marketing suite adoption.',
    },
  ],
  marketPosition: 'No-code personalization platform for B2B marketing teams.',
  moat: [
    'Embedded in GTM workflows',
    'No-code experimentation and personalization',
    'Integrations with CRM and data tools',
  ],
  vsGiants: 'Competes by focusing on no-code personalization vs full-suite marketing platforms.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Mutiny is a personalization platform, not AI-native.',
  aiDesignChallenges: [
    'Experiment setup and validation UX',
    'Data segmentation and targeting workflows',
    'Clear reporting for conversion outcomes',
  ],

  // Founders & Vision
  founders: [
    { name: 'Jaleh Rezaei', role: 'Co-Founder & CEO', background: 'Former early employee at Gusto. Previously in product marketing at VMware. YC S18.' },
    { name: 'Nikhil Mathew', role: 'Co-Founder & CTO', background: 'Former early employee at Gusto. Co-founded Mutiny in 2018.' },
  ],
  whyBuilding:
    'Give B2B marketing teams no-code tools to personalize and convert more users.',
  beliefs: [
    'Personalization should be easy for marketers',
    'Experimentation drives better growth outcomes',
    'Data-driven marketing requires accessible tools',
  ],
  designPhilosophy: 'No-code, data-driven workflows with clear experiment outcomes.',
  greenFlags: [
    'Strong B2B personalization demand',
    'No-code positioning for GTM teams',
  ],
  redFlags: [
    'Crowded martech category',
    'Integration-heavy product surface area',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Experiment and personalization logic',
        'Segmentation and targeting rules',
        'Workflow approvals and publishing',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Conversion analytics and dashboards',
        'Experiment results reporting',
        'Attribution and ROI tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'No-code editor UX',
        'Personalization setup flows',
        'Reporting and insights UI',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'B2B marketing and growth teams',
    secondary: 'Revenue operations and demand gen teams',
  },
  userProblems: [
    'Personalization is hard to implement without engineering',
    'Experimentation workflows are complex',
    'Teams need faster iteration on marketing pages',
    'Attribution and ROI reporting is fragmented',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Senior Product Designer',
      location: 'New York City, NY',
      type: 'full-time',
      url: 'https://boards.greenhouse.io/mutinyhq/jobs/7855143002',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'No-code workflow design challenges',
      'High-impact experimentation UX',
    ],
    whyNot: [
      'Competitive martech landscape',
      'Complexity in enterprise integrations',
    ],
    nextActions: [
      'Track design org growth',
      'Monitor product expansion',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T00:20:00',
  sources: [
    { title: 'Source', url: 'https://www.mutinyhq.com/' },
    { title: 'Source', url: 'https://startups.gallery/companies/mutiny' },
    { title: 'Source', url: 'https://boards.greenhouse.io/mutinyhq/jobs/7855143002' }
  ],
};
