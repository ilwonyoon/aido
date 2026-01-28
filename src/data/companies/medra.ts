import { Company } from '../types';

export const medra: Company = {
  id: 'medra',
  name: 'Medra',
  description:
    'Physical AI platform integrated into laboratory workflows to automate and accelerate experiments.',
  website: 'https://www.medra.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Research labs and biotech teams running physical experiments.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage physical AI platform',
      'Onsite team focused on lab integration',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Lab automation demand is growing across biotech and pharma.',
    tailwinds: [
      'Rising investment in lab automation',
      'Demand for faster experimentation cycles',
      'AI adoption in life sciences workflows',
    ],
    headwinds: [
      'Complex integration with physical lab systems',
      'High hardware and implementation costs',
      'Long enterprise sales cycles',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Medra builds robust lab automation and AI integration.',
  },

  // Competition
  competitors: [
    {
      name: 'TetraScience',
      description: 'Data platform for life sciences and labs.',
      whyTheyWin: 'Enterprise penetration and data integrations.',
    },
    {
      name: 'Emerald Cloud Lab',
      description: 'Remote lab platform for automated experiments.',
      whyTheyWin: 'Established lab infrastructure and service delivery.',
    },
    {
      name: 'Strateos',
      description: 'Cloud-based lab automation services.',
      whyTheyWin: 'Automation expertise and lab operations scale.',
    },
  ],
  marketPosition: 'Physical AI platform that integrates directly into lab workflows.',
  moat: [
    'Deep integration with lab hardware and processes',
    'Automation workflows tailored to experiments',
    'Potential data flywheel from lab outcomes',
  ],
  vsGiants: 'Competes with lab automation and data platforms by focusing on AI-native workflows.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Medra centers on AI to automate physical lab work.',
  aiDesignChallenges: [
    'Designing AI workflows that control physical experiments',
    'Reliability and safety guardrails for automation',
    'Trust and auditability for lab outcomes',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown',
    },
  ],
  whyBuilding:
    'Accelerate scientific discovery by integrating AI into physical lab workflows.',
  beliefs: [
    'Lab automation is essential for faster discovery',
    'AI should augment scientists, not replace them',
    'Reliable experimentation depends on integrated systems',
  ],
  designPhilosophy: 'Reliable, safe, and transparent AI in physical lab environments.',
  greenFlags: [
    'Strong tailwinds in lab automation',
    'AI-native approach to physical workflows',
  ],
  redFlags: [
    'Hardware-heavy deployment risk',
    'Long sales cycles in life sciences',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Experiment automation workflows',
        'Safety and error handling logic',
        'Permissions for lab equipment control',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Experiment success metrics and QA',
        'Audit logs for lab runs',
        'Feedback loops for AI improvements',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Lab operator consoles',
        'Experiment setup and monitoring',
        'Data visualization for results',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Biotech and pharma lab teams',
    secondary: 'Research institutions and innovation labs',
  },
  userProblems: [
    'Lab experiments are slow and manual',
    'Automation tools are fragmented and hard to integrate',
    'Experiment reliability and reproducibility are challenging',
    'Teams need faster iteration on lab workflows',
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
    fitScore: 7,
    whyJoin: [
      'High-impact physical AI workflows',
      'Mission-driven scientific automation',
    ],
    whyNot: [
      'Complex hardware integration',
      'Long enterprise adoption cycles',
    ],
    nextActions: [
      'Track lab deployments and partnerships',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'Medra website', url: 'https://www.medra.ai/' },
    { title: 'Medra careers', url: 'https://www.medra.ai/careers' },
    { title: 'Medra on startups.gallery', url: 'https://startups.gallery/companies/medra' },
  ],
};
