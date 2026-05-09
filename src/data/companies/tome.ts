import { Company } from '../types';

export const tome: Company = {
    id: 'tome',
    name: 'Tome',
    description: 'AI-powered storytelling platform. Create presentations from prompts.',
    website: 'https://tome.app',
  screenshot: '/screenshots/tome-screenshot.png',
    headquarters: 'San Francisco, CA',
    region: 'sf-bay-area' as const,
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/tome-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['infrastructure'],

    stage: 'Series B',

    normalizedStage: 'series-b' as const,
    valuation: '$300M',
    totalFunding: '$81M',
    revenue: 'Not disclosed',
    growth: 'Fastest productivity tool to reach 1M users',
    customers: '1M+ users',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Not disclosed',
      userGrowth: 'Fastest productivity tool to 1M users',
      signals: ['$43M Series B', 'Fastest to 1M users', 'Hiring ML, engineering, design talent'],
      tam: '$10B (presentation software)',
      marketShare: 'Early challenger in AI presentation market, behind Gamma ($2.1B)',
      ceiling: 'Early innings: Competing with PowerPoint, Gamma',
      tailwinds: ['AI presentation tools becoming mainstream', 'Design automation demand', 'Creator economy'],
      headwinds: ['Gamma competition ($2.1B, $100M ARR)', 'Microsoft PowerPoint', 'Quality vs AI-generated'],
      moatType: 'brand',
      moatStrength: 'Medium: Brand recognition, but easy to switch',
    },
    competitors: [],
    marketPosition: 'AI-powered storytelling and presentation platform. Fastest productivity tool to reach 1M users. Competing with Gamma ($2.1B), Microsoft PowerPoint.',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Storytelling platform with AI features on proven presentation format. AI augments established workflow.',
    aiDesignChallenges: [],
    founders: [
      {
        name: 'Keith Peiris',
        role: 'Co-founder & CEO',
        background: 'University of Waterloo (nanotechnology engineering). Started web design business as teenager. Former product lead at Instagram and Messenger (Meta). Also worked at Oculus. Entrepreneur-in-residence at Greylock.',
      },
      {
        name: 'Henri Liriani',
        role: 'Co-founder & CPO',
        background: 'Former product lead at Instagram and Messenger (Meta). Previously Senior Visual Architect at PerfectHQ. Built consumer products for visual storytelling at scale. EIR at Greylock with Keith Peiris.',
      },
    ],
    whyBuilding: 'Keith and Henri left Meta to make storytelling at work as easy and intuitive as storytelling on social media. They saw that business presentations were stuck in the PowerPoint era and AI could transform how people communicate ideas.',
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
        primary: 'Sales teams, consultants, and business professionals creating pitch decks',
        secondary: 'Startups and founders building investor presentations and narratives',
    },
    userProblems: [
        'Creating compelling presentations requires design skills most business people lack',
        'PowerPoint and Keynote templates look generic and require extensive customization',
        'Building narrative flow and visual storytelling is difficult without practice',
        'Collaborating on presentations requires version control and merging changes',
        'Starting from a blank slide deck wastes time on structure and layout',
    ],

    designerLinks: [],
    openRoles: [],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$300M'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Tome product', 'Research founders'],
    },
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'Source', url: 'https://www.globenewswire.com/news-release/2023/02/22/2613034/0/en/Tome-Is-Fastest-Productivity-Tool-To-Reach-1M-Users-Raises-43M-Series-B-to-Empower-All-Storytellers.html' },
    { title: 'Source', url: 'https://iblnews.org/ai-startup-tome-which-uses-language-models-to-create-powerpoint-style-presentations-valued-at-300m/' },
    { title: 'Source', url: 'https://startups.gallery/companies/tome' }
  ],
};
