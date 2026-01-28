import { Company } from '../types';

export const ivo: Company = {
  id: 'ivo',
  name: 'Ivo',
  description:
    'AI contract intelligence platform that reviews, redlines, and extracts insights from enterprise contracts.',
  website: 'https://www.ivo.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['enterprise'],
  industries: ['infrastructure', 'legal'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$71M+',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$16M',
      date: '2025-02',
      leadInvestors: ['Costanoa Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$55M',
      date: '2026-01',
      leadInvestors: ['Blackbird'],
    },
  ],
  revenue: 'Unknown',
  growth: '6x ARR in the last 12 months',
  runway: 'Strong (Series B in Jan 2026)',
  customers: 'Uber, Reddit, IBM, Canva, Pinterest, WordPress (and more)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '6x ARR in the last 12 months',
    signals: [
      'Series B: $55M led by Blackbird (Jan 2026)',
      'Best-in-market trial win rate (~80-85%)',
      'Enterprise customer adoption (Uber, Reddit, IBM, Canva, Pinterest, WordPress)',
    ],
    tam: '$1.5B contract lifecycle management market (2022)',
    ceiling: 'Early innings: AI-native contract intelligence is still a new category.',
    tailwinds: [
      'Generative AI accelerating contract review and extraction workflows',
      'Legal teams under pressure to shorten contract cycle times',
      'Enterprise adoption of AI for legal operations growing',
    ],
    headwinds: [
      'Crowded CLM market with well-funded incumbents',
      'Consolidation risk as larger platforms acquire AI-native players',
      'High trust and accuracy requirements in legal workflows',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong if Ivo becomes the default redlining workflow embedded in legal teams.',
  },

  // Competition
  competitors: [
    {
      name: 'Ironclad',
      description: 'AI-powered contract lifecycle management platform.',
      whyTheyWin: 'Large customer base and established CLM platform.',
    },
    {
      name: 'LinkSquares',
      description: 'AI-powered contract lifecycle management platform.',
      whyTheyWin: 'End-to-end CLM with strong AI tooling and broad adoption.',
    },
    {
      name: 'Evisort',
      description: 'AI-powered contract management and analysis platform.',
      whyTheyWin: 'Deep contract analytics and enterprise workflow integrations.',
    },
  ],
  marketPosition: 'AI-native contract intelligence with redlining and insights inside legal workflows.',
  moat: [
    'AI redlining aligned to playbooks and historical agreements',
    'Strong trial win rate against competitors (~80-85%)',
    'Enterprise customer credibility and rapid ARR growth',
  ],
  vsGiants: 'Focuses on contract intelligence depth rather than broader document suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Contract intelligence is the core differentiator, augmenting legal review workflows with LLM-driven redlining and insights.',
  aiDesignChallenges: [
    'Trust design: communicating AI confidence and uncertainty in redlines',
    'Quality evaluation: benchmarking redlines against legal playbooks',
    'Workflow integration: keeping lawyers in Microsoft Word and existing tools',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jacob Duligall',
      role: 'Co-founder',
      background: 'Co-founded Ivo; background not publicly detailed.',
    },
    {
      name: 'Min-Kyu Jung',
      role: 'Co-founder',
      background: 'Co-founded Ivo; background not publicly detailed.',
    },
  ],
  whyBuilding:
    'Make contract intelligence available to every business by turning contracts into reliable, searchable insights.',
  beliefs: [
    'Cycle time is key — ship quickly and iterate.',
    'Quality matters — design and output must stand on their own.',
    'No backlogs — build what is needed now.',
    'Ownership mindset — act like an owner.',
  ],
  designPhilosophy: 'Fast iteration, high craft, and deep ownership across product + brand.',
  greenFlags: [
    'Series B funding with top-tier investors',
    '6x ARR growth and strong customer adoption',
    'High trial win rate vs competitors',
  ],
  redFlags: [
    'Highly competitive CLM market',
    'Onsite-only culture (5 days/week)',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Small (design hires are early-stage)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI redlining logic aligned to playbooks',
        'Fallbacks for ambiguous clauses and low-confidence outputs',
        'Prompting and guardrails for legal accuracy',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Defining win-rate metrics vs human legal review',
        'Quality scoring for clause suggestions',
        'Human-in-the-loop feedback collection',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Microsoft Word workflow UI',
        'Contract insights dashboards',
        'Redline and review visualization',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'In-house legal teams at mid-market and enterprise companies',
    secondary: 'Procurement and commercial operations teams',
  },
  userProblems: [
    'Contract review and redlining is slow and costly',
    'Playbook compliance is inconsistent across reviewers',
    'Key business insights are buried in contract language',
    'Legal teams lack scalable tools to handle contract volume',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (Onsite)',
      url: 'https://jobs.lever.co/ivo/7f29a899-83a2-45d7-a4eb-72e5a950ffd9',
      type: 'full-time',
      compensation: '$120K-$200K base (excluding equity)',
      level: 'Mid',
      aboutRole: 'Own end-to-end product and brand design for Ivo in an early-stage, fast-iterating team.',
      responsibilities: [
        'Lead the entire design and creative process',
        'Work directly with founders to define interactions and product strategy',
        'Own design across web, marketing, brand, and product',
        'Optimize for speed, usability, and accessibility',
      ],
      requirements: [
        '3+ years of product design experience',
        '0-1 product design experience with fast shipping cycles',
        'Strong portfolio demonstrating user-centered outcomes',
      ],
      whyInteresting:
        'Early-stage scope, direct founder collaboration, strong growth momentum, and clear AI-native workflow.',
    },
    {
      title: 'Senior Product Designer (Design Systems)',
      location: 'San Francisco, CA (Onsite)',
      url: 'https://jobs.lever.co/ivo/9abfc2d7-6b14-4ad4-a57d-25ada05af4cd',
      type: 'full-time',
      level: 'Senior',
      aboutRole:
        'Own and scale Ivo’s design system to enable rapid iteration and consistent product craft.',
      responsibilities: [
        'Create and scale component libraries, tokens, and interaction patterns',
        'Define design system vision, strategy, and roadmap',
        'Partner with engineering to ensure adoption and implementation quality',
        'Improve design-dev workflows and documentation standards',
      ],
      requirements: [
        '6+ years product design or design systems experience',
        '2+ years of people or cross-functional team leadership',
        'Expertise in Figma, tokens, and scalable component libraries',
      ],
      preferred: [
        'Experience building design systems for SaaS products',
        'Comfort in fast-paced, high-ownership environments',
      ],
      whyInteresting:
        'Rare opportunity to define a system from scratch at an AI-native legal workflow company.',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 8,
    whyJoin: [
      'AI-native workflow with high design leverage',
      'Direct founder collaboration and ownership',
      'Strong growth signals and enterprise adoption',
    ],
    whyNot: [
      'Onsite-only culture (5 days/week)',
      'Competitive CLM market with strong incumbents',
    ],
    nextActions: [
      'Evaluate product experience in Microsoft Word',
      'Track enterprise retention and expansion',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T12:30:00',
  sources: [
    { title: 'Ivo website', url: 'https://www.ivo.ai/' },
    { title: 'Ivo on startups.gallery', url: 'https://startups.gallery/companies/ivo' },
    { title: 'Ivo Series A (FinSMEs)', url: 'https://www.finsmes.com/2025/02/ivo-raises-16m-in-series-a-funding.html' },
    { title: 'Ivo Series B (GlobeNewswire)', url: 'https://www.globenewswire.com/news-release/2026/01/20/3221758/0/en/Ivo-raises-55M-to-transform-contracts-into-a-trusted-source-of-intelligence-for-every-business.html' },
    { title: 'Ivo Product Designer role', url: 'https://jobs.lever.co/ivo/7f29a899-83a2-45d7-a4eb-72e5a950ffd9' },
    { title: 'Ivo Senior Product Designer role', url: 'https://jobs.lever.co/ivo/9abfc2d7-6b14-4ad4-a57d-25ada05af4cd' },
    { title: 'CLM market overview (FT)', url: 'https://www.ft.com/content/1026fd13-d7f1-40de-a0d6-9e4843ac3d29' },
    { title: 'Ironclad PR', url: 'https://www.prnewswire.com/news-releases/ironclad-named-a-leader-in-the-2025-gartner-magic-quadrant-for-contract-life-cycle-management-for-third-consecutive-year-302615851.html' },
    { title: 'LinkSquares platform', url: 'https://linksquares.com/' },
    { title: 'Evisort platform', url: 'https://www.evisort.com/platform/platform-overview' },
  ],
};
