import { Company } from '../types';

export const worldLabs: Company = {
  id: 'world-labs',
  name: 'World Labs',
  description: 'Building large world models to generate 3D worlds without limits.',
  website: 'https://worldlabs.ai',
  screenshot: '/screenshots/world-labs-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/world-labs-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$230M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$230M',
      date: '2024-09',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Roblox',
      description: 'Platform for user-generated 3D worlds and experiences.',
      whyTheyWin: 'Massive creator ecosystem and distribution.',
    },
    {
      name: 'Epic Games (Unreal)',
      description: '3D creation and real-time engine ecosystem.',
      whyTheyWin: 'Industry standard tools and developer community.',
    },
    {
      name: 'Unity',
      description: 'Game engine and 3D content platform.',
      whyTheyWin: 'Large developer base and tooling breadth.',
    },
  ],
  marketPosition: 'AI-driven 3D world generation and simulation platform.',
  moat: [
    'Large-scale world models for 3D generation',
    'Research-driven team and model development',
    'Potential data flywheel from 3D content generation',
  ],
  vsGiants: 'Competes on AI-native world generation rather than traditional 3D tooling.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI world models are the core product.',
  aiDesignChallenges: [
    'Designing controls for generative 3D worlds',
    'Balancing creative freedom with constraints',
    'Communicating model limitations in 3D outputs',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Fei-Fei Li',
      role: 'Co-founder',
      background: 'Co-founded World Labs.',
    },
    {
      name: 'Justin Johnson',
      role: 'Co-founder',
      background: 'Co-founded World Labs.',
    },
    {
      name: 'Christoph Lassner',
      role: 'Co-founder',
      background: 'Co-founded World Labs.',
    },
    {
      name: 'Ben Mildenhall',
      role: 'Co-founder',
      background: 'Co-founded World Labs.',
    },
  ],
  whyBuilding: 'Create models that generate and understand 3D worlds.',
  beliefs: [
    'Generative 3D will redefine interactive experiences',
    'World models can unlock new creative tools',
    'Research-led development is essential for quality',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Significant seed funding signal',
    'Strong research team and vision',
  ],
  redFlags: [
    'Long research timelines',
    'High compute and infrastructure costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'World generation controls and parameters',
        'Simulation logic and constraints',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality evaluation for 3D outputs',
        'User feedback loops for world generation',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Creative tooling UI and controls',
        'Output visualization and iteration flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: '3D creators, game developers, and researchers',
    secondary: 'Studios exploring generative 3D tools',
  },
  userProblems: [
    '3D world creation is time-intensive and complex',
    'Existing tools lack generative capabilities',
    'Iteration cycles for 3D content are slow',
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
    fitScore: 5,
    whyJoin: [
      'Deep AI research with creative applications',
      'Opportunity to define new 3D UX paradigms',
    ],
    whyNot: [
      'Research-heavy timelines may delay product impact',
      'High compute costs and long feedback cycles',
    ],
    nextActions: [
      'Track product direction and design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Source', url: 'https://worldlabs.ai' },
    { title: 'Source', url: 'https://worldlabs.ai/about' },
    { title: 'Source', url: 'https://startups.gallery/companies/world-labs' }
  ],
};
