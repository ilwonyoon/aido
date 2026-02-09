import { Company } from '../types';

export const thinkingMachinesLab: Company = {
  id: 'thinking-machines-lab',
  name: 'Thinking Machines Lab',
  description: 'AI research and product company building tools so more people can make AI work for their unique needs and goals.',
  website: 'https://thinkingmachines.ai',
  screenshot: '/screenshots/thinking-machines-lab-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Visual Assets
  ogImage: 'https://thinkingmachines.ai/images/home.png',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: '$12B (Jul 2025)',
  totalFunding: '$2B',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2B',
      date: '2025-07',
      leadInvestors: ['Andreessen Horowitz', 'Nvidia', 'Accel', 'ServiceNow', 'Cisco', 'AMD', 'Jane Street'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'Frontier AI research and product lab with broad model offerings.',
      whyTheyWin: 'Scale of models, distribution, and developer ecosystem.',
    },
    {
      name: 'Anthropic',
      description: 'AI safety-focused frontier model lab.',
      whyTheyWin: 'Strong safety brand and enterprise adoption.',
    },
    {
      name: 'Google DeepMind',
      description: 'Research lab building frontier AI models and systems.',
      whyTheyWin: 'Research depth and infrastructure scale.',
    },
  ],
  marketPosition: 'Frontier AI research and product company focused on collaboration, customization, and shared science.',
  moat: [
    'Research and product co-design ethos',
    'Talent density from leading AI labs',
    'Commitment to publishing research and code',
  ],
  vsGiants: 'Competes on a focus on human-AI collaboration and customization rather than closed, one-size-fits-all systems.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'The company builds frontier AI systems as its core product.',
  aiDesignChallenges: [
    'Designing controls for customization and personalization',
    'Communicating model limitations and uncertainty',
    'Balancing openness with safety in releases',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mira Murati',
      role: 'Founder & CEO',
      background: 'Founded Thinking Machines Lab after leading product and research efforts at OpenAI.',
    },
  ],
  whyBuilding: 'Make AI systems more widely understood, customizable, and generally capable.',
  beliefs: [
    'Science advances faster when shared',
    'Human-AI collaboration should be a core design goal',
    'AI should be adaptable to people and organizations',
    'Solid foundations and infrastructure are essential',
  ],
  designPhilosophy: 'Research and product co-design to stay grounded in real-world impact.',
  greenFlags: [
    'Strong funding and investor backing',
    'Commitment to share research, papers, and code',
  ],
  redFlags: [
    'High competition among frontier labs',
    'Large capital and compute requirements',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent behavior and collaboration workflows',
        'Customization controls and safety guardrails',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Evaluating usefulness and safety of model outputs',
        'Feedback loops for alignment and trust',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Research tooling and product surfaces',
        'Collaboration and configuration UI',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Researchers and builders customizing AI systems',
    secondary: 'Organizations seeking collaborative AI tools',
  },
  userProblems: [
    'AI systems are hard to customize to specific needs',
    'Understanding how frontier models behave is difficult',
    'Safety and usefulness tradeoffs are unclear to users',
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
    fitScore: 7,
    whyJoin: [
      'Frontier AI lab with clear collaboration thesis',
      'Deep UX challenges in customization and safety',
    ],
    whyNot: [
      'High competitive pressure among frontier labs',
      'Long timelines for product clarity',
    ],
    nextActions: [
      'Monitor for Product Design leadership roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Source', url: 'https://thinkingmachines.ai' },
    { title: 'Source', url: 'https://thinkingmachines.ai/blog/' },
    { title: 'Source', url: 'https://job-boards.greenhouse.io/thinkingmachines' },
    { title: 'Source', url: 'https://techcrunch.com/2025/02/18/thinking-machines-lab-is-ex-openai-cto-mira-muratis-new-startup/' },
    { title: 'Source', url: 'https://techcrunch.com/2025/07/15/mira-muratis-thinking-machines-lab-is-worth-12b-in-seed-round/' }
  ],
};
