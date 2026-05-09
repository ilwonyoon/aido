import { Company } from '../types';

export const closure: Company = {
  id: 'closure',
  name: 'Closure',
  description:
    'AI-powered evidence search and investigation platform helping law enforcement and prosecutors reduce evidence overload and solve cases faster.',
  website: 'https://closure-intel.com/',
  headquarters: 'New York, NY',
  remote: 'Hybrid',

  aiTypes: ['search-retrieval', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['govtech', 'public-safety'],
  industries: ['security', 'other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'YC W25 company with live Founding Product Designer role and public-sector deployments.',
  runway: 'Unknown',
  customers: 'Police departments, prosecutors, and public-safety agencies.',

  competitors: [
    {
      name: 'Palantir',
      description: 'Data integration and analysis platform used by government and public-sector teams.',
      whyTheyWin: 'Deep government relationships and mature deployment capabilities.',
    },
    {
      name: 'Axon',
      description: 'Public safety technology company with evidence and law enforcement workflow products.',
      whyTheyWin: 'Strong law enforcement distribution and ecosystem lock-in.',
    },
    {
      name: 'Legacy evidence management systems',
      description: 'Existing software used by agencies to manage evidence and case records.',
      whyTheyWin: 'Embedded procurement and compliance history.',
    },
  ],
  marketPosition: 'AI evidence search for public safety',
  moat: [
    'High-stakes vertical workflow specialization',
    'Founder background in Palantir and security-heavy domains',
    'Early public-sector customer workflow knowledge',
  ],
  vsGiants:
    'Competes by focusing on modern AI search and investigation workflows for evidence-heavy public safety use cases.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is core to Closure: the product helps search and reason across large volumes of evidence and investigative data.',
  aiDesignChallenges: [
    'Trust and provenance for AI-assisted evidence search',
    'High-stakes workflows with auditability and accountability',
    'Dense information design for investigators and prosecutors',
  ],

  founders: [
    { name: 'Gilad Levy', role: 'Co-Founder and CTO', background: 'YC lists Gilad Levy as co-founder and CTO.' },
    { name: 'Aaron Zelinger', role: 'Co-Founder', background: 'YC lists Aaron Zelinger as co-founder.' },
  ],
  whyBuilding:
    'Closure is trying to help public servants search evidence and reduce overload in serious investigations.',
  beliefs: [
    'Public safety teams are drowning in evidence and data',
    'AI search can reduce investigative bottlenecks',
    'Design quality matters because mistakes affect public safety and justice outcomes',
  ],
  greenFlags: [
    'Live YC Founding Product Designer role with SF Bay Area listed as a secondary option',
    'Very high-stakes AI UX problems around trust, search, and evidence provenance',
    'Role is core to product integrity and vision, not a support function',
  ],
  redFlags: [
    'Primary location is New York, with SF Bay Area as secondary',
    'Public safety and law enforcement work may be ethically and emotionally heavy',
    'Procurement, compliance, and clearance requirements can slow product iteration',
  ],

  designTeam: {
    teamSize: 'Founding design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Evidence search workflows',
        'AI-assisted investigation flows',
        'Permission, audit, and case-context interactions',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: ['Trust, provenance, and accuracy signals', 'User research with investigators', 'Outcome and workflow validation'],
    },
    interface: {
      level: 'high',
      tasks: ['Dense evidence interfaces', 'Search and review UX', 'Design system foundations'],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Law enforcement investigators and prosecutors',
    secondary: 'Public-safety agency leaders and case teams',
  },
  userProblems: [
    'Investigators and prosecutors face evidence overload',
    'Search and review across disparate evidence sources can be slow',
    'AI assistance must be transparent, defensible, and auditable',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'New York, NY / San Francisco, CA / Palo Alto, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/closure/jobs/z5WK1E2-founding-product-designer',
      compensation: '$125K-$185K',
      aboutRole:
        'Work directly with the CEO, CTO, and founding team to drive product experience for Closure users.',
      whyInteresting:
        'Confirmed founding product design role with SF Bay Area as a secondary option and unusually high-stakes AI trust problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'neutral',
      content:
        'Role says the designer will be in direct contact with users and that the work is core to product integrity and vision.',
      url: 'https://www.ycombinator.com/companies/closure/jobs/z5WK1E2-founding-product-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Confirmed founding product design role',
      'Deep AI search, provenance, and trust design problems',
      'Potential SF Bay Area option despite NYC primary location',
    ],
    whyNot: [
      'Primary location is NYC',
      'Law enforcement domain may be a values fit question',
      'Public-sector workflows may involve compliance and procurement drag',
    ],
    nextActions: [
      'Clarify whether SF Bay Area is a real working location for design',
      'Ask how product handles source provenance and AI uncertainty',
      'Evaluate personal fit for public-safety/law-enforcement domain',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['YC W25', 'Live YC role', 'YC page cites public servants using Closure across the U.S.'],
    tam: 'Public safety, evidence search, and government investigation software',
    marketShare: 'Early',
    ceiling: 'High if Closure becomes a trusted AI evidence layer for law enforcement and prosecutors.',
    tailwinds: [
      'Evidence volume is increasing across public safety workflows',
      'Agencies are exploring AI to reduce investigative overload',
      'High-stakes workflows can support high willingness to pay when trust is proven',
    ],
    headwinds: [
      'Public-sector procurement is slow',
      'Law enforcement AI faces scrutiny and ethical risk',
      'Accuracy and auditability bar is extremely high',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Early; depends on agency trust, deployments, and defensible evidence workflows.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Closure website', url: 'https://closure-intel.com/' },
    { title: 'Closure YC profile', url: 'https://www.ycombinator.com/companies/closure' },
    { title: 'Founding Product Designer at Closure', url: 'https://www.ycombinator.com/companies/closure/jobs/z5WK1E2-founding-product-designer' },
  ],
};
