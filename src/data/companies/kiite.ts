import { Company } from '../types';

export const kiite: Company = {
  id: 'kiite',
  name: 'Kiite',
  description: 'AI-enabled sales enablement and knowledge management platform for revenue teams.',
  website: 'https://www.kiite.ai',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'automation'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$3.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Sales and revenue enablement teams',

  // Competition
  competitors: [
    {
      name: 'Highspot',
      description: 'Sales enablement platform with content and training workflows.',
      whyTheyWin: 'Large enterprise adoption and mature feature set.',
    },
    {
      name: 'Seismic',
      description: 'Enterprise sales enablement platform.',
      whyTheyWin: 'Incumbent distribution in large enterprises.',
    },
    {
      name: 'Guru',
      description: 'Knowledge base platform for teams.',
      whyTheyWin: 'Broad usage across internal knowledge management.',
    },
  ],
  marketPosition: 'AI-enabled sales enablement and knowledge management for revenue teams.',
  moat: ['Focused revenue enablement workflow', 'Lightweight AI knowledge surfacing'],
  vsGiants: 'Differentiates with AI-assisted enablement and SMB-friendly workflows.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI augments knowledge retrieval and sales enablement workflows.',
  aiDesignChallenges: [
    'Designing fast knowledge recall for revenue teams',
    'Balancing AI suggestions with human-approved messaging',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Derek Hall',
      role: 'Co-founder',
      background: 'Co-founded Kiite to improve sales enablement and knowledge workflows.',
    },
    {
      name: 'Joseph Fung',
      role: 'Co-founder',
      background: 'Co-founded Kiite and led product and go-to-market strategy.',
    },
    {
      name: 'Donna Litt',
      role: 'Co-founder',
      background: 'Co-founded Kiite with focus on revenue team workflows and operations.',
    },
  ],
  whyBuilding: 'Help revenue teams access the right knowledge at the right moment.',
  beliefs: ['Sales teams need instant, trusted enablement content', 'AI can reduce time-to-value for sales reps'],
  greenFlags: ['Focused revenue workflow', 'Clear sales enablement niche'],
  redFlags: ['Crowded enablement software market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Content relevance logic and scoring UX'] },
    evaluation: { level: 'medium', tasks: ['Enablement effectiveness tracking'] },
    interface: { level: 'medium', tasks: ['Knowledge base and sales workspace UI'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Revenue enablement leaders and sales teams',
    secondary: 'Customer success and marketing teams',
  },
  userProblems: [
    'Sales reps struggle to find updated enablement content quickly',
    'Content sprawl reduces consistency in customer messaging',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Sales enablement workflow design challenges'],
    whyNot: ['Competitive enablement tooling landscape'],
    nextActions: ['Track product design hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$3.5M total funding (Seedtable)'],
    tam: 'Sales enablement and revenue productivity market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to expand into full revenue knowledge OS',
    tailwinds: ['Revenue team demand for AI enablement tools'],
    headwinds: ['Incumbents bundling enablement suites'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T19:55:00',
  sources: [
    { title: 'Source', url: 'https://www.kiite.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
