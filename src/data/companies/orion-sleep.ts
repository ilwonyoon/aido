import { Company } from '../types';

export const orionSleep: Company = {
  id: 'orion-sleep',
  name: 'Orion Sleep',
  description: 'AI-enabled mattress cover designed to improve sleep quality.',
  website: 'https://www.orionsleep.com',
    screenshot: '/screenshots/orion-sleep-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/orion-sleep-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'creative-media' as const,

  industries: ['creative-media'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$18M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Eight Sleep',
      description: 'Smart mattress cover with temperature control and sleep insights.',
      whyTheyWin: 'Strong consumer brand and product maturity.',
    },
    {
      name: 'ChiliSleep',
      description: 'Cooling sleep systems and smart mattress toppers.',
      whyTheyWin: 'Established hardware line and distribution.',
    },
    {
      name: 'Sleepme',
      description: 'Smart sleep temperature management products.',
      whyTheyWin: 'Known brand for temperature-based sleep hardware.',
    },
  ],
  marketPosition: 'AI-enabled sleep hardware focused on improved rest and recovery.',
  moat: [
    'Hardware + software integration for sleep improvement',
    'AI-driven personalization of sleep settings',
    'Direct-to-consumer product experience',
  ],
  vsGiants: 'Competes with established smart sleep hardware brands through AI-driven personalization.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI enhances a hardware sleep product rather than being the sole product.',
  aiDesignChallenges: [
    'Designing clear feedback on sleep insights',
    'Balancing automation with user control of settings',
    'Trust-building around health-related recommendations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Improve sleep outcomes with AI-guided hardware personalization.',
  beliefs: [
    'Better sleep improves health and performance',
    'AI can personalize sleep experiences at scale',
    'Hardware and software must work seamlessly together',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Large consumer interest in sleep technology',
    'Clear hardware value proposition',
  ],
  redFlags: [
    'Hardware-intensive business model',
    'Competition from established sleep brands',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Personalization logic for sleep settings',
        'Automation and scheduling behavior',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring sleep quality improvements',
        'User feedback and preference tuning',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Mobile app UI for sleep monitoring',
        'Setup and onboarding flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Consumers seeking better sleep quality',
    secondary: 'Wellness and performance-focused users',
  },
  userProblems: [
    'Sleep quality is inconsistent and hard to improve',
    'Manual temperature adjustments are inconvenient',
    'Limited insight into what affects nightly sleep',
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
    fitScore: 4,
    whyJoin: [
      'Opportunity to design consumer health and sleep UX',
      'Hardware + software integration challenges',
    ],
    whyNot: [
      'Hardware development cycles are slow',
      'Competitive smart sleep category',
    ],
    nextActions: [
      'Monitor for product design roles as the team grows',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Orion Sleep', url: 'https://www.orionsleep.com' },
    { title: 'Orion Sleep on startups.gallery', url: 'https://startups.gallery/companies/orion-sleep' },
  ],
};
