import { Company } from '../types';

export const redock: Company = {
  id: 'redock',
  name: 'reDock',
  description: 'AI-powered proposal search engine that finds and surfaces content from existing document management systems.',
  website: 'https://www.redock.com',
  headquarters: 'Ottawa, ON, Canada',
  region: 'other-intl' as const,
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  totalFunding: '~$1M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '~$1M',
      date: '2017-08',
      leadInvestors: ['Anges Quebec'],
    },
  ],
  revenue: '~$333K ARR (2024)',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Law firms, IT companies, government contractors',

  // Competition
  competitors: [
    {
      name: 'Loopio',
      description: 'AI-powered RFP response platform for enterprise teams.',
      whyTheyWin: 'Larger team, Toronto-based, deeper enterprise integrations.',
    },
    {
      name: 'Responsive (RFPIO)',
      description: 'Enterprise RFP automation and content management.',
      whyTheyWin: 'Established market leader with broad ATS and CRM integrations.',
    },
    {
      name: 'AutogenAI',
      description: 'GenAI-powered proposal writing and bid management.',
      whyTheyWin: 'Modern LLM-first approach to proposal generation, not just search.',
    },
  ],
  marketPosition: 'Search-first proposal tool that integrates with existing CMS rather than replacing it.',
  moat: [
    'CMS-native integration (SharePoint, Google Drive) without content migration',
    'Segment-level search within documents (not just file-level)',
    'ML-based learning that improves with usage',
  ],
  vsGiants: 'Microsoft Copilot can search SharePoint but lacks proposal-specific optimization and segment-level retrieval.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI/ML is the core differentiator — text mining, segment-level search, and learning capabilities define the product. Without AI, it would be a basic file search tool.',
  aiDesignChallenges: [
    'Search relevance UX: helping users trust and refine AI-surfaced content snippets',
    'Content reuse workflow: seamless copy-paste from search results into active proposals',
    'Learning feedback loop: designing signals for ML model improvement without user friction',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Pierre-Olivier Charlebois',
      role: 'Founder & CEO',
      background: 'Electrical engineer turned AI consultant. Built AI for games, then spent 6 years selling AI services for document automation in Ottawa.',
    },
    {
      name: 'Raman Gupta',
      role: 'Co-Founder & CTO',
      background: 'Former Deloitte consultant with 20+ years in system architecture, database design, and machine learning.',
    },
    {
      name: 'Amlan Gupta',
      role: 'Co-Founder & COO',
      background: '37-year career in enterprise technology, proposal management, and operations consulting.',
    },
  ],
  whyBuilding: 'Founded out of frustration with manually searching hundreds of past proposals for reusable content when responding to RFPs.',
  beliefs: [
    'Proposal teams waste most time searching, not writing',
    'AI should work with existing tools, not replace them',
    'Search quality improves through continuous learning from user behavior',
  ],
  greenFlags: [
    '500 Startups and CDL Montreal alumni — validated by top accelerators',
    'Solves a real, painful problem for proposal professionals',
    'CMS-native approach avoids content migration friction',
  ],
  redFlags: [
    'Very small team (~3-5 people) with modest revenue (~$333K) after 7+ years',
    'Founder may have moved on (LinkedIn shows Remitian/Taxpay)',
    'Pre-LLM AI approach may be outdated against GenAI competitors like AutogenAI',
    'No visible design hiring or design team',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0 (no evidence of dedicated design team; ~3-5 person company)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Search ranking logic and result prioritization',
        'Content snippet extraction and relevance scoring',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Search result quality measurement',
        'User feedback signals for ML model improvement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Search UI with Boolean and keyword operators',
        'Content preview and copy-to-proposal workflow',
        'CMS integration dashboard (SharePoint, Google Drive)',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Proposal professionals at consulting, engineering, and IT firms responding to RFPs',
    secondary: 'Government contractors managing compliance-heavy bid responses',
  },
  userProblems: [
    'Searching hundreds of past proposals manually to find reusable content',
    'Opening documents one by one to locate specific paragraphs or data points',
    'Inconsistent tagging and organization across shared drives',
    'Spending 50%+ of proposal time on search instead of writing',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // Growth Metrics
  growthMetrics: {
    stage: 'plateau',
    revenueGrowth: '~$333K ARR with ~3 person team (2024)',
    signals: [
      '500 Startups (2017) and CDL Montreal (2017-18) alumni',
      'Microsoft AppSource listing (enterprise distribution)',
      'Very small team after 7+ years suggests slow growth',
    ],
    tam: '$3-5B (proposal management software market)',
    ceiling: 'Niche tool in a market being disrupted by GenAI-powered competitors',
    tailwinds: ['Enterprise RFP volume growing', 'AI search adoption accelerating'],
    headwinds: ['GenAI competitors leapfrogging traditional ML search', 'Small team limits product velocity'],
    moatType: 'switching-costs',
    moatStrength: 'Weak: CMS integration creates some lock-in but product is not deeply embedded',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 2,
    whyJoin: [
      'Real pain point in proposal workflows',
    ],
    whyNot: [
      'Very small company with no design team or design hiring',
      'Modest revenue after 7+ years — growth concerns',
      'Founder may have moved on to another venture',
      'Pre-LLM AI approach risks being outpaced by GenAI competitors',
    ],
    nextActions: ['Monitor for design hiring signals'],
  },

  // Meta
  lastUpdated: '2026-02-13',
  sources: [
    { title: 'reDock Official Website', url: 'https://www.redock.com' },
    { title: 'reDock - Crunchbase', url: 'https://www.crunchbase.com/organization/redock' },
    { title: 'reDock - 500 Startups Selection (TechVibes)', url: 'https://techvibes.com/2017/08/10/ottawas-redock-selected-for-silicon-valley-accelerator' },
    { title: 'reDock - Creative Destruction Lab', url: 'https://creativedestructionlab.com/companies/redock/' },
    { title: 'reDock Careers - Wellfound', url: 'https://wellfound.com/company/redock' },
    { title: 'reDock Careers - no Product Design roles found', url: 'https://www.redock.com' },
  ],
};
