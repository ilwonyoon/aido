import { Company } from '../types';

export const legora: Company = {
  id: 'legora',
  name: 'Legora',
  description: 'AI-native workspace for legal professionals. Empowers lawyers to review and research faster, draft smarter, and advise with precision using collaborative AI.',
  website: 'https://legora.com',
  headquarters: 'Stockholm, Sweden',
  region: 'other-intl' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/legora-og.webp',

  // Category
  category: 'vertical-saas',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'search-retrieval'],
  markets: ['enterprise', 'b2b'],
  industries: ['legal'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: '$1.8B (Oct 2025)',
  totalFunding: '$266M',
  fundingHistory: [
    { stage: 'Seed', amount: '$10.5M', date: '2024-05', leadInvestors: ['Benchmark', 'Y Combinator'] },
    { stage: 'Series A', amount: '$25M', date: '2024-07', leadInvestors: ['Benchmark', 'Redpoint Ventures'] },
    { stage: 'Series B', amount: '$80M', date: '2025-05', valuation: '$675M', leadInvestors: ['ICONIQ', 'General Catalyst'] },
    { stage: 'Series C', amount: '$150M', date: '2025-10', valuation: '$1.8B', leadInvestors: ['Bessemer Venture Partners'] },
  ],
  revenue: '$5-40M ARR (estimated, not disclosed)',
  growth: 'Customer base 250 → 400+ in 5 months, markets 20 → 40+',
  runway: 'Strong — $266M raised, unicorn status',
  customers: '400+ law firms, financial institutions, and multinational corporations across 40+ markets',

  // Competition
  competitors: [
    {
      name: 'Harvey',
      description: 'Legal AI platform, $8B valuation, ~$1B total funding, US-focused elite law firm partnerships',
      whyTheyWin: 'Massive funding advantage ($1B vs $266M), OpenAI partnership, established US market dominance with top-tier firms like A&O',
    },
    {
      name: 'Luminance',
      description: 'AI for legal document review, due diligence, and e-discovery across 80+ languages',
      whyTheyWin: 'London-based with strong EU/UK presence, 80+ language support, deep specialization in due diligence workflows',
    },
    {
      name: 'Clio',
      description: 'Cloud-based legal practice management with AI (Clio Duo), $900M funding',
      whyTheyWin: 'Dominant in SMB legal market, comprehensive practice management suite, massive $900M raise for AI expansion',
    },
    {
      name: 'Thomson Reuters (CoCounsel)',
      description: 'Acquired Casetext for $650M, integrated AI into Westlaw and legal research',
      whyTheyWin: 'Incumbent distribution to 90%+ of law firms, trusted brand in legal research, bundled with existing subscriptions',
    },
  ],
  marketPosition: 'Leading European legal AI platform expanding globally; unicorn status with fastest growth trajectory in legal AI',
  moat: [
    'Multi-jurisdictional legal expertise across 40+ markets — hard for US-only competitors to replicate',
    'Tier-1 investor syndicate: Bessemer, ICONIQ, General Catalyst, Benchmark, YC',
    'Enterprise-grade Azure OpenAI integration with regional data residency compliance',
    'Collaborative AI approach: built with lawyers, not just for them',
    'Rapid product iteration and customer feedback loops (features shipped next morning)',
  ],
  vsGiants: 'While Harvey dominates US Big Law with 4x more funding, Legora wins by serving global firms across 40+ jurisdictions. Multi-market legal expertise and EU data compliance create strong differentiation. Not competing head-to-head in US — instead building global platform first.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Native: AI IS the product. The entire platform is built around AI-powered legal workflows — document review, research, drafting, and collaboration are all AI-first. Without AI, the product does not exist.',
  aiDesignChallenges: [
    'Trust design: Lawyers need near-100% accuracy. Designing confidence signals and citation verification UX',
    'Multi-agent UX: Complex multi-document queries using RAG — surfacing results from thousands of documents',
    'Tabular Review: Converting hours of manual document analysis into seconds — designing extraction interfaces',
    'Cross-jurisdiction design: Handling 40+ legal systems with different terminology and workflows',
    'Collaborative AI: Designing human-AI handoff in legal teams where multiple lawyers work on the same matter',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Max Junestrand',
      role: 'CEO & Co-founder',
      background: 'Started Legora at 23 with no legal background. McKinsey, YC startup growth, venture capital experience. Dual degrees in Machine Learning and Business from KTH and Stockholm School of Economics.',
    },
    {
      name: 'Sigge Labor',
      role: 'CTO & Co-founder',
      background: 'Full-stack developer with startup experience. Previously founded a Mexican hops company. Technical co-founder leading engineering.',
    },
    {
      name: 'August Erséus',
      role: 'Co-founder (former CPO)',
      background: 'MSc in Industrial Engineering & Machine Learning from KTH. Led product direction in early stages.',
    },
  ],
  whyBuilding: 'Lawyers spend 60%+ of time on manual, repetitive tasks. Legora aims to give superhuman capabilities to every lawyer, freeing them for strategic advisory work.',
  beliefs: [
    'AI should augment lawyers as an intelligent colleague, not replace them',
    'Legal work requires extreme precision — trust and accuracy are non-negotiable',
    'Build with lawyers, not just for lawyers — co-creation drives product-market fit',
    'Transparency and coachability as founders win customer trust faster than polished pitches',
    'Celebrate right metrics: case studies, upsells, and renewals over raw MRR',
  ],
  designPhilosophy: 'Complex legal workflows transformed into simple, powerful interfaces. AI should feel like a knowledgeable colleague, not a chatbot. Rapid iteration — features shipped next morning based on user feedback.',
  greenFlags: [
    'YC W24 batch — strong network and validation',
    'Tier-1 investor syndicate: Bessemer, ICONIQ, General Catalyst, Benchmark, Redpoint',
    'Unicorn in <2 years from founding — exceptional trajectory',
    'Team from Google, Microsoft, McKinsey, and top-tier law firms',
    'Head of Design hired (Anton Reimertz, ex-Shopify/Tictail) — clear design investment',
    'Actively hiring Senior Product Designer — growing design team',
  ],
  redFlags: [
    'On-site 5 days/week in Stockholm — "pressure cooker" culture reports',
    'Harvey has 4x more funding ($1B+) and established US Big Law partnerships',
    'Legal AI market getting crowded: Harvey, Luminance, Clio, Thomson Reuters all competing',
    'Glassdoor reviews polarized — some mention "toxic cult vibe" and lack of work-life balance',
    'Revenue not publicly disclosed despite unicorn valuation — potential valuation-revenue disconnect',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Anton Reimertz',
    teamSize: '~3-5 (growing)',
    notableMembers: [
      { name: 'Anton Reimertz', role: 'Head of Design (ex-Shopify, Tictail co-founder, Mason co-founder)' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Multi-agent workflow orchestration for complex legal queries',
        'RAG-based document retrieval and citation verification logic',
        'Cross-jurisdiction legal terminology mapping and behavior rules',
        'AI confidence scoring and uncertainty communication',
        'Tabular Review extraction logic from contracts and legal documents',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Legal output accuracy metrics and quality benchmarks',
        'Lawyer feedback integration loops for AI improvement',
        'Citation verification accuracy tracking',
        'User satisfaction scoring across different practice areas',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI-native document review and annotation interface',
        'Legal research dashboard with multi-source synthesis',
        'Microsoft Word add-in for in-workflow AI assistance',
        'Tabular Review: data extraction visualization from multiple documents',
        'Collaboration tools for legal teams working on shared matters',
        'Design system ownership and scaling',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Global law firms (from elite firms like Linklaters, Cleary Gottlieb to mid-size practices)',
    secondary: 'In-house legal teams at financial institutions and multinational corporations',
  },
  userProblems: [
    'Lawyers spend 60%+ of time on repetitive tasks: document review, research, and drafting',
    'Multi-jurisdictional legal work requires expertise across different legal systems and languages',
    'Existing legal AI tools are US-centric and lack multi-market compliance expertise',
    'Manual contract review of large document sets (due diligence) takes hundreds of billable hours',
    'Legal teams need AI that fits into existing workflows (Word, document management) not separate tools',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Anton Reimertz',
      role: 'Head of Design',
      platform: 'twitter',
      url: 'https://x.com/reimrtz',
      description: 'Head of Design at Legora. Previously co-founded Mason, Product Lead at Shopify, first design hire at Tictail.',
    },
    {
      name: 'Anton Reimertz',
      role: 'Head of Design',
      platform: 'linkedin',
      url: 'https://se.linkedin.com/in/anton-reimertz',
      description: 'Design and product leader with 10+ years of experience designing, building, and shipping products.',
    },
    {
      name: 'Anton Reimertz',
      role: 'Head of Design',
      platform: 'blog',
      url: 'https://reimertz.me/',
      description: 'Personal website and portfolio.',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Vision, execution, and culture actually align. CEO has a rare combination of drive, clarity, and empathy. Genuine product-building culture that rewards creativity and ownership.',
      url: 'https://www.glassdoor.com/Reviews/Legora-AB-Reviews-E10689287.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Polarized reviews: some describe "toxic cult vibe" and "pressure cooker" environment. On-site 5 days/week, expectation to stay late. Recruiter reportedly says "if you are looking for work-life balance, Legora is not one."',
      url: 'https://www.glassdoor.com/Reviews/Legora-AB-Reviews-E10689287.htm',
    },
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC W24 batch. CEO Max Junestrand built a $675M company at 25 with no legal background. Team from Google, Microsoft, McKinsey, and top-tier law firms. Gustaf Alstromer as YC partner.',
      url: 'https://www.ycombinator.com/companies/legora',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: '190+ employees and growing. Offices in Stockholm, London, New York, and Sydney. Plans to more than double in size in the year ahead.',
      url: 'https://www.linkedin.com/company/wearelegora/',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Not disclosed publicly (estimated $5-40M ARR range)',
    userGrowth: '250 → 400+ customers in 5 months (May-Oct 2025), markets 20 → 40+',
    signals: [
      'Unicorn in <2 years from founding ($1.8B valuation)',
      '$266M total funding from tier-1 investors',
      'Customer base grew 60% in 5 months (250 → 400+)',
      'Doubled markets served from 20 to 40+ in same period',
      'Plans to more than double team size in 2026',
      'Clients include Linklaters, Cleary Gottlieb, Goodwin, MinterEllison',
      '+3133% search volume growth',
    ],

    tam: '$50B+ (Global legal services market addressable by AI)',
    marketShare: 'Early — competing primarily in European legal AI, expanding globally',
    ceiling: 'Early innings: Most law firms still on manual workflows, legal AI adoption just beginning globally',
    tailwinds: [
      'Legal tech raised $6B in 2025 — massive capital flowing into space',
      'Law firms under increasing pressure to improve efficiency and reduce costs',
      'Multi-jurisdictional expertise creates barrier for US-only competitors',
      'EU data privacy regulations favor European-headquartered providers',
      'AI adoption accelerating across all professional services',
    ],
    headwinds: [
      'Harvey has 4x more funding and $8B valuation with elite US partnerships',
      'Thomson Reuters/LexisNexis incumbents entering with existing distribution',
      'Legal accuracy requirements create extremely high bar for AI quality',
      'Revenue-to-valuation ratio may be stretched — valuation risk',
      'On-site culture in Stockholm may limit global talent acquisition',
    ],

    moatType: 'vertical-specialization',
    moatStrength: 'Strong: Multi-jurisdictional legal expertise across 40+ markets creates compounding advantage. Regional data residency compliance + Azure OpenAI integration. But model capabilities are increasingly commoditized.',
  },

  // Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Unicorn-stage legal AI company with massive growth trajectory',
      'Head of Design from Shopify/Tictail — serious design leadership',
      'AI-native product with genuinely hard design challenges (trust, multi-agent, cross-jurisdiction)',
      'Small design team — high impact and influence on design culture',
      'YC + tier-1 investor network for career growth',
      'Transforming an entire profession — meaningful work',
    ],
    whyNot: [
      'Stockholm-based, on-site 5 days/week — relocation required',
      'Polarized culture reviews — "pressure cooker" environment concerns',
      'Legal domain requires significant learning curve',
      'Harvey dominates US market with 4x more funding',
      'Work-life balance appears to be a known issue',
    ],
    nextActions: [
      'Review Anton Reimertz portfolio and design philosophy',
      'Try Legora product demo to understand the UX',
      'Research Stockholm design community and cost of living',
      'Monitor if remote/hybrid roles open up',
    ],
    notes: 'Formerly known as Leya (rebranded Feb 2025). Fastest-growing legal AI company in Europe. Strong design leadership hire signals investment in design. Culture concerns are a key consideration.',
  },

  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Legora Official Website', url: 'https://legora.com' },
    { title: 'YC Company Profile', url: 'https://www.ycombinator.com/companies/legora' },
    { title: 'SiliconANGLE: Series C $150M', url: 'https://siliconangle.com/2025/10/30/legaltech-ai-startup-legora-raises-150m-1-8b-valuation/' },
    { title: 'Artificial Lawyer: Platform War', url: 'https://www.artificiallawyer.com/2025/10/30/legora-raises-150m-at-1-8bn-platform-war-heats-up/' },
    { title: 'Bloomberg: $1.7B Valuation Talks', url: 'https://www.bloomberg.com/news/articles/2025-09-30/legal-ai-startup-legora-in-talks-to-raise-funding-at-1-7-billion-value' },
    { title: 'Microsoft Customer Story: Azure OpenAI', url: 'https://www.microsoft.com/en/customers/story/23171-legora-azure-openai' },
    { title: 'Senior Product Designer Job', url: 'https://jobs.ashbyhq.com/legora/89073502-e8e3-49d9-ba4b-5642ef1a933d' },
    { title: 'Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/Legora-AB-Reviews-E10689287.htm' },
    { title: 'Growth Journey Blog', url: 'https://jonathanrintala.com/blog/ai-startup-journey-leya-saas-legal-tech/' },
    { title: 'Crunchbase: August Erséus', url: 'https://www.crunchbase.com/person/august-ers%C3%A9us' },
    { title: 'Anton Reimertz LinkedIn (Head of Design)', url: 'https://se.linkedin.com/in/anton-reimertz' },
    { title: 'The Twenty Minute VC: Max Junestrand', url: 'https://www.thetwentyminutevc.com/max-junestrand' },
  ],
};
