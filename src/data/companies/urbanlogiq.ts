import { Company } from '../types';

export const urbanlogiq: Company = {
  id: 'urbanlogiq',
  name: 'UrbanLogiq',
  description: 'AI-powered data analytics platform helping government agencies make data-driven decisions through unified data management and predictive analytics.',
  website: 'https://urbanlogiq.com',
  headquarters: 'Vancouver, BC, Canada',
  region: 'other-intl' as const,
  remote: 'Hybrid',
  ogImage: '/og-images/urbanlogiq-og.webp',
  aiTypes: ['data-analysis'],
  markets: ['enterprise'],
  category: 'vertical-saas' as const,
  industries: ['other'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  totalFunding: '$210K',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$210K',
      date: '2018-01',
      leadInvestors: ['500 Startups'],
    },
  ],
  revenue: '$1.4M ARR (Oct 2024)',
  growth: 'Unknown',
  customers: '10+ government agencies (City of Ottawa, City of San Francisco, City of Surrey)',
  competitors: [
    {
      name: 'Tyler Technologies',
      description: 'Major GovTech SaaS provider with civic data and analytics solutions',
      whyTheyWin: 'Massive install base in US municipalities with deep procurement relationships',
    },
    {
      name: 'ESRI',
      description: 'Global leader in GIS and spatial analytics for government',
      whyTheyWin: 'Industry standard for geospatial data; deeply embedded in government workflows',
    },
    {
      name: 'Caliper Corporation',
      description: 'Transportation planning and GIS software for public sector',
      whyTheyWin: 'Specialized traffic/transportation analytics with decades of government deployments',
    },
  ],
  marketPosition: 'Niche AI-powered GovTech platform focused on unifying fragmented government data',
  moat: [
    'Government-specific AI with built-in privacy and audit compliance (ISO 27001/27701)',
    'Founding team with 10+ years in government and politics',
    'Unlimited-seat collaborative model aligned with public sector needs',
  ],
  vsGiants: 'Differentiates from ESRI/Tyler by offering AI-native data unification across all data types, not just GIS or specific verticals',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core differentiator — predictive traffic analytics, Ethica generative AI chatbot, and global foundation model for government data. Platform could exist without AI but AI is the key value proposition.',
  aiDesignChallenges: [
    'Designing transparent AI outputs with source citations and quality ratings for government accountability',
    'Building natural language query interfaces (Ethica) for non-technical government users',
    'Visualizing predictive analytics and confidence levels for policy decision-making',
  ],
  founders: [
    {
      name: 'Mark Masongsong',
      role: 'CEO & Co-founder',
      background: '11 years in BC government and politics. Political aide to two BC Ministers of Health. Featured speaker at White House, World Bank, and Harvard Smart Cities Accelerator.',
    },
    {
      name: 'Arvinder Singh Kang',
      role: 'CTO & Co-founder',
      background: 'MS in Computer Science (U of Mississippi), Certificate in Global Leadership (Yale). Former senior instructor at Canada\'s largest coding bootcamp.',
    },
    {
      name: 'Herman Chandi',
      role: 'COO & Co-founder',
      background: '10 years in smart cities and urban innovation. Leads operations across North American government agencies.',
    },
    {
      name: 'Arun Dawit',
      role: 'Co-founder',
      background: 'MBA. Former communications director for political campaigns. Consultant on city permitting and zoning.',
    },
  ],
  whyBuilding: 'Government agencies are drowning in fragmented data across incompatible systems. Founded through SF Startup in Residence program to give public servants AI-powered tools for data-driven decisions.',
  beliefs: [
    'Government deserves the same quality of data tools as the private sector',
    'Responsible AI with transparency and audit trails is non-negotiable for public trust',
    'Data unification across silos unlocks transformative policy insights',
  ],
  greenFlags: [
    '$1.4M ARR with only 17 employees — strong revenue efficiency',
    'Deep domain expertise: founding team from government/politics backgrounds',
    'Real government contracts (Ottawa, San Francisco, Surrey, Minnesota)',
  ],
  redFlags: [
    'Only $210K total funding — severely capital-constrained',
    'Small team (17-19) limits scaling capacity',
    'Government sales cycles are slow and procurement-heavy',
    'Below-market compensation reported on Glassdoor',
  ],
  designTeam: {
    designHead: 'Anthony (Design Lead)',
    teamSize: '~3 (Design Lead + Senior PD + PD on LinkedIn)',
    notableMembers: [
      { name: 'Elena Hsu', role: 'Senior Product Designer' },
      { name: 'Alex Fung', role: 'Product Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Ethica chatbot conversation flow and query interpretation',
        'Predictive model confidence thresholds and fallback logic',
        'Data pipeline workflow design for multi-source ingestion',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'AI output quality ratings and source citation transparency',
        'Government audit trail design for AI-generated insights',
        'Predictive analytics accuracy validation UX',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Complex data visualization dashboards for traffic, safety, economic data',
        'Collaborative analytics workspace for government teams',
        'Natural language query interface (Ethica chatbot)',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'City and municipal government analysts and planners',
    secondary: 'State-level agencies (fire, transportation, economic development)',
  },
  userProblems: [
    'Government data trapped in incompatible silos across departments',
    'Traffic studies cost $1,500-$3,500 per intersection with manual collection',
    'Non-technical government staff cannot query or analyze complex datasets',
    'No unified view across transportation, safety, and economic data',
  ],
  designerLinks: [
    {
      name: 'Elena Hsu',
      role: 'Senior Product Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/elena-hsu/',
      description: 'Posts about portfolio culture in design — questioning whether portfolios are the only measure of designer quality',
    },
    {
      name: 'Alex Fung',
      role: 'Product Designer',
      platform: 'blog',
      url: 'https://www.alxndrfng.com/',
      description: 'Portfolio showcasing data visualization and public sector product design work; views design as "a tool of service and storytelling"',
    },
  ],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Hybrid work with remote flexibility, strong women leaders in tech and business, meaningful civic impact work',
      url: 'https://www.glassdoor.com/Reviews/UrbanLogiq-Reviews-E2258161.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Below-average compensation (3.2/5), executive team operates like a friend group, scattered sales strategy',
      url: 'https://www.glassdoor.com/Reviews/UrbanLogiq-Reviews-E2258161.htm',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      '$1.4M ARR with 17-person team (high efficiency)',
      'Launched Ethica AI chatbot at SXSW 2024',
      'Expanding from Canadian to US municipal governments',
    ],
    tam: '$157B (urban planning software and services market, 2024)',
    ceiling: 'Early innings: vast government data modernization opportunity',
    tailwinds: [
      'Government digital transformation acceleration',
      'AI adoption in public sector gaining momentum',
      'Smart city initiatives growing globally',
    ],
    headwinds: [
      'Government procurement cycles are 6-18 months',
      'Competition from well-funded players like Tyler Technologies',
      'Limited funding constrains growth speed',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep government domain expertise but limited scale and funding',
  },
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Level B AI-native with real government AI product (Ethica)',
      'Small design team (~3) — high impact per designer',
      'Meaningful civic tech work with tangible public impact',
    ],
    whyNot: [
      'Severely underfunded ($210K total) — scaling risk',
      'Below-market compensation reported',
      'No open Product Design roles currently',
      'Small company (17 people) with limited growth trajectory',
    ],
    nextActions: [
      'Monitor for new design role openings',
      'Track funding — a proper seed/Series A would change the picture',
    ],
  },
  lastUpdated: '2026-02-13',
  sources: [
    { title: 'UrbanLogiq Official Website', url: 'https://urbanlogiq.com' },
    { title: 'UrbanLogiq Crunchbase Profile', url: 'https://www.crunchbase.com/organization/urbanlogiq' },
    { title: 'UrbanLogiq Revenue & Team Size (Latka)', url: 'https://getlatka.com/companies/urbanlogiq' },
    { title: 'UrbanLogiq Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/UrbanLogiq-Reviews-E2258161.htm' },
    { title: 'UrbanLogiq Careers - no Product Design roles found', url: 'https://urbanlogiq.rippling-ats.com/' },
  ],
};
