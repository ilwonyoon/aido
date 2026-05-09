import { Company } from '../types';

export const scalify: Company = {
  id: 'scalify',
  name: 'Scalify',
  description: 'AI-powered ad management platform for Meta and TikTok. Helps e-commerce brands launch, optimize, and scale paid social campaigns with AI-generated creatives and automated bid management.',
  website: 'https://scalify.com',
  headquarters: 'London, UK',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['smb', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$2M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2M',
      date: '2022',
      leadInvestors: ['Starfish Ventures'],
    },
  ],
  revenue: 'Unknown (SaaS, $39–$99/month plans)',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'E-commerce brands and agencies running Meta/TikTok ads',

  // Growth & Potential
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Available on Shopify App Store',
      'Listed on G2, Capterra, SoftwareAdvice',
      'Expanded from Facebook Ads to Meta + TikTok dual-platform',
    ],
    tam: '$200B+ global digital advertising market',
    marketShare: '<0.01% of TAM',
    ceiling: 'Crowded market — strong ceiling pressure from larger ad-tech incumbents',
    tailwinds: [
      'AI creative generation lowering the barrier for small brands to run ads',
      'Meta and TikTok growing ad spend share',
      'E-commerce brands shifting budget from agencies to self-serve tools',
    ],
    headwinds: [
      'Intense competition from Meta Ads Manager itself and other tools (Madgicx, AdEspresso, Smartly)',
      'Platform API changes can break automation workflows',
      'Limited brand recognition outside niche Shopify ecosystem',
      'Ad platform CPMs rising, compressing ROAS for SMBs',
    ],
    moatType: 'none',
    moatStrength: 'Low — feature parity risk from both incumbents and newer AI-native ad tools.',
  },

  // Competition
  competitors: [
    {
      name: 'Madgicx',
      description: 'AI-powered Meta and Google Ads optimization platform.',
      whyTheyWin: 'Broader platform coverage (Meta + Google) and more established brand in ad-tech.',
    },
    {
      name: 'Smartly.io',
      description: 'Enterprise-grade social ad automation platform.',
      whyTheyWin: 'Enterprise relationships, deeper integrations, higher ACV clients.',
    },
    {
      name: 'AdEspresso (Hootsuite)',
      description: 'Facebook and Instagram ad creation and management tool.',
      whyTheyWin: 'Brand recognition backed by Hootsuite distribution.',
    },
  ],
  marketPosition: 'SMB-focused Meta/TikTok ad automation with AI creative generation',
  moat: [
    'Shopify app ecosystem distribution',
    'Cross-platform (Meta + TikTok) single-dashboard workflow',
  ],
  vsGiants: 'Easier to use and cheaper than enterprise tools like Smartly, but narrower scope.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a major feature: AI-generated ad copy and creatives, automated bid management (Sato), and campaign recommendations. Core product (ad management) could exist without AI.',
  aiDesignChallenges: [
    'Communicating AI optimization decisions to non-technical users',
    'Designing trust signals for AI-automated budget and bid changes',
    'Creative generation UX: prompt-to-ad workflow',
    'Multi-platform campaign management in one dashboard',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Yassir Enzkna',
      role: 'Founder & CEO',
      background: 'Built Scalify starting as a Shopify app for Facebook Ads scaling (~2018). Background in performance marketing and SaaS.',
    },
  ],
  whyBuilding: 'Simplify paid social advertising for e-commerce brands without dedicated media buyers.',
  beliefs: [
    'Small brands deserve access to the same ad automation tools as enterprise brands',
    'AI can replace manual campaign management for SMBs',
    'Cross-platform (Meta + TikTok) campaigns should be managed in one place',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear, simple SaaS pricing accessible to SMBs',
    'Active Shopify App Store presence with reviews',
  ],
  redFlags: [
    'Very competitive market with low switching costs',
    'Small funding ($2M) limits product investment',
    'Founder-led with no visible design leadership',
    'Limited public info on traction or growth metrics',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 1–10 employees)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Campaign automation rule design (when to scale/pause)',
        'AI creative generation prompt and flow',
        'Budget allocation logic communication',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Ad performance dashboards and ROAS reporting',
        'A/B test result interpretation',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Multi-platform campaign builder UI',
        'Creative asset management and import flows',
        'Onboarding and account connection setup',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'E-commerce brands and Shopify store owners running paid social ads',
    secondary: 'Performance marketing agencies managing multiple client ad accounts',
  },
  userProblems: [
    'Manual campaign optimization is time-consuming and requires expertise',
    'Small brands cannot afford dedicated media buyers or agency retainers',
    'Managing campaigns across Meta and TikTok separately is fragmented',
    'AI creative generation barrier: not knowing what copy/visual will convert',
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
      'Early-stage with full ownership of product design',
      'Concrete, measurable impact (ROAS, campaign performance)',
    ],
    whyNot: [
      'Very small company with limited resources for design investment',
      'Crowded market with weak moat — exit risk is high',
      'Low AI-native level — design challenges are standard SaaS, not frontier AI',
      'No visible design culture or design leadership',
    ],
    nextActions: [
      'Monitor — not a target for active outreach',
    ],
  },

  // Meta
  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Scalify — AI-Powered Ad Platform for Meta & TikTok', url: 'https://scalify.com/' },
    { title: 'Scalify - Crunchbase Company Profile & Funding', url: 'https://www.crunchbase.com/organization/scalify' },
    { title: 'Scalify - 2025 Company Profile, Team, Competitors & Financials - Tracxn', url: 'https://tracxn.com/d/companies/scalify/__XxX04YsZo6KW7s9Xj4rJr0l5fy74AM7xfvNxv1UeSQY' },
    { title: 'Scalify Reviews 2026: Details, Pricing, & Features | G2', url: 'https://www.g2.com/products/scalify/reviews' },
    { title: 'Scalify: Facebook & Google Ads | Shopify App Store', url: 'https://apps.shopify.com/scalify' },
  ],
};
