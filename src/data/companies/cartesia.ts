import { Company } from '../types';

export const cartesia: Company = {
  id: 'cartesia',
  name: 'Cartesia',
  description:
    'Real-time voice AI platform behind Sonic-3, an ultra-low-latency, expressive text-to-speech model for voice agents and multimodal applications.',
  website: 'https://cartesia.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  category: 'ai-models' as const,

  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Not disclosed',
  totalFunding: '$186M+',
  fundingHistory: [
    { stage: 'Seed', amount: '$22M', date: '2024-12', leadInvestors: ['Index Ventures'] },
    { stage: 'Series A', amount: '$64M', date: '2025-03', leadInvestors: ['Kleiner Perkins'] },
    { stage: 'Series B', amount: '$100M', date: '2025', leadInvestors: ['Kleiner Perkins'] },
  ],
  revenue: '$17M (2024)',
  growth: 'Rapid — from seed to Series B in under a year; Sonic-3 is positioned as the voice layer for real-time agents.',
  runway: 'Strong — $186M+ raised',
  customers: 'Developers and enterprises building real-time voice agents; references include ServiceNow, Cresta, Decagon, Poe, and LiveKit ecosystem voices.',

  // Competition
  competitors: [
    {
      name: 'ElevenLabs',
      description: 'AI voice generation and voice cloning platform.',
      whyTheyWin: 'High voice quality and developer adoption.',
    },
    {
      name: 'Play.ht',
      description: 'Text-to-speech and voice API platform.',
      whyTheyWin: 'Broad language support and content workflows.',
    },
    {
      name: 'OpenAI (Voice)',
      description: 'Real-time voice capabilities in ChatGPT.',
      whyTheyWin: 'Distribution and model scale.',
    },
  ],
  marketPosition:
    'Developer-first, enterprise-ready real-time voice AI platform built for low-latency, lifelike, controllable speech in production agents.',
  moat: [
    'Ultra-low-latency streaming voice generation for real-time agent use cases',
    'State space model architecture optimized for continuous, streaming AI',
    'Developer-first API, SDK, and playground surfaces for rapid integration',
    'Enterprise readiness signals including SOC 2 Type II, HIPAA, PCI Level 1, and uptime positioning',
    'Expressive, controllable speech with laughter, emotion, pronunciation, accent, and voice cloning controls',
  ],
  vsGiants:
    'Competes on latency, expressiveness, controllability, and production voice-agent infrastructure rather than general-purpose assistant distribution.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'Voice AI models and real-time multimodal infrastructure are the core product; without the model layer, the product does not exist.',
  aiDesignChallenges: [
    'Designing controls for expressive speech, laughter, emotion, pronunciation, accent, and voice cloning',
    'Making latency, reliability, and performance budgets understandable to builders',
    'Helping developers test, compare, and ship voice agents with confidence',
    'Building trust and safety around cloned voices, healthcare workflows, and enterprise-grade voice automation',
    'Turning raw model capability into product surfaces for APIs, SDKs, playgrounds, dashboards, and agent workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Karan Goel',
      role: 'CEO & Co-Founder',
      background: 'PhD in CS from Stanford. Previously at Salesforce AI Research and Snorkel AI.',
    },
    {
      name: 'Albert Gu',
      role: 'Chief Scientist & Co-Founder',
      background: 'Stanford PhD researcher. Invented State Space Models (SSMs) architecture.',
    },
    {
      name: 'Arjun Desai',
      role: 'Co-Founder',
      background: 'PhD in Electrical Engineering from Stanford. Biomedical engineering and ML background.',
    },
    {
      name: 'Christopher Ré',
      role: 'Co-Founder & Advisor',
      background: 'Stanford CS Professor. MacArthur Fellow. Director of Stanford AI Lab, Machine Learning Group.',
    },
  ],
  whyBuilding:
    'Bring real-time multimodal intelligence to every device, starting with voice models that make AI agents feel natural, fast, and controllable.',
  beliefs: [
    'Voice interfaces should feel fast, natural, emotional, and interruptible',
    'Latency is not just infrastructure; it is the difference between a usable agent and a broken conversation',
    'Developers need powerful, flexible, compliant voice APIs to build production agents',
    'Model capability only matters when builders can control, evaluate, and deploy it confidently',
  ],
  designPhilosophy: 'Real-time voice experiences with ultra-low latency. SSM architecture for continuous, streaming AI.',
  greenFlags: [
    'Clear differentiation on latency, fidelity, expressiveness, and controllability',
    'Developer-first platform positioning with API, SDK, and playground entry points',
    'Strong fit with interest in AI-native tools where model capability must become usable product workflow',
    'Product design surface spans both developer tools and human conversational experience',
  ],
  redFlags: [
    'Crowded voice AI market',
    'High expectations for reliability in real-time use',
    'Voice cloning and agent use cases create safety, consent, and abuse-risk constraints',
    'OpenAI and ElevenLabs can compress differentiation if latency and quality converge',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~49 employees total',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Streaming voice generation controls',
        'Latency-aware interaction logic',
        'Voice agent turn-taking, interruption, and performance budget design',
        'Emotion, pronunciation, accent, and cloning control systems',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Voice quality evaluation and tuning',
        'User feedback loops for expressiveness',
        'Latency and reliability monitoring for production agent deployments',
        'Developer evaluation workflows for comparing voices, languages, and model settings',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer dashboards and API settings',
        'Voice selection and configuration UI',
        'Playground for real-time voice testing',
        'Enterprise agent setup, compliance, and deployment flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers and AI product teams building real-time voice agents and multimodal applications',
    secondary: 'Enterprises deploying voice workflows in healthcare, customer support, logistics, gaming, companion, and concierge use cases',
  },
  userProblems: [
    'Voice AI latency breaks conversational UX',
    'Existing voices lack expressiveness or control',
    'Developers need reliable streaming APIs',
    'Teams need to evaluate quality, latency, compliance, and cost before deploying voice agents in production',
    'Voice cloning and emotional speech require clear consent, control, and safety boundaries',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [
    {
      title: "Design Engineer",
      location: "*HQ - San Francisco, CA",
      type: "full-time",
      url: "https://jobs.ashbyhq.com/cartesia/30dd64e9-178e-43d8-afaa-13bb97baf45d",
      roleFamily: "design-engineering",
      roleSignal: "standard",
      verificationStatus: "confirmed",
      sourceType: "ashby",
      lastVerifiedAt: "2026-05-07",
      aboutRole:
        "Build high-craft product and web surfaces around Cartesia's real-time voice model platform.",
      whyInteresting:
        "Design-engineering role at the model-to-product layer: APIs, demos, playgrounds, and agent experiences need unusually tight craft and technical fluency.",
    },
    {
      title: "Product Design Lead",
      location: "*HQ - San Francisco, CA",
      type: "full-time",
      url: "https://jobs.ashbyhq.com/cartesia/6d525670-4509-4039-9a00-1b58ca0db1f4",
      roleFamily: "product-design",
      roleSignal: "lead",
      verificationStatus: "confirmed",
      sourceType: "ashby",
      lastVerifiedAt: "2026-05-07",
      aboutRole:
        "Lead product design for Cartesia's real-time voice AI platform across developer, agent, and enterprise workflows.",
      whyInteresting:
        "Direct fit for AI-native product direction: make powerful model capability controllable, trustworthy, and usable by builders shipping voice agents.",
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // Growth Metrics
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '$17M (2024), seed to Series B in <1 year',
    userGrowth: '50,000+ customers, millions of conversations monthly',
    signals: [
      '$186M+ raised (Kleiner Perkins, Index Ventures, NVIDIA)',
      'Sonic-3 positioned as text-to-speech for voice agents, with laughter, emotion, and 42+ languages',
      'Sonic page claims #1 ultra-low-latency positioning and consistently low P50-P99 latency worldwide',
      'Developer-first platform: API, SDK, playground, and enterprise-grade security/compliance claims',
      'SSM architecture inventors (S4, Mamba) — Stanford AI Lab origin',
      'Notable customers: ServiceNow, Cresta, Decagon',
      '42+ languages supported',
    ],
    tam: '$10B+ (Voice AI, conversational AI, TTS)',
    marketShare: '<1% (early market, fastest growing segment)',
    ceiling:
      'Early innings: voice agents need a production-grade voice layer. If latency, emotion, cloning, and control become core agent infrastructure, Cartesia can own a critical model-to-product layer.',
    tailwinds: ['Voice agents becoming primary AI interface', 'Enterprise voice automation demand', 'SSM architecture advantages over transformers for streaming'],
    headwinds: ['ElevenLabs dominates voice quality perception', 'OpenAI building native voice capabilities', 'Commoditization risk as models improve'],
    moatType: 'technology',
    moatStrength:
      'Strong if SSM architecture keeps a durable latency and efficiency advantage. Risk: voice quality and cloning UX may commoditize as competitors converge.',
  },

  // My Tracking
  tracking: {
    status: 'applied',
    fitScore: 8,
    whyJoin: [
      'Stanford AI Lab founding team with MacArthur Fellow',
      'Deep voice UX challenges with real-time constraints',
      'Hypergrowth: seed to $186M+ in under a year',
      'SSM architecture is genuinely novel technology',
      'Product Design Lead role is live and aligns with AI-native tool/workflow interests',
      'Strong connection to portfolio story: model capability only matters when users can trust, control, and act on it',
    ],
    whyNot: [
      'Highly competitive voice AI market (ElevenLabs, OpenAI)',
      'Small team (~49), design team may be tiny',
      'Voice cloning and enterprise voice agents carry safety, compliance, and abuse-risk complexity',
      'Need to confirm cash compensation range early',
    ],
    nextActions: [
      'Track response for Product Design Lead application',
      'Try Sonic-3 API for voice quality evaluation',
      'Prepare CS02 story around using AI validation to shift company product direction',
      'Prepare examples around developer tools, model evaluation, trust, and controllability',
    ],
    notes: 'Applied to Product Design Lead role on 2026-05-12.',
  },

  // Meta
  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Cartesia Sonic-3 product page', url: 'https://cartesia.ai/sonic' },
    { title: 'Cartesia Docs overview', url: 'https://docs.cartesia.ai/get-started/overview' },
    { title: 'Cartesia Series A announcement', url: 'https://cartesia.ai/blog/series-a' },
    { title: 'Cartesia company page', url: 'https://cartesia.ai/company' },
    { title: 'Fortune — Cartesia $64M Series A', url: 'https://fortune.com/2025/03/11/exclusive-cartesia-voice-ai-startup-raises-64-million-series-a/' },
    { title: 'Kleiner Perkins — Cartesia perspective', url: 'https://www.kleinerperkins.com/perspectives/cartesia-pioneering-real-time-voice-ai/' },
    { title: 'Index Ventures — Cartesia investment', url: 'https://www.indexventures.com/perspectives/building-the-next-generation-of-real-time-ai-models-our-investment-in-cartesia/' },
    { title: 'Cartesia Product Design Lead role', url: 'https://jobs.ashbyhq.com/cartesia/6d525670-4509-4039-9a00-1b58ca0db1f4' },
    { title: 'Cartesia Design Engineer role', url: 'https://jobs.ashbyhq.com/cartesia/30dd64e9-178e-43d8-afaa-13bb97baf45d' },
  ],
};
