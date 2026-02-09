import { Company } from '../types';

export const lighthouse: Company = {
  id: 'lighthouse',
  name: 'Lighthouse',
  description: 'Get a U.S. work visa with ease.',
  website: 'https://www.lighthousehq.com',
    screenshot: '/screenshots/lighthouse-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/664c0dc11ed37c28d0e4a8b1/664db86e44eff954b6b05d6c_Opengraph.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Companies sponsoring U.S. work visas.',

  // Competition
  competitors: [
    {
      name: 'Boundless',
      description: 'Immigration services platform for employers and individuals.',
      whyTheyWin: 'Established immigration workflows and legal partnerships.',
    },
    {
      name: 'Envoy Global',
      description: 'Immigration and mobility services for enterprises.',
      whyTheyWin: 'Enterprise relationships and compliance expertise.',
    },
    {
      name: 'Fragomen',
      description: 'Large global immigration law firm.',
      whyTheyWin: 'Scale, legal depth, and enterprise trust.',
    },
  ],
  marketPosition: 'Visa sponsorship workflows with modern, streamlined UX.',
  moat: [
    'Focused product experience vs law-firm-heavy incumbents',
    'Automation for document-heavy workflows',
    'Guided process for founders and HR teams',
  ],
  vsGiants: 'Competes by making visa workflows faster and more transparent than traditional legal firms.',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Immigration workflow software; AI is not core to the product.',
  aiDesignChallenges: [
    'High trust and compliance UX in legal workflows',
    'Clear progress tracking for long processes',
    'Balancing automation with human legal review',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Minn Kim',
      role: 'Founder & CEO',
      background: 'Former career in financial services and venture capital; has helped 100+ founders and technologists with U.S. immigration with 100% approval rate.',
    },
  ],
  whyBuilding: 'Visa sponsorship is complex; companies need a simpler, faster process.',
  beliefs: [
    'Immigration workflows should be transparent',
    'Compliance can be simplified with better software',
    'Founders and employees deserve a clear process',
  ],
  greenFlags: [
    'Clear pain point with high demand',
    'Focused niche in visa sponsorship',
  ],
  redFlags: [
    'Heavy regulatory dependencies',
    'Legal risk and long sales cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Document collection workflows', 'Approval and compliance flows'],
    },
    evaluation: {
      level: 'low',
      tasks: ['Audit trail clarity', 'Process completion metrics'],
    },
    interface: {
      level: 'high',
      tasks: ['Step-by-step visa flow UI', 'Employer and employee dashboards'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Startups and HR teams sponsoring visas',
    secondary: 'Employees going through visa processes',
  },
  userProblems: [
    'Visa sponsorship is opaque and slow',
    'Document collection is fragmented',
    'Legal workflows are hard to track',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA (Hybrid)',
      type: 'full-time',
      url: 'https://careers.lighthousehq.com/product-designer.html',
      aboutRole: 'First product design hire to craft interfaces across the visa workflow.',
      responsibilities: [
        'Design end-to-end visa workflow experiences',
        'Collaborate with engineering and legal teams',
        'Ship user-facing features quickly in a lean team',
      ],
      requirements: [
        '2+ years designing and shipping product experiences',
        'Strong interaction and visual design skills',
        'Comfortable working in fast-moving startup environments',
      ],
      preferred: [
        'Experience with complex workflows or fintech/legal products',
        'Ability to prototype quickly',
      ],
      whyInteresting: 'Own product design at an early-stage company modernizing visa sponsorship.',
    },
  ],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Clear UX impact on high-stakes workflows', 'Foundational design role'],
    whyNot: ['Regulatory constraints', 'Non-AI core product'],
    nextActions: ['Review product to assess design maturity'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Hiring early design role'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Visa sponsorship workflow modernization remains early-stage.',
    tailwinds: ['Global talent mobility demand', 'HR workflow digitization'],
    headwinds: ['Regulatory complexity', 'Enterprise legal procurement'],
    moatType: 'vertical-specialization',
    moatStrength: 'Specialized immigration workflow expertise.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:15:00',
  sources: [
    { title: 'Source', url: 'https://www.lighthousehq.com' },
    { title: 'Source', url: 'https://careers.lighthousehq.com/product-designer.html' },
    { title: 'Source', url: 'https://startups.gallery/companies/lighthouse' }
  ],
};
