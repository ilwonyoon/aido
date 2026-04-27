import { Company } from '../types';

export const vivodyne: Company = {
  id: 'vivodyne',
  name: 'Vivodyne',
  description: 'Biotechnology company using robots and AI to grow and test lab-grown human organ tissues at scale for drug discovery.',
  website: 'https://www.vivodyne.com',
  headquarters: 'Philadelphia, PA',
  remote: 'Unknown',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$118M',
  fundingHistory: [
    { stage: 'Seed', amount: '$38M', date: '2023-11', leadInvestors: ['Khosla Ventures', 'Kairos Ventures', 'CS Ventures'] },
    { stage: 'Series A', amount: '$40M', date: '2025-11', leadInvestors: ['Unknown'] },
  ],
  revenue: 'Unknown (pre-revenue biotech)',
  growth: 'Series A raised 2 years after Seed (typical for biotech)',
  runway: 'Strong (Series A in Nov 2025)',
  customers: 'Pharma/biotech companies for drug testing partnerships',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown - biotech, early revenue stage',
    userGrowth: 'Expanding drug testing partnerships with pharma customers',
    signals: [
      '$40M Series A (Nov 2025)',
      '$38M Seed (Nov 2023) from top-tier biotech VCs',
      'Lab-grown tissues for 20+ human organ types',
      'Replacing animal testing; regulatory tailwind from EU/US',
    ],
    tam: '$150B+ drug development market',
    marketShare: '<0.1% of TAM = 1500x+ upside potential',
    ceiling: 'Early innings: lab-grown organs replacing animal testing is multi-decade trend',
    tailwinds: [
      'Regulatory pressure to reduce animal testing (EU 3Rs)',
      'Pharma cost pressure: animal testing expensive and slow',
      'AI model training: human tissue data = better drug predictions',
    ],
    headwinds: [
      'Long sales cycles in pharma (18-24 months)',
      'Tissue viability and reproducibility risks',
      'Regulatory validation required before pharma adoption',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: proprietary robotics + 20 tissue types + data flywheel from testing partnerships',
  },

  // Competition
  competitors: [
    {
      name: 'Emulate',
      description: 'Organ-on-chip technology for drug testing',
      whyTheyWin: 'Earlier funding; established pharma partnerships',
    },
    {
      name: 'Ascendia Pharmaceuticals',
      description: 'Contract research with lab tissues',
      whyTheyWin: 'Long-standing pharma relationships',
    },
    {
      name: 'Traditional Animal Testing',
      description: 'Incumbent: mice, rats, primates',
      whyTheyWin: 'Regulatory acceptance; proven workflows',
    },
  ],
  marketPosition: 'AI-powered lab-grown human organs for drug discovery',
  moat: [
    'Proprietary robotics for tissue cultivation at scale',
    '20+ human tissue types (network of tissues)',
    'Data flywheel: more testing = better predictive AI models',
  ],
  vsGiants: 'Living human tissues + AI predictions vs animal models',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core Feature: AI predictive models trained on tissue data are key differentiator for drug efficacy prediction.',
  aiDesignChallenges: [
    'High-dimensional tissue data visualization (20+ organ types, disease models)',
    'Uncertainty quantification: drug response confidence intervals',
    'Hypothesis testing workflows: designing tissue experiments',
    'Data visualization: helping pharma scientists interpret tissue results vs predictions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Andrei Georgescu',
      role: 'CEO & Co-founder',
      background: 'PhD, worked in Dan Huh lab at Penn Engineering',
    },
    {
      name: 'Dan Huh',
      role: 'Co-founder',
      background: 'Associate Professor of Bioengineering at Penn Engineering. Pioneer in organ-on-chip research.',
    },
  ],
  whyBuilding: 'Replace animal testing with human tissue-based drug testing. Faster, cheaper, more humane.',
  beliefs: [
    'Lab-grown human organs can replace animal testing for drug discovery',
    'AI predictions on human tissue data beat animal model predictions',
    'Scale + robotics make human tissue testing economically viable',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Founded by Penn bioengineering professor (Dan Huh)',
    'Series A $40M (2 years after $38M Seed shows traction)',
    'Backed by top-tier biotech VCs (Khosla)',
    'Strong regulatory tailwinds (animal testing restrictions)',
  ],
  redFlags: [
    'Biotech: long pharma sales cycles (18-24 months)',
    'Tissue viability and reproducibility unproven at scale',
    'Regulatory pathway uncertain; need pharma validation studies',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 5-15)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Experiment design workflows: tissue selection, conditions, replicates',
        'Robotic control interfaces: tissue cultivation parameters',
        'Data ingestion and validation pipelines',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Drug response analysis dashboards',
        'Statistical comparison workflows (tissue vs animal vs clinical)',
        'Hypothesis validation UX',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Lab management dashboards (robotic status, tissue inventory)',
        'Result visualization: drug efficacy/toxicity profiles',
        'Integration with pharma partner systems',
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
    status: 'interested',
    fitScore: 7,
    whyJoin: [
      'Biotech + AI + robotics = complex systems design',
      'Early stage (0→1): can shape product from scratch',
      'Strong regulatory tailwinds + pharma adoption',
      'High-impact: replacing animal testing',
    ],
    whyNot: [
      'Biotech domain expertise may be required',
      'Long sales cycles may slow design iteration',
      'Small team may limit design scope',
    ],
    nextActions: [
      'Connect with founders via LinkedIn',
      'Monitor for Series B announcements',
    ],
  },

  // Meta
  lastUpdated: '2026-04-20T00:00:00',
  sources: [
    { title: 'Vivodyne Series A $40M', url: 'https://longevity.technology/investment/vivodyne-lands-40m-to-replace-animal-testing-in-drug-development/' },
    { title: 'Vivodyne Seed $38M', url: 'https://www.vivodyne.com/blog/vivodyne-announces-38-million-seed-financing-led-by-khosla-ventures' },
    { title: 'Vivodyne Crunchbase', url: 'https://www.crunchbase.com/organization/vivodyne' },
  ],
};
