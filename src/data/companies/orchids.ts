import { Company } from '../types';

export const orchids: Company = {
  id: 'orchids',
  name: 'Orchids',
  description: 'AI-powered full-stack app builder that generates complete applications from natural language prompts, ranking #1 on UI-Bench and DesignArena.',
  website: 'https://orchids.app',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  ogImage: '/og-images/orchids-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['prosumer', 'b2b'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  totalFunding: '$2M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2M',
      date: '2025-01',
      leadInvestors: [],
    },
  ],
  growth: '1M+ users',
  customers: '1M+ users, Fortune 500 teams',

  // Competition
  competitors: [
    {
      name: 'Lovable',
      description: 'AI-powered app builder focused on visual design quality and full-stack prototyping',
      whyTheyWin: 'Integrated Supabase backend, strong design-first reputation',
    },
    {
      name: 'Bolt',
      description: 'AI-native IDE replacing traditional dev environments with LLM-powered coding',
      whyTheyWin: 'Browser-based zero-setup experience, strong brand in AI coding space',
    },
    {
      name: 'v0',
      description: 'Vercel React component generator with Tailwind CSS output',
      whyTheyWin: 'Vercel ecosystem integration, production-ready React components',
    },
  ],
  marketPosition: '#1 on UI-Bench (30.08) and DesignArena benchmarks',
  moat: [
    'Benchmark leadership: #1 on UI-Bench and DesignArena beating Devin, Lovable, Cursor',
    'Multi-framework support: React, Next.js, Python, Swift, Flutter',
    'Full-stack autonomy: frontend, backend, database, auth, payments with no third-party integrations',
  ],
  vsGiants: 'Differentiates from Cursor/Replit by being a full-stack AI engineer rather than a code assistant — handles planning, debugging, deployment end-to-end',

  // AI-native analysis
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. The entire app-building experience is driven by AI generating complete full-stack applications from prompts.',
  aiDesignChallenges: [
    'Prompt-to-UI fidelity: translating vague user intent into pixel-perfect designs',
    'Multi-framework output consistency: maintaining design quality across React, Swift, Flutter',
    'AI agent transparency: showing planning, debugging, and deployment steps in real-time',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Kevin Lu',
      role: 'Co-Founder',
      background: 'CS/Math at Penn, Gen AI at AWS, Research at Stanford HAI.',
    },
    {
      name: 'Bach Tran',
      role: 'Co-Founder',
      background: 'CS at Penn, former engineer at Addepar (wealth management tech).',
    },
  ],
  whyBuilding: 'Believes AI can replace the traditional full-stack engineer workflow, enabling anyone to build production-quality apps from natural language.',
  beliefs: [
    'AI should handle the entire stack, not just code completion',
    'Design quality is a key differentiator in AI-generated apps',
    'Benchmarks matter — measurable superiority drives adoption',
  ],
  greenFlags: [
    'YC W25 batch with strong benchmark performance (#1 UI-Bench)',
    '1M+ users and Fortune 500 adoption in early stage',
    'Penn CS founders with AWS and Stanford AI research backgrounds',
  ],
  redFlags: [
    'Extremely competitive space (Lovable, Bolt, v0, Replit, Cursor)',
    'Only $2M seed — limited runway vs well-funded competitors',
    '6-person team facing scaling challenges',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0 (6 total employees, all engineering — no dedicated designer found)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent planning and task decomposition UX',
        'Multi-step build workflow orchestration',
        'Error recovery and debugging flow design',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'UI-Bench and DesignArena benchmark quality evaluation',
        'Generated code quality assessment interfaces',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI IDE with real-time visual preview',
        'Prompt input and refinement experience',
        'Multi-framework output preview and editing',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Non-technical founders and entrepreneurs building MVPs',
    secondary: 'Developers seeking rapid prototyping and full-stack automation',
  },
  userProblems: [
    'Building full-stack apps requires juggling multiple tools and frameworks',
    'Traditional no-code tools produce low-quality, inflexible output',
    'AI code assistants still require significant developer expertise',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [
    {
      source: 'company',
      sentiment: 'positive',
      content: 'Founding narrative emphasizes rapid shipping and benchmark-driven iteration as core product culture.',
      url: 'https://www.ycombinator.com/companies/orchids',
    },
    {
      source: 'social',
      sentiment: 'neutral',
      content: 'Public launch communication focuses on measurable UI benchmark outcomes and fast community feedback loops.',
      url: 'https://x.com/kevinlu625/status/1967983134311600440',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    userGrowth: '1M+ users (rapid adoption post-launch)',
    signals: [
      'YC W25 batch — strong signal of quality',
      '#1 on UI-Bench and DesignArena benchmarks',
      'Fortune 500 teams using the platform',
    ],
    tam: '$31.5B (AI-powered website/app builder market)',
    ceiling: 'Early innings: AI replacing traditional full-stack development',
    tailwinds: [
      'AI coding adoption accelerating across all developer segments',
      'Non-technical founders increasingly building their own MVPs',
      'Multi-framework demand growing (web + mobile + extensions)',
    ],
    headwinds: [
      'Lovable, Bolt, Replit all well-funded and scaling fast',
      'Big tech (Vercel v0, GitHub Copilot) entering same space',
      'Commoditization risk as LLMs improve broadly',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: benchmark leadership but technology moats erode quickly in AI',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level A AI-native product with design-critical challenges',
      '#1 benchmark performance shows strong technical foundation',
    ],
    whyNot: [
      'Only 6 employees with no design roles — no design team to learn from',
      '$2M seed — high risk, limited resources',
      'Extremely crowded market with well-funded competitors',
    ],
    nextActions: [
      'Monitor for Product Designer hiring',
      'Track if they raise Series A',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Orchids - YC Company Profile', url: 'https://www.ycombinator.com/companies/orchids' },
    { title: 'Orchids Official Website', url: 'https://orchids.app' },
    { title: 'Kevin Lu launch announcement (X)', url: 'https://x.com/kevinlu625/status/1967983134311600440' },
    { title: 'Orchids Jobs - YC (no Product Design roles)', url: 'https://www.ycombinator.com/companies/orchids/jobs' },
    { title: 'Orchids Product Hunt Profile', url: 'https://www.producthunt.com/products/orchids' },
  ],
};
