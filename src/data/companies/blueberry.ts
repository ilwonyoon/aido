import { Company } from '../types';

export const blueberry: Company = {
  id: 'blueberry',
  name: 'Blueberry',
  description:
    'AI marketing platform for consumer brands that turns social comments, DMs, and engagement into personalized conversations and attributable revenue.',
  website: 'https://blueberrysocial.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation', 'conversation-ai', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  subcategories: ['sales-marketing'],
  industries: ['sales-marketing'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Role listing says Blueberry reached 10+ brands in under three months and the website cites $2M+ attributed revenue in under two months.',
  runway: 'Unknown',
  customers: 'Consumer and DTC brands using social engagement as a revenue channel.',

  competitors: [
    {
      name: 'Attentive',
      description: 'SMS and email marketing automation platform for commerce brands.',
      whyTheyWin: 'Large customer base and mature commerce marketing suite.',
    },
    {
      name: 'Klaviyo',
      description: 'Marketing automation and customer data platform for ecommerce.',
      whyTheyWin: 'Deep Shopify ecosystem and strong lifecycle marketing adoption.',
    },
    {
      name: 'Manychat',
      description: 'Chat automation for Instagram, Messenger, WhatsApp, and SMS.',
      whyTheyWin: 'Broad social messaging automation footprint.',
    },
  ],
  marketPosition: 'AI-native social commerce and one-to-one marketing platform for B2C brands',
  moat: [
    'Real-time understanding of social interactions and customer intent',
    'Personalized DM workflows tied to attributed revenue',
    'Early focus on high-growth DTC and consumer brands',
  ],
  vsGiants:
    'Competes by focusing on AI-personalized social engagement and revenue attribution rather than generic lifecycle marketing automation.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is core to Blueberry: the product researches followers, personalizes DMs, recommends offers, and attributes purchases back to social engagement.',
  aiDesignChallenges: [
    'Designing trust and control for AI-generated brand conversations',
    'Balancing automation, personalization, and brand voice',
    'Attribution and campaign workflow UX for social commerce teams',
  ],

  founders: [
    {
      name: 'Nima Mozhgani',
      role: 'Co-founder & CEO',
      background: 'Co-founder of Blueberry; LinkedIn profile notes prior experience at Snapchat.',
    },
    {
      name: 'Sean Rich',
      role: 'Co-founder',
      background: 'Co-founder of Blueberry; role listing references founders Nima and Sean.',
    },
  ],
  whyBuilding:
    'Blueberry believes brands can rebuild one-to-one customer intimacy at scale by using AI to understand every social interaction and respond with the right conversation or offer.',
  beliefs: [
    'Social engagement should become measurable revenue',
    'Taste and product craft matter more in AI-native companies',
    'Consumer brands need personalized conversations, not one-to-many blasts',
  ],
  greenFlags: [
    'Confirmed Ashby role for Founding Designer under Pear VC portfolio board',
    'Role explicitly says the designer is one of the first hires in Blueberry history',
    'AI-native product with strong design surfaces across product, brand, and growth',
  ],
  redFlags: [
    'Very early public company data',
    'Role is hosted on Pear VC Ashby rather than a Blueberry-owned board',
    'Marketing automation and social commerce are competitive categories',
  ],

  designTeam: {
    teamSize: 'First design hire / one of the first hires',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Personalized DM campaign flows',
        'AI offer and recommendation control states',
        'Customer segmentation and social engagement workflow design',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Revenue attribution from social interactions',
        'Conversation quality and brand voice review',
        'Activation, retention, and conversion experiment design',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Core product design language and design system',
        'B2C brand marketing workspace',
        'Growth, landing, and product marketing surfaces',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Consumer brand marketers and social commerce teams',
    secondary: 'DTC founders, growth teams, and community managers',
  },
  userProblems: [
    'Brands cannot personally respond to every follower as their audience grows',
    'Social engagement is hard to connect to attributed revenue',
    'Generic email and SMS blasts lose the personal context of each customer',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/pear-vc/be379450-38d0-44c1-928e-d8603c6923f7/',
      compensation: '$150K-$200K + equity',
      aboutRole:
        'Work directly with the founders to define Blueberry product, design system, brand DNA, and end-to-end customer experience.',
      whyInteresting:
        'True first-design-hire style role across AI product UX, brand, growth, and social commerce workflows.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing says the designer will define the product, design system, and brand DNA from the ground up.',
      url: 'https://jobs.ashbyhq.com/pear-vc/be379450-38d0-44c1-928e-d8603c6923f7/',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Clear founding designer / first-hire signal',
      'AI-native social commerce product with strong craft and brand requirements',
      'Broad ownership across product, design system, and brand',
    ],
    whyNot: [
      'Very early company with limited public metrics',
      'In-person SF role',
      'Role may include substantial brand and marketing work alongside product UX',
    ],
    nextActions: [
      'Try the demo flow and audit current social commerce UX',
      'Prepare product plus brand portfolio examples',
      'Verify current office expectations and team size',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Live Ashby Founding Designer role through Pear VC',
      'Website cites $2M+ attributed revenue in under two months',
      'Role listing cites backing from Pear VC, Founders Inc., and SignalFire',
    ],
    tam: 'Social commerce, marketing automation, and DTC customer engagement market',
    marketShare: 'Early',
    ceiling: 'High if AI-personalized social engagement becomes a standard commerce channel.',
    tailwinds: [
      'Brands are shifting budget toward measurable social commerce',
      'AI can personalize engagement at a scale human social teams cannot',
      'Consumer brands need better attribution from organic and paid social interactions',
    ],
    headwinds: [
      'Platform dependency on social networks',
      'Competition from mature marketing automation tools',
      'Brand safety risk in automated messaging',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Medium if conversation data and attribution loops improve personalization over time.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Blueberry Website', url: 'https://blueberrysocial.com/' },
    { title: 'Founding Designer at Blueberry / Pear VC', url: 'https://jobs.ashbyhq.com/pear-vc/be379450-38d0-44c1-928e-d8603c6923f7/' },
    { title: 'Blueberry LinkedIn', url: 'https://www.linkedin.com/company/blue-berry-social' },
  ],
};
