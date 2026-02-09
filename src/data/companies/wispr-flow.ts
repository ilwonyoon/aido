import { Company } from '../types';

export const wisprFlow: Company = {
  id: 'wispr-flow',
  name: 'Wispr Flow',
  description: 'Immersive voice keyboard for fast, hands-free typing and dictation.',
  website: 'https://www.wispr.ai',
  screenshot: '/screenshots/wispr-flow-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/wispr-flow-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['audio-generation'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    { stage: 'Unknown', amount: '$25M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Apple Dictation',
      description: 'Built-in voice dictation for Apple devices.',
      whyTheyWin: 'Default distribution and OS-level integration.',
    },
    {
      name: 'Microsoft SwiftKey',
      description: 'Mobile keyboard with voice input and AI features.',
      whyTheyWin: 'Large installed base and cross-platform support.',
    },
    {
      name: 'Aqua Voice',
      description: 'Voice typing tool focused on fast dictation.',
      whyTheyWin: 'Strong speed positioning for power users.',
    },
  ],
  marketPosition: 'Voice-first keyboard focused on immersive, fast dictation workflows.',
  moat: [
    'Voice-first UX optimized for speed and accuracy',
    'Device-level keyboard integration focus',
    'Positioning for power-user workflows',
  ],
  vsGiants: 'Competes on dictation quality and experience beyond built-in OS keyboards.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator for high-accuracy voice typing.',
  aiDesignChallenges: [
    'Low-latency speech-to-text feedback loops',
    'Error correction flows for voice input',
    'Designing user trust in transcription accuracy',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tanay Kothari',
      role: 'Co-founder & CEO',
      background: 'Previously Head of Engineering & Product at Cerebra. Building Wispr to make voice a primary input method for knowledge work.',
    },
    {
      name: 'Sahaj Garg',
      role: 'Co-founder & CTO',
      background: 'Co-founded Wispr to build the voice operating system. Leading technical development of the Flow dictation platform.',
    },
  ],
  whyBuilding: 'Make voice typing fast and natural for everyday productivity.',
  beliefs: [
    'Voice can be a primary input method for knowledge work',
    'Accuracy and speed drive adoption of dictation tools',
    'Immersive UX reduces friction for voice-first workflows',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear focus on a specific input workflow',
    'Product momentum signaled by Series A stage',
  ],
  redFlags: [
    'Platform-level incumbents can bundle voice input for free',
    'Accuracy expectations are extremely high for users',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice input handling and intent parsing',
        'Error correction and undo logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring transcription quality and speed',
        'User feedback loops for correction accuracy',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Keyboard UI and interaction patterns',
        'Cross-device voice input affordances',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Knowledge workers who type frequently and want faster input',
    secondary: 'Writers, students, and mobile-first professionals',
  },
  userProblems: [
    'Typing on mobile and laptop is slow for long-form input',
    'Voice dictation is inaccurate and hard to correct',
    'Switching between keyboard and voice breaks flow',
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
    fitScore: 6,
    whyJoin: [
      'Strong UX challenges in voice input',
      'Opportunity to shape an emerging interface category',
    ],
    whyNot: [
      'OS-level incumbents can out-distribute features',
      'Accuracy expectations create high product risk',
    ],
    nextActions: [
      'Monitor careers page for product design openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Source', url: 'https://www.wispr.ai' },
    { title: 'Source', url: 'https://www.wispr.ai/careers' },
    { title: 'Source', url: 'https://startups.gallery/companies/wispr-flow' }
  ],
};
