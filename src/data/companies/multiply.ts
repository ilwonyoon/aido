import { Company } from '../types';

export const multiply: Company = {
  id: 'multiply',
  name: 'Multiply',
  description: 'AI-native media agency for B2B companies, building self-learning ads for Google, LinkedIn, and emerging AI ad channels.',
  website: 'https://www.gomultiply.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  subcategories: ['sales-marketing'],
  industries: ['sales-marketing'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$9.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$9.5M',
      date: '2026-03',
      leadInvestors: ['Mayfield'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Pre-launch partners generated more than $25M in sales pipeline per company announcement.',
  runway: 'Seed-stage after $9.5M raise',
  customers: 'B2B companies running paid media on Google and LinkedIn.',

  competitors: [
    { name: 'Traditional B2B paid media agencies', description: 'Human-led agencies managing campaign strategy and creative.', whyTheyWin: 'Relationships and service depth.' },
    { name: 'Metadata.io', description: 'B2B paid media automation platform.', whyTheyWin: 'Established B2B demand generation platform.' },
    { name: 'Mutiny', description: 'AI-assisted B2B website personalization and conversion platform.', whyTheyWin: 'B2B growth workflow focus.' },
  ],
  marketPosition: 'Hybrid AI media agency combining AI execution with human media strategy for B2B paid acquisition.',
  moat: [
    'AI plus expert-operator loop for campaign iteration',
    'Self-learning ads that continuously update messaging, audiences, and creative',
    'Early customer pipeline claims and B2B-specific positioning',
  ],
  vsGiants: 'Multiply is more services-plus-software than self-serve ad platform, focused on B2B performance workflows around Google, LinkedIn, and future AI ad channels.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to campaign generation and optimization, but the product is currently a hybrid managed-service workflow.',
  aiDesignChallenges: [
    'Designing AI-assisted campaign strategy and creative workflows',
    'Helping marketers trust automated ad iteration',
    'Surfacing performance, attribution, and pipeline impact clearly',
  ],

  founders: [
    { name: 'Matt Jayson', role: 'Co-Founder & CEO', background: 'Co-founder leading Multiply; company announcement names him as CEO.' },
    { name: 'Ashish Warty', role: 'Co-Founder & CTO', background: 'Co-founder named in funding coverage; background includes Google, Brex, and Dropbox references in secondary coverage.' },
  ],
  whyBuilding: 'Traditional ad campaigns decay after launch; Multiply aims to make B2B ads continuously improve through AI and expert operators.',
  beliefs: [
    'B2B paid media can become a self-learning system',
    'AI should continuously test creative, messaging, audiences, and bids',
    'Human media strategists still matter for judgment and accountability',
  ],
  greenFlags: [
    'First designer opportunity at 13-person company',
    'Role spans product, brand, AI creative, and design systems',
    'Clear founder-level design influence',
  ],
  redFlags: [
    'Seed-stage and only $9.5M raised',
    'Role includes brand/ads execution, not just product design',
    'No public compensation range found',
  ],

  designTeam: {
    teamSize: 'First designer; job states the hire would be employee #14.',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Campaign workflow UX', 'AI creative generation strategy', 'Ad iteration loops'] },
    evaluation: { level: 'high', tasks: ['Ad performance dashboards', 'Pipeline attribution', 'Creative testing feedback'] },
    interface: { level: 'high', tasks: ['Product UX', 'Brand system', 'Customer ad assets'] },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'B2B marketing and growth teams running paid acquisition',
    secondary: 'Founders and revenue leaders at high-growth B2B companies',
  },
  userProblems: [
    'Paid ads decay quickly after launch',
    'B2B marketers struggle to keep messaging, creative, and audience tests fresh',
    'Attribution to pipeline is hard to understand and optimize',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Founding Designer (San Francisco)',
      location: 'San Francisco, CA (On-site)',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/multiplyai/764df726-0ee9-43bb-8b0a-7209c3bdfd1d',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-13',
      postedDate: '2026-04-06',
      aboutRole: 'First designer owning product UX, brand design for ads, and product strategy for AI creative generation.',
      responsibilities: [
        'Own product design across workflows, dashboards, onboarding, and agent UX',
        'Lead brand design for customer ads and oversee contractors/AI designer output',
        'Set up design systems, workflows, and long-term design culture',
      ],
      requirements: [
        '3-8+ years of product/UX design experience',
        'Startup or 0-to-1 product experience',
        'Strong systems thinking and comfort with ambiguity',
      ],
      whyInteresting: 'High influence first-designer role, but cash is unknown and scope includes ad creative/brand execution.',
    },
  ],

  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'True first-designer scope',
      'AI plus marketing workflow could use strong systems/product design',
      'Potentially broad ownership across product and brand',
    ],
    whyNot: [
      'Compensation not public',
      'Seed-stage risk',
      'Ad creative/agency work may be less aligned with cash-first technical product goals',
    ],
    nextActions: [
      'Only pursue if cash range is acceptable',
      'Ask directly about base range before investing much time',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$9.5M funding', '$25M+ pipeline generated for pre-launch partners', 'Hiring first designer'],
    tam: 'B2B paid media and AI-assisted demand generation',
    marketShare: 'Unknown',
    ceiling: 'Could expand from managed B2B ads into a broader AI growth platform.',
    tailwinds: ['AI-assisted marketing operations', 'B2B companies looking for efficient pipeline growth'],
    headwinds: ['Agency margins', 'Attribution complexity', 'Ad channel platform dependency'],
    moatType: 'product-experience',
    moatStrength: 'Early and unproven; depends on customer outcomes and AI/operator loop quality.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'Multiply website and funding announcement', url: 'https://www.gomultiply.com/' },
    { title: 'Founding Designer at Multiply', url: 'https://jobs.ashbyhq.com/multiplyai/764df726-0ee9-43bb-8b0a-7209c3bdfd1d' },
    { title: 'Unite.AI coverage of Multiply funding', url: 'https://www.unite.ai/multiply-raises-9-5m-to-reinvent-b2b-advertising-with-self-learning-ai/' },
    { title: 'FinSMEs coverage of Multiply funding', url: 'https://www.finsmes.com/2026/03/multiply-raises-9-5m-in-funding.html' },
  ],
};
