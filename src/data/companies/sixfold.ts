import { Company } from '../types';

export const sixfold: Company = {
  id: 'sixfold',
  name: 'Sixfold',
  description: 'AI underwriting brain for insurers that triages submissions, surfaces cited risk insights, automates referrals, and audits compliance across P&C and Life & Health lines.',
  website: 'https://www.sixfold.ai',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$45M+',
  fundingHistory: [
    { stage: 'Series A', amount: '$15M', date: '2024-06', leadInvestors: ['Salesforce Ventures'] },
    { stage: 'Series B', amount: '$30M', date: '2026-01', leadInvestors: ['Brewer Lane'] },
  ],
  revenue: 'Unknown',
  growth: '1M+ submissions across 40+ business lines, four continents, and 89% average adoption rate reported on company site.',
  runway: 'Strong after Series B',
  customers: 'Zurich North America, Generali, AXIS, Skyward Specialty, Mosaic, Guardian, and other insurers.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '1M+ submissions processed across 40+ business lines',
    signals: [
      '$30M Series B in Jan 2026',
      'Trusted by major insurers including Zurich North America and Guardian',
      'Company reports 50% improved efficiency and 30% more GWP per underwriter',
    ],
    tam: '$50B+ underwriting software and commercial insurance operations opportunity',
    marketShare: 'Unknown',
    ceiling: 'Can become the underwriting intelligence layer if it captures institutional knowledge and embeds in daily underwriter decisions.',
    tailwinds: [
      'Underwriters face rising submission volume and scarce expertise',
      'AI can summarize documents and cite risk evidence faster than manual review',
      'Regulators and carriers need responsible AI and auditability',
    ],
    headwinds: [
      'Underwriters may resist automation that feels like decision replacement',
      'Carrier integrations and guidelines vary widely',
      'FurtherAI, Federato, Cytora, and incumbents all target underwriting workflows',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong underwriting-specific workflow data and institutional intelligence if adoption remains high.',
  },

  competitors: [
    { name: 'FurtherAI', description: 'Broader insurance AI workspace for submissions, policy comparison, claims, and compliance.', whyTheyWin: 'Broader workflow coverage beyond underwriting.' },
    { name: 'Federato', description: 'RiskOps underwriting platform and portfolio strategy layer.', whyTheyWin: 'End-to-end operating system from triage to quote/bind.' },
    { name: 'Cytora', description: 'Commercial risk digitization platform.', whyTheyWin: 'Risk data ingestion and Applied Systems distribution.' },
  ],
  marketPosition: 'Focused AI underwriting brain with strong risk-insight and referral automation positioning.',
  moat: [
    'Underwriting-specific product depth',
    'Cited risk insights and referral automation',
    'Institutional Intelligence product captures carrier expertise',
  ],
  vsGiants: 'Purpose-built underwriting AI vs generic copilots or horizontal document automation.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Underwriting existed before AI, but Sixfold is built around AI agents that assess, research, cite, and move cases forward.',
  aiDesignChallenges: [
    'Cited evidence UI for underwriting risk insights',
    'Referral and authority-limit escalation workflows',
    'Institutional knowledge capture without black-box recommendations',
  ],

  founders: [
    { name: 'Alex Schmelkin', role: 'Co-founder & CEO', background: 'Co-founded Sixfold after experience in insurance and finance workflows.' },
    { name: 'Jane Tran', role: 'Co-founder & COO', background: 'Insurance and finance operator focused on underwriting workflow transformation.' },
    { name: 'Brian Moseley', role: 'Co-founder & CTO', background: 'Technical co-founder building AI for underwriting.' },
  ],
  whyBuilding: 'The founders saw underwriters wasting expertise on manual work that AI could do while underwriting technology lagged behind the complexity of insurance decisions.',
  beliefs: [
    'Strategy should run on people and operations can run on AI',
    'Underwriters need cited evidence, not opaque scores',
    'Institutional expertise can be captured and scaled with AI',
  ],
  designPhilosophy: 'Keep underwriters in control while AI handles submission-heavy work.',
  greenFlags: [
    'Strong customer logos and adoption metrics',
    'Series B fresh funding in 2026',
    'Very close FurtherAI competitor for underwriting workflows',
  ],
  redFlags: [
    'Narrower than FurtherAI if it remains underwriting-first',
    'Insurance AI trust and compliance hurdles are substantial',
    'No verified Product Designer opening found',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Submission scoring logic', 'Referral automation rules', 'Authority and appetite matching'] },
    evaluation: { level: 'high', tasks: ['Cited risk insight review', 'Compliance audit flags', 'Underwriter productivity metrics'] },
    interface: { level: 'high', tasks: ['Underwriter workbench', 'Referral email and review flow', 'Institutional knowledge management UI'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Insurance underwriters and underwriting managers',
    secondary: 'Carrier executives, compliance teams, MGAs, and reinsurers',
  },
  userProblems: [
    'Underwriters waste time reading and researching submissions',
    'Referral rules and appetite guidelines are hard to apply consistently',
    'Leadership needs auditability and institutional knowledge capture',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: ['High-density AI UX around trust, citations, and underwriting judgment', 'Strong traction and fresh Series B'],
    whyNot: ['No verified design opening', 'Domain is underwriting-specific and regulated'],
    nextActions: ['Monitor Sixfold careers for product/design roles', 'Use as strongest FurtherAI underwriting benchmark'],
  },

  lastUpdated: '2026-04-28',
  sources: [
    { title: 'Sixfold website', url: 'https://www.sixfold.ai/' },
    { title: 'Sixfold about', url: 'https://www.sixfold.ai/about-us' },
    { title: 'Sixfold Series B', url: 'https://www.sixfold.ai/content/post/series-b-ai-underwriter' },
    { title: 'FinTech Global Sixfold Series B coverage', url: 'https://fintech.global/2026/01/30/insurtech-firm-sixfold-secures-30m-to-advance-ai-underwriting/' },
  ],
};
