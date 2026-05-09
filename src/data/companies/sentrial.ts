import { Company } from '../types';

export const sentrial: Company = {
  id: 'sentrial',
  name: 'Sentrial',
  description: 'Observability platform for AI agents — detects when agents loop, hallucinate, misuse tools, or frustrate users in production, diagnoses root causes, and recommends fixes before users notice.',
  website: 'https://sentrial.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown (YC W26)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Unknown',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Early; free 14-day trial available; no public user metrics',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Engineering teams deploying AI agents in production; AI-first companies needing reliability monitoring',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — early stage',
    userGrowth: 'Early access; SDK integration requiring only a few lines of code',
    signals: [
      'YC W26 backing with Ankit Gupta as partner',
      'Founders lived the problem: built agents at SenseHQ and Accenture before building Sentrial',
      '"Datadog for agent reliability" — clear category positioning in a hot space',
      'SDK-first integration reduces onboarding friction to near zero',
      'Agent deployment market exploding in 2026 — every AI company needs this',
    ],
    tam: '$12B+ application performance monitoring market; AI agent monitoring is an emerging subcategory estimated to exceed $2B by 2027',
    marketShare: '<0.1% of TAM',
    ceiling: 'Every company deploying AI agents needs production monitoring — this is table stakes infrastructure as the agent era matures',
    tailwinds: [
      'AI agent deployments exploding across enterprise in 2026 — YC W26 alone has 40+ agent startups',
      'Conventional APM tools (Datadog, New Relic) blind to probabilistic AI failures — hallucinations look like normal output',
      'Agent failures directly cost companies revenue and damage brand trust',
      'Enterprise compliance and SLA requirements for AI systems driving monitoring demand',
      'Model drift and latency spikes in AI are continuous — not one-time events',
    ],
    headwinds: [
      'Datadog and New Relic adding AI-specific monitoring features with massive distribution advantage',
      'LangSmith (LangChain) has strong developer mindshare for agent tracing and evaluation',
      'Arize AI, Weights & Biases already provide ML observability for larger teams',
      'Agent architectures changing rapidly — hard to build stable monitoring patterns',
      '2-person team competing against well-resourced APM platforms',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Proprietary failure pattern library grows with each new customer — learned "correct" behavior per workflow enables drift detection traditional APM cannot replicate.',
  },

  // Competition
  competitors: [
    {
      name: 'Datadog',
      description: 'Full-stack observability platform adding AI monitoring features.',
      whyTheyWin: 'Massive enterprise distribution, existing APM contracts, brand trust for reliability tooling.',
    },
    {
      name: 'LangSmith (LangChain)',
      description: 'Developer observability and evaluation platform for LLM applications.',
      whyTheyWin: 'LangChain ecosystem lock-in, large developer community, strong tracing UX.',
    },
    {
      name: 'Arize AI',
      description: 'ML observability and LLM evaluation platform.',
      whyTheyWin: 'Broader ML observability surface, enterprise contracts, model evaluation depth.',
    },
    {
      name: 'Honeycomb',
      description: 'Observability platform with emerging AI-native features.',
      whyTheyWin: 'Developer-beloved brand, high-cardinality tracing, OpenTelemetry alignment.',
    },
  ],
  marketPosition: 'AI-native production monitoring that detects probabilistic agent failures conventional APM tools miss',
  moat: [
    'Workflow-specific failure learning: Sentrial learns what "correct" looks like for each agent workflow and flags deviations',
    'Pattern library built from production failures across all customers — grows more valuable with each deployment',
    'SDK-first design: 2-line integration means very low friction, high adoption rate',
  ],
  vsGiants: 'AI-native failure detection vs retrofitted AI metrics bolted onto traditional APM dashboards',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI Infrastructure: Sentrial is built to monitor AI systems — the product cannot exist without AI as its subject. The core value is detecting AI-specific failure modes (hallucination, tool misuse, intent drift) that conventional monitoring is blind to.',
  aiDesignChallenges: [
    'Failure visualization: showing hallucinations, loops, and intent drift in ways engineers can act on quickly',
    'Alert configuration UX: helping teams define what "correct" agent behavior looks like for their specific workflows',
    'Root cause surfacing: tracing a failure back through conversation turns and tool calls without overwhelming developers',
    'Drift detection display: communicating when model behavior is changing vs when it\'s already broken',
    'Remediation workflow: from detection to diagnosis to fix recommendation in a coherent flow',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Neel Sharma',
      role: 'Co-founder & CEO',
      background: 'UC Berkeley CS; previously built agentic optimization systems at SenseHQ; experienced debugging agent failures in production firsthand.',
    },
    {
      name: 'Anay Shukla',
      role: 'Co-founder & CTO',
      background: 'UC Berkeley CS; previously deployed AI agents at Accenture; found that debugging agents was often harder than building them.',
    },
  ],
  whyBuilding: 'Neel and Anay spent years building agents at SenseHQ and Accenture with no production visibility — when something broke, there were no stack traces, no error codes, just confused users. Sentrial is the monitoring layer they wish they had.',
  beliefs: [
    'AI agents fail in qualitatively different ways than traditional software — APM tools are blind to them',
    'Production monitoring for AI is not optional as agent deployments scale to millions of users',
    'Learning what "correct" looks like per workflow is the only way to catch novel failure patterns',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Founders lived the exact problem — built production agents before building the monitoring tool',
    '"Datadog for agent reliability" is a clear, compelling narrative in a proven market',
    'SDK-first integration reduces onboarding friction dramatically',
    'YC W26 backing in the hottest agent infrastructure cohort',
  ],
  redFlags: [
    'Datadog and LangSmith already have significant mindshare and will add AI monitoring features',
    'Agent architectures are still evolving — monitoring patterns may require constant rebuilding',
    '2-person team competing in infrastructure where trust and reliability are table stakes',
    'No public traction metrics or named customers yet',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0 — 2-person technical founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Alert configuration: how engineers specify expected behavior thresholds per workflow',
        'Anomaly classification: distinguishing expected behavior changes from actual failures',
        'Escalation logic: when to alert on-call vs log for async review',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Failure pattern dashboard: visualizing loops, hallucinations, and tool misuse over time',
        'Root cause trace view: showing which conversation turn or tool call caused a failure',
        'Drift detection visualization: communicating model behavior change vs threshold breach',
        'ROI reporting: quantifying prevented failures and time-to-detection improvement',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agent registration and SDK setup flow',
        'Incident management: triage, assignment, and resolution tracking',
        'Benchmark comparison: before/after reliability metrics when model or prompt changes',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Agent reliability is a critical infrastructure category — every AI company will need this',
      'Strong observability design precedent from Datadog, Honeycomb to learn from and exceed',
      'Failure visualization and root cause UX are genuinely hard, high-leverage design problems',
      'Berkeley founders with lived problem experience — credible, direct customer insight',
    ],
    whyNot: [
      '2-person team unlikely to hire designer before Series A',
      'Datadog and LangSmith distribution advantage is very hard to overcome',
      'Infrastructure product: technical founders likely to prioritize SDK quality over UX at this stage',
      'No public traction signals yet to validate product-market fit',
    ],
    nextActions: [
      'Monitor for Series A and named enterprise customer announcements',
      'Watch for Datadog/LangSmith AI monitoring feature releases that could commoditize the space',
    ],
  },

  // Meta
  lastUpdated: '2026-04-23T00:00:00',
  sources: [
    { title: 'Sentrial YC Profile', url: 'https://www.ycombinator.com/companies/sentrial' },
    { title: 'Launch HN: Sentrial (YC W26)', url: 'https://news.ycombinator.com/item?id=47337659' },
    { title: 'Sentrial Website', url: 'https://sentrial.com' },
    { title: 'UBOS: Sentrial AI Failure Detection', url: 'https://ubos.tech/news/sentrial-ai-failure-detection-platform-boosts-agent-reliability-yc-w26-tech-startup/' },
    { title: 'YC W26 Agent Infrastructure Analysis', url: 'https://www.buildmvpfast.com/blog/yc-w26-batch-agent-infrastructure-boom' },
  ],
};
