import { Company } from '../types';

export const slope: Company = {
  id: 'slope',
  name: 'Slope',
  description: 'AI-powered B2B payments and embedded financing platform that enables merchants and marketplaces to offer net terms, BNPL, and order-to-cash automation to business buyers.',
  website: 'https://www.slopepay.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/slope-og.webp',
  category: 'vertical-saas' as const,
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  industries: ['fintech'],
  stage: 'Series B',
  totalFunding: '~$252M ($77M equity + $175M debt)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Undisclosed',
      date: '2021-11',
      leadInvestors: ['Union Square Ventures'],
    },
    {
      stage: 'Series A',
      amount: '~$8M',
      date: '2022-04',
      leadInvestors: ['Union Square Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$30M',
      date: '2023-09',
      leadInvestors: ['Union Square Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Walmart Marketplace, Alibaba.com, IKEA US',
  competitors: [
    {
      name: 'Balance Payments',
      description: 'Embedded B2B payment infrastructure with zero DSO guarantee for enterprises.',
      whyTheyWin: 'Pure-play B2B checkout with broader payment method coverage',
    },
    {
      name: 'Resolve Pay',
      description: 'Non-recourse B2B financing that eliminates all merchant credit risk.',
      whyTheyWin: 'Stronger risk protection model — full non-recourse vs shared risk',
    },
    {
      name: 'TreviPay',
      description: 'Legacy B2B payments leader with 40+ years, 20+ countries, 10+ currencies.',
      whyTheyWin: 'Massive scale and global presence that startups cannot match overnight',
    },
  ],
  marketPosition: 'AI-native challenger in the $125T B2B payments market, targeting embedded trade credit for enterprise marketplaces',
  moat: [
    'LLM-powered underwriting (SlopeGPT) with 10B+ tokens processed — proprietary risk data',
    'Enterprise entrenchment via Walmart, Alibaba, IKEA integrations',
    'JP Morgan as strategic debt partner — institutional capital access competitors lack',
  ],
  vsGiants: 'Stripe and large banks are expanding into B2B invoicing, but Slope differentiates through AI-native underwriting that legacy payment rails cannot easily replicate.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator in a proven fintech category. SlopeGPT powers real-time KYB verification, credit risk scoring, and payment reconciliation — the underwriting stack is LLM-native, not a bolt-on.',
  aiDesignChallenges: [
    'Designing transparent AI credit decisions — merchants and buyers need to understand why financing was approved or denied',
    'Real-time risk visualization for complex B2B transactions with multiple parties',
    'Embedding checkout UX into third-party marketplaces with varying design constraints',
  ],
  founders: [
    {
      name: 'Lawrence Lin Murata',
      role: 'CEO & Co-founder',
      background: 'Stanford grad. Founded Newton Technologies (acquired by Nauto). Led AI Platforms at Nauto. Family spent 3 decades in Brazilian wholesale — direct inspiration for Slope.',
    },
    {
      name: 'Alice Deng',
      role: 'CPO & Co-founder',
      background: 'UC Berkeley grad. Co-founded Glisten AI (YC W20, e-commerce product categorization). Former PM at Dropbox. Forbes 30 Under 30 (2023).',
    },
  ],
  whyBuilding: 'B2B commerce is still dominated by paper checks and manual net terms. Slope uses AI to automate the entire order-to-cash flow — inspired by Lawrence\'s family experience in Brazilian wholesale.',
  beliefs: [
    'B2B payments should be as seamless as B2C checkout',
    'AI underwriting can replace slow, manual credit processes',
    'Embedding financing at point of purchase unlocks commerce growth',
  ],
  greenFlags: [
    'Marquee enterprise customers: Walmart, Alibaba, IKEA',
    'JP Morgan strategic investment signals institutional confidence',
    'Sam Altman as backer — strong AI credibility signal',
    'Both founders have deep AI/ML backgrounds (Nauto, Glisten AI)',
  ],
  redFlags: [
    'Small team (~20-30 people) — design capacity likely very limited',
    'Stripe and large banks encroaching on B2B BNPL space',
    'Revenue and growth metrics not publicly disclosed',
  ],
  designTeam: {
    cpo: 'Alice Deng (Co-founder)',
    teamSize: '~1-2 (small team, CPO likely owns design direction)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI credit decision logic and underwriting flow design',
        'Checkout embedding logic across different marketplace platforms',
        'Order-to-cash automation workflow orchestration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Credit risk model output quality and accuracy monitoring',
        'Merchant and buyer satisfaction measurement',
        'Payment reconciliation accuracy feedback loops',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Embedded B2B checkout UI for marketplace integration',
        'Merchant dashboard for payment tracking and risk insights',
        'Buyer financing flow and net terms management',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Enterprise merchants and marketplaces selling B2B (wholesale, manufacturing, distribution)',
    secondary: 'SMB buyers purchasing inventory who need working capital at checkout',
  },
  userProblems: [
    'Cash flow mismatch — buyers want 30/60/90 net terms but sellers need immediate payment',
    'Manual, offline invoicing and reconciliation slows B2B transactions',
    'High B2B credit default risk without sophisticated underwriting',
    'KYB friction when onboarding business buyers at checkout',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'twitter',
      sentiment: 'positive',
      content: 'CEO Lawrence Lin Murata is an "e/acc" advocate — signals fast-moving, high-conviction culture. Company hires for growth trajectory potential over credentials.',
      url: 'https://x.com/LawLM',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Signed Walmart, Alibaba, IKEA without a dedicated sales team — founder-led sales culture with strong execution.',
      url: 'https://techcrunch.com/2023/09/27/sam-altman-slope-30m-b2b-payments/',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$65M strategic round from JP Morgan (July 2024)',
      'Sam Altman as investor and advisor',
      'Live on Walmart Marketplace, Alibaba.com, IKEA US',
    ],
    tam: '$125T global B2B payments market',
    ceiling: 'Early innings — vast majority of B2B still on paper checks and manual net terms',
    tailwinds: [
      'B2B e-commerce digitization accelerating post-COVID',
      'AI-native underwriting becoming table stakes for fintech',
      'Enterprise demand for embedded finance growing',
    ],
    headwinds: [
      'Stripe expanding into B2B invoicing and payments',
      'Large banks building competing embedded finance products',
      'Commoditization risk as AI underwriting tools become widespread',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate: 10B+ tokens of B2B transaction data powering proprietary risk models, plus enterprise switching costs',
  },
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-native — LLM-powered underwriting is genuine differentiator',
      'Marquee enterprise customers (Walmart, Alibaba, IKEA)',
      'Both founders are technical with AI/ML backgrounds',
    ],
    whyNot: [
      'Very small team — design role may not exist yet',
      'B2B payments is complex but not deeply creative design work',
      'No public design roles currently open',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Track growth as JP Morgan partnership matures',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Slope Official Website', url: 'https://www.slopepay.com' },
    { title: 'TechCrunch - Slope $30M Series B (Sept 2023)', url: 'https://techcrunch.com/2023/09/27/sam-altman-slope-30m-b2b-payments/' },
    { title: 'TechCrunch - JP Morgan $65M round (July 2024)', url: 'https://techcrunch.com/2024/07/17/sam-altman-jp-morgan-slope-65m/' },
    { title: 'Y Combinator - Slope Company Profile', url: 'https://www.ycombinator.com/companies/slope' },
    { title: 'Slope Careers - no Product Design roles found', url: 'https://www.slopepay.com/careers' },
  ],
};
