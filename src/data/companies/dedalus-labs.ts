import { Company } from '../types';

export const dedalusLabs: Company = {
  id: 'dedalus-labs',
  name: 'Dedalus Labs',
  description: 'Multi-modal, multi-tool agents designed to run in minutes.',
  website: 'https://dedaluslabs.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/dedalus-labs-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['creative-media'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$11M',
      date: '2025-11',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'LangGraph',
      description: 'Agent framework for building multi-step AI workflows.',
      whyTheyWin: 'Deep developer adoption and LangChain ecosystem.',
    },
    {
      name: 'CrewAI',
      description: 'Multi-agent orchestration framework.',
      whyTheyWin: 'Popular open-source developer community.',
    },
    {
      name: 'AutoGen',
      description: 'Multi-agent framework for AI task orchestration.',
      whyTheyWin: 'Strong research backing and extensibility.',
    },
  ],
  marketPosition: 'Agent platform for building multi-modal, multi-tool workflows quickly.',
  moat: [
    'Focus on fast multi-agent setup',
    'Multi-modal support across tools and data types',
    'Developer-friendly workflows for agent configuration',
  ],
  vsGiants: 'Competes on developer speed and flexibility rather than general AI platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI agents are the core product and value proposition.',
  aiDesignChallenges: [
    'Designing agent configuration and control UI',
    'Communicating tool usage and agent reasoning',
    'Managing failures and recovery across multi-step tasks',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Catherine Di',
      role: 'Co-founder',
      background: 'Co-founded Dedalus Labs.',
    },
    {
      name: 'Windsor Nguyen',
      role: 'Co-founder',
      background: 'Co-founded Dedalus Labs.',
    },
  ],
  whyBuilding: 'Make multi-agent workflows accessible and fast to deploy.',
  beliefs: [
    'Agents should be easy to configure and iterate on',
    'Multi-modal inputs unlock richer automation',
    'Developer control is essential for trust in agent systems',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear agent platform positioning',
    'Seed funding signal',
  ],
  redFlags: [
    'Crowded agent tooling ecosystem',
    'Rapidly evolving standards in AI workflows',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent logic configuration and guardrails',
        'Tool selection and orchestration flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance evaluation and debugging',
        'Feedback loops for tool success rates',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards for agent runs',
        'Workflow builder UI',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building AI agent workflows',
    secondary: 'AI product teams shipping multi-step automations',
  },
  userProblems: [
    'Multi-step AI workflows are slow to build and debug',
    'Agent reliability is hard to evaluate',
    'Tool integrations are fragmented and brittle',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Agent-first product with deep UX challenges',
      'Opportunity to shape developer tooling early',
    ],
    whyNot: [
      'Crowded agent platform market',
      'Early-stage risk and fast-moving space',
    ],
    nextActions: [
      'Track product adoption and design hiring',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Dedalus Labs', url: 'https://dedaluslabs.ai' },
    { title: 'Dedalus Labs YC profile', url: 'https://www.ycombinator.com/companies/dedalus-labs' },
    { title: 'Dedalus Labs on startups.gallery', url: 'https://startups.gallery/companies/dedalus-labs' },
  ],
};
