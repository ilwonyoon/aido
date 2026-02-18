import { Company } from '../types';

export const harvey: Company = {
    id: 'harvey',
    name: 'Harvey',
    description: 'AI copilot for elite law firms, transforming how legal professionals work with AI-powered research, drafting, and analysis.',
    website: 'https://harvey.ai',
    screenshot: '/screenshots/harvey-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/harvey-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['enterprise'],
  category: 'vertical-saas' as const,

  industries: ['legal'],

    // Business
    stage: 'Series F',
    valuation: '$8B (Dec 2025), reportedly raising at $11B (Feb 2026)',
    totalFunding: '$1.02B',
    fundingHistory: [
      { stage: 'Seed', amount: '$5M', date: '2022-11', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series A', amount: '$21M', date: '2023-03', valuation: '$150M', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$80M', date: '2023-12', valuation: '$715M', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series C', amount: '$100M', date: '2024-05', valuation: '$1.5B', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series D', amount: '$300M', date: '2025-02', valuation: '$3B', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series E', amount: '$300M', date: '2025-06', valuation: '$5B', leadInvestors: ['Kleiner Perkins', 'Coatue'] },
      { stage: 'Series F', amount: '$160M', date: '2025-12', valuation: '$8B', leadInvestors: ['Andreessen Horowitz'] },
    ],
    revenue: '$190M ARR (end of 2025)',
    growth: '$50M → $190M ARR in 2025 (3.9x YoY). Hit $100M ARR in Aug 2025, 3 years after founding.',
    runway: 'Strong — $1B+ raised, highly capitalized',
    customers: '1,000+ customers in 59+ countries, 100,000+ lawyers, 42% of AmLaw 100 firms. Notable: A&O Shearman, Latham & Watkins, PwC, KKR, Comcast, Verizon.',

    // Competition
    competitors: [
      {
        name: 'Thomson Reuters CoCounsel',
        description: 'Legal AI by Thomson Reuters, integrated with Westlaw. Received second-highest scores in major GenAI benchmarking study.',
        whyTheyWin: 'Deep legal content integration, trusted brand, 1M+ lawyer distribution, Westlaw data moat',
      },
      {
        name: 'Legora (fka Leya)',
        description: 'Swedish legal AI startup targeting European market, $1.8B valuation (Oct 2025)',
        whyTheyWin: 'European market focus, Bird & Bird and Mishcon de Reya partnerships, strong regional foothold',
      },
      {
        name: 'Clio',
        description: 'Full practice management platform with AI, acquired vLex for legal content',
        whyTheyWin: 'SMB law firm dominance, full workflow suite, ~$200M+ ARR',
      },
      {
        name: 'Anthropic Claude (Legal Plugin)',
        description: 'Foundation model provider launched legal plugin Feb 2026, caused legal-tech stock meltdown',
        whyTheyWin: 'Direct model access, lower cost, brand recognition, both supplier and competitor to Harvey',
      },
      {
        name: 'Spellbook',
        description: 'AI contract drafting and review for mid-market firms',
        whyTheyWin: 'Focused product, easier to adopt for mid-market firms, lower price point',
      },
    ],
    marketPosition: 'Leader in enterprise legal AI, dominant in AmLaw 100. Highest overall score in first major industry GenAI benchmarking study (94.8% accuracy in document Q&A).',
    moat: [
      'Elite firm partnerships: 42% of AmLaw 100, A&O Shearman co-development model',
      'LexisNexis strategic alliance: Shepard\'s Citations and primary law integration',
      '18,000+ custom workflows built by customers via Workflow Builder',
      '100,000+ lawyers generating usage data and feedback',
      'Sequoia/KP/a16z-backed with $1B+ war chest',
      'Aderant partnership: first AI-to-business-of-law full lifecycle integration',
    ],
    vsGiants: 'Harvey built legal-specific AI vs generic ChatGPT/Claude. But Anthropic launched a legal plugin in Feb 2026, becoming both supplier and direct competitor. Harvey\'s defense: domain workflows, LexisNexis content, and 100K+ lawyer user base.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator applied to established legal research market. Balances risk and reward on proven workflow.',
    aiDesignChallenges: [
      'Trust & verification: lawyers need to verify AI outputs, how to design for confidence?',
      'Complex legal reasoning: designing interfaces for multi-step legal analysis',
      'Citation & sources: surfacing sources for AI-generated legal arguments',
      'Workflow integration: embedding AI into existing legal processes',
      'Role-based AI: different AI behaviors for partners vs associates',
      'Multi-agent orchestration: designing UX for AI agents collaborating on matters',
      'Client-facing AI: Shared Spaces puts AI between lawyers and clients',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Gabriel Pereyra',
        role: 'Co-founder & President',
        background: 'Research Scientist at Google DeepMind and Meta FAIR. PhD in ML. Built language models before founding Harvey. Roommate of Winston Weinberg.',
      },
      {
        name: 'Winston Weinberg',
        role: 'Co-founder & CEO',
        background: 'First-year litigation associate at O\'Melveny & Myers when he co-founded Harvey. Stanford Law. Featured on Sequoia Training Data and Grit podcasts.',
      },
    ],
    whyBuilding: 'Weinberg experienced legal work inefficiency firsthand as a first-year litigator. Pereyra had the AI expertise from DeepMind. Together as roommates in a SF apartment, they saw legal as the perfect vertical for AI: high-value, knowledge-intensive, massive market ($1T+ legal industry).',
    beliefs: [
      'AI will augment lawyers, not replace them (at least for the next decade)',
      'Legal AI needs to be vertical-specific, not generic',
      'Trust is everything: lawyers need explainable, verifiable AI',
      'Enterprise-first: serve elite firms, not consumers',
      'Build deep partnerships with law firms to understand real workflows',
      'Success requires deep process expertise that does not exist online',
    ],
    designPhilosophy: 'Design with domain awareness: styles deeply familiar yet unmistakably modern. Make the complex feel effortless — design should never get in the way of thought. Design with intention: every visual and structural choice is deliberate.',
    greenFlags: [
      'Founders are roommates turned billionaires — strong partnership',
      'Elite firm adoption: 42% of AmLaw 100, A&O Shearman co-development',
      '$190M ARR with 3.9x YoY growth — exceptional revenue velocity',
      'LexisNexis strategic alliance gives content moat',
      'Investing in design: hiring Director of Product Design + Head of UXR',
      'Published design blog and rebuilt design system from scratch in 2025',
      'Expanding beyond legal into tax, accounting, professional services',
    ],
    redFlags: [
      'Anthropic launched legal plugin Feb 2026 — foundation models entering directly',
      'Glassdoor 3.4/5 work-life balance, "toxic culture" and "pressure cooker" reviews',
      'No VP/Head of Design yet — Director being hired, design may lack C-suite voice',
      '$11B valuation on $190M ARR = 58x revenue multiple — needs sustained hypergrowth',
      'Enterprise-only: $14,400/seat/year with 20-seat minimum limits market',
      'Legal accuracy requirements are extremely high — AI errors could be catastrophic',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~15-25 (estimated, growing)',
      notableMembers: [
        { name: 'Shawn Farsai', role: 'Brand & Design Lead (first design hire, Sep 2023)' },
        { name: 'Bjorn Rostad', role: 'Product Designer (ex-Robinhood, Dropbox)' },
        { name: 'Ryan Samii', role: 'Head of Product Innovation (joined Dec 2025 from Hebbia)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing multi-step legal reasoning flows',
          'Building AI behavior for different legal tasks (research vs drafting vs review)',
          'Defining role-based AI: different behaviors for partners vs associates',
          'Creating feedback loops for lawyers to improve AI accuracy',
          'Designing multi-agent workflow orchestration',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Designing confidence scores for AI-generated legal arguments',
          'Building verification workflows: how lawyers check AI outputs',
          'Creating citation/source tracking systems with Shepard\'s Citations',
          'Defining quality metrics for legal AI (accuracy, relevance, completeness)',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Workflow Builder: 18,000+ custom workflows need design patterns',
          'Shared Spaces: client-facing collaboration on matters',
          'Mobile experience: voice-to-prompt, Magic Prompt',
          'Governance dashboards: usage analytics by attorney, matter, practice area',
          'Integration with LexisNexis, Aderant, and practice management tools',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Lawyers and legal professionals at elite law firms (AmLaw 100) and corporate legal departments (Fortune 500)',
        secondary: 'Compliance teams, contract managers, legal operations, and expanding to tax/accounting professionals',
    },
    userProblems: [
        'Legal research requires hours of manual search through case law and statutes',
        'Drafting legal documents from scratch or templates is time-consuming and repetitive',
        'Junior associates spend billable hours on routine tasks that could be automated',
        'Reviewing contracts and legal documents for issues requires meticulous manual reading',
        'Law firms face pressure to reduce costs while maintaining quality and accuracy',
        'Knowledge stays siloed in individual lawyers\' heads rather than shared across the firm',
    ],

    // Designer Links
    designerLinks: [
      {
        name: 'Shawn Farsai',
        role: 'Brand & Design Lead',
        platform: 'twitter',
        url: 'https://x.com/ShawnFarsai',
        description: 'First design hire at Harvey. Posts about design, brand, and AI UX patterns.',
      },
      {
        name: 'Shawn Farsai',
        role: 'Brand & Design Lead',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/shawn-farsai-42746a69/',
      },
      {
        name: 'Bjorn Rostad',
        role: 'Product Designer',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/bjornrostad',
        description: 'Leads design of core Harvey features. Ex-Robinhood, Dropbox.',
      },
      {
        name: 'Aatish Nayak',
        role: 'VP of Product',
        platform: 'twitter',
        url: 'https://x.com/nayakkayak',
        description: 'Head of Product at Harvey. Oversees product vision, strategy, design.',
      },
      {
        name: 'Harvey Design Blog',
        role: 'Design Team',
        platform: 'blog',
        url: 'https://www.harvey.ai/blog/how-we-approach-design-at-harvey',
        description: 'How Harvey approaches design: domain awareness, effortless complexity, intentional design.',
      },
    ],

    // Open Roles
    openRoles: [
      {
              title: 'Director, Product Design',
              location: 'San Francisco / New York / Remote',
              url: 'https://jobs.ashbyhq.com/harvey',
              level: 'Lead',
              type: 'full-time',
              postedDate: '2026-02',
              aboutRole: 'Lead and scale Harvey\'s product design function across the organization.',
              whyInteresting: 'Building the design org from the ground up at an $11B legal AI company. High influence on design culture and process.',
            },
      {
              title: 'Head of UX Research',
              location: 'San Francisco / New York / Remote',
              url: 'https://jobs.ashbyhq.com/harvey',
              level: 'Lead',
              type: 'full-time',
              postedDate: '2026-02',
              aboutRole: 'Establish and lead UX research function at Harvey.',
              whyInteresting: 'Building UXR from scratch at a company with 100,000+ lawyer users. Unprecedented access to high-stakes professional workflows.',
            }
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.3,
        content: 'Career opportunities rated 4.3/5. People are exceptionally smart, driven, and supportive. Building real AI for professionals, not just another chatbot.',
        url: 'https://www.glassdoor.com/Reviews/HARVEY-Reviews-E8126873.htm',
      },
      {
        source: 'glassdoor',
        sentiment: 'negative',
        rating: 3.4,
        content: 'Work-life balance rated 3.4/5. Intensely political culture, unnecessarily frantic pace, no clear standard for what is right or expected. Pressure cooker environment.',
        url: 'https://www.glassdoor.com/Reviews/HARVEY-Reviews-E8126873.htm',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: '75% would recommend to a friend. Culture is intense with long working hours but entirely self-driven. Not a place if you are looking for a typical 9-to-5. Internal politics can be tricky to navigate.',
        url: 'https://www.glassdoor.com/Reviews/HARVEY-Reviews-E8126873.htm',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Founders started as roommates in SF apartment, now running an $11B company. Mission-driven culture with strong technical talent from DeepMind, Google Brain, Stripe, Tesla Autopilot.',
        url: 'https://www.linkedin.com/company/harvey-ai',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$50M → $190M ARR in 2025 (3.9x YoY)',
      userGrowth: '100,000+ lawyers, weekly active users grew 4x YoY',
      signals: [
        '$11B valuation (pending), up from $150M in Mar 2023 (73x in ~3 years)',
        '$760M raised in 2025 alone across 3 rounds (Series D, E, F)',
        '1,000+ customers in 59+ countries',
        'Acquired Hexus (Jan 2026) for in-house legal expansion',
        'LexisNexis strategic alliance for content integration',
        'Hiring Director of Product Design + Head of UXR — design org scaling',
        'Expanding beyond legal into tax, accounting, professional services',
      ],

      tam: '$1T+ (Global legal services market). Professional services TAM: $5T+. Knowledge worker TAM: $50T+.',
      marketShare: '<0.1% of legal services TAM — extremely early innings',
      ceiling: 'Early innings: Legal AI adoption just starting. Harvey targeting top 1% first (AmLaw 100), then expanding down-market and into adjacent professional services.',
      tailwinds: [
        'Law firms under pressure to improve efficiency and reduce costs',
        'Precedent work (research, drafting) is highly automatable',
        'Elite law firm adoption creates credibility cascade',
        'High willingness to pay ($1,200+/lawyer/month at elite firms)',
        'LexisNexis alliance gives content moat competitors cannot match',
        'PwC partnership provides template for horizontal expansion',
      ],
      headwinds: [
        'Anthropic launched legal plugin Feb 2026 — foundation models entering directly',
        'Thomson Reuters CoCounsel has distribution to 1M+ lawyers',
        'Frontier reasoning models commoditizing legal reasoning on benchmarks',
        'Legal accuracy requirements are extremely high (liability risk)',
        'Conservative legal industry = slow adoption cycles',
        '$11B valuation requires sustained hypergrowth to justify multiples',
      ],

      moatType: 'switching-costs',
      moatStrength: 'Medium-High: 18,000+ custom workflows, LexisNexis content integration, 100K+ lawyer user base, and elite firm partnerships create significant switching costs. But model commoditization is a real risk.',
    },

    // My Tracking
    tracking: {
      status: 'researching',
      fitScore: 8,
      whyJoin: [
        'AI-native product with genuinely novel design challenges (trust, verification, citations)',
        '$190M ARR with 3.9x growth — strong business fundamentals',
        'Elite customers: 42% of AmLaw 100, A&O Shearman, Latham & Watkins',
        'Strong founders: Pereyra (DeepMind) + Weinberg (O\'Melveny)',
        'Well-funded: $1B+ raised, $11B valuation (pending)',
        'Design org scaling: Director + Head of UXR being hired',
        'Published design blog with clear design principles',
      ],
      whyNot: [
        'Glassdoor 3.4/5 WLB, "pressure cooker" and "toxic culture" reviews',
        'No VP/Head of Design yet — design may lack C-suite voice',
        'Anthropic legal plugin is direct competitive threat from supplier',
        'Enterprise-only with $14,400/seat/year limits design innovation scope',
        'Legal domain requires deep domain learning curve',
      ],
      nextActions: [
        'Monitor Director of Product Design hire — evaluate the leader before applying',
        'Apply for Staff Product Designer role if interested in immediate IC opportunity',
        'Follow Shawn Farsai on Twitter for design team culture signals',
        'Read both Harvey design blog posts for design philosophy',
        'Track Anthropic legal plugin adoption as risk indicator',
      ],
      notes: 'Deep research completed 2026-02-11. See src/data/deep-research/harvey.md for full report. Score: 7.25/10. Strong business but design org still formalizing. Key risk: Anthropic entering legal AI directly.',
    },

    // Meta
    lastUpdated: '2026-02-18',
    sources: [
      { title: 'Harvey reportedly raising at $11B valuation', url: 'https://techcrunch.com/2026/02/09/harvey-reportedly-raising-at-11b-valuation-just-months-after-it-hit-8b/' },
      { title: 'Legal AI startup Harvey confirms $8B valuation', url: 'https://techcrunch.com/2025/12/04/legal-ai-startup-harvey-confirms-8b-valuation/' },
      { title: 'Inside Harvey: How a first-year associate built one of SV\'s hottest startups', url: 'https://techcrunch.com/2025/11/14/inside-harvey-how-a-first-year-legal-associate-built-one-of-silicon-valleys-hottest-startups/' },
      { title: 'Harvey revenue, valuation & funding — Sacra', url: 'https://sacra.com/c/harvey/' },
      { title: 'Harvey hits $100M ARR — CNBC', url: 'https://www.cnbc.com/2025/08/04/legal-ai-startup-harvey-revenue.html' },
      { title: 'LawNext: From Roommates to Billionaires', url: 'https://www.lawnext.com/2026/01/lawnext-from-roommates-to-billionaires-harveys-founders-gabriel-pereyra-and-winston-weinberg-on-building-ai-infrastructure-for-law.html' },
      { title: 'How We Approach Design at Harvey', url: 'https://www.harvey.ai/blog/how-we-approach-design-at-harvey' },
      { title: 'Rebuilding Harvey\'s Design System', url: 'https://www.harvey.ai/blog/rebuilding-harveys-design-system-from-the-ground-up' },
      { title: 'LexisNexis and Harvey Strategic Alliance', url: 'https://www.harvey.ai/blog/lexisnexis-harvey-strategic-alliance' },
      { title: 'Anthropic unveils Claude legal plugin', url: 'https://legaltechnology.com/2026/02/03/anthropic-unveils-claude-legal-plugin-and-causes-market-meltdown/' },
      { title: 'Harvey acquires Hexus', url: 'https://techcrunch.com/2026/01/23/legal-ai-giant-harvey-acquires-hexus-as-competition-heats-up-in-legal-tech/' },
      { title: 'Glassdoor: HARVEY Reviews', url: 'https://www.glassdoor.com/Reviews/HARVEY-Reviews-E8126873.htm' },
    ],
  };
