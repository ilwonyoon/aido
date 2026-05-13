import { Company } from '../types';

export const graphite: Company = {
  id: 'graphite',
  name: 'Graphite',
  description:
    'Developer workflow platform for stacked PRs, AI code review, and collaboration between human developers and coding agents.',
  website: 'https://graphite.dev',
  headquarters: 'New York, NY',
  remote: 'No',

  aiTypes: ['code-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  subcategories: ['developer-tools'],
  industries: ['developer-tools'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$72M+',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2022-05',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series B',
      amount: '$52M',
      date: '2025-03',
      leadInvestors: ['Accel'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Hundreds of fast-moving software teams; AI reviewer reviews tens of thousands of PRs weekly',
  runway: 'Strong after Series B',
  customers: 'Shopify, Asana, Snowflake, Ramp, Vercel, Datadog, and other engineering teams',

  growthMetrics: {
    stage: 'high-growth',
    signals: [
      '$52M Series B led by Accel',
      'Diamond AI reviewer launched as standalone product',
      'Positioned as a layer where humans and agents collaborate on code',
    ],
    tam: '$100B+ developer productivity and AI code review market',
    ceiling:
      'High if code review becomes the coordination layer for human developers and AI coding agents.',
    tailwinds: [
      'AI coding increases the volume of code needing review',
      'Teams need more reliable review and merge workflows',
      'Stacked PR workflows remain painful in GitHub-native tools',
    ],
    headwinds: [
      'GitHub and Cursor can absorb AI review workflows',
      'Code review is a competitive wedge with many AI entrants',
      'Requires deep trust from engineering teams',
    ],
    moatType: 'product-experience',
    moatStrength:
      'Medium: workflow adoption and developer habit formation can compound if Graphite becomes the PR inbox for AI-era code.',
  },

  competitors: [
    {
      name: 'GitHub',
      description: 'Native pull request workflow and Copilot code review features.',
      whyTheyWin: 'Default distribution and integration with repositories.',
    },
    {
      name: 'CodeRabbit',
      description: 'AI code review agent for pull requests.',
      whyTheyWin: 'Focused AI review positioning and broad repo integrations.',
    },
    {
      name: 'Cursor',
      description: 'AI-first code editor expanding across the coding workflow.',
      whyTheyWin: 'Controls the creation surface before code reaches review.',
    },
  ],
  marketPosition: 'Modern code review and PR workflow layer for AI-era software teams.',
  moat: [
    'Stacked PR workflow beloved by high-velocity teams',
    'AI reviewer tightly integrated into code review surfaces',
    'Developer workflow spans CLI, VS Code, GitHub, Slack, and web review',
  ],
  vsGiants:
    'More focused and design-centric than GitHub PRs; may become the review coordination layer even when code is generated elsewhere.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-core: Graphite began as developer workflow tooling, but AI review and agent collaboration are now central to the product direction.',
  aiDesignChallenges: [
    'Designing code review workflows where humans and AI agents collaborate without duplicating effort',
    'Making AI review quality, confidence, and false positives legible to engineers',
    'Managing stacked PR state, review queues, and merge readiness',
    'Designing notification and inbox surfaces for high-volume engineering teams',
  ],

  founders: [
    {
      name: 'Merrill Lutsky',
      role: 'Co-founder & CEO',
      background: 'Former Meta engineer; previously founded Posmetrics (YC W13).',
    },
    {
      name: 'Greg Foster',
      role: 'Co-founder & CTO',
      background: 'Former Airbnb engineer; Harvard CS.',
    },
    {
      name: 'Tomas Reimers',
      role: 'Co-founder & CPO',
      background: 'Former Square engineer; Harvard CS; product leader for Graphite workflows.',
    },
  ],
  whyBuilding:
    'Bring the sophisticated stacked-code-review workflows of large engineering organizations to every high-velocity software team.',
  beliefs: [
    'Code review is a core developer productivity bottleneck',
    'AI makes review volume and coordination more important, not less',
    'Developers need fast, opinionated workflows rather than generic GitHub defaults',
  ],
  designPhilosophy:
    'Design-centric devtools: fast, opinionated, keyboard-friendly, and built around real engineering team behavior.',
  greenFlags: [
    'Directly aligned with AI coding review and human-agent collaboration',
    'Open Staff and Senior Product Designer roles',
    'Strong a16z/Accel backing and developer-tool credibility',
  ],
  redFlags: [
    'New York on-site requirement',
    'Potential acquisition/strategy risk in fast-consolidating AI coding market',
    'Competes with GitHub-native workflows and Cursor expansion',
  ],

  designTeam: {
    designHead: 'Unknown',
    teamSize: 'Small product/design team (inferred from 102-person company)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Stacked PR states and merge queue logic',
        'AI reviewer behavior, rule configuration, and comment interaction',
        'Human/agent collaboration inside code review',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Review quality and usefulness feedback loops',
        'False positive/negative reporting for AI comments',
        'Team productivity and PR throughput metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer inbox and review queue surfaces',
        'PR timeline, diff, and AI comment interactions',
        'CLI/VS Code/web workflow consistency',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'High-velocity software engineering teams using GitHub',
    secondary: 'Engineering managers and platform teams improving code review throughput',
  },
  userProblems: [
    'Code review queues slow down fast-moving engineering teams',
    'Stacked changes are hard to manage in standard GitHub workflows',
    'AI-generated code increases review volume and risk',
    'Teams need a trusted layer for human and AI review collaboration',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Staff Product Designer',
      location: 'New York City, NY',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/Graphite/ddbf9b29-bc03-443b-aae0-3500b5c7a763',
      roleFamily: 'product-design',
      roleSignal: 'staff',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$180K-$250K',
      level: 'Staff',
      whyInteresting:
        'High-leverage devtool design role at the review layer where human and AI coding work meet.',
    },
    {
      title: 'Senior Product Designer',
      location: 'New York City, NY',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/Graphite/b476b93e-d409-4dba-8dc5-3ed925bd926d',
      roleFamily: 'product-design',
      roleSignal: 'senior',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$145K-$220K',
      level: 'Senior',
      whyInteresting:
        'Developer workflow role close to AI review, PR inboxes, and engineering team productivity.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 8,
    whyJoin: [
      'Strong fit with AI coding workflow and human/agent collaboration',
      'Open Staff Product Designer role',
      'Design-centric developer tool with real workflow depth',
    ],
    whyNot: [
      'NYC on-site may be a constraint',
      'Less directly multi-agent orchestration than Conductor',
    ],
    nextActions: [
      'Try Graphite stacked PR workflow and Diamond/Agent review',
      'Prepare Steer framing around keeping agents unblocked through review',
      'Check whether NYC on-site is flexible for senior candidates',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Graphite Series B / Diamond Launch', url: 'https://graphite.com/blog/series-b-diamond-launch' },
    { title: 'Graphite $20M Series A', url: 'https://graphite.dev/blog/ship-it-20m' },
    { title: 'TechCrunch on Graphite founding story', url: 'https://techcrunch.com/2022/05/03/how-graphite-turned-a-side-project-into-a-20m-series-a/' },
    { title: 'Contrary Research: Graphite', url: 'https://research.contrary.com/company/graphite' },
    { title: 'Staff Product Designer', url: 'https://jobs.ashbyhq.com/Graphite/ddbf9b29-bc03-443b-aae0-3500b5c7a763' },
    { title: 'Senior Product Designer', url: 'https://jobs.ashbyhq.com/Graphite/b476b93e-d409-4dba-8dc5-3ed925bd926d' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};

