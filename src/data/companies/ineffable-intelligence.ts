import { Company } from '../types';

export const ineffableIntelligence: Company = {
  id: 'ineffable-intelligence',
  name: 'Ineffable Intelligence',
  description: 'AI research lab building a "superlearner" — an AI system that discovers knowledge and skills from its own experience without relying on human-generated data, using reinforcement learning as the core engine.',
  website: 'https://ineffable.ai',
  headquarters: 'London, UK',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Seed',
  valuation: '$5.1B (Apr 2026)',
  totalFunding: '$1.1B',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$1.1B',
      date: '2026-04',
      valuation: '$5.1B',
      leadInvestors: ['Sequoia Capital', 'Lightspeed Venture Partners'],
    },
  ],
  revenue: 'Unknown (pre-revenue research lab)',
  growth: 'Launched from stealth; no public metrics yet',
  runway: 'Very long ($1.1B seed round, Apr 2026)',
  customers: 'None yet — deep research phase',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown — pre-revenue',
    userGrowth: 'Unknown — no product launched',
    signals: [
      '$1.1B seed round at $5.1B valuation (Apr 2026) — largest seed in European history',
      'Backed by Sequoia, Lightspeed, Nvidia, Google',
      'Founded by David Silver, creator of AlphaGo — arguably the most credentialed RL researcher alive',
      'Ex-DeepMind co-founders with direct reinforcement learning research pedigree',
    ],
    tam: '$500B+ (AGI/superintelligence as a service; foundational AI platform)',
    marketShare: '0% currently — research phase; massive optionality if superlearner works',
    ceiling: 'Uncapped if self-learning AI generalizes — or irrelevant if it doesn\'t work in 5 years',
    tailwinds: [
      'Frontier AI scaling showing signs of slowing on human-data-trained models',
      'Rising demand for AI systems that can discover novel knowledge beyond training data',
      'Nvidia and Google co-investing signals infrastructure alignment',
      'Reinforcement learning having a resurgence (AlphaCode, o1, DeepSeek-R1) validates the bet',
    ],
    headwinds: [
      'Research-to-product gap is enormous — building a superlearner is unsolved science',
      'Competing directly with Google DeepMind, OpenAI, Anthropic on core research',
      'Pre-revenue with no commercial product — burn rate on $1.1B could be rapid at frontier scale',
      'Key person risk: David Silver is the entire thesis',
    ],
    moatType: 'technology',
    moatStrength: 'David Silver co-created AlphaGo, AlphaZero, AlphaCode — deepest RL expertise in the world. If self-learning AI works, early technical lead compounds.',
  },

  // Competition
  competitors: [
    {
      name: 'Google DeepMind',
      description: 'David Silver\'s former employer, leading RL research lab.',
      whyTheyWin: 'Compute scale, team depth, Gemini distribution — and the team that trained him.',
    },
    {
      name: 'OpenAI',
      description: 'Frontier AI lab with o3 and Reinforcement Learning from Human Feedback.',
      whyTheyWin: 'GPT distribution, massive compute, and dominant developer ecosystem.',
    },
    {
      name: 'Anthropic',
      description: 'Safety-focused frontier lab with Claude.',
      whyTheyWin: 'Enterprise adoption, strong safety positioning, $27B+ in funding.',
    },
    {
      name: 'xAI',
      description: 'Elon Musk\'s AI lab building Grok.',
      whyTheyWin: 'X platform distribution, massive compute investments.',
    },
  ],
  marketPosition: 'Self-learning superintelligence research — AI that discovers knowledge without human data',
  moat: [
    'David Silver: creator of AlphaGo, AlphaZero, AlphaCode — the definitive reinforcement learning researcher',
    'Reinforcement learning without human data as core thesis — differentiates from RLHF-based frontier labs',
    'UK-based: potential regulatory arbitrage vs. US labs',
  ],
  vsGiants: 'Pure RL / self-learning approach vs. frontier labs doubling down on human-data-trained RLHF models.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product: Ineffable is building foundational AI research infrastructure. The company exists entirely to advance self-learning AI. No AI = no company.',
  aiDesignChallenges: [
    'Visualizing AI learning trajectories and emergent behaviors without human-interpretable benchmarks',
    'Designing evaluation frameworks for systems that discover knowledge humans haven\'t defined',
    'Building research tooling UX for RL experiments at scale',
    'Making superintelligence capabilities legible to eventual enterprise buyers',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'David Silver',
      role: 'Co-founder & CEO',
      background: 'Former lead of DeepMind\'s reinforcement learning team; creator of AlphaGo, AlphaZero, and AlphaCode. UCL professor. Led the research that defined modern RL.',
      whyBuilding: 'Build a system that can discover all knowledge from its own experience — from elementary motor skills to profound intellectual breakthroughs — without relying on human data.',
      beliefs: ['Reinforcement learning, not imitation of human data, is the path to superintelligence', 'Self-play and environment interaction can exceed what human demonstrations can teach'],
    },
    {
      name: 'Alex Laterre',
      role: 'Co-founder',
      background: 'Former DeepMind researcher; reinforcement learning background.',
    },
    {
      name: 'Antoine Moyroud',
      role: 'Co-founder',
      background: 'Former DeepMind researcher; RL and AI systems background.',
    },
  ],
  whyBuilding: '"Build a system that can discover all knowledge from its own experience, from elementary motor skills to profound intellectual breakthroughs." — Alex Laterre at launch',
  beliefs: [
    'Reinforcement learning from self-experience will surpass models trained on human data',
    'A true superlearner must generate its own training signal — not imitate human outputs',
    'First contact with superintelligence will come from RL, not scaling transformers on human text',
  ],
  designPhilosophy: 'Unknown — research lab, no product UX visible',
  greenFlags: [
    'Largest seed round in European history ($1.1B)',
    'David Silver is arguably the most credentialed RL researcher alive (AlphaGo, AlphaZero)',
    'Backed by Sequoia, Lightspeed, Nvidia, Google — the strongest possible investor coalition',
    'Self-learning thesis is genuinely differentiated from RLHF-based frontier labs',
  ],
  redFlags: [
    'Pre-revenue, no product, entirely research phase — enormous execution risk',
    'Mission is literally "build superintelligence" — may never produce a commercial product',
    'Key person risk concentrated in David Silver',
    'Competing against Google DeepMind where Silver previously worked (ex-employer competition)',
    'No design team, likely no design culture at this stage',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company very early, likely <50 people)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Designing research tooling for RL experiment configuration and monitoring',
        'Building interfaces for AI researchers to steer self-learning systems',
        'Defining evaluation protocol UX for behaviors that emerge without human labels',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Creating visualization systems for emergent AI capabilities and skill discovery',
        'Designing dashboards for RL training runs and reward signal analysis',
        'Building frameworks for comparing self-learned vs. human-taught model behaviors',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'No external product yet — interfaces likely internal research tooling only',
        'Website and communication design for recruiting world-class researchers',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'AI researchers and reinforcement learning specialists (internal users for now)',
    secondary: 'Enterprise customers for future deployment of superlearner capabilities (unknown timeline)',
  },
  userProblems: [
    'Current AI systems are limited by the quality and quantity of human-generated training data',
    'RLHF-based models inherit human biases and cannot discover knowledge outside the human training distribution',
    'No AI system today can reliably discover genuinely novel knowledge without human scaffolding',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content:
        'Research lab culture is heavily skewed toward PhD-level AI researchers and engineers.',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'London-based, UK-centric hiring with global ambition.',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content:
        'Team built almost entirely from ex-DeepMind and top academic reinforcement learning programs.',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'David Silver is a once-in-a-generation researcher — proximity to his work is rare',
      'If self-learning AI works, this is the most consequential research happening right now',
    ],
    whyNot: [
      'No product, no design team — far too early for a product designer to have meaningful leverage',
      'Research lab culture: design is not valued at this stage',
      'Superintelligence timeline is speculative — could be years of pure research with no product to ship',
      'London-based; no indication of remote-friendly policy for non-research roles',
    ],
    nextActions: [
      'Monitor for first product launch or commercial offering',
      'Watch for design/product roles on jobs.ashbyhq.com/ineffable',
      'Track if they pivot from research lab to applied AI products',
    ],
  },

  // Meta
  lastUpdated: '2026-05-07T00:00:00',
  sources: [
    { title: 'Ineffable Intelligence raises $1.1B — TechCrunch', url: 'https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/' },
    { title: 'David Silver raises $1.1B for Ineffable — CNBC', url: 'https://www.cnbc.com/2026/04/27/deepmind-ineffable-intelligence-record-seed-funding-nvidia-google.html' },
    { title: 'Ineffable breaks stealth with $1.1B seed — PathFounders', url: 'https://pathfounders.com/p/ineffable-intelligence-breaks-out-of-stealth' },
    { title: 'Lightspeed: Partnering with Ineffable Intelligence', url: 'https://lsvp.com/stories/move-37-ten-years-on-partnering-with-ineffable-intelligence/' },
    { title: 'Ineffable Intelligence jobs', url: 'https://jobs.ashbyhq.com/ineffable' },
    { title: 'David Silver — Wikipedia', url: 'https://en.wikipedia.org/wiki/David_Silver_(computer_scientist)' },
    { title: 'Alex Laterre launch announcement', url: 'https://x.com/AlexLaterre/status/2048785535376773526' },
  ],
};
