import { Company } from '../types';

export const finix: Company = {
  id: 'finix',
  name: 'Finix',
  description: 'Full-stack payments infrastructure enabling software platforms to embed payment processing, merchant onboarding, and risk management via PayFac-as-a-Service.',
  website: 'https://finix.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/finix-og.webp',
  category: 'vertical-saas' as const,
  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  industries: ['fintech'],
  stage: 'Series C',
  totalFunding: '~$170M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.5M',
      date: '2017-01',
      leadInvestors: ['Homebrew'],
    },
    {
      stage: 'Series A',
      amount: '$17.5M',
      date: '2019-07',
      leadInvestors: ['Bain Capital Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$75M',
      date: '2020-02',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
    {
      stage: 'Series C',
      amount: '$75M',
      date: '2024-10',
      leadInvestors: ['Acrew Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: '4x YoY (CEO stated at Series C)',
  customers: 'Lunchbox, AgVend, Clubessential, Passport, Beyond Pricing',
  competitors: [
    {
      name: 'Stripe',
      description: 'Full-stack payments platform with Connect for embedded payments',
      whyTheyWin: 'Massive developer ecosystem, brand recognition, and global coverage',
    },
    {
      name: 'Adyen',
      description: 'Enterprise-grade embedded payments with global acquiring',
      whyTheyWin: 'Deep enterprise relationships and unified commerce across channels',
    },
    {
      name: 'Payrix',
      description: 'PayFac-as-a-Service for software platforms (acquired by Worldpay)',
      whyTheyWin: 'Worldpay backing and established PayFac expertise',
    },
  ],
  marketPosition: 'Independent full-stack processor for software platforms seeking PayFac ownership',
  moat: [
    'Direct card network connections (Visa, Mastercard, Amex, Discover)',
    'PayFac growth path: start as service, graduate to full ownership on same platform',
    'High switching costs once payment infrastructure is embedded',
  ],
  vsGiants: 'Unlike Stripe Connect where Stripe is merchant of record, Finix gives platforms full control over merchant accounts, economics, and branding.',
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is a minor add-on for fraud detection (Sift partnership). Core product is payments infrastructure with no AI dependency.',
  aiDesignChallenges: [
    'Fraud rule configuration UX for non-technical merchants',
    'Risk score transparency in transaction monitoring dashboards',
    'Balancing automated fraud blocking with false positive management',
  ],
  founders: [
    {
      name: 'Richie Serna',
      role: 'CEO & Co-Founder',
      background: 'Harvard graduate, former engineer at Balanced (first payments API for marketplaces). First-generation American.',
    },
    {
      name: 'Sean Donovan',
      role: 'Co-Founder',
      background: '14 years in payments, former VP of Payment Facilitators at Vantiv, former COO of North America at Klarna.',
    },
  ],
  whyBuilding: 'Saw that software platforms needed to own their payment economics but lacked the infrastructure to become payment facilitators without massive regulatory burden.',
  beliefs: [
    'Software platforms should own their payment stack, not rent it',
    'Payments infrastructure should grow with you from startup to enterprise',
    'Democratizing access to payment processing for underserved founders',
  ],
  greenFlags: [
    'Direct processor status — rare competitive advantage among startups',
    'Revenue quadrupled YoY at Series C',
    'Strong investor lineup: Lightspeed, Bain Capital, Acrew, Citi Ventures',
  ],
  redFlags: [
    'Glassdoor 3.2/5 with work-life balance concerns',
    'Competing directly with Stripe — massive resource asymmetry',
    'AI Level D — limited design innovation opportunity for AI-focused designers',
  ],
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Merchant onboarding workflow logic',
        'Payment routing and settlement rules',
        'Fraud detection threshold configuration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Transaction monitoring and anomaly detection UX',
        'Dispute management workflow effectiveness',
        'Merchant health scoring dashboards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer dashboard and API documentation',
        'Payment analytics and reporting interfaces',
        'Merchant onboarding and KYC forms',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'SaaS platforms and software marketplaces embedding payments',
    secondary: 'Vertical software companies in healthcare, hospitality, and e-commerce',
  },
  userProblems: [
    'Becoming a PayFac requires years of compliance work and millions in investment',
    'Stripe Connect takes a cut and controls the merchant relationship',
    'Legacy payment processors offer poor APIs and developer experience',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'negative',
      rating: 3.2,
      content: 'Mixed reviews citing fast pace and talented team but concerns about work-life balance (2.5/5) and leadership favoritism.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '4x YoY (CEO stated Oct 2024)',
    signals: [
      '$75M Series C at up-round valuation (Oct 2024)',
      'Direct processor status with all four card networks',
      'Canada cross-border expansion launched 2024',
    ],
    tam: '$2T+ global payments processing market',
    ceiling: 'Mid-innings: competing for embedded payments share against Stripe and Adyen',
    tailwinds: [
      'Software-led payments growing as platforms monetize transactions',
      'Regulatory complexity makes PayFac-as-a-Service valuable',
      'Vertical SaaS boom increases embedded finance demand',
    ],
    headwinds: [
      'Stripe Connect dominance and brand moat',
      'Adyen and Worldpay/Payrix consolidation',
      'Thin margins in payment processing',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: deeply embedded in platform payment flows, but limited network effects',
  },
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Complex fintech infrastructure — deep product design challenges',
      'Series C with strong growth trajectory',
    ],
    whyNot: [
      'Level D AI — minimal AI design opportunity',
      'Glassdoor culture concerns (3.2/5)',
      'Competing against Stripe with far fewer resources',
    ],
    nextActions: [
      'Monitor for Product Designer openings',
      'Check if AI fraud features expand design scope',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Finix Series C — TechCrunch', url: 'https://techcrunch.com/2024/10/24/finix-raises-75-million-to-take-on-stripe-as-a-payment-processor/' },
    { title: 'Finix Series C Press Release', url: 'https://finix.com/press/announcing-finix-series-c' },
    { title: 'Finix Series A Launch', url: 'https://finix.com/press/finix-launches-with-usd17-5-million-series-a-to-power-the-next-generation-of' },
    { title: 'Finix Series B — TechCrunch', url: 'https://techcrunch.com/2020/02/04/payments-infra-startup-finix-closes-35m-series-b-led-by-sequoia/' },
    { title: 'Finix Careers — no Product Design roles found', url: 'https://finix.com/careers' },
  ],
};
