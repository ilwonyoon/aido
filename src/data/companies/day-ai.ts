import { Company } from '../types';

export const dayAi: Company = {
  id: 'day-ai',
  name: 'Day AI',
  description: 'AI-native CRM that autonomously captures relationship context from emails, Slack, and meetings — eliminating manual data entry and replacing legacy CRMs with an intelligent context graph.',
  website: 'https://day.ai',
  headquarters: 'Boston, MA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/day-ai-og.webp',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['smb', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$24M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$4M',
      date: '2024-06',
      leadInvestors: ['Sequoia Capital'],
    },
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2025-01',
      leadInvestors: ['Sequoia Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: '~120 at GA launch',

  competitors: [
    {
      name: 'Attio',
      description: 'Flexible data-model CRM for startups with $100M+ raised',
      whyTheyWin: 'Strong developer-friendly API and flexible data model',
    },
    {
      name: 'Clarify',
      description: 'AI CRM targeting founders and early-stage sales teams',
      whyTheyWin: 'Similar AI-first thesis with $15M raised and founder focus',
    },
    {
      name: 'Salesforce',
      description: 'Dominant enterprise CRM with Einstein AI add-on',
      whyTheyWin: 'Massive enterprise lock-in and ecosystem breadth',
    },
  ],
  marketPosition: 'AI-native CRM challenger positioned as "the Cursor of CRM" — built for AI agents, not human forms',
  moat: [
    'Context graph architecture built for AI agents from day one',
    'Sequoia backing in both Seed and Series A (rare double-down)',
    'Founding team with decade of CRM domain expertise from HubSpot',
  ],
  vsGiants: 'Salesforce and HubSpot are retrofitting AI onto legacy form-based CRMs; Day AI is built from scratch for autonomous data capture with no manual entry',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — without AI, there is no CRM. The entire value proposition is autonomous capture, structuring, and reasoning over relationship data. Built on Claude 3.5 Sonnet as a foundational capability.',
  aiDesignChallenges: [
    'Trust design: showing users how AI interpreted their conversations accurately',
    'Autonomous CRM UX: designing for a system that fills itself without user input',
    'Conversational query interface for complex business questions',
  ],

  founders: [
    {
      name: 'Christopher O\'Donnell',
      role: 'Co-founder & CEO',
      background: 'Former HubSpot CPO for ~10 years (oversaw 100x share price growth). Brown CS. Previously Performable (acquired by HubSpot), Firetower (acquired by Twitter/Google).',
    },
    {
      name: 'Michael Pici',
      role: 'Co-founder',
      background: 'HubSpot veteran, VP Product Revenue. Led new product and revenue expansion in pre-IPO HubSpot.',
    },
  ],
  whyBuilding: 'After a decade building HubSpot into a CRM giant, O\'Donnell saw that all CRMs — including HubSpot — are passive databases requiring human data entry. AI finally makes autonomous relationship intelligence possible.',
  beliefs: [
    'CRMs should fill themselves — manual data entry is a relic',
    'AI agents need a CRM built for them, not retrofitted forms',
    'Relationship context is the most valuable business data',
  ],
  greenFlags: [
    'Sequoia led both Seed and Series A — exceptional conviction signal',
    'Founders have deep CRM domain expertise (HubSpot CPO + VP Product)',
    '18+ months of private testing before GA — deliberate product culture',
    'Pat Grady (Sequoia) joined the board',
  ],
  redFlags: [
    'Early stage with only ~120 customers at GA',
    'Crowded AI CRM space (Attio, Clarify, Reevo all well-funded)',
    'Small team (~31 employees) competing against massive incumbents',
  ],

  designTeam: {
    teamSize: '~1-2 (no dedicated PD role found, product led by Head of Product)',
    notableMembers: [
      { name: 'Daphne Funston', role: 'Head of Product' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Autonomous data capture logic — how AI interprets and structures conversations',
        'Context graph design — relationship mapping and deal signal detection',
        'AI agent boundaries — what the system does vs. asks the user',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'AI accuracy metrics — did it capture the right context from meetings?',
        'Deal risk scoring calibration and user trust feedback loops',
        'Onboarding success metrics — 15-minute business learning benchmark',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Conversational query UI for natural language business questions',
        'Context graph visualization and relationship mapping',
        'Meeting assistant integration and real-time capture surfaces',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Founders and sales teams at SMBs tired of manual CRM data entry',
    secondary: 'Marketing leaders needing customer voice data and relationship context',
  },
  userProblems: [
    'CRM data is always stale and incomplete because it relies on manual entry',
    'Salespeople spend hours on CRM admin instead of selling',
    'Relationship nuance and context is lost in form-field databases',
    'Existing CRMs cannot answer proactive business questions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'CEO O\'Donnell emphasizes hiring exceptional specialists with full autonomy — "four of us on the team, happy as clams, it\'s about the fun of starting over."',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: '18+ months of invite-only private testing before GA — signals deliberate, quality-first product culture over growth hacking.',
      url: 'https://techcrunch.com/2024/06/20/ex-hubspot-exec-builds-ai-powered-crm-learns-for-you-with-4m-seed-led-sequoia/',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$20M Series A led by Sequoia (late 2024)',
      'GA launch with ~120 customers after 18-month private beta',
      'Expanding team from ~4 to 31 employees',
    ],
    tam: '$75B+ (global CRM market)',
    ceiling: 'Early innings: legacy CRM replacement is a generational shift driven by AI',
    tailwinds: [
      'AI adoption making autonomous data capture viable',
      'Universal dissatisfaction with manual CRM workflows',
      'Enterprise willingness to pay for AI-native productivity tools',
    ],
    headwinds: [
      'Salesforce and HubSpot have massive incumbent lock-in',
      'Multiple well-funded AI CRM competitors (Attio, Clarify)',
      'Enterprise switching costs from legacy CRM are high',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: context graph architecture is differentiated but CRM space attracts heavy competition',
  },

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Level A AI-native — every design problem involves AI behavior',
      'Sequoia-backed with rare double-down conviction (Seed + Series A)',
      'Founders with deep CRM domain expertise from HubSpot',
      '0→1 product stage — shape the entire design language',
    ],
    whyNot: [
      'No open Product Design roles currently',
      'Very small team (~31) — may not have design maturity yet',
      'Boston-based, not SF/remote-first',
    ],
    nextActions: [
      'Monitor for Product Designer job postings as team scales',
      'Watch product evolution post-GA for design complexity signals',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Day AI Official Website', url: 'https://day.ai' },
    { title: 'Sequoia — Partnering with Day.ai', url: 'https://sequoiacap.com/article/partnering-with-day-ai-customer-obsession-productized/' },
    { title: 'TechCrunch — Ex-HubSpot exec builds AI-powered CRM with $4M Sequoia seed', url: 'https://techcrunch.com/2024/06/20/ex-hubspot-exec-builds-ai-powered-crm-learns-for-you-with-4m-seed-led-sequoia/' },
    { title: 'Day AI $20M Series A — ContentGrip', url: 'https://www.contentgrip.com/day-ai-raises-20m-autonomous-crm/' },
    { title: 'Day AI Careers — no Product Design roles found', url: 'https://day.ai/careers' },
  ],
};
