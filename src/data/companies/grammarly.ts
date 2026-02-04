import { Company } from '../types';

export const grammarly: Company = {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant. Grammar, spelling, tone, and style suggestions for professionals.',
    website: 'https://www.grammarly.com',
    screenshot: '/screenshots/grammarly-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/grammarly-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['prosumer'],
  industries: ['other'],

    stage: 'Private',
    valuation: '$13B (2021)',
    totalFunding: '$1.2B (non-dilutive)',
    revenue: '$700M+ ARR (2026)',
    growth: '40M+ users, 50K+ businesses',
    customers: '40M+ users, 50K+ businesses',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$700M+ ARR, $1B financing secured',
      userGrowth: '40M+ users, 50K+ business customers',
      signals: ['$1B financing from General Catalyst', 'Merged with Coda (Jan 2026)', 'Now part of Superhuman Suite', 'Transforming to AI productivity platform'],
      tam: '$50B (business writing + productivity)',
      marketShare: '1.4% = 70x upside potential',
      ceiling: 'Mid-stage: Expanding beyond writing to full productivity',
      tailwinds: ['AI writing becoming must-have', 'Enterprise adoption', 'Platform expansion (Superhuman Suite)'],
      headwinds: ['OpenAI ChatGPT competition', 'Microsoft Editor', 'Commoditization risk'],
      moatType: 'brand',
      moatStrength: 'Strong: Brand recognition + 40M users = network effects',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Writing assistant with long-standing AI capabilities. Established product with AI at core, but built on proven writing assistance workflow.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: ['AI-native company', 'Growth potential'],
    redFlags: ['Unknown design culture', 'Competitive market'],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Professionals and students writing emails, documents, and content daily',
        secondary: 'Teams and enterprises needing consistent writing quality and tone',
    },
    userProblems: [
        'Grammar and spelling mistakes in professional communication damage credibility',
        'Non-native English speakers struggle with grammar and natural phrasing',
        'Reviewing and editing written content is time-consuming and error-prone',
        'Teams lack consistency in writing tone and style across communications',
        'Writers miss clarity issues that confuse readers or clients',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.grammarly.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 3', '$13B (2021)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Grammarly product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Grammarly $1B Financing', 'url': 'https://www.techi.com/grammarly-1b-funding-ai-platform-expansion/'}, {'title': 'Grammarly Growth', 'url': 'https://fueler.io/blog/grammarly-usage-revenue-valuation-growth-statistics'}],
  };
