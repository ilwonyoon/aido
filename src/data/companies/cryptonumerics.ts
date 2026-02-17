import { Company } from '../types';

export const cryptonumerics: Company = {
  id: 'cryptonumerics',
  name: 'CryptoNumerics',
  description: 'AI-powered data privacy platform enabling enterprises to create privacy-protected datasets while maintaining analytical quality for machine learning.',
  website: 'https://cryptonumerics.com',
  headquarters: 'Toronto, Canada',
  remote: 'Unknown',

  category: 'enterprise-ops' as const,
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  industries: ['security'],

  stage: 'Acquired',
  valuation: '$7.1M (acquisition price)',
  totalFunding: '$2.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2.5M',
      date: '2019-03',
      leadInvestors: ['11.2 Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Acquired by Snowflake in July 2020',
  runway: 'N/A (acquired)',
  customers: 'Enterprises handling sensitive data (HIPAA, GDPR, CCPA compliance)',

  competitors: [
    {
      name: 'Privitar',
      description: 'Enterprise data privacy platform for safe data use',
      whyTheyWin: 'Larger funding and established enterprise relationships',
    },
    {
      name: 'Immuta',
      description: 'Automated data governance and privacy compliance platform',
      whyTheyWin: 'Broader data governance suite beyond privacy',
    },
    {
      name: 'Mostly AI',
      description: 'Synthetic data generation for privacy-safe analytics',
      whyTheyWin: 'Focused synthetic data approach with stronger brand recognition',
    },
  ],
  marketPosition: 'Early-stage data privacy startup acquired by Snowflake for its differential privacy and k-anonymity technology',
  moat: [
    'Proprietary AI-driven differential privacy algorithms',
    'Python library integration with data science workflows',
    'Combined k-Anonymity and differential privacy approach',
  ],
  vsGiants: 'Acquired by Snowflake to bolster its cloud data platform privacy capabilities',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI was the core differentiator — used machine learning to optimize privacy-quality tradeoffs in dataset anonymization, but the product served a traditional enterprise workflow.',
  aiDesignChallenges: [
    'Visualizing privacy risk vs data quality tradeoffs for non-technical users',
    'Designing trust indicators for anonymized dataset quality',
    'Integrating privacy controls into existing data science workflows',
  ],

  founders: [
    {
      name: 'Monica Holboke',
      role: 'Co-founder & CEO',
      background: 'Civil engineer and mathematical modeler with a Ph.D. in numerical methods.',
    },
    {
      name: 'Hassan W. Bhatti',
      role: 'Co-founder',
      background: 'Serial entrepreneur (Wifigen, Semantic Health); helped launch CDL quantum ML program.',
    },
    {
      name: 'Jimmy Fan',
      role: 'Co-founder',
      background: 'Technical co-founder with expertise in cryptography and data systems.',
    },
    {
      name: 'Roberto Cervantes Betancourt',
      role: 'Co-founder & Head of Marketing',
      background: 'Marketing and go-to-market lead for the enterprise privacy platform.',
    },
  ],
  whyBuilding: 'Founded to solve the tension between data utility and privacy — enabling enterprises to unlock insights from sensitive data without compromising individual privacy.',
  beliefs: [
    'Privacy and data utility are not mutually exclusive',
    'AI can automate privacy protection at enterprise scale',
    'Compliance (GDPR, HIPAA, CCPA) should be built into data workflows',
  ],
  greenFlags: [
    'Acquired by Snowflake validates technology and team quality',
    'Strong academic foundation (Ph.D. founder, differential privacy expertise)',
    'Real enterprise compliance use case (HIPAA, GDPR, CCPA)',
  ],
  redFlags: [
    'Company no longer exists independently (acquired July 2020)',
    'Small seed funding ($2.5M) suggests limited traction before acquisition',
    'No public product available post-acquisition',
  ],

  designTeam: {
    teamSize: 'Unknown (small startup, likely 0-1 dedicated designers)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Privacy risk threshold configuration logic',
        'Dataset anonymization parameter tuning',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Privacy risk scoring and visualization',
        'Data quality metrics after anonymization',
        'Compliance audit reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Enterprise dashboard for privacy management',
        'Python library developer experience',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Enterprise data science teams handling sensitive data',
    secondary: 'Compliance officers and privacy teams at regulated enterprises',
  },
  userProblems: [
    'Sensitive datasets cannot be shared across teams without privacy risk',
    'Anonymization often destroys data quality needed for ML models',
    'Manual privacy compliance is slow and error-prone',
    'No standardized way to quantify privacy risk in datasets',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'dead',
    fitScore: 1,
    whyJoin: [
      'N/A — company was acquired by Snowflake in July 2020',
    ],
    whyNot: [
      'Company no longer exists as independent entity',
      'Acqui-hire: team absorbed into Snowflake',
      'No design roles or opportunities available',
    ],
    nextActions: [],
    notes: 'CryptoNumerics was acquired by Snowflake in July 2020 for $7.1M in cash plus undisclosed stock. The team was absorbed into Snowflake. Not a viable opportunity.',
  },

  lastUpdated: '2026-02-13',
  sources: [
    { title: 'CryptoNumerics Acquired by Snowflake in $7.1 Million Deal - Finovate', url: 'https://finovate.com/cryptonumerics-acquired-by-snowflake-in-7-1-million-deal/' },
    { title: 'CryptoNumerics raises $3.3M CAD seed funding - BetaKit', url: 'https://betakit.com/cryptonumerics-raises-3-3-million-cad-seed-funding-for-data-analytics-privacy-software/' },
    { title: 'Snowflake acquires CryptoNumerics assets for $7.1M - Private Capital Journal', url: 'https://privatecapitaljournal.com/snowflake-acquires-assets-of-cryptonumerics-for-us-7-1m/' },
    { title: 'CryptoNumerics CN-Protect announcement - PR Newswire', url: 'https://www.prnewswire.com/news-releases/cryptonumerics-announces-free-downloadable-cn-protect-software-that-uses-ai-to-create-privacy-protected-datasets-while-maintaining-their-quality-for-machine-learning-cryptonumerics-also-announces-a-2-5-million-usd-seed-financing-300811867.html' },
    { title: 'CryptoNumerics careers - no active roles (acquired)', url: 'https://cryptonumerics.com' },
  ],
};
