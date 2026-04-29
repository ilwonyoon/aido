import { Company } from '../types';

export const palusFinance: Company = {
  id: 'palus-finance',
  name: 'Palus Finance',
  description: 'Treasury management platform for startups and SMBs. Replaces money market funds with a short-duration, floating-rate agency MBS bond portfolio that targets 40% higher yield (~4.5–5% vs ~3.5%), with sub-3-day liquidity and 5-minute setup.',
  website: 'https://www.palus.finance',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['smb', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC standard deal)',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (AUM-based, 0.25% annual fee)',
  growth: '110% week-over-week (early-stage, 33 customers at launch, Feb 2026)',
  runway: 'Unknown',
  customers: 'YC-backed startups and SMBs with idle cash on balance sheet',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown (pre-revenue scale, launched Feb 2026)',
    userGrowth: '33 companies at launch, 110% WoW growth (Feb 2026)',
    signals: [
      'YC W26 batch — strong distribution to other YC startups',
      '110% week-over-week customer growth at launch',
      'Differentiated investment strategy vs competitor money market wrappers (Brex, Mercury)',
      'Solana smart contract hiring — DeFi/blockchain expansion signal',
    ],
    tam: '$7T+ idle cash held by US startups and SMBs',
    marketShare: '<0.01% of TAM — very early innings',
    ceiling: 'Large TAM but requires trust and regulatory compliance to scale; bank partnerships are the bottleneck',
    tailwinds: [
      'High interest rate environment makes yield optimization top-of-mind for CFOs',
      'Startup banking alternatives gaining traction post-SVB collapse',
      'YC network effect for early customer acquisition',
      'Plaid integration lowering setup friction for existing bank account holders',
    ],
    headwinds: [
      'Brex and Mercury have deep embedded relationships with startup treasuries',
      'Regulatory complexity around investment advice and fund management',
      'Trust barrier: CFOs reluctant to move idle cash to unknown platforms',
      'Interest rate risk: if rates drop, yield advantage narrows',
      'Very small team to handle compliance, sales, and product simultaneously',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Weak now, medium long-term. Treasury relationships are sticky once established but easy to avoid if you lose trust.',
  },

  // Competition
  competitors: [
    {
      name: 'Brex',
      description: 'Corporate cards, banking, and treasury with money market fund at 3.74% APY.',
      whyTheyWin: 'Deep startup ecosystem integration — cards, payroll, bill pay, and banking in one platform.',
    },
    {
      name: 'Mercury',
      description: 'Startup banking with Treasury at up to 4.97% APY for large deposits ($20M+).',
      whyTheyWin: 'Strong brand trust in the startup community and tiered yield rewards for larger balances.',
    },
    {
      name: 'Rho',
      description: 'Business banking and treasury platform targeting mid-size companies.',
      whyTheyWin: 'Full banking stack + corporate cards simplifies finance ops for growing companies.',
    },
  ],
  marketPosition: 'Higher-yield treasury alternative to money market funds for startups without switching banks',
  moat: [
    'Bond portfolio differentiation vs. commodity money market wrappers',
    'YC network for early distribution and credibility',
    'Non-custodial model (connects to existing bank via Plaid) reduces switching cost',
  ],
  vsGiants: 'Palus competes on yield, not banking breadth — additive to existing banking relationships rather than replacing them.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is not a meaningful part of the product. The core value is financial engineering (bond portfolio construction, yield optimization) — not AI. AI may be used for risk monitoring or portfolio rebalancing internally but is not customer-facing.',
  aiDesignChallenges: [
    'Communicating complex financial products (MBS, bond duration) to non-finance startup founders',
    'Building trust UX for a new financial platform handling company cash',
    'Onboarding UX: Plaid connection, account verification, and fund transfer flows',
    'Dashboard design for yield tracking, liquidity status, and portfolio health',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sam Lushtak',
      role: 'Co-founder & CEO',
      background: 'Caltech alum. Built AI research platform for a $3T AUM asset manager. Deep institutional investment operations experience.',
    },
    {
      name: 'Michael Gonzalez',
      role: 'Co-founder & CTO',
      background: 'Caltech alum. Built monitoring software saving defense contractors $150M+ by optimizing uptime of quantum computing fleets.',
    },
  ],
  whyBuilding: 'Founders saw that startups leave millions on the table by defaulting to money market funds bundled with their bank, when a bond portfolio could safely earn 40% more yield. They want to bring institutional-grade treasury management to companies without institutional teams.',
  beliefs: [
    'Startups deserve access to the same yield strategies as large institutions',
    'The best treasury product should not require switching banks',
    'Short-duration, floating-rate bonds are the optimal risk/reward instrument for corporate cash',
    'Transparency beats bundled, opaque financial products',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'YC W26 — strong signal of team quality and early distribution',
    'Genuine product differentiation vs. money market wrappers',
    'Technical founders with directly relevant institutional finance backgrounds',
    '110% WoW growth at launch — real early traction',
  ],
  redFlags: [
    'Extremely early stage — 2-person founding team, launched Feb 2026',
    'Regulatory and compliance risk in investment management',
    'Brex and Mercury are deeply entrenched with startup finance teams',
    'No visible product design investment or design roles',
    'DeFi/Solana hiring suggests product direction uncertainty',
    'Trust barrier for moving company cash to a brand-new platform',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (2-person founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'Portfolio rebalancing trigger communication',
        'Withdrawal and liquidity flow logic',
        'Risk tolerance configuration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Yield vs benchmark visualization',
        'Portfolio composition and duration dashboard',
        'Transaction and fee transparency reporting',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Onboarding: Plaid connection and account setup in 5 minutes',
        'Trust-building UI for a new fintech holding company cash',
        'Mobile-friendly treasury overview for founders/CFOs',
        'Fund transfer and withdrawal request flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'CFOs and founders at Series A–C startups with $500K–$5M idle cash',
    secondary: 'SMB finance leaders looking for alternatives to low-yield business banking',
  },
  userProblems: [
    'Idle cash earns minimal yield when sitting in money market accounts bundled with banking',
    'Institutional bond portfolios are inaccessible to companies without dedicated treasury teams',
    'Switching banks to get better yield disrupts payments, payroll, and card infrastructure',
    'Lack of transparency on fees and portfolio composition from incumbent treasury providers',
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
    fitScore: 3,
    whyJoin: [
      '0→1 product with full design ownership',
      'Genuine fintech problem with clear user pain',
      'YC pedigree means good investor network and peer companies as customers',
    ],
    whyNot: [
      'AI-level D — no meaningful AI design challenges',
      'Very early stage with no design investment or role yet',
      'Fintech compliance complexity limits design iteration speed',
      'Brex/Mercury incumbents make product-market fit hard to sustain long-term',
    ],
    nextActions: [
      'Monitor — not a target for active outreach',
    ],
  },

  // Meta
  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Launch HN: Palus Finance (YC W26)', url: 'https://news.ycombinator.com/item?id=47278980' },
    { title: 'Palus Finance | Y Combinator', url: 'https://www.ycombinator.com/companies/palus-finance' },
    { title: 'Palus Finance', url: 'https://www.palus.finance/' },
    { title: 'Palus Finance - Crunchbase', url: 'https://www.crunchbase.com/organization/palus-finance' },
    { title: 'Sam Lushtak - Palus Finance | LinkedIn', url: 'https://www.linkedin.com/in/samuel-lushtak/' },
    { title: 'Palus Finance Funding | Extruct AI', url: 'https://www.extruct.ai/hub/palus-finance/' },
    { title: 'Launch HN discussion summary', url: 'https://www.thehonanews.in/launch-hn-palus-finance-yc-w26-better-yields-on-idle-cash-for-startups-smbs/' },
  ],
};
