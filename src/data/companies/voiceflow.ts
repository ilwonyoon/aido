import { Company } from '../types';

export const voiceflow: Company = {
  id: 'voiceflow',
  name: 'Voiceflow',
  description: 'Collaborative platform for building AI agents and conversational voice/chat experiences without heavy coding.',
  website: 'https://www.voiceflow.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'smb'],
  category: 'developer-tools' as const,
  industries: ['developer-tools', 'productivity'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$28.2M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Teams building customer support and conversational AI assistants',

  // Competition
  competitors: [
    {
      name: 'Botpress',
      description: 'Conversational AI building platform for enterprise bots and agents.',
      whyTheyWin: 'Strong open-source and enterprise deployment presence.',
    },
    {
      name: 'Dialogflow',
      description: 'Google conversational AI platform for building virtual agents.',
      whyTheyWin: 'Google Cloud distribution and ecosystem integration.',
    },
    {
      name: 'Microsoft Copilot Studio',
      description: 'Microsoft platform for low-code AI assistant creation.',
      whyTheyWin: 'Enterprise distribution through Microsoft stack.',
    },
  ],
  marketPosition: 'No/low-code collaborative builder for AI agent and conversational product teams.',
  moat: [
    'Collaboration-first agent building workflow',
    'Design-to-deployment approach for conversational systems',
  ],
  vsGiants: 'Differentiates with product/design-centric workflow instead of cloud-native infra-first tooling.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI interaction design and runtime behavior are central to product value.',
  aiDesignChallenges: [
    'Balancing no-code simplicity with advanced conversational control',
    'Designing robust testing and handoff flows for AI agent teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Michael Hood',
      role: 'Co-founder',
      background: 'Co-founded Voiceflow and helped shape its collaborative conversational AI product direction.',
    },
    {
      name: 'Braden Ream',
      role: 'Co-founder',
      background: 'Co-founded Voiceflow and led product/engineering strategy for AI assistant building workflows.',
    },
    {
      name: 'Tyler Han',
      role: 'Co-founder',
      background: 'Co-founded Voiceflow with focus on technical platform and tooling evolution.',
    },
  ],
  whyBuilding: 'Help teams design, prototype, and deploy high-quality conversational AI products faster.',
  beliefs: [
    'Conversation design should be collaborative and testable',
    'AI agent building needs product-quality tooling, not just APIs',
  ],
  greenFlags: ['Clear category fit in conversational AI tooling', 'Known product with meaningful ecosystem usage'],
  redFlags: ['Competes against hyperscaler-native agent tooling'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Conversation state and flow design', 'Agent behavior control patterns'] },
    evaluation: { level: 'high', tasks: ['Conversation QA and regression workflows', 'Prompt and outcome quality review UX'] },
    interface: { level: 'high', tasks: ['Visual flow builder and collaboration UI', 'Playground/testing interfaces'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Product, design, and CX teams building AI assistants',
    secondary: 'Developers integrating conversational AI into apps and support channels',
  },
  userProblems: [
    'Building reliable conversational AI workflows requires cross-functional tooling',
    'Teams need faster prototyping and safer deployment loops for AI assistants',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Strong design-tooling surface area', 'Agent UX and evaluation problems are core'],
    whyNot: ['Market pressure from large platform vendors'],
    nextActions: ['Track product design and design systems hiring signals'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$28.2M total funding (Seedtable)', 'Cross-functional adoption for AI assistant workflows'],
    tam: 'Growing conversational AI tooling and AI agent platform market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can evolve into full-stack agent product lifecycle platform',
    tailwinds: ['Rising enterprise demand for conversational AI', 'No-code + AI workflow convergence'],
    headwinds: ['Rapid commoditization of baseline LLM/chat capabilities'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:10:00',
  sources: [
    { title: 'Source', url: 'https://www.voiceflow.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
