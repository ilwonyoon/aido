import { Company } from '../types';

export const kita: Company = {
  id: 'kita',
  name: 'Kita',
  description: 'AI-native document intelligence platform for credit underwriting. Uses VLMs to parse messy, unstandardized financial documents in emerging markets and turn them into fraud-checked, decision-ready risk signals for lenders.',
  website: 'https://www.usekita.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '~$500K (YC W26)',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '~$500K',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (early revenue, 40% WoW growth during YC batch)',
  growth: '~40% week-over-week during YC batch (March 2026); customers across 3 continents',
  runway: 'YC-backed, early stage',
  customers: 'Lenders in Philippines, Indonesia, Mexico, South Africa, and US underserved markets',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown (very early)',
    userGrowth: '40% WoW during YC batch; 3-continent customer base within months of launch',
    signals: [
      'YC W26 batch company, launched HN March 2026',
      '40% WoW growth during batch',
      'Customers across 3 continents at launch',
      'Expanding from Southeast Asia to US underserved segments',
    ],
    tam: '$13.3T lent globally in 2025; founders claim 90% of transactions involve document review — implying a multi-trillion dollar document-review workflow opportunity',
    marketShare: '<0.001% of TAM = massive upside if they capture even a sliver of lending infrastructure',
    ceiling: 'Early innings: document-based credit underwriting is a global, persistent pain point',
    tailwinds: [
      'Weak credit bureau infrastructure in Philippines, Indonesia, Mexico keeps manual document review dominant',
      'Rising demand for faster loan decisioning in high-growth fintech markets',
      'VLMs dramatically improving document parsing accuracy over legacy OCR',
      'Open finance still nascent in target markets, making document review the only reliable underwriting signal',
      'US market expanding into underserved SMB lending with similar document-heavy workflows',
    ],
    headwinds: [
      'Highly regulated financial services domain requiring compliance in each market',
      'Long enterprise sales cycles for lending institution customers',
      'Localization cost is high — each new market requires custom model fine-tuning',
      'Fraud patterns evolve, requiring continuous model updates',
      'Established players like Ocrolus, Inscribe have US market distribution',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Hyperlocalized models trained on lender-specific repayment outcome data. Every new market and lender strengthens the base layer. Competitors cannot easily replicate market-specific fraud signals without local data partnerships.',
  },

  // Competition
  competitors: [
    {
      name: 'Ocrolus',
      description: 'US-focused document AI platform for lending: classifies docs, extracts data, detects fraud, cash flow analysis.',
      whyTheyWin: 'Deep US market penetration, established integrations with major lenders, strong brand in mortgage and consumer lending.',
    },
    {
      name: 'Inscribe',
      description: 'AI fraud detection and document verification for financial services.',
      whyTheyWin: 'Fraud-first positioning with US/EU focus; strong in risk teams at fintechs.',
    },
    {
      name: 'LenddoEFL',
      description: 'Alternative credit scoring for thin-file populations in emerging markets using non-traditional data.',
      whyTheyWin: 'Long track record in emerging markets, established lender relationships across Southeast Asia and Latin America.',
    },
  ],
  marketPosition: 'Document intelligence for lenders in emerging and underserved markets',
  moat: [
    'VLM architecture outperforms legacy OCR on messy, unstandardized financial documents',
    'Market-specific models trained on localized fraud signals and repayment outcomes',
    'Data flywheel: every lender adds to the training base, improving accuracy for all',
  ],
  vsGiants: 'Focused on markets where Ocrolus and generic document AI tools fail: highly variant, low-quality scans and non-standardized templates in emerging markets.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator. VLMs are what make Kita\'s document parsing viable — legacy OCR cannot handle the document variance in emerging markets. Without AI, the product collapses back to manual review.',
  aiDesignChallenges: [
    'Designing review interfaces for ambiguous or low-confidence document extractions',
    'Communicating fraud detection signals and confidence scores to non-technical credit analysts',
    'Handling multi-language, multi-format documents in a single workflow',
    'Designing borrower-facing AI agent interactions over WhatsApp/email',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Carmel Limcaoco',
      role: 'Co-founder & CEO',
      background: 'From Manila. Stanford Symbolic Systems & Music + CS Master\'s. 3 summers in audio/music product at Apple (shipped iOS feature as intern). Repeat founder — co-founded DAHA (Stanford\'s first marketplace, 0→1). Awarded by the United Nations at 16, launched the first Product Fellowship in the Philippines.',
    },
    {
      name: 'Rhea Malhotra',
      role: 'Co-founder & CTO',
      background: 'Stanford BS/MS CS. Firestone Medal — the sole highest honor of the Stanford CS Department. Was incoming PhD in Computer Vision & Robotics at Princeton. Authored 7 internationally recognized papers. Joined first research lab at 13, worked on COVID-19 vaccine at Pfizer at 17.',
    },
  ],
  whyBuilding: '"In many emerging markets, like the Philippines and Mexico, credit infrastructure is weak. Open finance is still nascent, and credit bureaus are unreliable. Existing OCR and document AI tools break on these highly variant, messy real-world documents." — Carmel & Rhea (HN Launch, March 2026)',
  beliefs: [
    'Document-based underwriting is the default and will remain dominant in most lending markets for the foreseeable future',
    'Market-specific hyperlocalization is the moat: generic document AI always loses to locally fine-tuned models',
    'The problem is bigger than emerging markets — 90% of $13.3T in global lending involves document review',
    'VLMs represent a step-change over OCR for real-world financial documents',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'YC W26, world-class founder pedigrees (Stanford Firestone Medal, Apple product, repeat founder)',
    '40% WoW growth during YC batch across 3 continents',
    'Founders have direct lived experience with the problem (Carmel from Manila)',
    'Technically novel: VLM architecture outperforms existing OCR on real-world documents',
    'Two products already at launch: Kita Capture + Kita Credit Agent',
  ],
  redFlags: [
    '2-person team — very early stage, high execution risk',
    'Emerging markets fintech is notoriously hard: regulatory complexity, long sales cycles, currency risk',
    'No public funding beyond YC — runway could be tight',
    'Market-specific localization is expensive and slow to scale to new geographies',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (2-person founding team, no dedicated designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Document parsing confidence thresholds and fallback handling',
        'Fraud flag review workflows for credit analysts',
        'AI Credit Agent conversation design for WhatsApp/email',
        'Multi-document cross-validation UX',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Extraction accuracy review interface for quality assurance',
        'Lender feedback loops for model improvement',
        'Fraud detection explainability for compliance teams',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Credit analyst dashboard (Kita Capture portal)',
        'Document upload and status tracking',
        'API documentation and developer onboarding',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Credit analysts and underwriters at fintech lenders in Philippines, Indonesia, Mexico, South Africa',
    secondary: 'Loan origination teams at SMB lenders in underserved US markets',
  },
  userProblems: [
    'Manual document review is slow, expensive, and error-prone at scale',
    'Legacy OCR tools break on low-quality scans, photos of documents, and non-standard templates',
    'No existing tool handles fraud detection and structured data extraction in a single workflow for emerging markets',
    'Borrower follow-up for missing documents is manual and time-consuming',
    'Lenders can\'t scale loan volume without scaling headcount in underwriting',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'ML Engineer Intern',
      location: 'San Francisco, CA',
      compensation: 'Unknown',
      type: 'intern',
      url: 'https://www.ycombinator.com/companies/kita/jobs/WuJVj18-ml-engineer-intern',
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'VLM + document AI product — genuinely novel design surface for AI decision interfaces',
      'World-class founders (Stanford Firestone Medal, Apple product)',
      'Global fintech infrastructure with real financial inclusion impact',
    ],
    whyNot: [
      '2-person team, no design role exists yet — joining would be as a generalist',
      'B2B lending infrastructure = minimal consumer UI, mostly API-driven',
      'Emerging markets compliance complexity makes design iteration slow',
      'No product designer open roles; design work would be incidental to engineering-first priorities',
    ],
    nextActions: [
      'Monitor for Series A and first design hire',
      'Follow founders on LinkedIn for growth signals',
    ],
  },

  // Meta
  lastUpdated: '2026-05-02T00:00:00',
  sources: [
    { title: 'Launch HN: Kita (YC W26)', url: 'https://news.ycombinator.com/item?id=47417335' },
    { title: 'Kita YC Company Page', url: 'https://www.ycombinator.com/companies/kita' },
    { title: 'Kita Website', url: 'https://www.usekita.com' },
    { title: 'YC Launch: Turn financial documents into risk signals', url: 'https://www.ycombinator.com/launches/PEj-kita-turn-financial-documents-into-risk-signals-for-lenders' },
    { title: 'Carmel Limcaoco LinkedIn', url: 'https://www.linkedin.com/in/carmellimcaoco' },
    { title: 'Rhea Malhotra LinkedIn', url: 'https://www.linkedin.com/in/rhea-malhotra-198744142/' },
    { title: 'Dealigence Kita Profile', url: 'https://dealigence.vc/company/kita-n5m49d' },
  ],
};
