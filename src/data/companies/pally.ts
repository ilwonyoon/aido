import { Company } from '../types';

export const pally: Company = {
  id: 'pally',
  name: 'Pally',
  description: 'AI-powered relationship management platform that unifies contacts across iMessage, WhatsApp, LinkedIn, email, and calendar with AI agents that research contacts and automate action items.',
  website: 'https://www.pally.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/pally-og.webp',

  // Category
  category: 'productivity' as const,

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'search-retrieval'],
  markets: ['prosumer', 'b2b'],
  industries: ['productivity'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '$2.1M',
  fundingHistory: [
    { stage: 'Pre-seed', amount: '$1.1M', date: '2024-10', leadInvestors: ['Y Combinator'] },
    { stage: 'Pre-seed', amount: '$0.5M', date: '2025-06', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown',
  growth: 'Private beta with 15K+ waitlist',
  runway: 'Unknown',
  customers: '15,000+ waitlist (private beta)',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Pre-revenue (private beta)',
    userGrowth: '15,000+ waitlist',
    signals: [
      'YC S25 batch — strong accelerator signal',
      'a16z Scout Fund + Craft Ventures Scout Fund backing',
      'Co-founders from Hugging Face and Slack as angel investors',
    ],
    tam: '$10B+ personal CRM and relationship intelligence market',
    marketShare: '<0.1% — very early stage',
    ceiling: 'Early innings: personal CRM is underserved, AI-native approach is novel',
    tailwinds: [
      'Growing need for relationship management across fragmented platforms',
      'AI-native approach to contact enrichment and action automation',
      'Remote/hybrid work increasing reliance on digital relationship tracking',
    ],
    headwinds: [
      'Clay and Dex have established user bases in personal CRM',
      'Platform integration dependencies (iMessage, WhatsApp API access)',
      'Privacy concerns with aggregating cross-platform contact data',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Weak: early-stage, moat depends on cross-platform data aggregation depth',
  },

  // Competition
  competitors: [
    {
      name: 'Clay',
      description: 'Relationship management with automatic data enrichment from 50+ sources.',
      whyTheyWin: 'Strong data enrichment engine and established user base among sales professionals.',
    },
    {
      name: 'Dex',
      description: 'Personal CRM built on top of LinkedIn with automated relationship tracking.',
      whyTheyWin: 'Deep LinkedIn integration and simple UX for professionals.',
    },
    {
      name: 'Superhuman',
      description: 'AI-powered email client with speed-focused UX and contact insights.',
      whyTheyWin: 'Best-in-class email experience and strong brand among power users.',
    },
  ],
  marketPosition: 'AI-native personal relationship OS unifying all social platforms',
  moat: [
    'Cross-platform unification (iMessage, WhatsApp, LinkedIn, X, email, calendar)',
    'On-device AI processing for privacy-first contact research',
    'AI agent automation of relationship maintenance tasks',
  ],
  vsGiants: 'LinkedIn and Google have contact data but lack AI-native relationship intelligence. Salesforce CRM is enterprise-focused, not personal.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Native: AI is the core product — researches contacts, automates action items, and provides relationship intelligence. Product cannot exist without AI.',
  aiDesignChallenges: [
    'Designing trust for AI that accesses all personal communications',
    'Unified inbox UX across 7+ messaging platforms with different interaction models',
    'AI agent autonomy boundaries — what actions to automate vs surface for approval',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Haz Hubble',
      role: 'Co-founder & CEO',
      background: 'High-school dropout turned serial entrepreneur. Founded London Founder House. Youngest Chartered Management Accountant in the world at 20, CFO of a 200-person company at 22.',
    },
    {
      name: 'Wyatt Lansford',
      role: 'Co-founder & CTO',
      background: 'ML engineer in robotics and autonomy. Won DARPA AlphaDogfight Trials building autonomous F-16 fighter jets. Previously acquired by Shield AI.',
    },
  ],
  whyBuilding: 'Founders saw relationship management scattered across dozens of platforms with no intelligent layer to maintain connections. Built an AI-native OS for professional relationships.',
  beliefs: [
    'Relationships are the most important professional asset but worst managed',
    'AI should handle relationship maintenance so humans focus on deepening connections',
    'Privacy-first approach to personal data aggregation is non-negotiable',
  ],
  greenFlags: [
    'YC S25 with angel backing from Hugging Face and Slack co-founders',
    'CTO has deep ML/autonomy background (DARPA, Shield AI acquisition)',
    '15K+ waitlist indicates strong demand signal pre-launch',
  ],
  redFlags: [
    'Team of 3 — execution risk on cross-platform integration complexity',
    'Pre-revenue with no disclosed monetization strategy',
    'Platform dependency risk (Apple iMessage, Meta WhatsApp API restrictions)',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0-1 (team of 3, no dedicated designer — CEO has design background)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent action automation rules — what to auto-complete vs surface',
        'Cross-platform message routing and priority logic',
        'Contact relationship scoring and staleness detection',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI contact research quality and relevance scoring',
        'Relationship health metrics and engagement tracking',
        'Action item completion success measurement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Unified inbox across 7+ messaging platforms',
        'Contact profile with AI-enriched relationship timeline',
        'iOS companion app for on-the-go relationship management',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Founders, investors, and sales professionals who manage relationships across many platforms',
    secondary: 'Recruiters, agency owners, and creators with large professional networks',
  },
  userProblems: [
    'Contacts scattered across 7+ platforms with no unified view',
    'Important relationships go stale because follow-ups are forgotten',
    'Meeting prep requires manual research across multiple social profiles',
    'No way to search entire network by context (e.g., "who do I know at Sequoia?")',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'YC S25 batch with strong angel investor network. Founding team of 3 with complementary skills (business, ML, engineering).',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level A AI-native product — greenfield design challenges',
      '0→1 product stage with unified inbox + AI agents = novel UX territory',
      'Strong founding team with YC backing',
    ],
    whyNot: [
      'Team of 3 with no design roles open — too early for dedicated designer',
      'Pre-revenue with unclear monetization path',
      'High platform dependency risk',
    ],
    nextActions: [
      'Monitor for Product Designer hiring when team scales',
      'Track product launch from private beta to public',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Pally — Y Combinator Profile', url: 'https://www.ycombinator.com/companies/pally' },
    { title: 'Pally $1.1M Pre-Seed', url: 'https://traded.co/vc/deal/pally-secures-1-1-million-pre-seed-round-led-by-y-combinator-and-other-investors/' },
    { title: 'Founders Inc — Pally Portfolio', url: 'https://f.inc/portfolio/pally/' },
    { title: 'Pally — Product Hunt', url: 'https://www.producthunt.com/products/pally' },
    { title: 'YC Jobs — Pally (no Product Design roles)', url: 'https://www.ycombinator.com/companies/pally/jobs' },
  ],
};
