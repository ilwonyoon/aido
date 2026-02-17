import { Company } from '../types';

export const bland: Company = {
  id: 'bland',
  name: 'Bland AI',
  description: 'Enterprise platform for AI phone calls — builds hyper-realistic voice agents that automate inbound and outbound calls at scale.',
  website: 'https://www.bland.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/bland-og.webp',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['sales-marketing'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$65M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$125K',
      date: '2023-08',
      leadInvestors: ['Y Combinator'],
    },
    {
      stage: 'Series A',
      amount: '$16M',
      date: '2024-08',
      leadInvestors: ['Scale Venture Partners'],
    },
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2025-01',
      leadInvestors: ['Emergence Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Pre-seed to Series B in 10 months',
  customers: 'Hertz, Cleveland Cavaliers, Better.com, Sears, University of Phoenix',

  competitors: [
    {
      name: 'Vapi',
      description: 'Developer-first voice AI platform with deep customization and 35+ model support.',
      whyTheyWin: 'Developer flexibility and low-level control over voice agents',
    },
    {
      name: 'Synthflow',
      description: 'No-code voice AI platform built on proprietary telephony with sub-100ms latency.',
      whyTheyWin: 'No-code ease of use and carrier-grade telephony infrastructure',
    },
    {
      name: 'Retell AI',
      description: 'Voice AI platform focused on natural conversation and enterprise deployments.',
      whyTheyWin: 'Natural conversation quality and enterprise-ready integrations',
    },
  ],
  marketPosition: 'Leading enterprise AI phone agent platform targeting $30B+ call center industry',
  moat: [
    'Custom-trained TTS, inference, and transcription models (not reliant on frontier providers)',
    'Proprietary Conversational Pathways language to minimize hallucinations',
    'Enterprise-grade infrastructure supporting 1M+ concurrent calls',
  ],
  vsGiants: 'Google CCAI and Amazon Connect are horizontal; Bland is vertical-focused with faster deployment and dedicated infrastructure for phone-specific use cases.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — voice agents that autonomously handle enterprise phone calls with custom-trained models and proprietary infrastructure.',
  aiDesignChallenges: [
    'Conversational flow design for voice agents that sound natural and stay on-script',
    'Trust and transparency UX for enterprises monitoring AI call quality at scale',
    'Real-time analytics dashboards for sentiment analysis and call scoring',
  ],

  founders: [
    {
      name: 'Isaiah Granet',
      role: 'Co-founder & CEO',
      background: 'WashU CS & Economics graduate (2022). Founded San Diego Chill nonprofit at age 15.',
    },
    {
      name: 'Sobhan Nejad',
      role: 'Co-founder & COO',
      background: 'Former software engineer at Shogun. Personal motivation from healthcare insurance failures led to founding Bland.',
    },
  ],
  whyBuilding: 'Saw call centers as broken — high turnover, poor customer experience, and billions wasted on repetitive calls that AI can handle better.',
  beliefs: [
    'Phone calls remain the most important enterprise communication channel',
    'Custom-trained models outperform generic frontier models for voice',
    'Enterprise trust requires dedicated infrastructure and strict guardrails',
  ],
  greenFlags: [
    'Pre-seed to Series B in 10 months — exceptional execution speed',
    'YC S23 with top-tier investors (Scale VP, Emergence, Max Levchin, Jeff Lawson)',
    '$42M tangible revenue added for a single customer (MPA case study)',
    '65 employees — lean team relative to funding',
  ],
  redFlags: [
    'Crowded voice AI market (Vapi, Synthflow, Retell, Google CCAI)',
    'Valuation undisclosed — limited financial transparency',
    'Heavy reliance on enterprise sales cycles',
  ],

  designTeam: {
    teamSize: 'Unknown (Founding Product Designer role previously posted)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Conversational Pathways flow design for AI phone agents',
        'Guardrail and script-adherence logic for enterprise compliance',
        'Multi-language agent behavior configuration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Call quality scoring and sentiment analysis dashboards',
        'AI agent performance metrics and reporting',
        'Customer satisfaction feedback loop design',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Agent builder and testing interface',
        'Real-time call monitoring and analytics dashboard',
        'Enterprise admin and CRM integration UX',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise operations and customer service teams replacing traditional call centers',
    secondary: 'Mid-market businesses automating sales and appointment-setting calls',
  },
  userProblems: [
    'Call centers have 30-40% annual turnover causing quality inconsistency',
    'Enterprises spend billions on repetitive phone interactions that could be automated',
    'Existing IVR systems frustrate customers with rigid menu trees',
    'Scaling phone operations requires proportional headcount growth',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC S23 batch. Pre-seed to Series B in 10 months signals strong product-market fit and intense execution culture.',
      url: 'https://www.ycombinator.com/companies/bland-ai',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: '65-person team with $65M raised — capital-efficient and fast-growing, typical of YC-backed high-velocity startups.',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    signals: [
      '$40M Series B led by Emergence Capital (Jan 2025)',
      'Pre-seed to Series B in 10 months',
      '$42M revenue impact for single customer (MPA)',
    ],
    tam: '$30B+ (global call center industry)',
    ceiling: 'Early innings: AI replacing traditional call centers is just beginning',
    tailwinds: [
      'Enterprise AI adoption accelerating',
      'Call center labor shortages and high turnover',
      'Voice AI quality reaching human-parity',
    ],
    headwinds: [
      'Crowded voice AI market with well-funded competitors',
      'Enterprise sales cycles are long and complex',
      'Regulatory scrutiny on AI impersonating humans',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: custom-trained models and proprietary infrastructure, but competitors building similar',
  },

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level A AI-native — designing voice agent UX is genuinely novel design territory',
      'Early-stage design team (Founding PD role posted) — high impact opportunity',
      '$65M funding with rapid growth trajectory',
    ],
    whyNot: [
      'No current Product Design openings',
      'Enterprise voice AI is niche — less transferable design portfolio',
      'On-site only in SF',
    ],
    nextActions: [
      'Monitor Ashby board for new design roles',
      'Follow Isaiah Granet and Sobhan Nejad on X for company updates',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Bland AI Official Website', url: 'https://www.bland.ai' },
    { title: 'Bland Raises $40M Series B', url: 'https://www.bland.ai/blogs/bland-raises-a-40m-series-b' },
    { title: 'Bland AI Series A — VentureBeat', url: 'https://venturebeat.com/ai/bland-ai-scores-16m-to-automate-enterprise-phone-calls-with-agents' },
    { title: 'Bland AI — Y Combinator', url: 'https://www.ycombinator.com/companies/bland-ai' },
    { title: 'Bland AI Careers — no Product Design roles found', url: 'https://jobs.ashbyhq.com/bland' },
  ],
};
