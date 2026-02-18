import { Company } from '../types';

export const kindredSystems: Company = {
  id: 'kindred-systems',
  name: 'Kindred Systems',
  description: 'AI-powered robotics company building piece-picking systems for e-commerce and fulfillment operations. Acquired by Ocado Group in 2020.',
  website: 'https://kindred.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',
  ogImage: '/og-images/kindred-systems-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Acquired',
  valuation: '$262M (acquisition price)',
  totalFunding: '~$44M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$12M',
      date: '2015-08',
      leadInvestors: ['Eclipse Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$28M',
      date: '2017-10',
      leadInvestors: ['Tencent'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Gap, American Eagle Outfitters, and other e-commerce fulfillment operators',

  // Competition
  competitors: [
    {
      name: 'RightHand Robotics',
      description: 'Robotic piece-picking systems for warehouse automation.',
      whyTheyWin: 'Focus on flexible picking hardware and software stack.',
    },
    {
      name: 'Covariant',
      description: 'AI robotics for warehouse automation and item picking.',
      whyTheyWin: 'Large model-driven robotics platform and enterprise scale.',
    },
    {
      name: 'Berkshire Grey',
      description: 'Robotic fulfillment solutions for warehouses and logistics.',
      whyTheyWin: 'Public company scale and large deployments.',
    },
  ],
  marketPosition: 'Pioneer in reinforcement-learning-based robotic picking for warehouse automation.',
  moat: [
    'First robotics company to deploy reinforcement learning in production',
    'Human-in-the-loop VR piloting system for robot training',
    'Proven deployments with major retail brands',
  ],
  vsGiants: 'Specialized robotic picking expertise now integrated into Ocado fulfillment platform.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to perception and robotic manipulation — reinforcement learning drives core picking behavior.',
  aiDesignChallenges: [
    'Designing operator trust and visibility for autonomous picking',
    'Human-robot handoff UX in VR piloting workflows',
    'Balancing human oversight with robot autonomy in fulfillment',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Geordie Rose',
      role: 'Co-founder & CEO (left Jan 2018, co-founded Sanctuary AI)',
      background: 'Co-founder of D-Wave, quantum computing pioneer. Founded Kindred in 2014 to apply AI to robotics.',
    },
    {
      name: 'Suzanne Gildert',
      role: 'Co-founder & CTO (left Jan 2018, co-founded Sanctuary AI)',
      background: 'PhD in experimental physics (U of Birmingham). Former D-Wave researcher, focused on AI consciousness.',
    },
    {
      name: 'George Babu',
      role: 'Co-founder',
      background: 'Co-founded Kindred in 2014 alongside D-Wave alumni.',
    },
    {
      name: 'James Bergstra',
      role: 'Co-founder',
      background: 'Machine learning researcher, co-founded Kindred in 2014.',
    },
  ],
  whyBuilding: 'Believed human-like intelligence in machines could solve warehouse picking, one of logistics\' hardest automation problems.',
  beliefs: [
    'Reinforcement learning can enable robots to handle real-world dexterity tasks',
    'Human-robot collaboration (VR piloting) accelerates robot learning',
    'Piece-picking is the bottleneck for warehouse automation at scale',
  ],
  greenFlags: [
    '$262M acquisition validates technology and market fit',
    'D-Wave co-founders bring deep technical credibility',
    'Production deployments with Gap, American Eagle',
  ],
  redFlags: [
    'Both co-founders left before acquisition to start Sanctuary AI',
    'Capital-intensive robotics hardware deployments',
    'Fully absorbed into Ocado — no independent roadmap',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (absorbed into Ocado post-acquisition)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Robot behavior oversight dashboards',
        'Exception handling workflows for pick failures',
        'VR piloting interface for human-robot collaboration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Pick accuracy monitoring and QA dashboards',
        'Robot performance analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operator control panels for warehouse floor',
        'Fleet management and analytics views',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Warehouse operations teams at e-commerce retailers',
    secondary: 'Logistics and fulfillment center managers',
  },
  userProblems: [
    'Manual picking is costly and error-prone at scale',
    'Labor shortages make fulfillment reliability harder',
    'Existing automation cannot handle diverse item shapes and sizes',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Robotics UX + human/AI collaboration challenges',
      'Reinforcement learning applied to physical world',
    ],
    whyNot: [
      'Acquired by Ocado — no independent company',
      'Both original founders left to start Sanctuary AI',
      'Limited design hiring post-acquisition',
    ],
    nextActions: ['Monitor Ocado robotics design roles if interested'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'mature-growth',
    signals: [
      'Acquired by Ocado for $262M in Nov 2020',
      '$44M total funding across 2 rounds',
      'Technology integrated into Ocado fulfillment platform',
    ],
    tam: '$30B+ warehouse automation and logistics robotics market',
    ceiling: 'Fully integrated into Ocado — growth tied to parent company expansion',
    tailwinds: [
      'E-commerce automation demand',
      'Warehouse labor shortages',
      'Ocado platform expanding globally',
    ],
    headwinds: [
      'Hardware deployment complexity',
      'Post-acquisition talent attrition',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: RL-based picking tech differentiated but now Ocado-owned',
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Ocado acquires Kindred Systems announcement', url: 'https://www.ocadogroup.com/investors/ocado-acquires-kindred-systems-and-haddington-dynamics' },
    { title: 'CNBC — Ocado acquires Kindred and Haddington', url: 'https://www.cnbc.com/2020/11/02/ocado-acquires-kindred-systems-haddington-dynamics-robotics.html' },
    { title: 'Kindred Series B — $35M led by Tencent', url: 'https://www.bctechnology.com/news/2017/10/24/Ultra-Secretive-Startup-Company-Kindred-Closes-35-Million-Series-B-Financing-Led-by-Chinese-investor-Tencent.cfm' },
    { title: 'IEEE Spectrum — D-Wave founder Geordie Rose and Kindred AI', url: 'https://spectrum.ieee.org/dwave-founder-new-startup-kindred-ai' },
    { title: 'Kindred AI Crunchbase profile', url: 'https://www.crunchbase.com/organization/kindred-2' },
  ],
};
