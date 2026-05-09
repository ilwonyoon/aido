import { Company } from '../types';

export const partnerstack: Company = {
  id: 'partnerstack',
  name: 'PartnerStack',
  description: 'Partner and affiliate management platform helping B2B companies scale partnerships.',
  website: 'https://partnerstack.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$36.4M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'B2B SaaS companies running partner and affiliate programs',

  // Competition
  competitors: [
    {
      name: 'Impact',
      description: 'Partnership management platform for affiliate and influencer programs.',
      whyTheyWin: 'Large enterprise footprint and marketplace depth.',
    },
    {
      name: 'Everflow',
      description: 'Performance marketing and partner tracking platform.',
      whyTheyWin: 'Strong tracking and analytics stack.',
    },
    {
      name: 'FirstPromoter',
      description: 'Referral and affiliate tracking platform for SaaS.',
      whyTheyWin: 'Self-serve adoption and simple integration.',
    },
  ],
  marketPosition: 'B2B partner and affiliate program operating system for SaaS growth.',
  moat: ['Partner program management workflows', 'Partner ecosystem integrations'],
  vsGiants: 'Differentiates with B2B SaaS partnership focus rather than general affiliate platforms.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports program insights and optimization workflows.',
  aiDesignChallenges: [
    'Designing partner lifecycle management UX',
    'Surfacing program ROI and attribution clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Bryn Jones',
      role: 'Co-founder',
      background: 'Co-founded PartnerStack to help SaaS companies scale partnerships.',
    },
    {
      name: 'Luke Swanek',
      role: 'Co-founder',
      background: 'Co-founded PartnerStack and helped build the partnership platform.',
    },
    {
      name: 'Neil Chudleigh',
      role: 'Co-founder',
      background: 'Co-founded PartnerStack and led product direction.',
    },
  ],
  whyBuilding: 'Make partnerships a scalable, measurable growth channel for B2B software companies.',
  beliefs: ['Partnerships are underutilized growth channels', 'Operations need structured partner workflows'],
  greenFlags: ['Strong B2B growth focus', 'Clear partnership niche'],
  redFlags: ['Partner programs can be slow to ramp'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Attribution and payout logic UX'] },
    evaluation: { level: 'medium', tasks: ['Partner performance analytics'] },
    interface: { level: 'medium', tasks: ['Partner dashboards and onboarding UI'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Partner and channel managers',
    secondary: 'Marketing ops and revenue leaders',
  },
  userProblems: [
    'Partner programs are manual and difficult to scale',
    'Attribution across partners is complex',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['B2B growth ops UX and attribution problems'],
    whyNot: ['Channel programs can be slow to scale'],
    nextActions: ['Track product design roles and partner ecosystem growth'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$36.4M total funding (Seedtable)'],
    tam: 'B2B partner and affiliate management market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can become core partner ops layer for SaaS companies',
    tailwinds: ['SaaS partner program growth'],
    headwinds: ['Competition from broader marketing platforms'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T21:00:00',
  sources: [
    { title: 'Source', url: 'https://partnerstack.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
