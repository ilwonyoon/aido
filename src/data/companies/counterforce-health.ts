import { Company } from '../types';

export const counterforceHealth: Company = {
  id: 'counterforce-health',
  name: 'Counterforce Health',
  description:
    'AI patient advocacy platform that helps patients and clinicians generate appeals for denied health insurance claims.',
  website: 'https://www.counterforcehealth.org/',
  screenshot: '/screenshots/counterforce-health-screenshot.png',
  headquarters: 'Research Triangle Park, NC',
  remote: 'Unknown',
  ogImage: '/og-images/counterforce-health-og.webp',

  aiTypes: ['text-assistant', 'automation'],
  markets: ['b2c', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance', 'healthcare'],
  industries: ['healthcare', 'fintech'],

  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Supported by grants according to public coverage.',
  customers: 'Patients, clinicians, and clinics appealing health insurance denials.',

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Public AI appeal generator for denied health insurance claims',
      'Axios reported the company is free for patients and clinics and supported by grants',
      'Targets a large consumer and provider pain point around claim denials',
    ],
    tam: 'Health insurance denial appeals, patient advocacy, and provider revenue-cycle support.',
    marketShare: 'Unknown',
    ceiling: 'Could become a patient-side or provider-side AI appeals layer if it proves appeal success and scales distribution.',
    tailwinds: [
      'Health insurance denials are a visible and painful consumer problem',
      'LLMs are well suited to drafting evidence-backed appeal letters',
      'Providers need help reducing administrative burden around appeals',
    ],
    headwinds: [
      'Business model is less clear than B2B insurer software',
      'Medical and insurance advice requires careful disclaimers and accuracy',
      'Appeal success depends on payer policy and evidence quality',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Early; moat depends on appeal outcome data, clinical evidence workflows, and distribution.',
  },

  competitors: [
    { name: 'Claimable', description: 'AI support for health insurance appeals.', whyTheyWin: 'Focused consumer appeal workflow.' },
    { name: 'Fight Health Insurance', description: 'Consumer tool for insurance denial appeals.', whyTheyWin: 'Simple public-facing appeal generation.' },
    { name: 'Knowtion Health', description: 'Revenue-cycle and denials management platform.', whyTheyWin: 'Provider-side enterprise denials workflow.' },
  ],
  marketPosition: 'Patient- and clinician-facing AI tool for fighting health insurance denials.',
  moat: [
    'Appeal-specific document generation',
    'Potential data on payer denials and appeal outcomes',
    'Patient advocacy positioning and public distribution',
  ],
  vsGiants:
    'Counter-positioned against insurers rather than selling primarily to carriers; could align with patients and providers.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI drafts appeal letters and evidence-backed arguments from denial context.',
  aiDesignChallenges: [
    'Keep users confident without implying guaranteed approval',
    'Collect sensitive medical and policy details safely',
    'Make legal/medical evidence transparent and editable',
  ],

  founders: [
    { name: 'Neal K. Shah', role: 'Co-founder', background: 'Co-founded Counterforce Health after work in healthcare access and patient advocacy.' },
  ],
  whyBuilding:
    'Help patients and clinicians fight denied health insurance claims with faster, evidence-backed appeals.',
  beliefs: [
    'Patients need leverage against complex payer processes',
    'AI can reduce the administrative burden of appeals',
    'Appeal tools should be accessible to patients, not only enterprise teams',
  ],
  designPhilosophy:
    'Make stressful insurance appeals feel clear, guided, and evidence-based.',
  greenFlags: [
    'High-empathy consumer and healthcare problem',
    'Clear AI writing and workflow value',
    'Potentially strong mission alignment',
  ],
  redFlags: [
    'Funding and business model are not clearly public',
    'Healthcare claims appeals carry accuracy and liability risk',
    'May be closer to advocacy/nonprofit than venture-scale software',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Appeal generation flow', 'Evidence selection logic', 'Policy and denial parsing'] },
    evaluation: { level: 'high', tasks: ['Appeal success rate', 'User completion rate', 'Evidence quality and safety review'] },
    interface: { level: 'high', tasks: ['Consumer upload and guided forms', 'Appeal editor', 'Status and next-step guidance'] },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Patients appealing health insurance denials',
    secondary: 'Clinicians, clinics, and patient advocates',
  },
  userProblems: [
    'Patients do not know how to appeal denied claims',
    'Appeals require medical evidence, policy language, and careful wording',
    'Clinicians and clinics spend time on administrative denial work',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: ['Meaningful consumer healthcare problem', 'Strong UX need around stress, trust, and evidence'],
    whyNot: ['Unclear funding and business model', 'May not have a product design hiring path soon'],
    nextActions: ['Watch for funding or hiring signals', 'Evaluate product quality and appeal workflow depth'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Counterforce Health website', url: 'https://www.counterforcehealth.org/' },
    { title: 'Axios Raleigh coverage', url: 'https://www.axios.com/local/raleigh/2025/08/20/using-ai-to-fight-back-against-insurance-denials-counteforce' },
    { title: 'Counterforce Health resources', url: 'https://www.counterforcehealth.org/post/' },
  ],
};
