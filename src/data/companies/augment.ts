import { Company } from '../types';

export const augment: Company = {
  id: 'augment',
  name: 'Augment Code',
  description: 'AI coding platform for professional software engineering teams working in large, production-grade codebases.',
  website: 'https://www.augmentcode.com',
  headquarters: 'Palo Alto, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  ogImage: 'https://www.augmentcode.com/api/og?title=Augment+Code+-+The+Software+Agent+Company',
  screenshot: 'https://iad.microlink.io/ZBi054vIT-Aa62fqXaZ6WoKbJMGrg9Nsuao2kmZdz2tg5egHxK48OQ9pVHI7p0pICq5kI2fY6cJTT4wrmJ7IMg.png',

  aiTypes: ['code-assistant', 'ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  subcategories: ['developer-tools'],
  industries: ['developer-tools'],

  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: '$977M post-money (Apr 2024)',
  totalFunding: '$270M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$227M',
      date: '2024-04',
      valuation: '$977M',
      leadInvestors: ['Sutter Hill Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: '160+ team size and active product releases in 2026 per careers page.',
  runway: 'Strong after large Series B',
  customers: 'Enterprise software engineering teams using AI coding assistance for large codebases.',

  competitors: [
    { name: 'Cursor', description: 'AI-native code editor and coding agent product.', whyTheyWin: 'Strong prosumer adoption and editor-native workflows.' },
    { name: 'GitHub Copilot', description: 'AI coding assistant integrated into GitHub and IDEs.', whyTheyWin: 'Massive distribution through GitHub and Microsoft.' },
    { name: 'Sourcegraph Cody', description: 'Code intelligence and AI assistant for large codebases.', whyTheyWin: 'Enterprise code search and code graph heritage.' },
  ],
  marketPosition: 'Enterprise-focused AI coding assistant emphasizing deep context for large, mature codebases.',
  moat: [
    'Context Engine for large production codebases',
    'Focus on professional engineering teams rather than only greenfield vibe coding',
    'Enterprise and team workflow orientation',
  ],
  vsGiants: 'Augment competes by targeting large-codebase professional workflows where context, repo understanding, and team conventions matter.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI coding assistance and software agents are the core product.',
  aiDesignChallenges: [
    'Designing agentic coding workflows for large existing codebases',
    'Making AI context and confidence understandable to professional developers',
    'Balancing automation, human review, and code ownership',
    'Creating usable surfaces across IDE, CLI, Slack, and code review',
  ],

  founders: [
    {
      name: 'Scott Dietzen',
      role: 'CEO',
      background: 'Former Pure Storage CEO; led company from startup to IPO and $1B+ revenue scale.',
    },
    {
      name: 'Guy Gur-Ari',
      role: 'Co-founder & Chief Scientist',
      background: 'Former Google researcher focused on large language models and reasoning.',
    },
    {
      name: 'Igor Ostrovsky',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder behind Augment Code platform and Context Engine.',
    },
  ],
  whyBuilding: 'Professional engineers need AI that understands large production codebases, team conventions, and existing systems rather than only generating new code.',
  beliefs: [
    'AI coding tools must handle mature enterprise codebases',
    'Context quality is the core constraint for useful software agents',
    'Developer workflow integration matters as much as model capability',
  ],
  greenFlags: [
    'Product Designer role has very strong listed/observed cash range',
    'Directly aligned with AI coding agents and developer workflows',
    'High design leverage across IDE, agent, code review, Slack, and metrics surfaces',
  ],
  redFlags: [
    'Palo Alto in-office expectation',
    'Highly competitive AI coding space',
    'Role may require strong coding comfort in addition to product design craft',
  ],

  designTeam: {
    teamSize: 'Product/design team growing; careers page lists product surfaces across Agent, Intent, Code Review, Slack, CLI, and Pricing.',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Agent workflows', 'Code context UX', 'Review and remediation flows'] },
    evaluation: { level: 'high', tasks: ['Developer productivity', 'Code quality', 'Trust and confidence calibration'] },
    interface: { level: 'high', tasks: ['IDE UX', 'Code review UI', 'Slack workflows', 'Metrics surfaces'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Professional software engineers and engineering teams working in large production codebases',
    secondary: 'Engineering leaders adopting AI coding tools across organizations',
  },
  userProblems: [
    'Developers cannot hold large, multi-repo codebases in memory',
    'AI coding tools hallucinate when they lack project-specific context',
    'Teams need AI assistance that respects code quality, review, and engineering conventions',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Product Designer',
      location: 'Palo Alto, CA (On-site)',
      type: 'full-time',
      url: 'https://builtin.com/job/product-designer/8615747',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'other',
      lastVerifiedAt: '2026-05-13',
      compensation: '$225K-$300K',
      team: 'Product',
      aboutRole: 'Design AI coding features for professional engineering workflows and large production-grade codebases.',
      responsibilities: [
        'Own product design for code-centric AI surfaces',
        'Work across in-editor chat, software creation flows, and data metrics surfaces',
        'Partner closely with ML research, engineering, developer experience, and product teams',
      ],
      requirements: [
        '5+ years of product design experience',
        'Strong technical inclination and comfort with code/prototyping',
        'Experience designing complex SaaS or developer tools',
      ],
      whyInteresting: 'Very strong cash band and one of the closest matches to Conductor-like AI coding workflow design.',
    },
  ],

  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.5,
      content: 'Glassdoor snapshot shows positive employee ratings, though review count is still small.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Augment-Code-EI_IE9799857.11%2C23.htm',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 9,
    whyJoin: [
      'Closest match to AI coding-agent product design',
      'Exceptional base range for product design',
      'Complex technical workflow surface where design can shape the category',
    ],
    whyNot: [
      'On-site Palo Alto',
      'Crowded AI coding market',
      'May expect designer-who-codes profile',
    ],
    nextActions: [
      'Apply if on-site is acceptable',
      'Frame portfolio around technical UX, AI workflow trust, and developer productivity',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '160+ team size listed on careers page.',
    signals: ['Large Series B', 'Frequent product releases', 'Active Product Designer hiring'],
    tam: 'AI coding assistants and enterprise developer productivity',
    marketShare: 'Unknown',
    ceiling: 'Could become a core AI software engineering platform if it wins enterprise large-codebase workflows.',
    tailwinds: ['AI coding adoption', 'Enterprise pressure to improve developer productivity'],
    headwinds: ['Cursor/GitHub Copilot competition', 'Model commoditization risk'],
    moatType: 'technology',
    moatStrength: 'Context Engine and large-codebase enterprise focus are the key differentiation.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'Augment Code careers', url: 'https://www.augmentcode.com/careers' },
    { title: 'Product Designer at Augment Code', url: 'https://builtin.com/job/product-designer/8615747' },
    { title: 'LinkedIn jobs at Augment Code', url: 'https://www.linkedin.com/company/augmentinc/jobs' },
    { title: 'Built In Augment Code jobs', url: 'https://builtin.com/company/augment-code/jobs' },
    { title: 'Glassdoor Augment Code salary snapshot', url: 'https://www.glassdoor.com/Salary/Augment-Code-Salaries-E9799857.htm' },
    { title: 'VentureBeat on Augment Agent and funding', url: 'https://venturebeat.com/ai/augment-code-debuts-ai-agent-with-70-win-rate-over-github-copilot-and-record-breaking-swe-bench-score/' },
  ],
};
