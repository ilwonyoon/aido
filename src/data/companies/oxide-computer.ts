import { Company } from '../types';

export const oxideComputer: Company = {
  id: 'oxide-computer',
  name: 'Oxide Computer Company',
  description: 'Designs and manufactures integrated rack-scale cloud computers for on-premises data centers, combining custom hardware and open-source software.',
  website: 'https://oxide.computer',
  headquarters: 'Emeryville, CA',
  region: 'other-us' as const,
  remote: 'Hybrid',
  ogImage: '/og-images/oxide-computer-og.webp',

  category: 'developer-tools' as const,

  aiTypes: ['ai-infrastructure'],
  markets: ['enterprise'],
  industries: ['infrastructure'],

  stage: 'Series C',

  normalizedStage: 'series-c' as const,
  valuation: 'Unknown',
  totalFunding: '~$370M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$20M',
      date: '2019-12',
      leadInvestors: ['Eclipse Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$44M',
      date: '2023-10',
      leadInvestors: ['Eclipse Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$100M',
      date: '2025-07',
      leadInvestors: ['USIT'],
    },
    {
      stage: 'Series C',
      amount: '$200M',
      date: '2026-02',
      leadInvestors: ['USIT'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong — $370M+ raised, intent to build generational company',
  customers: 'Enterprise & government (Lawrence Livermore National Lab, SUSE disclosed)',

  competitors: [
    {
      name: 'Nutanix',
      description: 'Hyper-converged infrastructure for hybrid cloud',
      whyTheyWin: 'Established enterprise sales, 20K+ customers, $2B+ revenue',
    },
    {
      name: 'Dell/HPE',
      description: 'Traditional enterprise server and storage vendors',
      whyTheyWin: 'Incumbent relationships, full product portfolios, global distribution',
    },
    {
      name: 'VMware (Broadcom)',
      description: 'Virtualization and private cloud software stack',
      whyTheyWin: 'Dominant hypervisor market share, deep enterprise lock-in',
    },
  ],
  marketPosition: 'First integrated rack-scale cloud computer for on-premises',
  moat: [
    'Full-stack hardware+software integration (no other startup does both)',
    'Open-source ethos builds trust with technical buyers',
    'Federal/regulated sector traction (In-Q-Tel investor, LLNL customer)',
    'Deep systems engineering team with Sun/Joyent pedigree',
  ],
  vsGiants: 'Dell/HPE sell disaggregated components that customers must integrate. Oxide delivers a single rack that boots to a cloud API in 2 hours. For enterprises wanting cloud-like self-service on-prem, Oxide eliminates the integration tax.',

  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is not a core product feature. Oxide builds cloud infrastructure hardware/software — customers may run AI workloads on Oxide racks, but the product itself is not AI-powered.',
  aiDesignChallenges: [
    'Console UX: making complex infrastructure self-service and intuitive',
    'Hardware-software co-design: translating physical rack state into digital UI',
    'Enterprise provisioning: multi-tenant resource allocation and monitoring',
  ],

  founders: [
    {
      name: 'Steve Tuck',
      role: 'CEO & Co-founder',
      background: 'Former SVP Sales at Joyent. Enterprise infrastructure sales veteran.',
    },
    {
      name: 'Bryan Cantrill',
      role: 'CTO & Co-founder',
      background: 'Former VP Engineering/CTO at Joyent. Created DTrace at Sun Microsystems. Brown University CS.',
    },
    {
      name: 'Jessie Frazelle',
      role: 'Co-founder (departed Jul 2022, now CEO at Zoo/KittyCAD)',
      background: 'Former CPO at Oxide. Previously at Docker, Google, Microsoft on container/cloud infra.',
    },
  ],
  whyBuilding: 'Believed hyperscaler-quality infrastructure should be available to every organization, not just cloud giants. Saw enterprises stuck with decades-old vendor hardware that ignored software experience.',
  beliefs: [
    'Hardware and software must be co-designed, not stitched together',
    'Open source builds trust and enables better engineering',
    'Values-driven culture: integrity, rigor, curiosity over status',
  ],
  designPhilosophy: 'TUI/CLI-inspired aesthetic — retro computing vibe meets modern cloud console. Pentagram-designed identity. Design system is open-source on GitHub.',
  greenFlags: [
    'Deeply technical founding team with 20+ years systems experience',
    'Real product shipping to real customers (LLNL, SUSE)',
    '$370M+ raised with stated intent to build generational company',
    'Open-source culture and radical transparency (weekly podcasts, public RFDs)',
  ],
  redFlags: [
    'Hardware business = capital intensive, slower iteration than SaaS',
    'Small team (~80-100) competing against Dell/HPE with 100K+ employees',
    'No disclosed revenue or valuation — financial visibility limited',
  ],

  designTeam: {
    designHead: 'Unknown (Jared Volpe was founding designer, departed 2021)',
    teamSize: '~2-3 (1 Product Engineer role open, design system on GitHub)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Cloud API feature design: resource provisioning, networking, storage workflows',
        'Rack lifecycle management: sled insertion, capacity planning, firmware updates',
        'Multi-tenant access control and permission models',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Customer deployment feedback loops',
        'Infrastructure performance monitoring dashboards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Oxide Console: web UI for managing rack-scale infrastructure',
        'Design system maintenance (open-source, React/TypeScript)',
        'CLI and API documentation design',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise infrastructure teams running on-premises data centers',
    secondary: 'Government and regulated industries requiring data sovereignty',
  },
  userProblems: [
    'On-prem infrastructure lacks the self-service experience of public cloud',
    'Integrating hardware from multiple vendors creates fragile, slow deployments',
    'Enterprise IT teams spend months provisioning racks instead of building products',
    'Data sovereignty requirements force companies off public cloud with no good alternative',
  ],

  designerLinks: [
    {
      name: 'Jared Volpe',
      role: 'Founding Designer (2020-2021)',
      platform: 'blog',
      url: 'https://plainspacedesign.com/work/oxide',
      description: 'Portfolio case study on prototyping the Oxide Console and translating rack vision into industrial design elevations',
    },
    {
      name: 'Oxide Design System',
      role: 'Company',
      platform: 'blog',
      url: 'https://github.com/oxidecomputer/design-system',
      description: 'Open-source design system with reusable tokens and components for Oxide Console and internal sites',
    },
    {
      name: 'Pentagram × Oxide',
      role: 'Brand Agency',
      platform: 'blog',
      url: 'https://www.pentagram.com/work/oxide',
      description: 'Pentagram case study: TUI/CLI/ASCII-inspired identity system celebrating nerdy, people-centered ethos',
    },
  ],

  openRoles: [],

  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Strong values-driven culture. Weekly "Oxide and Friends" podcast shows radical transparency. Founders emphasize integrity, curiosity, and fun over hierarchy.',
      url: 'https://oxide.computer/podcast',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Team of ~60-80 veteran engineers from Sun, Joyent, Intel, AWS. Described as "band of veteran technologists" with deep hardware+software expertise.',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'Limited reviews available. Company is small (~80-100 employees) and relatively private. Remote-friendly with Emeryville HQ.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Oxide-Computer-EI_IE5426377.11,25.htm',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$200M Series C (Feb 2026) — all from existing investors',
      'First multi-rack customer deployments',
      'Federal sector traction (LLNL, In-Q-Tel backing)',
    ],
    tam: '$50B+ (on-premises cloud infrastructure market)',
    ceiling: 'Early innings: most enterprises still running legacy vendor hardware, cloud repatriation trend accelerating',
    tailwinds: [
      'Cloud repatriation trend — enterprises moving workloads back on-prem',
      'Data sovereignty regulations (GDPR, government mandates)',
      'AI workload demand driving on-prem compute needs',
    ],
    headwinds: [
      'Dell/HPE incumbency with massive sales forces',
      'Hardware business requires heavy upfront capital',
      'Enterprise sales cycles are long (6-18 months)',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: only company shipping integrated rack-scale cloud computer with co-designed hardware+software',
  },

  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: [
      'Radical design challenge: making infrastructure beautiful and intuitive',
      'Open-source culture with public design system and weekly podcasts',
      'Small design team = high impact and ownership',
    ],
    whyNot: [
      'Level D AI-native — not an AI company, infrastructure focus',
      'No dedicated Product Designer role — hybrid Product Engineer expected',
      'Hardware business moves slower than SaaS startups',
      'Very small design team, limited design leadership',
    ],
    nextActions: [
      'Explore Oxide Console demo and design system on GitHub',
      'Listen to Oxide and Friends podcast for culture signals',
      'Monitor for dedicated design roles opening',
    ],
  },

  lastUpdated: '2026-02-14',
  sources: [
    {
      title: 'Oxide $200M Series C Announcement',
      url: 'https://oxide.computer/blog/our-200m-series-c',
    },
    {
      title: 'Oxide $100M Series B Announcement',
      url: 'https://oxide.computer/blog/our-100m-series-b',
    },
    {
      title: 'Oxide Careers Page — no Product Design roles found',
      url: 'https://oxide.computer/careers',
    },
    {
      title: 'Bryan Cantrill Wikipedia (founder background)',
      url: 'https://en.wikipedia.org/wiki/Bryan_Cantrill',
    },
    {
      title: 'Pentagram × Oxide Brand Identity',
      url: 'https://www.pentagram.com/work/oxide',
    },
  ],
};
