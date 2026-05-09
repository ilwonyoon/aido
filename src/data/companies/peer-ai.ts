import { Company } from '../types';

export const peerAi: Company = {
  id: 'peer-ai',
  name: 'Peer AI',
  description:
    'AI platform for life sciences regulatory submissions, helping teams author documents, orchestrate programs, and anticipate regulatory review questions.',
  website: 'https://getpeer.ai/',
  headquarters: 'San Francisco Bay Area',
  remote: 'Yes',

  aiTypes: ['text-assistant', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['life-sciences', 'regulatory'],
  industries: ['healthcare'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Official role page says the platform is live with top-tier pharma customers and growing in a $23B addressable market.',
  runway: 'Unknown',
  customers: 'Life sciences regulatory, medical writing, and pharma submission teams.',

  competitors: [
    {
      name: 'Veeva',
      description: 'Life sciences cloud software platform.',
      whyTheyWin: 'Deep regulatory and life sciences enterprise distribution.',
    },
    {
      name: 'CRO and medical writing services',
      description: 'Human-led regulatory writing and submission support providers.',
      whyTheyWin: 'Domain expertise, compliance history, and buyer trust.',
    },
    {
      name: 'Horizontal enterprise AI tools',
      description: 'General AI writing and document automation platforms.',
      whyTheyWin: 'Broad platform capabilities and lower switching friction.',
    },
  ],
  marketPosition: 'AI regulatory submission platform for life sciences',
  moat: [
    'Specialized regulatory submission workflows',
    'Purpose-built agents for high-stakes document authoring',
    'Domain credibility with life sciences customers',
  ],
  vsGiants:
    'Competes by focusing on regulatory submission workflows rather than generic document automation.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is central to Peer AI: the platform uses specialized agents to author and orchestrate regulatory submission work.',
  aiDesignChallenges: [
    'Trust and control for AI agents doing regulated document work',
    'Traceability and source-linking for high-stakes outputs',
    'Dense expert workflows for regulatory writers and pharma teams',
  ],

  founders: [
    {
      name: 'Founding team',
      role: 'Founding team',
      background: 'Official site says Peer AI is built by experts from leading AI and life sciences organizations.',
    },
  ],
  whyBuilding:
    'Peer AI wants to accelerate the regulatory path from molecule to medicine by using AI to reduce authoring and submission bottlenecks.',
  beliefs: [
    'Regulatory submission work is document-heavy and high-stakes',
    'AI agents need precise human control and traceability',
    'Design can make complex AI work legible and controllable for expert users',
  ],
  greenFlags: [
    'Official live Founding Product Designer role',
    'Role explicitly says first designer and SF Bay Area strongly preferred',
    'Rich AI interaction design problems in regulated life sciences workflows',
  ],
  redFlags: [
    'Remote-first rather than SF onsite',
    'Limited public funding and founder details',
    'Domain complexity and compliance burden are high',
  ],

  designTeam: {
    teamSize: 'First design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent control flows',
        'Regulatory document authoring UX',
        'Program orchestration and dependency workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: ['Traceability', 'Trust and review workflows', 'Expert-user validation'],
    },
    interface: {
      level: 'high',
      tasks: ['Expert document interfaces', 'Command center dashboards', 'Design system foundations'],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Life sciences regulatory and medical writing teams',
    secondary: 'Biotech, pharma, and regulatory operations leaders',
  },
  userProblems: [
    'Regulatory submissions are slow, document-heavy, and high-stakes',
    'Expert users need control and traceability over AI-generated work',
    'Submission teams need visibility into bottlenecks before they cascade',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer - Enterprise AI Platform',
      location: 'SF Bay Area (Remote)',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'company',
      lastVerifiedAt: '2026-05-06',
      url: 'https://getpeer.ai/careers/founding-product-designer',
      aboutRole:
        'Own design end-to-end for AI agent workflows, regulatory document products, design systems, and expert controls.',
      whyInteresting:
        'A confirmed first-designer role in a Bay Area-founded AI life sciences startup with deep trust and regulated-workflow UX challenges.',
    },
  ],

  cultureInsights: [
    {
      source: 'company',
      sentiment: 'positive',
      content:
        'Role page says this is the founding designer role with executive visibility and the chance to establish design from the ground up.',
      url: 'https://getpeer.ai/careers/founding-product-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Confirmed first designer role',
      'AI agent UX in a regulated expert workflow',
      'Bay Area strongly preferred despite remote-first setup',
    ],
    whyNot: [
      'Remote-first role may be less SF-network dense',
      'Very specialized life sciences domain',
      'Public company and funding details are limited',
    ],
    nextActions: [
      'Clarify Bay Area expectations and travel cadence',
      'Ask for product demo focused on traceability and agent control',
      'Prepare regulated-workflow and AI trust design examples',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Official role page says platform is live with top-tier pharma customers',
      'Official site describes trusted use by emerging biotechs to Top 20 pharma',
      'Role cites a $23B addressable market',
    ],
    tam: 'Life sciences regulatory submissions and medical writing automation',
    marketShare: 'Early',
    ceiling: 'High if Peer AI becomes a trusted AI workflow layer for regulatory submissions.',
    tailwinds: [
      'Life sciences teams face heavy documentation and review burdens',
      'AI can reduce first-draft and review-cycle time',
      'Traceable agentic workflows are well matched to regulated expert users',
    ],
    headwinds: [
      'Life sciences enterprise sales can be slow',
      'Accuracy, traceability, and compliance expectations are severe',
      'Incumbent platforms have deep enterprise relationships',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Early; depends on regulatory domain depth, trust, and customer adoption.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Peer AI website', url: 'https://getpeer.ai/' },
    { title: 'Founding Product Designer at Peer AI', url: 'https://getpeer.ai/careers/founding-product-designer' },
  ],
};
