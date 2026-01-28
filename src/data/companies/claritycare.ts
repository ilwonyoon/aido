import { Company } from '../types';

export const claritycare: Company = {
  id: 'claritycare',
  name: 'ClarityCare',
  description: 'AI-powered utilization management platform for medical necessity reviews.',
  website: 'https://docs.claritycare.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',


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
    teamSize: 'Unknown',
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
