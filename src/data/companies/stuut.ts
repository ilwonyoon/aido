import { Company } from '../types';

export const stuut: Company = {
  id: 'stuut',
  name: 'Stuut',
  description:
    'Agentic AI platform for accounts receivable that automates collections, customer outreach, deductions, cash application, and finance workflows.',
  website: 'https://www.stuut.ai',
  headquarters: 'New York, NY',
  remote: 'No',

  aiTypes: ['automation', 'conversation-ai'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  subcategories: ['fintech', 'productivity'],
  industries: ['fintech', 'productivity'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$29.5M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$29.5M',
      date: '2025-11',
      leadInvestors: ['Andreessen Horowitz'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Early enterprise traction in accounts receivable automation',
  runway: 'Strong after Series A',
  customers: 'Finance and accounts receivable teams at mid-market and enterprise companies',

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$29.5M Series A led by a16z',
      'Positioned as autonomous AR work rather than workflow software',
      'Open Senior Product Designer role for agentic enterprise UX',
    ],
    tam: '$20B+ accounts receivable, collections, and finance operations automation market',
    ceiling:
      'High if Stuut becomes an autonomous operating layer for order-to-cash finance work.',
    tailwinds: [
      'Finance teams need to reduce manual collections and payment follow-up work',
      'Agentic AI can handle repetitive outreach across email, SMS, voice, and portals',
      'Enterprise ops buyers are prioritizing measurable automation ROI',
    ],
    headwinds: [
      'Finance workflows require accuracy and auditability',
      'Legacy ERP integrations can slow deployment',
      'Vertical AI ops market is crowded',
    ],
    moatType: 'vertical-specialization',
    moatStrength:
      'Medium if workflow data, ERP integrations, and AR-specific agent behavior compound.',
  },

  competitors: [
    {
      name: 'Esker',
      description: 'Accounts receivable and order-to-cash automation platform.',
      whyTheyWin: 'Established enterprise footprint and finance workflow depth.',
    },
    {
      name: 'HighRadius',
      description: 'Autonomous finance and receivables software.',
      whyTheyWin: 'Large enterprise install base and broad finance automation suite.',
    },
    {
      name: 'Collectly',
      description: 'Healthcare-focused patient billing and collections automation.',
      whyTheyWin: 'Vertical specialization in healthcare collections.',
    },
  ],
  marketPosition: 'AI-native accounts receivable automation for order-to-cash operations.',
  moat: [
    'Agentic OS for AR workflows',
    'Domain-specific context across customer interactions and payment behavior',
    'Fast deployment promise for finance teams',
  ],
  vsGiants:
    'More AI-native and execution-oriented than legacy AR workflow tools, but must integrate with existing ERP systems.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-native: Stuut sells autonomous finance work, not just workflow tracking; AI agents execute AR operations across channels.',
  aiDesignChallenges: [
    'Designing agentic finance workflows that are auditable and controllable',
    'Making customer outreach and payment follow-up state visible to finance teams',
    'Balancing autonomous execution with human approval for sensitive accounts',
    'Designing exception handling for messy enterprise AR edge cases',
  ],

  founders: [
    {
      name: 'Tarek Alaruri',
      role: 'Founder & CEO',
      background: 'Co-founded Fairmarkit before starting Stuut; focuses on autonomous AR work.',
    },
    {
      name: 'Ben Winter',
      role: 'Co-founder & COO',
      background: 'Former VP Marketing at Fairmarkit and GTM executive at Waldo.',
    },
    {
      name: 'Adam Chaarawi',
      role: 'Co-founder, Engineering',
      background: 'UC Berkeley CS; worked on Apple Vision Pro calibration algorithms.',
    },
  ],
  whyBuilding:
    'Remove manual accounts receivable work by letting AI agents execute collections and payment workflows end to end.',
  beliefs: [
    'Finance teams should not spend their time chasing invoices manually',
    'AI agents can maintain context across customer interactions',
    'Autonomous work should produce measurable cash outcomes quickly',
  ],
  designPhilosophy:
    'Agentic enterprise UX: make autonomous finance work feel controlled, transparent, and operationally reliable.',
  greenFlags: [
    'Open Senior Product Designer role',
    'Small team with high potential design ownership',
    'Strong fit with agentic workflow and human intervention design',
  ],
  redFlags: [
    'Finance/AR domain is less aligned with coding-agent portfolio narrative',
    'SF on-site role despite NYC company signal requires clarification',
    'Early-stage market risk',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflows for collections, deductions, and cash application',
        'Approval and escalation logic for sensitive customers',
        'ERP and customer communication state modeling',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'DSO, overdue percentage, and cash collection impact dashboards',
        'Agent performance and exception tracking',
        'Customer interaction quality review',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Finance ops dashboard for autonomous AR work',
        'Customer account timelines and intervention surfaces',
        'Configuration flows for outreach strategies and guardrails',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Finance and accounts receivable teams',
    secondary: 'CFOs and operations leaders managing cash collection and working capital',
  },
  userProblems: [
    'AR teams spend too much time on repetitive invoice follow-up',
    'Manual collections workflows create leakage and aging receivables',
    'Customer communication context is scattered across systems',
    'Finance teams need automation that can handle edge cases without losing control',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Senior Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/stuut-ai/31a43c01-58ee-4355-8f2c-b008b92a084e',
      roleFamily: 'product-design',
      roleSignal: 'senior',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$160K-$210K',
      level: 'Senior',
      whyInteresting:
        'Early AI enterprise workflow design role focused on agentic UX, automation, and operational control.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Strong agentic workflow design challenge',
      'Early team with visible design ownership',
      'Open Senior Product Designer role',
    ],
    whyNot: [
      'Domain is finance ops rather than developer tools',
      'Portfolio story needs translation from coding agents to enterprise agents',
    ],
    nextActions: [
      'Review Stuut product demo/materials',
      'Frame interest around agentic enterprise workflows and human approval/control',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Stuut Website', url: 'https://www.stuut.ai/' },
    { title: 'Stuut About', url: 'https://www.stuut.ai/about' },
    { title: 'Stuut Series A press release', url: 'https://www.prnewswire.com/news-releases/stuut-technologies-raises-29-5-million-series-a-led-by-andreessen-horowitz-to-automate-accounts-receivable-work-302621866.html' },
    { title: 'Senior Product Designer', url: 'https://jobs.ashbyhq.com/stuut-ai/31a43c01-58ee-4355-8f2c-b008b92a084e' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};
