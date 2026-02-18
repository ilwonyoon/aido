import { Company } from '../types';

export const palmstreet: Company = {
  id: 'palmstreet',
  name: 'Palmstreet',
  description: 'Live shopping platform for rare plants, handmade crafts, and unique goods. Originally a plant identification app, now a community-driven live commerce marketplace.',
  website: 'https://palmstreet.app',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/palmstreet-og.webp',
  aiTypes: ['image-generation', 'automation'],
  markets: ['b2c', 'prosumer'],
  category: 'enterprise-ops' as const,
  industries: ['other'],
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Unknown',
      date: '2021',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2024-10',
      leadInvestors: ['a16z', 'Craft Ventures', 'Headline'],
    },
  ],
  revenue: 'Unknown',
  growth: '500x GMV in 18 months',
  customers: '1M+ members, 20+ sellers with $1M+ revenue',
  competitors: [
    {
      name: 'Whatnot',
      description: 'Live shopping platform for collectibles, trading cards, and sneakers',
      whyTheyWin: 'Larger scale, broader collectible categories, $4.7B valuation',
    },
    {
      name: 'TikTok Shop',
      description: 'Social commerce integrated into the largest short-form video platform',
      whyTheyWin: 'Massive user base and algorithm-driven discovery',
    },
    {
      name: 'Poshmark',
      description: 'Social marketplace for secondhand fashion and home goods',
      whyTheyWin: 'Established brand in social commerce with large seller network',
    },
  ],
  marketPosition: 'Dominant in live plant commerce, expanding to fashion and lifestyle',
  moat: [
    'First-mover in live plant commerce niche',
    'Strong community of passionate niche collectors',
    'Seller success: 20+ millionaire sellers create powerful retention',
  ],
  vsGiants: 'Wins on authenticity and community — Amazon/eBay lack live, personal seller relationships',
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI powers plant identification feature but core product is live commerce marketplace. AI is a supporting feature, not the primary value proposition.',
  aiDesignChallenges: [
    'Designing trust signals for live commerce transactions',
    'Balancing AI-assisted discovery with community-driven browsing',
    'Real-time auction/bidding UX during livestreams',
  ],
  founders: [
    {
      name: 'Chen Li',
      role: 'Co-Founder & CEO',
      background: 'Former Apple (Apple Store app) and Instagram (scaled Direct from 50M to 400M MAU). PhD dropout in signal processing.',
    },
  ],
  whyBuilding: 'Believes e-commerce should be about connection and community, not just price. Wants to create the "world\'s online main street" through live engagement.',
  beliefs: [
    'Commerce should feel personal and community-driven',
    'Creators and small sellers deserve better platforms',
    'Live shopping creates authentic buyer-seller relationships',
  ],
  greenFlags: [
    'a16z backed at seed and Series A — strong investor conviction',
    'Proven product-market fit: 500x GMV growth in 18 months',
    'Founder has deep product experience at Apple and Instagram',
    'Expanding into new verticals (fashion, beauty, lifestyle)',
  ],
  redFlags: [
    'Niche market — rare plants may have limited TAM',
    'Competition from Whatnot and TikTok Shop with larger budgets',
    'AI is not core to the product — limited AI design work',
  ],
  designTeam: {
    teamSize: '~2-3 (1 PD role recently open, small startup team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Live auction/bidding flow logic',
        'Seller onboarding and listing workflows',
        'Community trust and safety systems',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Seller quality metrics and ratings',
        'Buyer satisfaction tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Live streaming shopping UI (mobile + web)',
        'Marketplace browse and discovery experience',
        'Seller dashboard and analytics',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Plant collectors and hobbyists who want rare, unique specimens',
    secondary: 'Crafts, fashion, and lifestyle enthusiasts who value authenticity',
  },
  userProblems: [
    'Hard to find rare plants and unique handmade goods online',
    'Traditional e-commerce lacks personal connection with sellers',
    'No trust in authenticity/quality when buying speciality items remotely',
    'Small creators struggle to reach the right niche audience',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'inc.com',
      sentiment: 'positive',
      content: 'Inc. featured Palmstreet as growing millionaire sellers — 20+ sellers have earned $1M+ on the platform, signaling strong seller economics.',
      url: 'https://www.inc.com/jennifer-conrad/how-palmstreet-is-growing-millionaires-livestreaming-ecommerce/91229413',
    },
  ],
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '500x GMV in 18 months',
    userGrowth: '1M+ members',
    signals: [
      '$25M Series A led by a16z, Craft Ventures, Headline',
      '500x GMV growth in 18 months',
      'Expanding from plants to fashion, beauty, and lifestyle',
    ],
    tam: '$500B+ (global live commerce market)',
    ceiling: 'Early innings in US live commerce — China live commerce is $500B+, US barely started',
    tailwinds: [
      'Live commerce boom in Asia validating the model',
      'Creator economy growth driving seller supply',
      'Gen Z preference for authentic, community-driven shopping',
    ],
    headwinds: [
      'Whatnot and TikTok Shop have larger budgets',
      'Scaling beyond niche categories is unproven',
      'Live shopping adoption in the US remains nascent',
    ],
    moatType: 'network-effects',
    moatStrength: 'Moderate: niche communities create strong retention but defensibility against larger players unclear',
  },
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Strong founder with Apple + Instagram background',
      'a16z conviction — backed at both seed and Series A',
      'Live commerce is a growing design space with novel UX challenges',
    ],
    whyNot: [
      'Level C AI — limited AI design opportunities',
      'Small team, early stage — may lack design maturity',
      'No open Product Design roles currently',
    ],
    nextActions: [
      'Monitor for Product Designer openings',
      'Watch category expansion success',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Palmstreet - $25M Funding Announcement', url: 'https://palmstreet.app/blog/palmstreet-raises-25m-to-bring-live-shopping-to-more-creators-and-collectors' },
    { title: 'Palmstreet Expands to Fashion & Lifestyle (PR Newswire)', url: 'https://www.prnewswire.com/news-releases/palmstreet-accelerates-growth-into-fashion-beauty-and-lifestyle-following-breakout-success-in-live-plant-commerce-302683564.html' },
    { title: 'Inc. - How Palmstreet Is Growing Millionaires', url: 'https://www.inc.com/jennifer-conrad/how-palmstreet-is-growing-millionaires-livestreaming-ecommerce/91229413' },
    { title: 'Palmstreet Careers - Ashby', url: 'https://jobs.ashbyhq.com/palmstreet' },
    { title: 'Palmstreet Crunchbase Profile', url: 'https://www.crunchbase.com/organization/palmstreet' },
  ],
};
