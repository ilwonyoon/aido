import { Company } from '../types';

export const rivo: Company = {
  id: 'rivo',
  name: 'Rivo',
  description: 'Retention and loyalty platform for Shopify brands focused on customer conversion and repeat purchases.',
  website: 'https://rivo.io',
    screenshot: '/screenshots/rivo-screenshot.png',
  headquarters: 'Las Vegas, NV',
  remote: 'Unknown',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/667299ba8b7eaf0ae47a30a0/66a31ee1f64b96a934d7bf6b_rivo-og2.jpeg',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['smb'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

  // Business
  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'HexClad, Ridge, Kitsch, Aloha (Rivo site examples)',

  // Competition
  competitors: [
    {
      name: 'Smile.io',
      description: 'Shopify loyalty and rewards platform.',
      whyTheyWin: 'Large Shopify merchant base and mature features.',
    },
    {
      name: 'Yotpo',
      description: 'Retention and reviews platform for ecommerce brands.',
      whyTheyWin: 'Broad product suite across retention and reviews.',
    },
    {
      name: 'LoyaltyLion',
      description: 'Loyalty and rewards solution for ecommerce brands.',
      whyTheyWin: 'Focused loyalty tooling and established market presence.',
    },
  ],
  marketPosition: 'Retention and loyalty workflows tailored to Shopify merchants.',
  moat: [
    'Tight Shopify integration for fast merchant onboarding',
    'Focus on retention workflows for consumer brands',
    'Clear merchant-facing ROI framing',
  ],
  vsGiants: 'Competes with Shopify app ecosystem incumbents on retention and loyalty depth.',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is not the primary product; automation supports retention workflows.',
  aiDesignChallenges: [
    'Balancing automation with merchant control over customer messaging',
    'Designing retention workflows that prove incremental revenue impact',
    'Reducing setup friction for SMB merchants',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Stuart (last name not listed)',
      role: 'Founder',
      background: 'Founder listed on the Shopify app listing.',
    },
  ],
  whyBuilding: 'Shopify brands need better tools to convert and retain customers without heavy manual work.',
  beliefs: [
    'Retention tooling should be simple enough for lean ecommerce teams',
    'Automation should improve repeat purchase outcomes',
    'Merchant success depends on measurable revenue lift',
  ],
  greenFlags: [
    'Clear Shopify ecosystem focus',
    'Visible brand examples on product site',
    'Strong competition awareness within Shopify apps',
  ],
  redFlags: [
    'Crowded Shopify app ecosystem',
    'Differentiation can be difficult against entrenched loyalty tools',
    'Pricing pressure for SMB merchants',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Automation rules for loyalty and retention', 'Campaign personalization logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Conversion analytics and retention metrics', 'A/B testing dashboards'],
    },
    interface: {
      level: 'high',
      tasks: ['Merchant-facing dashboards', 'Retention campaign setup flows'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Shopify merchants focused on retention and loyalty growth',
    secondary: 'Ecommerce marketing teams at SMB brands',
  },
  userProblems: [
    'Retention workflows are fragmented across multiple Shopify apps',
    'Merchants lack clear attribution for loyalty programs',
    'Setup friction slows marketing teams from launching campaigns',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Shopify ecosystem product design', 'Clear merchant problem space'],
    whyNot: ['Highly competitive loyalty market', 'Limited AI-native differentiation'],
    nextActions: ['Monitor for product design roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Shopify app listing with active merchant adoption'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Retention and loyalty spend in ecommerce continues to expand.',
    tailwinds: ['Shopify merchant growth', 'Rising retention focus'],
    headwinds: ['App marketplace saturation', 'Merchant budget sensitivity'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Shopify-native retention workflows.',
  },

  // Meta
  lastUpdated: '2026-01-28T16:20:00',
  sources: [
    { title: 'Source', url: 'https://rivo.io' },
    { title: 'Source', url: 'https://apps.shopify.com/rivo' },
    { title: 'Source', url: 'https://startups.gallery/companies/rivo' }
  ],
};
