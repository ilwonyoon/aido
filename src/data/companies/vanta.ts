import { Company } from '../types';

export const vanta: Company = {
  id: 'vanta',
  name: 'Vanta',
  description: 'AI-powered trust management platform that automates compliance (SOC 2, ISO 27001, HIPAA, GDPR) and continuous security monitoring.',
  website: 'https://vanta.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',
  ogImage: '/og-images/vanta-og.webp',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  stage: 'Series D',
  valuation: '$4.15B (Jul 2025)',
  totalFunding: '$504M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3M', date: '2018-01', leadInvestors: [] },
    { stage: 'Series A', amount: '$50M', date: '2021-05', leadInvestors: ['Sequoia Capital'] },
    { stage: 'Series B', amount: '$150M', date: '2022-08', valuation: '$1.6B', leadInvestors: ['Craft Ventures'] },
    { stage: 'Series C', amount: '$150M', date: '2024-07', valuation: '$2.45B', leadInvestors: ['Sequoia Capital'] },
    { stage: 'Series D', amount: '$150M', date: '2025-07', valuation: '$4.15B', leadInvestors: ['Wellington Management'] },
  ],
  revenue: '~$220M ARR (Jul 2025)',
  growth: '~45% YoY',
  customers: '12,000+ companies',

  competitors: [
    {
      name: 'Drata',
      description: 'Compliance automation with 250+ integrations and 20+ security frameworks',
      whyTheyWin: 'Strong upmarket push with enterprise compliance breadth',
    },
    {
      name: 'Secureframe',
      description: 'Compliance platform with 300+ integrations and intuitive UI',
      whyTheyWin: 'Competitive pricing and polished user experience',
    },
    {
      name: 'Sprinto',
      description: 'AI-powered autonomous compliance for cloud SaaS companies',
      whyTheyWin: 'Aggressive pricing targeting startups and SMBs',
    },
  ],
  marketPosition: 'Category leader in compliance automation for startups-to-midmarket',
  moat: [
    'First-mover in automated compliance with deepest integration ecosystem',
    'Continuous monitoring vs point-in-time audits — structural advantage',
    'Strong brand trust in YC/startup ecosystem',
    'Network of auditor partnerships creates switching costs',
  ],
  vsGiants: 'Big 4 firms do manual audits; Vanta automates the entire process at 10x lower cost and continuous cadence',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core differentiator — Vanta AI Agent automates evidence collection, policy management, and questionnaire responses. Product built on workflow automation, now AI-powered throughout.',
  aiDesignChallenges: [
    'Agentic UX: designing trust in autonomous compliance actions',
    'AI transparency: showing how automated evidence was collected and verified',
    'Complex workflow automation: turning 35+ compliance frameworks into intuitive AI-driven flows',
  ],

  founders: [
    {
      name: 'Christina Cacioppo',
      role: 'Co-founder & CEO',
      background: 'Former Product lead at Dropbox Paper; investment team at Union Square Ventures. Stanford Economics + MS Management Science.',
    },
  ],
  whyBuilding: 'Experienced painful manual SOC 2 audits at Dropbox and saw the opportunity to automate security compliance for every company.',
  beliefs: [
    'Security compliance should be continuous, not point-in-time',
    'Trust is a competitive advantage for software companies',
    'AI agents can replace manual GRC workflows entirely',
  ],
  greenFlags: [
    'Category leader with $4.15B valuation and 45% YoY growth',
    'CPO Jeremy Epling (ex-GitHub VP Product) champions design-driven culture',
    '10 open Product Design roles — massive design investment signal',
    'Forbes Cloud 100 three consecutive years (2023-2025)',
  ],
  redFlags: [
    'Competitive market with well-funded alternatives (Drata, Secureframe)',
    'Glassdoor 3.9/5 with notes on heavy meeting culture and long hours',
    'Compliance market may face commoditization pressure',
  ],

  designTeam: {
    cpo: 'Jeremy Epling',
    designHead: 'Deb Kawamoto (VP of Design)',
    teamSize: '~10-15 (10 open PD roles + existing team; Director of Design + VP of Design in place)',
    notableMembers: [
      { name: 'Deb Kawamoto', role: 'VP of Design' },
      { name: 'Braden Kowitz', role: 'Director of Design' },
      { name: 'Danielle Brown', role: 'Sr. Manager, Design Systems' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent autonomy boundaries for compliance actions',
        'Multi-framework compliance workflow logic (SOC 2, HIPAA, GDPR)',
        'Vendor risk assessment automation rules',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI evidence collection quality verification',
        'Security questionnaire auto-response accuracy metrics',
        'Compliance readiness scoring and gap analysis',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise GRC dashboard and reporting',
        'AI-powered workflow builder for compliance automation',
        'Design system for complex compliance UI patterns',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Security and compliance teams at startups and mid-market companies',
    secondary: 'Enterprise GRC teams managing multi-framework compliance',
  },
  userProblems: [
    'Manual evidence collection for audits takes weeks of engineering time',
    'Point-in-time audits create compliance blind spots between reviews',
    'Security questionnaires from customers consume hours per response',
    'Managing compliance across 35+ frameworks is fragmented and error-prone',
  ],

  designerLinks: [
    {
      name: 'Deb Kawamoto',
      role: 'VP of Design',
      platform: 'blog',
      url: 'https://www.designexecutivecouncil.com/insights/deb-kawamoto-humanizing-cybersecurity-as-head-of-design-at-vanta',
      description: 'Argues B2B security products have been exempt from design quality — frames design leadership as "orchestration" connecting engineering, product, and customer experience',
    },
    {
      name: 'Braden Kowitz',
      role: 'Director of Design',
      platform: 'podcast',
      url: 'https://www.intercom.com/blog/podcasts/podcast-braden-kowitz-talks-design-and-startups/',
      description: 'Co-created Google Ventures Design Sprint; advocates "story-centered design" — designing full customer journeys before individual features',
    },
    {
      name: 'Braden Kowitz',
      role: 'Director of Design',
      platform: 'blog',
      url: 'https://medium.com/@kowitz',
      description: 'Medium (14K followers) — writes on design leadership, team building, and "people may be the most important thing you build as a designer"',
    },
  ],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 3.9,
      content: 'Strong product, accessible leadership, and competitive compensation (4.3/5). 75% positive business outlook.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Vanta-EI_IE3971334.11,16.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Heavy meeting culture and long hours noted; concerns about prioritizing external hires over internal promotions.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Vanta-EI_IE3971334.11,16.htm',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'CPO Jeremy Epling (ex-GitHub VP Product, 16y Microsoft) champions AI-first product prototyping and design-driven culture.',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '~45% YoY (~$152M → ~$220M ARR)',
    signals: [
      'Series D at $4.15B (69% valuation jump from Series C)',
      '12,000+ customers with ~900 net new per quarter',
      '10 open Product Design roles — aggressive design hiring',
    ],
    tam: '$28B+ (GRC software market)',
    ceiling: 'Mid-innings: expanding from compliance automation to full trust management platform',
    tailwinds: [
      'Regulatory complexity increasing globally (GDPR, AI Act, SOX)',
      'Every software company needs SOC 2 — massive addressable base',
      'AI agents enabling 10x efficiency gains in GRC workflows',
    ],
    headwinds: [
      'Drata and Secureframe growing fast with similar positioning',
      'Enterprise buyers may prefer incumbents (ServiceNow, OneTrust)',
      'Commoditization risk as compliance automation becomes table stakes',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong: deep integration into customer infrastructure + auditor network creates high switching costs',
  },
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Level B AI-core with 10 open PD roles — rare design hiring scale',
      'Design leadership: VP of Design (3 unicorn exits) + Director (GV Design Sprint co-creator)',
      '$4.15B valuation with 45% growth — strong business trajectory',
      'Remote-first US — location flexibility',
    ],
    whyNot: [
      'Compliance/security domain may feel dry compared to consumer AI',
      'Glassdoor notes heavy meeting culture and long hours',
      'Competitive market with commoditization risk',
    ],
    nextActions: [
      'Review Vanta product demo for UX quality assessment',
      'Read Deb Kawamoto Design Executive Council interview',
      'Apply to Staff Product Designer, AI Powered Workflows',
    ],
  },
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'TechCrunch — Vanta Series C $150M at $2.45B', url: 'https://techcrunch.com/2024/07/24/trust-management-platform-vanta-raises-150m-series-c-now-valued-at-2-45b/' },
    { title: 'CNBC — Vanta Series D $150M at $4B valuation', url: 'https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html' },
    { title: 'Sacra — Vanta at $220M/year ARR', url: 'https://sacra.com/research/vanta-at-220m-year/' },
    { title: 'Vanta Careers — 10 Product Design roles open', url: 'https://jobs.ashbyhq.com/vanta/' },
    { title: 'Glassdoor — Vanta reviews (3.9/5)', url: 'https://www.glassdoor.com/Overview/Working-at-Vanta-EI_IE3971334.11,16.htm' },
  ],
};
