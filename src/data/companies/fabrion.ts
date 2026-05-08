import { Company } from '../types';

export const fabrion: Company = {
  id: 'fabrion',
  name: 'Fabrion',
  description:
    'AI operating system for industrial enterprises, helping manufacturers and supplier networks accelerate workflows across complex value chains.',
  website: 'https://fabrion.ai/',
  headquarters: 'San Francisco Bay Area, CA',
  remote: 'No',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['other-vertical'],
  industries: ['other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Early-stage industrial AI company backed by 8VC and hiring a founding designer for product workflows.',
  runway: 'Unknown',
  customers: 'Industrial manufacturers and automotive supplier networks',

  competitors: [
    {
      name: 'Palantir',
      description: 'Enterprise data and AI operations platform.',
      whyTheyWin: 'Deep enterprise deployment experience and strong industrial customer relationships.',
    },
    {
      name: 'Augmenta',
      description: 'AI platform for industrial and manufacturing workflows.',
      whyTheyWin: 'Focused operational AI for manufacturing teams.',
    },
    {
      name: 'Traditional ERP / PLM vendors',
      description: 'Incumbent systems of record for industrial and supplier workflows.',
      whyTheyWin: 'Existing customer footprint and integration depth.',
    },
  ],
  marketPosition: 'AI workflow platform for industrial enterprises',
  moat: [
    'Industrial workflow specialization across manufacturers and suppliers',
    'AI-agent interfaces for complex operational decision support',
    '8VC backing and early category focus on industrial infrastructure',
  ],
  vsGiants: 'Competes by designing AI-native workflow layers around industrial collaboration rather than replacing systems of record.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-powered automation and decision support are core to the product, but the wedge is a vertical industrial workflow platform.',
  aiDesignChallenges: [
    'Designing AI-agent workflows that balance automation with human oversight',
    'Making supplier, dashboard, and operational decision surfaces understandable',
    'Turning ambiguous industrial workflows into repeatable product modules',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founding team',
      background: 'Industrial and AI operators building an AI operating system for manufacturing value chains.',
    },
  ],
  whyBuilding:
    'Fabrion is building AI infrastructure for industrial enterprises where supplier collaboration, operational speed, and resilience are constrained by fragmented workflows.',
  beliefs: [
    'Industrial workflows need AI-native collaboration layers',
    'AI agents should augment operational teams with clear control and visibility',
    'Enterprise transformation requires systems-level product design, not incremental UI',
  ],
  greenFlags: [
    'Live Founding Designer role in Product with explicit AI-agent workflow scope',
    'Backed by 8VC according to the job listing',
    'High-complexity B2B design surface across dashboards, supplier profiles, and agent actions',
  ],
  redFlags: [
    'Very early company with limited public metrics',
    'Industrial enterprise sales and implementation cycles can be long',
    'On-site Bay Area expectation',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI-agent workflow design for industrial operations',
        'Supplier collaboration and decision-support flows',
        'Multi-persona enterprise workflow modeling',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Customer feedback loops and lightweight user research',
        'Operational outcome and usability measurement',
        'Human oversight and agent-action review patterns',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Dashboards, supplier profiles, and enterprise workflow modules',
        'Design system for responsive web applications',
        'Polished prototypes and developer handoff',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Industrial manufacturers and supplier collaboration teams',
    secondary: 'Product, supply chain, purchasing, and operations leaders',
  },
  userProblems: [
    'Industrial value chains are fragmented across suppliers, data systems, and manual workflows',
    'Operational teams need AI recommendations they can understand and control',
    'Manufacturers need faster, more resilient supplier collaboration',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco Bay Area, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/fabrion/dad50bef-5190-46a3-aa2d-2dc7af5cfa9a',
      compensation: 'Competitive salary + meaningful equity',
      aboutRole:
        'Design AI-powered industrial enterprise workflows across dashboards, agent actions, supplier profiles, and scalable product modules.',
      whyInteresting:
        'Founding product design ownership over complex industrial AI workflows with direct collaboration across founders, engineers, and AI researchers.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing emphasizes autonomy, ownership, and direct work with the founding team on a first-of-its-kind industrial enterprise experience.',
      url: 'https://jobs.ashbyhq.com/fabrion/dad50bef-5190-46a3-aa2d-2dc7af5cfa9a',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Confirmed founding product design role with AI-agent workflow scope',
      'Deep B2B systems design across industrial operations',
      'Strong design challenge around human oversight, dashboards, and operational decision support',
    ],
    whyNot: [
      'Limited public traction and funding detail beyond 8VC backing',
      'Industrial enterprise workflows may be domain-heavy',
      'On-site Bay Area expectation',
    ],
    nextActions: [
      'Review Fabrion product messaging and industrial workflow examples',
      'Map portfolio examples to data-heavy B2B and operational UX',
      'Clarify stage, founders, and customer traction before outreach',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Live Founding Designer role on Ashby',
      'Job listing says Fabrion is backed by 8VC',
      'Official site positions Fabrion as an AI operating system for industrial enterprises',
    ],
    tam: 'Industrial software, manufacturing operations, and supplier collaboration market',
    marketShare: 'Early',
    ceiling: 'High if Fabrion becomes a core AI workflow layer for industrial value chains.',
    tailwinds: [
      'Manufacturers are under pressure to modernize supplier and operations workflows',
      'AI agents can reduce coordination burden in complex value chains',
      'Industrial AI is attracting venture and enterprise interest',
    ],
    headwinds: [
      'Industrial enterprise sales cycles can be slow',
      'Implementation requires deep domain data and integrations',
      'Incumbent systems are deeply embedded',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if industrial workflow data and customer-specific deployments compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Fabrion Website', url: 'https://fabrion.ai/' },
    { title: 'Founding Designer at Fabrion', url: 'https://jobs.ashbyhq.com/fabrion/dad50bef-5190-46a3-aa2d-2dc7af5cfa9a' },
  ],
};
