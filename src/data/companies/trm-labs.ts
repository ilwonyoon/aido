import { Company } from '../types';

export const trmLabs: Company = {
  id: 'trm-labs',
  name: 'TRM Labs',
  description:
    'Blockchain intelligence platform that helps governments, financial institutions, and crypto businesses detect, investigate, and prevent illicit activity.',
  website: 'https://www.trmlabs.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$130M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$60M',
      date: '2021-12',
      leadInvestors: ['Tiger Global'],
    },
    {
      stage: 'Series B',
      amount: '$70M',
      date: '2022-11',
      leadInvestors: ['Thoma Bravo'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Government agencies, financial institutions, and crypto businesses.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series B expanded to $130M total (Nov 2022)',
      'Coverage across 77 blockchains announced (Feb 2025)',
      'Global, distributed hiring footprint',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: crypto compliance and investigations remain a fast-growing need.',
    tailwinds: [
      'Regulatory pressure on crypto compliance',
      'Rising demand for blockchain forensics',
      'Institutional adoption of digital assets',
    ],
    headwinds: [
      'Policy uncertainty across jurisdictions',
      'High accuracy and trust requirements',
      'Competition in blockchain analytics',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if TRM becomes the default intelligence layer for crypto investigations.',
  },

  // Competition
  competitors: [
    {
      name: 'Chainalysis',
      description: 'Blockchain analytics and compliance platform.',
      whyTheyWin: 'Large enterprise footprint and deep regulatory relationships.',
    },
    {
      name: 'Elliptic',
      description: 'Crypto compliance and risk management solutions.',
      whyTheyWin: 'Strong compliance tooling and industry partnerships.',
    },
    {
      name: 'CipherTrace (Mastercard)',
      description: 'Crypto intelligence and AML platform.',
      whyTheyWin: 'Mastercard distribution and enterprise access.',
    },
  ],
  marketPosition: 'Blockchain intelligence for compliance, investigations, and risk management.',
  moat: [
    'Cross-chain data and threat intelligence',
    'Trusted by public agencies and financial institutions',
    'Deep risk category coverage and analytics',
  ],
  vsGiants: 'Focuses on crypto-specific intelligence vs general financial analytics tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: TRM uses advanced analytics and intelligence workflows to surface blockchain risk.',
  aiDesignChallenges: [
    'Explaining risk scores and evidence clearly',
    'Balancing speed with investigatory accuracy',
    'Designing workflows for analysts and investigators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Esteban Castano',
      role: 'Co-founder & CEO',
      background: 'Co-founded TRM Labs to build safer crypto infrastructure.',
    },
  ],
  whyBuilding:
    'Help public and private institutions fight crypto-enabled crime with trusted intelligence.',
  beliefs: [
    'Transparency is essential for safe crypto adoption',
    'Investigations need fast, reliable data',
    'Compliance should be proactive, not reactive',
  ],
  designPhilosophy: 'Make complex investigations clear and evidence-driven.',
  greenFlags: [
    'Strong Series B financing and investor support',
    'Clear demand from regulated institutions',
  ],
  redFlags: [
    'Regulatory shifts can affect demand',
    'High accuracy and trust requirements',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Risk scoring and alert logic',
        'Cross-chain investigation workflows',
        'Permissions and case collaboration',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Confidence metrics for threat intelligence',
        'Analyst feedback loops for model tuning',
        'Audit trails and evidence validation',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Investigation dashboards and case views',
        'Alert triage and search UX',
        'Reporting and compliance exports',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Compliance, investigations, and law enforcement teams',
    secondary: 'Crypto businesses and financial institutions',
  },
  userProblems: [
    'Tracking illicit crypto flows across chains is difficult',
    'Compliance teams need fast, reliable risk signals',
    'Investigations require defensible evidence trails',
    'Cross-chain visibility is limited in legacy tools',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Globally distributed team with intentional connection rituals.',
      url: 'https://www.trmlabs.com/careers',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'High-impact mission with clear societal value',
      'Complex investigative workflows and data UX',
    ],
    whyNot: [
      'Regulatory uncertainty and compliance pressure',
      'High stakes for accuracy and trust',
    ],
    nextActions: [
      'Track product updates and customer case studies',
      'Monitor design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T19:10:00',
  sources: [
    { title: 'TRM Labs website', url: 'https://www.trmlabs.com/' },
    { title: 'TRM Labs funding (Series B expansion)', url: 'https://www.businesswire.com/news/home/20221109005400/en/Leading-Blockchain-Intelligence-Company-TRM-Labs-Announces-%2470-Million-Series-B-Expansion-Led-by-Thoma-Bravo' },
    { title: 'TRM Labs Series B (2021)', url: 'https://www.businesswire.com/news/home/20211207005367/en/Blockchain-Intelligence-Company-TRM-Labs-Announces-%2460-million-Series-B-Led-by-Tiger-Global' },
    { title: 'TRM Labs blockchain coverage announcement', url: 'https://www.globenewswire.com/news-release/2025/02/13/3025837/0/en/TRM-Labs-Announces-Comprehensive-Blockchain-Intelligence-Coverage-for-TON.html' },
    { title: 'TRM Labs CEO bio', url: 'https://www.trmlabs.com/about/esteban-castano' },
    { title: 'TRM Labs careers', url: 'https://www.trmlabs.com/careers-list' },
  ],
};
