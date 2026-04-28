import { Company } from '../types';

export const indicoData: Company = {
  id: 'indico-data',
  name: 'Indico Data',
  description: 'Agentic intake and orchestration platform that automates underwriting, claims, and servicing work by turning messy insurance documents into downstream-ready data.',
  website: 'https://indicodata.ai',
  headquarters: 'Boston, MA',
  remote: 'Unknown',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Growth',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Claims <30 sec SOV/loss-run processing, 90% faster cycle time, and 4x processing capacity in public product claims.',
  runway: 'Unknown',
  customers: 'Commercial insurers and large carriers; public references include Convex Insurance and F500 insurance carriers.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Enterprise carrier adoption with public case-study metrics',
    signals: [
      'Insurance-specific intake and orchestration positioning',
      'Guidewire Cloud integration for underwriting submission intake',
      'Public claims of 90% faster cycle time and 4x processing capacity',
    ],
    tam: '$100B+ insurance operations and document automation market',
    marketShare: 'Unknown',
    ceiling: 'Can become a core document-intake layer if it owns submission, claims, and servicing data normalization.',
    tailwinds: [
      'Commercial insurance workflows remain document-heavy and fragmented',
      'Carriers need human review, validation, and exception handling rather than black-box automation',
      'Guidewire ecosystem integration creates enterprise distribution leverage',
    ],
    headwinds: [
      'Crowded intelligent document processing and RPA market',
      'Implementation complexity across carrier-specific document types',
      'FurtherAI, Cytora, Roots, and generic IDP platforms can compete for intake workflows',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong if Indico remains the trusted intake layer across Guidewire and carrier core systems.',
  },

  competitors: [
    { name: 'FurtherAI', description: 'Insurance-native AI workspace for submissions, policy comparison, claims, and compliance.', whyTheyWin: 'Newer agentic workflow UX and a16z-backed velocity.' },
    { name: 'Cytora', description: 'Risk digitization and automation platform for commercial insurance.', whyTheyWin: 'Deep commercial-risk workflow positioning and Applied Systems ownership.' },
    { name: 'Hyperscience', description: 'Enterprise document automation platform.', whyTheyWin: 'Horizontal IDP maturity and enterprise trust.' },
  ],
  marketPosition: 'Insurance-focused intake and orchestration platform for unstructured underwriting and claims documents.',
  moat: [
    'Insurance-specific document and decisioning workflows',
    'Human review and exception handling embedded in automation loops',
    'Enterprise integrations with insurance core systems',
  ],
  vsGiants: 'Insurance-specific intake orchestration vs generic IDP and RPA tools.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Indico automates a proven insurance operations workflow, but AI document understanding and orchestration are the core differentiators.',
  aiDesignChallenges: [
    'Human review UX for low-confidence extracted data',
    'Audit trail and source citation design for regulated insurance decisions',
    'Workflow builder design for carrier-specific submission and claims processes',
  ],

  founders: [
    { name: 'Tom Wilde', role: 'CEO', background: 'Enterprise software executive leading Indico Data.' },
    { name: 'Alec Radford', role: 'Co-founder', background: 'AI researcher associated with Indico founding history and early generative AI research.' },
  ],
  whyBuilding: 'Indico was built around the idea that the most valuable enterprise data is often trapped in unstructured documents such as submissions, claims, reports, and contracts.',
  beliefs: [
    'Automation must handle messy unstructured data, not just simple forms',
    'Insurance AI needs transparency and control',
    'Human review should be part of scalable automation',
  ],
  designPhilosophy: 'Make high-stakes document automation transparent and controllable.',
  greenFlags: [
    'Directly comparable to FurtherAI on insurance document-heavy workflows',
    'Concrete workflow ROI metrics',
    'Enterprise integrations and carrier references',
  ],
  redFlags: [
    'More mature enterprise product may offer less 0->1 design scope',
    'Insurance implementation work can be services-heavy',
    'Generic IDP category is crowded',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Document classification and routing logic', 'Confidence threshold and exception handling', 'Carrier-specific workflow configuration'] },
    evaluation: { level: 'high', tasks: ['Extraction quality review', 'Audit trail and source comparison', 'Cycle-time and capacity analytics'] },
    interface: { level: 'medium', tasks: ['Reviewer workbench', 'Workflow orchestration dashboard', 'Integration and schema mapping UI'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Insurance underwriting, claims, and servicing operations teams',
    secondary: 'Carrier transformation, technology, and data teams',
  },
  userProblems: [
    'Submission and claims packets contain messy, unstructured information',
    'Manual review slows quote and claims cycle times',
    'Automation must preserve control, validation, and auditability',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Closest workflow analog to FurtherAI on document-heavy insurance ops', 'High-complexity enterprise workflow design'],
    whyNot: ['Mature enterprise automation category', 'No verified Product Designer opening found'],
    nextActions: ['Monitor careers page for design/product roles', 'Compare product UX against FurtherAI and Cytora'],
  },

  lastUpdated: '2026-04-28',
  sources: [
    { title: 'Indico Data website', url: 'https://indicodata.ai/' },
    { title: 'Indico Data company page', url: 'https://indico.com/company/' },
    { title: 'Guidewire Indico integration', url: 'https://www.guidewire.com/about/press-center/press-releases/20240723/unlock-smarter-decision-making-with-automated-intake-of-submission-data' },
  ],
};
