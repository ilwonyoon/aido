import { Company } from '../types';

export const vizcom: Company = {
  id: 'vizcom',
  name: 'Vizcom',
  description: 'AI-powered industrial design platform for visualization and concepting.',
  website: 'https://www.vizcom.com',
  screenshot: '/screenshots/vizcom-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68da69e18c8988d039a9f6fe/694b256896dd559dad1f8296_Generic_OpenGraph_1200x630.png',

  // Multi-dimensional Tags
  aiTypes: ['image-generation'],
  markets: ['prosumer', 'b2b'],
  category: 'creative-media' as const,

  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$27M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$27M',
      date: '2024-11',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '700,000+ designers (platform users)',

  // Competition
  competitors: [
    {
      name: 'Midjourney',
      description: 'AI image generation for creative workflows.',
      whyTheyWin: 'Strong community and visual quality.',
    },
    {
      name: 'Adobe Firefly',
      description: 'Generative AI for design workflows.',
      whyTheyWin: 'Deep creative suite integration.',
    },
    {
      name: 'Kaedim',
      description: 'AI-assisted 3D and industrial design tools.',
      whyTheyWin: 'Specialized design workflows and tooling.',
    },
  ],
  marketPosition: 'AI-first industrial design platform for rapid visualization and iteration.',
  moat: [
    'Design-specific workflows for industrial teams',
    'Fast concept iteration with AI',
    'Growing designer community adoption',
  ],
  vsGiants: 'Competes on industrial design focus rather than general creative tools.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI generation is the core product experience.',
  aiDesignChallenges: [
    'Balancing creative control with generative speed',
    'Ensuring output quality for professional designers',
    'Designing workflows for rapid iteration',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Help industrial designers create faster with AI-powered visualization.',
  beliefs: [
    'Design iteration should be faster and more visual',
    'AI can augment professional creative workflows',
    'Great tools enable better products',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series B funding signal',
    'Large community adoption numbers',
  ],
  redFlags: [
    'Crowded AI design tooling space',
    'Dependence on generative model quality',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Generative design control logic',
        'Constraint and iteration workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Output quality evaluation',
        'User feedback on design usability',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Design canvas and visualization UI',
        'Collaboration and export workflows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Industrial designers and design teams',
    secondary: 'Product teams iterating on physical products',
  },
  userProblems: [
    'Concept visualization is slow and resource-intensive',
    'Iteration cycles delay product decisions',
    'Traditional tools are not optimized for AI workflows',
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
      'AI-first industrial design tooling',
      'Strong community adoption',
    ],
    whyNot: [
      'Highly competitive generative design market',
      'Output quality expectations are high',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Vizcom Series B', url: 'https://www.vizcom.com/blog/vizcom-raises-27m-series-b' },
    { title: 'Vizcom on startups.gallery', url: 'https://startups.gallery/companies/vizcom' },
  ],
};
