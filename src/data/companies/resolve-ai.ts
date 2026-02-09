import { Company } from '../types';

export const resolveAi: Company = {
  id: 'resolve-ai',
  name: 'Resolve AI',
  description:
    'Agentic AI SRE platform that helps teams resolve production incidents, find root cause faster, and act with production context.',
  website: 'https://resolve.ai',
    screenshot: '/screenshots/resolve-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/resolve-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series A',
  valuation: '$1B headline (Dec 2025; blended valuation lower)',
  totalFunding: '$35M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$35M',
      date: '2025-10',
      leadInvestors: ['Greylock'],
    },
    {
      stage: 'Series A',
      amount: 'Undisclosed',
      date: '2025-12',
      valuation: '$1B (headline)',
      leadInvestors: ['Lightspeed Venture Partners'],
    },
  ],
  revenue: '~$4M ARR (reported)',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Coinbase, DoorDash, Toast, Zscaler (logos on site)',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A led by Lightspeed at a reported $1B headline valuation (Dec 2025)',
      'Seed round of $35M led by Greylock (Oct 2025)',
      '100+ builders in San Francisco (per company site)',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: autonomous SRE workflows are still emerging.',
    tailwinds: [
      'Rising complexity of production systems increases on-call burden',
      'Enterprises investing in AI-based incident response',
      'Agentic workflows gaining adoption in developer tooling',
    ],
    headwinds: [
      'High trust requirements for autonomous remediation',
      'Crowded market with multiple AI SRE startups',
      'Proof of ROI required for enterprise adoption',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if Resolve becomes the default AI SRE across tools and telemetry.',
  },

  // Competition
  competitors: [
    {
      name: 'Traversal',
      description: 'AI SRE platform for incident response and remediation.',
      whyTheyWin: 'Strong funding and early enterprise adoption.',
    },
    {
      name: 'Splunk (Observability)',
      description: 'Enterprise observability and incident tooling.',
      whyTheyWin: 'Deep enterprise penetration and mature platform.',
    },
    {
      name: 'PagerDuty',
      description: 'Incident response and on-call management platform.',
      whyTheyWin: 'Large customer base and entrenched workflows.',
    },
  ],
  marketPosition: 'Agentic AI SRE for incident triage, root cause analysis, and remediation.',
  moat: [
    'Deep production context across code, infra, and telemetry',
    'Autonomous multi-agent workflows for incident resolution',
    'Founders with deep observability and SRE expertise',
  ],
  vsGiants: 'Focuses on autonomous remediation vs traditional observability and alerting platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: The product is an AI SRE agent that operates autonomously; Resolve does not exist without AI.',
  aiDesignChallenges: [
    'Trust design: explainable root-cause reasoning and confidence',
    'Safety controls for autonomous actions in production',
    'Visibility into multi-agent investigations and evidence trails',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Spiros Xanthos',
      role: 'Co-founder',
      background: 'Former Splunk executive; previously co-founded Omnition (acquired by Splunk).',
    },
    {
      name: 'Mayank Agarwal',
      role: 'Co-founder',
      background: 'Former Splunk chief architect for observability; previously co-founded Omnition.',
    },
  ],
  whyBuilding:
    'Make machines be on-call for humans by automating incident investigation and remediation in production systems.',
  beliefs: [
    'Production complexity demands autonomous systems',
    'Root-cause analysis should be evidence-based and fast',
    'Engineers should spend time building, not firefighting',
  ],
  designPhilosophy: 'Trustworthy automation with clear evidence and human control.',
  greenFlags: [
    'Strong founder pedigree in observability',
    'Top-tier Series A led by Lightspeed',
  ],
  redFlags: [
    'High trust and safety bar for autonomous remediation',
    'Competitive market with multiple well-funded entrants',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent orchestration and escalation logic',
        'Automation boundaries for remediation actions',
        'Evidence gathering and hypothesis workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality metrics for root-cause accuracy',
        'Confidence scoring for remediation suggestions',
        'Human review and rollback workflows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Incident investigation UI and timelines',
        'Alert triage dashboards and summaries',
        'Action approvals and audit trails',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'SRE and platform engineering teams',
    secondary: 'DevOps and infrastructure leadership',
  },
  userProblems: [
    'On-call incidents are noisy and slow to resolve',
    'Root-cause analysis requires deep system knowledge',
    'Alert fatigue reduces engineer productivity',
    'Manual remediation is error-prone and time-consuming',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 8,
    whyJoin: [
      'High-impact agentic workflows in production systems',
      'Strong technical founder expertise in observability',
    ],
    whyNot: [
      'Very high bar for reliability and trust',
      'Competitive market with similar platforms',
    ],
    nextActions: [
      'Track product demos and customer case studies',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T15:25:00',
  sources: [
    { title: 'Source', url: 'https://resolve.ai/' },
    { title: 'Source', url: 'https://resolve.ai/why-resolve' },
    { title: 'Source', url: 'https://techcrunch.com/2025/12/19/ex-splunk-execs-startup-resolve-ai-hits-1-billion-valuation-with-series-a/' }
  ],
};
