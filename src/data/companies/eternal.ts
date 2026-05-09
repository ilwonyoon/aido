import { Company } from '../types';

export const eternal: Company = {
  id: 'eternal',
  name: 'Eternal',
  description:
    'Longevity care provider for athletes that combines diagnostics, medical care, and personalized performance programs.',
  website: 'https://www.eternal.co',
  headquarters: 'San Francisco, CA, USA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2c', 'prosumer'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$13.25M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$13.25M',
      date: '2025-01',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'Function Health',
      description: 'Longevity diagnostics and lab testing platform.',
      whyTheyWin: 'Broad diagnostic panel and strong consumer brand.',
    },
    {
      name: 'Superpower',
      description: 'Longevity-focused membership with diagnostics and coaching.',
      whyTheyWin: 'Personalized coaching and membership model at scale.',
    },
    {
      name: 'Biograph',
      description: 'Preventive health and longevity clinics for high-performance clients.',
      whyTheyWin: 'Premium in-clinic experience and high-end positioning.',
    },
  ],
  marketPosition:
    'Athlete-first longevity clinic combining in-person diagnostics, telehealth, and personalized performance programming.',
  moat: [
    'Athlete-focused positioning in a crowded longevity market',
    'In-person performance centers paired with ongoing care',
    'Founder brand and early investor support in health + fitness',
  ],
  vsGiants:
    'Competes with longevity clinics by specializing in athletes and integrating performance-oriented care programs.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI appears as a supporting capability for diagnostics and personalization, but the core product is healthcare delivery.',
  aiDesignChallenges: [
    'Designing clear, interpretable health dashboards for athletes',
    'Personalizing care plans while maintaining medical trust',
    'Integrating in-person and telehealth touchpoints seamlessly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alex Mather',
      role: 'Co-founder & CEO',
      background: 'Co-founder of The Athletic and former product leader at Strava.',
    },
  ],
  whyBuilding:
    'Eternal is building longevity care for athletes who want proactive diagnostics, better performance, and long-term health outcomes.',
  beliefs: [
    'Preventive health should be proactive and performance-driven',
    'Athletes need care models built around their training realities',
    'Combining diagnostics with coaching improves long-term outcomes',
  ],
  greenFlags: ['Seed round led by Lightspeed', 'Expansion beyond a single clinic location', 'Clear athlete-focused niche'],
  redFlags: ['Operationally intensive healthcare delivery', 'Regulatory and compliance complexity', 'High cost of in-person clinics'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'Care plan automation and member intake flows',
        'Data collection and diagnostics coordination',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Health metric tracking and trend evaluation',
        'Feedback loops between clinicians and athletes',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Member app for diagnostics, scheduling, and insights',
        'Clinic experience design and check-in flows',
        'Telehealth visit UX and follow-up communications',
      ],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'Competitive and endurance athletes seeking longevity care',
    secondary: 'Health-conscious consumers focused on performance',
  },
  userProblems: [
    'Athletes lack proactive, continuous healthcare tailored to performance',
    'Diagnostics and medical insights are fragmented across providers',
    'Personalized training and recovery guidance is hard to access',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Clear athlete-first niche', 'Brand recognition from The Athletic founder'],
    whyNot: ['Healthcare operations are complex', 'AI is not core to product differentiation'],
    nextActions: ['Watch for product app launches and clinic expansion'],
  },

  // Meta
  lastUpdated: '2026-02-10T00:00:00',
  sources: [
    { title: 'Eternal - Official Website', url: 'https://www.eternal.co' },
    { title: 'Eternal FAQ', url: 'https://www.eternal.co/faq' },
    { title: 'Eternal Jobs (Lever)', url: 'https://jobs.lever.co/eternal' },
    { title: 'Eternal Seed Round (Sports Business Journal)', url: 'https://www.sportsbusinessjournal.com/Articles/2025/01/07/athlete-longevity-startup-eternal-seed-round' },
    { title: 'Eternal Seed Round (Fitt Insider)', url: 'https://insider.fitt.co/eternal-seed/' },
  ],
};
