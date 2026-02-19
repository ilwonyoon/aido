import { Company } from '../types';

export const swiftMedical: Company = {
  id: 'swift-medical',
  name: 'Swift Medical',
  description: 'Digital wound care platform that uses AI and imaging to improve clinical assessments and outcomes.',
  website: 'https://swiftmedical.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series Unknown',
  normalizedStage: 'other' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '4,000+ healthcare facilities and 20,000 clinical users',
  fundingHistory: [
    {
      stage: 'Unknown',
      amount: '$8M',
      date: '2024-01',
      leadInvestors: ['BDC Capital Women in Technology Fund', 'Virgo Investment Group'],
    },
  ],

  // Competition
  competitors: [
    {
      name: 'Tissue Analytics',
      description: 'Wound care analytics and imaging platform.',
      whyTheyWin: 'Early market presence and clinical integrations.',
    },
    {
      name: 'Net Health Wound Care',
      description: 'Wound care documentation and EHR-adjacent workflow tools.',
      whyTheyWin: 'Embedded in healthcare system workflows.',
    },
    {
      name: 'WoundZoom',
      description: 'Digital wound care measurement and documentation solution.',
      whyTheyWin: 'Specialized wound assessment tooling and clinical adoption.',
    },
  ],
  marketPosition: 'AI-enabled wound care imaging and documentation platform for healthcare providers.',
  moat: [
    'Clinical-grade imaging and assessment workflows',
    'Scale across thousands of healthcare facilities',
    'AI-driven wound measurement and documentation',
  ],
  vsGiants: 'Competes by specializing in wound care clinical workflows rather than broad EHR platforms.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to automated wound measurement and assessment workflows.',
  aiDesignChallenges: [
    'Designing clinician trust in AI measurement accuracy',
    'Balancing speed and precision in clinical documentation UX',
    'Integrating AI insights into existing care pathways',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dr. Sheila Wang',
      role: 'Co-founder',
      background: 'Clinician and researcher focused on advancing wound care outcomes.',
    },
    {
      name: 'Carlo Perez',
      role: 'Co-founder',
      background: 'Entrepreneur focused on healthcare technology and clinical workflow design.',
    },
    {
      name: 'Justin Allport',
      role: 'Co-founder',
      background: 'Health technology leader focused on clinical software products.',
    },
    {
      name: 'Edwin Liang',
      role: 'Co-founder',
      background: 'Engineer focused on medical imaging and healthcare software.',
    },
  ],
  whyBuilding: 'Improve wound care outcomes through standardized, AI-supported clinical assessments.',
  beliefs: [
    'Clinical documentation should be fast and accurate',
    'AI can improve consistency in wound assessments',
    'Better data leads to better patient outcomes',
  ],
  greenFlags: ['Large clinical footprint with thousands of facilities', 'Recent financing round'],
  redFlags: ['Healthcare sales cycles and regulatory complexity'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['AI measurement workflows', 'Clinical decision support UX'] },
    evaluation: { level: 'high', tasks: ['Accuracy validation and clinician feedback loops'] },
    interface: { level: 'medium', tasks: ['Mobile imaging capture and dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Wound care clinicians and healthcare systems',
    secondary: 'Home health and long-term care providers',
  },
  userProblems: [
    'Wound assessments are inconsistent and time-consuming',
    'Documentation requirements create significant administrative burden',
    'Clinical teams need standardized data to track healing outcomes',
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
    whyJoin: ['Meaningful healthcare impact', 'AI-enabled clinical workflows'],
    whyNot: ['Regulatory and procurement complexity in healthcare'],
    nextActions: ['Check product design team composition'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: '4,000+ facilities, 20,000 clinical users',
    signals: ['$8M financing round (2024)'],
    tam: 'Global wound care and clinical documentation market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could become standard wound care workflow layer',
    tailwinds: ['Clinical digitization and AI-assisted documentation adoption'],
    headwinds: ['Complex integrations with EHRs and care providers'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-11T17:00:52Z',
  sources: [
    { title: 'Swift Medical - Home', url: 'https://swiftmedical.com/' },
    { title: 'Swift Medical $8M financing round', url: 'https://www.businesswire.com/news/home/20240123251248/en/Swift-Medical-Announces-8M-Financing-Round' },
    { title: 'Swift Medical - Dr. Sheila Wang award', url: 'https://swiftmedical.com/news/swift-medical-founder-dr-sheila-wang-receives-national-entrepreneurial-award/' },
  ],
};
