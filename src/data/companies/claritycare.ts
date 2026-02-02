import { Company } from '../types';

export const claritycare: Company = {
  id: 'claritycare',
  name: 'ClarityCare',
  description: 'AI-powered utilization management platform for medical necessity reviews.',
  website: 'https://docs.claritycare.ai',
    screenshot: '/screenshots/claritycare-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://claritycareai.mintlify.app/mintlify-assets/_next/image?url=%2F_mintlify%2Fapi%2Fog%3Fdivision%3DGetting%2BStarted%26title%3DIntroduction%2Bto%2BClarityCare%2BAI%26description%3DLearn%2Babout%2Bour%2BAI-powered%2Butilization%2Bmanagement%2B%2528UM%2529%2Bsolution%253A%2BElectra%25E2%2584%25A2%26logoLight%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaritycareai%252FeSciVI1A6sKUydps%252Flogo%252FClarityCare%252520Logo_v2-01.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253DeSciVI1A6sKUydps%2526q%253D85%2526s%253D4c9d1c9acbbd9ddd1aa3b132ccb5a0ce%26logoDark%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaritycareai%252FeSciVI1A6sKUydps%252Flogo%252FClarityCare%252520Logo_v2-01.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253DeSciVI1A6sKUydps%2526q%253D85%2526s%253D4c9d1c9acbbd9ddd1aa3b132ccb5a0ce%26primaryColor%3D%25230D9373%26lightColor%3D%252307C983%26darkColor%3D%25230D9373%26backgroundLight%3D%2523ffffff%26backgroundDark%3D%2523090d0d&amp;w=1200&amp;q=100',


  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise'],
  industries: ['healthcare'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$3.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.5M',
      date: '2025-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Traditional UM platforms',
      description: 'Legacy utilization management software used by payers.',
      whyTheyWin: 'Deep payer relationships and compliance track records.',
    },
    {
      name: 'Health tech automation vendors',
      description: 'Automation tools for prior authorization workflows.',
      whyTheyWin: 'Broader product suites and integrations.',
    },
    {
      name: 'In-house payer tools',
      description: 'Custom internal UM systems at large payers.',
      whyTheyWin: 'Deeply tailored to internal processes.',
    },
  ],
  marketPosition: 'AI-first utilization management focused on medical necessity review automation.',
  moat: [
    'LLM-powered review workflows designed for compliance',
    'Operational cost reduction focus',
    'Healthcare-specific workflow expertise',
  ],
  vsGiants: 'Targets UM automation workflows with AI-first design rather than generic workflow tools.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to automating UM and prior authorization processes.',
  aiDesignChallenges: [
    'Designing safe human oversight for medical decisions',
    'Communicating model confidence and reasoning',
    'Ensuring compliance and auditability',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed on sources reviewed.',
    },
  ],
  whyBuilding: 'Utilization management is costly and slow; AI can streamline reviews while staying compliant.',
  beliefs: [
    'AI can reduce administrative burden in healthcare',
    'Compliance must be built into every workflow',
    'Clinicians need clear, trustworthy AI support',
  ],
  greenFlags: [
    'Seed funding announced on startups.gallery',
    'Clear cost-reduction value proposition',
  ],
  redFlags: [
    'Regulatory scrutiny in healthcare',
    'Complex integrations with payer systems',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Review automation flows', 'Exception handling logic'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Audit trails', 'Quality metrics for AI decisions'],
    },
    interface: {
      level: 'medium',
      tasks: ['Reviewer dashboards', 'Case management UI'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Utilization management teams at payers',
    secondary: 'Clinical review teams at healthcare providers',
  },
  userProblems: [
    'Manual medical necessity reviews slow patient care',
    'Operational costs in UM are high',
    'Compliance requirements make automation hard',
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
    whyJoin: ['Healthcare impact', 'AI compliance design challenges'],
    whyNot: ['Regulatory complexity', 'Long enterprise sales cycles'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$3.5M seed round'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'UM automation is a large, underserved healthcare workflow.',
    tailwinds: ['Healthcare cost pressure', 'AI adoption in operations'],
    headwinds: ['Compliance risk', 'Integration complexity'],
    moatType: 'vertical-specialization',
    moatStrength: 'Healthcare-specific UM automation focus.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'ClarityCare on startups.gallery', url: 'https://startups.gallery/companies/claritycare' },
    { title: 'ClarityCare AI docs', url: 'https://docs.claritycare.ai/introduction' },
  ],
};
