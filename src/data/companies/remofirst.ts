import { Company } from '../types';

export const remofirst: Company = {
  id: 'remofirst',
  name: 'RemoFirst',
  description:
    'Employer of Record (EOR) platform that helps companies hire and manage global teams with local compliance, payroll, and benefits.',
  website: 'https://remofirst.com/',
    screenshot: '/screenshots/remofirst-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/remofirst-og.webp',


  // Multi-dimensional Tags
  aiTypes: [],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['infrastructure', 'legal'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$25M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2024-03',
      leadInvestors: ['Octopus Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Companies hiring globally across 180+ countries (per company).',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A: $25M led by Octopus Ventures (Mar 2024)',
      'Employer of Record coverage in 180+ countries',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: global hiring platforms continue to grow with distributed work.',
    tailwinds: [
      'Global hiring and remote work remain strong',
      'Companies seek faster compliance and onboarding',
      'Cost pressure favors EOR alternatives',
    ],
    headwinds: [
      'Competitive EOR market',
      'Regulatory complexity across jurisdictions',
      'Switching costs can be low for SMBs',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate if RemoFirst becomes a trusted, long-term EOR partner.',
  },

  // Competition
  competitors: [
    {
      name: 'Deel',
      description: 'Global HR and EOR platform.',
      whyTheyWin: 'Scale, brand awareness, and large customer base.',
    },
    {
      name: 'Remote',
      description: 'EOR and global payroll platform.',
      whyTheyWin: 'Strong product and compliance coverage.',
    },
    {
      name: 'Rippling',
      description: 'HR platform with global payroll and EOR features.',
      whyTheyWin: 'Broad HR suite and enterprise adoption.',
    },
  ],
  marketPosition: 'Global EOR platform focused on fast, compliant hiring in 180+ countries.',
  moat: [
    'End-to-end global hiring and payroll coverage',
    'Compliance workflows built into onboarding',
    'Focus on cost-effective global hiring',
  ],
  vsGiants: 'Focuses on EOR simplicity and price vs broad HR suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI-Feature: RemoFirst is a global HR platform where AI can enhance workflows but is not core.',
  aiDesignChallenges: [
    'Explaining compliance steps clearly to users',
    'Workflow design for multi-country onboarding',
    'Trust and transparency for payroll and benefits processes',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Nurasyl Serik',
      role: 'Co-founder & CEO',
      background: 'Co-founded RemoFirst to simplify global hiring and compliance.',
    },
    {
      name: 'Volodymyr Fedoriv',
      role: 'Co-founder',
      background: 'Co-founded RemoFirst to build global HR infrastructure.',
    },
  ],
  whyBuilding:
    'Make global hiring as easy as hiring locally with compliant workflows in every country.',
  beliefs: [
    'Hiring globally should not require legal overhead',
    'Companies need fast, compliant onboarding for remote teams',
    'Distributed work is the default for modern companies',
  ],
  designPhilosophy: 'Make complex compliance workflows feel simple and trustworthy.',
  greenFlags: [
    'Strong funding and remote-first tailwinds',
    'Clear product-market fit in global hiring',
  ],
  redFlags: [
    'Crowded market with well-funded incumbents',
    'Compliance and regulatory complexity',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Onboarding workflows across jurisdictions',
        'Policy enforcement and compliance logic',
        'Permissions and approvals for HR workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Compliance monitoring dashboards',
        'Error and exception handling UX',
        'Process completion and audit tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Onboarding and contract generation flows',
        'Payroll and benefits management UI',
        'Admin dashboard for global teams',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'HR and people operations teams',
    secondary: 'Founders and operations leaders',
  },
  userProblems: [
    'Global hiring requires complex local compliance',
    'Onboarding international employees is slow and manual',
    'Payroll and benefits vary by country',
    'HR teams need a single platform for global teams',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Senior Product Designer',
      location: 'Remote (Poland, Spain, Kyiv, Portugal, South Africa, Hungary, Georgia, Germany, Romania, Estonia, Albania)',
      url: 'https://jobs.lever.co/remofirst/9f5e8ec1-5a4a-49ad-a5a5-aa8ab9189f08',
      type: 'full-time',
      aboutRole: 'Design onboarding journeys and AI-enabled interactions across RemoFirst products.',
      responsibilities: [
        'Conduct user and business research to inform interface decisions',
        'Create wireframes, layouts, and high-fidelity UI designs',
        'Build interactive prototypes and run usability tests',
        'Define navigation flows and interaction patterns',
        'Collaborate with developers and product managers to ensure feasibility',
      ],
      requirements: [
        '3+ years of product design experience (tech startups preferred)',
        'Strong portfolio of user-centered design work',
        'Proficiency in Figma or similar design tools',
        'User research and analytical skills',
      ],
      preferred: [
        'Comfort working across cultures and time zones',
        'Strong time management in a remote setting',
      ],
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Remote-first team hiring across multiple countries.',
      url: 'https://remofirst.com/careers',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Global hiring platform with clear product value',
      'Large surface area for workflow design',
    ],
    whyNot: [
      'Competitive market with strong incumbents',
      'Regulatory complexity across jurisdictions',
    ],
    nextActions: [
      'Track product differentiation and compliance features',
      'Monitor design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T19:25:00',
  sources: [
    { title: 'Source', url: 'https://remofirst.com/' },
    { title: 'Source', url: 'https://remofirst.com/about-us' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20240306357812/en/HR-Solution-Remofirst-Raises-%2425-Million-Series-A-Funding-to-Make-it-Affordable-and-Easy-to-Employ-Global-Remote-Teams' },
    { title: 'Source', url: 'https://www.remofirst.com/post/remofirst-raises-series-a-funding' },
    { title: 'Source', url: 'https://remofirst.com/careers' },
    { title: 'Source', url: 'https://jobs.lever.co/remofirst/9f5e8ec1-5a4a-49ad-a5a5-aa8ab9189f08' },
    { title: 'Source', url: 'https://jobs.lever.co/remofirst' }
  ],
};
