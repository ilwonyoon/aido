import { Company } from '../types';

export const didit: Company = {
  id: 'didit',
  name: 'Didit',
  description: 'All-in-one identity verification platform — ID check, biometrics, liveness, auth, and AML in a single API. Free core KYC offering for startups, pay-per-use for scale.',
  website: 'https://didit.me',
  screenshot: '/screenshots/didit-screenshot.png',
  headquarters: 'Barcelona, Spain (SF presence for YC)',
  remote: 'Unknown',

  // OG Image
  ogImage: '/og-images/didit-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['fintech'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$2M',
  fundingHistory: [
    { stage: 'Seed', amount: '$2M', date: '2026-01', leadInvestors: ['Y Combinator', 'Angels'] },
  ],
  revenue: 'Near profitability (per founder, 2026)',
  growth: '+20% MoM growth (per Alberto Rosas, Jan 2026)',
  runway: 'Approaching profitability (per CEO)',
  customers: 'SMBs, fintech startups, and platforms needing KYC/AML compliance',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown ARR; +20% MoM reported at YC application',
    userGrowth: 'Growing active customer base (free + paid split); high retention reported',
    signals: [
      '$2M raised + YC W26 acceptance (Jan 2026)',
      '+20% MoM growth at time of YC entry',
      'Near-profitability at seed stage — strong unit economics signal',
      'Identity verification market worth $15.78B in 2026, growing at 11% CAGR',
    ],
    tam: '$15.78B identity verification market (2026), growing to $26.8B by 2031',
    marketShare: '<0.1% of TAM = massive upside if they win SMB segment',
    ceiling: 'Large market with clear regulatory tailwinds; SMB segment underpenetrated by incumbent solutions',
    tailwinds: [
      'AI agent era driving demand for fast human verification (Sybil/bot prevention)',
      'Global KYC/AML regulation tightening — compliance mandated across sectors',
      'Onboarding friction is a top startup pain point — free tier removes barrier',
      'Biometric authentication replacing passwords across platforms',
      'Emerging market expansion where legacy document verification doesn\'t work',
    ],
    headwinds: [
      'Onfido (acquired by Entrust), Veriff, Jumio have significant enterprise market share',
      'Stripe Identity already embedded in payment flows for most fintechs',
      'GDPR and biometric data regulations in EU could increase compliance burden',
      'Data sovereignty concerns for identity data storage across borders',
      'Race to the bottom on pricing in commoditizing KYC segment',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Modular all-in-one platform creates switching costs once integrated. Free tier drives distribution that incumbents can\'t match.',
  },

  // Competition
  competitors: [
    {
      name: 'Stripe Identity',
      description: 'Identity verification embedded in Stripe payment flows.',
      whyTheyWin: 'Already in the payment stack; massive developer distribution; Stripe brand trust.',
    },
    {
      name: 'Veriff',
      description: 'AI-powered identity verification for enterprise online businesses.',
      whyTheyWin: 'Deep enterprise relationships, multi-language support, proven at scale.',
    },
    {
      name: 'Onfido (Entrust)',
      description: 'Global AI-powered identity verification leader.',
      whyTheyWin: 'Market leader with wide regulatory certifications and global document coverage.',
    },
    {
      name: 'Jumio',
      description: 'Enterprise-grade digital identity platform.',
      whyTheyWin: 'Deep compliance certifications, financial services footprint.',
    },
  ],
  marketPosition: 'Stripe for Identity Verification — simple API, free core tier, all-in-one vs fragmented incumbents',
  moat: [
    'Free core KYC — distribution advantage that Onfido/Veriff can\'t match commercially',
    'Built-from-scratch biometrics stack (no third-party dependencies)',
    'Single API covering ID, biometrics, liveness, auth, AML — vs competitors requiring multiple vendors',
  ],
  vsGiants: 'Underprice and out-integrate incumbents on developer experience. Free tier for startups creates bottom-up distribution.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: AI/biometrics is the core mechanism for liveness detection, document OCR, fraud detection, and identity matching. Without AI, verification reverts to slow manual review.',
  aiDesignChallenges: [
    'Liveness detection UX — guiding users through face scan without confusion or drop-off',
    'Communicating verification results in a trust-building way (pass/fail/review)',
    'No-code flow builder for custom KYC/AML workflows',
    'Error states for edge cases (bad lighting, obscured ID, liveness failure)',
    'Onboarding for developers vs compliance officers — two very different mental models',
    'Accessibility: biometric verification for users with disabilities',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alberto Rosas',
      role: 'CEO & Co-founder',
      background: 'Former AI engineer. Spanish-born, e/acc proponent. Previously built identity-adjacent products. Former professional tennis player turned startup founder.',
    },
    {
      name: 'Alejandro Rosas',
      role: 'CTO & Co-founder',
      background: 'Identical twin brother of Alberto. Mathematics and system architecture background. Built biometrics stack from scratch. Former professional tennis player.',
    },
    {
      name: 'Dani Lledo',
      role: 'CMO & Co-founder',
      background: 'Co-founder responsible for marketing and growth. Positions identity verification as a growth lever, not just compliance.',
    },
  ],
  whyBuilding: 'Former professional tennis players turned AI engineers (Alberto and Alejandro Rosas). Saw firsthand how fragmented identity verification is — separate vendors for each geography, document type, and check. Built one platform to unify them all.',
  beliefs: [
    'Identity should be as easy to integrate as Stripe payments',
    'Biometric verification can be faster and more secure than any physical check',
    'Free core offering creates distribution that incumbents cannot match commercially',
    'KYC should be a competitive advantage for onboarding, not just a compliance checkbox',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    '+20% MoM growth at YC entry — real traction before institutional backing',
    'Near profitability at seed stage — disciplined unit economics',
    'Founded 2021 — 4+ years of iteration before YC (not fresh idea)',
    'Both founders have complementary technical depth (AI + systems architecture)',
    'Free core KYC tier — strong distribution strategy',
  ],
  redFlags: [
    'Barcelona-based — US enterprise sales may require significant footprint investment',
    'Stripe Identity is deeply embedded in the developer stack already',
    'EU GDPR constraints on biometric data may limit feature velocity',
    'Identity verification is semi-commoditizing — pricing pressure from free tiers',
    'Small team (12 people) competing against well-funded incumbents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company ~12 people)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'No-code KYC/AML workflow builder',
        'Liveness detection guidance flows',
        'Verification result states (pass/fail/manual review) and escalation logic',
        'Webhook and API integration wizard for developers',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Fraud detection confidence scores and reviewer interfaces',
        'False positive/negative monitoring dashboard',
        'A/B testing conversion rates across different verification flows',
        'Analytics for onboarding drop-off by step',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'End-user verification flow (mobile-first ID capture + face scan)',
        'Developer dashboard and API key management',
        'Compliance officer review queue and case management',
        'Customizable white-label verification modal/SDK',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Fintech startups, crypto platforms, and marketplaces needing KYC/AML compliance',
    secondary: 'Enterprise compliance teams replacing fragmented multi-vendor identity stacks',
  },
  userProblems: [
    'KYC integration requires multiple vendors for different geographies and document types',
    'Identity verification drop-off rates destroy onboarding conversion',
    'Liveness detection from incumbents adds latency and is expensive per verification',
    'Small dev teams can\'t afford the integration overhead of enterprise identity solutions',
    'AML screening is siloed from ID verification — requires separate API calls and reconciliation',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Rich design problem: biometric verification UX is genuinely hard to get right',
      'High-stakes product — identity verification errors have serious consequences',
      '+20% MoM traction with near-profitability = healthy company dynamics',
      'No-code workflow builder is a meaty design surface',
    ],
    whyNot: [
      'Barcelona-based — remote or relocation required',
      'B2B compliance tooling may not be the most creatively stimulating design domain',
      'No known open designer roles',
      'Incumbents (Stripe Identity, Onfido) have significant distribution advantages',
    ],
    nextActions: [
      'Monitor for designer job postings',
      'Watch for Series A fundraise',
      'Track product updates on didit.me/blog',
    ],
  },

  // Meta
  lastUpdated: '2026-04-30T00:00:00',
  sources: [
    { title: 'Launch HN: Didit (YC W26) – Stripe for Identity Verification', url: 'https://news.ycombinator.com/item?id=47324296' },
    { title: 'Didit Raises $2M & Joins Y Combinator W26', url: 'https://didit.me/blog/didit-enters-y-combinator/' },
    { title: 'Didit: Identity platform for fast human verification | Y Combinator', url: 'https://www.ycombinator.com/companies/didit' },
    { title: 'About Didit | Modular Identity Platform for the AI Era', url: 'https://didit.me/about-us/' },
    { title: 'Didit 2026 Company Profile & Competitors | Tracxn', url: 'https://tracxn.com/d/companies/didit/__WL8QICb5n3AxuoliiV1wCgBHbFEkwRT4y0rqKZYiT8c' },
    { title: 'Identity Verification Market Size & Forecast | Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/identity-verification-market' },
  ],
};
