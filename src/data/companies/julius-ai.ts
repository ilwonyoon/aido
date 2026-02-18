import { Company } from '../types';

export const juliusAi: Company = {
  id: 'julius-ai',
  name: 'Julius AI',
  description:
    'AI data analyst that connects data sources so teams can ask questions in natural language and get analysis, charts, and reports without coding.',
  website: 'https://julius.ai',
  headquarters: 'San Francisco, CA, USA',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['prosumer', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$10M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$10M',
      date: '2025-07',
      leadInvestors: ['Bessemer Venture Partners'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '2M+ users; 10M+ visualizations',

  // Competition
  competitors: [
    {
      name: 'Hex',
      description: 'Collaborative data analysis workspace for teams.',
      whyTheyWin: 'Strong notebook + SQL workflow adoption in data teams.',
    },
    {
      name: 'ThoughtSpot',
      description: 'Search-driven analytics platform for enterprises.',
      whyTheyWin: 'Enterprise distribution and deep BI integrations.',
    },
    {
      name: 'Akkio',
      description: 'No-code AI analytics and forecasting for business users.',
      whyTheyWin: 'Simplified model training and forecasting for non-technical users.',
    },
  ],
  marketPosition:
    'Natural-language AI data analyst focused on fast analysis, visualizations, and workflows for knowledge workers and teams.',
  moat: [
    'Large and growing user base with repeated analysis workflows',
    'Product focus on end-to-end analysis + visualization rather than general chat',
    'Integration with business data sources and collaboration features',
  ],
  vsGiants:
    'Competes with general LLMs by delivering analysis workflows, visualization tooling, and data-source integrations purpose-built for analytics.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Julius functions as an AI data analyst that performs analysis and visualization from natural-language prompts.',
  aiDesignChallenges: [
    'Communicating confidence and limitations in AI-generated analysis',
    'Designing explainable, auditable workflows for data results',
    'Balancing speed with accuracy for complex datasets',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Rahul Sonwalkar',
      role: 'Founder & CEO',
      background: 'YC S22 founder; previously worked at Uber and Facebook.',
    },
  ],
  whyBuilding:
    'Julius aims to democratize data analysis by giving every knowledge worker an AI data analyst that can answer questions and produce insights fast.',
  beliefs: [
    'Natural language should unlock analytics for non-technical teams',
    'Data analysis should be fast, collaborative, and repeatable',
    'Focused workflows beat generic AI assistants for real business outcomes',
  ],
  greenFlags: ['$10M seed led by Bessemer', '2M+ users', 'YC S22 with growing hiring'],
  redFlags: ['Crowded AI analytics landscape', 'Data privacy and governance risks', 'Reliance on LLM accuracy'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Prompt-to-analysis translation and workflow orchestration',
        'Guardrails for incorrect or misleading analysis',
        'Data source connection and permission design',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Explainability of AI-generated charts and code',
        'User feedback loops on analysis quality',
        'Accuracy checks for derived metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Conversational analysis UI and visualization flows',
        'Notebook and dashboard experiences for teams',
        'Slack/email reporting experience design',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Knowledge workers and analysts who need fast data insights',
    secondary: 'Cross-functional teams collaborating on data decisions',
  },
  userProblems: [
    'Getting meaningful insights from data is slow and requires technical skills',
    'Business users struggle to translate questions into SQL or code',
    'Teams lack shared, repeatable workflows for analysis and reporting',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
          title: 'Product Designer',
          location: 'San Francisco, CA',
          type: 'full-time',
          url: 'https://www.ycombinator.com/companies/julius/jobs/KqL43wN-product-designer',
          compensation: '$150K-$190K',
          aboutRole:
            'Own and shape the design direction for Julius, translating AI capabilities into intuitive workflows for knowledge workers.',
          responsibilities: [
            'Design UI used by millions of knowledge workers to get insights from data',
            'Translate AI capabilities into user-friendly product experiences',
            'Define the product’s visual identity and interaction patterns',
          ],
          requirements: ['3+ years of product design experience', 'Strong UI/UX portfolio', 'Comfortable using Figma'],
          whyInteresting: 'High-impact design role at an AI analytics company with rapid user growth.',
        }
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Massive user base for an AI analytics product', 'Clear product focus on data analysis workflows'],
    whyNot: ['Highly competitive AI analytics market', 'Reliance on LLM quality and trust'],
    nextActions: ['Monitor hiring momentum and product roadmap updates'],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Julius AI - Official Website', url: 'https://julius.ai' },
    { title: 'Julius YC Company Profile', url: 'https://www.ycombinator.com/companies/julius' },
    { title: 'Julius Product Designer Role (YC)', url: 'https://www.ycombinator.com/companies/julius/jobs/KqL43wN-product-designer' },
    { title: 'Julius Seed Round (TechCrunch)', url: 'https://techcrunch.com/2025/07/28/ai-data-analyst-startup-julius-nabs-10m-seed-round/' },
  ],
};
