import { Company } from '../types';

export const socketDev: Company = {
  id: 'socket-dev',
  name: 'Socket.dev',
  description:
    'Developer-first software supply chain security platform that detects and blocks malicious open-source dependencies in real time.',
  website: 'https://socket.dev',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  aiTypes: ['automation', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  subcategories: ['security', 'developer-tools'],
  industries: ['security', 'developer-tools'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$64.6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$4.6M',
      date: '2022-05',
      leadInvestors: ['Unknown'],
    },
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2023-08',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2024-10',
      leadInvestors: ['Unknown'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Detects 100+ zero-day attacks every week according to company site',
  runway: 'Strong after Series B',
  customers: 'Developer and security teams using open-source dependencies',

  growthMetrics: {
    stage: 'high-growth',
    signals: [
      '$20M Series A led by a16z',
      '$40M subsequent funding reported',
      'Developer-first positioning in software supply chain security',
    ],
    tam: '$50B+ application security and software supply chain security market',
    ceiling:
      'High if Socket becomes the default security layer for package managers, CI, and developer workflows.',
    tailwinds: [
      'Open-source supply chain attacks are increasing',
      'Security teams need developer-friendly tooling',
      'AI-generated code increases dependency and package risk',
    ],
    headwinds: [
      'Security tooling is crowded and procurement-heavy',
      'Developer adoption can be hard if alerts create noise',
      'AI relevance is indirect compared with coding-agent products',
    ],
    moatType: 'technology',
    moatStrength:
      'Medium: behavioral dependency analysis and security data can compound if integrated deeply into developer workflows.',
  },

  competitors: [
    {
      name: 'Snyk',
      description: 'Developer security platform for dependencies, containers, and code.',
      whyTheyWin: 'Large enterprise distribution and security brand.',
    },
    {
      name: 'GitHub Dependabot',
      description: 'Native dependency alerts and updates inside GitHub.',
      whyTheyWin: 'Default GitHub distribution and low friction.',
    },
    {
      name: 'Semgrep',
      description: 'Code and supply chain security platform.',
      whyTheyWin: 'Developer-friendly static analysis and broad security workflows.',
    },
  ],
  marketPosition: 'Developer-first open-source supply chain security.',
  moat: [
    'Behavioral analysis of dependency risk rather than only CVE matching',
    'Strong open-source credibility from founder Feross Aboukhadijeh',
    'Security workflows integrated into developer tools and pull requests',
  ],
  vsGiants:
    'More proactive and developer-centric than generic dependency scanners, but GitHub owns default workflow distribution.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI-feature / automation-adjacent: Socket is primarily security infrastructure, but increasingly relevant to AI-era developer workflows where generated code and dependencies need automated review.',
  aiDesignChallenges: [
    'Making dependency risk understandable without overwhelming developers',
    'Designing triage flows for malicious package and zero-day alerts',
    'Balancing security automation with developer velocity',
    'Building trust in automated risk scoring and suggested remediation',
  ],

  founders: [
    {
      name: 'Feross Aboukhadijeh',
      role: 'Founder & CEO',
      background:
        'Open-source developer and security expert; previously worked across web/security tooling and created widely used JavaScript projects.',
    },
  ],
  whyBuilding:
    'Protect the open-source ecosystem by proactively detecting malicious dependencies before they compromise applications.',
  beliefs: [
    'Open source needs proactive supply chain defense',
    'Security tools should fit developer workflows',
    'Dependency behavior matters more than static vulnerability lists alone',
  ],
  designPhilosophy:
    'Developer-first security: reduce alert fatigue and make risk/action clear inside normal engineering workflows.',
  greenFlags: [
    'Open Product Design Lead role',
    'Strong founder credibility in open source',
    'Security is increasingly important for AI-generated code and agentic development',
  ],
  redFlags: [
    'Not an AI-native product in the same way as Conductor or Graphite',
    'Older job posting date requires freshness review if applying',
    'Security domain may be less portfolio-aligned unless framed as developer workflow trust',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Risk scoring and dependency behavior models',
        'Policy controls for security teams',
        'Developer remediation flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Alert quality and false positive tracking',
        'Security posture dashboards',
        'Remediation success metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer PR comments and package risk UI',
        'Security team dashboards',
        'Onboarding and integration flows for package managers and CI',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Engineering and security teams managing open-source dependencies',
    secondary: 'Developers who need actionable security feedback inside PR and package workflows',
  },
  userProblems: [
    'Traditional security tools surface too many noisy alerts',
    'Malicious package behavior can be missed by CVE-based scanners',
    'Security teams need developer-friendly remediation paths',
    'AI-generated software increases the need for automated dependency trust checks',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Design Lead',
      location: 'United States (Remote)',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/socket/26f87d20-56a0-48fd-a98c-13f3d6214848',
      roleFamily: 'product-design',
      roleSignal: 'lead',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$110K-$245K',
      level: 'Lead',
      whyInteresting:
        'Lead-level devtool/security design role with strong opportunity to shape developer workflow trust surfaces.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Lead design role with likely high ownership',
      'Developer workflow surface with trust/evaluation design problems',
      'Remote-friendly and strong open-source founder signal',
    ],
    whyNot: [
      'Security domain is adjacent to AI agent management rather than direct',
      'Role age suggests freshness should be rechecked before applying',
    ],
    nextActions: [
      'Verify current role freshness on Socket careers',
      'Frame Steer/Backtick around developer trust, interruption, and remediation workflows',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Socket About', url: 'https://socket.dev/about' },
    { title: 'Socket Careers', url: 'https://socket.dev/careers' },
    { title: 'Socket Series Seed', url: 'https://socket.dev/blog/series-seed' },
    { title: 'Socket Series A', url: 'https://socket.dev/blog/series-a' },
    { title: 'TechCrunch: Socket lands $20M', url: 'https://techcrunch.com/2023/08/01/socket-lands-20m-investment-to-help-companies-secure-open-source-software/' },
    { title: 'Product Design Lead', url: 'https://jobs.ashbyhq.com/socket/26f87d20-56a0-48fd-a98c-13f3d6214848' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};

