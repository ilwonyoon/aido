import { Company } from '../types';

export const conversion: Company = {
  id: 'conversion',
  name: 'Conversion',
  description: 'AI-native marketing automation platform helping modern software companies automate acquisition, activation, and retention workflows.',
  website: 'https://www.conversion.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  screenshot: '/screenshots/conversion-screenshot.png',
    ogImage: '/screenshots/conversion-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$28M',
  revenue: '$5M+ ARR',
  growth: 'Current role listing says Conversion is growing quickly and powering go-to-market for 4,000+ customers.',
  runway: 'Unknown',
  customers: '4,000+ customers',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'AI-native marketing automation platform for software companies',
  moat: [
    'Workflow automation across acquisition, activation, and retention',
    'AI-native product surface for GTM teams',
    'Early revenue and customer scale in a focused B2B market',
  ],
  vsGiants: 'Competes with marketing automation incumbents by rebuilding GTM workflows around AI agents and product-led automation.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is a core differentiator for automating modern GTM workflows, but the product still sits in the established marketing automation category.',
  aiDesignChallenges: [
    'Designing AI-generated GTM workflows that remain controllable',
    'Helping growth teams understand funnel automation outcomes',
    'Balancing fast campaign creation with brand, targeting, and compliance constraints',
  ],

  // Founders & Vision
  founders: [
    { name: 'Neil Tewari', role: 'Co-founder & CEO', background: 'UC Berkeley dropout; started Conversion at age 19 with multiple pivots before focusing on marketing automation.' },
    { name: 'James Jiao', role: 'Co-founder & CTO', background: 'UC Berkeley dropout; met Neil at UC Berkeley and co-built the AI marketing automation platform.' },
  ],
  whyBuilding: 'Conversion is rebuilding outdated marketing automation around a single AI-native interface for acquisition, activation, and retention.',
  beliefs: [
    'Marketing workflows should be automated end to end',
    'Modern software companies need faster GTM experimentation',
    'AI should collapse disconnected enrichment, messaging, and workflow tools into one product',
  ],
  greenFlags: [
    'Founding Product Designer role with broad ownership',
    '$28M+ raised and $5M+ ARR cited in role listing',
    '4,000+ customers cited in role listing',
  ],
  redFlags: [
    'Marketing automation is a crowded category',
    'On-site San Francisco office expectation',
    'Role may skew toward fast GTM execution and dense campaign tooling',
  ],

  // Design Opportunity
  designTeam: { teamSize: 'Small team; hiring Founding Product Designer' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['AI-generated GTM workflow design', 'Campaign automation and personalization logic', 'Funnel orchestration across acquisition, activation, and retention'] },
    evaluation: { level: 'high', tasks: ['Conversion and activation analytics', 'Workflow performance review', 'Experimentation feedback loops'] },
    interface: { level: 'high', tasks: ['Marketing automation workspace', 'Email/editor and campaign surfaces', 'Design system for GTM operators'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Growth, marketing, and GTM teams at modern software companies' },
  userProblems: [
    'Marketing workflows are fragmented across enrichment, messaging, and analytics tools',
    'Funnels are hard to diagnose and automate',
    'Growth teams need faster personalized campaign iteration',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/conversion/e8cfbab1-d619-44fe-a2de-0d6d888daa1b',
      compensation: '$150K-$300K + equity',
      aboutRole: 'Own product design for an AI-native marketing automation platform across web applications, email/editor workflows, and GTM surfaces.',
      whyInteresting: 'Founding design role at a revenue-generating AI-native B2B platform with dense workflow and experimentation UX.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing frames the designer as foundational to how Conversion automates marketing entirely.',
      url: 'https://jobs.ashbyhq.com/conversion/e8cfbab1-d619-44fe-a2de-0d6d888daa1b',
    },
  ],

  // My Tracking
  tracking: {
    status: 'applied',
    fitScore: 7,
    whyJoin: [
      'Founding Product Designer role with clear product ownership',
      '$5M+ ARR and 4,000+ customer signals',
      'AI-native GTM workflows create strong product design surface',
    ],
    whyNot: [
      'Crowded marketing automation category',
      'Potentially campaign-heavy rather than deep AI interaction design',
      'On-site San Francisco expectation',
    ],
    nextActions: [
      'Prepare recruiter screen notes for May 14, 2026',
      'Clarify role scope, design team setup, and onsite expectations',
      'Prepare GTM workflow, campaign tooling, and AI product design examples',
    ],
    notes: 'Recruiter reached out quickly; recruiter call scheduled for 2026-05-14.',
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '$5M+ ARR cited in current role listing',
    userGrowth: '4,000+ customers cited in current role listing',
    signals: ['$28M+ raised', '$5M+ ARR', '4,000+ customers', 'Hiring Founding Product Designer'],
    tam: 'Marketing automation and GTM workflow software market',
    marketShare: 'Early',
    ceiling: 'High if Conversion becomes the AI-native operating layer for software-company GTM.',
    tailwinds: ['AI adoption in sales and marketing', 'Growth teams need faster experimentation', 'Legacy marketing automation stacks are fragmented'],
    headwinds: ['Incumbents can add AI features', 'Attribution and data quality remain hard', 'GTM tools can become crowded and workflow-heavy'],
    moatType: 'switching-costs',
    moatStrength: 'Medium if workflows, data, and campaign history become embedded in customer GTM operations.',
  },

  // Meta
  lastUpdated: '2026-05-09',
  sources: [
    { title: 'Conversion Website', url: 'https://www.conversion.ai' },
    { title: 'Founding Product Designer at Conversion', url: 'https://jobs.ashbyhq.com/conversion/e8cfbab1-d619-44fe-a2de-0d6d888daa1b' },
    { title: 'startups.gallery Conversion profile', url: 'https://startups.gallery/companies/conversion' }
  ],
};
