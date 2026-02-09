import { Company } from '../types';

export const wabi: Company = {
  id: 'wabi',
  name: 'Wabi',
  description: 'AI-native consumer app focused on personal intelligence.',
  website: 'https://wabi.ai',
  screenshot: '/screenshots/wabi-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/wabi-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2c'],
  category: 'ai-models' as const,

  industries: ['other'],

  // Business
  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$20M',
      date: '2024-10',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Rewind',
      description: 'Personal memory and search assistant.',
      whyTheyWin: 'Strong personal knowledge base UX.',
    },
    {
      name: 'Mem',
      description: 'AI-first notes and personal knowledge management.',
      whyTheyWin: 'Early adopter community and note-taking workflows.',
    },
    {
      name: 'Notion AI',
      description: 'AI features inside a workspace for notes and docs.',
      whyTheyWin: 'Large user base and workflow integration.',
    },
  ],
  marketPosition: 'Consumer AI product focused on personal intelligence and memory.',
  moat: [
    'Consumer-first AI experience',
    'Focus on personal knowledge workflows',
    'Potential personalization data flywheel',
  ],
  vsGiants: 'Competes on focused personal intelligence UX rather than broad productivity suites.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI is the core product and user experience.',
  aiDesignChallenges: [
    'Designing trust for personal AI assistants',
    'Privacy and data transparency in personal workflows',
    'Balancing automation with user control',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Eugenia Kuyda',
      role: 'Founder & CEO',
      background: 'Previously founded Replika (AI companion app, launched 2016). Created Wabi as a "YouTube for apps" platform where prompts create shareable mini-apps. Backed by a16z.',
    },
  ],
  whyBuilding: 'Create a personal AI that helps users remember and organize their lives.',
  beliefs: [
    'Personal AI should be trustworthy and private',
    'Users need better tools for memory and organization',
    'AI can reduce cognitive load in daily work',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Strong pre-seed funding signal',
    'Clear consumer AI vision',
  ],
  redFlags: [
    'Consumer AI adoption can be volatile',
    'Privacy expectations are extremely high',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '1-10 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Personal AI assistant behavior and guardrails',
        'Context retrieval and summarization flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'User trust and accuracy feedback loops',
        'Quality evaluation for personal insights',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Conversational UI and personal dashboards',
        'Onboarding and privacy controls',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Early adopters of personal AI assistants',
    secondary: 'Knowledge workers managing lots of personal context',
  },
  userProblems: [
    'People forget details across meetings and daily work',
    'Personal knowledge is scattered across tools',
    'Existing assistants lack deep personal context',
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
      'Consumer AI product with deep UX challenges',
      'Opportunity to design trust and privacy flows',
    ],
    whyNot: [
      'High privacy expectations',
      'Unclear product-market fit at early stage',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:05:37',
  sources: [
    { title: 'Source', url: 'https://wabi.ai' },
    { title: 'Source', url: 'https://startups.gallery/companies/wabi' }
  ],
};
