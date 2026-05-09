import { Company } from '../types';

export const tractable: Company = {
  id: 'tractable',
  name: 'Tractable',
  description:
    'Computer vision AI platform for auto and property damage assessment, insurance claims, repair, and salvage workflows.',
  website: 'https://tractable.ai/',
  screenshot: '/screenshots/tractable-screenshot.png',
  headquarters: 'London, UK / New York, NY',
  remote: 'Hybrid',
  ogImage: '/og-images/tractable-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech', 'other'],

  stage: 'Series E',
  valuation: '$1B+ reported',
  totalFunding: '$185M+',
  fundingHistory: [
    { stage: 'Series D', amount: '$60M', date: '2021-06' },
    { stage: 'Series E', amount: '$65M', date: '2023-07' },
  ],
  revenue: 'Unknown',
  growth: '$7B in claims/repairs processed annually reported in 2023 coverage',
  runway: 'Mature growth-stage company.',
  customers: 'Insurers, repair networks, automotive, and property ecosystem partners.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $65M Series E in 2023 led by SoftBank Vision Fund 2',
      'Reached unicorn status after 2021 Series D',
      'Processes damage assessment workflows across auto and property claims',
    ],
    tam: 'Auto and property claims, damage assessment, repair, and salvage workflows.',
    marketShare: 'Unknown',
    ceiling: 'Can be a core visual intelligence layer for claims and repair decisions if it expands across property and auto ecosystems.',
    tailwinds: [
      'Photo-based claims and remote damage assessment are now mainstream',
      'Insurers need faster estimates and repair routing',
      'Computer vision can reduce manual inspection cost',
    ],
    headwinds: [
      'Model accuracy must hold across geography, lighting, vehicle/property types',
      'Claims decisions require explainability and human review',
      'Large insurers and estimating platforms may build or acquire similar capabilities',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if proprietary damage image and outcome datasets continue compounding.',
  },

  competitors: [
    { name: 'CCC Intelligent Solutions', description: 'Insurance claims and auto repair technology platform.', whyTheyWin: 'Deep network across insurers and repair ecosystem.' },
    { name: 'Mitchell', description: 'Claims, estimating, and collision repair software.', whyTheyWin: 'Incumbent workflow footprint.' },
    { name: 'Snapsheet', description: 'Digital claims management platform.', whyTheyWin: 'Claims process and virtual appraisal coverage.' },
  ],
  marketPosition: 'Leading computer vision insurtech for damage assessment.',
  moat: [
    'Large image dataset and damage assessment model experience',
    'Insurance and repair ecosystem integrations',
    'Brand recognition as an AI claims unicorn',
  ],
  vsGiants:
    'Differentiates with computer vision depth, but competes with incumbent claims platforms that own distribution.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Computer vision is central to assessment, estimates, and workflow automation.',
  aiDesignChallenges: [
    'Show visual evidence and model confidence clearly',
    'Design human review workflows for disputed estimates',
    'Make damage assessment useful across insurer, repair, and claimant contexts',
  ],

  founders: [
    { name: 'Alex Dalyac', role: 'Co-founder & CEO', background: 'Co-founded Tractable to apply AI to accident and disaster recovery.' },
    { name: 'Adrien Cohen', role: 'Co-founder', background: 'Co-founded Tractable.' },
    { name: 'Razvan Ranca', role: 'Co-founder', background: 'Co-founded Tractable with machine learning expertise.' },
  ],
  whyBuilding:
    'Use AI to accelerate recovery after accidents and disasters by making damage assessment faster and more accurate.',
  beliefs: [
    'Computer vision can remove delay from claims and repair workflows',
    'Visual AI should support real-world operational decisions',
    'Faster assessment improves both insurer efficiency and customer experience',
  ],
  designPhilosophy:
    'Design visual AI workflows that make model outputs inspectable and operationally actionable.',
  greenFlags: [
    'Clear AI-native product core',
    'Strong design challenge around visual evidence and trust',
    'Large existing market and known brand',
  ],
  redFlags: [
    'Later-stage company with potentially narrower role ownership',
    'Computer vision accuracy edge cases can be hard to explain',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Damage assessment workflows', 'Repair/salvage routing logic', 'Review escalation'] },
    evaluation: { level: 'high', tasks: ['Estimate accuracy', 'Claim cycle time', 'Human override analysis'] },
    interface: { level: 'medium', tasks: ['Photo capture UX', 'Visual evidence review', 'Claims dashboards'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Insurers and claims assessors',
    secondary: 'Repair networks, salvage teams, and claimants',
  },
  userProblems: [
    'Damage inspections slow down claims',
    'Manual estimates are inconsistent',
    'Remote visual evidence is hard to trust without clear tooling',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Deep AI UX around visual inspection and trust', 'Large operational claims impact'],
    whyNot: ['Mature company', 'Design scope may be domain-specific and workflow-heavy'],
    nextActions: ['Monitor product design hiring', 'Review current product demos and customer stories'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Tractable website', url: 'https://tractable.ai/' },
    { title: 'TechCrunch Series E coverage', url: 'https://techcrunch.com/2023/07/18/tractable-snaps-up-65m-led-by-softbank-for-car-and-property-damage-appraisals-using-ai/' },
    { title: 'Tech.eu Series E coverage', url: 'https://tech.eu/2023/07/18/ai-powered-accident-and-disaster-recovery-platform-tractable-picks-up-65-million-in-softbank-led-round/' },
  ],
};
