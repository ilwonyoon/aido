import { Company } from '../types';

export const cytora: Company = {
  id: 'cytora',
  name: 'Cytora',
  description: 'Risk digitization and automation platform for commercial insurance that turns incoming submissions, claims, and risk data into decision-ready workflows.',
  website: 'https://www.cytora.com',
  headquarters: 'London, UK',
  remote: 'Unknown',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  stage: 'Acquired',
  valuation: 'Unknown',
  totalFunding: '£25M+',
  fundingHistory: [
    { stage: 'Series B', amount: '£25M', date: '2019-04', leadInvestors: ['EQ Ventures'] },
  ],
  revenue: 'Unknown',
  growth: 'Acquired by Applied Systems in Sept 2025; active 2026 partnerships with LexisNexis and VulnCheck.',
  runway: 'Backed by Applied Systems after acquisition',
  customers: 'Commercial insurers, brokers, MGAs, and reinsurers; public customers include Chubb and Markel.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Acquired by Applied Systems to expand digital roundtrip insurance workflows',
    signals: [
      'Applied Systems acquisition in 2025',
      'LexisNexis Risk Solutions partnership announced Apr 2026',
      'Chubb claims automation and Markel underwriting productivity case studies',
    ],
    tam: '$100B+ commercial insurance workflow and risk digitization market',
    marketShare: 'Unknown',
    ceiling: 'As part of Applied Systems, Cytora can become embedded in broker-carrier digital risk exchange.',
    tailwinds: [
      'Commercial risks arrive as unstructured, heterogeneous documents',
      'Brokers and carriers need faster risk flow across the value chain',
      'Applied Systems distribution can increase reach',
    ],
    headwinds: [
      'Acquisition may reduce startup-style design upside',
      'Commercial insurance integrations are complex',
      'FurtherAI and Indico can compete on agentic intake workflows',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Applied Systems ownership and insurance workflow integrations strengthen distribution.',
  },

  competitors: [
    { name: 'FurtherAI', description: 'AI workspace for insurance operations.', whyTheyWin: 'Newer AI-native agent experience and faster startup velocity.' },
    { name: 'Indico Data', description: 'Insurance intake and orchestration platform.', whyTheyWin: 'Strong unstructured document automation positioning.' },
    { name: 'Federato', description: 'RiskOps underwriting platform.', whyTheyWin: 'Broader underwriting operating system and portfolio strategy layer.' },
  ],
  marketPosition: 'Commercial insurance risk digitization layer for brokers, insurers, MGAs, and reinsurers.',
  moat: [
    'Commercial insurance risk schemas and workflow depth',
    'Applied Systems ecosystem distribution',
    'Customer evidence across claims and underwriting workflows',
  ],
  vsGiants: 'Commercial-insurance-specific risk flow automation vs generic AI/RPA or core-system modules.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Cytora automates established commercial insurance risk workflows, but agentic digitization and decisioning are core to the product.',
  aiDesignChallenges: [
    'Natural-language workflow authoring for insurance risk teams',
    'Auditability for agentic risk workflows',
    'Designing controls for automated vs manual decision routing',
  ],

  founders: [
    { name: 'Richard Hartley', role: 'Co-founder', background: 'Co-founded Cytora to digitize commercial insurance risk workflows.' },
  ],
  whyBuilding: 'Cytora was built to make risk flow across the commercial insurance value chain without manual document intake and rekeying.',
  beliefs: [
    'Risk data should move digitally across brokers, insurers, and reinsurers',
    'Insurers should control their own view of risk',
    'Agentic workflows need approval and audit controls',
  ],
  designPhilosophy: 'Give insurance teams control over automated risk workflows.',
  greenFlags: [
    'Strong strategic fit with FurtherAI comparison set',
    'Applied Systems acquisition validates category importance',
    'Deep commercial insurance workflow surface',
  ],
  redFlags: [
    'Acquired company may have less founding-design upside',
    'Enterprise workflow design may be constrained by Applied ecosystem',
    'No verified Product Designer opening found',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Risk flow routing rules', 'Agentic workflow approval logic', 'Schema and enrichment configuration'] },
    evaluation: { level: 'high', tasks: ['Risk data quality review', 'Submission and claims throughput analytics', 'Audit and control reporting'] },
    interface: { level: 'medium', tasks: ['Risk workflow builder', 'Decision-ready submission workbench', 'Integration setup for data partners'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Commercial insurance underwriting, claims, and operations teams',
    secondary: 'Brokers, MGAs, reinsurers, and insurance technology leaders',
  },
  userProblems: [
    'Risk arrives as unstructured documents and emails',
    'Manual intake reduces underwriting and claims capacity',
    'Automation must be configurable to each insurer view of risk',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: ['Strong product-domain overlap with FurtherAI', 'Interesting risk workflow automation design'],
    whyNot: ['Acquired by Applied Systems', 'No clear design hiring signal'],
    nextActions: ['Track Applied/Cytora product evolution', 'Use as competitor benchmark for FurtherAI'],
  },

  lastUpdated: '2026-04-28',
  sources: [
    { title: 'Cytora website', url: 'https://www.cytora.com/' },
    { title: 'Applied Systems acquires Cytora', url: 'https://www.insurancejournal.com/news/national/2025/09/09/838445.htm' },
    { title: 'Cytora Series B', url: 'https://techcrunch.com/2019/04/16/cytora/' },
    { title: 'Cytora LexisNexis partnership', url: 'https://www.prnewswire.com/news-releases/cytora-and-lexisnexis-risk-solutions-announce-strategic-relationship-to-enhance-risk-selection-and-automation-for-us-commercial-insurers-302750794.html' },
  ],
};
