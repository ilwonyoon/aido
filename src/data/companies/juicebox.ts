import { Company } from '../types';

export const juicebox: Company = {
  id: 'juicebox',
  name: 'Juicebox',
  description: 'AI recruiting platform that combines search, CRM, outreach, and autonomous sourcing agents to help teams find and engage candidates faster.',
  website: 'https://www.juicebox.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://framerusercontent.com/assets/4taa8DFpl0ylGE3TP0WIc4WP6s.svg',
  screenshot: '/screenshots/juicebox-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'search-retrieval'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,

  industries: ['sales-marketing', 'productivity'],

  // Business
  stage: 'Series B',
  valuation: '$850M',
  totalFunding: '$116M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2025-09',
      leadInvestors: ['Sequoia Capital'],
    },
    {
      stage: 'Series B',
      amount: '$80M',
      date: '2026-04',
      valuation: '$850M',
      leadInvestors: ['DST Global'],
    },
  ],
  revenue: '$10M+ ARR',
  growth: '20%+ monthly growth; path to $100M ARR cited in current Product Designer role',
  runway: 'Strong post-Series B capitalization',
  customers: '4,000-5,000+ customers, including Ramp, Cursor, Cognition, Samsara, Perplexity, and leading AI labs',

  // Competition
  competitors: [
    {
      name: 'LinkedIn Recruiter',
      description: 'Dominant incumbent for professional sourcing and recruiter workflows.',
      whyTheyWin: 'Largest professional graph and entrenched recruiting workflows.',
    },
    {
      name: 'Gem',
      description: 'Talent CRM and sourcing platform used by recruiting teams.',
      whyTheyWin: 'Mature CRM workflows and enterprise recruiting adoption.',
    },
    {
      name: 'Ashby',
      description: 'Modern ATS and recruiting operations platform.',
      whyTheyWin: 'End-to-end recruiting system of record with strong analytics.',
    },
  ],
  marketPosition: 'AI-powered recruiting platform',
  moat: [
    'Large candidate search surface across hundreds of millions of profiles',
    'Agentic sourcing and outreach workflows that reduce manual recruiter work',
    'Rapid customer adoption among startups and enterprise recruiting teams',
  ],
  vsGiants: 'Competes against LinkedIn and ATS incumbents by turning sourcing, qualification, and outreach into an AI-assisted workflow rather than a manual database query.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is a core differentiator: natural-language search, candidate scoring, sequencing, and recruiting agents are central to the product experience.',
  aiDesignChallenges: [
    'Designing recruiter trust in AI-ranked candidate recommendations',
    'Making agentic sourcing workflows transparent and controllable',
    'Balancing fast PLG onboarding with enterprise-grade recruiting workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'David Paffenholz',
      role: 'Co-founder & CEO',
      background: 'Harvard Economics graduate; founded Juicebox at age 22 through YC S22.',
    },
    {
      name: 'Ishan Gupta',
      role: 'Co-founder',
      background: 'Studied CS at Dartmouth; left to focus on building Juicebox at age 19 through YC S22.',
    },
  ],
  whyBuilding: 'The founders saw recruiters lose time to rigid systems and manual sourcing, then built an AI-native platform to help hiring teams identify and engage better-fit candidates faster.',
  beliefs: [
    'Human ingenuity is the scarce resource in the age of AI',
    'Recruiting teams should spend less time searching and more time building relationships',
    'Speed and intellectual honesty guide how the team builds and makes decisions',
  ],
  greenFlags: [
    '$116M raised with an $850M valuation after Series B',
    '$10M+ ARR and 20%+ monthly growth disclosed across company/YC materials',
    'Current Product Designer role owns end-to-end AI SaaS product features and design language',
    'Used by high-signal customers including Ramp, Cursor, Cognition, Samsara, Perplexity, and leading AI labs',
  ],
  redFlags: [
    'Not a founding design role anymore; likely more growth-stage execution than pure 0→1',
    'On-site San Francisco role with intense growth expectations',
    'Recruiting AI market is crowded and faces data/source dependency risk',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Design team growing; current Product Designer role open in San Francisco',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agentic recruiting workflows and recruiter-in-the-loop control states',
        'Candidate ranking, match scoring, and feedback loops',
        'PLG onboarding that quickly demonstrates sourcing value',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Recruiter trust in candidate recommendations',
        'Visibility into agent actions, outreach quality, and pipeline impact',
        'Metrics for activation, search success, and response lift',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Search, CRM, outreach, and agent surfaces across one recruiting platform',
        'Data-heavy candidate profiles, filters, and campaign flows',
        'Design language for a fast-growing AI SaaS product',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Recruiters, sourcers, founders, and talent teams using outbound hiring workflows',
    secondary: 'Enterprise recruiting organizations adopting AI-assisted sourcing and engagement',
  },
  userProblems: [
    'Manual candidate sourcing consumes large portions of recruiter time',
    'Inbound recruiting pipelines are increasingly noisy due to AI-generated applications',
    'Recruiting teams need better ways to identify, qualify, and engage candidates at scale',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-05',
      url: 'https://www.ycombinator.com/companies/juicebox/jobs/4w5CBLL-product-designer',
      compensation: '$150K-$260K',
      level: 'Senior',
      aboutRole: 'Own end-to-end product features across Juicebox core platform and Juicebox Agent, including LLM-powered workflows and overall product design language.',
      whyInteresting: 'Not founding, but a high-leverage senior design role on a fast-growing AI recruiting platform with visible agentic workflow and PLG design problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Company careers page emphasizes speed and intellectual honesty as the two operating values.',
      url: 'https://juicebox.ai/careers',
    },
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'Current Product Designer listing says the role will own AI-heavy product features end to end and shape the design language.',
      url: 'https://www.ycombinator.com/companies/juicebox/jobs/4w5CBLL-product-designer',
    },
  ],

  // My Tracking
  tracking: {
    status: 'interested',
    fitScore: 7,
    whyJoin: [
      'Senior product design role with ownership over agentic AI recruiting workflows',
      'Strong growth signals: $116M raised, $850M valuation, $10M+ ARR, and 20%+ monthly growth',
      'Design problems span PLG, trust, ranking, automation visibility, and data-heavy B2B workflows',
    ],
    whyNot: [
      'Not a founding designer opportunity',
      'Series B scale may mean less blank-canvas design ownership than earlier-stage companies',
      'On-site San Francisco expectation',
    ],
    nextActions: [
      'Review Product Designer listing and map portfolio examples to agentic workflow / PLG onboarding problems',
      'Compare against Wrangle, Paraform, Ashby, Gem, and LinkedIn Recruiter for market positioning',
      'Monitor whether a true founding/head of design role opens later',
    ],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '20%+ monthly growth',
    userGrowth: '4,000-5,000+ customers cited across company and YC materials',
    signals: [
      '$80M Series B led by DST Global at $850M valuation',
      '$116M total funding',
      '$10M+ ARR and path to $100M ARR cited in current hiring material',
      'Hiring across product, design, engineering, sales, and operations',
    ],
    tam: 'Large recruiting software and talent acquisition market',
    marketShare: 'Early but growing rapidly in AI recruiting',
    ceiling: 'High if Juicebox becomes the AI-native sourcing and recruiter workflow layer before incumbents adapt.',
    tailwinds: [
      'AI-generated applications are making inbound recruiting harder to triage',
      'Recruiting teams are under pressure to source and engage candidates with smaller teams',
      'Agentic workflows are becoming more acceptable in repetitive B2B operations',
    ],
    headwinds: [
      'LinkedIn and ATS incumbents can bundle AI into existing recruiting workflows',
      'Data access and compliance risks around candidate sourcing',
      'Recruiting AI adoption may be sensitive to macro hiring cycles',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Medium: growth and customer adoption are strong, but long-term moat depends on data quality, workflow lock-in, and agent performance.',
  },

  // Meta
  lastUpdated: '2026-05-05',
  sources: [
    { title: 'Juicebox Official Website', url: 'https://www.juicebox.ai' },
    { title: 'Juicebox Careers', url: 'https://juicebox.ai/careers' },
    { title: 'Product Designer at Juicebox', url: 'https://www.ycombinator.com/companies/juicebox/jobs/4w5CBLL-product-designer' },
    { title: 'Jobs at Juicebox — Y Combinator', url: 'https://www.ycombinator.com/companies/juicebox/jobs' },
    { title: 'Juicebox Series B Announcement', url: 'https://juicebox.ai/blog/series-b' },
    { title: 'Sequoia — Why We’re Partnering with Juicebox', url: 'https://sequoiacap.com/article/why-were-partnering-with-juicebox-the-recruiting-platform-founders-are-obsessed-with/' }
  ],
};
