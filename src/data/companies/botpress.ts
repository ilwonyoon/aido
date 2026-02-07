import { Company } from '../types';

export const botpress: Company = {
  id: 'botpress',
  name: 'Botpress',
  description:
    'AI agent platform that provides infrastructure to build, deploy, and monitor agentic AI systems in production.',
  website: 'https://www.botpress.com',
  headquarters: 'Montreal, QC, Canada',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools', 'infrastructure'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$40M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2021-04',
      leadInvestors: ['Decibel', 'Inovia Capital'],
    },
    {
      stage: 'Series B',
      amount: '$25M',
      date: '2025-06',
      leadInvestors: ['FRAMEWORK', 'Inovia Capital', 'Deloitte Ventures'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: '400% YoY growth',
  runway: 'Not publicly disclosed',
  customers: '35%+ of Fortune 500 have used Botpress; 750k+ AI agents published',

  // Competition
  competitors: [
    {
      name: 'Drift',
      description: 'Conversational marketing and AI agent platform for sales and support.',
      whyTheyWin: 'Strong GTM in enterprise sales and marketing workflows.',
    },
    {
      name: 'Voiceflow',
      description: 'Collaborative platform for designing and deploying AI agents and chatbots.',
      whyTheyWin: 'Design-first workflows and strong no-code adoption.',
    },
    {
      name: 'Fin by Intercom',
      description: 'AI support agent embedded into Intercom’s customer support stack.',
      whyTheyWin: 'Deep integration with Intercom’s helpdesk and customer data.',
    },
    {
      name: 'Tidio',
      description: 'Customer service automation platform with AI chat and live chat.',
      whyTheyWin: 'Strong SMB adoption and ready-made templates.',
    },
    {
      name: 'Vertex AI',
      description: 'Google’s AI platform for building and deploying ML and LLM apps.',
      whyTheyWin: 'Enterprise-grade infrastructure and integration with Google Cloud.',
    },
  ],
  marketPosition: 'Developer-centric infrastructure platform for shipping production-grade AI agents across enterprise workflows.',
  moat: [
    'End-to-end agent runtime with orchestration, memory, and governance built in',
    'Open platform that supports multi-LLM and multi-channel deployments',
    'Strong developer community built from open-source roots',
  ],
  vsGiants:
    'Competes with hyperscalers by offering a focused, developer-first agent platform that is model-agnostic and built for production workflows.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is the core differentiator: Botpress’s product is the infrastructure layer required to ship AI agents into production.',
  aiDesignChallenges: [
    'Balancing powerful agent configuration with safe, predictable execution',
    'Designing tooling for non-linear, multi-step agent workflows',
    'Communicating AI reliability and governance controls to enterprise buyers',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sylvain Perron',
      role: 'Founder & CEO',
      background: 'Founded Botpress after building conversational AI tools and leads the company’s agent infrastructure vision.',
    },
  ],
  whyBuilding:
    'Botpress was founded to solve the infrastructure gap that keeps AI agents from running safely at production scale.',
  beliefs: [
    'AI agents need dependable infrastructure beyond prompts',
    'Developers should stay in control of agent orchestration and data',
    'Production deployments require governance and monitoring by default',
  ],
  greenFlags: ['Strong Series B backing', 'Large developer adoption metrics'],
  redFlags: ['Fast-moving competition from hyperscalers', 'Open-source platform monetization risk'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent orchestration logic and workflow configuration',
        'Safety and governance controls for autonomous actions',
        'Tooling for memory, retrieval, and multi-step reasoning',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Agent performance analytics and reliability scoring',
        'Human-in-the-loop feedback design',
        'Monitoring for production agent failures',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Agent builder UI and workflow editors',
        'Operational dashboards for deployments',
        'Multi-channel deployment configuration surfaces',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers and product teams deploying AI agents',
    secondary: 'Enterprise support and operations teams',
  },
  userProblems: [
    'AI agent prototypes are difficult to move into production reliably',
    'Teams lack tooling for orchestration, memory, and governance',
    'Enterprise users need clear controls and monitoring for AI behavior',
    'Multi-channel agent deployment is fragmented across tools',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Agentic AI infrastructure focus', 'Developer-first product challenges'],
    whyNot: ['Competitive AI tooling market', 'Reliance on fast-moving LLM ecosystem'],
    nextActions: ['Monitor hiring and product launches', 'Track enterprise adoption signals'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Botpress About', url: 'https://www.botpress.com/company/about' },
    { title: 'Botpress Series B press release (GlobeNewswire)', url: 'https://www.globenewswire.com/news-release/2025/06/23/3103351/0/en/Botpress-Raises-25M-Series-B-to-Scale-AI-Agent-Infrastructure.html' },
    { title: 'Botpress Series A funding (TechCrunch)', url: 'https://techcrunch.com/2021/04/28/botpress-nabs-15m-series-a-to-help-developers-build-conversational-apps/' },
    { title: 'Botpress careers', url: 'https://www.botpress.com/careers' },
    { title: 'G2 Botpress competitors', url: 'https://www.g2.com/products/botpress/competitors/alternatives' },
  ],
};
