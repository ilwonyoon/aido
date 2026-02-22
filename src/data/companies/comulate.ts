import { Company } from '../types';

export const comulate: Company = {
  id: 'comulate',
  name: 'Comulate',
  description: 'AI-powered platform for insurance operations and servicing workflows.',
  website: 'https://comulate.com',
    screenshot: '/screenshots/comulate-screenshot.png',
    ogImage: '/screenshots/comulate-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',


  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['fintech'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$20M',
      date: '2025-02',
      leadInvestors: ['Felicis'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Insurers and brokers (per company positioning)',

  // Competition
  competitors: [
    {
      name: 'Guidewire',
      description: 'Core systems for insurance operations.',
      whyTheyWin: 'Deep enterprise adoption and long-term contracts.',
    },
    {
      name: 'Snapsheet',
      description: 'Claims automation platform for insurers.',
      whyTheyWin: 'Strong claims automation focus.',
    },
    {
      name: 'Origami Risk',
      description: 'Risk and insurance management software.',
      whyTheyWin: 'Broad suite and compliance expertise.',
    },
  ],
  marketPosition: 'AI automation for insurance operations and servicing workflows.',
  moat: [
    'Insurance-specific workflow automation',
    'AI-driven servicing efficiency gains',
    'Focused on operational cost reductions',
  ],
  vsGiants: 'Competes by modernizing insurance workflows with AI-first automation.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to automating insurance operations.',
  aiDesignChallenges: [
    'Designing trust in automated decisions',
    'Handling exceptions and regulatory compliance',
    'Ensuring clear audit trails for AI actions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jordan Katz',
      role: 'Co-founder & CEO',
      background: 'Built Asana product from Series C to IPO before co-founding Comulate.',
    },
    {
      name: 'Michael Mattheakis',
      role: 'Co-founder & CTO',
      background: 'Former Meta engineer and 10th employee at Brex, where he built financial software.',
    },
  ],
  whyBuilding: 'Insurance operations remain manual; AI can reduce cost and turnaround time.',
  beliefs: [
    'AI can modernize legacy insurance workflows',
    'Operational transparency is essential in regulated markets',
    'Automation should augment human teams, not replace them',
  ],
  greenFlags: [
    'Series B funding announced with Felicis participation',
    'Clear focus on insurance ops efficiency',
  ],
  redFlags: [
    'Long enterprise sales cycles',
    'Regulatory compliance risk',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Automation rules and workflow orchestration', 'Exception handling logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Operational analytics', 'Automation quality review'],
    },
    interface: {
      level: 'medium',
      tasks: ['Operations dashboards', 'Task review interfaces'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Insurance operations teams',
    secondary: 'Brokerage and servicing teams',
  },
  userProblems: [
    'Insurance servicing processes are slow and manual',
    'Legacy systems create fragmented workflows',
    'Compliance requirements add overhead',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['AI automation in insurance', 'Enterprise workflow design'],
    whyNot: ['Regulated domain complexity', 'Long implementation cycles'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B funding announced'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Insurance operations automation remains early-stage.',
    tailwinds: ['Insurer cost pressure', 'AI adoption in back office'],
    headwinds: ['Legacy system inertia', 'Compliance risk'],
    moatType: 'vertical-specialization',
    moatStrength: 'Insurance-focused workflow automation.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Source', url: 'https://comulate.com' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/comulate-raises-20m-series-b-to-transform-insurance-operations-302457978.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/comulate' }
  ],
};
