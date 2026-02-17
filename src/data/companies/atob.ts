import { Company } from '../types';

export const atob: Company = {
  id: 'atob',
  name: 'AtoB',
  description: 'Fintech platform modernizing payments infrastructure for the trucking and transportation industry with zero-fee fleet fuel cards, payroll, and vendor payments.',
  website: 'https://www.atob.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/atob-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['smb', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  stage: 'Series C',
  valuation: '$700M',
  totalFunding: '$305M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$7.5M',
      date: '2020-08',
      leadInvestors: [],
    },
    {
      stage: 'Series A',
      amount: '$12.5M',
      date: '2021-06',
      leadInvestors: ['General Catalyst'],
    },
    {
      stage: 'Series B',
      amount: '$155M',
      date: '2022-08',
      leadInvestors: ['General Catalyst', 'Bloomberg Beta'],
    },
    {
      stage: 'Series C',
      amount: '$130M',
      date: '2024-09',
      valuation: '$700M',
      leadInvestors: ['General Catalyst', 'Bloomberg Beta'],
    },
  ],
  revenue: 'Unknown',
  growth: '500% YoY (2024)',
  customers: '20,000+ fleets',

  competitors: [
    {
      name: 'WEX',
      description: 'Legacy fleet card giant serving millions of vehicles worldwide',
      whyTheyWin: 'Massive distribution network and enterprise lock-in',
    },
    {
      name: 'Fleetcor (Corpay)',
      description: 'Global fleet payments with Fuelman and Comdata brands',
      whyTheyWin: 'Portfolio breadth across fuel, tolls, and corporate payments',
    },
    {
      name: 'Coast',
      description: 'Modern fleet card for non-trucking commercial fleets with universal Visa acceptance',
      whyTheyWin: 'Broader fleet coverage beyond trucking with transparent pricing',
    },
  ],
  marketPosition: 'Leading fintech disruptor in trucking fleet payments, targeting SMB carriers underserved by legacy providers',
  moat: [
    'Deep trucking-specific product with 45¢/gal diesel discounts at 4,200+ truck stops',
    'Mastercard partnership for universal acceptance',
    'YC network and $305M in funding for sustained growth',
  ],
  vsGiants: 'WEX and Fleetcor rely on opaque fee structures; AtoB wins with zero hidden fees, modern UX, and faster onboarding for SMB fleets',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI powers fraud detection, credit underwriting, and fleet analytics but is not the core product differentiator — the fintech payment infrastructure is.',
  aiDesignChallenges: [
    'Fraud detection UX: surfacing alerts without overwhelming fleet managers',
    'Credit decisioning transparency for SMB truckers with thin credit files',
    'Fleet analytics dashboards for fuel spend optimization',
  ],

  founders: [
    {
      name: 'Vignan Velivela',
      role: 'Co-founder & CEO',
      background: 'Carnegie Mellon CS, former software engineer at Cruise Automation (self-driving), NASA/CMU lunar rover researcher. Forbes 30 Under 30.',
    },
    {
      name: 'Harshita Arora',
      role: 'Co-founder',
      background: 'Built viral crypto tracker app at 16 (acquired). YC Visiting Partner. Forbes 30 Under 30.',
    },
    {
      name: 'Tushar Misra',
      role: 'Co-founder & Advisor',
      background: 'One of Uber India\'s first employees. Founded Grido (EV charging). UC Berkeley Haas MBA, IIT Kanpur.',
    },
  ],
  whyBuilding: 'Trucking moves 72% of US freight but runs on decades-old financial infrastructure with opaque fees — AtoB is building Stripe for Transportation.',
  beliefs: [
    'SMB truckers deserve modern financial tools, not predatory legacy cards',
    'Transparent pricing builds long-term trust and retention',
    'Verticalized fintech beats horizontal solutions in regulated industries',
  ],
  greenFlags: [
    'YC S20 with strong founder backgrounds (Cruise, Uber, viral consumer apps)',
    '$305M raised from General Catalyst, Bloomberg Beta, Mastercard',
    '500% revenue growth in 2024, 20K+ fleets',
    'Murphy USA partnership validates enterprise channel',
  ],
  redFlags: [
    'Glassdoor reviews mention leadership culture concerns',
    'WEX and Fleetcor have massive incumbent advantages',
    'Trucking is cyclical and margin-sensitive',
  ],

  designTeam: {
    teamSize: '~3-5 (1 PD role open, 161 total employees)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Fleet card onboarding and credit approval flows',
        'Fraud detection alert logic and escalation design',
        'Payroll and vendor payment scheduling workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Fleet manager satisfaction and feature adoption metrics',
        'Fuel savings tracking and ROI reporting',
        'Driver app usability testing across trucking demographics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Fleet management dashboard (web and mobile)',
        'Driver-facing mobile app for fuel and payments',
        'Enterprise admin portal for multi-fleet customers',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'SMB trucking fleets (owner-operators to mid-size carriers)',
    secondary: 'Enterprise logistics companies and freight brokers',
  },
  userProblems: [
    'Legacy fleet cards charge hidden fees and lack transparency',
    'SMB truckers struggle to get credit approval from traditional providers',
    'Fleet managers lack real-time visibility into fuel spend across drivers',
    'Payroll and vendor payments are manual and slow in trucking',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (Hybrid)',
      url: 'https://jobs.ashbyhq.com/atob/8e97c4dc-0e49-4753-8277-ca8778c60e6c',
      level: 'Senior',
      type: 'full-time',
      compensation: '$170K-$200K',
      aboutRole: 'Lead design process for mobile and web applications, collaborating with PMs and engineers to ship high-quality experiences.',
      responsibilities: [
        'Direct design initiatives for new products and major features across web and mobile',
        'Develop user flows, wireframes, prototypes, and high-fidelity mockups',
        'Conduct user research and usability testing',
        'Establish design standards and promote design systems',
      ],
      requirements: [
        '5+ years product design experience',
        'Strong portfolio with end-to-end design work across platforms',
        'Proficient in Figma with design systems experience',
        'User-centered design methodology expertise',
      ],
      whyInteresting: 'Greenfield opportunity to shape the design system and product experience for a fast-growing fintech serving an underserved market.',
    },
  ],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.0,
      content: 'Strong compensation (4.4/5), work-life balance (4.2/5), and career opportunities (4.2/5). 79% recommend to a friend.',
      url: 'https://www.glassdoor.com/Reviews/AtoB-Reviews-E5140146.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Some reviews cite concerns about top-down leadership style and lack of psychological safety in disagreeing with executives.',
      url: 'https://www.glassdoor.com/Reviews/AtoB-Reviews-E5140146.htm',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '500% YoY (2024)',
    signals: [
      '$130M Series C at $700M valuation (Sep 2024)',
      'Murphy USA partnership for co-branded fuel card',
      'LogiPe acquisition (Oct 2025) for international expansion',
    ],
    tam: '$50B+ (US fleet card and transportation payments)',
    ceiling: 'Mid-innings: disrupting legacy fleet card duopoly (WEX + Fleetcor)',
    tailwinds: [
      'Trucking digitization accelerating post-COVID',
      'SMB fleets underserved by incumbents',
      'Mastercard partnership expands acceptance network',
    ],
    headwinds: [
      'WEX/Fleetcor have deep enterprise relationships',
      'Trucking industry cyclicality affects fleet spend',
      'Margin pressure in payments business',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep trucking-specific features but payments layer is replicable',
  },

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Greenfield design opportunity at fast-growing fintech ($700M valuation)',
      '$170K-$200K comp with equity upside',
      'Real-world impact: improving financial lives of 20K+ trucking fleets',
    ],
    whyNot: [
      'Level C AI-native — limited AI design challenges',
      'Glassdoor culture concerns around leadership',
      'Trucking vertical may limit design portfolio breadth',
    ],
    nextActions: [
      'Monitor design team growth and leadership hires',
      'Watch for AI-powered features in product roadmap',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'AtoB Official Website', url: 'https://www.atob.com' },
    { title: 'AtoB Series C Announcement — BusinessWire', url: 'https://www.businesswire.com/news/home/20240919045000/en/AtoB-Announces-New-Funding-and-Growth-Milestones' },
    { title: 'AtoB Series B Announcement — BusinessWire', url: 'https://www.businesswire.com/news/home/20220815005724/en/AtoB-the-First-Fintech-Payments-Platform-to-Modernize-Americas-Trucking-Industry-Announces-155M-Series-B-Fundraise-Round' },
    { title: 'AtoB Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/AtoB-Reviews-E5140146.htm' },
    { title: 'AtoB Product Designer — Built In', url: 'https://builtin.com/job/product-designer/2882762' },
  ],
};
