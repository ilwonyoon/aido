import { Company } from '../types';

export const octapulse: Company = {
  id: 'octapulse',
  name: 'OctaPulse',
  description: 'Robotics and computer vision platform automating fish inspection across the aquaculture lifecycle — cutting inspection time from 5 minutes to under 30 seconds per fish with 95%+ accuracy.',
  website: 'https://www.tryoctapulse.com',
  headquarters: 'Unknown',
  remote: 'Unknown',

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: '6-figure annual contract with Riverence (North America\'s largest trout producer)',
  growth: 'Deploying into 2+ additional farms in early 2026 after first paying customer',
  runway: 'YC-backed + first revenue — runway stable',
  customers: 'Aquaculture farms (hatcheries, grow-out facilities, processing plants)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown — first 6-figure contract signed at launch',
    userGrowth: 'First deployed at Riverence; expanding to 2+ farms in 2026',
    signals: [
      '6-figure annual contract with Riverence (North America\'s largest trout producer)',
      '95%+ accuracy on fish broodstock phenotyping and juvenile deformity inspection',
      'Inspection time: 5 minutes → 30 seconds per fish (10x improvement)',
      'YC W26 backing',
      'Farms spend >$200K/year on manual inspection technicians and geneticists',
    ],
    tam: '$300B global aquaculture market; $10B+ addressable in farm automation and QA',
    marketShare: '<0.1% of addressable market = 500x+ upside potential',
    ceiling: 'Early innings: aquaculture automation is at a 2014-era robotics maturity level',
    tailwinds: [
      'Global seafood demand increasing as wild fish stocks decline',
      'Labor shortages in aquaculture — trained geneticists and QA technicians are scarce',
      'Precision aquaculture movement (yield optimization, disease reduction)',
      'Climate change increasing fish disease pressure — higher QA urgency',
    ],
    headwinds: [
      'Hardware deployment in wet, salt, and ammonia environments is operationally complex',
      'Aquaculture customers are risk-averse and slow to adopt new technology',
      'Long sales cycles in agriculture and food production verticals',
      'Competition from general-purpose farm automation players (John Deere, etc.)',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate: fish inspection dataset (broodstock, deformity, phenotype) becomes defensible with each farm deployed; hardware integration creates switching cost.',
  },

  // Competition
  competitors: [
    {
      name: 'Aquabyte',
      description: 'Computer vision platform for salmon farming — lice counting, weight estimation',
      whyTheyWin: 'First mover in salmon/Norway market; strong industry relationships',
    },
    {
      name: 'Observe Technologies',
      description: 'AI-powered fish behavioral monitoring and feeding optimization',
      whyTheyWin: 'Focus on feed optimization (largest cost for farms) = direct ROI',
    },
    {
      name: 'Evonik / DSM (Sustell)',
      description: 'Digital sustainability tools for aquaculture and livestock',
      whyTheyWin: 'Incumbent animal nutrition companies with farm relationships',
    },
  ],
  marketPosition: 'Robotics + computer vision QA platform for the full aquaculture lifecycle (hatchery to processing)',
  moat: [
    'Proprietary fish phenotyping and deformity inspection dataset',
    'Hardware + software integration (camera systems + AI model + reporting)',
    'First customer (Riverence) provides validation and reference for industry',
  ],
  vsGiants: 'Purpose-built for aquaculture QA vs generic machine vision platforms that don\'t handle wet/live fish environments',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Computer vision and robotics are core differentiators. Without AI, inspection reverts to manual ($200K+/year per farm). The physical robotics is the delivery mechanism.',
  aiDesignChallenges: [
    'Inspection result visualization: how do farm workers review AI-flagged deformities?',
    'Confidence display: when AI is uncertain on a fish classification, what\'s the UI?',
    'Report generation: how do daily inspection results feed into farm management decisions?',
    'Operator training: how does a non-technical farm worker operate the robotic system?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Paul Grech',
      role: 'CEO & Co-founder',
      background: 'From Malta and Puerto Rico. Leads commercial partnerships and business development. CMU VentureBridge 2025 cohort.',
    },
    {
      name: 'Rohan Singh',
      role: 'CTO & Co-founder',
      background: 'From Goa, India. Robotics and AI engineering background from CMU, ASML, Toyota, Tesla, and NVIDIA.',
    },
  ],
  whyBuilding: 'Both founders are from coastal communities dependent on fishing industries. They saw firsthand how aquaculture labor shortages and inefficient manual inspection were destroying farm profitability — and knew computer vision could fix it.',
  beliefs: [
    'Aquaculture is the fastest path to sustainable protein — but it needs automation to scale',
    'Fish health data from hatchery to harvest is the key to farm profitability',
    'Computer vision can do in seconds what trained technicians take hours to do manually',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Rohan Singh: Tesla + NVIDIA + ASML engineering pedigree = hardware/CV credibility',
    'First paying customer (Riverence, 6-figure) before raising beyond YC',
    'Founders from fishing communities — deep domain insight, not just technology tourists',
    'Clear ROI: farms save $200K+/year by replacing manual inspection',
  ],
  redFlags: [
    'Hardware startup: complex ops, high CAC, slow iteration cycles',
    'Tiny team and tiny raise ($500K) for hardware deployment',
    'Aquaculture niche may limit market size vs horizontal robotics plays',
    'Wet environment deployment is operationally challenging to scale',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 2-4 total, pre-revenue stage)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Inspection workflow: how the robotic system guides fish through the CV process',
        'Threshold configuration: what deformity severity triggers a rejection?',
        'Integration with farm management systems (FMS) and ERP',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Daily inspection report design: what data does farm management need?',
        'Accuracy review: when AI misclassifies, how does a technician correct and retrain?',
        'Yield tracking: how does improved QA translate to measurable farm outcomes?',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operator UI on the robotic unit (ruggedized, waterproof environment)',
        'Farm management dashboard: fish health trends, inspection history, alerts',
        'Geneticist reporting: broodstock selection data and phenotype records',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Unique domain: fish farming robotics is a genuinely novel design challenge',
      'Early stage with first paying customer — real product signals, not just speculation',
      'Founders have strong technical credibility (CMU + Tesla + NVIDIA)',
    ],
    whyNot: [
      'Hardware + aquaculture niche = very limited design surface area',
      'Tiny team, tiny raise — design not a priority',
      'Slow hardware iteration cycles; deployment complexity reduces design velocity',
      'Vertical niche may not transfer to broader design career',
    ],
    nextActions: [
      'Monitor for Series A raise and team growth',
      'Watch for product design job openings as team scales',
    ],
  },

  // Meta
  lastUpdated: '2026-04-21T00:00:00',
  sources: [
    { title: 'OctaPulse YC Profile', url: 'https://www.ycombinator.com/companies/octapulse' },
    { title: 'OctaPulse Launch HN', url: 'https://news.ycombinator.com/item?id=47220320' },
    { title: 'OctaPulse Crunchbase', url: 'https://www.crunchbase.com/organization/octapulse-technologies' },
    { title: 'CMU VentureBridge Spotlight — Paul Grech', url: 'https://www.cmu.edu/swartz-center-for-entrepreneurship/resources-funding-and-talent/venturebridge/venturebridge-2025-spotlight-octapulse.html' },
  ],
};
