import { Company } from '../types';

export const langchain: Company = {
  id: 'langchain',
  name: 'LangChain',
  description: 'Open-source framework and platform for building applications with LLMs and agents.',
  website: 'https://langchain.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$1.25B (Oct 2024)',
  totalFunding: '$125M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$125M',
      date: '2024-10',
      leadInvestors: ['IVP'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'LlamaIndex',
      description: 'Data framework for LLM applications.',
      whyTheyWin: 'Strong data indexing focus and community adoption.',
    },
    {
      name: 'Flowise',
      description: 'Open-source LLM workflow builder.',
      whyTheyWin: 'Visual builder and ease of use.',
    },
    {
      name: 'OpenAI Assistants API',
      description: 'Native agent tooling within OpenAI platform.',
      whyTheyWin: 'First-party model integration and distribution.',
    },
  ],
  marketPosition: 'Leading open-source framework for building LLM-powered applications.',
  moat: [
    'Large open-source community and ecosystem',
    'Composability across tools and model providers',
    'Brand recognition in LLM developer tooling',
  ],
  vsGiants: 'Competes by offering model-agnostic tooling and open-source ecosystem.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI infrastructure is core to the product offering.',
  aiDesignChallenges: [
    'Designing flexible building blocks for diverse workflows',
    'Making complex agent orchestration understandable',
    'Balancing power-user needs with simplicity',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Developers need a standard framework to build reliable LLM apps and agents.',
  beliefs: [
    'Open-source ecosystems accelerate AI adoption',
    'Composable building blocks enable faster iteration',
    'Developer experience is the moat for AI tooling',
  ],
  greenFlags: [
    'Series B funding and strong investor backing',
    'Large open-source community adoption',
  ],
  redFlags: [
    'Fast-moving competitive landscape',
    'Risk of platform commoditization',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Workflow orchestration UI', 'Agent configuration logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Quality evaluation tooling', 'Experiment tracking'],
    },
    interface: {
      level: 'medium',
      tasks: ['Developer dashboards', 'Visualization of chains and agents'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers building LLM applications',
    secondary: 'Platform teams shipping AI capabilities to internal users',
  },
  userProblems: [
    'LLM app development is fragmented and inconsistent',
    'Agent workflows are hard to debug and test',
    'Teams need tooling to scale experiments safely',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Developer tooling with strong community', 'AI infrastructure depth'],
    whyNot: ['Highly competitive category', 'Rapid technical shifts'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B funding announced'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'LLM app infrastructure remains early with massive adoption ahead.',
    tailwinds: ['Rising LLM adoption', 'Open-source community expansion'],
    headwinds: ['Commoditization risk', 'Platform consolidation'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Large community and ecosystem integration.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'LangChain Series B announcement', url: 'https://blog.langchain.com/series-b-announcement/' },
    { title: 'LangChain careers', url: 'https://www.langchain.com/careers' },
    { title: 'LangChain on startups.gallery', url: 'https://startups.gallery/companies/langchain' },
  ],
};
