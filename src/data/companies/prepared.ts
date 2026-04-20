import { Company } from '../types';

export const prepared: Company = {
  id: 'prepared',
  name: 'Prepared',
  description: 'AI-powered emergency response platform that modernizes 911 dispatch with text, video, and AI-driven incident management.',
  website: 'https://www.prepared911.com',
  headquarters: 'New York, NY',
  remote: 'Hybrid',

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$135M',
  fundingHistory: [
    { stage: 'Seed', amount: 'Unknown', date: '2019-00', leadInvestors: ['Unknown'] },
    { stage: 'Series A', amount: 'Unknown', date: 'Unknown', leadInvestors: ['Unknown'] },
    { stage: 'Series B', amount: '$27M', date: '2024-09', leadInvestors: ['Unknown'] },
    { stage: 'Series C', amount: '$80M', date: '2025-05', leadInvestors: ['General Catalyst', 'Andreessen Horowitz', 'First Round Capital'] },
  ],
  revenue: 'Unknown',
  growth: 'Series C $80M (8 months after Series B $27M)',
  runway: 'Strong (Series C in May 2025)',
  customers: '1,000+ public safety agencies across 49 states; protecting 100M+ people',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '1,000+ agencies; 49 states; 100M+ people covered',
    signals: [
      'Series C $80M (May 2025) from top-tier AI VCs',
      'Series B $27M 8 months prior',
      '1,000+ public safety agencies using platform (market adoption)',
      'AI-powered emergency response = regulatory tailwind',
    ],
    tam: '$50B+ government technology and emergency services market',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Early innings: AI dispatch adoption replacing decades-old 911 systems',
    tailwinds: [
      'Aging 911 infrastructure (many systems from 1980s-90s)',
      'Public safety modernization budgets increasing',
      'AI for emergency coordination (disasters, mass events)',
    ],
    headwinds: [
      'Government procurement slow and risk-averse',
      'Mission-critical liability concerns for AI decisions',
      'Union/staff concerns about dispatch automation',
    ],
    moatType: 'network-effects',
    moatStrength: 'Strong: 1,000+ agencies create data network; hard to replicate 49-state coverage',
  },

  // Competition
  competitors: [
    {
      name: 'Intrado / Comtech',
      description: 'Legacy 911 dispatch systems',
      whyTheyWin: 'Entrenched in government; compliance relationships',
    },
    {
      name: 'AT&T FirstNet',
      description: 'Public safety broadband and dispatch',
      whyTheyWin: 'Scale; carrier relationships',
    },
    {
      name: 'Google/Alphabet + Emergency Services',
      description: 'Emerging AI-powered incident management',
      whyTheyWin: 'Compute scale; brand recognition',
    },
  ],
  marketPosition: 'AI-native emergency response and 911 modernization',
  moat: [
    '1,000+ agency network creating data flywheel',
    '49 states = hard to replicate geographic coverage',
    'First-mover in AI emergency dispatch',
  ],
  vsGiants: 'Purpose-built emergency AI vs general enterprise AI applied to 911',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core Feature: AI dispatch coordination and risk assessment are key differentiators. Without AI, platform is incremental improvement on legacy systems.',
  aiDesignChallenges: [
    'Extreme time pressure: UX must support <10 second decisions during emergencies',
    'Trust building: dispatchers must trust AI prioritization/routing during crisis',
    'Uncertainty communication: AI must convey confidence in risk assessment',
    'Human override design: dispatcher can always override AI recommendations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Michael Chime',
      role: 'Co-founder & CEO',
      background: 'Unknown',
    },
    {
      name: 'Dylan Gleicher',
      role: 'Co-founder',
      background: 'Unknown',
    },
    {
      name: 'Neal Soni',
      role: 'Co-founder',
      background: 'Unknown',
    },
  ],
  whyBuilding: 'Modernize 911 dispatch systems with AI to reduce emergency response times and improve public safety outcomes.',
  beliefs: [
    'AI can improve emergency response time and coordination',
    'Text/video dispatch improves accessibility for callers',
    'Data-driven incident prioritization saves lives',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series C $80M from top-tier VCs (General Catalyst, a16z)',
    '1,000+ agencies adopted = strong market validation',
    'Government AI adoption accelerating post-2024',
    'Clear ROI for public safety budgets',
  ],
  redFlags: [
    'Government procurement slow and risk-averse',
    'Mission-critical liability: AI mistakes can be high-stakes',
    'Union/staff resistance to dispatch automation',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 15-25)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Emergency dispatch prioritization logic (incident severity scoring)',
        'Route optimization: unit assignment and response paths',
        'Resource allocation: dispatch across multiple incidents',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Incident outcome analysis: did AI routing improve response time?',
        'Fairness evaluation: AI prioritization across geographic areas',
        'Safety testing: edge cases and rare emergency types',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Dispatch console redesign for AI suggestions',
        'Multi-incident visualization and management',
        'Text/video caller interface design',
        'Mobile unit response tracking',
      ],
    },
  },
  productStage: '1→10',

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
      'Mission-critical UI design: high-stakes emergency response',
      'Series C with strong government tailwinds',
      'Proven market adoption (1,000+ agencies)',
      'Complex AI coordination + human override UX',
    ],
    whyNot: [
      'Government domain expertise may be required',
      'Risk-averse culture may slow product iteration',
      'Liability concerns may limit design experimentation',
    ],
    nextActions: [
      'Check careers page for Product Designer roles',
      'Research government design best practices',
    ],
  },

  // Meta
  lastUpdated: '2026-04-20T00:00:00',
  sources: [
    { title: 'Prepared Series C $80M', url: 'https://www.prepared911.com/blog/announcing-prepared-80m-series-c-general-catalyst-a16z-firstround-funding' },
    { title: 'Prepared Series B $27M', url: 'https://techcrunch.com/2024/09/26/prepared-which-lets-911-dispatchers-text-and-video-chat-with-callers-raises-27m/' },
    { title: 'Prepared Crunchbase', url: 'https://www.crunchbase.com/organization/invictus-apps' },
  ],
};
