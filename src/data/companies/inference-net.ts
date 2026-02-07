import { Company } from '../types';

export const inferenceNet: Company = {
  id: 'inference-net',
  name: 'Inference',
  description: 'Affordable, scalable LLM inference API.',
  website: 'https://www.inference.net',
    screenshot: '/screenshots/inference-net-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://inference.net/inference-opengraph.png',

  // Multi-dimensional Tags
  aiTypes: ['model-platform', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11.8M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and teams deploying LLMs at scale.',

  // Competition
  competitors: [
    {
      name: 'Together AI',
      description: 'Model hosting and inference APIs.',
      whyTheyWin: 'Broad model catalog and funding scale.',
    },
    {
      name: 'Replicate',
      description: 'API platform for running ML models.',
      whyTheyWin: 'Developer-friendly UX and catalog.',
    },
    {
      name: 'Fireworks AI',
      description: 'Inference platform for LLMs.',
      whyTheyWin: 'Performance and enterprise focus.',
    },
  ],
  marketPosition: 'Cost-efficient LLM inference API for developers.',
  moat: [
    'Cost and performance optimization',
    'API-first developer workflows',
    'Focus on scalable inference reliability',
  ],
  vsGiants: 'Competes by optimizing price/performance vs large cloud platforms.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure product centered on inference APIs.',
  aiDesignChallenges: [
    'Communicating latency and cost tradeoffs',
    'Developer-first API onboarding',
    'Reliability and scale transparency',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'John Yue',
      role: 'Co-founder & CEO',
      background: 'Co-founded Inference.ai in 2024 to build affordable, scalable LLM inference infrastructure.',
    },
    {
      name: 'Michael Yu',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder focused on GPU compute optimization for AI inference workloads.',
    },
  ],
  whyBuilding: 'LLM inference is expensive; developers need affordable, scalable options.',
  beliefs: [
    'Inference cost is a bottleneck for adoption',
    'APIs should be simple and transparent',
    'Reliability matters for production AI',
  ],
  greenFlags: [
    'Clear value proposition around cost',
  ],
  redFlags: [
    'Competitive inference platform market',
    'Commoditization risk',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['API setup workflows', 'Usage limit and billing logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Latency and cost dashboards', 'Model performance analytics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Developer console', 'Usage monitoring UI'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Developers building LLM products',
    secondary: 'Enterprise teams deploying AI APIs',
  },
  userProblems: [
    'Inference costs are high',
    'Scaling LLM APIs is complex',
    'Performance and reliability are hard to monitor',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['AI infrastructure with clear cost UX', 'Developer platform design'],
    whyNot: ['Crowded inference platform market'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Seed-stage inference platform'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'LLM inference market is rapidly expanding.',
    tailwinds: ['LLM adoption', 'Need for cost-efficient inference'],
    headwinds: ['Big cloud pricing pressure', 'Open-source inference stacks'],
    moatType: 'technology',
    moatStrength: 'Inference performance and cost optimization.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:55:00',
  sources: [
    { title: 'Inference', url: 'https://www.inference.net' },
    { title: 'Inference Net on startups.gallery', url: 'https://startups.gallery/companies/inference-net' },
  ],
};
