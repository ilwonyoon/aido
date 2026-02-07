import { Company } from '../types';

export const cogentSecurity: Company = {
  id: 'cogent-security',
  name: 'Cogent Security',
  description: 'AI taskforce for vulnerability management and security remediation.',
  website: 'https://www.cogent.security',
    screenshot: '/screenshots/cogent-security-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/cogent-security-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['creative-media', 'security'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11M',
  fundingHistory: [
    { stage: 'Seed', amount: '$11M', date: '2025-07' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Tenable',
      description: 'Vulnerability management and exposure platform.',
      whyTheyWin: 'Enterprise adoption and mature vulnerability data.',
    },
    {
      name: 'Rapid7',
      description: 'Security analytics and vulnerability management platform.',
      whyTheyWin: 'Broad security suite with enterprise presence.',
    },
    {
      name: 'Qualys',
      description: 'Cloud-based security and compliance platform.',
      whyTheyWin: 'Longstanding vulnerability management footprint.',
    },
  ],
  marketPosition: 'AI-first vulnerability management with automated task execution.',
  moat: [
    'AI-driven prioritization of vulnerability remediation',
    'Taskforce model for actionable security operations',
    'Focus on operational workflow automation',
  ],
  vsGiants: 'Competes on AI-driven remediation workflows rather than legacy scanners.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator for vulnerability prioritization and action.',
  aiDesignChallenges: [
    'Designing trustworthy remediation recommendations',
    'Balancing automation with security team control',
    'Explaining risk scoring and prioritization logic',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Vineet Edupuganti',
      role: 'Co-founder & CEO',
      background: 'Pivotal in scaling Abnormal AI from earliest days to market-leading security company; spent years remediating vulnerabilities at Coinbase and Blackstone.',
    },
    {
      name: 'Geng Sng',
      role: 'Co-founder & CTO',
      background: 'Pivotal in scaling Abnormal AI from its earliest days; co-founded Cogent to build the first AI taskforce for vulnerability management.',
    },
    {
      name: 'Thanos Baskous',
      role: 'Co-founder & VP Engineering',
      background: 'Spent years remediating vulnerabilities at security-conscious companies; co-founded Cogent to automate vulnerability management with agentic AI.',
    },
  ],
  whyBuilding: 'Make vulnerability management faster and more actionable with AI.',
  beliefs: [
    'Security teams need fewer, higher-quality alerts',
    'Automation can reduce manual vulnerability triage',
    'Risk prioritization must be transparent and explainable',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear security pain point with AI angle',
    'Operational workflow focus',
  ],
  redFlags: [
    'High false-positive risk in security automation',
    'Crowded vulnerability management landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI triage logic and remediation workflows',
        'Approval and escalation routing',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring remediation effectiveness',
        'Tracking false positives and overrides',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Security operations dashboards',
        'Vulnerability tracking and workflow views',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Security teams managing vulnerability remediation',
    secondary: 'IT and compliance teams',
  },
  userProblems: [
    'Too many vulnerabilities to triage manually',
    'Prioritization lacks actionable context',
    'Remediation workflows are fragmented across tools',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'AI-first security workflow product',
      'High-impact domain with clear pain points',
    ],
    whyNot: [
      'Security buyers are cautious and slow moving',
      'High expectations for accuracy and trust',
    ],
    nextActions: [
      'Check for product design openings as team scales',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Cogent Security', url: 'https://www.cogent.security' },
    { title: 'Cogent Security Careers', url: 'https://cogent.com/careers/' },
    { title: 'Cogent Security on startups.gallery', url: 'https://startups.gallery/companies/cogent-security' },
    { title: 'Cogent Security Seed (Business Wire)', url: 'https://www.businesswire.com/news/home/20240104379273/en/Cogent-Security-Announces-Seed-Funding-to-Scale-AI-Taskforce-for-Vulnerability-Management' },
  ],
};
