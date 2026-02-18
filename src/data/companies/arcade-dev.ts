import { Company } from '../types';

export const arcadeDev: Company = {
  id: 'arcade-dev',
  name: 'Arcade.dev',
  description:
    'Authenticated tool-calling platform enabling AI agents to securely take real-world actions on behalf of users across enterprise and consumer services.',
  website: 'https://www.arcade.dev/',
  screenshot: 'https://iad.microlink.io/VN4BiqMKtJnifXk3H8AORrp-FvRsXpX-F8UbZnhE9QdXhulVfT4HuYtIPJm0Y8Paeo5ieXV6GWt6RuuNsVg1lA.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',
  ogImage: '/og-images/arcade-dev-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$12M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$12M',
      date: '2025-03',
      leadInvestors: ['Laude Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers building agentic AI across financial services, healthcare, and tech.',

  // Competition
  competitors: [
    {
      name: 'Composio',
      description: 'AI agent integration platform with 10K+ tools and framework adapters for LangChain, CrewAI.',
      whyTheyWin: '$29M raised, 100K+ developers, more generous free tier (21K vs 1,050 tool calls/month).',
    },
    {
      name: 'LangChain',
      description: 'Open-source LLM orchestration framework with built-in tool-calling capabilities.',
      whyTheyWin: 'Massive open-source community and ecosystem lock-in as the default agent framework.',
    },
    {
      name: 'Workato',
      description: 'Enterprise integration platform now offering MCP server support for AI agents.',
      whyTheyWin: 'Established enterprise relationships and mature workflow automation engine.',
    },
  ],
  marketPosition: 'First authenticated tool-calling platform for agentic AI — "SSO for AI agents."',
  moat: [
    'Auth-first approach: only platform solving agent authentication natively',
    'Founders built Stormpath/Okta — deep auth domain expertise',
    'LangChain Open Agent Platform partnership as default integration layer',
    'MCP standard compliance positioning for interoperability',
  ],
  vsGiants: 'Unlike general cloud/integration platforms, Arcade solves the specific authentication gap that prevents AI agents from taking secure actions in enterprise environments.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Arcade exists to enable AI agents to act securely — authentication and tool-calling infrastructure purpose-built for agentic AI.',
  aiDesignChallenges: [
    'Designing OAuth consent flows for AI agents acting on behalf of users',
    'Visualizing agent permissions, access scopes, and audit trails',
    'Developer experience for configuring 100s of pre-built tool integrations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alex Salazar',
      role: 'Co-founder & CEO',
      background: 'Former VP Product at Okta (dev products = 25% of bookings); co-founder/CEO of Stormpath (first Auth API, acquired by Okta); Stanford MBA; partner at Neotribe Ventures.',
    },
    {
      name: 'Sam Partee',
      role: 'Co-founder & CTO',
      background: 'Former Principal Applied AI Engineer at Redis; architected 100+ LLM apps; major contributor to LangChain and LlamaIndex; ex-Cray/HPE in supercomputing.',
    },
    {
      name: 'Itai Liptz',
      role: 'Co-founder',
      background: 'Based in Stanford, CA. Co-founded Arcade in 2024 to build authenticated tool-calling infrastructure for AI agents.',
    },
  ],
  whyBuilding:
    'Discovered while building an SRE agent that the real blocker for AI agents is authentication — pivoted to build "SSO for AI agents" as foundational infrastructure.',
  beliefs: [
    'AI agents have an auth problem that must be solved before they can be useful',
    'Security and developer experience are not trade-offs',
    'Agentic AI needs infrastructure, not just smarter models',
  ],
  designPhilosophy: 'Make secure agent-to-tool integration feel invisible to developers.',
  greenFlags: [
    'Founders with proven auth expertise (Stormpath → Okta acquisition)',
    'LangChain partnership as default integration layer',
    'Linux Foundation Agentic AI Foundation gold member',
    '$12M seed from strong investors (Laude/Flybridge/Hanabi/Neotribe)',
  ],
  redFlags: [
    'Composio has 8x more funding and 100K+ developer community',
    'Seed stage — product-market fit still being validated',
    'MCP standard is early and could be displaced',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (1-50 total employees; no public design team info)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'OAuth consent and permission scoping flows for AI agents',
        'Agent-to-tool authorization logic and least-privilege enforcement',
        'Multi-service integration configuration workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Agent action audit trails and compliance dashboards',
        'Tool-call success/failure monitoring',
        'Developer usage analytics and integration health',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer onboarding and SDK documentation UX',
        'Tool catalog and integration marketplace UI',
        'Agent permission management console',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building production AI agents that need secure access to enterprise services',
    secondary: 'Enterprise teams deploying agentic AI for support, CRM, and workflow automation',
  },
  userProblems: [
    'AI agents cannot authenticate with enterprise services (Gmail, Slack, Salesforce) without human intervention',
    'No standardized way to manage agent permissions and access scopes',
    'Building secure tool integrations from scratch is slow and error-prone',
    'Enterprises need audit trails for AI agent actions to meet compliance requirements',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Neotribe wrote the first check before the company was even named — strong investor conviction in founders\' domain expertise from Okta/Stormpath.',
      url: 'https://blog.neotribe.vc/arcade-dev-making-ai-agents-work-securely/',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Alex Salazar: "The need for high-quality engineering talent is just as important, if not more important now" — values engineering quality over speed.',
      url: 'https://kitrum.com/blog/the-inspiring-story-of-alex-salazar-and-sam-partee-founders-of-arcade/',
    },
  ],

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      '$12M seed led by Laude Ventures (Perplexity co-founder\'s fund)',
      'LangChain Open Agent Platform partnership (Interrupt Conference)',
      'Linux Foundation Agentic AI Foundation gold membership',
    ],
    tam: '$50B+ (AI agent infrastructure and enterprise integration market)',
    marketShare: '<1% — very early in a nascent market',
    ceiling: 'Early innings: authenticated agent infrastructure is a new category with no clear winner yet.',
    tailwinds: [
      'Explosive growth in agentic AI adoption across enterprises',
      'MCP becoming an industry standard for agent-tool communication',
      'Enterprise security/compliance requirements favor auth-first platforms',
    ],
    headwinds: [
      'Composio has larger community and more funding ($29M vs $12M)',
      'LangChain could build native auth and disintermediate Arcade',
      'Cloud providers (AWS, Azure) may bundle agent auth into their platforms',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: deep auth expertise from Okta/Stormpath, but technology can be replicated.',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Auth-first approach to agentic AI is a novel design problem space',
      'Developer tooling with large design surface (permissions, integrations, docs)',
      'Strong founder pedigree (Stormpath → Okta → Arcade)',
    ],
    whyNot: [
      'Seed stage — small team, design may not be a priority yet',
      'Composio is better funded with larger developer community',
      'No public design team or open design roles',
    ],
    nextActions: [
      'Monitor for Product Designer job postings',
      'Track LangChain partnership traction and developer adoption',
      'Watch for Series A announcement',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Arcade.dev — Official Website', url: 'https://www.arcade.dev/' },
    { title: 'TechCrunch — Arcade raises $12M from Perplexity co-founder\'s fund', url: 'https://techcrunch.com/2025/03/18/arcade-raises-12m-from-perplexity-co-founders-new-fund-to-make-ai-agents-less-awful/' },
    { title: 'Neotribe VC — Arcade.dev: Making AI Agents Work Securely', url: 'https://blog.neotribe.vc/arcade-dev-making-ai-agents-work-securely/' },
    { title: 'Laude Ventures — Arcade.dev: Unlocking AI\'s Full Potential', url: 'https://laude.vc/news/arcade-dev-unlocking-ais-full-potential-in-the-enterprise/' },
    { title: 'Kitrum — Founders Story: Alex Salazar and Sam Partee', url: 'https://kitrum.com/blog/the-inspiring-story-of-alex-salazar-and-sam-partee-founders-of-arcade/' },
    { title: 'Arcade Blog — LangChain Open Agent Platform Partnership', url: 'https://arcade.dev/blog/langchain-announces-open-agent-platform-powered-by-arcade-dev' },
    { title: 'Arcade.dev Careers — no Product Design roles found', url: 'https://jobs.ashbyhq.com/arcade' },
  ],
};
