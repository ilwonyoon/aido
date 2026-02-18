import { Company } from '../types';

export const superpower: Company = {
  id: 'superpower',
  name: 'Superpower',
  description: 'AI-powered preventative health platform offering 100+ biomarker testing, concierge physicians, and 24/7 AI health guidance.',
  website: 'https://www.superpower.com',
  screenshot: '/screenshots/superpower-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',
  ogImage: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a46596a7cc1743771ce6f3_image%20(10).avif',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'text-assistant'],
  markets: ['b2c', 'prosumer'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: '~$300M (post-money, 2025)',
  totalFunding: '$34M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$4M',
      date: '2024-05',
      leadInvestors: ['Susa Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2025-04',
      valuation: '~$300M',
      leadInvestors: ['Forerunner Ventures'],
    },
  ],
  revenue: '~$18M ARR (estimated)',
  growth: 'Unknown',
  runway: '18+ months',
  customers: '150K+ waitlist; membership-based',

  // Competition
  competitors: [
    {
      name: 'Function Health',
      description: 'Preventative lab testing with 100+ biomarkers at $499/year',
      whyTheyWin: 'Backed by Mark Hyman; strong brand in wellness community',
    },
    {
      name: 'InsideTracker',
      description: 'Biomarker analysis with DNA and wearable integration',
      whyTheyWin: 'Longer track record (founded 2009); deep science credibility',
    },
    {
      name: 'Bionic Health',
      description: 'Virtual health consultations with biomarker analysis',
      whyTheyWin: 'Lower price point targeting busy professionals',
    },
  ],
  marketPosition: 'Consumer-first AI health super app combining diagnostics, therapeutics, and ongoing clinical care',
  moat: [
    'Brand-first approach: Awwwards-winning design builds consumer trust',
    'AI knowledge graph distilling medical expertise for personalized guidance',
    'Full-stack health platform (testing + treatment + ongoing care)',
  ],
  vsGiants: 'Traditional healthcare incumbents are reactive; Superpower is proactive and consumer-grade in UX',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — 24/7 AI health advisor powered by a self-evolving medical knowledge graph, personalizing recommendations across 100+ biomarkers.',
  aiDesignChallenges: [
    'Trust design: communicating AI health recommendations responsibly without replacing physician judgment',
    'Data visualization: making 100+ biomarkers across 21 categories understandable to consumers',
    'Personalization UX: designing for individualized health journeys with varying health literacy levels',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jacob Peters',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur. Nearly lost his life after $2M in medical bills from years of undiagnosed conditions.',
    },
    {
      name: 'Max Marchione',
      role: 'Co-founder & COO',
      background: 'Decades of misdiagnoses from 20+ doctors. Leads brand and commercialization.',
    },
    {
      name: 'Kevin Unkrich',
      role: 'Co-founder & CTO',
      background: 'Lost his best friend to a brain tumor days before a scheduled MRI. Drives the technical platform.',
    },
  ],
  whyBuilding: 'All three founders experienced life-threatening healthcare failures firsthand. They believe the system is designed to manage sickness, not optimize health.',
  beliefs: [
    'Healthcare should enhance capability, not just treat illness',
    'AI-personalized care beats generalized protocols',
    'Consumer-grade design is essential to health engagement',
  ],
  designPhilosophy: 'Brand-first approach — design is viewed as the best investment, amplifying trust, hiring, and organic reach. Partnered with Daybreak Studio for visual identity.',
  greenFlags: [
    '$30M Series A led by Forerunner at ~$300M valuation',
    'Awwwards-winning design quality signals strong design culture',
    'All founders deeply motivated by personal health failures',
    '150K+ waitlist shows strong consumer demand',
  ],
  redFlags: [
    'Glassdoor culture ratings are low (1.8 culture, 2.0 work-life balance)',
    'Competitive DTC health market with Function Health and InsideTracker',
    'High price point ($499/year) limits addressable market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~5-8 (5 design roles open on Ashby, including Senior PD)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI health recommendation logic and personalization rules',
        'Biomarker threshold alerts and action triggers',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Health outcome tracking and improvement metrics',
        'AI recommendation quality and user trust scoring',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Consumer health dashboard with 100+ biomarker visualization',
        'Mobile app design for 24/7 AI health advisor',
        'Onboarding flows for health-anxious consumers',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Health-conscious consumers seeking preventative care and longevity optimization',
    secondary: 'Biohackers and wellness enthusiasts willing to pay premium for comprehensive testing',
  },
  userProblems: [
    'Traditional physicals test only a fraction of relevant biomarkers',
    'Reactive healthcare catches problems too late — after symptoms appear',
    'Health data is fragmented across providers with no unified view',
    'Accessing preventative medicine and longevity treatments is expensive and inaccessible',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Daybreak Studio',
      role: 'Design Partner',
      platform: 'blog',
      url: 'https://www.behance.net/gallery/188655973/Superpower',
      description: 'Crafted Superpower\'s visual identity — "an optimistic identity celebrating human body potential alongside technological feats"',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'negative',
      rating: 2.0,
      content: 'Low culture ratings (1.8 culture, 2.0 WLB). Employees cite poor internal communication and low stability feeling.',
      url: 'https://www.glassdoor.com/Reviews/Superpower-Inc-Reviews-E135457.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Company emphasizes "insanely high talent bar" and team members actively practice the health-first ethos they sell.',
      url: 'https://jobs.ashbyhq.com/superpower',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Founding team includes former YC founders, Harvard Medical School, and Goldman Sachs alumni. Strong pedigree.',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '~$18M ARR (estimated, early revenue stage)',
    userGrowth: '150K+ waitlist pre-launch',
    signals: [
      '$30M Series A at ~$300M valuation (Apr 2025)',
      '5 design roles open — rapid team scaling',
      'Celebrity investors: Winklevoss twins, Logan Paul, Giannis',
    ],
    tam: '$100B+ (preventative health and wellness market)',
    marketShare: '<1% — very early innings',
    ceiling: 'Massive upside if DTC preventative health becomes mainstream',
    tailwinds: [
      'Longevity movement gaining mainstream traction',
      'Consumer distrust of reactive healthcare growing',
      'AI-driven personalization improving health outcomes',
    ],
    headwinds: [
      'High price point limits mass-market adoption',
      'Regulatory risk around DTC health recommendations',
      'Function Health and InsideTracker are well-funded competitors',
    ],
    moatType: 'brand',
    moatStrength: 'Moderate: Awwwards-winning design + celebrity backing builds trust, but product moat is still forming',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level B AI-native health product with strong design culture',
      'Senior PD role open — chance to shape consumer health UX',
      'Awwwards-winning design quality signals design is valued',
    ],
    whyNot: [
      'Glassdoor reviews suggest cultural issues and low WLB',
      'On-site only in SF — no remote flexibility',
      'Healthcare vertical may limit design scope vs pure AI products',
    ],
    nextActions: [
      'Monitor Glassdoor reviews for culture trend changes',
      'Review Senior PD job posting for detailed requirements',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Superpower Series A Announcement', url: 'https://superpower.com/series-a' },
    { title: 'TechCrunch — Superpower preventative health', url: 'https://techcrunch.com/2025/04/22/superpower-wants-to-help-people-detect-and-address-health-issues-before-symptoms-appear/' },
    { title: 'Superpower $4M Pre-Seed (BusinessWire)', url: 'https://www.businesswire.com/news/home/20240521159174/en' },
    { title: 'Superpower Careers (Ashby)', url: 'https://jobs.ashbyhq.com/superpower' },
    { title: 'Superpower Manifesto', url: 'https://superpower.com/manifesto' },
  ],
};
