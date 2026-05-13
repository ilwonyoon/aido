import { Company } from '../types';

export const cresta: Company = {
  id: 'cresta',
  name: 'Cresta',
  description:
    'Human-centric AI platform for contact centers, combining AI agents, agent assist, quality management, coaching, and conversation intelligence.',
  website: 'https://cresta.com',
  headquarters: 'Palo Alto, CA',
  remote: 'Yes',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'sales-marketing' as const,
  subcategories: ['sales-marketing'],
  industries: ['sales-marketing', 'productivity'],

  stage: 'Series D',
  valuation: 'Unknown',
  totalFunding: 'Over $270M',
  fundingHistory: [
    {
      stage: 'Series D',
      amount: '$125M',
      date: '2024-11',
      leadInvestors: ['WiL', 'QIA'],
    },
  ],
  revenue: 'Unknown',
  growth: '300+ employees; expanding APAC and EMEA markets',
  runway: 'Strong after Series D',
  customers: 'Large enterprise contact centers, including Brinks Home case study',

  growthMetrics: {
    stage: 'high-growth',
    signals: ['Series D funding', '300+ employees', 'Global expansion into APAC and EMEA'],
    tam: '$50B+ contact center software and AI customer experience market',
    ceiling:
      'Large if Cresta becomes the operating platform for human and AI agents in enterprise customer service.',
    tailwinds: [
      'Contact centers are under pressure to reduce cost while improving CX',
      'Enterprises are actively adopting AI agents and agent assist',
      'Cresta has long-running human-in-the-loop AI positioning',
    ],
    headwinds: [
      'Crowded AI customer service market with Sierra, Decagon, Intercom, Salesforce, and NICE',
      'Enterprise rollout complexity and long sales cycles',
      'Automation quality must be high enough for regulated support workflows',
    ],
    moatType: 'vertical-specialization',
    moatStrength:
      'Medium: domain data, enterprise deployments, and workflow depth can compound, but model capabilities are broadly available.',
  },

  competitors: [
    {
      name: 'Sierra',
      description: 'Enterprise AI agents for customer experience.',
      whyTheyWin: 'Premium brand, strong founders, and high-end enterprise motion.',
    },
    {
      name: 'Decagon',
      description: 'AI agents for customer support and operations.',
      whyTheyWin: 'Fast execution and strong product-market momentum.',
    },
    {
      name: 'Intercom Fin',
      description: 'AI customer support agent inside Intercom.',
      whyTheyWin: 'Existing distribution in support teams.',
    },
  ],
  marketPosition: 'Enterprise CX AI platform for unified human and AI agent workflows.',
  moat: [
    'Contact-center workflow depth across agent assist, AI agents, coaching, QA, and analytics',
    'Enterprise customer relationships and case studies',
    'Human-centric AI positioning grounded in Stanford AI Lab origins',
  ],
  vsGiants:
    'More AI-native and contact-center-specific than horizontal CRM suites, but competes with Salesforce and ServiceNow distribution.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-native: Cresta exists to transform contact-center work through AI agents, real-time assist, and conversation intelligence.',
  aiDesignChallenges: [
    'Designing handoffs between virtual agents, human agents, supervisors, and QA workflows',
    'Making AI reasoning and confidence legible during live customer conversations',
    'Designing builder tools for nontechnical CX teams configuring AI agents',
    'Balancing automation speed with compliance and brand safety',
  ],

  founders: [
    {
      name: 'Zayd Enam',
      role: 'Co-founder',
      background: 'Stanford AI Lab; co-founded Cresta and led early human-centric AI vision.',
    },
    {
      name: 'Tim Shi',
      role: 'Co-founder',
      background: 'Early OpenAI researcher; co-founded Cresta from Stanford AI Lab roots.',
    },
    {
      name: 'Sebastian Thrun',
      role: 'Co-founder and Chairman',
      background: 'Founder of Google X, Udacity, and Google self-driving car project.',
    },
  ],
  whyBuilding:
    'Help contact centers combine intelligent automation with human expertise so customer conversations improve at enterprise scale.',
  beliefs: [
    'AI should empower humans, not only replace them',
    'Customer experience workflows need both automation and coaching',
    'Live conversations create data that can improve the whole operation',
  ],
  designPhilosophy:
    'Human-centric AI for operational teams: make AI useful, safe, and measurable inside high-volume service workflows.',
  greenFlags: [
    'Strong funding and top-tier investors',
    'Directly relevant to human + AI agent management',
    'Open Senior Product Designer role focused on AI Builders',
  ],
  redFlags: [
    'Less aligned with coding-agent workflows than Conductor or Graphite',
    'Crowded customer service AI market',
    'Enterprise CX can be sales-led and implementation-heavy',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent configuration and workflow rules',
        'Human escalation and supervisor intervention patterns',
        'Conversation state and automation boundary design',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality management and AI coaching metrics',
        'Conversation outcomes and CSAT/first-call-resolution analysis',
        'Agent performance and automation review loops',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI builder surfaces for CX teams',
        'Supervisor dashboards for human and AI agents',
        'Enterprise admin, compliance, and analytics UI',
      ],
    },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Enterprise contact-center leaders, supervisors, and CX operations teams',
    secondary: 'Agents and AI builders configuring customer-service automation',
  },
  userProblems: [
    'Contact centers need to reduce cost without degrading service quality',
    'Supervisors need visibility into both human and AI agent performance',
    'AI agents require safe configuration, testing, QA, and escalation paths',
    'Live support teams need real-time guidance without cognitive overload',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Senior Product Designer, AI Builders',
      location: 'United States (Remote)',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/cresta/jobs/5173681008',
      roleFamily: 'product-design',
      roleSignal: 'senior',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: '2026-05-12',
      compensation: '$150K-$205K',
      team: 'AI Builders',
      level: 'Senior',
      whyInteresting:
        'Directly relevant to AI agent builder UX and human/AI agent workflow design.',
    },
    {
      title: 'Senior Product Designer, Core Platform',
      location: 'Berlin, Germany (Hybrid)',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/cresta/jobs/5173707008',
      roleFamily: 'product-design',
      roleSignal: 'senior',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: '2026-05-12',
      team: 'Core Platform',
      level: 'Senior',
      whyInteresting:
        'Platform role for enterprise AI CX workflows; less practical unless open to Berlin.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Strong human + AI agent workflow alignment',
      'AI Builders role is close to configurable agent UX',
      'Remote Senior Product Designer role is currently open',
    ],
    whyNot: [
      'Customer service AI is adjacent, not core coding-agent work',
      'Large enough that founding-designer impact may be lower',
    ],
    nextActions: [
      'Review AI Builders role in detail',
      'Compare against Sierra and Decagon positioning',
      'Prepare portfolio framing around human/AI agent supervision',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Cresta About', url: 'https://cresta.com/about-us' },
    { title: 'Cresta Series D', url: 'https://cresta.com/press/cresta-closes-125m-series-d-to-accelerate-adoption-of-human-centric-ai-in-the-contact-center/' },
    { title: 'Cresta Careers', url: 'https://cresta.com/careers' },
    { title: 'Senior Product Designer, AI Builders', url: 'https://job-boards.greenhouse.io/cresta/jobs/5173681008' },
    { title: 'Senior Product Designer, Core Platform', url: 'https://job-boards.greenhouse.io/cresta/jobs/5173707008' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};

