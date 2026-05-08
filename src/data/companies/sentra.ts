import { Company } from '../types';

export const sentra: Company = {
  id: 'sentra',
  name: 'Sentra',
  description:
    'AI company memory system that turns a startup’s collective knowledge, data, and decisions into living intelligence for teams and leaders.',
  website: 'https://www.sentra.app/',
  headquarters: 'San Francisco Bay Area, CA',
  remote: 'Hybrid',

  aiTypes: ['search-retrieval', 'conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'productivity' as const,
  subcategories: ['productivity'],
  industries: ['productivity'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Early AI company-memory startup backed by a16z and Together Fund according to the role listing.',
  runway: 'Unknown',
  customers: 'Growing startups and company operators seeking organizational memory and alignment',

  competitors: [
    {
      name: 'Glean',
      description: 'Enterprise AI search and workplace knowledge assistant.',
      whyTheyWin: 'Strong enterprise distribution and broad connector ecosystem.',
    },
    {
      name: 'Notion AI',
      description: 'AI knowledge and workspace product.',
      whyTheyWin: 'Existing workspace adoption and integrated knowledge surfaces.',
    },
    {
      name: 'Mem',
      description: 'AI-native notes and knowledge management product.',
      whyTheyWin: 'Consumer/prosumer knowledge capture orientation and AI memory positioning.',
    },
  ],
  marketPosition: 'AI organizational memory for startups',
  moat: [
    'Focus on company context, goals, culture, and strategic alignment',
    'Multi-surface product across desktop, web dashboard, notifications, and AI outputs',
    'Backing from a16z and Together Fund according to the job listing',
  ],
  vsGiants: 'Competes by focusing on startup operating context and proactive company memory instead of broad enterprise search alone.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Sentra is building an AI teammate that understands organizational context and turns company memory into operational intelligence.',
  aiDesignChallenges: [
    'Designing trustworthy AI outputs grounded in company context',
    'Creating multi-surface workflows across desktop, dashboard, notifications, and agentic responses',
    'Making organizational alignment and memory visible without adding noise',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founding team',
      background: 'AI and product team building company memory for scaling startups.',
    },
  ],
  whyBuilding:
    'Sentra wants to help companies scale without losing context by giving teams an AI teammate that understands what is happening and why it matters.',
  beliefs: [
    'Company memory should be living intelligence, not static documentation',
    'AI teammates can make strategic alignment more visible',
    'Scaling teams need transparency into context, goals, and decisions',
  ],
  greenFlags: [
    'Live Founding Product Designer role with direct CEO collaboration',
    'Level A AI-native design surface around company memory and agentic experiences',
    'Role explicitly covers product direction, multi-surface design, metrics, and research',
  ],
  redFlags: [
    'Early-stage public metrics are limited',
    'Knowledge and company-memory market has strong incumbents',
    'Hybrid Bay Area expectation may limit flexibility',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Ambiguous product ideas into flows, interactions, and requirements',
        'Agentic company-memory workflows',
        'Multi-surface desktop, web, notification, and AI-output design',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Metrics and data points for design effectiveness',
        'Lightweight user research and usability tests with operators',
        'AI-output usefulness, trust, and company-context quality',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Desktop app and web dashboard product surfaces',
        'Notifications and AI output presentation',
        'Reusable components, patterns, and documentation',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Startup operators, leaders, and employees who need company context and alignment',
    secondary: 'Founders and executives scaling teams across functions',
  },
  userProblems: [
    'Company knowledge, decisions, and goals become harder to track as teams scale',
    'Employees need better context before making decisions',
    'Leaders need visibility into alignment without adding manual reporting work',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco / Bay Area, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/sentra/9717d4c7-7500-47af-a5f5-964ae51c1258',
      compensation: '$150K-$170K + 0.2%-0.4%',
      aboutRole:
        'Work directly with the CEO and product team to design multi-surface AI company-memory workflows across desktop, web, notifications, and AI outputs.',
      whyInteresting:
        'Founding product design role on a true AI teammate product with hard problems in memory, trust, alignment, and agentic product surfaces.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing says the designer will work directly with the CEO on product strategy and direction.',
      url: 'https://jobs.ashbyhq.com/sentra/9717d4c7-7500-47af-a5f5-964ae51c1258',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Confirmed Founding Product Designer role with direct product strategy scope',
      'AI-native company memory surface with complex trust and alignment problems',
      'Backed by a16z and Together Fund according to role listing',
    ],
    whyNot: [
      'Early public traction details are limited',
      'Knowledge management and enterprise search categories are crowded',
      'The value of company memory can be hard to prove quickly',
    ],
    nextActions: [
      'Try Sentra product if access is available',
      'Map portfolio examples to AI outputs, notifications, and knowledge workflows',
      'Clarify team size, current customers, and product maturity',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Live Founding Product Designer role on Ashby',
      'Role listing cites backing from a16z and Together Fund',
      'Official site positions Sentra as an organizational memory system',
    ],
    tam: 'Enterprise search, knowledge management, and organizational productivity market',
    marketShare: 'Early',
    ceiling: 'High if AI company memory becomes a default operating layer for scaling startups.',
    tailwinds: [
      'Teams increasingly expect AI to understand company context',
      'Knowledge work is fragmented across tools and communication channels',
      'Agentic workflows can proactively surface relevant context',
    ],
    headwinds: [
      'Enterprise knowledge products need trustworthy permissions and source grounding',
      'Incumbents have strong distribution',
      'Capturing organizational memory can require difficult integrations',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Medium if company-specific memory and feedback loops compound over time.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Sentra Website', url: 'https://www.sentra.app/' },
    { title: 'Founding Product Designer at Sentra', url: 'https://jobs.ashbyhq.com/sentra/9717d4c7-7500-47af-a5f5-964ae51c1258' },
  ],
};
