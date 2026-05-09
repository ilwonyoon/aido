import { Company } from '../types';

export const onyx: Company = {
  id: 'onyx',
  name: 'Onyx',
  description: 'Open-source enterprise AI search and knowledge platform that connects to company tools and gives teams a private AI assistant for work.',
  website: 'https://www.onyx.app',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.onyx.app/onyx-thumbnail.png',
  screenshot: '/screenshots/onyx-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,

  industries: ['productivity', 'infrastructure'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$10M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Open-source enterprise AI knowledge and search platform',
  moat: [
    'Open-source deployment model for enterprise knowledge search',
    'Connector ecosystem across workplace tools',
    'Security and self-hosting appeal for AI search use cases',
  ],
  vsGiants: 'Competes with Glean and Microsoft by offering open-source, customizable enterprise AI search.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI search and assistants are the core product experience, built on workplace data connectors and retrieval workflows.',
  aiDesignChallenges: [
    'Designing trustworthy enterprise search and answer surfaces',
    'Making permissions, citations, and data provenance clear',
    'Balancing admin configuration with end-user productivity UX',
  ],

  // Founders & Vision
  founders: [
    { name: 'Yuhong Sun', role: 'Co-Founder & Co-CEO', background: 'Co-founded Onyx (formerly Danswer) in 2023 for open-source enterprise AI search.' },
    { name: 'Chris Weaver', role: 'Co-Founder & Co-CEO', background: 'Co-founded Onyx in 2023. YC alum.' },
  ],
  whyBuilding: 'Onyx is building an open-source alternative for companies that want AI connected to internal knowledge while maintaining control over data and deployment.',
  beliefs: [
    'Companies need private AI connected to their work tools',
    'Open-source enterprise AI can build trust and flexibility',
    'Search, chat, and knowledge workflows should be deeply integrated',
  ],
  greenFlags: [
    'Open-source enterprise AI search product with clear market demand',
    'Founding Designer role in San Francisco',
    'Strong design surface around knowledge retrieval, permissions, and admin workflows',
  ],
  redFlags: [
    'Crowded enterprise AI search category',
    'Open-source monetization and enterprise sales can be challenging',
    'Founding Designer role description appears compliance-like and may include brand/web work',
  ],

  // Design Opportunity
  designTeam: { teamSize: '11-50 employees; hiring Founding Designer' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Enterprise search and answer workflows', 'Permissions-aware retrieval UX', 'Admin setup and connector configuration'] },
    evaluation: { level: 'high', tasks: ['Answer quality and citation review', 'Search result relevance', 'Knowledge coverage and connector health'] },
    interface: { level: 'high', tasks: ['AI search and chat surfaces', 'Admin dashboards', 'Design system for web applications'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Knowledge workers and enterprise teams searching internal company information',
    secondary: 'IT, security, and platform teams deploying private AI search',
  },
  userProblems: [
    'Company knowledge is scattered across SaaS tools',
    'AI answers need citations and permission-aware retrieval',
    'Enterprises want control over AI deployments and internal data',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
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
      url: 'https://jobs.ashbyhq.com/onyx/35d0ed7f-2c6a-46d6-9e6e-b4ce4a1b2650',
      compensation: '$186,763-$196,101 + equity',
      aboutRole: 'Design websites and digital user interfaces, establish design vision, and build scalable design systems across customer-facing platforms.',
      whyInteresting: 'Founding design role on an open-source enterprise AI search platform with hard trust, retrieval, and admin UX problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Founding Designer role is based in San Francisco and covers UI/UX, design systems, brand identity, and cross-functional product work.',
      url: 'https://jobs.ashbyhq.com/onyx/35d0ed7f-2c6a-46d6-9e6e-b4ce4a1b2650',
    },
  ],

  // My Tracking
  tracking: {
    status: 'applied',
    fitScore: 7,
    whyJoin: [
      'Founding design role at an open-source enterprise AI company',
      'Rich AI search, retrieval, and permissions UX',
      'Strong category demand for workplace AI assistants',
    ],
    whyNot: [
      'Crowded market against Glean, Microsoft, and many startups',
      'Role may include broad brand/web ownership in addition to product',
      'Enterprise search UX can be admin-heavy',
    ],
    nextActions: [
      'Track application response and recruiter follow-up',
      'Review Onyx open-source product and docs',
      'Compare against Glean and Danswer-era positioning',
    ],
    notes: 'Applied to Founding Designer role on 2026-05-09.',
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Open-source enterprise AI search product', 'Hiring Founding Designer in San Francisco'],
    tam: 'Enterprise search, knowledge management, and workplace AI assistant market',
    marketShare: 'Early',
    ceiling: 'High if open-source deployment becomes a meaningful wedge in enterprise AI search.',
    tailwinds: ['Enterprise demand for AI assistants', 'Security concerns favor private/open-source deployments', 'Workplace knowledge is increasingly fragmented'],
    headwinds: ['Glean and Microsoft have major distribution advantages', 'Connector maintenance is operationally heavy', 'Enterprise sales cycles can be long'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Medium if open-source adoption and connector ecosystem compound.',
  },

  // Meta
  lastUpdated: '2026-05-09',
  sources: [
    { title: 'Onyx Website', url: 'https://www.onyx.app' },
    { title: 'Founding Designer at Onyx', url: 'https://jobs.ashbyhq.com/onyx/35d0ed7f-2c6a-46d6-9e6e-b4ce4a1b2650' },
    { title: 'startups.gallery Onyx profile', url: 'https://startups.gallery/companies/onyx' }
  ],
};
