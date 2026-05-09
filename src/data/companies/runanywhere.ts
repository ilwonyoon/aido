import { Company } from '../types';

export const runanywhere: Company = {
  id: 'runanywhere',
  name: 'RunAnywhere',
  description: 'On-device AI platform and SDK for iOS, Android, and edge devices — enabling fast, private, offline AI with a unified API that handles model delivery, inference backend abstraction, and fleet management.',
  website: 'https://www.runanywhere.ai',
  headquarters: 'Unknown',
  remote: 'Unknown',

  aiTypes: ['ai-infrastructure', 'model-platform'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC)',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (pre-revenue, developer SDK launch phase)',
  growth: '10.1K GitHub stars at launch (Jan 2026)',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Mobile app developers building AI-powered iOS and Android apps',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown — pre-revenue, developer adoption focus',
    userGrowth: '10,100+ GitHub stars; open source SDK with rapid community adoption',
    signals: [
      '10.1K GitHub stars at launch — strong developer interest',
      'MetalRT: first multimodal inference engine for Apple Silicon — technical credibility',
      '658 tok/s LLM decode, 714x real-time STT, 8.8x RTF TTS on Apple Silicon',
      'Beats Apple\'s own MLX for on-device AI inference speed',
      'YC W26 with co-founder from Amazon EC2 ($100M+ ARR) and Microsoft Azure',
    ],
    tam: '$10B+ edge AI software market (growing with on-device AI adoption)',
    marketShare: '<0.1% of TAM = 1000x+ upside potential',
    ceiling: 'Early innings: on-device AI is inevitable as Apple NeuraSIPs and Qualcomm chips mature',
    tailwinds: [
      'Apple Intelligence expansion driving developer demand for on-device AI SDKs',
      'Privacy regulations making cloud-only AI increasingly risky for personal data',
      'AI inference costs on cloud pushing developers toward edge solutions',
      'Offline-first AI required for health, finance, and rural connectivity use cases',
    ],
    headwinds: [
      'Apple Core ML and MLX are direct native alternatives from Apple',
      'Google MediaPipe and TFLite serve similar on-device use cases on Android',
      'Monetization unclear — open-source SDK model requires control plane upsell',
      'Niche audience (mobile AI developers) may limit initial scale',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: MetalRT inference speed advantage + first-mover SDK ecosystem; Apple and Google can match with native frameworks',
  },

  // Competition
  competitors: [
    {
      name: 'Apple Core ML / MLX',
      description: 'Apple\'s native on-device machine learning frameworks',
      whyTheyWin: 'Pre-installed on every Apple device; OS-level integration; free',
    },
    {
      name: 'Google MediaPipe / TFLite',
      description: 'Google\'s cross-platform on-device ML SDK for Android and iOS',
      whyTheyWin: 'Google distribution; strong Android ecosystem; well-documented',
    },
    {
      name: 'llama.cpp / ONNX Runtime',
      description: 'Open-source inference engines for local LLM running',
      whyTheyWin: 'Free, battle-tested, large developer community',
    },
  ],
  marketPosition: 'Unified on-device AI SDK that abstracts inference backends (llama.cpp, ONNX) with production-grade model delivery and fleet management',
  moat: [
    'MetalRT: custom Apple Silicon inference engine beating Apple\'s own MLX',
    'Unified API abstracting multiple inference backends — reduces switching cost',
    'Control plane for model rollouts and policy enforcement across fleets',
  ],
  vsGiants: 'Cross-platform, backend-agnostic SDK vs Apple/Google lock-in to their own frameworks',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product: RunAnywhere exists to make on-device AI fast and accessible. Without AI inference, there is no product.',
  aiDesignChallenges: [
    'Developer experience: SDK documentation, onboarding, and playground tools',
    'Control plane dashboard: model deployment, rollout policies, usage analytics',
    'Error state visualization: what happens when on-device inference fails or model is too large?',
    'Model selection UX: how do developers choose the right model for their use case?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aman Swar',
      role: 'Co-founder & CTO',
      background: 'Former Amazon EC2 Spot ($100M+ ARR) and Microsoft Azure engineer. Built MetalRT — the first multimodal inference engine for Apple Silicon.',
    },
  ],
  whyBuilding: 'Edge AI is inevitable — users want instant responses, full privacy, and AI that works offline. Cloud AI is too slow, too expensive, and too privacy-invasive for the next generation of mobile apps.',
  beliefs: [
    'On-device AI will be the default for personal data (health, finance, personal communications)',
    'Developers deserve a simple, unified SDK — not fragmented framework per platform',
    'Privacy is a product feature, not a compliance checkbox',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'CTO built MetalRT — fastest inference on Apple Silicon (beats Apple MLX)',
    '10K+ GitHub stars at launch — strong developer interest signal',
    'Amazon EC2 + Microsoft Azure background = infrastructure engineering credibility',
    'YC W26 backing',
  ],
  redFlags: [
    'Apple and Google can release matching frameworks with OS-level integration at any time',
    'Open-source core limits monetization — control plane upsell unproven',
    'Tiny team, early-stage: unclear design culture or headcount',
    'Very developer-tool focused — design leverage may be limited to DevEx',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 2-5 total, early YC company)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'SDK developer experience: onboarding flow, first inference in under 5 minutes',
        'Control plane policy logic: model rollout rules, A/B testing frameworks',
        'Error taxonomy: failed inference, model too large, unsupported device',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Performance benchmarks visualization: inference speed, memory, battery impact',
        'Fleet analytics: model adoption across device types',
        'A/B testing on-device model variants',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Control plane dashboard: model management, deployment status, policy configuration',
        'Documentation site and interactive SDK playground',
        'Onboarding flow for first-time SDK integration',
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
    fitScore: 4,
    whyJoin: [
      'Genuinely hard technical design problem: developer tools for on-device AI',
      'YC W26 — early stage, can shape product from scratch',
      'CTO has rare Apple Silicon + cloud infrastructure background',
    ],
    whyNot: [
      'Infrastructure / developer tool — limited consumer product design surface',
      'Apple / Google platform risk is existential',
      'Open-source SDK = monetization unclear, may affect runway',
      'Very small team — design may be a low priority early on',
    ],
    nextActions: [
      'Watch GitHub repo for SDK evolution and community',
      'Check runanywhere.ai for control plane product launch',
    ],
  },

  // Meta
  lastUpdated: '2026-04-21T00:00:00',
  sources: [
    { title: 'RunAnywhere YC Profile', url: 'https://www.ycombinator.com/companies/runanywhere' },
    { title: 'RunAnywhere Launch Blog', url: 'https://www.runanywhere.ai/blog/runanywhere-on-device-ai-platform-sdk-y-combinator-2026' },
    { title: 'RunAnywhere GitHub', url: 'https://github.com/RunanywhereAI/runanywhere-sdks' },
    { title: 'Aman Swar LinkedIn', url: 'https://www.linkedin.com/in/aman-swar/' },
  ],
};
