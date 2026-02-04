import { Company } from '../types';

export const gigaml: Company = {
  id: 'gigaml',
  name: 'GigaML',
  description: 'Voice AI agents for consumer-facing companies.',
  website: 'https://giga.ai',
    screenshot: '/screenshots/gigaml-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/gigaml-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2c'],
  category: 'creative-media' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$61M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$61M',
      date: '2025-11',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Replicant',
      description: 'AI voice agents for customer service.',
      whyTheyWin: 'Enterprise adoption and mature voice workflows.',
    },
    {
      name: 'Cresta',
      description: 'AI agent and assist platform for contact centers.',
      whyTheyWin: 'Strong enterprise integrations and AI coaching.',
    },
    {
      name: 'Observe.AI',
      description: 'Contact center intelligence and voice AI tooling.',
      whyTheyWin: 'Large call center analytics footprint.',
    },
  ],
  marketPosition: 'Voice AI agent platform focused on consumer-facing use cases.',
  moat: [
    'Voice-first agent workflows for B2C experiences',
    'Focus on real-time conversational automation',
    'End-to-end voice experience for customers',
  ],
  vsGiants: 'Competes on specialized voice agents rather than generic AI assistants.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Voice AI agents are the core product and differentiator.',
  aiDesignChallenges: [
    'Designing low-latency voice interactions',
    'Handling failures and handoffs gracefully',
    'Building trust in automated voice conversations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Varun Vummadi',
      role: 'Co-founder & CEO',
      background: 'Co-founded GigaML and leads the company.',
    },
    {
      name: 'Esha Manideep',
      role: 'Co-founder & CTO',
      background: 'Co-founded GigaML and leads technical development.',
    },
  ],
  whyBuilding: 'Automate customer conversations with AI voice agents.',
  beliefs: [
    'Voice is a high-impact channel for customer experience',
    'Automation should feel natural and trustworthy',
    'Reliability is essential for voice agent adoption',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Strong funding signal for voice AI',
    'Clear B2C voice agent focus',
  ],
  redFlags: [
    'High bar for voice quality and reliability',
    'Competitive voice AI market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Conversation flow logic and fallbacks',
        'Agent behavior tuning',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Monitoring response quality and latency',
        'Customer satisfaction measurement loops',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agent configuration dashboards',
        'Analytics and QA tooling for voice teams',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Customer support and CX teams',
    secondary: 'Consumer platforms with high call volume',
  },
  userProblems: [
    'Human call centers are expensive to scale',
    'Voice automation often feels robotic',
    'Quality assurance for calls is manual',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'AI-native voice experience design',
      'Clear product focus and strong funding',
    ],
    whyNot: [
      'High expectations for voice quality',
      'Competitive contact center tooling space',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Giga', url: 'https://www.ycombinator.com/companies/giga' },
    { title: 'GigaML', url: 'https://giga.ai' },
    { title: 'GigaML funding (Globe Newswire)', url: 'https://www.globenewswire.com/news-release/2025/11/06/3025056/0/en/GigaML-Raises-61-Million-to-Build-the-Next-Generation-of-Voice-AI-Agents.html' },
    { title: 'GigaML on startups.gallery', url: 'https://startups.gallery/companies/gigaml' },
  ],
};
