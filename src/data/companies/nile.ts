import { Company } from '../types';

export const nile: Company = {
  id: 'nile',
  name: 'Nile',
  description: 'Serverless Postgres re-engineered for multi-tenant B2B SaaS applications with built-in tenant virtualization, vector embeddings, and per-tenant isolation.',
  website: 'https://www.thenile.dev',
  headquarters: 'Seattle, WA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/nile-og.webp',

  // Category
  category: 'developer-tools' as const,

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b', 'smb'],
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11.6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$11.6M',
      date: '2024-01',
      leadInvestors: ['Benchmark'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Early — 300+ databases, 3K+ waitlist at launch',
  runway: 'Strong (fresh Seed, Jan 2024)',
  customers: '300+ registered databases, 3K+ waitlist (as of Jan 2024)',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '300+ databases, 3K+ waitlist at public launch',
    signals: [
      '$11.6M Seed led by Benchmark (Jan 2024)',
      'Vercel Marketplace integration live',
      'Notable angel investors: Dylan Field (Figma), Elad Gil, Confluent founders',
    ],
    tam: '$100B+ cloud database market',
    marketShare: '<0.01% of TAM = massive upside if multi-tenant Postgres gains traction',
    ceiling: 'Early innings: multi-tenant database is an underserved niche in cloud Postgres',
    tailwinds: [
      'B2B SaaS proliferation driving multi-tenancy demand',
      'AI/RAG applications need vector-native databases',
      'Postgres ecosystem dominance over NoSQL',
    ],
    headwinds: [
      'Competing with Supabase, Neon, PlanetScale on developer mindshare',
      'Multi-tenancy may be solved at app layer by most teams',
      'Early revenue with limited public traction data',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: native tenant virtualization is unique but replicable',
  },

  // Competition
  competitors: [
    {
      name: 'Supabase',
      description: 'Open-source Firebase alternative built on Postgres',
      whyTheyWin: 'Massive developer community and broader feature set (auth, storage, edge functions)',
    },
    {
      name: 'Neon',
      description: 'Serverless Postgres with branching and autoscaling',
      whyTheyWin: 'Ahead on serverless Postgres adoption with stronger funding ($104M+)',
    },
    {
      name: 'PlanetScale',
      description: 'Serverless MySQL platform with branching workflows',
      whyTheyWin: 'Established developer brand and Vitess-based horizontal scaling',
    },
  ],
  marketPosition: 'Only serverless Postgres with native multi-tenant virtualization',
  moat: [
    'First-mover in tenant-virtualized Postgres',
    'Deep Confluent DNA: founders built cloud-native Kafka at scale',
    'Benchmark backing with Eric Vishria (original Confluent lead investor)',
  ],
  vsGiants: 'AWS Aurora and Google Cloud SQL lack native multi-tenancy; Nile offers purpose-built tenant isolation without app-level workarounds',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a major feature (pgvector embeddings, RAG support) but the core product is a multi-tenant database platform. AI enhances the offering but is not the primary value proposition.',
  aiDesignChallenges: [
    'Designing tenant-aware dashboards that surface per-customer analytics',
    'Vector embedding configuration UX for non-ML developers',
    'Multi-tenant isolation visualization and permission management',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sriram Subramanian',
      role: 'Co-founder & CEO',
      background: 'Former VP of Engineering at Confluent; 6 years leading cloud engineering, helped transform Confluent from on-prem to global SaaS.',
    },
    {
      name: 'Gwen Shapira',
      role: 'Co-founder & CTO',
      background: 'Former engineering lead and architect at Confluent heading cloud-native Kafka team. Career-long database specialist (Oracle, MySQL, Hadoop, Kafka).',
    },
  ],
  whyBuilding: 'Saw at Confluent that every B2B SaaS company reinvents multi-tenancy at the app layer. Believed databases should natively understand tenants.',
  beliefs: [
    'Multi-tenancy belongs in the database, not the application',
    'Postgres is the right foundation for modern SaaS',
    'SaaS companies should not have to choose between isolation and efficiency',
  ],
  greenFlags: [
    'Benchmark-led Seed with world-class angels (Dylan Field, Elad Gil)',
    'Deep domain expertise: both founders built Confluent Cloud',
    'Vercel Marketplace integration signals developer ecosystem traction',
  ],
  redFlags: [
    'Seed-stage with limited public revenue data',
    'Competing for developer attention against well-funded Supabase/Neon',
    'Multi-tenancy niche may be too narrow for massive scale',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (seed-stage, likely no dedicated designer yet)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Tenant creation and management workflow logic',
        'Per-tenant isolation and resource allocation rules',
        'Database branching and migration flows',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Database performance monitoring dashboards',
        'Tenant health and usage analytics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer console and database management UI',
        'Tenant dashboard with per-customer analytics',
        'Onboarding flow for multi-tenant Postgres setup',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'B2B SaaS developers building multi-tenant applications on Postgres',
    secondary: 'Startups and scaleups needing tenant isolation without infrastructure complexity',
  },
  userProblems: [
    'Building multi-tenant data isolation from scratch is error-prone and time-consuming',
    'Noisy neighbor problems when sharing one database across all tenants',
    'Per-tenant operations (backup, restore, scaling) require custom infrastructure',
    'Adding AI/vector search to multi-tenant apps requires complex pgvector setup',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Benchmark-led Seed with high-profile angels (Dylan Field, Elad Gil, Confluent founders) signals strong founder credibility in the data infra space.',
      url: 'https://techcrunch.com/2024/01/30/nile-raises-11-6m-in-seed-funding-to-build-a-postgres-powered-data-layer-for-saas-applications/',
    },
  ],

  // Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Ground-floor opportunity at seed-stage developer tools company',
      'First designer hire potential — shape product design from scratch',
      'Postgres ecosystem is massive with strong tailwinds',
    ],
    whyNot: [
      'No design roles open currently',
      'Seed-stage with engineering-heavy team — design may not be prioritized yet',
      'Level C AI — not deeply AI-native work',
    ],
    nextActions: [
      'Monitor for design hiring signals',
      'Watch for Series A announcement',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Nile Official Website', url: 'https://www.thenile.dev' },
    { title: 'TechCrunch — Nile raises $11.6M Seed', url: 'https://techcrunch.com/2024/01/30/nile-raises-11-6m-in-seed-funding-to-build-a-postgres-powered-data-layer-for-saas-applications/' },
    { title: 'Nile Blog — Funding Announcement', url: 'https://www.thenile.dev/blog/funding-seed' },
    { title: 'Orb — Interview with Gwen Shapira', url: 'https://www.withorb.com/blog/in-conversation-with-gwen-shapira-co-founder-of-nile' },
    { title: 'Nile Careers — no Product Design roles found', url: 'https://www.thenile.dev/careers/founding-engineer-database-internals' },
  ],
};
