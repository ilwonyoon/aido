import { Company } from '../types';

export const tabnine: Company = {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code assistant. Privacy-first, enterprise-focused AI coding completion.',
    website: 'https://www.tabnine.com',
  screenshot: '/screenshots/tabnine-screenshot.png',
    headquarters: 'Tel Aviv, Israel',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/tabnine-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['enterprise'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

    stage: 'Series B',
    valuation: 'Unknown',
    totalFunding: '$67M',
    revenue: 'Unknown',
    growth: 'Millions of developers',
    customers: 'Millions of developers, 72 employees',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: 'Unknown',
      userGrowth: 'Millions of developers',
      signals: ['$25M Series B (2023)', 'Privacy-first positioning', 'Enterprise focus'],
      tam: '$50B (AI coding assistant market)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with GitHub Copilot, Cursor, Codeium',
      tailwinds: ['Enterprise security concerns favor privacy-first', 'On-prem deployment options', 'Multi-language support'],
      headwinds: ['GitHub Copilot dominance', 'Cursor UX leadership', 'Codeium free tier'],
      moatType: 'technology',
      moatStrength: 'Medium: Privacy-first and on-prem = enterprise moat',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Code completion tool with AI features. Established developer tool with AI enhancement.',
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
        primary: 'Enterprise engineering teams requiring secure self-hosted AI code completion',
        secondary: 'Individual developers using multiple programming languages',
    },
    userProblems: [
        'Cloud-based AI code assistants expose proprietary code to third-party servers',
        'Enterprise compliance requires code to stay on-premises or in private cloud',
        'Developers using less common languages lack quality AI completion options',
        'Training AI on company codebase requires self-hosted infrastructure',
        'Context-aware suggestions require deep codebase understanding across repositories',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Tel Aviv, Israel (Hybrid)', url: 'https://www.tabnine.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Tabnine product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [
      { title: 'Tabnine Series B', url: 'https://www.tabnine.com/blog/tabnine-series-b/' },
      { title: 'Tabnine Funding', url: 'https://www.cbinsights.com/company/tabnine/financials' },
      { title: 'Tabnine Careers', url: 'https://www.tabnine.com/careers' },
    ],
  };
