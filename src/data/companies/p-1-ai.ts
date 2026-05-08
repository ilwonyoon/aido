import { Company } from '../types';

export const p1Ai: Company = {
  id: 'p-1-ai',
  name: 'P-1 AI',
  description:
    'Engineering AGI startup building Archie, an AI engineer for physical product domains with quantitative intuition across mechanical, electrical, and multiphysics design work.',
  website: 'https://p-1.ai/',
  headquarters: 'San Mateo, CA',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  subcategories: ['other-vertical'],
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$23M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$23M',
      date: '2025-04',
      leadInvestors: ['Radical Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Out of stealth in April 2025; hiring founding design for Archie product experience.',
  runway: 'Strong seed runway',
  customers: 'Industrial engineering teams evaluating AI engineering workflows',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      '$23M seed led by Radical Ventures',
      'Backed by AI and industrial investors including Village Global, Schematic Ventures, Lerer Hippeau, Jeff Dean, Peter Welinder, and Bob van Luijt',
      'Building Archie, an AI engineer for mechanical and electrical engineering tasks',
      'Hiring founding product designer for remote US role',
    ],
    tam: 'Industrial engineering software and engineering services market, potentially tens of billions if AI agents enter core product development workflows',
    marketShare: '<0.1% = very early category formation',
    ceiling: 'Very high if AI engineering agents become part of every industrial product team.',
    tailwinds: [
      'Demand for AI beyond software engineering into physical product development',
      'Rising interest in agents that can use domain-specific engineering tools',
      'Synthetic data and simulation advances improving physical design reasoning',
      'Industrial companies face talent constraints and repetitive engineering work',
    ],
    headwinds: [
      'Engineering AGI is technically ambitious and unproven',
      'Physical product design has high safety and correctness requirements',
      'Long enterprise validation cycles in industrial markets',
      'Domain tools and workflows are fragmented across CAD, CAE, PLM, and simulation stacks',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if P-1 builds proprietary multiphysics reasoning data, tool-use loops, and customer feedback from industrial engineering work.',
  },

  // Competition
  competitors: [
    {
      name: 'PhysicsX',
      description: 'AI engineering and simulation platform for advanced industries.',
      whyTheyWin: 'Strong positioning in industrial simulation and engineering workflows.',
    },
    {
      name: 'Rescale',
      description: 'Cloud HPC and simulation platform for engineering teams.',
      whyTheyWin: 'Established enterprise relationships and simulation infrastructure.',
    },
    {
      name: 'Autodesk AI',
      description: 'AI features inside Autodesk design and engineering software.',
      whyTheyWin: 'Deep distribution through incumbent CAD and engineering tools.',
    },
  ],
  marketPosition: 'Engineering AGI for physical product design',
  moat: [
    'Multiphysics reasoning and spatial intelligence focused on real engineering tasks',
    'Synthetic training datasets for engineering domains',
    'Founder experience across aerospace, robotics, and frontier AI research',
  ],
  vsGiants: 'More focused on autonomous engineering agents than incumbent CAD/CAE vendors adding AI features.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI IS the product. Archie is an AI engineer for physical systems; without AI, P-1 AI has no product surface.',
  aiDesignChallenges: [
    'Designing trust and review flows for high-stakes engineering outputs',
    'Making quantitative multiphysics reasoning legible to expert engineers',
    'Designing interfaces for AI agents operating complex engineering tools',
    'Handling uncertainty, validation, and safety before generated designs affect physical products',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Paul Eremenko',
      role: 'Co-founder & CEO',
      background: 'Former CTO of Airbus and United Technologies, with deep aerospace and industrial engineering leadership experience.',
    },
    {
      name: 'Aleksa Gordic',
      role: 'Co-founder & Head of AI',
      background: 'Former research engineer at Google DeepMind and Microsoft.',
    },
  ],
  whyBuilding:
    'P-1 AI believes the greatest impact of artificial intelligence will be on the built world and aims to put an AI engineer on every engineering team at every industrial company.',
  beliefs: [
    'AI agents can move from coding into physical product engineering',
    'Engineering teams need agents that understand tools, simulation, constraints, and quantitative tradeoffs',
    'The built world is the next major frontier for AI productivity',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    '$23M seed led by Radical Ventures',
    'Exceptional founder-market fit across industrial engineering and AI research',
    'Clear and ambitious product wedge: Archie as an AI engineer for physical systems',
    'Founding Product Designer role gives direct ownership over a new AI-native engineering surface',
  ],
  redFlags: [
    'Very ambitious technical scope with uncertain timeline to production reliability',
    'Industrial enterprise sales and validation cycles can be slow',
    'Design work will require deep domain learning in mechanical/electrical engineering',
    'Remote role still expects quarterly San Mateo co-working, limiting pure remote flexibility',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow design for engineering tool use',
        'Human review and approval loops for generated engineering decisions',
        'Task decomposition from engineering goals into AI-executable steps',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Evidence and confidence displays for AI engineering outputs',
        'Simulation result comparison and validation UX',
        'Failure-mode review for physical design decisions',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Archie product workspace and command surface',
        'Engineering artifact review interfaces',
        'Design system for complex technical workflows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Mechanical, electrical, aerospace, automotive, robotics, and industrial engineering teams',
    secondary: 'Engineering leaders evaluating AI agents for product development workflows',
  },
  userProblems: [
    'Engineering teams spend substantial time on repetitive analysis and tool-operation tasks',
    'Physical product design requires navigating complex constraints across multiple domains',
    'Expert engineering bandwidth is scarce',
    'Simulation, CAD, and product data tools are fragmented',
    'AI-generated engineering work needs explainability and rigorous validation before use',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'United States (remote; quarterly San Mateo co-working)',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-05',
      url: 'https://jobs.ashbyhq.com/P-1%20AI/cfbb66d3-0088-4f31-a63f-d5bed860ce10',
      compensation: '$200K-$250K + equity',
      aboutRole:
        'Own product design for Archie, an AI engineer for physical product domains and engineering tool workflows.',
      requirements: [
        'Product design experience for complex technical products',
        'Strong systems thinking and ability to work with ambiguous AI workflows',
        'Comfort collaborating with research, engineering, and forward-deployed teams',
      ],
      whyInteresting:
        'Founding design role for a Level A AI-native startup working on a rare product surface: AI agents for physical-world engineering.',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Founding Product Designer role is remote in the United States but expects quarterly co-working with the team in San Mateo.',
      url: 'https://jobs.ashbyhq.com/P-1%20AI/cfbb66d3-0088-4f31-a63f-d5bed860ce10',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Level A AI-native product with a genuinely new design surface',
      'Founding Product Designer ownership over AI engineering workflows',
      'Strong founder-market fit and $23M Radical-led seed',
      'High-value domain: physical product engineering and industrial AI',
    ],
    whyNot: [
      'Very technical domain with steep learning curve',
      'Engineering AGI may take years to become reliable',
      'Industrial customers can slow down product iteration',
      'Remote but not fully async: quarterly San Mateo co-working expected',
    ],
    nextActions: [
      'Evaluate Archie demos and product screenshots when available',
      'Review arXiv paper on engineering AGI evaluation',
      'Assess how much of the role is product UI vs. research/tooling UX',
    ],
  },

  // Meta
  lastUpdated: '2026-05-05',
  sources: [
    { title: 'P-1 AI Website', url: 'https://p-1.ai/' },
    { title: 'BusinessWire: P-1 AI comes out of stealth with $23M seed', url: 'https://www.businesswire.com/news/home/20250425073932/en/P-1-AI-Comes-Out-of-Stealth-Aims-to-Build-Engineering-AGI-for-Physical-Systems' },
    { title: 'Radical Ventures: P-1 AI portfolio', url: 'https://radical.vc/portfolio/p-1-ai-2/' },
    { title: 'Goodwin: P-1 AI $23M seed financing', url: 'https://www.goodwinlaw.com/en/news-and-events/news/2025/04/announcements-technology-goodwin-advised-p-1-ai' },
    { title: 'Founding Product Designer at P-1 AI', url: 'https://jobs.ashbyhq.com/P-1%20AI/cfbb66d3-0088-4f31-a63f-d5bed860ce10' },
  ],
};
