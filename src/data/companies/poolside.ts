import { Company } from '../types';

export const poolside: Company = {
  id: 'poolside',
  name: 'Poolside',
  description: 'Frontier AI company building foundation models for software development.',
  website: 'https://poolside.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',
  // Note: Remote-first, 80% Europe-based, monthly 3-day in-person meetups

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['enterprise'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B+',
  valuation: '$12B (Oct 2025, raising $2B)',
  totalFunding: '$626M (raising to $2.6B)',
  fundingHistory: [
    { stage: 'Seed', amount: '$26M', date: '2023' },
    { stage: 'Series A', amount: '$100M', date: '2024', leadInvestors: ['Felicis Ventures', 'Redpoint Ventures'] },
    { stage: 'Series B', amount: '$500M', date: '2024-10', valuation: '$3B', leadInvestors: ['Bain Capital Ventures'] },
  ],
  revenue: '$50M (March 2025), up from $30M (Dec 2024)',
  growth: '~67% growth in 3 months, raising $2B at $12B',
  runway: 'Strong — $626M+ raised, Nvidia investing up to $1B',
  customers: 'Enterprise software teams, AWS Bedrock partnership',

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'Frontier AI lab with code generation models.',
      whyTheyWin: 'Scale, distribution, and ecosystem adoption.',
    },
    {
      name: 'Anthropic',
      description: 'Frontier model provider with enterprise adoption.',
      whyTheyWin: 'Safety positioning and strong enterprise partnerships.',
    },
    {
      name: 'Mistral',
      description: 'Frontier and open LLMs for enterprise use.',
      whyTheyWin: 'Open model strategy and EU footprint.',
    },
  ],
  marketPosition: 'Frontier AI lab focused on operational intelligence for software development.',
  moat: [
    'Frontier model development for code and software workflows',
    'Large funding base for compute and research',
    'Enterprise focus for secure model deployment',
  ],
  vsGiants: 'Competes by focusing on software development intelligence and enterprise readiness.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Foundation model development is the core product.',
  aiDesignChallenges: [
    'Designing developer trust in model outputs',
    'Balancing safety controls with usability',
    'Communicating model performance and limits',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jason Warner',
      role: 'CEO & Co-Founder',
      background: 'Former CTO of GitHub. Previously Managing Director at Redpoint Ventures. Led GitHub Actions, Codespaces, and AI initiatives.',
    },
    {
      name: 'Eiso Kant',
      role: 'CTO & Co-Founder',
      background: 'Founder of source{d}, the first company applying AI to source code. Spent 6 years planning AI developer tools before launching Poolside.',
    },
  ],
  whyBuilding: 'Deliver frontier AI systems that accelerate software development.',
  beliefs: [
    'Software development is a prime target for AI productivity',
    'Frontier models need to be enterprise-ready',
    'Safety and performance must evolve together',
  ],
  designPhilosophy: 'Enterprise-first AI development tools. Focus on trust, safety, and developer productivity.',
  greenFlags: [
    'Significant Series B funding signal',
    'Enterprise positioning with strong investor backing',
  ],
  redFlags: [
    'High competition among frontier labs',
    'Large compute and talent costs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '256 employees total, 70% technical',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflows and model behavior controls',
        'Developer tooling for model usage',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Benchmarking and evaluation UX',
        'Feedback loops for model quality',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and integrations',
        'Enterprise admin and governance UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise software and platform teams',
    secondary: 'Developers using AI for code workflows',
  },
  userProblems: [
    'Developer productivity tools are fragmented',
    'Enterprise teams need safe AI model deployment',
    'Model outputs require reliability and transparency',
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
      'Frontier AI research with enterprise UX challenges',
      'Opportunity to shape model UX and tooling',
    ],
    whyNot: [
      'Highly competitive frontier model space',
      'Long research timelines',
    ],
    nextActions: [
      'Monitor for product design leadership roles',
    ],
  },

  // Meta
  lastUpdated: '2026-02-05T22:30:00',
  sources: [
    { title: 'Poolside', url: 'https://poolside.ai' },
    { title: 'Poolside Series B (TechCrunch)', url: 'https://techcrunch.com/2024/10/02/poolside-raises-500m-series-b-at-3b-valuation-to-build-ai-coding-models/' },
    { title: 'Nvidia investing $1B (TechCrunch)', url: 'https://techcrunch.com/2025/10/30/nvidia-is-reportedly-investing-up-to-1-billion-in-poolside/' },
    { title: 'Poolside Wikipedia', url: 'https://en.wikipedia.org/wiki/Poolside_AI' },
  ],
};
