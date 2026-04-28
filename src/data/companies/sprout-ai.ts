import { Company } from '../types';

export const sproutAi: Company = {
  id: 'sprout-ai',
  name: 'Sprout.ai',
  description:
    'AI claims automation platform that extracts claim data, detects fraud signals, and helps insurers make faster claim decisions.',
  website: 'https://sprout.ai/',
  screenshot: '/screenshots/sprout-ai-screenshot.png',
  headquarters: 'London, UK',
  remote: 'Hybrid',
  ogImage: '/og-images/sprout-ai-og.webp',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '£15.9M+ disclosed',
  fundingHistory: [
    { stage: 'Seed', amount: '$2.5M', date: '2020-04' },
    { stage: 'Series A', amount: '£8M', date: '2021-05' },
    { stage: 'Series A', amount: '£5.4M', date: '2023-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Insurers and claims organizations.',

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Processes high-volume claim documents and claim decisions for insurers',
      'Raised £5.4M in 2023 to expand claims automation',
      'Recognized in 2024 insurtech and AI automation lists',
    ],
    tam: 'Insurance claims automation across P&C, health, and specialty lines.',
    marketShare: 'Unknown',
    ceiling: 'Could become a claims intelligence layer if it expands from document automation into decision orchestration.',
    tailwinds: [
      'Claims teams face pressure to reduce cycle time and loss adjustment expense',
      'Unstructured claim documents are well suited to AI extraction and summarization',
      'Insurers want better fraud and leakage controls',
    ],
    headwinds: [
      'Claims decisions require accuracy, auditability, and regulatory care',
      'Large insurers may build internal automation',
      'ROI depends on integration quality and claims volume',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate if Sprout.ai keeps improving claims-specific models and integrations.',
  },

  competitors: [
    { name: 'FurtherAI', description: 'AI agents for insurance workflows.', whyTheyWin: 'More agentic automation positioning across intake and comparison workflows.' },
    { name: 'EvolutionIQ', description: 'Claims guidance for disability and injury claims.', whyTheyWin: 'Strong focus on next-best-action claims guidance.' },
    { name: 'Tractable', description: 'Computer vision for property and auto claims.', whyTheyWin: 'Strong visual damage assessment specialization.' },
  ],
  marketPosition: 'Claims automation platform focused on document-heavy insurance workflows.',
  moat: [
    'Claims-specific extraction and decision workflows',
    'Domain knowledge around insurer claim operations',
    'Potential data advantage from processed claims documents',
  ],
  vsGiants:
    'More specialized in claims AI than horizontal RPA and document-processing tools.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI extraction, fraud detection, and claim assessment are central to the product.',
  aiDesignChallenges: [
    'Show confidence and evidence behind automated claim assessments',
    'Design human review loops for edge cases and low-confidence decisions',
    'Make complex claim status and audit trails understandable',
  ],

  founders: [
    { name: 'Niels Thone', role: 'Co-founder', background: 'Co-founded Sprout.ai to apply AI to insurance claims handling.' },
  ],
  whyBuilding:
    'Reduce claim processing time while improving consistency, transparency, and customer outcomes.',
  beliefs: [
    'Claims should be resolved faster and more fairly',
    'AI can turn unstructured claims data into useful decision support',
    'Automation should keep humans in the loop for complex cases',
  ],
  designPhilosophy:
    'Make claims automation transparent enough for claims handlers to trust and operate.',
  greenFlags: [
    'Clear vertical pain point',
    'Claims workflows have strong automation ROI',
    'Good fit for product design around trust, review, and decision support',
  ],
  redFlags: [
    'Funding and growth data are less visible than larger competitors',
    'Claims automation market is crowded',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Claims triage logic', 'Document extraction workflows', 'Human review escalation paths'] },
    evaluation: { level: 'high', tasks: ['Claim cycle time', 'Accuracy and leakage metrics', 'Fraud detection review quality'] },
    interface: { level: 'medium', tasks: ['Claims handler workbench', 'Audit views', 'Exception queues'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Claims teams at insurers',
    secondary: 'Claims operations leaders and adjusters',
  },
  userProblems: [
    'Claim documents are unstructured and time-consuming to review',
    'Manual claims handling creates inconsistent decisions',
    'Fraud and leakage detection can happen too late',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Claims automation has concrete workflow depth', 'Good IC design surface around review tools and decision UX'],
    whyNot: ['Less public hiring signal', 'May be more operational than strategic design depending on team setup'],
    nextActions: ['Check careers page for product design roles', 'Track new claims platform launches'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Sprout.ai website', url: 'https://sprout.ai/' },
    { title: 'Sprout.ai platform', url: 'https://sprout.ai/platform/' },
    { title: 'Sprout.ai Series A', url: 'https://sprout.ai/news/sprout-ai-raises-8-million-in-series-a-funding/' },
    { title: 'Sprout.ai 2023 funding', url: 'https://sprout.ai/news/sprout-ai-raises-5-4m-from-global-investors-to-transform-claims-processing/' },
  ],
};
