import { Company } from '../types';

export const deepnote: Company = {
  id: 'deepnote',
  name: 'Deepnote',
  description: 'Collaborative, AI-powered data science notebook platform — Jupyter-compatible with real-time multiplayer, SQL integration, and agentic AI workflows.',
  website: 'https://deepnote.com',
  headquarters: 'Prague, Czech Republic',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/deepnote-og.webp',

  // Tags
  aiTypes: ['data-analysis', 'code-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$23.8M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.8M',
      date: '2020-02',
      leadInvestors: ['Accel'],
    },
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2022-01',
      leadInvestors: ['Index Ventures', 'Accel'],
    },
  ],
  revenue: '~$3.9M ARR',
  growth: '3x YoY (2024)',
  runway: 'Unknown',
  customers: 'Ramp, SoundCloud, Gusto, Webflow, Discord, ByteDance, Harvard, MIT',

  // Competition
  competitors: [
    {
      name: 'Hex',
      description: 'Collaborative notebook + SQL + data apps for analytics teams',
      whyTheyWin: 'Better-funded ($52M+), stronger analytics/BI focus',
    },
    {
      name: 'Databricks Notebooks',
      description: 'Enterprise-grade Spark-based notebooks for large-scale data engineering',
      whyTheyWin: 'Massive enterprise distribution, deep infrastructure integration',
    },
    {
      name: 'Google Colab',
      description: 'Free/low-cost Jupyter-compatible cloud notebooks',
      whyTheyWin: 'Free tier captures students and researchers, Google ecosystem',
    },
  ],
  marketPosition: 'Leading collaborative AI notebook for mid-market data teams',
  moat: [
    'Deepest real-time multiplayer notebook experience (Google Docs for data science)',
    'Jupyter-compatible — zero migration friction for existing users',
    '60+ native data source integrations',
    'Open-sourced notebook format under Apache 2.0',
  ],
  vsGiants: 'Lighter UX vs Databricks complexity; real-time collaboration vs Google Colab single-user; AI-native agent layer vs legacy incumbents.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Started as collaborative notebook, but AI has become the primary value proposition. Deepnote Agent provides agentic pair-programming across full notebook context. CEO positions notebooks as "the perfect UI for AI agents."',
  aiDesignChallenges: [
    'Agentic UX: designing autonomous AI workflows within notebook cells',
    'Trust design: showing AI confidence and data provenance in generated analyses',
    'Hybrid interaction: blending natural language, SQL, and Python in one canvas',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jakub Jurových',
      role: 'CEO & Co-founder',
      background: 'CS at Cambridge (ML/HCI focus). Former CTO at Operam (grew team 0→120). YC S19. Forbes 30 Under 30.',
    },
    {
      name: 'Jan Matas',
      role: 'CTO & Co-founder',
      background: 'Technical co-founder. Engineering lead at Deepnote.',
    },
    {
      name: 'Filip Stollár',
      role: 'Co-founder & former Head of Design (departed)',
      background: 'CS at Imperial College London. Former SWE at Improbable. Now co-founder at Kontext.',
    },
  ],
  whyBuilding: 'Data science notebooks are stuck in the solo, local-first Jupyter era. Deepnote believes collaborative, AI-native notebooks are the future interface for human + AI computation.',
  beliefs: [
    'Notebooks are the perfect UI for AI agents',
    'Data work should be collaborative by default, not solo',
    'AI should understand full project context, not just single cells',
  ],
  designPhilosophy: 'Multiplayer-first design inspired by Figma/Google Docs. Focus on reducing friction between thinking and executing in data workflows.',
  greenFlags: [
    'YC-backed with tier-1 investors (Index Ventures, Accel)',
    'Notable angel investors: Greg Brockman (OpenAI), Dylan Field (Figma)',
    'Hyperquery acquisition (2024) shows strategic M&A capability',
    'Active hiring for Senior/Staff Product Designer — design investment signal',
  ],
  redFlags: [
    'Capital-constrained ($23.8M total) vs better-funded competitors (Hex $52M+)',
    'No new funding since Jan 2022 — potential fundraising difficulty',
    'Co-founder/Head of Design departed to start new company',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Vacant (Filip Stollár departed)',
    teamSize: '~1-2 (1 Staff PD found on LinkedIn + open Senior/Staff role)',
    notableMembers: [
      { name: 'Aleš Chromec', role: 'Staff Product Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent autonomy boundaries in notebook workflows',
        'Natural language → SQL/Python translation UX',
        'Multi-step agentic task orchestration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI output quality indicators for generated code/analyses',
        'Data provenance and confidence visualization',
        'User feedback loops for AI-generated cells',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Real-time collaborative notebook canvas',
        'Hybrid SQL + Python + AI interaction patterns',
        'Dashboard and sharing experiences for non-technical stakeholders',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Data scientists and analysts at mid-market/enterprise companies',
    secondary: 'Academic researchers and ML practitioners',
  },
  userProblems: [
    'Jupyter notebooks lack real-time collaboration',
    'Switching between SQL tools and Python notebooks creates friction',
    'AI assistance in notebooks lacks full project context',
    'Sharing notebook results with non-technical stakeholders is painful',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Filip Stollár',
      role: 'Co-founder & former Head of Design',
      platform: 'blog',
      url: 'https://deepnote.com/blog/building-design-system-at-startup',
      description: 'Wrote about building a design system at a startup — design-first culture from founding team',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Smart, passionate team with high autonomy and ownership. Transparent, open culture. "Feels like second home."',
      url: 'https://www.glassdoor.com/Reviews/Deepnote-Reviews-E3178832.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'Fast-changing priorities typical of startup ambiguity. Competitive market makes differentiation challenging.',
      url: 'https://www.glassdoor.com/Reviews/Deepnote-Reviews-E3178832.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '3x YoY (2024)',
    signals: [
      'Hyperquery acquisition (July 2024) — strategic M&A',
      'Active hiring for design and engineering',
      'Open-sourced notebook format for ecosystem play',
    ],
    tam: '$15B+ (data science & analytics tools market)',
    ceiling: 'Early innings: AI-native notebooks replacing legacy Jupyter ecosystem',
    tailwinds: [
      'AI adoption accelerating in data workflows',
      'Enterprise demand for collaborative data tools',
      'Agentic AI wave favors notebook-as-interface paradigm',
    ],
    headwinds: [
      'Better-funded competitors (Hex, Databricks)',
      'Google Colab free tier commoditizes basic notebooks',
      'No new funding since 2022',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: Jupyter compatibility reduces switching costs in, but 60+ integrations and team workflows create stickiness',
  },

  // Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Level B AI-native — designing AI agent UX for data workflows',
      'Very small design team = outsized individual impact',
      'Design-founder DNA (Filip Stollár was co-founder)',
      'Prague-based but remote-friendly (EU timezone)',
    ],
    whyNot: [
      'Small company (~35 people) with limited funding runway',
      'Head of Design departed — potential design leadership vacuum',
      'EU timezone requirement may limit flexibility',
    ],
    nextActions: [
      'Monitor funding announcements — Series B would be strong signal',
      'Review portfolio of Aleš Chromec for design quality bar',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Deepnote Official Website', url: 'https://deepnote.com' },
    { title: 'Deepnote Series A Announcement — TechCrunch', url: 'https://techcrunch.com/2022/01/31/deepnote-raises-20m-for-its-collaborative-data-science-notebooks/' },
    { title: 'Deepnote Acquires Hyperquery — BusinessWire', url: 'https://www.businesswire.com/news/home/20240729061332/en/Deepnote-Acquires-Hyperquery' },
    { title: 'Deepnote CEO on Notebooks as AI Agent UI — The New Stack', url: 'https://thenewstack.io/deepnote-ceo-why-notebooks-are-the-perfect-user-interface-for-ai-agents/' },
    { title: 'Deepnote Careers — Ashby', url: 'https://jobs.ashbyhq.com/Deepnote/9e108713-10a4-4b0f-807c-49a22ad34720' },
  ],
};
