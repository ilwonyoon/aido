import { Company } from '../types';

export const sierra: Company = {
  id: 'sierra',
  name: 'Sierra',
  description:
    'AI customer experience platform that helps enterprises deploy AI agents for support and service.',
  website: 'https://www.sierra.ai/',
    screenshot: '/screenshots/sierra-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/sierra-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['enterprise'],
  industries: ['infrastructure', 'sales-marketing'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$350M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$110M',
      date: '2024-10',
      leadInvestors: ['Benchmark'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers:
    'Enterprises including SiriusXM, WeightWatchers, Sonos, and HelloFresh.',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $110M Series A at $4.5B valuation',
      'Enterprise customer adoption for AI support agents',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI customer service adoption grows as enterprises scale support automation.',
    tailwinds: [
      'Rising demand for AI customer support',
      'Enterprises seeking cost reduction in service operations',
      'Improvements in AI agent quality',
    ],
    headwinds: [
      'Trust and reliability requirements',
      'Enterprise procurement cycles',
      'Competition from CX platforms and AI agents',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate if Sierra becomes the enterprise AI support platform.',
  },

  // Competition
  competitors: [
    {
      name: 'Intercom',
      description: 'Customer support platform with AI features.',
      whyTheyWin: 'Large customer base and product suite.',
    },
    {
      name: 'Zendesk',
      description: 'Customer support and CX platform.',
      whyTheyWin: 'Enterprise adoption and integrations.',
    },
    {
      name: 'Ada',
      description: 'AI customer support automation platform.',
      whyTheyWin: 'Automation focus and CX workflows.',
    },
  ],
  marketPosition: 'Enterprise AI customer experience platform for support agents.',
  moat: [
    'Enterprise-ready AI agents',
    'Integration with CX systems',
    'Customizable workflows for support operations',
  ],
  vsGiants: 'Competes by offering AI-native support automation vs legacy CX platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Sierra is built around AI agents for customer service.',
  aiDesignChallenges: [
    'Trust and accuracy in AI support interactions',
    'Escalation and human handoff UX',
    'Monitoring and evaluation of AI agent quality',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Bret Taylor',
      role: 'Co-Founder & CEO',
      background: 'Former Salesforce co-CEO and Google Maps product leader.',
    },
    {
      name: 'Clay Bavor',
      role: 'Co-Founder & President',
      background: 'Former Google Labs VP and led Google AR/VR.',
    },
  ],
  whyBuilding:
    'Enable enterprises to deliver better customer experiences with AI agents.',
  beliefs: [
    'AI agents can transform customer support',
    'Human handoff is essential for trust',
    'Enterprise-grade reliability is mandatory',
  ],
  designPhilosophy: 'Human-centered AI support with clear transparency.',
  greenFlags: [
    'Strong enterprise adoption signals',
    'Significant Series A funding',
  ],
  redFlags: [
    'High expectations for reliability',
    'Competitive CX platform market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '201-500 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow configuration',
        'Escalation and handoff design',
        'Permissions and safety controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance analytics',
        'Quality monitoring dashboards',
        'Customer satisfaction tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Support admin consoles',
        'Conversation review UI',
        'Integration setup flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise CX and support teams',
    secondary: 'Contact center and operations leaders',
  },
  userProblems: [
    'Support teams are overwhelmed by ticket volume',
    'AI agents need reliable escalation and oversight',
    'Quality and compliance are critical in customer interactions',
    'Integration with existing CX systems is complex',
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
      'Enterprise AI agent UX challenges',
      'High-impact customer support automation',
    ],
    whyNot: [
      'High reliability bar',
      'Enterprise sales cycles',
    ],
    nextActions: [
      'Track product launches',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T13:40:00',
  sources: [
    { title: 'Sierra website', url: 'https://www.sierra.ai/' },
    { title: 'Sierra Series A (Business Wire)', url: 'https://www.businesswire.com/news/home/20241015005939/en/Sierra-Raises-110M-Series-A-at-4.5B-Valuation-to-Bring-AI-Customer-Service-to-Enterprises' },
  ],
};
