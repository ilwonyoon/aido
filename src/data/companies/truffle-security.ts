import { Company } from '../types';

export const truffleSecurity: Company = {
  id: 'truffle-security',
  name: 'Truffle Security',
  description:
    'Security platform that finds and remediates secrets and credentials across codebases and infrastructure.',
  website: 'https://trufflesecurity.com/',
  screenshot: '/screenshots/truffle-security-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/truffle-security-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    { stage: 'Series B', amount: '$25M', date: '2025-11' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Security tooling focused on secrets detection',
      'San Francisco headquarters',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: secrets management and detection remain critical security needs.',
    tailwinds: [
      'Rising incidents of leaked credentials',
      'Shift-left security adoption',
      'Developer tooling budgets for security',
    ],
    headwinds: [
      'Crowded security tooling landscape',
      'Integration and workflow friction',
      'Need for high detection accuracy',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Truffle becomes the default secrets detection workflow.',
  },

  // Competition
  competitors: [
    {
      name: 'GitGuardian',
      description: 'Secrets detection and remediation platform.',
      whyTheyWin: 'Strong enterprise adoption and mature product.',
    },
    {
      name: 'Snyk',
      description: 'Developer security platform with secrets scanning.',
      whyTheyWin: 'Broad developer tool adoption and integrations.',
    },
    {
      name: 'Gitleaks',
      description: 'Open-source secrets scanning tool.',
      whyTheyWin: 'Developer adoption and open-source community.',
    },
  ],
  marketPosition: 'Secrets detection and remediation platform for developer security workflows.',
  moat: [
    'Focused secrets detection workflows',
    'Developer-friendly integration',
    'Potential for high-precision detection',
  ],
  vsGiants: 'Focuses on secrets security vs broad application security suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI-Feature: Security detection can be AI-assisted, but the product is not AI-native.',
  aiDesignChallenges: [
    'Reducing false positives in detection workflows',
    'Clear remediation guidance for developers',
    'Workflow integration into CI/CD',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dylan Ayrey',
      role: 'Co-founder & CEO',
      background: 'Original author of TruffleHog open-source tool. Previously at Netflix. Recognized the prevalence of credential exposure in Git.',
    },
    {
      name: 'Dustin Decker',
      role: 'Co-founder & CTO',
      background: 'Previously worked with Dylan as a cybersecurity consultant. Co-founded Truffle Security in 2021.',
    },
    {
      name: 'Julian Dunning',
      role: 'Co-founder',
      background: 'Previously worked with Dylan and Dustin as a cybersecurity consultant.',
    },
  ],
  whyBuilding:
    'Help teams prevent secrets leaks by detecting and remediating credentials quickly.',
  beliefs: [
    'Secrets exposure is a persistent security risk',
    'Detection must be fast and actionable',
    'Security tools should fit developer workflows',
  ],
  designPhilosophy: 'Make security findings clear and easy to fix.',
  greenFlags: [
    'Clear security pain point',
    'Developer tooling demand',
  ],
  redFlags: [
    'Crowded security market',
    'High bar for detection accuracy',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Detection rule configuration workflows',
        'Remediation and approval flows',
        'Permissions and policy enforcement',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Detection accuracy dashboards',
        'False-positive review workflows',
        'Incident tracking and reporting',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Alert triage and finding views',
        'Developer notifications and guidance',
        'Setup and onboarding UX',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Security and engineering teams',
    secondary: 'DevOps and platform teams',
  },
  userProblems: [
    'Secrets leaks are hard to detect early',
    'False positives waste developer time',
    'Security tools often slow down workflows',
    'Remediation steps are unclear or manual',
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
    fitScore: 6,
    whyJoin: [
      'Clear security problem with high demand',
      'Design leverage in developer workflows',
    ],
    whyNot: [
      'Crowded security tooling landscape',
      'Requires high accuracy to build trust',
    ],
    nextActions: [
      'Track product launches and customer adoption',
      'Monitor design hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T20:05:00',
  sources: [
    { title: 'Truffle Security website', url: 'https://trufflesecurity.com/' },
    { title: 'Truffle Security on startups.gallery', url: 'https://startups.gallery/companies/truffle-security' },
  ],
};
