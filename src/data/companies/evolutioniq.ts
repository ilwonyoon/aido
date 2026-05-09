import { Company } from '../types';

export const evolutioniq: Company = {
  id: 'evolutioniq',
  name: 'EvolutionIQ',
  description:
    'AI claims guidance platform for disability, injury, workers compensation, and casualty claims teams.',
  website: 'https://www.evolutioniq.com/',
  screenshot: '/screenshots/evolutioniq-screenshot.png',
  headquarters: 'New York, NY',
  remote: 'Hybrid',
  ogImage: '/og-images/evolutioniq-og.webp',

  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech', 'healthcare'],

  stage: 'Acquired',
  valuation: 'Acquired by CCC Intelligent Solutions in January 2025',
  totalFunding: '$21M+ before acquisition',
  fundingHistory: [
    { stage: 'Series A', amount: '$7M', date: '2020-09' },
    { stage: 'Series B', amount: '$15M', date: '2022-03' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Part of CCC Intelligent Solutions.',
  customers: 'Disability, workers compensation, and injury claims organizations.',

  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Acquired by CCC Intelligent Solutions; transaction closed in January 2025',
      'Used by 7 of the top 15 U.S. disability carriers according to CCC acquisition announcement',
      'Focuses on next-best-action guidance for claims professionals',
    ],
    tam: 'Disability, injury, casualty, and workers compensation claims management.',
    marketShare: 'Strong in U.S. disability claims guidance, exact share unknown.',
    ceiling: 'Can expand through CCC into broader P&C claims workflows.',
    tailwinds: [
      'Claims organizations need better prioritization and claimant outcomes',
      'AI guidance can improve handler productivity in complex claims',
      'CCC distribution can accelerate enterprise reach',
    ],
    headwinds: [
      'Post-acquisition product strategy may be less independent',
      'Claims guidance requires high explainability',
      'Deployment depends on sensitive medical and claims data',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong in disability and injury claims if historical claims guidance data compounds.',
  },

  competitors: [
    { name: 'Sprout.ai', description: 'AI claims automation platform.', whyTheyWin: 'Broader document automation for claim intake and handling.' },
    { name: 'Shift Technology', description: 'AI decisioning and fraud detection for insurers.', whyTheyWin: 'Large global insurance customer base.' },
    { name: 'FurtherAI', description: 'AI agents for insurance workflows.', whyTheyWin: 'Early but flexible agentic automation across insurance operations.' },
  ],
  marketPosition: 'Claims guidance and next-best-action platform for complex insurance claims.',
  moat: [
    'Claims-specific AI guidance models',
    'Adoption with large disability carriers',
    'CCC distribution and insurance network after acquisition',
  ],
  vsGiants:
    'Now part of a larger insurance cloud provider, which can help distribution but reduce startup-style autonomy.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI guidance and prioritization are the product, but users remain claims professionals.',
  aiDesignChallenges: [
    'Explain why a claim needs attention now',
    'Design next-best-action recommendations that fit handler judgment',
    'Show outcome impact without oversimplifying medical and disability context',
  ],

  founders: [
    { name: 'Tomas Vykruta', role: 'Co-founder & CEO', background: 'Co-founded EvolutionIQ to apply AI guidance to claims handling.' },
    { name: 'Michael Saltzman', role: 'Co-founder', background: 'Co-founded EvolutionIQ with insurance and analytics focus.' },
  ],
  whyBuilding:
    'Help claims teams resolve complex injury and disability cases more accurately, fairly, and efficiently.',
  beliefs: [
    'Claims professionals need guidance, not black-box automation',
    'Better prioritization can improve claimant outcomes',
    'AI can surface hidden patterns in complex claims portfolios',
  ],
  designPhilosophy:
    'Design AI guidance around trust, urgency, and clear next actions for claims handlers.',
  greenFlags: [
    'Strong vertical focus',
    'Public evidence of adoption among major disability carriers',
    'Acquisition provides distribution and resources',
  ],
  redFlags: [
    'Acquired company may have fewer startup equity upside dynamics',
    'Design roles may sit inside CCC after integration',
  ],

  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Next-best-action logic', 'Claims prioritization', 'Escalation and review workflows'] },
    evaluation: { level: 'high', tasks: ['Claim outcome metrics', 'Handler productivity', 'Recommendation quality and explainability'] },
    interface: { level: 'medium', tasks: ['Claims work queues', 'Guidance panels', 'Portfolio and outcome dashboards'] },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Claims professionals and claim managers',
    secondary: 'Carrier executives and operations leaders',
  },
  userProblems: [
    'Claims handlers need to identify which cases need attention',
    'Complex injury and disability claims have many signals and stakeholders',
    'Manual prioritization can miss high-impact interventions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: ['Deep claims workflow complexity', 'Strong AI explainability design challenge'],
    whyNot: ['Acquired by CCC, so role scope depends on integration', 'Less direct startup upside'],
    nextActions: ['Track CCC/EvolutionIQ design roles', 'Review product updates after acquisition'],
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'EvolutionIQ website', url: 'https://www.evolutioniq.com/' },
    { title: 'EvolutionIQ about', url: 'https://www.evolutioniq.com/about' },
    { title: 'CCC acquisition announcement', url: 'https://www.cccis.com/ai-powered-casualty' },
  ],
};
