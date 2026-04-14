import { Company } from '../types';

export const joyfulHealth: Company = {
  id: 'joyful-health',
  name: 'Joyful Health',
  description: 'AI-powered financial operating system for healthcare practices, automating revenue recovery from denied and unpaid insurance claims.',
  website: 'https://www.joyfulhealth.com',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'smb'],
  category: 'vertical-saas' as const,
  industries: ['healthcare', 'fintech'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$5.1M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5.1M', date: '2025-01', leadInvestors: ['Designer Fund', 'Inflect Capital', 'The Council'] },
  ],
  revenue: 'Unknown (early-stage, zero upfront cost model)',
  growth: 'Early stage — launched 2024/2025',
  runway: 'Seed-stage',
  customers: 'Private healthcare practices (small to mid-size)',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown — early customer acquisition phase',
    signals: [
      '$5.1M seed from Designer Fund + Inflect Capital',
      'Founded by former PM at Charlie Health (mental health unicorn)',
      'Zero upfront cost model reduces friction for adoption',
    ],
    tam: '$36B+ US healthcare RCM market',
    marketShare: '<0.01% of TAM = massive upside if execution',
    ceiling: 'Early innings: most private practices still manually manage denied claims',
    tailwinds: [
      'Private practices losing 10-30% of revenue in denied/unpaid claims',
      'Insurance complexity increasing — more denials, more follow-up needed',
      'Private practice consolidation trend creates urgency to improve financial operations',
      'AI dramatically reduces cost of claims follow-up vs. traditional billing services',
    ],
    headwinds: [
      'RCM is commoditized with hundreds of offshore billing services as alternatives',
      'Small practices are price-sensitive and slow to adopt new software',
      'Healthcare billing requires payer-specific expertise that AI alone cannot replace',
      'Regulatory complexity (HIPAA, payer contracts) increases compliance burden',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Early: payer-specific claim pattern data improves denial prediction and recovery rates over time.',
  },

  // Competition
  competitors: [
    {
      name: 'AdvancedMD',
      description: 'Full-suite practice management and billing software.',
      whyTheyWin: 'Established brand, all-in-one platform, large installed base.',
    },
    {
      name: 'Kareo (Tebra)',
      description: 'Cloud-based RCM and EHR for small practices.',
      whyTheyWin: 'Deep EHR integrations, strong SMB footprint.',
    },
    {
      name: 'Traditional billing services',
      description: 'Offshore medical billing companies handling claims manually.',
      whyTheyWin: 'No software adoption required, familiar model, low per-claim cost.',
    },
  ],
  moat: [
    'Zero upfront cost model lowers switching risk for practices',
    'Payer-specific domain expertise embedded in AI (hard to replicate quickly)',
  ],

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core on Proven Workflow: Revenue cycle management exists without AI, but Joyful Health\'s AI is the core differentiator — automating denial follow-up workflows that previously required manual billing specialists.',
  aiDesignChallenges: [
    'Designing trust interfaces for healthcare financial data (HIPAA-compliant UX)',
    'Making AI claim status and denial reasons legible to non-billing-expert practice owners',
    'Designing for interrupted workflows (practice managers context-switch constantly)',
    'Building clear financial reporting that shows ROI vs. existing billing processes',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Eliana Berger',
      role: 'CEO & Co-founder',
      background: 'Former PM at Charlie Health (mental health unicorn). Discovered healthcare practices were losing 10-30% of revenue in denied claims without realizing it.',
    },
  ],
  whyBuilding: 'Saw firsthand at Charlie Health how practices struggle with billing complexity. Built Joyful Health to give solo and small practices the financial operations infrastructure that only large health systems can afford.',
  beliefs: [
    'Private practice owners should focus on patients, not billing — financial ops should be invisible',
    'The hardest part of RCM (denied claims) is exactly where AI can deliver the most value',
    'Zero upfront cost is not just a pricing strategy — it\'s a product philosophy',
  ],
  designPhilosophy: 'Designer Fund is an investor — signals strong design orientation from the start.',

  greenFlags: [
    'Designer Fund backing = design-first company culture from inception',
    'Clear 10-30% revenue recovery opportunity for every customer (concrete ROI)',
    'Founder has direct domain experience (Charlie Health PM)',
    'Zero upfront cost model removes biggest adoption barrier',
  ],
  redFlags: [
    'Very early stage — small team (25 people), limited proof of scale',
    'Crowded RCM market with many legacy players',
    'Healthcare AI has long sales cycles and high compliance overhead',
    'Single founder identified — co-founder unknown from public sources',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size 25)',
    designHead: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Claim denial categorization and AI follow-up decision logic',
        'Payer-specific workflow configuration per practice',
        'HIPAA-compliant data handling and permission flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Recovery rate dashboards for practice owners',
        'Claim status tracking and aging reports',
        'ROI visualization vs. previous billing methods',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Practice owner dashboard (financial health at a glance)',
        'Claim queue management and status tracking',
        'Onboarding and EHR integration setup flows',
      ],
    },
  },
  productStage: '0→1',

  // Open Roles
  openRoles: [],
  designerLinks: [],
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Designer Fund backing = design-first culture from day one',
      'Early stage = massive design ownership (0→1 product work)',
      'Clear patient impact: practices recover lost revenue, focus more on care',
      'Eliana Berger ex-Charlie Health = strong domain credibility',
    ],
    whyNot: [
      'Very early stage — seed round, 25 people, unproven scale',
      'RCM design is not the most visually exciting or novel design domain',
      'No open designer roles visible yet',
      'Small practice market = potential ceiling on TAM captured',
    ],
    nextActions: [
      'Watch for Series A announcement as signal of growth',
      'Check careers page for design roles',
      'Review joyfulhealth.com product for design quality signal',
    ],
  },

  // Meta
  lastUpdated: '2026-04-14T00:00:00',
  sources: [
    { title: 'Joyful Health website', url: 'https://www.joyfulhealth.com' },
    { title: 'Eliana Berger — Stedi Spotlight', url: 'https://www.stedi.com/blog/spotlight-eliana-berger-joyful-health' },
    { title: 'Joyful Health — f4.fund', url: 'https://f4.fund/startups/joyfulhealth' },
    { title: 'Joyful Health LinkedIn', url: 'https://www.linkedin.com/company/joyful-health-io' },
    { title: 'Go Slow to Go Fast: Eliana Berger Podcast', url: 'https://www.buzzsprout.com/2508127/episodes/17812379-go-slow-to-go-fast-eliana-berger-on-building-joyful-health' },
  ],
};
