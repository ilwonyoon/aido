import { Company } from '../types';

export const infisical: Company = {
  id: 'infisical',
  name: 'Infisical',
  description: 'Open source security infrastructure platform for secrets, certificates, and access management.',
  website: 'https://infisical.com',
    screenshot: '/screenshots/infisical-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://infisical.com/images/message.png',


  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,

  industries: ['security'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$19M',
  fundingHistory: [
    { stage: 'Series A', amount: '$16M', date: '2025-06' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Hugging Face, Lucid, LG',

  // Competition
  competitors: [
    {
      name: 'HashiCorp Vault',
      description: 'Enterprise secrets management platform.',
      whyTheyWin: 'Deep enterprise adoption and integrations.',
    },
    {
      name: 'AWS Secrets Manager',
      description: 'Cloud-native secrets management for AWS workloads.',
      whyTheyWin: 'Tight AWS ecosystem integration.',
    },
    {
      name: 'Doppler',
      description: 'Secrets management for developers and teams.',
      whyTheyWin: 'Developer-friendly UX and onboarding speed.',
    },
  ],
  marketPosition: 'Developer-first, open source security infrastructure for managing secrets and access.',
  moat: [
    'Open source adoption and community momentum',
    'Broad integrations across infrastructure stacks',
    'Security-first positioning for developer workflows',
  ],
  vsGiants: 'Competes on open source flexibility and developer UX versus closed cloud offerings.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI augments the platform, but security infrastructure is the core product.',
  aiDesignChallenges: [
    'Designing secure workflows without sacrificing developer speed',
    'Explaining permissions and secret access policies clearly',
    'Balancing usability with compliance and auditability',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tony Dang',
      role: 'Co-founder',
      background: 'Co-founder of Infisical (YC W23).',
    },
    {
      name: 'Maidul Islam',
      role: 'Co-founder',
      background: 'Co-founder of Infisical (YC W23).',
    },
    {
      name: 'Vlad Matsiiako',
      role: 'Co-founder',
      background: 'Co-founder of Infisical (YC W23).',
    },
  ],
  whyBuilding: 'Modern software teams need secure, simple infrastructure for secrets and access management.',
  beliefs: [
    'Security tooling should feel developer-first',
    'Open source collaboration accelerates trust and adoption',
    'Secure software should be easier to ship',
  ],
  greenFlags: [
    '$19M raised and strong YC backing',
    'Clear developer community focus',
    'Enterprise customer logos cited by the company',
  ],
  redFlags: [
    'Crowded security tooling market',
    'Enterprise procurement cycles can be long',
    'High expectations for reliability and uptime',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Policy and permissions design', 'Secrets lifecycle workflows'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Audit trails and compliance reporting', 'Usage analytics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Developer dashboards', 'CLI and docs UX'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers and security engineers managing secrets in production',
    secondary: 'Platform engineering teams at scale-ups and enterprises',
  },
  userProblems: [
    'Secrets are scattered across tools and environments',
    'Access policies are hard to reason about and audit',
    'Developer workflows break when security is too rigid',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Developer-first infrastructure', 'Security UX challenges'],
    whyNot: ['Highly competitive market', 'Heavy compliance expectations'],
    nextActions: ['Monitor for product design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$19M in funding and global hiring'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Security infrastructure is foundational for all modern software teams.',
    tailwinds: ['Increasing security requirements', 'Developer-first security adoption'],
    headwinds: ['Entrenched incumbents', 'Security incidents can harm trust'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Open source plus integrations across stacks.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Infisical careers', url: 'https://infisical.com/careers' },
    { title: 'Infisical Founding Product Designer (YC)', url: 'https://www.ycombinator.com/companies/infisical/jobs/zXqcmYx-founding-product-designer-san-francisco' },
  ],
};
