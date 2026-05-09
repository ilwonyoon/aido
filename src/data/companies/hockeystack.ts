import { Company } from '../types';

export const hockeystack: Company = {
  id: 'hockeystack',
  name: 'HockeyStack',
  description:
    'Enterprise Revenue Agent platform that learns go-to-market processes from revenue data and executes repeatable workflows across sales, marketing, and customer success.',
  website: 'https://www.hockeystack.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$50M+',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2025-01',
      leadInvestors: ['Bessemer Venture Partners'],
    },
    {
      stage: 'Series A',
      amount: '$50M+ total funding',
      date: '2026-04',
      leadInvestors: ['Bessemer Venture Partners'],
    },
  ],
  revenue: '8-figure ARR',
  growth: 'Role listing says the company launched in late 2023 and reached 8-figure ARR.',
  runway: 'Strong post-Series A capitalization',
  customers: 'Microsoft, Harvey, New Relic, Collibra, and other large B2B companies cited in role listing',

  competitors: [
    {
      name: '6sense',
      description: 'Revenue AI and account engagement platform.',
      whyTheyWin: 'Large enterprise customer base and mature GTM platform.',
    },
    {
      name: 'Mutiny',
      description: 'AI-powered website personalization and growth platform.',
      whyTheyWin: 'Strong B2B growth experimentation workflow.',
    },
    {
      name: 'Qualified',
      description: 'Agentic marketing platform for B2B pipeline generation.',
      whyTheyWin: 'Deep Salesforce ecosystem integration and strong enterprise adoption.',
    },
  ],
  marketPosition: 'Revenue Agent infrastructure for enterprise GTM teams',
  moat: [
    'Causal revenue data architecture across the full GTM stack',
    'Nex-lm engine translating natural language into deterministic agent workflows',
    'Large enterprise revenue data scale and high-growth customer base',
  ],
  vsGiants: 'Competes by turning revenue data into executable AI workflows rather than analytics dashboards alone.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is central to the product: HockeyStack is building agent infrastructure that turns revenue data into executable workflows.',
  aiDesignChallenges: [
    'Designing complex agent workflows for revenue teams',
    'Making causal revenue data and AI recommendations legible',
    'Balancing deterministic workflow controls with AI-generated actions',
    'Designing interfaces for power users across sales, marketing, and customer success',
  ],

  founders: [
    {
      name: 'Emir Atli',
      role: 'Co-founder & CEO',
      background: 'Co-founder of HockeyStack, building enterprise revenue agents and analytics.',
    },
    {
      name: 'Duygu Kanmaz',
      role: 'Co-founder',
      background: 'Co-founder of HockeyStack.',
    },
  ],
  whyBuilding:
    'HockeyStack wants to replace manual revenue bottlenecks by encoding enterprise GTM processes into repeatable AI agent workflows.',
  beliefs: [
    'Revenue teams need operating layers, not static dashboards',
    'Causal GTM data can become executable automation',
    'AI agents should produce consistent, repeatable revenue workflows',
  ],
  greenFlags: [
    '$50M+ total funding and Bessemer / YC backing',
    '8-figure ARR and large enterprise customer signals in role listing',
    'Founding Product Designer role in a data-heavy AI-native product',
    'Clear design surface across agent workflows, revenue analytics, and enterprise controls',
  ],
  redFlags: [
    'Fully in-person San Francisco culture',
    'Enterprise revenue platform UX can become dense and operationally complex',
    'Competitive GTM software market with many incumbents adding AI agents',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Revenue agent workflow authoring',
        'Natural-language to deterministic automation flows',
        'Cross-functional GTM process mapping',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent output quality and revenue impact measurement',
        'Causal journey visualization',
        'Workflow performance and adoption analytics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise revenue operations workspace',
        'Dense data and workflow UI',
        'Reusable product patterns for sales, marketing, and CS teams',
      ],
    },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Enterprise revenue teams across sales, marketing, and customer success',
    secondary: 'Revenue operations leaders looking to automate GTM workflows',
  },
  userProblems: [
    'Revenue data is fragmented across tools and hard to translate into action',
    'GTM teams rely on manual research, segmentation, and follow-up workflows',
    'Analytics dashboards identify problems but do not execute the next step',
  ],

  designerLinks: [],
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
      url: 'https://jobs.ashbyhq.com/hockeystack/ece59ab1-bf38-480f-80f6-96db5def25b6/',
      compensation: '$150K-$200K',
      aboutRole:
        'Own product design for enterprise revenue agent workflows, balancing data-heavy UX, AI outputs, and operational clarity.',
      whyInteresting:
        'Strong AI-native B2B workflow design opportunity with real scale signals and dense, high-impact product surfaces.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Role listing says the company operates fully in-person in San Francisco and hires people who want to win.',
      url: 'https://jobs.ashbyhq.com/hockeystack/ece59ab1-bf38-480f-80f6-96db5def25b6/',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Founding product design role at a high-growth AI-native revenue platform',
      'Hard design problems around data density, agent workflows, and enterprise controls',
      '$50M+ funding and 8-figure ARR signals',
    ],
    whyNot: [
      'Fully in-person SF expectation',
      'Revenue tooling can be metric-heavy and less emotionally rich',
      'Crowded GTM software category',
    ],
    nextActions: [
      'Compare HockeyStack to Qualified, 6sense, Mutiny, and Clay',
      'Review product demos for agent workflow surfaces',
      'Prepare portfolio examples around analytics, automation, and workflow clarity',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '8-figure ARR after launching in late 2023; Axios reported 4.5x revenue growth from 2023 to 2024.',
    userGrowth: 'Unknown',
    signals: [
      '$50M+ total funding',
      '8-figure ARR cited in current role listing',
      'Processes over 60 TB of revenue data monthly according to role listing',
      'Enterprise customers include Microsoft, Harvey, New Relic, and Collibra',
    ],
    tam: 'Enterprise revenue operations, marketing automation, and GTM agent software market',
    marketShare: 'Early but growing',
    ceiling: 'High if revenue agents become a new execution layer for enterprise GTM teams.',
    tailwinds: [
      'Enterprise demand for AI agents in revenue teams',
      'GTM teams need to do more with fewer manual operators',
      'Data-rich companies want workflows connected directly to analytics',
    ],
    headwinds: [
      'Incumbent revenue platforms can add AI features',
      'Enterprise GTM data is fragmented and messy',
      'Agent mistakes can affect revenue and customer relationships',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Medium to strong if causal revenue data and agent workflows compound across enterprise customers.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'HockeyStack Website', url: 'https://www.hockeystack.com/' },
    { title: 'Founding Product Designer at HockeyStack', url: 'https://jobs.ashbyhq.com/hockeystack/ece59ab1-bf38-480f-80f6-96db5def25b6/' },
    { title: 'HockeyStack $50M funding announcement', url: 'https://www.prnewswire.com/news-releases/hockeystack-raises-50m-to-build-revenue-agents-for-the-enterprise-302742217.html' },
    { title: 'Axios: HockeyStack raises $20M', url: 'https://www.axios.com/2025/01/28/hockeystack-revenue-analytics-software' },
  ],
};
