import { Company } from '../types';

export const rootsAutomation: Company = {
  id: 'roots-automation',
  name: 'Roots Automation',
  description: 'Insurance-only AI agent platform whose Digital Coworkers and InsurGPT automate claims, underwriting, submission intake, and back-office insurance workflows.',
  website: 'https://www.roots.ai',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  aiTypes: ['automation', 'text-assistant'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$22.2M+',
  fundingHistory: [
    { stage: 'Series B', amount: '$22.2M', date: '2024-09', leadInvestors: ['Harbert Growth Partners'] },
  ],
  revenue: 'Unknown',
  growth: '35 US insurance customers reported at Series B announcement.',
  runway: 'Strong after Series B',
  customers: 'Insurance carriers and claims/underwriting organizations in the US.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '35 customers in US insurance reported in 2024',
    signals: [
      '$22.2M Series B to expand insurance AI workforce platform',
      'InsurGPT positioned as a generative AI model for insurance',
      'AI agent library spans claims, underwriting, and operations',
    ],
    tam: '$100B+ insurance operations automation opportunity',
    marketShare: 'Unknown',
    ceiling: 'Could become the AI workforce layer for repetitive carrier operations if agents prove reliable across workflows.',
    tailwinds: [
      'Insurance teams face labor shortages and repetitive document-heavy work',
      'Agentic AI makes multi-system workflow automation more credible',
      'Carriers increasingly want vertical AI rather than horizontal RPA',
    ],
    headwinds: [
      'RPA incumbents and service providers already embedded in carrier operations',
      'Trust and governance bar is high for autonomous agents',
      'FurtherAI and Indico can compete for the same workflows',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Insurance-only agent library and customer workflow data can compound if deployments expand.',
  },

  competitors: [
    { name: 'FurtherAI', description: 'AI workspace for insurance submissions, claims, and compliance.', whyTheyWin: 'Newer workflow UX and strong a16z/YC signal.' },
    { name: 'Indico Data', description: 'Intake and orchestration platform for insurance documents.', whyTheyWin: 'Enterprise document automation maturity.' },
    { name: 'UiPath', description: 'Horizontal enterprise RPA platform.', whyTheyWin: 'Installed base and broad automation ecosystem.' },
  ],
  marketPosition: 'AI coworker and agent platform built only for insurance operations.',
  moat: [
    'Insurance-only AI agents and InsurGPT positioning',
    'Workflow orchestration across existing insurance systems',
    'Human-in-the-loop review and cockpit oversight model',
  ],
  vsGiants: 'Vertical AI agents trained for insurance vs generic RPA bots and horizontal copilots.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Roots automates existing insurance operations, but the AI agents are the core value proposition.',
  aiDesignChallenges: [
    'Cockpit UI for monitoring autonomous AI coworker activity',
    'Human-in-the-loop exception handling and feedback',
    'Communicating AI decisions across claims and underwriting workflows',
  ],

  founders: [
    { name: 'Chaz Perera', role: 'Co-founder & CEO', background: 'Insurance operations executive background; co-founded Roots to automate insurance work.' },
    { name: 'John Cottongim', role: 'Co-founder & CTO', background: 'Technology leader building AI-powered insurance automation.' },
  ],
  whyBuilding: 'Roots was created to remove repetitive, inefficient work from insurance teams while preserving human judgment for business-critical decisions.',
  beliefs: [
    'Insurance needs AI coworkers, not generic bots',
    'Automation must include oversight and human collaboration',
    'Vertical insurance training is required for reliable automation',
  ],
  designPhilosophy: 'Design AI coworkers that insurance teams can supervise and trust.',
  greenFlags: [
    'Clear vertical focus on insurance',
    'Series B funding and customer count signal market validation',
    'Interesting AI oversight and cockpit design surface',
  ],
  redFlags: [
    'May skew toward ops automation and implementation services',
    'RPA replacement is a competitive and trust-heavy category',
    'No verified Product Designer opening found',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Agent assignment and workflow orchestration', 'Escalation logic for exceptions', 'Human feedback loops for agent learning'] },
    evaluation: { level: 'high', tasks: ['Agent performance dashboards', 'Accuracy review and quality control', 'Claims leakage and productivity analytics'] },
    interface: { level: 'medium', tasks: ['AI coworker cockpit', 'Task queue and work assignment UI', 'Workflow configuration tools'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Insurance claims, underwriting, and operations teams',
    secondary: 'Carrier transformation and automation leaders',
  },
  userProblems: [
    'Insurance teams spend too much time on repetitive operational work',
    'Legacy workflows require manual movement across many systems',
    'AI automation needs oversight, review, and measurable ROI',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Close FurtherAI competitor with rich AI oversight UX', 'Insurance-only agent platform creates clear product constraints'],
    whyNot: ['No design role verified', 'Could be automation-ops heavy rather than product-led'],
    nextActions: ['Monitor careers for Product Design roles', 'Review cockpit/product demos if available'],
  },

  lastUpdated: '2026-04-28',
  sources: [
    { title: 'Roots Automation website', url: 'https://www.roots.ai/' },
    { title: 'Roots Automation raises $22.2M', url: 'https://www.roots.ai/news/roots-automation-raises-22-2-million' },
    { title: 'Roots autonomous workforce platform', url: 'https://www.roots.ai/news/roots-automation-unveils-revolutionary-new-autonomous-workforce-platform' },
  ],
};
