import { Company } from '../types';

export const jinba: Company = {
  id: 'jinba',
  name: 'Jinba.io',
  description:
    'Enterprise AI workflow builder that turns natural-language instructions into live APIs, MCP servers, and automations for regulated teams.',
  website: 'https://jinba.io/',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  aiTypes: ['automation', 'code-assistant'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  subcategories: ['productivity', 'developer-tools'],
  industries: ['productivity', 'developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Impressive revenue and enterprise traction cited in current role listing',
  growth: 'Serving 40,000+ enterprise users according to the Product Designer role listing.',
  runway: 'Unknown',
  customers: 'Major banks, insurance companies, and enterprise workflow teams',

  competitors: [
    {
      name: 'Retool',
      description: 'Low-code platform for internal tools and workflows.',
      whyTheyWin: 'Mature enterprise workflows and developer adoption.',
    },
    {
      name: 'Zapier',
      description: 'Automation platform for connecting SaaS workflows.',
      whyTheyWin: 'Huge integration ecosystem and broad SMB adoption.',
    },
    {
      name: 'Workato',
      description: 'Enterprise automation and integration platform.',
      whyTheyWin: 'Deep enterprise process automation footprint.',
    },
  ],
  marketPosition: 'AI-native enterprise workflow automation',
  moat: [
    'Plain-English workflow creation with API and MCP deployment outputs',
    'Enterprise requirements including SOC 2, on-prem hosting, RBAC, and audit logging',
    'YC W26 backing and early enterprise traction',
  ],
  vsGiants: 'Competes by making workflow automation feel AI-native and prompt-driven rather than visual-builder-first.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product interface: Jinba converts natural-language prompts into enterprise workflows, APIs, and MCP servers.',
  aiDesignChallenges: [
    'Designing trustworthy AI workflow creation from plain English',
    'Making generated APIs, MCP servers, and automations inspectable and controllable',
    'Balancing enterprise governance with fast AI-native creation flows',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founding team',
      background: 'YC W26 team building enterprise AI workflow automation across San Francisco and Tokyo.',
    },
  ],
  whyBuilding:
    'Jinba helps enterprises automate repetitive analyst and operations work through plain-language workflow building that can deploy into real systems.',
  beliefs: [
    'Enterprise automation should be accessible through natural language',
    'AI-native tools need auditability, governance, and human control',
    'Design and engineering should be tightly coupled in workflow products',
  ],
  greenFlags: [
    'Live Product Designer role explicitly says this is the first design hire',
    'Live Founding Design Engineer role with design-system and production-code ownership',
    'Strong AI-native workflow design surface with enterprise users and major financial customers cited',
  ],
  redFlags: [
    'Company is early and public funding details are limited',
    'Enterprise workflow automation is competitive',
    'Product Designer title is not formally “Founding,” despite first-design-hire scope',
  ],

  designTeam: {
    teamSize: 'First design hire; founders and design engineers have owned UI/UX so far',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Natural-language workflow builder UX',
        'Automation, API, and MCP server creation flows',
        'Enterprise governance, RBAC, audit, and workflow execution patterns',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Customer discovery with enterprise clients',
        'Workflow correctness and usability feedback loops',
        'AI UX patterns for generated automations and technical audiences',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Product design for enterprise workflow tools',
        'Design system and component library foundations',
        'Motion and interaction patterns for complex automation states',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise teams building operational workflows and automations',
    secondary: 'Financial services, insurance, manufacturing, and technical workflow owners',
  },
  userProblems: [
    'Enterprises still rely on senior analysts for repetitive screening, review, and compliance work',
    'Traditional workflow builders are hard for non-technical users',
    'AI-generated automations need clear inspection, control, and audit trails',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'first-design-hire',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/carnot-ai/38a7a3ff-eea9-473a-8ad3-cc3581c20715',
      aboutRole:
        'First design hire owning the full design cycle for enterprise AI workflow automation, from discovery through shipped product.',
      whyInteresting:
        'Not titled Founding Product Designer, but the role explicitly says first design hire and includes core product strategy, research, and design-system ownership.',
    },
    {
      title: 'Founding Design Engineer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'design-engineering',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/carnot-ai/f8e9170f-e276-47e8-b7b8-a74e906f0ed3',
      compensation: '$100K-$250K + equity',
      aboutRole:
        'Own visual and interactive experience, design system, motion, and production frontend implementation for Jinba.',
      whyInteresting:
        'Design-engineering adjacent role for someone who wants to shape AI-native workflow UX and ship React/TypeScript production code.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Product Designer role says this is the first design hire at a YC-backed company with enterprise traction.',
      url: 'https://jobs.ashbyhq.com/carnot-ai/38a7a3ff-eea9-473a-8ad3-cc3581c20715',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'First design hire on an AI-native enterprise workflow product',
      'Strong product-design surface around automation, MCP, APIs, and enterprise control',
      'Both product design and design-engineering paths are open',
    ],
    whyNot: [
      'The product design title is not formally founding',
      'Very early company details are still sparse',
      'Enterprise workflow builders are a crowded market',
    ],
    nextActions: [
      'Review Jinba demo and docs for workflow-building depth',
      'Decide whether to pursue Product Designer or Founding Design Engineer path',
      'Prepare portfolio examples around complex workflow and AI UX',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '40,000+ enterprise users cited in role listing',
    signals: [
      'YC W26 company according to role listings',
      'Product Designer role says Jinba serves 40,000+ enterprise users',
      'Major banks and insurance companies cited in role listing',
    ],
    tam: 'Enterprise workflow automation, low-code, and AI agent tooling market',
    marketShare: 'Early',
    ceiling: 'High if natural-language workflow building becomes a default enterprise automation interface.',
    tailwinds: [
      'Enterprises want AI automation without brittle manual workflow builders',
      'MCP and agent tooling create demand for new orchestration UX',
      'Regulated teams need auditable AI workflow systems',
    ],
    headwinds: [
      'Enterprise automation incumbents have deep distribution',
      'Generated workflows need high reliability',
      'Security and deployment requirements can slow sales',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if enterprise workflow data and deployment patterns compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Jinba Website', url: 'https://jinba.io/' },
    { title: 'Product Designer at Jinba.io', url: 'https://jobs.ashbyhq.com/carnot-ai/38a7a3ff-eea9-473a-8ad3-cc3581c20715' },
    { title: 'Founding Design Engineer at Jinba.io', url: 'https://jobs.ashbyhq.com/carnot-ai/f8e9170f-e276-47e8-b7b8-a74e906f0ed3' },
  ],
};
