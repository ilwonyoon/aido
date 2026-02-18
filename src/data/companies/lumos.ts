import { Company } from '../types';

export const lumos: Company = {
  id: 'lumos',
  name: 'Lumos',
  description: 'Autonomous identity platform unifying SaaS management and identity governance with AI-driven access reviews, provisioning, and least-privilege enforcement.',
  website: 'https://www.lumos.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',
  ogImage: '/og-images/lumos-og.webp',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['security'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$65M+',
  fundingHistory: [
    { stage: 'Pre-seed', amount: '$800K', date: '2022-01', leadInvestors: [] },
    { stage: 'Series A', amount: '$30M', date: '2022-05', leadInvestors: ['Andreessen Horowitz'] },
    { stage: 'Series B', amount: '$35M', date: '2024-05', leadInvestors: ['Scale Venture Partners'] },
  ],
  revenue: 'Unknown (9x growth since Series A)',
  growth: '9x since 2022',
  customers: 'Pinterest, MongoDB, GitHub, Roku, Chegg, Checkr, Major League Baseball',

  competitors: [
    {
      name: 'SailPoint',
      description: 'Enterprise-grade identity governance with deep compliance workflows.',
      whyTheyWin: 'Market share in large enterprises and extensive compliance certifications.',
    },
    {
      name: 'ConductorOne',
      description: 'Modern access reviews and identity governance platform.',
      whyTheyWin: 'Closest competitor in modern UX and developer-friendly approach.',
    },
    {
      name: 'Okta Identity Governance',
      description: 'Identity governance layer built on top of Okta IAM platform.',
      whyTheyWin: 'Ecosystem lock-in with existing Okta SSO/IAM customers.',
    },
  ],
  marketPosition: 'First autonomous identity platform unifying SaaS spend management and identity governance',
  moat: [
    'Unified SaaS management + identity governance in one platform (competitors do one or the other)',
    '300+ pre-built app connectors creating switching costs',
    'Albus AI agent — first-mover in autonomous identity governance',
    'Employee-facing AppStore UX differentiates from IT-only legacy tools',
  ],
  vsGiants: 'Lumos layers on top of Okta/Microsoft Entra rather than competing directly. Against SailPoint, Lumos wins on modern UX and AI-native automation vs legacy enterprise workflows.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator through Albus, the autonomous identity agent. The platform handles identity governance fundamentals, but AI-driven access reviews, role modeling, and anomaly detection are what set it apart.',
  aiDesignChallenges: [
    'Designing trust in AI-automated access decisions for security-critical workflows',
    'Balancing autonomous AI actions with human oversight in compliance reviews',
    'Making complex RBAC/ABAC policy recommendations understandable to non-technical users',
  ],

  founders: [
    {
      name: 'Andrej Safundzic',
      role: 'CEO & Co-founder',
      background: 'Stanford CS + Business. Previously co-founded DigitalService4Germany (acquired by German government). Dropped out of Stanford GSB to start Lumos.',
    },
    {
      name: 'Leo Mehr',
      role: 'Co-founder',
      background: 'Stanford classmate of Safundzic. Former algorithm engineer at Hudson River Trading.',
    },
    {
      name: 'Alan Flores-Lopez',
      role: 'Co-founder, VP of Technology',
      background: 'Stanford PhD student in cryptography (mentored by Dan Boneh). Former engineer at Samsara.',
    },
  ],
  whyBuilding: 'Met at Stanford studying ethics and tech policy. Realized Okta solved authentication at scale but no one built the unified authorization/governance layer enterprises desperately need.',
  beliefs: [
    'Identity governance should be autonomous, not spreadsheet-driven',
    'Unifying SaaS management and access governance eliminates blind spots',
    'AI can enforce least-privilege security better than manual reviews',
  ],
  greenFlags: [
    'a16z Series A + Scale VP Series B — top-tier investors',
    '9x revenue growth since Series A with customers like GitHub and MongoDB',
    'Greg Brockman (OpenAI CTO) as angel investor signals AI credibility',
    'Remote-first with strong Glassdoor rating (4.7/5)',
  ],
  redFlags: [
    'Competing against well-funded incumbents (SailPoint, Okta, CyberArk)',
    'Identity governance is a crowded market with commoditization risk',
    'Valuation undisclosed — limited financial transparency',
  ],

  designTeam: {
    teamSize: '~2-4 (Lead PD role open, ~165 total employees)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent autonomy boundaries for access decisions',
        'RBAC/ABAC policy recommendation workflows',
        'Automated provisioning and deprovisioning logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Access review accuracy and compliance metrics',
        'AI decision explainability for audit trails',
        'Anomalous access detection feedback loops',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Employee-facing AppStore for self-service access requests',
        'Admin dashboards for SaaS spend and identity governance',
        'Complex permission tables and access review workflows',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'IT and Security teams at mid-market to enterprise companies (CIO/CISO buyers)',
    secondary: 'End employees using self-service access request portal',
  },
  userProblems: [
    'Enterprises average 650+ SaaS apps — impossible to manage access manually',
    'Access reviews are manual, slow, and often rubber-stamped (security risk)',
    'Shadow IT and zombie accounts create identity-based breach vulnerabilities',
    'Onboarding/offboarding is error-prone without automated provisioning',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.7,
      content: '4.7/5 rating across 24 reviews. 89% recommend to a friend. Strong marks for career opportunities (4.8), culture & values (4.7), and compensation (4.7).',
      url: 'https://www.glassdoor.com/Overview/Working-at-Lumos-EI_IE7272824.11,16.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Cross-functional collaboration, transparency from leadership, diverse team. "If you are given an opportunity to work at Lumos, run, don\'t walk."',
      url: 'https://www.glassdoor.com/Overview/Working-at-Lumos-EI_IE7272824.11,16.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Company values: "Set the Standard," "Discover to Deliver," "Paint in Pink" (playfully bold), "Care Genuinely." Remote-first with SF/NYC hub offices.',
      url: 'https://www.lumos.com/careers',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '9x since Series A (2022-2024)',
    signals: [
      '$35M Series B (May 2024) led by Scale Venture Partners',
      '9x revenue growth in 2 years',
      'Launched Albus AI agent (Jun 2025) — autonomous identity governance',
      'Notable customers: GitHub, MongoDB, Pinterest, Roku',
    ],
    tam: '$26B identity governance and administration market',
    ceiling: 'Early innings: replacing legacy IGA tools with AI-native autonomous approach',
    tailwinds: [
      'Identity-based attacks are #1 breach vector — driving urgency',
      'SaaS sprawl accelerating (avg 650+ apps per enterprise)',
      'Regulatory compliance requirements increasing globally',
    ],
    headwinds: [
      'SailPoint and Okta have deep enterprise relationships',
      'CyberArk and Microsoft Entra expanding into governance',
      'Enterprise sales cycles are long in security market',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong: 300+ connectors and policy configurations make switching painful once deployed.',
  },

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Level B AI-native with Albus autonomous agent — real AI design challenges',
      'Lead PD role = shape the design team and processes from early stage',
      'Strong culture signals (4.7 Glassdoor, remote-first, value-driven)',
      'a16z + Scale VP backed with 9x revenue growth',
    ],
    whyNot: [
      'Identity governance is niche — limited design domain excitement',
      'Small design team may mean limited mentorship and design community',
      'Enterprise security sales cycles can slow product iteration',
    ],
    nextActions: [
      'Try Lumos product demo to assess UX quality',
      'Research Lead PD role requirements and team structure',
      'Monitor design team growth signals',
    ],
  },

  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Lumos Official Website', url: 'https://www.lumos.com' },
    { title: 'Lumos Series B Announcement — BusinessWire', url: 'https://www.businesswire.com/news/home/20240523314788/en/Lumos-Secures-35M-Series-B-Funding' },
    { title: 'TechCrunch: Lumos Series A', url: 'https://techcrunch.com/2022/05/03/lumos-wants-to-build-an-app-store-for-the-enterprise/' },
    { title: 'a16z Investment in Lumos', url: 'https://a16z.com/2022/05/03/investing-in-lumos/' },
    { title: 'Lumos Albus AI Agent Launch — PR Newswire', url: 'https://www.prnewswire.com/news-releases/lumos-launches-albus-the-worlds-first-ai-agent-for-autonomous-identity-governance-302472096.html' },
    { title: 'Lumos Glassdoor Reviews', url: 'https://www.glassdoor.com/Overview/Working-at-Lumos-EI_IE7272824.11,16.htm' },
    { title: 'Lumos Careers — Lead PD role verified', url: 'https://job-boards.greenhouse.io/lumos/jobs/6244735003' },
  ],
};
