import { Company } from '../types';

export const furtherAi: Company = {
  id: 'further-ai',
  name: 'FurtherAI',
  description: 'AI agents that automate insurance operations across intake, underwriting, and policy servicing.',
  website: 'https://www.furtherai.com',
    screenshot: '/screenshots/further-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Hybrid',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/67bce5e386b7ca213dda94ef/6953e855a94b89982f87028c_OG%20IMAGE.png',


  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['fintech'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    { stage: 'Series A', amount: '$25M', date: '2025-10' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Insurers, reinsurers, MGAs, and brokers; supports $15B+ in premiums (YC profile).',

  // Competition
  competitors: [
    {
      name: 'Sixfold',
      description: 'AI-powered underwriting automation for insurers.',
      whyTheyWin: 'Established insurer relationships and underwriting focus.',
    },
    {
      name: 'Hyperscience',
      description: 'Document processing and automation for insurance workflows.',
      whyTheyWin: 'Mature OCR and document automation capabilities.',
    },
    {
      name: 'Syllable',
      description: 'AI agents for insurance contact centers.',
      whyTheyWin: 'Strong focus on customer service automation.',
    },
  ],
  marketPosition: 'AI agents designed specifically for insurance operations.',
  moat: [
    'Insurance-specific workflow depth across underwriting and servicing',
    'Operational automation with measurable impact on premiums handled',
    'Focus on insurer compliance and auditability',
  ],
  vsGiants: 'Targets insurer workflows with domain-specific agents rather than general automation suites.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI agents are central to product value, automating core insurance workflows.',
  aiDesignChallenges: [
    'Trust and oversight in AI-driven underwriting decisions',
    'Designing exception handling for regulatory edge cases',
    'Communicating model rationale to underwriting teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aman Gour',
      role: 'Co-founder & CEO',
      background: 'Leads FurtherAI; background listed on YC profile.',
    },
    {
      name: 'Sashank Gondala',
      role: 'Co-founder & CTO',
      background: 'Leads engineering; background listed on YC profile.',
    },
  ],
  whyBuilding: 'Insurance operations remain manual and slow despite high volumes of structured data.',
  beliefs: [
    'AI agents can remove repetitive back-office insurance work',
    'Human oversight is essential for regulated decisions',
    'Workflow automation should be measurable and auditable',
  ],
  greenFlags: [
    'YC-backed team with clear insurance focus',
    'Large-scale premium processing cited on YC profile',
    'Hiring a founding product designer indicates design investment',
  ],
  redFlags: [
    'Regulatory and compliance scrutiny in insurance',
    'Long sales cycles with enterprise insurers',
    'High integration effort with legacy systems',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '8 total employees (YC profile)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Agent orchestration across underwriting workflows', 'Exception handling for compliance cases'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Automation performance tracking', 'Human review feedback loops'],
    },
    interface: {
      level: 'medium',
      tasks: ['Operations dashboards', 'Task queue and review UI'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Insurance operations and underwriting teams',
    secondary: 'Claims and policy servicing teams at insurers',
  },
  userProblems: [
    'Manual intake and underwriting processes slow premium flow',
    'Legacy systems require heavy human coordination',
    'Compliance checks add latency without clear visibility',
  ],

  // Open Roles
  openRoles: [
    {
          title: 'Founding Product Designer',
          location: 'San Francisco, CA',
          type: 'full-time',
          url: 'https://www.ycombinator.com/companies/furtherai',
          compensation: '$150K-$220K + 0.15-0.35% equity',
          aboutRole: 'Lead product design for AI insurance operations workflows.',
        }
  ],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Founding designer scope', 'AI-driven workflow automation'],
    whyNot: ['Regulated domain complexity', 'Enterprise sales cycles'],
    nextActions: ['Review YC job details for design expectations'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['YC-backed team', 'Hiring founding product designer'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Large insurance ops market with high automation potential.',
    tailwinds: ['Insurers adopting AI automation', 'Operational cost pressure'],
    headwinds: ['Data quality and integration challenges', 'Regulatory scrutiny'],
    moatType: 'vertical-specialization',
    moatStrength: 'Insurance workflow focus with measurable premium impact.',
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Source', url: 'https://www.furtherai.com' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/furtherai' },
    { title: 'Source', url: 'https://startups.gallery/companies/further-ai' }
  ],
};
