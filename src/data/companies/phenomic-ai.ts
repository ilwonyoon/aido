import { Company } from '../types';

export const phenomicAi: Company = {
  id: 'phenomic-ai',
  name: 'Phenomic AI',
  description: 'AI/ML-powered biotech developing therapies for stroma-rich solid tumors using its proprietary scTx single-cell transcriptomics platform.',
  website: 'https://phenomic.ai',
  headquarters: 'Toronto, ON',
  region: 'toronto' as const,
  remote: 'No',
  aiTypes: ['data-analysis'],
  markets: ['enterprise'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '~$8M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$6M',
      date: '2020-10',
      leadInvestors: ['CTI Life Sciences Fund'],
    },
    {
      stage: 'Seed',
      amount: '$1.5M',
      date: '2019-06',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Boehringer Ingelheim, Astellas Pharma',
  competitors: [
    {
      name: 'Recursion Pharmaceuticals',
      description: 'AI-driven drug discovery with massive phenomic screening and automated chemistry platform.',
      whyTheyWin: 'Largest vertically integrated biotech dataset, $2B+ funding, public company scale',
    },
    {
      name: 'Insitro',
      description: 'ML platform combining in vitro cellular data with human clinical data for drug discovery.',
      whyTheyWin: '$400M+ funding, iPSC models with genetic data for disease relevance',
    },
    {
      name: 'Mestag Therapeutics',
      description: 'Biotech focused on tumor stroma biology and stromal cell-targeted therapies.',
      whyTheyWin: 'Direct stroma-focused competitor with similar tumor microenvironment approach',
    },
  ],
  marketPosition: 'Pioneer in AI-driven tumor stroma target discovery with validated pharma partnerships',
  moat: [
    'Proprietary scTx platform with one of the largest single-cell RNA cancer datasets',
    '$509M+ Boehringer Ingelheim deal validates platform commercially',
    'Unique focus on tumor stroma — underexplored niche in oncology',
  ],
  vsGiants: 'Big pharma (Roche, Pfizer) lack specialized stroma-targeting AI platforms. Phenomic partners with them rather than competes.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI/ML is the core differentiator powering target discovery and drug candidate identification, but the end product is therapeutic biologics, not AI software.',
  aiDesignChallenges: [
    'Scientific data visualization: making single-cell RNA datasets interpretable for biologists',
    'Platform UX: designing workflows for iterative digital screening and experimental validation',
    'Collaboration tools: enabling pharma partner teams to interact with scTx platform insights',
  ],
  founders: [
    {
      name: 'Sam Cooper',
      role: 'Co-founder & CTO',
      background: 'PhD from Institute of Cancer Research (UK). Developed AI software for automated microscopy and drug discovery imaging.',
    },
    {
      name: 'Oren Kraus',
      role: 'Co-founder',
      background: 'PhD from University of Toronto under Brendan Frey (Deep Genomics founder). Pioneer in applying deep learning to microscopy data.',
    },
    {
      name: 'Girish Aakalu',
      role: 'CEO (appointed 2022)',
      background: 'PhD from Caltech. 20+ years biopharma leadership at Genentech, Pfizer, Ipsen, and Genocea.',
    },
  ],
  whyBuilding: 'Co-founders met at a Harvard workshop in 2016 and realized AI could unlock tumor stroma biology — an area too complex for traditional drug discovery approaches.',
  beliefs: [
    'Tumor stroma is the key to cracking solid tumor resistance',
    'Single-cell transcriptomics + ML reveals targets invisible to bulk analysis',
    'Pharma partnerships accelerate path to patient impact',
  ],
  greenFlags: [
    '$509M Boehringer Ingelheim deal at seed stage — exceptional validation',
    'Astellas collaboration adds second major pharma partnership',
    'Nobel Laureate James Allison on Scientific Advisory Board',
    'Founders are domain experts (AI + cancer biology intersection)',
  ],
  redFlags: [
    'Only ~$8M raised — very early stage with limited runway',
    'Drug discovery timelines are 10+ years to market',
    'Small team (~20 people) limits execution capacity',
    'No Product Design roles — biotech focus, not software product',
  ],
  designTeam: {
    teamSize: '0 (no design team — biotech R&D focused)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'low',
      tasks: [
        'ML pipeline configuration for target screening',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Target validation workflow design',
        'Data quality assessment interfaces',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Internal scientific data dashboards',
        'scTx platform visualization tools',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Large pharma R&D teams seeking novel oncology drug targets',
    secondary: 'Academic researchers in tumor microenvironment biology',
  },
  userProblems: [
    'Tumor stroma creates barriers that block existing cancer therapies from reaching solid tumors',
    'Traditional drug discovery cannot analyze complex cell-cell interactions in tumor microenvironment',
    'Identifying selective stromal targets requires massive single-cell datasets and ML analysis',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Small, tight-knit team of 20+ scientists across biology, data science, bioinformatics, ML, and operations in Toronto and Waltham.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$509M+ Boehringer Ingelheim partnership (Nov 2023)',
      'Astellas Pharma strategic collaboration (Nov 2023)',
      'Lead CD3 engager antibody at development candidate stage',
    ],
    tam: '$70B+ (AI-driven drug discovery market by 2030)',
    ceiling: 'Early innings: platform validated but therapeutic pipeline is pre-clinical',
    tailwinds: [
      'AI drug discovery investment accelerating ($18B+ into AI-first biotechs)',
      'Tumor stroma is underexplored with few competitors',
      'Big pharma actively seeking AI partnerships',
    ],
    headwinds: [
      'Long timelines to clinical validation and revenue',
      'Capital-intensive drug development beyond platform',
      'Regulatory complexity in oncology therapeutics',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate: proprietary scTx dataset grows with each partnership, but data moat is early-stage',
  },
  tracking: {
    status: 'watching',
    fitScore: 2,
    whyJoin: [
      'Level B AI-native biotech with real pharma validation',
      'Cutting-edge AI/ML applied to cancer biology',
    ],
    whyNot: [
      'No Product Design roles — biotech R&D company, not software product',
      'Very small team with no design function',
      'Toronto-based, no remote option',
      'Drug discovery timelines mean slow product iteration cycles',
    ],
    nextActions: [
      'Monitor if they build internal software tools that need design',
    ],
    notes: 'Impressive science and pharma partnerships, but not a design opportunity currently.',
  },
  lastUpdated: '2026-02-13',
  sources: [
    { title: 'Phenomic AI Official Website', url: 'https://phenomic.ai' },
    { title: 'Boehringer bets $509M on Phenomic — Fierce Biotech', url: 'https://www.fiercebiotech.com/biotech/boehringer-ingelheim-bets-509m-phenomics-tumor-stroma-targeting-tech-ai-biotech-plans-busy' },
    { title: 'Phenomic AI Astellas Collaboration — BusinessWire', url: 'https://www.businesswire.com/news/home/20231130696214/en/Phenomic-Enters-into-Strategic-Research-Collaboration-with-Astellas-for-Solid-Tumor-Cell-Therapies' },
    { title: 'Phenomic AI raises $7.97M CAD — BetaKit', url: 'https://betakit.com/biotech-startup-phenomic-ai-raises-7-97-million-cad-to-identify-promising-cancer-drugs/' },
    { title: 'Phenomic AI Careers — no Product Design roles found', url: 'https://www.linkedin.com/company/phenomic' },
  ],
};
