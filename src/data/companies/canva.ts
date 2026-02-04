import { Company } from '../types';

export const canva: Company = {
    id: 'canva',
    name: 'Canva',
    description: 'AI-powered design platform. Create designs, presentations, videos with AI assistance.',
    website: 'https://www.canva.com',
    headquarters: 'Sydney, Australia',
    remote: 'Hybrid',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/vIG8c2DJzrnN1Leqr3Rb4U5vgMR0-xR-_yMRt72m0f8kajL3EBSmMXMpl4zC-42W4-EH3N6houE1qJCk4CYhAQ.png',

    // OG Image
    ogImage: '/og-images/canva-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

    stage: 'Private',
    valuation: '$42B (2024)',
    totalFunding: '$572M',
    revenue: '$3.5B ARR (2025)',
    growth: '260M+ MAU, 95% of Fortune 500',
    customers: '260M+ MAU, 95% of Fortune 500',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$3.5B ARR, preparing for IPO',
      userGrowth: '260M+ MAU, 95% of Fortune 500',
      signals: ['$42B valuation (IPO prep)', '$3.5B ARR', 'Launched Canva Design Model (first AI model for design)', '5,000+ employees, 8 countries'],
      tam: '$100B (design software)',
      marketShare: '3.5% = 28x upside potential',
      ceiling: 'Late stage: Mature product, expanding AI capabilities',
      tailwinds: ['Design democratization', 'AI design tools mainstream', 'Enterprise adoption'],
      headwinds: ['Adobe Creative Cloud competition', 'Figma (Adobe)', 'Profitability pressure for IPO'],
      moatType: 'network-effects',
      moatStrength: 'Strong: 260M users + templates = powerful network effects',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Established design platform with AI generation features. Proven business model with AI augmentation.',
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
        primary: 'Non-designers creating social media graphics, presentations, and marketing materials',
        secondary: 'Small businesses, educators, and teams needing design at scale',
    },
    userProblems: [
        'Creating professional visual content requires Adobe Creative Suite skills and expensive software',
        'Hiring designers for social media graphics and basic marketing costs $50-$150+ per hour',
        'Template-based tools lack flexibility while professional tools have steep learning curves',
        'Brand consistency across team members creating content is difficult without design systems',
        'Stock photo and template costs add up for teams creating frequent content',
    ],

    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Sydney, Australia (Hybrid)', url: 'https://www.canva.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 2', '$42B (2024)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Canva product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Canva AI Features', 'url': 'https://techcrunch.com/2025/10/30/canva-launches-its-own-design-model-adds-new-ai-features-to-the-platform/'}, {'title': 'Canva $42B Valuation', 'url': 'https://www.inc.com/jennifer-conrad/how-ai-is-powering-canva-to-a-42-billion-valuation-and-a-future-ipo/91267864'}],
  };
