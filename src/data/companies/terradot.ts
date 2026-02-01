import { Company } from '../types';

export const terradot: Company = {
  id: 'terradot',
  name: 'Terradot',
  description:
    'Climate company scaling Enhanced Rock Weathering (ERW) to remove CO2 while improving soil health.',
  website: 'https://terradot.earth/',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/terradot-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$58.2M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Microsoft (12,000-ton CDR deal), Frontier, and Google (offtake buyers).',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $54M (reported in 2025 release)',
      'Total funding reported as $58.2M',
      'Sold ~300,000 tons of CDR offtakes to Frontier and Google',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: ERW adoption depends on scientific validation and global deployment.',
    tailwinds: [
      'Corporate demand for carbon removal credits',
      'Policy and climate commitments accelerating CDR adoption',
      'Growing interest in nature-based climate solutions',
    ],
    headwinds: [
      'Operational complexity of large-scale ERW deployment',
      'Measurement and verification requirements are strict',
      'Long-term durability and regulatory approval cycles',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Terradot becomes the scaled ERW operator with trusted MRV.',
  },

  // Competition
  competitors: [
    {
      name: 'Heirloom',
      description: 'Direct air capture and carbon removal company.',
      whyTheyWin: 'Strong funding and industrial partnerships.',
    },
    {
      name: 'Charm Industrial',
      description: 'Carbon removal via biomass conversion.',
      whyTheyWin: 'Large offtake agreements and proven deployments.',
    },
    {
      name: 'Lithos Carbon',
      description: 'ERW company scaling rock weathering for carbon removal.',
      whyTheyWin: 'Early ERW commercialization and farmer partnerships.',
    },
  ],
  marketPosition: 'Enhanced Rock Weathering carbon removal focused on large-scale deployment and MRV.',
  moat: [
    'Scientific and operational expertise in ERW deployment',
    'Partnerships with major offtake buyers',
    'Integrated MRV and operational platform',
  ],
  vsGiants: 'Focuses on ERW deployment vs capital-intensive direct air capture approaches.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription:
    'AI-Minor: Terradot is primarily a climate operations company; AI is not core to the product.',
  aiDesignChallenges: [
    'Operational workflows that bridge field and digital systems',
    'Measurement and verification interfaces for scientific teams',
    'Decision support for large-scale deployment logistics',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Vesta Mangnani',
      role: 'Co-founder & CEO',
      background: 'Co-founded Terradot to scale Enhanced Rock Weathering globally.',
    },
    {
      name: 'Danny Cullenward',
      role: 'Co-founder',
      background: 'Co-founded Terradot and advises on climate science and policy.',
    },
    {
      name: 'Scott Fendorf',
      role: 'Co-founder',
      background: 'Co-founded Terradot and serves as Chief Scientist and Technical Advisor.',
    },
  ],
  whyBuilding:
    'Scale Enhanced Rock Weathering into a global climate solution that permanently removes CO2.',
  beliefs: [
    'Permanent carbon removal is essential for climate stability',
    'Operational execution and MRV are critical to trust',
    'Scaling ERW requires tight integration of science and operations',
  ],
  designPhilosophy: 'Make scientific and operational complexity actionable for teams in the field.',
  greenFlags: [
    'Significant funding and major offtake agreements',
    'High-profile partnership with Microsoft',
  ],
  redFlags: [
    'Scientific validation and MRV complexity',
    'Operational scale requirements are massive',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Workflows for planning and executing ERW projects',
        'Role-based permissions across field and HQ teams',
        'Safety and compliance checkpoints',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'MRV dashboards and reporting pipelines',
        'Quality metrics for data collection',
        'Audit trails for carbon removal verification',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Field data capture and mobile UX',
        'Operations dashboards for project managers',
        'Partner reporting portals',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Climate operations and science teams',
    secondary: 'Carbon removal buyers and partners',
  },
  userProblems: [
    'Scaling ERW requires complex operational coordination',
    'MRV data collection is fragmented and difficult to trust',
    'Field teams need streamlined workflows for project execution',
    'Buyers need transparent reporting on carbon removal outcomes',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'Sao Paulo (On-site)',
      url: 'https://jobs.ashbyhq.com/terradot/4dee088e-c21f-4a76-983c-3c950f10f8d0',
      type: 'full-time',
      aboutRole:
        "Own end-to-end design of Terradot's ERW execution platform across planning, operations, and MRV workflows.",
      responsibilities: [
        'Lead end-to-end product design from research to iteration',
        'Partner with product and engineering to refine solutions',
        'Design workflows that bridge physical and digital operations',
        'Translate complex processes into clear user flows',
        'Facilitate user research and design workshops',
      ],
      requirements: [
        'Experience designing complex operational software',
        'Comfort with technical or scientific workflows',
        'Strong portfolio and prototyping skills',
        'Skilled in user research and testing',
      ],
      preferred: [
        'Experience in data-heavy domains (agriculture, logistics, healthcare)',
        'Interest in climate solutions and ERW',
      ],
    },
    {
      title: 'Senior Product Designer',
      location: 'Sao Paulo (On-site)',
      url: 'https://jobs.ashbyhq.com/terradot/fea44e1d-b335-47fc-bc55-1fe08470c9bc',
      type: 'full-time',
      aboutRole:
        "Lead design of Terradot's ERW software platform with significant ownership over workflows and UX quality.",
      responsibilities: [
        "Own end-to-end design across Terradot's platform",
        'Collaborate with product and engineering leads',
        'Translate operational complexity into intuitive workflows',
        'Run research sessions and design workshops',
        'Maintain high usability and accessibility standards',
      ],
      requirements: [
        '5+ years designing web and mobile products',
        'Experience with operational or data-intensive workflows',
        'Strong portfolio and communication skills',
        'Proficient in modern design and prototyping tools',
      ],
      preferred: [
        'Experience in operational, scientific, or logistics domains',
        'Passion for climate solutions',
      ],
    },
  ],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'High-impact climate mission with strong funding',
      'Complex design problems across field and science workflows',
    ],
    whyNot: [
      'Operational complexity and long deployment cycles',
      'High bar for scientific validation and MRV',
    ],
    nextActions: [
      'Monitor product maturity and field deployments',
      'Track design team growth and leadership hires',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:55:00',
  sources: [
    { title: 'Terradot company site', url: 'https://terradot.earth/company' },
    { title: 'Terradot Microsoft deal (BusinessWire)', url: 'https://www.businesswire.com/news/home/20250403593732/en/Microsoft-and-Terradot-announce-deal-for-12-000-tons-of-permanent-carbon-removal/' },
    { title: 'Terradot launch + funding (BusinessWire)', url: 'https://www.businesswire.com/news/home/20241212309547/en/Terradot-Launches-Out-of-Stanford-to-Deliver-Permanent-Carbon-Removal/' },
    { title: 'Terradot on startups.gallery', url: 'https://startups.gallery/companies/terradot' },
    { title: 'Terradot Product Designer role (Ashby)', url: 'https://jobs.ashbyhq.com/terradot/4dee088e-c21f-4a76-983c-3c950f10f8d0' },
    { title: 'Terradot Senior Product Designer role (Ashby)', url: 'https://jobs.ashbyhq.com/terradot/fea44e1d-b335-47fc-bc55-1fe08470c9bc' },
  ],
};
