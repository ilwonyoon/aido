import { Company } from '../types';

export const auctor: Company = {
  id: 'auctor',
  name: 'Auctor',
  description: 'AI system of action for enterprise software implementations — automatically captures requirements, generates artifacts (SoWs, proposals, architecture docs, user stories), and syncs across tools.',
  website: 'https://www.getauctor.com',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$20M+',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Unknown',
      date: '2025-01',
      leadInvestors: ['Y Combinator'],
    },
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2026-04',
      leadInvestors: ['Sequoia Capital'],
    },
  ],
  revenue: 'Unknown (early-stage, post-YC W25)',
  growth: '80%+ efficiency gains reported by early enterprise customers',
  runway: 'Strong ($20M Series A, Apr 2026)',
  customers: 'System integrators and enterprise software implementation teams',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown — early revenue stage',
    userGrowth: 'Early enterprise pilots with SI firms; ~15 people team',
    signals: [
      '$20M Series A led by Sequoia (Apr 2026) — largest Series A in SI software space',
      'Investors include M12 (Microsoft), HubSpot Ventures, Workday Ventures, OneStream',
      '80% efficiency gains across discovery and design phases reported',
      'Emerging from stealth — product-market fit signal',
    ],
    tam: '$50B+ enterprise software implementation services market',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Early innings: AI agents for enterprise software implementations are a greenfield category',
    tailwinds: [
      'Enterprise software complexity driving demand for faster, more reliable implementations',
      'System integrators (SIs) under pressure to improve margins and speed',
      'Agentic AI moment: LLMs now capable enough for multi-step business document generation',
      'Strategic backing from product vendors (HubSpot, Workday, OneStream) = built-in distribution',
    ],
    headwinds: [
      'Enterprise sales cycles are long — SI procurement is conservative',
      'Competition from general-purpose AI coding/writing tools (Copilot, Notion AI)',
      'Strong dependency on SI firms adopting new workflows',
      'Small team (~15 people) building a complex enterprise product',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: deeply embedded in implementation workflows once adopted; vendor-backed investors create distribution lock-in.',
  },

  // Competition
  competitors: [
    {
      name: 'Microsoft Copilot for M365',
      description: 'AI writing and workflow automation across Office tools',
      whyTheyWin: 'Ubiquitous enterprise distribution; pre-installed in existing tools',
    },
    {
      name: 'Notion AI',
      description: 'AI-assisted documentation and project management',
      whyTheyWin: 'Strong brand; broad use case; integrations',
    },
    {
      name: 'Coda AI',
      description: 'AI-powered doc and workflow automation for business teams',
      whyTheyWin: 'Flexible platform with strong AI + workflow combination',
    },
  ],
  marketPosition: 'AI-native operating system for system integrators and software implementation lifecycle',
  moat: [
    'Sequoia + Microsoft + HubSpot + Workday investor syndicate = distribution moat',
    'Purpose-built for SI workflows (vs general-purpose writing AI)',
    'Automated end-to-end artifact generation across requirements, SoWs, architecture docs',
  ],
  vsGiants: 'Purpose-built SI workflow AI vs generic copilots bolted onto existing office tools',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product: Auctor\'s core value is AI agents that autonomously capture requirements and generate implementation artifacts. Without AI, no product exists.',
  aiDesignChallenges: [
    'Requirements capture UX: how do users guide AI to gather the right business context?',
    'Artifact review workflow: how do consultants review, edit, and approve AI-generated SoWs?',
    'Multi-tool sync: designing trust and accuracy in cross-tool document propagation',
    'Error handling: what happens when AI generates incorrect requirements or specs?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'William Sun',
      role: 'CEO & Co-founder',
      background: 'Johns Hopkins alumnus; prior experience at Amazon AWS and ServiceNow',
    },
    {
      name: 'Xinan Rahman',
      role: 'Co-founder',
      background: 'Johns Hopkins alumnus; background at Meta and Apple',
    },
    {
      name: 'Matthew Blackburn',
      role: 'Co-founder',
      background: 'Johns Hopkins alumnus; engineering background',
    },
    {
      name: 'Anthony Sky Ng-Hing',
      role: 'Co-founder',
      background: 'Johns Hopkins alumnus; engineering background',
    },
  ],
  whyBuilding: 'Enterprise software implementation projects fail at alarming rates — Auctor is building the AI system of action to fix the broken implementation lifecycle for system integrators.',
  beliefs: [
    'The $50B+ SI market is ripe for AI disruption — implementation quality is still largely manual',
    'AI agents should handle the tedious artifact generation so consultants can focus on value',
    'Predictable, fixed-fee delivery is only possible if AI handles the chaos of requirement capture',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Sequoia-led Series A (Apr 2026) — tier-1 investor conviction',
    'Strategic investors: M12, HubSpot Ventures, Workday Ventures, OneStream = distribution moat',
    'Johns Hopkins team with Meta, AWS, Apple, ServiceNow, NASA pedigree',
    '80% efficiency gains reported by early customers',
  ],
  redFlags: [
    'Small team (~15 people) building complex enterprise AI',
    'Enterprise adoption cycles are long; SI procurement is conservative',
    'No public revenue figures — early-stage uncertainty',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 1-3, ~15 person team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Requirements capture conversation flow (what questions does AI ask to extract business context?)',
        'Artifact generation pipeline: how AI maps requirements to SoWs, architecture docs, user stories',
        'Cross-tool sync logic: how changes propagate across Jira, Confluence, Salesforce, etc.',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Accuracy review: how consultants verify AI-generated requirements and artifacts',
        'Version tracking: before/after comparisons when AI updates documents',
        'Success metrics: did implementations close faster? Did margins improve?',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Requirements intake forms and conversation UI',
        'Artifact review and edit interface (SoWs, proposals, architecture docs)',
        'Dashboard for implementation health tracking across projects',
      ],
    },
  },
  productStage: '0→1',

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
      'Sequoia-backed with strong investor distribution (Microsoft, HubSpot, Workday)',
      'AI agents for enterprise implementation = novel, complex design challenge',
      'Early (0→1): strong influence over product direction',
    ],
    whyNot: [
      'Enterprise B2B implementation software is less visually compelling design work',
      'Small team — unclear design headcount or design culture',
      'SI market niche may feel narrow compared to horizontal AI platforms',
    ],
    nextActions: [
      'Check careers page for Product Designer roles',
      'Watch for product announcements and customer case studies',
    ],
  },

  // Meta
  lastUpdated: '2026-04-21T00:00:00',
  sources: [
    { title: 'Auctor Raises $20M Series A — GlobeNewswire', url: 'https://www.globenewswire.com/news-release/2026/04/15/3274475/0/en/Auctor-Raises-20M-Led-by-Sequoia-Capital-to-Build-the-AI-System-of-Action-for-the-Enterprise-Software-Implementation-Market.html' },
    { title: 'Auctor YC Profile', url: 'https://www.ycombinator.com/companies/auctor' },
    { title: 'Auctor Website', url: 'https://www.getauctor.com/' },
    { title: 'Auctor Crunchbase', url: 'https://www.crunchbase.com/organization/auctor' },
  ],
};
