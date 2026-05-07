import { Company } from '../types';

export const tennr: Company = {
  id: 'tennr',
  name: 'Tennr',
  description: 'AI platform automating patient referral workflows and healthcare document processing — processes 10M+ documents per month to reduce patient delays across the US healthcare system.',
  website: 'https://www.tennr.com',
  headquarters: 'New York, NY',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series C',
  valuation: '$605M (Jun 2025)',
  totalFunding: '$162M',
  fundingHistory: [
    { stage: 'Series A', amount: '$18M', date: '2024-04', valuation: 'Unknown', leadInvestors: ['Andreessen Horowitz', 'Foundation Capital'] },
    { stage: 'Series B', amount: '$37M', date: '2024-10', valuation: 'Unknown', leadInvestors: ['Lightspeed Venture Partners', 'Andreessen Horowitz'] },
    { stage: 'Series C', amount: '$101M', date: '2025-06', valuation: '$605M', leadInvestors: ['IVP', 'Andreessen Horowitz', 'Lightspeed', 'Iconiq'] },
  ],
  revenue: 'Unknown (processing 10M+ documents/month signals significant revenue scale)',
  growth: 'Processing 10M+ docs/month; 3 funding rounds in 14 months signals hypergrowth',
  runway: 'Very strong ($101M Series C Jun 2025)',
  customers: 'Healthcare providers, specialty practices, referral networks',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown ARR, but $18M → $37M → $101M in rounds across 14 months = exceptional velocity',
    userGrowth: '10M+ documents processed per month and growing',
    signals: [
      '$101M Series C at $605M valuation (Jun 2025)',
      'Series A → B → C in just 14 months — exceptional funding velocity',
      'a16z + Lightspeed + IVP + Iconiq all investing = elite investor conviction',
      '10M+ documents/month = meaningful scale in healthcare ops',
    ],
    tam: '$45B+ US healthcare RCM and document automation market',
    marketShare: '<0.1% of TAM = massive upside',
    ceiling: 'Very early: most healthcare referrals still processed manually by fax and phone',
    tailwinds: [
      'Healthcare fax/paper reliance creates massive automation opportunity',
      'CMS and payer pressure to reduce referral delays and prior auth friction',
      'Provider burnout from administrative work drives automation urgency',
      'LLMs now capable enough to parse complex unstructured healthcare documents',
      'Private equity healthcare consolidation increases admin volume per organization',
    ],
    headwinds: [
      'Healthcare IT sales cycles are long (6-18 months) and procurement is complex',
      'EHR incumbents (Epic, Cerner) could build similar features as add-ons',
      'HIPAA compliance overhead slows product iteration',
      'Referral workflows vary widely by payer, specialty, and geography',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong: 10M+ documents/month creates proprietary training data advantage on payer rules, referral patterns, and denial logic that compounds with scale.',
  },

  // Competition
  competitors: [
    {
      name: 'Waystar',
      description: 'Healthcare RCM platform (IPO 2024, $4B+ valuation).',
      whyTheyWin: 'Full-suite RCM, large installed base, post-IPO resources.',
    },
    {
      name: 'Availity',
      description: 'Health information network and prior auth automation.',
      whyTheyWin: 'Already embedded in payer-provider workflows, scale advantage.',
    },
    {
      name: 'Cohere Health',
      description: 'AI prior authorization platform.',
      whyTheyWin: 'Prior auth specialization, $200M+ raised, payer relationships.',
    },
  ],
  moat: [
    '10M+ docs/month creates proprietary payer-rule and referral data flywheel',
    'Custom LLMs trained on healthcare document patterns outperform GPT-4 on RCM tasks',
    'Referral workflow automation is deeply integrated into provider clinical operations',
  ],

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the Product: Tennr\'s entire value is AI parsing unstructured healthcare documents (faxes, PDFs, EMR notes) to automate referral workflows. Without AI, there is no product.',
  aiDesignChallenges: [
    'Designing AI document confidence UI: when should humans review vs. auto-process?',
    'Exception queue design: how do staff efficiently review and correct AI errors?',
    'Making complex payer rules and referral logic transparent and auditable',
    'Designing for clinical admin users who are non-technical and time-pressured',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Trey Holterman',
      role: 'CEO & Co-founder',
      background: 'Stanford (advanced AI and LLM research). Founded Tennr in 2021 fresh from Stanford research lab.',
    },
    {
      name: 'Tyler Johnson',
      role: 'CTO & Co-founder',
      background: 'Stanford (advanced AI and LLM research). Built Tennr\'s custom LLM infrastructure for healthcare document parsing.',
    },
    {
      name: 'Diego Baugh',
      role: 'CPO & Co-founder',
      background: 'Stanford. Designed and built the product UX to make AI applications practical for non-technical clinical admin teams.',
    },
  ],
  whyBuilding: 'Met at Stanford while working on advanced AI and LLM research. Saw that healthcare\'s referral process — still run by fax and phone — was one of the largest preventable causes of patient delays in the US, and that LLMs were finally capable enough to fix it.',
  beliefs: [
    'Patient delays caused by paperwork are a public health problem, not just an ops problem',
    'Custom LLMs trained on specific healthcare workflows will dramatically outperform general-purpose AI for RCM',
    '"Extreme ownership" — every team member owns their domain fully, no hand-holding culture',
  ],
  designPhilosophy: 'Diego Baugh (CPO/co-founder) designed the product to make AI practical for non-technical teams — emphasis on usability and reducing admin cognitive load.',

  greenFlags: [
    'a16z + Lightspeed + IVP + Iconiq all in = elite investor conviction across 3 rounds',
    '$605M valuation at Series C shows strong market validation',
    'CPO as co-founder = design is baked in from inception, not an afterthought',
    '10M+ docs/month = real operational scale, not just pilots',
    'Healthcare is one of largest and most durable AI automation markets',
  ],
  redFlags: [
    'Revenue unknown — hard to assess PMF depth without ARR number',
    'Healthcare IT sales complexity = may slow product-market fit expansion',
    'EHR incumbents (Epic) could add similar features as threats to standalone players',
    '4 days/week in NYC office = limited flexibility for remote candidates',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size est. 100-200)',
    designHead: 'Diego Baugh (CPO/co-founder has design background)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Document classification and routing logic visualization',
        'AI confidence threshold settings and exception handling rules',
        'Payer-specific referral workflow configuration',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'AI accuracy dashboards (what the model got right vs. wrong)',
        'Exception queue management for human review of low-confidence extractions',
        'Referral status tracking and patient delay analytics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Clinical admin dashboard for referral management',
        'Document ingestion status and extraction review UI',
        'Patient journey tracking from referral to appointment',
      ],
    },
  },
  productStage: '1→10',

  // Open Roles
  openRoles: [],

  designerLinks: [],
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: '"Extreme ownership" hiring philosophy — they hire for people who own their domain completely.',
      url: 'https://wellfound.com/blog/cowboy-confrontation-and-usd100m-how-tennr-hires-for-extreme-ownership',
    },
  ],

  // My Tracking
  tracking: {
    status: 'interested',
    fitScore: 9,
    whyJoin: [
      'AI IS the product (Level A) = hardest, most interesting AI UX design problems',
      'CPO co-founder with design background = design is valued from the top',
      'Open Product Designer role right now ($150K-$180K)',
      'Hypergrowth: 3 rounds in 14 months, $605M valuation',
      'Direct patient impact: reducing delays in healthcare is meaningful work',
      'Elite investors (a16z, Lightspeed, IVP, Iconiq) = strong growth runway',
    ],
    whyNot: [
      '4 days/week in NYC Chelsea office = limited flexibility',
      'Revenue unknown — can\'t fully validate business health without ARR',
      'Healthcare domain is specialized — portfolio impact may be niche',
    ],
    nextActions: [
      'Apply to open Product Designer role at tennr.com/careers',
      'Review tennr.com product to assess design quality and direction',
      'Research Diego Baugh (CPO) background more thoroughly',
    ],
  },

  // Meta
  lastUpdated: '2026-04-14T00:00:00',
  sources: [
    { title: 'Tennr raises $101M Series C — Fortune', url: 'https://fortune.com/2025/06/18/tennr-health-tech-ai-patient-referral-ivp-a16z-lightspeed-iconiq-series-c/' },
    { title: 'Tennr raises $37M Series B — SiliconAngle', url: 'https://siliconangle.com/2024/10/22/ai-startup-tennr-raises-37m-automate-healthcare-document-processing/' },
    { title: 'Tennr raises $18M Series A — Healthcare IT Today', url: 'https://www.healthcareittoday.com/2024/04/30/tennr-raises-18m-in-series-a-funding/' },
    { title: 'Product Designer job posting — Ashby', url: 'https://jobs.ashbyhq.com/tennr/dd5ef69b-8066-4cc1-9892-71c7c2e80237' },
    { title: 'Investing in Tennr — a16z', url: 'https://a16z.com/announcement/investing-in-tennr/' },
    { title: 'Company Deep Dive: Tennr — Healthcare AI Guy', url: 'https://www.healthcareaiguy.com/p/company-deep-dive-tennr' },
    { title: 'Tennr YC profile', url: 'https://www.ycombinator.com/companies/tennr' },
  ],
};
