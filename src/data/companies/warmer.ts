import { Company } from '../types';

export const warmer: Company = {
  id: 'warmer',
  name: 'Warmer',
  description: 'A new kind of advice.',
  website: 'https://warmer.com',
  screenshot: '/screenshots/warmer-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6818fe50ac7d407eea59da90/68cacb417260d10d4a9b46c8_WarmerOGImage.png',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2c'],
  industries: ['healthcare'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$10.4M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Consumers seeking advice and guidance.',

  // Competition
  competitors: [
    {
      name: 'Calm',
      description: 'Mental wellness and meditation app.',
      whyTheyWin: 'Large consumer brand and content library.',
    },
    {
      name: 'Headspace',
      description: 'Meditation and mindfulness platform.',
      whyTheyWin: 'Strong brand and partnerships.',
    },
    {
      name: 'Wysa',
      description: 'AI mental health chatbot.',
      whyTheyWin: 'AI-first product focus in wellness.',
    },
  ],
  marketPosition: 'Consumer advice and wellness guidance experience.',
  moat: [
    'Personalized guidance experience',
    'Focus on trust and user outcomes',
    'Potential for daily engagement',
  ],
  vsGiants: 'Competes by focusing on advice-driven guidance rather than generic content libraries.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may support guidance, but product is not purely AI-native.',
  aiDesignChallenges: [
    'Trust and safety in advice experiences',
    'Clarity around AI vs human guidance',
    'Balancing empathy with accuracy',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'People want clearer guidance and advice for health and life decisions.',
  beliefs: [
    'Advice should be more accessible',
    'Users need trust and empathy in guidance tools',
    'Wellness tools should fit daily life',
  ],
  greenFlags: [
    'Large consumer demand for advice and wellness',
  ],
  redFlags: [
    'Highly competitive wellness app market',
    'Regulatory and safety risk in advice',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Advice flow logic', 'User guidance paths'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['User outcomes tracking', 'Feedback loops'],
    },
    interface: {
      level: 'high',
      tasks: ['Conversational UI', 'Personalized recommendations'],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Consumers seeking advice',
    secondary: 'Wellness-focused users',
  },
  userProblems: [
    'Advice sources are fragmented and overwhelming',
    'Lack of trusted, personalized guidance',
    'Difficulty building consistent wellness habits',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Consumer product with strong UX focus'],
    whyNot: ['Wellness market is crowded'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Seed-stage wellness startup'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Advice and wellness market remains fragmented.',
    tailwinds: ['Rising mental wellness demand', 'Consumer openness to guidance tools'],
    headwinds: ['Retention challenges in wellness apps', 'Regulatory scrutiny on advice'],
    moatType: 'brand',
    moatStrength: 'Early brand positioning around advice.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:30:00',
  sources: [
    { title: 'Warmer', url: 'https://warmer.com' },
    { title: 'Warmer on startups.gallery', url: 'https://startups.gallery/companies/warmer' },
  ],
};
