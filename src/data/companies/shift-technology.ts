import { Company } from '../types';

export const shiftTechnology: Company = {
  id: 'shift-technology',
  name: 'Shift Technology',
  description:
    'AI decision automation platform for insurers, best known for claims fraud detection and claims/underwriting decisioning.',
  website: 'https://www.shift-technology.com/',
  screenshot: '/screenshots/shift-technology-screenshot.png',
  headquarters: 'Paris, France / Boston, MA',
  remote: 'Hybrid',
  ogImage: '/og-images/shift-technology-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech', 'security'],

  stage: 'Series D',
  valuation: '$1B+ reported after 2021 Series D',
  totalFunding: '$320M+',
  fundingHistory: [
    { stage: 'Series B', amount: '$28M', date: '2017-10' },
    { stage: 'Series D', amount: '$220M', date: '2021-05' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Mature growth-stage company.',
  customers: 'Global P&C, health, and life insurers.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $220M Series D in 2021; total funding reported above $320M',
      'Claims Fraud product focuses on AI-powered fraud detection and investigation workflows',
      'Global insurance decision automation footprint',
    ],
    tam: 'Insurance fraud detection, claims automation, underwriting, and decisioning.',
    marketShare: 'Unknown',
    ceiling: 'Can remain a category leader in AI insurance decisioning if it expands beyond fraud into broader claims and underwriting workflows.',
    tailwinds: [
      'Fraud and claims leakage remain persistent insurer pain points',
      'Insurers are adopting AI decisioning to reduce investigation workload',
      'Large historical case data can improve models',
    ],
    headwinds: [
      'Mature competitors and insurer in-house analytics teams',
      'High scrutiny around false positives and claims fairness',
      'Long enterprise procurement cycles',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if global claims and fraud datasets improve model performance and investigation workflows.',
  },

  competitors: [
    { name: 'FRISS', description: 'Fraud, risk, and compliance platform for insurers.', whyTheyWin: 'Strong insurance fraud specialization.' },
    { name: 'Gradient AI', description: 'Insurance risk and underwriting AI platform.', whyTheyWin: 'Strong risk and underwriting analytics focus.' },
    { name: 'Sprout.ai', description: 'Claims automation platform.', whyTheyWin: 'More focused on claim document automation and processing.' },
  ],
  marketPosition: 'Large insurtech AI platform focused on fraud and decision automation.',
  moat: [
    'Insurance fraud detection expertise',
    'Global enterprise customer footprint',
    'Domain-specific claims and investigation workflows',
  ],
  vsGiants:
    'Competes with core insurance platforms by specializing in AI decisioning and fraud detection.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI models power fraud alerts, decision automation, and claims insights.',
  aiDesignChallenges: [
    'Explain fraud scores without overclaiming certainty',
    'Support investigator workflows from alert to evidence to disposition',
    'Design fair review flows for false positives and contested decisions',
  ],

  founders: [
    { name: 'Jeremy Jawish', role: 'Co-founder & CEO', background: 'Co-founded Shift Technology to apply AI to insurance fraud and decisioning.' },
    { name: 'Eric Sibony', role: 'Co-founder', background: 'Co-founded Shift Technology with data science and insurance focus.' },
    { name: 'David Durrleman', role: 'Co-founder', background: 'Co-founded Shift Technology.' },
  ],
  whyBuilding:
    'Help insurers automate decisions, detect fraud, and improve claims outcomes with AI.',
  beliefs: [
    'Insurance decisions can be faster and more accurate with AI',
    'Fraud detection needs both model accuracy and investigator trust',
    'Decision automation should be auditable for regulated environments',
  ],
  designPhilosophy:
    'Make AI decisioning operationally useful, explainable, and reviewable for insurance teams.',
  greenFlags: [
    'Large funding base and established category presence',
    'Deep domain specialization',
    'Clear product design problems around investigations and decision support',
  ],
  redFlags: [
    'Later-stage company may have more constrained role scope',
    'Fraud workflows can be compliance-heavy',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Fraud scoring workflows', 'Investigation queues', 'Decision automation rules'] },
    evaluation: { level: 'high', tasks: ['Precision/recall tradeoffs', 'Investigation outcomes', 'Claims leakage reduction'] },
    interface: { level: 'medium', tasks: ['Investigation workbench', 'Evidence timelines', 'Analytics dashboards'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Insurance claims, SIU, and fraud teams',
    secondary: 'Underwriting and operations teams',
  },
  userProblems: [
    'Fraud signals are buried across claims data',
    'Investigators need explainable alerts and evidence',
    'Insurers need to reduce claims leakage without harming legitimate claimants',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Established insurance AI category', 'Complex workflows with real business impact'],
    whyNot: ['More mature company, less 0-to-1', 'Fraud UX is narrow relative to broader product roles'],
    nextActions: ['Monitor product design roles', 'Review current product suite and case studies'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Shift Technology website', url: 'https://www.shift-technology.com/' },
    { title: 'Shift Claims Fraud product', url: 'https://www.shift-technology.com/products/claims-fraud-detection' },
    { title: 'Shift Technology funding summary', url: 'https://parsers.vc/startup/shift-technology.com/' },
    { title: 'TechCrunch Series B coverage', url: 'https://techcrunch.com/2017/10/23/shift-raises-another-28-million-to-prevent-fraudulent-insurance-claims/' },
  ],
};
