import { Company } from '../types';

export const simpleAi: Company = {
  id: 'simple-ai',
  name: 'Simple AI',
  description:
    'Voice AI agent platform helping consumer brands automate inbound sales and support calls with low-latency, catalog-aware agents.',
  website: 'https://usesimple.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$14M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$14M',
      date: '2026-02',
      leadInvestors: ['First Harmonic'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Voice agents reportedly convert and upsell up to 30% more often than trained live reps.',
  runway: 'Strong seed runway',
  customers: 'Consumer brands using phone sales and support workflows; role listing cites Doordash, xAI, and Omaha Steaks.',

  competitors: [
    {
      name: 'Bland AI',
      description: 'Enterprise platform for AI phone calls.',
      whyTheyWin: 'Strong developer-facing voice agent platform and YC-backed visibility.',
    },
    {
      name: 'Sierra',
      description: 'Enterprise AI agent platform for customer service.',
      whyTheyWin: 'Large enterprise traction and brand credibility from repeat founders.',
    },
    {
      name: 'PolyAI',
      description: 'Voice AI platform for enterprise contact centers.',
      whyTheyWin: 'Deep conversational AI and enterprise contact center specialization.',
    },
  ],
  marketPosition: 'AI voice agents for sales and support calls',
  moat: [
    'Custom low-latency voice stack for natural call experiences',
    'Catalog-aware agents that can personalize sales and support conversations',
    'Founders with YC product-building experience and early customer traction',
  ],
  vsGiants: 'Competes by focusing on verticalized voice sales outcomes rather than generic contact-center automation.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Simple AI sells voice agents that answer calls, personalize offers, place orders, and generate call insights.',
  aiDesignChallenges: [
    'Conversation design for real-time sales and support calls',
    'Agent monitoring, transcript review, and escalation UX',
    'Trust and control for businesses letting AI act on customer data',
    'Experimentation tools for voice, tone, pace, and call outcomes',
  ],

  founders: [
    {
      name: 'Catheryn Li',
      role: 'Co-founder & CEO',
      background: 'Former YC software team lead for Startup School, YC Library, and Co-Founder Matching; MIT computer science and math.',
    },
    {
      name: 'Zach Kamran',
      role: 'Co-founder & CTO',
      background: 'Former YC software leader; co-built Simple AI after working with Catheryn Li at YC.',
    },
  ],
  whyBuilding:
    'Simple AI believes phone calls can become a better sales and support channel when AI agents are fast, personalized, and trained on each business.',
  beliefs: [
    'Voice is a natural interface for commerce and support',
    'AI agents should outperform inconsistent human call handling',
    'Businesses need full-stack voice AI infrastructure, not brittle call scripts',
  ],
  greenFlags: [
    '$14M seed led by First Harmonic with YC participation',
    'Founding Product Designer role with direct ownership over voice AI workflow UX',
    'Strong founder-product fit from YC software product experience',
    'Clear AI-native design surface around speech, agent behavior, and business outcomes',
  ],
  redFlags: [
    'Voice AI quality is difficult to maintain in real-world call conditions',
    'Contact-center AI is competitive and crowded',
    'On-site SF culture limits flexibility',
    'Early-stage role will require ambiguity across product, research, and customer work',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice agent setup, tuning, and control workflows',
        'Conversation state and handoff design',
        'Agent experimentation and deployment flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Call transcript, summary, and outcome review',
        'Conversion and upsell analytics',
        'Quality monitoring for latency, interruption, and failure cases',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise voice-agent dashboard',
        'Agent configuration and catalog ingestion UI',
        'Design system for customer-facing B2B workflows',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Consumer brands with phone sales, order intake, and support workflows',
    secondary: 'Operations and customer experience teams evaluating AI voice automation',
  },
  userProblems: [
    'Phone sales and support quality varies widely across human reps',
    'Seasonal call spikes are expensive to staff',
    'Legacy IVR experiences are frustrating and inflexible',
    'Businesses need visibility into call outcomes and customer intent',
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
      url: 'https://jobs.ashbyhq.com/simple-ai/bf145877-af7d-4d16-8feb-5f3b62b3abc7',
      compensation: '$150K-$280K + equity',
      aboutRole:
        'Shape the future product experience for enterprise voice AI agents, including conversational AI, speech UX, and agent-driven interfaces.',
      whyInteresting:
        'Founding product design ownership over a fast-growing voice AI company with unusually rich interaction design problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Founding Product Designer role is based out of the SF office five days a week.',
      url: 'https://jobs.ashbyhq.com/simple-ai/bf145877-af7d-4d16-8feb-5f3b62b3abc7',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Founding product design role in a Level A AI-native voice product',
      'High-value design problems around speech UX, agent control, and trust',
      '$14M seed with YC and First Harmonic backing',
    ],
    whyNot: [
      'On-site five days a week in San Francisco',
      'Voice AI reliability may be operationally demanding',
      'Crowded AI voice agent market',
    ],
    nextActions: [
      'Review voice-agent dashboard examples and likely portfolio mapping',
      'Compare against Bland AI and Sierra for voice-agent UX differentiation',
      'Assess how much of the role is product UI vs. conversation design',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      '$14M seed round announced in February 2026',
      'YC S24 company',
      'Claims voice agents outperform trained live reps by 30% on conversion and upsell',
      'Hiring across design, engineering, and forward-deployed roles',
    ],
    tam: 'Contact-center, phone sales, and customer support automation market',
    marketShare: 'Early',
    ceiling: 'High if voice agents become a default interface for B2C sales and support.',
    tailwinds: [
      'Rapid enterprise adoption of AI agents',
      'Contact-center labor costs and seasonality pressure',
      'Improving latency and speech model quality',
    ],
    headwinds: [
      'Voice AI failure modes are highly visible to customers',
      'Regulatory and consent requirements for phone calls',
      'Crowded market with better-funded competitors',
    ],
    moatType: 'technology',
    moatStrength: 'Medium if low-latency voice stack and customer-specific training data compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Simple AI Website', url: 'https://usesimple.ai/' },
    { title: 'Simple AI YC Profile', url: 'https://www.ycombinator.com/companies/simple-ai' },
    { title: 'Founding Product Designer at Simple AI', url: 'https://jobs.ashbyhq.com/simple-ai/bf145877-af7d-4d16-8feb-5f3b62b3abc7' },
    { title: 'BusinessWire / VentureBeat: Simple AI $14M Seed', url: 'https://venturebeat.com/business/simple-ai-announces-14m-from-first-harmonic-and-y-combinator-to-build-voice-ai-agents-that-sell' },
  ],
};
