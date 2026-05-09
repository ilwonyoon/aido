import { Company } from '../types';

export const akur8: Company = {
  id: 'akur8',
  name: 'Akur8',
  description:
    'Transparent AI platform for insurance pricing, reserving, and actuarial decision workflows.',
  website: 'https://www.akur8.com/',
  screenshot: '/screenshots/akur8-screenshot.png',
  headquarters: 'Paris, France / New York, NY',
  remote: 'Hybrid',
  ogImage: '/og-images/akur8-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series C',
  valuation: '$400M reported',
  totalFunding: '$180M',
  fundingHistory: [
    { stage: 'Series C', amount: '$120M', date: '2024-09' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong after 2024 Series C.',
  customers: 'P&C and specialty insurers, actuarial teams, and pricing teams.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $120M Series C in 2024, bringing total investment to $180M',
      'Positions around transparent AI for actuarial pricing and reserving',
      'Serves regulated insurance pricing workflows where explainability matters',
    ],
    tam: 'Insurance pricing, reserving, and actuarial modeling software.',
    marketShare: 'Unknown',
    ceiling: 'Can become a dominant actuarial AI workbench if pricing teams standardize on transparent model workflows.',
    tailwinds: [
      'Insurers need faster rate changes and better risk segmentation',
      'Actuarial teams need explainable AI rather than black-box models',
      'Pricing and reserving are high-value recurring workflows',
    ],
    headwinds: [
      'Actuarial teams are conservative about model governance',
      'Regulators require transparency and auditability',
      'Competes with internal actuarial tooling and legacy vendors',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong if Akur8 becomes embedded in actuarial pricing workflows and model governance.',
  },

  competitors: [
    { name: 'Earnix', description: 'Insurance and banking pricing and rating platform.', whyTheyWin: 'Longstanding pricing software presence.' },
    { name: 'Willis Towers Watson Radar', description: 'Insurance pricing and analytics suite.', whyTheyWin: 'Actuarial brand and enterprise relationships.' },
    { name: 'Gradient AI', description: 'Insurance risk analytics and underwriting AI.', whyTheyWin: 'Broader underwriting and claims risk scope.' },
  ],
  marketPosition: 'AI-native actuarial pricing and reserving platform.',
  moat: [
    'Transparent AI positioning for regulated actuarial work',
    'Domain-specific pricing and reserving workflows',
    'Strong funding and insurance-focused investor support',
  ],
  vsGiants:
    'Differentiates from generic ML platforms by packaging AI around actuarial governance and pricing workflows.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Machine learning powers insurance pricing and reserving, but actuarial users govern decisions.',
  aiDesignChallenges: [
    'Make pricing model behavior transparent to actuaries',
    'Design governance workflows for regulated filings',
    'Support scenario comparison without overwhelming users',
  ],

  founders: [
    { name: 'Samuel Falmagne', role: 'Co-founder & CEO', background: 'Co-founded Akur8 to modernize insurance pricing with transparent AI.' },
    { name: 'Brune de Linares', role: 'Co-founder & Chief Client Officer', background: 'Co-founded Akur8 and leads client-facing growth.' },
  ],
  whyBuilding:
    'Help insurers price and reserve faster while preserving actuarial transparency and control.',
  beliefs: [
    'AI in insurance pricing must be transparent',
    'Actuaries need tools that accelerate judgment instead of replacing governance',
    'Better pricing workflows can improve insurer profitability and competitiveness',
  ],
  designPhilosophy:
    'Turn complex model outputs into clear actuarial decisions, comparisons, and audit trails.',
  greenFlags: [
    'High-value vertical workflow',
    'Strong explainability design challenge',
    'Significant Series C funding',
  ],
  redFlags: [
    'Very technical actuarial domain',
    'Enterprise and regulatory workflows can slow product iteration',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Pricing model workflows', 'Scenario comparison', 'Model governance and filing states'] },
    evaluation: { level: 'high', tasks: ['Pricing accuracy', 'Model explainability', 'Actuarial review speed'] },
    interface: { level: 'medium', tasks: ['Model dashboards', 'Rate indication tools', 'Comparison and review flows'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Actuaries and insurance pricing teams',
    secondary: 'Insurance executives and product managers',
  },
  userProblems: [
    'Pricing models are slow to build and validate',
    'Black-box AI is difficult to approve in regulated insurance',
    'Actuarial teams need clear scenario comparison and governance',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Clear AI explainability problem', 'Deep workflow product with measurable ROI'],
    whyNot: ['Actuarial workflows may be less aligned with product design taste', 'Later-stage enterprise sales context'],
    nextActions: ['Monitor design and product roles', 'Review product demos for UX depth'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Akur8 website', url: 'https://www.akur8.com/' },
    { title: 'Akur8 Series C PDF', url: 'https://s24.q4cdn.com/538403808/files/doc_news/Akur8-Secures-120-Million-in-Series-C-Round-to-Accelerate-Growth-of-its-Next-Generation-Actuarial-Platform-2024.pdf' },
    { title: 'One Peak Akur8 profile', url: 'https://www.onepeak.tech/insights/meet-akur8-revolutionizing-insurance-pricing-with-transparent-ai' },
  ],
};
