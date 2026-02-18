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
    valuation: 'Not disclosed ($67M total funding)',
    totalFunding: '$67M',
    revenue: '~$27M ARR (2024 est)',
    growth: 'Millions of developers',
    customers: 'Millions of developers, 72 employees',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: '$5.8M (2022) → ~$27M (2024 est)',
      userGrowth: 'Millions of developers',
      signals: ['$25M Series B (2023)', 'Privacy-first positioning', 'Enterprise focus'],
      tam: '$50B (AI coding assistant market)',
      marketShare: '<1% in AI coding assistant market dominated by GitHub Copilot',
      ceiling: 'Mid-stage: Competing with GitHub Copilot, Cursor, Codeium',
      tailwinds: ['Enterprise security concerns favor privacy-first', 'On-prem deployment options', 'Multi-language support'],
      headwinds: ['GitHub Copilot dominance', 'Cursor UX leadership', 'Codeium free tier'],
      moatType: 'technology',
      moatStrength: 'Medium: Privacy-first and on-prem = enterprise moat',
    },
    competitors: [],
    marketPosition: 'Privacy-first AI code assistant for enterprises. Differentiated by on-premise deployment and enterprise security. Competing against GitHub Copilot, Cursor, and Codeium.',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Code completion tool with AI features. Established developer tool with AI enhancement.',
    aiDesignChallenges: [],
    founders: [
      {
        name: 'Dror Weiss',
        role: 'Co-founder & CEO',
        background: 'Bar-Ilan University (BSc Computer Science). 18+ years in software. Former engineering and product management at Panaya (SaaS for enterprise system upgrades). Previously at Symantec, EDS, and IDF.',
      },
      {
        name: 'Eran Yahav',
        role: 'Co-founder & CTO',
        background: 'Technion (BSc 1996), Tel Aviv University (PhD 2005). Associate Professor at Technion CS Department. Former IBM T.J. Watson Research Center (2004-2010). Robin Milner Young Researcher Award, ERC Consolidator Grant recipient. Expert in program synthesis and ML for code.',
      },
    ],
    whyBuilding: 'Dror Weiss and Eran Yahav saw the potential of AI to transform software development while recognizing that enterprises need code privacy and security guarantees that cloud-based solutions cannot provide.',
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
    openRoles: [],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Tabnine product', 'Research founders'],
    },
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'Source', url: 'https://www.tabnine.com/blog/tabnine-series-b/' },
    { title: 'Source', url: 'https://www.cbinsights.com/company/tabnine/financials' },
    { title: 'Source', url: 'https://www.tabnine.com/careers' }
  ],
  };
