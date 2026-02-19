import { Company } from '../types';

export const meya: Company = {
  id: 'meya',
  name: 'Meya',
  description:
    'Developer-first conversational AI platform for building, training, and deploying custom chatbots across messaging channels with Python/BFML scripting.',
  website: 'https://www.meya.ai',
  headquarters: 'Kitchener, ON, Canada',
  region: 'other-intl' as const,
  remote: 'Unknown',
  ogImage: '/og-images/meya-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'smb'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: '$5M',
  totalFunding: '$1.01M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$843K',
      date: '2017-11',
      valuation: '$5M',
      leadInvestors: ['Trifecta Capital', 'FundersClub'],
    },
    {
      stage: 'Pre-seed',
      amount: '$150K',
      date: '2017-05',
      leadInvestors: ['500 Global'],
    },
    {
      stage: 'Pre-seed',
      amount: '$21.5K',
      date: '2016-02',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Google, ESPN, Aflac, Inside Weather; 42M+ users assisted',

  // Competition
  competitors: [
    {
      name: 'Ada',
      description: 'AI-powered automated CX platform for enterprise.',
      whyTheyWin: 'No-code approach, $190M+ funding, strong enterprise sales.',
    },
    {
      name: 'Botpress',
      description: 'Open-source chatbot framework with visual builder.',
      whyTheyWin: 'Open-source community and developer ecosystem.',
    },
    {
      name: 'Kore.ai',
      description: 'Enterprise conversational AI with no-code tooling.',
      whyTheyWin: 'Gartner-recognized, large enterprise deployments.',
    },
  ],
  marketPosition:
    'Code-first conversational AI platform targeting developers who need maximum customization over chatbot logic.',
  moat: [
    'Developer-first BFML/Python scripting with full SDK extensibility',
    'Enterprise reference customers (Google, ESPN, Aflac)',
    'Deep integration ecosystem (Zendesk, Salesforce, OpenAI)',
  ],
  vsGiants:
    'Differentiates from Dialogflow and Microsoft Bot Framework via code-first flexibility and smaller-team agility.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI is a major feature (NLU, MeyaGPT) but the core product is a chatbot building framework that existed before LLM integration.',
  aiDesignChallenges: [
    'Balancing code-first power with accessible visual flow editing',
    'Integrating LLM-powered responses into deterministic bot flows',
    'Designing human-to-bot handoff experiences for support teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Erik Kalviainen',
      role: 'Co-founder & CEO',
      background:
        'Former Product Manager at Google. UWaterloo Systems Design Engineering. Previously co-founded ProductWiki.',
    },
    {
      name: 'Amanie Ismail',
      role: 'Co-founder & COO',
      background:
        'Former Co-founder & CEO of ProductWiki. UWaterloo Systems Design Engineering.',
    },
  ],
  whyBuilding:
    'Built Meya to give developers full control over conversational AI experiences, beyond the limitations of template-based chatbot platforms.',
  beliefs: [
    'Developers need code-level control over conversational logic',
    'Chatbot quality requires deep integration with business systems',
    'AI-powered conversations should still allow human oversight',
  ],
  greenFlags: [
    'Enterprise customers (Google, ESPN, Aflac) validate product quality',
    'Developer-first positioning in a market of no-code tools',
    'Self-sustaining for 9+ years with minimal funding (bootstrapped growth)',
    '500 Global Batch 21 alumni',
  ],
  redFlags: [
    'Only $1M raised; vastly outfunded by competitors',
    '~9 employees — very small team limits velocity',
    'No funding since 2017; unclear growth trajectory',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0-1 (9 total employees, no public design hires)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Bot flow logic and orchestration tooling',
        'Escalation and fallback logic design',
        'LLM response integration into deterministic flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Conversation quality metrics and analytics',
        'Bot performance monitoring dashboards',
        'User feedback loops for bot improvements',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Visual flow builder and code editor UX',
        'Orb chat widget customization interface',
        'Multi-channel deployment configuration',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Developers building custom conversational AI for customer support',
    secondary: 'Support teams managing bot-to-human handoff workflows',
  },
  userProblems: [
    'Template-based chatbot platforms lack customization for complex workflows',
    'Developers need code-level control but existing tools are no-code only',
    'Support teams struggle with seamless bot-to-human escalation',
    'Integrating AI responses into existing business systems is fragmented',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    signals: [
      'Self-sustaining since 2017 on $1M total funding',
      'Active product with regular docs/integration updates',
      '42M+ users assisted via customer bots',
    ],
    tam: '$8B (conversational AI platforms market)',
    ceiling: 'Niche player: code-first segment within crowded CX automation space',
    tailwinds: [
      'LLM integration making chatbots more capable',
      'Enterprise demand for custom AI workflows growing',
    ],
    headwinds: [
      'No-code competitors attract larger market share',
      'Big tech (Google Dialogflow, AWS Lex) expanding',
      'Limited funding constrains R&D and go-to-market',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: deep code integrations create lock-in for existing customers',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Code-first conversational AI tooling presents unique UX challenges',
      'Small team = high individual impact',
    ],
    whyNot: [
      'Vastly outfunded by competitors ($1M vs $190M+ for Ada)',
      'No design roles or design team signals',
      'No funding since 2017 raises sustainability questions',
    ],
    nextActions: [
      'Monitor for product design roles',
      'Track MeyaGPT product evolution',
    ],
  },

  // Meta
  lastUpdated: '2026-02-13',
  sources: [
    { title: 'Meya Official Website', url: 'https://www.meya.ai/' },
    { title: 'Meya Crunchbase Profile', url: 'https://www.crunchbase.com/organization/meya-ai' },
    { title: 'Erik Kalviainen Crunchbase', url: 'https://www.crunchbase.com/person/erik-kalviainen' },
    { title: 'Meya Golden Wiki', url: 'https://golden.com/wiki/Meya.ai-AMB4849' },
    { title: 'Meya Careers — no Product Design roles found', url: 'https://www.meya.ai/' },
  ],
};
