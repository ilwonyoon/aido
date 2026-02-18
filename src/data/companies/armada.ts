import { Company } from '../types';

export const armada: Company = {
  id: 'armada',
  name: 'Armada',
  description: 'Full-stack edge computing platform delivering AI, compute, and connectivity to remote and rugged environments worldwide.',
  website: 'https://www.armada.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/armada-og.webp',
  category: 'enterprise-ops' as const,
  aiTypes: ['ai-infrastructure'],
  markets: ['enterprise', 'b2b'],
  industries: ['infrastructure'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$226M+',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$55M',
      date: '2023-12',
      leadInvestors: ['Founders Fund', 'Lux Capital'],
    },
    {
      stage: 'Series A',
      amount: '$40M',
      date: '2024-07',
      leadInvestors: ['M12'],
    },
    {
      stage: 'Series B',
      amount: '$131M',
      date: '2025-07',
      leadInvestors: ['Pinegrove', 'Veriten', 'Glade Brook'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Rapid expansion; Leviathan megawatt-scale data center launched 2025',
  runway: 'Strong ($131M raised Jul 2025)',
  customers: 'Oil & gas, defense, mining, telecom, government enterprises',

  competitors: [
    {
      name: 'Vapor IO',
      description: 'Edge colocation and interconnection at the network edge.',
      whyTheyWin: 'Dense urban edge network with carrier partnerships',
    },
    {
      name: 'Crusoe Energy',
      description: 'Clean compute using stranded natural gas for AI workloads.',
      whyTheyWin: 'Established energy-to-compute pipeline at scale',
    },
    {
      name: 'EdgePresence',
      description: 'Modular edge data centers for distributed infrastructure.',
      whyTheyWin: 'First-mover in modular edge deployments',
    },
  ],
  marketPosition: 'First full-stack edge platform combining connectivity, compute, and AI for remote industrial environments',
  moat: [
    'Full-stack integration: connectivity + compute + AI in single platform',
    'Ruggedized hardware (Galleon, Leviathan) built for extreme environments',
    'Deep defense and government relationships',
    'Strategic investor network: Founders Fund, Microsoft M12, Lux Capital',
  ],
  vsGiants: 'AWS/Azure edge solutions require connectivity; Armada operates where traditional cloud cannot reach',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI inference and training at the edge is a core differentiator. Platform enables real-time ML workloads in environments without cloud access.',
  aiDesignChallenges: [
    'Monitoring and managing distributed AI workloads across remote edge nodes',
    'Designing for low-bandwidth, high-latency environments with intermittent connectivity',
    'Enterprise dashboard UX for complex multi-site infrastructure management',
  ],

  founders: [
    {
      name: 'Dan Wright',
      role: 'Co-Founder & CEO',
      background: 'Former CEO of DataRobot (CNBC Disruptor 50); COO of AppDynamics through $3.7B Cisco acquisition.',
    },
    {
      name: 'Jon Runyan',
      role: 'Co-Founder & COO',
      background: 'Previously at Okta; operational leadership experience in enterprise SaaS.',
    },
    {
      name: 'Pradeep Nair',
      role: 'Founding CTO',
      background: 'Led Azure edge and infrastructure groups at Microsoft; prior roles at VMware.',
    },
  ],
  whyBuilding: 'Believes real-time computing should be accessible anywhere on Earth, not just where fiber and cloud data centers exist.',
  beliefs: [
    'Edge computing is the next frontier — not everything can go to the cloud',
    'AI must work where the data is generated, not in distant data centers',
    'Ruggedized, deployable infrastructure unlocks underserved industries',
  ],
  greenFlags: [
    'Experienced leadership team (DataRobot, AppDynamics, Microsoft Azure)',
    'Strong investor syndicate: Founders Fund, M12, Lux Capital, Felicis',
    '$226M+ raised across 3 rounds in under 2 years',
    'Clear product-market fit in defense and energy sectors',
  ],
  redFlags: [
    'Hardware-heavy business model = capital intensive',
    'Niche market focus (remote/rugged) may limit TAM',
    'Early revenue stage — no disclosed ARR metrics',
  ],

  designTeam: {
    teamSize: '~2-3 (1 Senior UI/UX Designer role open)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Edge node fleet management workflows',
        'AI workload orchestration and scheduling logic',
        'Connectivity failover and recovery patterns',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Infrastructure health monitoring dashboards',
        'AI inference performance metrics visualization',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Atlas enterprise monitoring platform UI',
        'Marketplace for hardware/software discovery and deployment',
        'Bridge GPU-as-a-Service management console',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise operations teams in oil & gas, defense, and mining',
    secondary: 'Government agencies and telecom providers in remote regions',
  },
  userProblems: [
    'No cloud access in remote field operations — data processing delayed by hours or days',
    'Existing edge solutions lack integrated AI/ML capabilities',
    'Deploying compute infrastructure to rugged environments is slow and expensive',
    'Managing distributed compute nodes across dozens of remote sites is complex',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Senior UI/UX Designer',
      location: 'San Francisco, CA / Bellevue, WA / Los Angeles, CA (Hybrid)',
      url: 'https://job-boards.greenhouse.io/armada/jobs/5080694008',
      level: 'Senior',
      type: 'full-time',
      compensation: '$139,000 - $174,200 + Equity',
      aboutRole: 'Create intuitive, engaging user interfaces across Armada digital products including website and Growth products.',
      responsibilities: [
        'Conduct user research and usability testing',
        'Create personas, journey maps, wireframes, prototypes, and high-fidelity mockups',
        'Design intuitive interfaces across web and mobile platforms',
        'Maintain design systems and style guides',
      ],
      requirements: [
        '8+ years UI/UX, Product Design, or similar experience',
        'Strong portfolio showcasing web and mobile work',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Cross-functional collaboration experience',
      ],
      preferred: [
        'Degree in Design, HCI, or Computer Science',
        'Front-end development experience (HTML/CSS/JavaScript)',
        'AI tools proficiency for design acceleration',
      ],
      whyInteresting: 'Early design hire shaping enterprise monitoring and AI infrastructure products from the ground up.',
    },
  ],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Rapid team growth from stealth to 100+ employees in under 2 years; strong hiring from Microsoft, DataRobot, and defense tech.',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'Limited reviews available — company still early-stage with small team.',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      '$131M Series B (Jul 2025) — largest round to date',
      'Leviathan megawatt-scale modular data center launched',
      'Deploying to North Dakota, Texas, West Virginia, Louisiana',
    ],
    tam: '$61.14B edge computing market by 2028 (Grand View Research)',
    marketShare: '<0.5% of TAM = 200x+ upside potential',
    ceiling: 'Early innings: edge AI adoption in industrial sectors just beginning',
    tailwinds: [
      'AI inference demand moving to edge from centralized cloud',
      'Defense and energy sector digitization acceleration',
      'Starlink and LEO satellite connectivity expanding remote access',
    ],
    headwinds: [
      'Capital-intensive hardware manufacturing and deployment',
      'AWS/Azure expanding their own edge offerings',
      'Long enterprise and government sales cycles',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: ruggedized full-stack platform with no direct competitor at this integration level',
  },

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Early design hire — shape products from ground up',
      'Level B AI-native with real infrastructure challenges',
      'Strong leadership team with proven exits (AppDynamics $3.7B)',
    ],
    whyNot: [
      'Hardware-heavy business differs from pure software product design',
      'Enterprise/government focus may limit creative design freedom',
      'Small design team — may lack mentorship and design culture',
    ],
    nextActions: [
      'Monitor design team growth and Head of Design hire',
      'Watch for product launches beyond infrastructure dashboards',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Armada Official Website - About', url: 'https://www.armada.ai/about' },
    { title: 'Armada $131M Funding Announcement', url: 'https://www.prnewswire.com/news-releases/armada-announces-131m-strategic-funding-round-launch-of-megawatt-scale-modular-ai-data-centers-to-accelerate-american-energy-and-ai-dominance-302513137.html' },
    { title: 'Armada $40M M12-led Round - Fortune', url: 'https://fortune.com/2024/07/11/exclusive-armada-lands-40-million-in-funding-round-led-by-microsofts-m12/' },
    { title: 'Armada Launches From Stealth - Built In SF', url: 'https://www.builtinsf.com/articles/armada-raises-55m-20231211' },
    { title: 'Senior UI/UX Designer - Greenhouse', url: 'https://job-boards.greenhouse.io/armada/jobs/5080694008' },
  ],
};
