import { Company } from '../types';

export const tomoAi: Company = {
  id: 'tomo-ai',
  name: 'Tomo',
  description:
    'Consumer AI personal agent that learns what people care about and dynamically generates interfaces to help them act with more agency.',
  website: 'https://www.tomo.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2c', 'prosumer'],
  category: 'productivity' as const,
  subcategories: ['productivity'],
  industries: ['productivity'],

  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Role listing says Tomo has revenue and thousands of active paying users.',
  growth: 'Role listing cites world-class retention and engagement metrics; website says trusted by 250,000+ people.',
  runway: 'Unknown',
  customers: 'Consumers using an AI personal agent through text and dynamically generated interfaces.',

  competitors: [
    {
      name: 'Replika',
      description: 'Consumer AI companion product.',
      whyTheyWin: 'Large consumer AI companion user base and brand awareness.',
    },
    {
      name: 'Pi',
      description: 'Personal AI assistant originally built by Inflection.',
      whyTheyWin: 'Strong conversational UX and consumer assistant positioning.',
    },
    {
      name: 'ChatGPT',
      description: 'General-purpose AI assistant with consumer and enterprise adoption.',
      whyTheyWin: 'Massive distribution and model capabilities.',
    },
  ],
  marketPosition: 'Consumer personal AI agent with generated interface ambitions',
  moat: [
    'Personal context and retention loops',
    'Dynamic interface generation based on user intent',
    'Consumer product taste and direct paid-user feedback',
  ],
  vsGiants:
    'Competes by building a focused consumer agent and generated UI system rather than a generic chat assistant.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Tomo is building a personal agent that learns user context and generates real-time interfaces.',
  aiDesignChallenges: [
    'Real-time generative interface patterns',
    'Consumer trust, agency, and emotional tone in AI assistance',
    'Designing beyond chat while keeping interactions understandable',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founding team',
      background: 'Consumer AI team building a personal agent product in San Francisco.',
    },
  ],
  whyBuilding:
    'Tomo wants to create a personal AI that understands what users care about and helps them act through context-aware, dynamically generated interfaces.',
  beliefs: [
    'The next consumer AI product will not be just chat',
    'Personal context can power more useful interfaces',
    'Design taste matters in AI products that live close to daily life',
  ],
  greenFlags: [
    'Live Ashby Product Designer role explicitly says to apply for the Founding Product Designer role',
    'Interesting design prompt around real-time generative interfaces',
    'Role listing cites retention, engagement, revenue, and active paying users',
  ],
  redFlags: [
    'Public company details and founder verification are limited',
    'Consumer AI products face retention, safety, and differentiation challenges',
    'Job description is short and unconventional; scope needs clarification',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Dynamic interface generation patterns',
        'Personal agent behavior and context use',
        'User agency, intent capture, and action flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Retention and engagement loop design',
        'Quality of generated interfaces',
        'User trust and perceived helpfulness',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Consumer AI product UI',
        'Generated and adaptive interaction surfaces',
        'Mobile/text-first onboarding and daily-use flows',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Consumers looking for a personal AI agent',
    secondary: 'People using AI for self-management, productivity, and daily decisions',
  },
  userProblems: [
    'Generic assistants do not understand personal context well enough',
    'Chat-only interfaces can be limiting for action-oriented workflows',
    'People need AI help that feels personal without removing agency',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/tomo.ai/f77a861f-acdc-4ae4-b88e-bde4e33ebc12',
      aboutRole:
        'Apply as the Founding Product Designer for a consumer AI product exploring real-time generative interfaces and personal-agent UX.',
      whyInteresting:
        'Highly AI-native consumer design problem: what should interfaces look like when they are generated around user context and intent?',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Role listing asks for strong opinions on real-time generative interfaces and consumer AI beyond chat.',
      url: 'https://jobs.ashbyhq.com/tomo.ai/f77a861f-acdc-4ae4-b88e-bde4e33ebc12',
    },
  ],

  tracking: {
    status: 'applied',
    fitScore: 8,
    whyJoin: [
      'Founding Product Designer signal in a true consumer AI product',
      'Unusually relevant design question around dynamic generated UI',
      'Role listing suggests revenue and paying-user traction',
    ],
    whyNot: [
      'Public information is sparse',
      'Consumer AI category has high churn and safety risk',
      'Need to clarify product direction, team, and funding',
    ],
    nextActions: [
      'Track application response and recruiter follow-up',
      'Try Tomo via SMS onboarding',
      'Find founders and funding details',
      'Map portfolio case studies to generated UI and personal-agent UX',
    ],
    notes: 'Applied to Product Designer role on 2026-05-09.',
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Website says 250,000+ people; role listing says thousands of active paying users',
    signals: [
      'Live Ashby Product Designer role with Founding Product Designer language',
      'Role listing cites revenue and active paying users',
      'Website says trusted by 250,000+ people',
    ],
    tam: 'Consumer AI assistant and personal productivity market',
    marketShare: 'Early',
    ceiling: 'High if Tomo finds a repeat-use consumer AI interaction model beyond chat.',
    tailwinds: [
      'Consumers are adopting AI assistants',
      'Personal context can unlock differentiated product experiences',
      'Dynamic UI generation is an emerging AI design frontier',
    ],
    headwinds: [
      'Consumer AI retention is difficult',
      'Large model companies have distribution advantages',
      'Personal data and safety expectations are high',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Medium if personal context and usage feedback compound.',
  },

  lastUpdated: '2026-05-09',
  sources: [
    { title: 'Tomo Website', url: 'https://www.tomo.ai/' },
    { title: 'Product Designer at Tomo', url: 'https://jobs.ashbyhq.com/tomo.ai/f77a861f-acdc-4ae4-b88e-bde4e33ebc12' },
  ],
};
