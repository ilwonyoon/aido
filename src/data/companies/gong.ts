import { Company } from '../types';

export const gong: Company = {
    id: 'gong',
    name: 'Gong',
    description: 'Revenue AI platform analyzing customer interactions to help sales teams win more deals.',
    website: 'https://gong.io',
    screenshot: '/screenshots/gong-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/gong-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['infrastructure', 'sales-marketing'],

    stage: 'Series E',
    valuation: '$7.25B (2021)',
    totalFunding: '$583M',
    revenue: '$332M ARR (2024)',
    growth: '$300M+ ARR run rate',
    customers: '4,000+ companies',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$300M+ ARR, top-quartile SaaS growth',
      userGrowth: '4,000+ customers, 2,248 employees',
      signals: ['Surpassed $300M ARR milestone', 'AI agents processing $10B+ spend monthly', 'Strong demand for AI-powered revenue solutions', 'Hiring across functions'],
      tam: '$20B (sales enablement + conversation intelligence)',
      marketShare: '1.5% = 65x upside potential',
      ceiling: 'Mid-stage: Expanding from sales to all revenue teams',
      tailwinds: ['AI adoption in sales', 'Revenue intelligence becoming must-have', 'Enterprise budgets for sales tools'],
      headwinds: ['Competition from Chorus.ai (ZoomInfo)', 'Economic downturn = sales cuts', 'Valuation pressure (secondary at $4.5B)'],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: 26M+ AI decisions monthly = training data',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for sales intelligence. Proven sales workflow enhanced by AI conversation analysis.',
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
        primary: 'Sales managers and revenue leaders managing distributed sales teams',
        secondary: 'Individual sales representatives wanting to improve close rates',
    },
    userProblems: [
        'Sales managers cannot listen to every call limiting coaching to anecdotal feedback',
        'Best sales techniques stay siloed with top performers instead of shared across team',
        'Deal risk and pipeline accuracy rely on reps self-reporting which is unreliable',
        'Onboarding new sales reps requires months of shadowing and mentorship',
        'Revenue leaders lack visibility into what actually happens in customer conversations',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://gong.io/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 3', '$7.25B (2021)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Gong product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Gong $300M ARR', 'url': 'https://www.gong.io/press/gong-surpasses-300m-arr-amid-increased-demand-for-ai-powered-revenue-solutions'}, {'title': 'Gong Funding History', 'url': 'https://www.gong.io/press/gong-raises-250-million-in-series-e-funding-at-7-25-billion-valuation'}],
  };
