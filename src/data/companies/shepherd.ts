import { Company } from '../types';

export const shepherd: Company = {
  id: 'shepherd',
  name: 'Shepherd',
  description: 'AI-powered construction insurance platform combining underwriting with risk management software to help contractors reduce premiums.',
  website: 'https://shepherdinsurance.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/shepherd-og.webp',
  category: 'vertical-saas' as const,
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  industries: ['fintech'],
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$19.7M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: 'Undisclosed',
      date: '2020',
      leadInvestors: ['Susa Ventures'],
    },
    {
      stage: 'Seed',
      amount: '$6.2M',
      date: '2021-09',
      leadInvestors: ['Spark Capital'],
    },
    {
      stage: 'Series A',
      amount: '$13.5M',
      date: '2024-02',
      leadInvestors: ['Costanoa Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: '5x GWP YoY',
  customers: 'Top 20 US retail insurance brokers in construction',
  competitors: [
    {
      name: 'Corvus Insurance',
      description: 'AI-driven commercial insurance MGA focused on cyber and tech E&O',
      whyTheyWin: 'Broader commercial lines coverage with established data platform',
    },
    {
      name: 'Pie Insurance',
      description: 'Technology-first workers compensation insurer for small businesses',
      whyTheyWin: 'Simple UX and fast quoting for SMB segment',
    },
    {
      name: 'Highwing',
      description: 'Data infrastructure for commercial insurance distribution',
      whyTheyWin: 'Network effects from broker-carrier connectivity platform',
    },
  ],
  marketPosition: 'Leading AI-powered MGA focused exclusively on commercial construction insurance',
  moat: [
    'Deep construction domain expertise: founder built TradeTapp (acquired by Autodesk)',
    'Proprietary risk data from Procore, OpenSpace, Samsara integrations',
    'MGU model with carrier partnerships (Greenlight Re, Intact)',
    'AI compliance engine automates PDF-heavy insurance workflows',
  ],
  vsGiants: 'Traditional insurers like Chubb, Zurich lack tech integration; Shepherd offers 24-hour turnaround vs weeks',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator in underwriting and compliance automation, but insurance operations remain the primary business',
  aiDesignChallenges: [
    'Risk visualization: making complex construction risk data actionable for underwriters',
    'AI compliance UX: designing transparent automation for regulated insurance workflows',
    'Multi-stakeholder design: brokers, contractors, and underwriters have different mental models',
  ],
  founders: [
    {
      name: 'Justin Levine',
      role: 'Co-founder & CEO',
      background: 'Construction risk expert. Previously co-founded TradeTapp (acquired by BuildingConnected → Autodesk). Civil Engineering from Georgia Tech.',
    },
    {
      name: 'Mohamed El Mahallawy',
      role: 'Co-founder & CTO',
      background: 'Former product engineer at Airbnb. Leads engineering and AI product development.',
    },
    {
      name: 'Steve Buonpane',
      role: 'Co-founder',
      background: 'Former EVP and construction industry practice leader at Chubb. Deep insurance underwriting expertise.',
    },
  ],
  whyBuilding: 'Construction insurance is a $48B market still running on paper and fax. Levine saw the problem firsthand at TradeTapp and built Shepherd to modernize it with AI.',
  beliefs: [
    'Insurance should reward safety, not just price risk',
    'Construction data from IoT and project management tools can transform underwriting',
    'Software + insurance bundled together creates a flywheel of better data and lower premiums',
  ],
  greenFlags: [
    'YC W21 with repeat founder (TradeTapp exit to Autodesk)',
    '5x GWP growth YoY with top-20 broker partnerships',
    'Strong investor syndicate: Spark Capital, Costanoa, Intact Ventures',
    'CTO from Airbnb engineering + insurance domain co-founder from Chubb',
  ],
  redFlags: [
    'Fully on-site (5 days/week in SF) limits talent pool',
    'Insurance is heavily regulated with slow adoption cycles',
    'Series A stage with $19.7M total — may need more capital to scale',
  ],
  designTeam: {
    teamSize: '~0-1 (Product Design Lead role open, likely first design hire)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI compliance workflow automation logic',
        'Risk scoring and underwriting decision support',
        'Multi-party submission and approval flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Underwriting accuracy and turnaround metrics',
        'Broker satisfaction and submission quality feedback',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Broker-facing submission portal and quoting interface',
        'Internal underwriting dashboard and risk visualization',
        'AI compliance document analysis interface',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Insurance brokers placing commercial construction policies',
    secondary: 'General contractors and construction firms seeking lower premiums',
  },
  userProblems: [
    'Insurance submissions take weeks with manual PDF review and back-and-forth',
    'Brokers juggle multiple carriers with no standardized data format',
    'Contractors lack visibility into how safety practices affect premiums',
    'Compliance verification is manual, error-prone, and slow',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'YC W21 alumni with 60-person team. Non-traditional team culture valuing unique backgrounds and hard work over pedigree.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '5x GWP YoY',
    signals: [
      '$13.5M Series A led by Costanoa Ventures (Feb 2024)',
      'Expanded from 1 to 4 casualty product lines in 18 months',
      'Top 20 US construction brokers signed up',
    ],
    tam: '$48B commercial construction insurance market',
    ceiling: 'Early innings: digitizing paper-based insurance workflows',
    tailwinds: [
      'Construction spending at record highs (infrastructure bill)',
      'Insurance industry digital transformation accelerating',
      'IoT/sensor data from construction sites enabling better risk models',
    ],
    headwinds: [
      'Insurance regulation complexity varies by state',
      'Long sales cycles with enterprise brokers',
      'Incumbent carriers have deep capital reserves',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong: construction-specific data integrations (Procore, OpenSpace) create switching costs',
  },
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Product Design Lead = founding design role, shape entire design org',
      'Level B AI-native with real AI product (compliance engine, risk scoring)',
      'Repeat founder with successful exit (TradeTapp → Autodesk)',
      '$200K-$220K comp with equity upside at Series A',
    ],
    whyNot: [
      'Fully on-site 5 days/week in SF',
      'Insurance is niche domain — less transferable design portfolio',
      'Early-stage design team (likely solo designer initially)',
    ],
    nextActions: [
      'Review Shepherd product demo if available',
      'Research construction insurance design patterns',
    ],
  },
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Shepherd Official Website', url: 'https://shepherdinsurance.com' },
    { title: 'Shepherd Careers - Product Design Lead', url: 'https://jobs.ashbyhq.com/shepherd/fc564f9a-4da3-4086-92bc-7d88036fe48c' },
    { title: 'Shepherd Series A Announcement', url: 'https://www.globenewswire.com/news-release/2024/02/07/2825155/0/en/Shepherd-Raises-13-5-Million-in-Series-A-Funding-to-Help-Insure-the-10-Trillion-Commercial-Construction-Industry.html' },
    { title: 'Shepherd on Y Combinator', url: 'https://www.ycombinator.com/companies/shepherd' },
    { title: 'TechCrunch - Shepherd Seed Round', url: 'https://techcrunch.com/2021/09/02/shepherd-raises-6-2m-seed-round-to-tackle-the-construction-insurance-market/' },
  ],
};
