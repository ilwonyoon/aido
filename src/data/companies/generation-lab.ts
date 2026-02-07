import { Company } from '../types';

export const generationLab: Company = {
  id: 'generation-lab',
  name: 'Generation Lab',
  description: 'Biotech company focused on reversing biological age and improving longevity.',
  website: 'https://www.generationlab.com',
    screenshot: '/screenshots/generation-lab-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.generationlab.com/og/home.webp',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2c'],
  category: 'vertical-saas' as const,

  industries: ['healthcare'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11M',
  fundingHistory: [
    { stage: 'Seed', amount: '$11M', date: '2025-10' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Altos Labs',
      description: 'Longevity research company focused on cellular rejuvenation.',
      whyTheyWin: 'Strong capital base and research depth.',
    },
    {
      name: 'Calico',
      description: 'Aging research company backed by Alphabet.',
      whyTheyWin: 'Long-term funding and research resources.',
    },
    {
      name: 'Insilico Medicine',
      description: 'AI-driven drug discovery and longevity research.',
      whyTheyWin: 'AI platform and drug development pipeline.',
    },
  ],
  marketPosition: 'Longevity-focused biotech exploring biological age reversal.',
  moat: [
    'Research-led approach to longevity science',
    'Focus on biological age and healthspan',
    'Potential proprietary datasets and assays',
  ],
  vsGiants: 'Competes on focused longevity R&D rather than broad pharma pipelines.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may support research but is not the sole product.',
  aiDesignChallenges: [
    'Communicating complex scientific progress clearly',
    'Designing interfaces for longitudinal study data',
    'Balancing consumer expectations with scientific rigor',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alina Rui Su',
      role: 'Co-founder & CEO',
      background: 'Harvard PhD dropout; studied longevity at Harvard Medical School and Berkeley; previously founder and CEO of NovaXS.',
    },
    {
      name: 'Irina Conboy',
      role: 'Co-founder',
      background: 'UC Berkeley Bioengineering Professor with 20+ years pioneering aging science; discovered parabiosis rejuvenation (2005).',
    },
    {
      name: 'Michael Suswal',
      role: 'Co-founder',
      background: 'Previous company was unicorn Standard AI.',
    },
  ],
  whyBuilding: 'Advance science to extend healthspan and reverse biological aging.',
  beliefs: [
    'Biological age can be measured and improved',
    'Longevity science needs modern tooling',
    'Long-term research is essential for real impact',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear mission-driven science focus',
    'Seed-stage flexibility in research direction',
  ],
  redFlags: [
    'Long R&D timelines',
    'Scientific uncertainty and regulatory risk',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Research workflows and experimental tracking',
        'Data pipelines for biological metrics',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Outcome measurement and analysis',
        'Feedback loops for research insights',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Research dashboards and study management UI',
        'Participant or partner portals',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Researchers and longevity science teams',
    secondary: 'Consumers interested in healthspan improvement',
  },
  userProblems: [
    'Biological aging data is fragmented',
    'Longevity research is slow and costly',
    'Clear, actionable insights are scarce',
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
    fitScore: 3,
    whyJoin: [
      'Mission-driven longevity research',
      'Opportunity to design scientific tooling',
    ],
    whyNot: [
      'Long research cycles',
      'Unclear near-term product surface',
    ],
    nextActions: [
      'Monitor for product or research design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:55:00',
  sources: [
    { title: 'Generation Lab', url: 'https://www.generationlab.com' },
    { title: 'Generation Lab on startups.gallery', url: 'https://startups.gallery/companies/generation-lab' },
  ],
};
