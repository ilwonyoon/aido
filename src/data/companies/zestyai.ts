import { Company } from '../types';

export const zestyai: Company = {
  id: 'zestyai',
  name: 'ZestyAI',
  description:
    'AI property risk analytics platform using computer vision, aerial imagery, and climate data for insurance underwriting and risk selection.',
  website: 'https://zesty.ai/',
  screenshot: '/screenshots/zestyai-screenshot.png',
  headquarters: 'Oakland, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/zestyai-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech', 'other'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$56M+',
  fundingHistory: [
    { stage: 'Series B', amount: '$33M', date: '2022-07' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Property insurers, reinsurers, and real estate risk teams.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $33M Series B in 2022, bringing total funding to $56M',
      'Applies computer vision to property condition and climate risk analytics',
      'Targets underwriting and risk selection for property insurers',
    ],
    tam: 'Property insurance underwriting, climate risk analytics, and real estate risk assessment.',
    marketShare: 'Unknown',
    ceiling: 'Can be a key property risk data layer if insurers use its models for underwriting, pricing, and portfolio exposure.',
    tailwinds: [
      'Climate risk is increasing insurer demand for property intelligence',
      'Aerial imagery and computer vision can scale property inspection',
      'Carriers need better risk segmentation in catastrophe-prone markets',
    ],
    headwinds: [
      'Property risk models are scrutinized by regulators and consumers',
      'Climate and catastrophe risk remain hard to predict',
      'Competes with established geospatial and catastrophe model vendors',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong if imagery, claims outcomes, and property risk labels create superior models.',
  },

  competitors: [
    { name: 'Cape Analytics', description: 'Property intelligence platform for insurers.', whyTheyWin: 'Strong imagery-based property data footprint.' },
    { name: 'Near Space Labs', description: 'Earth imagery and analytics platform.', whyTheyWin: 'Frequent geospatial imagery capture.' },
    { name: 'CoreLogic', description: 'Property data and risk analytics provider.', whyTheyWin: 'Incumbent data relationships and breadth.' },
  ],
  marketPosition: 'AI property risk analytics platform for insurers facing climate and property exposure.',
  moat: [
    'Computer vision on property imagery',
    'Property risk and climate data specialization',
    'Potential feedback loop from insurer underwriting outcomes',
  ],
  vsGiants:
    'Competes with incumbent property data providers by offering AI-native imagery-derived risk signals.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: Computer vision and risk models are central to property analytics.',
  aiDesignChallenges: [
    'Visualize property risk drivers without oversimplifying uncertainty',
    'Explain model confidence and contributing factors',
    'Support underwriting and portfolio-level risk decisions',
  ],

  founders: [
    { name: 'Attila Toth', role: 'Founder & CEO', background: 'Founded ZestyAI to use AI and imagery for property risk analytics.' },
  ],
  whyBuilding:
    'Use AI and property data to help insurers understand physical risk more accurately.',
  beliefs: [
    'Property risk can be assessed more precisely with imagery and AI',
    'Climate exposure requires better data-driven underwriting',
    'Risk analytics should be actionable for insurers and transparent enough for review',
  ],
  designPhilosophy:
    'Make geospatial and property-risk intelligence legible for underwriting and portfolio decisions.',
  greenFlags: [
    'Clear climate and property insurance tailwinds',
    'Strong visual/data product surface',
    'Useful adjacency to underwriting and portfolio workflows',
  ],
  redFlags: [
    'Climate risk modeling can be politically and regulatorily sensitive',
    'Design roles may skew toward analytics products',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Property risk scoring workflows', 'Underwriting review logic', 'Portfolio exposure filtering'] },
    evaluation: { level: 'high', tasks: ['Model calibration', 'Risk outcome validation', 'Portfolio loss analysis'] },
    interface: { level: 'high', tasks: ['Map-based risk tools', 'Property detail views', 'Risk-driver visualizations'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Property insurance underwriters and risk teams',
    secondary: 'Reinsurers, portfolio managers, and real estate risk teams',
  },
  userProblems: [
    'Property inspections are expensive and incomplete',
    'Climate and property condition risks are hard to price',
    'Underwriters need risk signals that are both granular and explainable',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Interesting map/data visualization work', 'Climate and property risk are important insurance problems'],
    whyNot: ['May be more analytics-heavy than workflow-agentic', 'Funding is older than newer AI-agent companies'],
    nextActions: ['Monitor product/design openings', 'Review insurer case studies'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'ZestyAI website', url: 'https://zesty.ai/' },
    { title: 'Coverager Series B coverage', url: 'https://coverager.com/zesty-ai-raises-33-million/' },
  ],
};
