import { Company } from '../types';

export const livekit: Company = {
  id: 'livekit',
  name: 'LiveKit',
  description:
    'Infrastructure for real-time audio and video applications, using WebRTC to power low-latency experiences.',
  website: 'https://livekit.io/',
    screenshot: '/screenshots/livekit-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/livekit-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series C',
  valuation: '$1B (Jan 2026)',
  totalFunding: '$174M+',
  fundingHistory: [
    { stage: 'Series A', amount: '$22.5M', date: '2022-09', leadInvestors: ['Altimeter Capital'] },
    { stage: 'Series B', amount: '$45M', date: '2025-04', valuation: '$345M', leadInvestors: ['Altimeter Capital'] },
    { stage: 'Series C', amount: '$100M', date: '2026-01', valuation: '$1B', leadInvestors: ['Index Ventures'] },
  ],
  revenue: '~$3.7M (2025, GetLatka)',
  growth: '23% YoY revenue, 200K+ developers',
  runway: 'Strong -- 5-8+ years at current burn with $174M raised',
  customers: 'OpenAI, xAI, Salesforce, Tesla, Meta, Microsoft, Spotify, Character.AI, Coursera',

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
      background: 'YC S07 alum. 2nd frontend engineer at Twitter (#75 employee). Early at 23andMe (~30th employee). Co-founded Evie Labs (acquired by Medium). 5th-time founder.',
    },
    {
      name: 'David Zhao',
      role: 'Co-founder & CTO',
      background: 'UW grad. Co-founded ZumoDrive and Evie Labs (acquired by Medium). Former Director of Engineering at Motorola. Senior Venture Partner at Pioneer Fund.',
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
    designHead: 'Matt Herzog (ex-Medium, AKQA)',
    teamSize: '2-3 designers, hiring 5-6 more (~50 total employees)',
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
  designerLinks: [
    { name: 'Matt Herzog', role: 'Head of Design', platform: 'linkedin', url: 'https://www.linkedin.com/in/matt-herzog-5538a8b', description: 'Design leadership at LiveKit, ex-Medium/AKQA' },
    { name: 'Thomas Yuill', role: 'Design Engineer', platform: 'linkedin', url: 'https://ca.linkedin.com/in/thomasyuill', description: 'Ex-Shopify Staff UX Dev, ex-Amazon' },
    { name: 'LiveKit Design', role: 'Design Team', platform: 'blog', url: 'https://design.livekit.io/', description: 'Resources and experiments from the LiveKit Design team' },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    { source: 'glassdoor', content: 'Being part of LiveKit in its formative stages has been one of the most fulfilling experiences. The team is genuinely invested in the mission and in each other -- no ego, just people working hard and with heart.', sentiment: 'positive' as const, rating: 5 },
    { source: 'glassdoor', content: 'Engineers building software stacks for other engineers. Long-term thinking without shortcuts, combined with consistent daily progress.', sentiment: 'positive' as const },
  ],

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
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'LiveKit website', url: 'https://livekit.io/' },
    { title: 'LiveKit Series C (TechCrunch)', url: 'https://techcrunch.com/2026/01/22/voice-ai-engine-and-openai-partner-livekit-hits-1b-valuation/' },
    { title: 'LiveKit Series C blog', url: 'https://blog.livekit.io/livekit-series-c/' },
    { title: 'LiveKit Series B (TechCrunch)', url: 'https://techcrunch.com/2025/04/10/livekits-tools-help-power-real-time-communications/' },
    { title: 'OpenSourceCEO: Russ d\'Sa interview', url: 'https://www.opensourceceo.com/p/russ-dsa-interview' },
    { title: 'LiveKit Design', url: 'https://design.livekit.io/' },
    { title: 'LiveKit Careers (Ashby)', url: 'https://jobs.ashbyhq.com/livekit' },
    { title: 'GetLatka revenue data', url: 'https://getlatka.com/companies/livekit.io' },
  ],
};
