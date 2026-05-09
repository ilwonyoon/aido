import { Company } from '../types';

export const comulate: Company = {
  id: 'comulate',
  name: 'Comulate',
  description: 'AI-powered platform for insurance operations and servicing workflows.',
  website: 'https://comulate.com',
    screenshot: '/screenshots/comulate-screenshot.png',
    ogImage: '/screenshots/comulate-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$20M+',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$20M',
      date: '2025-02',
      leadInvestors: ['Felicis'],
    },
  ],
  revenue: '8-figure ARR cited in current Product Designer role',
  growth: 'Record growth from zero to 8-figure ARR within three years of founding cited in current role listing.',
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
    'Current Product Designer role describes founding Product Designer scope',
    '8-figure ARR and strong customer love cited in role listing',
  ],
  redFlags: [
    'Long enterprise sales cycles',
    'Regulatory compliance risk',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Lean design function; current Product Designer role has founding Product Designer scope',
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
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/comulate/7686253a-3728-4d95-8417-3b206e669c17',
      compensation: '$160K-$210K + equity',
      aboutRole:
        'Founding Product Designer scope reimagining insurance back-office workflows, design language, visual systems, interaction patterns, and user research.',
      whyInteresting:
        'The listing title is Product Designer, but the role body explicitly calls it a founding Product Designer role for a high-growth AI insurance operations platform.',
    },
  ],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing says Comulate is hiring predominantly in San Francisco and emphasizes in-person collaboration for velocity and culture.',
      url: 'https://jobs.ashbyhq.com/comulate/7686253a-3728-4d95-8417-3b206e669c17',
    },
  ],

  // My Tracking
  tracking: {
    status: 'applied',
    fitScore: 8,
    whyJoin: [
      'Founding Product Designer scope in a high-growth vertical AI company',
      'Complex insurance operations workflows with strong product design surface',
      '8-figure ARR and Series B backing cited in public sources/listing',
    ],
    whyNot: ['Regulated domain complexity', 'Long implementation cycles', 'On-site San Francisco expectation'],
    nextActions: [
      'Track application response and recruiter follow-up',
      'Prepare examples around AI workflow automation, vertical SaaS, and operational UX',
      'Clarify design team size and whether this is truly first/sole product designer if they respond',
    ],
    notes: 'Applied to Product Designer role on 2026-05-09.',
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '8-figure ARR within three years of founding cited in current role listing',
    userGrowth: 'Unknown',
    signals: [
      'Series B funding announced',
      'Live Product Designer role with founding Product Designer scope',
      'Record growth and 8-figure ARR cited in role listing',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Insurance operations automation remains early-stage.',
    tailwinds: ['Insurer cost pressure', 'AI adoption in back office'],
    headwinds: ['Legacy system inertia', 'Compliance risk'],
    moatType: 'vertical-specialization',
    moatStrength: 'Insurance-focused workflow automation.',
  },

  // Meta
  lastUpdated: '2026-05-09',
  sources: [
    { title: 'Source', url: 'https://comulate.com' },
    { title: 'Product Designer at Comulate', url: 'https://jobs.ashbyhq.com/comulate/7686253a-3728-4d95-8417-3b206e669c17' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/comulate-raises-20m-series-b-to-transform-insurance-operations-302457978.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/comulate' }
  ],
};
