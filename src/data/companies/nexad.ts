import { Company } from '../types';

export const nexad: Company = {
  id: 'nexad',
  name: 'Nexad',
  description: 'AI-native advertising platform that generates context-aware, real-time native ads within AI chatbots, search engines, and other AI applications.',
  website: 'https://nex.ad',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',
  ogImage: '/og-images/nexad-og.webp',

  // Category
  category: 'sales-marketing' as const,

  // Multi-dimensional Tags
  aiTypes: ['automation', 'text-assistant'],
  markets: ['b2b', 'smb'],
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$6M',
      date: '2025-04',
      leadInvestors: ['Andreessen Horowitz (a16z)', 'Prosus Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Early — 7 AI app partners, ~30M consumer reach',
  runway: 'Strong (fresh Seed, Apr 2025)',
  customers: '7 AI app partners (iAsk, Dippy AI, Monica.im, Moescape.ai)',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '~30M consumers reached through AI app partners',
    signals: [
      '$6M Seed co-led by a16z and Prosus (Apr 2025)',
      '7 AI app integrations live',
      'Part of a16z Speedrun 004 cohort',
    ],
    tam: '$725B+ global digital advertising market',
    marketShare: '<0.01% of TAM = massive upside',
    ceiling: 'Very early innings: AI-native ad category barely exists',
    tailwinds: [
      'AI chatbot and search usage growing rapidly',
      'Advertisers need new channels as traditional search declines',
      'LLM-powered apps seeking monetization paths',
    ],
    headwinds: [
      'Unproven ad format — unclear user acceptance',
      'Platform risk if AI apps build in-house ad systems',
      'Regulatory scrutiny on AI-embedded advertising',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Emerging: first-mover in AI-native ads, building publisher network',
  },

  // Competition
  competitors: [
    {
      name: 'Taboola',
      description: 'Global leader in native content discovery on the open web.',
      whyTheyWin: 'Massive publisher network and established advertiser relationships.',
    },
    {
      name: 'Perplexity Ads',
      description: 'AI search engine experimenting with sponsored answers.',
      whyTheyWin: 'Owns the user surface directly — no middleware dependency.',
    },
    {
      name: 'Google Ads',
      description: 'Dominant digital ad platform expanding into AI Overviews ads.',
      whyTheyWin: 'Unmatched scale, advertiser demand, and AI search integration.',
    },
  ],
  marketPosition: 'First independent AI-native ad network for third-party AI apps',
  moat: [
    'First-mover in AI-native advertising infrastructure',
    'Growing publisher network of AI app partners',
    'Context-aware ad generation using multi-LLM stack',
  ],
  vsGiants: 'Nexad targets the long tail of AI apps that lack in-house ad tech, unlike Google/Perplexity which serve ads on their own surfaces.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Nexad uses LLMs to understand query context, generate ads in real-time, and dynamically adapt creatives within AI conversations — a fundamentally new ad paradigm.',
  aiDesignChallenges: [
    'Designing ads that feel native to AI conversation flows without disrupting UX',
    'Balancing advertiser needs with user trust in AI-generated recommendations',
    'Creating transparent disclosure patterns for AI-embedded advertising',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jason Hu',
      role: 'Founder & CEO',
      background: 'Builder and researcher focused on software paradigm shifts. University of Chicago alumnus. Part of a16z Speedrun 004.',
    },
  ],
  whyBuilding: 'AI is creating a new computing paradigm where traditional display ads do not work. Nexad builds the ad infrastructure for AI-first applications.',
  beliefs: [
    'AI apps need monetization that respects conversation context',
    'Ads should enhance, not interrupt, AI experiences',
    'The shift from search to AI chat is the biggest advertising paradigm change since mobile',
  ],
  greenFlags: [
    'Backed by a16z and Prosus — strong VC signal for early stage',
    'First-mover in an emerging category with massive TAM',
    'Already live with 7 partners reaching 30M consumers',
  ],
  redFlags: [
    'Very early stage — 6-person team, unproven revenue model',
    'User backlash risk against ads in AI conversations',
    'Platform dependency on third-party AI apps for distribution',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (~6 total employees, likely 0-1 designers)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Ad placement logic — when and where ads appear in AI conversations',
        'Context-matching rules between user intent and ad content',
        'Flywheel feedback loop from engagement to ad refinement',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Ad relevance and quality scoring metrics',
        'User engagement measurement in conversational contexts',
        'Brand safety evaluation for AI-generated ad placements',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Advertiser dashboard for campaign management across AI apps',
        'Ad creative preview and testing tools',
        'Publisher SDK integration and monetization analytics',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Advertisers seeking to reach users inside AI chatbots and search apps',
    secondary: 'AI app developers needing monetization infrastructure',
  },
  userProblems: [
    'Advertisers have no way to place ads inside AI conversations at scale',
    'AI app developers lack monetization tools beyond subscriptions',
    'Traditional display ads feel disruptive in conversational AI interfaces',
    'Contextual targeting in AI requires understanding query intent, not just keywords',
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
    fitScore: 5,
    whyJoin: [
      'Level A AI-native — defining a new ad paradigm from scratch',
      'First designer hire opportunity = shape the entire product',
      '0→1 stage with strong VC backing (a16z, Prosus)',
    ],
    whyNot: [
      'Only 6 people — design may not be a priority yet',
      'Ad-tech domain may limit design impact scope',
      'Unproven business model and user acceptance',
    ],
    nextActions: [
      'Monitor for design hiring signals',
      'Track product expansion beyond chatbot ads',
    ],
  },

  // Meta
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Nexad official website', url: 'https://nex.ad' },
    { title: 'Prosus — a16z and Prosus co-lead $6M Seed', url: 'https://www.prosus.com/news-insights/group-updates/2025/prosus-ventures-and-a16z-co-lead-dollar-6m-seed-round-in-nexad' },
    { title: 'Nexad — a16z Speedrun profile', url: 'https://speedrun.a16z.com/companies/nexad' },
    { title: 'Nexad — The Homebase AI', url: 'https://www.thehomebase.ai/companies/nexad' },
    { title: 'Nexad careers — no Product Design roles found', url: 'https://nex.ad' },
  ],
};
