import { Company } from '../types';

export const sightlineInnovation: Company = {
  id: 'sightline-innovation',
  name: 'Sightline Innovation',
  description: 'Canadian ML/AI cloud services company specializing in data trust technology and enterprise MLaaS, positioning as an AI-operated corporation.',
  website: 'https://www.sightlineinnovation.com',
  headquarters: 'Winnipeg, MB, Canada',
  region: 'other-intl' as const,
  remote: 'Unknown',
  ogImage: '/og-images/sightline-innovation-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'ai-infrastructure'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['security'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  totalFunding: 'CAD $4.5M (~$3.3M)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'CAD $4.5M',
      date: '2016',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Enterprise clients in regulated industries (defense, healthcare, finance)',

  // Competition
  competitors: [
    {
      name: 'Immuta',
      description: 'Data security and governance platform for analytics.',
      whyTheyWin: 'Mature platform with deep enterprise integrations and policy automation.',
    },
    {
      name: 'Privitar',
      description: 'Data privacy platform for safe data usage.',
      whyTheyWin: 'Strong privacy-engineering focus and EU regulatory expertise.',
    },
    {
      name: 'Harbr (LiveRamp)',
      description: 'Data collaboration and clean room technology.',
      whyTheyWin: 'Acquired by LiveRamp; strong data marketplace network effects.',
    },
  ],
  marketPosition: 'Niche Canadian data trust + MLaaS provider for regulated enterprises.',
  moat: [
    'Proprietary DIFANO standard for data trust automation',
    'Blockchain-based data governance platform (SID)',
    'Self-demonstrating AI-operated company model',
  ],
  vsGiants: 'Focuses on data sovereignty and trust frameworks rather than competing on raw ML compute with AWS/Google/Azure.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core product offering (MLaaS) and the company uses its own AI to manage corporate operations, but it builds on existing ML techniques rather than developing foundation models.',
  aiDesignChallenges: [
    'Designing transparent data trust workflows for non-technical enterprise stakeholders',
    'Communicating AI decision-making in regulated environments (defense, healthcare)',
    'Building UX for blockchain-based data governance that feels accessible',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Wallace (Wally) Trenholm',
      role: 'CEO & Co-Founder',
      background: 'Serial entrepreneur with 25+ years in software architecture. Sold Epoch Integration to BlackBerry. Senior Fellow at CIGI (AI/data governance).',
    },
    {
      name: 'Maithili Mavinkurve',
      role: 'COO & Co-Founder',
      background: 'Former Software Dev Team Lead at BlackBerry. Named one of 30 Influential Women Advancing AI in Canada.',
    },
  ],
  whyBuilding: 'Believes enterprises need secure, governed AI and data collaboration without sacrificing sovereignty — demonstrated by running their own company on AI.',
  beliefs: [
    'AI should operate transparently within governance frameworks',
    'Data sovereignty is a prerequisite for trustworthy AI adoption',
    'Enterprise AI must be accessible without deep ML expertise',
  ],
  greenFlags: [
    'Founders with proven exits (BlackBerry acquisition)',
    'Named top 20 most innovative company in Canada (CIX)',
    'Unique self-demonstrating AI-operated model builds credibility',
  ],
  redFlags: [
    'Only ~$4.5M raised since 2011 — slow growth trajectory',
    'Competing against well-funded MLaaS giants (AWS, Google, Azure)',
    'Small team (11-50) limits product development velocity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (no design roles found; likely no dedicated design team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Data trust agreement workflow logic',
        'ML model configuration and deployment flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Data governance compliance dashboards',
        'ML model performance monitoring UX',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Enterprise data trust management console',
        'MLaaS platform dashboard and analytics',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Enterprise data teams in regulated industries needing secure data collaboration',
    secondary: 'Government and defense organizations requiring data sovereignty',
  },
  userProblems: [
    'Organizations cannot share sensitive data across boundaries without compliance risk',
    'Deploying ML in regulated industries requires transparent governance',
    'Enterprise teams lack ML expertise to operationalize AI in workflows',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    signals: [
      'CAD $4.5M total funding over 13+ years',
      'Named top 20 innovative companies in Canada (CIX)',
      'Offices in Winnipeg, Toronto, UK, and US',
    ],
    tam: 'Data trust and MLaaS market (~$45B in 2025, growing 34% CAGR)',
    ceiling: 'Niche player; growth depends on enterprise data trust adoption',
    tailwinds: [
      'Increasing data privacy regulations globally',
      'Enterprise demand for governed AI/ML solutions',
      'Data sovereignty becoming critical for governments',
    ],
    headwinds: [
      'Hyperscalers (AWS, Google, Azure) dominate MLaaS market',
      'Limited funding constrains go-to-market and product velocity',
      'Data trust category still nascent with low market awareness',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: DIFANO standard and data trust niche, but limited scale',
  },

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 3,
    whyJoin: [
      'Unique data trust + AI governance domain',
      'Founders with BlackBerry exit and strong technical credentials',
    ],
    whyNot: [
      'No design team or design roles — limited design career opportunity',
      'Slow funding trajectory suggests limited growth ambitions',
      'Small team in niche market with uncertain traction',
    ],
    nextActions: [
      'Monitor for design role openings',
      'Check if data trust market gains enterprise momentum',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Sightline Innovation — Official Website', url: 'https://www.sightlineinnovation.com/' },
    { title: 'Sightline Innovation — Crunchbase', url: 'https://www.crunchbase.com/organization/sightline-innovation-inc' },
    { title: 'Sightline Innovation — LinkedIn', url: 'https://ca.linkedin.com/company/sightline-innovation-inc' },
    { title: 'Sightline Innovation Careers — No Product Design roles found (Glassdoor)', url: 'https://www.glassdoor.com/Jobs/Sightline-Innovation-Jobs-E1254817.htm' },
    { title: 'MLaaS Launch Announcement (2017)', url: 'https://www.globenewswire.com/news-release/2017/01/11/1079489/0/en/Sightline-Innovation-s-Machine-Learning-as-a-Service-makes-AI-Available-for-any-Enterprise.html' },
  ],
};
