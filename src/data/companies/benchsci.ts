import { Company } from '../types';

export const benchsci: Company = {
  id: 'benchsci',
  name: 'BenchSci',
  description: 'Biotech AI platform that helps researchers find evidence and accelerate preclinical research decisions.',
  website: 'https://www.benchsci.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$83.3M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Biopharma and life-science R&D organizations',

  // Competition
  competitors: [
    {
      name: 'Schrodinger',
      description: 'Computational chemistry and drug discovery software platform.',
      whyTheyWin: 'Deep scientific tooling and public company scale.',
    },
    {
      name: 'Recursion',
      description: 'AI-driven drug discovery and experimental data platform.',
      whyTheyWin: 'Large proprietary datasets and integrated wet-lab strategy.',
    },
    {
      name: 'Elsevier/Reaxys ecosystem',
      description: 'Scientific literature and research workflow platforms.',
      whyTheyWin: 'Incumbent enterprise distribution in life sciences.',
    },
  ],
  marketPosition: 'AI-native research intelligence layer for preclinical life science workflows.',
  moat: [
    'Domain-specific biomedical search and retrieval focus',
    'Embedded workflows for research and translational teams',
  ],
  vsGiants: 'Competes with domain depth in life-science research workflows rather than general-purpose AI tooling.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is central to the product value in biomedical evidence retrieval and analysis.',
  aiDesignChallenges: [
    'Designing high-trust scientific evidence experiences',
    'Balancing speed with scientific rigor and traceability',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Liran Belenzon',
      role: 'Co-founder & CEO',
      background: 'Co-founded BenchSci and leads product and company strategy in AI for life sciences.',
    },
    {
      name: 'Tom Leung',
      role: 'Co-founder',
      background: 'Co-founded BenchSci with focus on translational research and life-science impact.',
    },
  ],
  whyBuilding: 'Reduce wasted research effort and speed up scientific discovery with better evidence intelligence.',
  beliefs: [
    'Life-science R&D decisions should be evidence-first and AI-assisted',
    'Scientific trust requires transparent data and source traceability',
  ],
  greenFlags: ['Clear vertical specialization', 'Meaningful funding and biotech relevance'],
  redFlags: ['Long enterprise sales cycles in life sciences'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Scientific query and ranking workflows', 'Evidence traceability UX'] },
    evaluation: { level: 'high', tasks: ['Signal quality and confidence communication', 'Human-in-the-loop scientific review'] },
    interface: { level: 'medium', tasks: ['Research workspace and decision dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Biopharma research scientists and translational teams',
    secondary: 'R&D leadership optimizing preclinical pipelines',
  },
  userProblems: [
    'Scientific teams spend excessive time locating relevant experimental evidence',
    'Research decisions are slowed by fragmented data and literature workflows',
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
    whyJoin: ['High-impact healthcare/science UX', 'Complex trust and evidence design challenges'],
    whyNot: ['Domain learning curve for non-biotech background'],
    nextActions: ['Verify active product design or design-research openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$83.3M total funding (Seedtable)', 'AI + biotech category momentum'],
    tam: 'Large life-science software and AI drug discovery market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand from discovery support to broader R&D decision infrastructure',
    tailwinds: ['Biotech AI adoption', 'Need for faster preclinical decision cycles'],
    headwinds: ['Procurement complexity in regulated healthcare organizations'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:10:00',
  sources: [
    { title: 'Source', url: 'https://www.benchsci.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
