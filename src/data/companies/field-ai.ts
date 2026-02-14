import { Company } from '../types';

export const fieldAi: Company = {
  id: 'field-ai',
  name: 'Field AI',
  description: 'Embodied AI company building foundation models and autonomy software for industrial, defense, and field robotics.',
  website: 'https://field.ai/',
  screenshot: '',

  headquarters: 'Irvine, CA',
  remote: 'No',

  aiTypes: ['foundation-model', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  stage: 'Series A-1',
  valuation: '$2B (Aug 2025)',
  totalFunding: '$405M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$91M',
      date: '2024-11',
      valuation: '$400M',
      leadInvestors: [],
    },
    {
      stage: 'Series A',
      amount: '$314M',
      date: '2025-08',
      valuation: '$2B',
      leadInvestors: ['8VC', 'Bessemer Venture Partners', 'Crescent Cove', 'Greenoaks', 'General Catalyst', 'Nvidia', 'Qualcomm Ventures'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Raised $405M across two consecutive rounds and expanded global hiring in autonomy, product, and field operations.',
  runway: 'Strong post-round capitalization; precise runway not publicly disclosed',
  customers: 'Industrial, infrastructure, defense, and heavy-equipment operators deploying autonomous systems',

  competitors: [
    {
      name: 'Skild AI',
      description: 'General-purpose robotics foundation model company for embodied intelligence.',
      whyTheyWin: 'Large financing and high visibility in generalized robotics AI.',
    },
    {
      name: 'Physical Intelligence',
      description: 'Embodied AI startup developing cross-robot learning systems.',
      whyTheyWin: 'Strong research talent density and broad robotics generalization narrative.',
    },
    {
      name: 'Covariant',
      description: 'AI robotics platform with production deployments in logistics and warehousing.',
      whyTheyWin: 'Operational deployment history and mature enterprise integrations.',
    },
  ],
  marketPosition: 'Embodied AI platform focused on field-grade autonomy where foundation-model reasoning must survive harsh real-world environments.',
  moat: [
    'Real-world autonomy stack spanning perception, planning, and execution in high-variance field settings',
    'Capital depth and strategic investor base with hardware and compute ecosystem access',
    'Early enterprise pull from industries with urgent autonomy ROI needs',
  ],
  vsGiants: 'Competes through robotics-specific deployment depth and field reliability instead of general-purpose cloud AI APIs.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Native: the core product is embodied foundation-model autonomy, not a legacy workflow with an AI feature layer.',
  aiDesignChallenges: [
    'Designing operator trust and intervention controls when autonomous behavior is safety critical',
    'Communicating model confidence and failure boundaries in dynamic physical environments',
    'Balancing expert control surfaces with fast field usability for on-site teams',
  ],

  founders: [
    {
      name: 'Ali Agha',
      role: 'Founder & CEO',
      background: 'Founded Field AI in 2023 after autonomy and AI leadership work at NASA JPL and research in robotics systems.',
    },
  ],
  whyBuilding: 'Bring foundation-model intelligence into physical-world robots so field operations can run with higher safety, speed, and consistency.',
  beliefs: [
    'Embodied AI requires tight integration of models, robotics software, and field data loops',
    'Autonomy products must prove reliability in the real world, not only in benchmark demos',
    'Industrial and critical-field operations are near-term high-impact markets for AI-native robotics',
  ],
  designPhilosophy: 'Operational clarity first: design interfaces that make autonomy state, intent, and override pathways immediately legible.',
  greenFlags: [
    '$405M cumulative financing with tier-1 strategic and venture investors',
    'Clear demand signal from autonomy-heavy enterprise and industrial workflows',
    'Large, active recruiting footprint across AI, product, and deployment functions',
  ],
  redFlags: [
    'Embodied AI execution risk is high due to long deployment cycles and safety constraints',
    'Competition from heavily funded embodied AI peers can compress differentiation windows',
    'Most roles are location-bound, which narrows talent pool and raises scaling friction',
  ],

  designTeam: {
    teamSize: '~0-1 (no Product Design or Head of Design role publicly listed in active ATS postings)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Human-autonomy boundary logic and escalation flows',
        'Mission planning behavior and autonomy constraint tuning',
        'Failure-mode and recovery policy design for field operations',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Field performance scorecards across safety, success rate, and intervention frequency',
        'Operator trust calibration metrics for autonomous decision transparency',
        'Post-mission analysis workflows linking incidents to model and policy updates',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Mission monitoring dashboards for robotics operators',
        'Alerting and intervention UX for edge-case handling',
        'Workflow surfaces for deployment teams and customer operations',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Operations and autonomy teams deploying robots in industrial and field environments',
    secondary: 'Enterprise leaders responsible for safety, productivity, and robotics program ROI',
  },
  userProblems: [
    'Physical-world environments break brittle autonomy systems that were tuned for lab-like conditions',
    'Operators need clear control and recovery paths when robot behavior deviates from plan',
    'Deployment teams struggle to scale robotics programs without robust reliability and observability',
  ],

  designerLinks: [],
  openRoles: [],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Current hiring is heavily concentrated in autonomy, robotics engineering, product, and field execution functions.',
      url: 'https://jobs.lever.co/field-ai',
    },
    {
      source: 'linkedin',
      sentiment: 'neutral',
      content: 'Role locations are primarily onsite across Irvine, Boston, Pittsburgh, and Singapore, indicating an in-person execution culture.',
      url: 'https://www.linkedin.com/company/field-ai/',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Recent major funding momentum suggests strong investor conviction in Field AI’s embodied autonomy thesis.',
      url: 'https://techcrunch.com/2025/08/06/field-ai-lands-314m-at-a-2b-valuation-to-build-an-ai-brain-for-robots/',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: [
      '$314M Series A-1 round announced in Aug 2025',
      '$405M total funding across two consecutive rounds by Aug 2025',
      '63 active openings on Lever across AI, product, and field teams (checked Feb 2026)',
    ],
    tam: '$100B+ (global industrial robotics and embodied AI autonomy market)',
    marketShare: '<0.1% (early-stage private company)',
    ceiling: 'Early innings: large upside if Field AI becomes a default autonomy layer for industrial and field robotics fleets.',
    tailwinds: [
      'Rapid demand for autonomous operation in labor-constrained field industries',
      'Improving model capabilities for multimodal perception and control',
      'Strategic compute and hardware ecosystem support from investors',
    ],
    headwinds: [
      'Lengthy enterprise deployment cycles in safety-sensitive environments',
      'High reliability bar for autonomy in uncontrolled physical settings',
      'Strong competition from other well-capitalized embodied AI companies',
    ],
    moatType: 'technology',
    moatStrength: 'Medium-strong: differentiated embodied autonomy focus with substantial capital, but moat durability depends on deployed reliability at scale.',
  },

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Level A embodied AI problem space with meaningful frontier UX challenges in human-autonomy interaction',
      'Strong financing and investor mix supporting sustained product and platform investment',
      'Large hiring footprint indicates active company-building phase',
    ],
    whyNot: [
      'No active Product Design opening in official ATS at this check point',
      'Execution risk is higher than software-only AI startups due to physical deployment complexity',
      'Onsite-heavy model may reduce role flexibility for some candidates',
    ],
    nextActions: [
      'Monitor Lever for Product Design / UX openings weekly',
      'Track next disclosed customer deployment and reliability milestones',
      'Re-check leadership/team pages for explicit design org formation signals',
    ],
  },

  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Field AI Official Site', url: 'https://field.ai/' },
    { title: 'Field AI Newsroom - $405M Raise Announcement', url: 'https://field.ai/news/field-ai-announces-405m-fundraise-to-scale-global-deployment-of-its-embodied-ai-for-mission-critical-industries/' },
    { title: 'CNBC - Field AI raises $314M at $2B valuation', url: 'https://www.cnbc.com/2025/08/06/field-ai-raises-314-million-at-a-2-billion-valuation.html' },
    { title: 'Investing.com (Reuters syndication) - Field AI funding details', url: 'https://www.investing.com/news/stock-market-news/field-ai-reaches-2-billion-valuation-in-314-million-funding-round-cnbc-reports-93CH-4189783' },
    { title: 'TechCrunch - Field AI lands $314M', url: 'https://techcrunch.com/2025/08/06/field-ai-lands-314m-at-a-2b-valuation-to-build-an-ai-brain-for-robots/' },
    { title: 'Field AI Jobs (Lever)', url: 'https://jobs.lever.co/field-ai' },
  ],
};
