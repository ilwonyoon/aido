import { Company } from '../types';

export const xbow: Company = {
  id: 'xbow',
  name: 'XBOW',
  description: 'AI-powered autonomous security testing platform that identifies and validates vulnerabilities in web applications and digital systems.',
  website: 'https://xbow.com',
  headquarters: 'Seattle, WA',
  remote: 'Hybrid',

  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Series C',
  valuation: '$1B+ (Mar 2026)',
  totalFunding: '$238M',
  fundingHistory: [
    { stage: 'Seed', amount: '$20M', date: '2024-03', leadInvestors: ['Unknown'] },
    { stage: 'Series B', amount: '$75M', date: '2025-06', leadInvestors: ['Altimeter Capital'] },
    { stage: 'Series C', amount: '$120M', date: '2026-03', valuation: '$1B+', leadInvestors: ['Unknown'] },
  ],
  revenue: 'Unknown',
  growth: 'Hypergrowth - Series C at unicorn valuation 9 months after Series B',
  runway: 'Strong (Series C in Mar 2026)',
  customers: '190 employees; HackerOne top-ranked security testing',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown',
    userGrowth: 'HackerOne rankings #1 AI security tester',
    signals: [
      'Series C at $1B+ valuation (Mar 2026)',
      'Series B 9 months prior at $75M',
      'Founded by ex-GitHub Copilot team (Oege de Moor)',
      'AI agents achieved top hacker rankings on HackerOne',
    ],
    tam: '$200B+ cybersecurity market',
    marketShare: '<0.1% of TAM = 2000x+ upside potential',
    ceiling: 'Early innings: autonomous security testing rapidly replacing manual pen-testing',
    tailwinds: [
      'Shift from manual to autonomous security testing',
      'Enterprise AI security budgets expanding',
      'Regulatory pressure for continuous security validation',
    ],
    headwinds: [
      'Enterprise procurement cycles slow for security tools',
      'Compliance and audit requirements vary by industry',
      'Competition from established security firms entering AI',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: AI agents achieved HackerOne #1 ranking; founded by Copilot creators',
  },

  // Competition
  competitors: [
    {
      name: 'Traditional Penetration Testing Firms',
      description: 'Manual security testing services',
      whyTheyWin: 'Established relationships; perceived expertise',
    },
    {
      name: 'Synopsys / Veracode',
      description: 'Enterprise application security scanning',
      whyTheyWin: 'Broad platform coverage; enterprise integration',
    },
    {
      name: 'OpenAI + Security Partners',
      description: 'AI-powered security tooling emerging from frontier labs',
      whyTheyWin: 'API access; brand recognition',
    },
  ],
  marketPosition: 'AI-native autonomous security testing',
  moat: [
    'AI agents proven to match/exceed human hackers on HackerOne',
    'Founded by GitHub Copilot + GitHub Advanced Security creators',
    'Network effects: more exploits found = better models',
  ],
  vsGiants: 'Autonomous AI testing vs manual or narrow vulnerability scanners',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core Differentiator: AI autonomous agents are the core product. Security testing without AI would lose all competitive advantage.',
  aiDesignChallenges: [
    'Reasoning interface: communicating multi-step exploit paths to security teams',
    'Confidence/uncertainty UI: agents must show proof of vulnerability, not just assertions',
    'Remediation workflows: bridging agent findings to developer fixes',
    'Human-in-the-loop validation: security experts reviewing/rejecting agent output',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Oege de Moor',
      role: 'CEO & Co-founder',
      background: 'Created GitHub Copilot and GitHub Advanced Security. Engineer and researcher.',
    },
  ],
  whyBuilding: 'Replace manual pen-testing with autonomous AI agents that work 24/7 and scale across unlimited applications.',
  beliefs: [
    'Autonomous security agents can match or exceed human hackers',
    'Security should be continuous, not annual',
    'AI can reduce security testing cost 10x while improving coverage',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Founded by Copilot/GitHub Advanced Security creator',
    'Series C at $1B+ valuation (hypergrowth)',
    'HackerOne #1 AI security agent ranking (market validation)',
    '190 employees; strong hiring trajectory',
  ],
  redFlags: [
    'Early commercialization; go-to-market uncertain',
    'Compliance/liability concerns for automated hacking',
    'Competition from established security firms + frontier labs',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 10-20)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent reasoning controls: scope, depth, constraints',
        'Exploit discovery logic: what tactics to use and when',
        'Risk management: false positives vs missed vulnerabilities',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Exploit validation workflows',
        'Security team review and approval UX',
        'Proof-of-concept demonstration interfaces',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Findings dashboard and severity visualization',
        'Multi-step exploit path visualization',
        'Integration with security team workflows (Jira, Slack, etc.)',
      ],
    },
  },
  productStage: '1→10',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Autonomous AI agent design = deep reasoning + UX',
      'Series C hypergrowth with strong founder',
      'Clear market need and validation (HackerOne #1)',
      'Security expertise increasingly AI-native',
    ],
    whyNot: [
      'Early product surface; design leverage unclear',
      'Security-focused domain may have narrow design scope',
      'Regulatory/liability concerns may slow product iteration',
    ],
    nextActions: [
      'Check careers page for Product Designer roles',
      'Monitor Series C announcements',
    ],
  },

  // Meta
  lastUpdated: '2026-04-20T00:00:00',
  sources: [
    { title: 'XBOW Series C $120M Funding', url: 'https://www.bloomberg.com/news/articles/2026-03-18/ai-security-startup-xbow-now-valued-at-more-than-1-billion' },
    { title: 'XBOW Series B Announcement', url: 'https://xbow.com/blog/series-b' },
    { title: 'XBOW Crunchbase', url: 'https://www.crunchbase.com/organization/xbow' },
  ],
};
