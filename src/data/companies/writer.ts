import { Company } from '../types';

export const writer: Company = {
  id: 'writer',
  name: 'Writer',
  description: 'Full-stack enterprise generative AI platform with proprietary Palmyra LLMs, Knowledge Graph, and AI agent orchestration. Serves 300+ enterprises including Accenture, Uber, Vanguard, and L\'Oreal.',
  website: 'https://writer.com',
  screenshot: '/screenshots/writer-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  // OG Image
  ogImage: '/og-images/writer-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'productivity' as const,

  industries: ['infrastructure', 'productivity'],

  stage: 'Series C',
  valuation: '$1.9B (2024)',
  totalFunding: '$326M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5M', date: '2020-01', leadInvestors: ['Aspect Ventures'] },
    { stage: 'Series A', amount: '$21M', date: '2021-11', valuation: 'Unknown', leadInvestors: ['Insight Partners'] },
    { stage: 'Series B', amount: '$100M', date: '2023-09', valuation: '$500M', leadInvestors: ['ICONIQ Growth'] },
    { stage: 'Series C', amount: '$200M', date: '2024-11', valuation: '$1.9B', leadInvestors: ['Premji Invest', 'Radical Ventures', 'ICONIQ Growth'] },
  ],
  revenue: '$47M ARR (Nov 2024), 194% YoY growth',
  growth: '194% YoY ARR growth ($16M→$47M). 160% NRR. Expanding to healthcare, retail, financial services. AI HQ + Agent platform launched 2025.',
  customers: 'Accenture, Uber, Vanguard, L\'Oreal, Salesforce, Spotify, Mars, Marriott, Prudential, Intuit',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '$2M (2022) → $16M (2023) → $47M (Nov 2024) = 194% YoY',
    userGrowth: '300+ enterprise customers (Accenture, Uber, Vanguard, L\'Oreal, Salesforce, Spotify)',
    signals: [
      '$200M Series C at $1.9B valuation (Nov 2024)',
      '160% net revenue retention — customers expand from $200K to $1M+',
      'CNBC Disruptor 50 (2025)',
      'AI HQ + Writer Agent platform launched 2025',
      'Global expansion: Singapore, Dublin, Chicago, Austin offices (Mar 2025)',
      'Palmyra X5 1M-token model at 75% lower cost than GPT-4',
      'Forrester TEI: 333% ROI over 3 years for enterprise customers',
    ],
    tam: '$93B (business process automation) / $12.6B (AI writing assistant by 2033)',
    marketShare: '<1% of broad TAM — significant headroom',
    ceiling: 'Mid-stage: Platform expanding from writing to full enterprise AI agent orchestration',
    tailwinds: ['Enterprise AI agent adoption accelerating', 'Content generation demand', 'Agentic AI becoming enterprise standard', 'Proprietary LLMs = cost advantage'],
    headwinds: ['Grammarly ($700M+ ARR) dominance', 'OpenAI/Anthropic enterprise features', 'Model commoditization from open-source', 'Software stock selloff from foundation model competition'],
    moatType: 'switching-costs',
    moatStrength: 'Medium: Knowledge Graph customization + enterprise integrations + proprietary models create stickiness',
  },

  competitors: [
    {
      name: 'Grammarly',
      description: '$13B valuation, $700M+ ARR, 40M DAU. Evolving from writing assistant to AI productivity platform via Coda acquisition.',
      whyTheyWin: '20+ year brand recognition, massive consumer base converting to enterprise, $1B non-dilutive funding from General Catalyst',
    },
    {
      name: 'Jasper',
      description: '$1.5-1.8B valuation, $88M ARR, 70K+ paying customers. Marketing-focused AI content platform.',
      whyTheyWin: 'Strong marketing vertical focus, established enterprise customer base, dedicated marketing workflow',
    },
    {
      name: 'Copy.ai',
      description: '$24M raised, 17M users. Pivoted from copywriting to GTM AI platform. 480% revenue growth in 2024.',
      whyTheyWin: 'GTM-specific workflows, aggressive pivot to enterprise, lower price point',
    },
    {
      name: 'Typeface',
      description: '$1B valuation, ~$165M raised. Creative content generation for enterprises.',
      whyTheyWin: 'Creative/visual content focus, strong brand partnerships',
    },
  ],
  marketPosition: 'Leading full-stack enterprise AI platform at $1.9B valuation. Only major player with proprietary LLMs (Palmyra family) + Knowledge Graph + agent orchestration. 300+ enterprise customers. Positioned between Grammarly (writing) and broader enterprise AI automation.',
  moat: [
    'Proprietary Palmyra LLM family trained at 85% lower cost than comparable models',
    'Knowledge Graph with 86% accuracy on RobustQA benchmarks',
    '160% NRR — deep enterprise integrations create switching costs',
    'SOC 2 Type II, HIPAA, PCI compliance certifications',
    'Zero data retention policy — critical for regulated enterprises',
    'Domain-specific models: Palmyra Fin (CFA Level III passing), Palmyra Med (healthcare)',
  ],
  vsGiants: 'Writer competes through vertical specialization and enterprise trust. Palmyra models cost 75-85% less than GPT-4 equivalents. Full-stack approach (model + platform + agents) vs. OpenAI/Anthropic API-only. SOC 2/HIPAA/PCI compliance and zero data retention differentiate in regulated industries. Risk: foundation models adding enterprise features directly.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product: Writer builds its own LLMs (Palmyra family), Knowledge Graph, and AI agent platform. Every product surface is AI-native — from content generation to workflow automation to enterprise governance.',
  aiDesignChallenges: [
    'Designing AI agent orchestration UX for non-technical enterprise users',
    'Visualizing Knowledge Graph relationships and semantic connections intuitively',
    'Building trust and transparency when AI generates mission-critical enterprise content',
    'Designing multi-agent workflow interfaces where users maintain control',
    'Creating enterprise governance dashboards for AI usage, compliance, and ROI tracking',
    'Cross-platform consistency: desktop, web, Figma plugin, browser extensions',
  ],

  founders: [
    {
      name: 'May Habib',
      role: 'Co-founder & CEO',
      background: 'Harvard (Economics, Near Eastern Languages). Lehman Brothers, Mubadala. Co-founded Qordoba (enterprise localization, 2015-2020). Pivoted to Writer in Sep 2020. Named CNBC Disruptor 50 CEO. Lebanese-Canadian immigrant. Philosophy: "Writing is the last unstructured business process."',
    },
    {
      name: 'Waseem Alshikh',
      role: 'Co-founder & CTO',
      background: 'Damascus Polytechnic University (Electronics), Beirut Arab University (CS). Ranked #1 nationally in Syria CS competitions. Co-founded Qordoba with May (2015-2020). Syrian immigrant who learned English through building summarization tools. Trains Palmyra models at fraction of industry cost ($700K vs $4.6M for comparable OpenAI models).',
    },
  ],
  whyBuilding: 'May and Waseem spent 10+ years solving enterprise language problems — from localization at Qordoba to generative AI at Writer. The 2017 "Attention Is All You Need" paper convinced them to pivot from translation to content creation. May\'s thesis: "We wanted to go from editing content to creating content, from a place of trust, not weirdness." They saw Grammarly\'s $13B valuation as proof of market demand, not a deterrent.',
  beliefs: [
    'Writing is the last unstructured business process — AI can structure it',
    'Enterprises need proprietary models, not general-purpose APIs, for compliance-critical work',
    'Execution is going from scarce and expensive to programmatic and on-demand',
    'Build for trust, not weirdness — enterprise AI must feel reliable, not magical',
    'Connect, Challenge, Own — founders deliberately debate publicly to reduce politics',
  ],
  designPhilosophy: 'No public design philosophy documented. Job descriptions emphasize converting "complex AI capabilities into intuitive, delightful designs." Company values (Connect, Challenge, Own) suggest a culture of healthy debate. Design appears embedded in Engineering, Product & Design department rather than as a standalone function.',

  greenFlags: [
    'Full-stack AI company building proprietary models (Palmyra family)',
    '194% YoY revenue growth with 160% NRR',
    'CNBC Disruptor 50 recognition (2025)',
    'Impressive founder backgrounds (Qordoba pivot, immigrant resilience)',
    '$157K-$250K compensation with equity at $1.9B valuation',
    '300+ enterprise customers including Fortune 500',
    'Global expansion across 7+ offices',
    'Forrester-validated 333% ROI for customers',
    'Small design team = high individual impact potential',
  ],
  redFlags: [
    'Glassdoor 2.8/5 WLB — "culture of toxicity," "fear-based culture," "finger pointing"',
    'No public design leadership (VP/Head/Director of Design unknown)',
    'Design culture completely unknown — no design blog, no public design writing',
    'Intense competition: Grammarly 15x revenue, OpenAI/Anthropic entering enterprise',
    'Foundation model commoditization could undermine proprietary model advantage',
    '40x ARR multiple at $1.9B — aggressive valuation requiring sustained hypergrowth',
    'Conflicting ARR data across sources ($47M vs $84M for 2024)',
  ],

  designTeam: {
    designHead: 'Unknown — Director of Product Design exists (per job listing) but not publicly identified',
    teamSize: '5-15 designers estimated within 400-500 core employees',
    notableMembers: [],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent orchestration and workflow automation design',
        'Knowledge Graph interaction and query design',
        'Multi-agent collaboration interfaces',
        'Enterprise governance and compliance UX',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI output quality assessment and feedback loops',
        'Content compliance and brand voice evaluation',
        'Agent performance monitoring and observability',
        'Enterprise ROI tracking and analytics dashboards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI Studio drag-and-drop builder for custom AI applications',
        'Writer Agent unified intelligent interface',
        'Cross-platform design: desktop, web, Figma plugin, extensions',
        'Design system components and enterprise-grade patterns',
        'Enterprise onboarding and activation flows',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise content teams, marketing ops, and business operations at Fortune 500 companies needing AI-powered workflows',
    secondary: 'IT and compliance teams deploying AI agents across the organization while maintaining governance and security',
  },
  userProblems: [
    'Maintaining consistent brand voice across hundreds of content creators is impossible manually',
    'Content compliance and legal review slows down marketing velocity',
    'Enterprise workflows still rely on manual processes, spreadsheets, and fragmented tools',
    'Institutional knowledge is siloed in individuals and lost during turnover',
    'Deploying AI agents across an enterprise requires engineering resources most teams lack',
  ],

  designerLinks: [
    {
      name: 'Writer Careers',
      role: 'Careers Page',
      platform: 'careers',
      url: 'https://writer.com/company/careers/',
      description: 'Open roles at Writer',
    },
    {
      name: 'Writer Ashby Jobs',
      role: 'Job Board',
      platform: 'careers',
      url: 'https://jobs.ashbyhq.com/writer',
      description: 'All open positions on Ashby',
    },
    {
      name: 'May Habib',
      role: 'CEO & Co-founder',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/mayhabib/',
      description: 'Writer CEO, frequent speaker on enterprise AI strategy',
    },
    {
      name: 'Waseem Alshikh',
      role: 'CTO & Co-founder',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/waseemalshikh/',
      description: 'Writer CTO, builds Palmyra LLM family',
    },
    {
      name: 'Kevin Chung',
      role: 'Chief Strategy Officer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/thekevinchung/',
      description: 'Ex-Miro VP, ex-Dropbox — leads GTM and strategy',
    },
    {
      name: 'Diego Lomanto',
      role: 'CMO',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/diegolomanto/',
      description: '20+ years B2B marketing and product experience',
    },
  ],

  openRoles: [],

  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'negative',
      rating: 2.8,
      content: 'Work-life balance rated 2.8/5. Reviews mention "no work life balance, being on fire all the time" and "culture of toxicity." 67% of employees would recommend to a friend.',
      url: 'https://www.glassdoor.com/Reviews/Writer-Reviews-E4046687.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: '"Tough place to work for most people but promising vision." Team enablement and company operations described as "very immature." Expect to "work through lunch and Slack all night."',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-Writer-E4046687-RVW97637074.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: '"Amazing company and leadership with visionary AI tech." Culture and values rated 3.7/5. Strong vision and technology recognized even by critical reviewers.',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-Writer-E4046687-RVW95164716.htm',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Company values: Connect, Challenge, Own. Founders deliberately debate publicly to build trust and reduce politics. "This trust battery is infinite" — May Habib.',
      url: 'https://writer.com/company/about/',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Full-stack AI (own LLMs + platform + agents) = rare learning opportunity',
      '194% YoY growth, 160% NRR, $1.9B valuation',
      '$157K-$250K compensation + equity',
      'Small design team = high individual influence',
      'Enterprise AI agent design is genuinely novel',
      '300+ Fortune 500 customers using the product',
    ],
    whyNot: [
      'Glassdoor 2.8/5 WLB — "culture of toxicity" concerns',
      'No public design leadership or design culture',
      'Grammarly has 15x the revenue, OpenAI/Anthropic are entering enterprise',
      'Foundation model commoditization could undermine core value prop',
      'Hybrid work policy with PST timezone overlap required',
    ],
    nextActions: [
      'Identify Director of Product Design (not publicly known)',
      'Try Writer Starter Plan ($29/user/month) to evaluate product',
      'Monitor Glassdoor for culture improvements',
      'Track ARR clarification ($47M vs $84M conflicting data)',
      'Watch Anthropic/OpenAI enterprise expansion',
    ],
  },

  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Writer Series C Press Release', url: 'https://writer.com/blog/series-c-funding-writer-press-release/' },
    { title: 'TechCrunch: Writer $200M at $1.9B', url: 'https://techcrunch.com/2024/11/12/generative-ai-startup-writer-raises-200m-at-a-1-9b-valuation/' },
    { title: 'Contrary Research: Writer Business Breakdown', url: 'https://research.contrary.com/company/writer' },
    { title: 'Sacra: Writer Revenue & Funding', url: 'https://sacra.com/c/writer/' },
    { title: 'CNBC Disruptor 50: Writer', url: 'https://www.cnbc.com/2025/06/10/writer-cnbc-disruptor-50.html' },
    { title: 'Insight Partners: May Habib vs $13B Incumbent', url: 'https://www.insightpartners.com/ideas/may-habib-is-challenging-a-13-billion-incumbent-with-writer/' },
    { title: 'First Round: Scaling Enterprise AI — May Habib', url: 'https://review.firstround.com/podcast/scaling-and-selling-ai-products-for-enterprise-may-habib-co-founder-and-ceo-of-writer/' },
    { title: 'VentureBeat: Writer AI HQ Platform', url: 'https://venturebeat.com/ai/writer-unveils-ai-hq-platform-betting-on-agents-to-transform-enterprise-work' },
    { title: 'VentureBeat: Palmyra X5 75% Lower Cost', url: 'https://venturebeat.com/ai/writer-releases-palmyra-x5-delivers-near-gpt-4-performance-at-75-lower-cost' },
    { title: 'Glassdoor: Writer Reviews', url: 'https://www.glassdoor.com/Reviews/Writer-Reviews-E4046687.htm' },
    { title: 'Writer Blog: Humans of AI — Waseem AlShikh', url: 'https://writer.com/blog/humans-of-ai-waseem-alshikh/' },
    { title: 'Writer Blog: Enterprise AI Future Fireside', url: 'https://writer.com/blog/enterprise-ai-future-fireside/' },
    { title: 'Writer Blog: Palmyra LLMs', url: 'https://writer.com/blog/palmyra/' },
    { title: 'Writer Blog: AI HQ Launch', url: 'https://writer.com/blog/writer-ai-hq-press-release/' },
    { title: 'Accenture: Investment in Writer', url: 'https://newsroom.accenture.com/news/2023/accenture-invests-in-writer-to-accelerate-enterprise-use-of-generative-ai' },
  ],
};
