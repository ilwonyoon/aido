import { Company } from '../types';

export const langchain: Company = {
  id: 'langchain',
  name: 'LangChain',
  description: 'Open-source framework and platform for building applications with LLMs and agents.',
  website: 'https://langchain.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',


  category: 'developer-tools' as const,

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$1.25B (Oct 2025)',
  totalFunding: '$260M+',
  fundingHistory: [
    { stage: 'Seed', amount: '$10M', date: '2023-04', leadInvestors: ['Benchmark'] },
    { stage: 'Series A', amount: '$25M', date: '2024-02', valuation: '$200M', leadInvestors: ['Sequoia Capital'] },
    { stage: 'Series B', amount: '$100M', date: '2025-07', valuation: '$1.1B', leadInvestors: ['IVP'] },
    { stage: 'Series B', amount: '$125M', date: '2025-10', valuation: '$1.25B', leadInvestors: ['IVP', 'CapitalG', 'Sapphire Ventures'] },
  ],
  revenue: '$16M ARR (2025), up from $8.5M in 2024',
  growth: '~2x YoY revenue growth',
  runway: 'Strong — $260M+ raised, unicorn status',
  customers: '1,000+ paying customers, 1,300+ companies using LangChain',

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
      name: 'Harrison Chase',
      role: 'Co-Founder & CEO',
      background: 'Harvard grad in Statistics & CS. Led Entity Linking team at Kensho, then ML team at Robust Intelligence before founding LangChain.',
    },
    {
      name: 'Ankush Gola',
      role: 'Co-Founder',
      background: 'Former engineer at Meta and Robust Intelligence.',
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
    teamSize: '~163 employees total',
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
    revenueGrowth: '$16M ARR (2025), ~2x YoY from $8.5M',
    userGrowth: '1,300+ companies, 1,000+ paying customers',
    signals: [
      'Unicorn status at $1.25B valuation',
      '$260M+ total funding (Sequoia, Benchmark, IVP)',
      'LangSmith platform driving commercial revenue',
      'Leading framework for agentic AI development',
      'Notable customers: Klarna, Snowflake, BCG, Elastic, Rakuten',
    ],
    tam: '$50B+ (AI developer tools and agent infrastructure)',
    marketShare: '<1% (leading framework but early market)',
    ceiling: 'Early innings: AI agent development is nascent. LangChain well-positioned as default framework but must maintain lead against OpenAI native tooling.',
    tailwinds: ['Agentic AI adoption accelerating', 'Open-source community expansion', 'Enterprise AI spending growth'],
    headwinds: ['OpenAI Assistants API commoditization', 'Model providers building native tooling', 'Fast-moving competitive landscape'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Strong: Largest open-source community for LLM development. LangSmith creates switching costs. But platform risk from model providers.',
  },

  // Meta
  lastUpdated: '2026-02-05T22:30:00',
  sources: [
    { title: 'LangChain Series B announcement', url: 'https://blog.langchain.com/series-b-announcement/' },
    { title: 'LangChain $125M at $1.25B (Fortune)', url: 'https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/' },
    { title: 'LangChain careers', url: 'https://www.langchain.com/careers' },
    { title: 'LangChain customer stories', url: 'https://www.langchain.com/customers' },
  ],
};
