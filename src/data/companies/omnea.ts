import { Company } from '../types';

export const omnea: Company = {
  id: 'omnea',
  name: 'Omnea',
  description: 'AI-native procurement orchestration platform that streamlines buying, supplier management, and spend governance for enterprises.',
  website: 'https://www.omnea.co',
  headquarters: 'London, UK',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$75M+',
  fundingHistory: [
    { stage: 'Seed', amount: '$5M', date: '2023-01', leadInvestors: ['Point Nine', 'First Round Capital'] },
    { stage: 'Series A', amount: '$20M', date: '2024-10', leadInvestors: ['Accel'] },
    { stage: 'Series B', amount: '$50M', date: '2025-09', leadInvestors: ['Insight Partners', 'Khosla Ventures'] },
  ],
  revenue: 'Double-digit millions ARR (10x in 18 months)',
  growth: '5x revenue YoY (2024→2025), tripled customer base, >99% retention',
  runway: 'Strong (Series B Sep 2025)',
  customers: 'Spotify, MongoDB, Monzo, Albertsons, Wise, Adecco',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '5x YoY to double-digit millions ARR',
    userGrowth: 'Tripled customer base in 12 months; scaling to 150+ employees, opening NY office',
    signals: [
      '$50M Series B from Insight + Khosla (Sep 2025)',
      '5x revenue growth in past 12 months',
      '>99% customer retention across global enterprises',
      'Named customers: Spotify, MongoDB, Monzo, Albertsons',
    ],
    tam: '$7B+ procurement software market',
    marketShare: '<1% of TAM = 100x+ upside',
    ceiling: 'Early innings: CFO-as-buyer wave for AI ops tools just beginning',
    tailwinds: [
      'CFOs prioritizing AI-driven spend visibility and governance',
      'Supplier risk management demand post-supply chain shocks',
      'Shift from siloed procurement tools to unified intake platforms',
      'AI automation reducing procurement cycle times 80%+',
      'European regulatory pressure on supplier compliance',
    ],
    headwinds: [
      'Coupa, SAP Ariba, and Zip.co are entrenched enterprise incumbents',
      'Long enterprise sales cycles (6-18 months)',
      'Procurement often deprioritized vs. revenue-generating software',
      'Data integration complexity with legacy ERP systems',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Deep ERP integrations + named enterprise accounts (Spotify, MongoDB) create high switching cost.',
  },

  // Competition
  competitors: [
    {
      name: 'Coupa',
      description: 'Enterprise spend management incumbent ($8B market cap before going private).',
      whyTheyWin: 'Installed base in F500, deep ERP integrations, full suite breadth.',
    },
    {
      name: 'Zip.co',
      description: 'Intake-to-procure platform, Series C ($370M raised).',
      whyTheyWin: 'Strong US market presence, similar AI-native positioning, strong brand.',
    },
    {
      name: 'Precoro',
      description: 'Mid-market procurement software.',
      whyTheyWin: 'Lower price point, faster implementation, SMB-friendly.',
    },
  ],
  moat: [
    'AI-native from day one (vs. legacy tools bolting on AI)',
    'Named enterprise logos create credibility flywheel',
    'Tight ERP/finance stack integrations (switching cost)',
  ],

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core on Proven Workflow: Procurement exists without AI, but Omnea\'s AI orchestration is the core differentiator — automating intake, supplier risk scoring, and approval routing that legacy tools do manually.',
  aiDesignChallenges: [
    'Designing multi-stakeholder intake flows (requester, finance, legal, IT all in one workflow)',
    'Making AI risk scoring explainable and trustworthy to CFOs',
    'Balancing automation with human approval checkpoints in governance workflows',
    'Designing for occasional users (employees submitting requests) vs. power users (procurement teams)',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ben Freeman',
      role: 'CEO & Co-founder',
      background: 'Former product executive at Tessian (email security, $500M exit). Built enterprise SaaS teams.',
    },
    {
      name: 'Ben Allen',
      role: 'Co-founder',
      background: 'Former engineering leader at Tessian.',
    },
  ],
  whyBuilding: 'Frustrated by fragmented, painful procurement tools at Tessian. Saw that CFOs needed a single system of record for spend decisions but no AI-native option existed.',
  beliefs: [
    'Procurement is a strategic function, not a cost center — it should be a competitive advantage',
    'Intake is the key unlock: fix how requests enter the system and everything downstream improves',
    'AI should reduce procurement from weeks to hours without sacrificing control',
  ],
  designPhilosophy: 'Unknown',

  greenFlags: [
    '5x revenue in 12 months with >99% retention — product-market fit signal',
    'Insight + Khosla (top-tier investors) leading Series B',
    'Tessian founder pedigree (proven SaaS operator)',
    'Named enterprise customers across multiple verticals (tech, retail, finance)',
  ],
  redFlags: [
    'London HQ limits US enterprise sales penetration',
    'Zip.co and Coupa are well-funded competitors in same space',
    'Procurement software has historically low NPS — hard to delight users',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size 161)',
    designHead: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Multi-stakeholder intake flow design (who approves what, when)',
        'AI risk scoring rules and approval logic visualization',
        'Supplier onboarding and compliance workflow automation',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Procurement cycle time benchmarking dashboards',
        'Spend analytics and anomaly detection UI',
        'Supplier risk score transparency and audit trails',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Purchase request intake forms (multi-team, multi-type)',
        'Supplier portal and relationship management views',
        'Finance admin dashboards for spend visibility',
      ],
    },
  },
  productStage: '1→10',

  // Open Roles
  openRoles: [
    {
      title: "Senior Product Designer",
      location: "London",
      type: "full-time",
      url: "https://jobs.ashbyhq.com/omnea/f23a08f1-23d4-42e0-9b32-061ad1fb2b5e",
      roleFamily: "product-design",
      roleSignal: "senior",
      verificationStatus: "confirmed",
      sourceType: "ashby",
      lastVerifiedAt: "2026-05-07",
      whyInteresting: "Current design role verified on Ashby.",
    }
  ],

  designerLinks: [],
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      '5x revenue growth — real PMF, not just hype',
      'First design lead role = high design ownership and influence',
      'London-based with global enterprise customers gives European design perspective',
      'Series B backing from Khosla + Insight = strong growth runway',
    ],
    whyNot: [
      'Procurement UX is notoriously unglamorous — not the most exciting design domain',
      'London-based = limited options if Ilwon is NYC-focused',
      'Crowded space with well-funded competitors',
    ],
    nextActions: [
      'Check if Product Design Lead role is still open',
      'Review Omnea product on their website to assess design quality',
    ],
  },

  // Meta
  lastUpdated: '2026-04-14T00:00:00',
  sources: [
    { title: 'Omnea raises $50M Series B — PR Newswire', url: 'https://www.prnewswire.com/news-releases/omnea-raises-50m-to-make-procurement-every-cfos-competitive-advantage-302559153.html' },
    { title: 'Omnea raises $25M — TechCrunch', url: 'https://techcrunch.com/2024/10/14/omnea-raises-25m-to-tackle-the-painfully-annoying-procurement-market/' },
    { title: 'Omnea raises $20M Series A', url: 'https://www.omnea.co/press-releases/series-a-announcement' },
    { title: 'Omnea website', url: 'https://www.omnea.co' },
    { title: 'Product Design Lead at Omnea', url: 'https://www.thesaasjobs.com/jobs/428317074-product-design-lead' },
    { title: 'Omnea Crunchbase', url: 'https://www.crunchbase.com/organization/omnea-2c90' },
  ],
};
