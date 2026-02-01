import { Company } from '../types';

export const vapi: Company = {
  id: 'vapi',
  name: 'Vapi',
  description:
    'Voice AI platform for building and deploying real-time voice agents.',
  website: 'https://vapi.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/vapi-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2025-11',
      leadInvestors: ['Kleiner Perkins'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and companies building voice AI applications.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $20M Series A to scale voice AI platform',
      'Growing demand for real-time voice agents',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Voice AI adoption grows as enterprises automate call workflows.',
    tailwinds: [
      'Rising adoption of voice assistants',
      'Demand for real-time AI interactions',
      'Enterprise call automation needs',
    ],
    headwinds: [
      'Accuracy and reliability requirements',
      'Competition from large AI platforms',
      'Regulatory and privacy considerations',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Vapi becomes a default voice AI platform for developers.',
  },

  // Competition
  competitors: [
    {
      name: 'Twilio Voice AI',
      description: 'Voice infrastructure with AI capabilities.',
      whyTheyWin: 'Telecom infrastructure scale.',
    },
    {
      name: 'Retell AI',
      description: 'Voice AI agents for businesses.',
      whyTheyWin: 'Focus on call automation workflows.',
    },
    {
      name: 'AssemblyAI',
      description: 'Speech and voice AI APIs.',
      whyTheyWin: 'Strong speech-to-text infrastructure.',
    },
  ],
  marketPosition: 'Developer platform for building and deploying voice AI agents.',
  moat: [
    'Real-time voice agent infrastructure',
    'Developer-first APIs and tooling',
    'Potential usage data flywheel',
  ],
  vsGiants: 'Competes by focusing on developer experience vs broad AI platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Vapi provides AI voice agent infrastructure as the core product.',
  aiDesignChallenges: [
    'Latency and reliability in voice interactions',
    'Agent control and escalation UX',
    'Monitoring and analytics for voice quality',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jordan Dearsley',
      role: 'Co-Founder & CEO',
      background: 'Co-founded Vapi to build developer-first voice AI infrastructure.',
    },
    {
      name: 'Nikhil Gupta',
      role: 'Co-Founder',
      background: 'Co-founded Vapi to build the voice AI platform.',
    },
  ],
  whyBuilding:
    'Make it easy for developers to build real-time voice AI applications.',
  beliefs: [
    'Voice AI will reshape customer interactions',
    'Developers need reliable real-time voice APIs',
    'Latency and quality are critical for adoption',
  ],
  designPhilosophy: 'Developer-first tooling with real-time reliability and observability.',
  greenFlags: [
    'Strong funding to scale voice AI',
    'Growing demand for voice automation',
  ],
  redFlags: [
    'High reliability expectations',
    'Competitive AI voice market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice workflow orchestration',
        'Latency and reliability controls',
        'Fallback and escalation logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Conversation quality scoring',
        'Latency and uptime analytics',
        'Feedback loops for voice performance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer console UX',
        'Agent configuration UI',
        'Monitoring dashboards',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building voice AI apps',
    secondary: 'Companies automating call workflows',
  },
  userProblems: [
    'Voice AI is hard to build and deploy reliably',
    'Latency and quality issues degrade user trust',
    'Operational visibility into voice agents is limited',
    'Integration with telephony systems is complex',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Real-time voice AI UX challenges',
      'Developer infrastructure product design',
    ],
    whyNot: [
      'Reliability requirements are high',
      'Competitive voice AI market',
    ],
    nextActions: [
      'Track product adoption',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:10:00',
  sources: [
    { title: 'Vapi Series A (Business Wire)', url: 'https://www.businesswire.com/news/home/20251112937314/en/Vapi-Raises-%2420M-Series-A-to-Scale-Voice-AI-Platform' },
    { title: 'Vapi YC jobs page', url: 'https://www.ycombinator.com/jobs/role/7d1b4200-80e4-4934-9c8f-cd208cc677fa' },
  ],
};
