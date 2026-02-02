import { Company } from '../types';

export const livekit: Company = {
  id: 'livekit',
  name: 'LiveKit',
  description:
    'Infrastructure for real-time audio and video applications, using WebRTC to power low-latency experiences.',
  website: 'https://livekit.io/',
    screenshot: '/screenshots/livekit-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/livekit-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  valuation: '$1B (Jan 2026)',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$100M',
      date: '2026-01',
      valuation: '$1B',
      leadInvestors: ['Index Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'OpenAI, xAI, Salesforce, Coursera, Spotify (per FinSMEs)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series C: $100M led by Index Ventures (Jan 2026)',
      'Serves 200,000+ developers (per FinSMEs)',
      'Supports billions of calls each year (per FinSMEs)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: real-time AI agents and voice interfaces are still scaling.',
    tailwinds: [
      'Voice AI and agentic interfaces moving into production',
      'Demand for low-latency infra across multimodal apps',
      'Growth in developer adoption of realtime APIs',
    ],
    headwinds: [
      'Highly competitive real-time communications market',
      'Infrastructure reliability and cost pressures at scale',
      'Dependence on third-party cloud and hardware availability',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if the edge network and OSS stack become default for AI voice agents.',
  },

  // Competition
  competitors: [
    {
      name: 'Twilio (Programmable Video)',
      description: 'API platform for real-time video and communications.',
      whyTheyWin: 'Scale, enterprise penetration, and developer distribution.',
    },
    {
      name: 'Agora',
      description: 'Real-time engagement APIs for voice and video.',
      whyTheyWin: 'Global infrastructure and large customer base.',
    },
    {
      name: 'Daily',
      description: 'Developer platform for WebRTC video and audio.',
      whyTheyWin: 'Developer-first product and strong API adoption.',
    },
  ],
  marketPosition: 'Real-time infrastructure and edge network for voice/video AI agents.',
  moat: [
    'Open-source framework with strong developer adoption',
    'Global edge network optimized for sub-100ms latency',
    'Deep integrations with AI voice workflows',
  ],
  vsGiants: 'Focuses on realtime AI agent infrastructure vs general-purpose comms APIs.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: LiveKit powers AI voice and multimodal agents where realtime latency is a core requirement.',
  aiDesignChallenges: [
    'Latency and reliability visibility for real-time AI experiences',
    'Developer UX for configuring realtime agent workflows',
    'Trust and quality signals for AI voice interactions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Russ d\'Sa',
      role: 'Co-founder & CEO',
      background: 'Co-founded LiveKit and leads the realtime AI agent platform.',
    },
    {
      name: 'David Zhao',
      role: 'Co-founder',
      background: 'Co-founded LiveKit and leads technical product development.',
    },
  ],
  whyBuilding:
    'Enable AI agents to see, hear, and speak with low-latency infrastructure and an open-source framework.',
  beliefs: [
    'Realtime infrastructure is a prerequisite for AI voice experiences',
    'Developers need simple primitives to build multimodal agents',
    'Latency and reliability are design features, not just engineering concerns',
  ],
  designPhilosophy: 'Developer-first tooling with clear realtime performance feedback.',
  greenFlags: [
    'Strong funding and top-tier investors',
    'Rapid adoption among AI voice and agent builders',
  ],
  redFlags: [
    'Crowded communications market with large incumbents',
    'High infrastructure cost and reliability expectations',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Latency and reliability controls for realtime sessions',
        'Agent orchestration and handoff flows',
        'Error recovery and failover UX',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Realtime quality dashboards and metrics',
        'Developer-facing diagnostics and tracing',
        'Voice session success monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Cloud dashboard onboarding and activation',
        'Session management and monitoring UI',
        'Docs and examples for realtime agents',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building realtime voice and video AI agents',
    secondary: 'Product teams launching multimodal AI experiences',
  },
  userProblems: [
    'Building realtime voice experiences is complex and latency-sensitive',
    'Scaling realtime sessions reliably is hard without a dedicated edge network',
    'Developers lack clear diagnostics for audio/video quality issues',
    'AI agents need stable, low-latency media pipelines',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer, Growth',
      location: 'Remote, U.S.',
      url: 'https://careers.redpoint.com/companies/livekit/jobs/65837351-product-designer-growth',
      type: 'full-time',
      aboutRole:
        'Design product-led growth initiatives and onboarding experiences for the LiveKit Cloud dashboard and developer surfaces.',
      responsibilities: [
        'Design and ship product-led growth initiatives focused on activation and retention',
        'Own and evolve onboarding and early product experiences',
        'Identify developer drop-off points and turn insights into improvements',
        'Partner with Product, Engineering, and Docs to ship iterations',
        'Design across dashboard, onboarding flows, and documentation surfaces',
      ],
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Core infrastructure for realtime AI agents',
      'High-impact developer experience problems',
    ],
    whyNot: [
      'Infrastructure-heavy company with high reliability burden',
      'Competitive market with large incumbents',
    ],
    nextActions: [
      'Follow product updates and developer adoption signals',
      'Monitor design hiring and org growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:10:00',
  sources: [
    { title: 'LiveKit website', url: 'https://livekit.io/' },
    { title: 'LiveKit Series C (FinSMEs)', url: 'https://www.finsmes.com/2026/01/livekit-raises-100m-in-series-c-funding-at-a-1-billion-valuation.html' },
    { title: 'LiveKit on startups.gallery', url: 'https://startups.gallery/companies/livekit' },
    { title: 'LiveKit Product Designer, Growth (Redpoint job board)', url: 'https://careers.redpoint.com/companies/livekit/jobs/65837351-product-designer-growth' },
  ],
};
