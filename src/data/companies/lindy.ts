import { Company } from '../types';

export const lindy: Company = {
  id: 'lindy',
  name: 'Lindy',
  description: 'No-code AI agent platform that lets anyone build custom AI employees to automate business workflows across 5,000+ integrations.',
  website: 'https://www.lindy.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',
  ogImage: '/og-images/lindy-og.webp',

  aiTypes: ['automation'],
  markets: ['smb', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  stage: 'Series B',

  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '~$50M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3.9M', date: '2023-01', leadInvestors: [] },
    { stage: 'Series A', amount: '$11M', date: '2023-06', leadInvestors: [] },
    { stage: 'Series B', amount: '$35M', date: '2023-12', leadInvestors: ['Battery Ventures'] },
  ],
  revenue: '~$15M ARR (2025 est.)',
  growth: '5.5x over 12 months',
  runway: 'Strong — $50M raised, lean team (~40 employees)',
  customers: 'Thousands of SMBs and growing enterprises',

  competitors: [
    {
      name: 'Zapier',
      description: 'Largest workflow automation platform with 7,000+ integrations',
      whyTheyWin: 'Market leader brand, massive integration library, established enterprise trust',
    },
    {
      name: 'n8n',
      description: 'Open-source workflow automation with AI capabilities',
      whyTheyWin: 'Self-hosted option, developer community, open-source flexibility',
    },
    {
      name: 'Relevance AI',
      description: 'AI agent platform for research and workflow automation',
      whyTheyWin: 'Strong agent reasoning capabilities, enterprise-focused research agents',
    },
  ],
  marketPosition: 'Leading no-code AI agent builder for non-technical users',
  moat: [
    '5,000+ integrations with natural language agent creation',
    'Autopilot: agents with virtual computer access (computer use)',
    'Non-technical user focus — "Zapier of AI" positioning',
    'Pivot-proven founder with rapid PMF achievement',
  ],
  vsGiants: 'Lindy targets non-technical users who want AI agents without coding, unlike Microsoft Copilot (locked to MS ecosystem) or Google (enterprise-only). More AI-native than Zapier/Make which bolt AI onto traditional trigger-action patterns.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Lindy agents are AI-first — users describe what they want in natural language and agents autonomously execute tasks, reason, and adapt. No pre-AI product existed; this is zero-to-one.',
  aiDesignChallenges: [
    'Agent autonomy boundaries: how much should AI do vs. ask for confirmation',
    'Workflow transparency: making multi-step AI reasoning visible and debuggable',
    'Trust calibration: building confidence in AI agents handling real business operations',
  ],

  founders: [
    {
      name: 'Flo Crivello',
      role: 'CEO & Founder',
      background: 'Ex-Uber Head of Product, founded Teamflow ($50M raised), pivoted to Lindy after discovering AI agent opportunity.',
    },
  ],
  whyBuilding: 'While running Teamflow, Flo discovered that AI could auto-update CRM after meetings. He kept generalizing — any field, any CRM, any tool — climbing a "ladder of abstraction" until he realized he was building an AI employee platform.',
  beliefs: [
    'AI agents will replace most knowledge work automation',
    'Non-technical users deserve AI power without code',
    'Scaffolding and integrations matter as much as raw model intelligence',
    'Speed of shipping is a competitive advantage',
  ],
  designPhilosophy: 'Accessibility-first: Lindy should be usable by anyone via plain English. Democratization over developer-only tools.',
  greenFlags: [
    'Rapid PMF: 5.5x revenue growth in 12 months post-pivot',
    'Battle-tested founder who pivoted from $50M Teamflow to find real PMF',
    'Backed by Battery Ventures, Menlo, Coatue — tier-1 investors',
    'Lean team (~40) with strong revenue efficiency',
  ],
  redFlags: [
    'Zapier/Microsoft/Google entering the AI agent space with massive distribution',
    'In-office 4 days/week in SF — limits talent pool',
    'Very small design team (1-2 designers) — may be under-invested in design',
    'Commoditization risk as AI agent frameworks commoditize',
  ],

  designTeam: {
    teamSize: '~1-2 (1 Sr PD hired Mar 2025, no Head of Design)',
    notableMembers: [
      { name: 'Zack Gemmell', role: 'Senior Product Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent autonomy boundaries and confirmation patterns',
        'Natural language workflow builder interaction design',
        'Error recovery for multi-step agent failures',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Agent performance monitoring dashboards',
        'Workflow success/failure feedback loops',
        'User trust signals for autonomous agent actions',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'No-code workflow builder UI (drag-and-drop + NL)',
        'Agent management dashboard and team accounts',
        'Integration configuration and permissions UI',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Non-technical business users automating knowledge work',
    secondary: 'SMB operations teams and growing enterprise departments',
  },
  userProblems: [
    'Manual repetitive tasks (CRM updates, email triage, scheduling) consume hours daily',
    'Existing automation tools (Zapier/Make) require technical setup and lack AI reasoning',
    'Hiring assistants for routine tasks is expensive and slow to scale',
    'AI tools are powerful but fragmented — no single platform connects everything',
  ],

  designerLinks: [
    {
      name: 'Zack Gemmell',
      role: 'Senior Product Designer',
      platform: 'blog',
      url: 'https://zackgemmell.com/',
      description: 'Led strategic pivot from personal assistant to platform through user research; pivot drove $15M first-year revenue. Portfolio shows fullstack design thinking.',
    },
  ],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'First-class engineering culture, high autonomy, fast shipping. Leadership has low ego and is receptive to feedback.',
      url: 'https://www.glassdoor.com/Reviews/Lindy-Reviews-E9336026.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Intense work environment with long hours and frequent weekend work. Everything feels urgent, too many side projects at once.',
      url: 'https://www.glassdoor.com/Reviews/Lindy-Reviews-E9336026.htm',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Company values: Quickly (ship in days), Unbounded, Hard (not a 9-to-5), Together, With Direct Feedback. Culture summarized as "care."',
      url: 'https://www.lindy.ai/careers',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '5.5x in 12 months (~$5M → ~$15M)',
    signals: [
      '$50M raised from Battery, Menlo, Coatue',
      'PMF reached May 2024 — "more customers than we could handle"',
      '5,000+ integrations, expanding use cases',
    ],
    tam: '$50B+ (business process automation + AI agents market)',
    ceiling: 'Early innings: AI agents replacing manual knowledge work is just beginning',
    tailwinds: [
      'AI agent adoption accelerating across enterprises',
      'Non-technical users demanding AI-powered automation',
      'LLM capabilities improving rapidly (better agents)',
    ],
    headwinds: [
      'Zapier, Microsoft, Google launching competing AI agent products',
      'AI agent framework commoditization (CrewAI, LangGraph)',
      'Enterprise trust in autonomous AI agents still developing',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate: 5,000+ integrations create switching costs, but no deep data flywheel yet',
  },

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Level A AI-native — designing entirely new agent interaction patterns',
      'High-impact design: 1-2 designers shaping product for thousands of users',
      'Rapid growth (5.5x revenue) with strong PMF signal',
    ],
    whyNot: [
      'Very small design team — may be isolated, limited mentorship',
      'Intense culture with long hours and weekend work',
      'No remote — 4 days/week in SF office required',
    ],
    nextActions: [
      'Monitor for new Product Designer openings on Ashby board',
      'Follow Flo Crivello on X for product direction signals',
    ],
  },

  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Lindy Official Website', url: 'https://www.lindy.ai' },
    { title: 'Lindy Careers (Ashby) - no Product Design roles', url: 'https://jobs.ashbyhq.com/lindy' },
    { title: 'Lindy 3.0 Announcement', url: 'https://www.lindy.ai/blog/lindy-3-0' },
    { title: 'Flo Crivello - SaaS Club Podcast', url: 'https://saasclub.io/podcast/lindy-flo-crivello-450/' },
    { title: 'Glassdoor - Lindy Reviews', url: 'https://www.glassdoor.com/Reviews/Lindy-Reviews-E9336026.htm' },
  ],
};
