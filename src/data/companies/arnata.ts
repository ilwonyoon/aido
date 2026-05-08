import { Company } from '../types';

export const arnata: Company = {
  id: 'arnata',
  name: 'arnata',
  description:
    'AI workers for logistics operations, automating repetitive shipper workflows and coordinating operations end to end.',
  website: 'https://www.arnata.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['other-vertical'],
  industries: ['other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Company site claims AI agents handle 80-90% of repetitive logistics tasks for clients.',
  runway: 'Unknown',
  customers: 'Shippers and logistics operations teams',

  competitors: [
    {
      name: 'Flexport',
      description: 'Digital freight forwarding and logistics platform.',
      whyTheyWin: 'Brand, network, and logistics operating scale.',
    },
    {
      name: 'Loop',
      description: 'AI-powered audit and payments platform for logistics.',
      whyTheyWin: 'Focused fintech/logistics workflow depth.',
    },
    {
      name: 'Parabola',
      description: 'Automation platform used by operations teams.',
      whyTheyWin: 'Flexible workflow automation for non-technical teams.',
    },
  ],
  marketPosition: 'AI operating system for logistics operations',
  moat: [
    'Domain-specific logistics workflows and customer data',
    'AI workers tuned for repetitive shipper operations',
    'Founder-led product/design intensity signaled by role language',
  ],
  vsGiants: 'Differentiates from generic automation tools by focusing on logistics-specific AI workers and operational workflows.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the core product: arnata sells AI workers that perform logistics operations tasks rather than conventional SaaS dashboards.',
  aiDesignChallenges: [
    'Designing AI worker interfaces for logistics operators',
    'Turning industrial complexity into simple workflows',
    'Making autonomous task completion observable and trustworthy',
    'Designing multi-channel surfaces across app, web, voice, and email',
  ],

  founders: [
    {
      name: 'Georgy Melkonyan',
      role: 'Founder',
      background: 'Founder of arnata, building AI workers for the logistics industry.',
    },
  ],
  whyBuilding:
    'arnata aims to reduce repetitive logistics operations work with AI workers that can run processes end to end.',
  beliefs: [
    'Logistics teams need AI workers, not dashboards layered on broken processes',
    'Industrial complexity can be made human and intuitive through product design',
    'Design quality is a core differentiator in AI operating systems',
  ],
  greenFlags: [
    'Founding Product Designer role with direct founder access',
    'Clear AI-native vertical workflow surface',
    'Strong craft expectations in role description',
  ],
  redFlags: [
    'Limited public funding and traction data',
    'Logistics workflows can be messy and integration-heavy',
    'In-office only in San Francisco',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI worker task orchestration',
        'Exception handling and operator-in-the-loop flows',
        'Cross-channel logistics workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Task completion and exception metrics',
        'AI worker confidence and auditability',
        'Operational performance dashboards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI operating system for logistics',
        'Design system across app, web, voice, and email',
        'Workflow surfaces for shippers and logistics teams',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Shipper operations teams and logistics coordinators',
    secondary: 'Logistics executives seeking automation of repetitive back-office work',
  },
  userProblems: [
    'Logistics operations involve repetitive, high-volume coordination work',
    'Existing tools often add dashboards without automating the work itself',
    'Operators need to trust AI workers before delegating customer-impacting tasks',
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
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/arnata/jobs/WHv3neF-founding-product-designer',
      compensation: '$100K-$200K + 0.10%-0.75%',
      aboutRole:
        'Work directly with the founder in San Francisco to design an AI operating system for logistics.',
      whyInteresting:
        'Founding role with broad ownership across UX, interface design, brand expression, and AI worker interaction patterns.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'neutral',
      content: 'Role listing states San Francisco in-person only and emphasizes high craft standards.',
      url: 'https://www.ycombinator.com/companies/arnata/jobs/WHv3neF-founding-product-designer',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 7,
    whyJoin: [
      'Founding product design ownership over a vertical AI operations product',
      'Clear need for workflow simplification and trust design',
      'High craft bar and direct founder access',
    ],
    whyNot: [
      'Limited public traction and funding data',
      'Logistics domain complexity and operational edge cases',
      'In-person only in San Francisco',
    ],
    nextActions: [
      'Review arnata product demos and logistics AI worker examples',
      'Assess whether role spans too much brand/marketing vs product UX',
      'Map relevant work to workflow automation and operational dashboards',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'YC company profile lists active status and San Francisco location',
      'Company site claims AI workers handle 80-90% of repetitive logistics tasks',
      'Hiring Founding Product Designer for in-office SF role',
    ],
    tam: 'Logistics operations software and automation market',
    marketShare: 'Very early',
    ceiling: 'High if AI workers become standard operating infrastructure for logistics teams.',
    tailwinds: [
      'Supply chain teams face pressure to automate repetitive coordination',
      'AI agents are increasingly accepted in operations workflows',
      'Logistics has many document, email, and exception-heavy processes',
    ],
    headwinds: [
      'Integration complexity across fragmented logistics systems',
      'Operational reliability requirements are high',
      'Vertical sales cycles can be slow',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if arnata builds proprietary logistics workflow data and repeatable AI worker playbooks.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'arnata Website', url: 'https://www.arnata.com/' },
    { title: 'Founding Product Designer at arnata', url: 'https://www.ycombinator.com/companies/arnata/jobs/WHv3neF-founding-product-designer' },
    { title: 'arnata article: AI employees transforming shipper operations', url: 'https://www.arnata.com/articles/how-ai-employees-are-transforming-shipper-operations' },
  ],
};
