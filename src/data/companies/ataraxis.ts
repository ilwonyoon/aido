import { Company } from '../types';

export const ataraxis: Company = {
  id: 'ataraxis',
  name: 'Ataraxis AI',
  description: 'AI-powered cancer diagnostics company developing personalized treatment recommendations using digital pathology and machine learning.',
  website: 'https://ataraxisai.com',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$24.4M',
  fundingHistory: [
    { stage: 'Seed', amount: '$4M', date: '2024-10', leadInvestors: ['Giant Ventures', 'Obvious Ventures'] },
    { stage: 'Series A', amount: '$20.4M', date: '2025-03', leadInvestors: ['Unknown'] },
  ],
  revenue: 'Unknown (clinical-stage AI)',
  growth: 'Series A 5 months after Seed (rapid follow-on)',
  runway: 'Strong (Series A in Mar 2025)',
  customers: 'Pathology labs and hospitals for cancer diagnostic testing',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown - pre-clinical, early commercialization',
    userGrowth: 'Early adoption in pathology labs; cancer diagnostic partnerships',
    signals: [
      '$20.4M Series A (Mar 2025)',
      '$4M Seed (Oct 2024) in 5 months = strong investor confidence',
      'Kestrel foundation model for digital pathology (proprietary)',
      'AI-powered cancer treatment personalization = regulatory tailwind',
    ],
    tam: '$50B+ oncology diagnostics market',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Early innings: AI-guided personalized cancer treatment adoption just beginning',
    tailwinds: [
      'Personalized medicine trend in oncology',
      'Pathology labor shortage (fewer pathologists graduating)',
      'Regulatory approval for AI cancer diagnostics accelerating (FDA)',
    ],
    headwinds: [
      'Clinical validation required before hospital adoption',
      'Oncologist trust in AI recommendations still low',
      'Competitive pressure from established diagnostics (Roche, etc.)',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: Kestrel pathology model + clinical validation dataset + NYU research relationships',
  },

  // Competition
  competitors: [
    {
      name: 'Roche Diagnostics',
      description: 'Established cancer diagnostics and pathology platform',
      whyTheyWin: 'Scale; hospital relationships; regulatory approval',
    },
    {
      name: 'IBM Watson Health',
      description: 'AI for oncology treatment recommendations',
      whyTheyWin: 'Brand; enterprise scale',
    },
    {
      name: 'PathAI',
      description: 'AI pathology analysis startup',
      whyTheyWin: 'Earlier funding; pathology focus',
    },
  ],
  marketPosition: 'AI-native cancer diagnostics and treatment personalization',
  moat: [
    'Kestrel foundation model trained on pathology data',
    'NYU research partnerships (founders from NYU)',
    'Clinical validation dataset from early adopters',
  ],
  vsGiants: 'Purpose-built cancer AI vs general diagnostics platforms',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core Feature: AI diagnostic classification and treatment recommendation are core product. Without AI, company is traditional pathology lab.',
  aiDesignChallenges: [
    'Trust interface: pathologists must understand AI reasoning (explainability)',
    'Confidence visualization: showing AI certainty in cancer classification',
    'Treatment matching: translating AI diagnostics into therapy recommendations',
    'Uncertainty handling: when AI is uncertain, escalate to senior pathologist',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jan Witowski',
      role: 'CEO & Co-founder',
      background: 'MD, PhD from New York University. Pathology background.',
    },
    {
      name: 'Krzysztof Geras',
      role: 'Co-founder & Chief Scientist',
      background: 'PhD from New York University. AI/ML researcher in medical imaging.',
    },
  ],
  whyBuilding: 'Use AI to improve cancer diagnosis accuracy and personalize treatment recommendations for each patient.',
  beliefs: [
    'AI can match or exceed pathologist accuracy in cancer classification',
    'Treatment should be personalized based on tumor genetics and patient factors',
    'Pathology labor shortage requires AI augmentation',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Founded by NYU MD + PhD (strong research pedigree)',
    'Series A $20.4M 5 months after Seed (strong investor momentum)',
    'Regulatory tailwinds: FDA accelerating AI diagnostic approvals',
    'Clear clinical need: pathology shortage + cancer prevalence',
  ],
  redFlags: [
    'Clinical validation required before hospital adoption',
    'Oncologist trust in AI recommendations still low',
    'Competition from established diagnostics with resources',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 5-12)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Cancer classification logic: mapping pathology features to cancer types',
        'Treatment recommendation engine: genetic markers → therapy suggestions',
        'Uncertainty quantification: confidence scoring for AI predictions',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Clinical validation workflows: comparing AI vs pathologist decisions',
        'Outcome tracking: did AI-recommended treatment improve survival?',
        'Fairness evaluation: AI performance across cancer types and patient demographics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Pathology viewer redesign with AI annotations',
        'Treatment recommendation card design',
        'Patient report generation (oncologist + patient views)',
        'Integration with hospital EHR systems',
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
      'High-impact medical AI: cancer diagnosis directly affects patient outcomes',
      'Early stage (0→1): can shape clinical UX from scratch',
      'Strong NYU research + founder credibility',
      'Series A with momentum (5-month follow-on from Seed)',
    ],
    whyNot: [
      'Medical domain expertise likely required',
      'Long clinical validation cycles may slow iteration',
      'Regulatory constraints may limit design freedom',
    ],
    nextActions: [
      'Connect with founders via LinkedIn',
      'Research FDA AI diagnostic approval process',
    ],
  },

  // Meta
  lastUpdated: '2026-04-20T00:00:00',
  sources: [
    { title: 'Ataraxis Series A $20.4M', url: 'https://techcrunch.com/2025/03/05/not-all-cancer-patients-need-chemo-ataraxis-ai-raised-20m-to-personalize-treatment/' },
    { title: 'Ataraxis Seed $4M', url: 'https://www.finsmes.com/2024/10/ataraxis-ai-raises-4m-in-seed-funding.html' },
    { title: 'Ataraxis Crunchbase', url: 'https://www.crunchbase.com/organization/ataraxis-4f24' },
  ],
};
