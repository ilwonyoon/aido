import { Company } from '../types';

export const gradientAi: Company = {
  id: 'gradient-ai',
  name: 'Gradient AI',
  description:
    'AI platform for insurance underwriting, risk selection, claims, and policy analytics using industry data and machine learning models.',
  website: 'https://www.gradientai.com/',
  screenshot: '/screenshots/gradient-ai-screenshot.png',
  headquarters: 'Boston, MA',
  remote: 'Hybrid',
  ogImage: '/og-images/gradient-ai-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$56.1M+',
  fundingHistory: [
    { stage: 'Series C', amount: '$56.1M', date: '2024-07' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong after 2024 Series C.',
  customers: 'P&C insurers, health insurers, MGAs, and self-insured groups.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $56.1M Series C in July 2024 led by Centana Growth Partners',
      'Uses large insurance data lakes for risk assessment and operational efficiency',
      'Expanding solutions for P&C and health insurers',
    ],
    tam: 'Insurance underwriting, risk analytics, claims analytics, and operational AI.',
    marketShare: 'Unknown',
    ceiling: 'Can become a horizontal risk intelligence layer across underwriting and claims if data advantage compounds.',
    tailwinds: [
      'Insurers need better risk selection and loss ratio improvement',
      'Large industry datasets can improve prediction quality',
      'AI budgets are moving toward measurable vertical workflows',
    ],
    headwinds: [
      'Insurance data normalization is hard',
      'Model governance and explainability are required',
      'Competition from actuarial platforms and internal analytics teams',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Potentially strong if Gradient AI keeps unique insurance datasets and model performance advantages.',
  },

  competitors: [
    { name: 'Akur8', description: 'Transparent insurance pricing and reserving platform.', whyTheyWin: 'Strong actuarial pricing specialization.' },
    { name: 'Federato', description: 'RiskOps platform for underwriting and portfolio management.', whyTheyWin: 'More workflow-native underwriting layer.' },
    { name: 'Shift Technology', description: 'Insurance decision automation and fraud detection.', whyTheyWin: 'Large global fraud and decisioning footprint.' },
  ],
  marketPosition: 'Insurance risk analytics platform across underwriting, claims, and policy operations.',
  moat: [
    'Insurance-specific data lake',
    'Risk and underwriting model specialization',
    'Enterprise insurance relationships',
  ],
  vsGiants:
    'Competes by packaging machine learning around insurance risk use cases rather than offering generic analytics tools.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Insurance ML models are central to risk scoring, underwriting, and claims analytics.',
  aiDesignChallenges: [
    'Make risk scores understandable and actionable',
    'Design workflows for model governance and overrides',
    'Help users compare risk drivers without creating false certainty',
  ],

  founders: [
    { name: 'Stan Smith', role: 'Founder & CEO', background: 'Leads Gradient AI with a focus on AI-powered insurance solutions.' },
  ],
  whyBuilding:
    'Use AI and insurance data to improve risk assessment, operational efficiency, and insurer profitability.',
  beliefs: [
    'Insurance data can unlock better underwriting decisions',
    'AI should produce measurable improvements in loss ratio and productivity',
    'Risk analytics must be explainable enough for regulated workflows',
  ],
  designPhilosophy:
    'Make complex risk analytics usable in daily underwriting and insurance operations.',
  greenFlags: [
    'Recent meaningful Series C funding',
    'Clear insurance data advantage narrative',
    'Multiple product surfaces across underwriting and claims',
  ],
  redFlags: [
    'May be analytics-heavy and less interaction-rich than workflow platforms',
    'Competitive space with many adjacent risk vendors',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Risk scoring workflows', 'Underwriting recommendations', 'Claims/policy analytics logic'] },
    evaluation: { level: 'high', tasks: ['Model performance', 'Loss ratio impact', 'User trust and override behavior'] },
    interface: { level: 'medium', tasks: ['Risk dashboards', 'Underwriting worklists', 'Model explanation views'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Insurance underwriting and risk teams',
    secondary: 'Claims, actuarial, and executive teams',
  },
  userProblems: [
    'Risk selection depends on fragmented data',
    'Insurers need better predictive signals for underwriting and claims',
    'Analytics must be translated into day-to-day operational decisions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Strong data-product and AI explainability surface', 'Insurance workflows have measurable business impact'],
    whyNot: ['Could skew toward analytics dashboards', 'Public design team signal is limited'],
    nextActions: ['Monitor careers for design/product roles', 'Review product demos and case studies'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Gradient AI website', url: 'https://www.gradientai.com/' },
    { title: 'Gradient AI Series C announcement', url: 'https://www.gradientai.com/press-gradient-ai-secures-56-million-in-series-c-funding-to-expand-ai-powered-insurance-solutions' },
  ],
};
