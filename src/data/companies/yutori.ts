import { Company } from '../types';

export const yutori: Company = {
  id: 'yutori',
  name: 'Yutori',
  description:
    'AI agents that help people with everyday digital tasks and act as a chief-of-staff for online workflows.',
  website: 'https://yutori.com',
  screenshot: '/screenshots/yutori-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/yutori-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2c'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$15M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$15M',
      date: '2025-03',
      leadInvestors: ['Radical Ventures', 'Felicis'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$15M seed round led by Radical Ventures and Felicis (Mar 2025)',
      'Founding team from major AI research labs',
    ],
    tam: 'Unknown',
    ceiling: 'Early innings: consumer AI agents are still an emerging category.',
    tailwinds: [
      'Rising demand for automation of everyday digital tasks',
      'LLM capabilities enabling multi-step agent workflows',
      'Consumer willingness to delegate routine work to AI',
    ],
    headwinds: [
      'Trust and safety concerns for agentic automation',
      'Competition from large consumer AI platforms',
      'Retention risk if agents fail on real-world tasks',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if agents deliver reliable, high-success task completion.',
  },

  // Competition
  competitors: [
    {
      name: 'OpenAI (ChatGPT)',
      description: 'General-purpose AI assistant with emerging agentic capabilities.',
      whyTheyWin: 'Massive distribution and model quality.',
    },
    {
      name: 'Adept AI',
      description: 'Agentic AI for software tasks and browser automation.',
      whyTheyWin: 'Focused on action-taking agents and enterprise workflows.',
    },
    {
      name: 'Perplexity',
      description: 'AI assistant and research platform expanding into action workflows.',
      whyTheyWin: 'Strong consumer adoption and brand momentum.',
    },
  ],
  marketPosition: 'Consumer-first AI agents for daily tasks and personal productivity.',
  moat: [
    'Dedicated agent workflows for common consumer tasks',
    'Founder expertise in agent research',
    'Focus on reliability and task completion rates',
  ],
  vsGiants: 'Focused on end-to-end task execution, not just chat-based assistance.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: The product is an agentic AI assistant; the company does not exist without AI.',
  aiDesignChallenges: [
    'Agent reliability and error recovery for real-world tasks',
    'Trust design for delegation and permissions',
    'Feedback loops for continuous agent improvement',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Abhishek Das',
      role: 'Co-founder & Co-CEO',
      background: 'Co-founded Yutori to build AI agents.',
    },
    {
      name: 'Devi Parikh',
      role: 'Co-founder & Chief Scientist',
      background: 'AI researcher and co-founder of Yutori.',
    },
    {
      name: 'Dhruv Batra',
      role: 'Co-founder & Co-CEO',
      background: 'AI researcher and co-founder of Yutori.',
    },
  ],
  whyBuilding:
    'Create AI agents that can take actions on behalf of people, making everyday digital tasks effortless.',
  beliefs: [
    'Agents should be dependable enough for real-world delegation',
    'AI should reduce cognitive load, not add complexity',
    'Task completion is the metric that matters',
  ],
  designPhilosophy: 'Agentic UX that prioritizes trust, transparency, and task completion.',
  greenFlags: [
    'Experienced founding team with deep agent research expertise',
    'Strong seed funding from top-tier investors',
  ],
  redFlags: [
    'Consumer agents face high expectations and low tolerance for failure',
    'Intense competition from large AI platforms',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
    notableMembers: [
      { name: 'Maximillian Piras', role: 'Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent planning and task decomposition flows',
        'Permissioning and execution boundaries',
        'Recovery and escalation for failed tasks',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Task success rate metrics and debugging tools',
        'User feedback loops for agent improvement',
        'Quality benchmarks across common task categories',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Agent UI for steps, progress, and confirmations',
        'Trust UI for actions taken on user behalf',
        'Onboarding flows for connecting services and accounts',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Consumers who want to automate everyday digital tasks',
    secondary: 'Knowledge workers seeking a personal AI chief-of-staff',
  },
  userProblems: [
    'Routine online tasks are repetitive and time-consuming',
    'People want to delegate digital chores without losing control',
    'Existing assistants do not complete multi-step tasks reliably',
    'Connecting services and workflows is still too manual',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Agentic UX with high design leverage',
      'Founders deeply experienced in AI agents research',
    ],
    whyNot: [
      'High consumer expectations and competitive landscape',
      'Unclear product-market fit at early stage',
    ],
    nextActions: [
      'Monitor product demos and waitlist availability',
      'Track hiring for design and product roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T14:30:00',
  sources: [
    { title: 'Source', url: 'https://yutori.com' },
    { title: 'Source', url: 'https://yutori.com/company' },
    { title: 'Source', url: 'https://yutori.com/blog/announcing-yutori' },
    { title: 'Source', url: 'https://www.globenewswire.com/news-release/2025/03/11/3040153/0/en/Yutori-Raises-15M-to-Build-AI-Agents-for-Everyday-Tasks.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/yutori' }
  ],
};
