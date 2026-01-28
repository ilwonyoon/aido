import { Company } from '../types';

export const mandolin: Company = {
  id: 'mandolin',
  name: 'Mandolin',
  description: 'Automation platform for specialty drug workflows, including intake, benefits, and prior authorization.',
  website: 'https://mandolin.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$40M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$40M',
      date: '2025-06',
      leadInvestors: ['Greylock'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Vivo Infusion, Amber Pharmacy, OI Infusion',

  // Competition
  competitors: [
    {
      name: 'Legacy specialty pharmacy systems',
      description: 'Incumbent software suites used to manage specialty pharmacy operations.',
      whyTheyWin: 'Deep operational integrations and long-term contracts.',
    },
    {
      name: 'Prior authorization platforms',
      description: 'Tools focused on payer authorization workflows.',
      whyTheyWin: 'Established payer relationships and compliance expertise.',
    },
    {
      name: 'Healthcare workflow automation vendors',
      description: 'General-purpose automation products targeting healthcare back-office work.',
      whyTheyWin: 'Broader product suites and existing customer bases.',
    },
  ],
  marketPosition: 'Automation layer for specialty drug and therapy operations.',
  moat: [
    'Workflow depth across specialty drug intake, benefits, and prior authorizations',
    'Operational expertise in regulated healthcare processes',
    'Automation that reduces manual, high-friction paperwork loops',
  ],
  vsGiants: 'Focuses on specialty drug workflows rather than broad horizontal automation suites.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-driven automation is core to improving specialty pharmacy workflows.',
  aiDesignChallenges: [
    'Designing human-in-the-loop controls for regulated decisions',
    'Communicating automation confidence in approvals and exceptions',
    'Building audit-ready workflows with clear provenance',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not publicly listed on the company site or blog.',
    },
  ],
  whyBuilding: 'Specialty drug access is slowed by manual paperwork and fragmented systems.',
  beliefs: [
    'Automation should remove paperwork from life-saving treatment workflows',
    'Specialty pharmacy teams need reliable AI assistance with clear oversight',
    'Operational speed directly impacts patient outcomes',
  ],
  greenFlags: [
    'Series A led by Greylock with top-tier healthcare investor participation',
    'Visible customer logos in specialty pharmacy operations',
    'Clear focus on high-friction, high-impact workflows',
  ],
  redFlags: [
    'Regulated workflows require rigorous compliance and approvals',
    'Integration complexity with payer/provider systems',
    'Long enterprise procurement cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Automation logic for approvals and exceptions', 'Workflow orchestration across payer systems'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Operational outcome tracking', 'Quality checks for automated steps'],
    },
    interface: {
      level: 'medium',
      tasks: ['Dashboard for specialty pharmacy operations', 'Exception review and escalation UI'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Specialty pharmacy operations teams managing high-complexity therapies',
    secondary: 'Patient access and reimbursement teams at providers and manufacturers',
  },
  userProblems: [
    'Manual paperwork slows specialty drug approvals and access',
    'Benefits verification and prior auth work is fragmented across systems',
    'Operational teams lack a single source of truth for status tracking',
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
    whyJoin: ['Mission-critical healthcare workflows', 'Automation-heavy design challenges'],
    whyNot: ['Highly regulated domain', 'Potentially long implementation cycles'],
    nextActions: ['Monitor for design leadership or product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series A funding led by Greylock'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Specialty pharmacy operations remain underserved by modern automation tools.',
    tailwinds: ['Rising specialty drug volume', 'Automation demand in healthcare ops'],
    headwinds: ['Regulatory compliance complexity', 'Integration-heavy deployments'],
    moatType: 'vertical-specialization',
    moatStrength: 'Focused on high-friction specialty drug workflows.',
  },

  // Meta
  lastUpdated: '2026-01-28T16:20:00',
  sources: [
    { title: 'Mandolin', url: 'https://mandolin.com' },
    { title: 'Mandolin Series A', url: 'https://mandolin.com/blog/mandolin-series-a' },
    { title: 'Mandolin on startups.gallery', url: 'https://startups.gallery/companies/mandolin' },
    { title: 'Mandolin careers (Ashby)', url: 'https://jobs.ashbyhq.com/mandolin' },
  ],
};
