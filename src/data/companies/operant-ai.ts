import { Company } from '../types';

export const operantAi: Company = {
  id: 'operant-ai',
  name: 'Operant AI',
  description: 'Runtime AI application security platform that protects cloud and AI workloads from attacks.',
  website: 'https://www.operant.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$13.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$10M',
      date: '2024-09',
      leadInvestors: ['SVCI', 'Silicon Valley CISO Investments'],
    },
  ],

  // Competition
  competitors: [
    {
      name: 'Protect AI',
      description: 'AI/ML security platform covering model and pipeline risks.',
      whyTheyWin: 'Focused AI security positioning and enterprise security integrations.',
    },
    {
      name: 'Wiz',
      description: 'Cloud security platform with runtime risk visibility.',
      whyTheyWin: 'Broad enterprise adoption and comprehensive cloud security coverage.',
    },
    {
      name: 'Palo Alto Prisma Cloud',
      description: 'Cloud security suite with runtime protection and policy management.',
      whyTheyWin: 'Enterprise security footprint and bundled platform.',
    },
  ],
  marketPosition: 'Runtime defense layer for AI applications and cloud-native services.',
  moat: [
    'Runtime visibility into AI app behavior',
    'Security-first workflows tailored to AI agent risks',
    'Cloud-agnostic instrumentation and policy engine',
  ],
  vsGiants: 'Positions as AI-runtime specific security layer rather than broad cloud security suite.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-specific security risks are central to the product’s runtime protections.',
  aiDesignChallenges: [
    'Designing actionable security alerts with minimal noise',
    'Policy configuration UX for AI app behavior',
    'Explaining AI-runtime threats to security teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Vrajesh Bhavsar',
      role: 'Co-founder & CEO',
      background: 'Security leader focused on protecting AI applications in production.',
    },
    {
      name: 'Priyanka Tembey',
      role: 'Co-founder & CTO',
      background: 'Engineering leader specializing in cloud and runtime security.',
    },
    {
      name: 'Ashley Roof',
      role: 'Co-founder & COO',
      background: 'Operations leader in cybersecurity and enterprise SaaS.',
    },
  ],
  whyBuilding: 'AI applications introduce new runtime threats that need dedicated security controls.',
  beliefs: [
    'AI security must be treated as runtime security',
    'Visibility and control are prerequisites for AI adoption',
    'Security workflows should integrate with existing DevSecOps stacks',
  ],
  greenFlags: ['Remote-first team and clear product thesis', 'Series A backing'],
  redFlags: ['Crowded security landscape with rapid incumbents'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Threat policy modeling', 'Detection workflow design'] },
    evaluation: { level: 'high', tasks: ['Alert quality tuning and feedback loops'] },
    interface: { level: 'medium', tasks: ['Security dashboards and investigations UI'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Security and platform teams operating AI applications',
    secondary: 'Engineering teams deploying AI features in production',
  },
  userProblems: [
    'AI services introduce new runtime attack vectors',
    'Security teams lack visibility into AI model and agent behavior',
    'Traditional security tools do not cover AI-specific risks',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['Security + AI intersection with strong product relevance'],
    whyNot: ['Competitive enterprise security sales cycles'],
    nextActions: ['Check design hiring signals and team composition'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Series A $10M (2024)', 'Total funding $13.5M'],
    tam: 'Enterprise AI security and cloud runtime protection market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential platform for AI runtime security',
    tailwinds: ['Rapid AI adoption in production environments'],
    headwinds: ['Incumbent security suites expanding AI features'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-11T17:00:52Z',
  sources: [
    { title: 'Operant AI - Home', url: 'https://www.operant.ai/' },
    { title: 'Operant AI - Team', url: 'https://www.operant.ai/team' },
    { title: 'Operant AI raises $10M Series A', url: 'https://www.globenewswire.com/news-release/2024/09/12/2945340/0/en/Operant-AI-Raises-10M-Series-A-to-Help-Security-Teams-Defend-AI-Applications-and-Cloud-Workloads.html' },
    { title: 'Operant AI - Careers (remote-first)', url: 'https://www.operant.ai/careers' },
  ],
};
