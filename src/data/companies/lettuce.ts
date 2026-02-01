import { Company } from '../types';

export const lettuce: Company = {
  id: 'lettuce',
  name: 'Lettuce',
  description: 'Automated accounting and tax platform for solopreneurs.',
  website: 'https://lettuce.co',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['smb'],
  industries: ['fintech'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$15M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2025-01',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Bench',
      description: 'Bookkeeping service for small businesses.',
      whyTheyWin: 'Established brand and service model.',
    },
    {
      name: 'Pilot',
      description: 'Accounting and CFO services for startups.',
      whyTheyWin: 'Strong startup positioning and service depth.',
    },
    {
      name: 'QuickBooks',
      description: 'Accounting software for small businesses.',
      whyTheyWin: 'Ubiquitous adoption and integrations.',
    },
  ],
  marketPosition: 'Automation-first accounting and tax platform for solo founders.',
  moat: [
    'Solopreneur-focused workflow automation',
    'Simplified tax and accounting experience',
    'Clear positioning for solo operators',
  ],
  vsGiants: 'Competes on automation and simplicity rather than full-featured accounting suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI likely augments automation but is not the sole product.',
  aiDesignChallenges: [
    'Designing trust in automated accounting outputs',
    'Explaining tax and compliance decisions clearly',
    'Balancing automation with user oversight',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Make accounting and taxes effortless for solopreneurs.',
  beliefs: [
    'Solo founders need tools that remove bookkeeping overhead',
    'Automation should reduce stress around compliance',
    'Simple UX drives adoption for non-experts',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear target segment with strong pain points',
    'Series A funding signal',
  ],
  redFlags: [
    'Highly competitive accounting market',
    'Compliance requirements are complex',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Automation rules for bookkeeping tasks',
        'Tax workflow logic and approvals',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Accuracy monitoring for automated entries',
        'User feedback loops for tax workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Financial dashboards and reporting views',
        'Onboarding and setup UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Solopreneurs and solo founders',
    secondary: 'Freelancers managing business finances',
  },
  userProblems: [
    'Bookkeeping is time-consuming and confusing',
    'Tax compliance is stressful for solo operators',
    'Manual reconciliation slows down financial clarity',
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
      'Clear solo founder use case',
      'Opportunity to simplify complex finance UX',
    ],
    whyNot: [
      'Regulatory complexity for tax workflows',
      'Competitive accounting tooling market',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Lettuce', url: 'https://lettuce.co' },
    { title: 'Lettuce Series A (GlobeNewswire)', url: 'https://www.globenewswire.com/news-release/2025/01/07/3005464/0/en/Lettuce-Raises-15M-Series-A-to-Scale-AI-Powered-Accounting-and-Tax-Management-for-Solopreneurs.html' },
    { title: 'Lettuce on startups.gallery', url: 'https://startups.gallery/companies/lettuce' },
  ],
};
