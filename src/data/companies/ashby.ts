import { Company } from '../types';

export const ashby: Company = {
  id: 'ashby',
  name: 'Ashby',
  description: 'All-in-one recruiting platform combining ATS, CRM, scheduling, and analytics with AI-native automation for ambitious hiring teams.',
  website: 'https://www.ashbyhq.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',
  ogImage: '/og-images/ashby-og.webp',

  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  stage: 'Series D',

  normalizedStage: 'series-d-plus' as const,
  valuation: 'Unknown (2x Series C valuation)',
  totalFunding: '$128M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3M', date: '2019-03', leadInvestors: ['Lachy Groom'] },
    { stage: 'Series A', amount: 'Unknown', date: '2021', leadInvestors: ['Elad Gil'] },
    { stage: 'Series B', amount: '$21.5M', date: '2022-09', leadInvestors: ['F-Prime Capital'] },
    { stage: 'Series C', amount: '$30M', date: '2024-06', leadInvestors: ['Lachy Groom'] },
    { stage: 'Series D', amount: '$50M', date: '2025-07', leadInvestors: ['Alkeon Capital Management'] },
  ],
  revenue: 'Unknown (135% YoY ARR growth)',
  growth: '135% YoY revenue, 2x customer count in 1 year',
  runway: 'Strong (burn multiple under 1x)',
  customers: '2,700+ organizations (Notion, Linear, Shopify, OpenAI)',

  competitors: [
    {
      name: 'Greenhouse',
      description: 'Enterprise ATS with compliance-heavy workflows and broad job board integrations.',
      whyTheyWin: 'Market share, global compliance, and established enterprise presence.',
    },
    {
      name: 'Lever',
      description: 'CRM + ATS with pipeline-focused recruiting workflows.',
      whyTheyWin: 'Strong CRM features and candidate nurturing focus.',
    },
    {
      name: 'Workday Recruiting',
      description: 'Enterprise HR suite with integrated recruiting module.',
      whyTheyWin: 'Deep ecosystem lock-in with broader Workday HCM suite.',
    },
  ],
  marketPosition: 'Modern all-in-one ATS disrupting legacy recruiting tools with analytics-first approach',
  moat: [
    'All-in-one platform replacing 3-4 separate tools (ATS + CRM + scheduling + analytics)',
    'Analytics-first architecture built from scratch for data-driven recruiting',
    'Product-led growth among top-tier tech companies (OpenAI, Notion, Linear, Shopify)',
    'Best-in-class burn efficiency (under 1x burn multiple)',
  ],
  vsGiants: 'Ashby competes against legacy ATS tools (Greenhouse, Lever) with a modern, integrated platform. Against Workday, they win on implementation speed (3 weeks vs months) and UX quality.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core differentiator in automating recruiting workflows, scheduling, candidate sourcing, and analytics. The platform existed before AI but is now deeply AI-enhanced.',
  aiDesignChallenges: [
    'AI-assisted candidate evaluation without introducing bias',
    'Designing transparent AI automation in hiring workflows',
    'Balancing recruiter control with AI-driven efficiency',
  ],

  founders: [
    {
      name: 'Benjamin Encz',
      role: 'CEO & Co-founder',
      background: 'Former Director of Engineering at PlanGrid (acquired by Autodesk). Experienced firsthand the pain of recruiting at a high-growth startup.',
    },
    {
      name: 'Abhik Pramanik',
      role: 'CTO & Co-founder',
      background: 'Former R&D engineer at ILM and DreamWorks (Transformers, How to Train Your Dragon). Co-founded Choir, a mental health app.',
    },
  ],
  whyBuilding: 'Saw firsthand at PlanGrid that recruiting tools were fragmented and analytics-poor. Built Ashby to be the all-in-one platform that makes hiring data-driven.',
  beliefs: [
    'Recruiting should be data-driven, not gut-driven',
    'One integrated platform beats fragmented point solutions',
    'Capital efficiency matters more than growth-at-all-costs',
    'Product quality is the best go-to-market strategy',
  ],
  greenFlags: [
    'Under 1x burn multiple — best-in-class capital efficiency',
    '135% YoY revenue growth with 2,700+ customers',
    'Top-tier customer base (OpenAI, Notion, Linear, Shopify)',
    'YC-backed with consistent investor support (Lachy Groom led Seed + Series C)',
  ],
  redFlags: [
    'Competing against well-funded incumbents (Greenhouse, Lever, Workday)',
    'HR tech market is crowded and can be commoditized',
    'Valuation undisclosed — limited transparency on financials',
  ],

  designTeam: {
    designHead: 'Chris Lee (Lead Product Designer)',
    teamSize: '~2-3 (2 PD roles open, 1 lead designer on team page)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI-assisted candidate ranking and matching logic',
        'Automated scheduling and workflow orchestration',
        'Hiring pipeline configuration and automation rules',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality of hire metrics and outcome tracking',
        'Recruiter performance analytics dashboards',
        'Interview feedback and scoring frameworks',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Complex enterprise SaaS with dense data tables and filters',
        'Analytics dashboards and reporting visualizations',
        'Design system management and component library',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Recruiting teams at high-growth tech companies (50-5,000 employees)',
    secondary: 'Enterprise HR teams replacing legacy ATS systems',
  },
  userProblems: [
    'Fragmented recruiting tools require switching between ATS, CRM, scheduling, and analytics',
    'Legacy ATS systems lack built-in analytics for data-driven hiring decisions',
    'Slow implementations (months) with incumbent platforms like Greenhouse/Workday',
    'Poor candidate experience due to disconnected scheduling and communication tools',
  ],

  designerLinks: [
    {
      name: 'Chris Lee',
      role: 'Lead Product Designer',
      platform: 'substack',
      url: 'https://productdesign.substack.com/',
      description: 'Weekly product design insights — trained senior PDs at Apple & Meta. Medium article "Two Fundamental Approaches to Designing UX" reached 30K views.',
    },
  ],
  openRoles: [
    {
      title: 'Senior Product Designer',
      location: 'Remote - North America',
      url: 'https://jobs.ashbyhq.com/ashby/f40ef345-82a8-4956-9150-193b4fdf8183',
      type: 'full-time',
      level: 'Senior',
    },
    {
      title: 'Staff Product Designer',
      location: 'Remote - North America',
      url: 'https://jobs.ashbyhq.com/ashby/2373fcd5-144b-4d66-a98b-dd0efb4eb9d1',
      type: 'full-time',
      level: 'Staff',
    },
  ],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Remote-first, transparent financials, low-ego culture. "Incredible combination of product-market fit, customer delight, wicked smart team, and refreshingly down-to-earth culture."',
      url: 'https://www.glassdoor.com/Reviews/Ashby-Reviews-E6016688.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Written communication focus, minimal meetings. Founders regularly communicate vision and company financials are visible to all employees.',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-Ashby-E6016688-RVW65356996.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Designers described as "part designer, part PM, part consultant, part design system manager." Fuzzy role boundaries with high autonomy and IC focus.',
      url: 'https://www.ashbyhq.com/careers',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '135% YoY ARR growth',
    userGrowth: '1,300 → 2,700+ customers in 1 year (2x)',
    signals: [
      '$50M Series D (Jul 2025) at 2x Series C valuation',
      '135% YoY ARR growth with under 1x burn multiple',
      '170% increase in interviews scheduled through platform',
      '123% YoY enterprise segment growth',
    ],
    tam: '$13.9B global ATS/recruitment software market',
    marketShare: '<1% of TAM — large upside potential',
    ceiling: 'Early innings: replacing legacy ATS tools and expanding into enterprise HR analytics',
    tailwinds: [
      'AI-driven recruiting becoming table stakes',
      'Consolidation trend in HR tech (all-in-one replacing point solutions)',
      'Enterprise companies replacing legacy Greenhouse/Lever deployments',
    ],
    headwinds: [
      'Greenhouse and Lever have deep enterprise relationships',
      'Workday ecosystem lock-in for large enterprises',
      'HR tech market is crowded with well-funded competitors',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Strong: ATS migration is painful (data, workflows, integrations). Once adopted, switching costs are high.',
  },

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Level B AI-native with genuine AI integration in recruiting workflows',
      'Small design team = high ownership and impact per designer',
      'Written-first, minimal-meetings culture ideal for deep work',
      'Strong growth (135% YoY) with best-in-class capital efficiency',
    ],
    whyNot: [
      'HR tech is not the most exciting design domain',
      'Small design team may mean limited design mentorship',
      'Competing against well-funded legacy incumbents',
    ],
    nextActions: [
      'Review Ashby product demo to assess UX quality',
      'Connect with Chris Lee on LinkedIn for design team insights',
      'Monitor Staff PD role application window',
    ],
  },

  lastUpdated: '2026-02-19',
  sources: [
    { title: 'Ashby Official Website', url: 'https://www.ashbyhq.com' },
    { title: 'Ashby Series D Announcement', url: 'https://www.ashbyhq.com/blog/culture/series-d' },
    { title: 'Ashby Series C Announcement', url: 'https://www.ashbyhq.com/blog/culture/series-c' },
    { title: 'TechCrunch: Ashby injects recruiting with AI', url: 'https://techcrunch.com/2024/06/03/ashby-injects-recruiting-with-a-dose-of-ai/' },
    { title: 'Crunchbase: Ashby $50M Series D', url: 'https://news.crunchbase.com/venture/ai-powered-hr-platform-ashby-raise/' },
    { title: 'Ashby Careers — Senior & Staff PD roles verified', url: 'https://jobs.ashbyhq.com/ashby' },
    { title: 'Ashby Design Team Page', url: 'https://www.ashbyhq.com/team/design' },
    { title: 'Glassdoor: Ashby Reviews', url: 'https://www.glassdoor.com/Reviews/Ashby-Reviews-E6016688.htm' },
    { title: 'Ashby Senior Product Designer Role', url: 'https://jobs.ashbyhq.com/ashby/f40ef345-82a8-4956-9150-193b4fdf8183' },
    { title: 'Ashby Staff Product Designer Role', url: 'https://jobs.ashbyhq.com/ashby/2373fcd5-144b-4d66-a98b-dd0efb4eb9d1' },
  ],
};
