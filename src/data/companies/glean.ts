import { Company } from '../types';

export const glean: Company = {
    id: 'glean',
    name: 'Glean',
    description: 'AI-powered enterprise search and work assistant. Search, Assistant, and Agents.',
    website: 'https://www.glean.com',
    screenshot: '/screenshots/glean-screenshot.png',
    headquarters: 'Palo Alto, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/glean-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['enterprise'],
  category: 'productivity' as const,

  industries: ['other'],

    stage: 'Series F',
    valuation: '$7.2B (2025)',
    totalFunding: '$410M',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: 'Unknown',
      userGrowth: '850+ employees (nearly doubled in 6 months)',
      signals: ['$2.6B valuation jump in 9 months', '$150M Series F', 'Fast Company Top 10 Most Innovative', 'Hiring aggressively'],
      tam: '$50B (enterprise search + AI assistants)',
      marketShare: 'Unknown',
      ceiling: 'Early innings: Enterprise AI search is nascent',
      tailwinds: ['Enterprise AI adoption accelerating', 'Work AI becoming must-have', 'Fast Company recognition'],
      headwinds: ['Competition from Microsoft Copilot', 'Google Workspace AI', 'Enterprise sales cycles'],
      moatType: 'switching-costs',
      moatStrength: 'Strong: Deep enterprise integration creates lock-in',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for enterprise search. Building on proven workplace search needs with AI.',
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
        primary: 'Enterprise knowledge workers searching for information across company tools',
        secondary: 'IT and ops teams managing knowledge access and onboarding at scale',
    },
    userProblems: [
        'Finding information across Slack, Drive, Confluence, and 20+ tools wastes hours daily',
        'Onboarding new employees requires asking colleagues where information lives',
        'Tribal knowledge in Slack threads and emails becomes impossible to find',
        'Search within individual tools returns too many irrelevant results requiring manual filtering',
        'Teams duplicate work because they cannot find existing docs, code, or past decisions',
    ],

    designerLinks: [],
    openRoles: [],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 3', '$7.2B (2025)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Glean product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Glean Series F', 'url': 'https://www.glean.com/blog/glean-series-f-announcement'}, {'title': 'Glean Funding', 'url': 'https://www.cnbc.com/2025/06/10/glean-gen-ai-search-startup-raises-150-million-at-7-billion-value.html'}],
  };
