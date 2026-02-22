import { Company } from '../types';

export const beacons: Company = {
  id: 'beacons',
  name: 'Beacons',
  description: 'AI-powered all-in-one creator platform combining link-in-bio, online store, email marketing, media kit, and brand deal tools.',
  website: 'https://beacons.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/beacons-og.webp',

  // Tags
  aiTypes: ['text-assistant', 'automation'],
  markets: ['prosumer', 'b2c'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$29.8M',
  fundingHistory: [
    { stage: 'Seed', amount: '$6M', date: '2021-05', leadInvestors: ['Andreessen Horowitz'] },
    { stage: 'Series A', amount: '$23M', date: '2022-04', leadInvestors: ['Spark Capital'] },
  ],
  revenue: '$10.8M ARR (Dec 2024)',
  growth: '~80% YoY ($6M → $10.8M ARR in 2024)',
  customers: '2M+ registered creators',

  // Competition
  competitors: [
    {
      name: 'Linktree',
      description: 'Market-leading link-in-bio platform with 31M+ users',
      whyTheyWin: 'First mover advantage, massive brand recognition, $33M ARR',
    },
    {
      name: 'Stan Store',
      description: 'Conversion-focused creator storefront for digital products',
      whyTheyWin: 'Stronger monetization tools for selling digital products and coaching',
    },
    {
      name: 'Koji',
      description: 'Interactive app-based monetization for creators',
      whyTheyWin: '$36M raised, strong with gaming creators and interactive link apps',
    },
  ],
  marketPosition: 'Most customizable + AI-powered free creator platform',
  moat: [
    'Free tier counter-positioning: gives away what Linktree charges for',
    'First-party creator data across all monetization channels',
    'Integrated suite lock-in: store + email + media kit + analytics',
  ],
  vsGiants: 'Mobile-first approach vs legacy website builders (Wix, Squarespace). Counter-positions Linktree by offering free customization that Linktree structurally cannot match without destroying its business model.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a major feature layer (brand outreach, media kit, email writer, pricing calculator) but the core product is a creator business platform that functions without AI.',
  aiDesignChallenges: [
    'AI brand outreach: generating personalized pitch emails that feel authentic',
    'AI media kit: auto-pulling cross-platform stats into coherent narratives',
    'AI pricing: suggesting brand deal rates from sparse creator metrics',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Neal Jean',
      role: 'CEO & Co-founder',
      background: 'Stanford AI Lab PhD (computer vision + satellite imagery for poverty mapping). Duke + Georgia Tech undergrad.',
    },
    {
      name: 'Jesse Zhang',
      role: 'CPO & Co-founder',
      background: 'Stanford PhD in machine learning and genomics. Tufts BS in electrical engineering.',
    },
    {
      name: 'David Zeng',
      role: 'CTO & Co-founder',
      background: 'Stanford PhD in signal processing and machine learning for medical imaging.',
    },
    {
      name: 'Greg Luppescu',
      role: 'Chief Engineering Officer & Co-founder',
      background: 'Georgia Tech engineering. Friends with Neal Jean for 10+ years.',
    },
  ],
  whyBuilding: 'Four Stanford AI/ML PhDs saw creators struggling with fragmented tools and believed AI could unify the creator business stack into one intelligent platform.',
  beliefs: [
    'Creators deserve free, powerful tools — not paywalled basics',
    'AI should handle business busywork so creators can focus on creating',
    'Mobile-first: 80% of creators build on their phones',
  ],
  greenFlags: [
    'All-PhD founding team with deep AI/ML expertise from Stanford',
    'YC S19 + a16z + Spark Capital backing',
    '$10.8M ARR with strong growth trajectory',
    '2M+ creators on platform with expanding feature set',
  ],
  redFlags: [
    'Crowded link-in-bio market with well-funded incumbents',
    '~16-18% monthly churn indicates retention challenges',
    'No funding since April 2022 — possible M&A interest (Latka report)',
  ],

  // Design
  designTeam: {
    cpo: 'Jesse Zhang (Co-founder)',
    teamSize: '~2-3 (2 confirmed PDs on LinkedIn, no dedicated design lead)',
    notableMembers: [
      { name: 'Mandi Fu', role: 'Senior Product Designer' },
      { name: 'Maxine Romualdez', role: 'Product Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI brand outreach personalization logic',
        'Cross-platform data aggregation for media kits',
        'Creator pricing algorithm tuning',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI-generated email quality and authenticity metrics',
        'Brand deal match scoring accuracy',
        'Creator engagement analytics design',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Mobile-first creator dashboard and store builder',
        'Link-in-bio customization and theming system',
        'Email marketing campaign builder',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Individual creators monetizing their audience (influencers, artists, educators)',
    secondary: 'Small creator businesses and agencies managing multiple brands',
  },
  userProblems: [
    'Fragmented tools: creators juggle 5-10 separate platforms for links, store, email, analytics',
    'Brand deal pricing: creators undercharge because they lack market rate data',
    'Media kit creation: manually updating stats across platforms is time-consuming',
    'Mobile workflow: most creator tools are desktop-first but creators work from phones',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 5.0,
      content: '5.0/5.0 rating with 100% recommend to a friend. Employees highlight strong async culture and creative problem-solving.',
      url: 'https://www.glassdoor.com/Reviews/Beacons-AI-Reviews-E5606528.htm',
    },
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'Strong async/written culture via Notion. Half team in SF, half remote. Two full-company offsites per year.',
    },
  ],

  // Growth
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '~80% YoY ($6M → $10.8M ARR)',
    userGrowth: '2M+ creators, 35M monthly page visits',
    signals: [
      '$29.8M total funding from a16z + Spark Capital',
      'Revenue nearly doubled in 2024',
      'Expanding from link-in-bio to full creator OS',
    ],
    tam: '$100B+ creator economy (Goldman Sachs estimate)',
    ceiling: 'Early innings: can become mobile-first Shopify for creators',
    tailwinds: [
      'Creator economy growing rapidly — 50M+ creators globally',
      'AI tools enabling solo creators to run full businesses',
      'Shift from ad revenue to direct monetization',
    ],
    headwinds: [
      'Linktree dominance and brand recognition',
      'Low switching costs between link-in-bio tools',
      'Platform dependency on social media algorithm changes',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: integrated suite creates lock-in but individual tools are substitutable',
  },

  // Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Mobile-first creator platform with real AI integration',
      'Small design team = high impact per designer',
      'Stanford AI/ML founding team understands AI deeply',
    ],
    whyNot: [
      'Level C AI-native — AI is feature layer, not core product',
      'No open Product Designer roles currently',
      'High churn and no recent funding signal uncertainty',
    ],
    nextActions: [
      'Monitor for Product Designer openings',
      'Watch funding activity — M&A or new round signals',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Beacons Official Website', url: 'https://beacons.ai' },
    { title: 'Latka — Beacons Revenue $10.8M ARR', url: 'https://getlatka.com/companies/beacons.ai' },
    { title: 'TechCrunch — Beacons $6M Seed Round', url: 'https://techcrunch.com/2021/05/24/beacons-seed-round-creator-profiles/' },
    { title: 'Y Combinator — Beacons Company Page', url: 'https://www.ycombinator.com/companies/beacons' },
    { title: 'Beacons Careers — no Product Design roles found', url: 'https://beacons.ai/i/careers' },
  ],
};
