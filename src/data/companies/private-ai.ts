import { Company } from '../types';

export const privateAi: Company = {
  id: 'private-ai',
  name: 'Private AI',
  description: 'Privacy-preserving AI platform that detects and redacts sensitive data in unstructured text for regulated industries.',
  website: 'https://www.private-ai.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['security', 'healthcare'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$11.15M',
  revenue: 'Not publicly disclosed',
  growth: '80% QoQ revenue growth over 18 months (as of 2022-11)',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.15M',
      date: '2021-09',
      leadInvestors: ['Diagram Ventures', 'Titan Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$8M',
      date: '2022-11',
      leadInvestors: ['Bain Capital Ventures'],
    },
  ],

  // Competition
  competitors: [
    {
      name: 'Nightfall AI',
      description: 'Data loss prevention and PII detection platform for SaaS data stores.',
      whyTheyWin: 'Deep integrations across cloud data sources and DLP workflows.',
    },
    {
      name: 'Google Cloud DLP',
      description: 'PII detection and redaction service in Google Cloud.',
      whyTheyWin: 'Native cloud-scale coverage and enterprise procurement access.',
    },
    {
      name: 'Microsoft Purview',
      description: 'Information protection and data governance suite with PII classification.',
      whyTheyWin: 'Bundled governance suite with enterprise distribution.',
    },
  ],
  marketPosition: 'AI-powered PII detection and redaction infrastructure for regulated data pipelines.',
  moat: [
    'Domain-specific PII detection tuned for healthcare and life sciences',
    'Deploy-anywhere architecture for on-prem and private cloud needs',
    'Privacy-first positioning with compliance-focused messaging',
  ],
  vsGiants: 'Differentiates with deploy-anywhere privacy tooling and regulated-industry focus versus cloud-native suites.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to identifying and redacting sensitive entities in unstructured data.',
  aiDesignChallenges: [
    'Human-in-the-loop review for redaction accuracy',
    'Communicating privacy risk and confidence to users',
    'Balancing automation with compliance requirements',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Patricia Thaine',
      role: 'Co-founder & CEO',
      background: 'Former data scientist focused on privacy-preserving AI for regulated industries.',
    },
    {
      name: 'Pieter Luitjens',
      role: 'Co-founder & CTO',
      background: 'Machine learning engineer focused on NLP and privacy tooling.',
    },
  ],
  whyBuilding: 'Enable organizations to unlock sensitive data safely while meeting privacy and compliance requirements.',
  beliefs: [
    'Sensitive data should be usable without exposing identities',
    'Privacy tooling must integrate into existing data workflows',
    'Regulated industries require domain-specific NLP accuracy',
  ],
  greenFlags: ['Clear market need for privacy-preserving AI', 'Strong investor backing in Series A'],
  redFlags: ['Highly competitive privacy tooling market', 'Lengthy enterprise compliance sales cycles'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Redaction workflow design', 'Policy configuration UX'] },
    evaluation: { level: 'medium', tasks: ['Accuracy review and feedback loops'] },
    interface: { level: 'medium', tasks: ['Dashboards for compliance and audit reporting'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Healthcare and life sciences data teams handling sensitive text data',
    secondary: 'Security and compliance leaders managing data governance',
  },
  userProblems: [
    'Unstructured data contains PII that blocks analytics and AI use',
    'Manual redaction is slow, expensive, and error-prone',
    'Compliance teams need auditable privacy workflows',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Meaningful privacy infrastructure work', 'Clear regulated-industry focus'],
    whyNot: ['Enterprise sales and compliance cycles can be slow'],
    nextActions: ['Confirm design team size and hiring signals'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '80% QoQ revenue growth (as of 2022-11)',
    userGrowth: 'Not publicly disclosed',
    signals: ['Series A $8M (2022)', 'Seed $3.15M (2021)'],
    tam: 'Global data privacy and compliance tooling market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Expansion across regulated industries beyond healthcare',
    tailwinds: ['Rising AI adoption in regulated sectors', 'Stricter privacy regulations'],
    headwinds: ['Competitive DLP and governance platforms'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-11T17:00:52Z',
  sources: [
    { title: 'Private AI - About', url: 'https://www.private-ai.com/about' },
    { title: 'Private AI raises $8M Series A', url: 'https://www.private-ai.com/news/private-ai-raises-8m-series-a' },
    { title: 'Private AI raises $3.15M seed', url: 'https://investmentnewswire.com/private-ai-raises-3-15m-seed-round-to-protect-sensitives-data/' },
    { title: 'Private AI - Contact', url: 'https://www.private-ai.com/contact' },
  ],
};
