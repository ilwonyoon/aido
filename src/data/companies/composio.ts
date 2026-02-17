import { Company } from '../types';

export const composio: Company = {
  id: 'composio',
  name: 'Composio',
  description: 'AI agent integration and learning infrastructure platform connecting agents to 10,000+ business tools via unified action layer.',
  website: 'https://composio.dev',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/composio-og.webp',
  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$29M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$4M',
      date: '2024-01',
      leadInvestors: ['Elevation Capital'],
    },
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2025-07',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
  ],
  revenue: '$2M ARR (Jun 2025)',
  growth: '100K+ developers, 200+ paying companies',
  customers: '200+ companies including YC startups',
  competitors: [
    {
      name: 'Nango',
      description: 'Unified API and data sync for SaaS integrations',
      whyTheyWin: 'Mature unified API with built-in data synchronization',
    },
    {
      name: 'Arcade',
      description: 'MCP-native action runtime for AI agents',
      whyTheyWin: 'MCP-first architecture for agent tooling',
    },
    {
      name: 'LangChain',
      description: 'Open-source framework for building LLM applications',
      whyTheyWin: 'Massive developer community and ecosystem momentum',
    },
  ],
  marketPosition: 'Leading agentic AI integration platform with 10,000+ tools and shared learning layer',
  moat: [
    'Network effects: agent learnings propagate across platform',
    '10,000+ pre-built tool integrations',
    '25,000+ GitHub stars and strong developer community',
    'Enterprise-grade auth (SOC Type II, OAuth)',
  ],
  vsGiants: 'Unlike LangChain (framework-level) or cloud providers (generic APIs), Composio specializes in production-ready agent-to-tool connectivity with managed auth and collective learning.',
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Composio is building novel AI agent infrastructure — the product is an AI-native integration and learning layer that only exists because of agentic AI.',
  aiDesignChallenges: [
    'Agent observability UX: visualizing tool calls, failures, and learning across thousands of agents',
    'Developer onboarding: making 10,000+ integrations discoverable and easy to configure',
    'Trust and transparency: showing developers what agents learned and why actions succeed or fail',
  ],
  founders: [
    {
      name: 'Soham Ganatra',
      role: 'Co-founder & CEO',
      background: 'IIT Bombay alum. Former founding engineer and technical PM. Previously at Nirvana and Rubrik.',
    },
    {
      name: 'Karan Vaidya',
      role: 'Co-founder & CTO',
      background: 'IIT Bombay alum. Software engineer with integration infrastructure expertise. Previously at Rubrik.',
    },
  ],
  whyBuilding: 'Both founders led integration engineering teams and experienced firsthand how painful it was to connect complex systems — now building the infrastructure so AI agents can do it reliably.',
  beliefs: [
    'AI agents need a shared knowledge layer to improve collectively',
    'Developer-first adoption leads to enterprise pull',
    'Integration reliability is the bottleneck for agentic AI at scale',
  ],
  greenFlags: [
    'Lightspeed-led Series A with strong angel investors (Dharmesh Shah, Guillermo Rauch)',
    '100K+ developers and 25K+ GitHub stars — strong organic adoption',
    'Capital-efficient: $2M ARR with 18-person team',
  ],
  redFlags: [
    'Early revenue ($2M ARR) relative to agentic AI hype',
    'Integration moats are hard to defend — incumbents can replicate',
    'Small team (18) may struggle to scale enterprise support',
  ],
  designTeam: {
    teamSize: 'Unknown (no design roles on current Ashby board)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent action flow design and failure handling',
        'Integration configuration and auth workflows',
        'Agent learning feedback loop architecture',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Agent observability dashboards and metrics',
        'Integration reliability monitoring',
        'Developer satisfaction measurement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer console and tool catalog (10,000+ tools)',
        'Agent debugging and log visualization',
        'SDK documentation and onboarding flows',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'AI engineers and developers building agentic applications',
    secondary: 'Enterprise teams deploying AI agents at scale',
  },
  userProblems: [
    'Connecting AI agents to business tools requires custom auth and API plumbing per integration',
    'Agent actions are unreliable in production — failures are hard to debug',
    'No shared learning: each agent starts from scratch on the same integration tasks',
    'Enterprise security requirements (OAuth, SOC 2) are costly to implement per-tool',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Capital-efficient culture: 18-person team generating $2M ARR. IIT Bombay co-founder duo with deep integration engineering roots.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '$2M ARR (Jun 2025)',
    userGrowth: '100K+ developers, 25K+ GitHub stars',
    signals: [
      '$25M Series A led by Lightspeed (Jul 2025)',
      'YC portfolio companies adopting as customers',
      'Angel backing from Guillermo Rauch (Vercel) and Dharmesh Shah (HubSpot)',
    ],
    tam: '$50B+ (AI agent infrastructure and integration market)',
    ceiling: 'Early innings: agentic AI adoption still nascent, integration layer is table stakes',
    tailwinds: [
      'Agentic AI adoption accelerating across enterprises',
      'Tool proliferation drives integration demand',
      'MCP and function-calling standards gaining momentum',
    ],
    headwinds: [
      'LangChain and cloud providers building native integrations',
      'Low switching costs between integration platforms',
      'Revenue still early relative to funding',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate: 10,000+ tools and shared learning create ecosystem lock-in, but integrations are replicable',
  },
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level A AI-native infrastructure — novel design challenges in agent observability',
      'Developer-first product with strong community (25K+ GitHub stars)',
      'Lightspeed backing and capital-efficient team signal strong execution',
    ],
    whyNot: [
      'No current design roles open',
      'Very small team (18) — design may not be a priority yet',
      'Early revenue stage with integration-heavy product (less UI surface)',
    ],
    nextActions: [
      'Monitor for Product Designer role reopening',
      'Watch for design team hiring signals',
    ],
  },
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Lightspeed: Investing in Composio', url: 'https://lsvp.com/stories/investing-in-composio-building-the-backbone-of-ai-agent-intelligence/' },
    { title: 'SiliconANGLE: Composio raises $25M', url: 'https://siliconangle.com/2025/07/22/composio-raises-25m-funding-ease-ai-agent-development/' },
    { title: 'Composio Ashby Jobs — no Product Design roles found', url: 'https://jobs.ashbyhq.com/composio' },
    { title: 'Latka: Composio $2M revenue with 18 people', url: 'https://getlatka.com/companies/composio.dev' },
    { title: 'Composio GitHub Repository', url: 'https://github.com/ComposioHQ/composio' },
  ],
};
