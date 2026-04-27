import { Company } from '../types';

export const chamber: Company = {
  id: 'chamber',
  name: 'Chamber',
  description: 'AIOps agent for GPU infrastructure: autonomously monitors, root-causes, and remediates GPU cluster issues so ML teams run ~50% more workloads on existing hardware.',
  website: 'https://www.usechamber.io',
  screenshot: '/screenshots/chamber-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  ogImage: '/og-images/chamber-og.webp',

  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['infrastructure', 'developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'YC Seed (undisclosed)',
  fundingHistory: [
    { stage: 'Seed', amount: 'Undisclosed', date: '2026-01', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown (early 2026)',
  growth: 'Early — YC W26, building first enterprise customers',
  runway: 'YC-backed seed',
  customers: 'AI/ML teams managing GPU clusters at enterprise scale',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown (pre-revenue, early 2026 launch)',
    userGrowth: 'Early access with select ML teams',
    signals: [
      'YC W26 acceptance (Jan 2026)',
      'Founders from Amazon, AWS, Meta, Microsoft with deep GPU infra expertise',
      'Charles Ding prior exit: Bungee → ClearDemand ($3.5M ARR)',
      'AI infrastructure market $101B in 2026',
    ],
    tam: '$101B AI infrastructure market (2026), growing to $202B by 2031',
    marketShare: '<0.01% of TAM = massive upside potential',
    ceiling: 'Early innings: autonomous GPU optimization just emerging as category',
    tailwinds: [
      'Explosive demand for GPU compute outstripping supply — efficiency premium',
      'AI training and inference costs are top-line item for every AI company',
      'Enterprise AI/ML teams lack dedicated infra engineers to optimize GPU usage',
      'Multi-cloud GPU environments increasing orchestration complexity',
      'MLOps market projected to grow from $1.7B to $129B by 2034 (43% CAGR)',
    ],
    headwinds: [
      'AWS, GCP, Azure building native GPU optimization tools',
      'Kubernetes/SLURM teams may resent autonomous remediation touching their clusters',
      'Trust barrier: autonomous agents modifying production GPU infra is high risk',
      'Niche audience (large ML teams) limits initial TAM',
    ],
    moatType: 'technology',
    moatStrength: 'Deep founder expertise (9.5 years AWS GPU infra, Amazon Principal Engineer); hard to replicate without ops domain knowledge.',
  },

  competitors: [
    {
      name: 'AWS (SageMaker + CloudWatch)',
      description: 'Native GPU orchestration and monitoring on AWS.',
      whyTheyWin: 'Captive customer base, deep AWS integrations, unlimited compute.',
    },
    {
      name: 'Run:ai',
      description: 'GPU workload orchestration platform for ML teams.',
      whyTheyWin: 'Purpose-built for GPU scheduling; acquired by NVIDIA (2024).',
    },
    {
      name: 'Weights & Biases',
      description: 'MLOps platform with experiment tracking and compute visibility.',
      whyTheyWin: 'Strong developer brand; widely adopted in ML community.',
    },
    {
      name: 'Datadog / Grafana',
      description: 'General observability platforms with GPU metrics.',
      whyTheyWin: 'Already in enterprise monitoring stacks; adding AI layers.',
    },
  ],
  marketPosition: 'Autonomous AIOps agent for GPU infrastructure optimization',
  moat: [
    'Founder team with combined 15+ years hands-on GPU infra at Amazon/AWS/Meta',
    'Autonomous remediation vs. pure monitoring (action, not just alerts)',
    'Real-time demand forecasting + reallocation across teams',
  ],
  vsGiants: 'AWS/GCP tools monitor and alert; Chamber acts. Focuses on cross-team GPU sharing and autonomous remediation, which cloud vendors don\'t solve.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Chamber\'s AIOps agents are the core value — without AI, it\'s just another monitoring dashboard. The autonomous root-cause + remediation loop is what differentiates.',
  aiDesignChallenges: [
    'Trust design: how do infra engineers trust autonomous agents modifying GPU cluster config?',
    'Explainability: surfacing why Chamber made a specific reallocation decision',
    'Control panels: override and audit interfaces for remediation actions',
    'Demand forecasting UX: visualizing predicted vs. actual GPU utilization',
  ],

  founders: [
    {
      name: 'Andreas Bloomquist',
      role: 'Co-founder',
      background: 'Sr. PM-Technical at AWS; managed central ML infrastructure platforms; launched CloudWatch Application Signals.',
    },
    {
      name: 'Jason Ong',
      role: 'Co-founder',
      background: 'Principal Engineer at Amazon; shipped GPU efficiency tooling; received Amazon Principal Engineer Award for GPU optimization work.',
    },
    {
      name: 'Shaocheng Wang',
      role: 'CTO & Co-founder',
      background: '9.5 years at AWS, including 2+ years on large-scale GPU infrastructure and AI workload platforms.',
    },
    {
      name: 'Charles Ding',
      role: 'Co-founder',
      background: 'Prior founder exit: Bungee → ClearDemand ($3.5M ARR). Domain expertise from Project Greenland at Optimizely/Flexport.',
    },
  ],
  whyBuilding: 'The Chamber team spent years at Amazon/AWS watching GPU capacity sit idle in one team while another queued for days. They built the internal tooling that solved this at Amazon — now they\'re productizing it for every ML team.',
  beliefs: [
    'GPU waste is an invisible tax on AI progress.',
    'Autonomous agents can manage infrastructure better than manual processes at scale.',
    'Domain expertise (GPU infra) is the unfair advantage over general-purpose AIOps tools.',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'YC W26 — top-tier signal',
    'Founding team has 15+ combined years of directly relevant GPU infra experience at Amazon/AWS',
    'Charles Ding has prior successful exit ($3.5M ARR)',
    'Massive market: AI infrastructure $101B in 2026 and growing fast',
    'Unique advantage: built the exact tools internally before productizing',
  ],
  redFlags: [
    '4-person all-engineering team — no design or product function',
    'Infrastructure tools = very low visual surface, niche buyer (ML infra leads)',
    'Pre-revenue, very early stage',
    'NVIDIA acquired Run:ai — strong competition with distribution advantage',
    'Autonomous GPU remediation requires very high trust threshold from enterprise buyers',
  ],

  designTeam: {
    teamSize: 'None (4-person founding team, all engineering/product)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Remediation approval flows: when Chamber acts autonomously vs. asks for confirmation',
        'Policy rule builder: defining thresholds for reallocation triggers',
        'Cross-team capacity sharing governance UI',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'GPU utilization before/after Chamber interventions',
        'Remediation success rate and MTTR dashboards',
        'Cost savings reporting for finance stakeholders',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'GPU cluster visualization dashboard',
        'Incident timeline and remediation audit log',
        'Alert and notification configuration',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'ML infrastructure engineers and platform teams at AI-first companies',
    secondary: 'VP Engineering / CTO at companies spending $1M+ on GPU compute',
  },
  userProblems: [
    'GPU clusters run at 40-60% utilization while teams wait days for capacity',
    'Idle GPUs from one team cannot be easily reallocated to another team',
    'Manual GPU infra ops requires dedicated headcount that most teams don\'t have',
    'Root-causing GPU node failures requires deep expertise and manual log analysis',
    'Demand forecasting for GPU workloads is done by intuition, not data',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'First designer = full ownership of product design',
      'Massive market with real infrastructure pain',
      'Strong founder team with domain credibility',
    ],
    whyNot: [
      'Infrastructure/DevOps tool = minimal visual design surface',
      'Audience is ML infra engineers — design less valued than functionality',
      'All-engineering founding team; design culture would need to be built from scratch',
      'Very niche buyer; product design leverage is lower than consumer/PLG tools',
    ],
    nextActions: [
      'Monitor for Series A and first design hire posting',
      'Watch for product surface expansion beyond CLI/dashboard',
    ],
  },

  lastUpdated: '2026-04-27T00:00:00',
  sources: [
    { title: 'Chamber YC Profile', url: 'https://www.ycombinator.com/companies/chamber' },
    { title: 'Chamber Website', url: 'https://www.usechamber.io/' },
    { title: 'Chamber About Page', url: 'https://www.usechamber.io/about' },
    { title: 'Launch HN: Chamber (YC W26)', url: 'https://news.ycombinator.com/item?id=47401766' },
    { title: 'YC Accepts Chamber into W26 Batch', url: 'https://markets.financialcontent.com/stocks/article/getnews-2026-1-20-y-combinator-accepts-ai-infrastructure-startup-chamber-into-w26-batch' },
    { title: 'Andreas Bloomquist LinkedIn', url: 'https://www.linkedin.com/in/andreasbloomquist/' },
    { title: 'YC Tier List: Chamber', url: 'https://www.yctierlist.com/w26/chamber/' },
  ],
};
