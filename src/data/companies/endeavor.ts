import { Company } from '../types';

export const endeavor: Company = {
  id: 'endeavor',
  name: 'Endeavor',
  description: 'AI platform for manufacturing and distribution that automates sales, operations, and supply chain processes using agentic AI.',
  website: 'https://www.endeavor.ai',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',
  ogImage: '/og-images/endeavor-og.webp',
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$7M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$7M',
      date: '2024-10',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Schreiber Foods, Cabot Corp, ClarkDietrich, Viking Group, Orbis, Star Lumber',
  competitors: [
    {
      name: 'Epicor',
      description: 'Legacy ERP provider for manufacturing with AI add-ons',
      whyTheyWin: 'Deep installed base in manufacturing with decades of domain expertise',
    },
    {
      name: 'Rootstock',
      description: 'Cloud ERP for manufacturing on Salesforce platform',
      whyTheyWin: 'Salesforce ecosystem integration and established enterprise relationships',
    },
    {
      name: 'Fulcrum',
      description: 'AI-powered manufacturing operations platform',
      whyTheyWin: 'Purpose-built AI for factory floor optimization',
    },
  ],
  marketPosition: 'AI-first ERP alternative for mid-market manufacturers and distributors',
  moat: [
    'Agentic AI approach to unstructured manufacturing data (invoices, POs, specs)',
    'Deep ERP integrations (SAP, Oracle, Dynamics, Infor, Epicor)',
    'Domain-specific training on manufacturing workflows',
  ],
  vsGiants: 'Legacy ERPs (SAP, Oracle) require years of implementation; Endeavor deploys in weeks with AI-native automation',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — agentic AI automates order entry, quoting, and back-office tasks that legacy ERPs handle manually. Product cannot function without AI.',
  aiDesignChallenges: [
    'Designing trust in AI-processed orders for high-stakes manufacturing transactions',
    'Bridging legacy ERP mental models with AI-native workflows',
    'Designing for non-technical manufacturing users who distrust automation',
  ],
  founders: [
    {
      name: 'Sahitya Senapathy',
      role: 'Founder & CEO',
      background: 'Wharton + Penn Engineering dual degree. Built first software at 11 for FEMA. Air Force Research Lab contractor in high school. AI roles at AWS and Palantir.',
    },
  ],
  whyBuilding: 'Believes American manufacturing is held back by fragmented legacy IT systems (12-20 separate tools per company) and wants to modernize the industrial heartland with AI.',
  beliefs: [
    'Manufacturing data is the most underutilized asset in American industry',
    'AI should adapt to existing workflows, not force new ones',
    'The future of ERP is agentic, not form-based',
  ],
  greenFlags: [
    'Craft Ventures + Contrary Capital backing with strong manufacturing advisors (Bridgestone, Marmon/Berkshire)',
    'Real enterprise customers with quantifiable results (90%+ accuracy, 70% faster)',
    'Massive underserved market — manufacturing is one of the least digitized industries',
  ],
  redFlags: [
    'Very early stage (Seed) with small team (~16 employees)',
    'Young founder (22) tackling complex enterprise sales cycles',
    'No design team signals — engineering-heavy early stage',
  ],
  designTeam: {
    teamSize: 'Unknown (no public design hires or team info found)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Designing agentic AI workflows for order processing',
        'Error handling for misinterpreted manufacturing documents',
        'Automation confidence thresholds and human-in-the-loop flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Accuracy dashboards for AI-processed orders',
        'Feedback loops for AI extraction quality improvement',
        'Audit trails for compliance in manufacturing operations',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'ERP-replacement dashboards for non-technical users',
        'Document processing review and approval interfaces',
        'Voice AI order entry experience design',
      ],
    },
  },
  productStage: '0→1',
  targetAudiences: {
    primary: 'Operations and sales teams at mid-market manufacturers and distributors ($100M-$1B+ revenue)',
    secondary: 'IT leaders evaluating ERP modernization',
  },
  userProblems: [
    'Manual data entry across 12-20 siloed IT systems wastes hours daily',
    'Order processing from emails, PDFs, and phone calls is error-prone and slow',
    'Legacy ERPs are rigid, expensive, and take years to implement',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$7M seed from Craft Ventures (Oct 2024)',
      'Named enterprise customers (Schreiber Foods, ClarkDietrich)',
      'Hiring backend engineers aggressively',
    ],
    tam: '$50B+ (manufacturing ERP and automation market)',
    ceiling: 'Early innings: legacy ERP replacement in manufacturing is barely started',
    tailwinds: [
      'AI adoption in manufacturing accelerating post-2024',
      'Reshoring trend increasing demand for efficient US manufacturing',
      'Legacy ERP vendors slow to adopt AI-native approaches',
    ],
    headwinds: [
      'Enterprise sales cycles in manufacturing are long (6-12+ months)',
      'Incumbents (SAP, Oracle) have deep relationships and switching costs',
      'Manufacturing companies are conservative adopters of new technology',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep manufacturing domain + agentic AI approach, but early and replicable',
  },
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level B AI-native: designing agentic workflows for real enterprise problems',
      'Massive market opportunity in manufacturing digitization',
      'Early stage = high impact on product direction',
    ],
    whyNot: [
      'Seed stage with no visible design team or design leadership',
      'Enterprise manufacturing may not prioritize design quality early',
      'Small team focused on engineering; design may be deprioritized',
    ],
    nextActions: [
      'Monitor for design hiring signals',
      'Watch for Series A announcement',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Endeavor AI — Official Website', url: 'https://www.endeavor.ai' },
    { title: 'Endeavor Raises $7M Seed — WebWire', url: 'https://www.webwire.com/ViewPressRel.asp?aId=328997' },
    { title: 'Endeavor — Crunchbase Profile', url: 'https://www.crunchbase.com/organization/endeavor-ddbd' },
    { title: 'Endeavor Careers — no Product Design roles found', url: 'https://www.endeavor.ai/careers' },
    { title: 'Endeavor — Ashby Jobs (no design roles)', url: 'https://jobs.ashbyhq.com/endeavor' },
  ],
};
