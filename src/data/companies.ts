import { Company } from './types';

export const companies: Company[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'AI safety company building Claude, a helpful, harmless, and honest AI assistant.',
    website: 'https://anthropic.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series F',
    valuation: '$183B (Sept 2025)',
    totalFunding: '$27B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$124M', date: '2021-05', leadInvestors: ['Jaan Tallinn', 'Dustin Moskovitz'] },
      { stage: 'Series A', amount: '$580M', date: '2022-04', valuation: '$4B', leadInvestors: ['Spark Capital'] },
      { stage: 'Series B', amount: '$450M', date: '2023-01', valuation: '$5B', leadInvestors: ['Spark Capital'] },
      { stage: 'Series C', amount: '$450M', date: '2023-05', valuation: '$5B', leadInvestors: ['Spark Capital'] },
      { stage: 'Series D', amount: '$2B', date: '2024-03', valuation: '$18B', leadInvestors: ['Google'] },
      { stage: 'Series E', amount: '$4B', date: '2024-11', valuation: '$60B', leadInvestors: ['Lightspeed'] },
      { stage: 'Series F', amount: '$3.5B', date: '2025-09', valuation: '$183B', leadInvestors: ['Lightspeed'] },
    ],
    revenue: '~$7B ARR (Oct 2025)',
    growth: '7x YoY (2024 $1B → 2025 $7B)',
    runway: 'Strong — breakeven 2027, profitable 2028',
    customers: '300,000+ B2B customers',

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'GPT-4/o1 models, ChatGPT, $11B+ ARR',
        whyTheyWin: 'First mover advantage, brand recognition, Microsoft partnership ($13B investment)',
      },
      {
        name: 'Google DeepMind',
        description: 'Gemini models, integrated into Google products',
        whyTheyWin: 'Unlimited compute resources, distribution through Google products (2B+ users)',
      },
      {
        name: 'Meta AI',
        description: 'Llama open-source models',
        whyTheyWin: 'Open-source strategy captures developer mindshare, no API costs',
      },
    ],
    marketPosition: '#1 in Enterprise LLM (32% market share)',
    moat: [
      'Developer platform dominance: GitHub Copilot, Cursor, Replit default to Claude',
      'Enterprise trust through safety-first approach',
      'Claude Code: $500M+ ARR in 3 months, 10x growth',
      '$27B+ funding enables sustained R&D investment',
    ],
    vsGiants: 'Safety-first positioning attracts enterprises wary of OpenAI/Google data practices. Claude\'s "character" and nuanced reasoning wins developers. Not trying to own distribution — instead powers other platforms (Cursor, Perplexity, etc.)',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Without AI, no product exists.',
    aiDesignChallenges: [
      'Character Design: Designing AI personality/tone (unprecedented domain)',
      'Trust Design: Communicating AI uncertainty and limitations',
      'Conversation UX: New interaction patterns beyond chat',
      'Agentic UX: Designing for autonomous AI behavior (Claude Code)',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Dario Amodei',
        role: 'CEO',
        background: 'Ex-OpenAI VP of Research, Physics PhD',
      },
      {
        name: 'Daniela Amodei',
        role: 'President',
        background: 'Ex-OpenAI VP of Operations',
      },
    ],
    whyBuilding:
      'Left OpenAI over AI safety direction conflict. Believed scaling + safety are both necessary. Wanted to prove safety and commercial success can coexist.',
    beliefs: [
      '"Helpful, Harmless, Honest" — Claude\'s core principles',
      'Constitutional AI: Train AI to follow principles autonomously',
      'Race to the Top: Lead by example rather than regulation alone',
      'Character over Rules: Design AI disposition, not just rule lists',
      'Pro-regulation: "Uncomfortable with few companies deciding AI future"',
    ],
    designPhilosophy:
      'Claude\'s personality is intentionally designed through "Character Training". Focus on disposition (character traits) rather than rules. Goal: genuinely good conversation without manipulation.',
    greenFlags: [
      'Mission clear and consistent for 4 years',
      'Founders genuinely believe in safety',
      'Mike Krieger (Instagram) as CPO — clear design investment',
      'Character Training team — philosophical approach to AI design',
    ],
    redFlags: [
      'Rapid growth (1000+ employees) may change culture',
      'No longer early-stage startup',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Mike Krieger (Instagram co-founder)',
      designHead: 'Joel Lewenstein',
      teamSize: 'Growing (exact size unknown)',
      notableMembers: [
        { name: 'Amanda Askell', role: 'Character Training Lead' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Character training: defining Claude personality, tone, values',
          'Edge case handling: refusal scenarios, uncertain answer handling',
          'System prompt design: behavior rules for different use cases',
          'Safety guidelines: harmful content response logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Response quality criteria: defining what makes a good response',
          'Human feedback system design',
          'A/B testing framework',
          'Red teaming: discovering and improving model limitations',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Conversational UI: messages, input, context display',
          'Claude Code: agent work status visualization',
          'Settings and onboarding flows',
          'Enterprise dashboard',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [
      {
        name: 'Joel Lewenstein',
        role: 'Head of Product Design',
        platform: 'podcast',
        url: 'https://blog.academyux.com/learn-how-anthropic-designs-for-ai-joel-lewenstein-head-of-product-design-anthropic/',
        description: 'Podcast: How Anthropic Designs for AI',
      },
      {
        name: 'Amanda Askell',
        role: 'Character Training Lead',
        platform: 'twitter',
        url: 'https://twitter.com/AmandaAskell',
        description: 'Philosophy + AI character design insights',
      },
      {
        name: 'Anthropic Research',
        role: 'Company',
        platform: 'blog',
        url: 'https://www.anthropic.com/research/claude-character',
        description: "Claude's Character — official research post",
      },
    ],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, Claude Code',
        location: 'SF, NYC, Seattle (Remote-Friendly)',
        url: 'https://www.anthropic.com/careers/jobs/5025976008',
        level: 'Senior',
        type: 'full-time',
        compensation: '$305K-$385K + equity',
      },
      {
        title: 'Product Designer, Growth',
        location: 'SF, NYC, Seattle',
        url: 'https://www.anthropic.com/careers/jobs',
        level: 'Senior',
        type: 'full-time',
        compensation: '$305K-$385K + equity',
      },
      {
        title: 'Product Designer, Enterprise',
        location: 'SF, NYC, Seattle',
        url: 'https://www.anthropic.com/careers/jobs/5055600008',
        level: 'Senior',
        type: 'full-time',
        compensation: '$305K-$385K + equity',
      },
      {
        title: 'Product Designer, Claude Experiences',
        location: 'SF, NYC, Seattle',
        url: 'https://www.anthropic.com/careers/jobs/4929512008',
        level: 'Senior',
        type: 'full-time',
        compensation: '$305K-$385K + equity',
      },
      {
        title: 'Product Designer, Claude Developer Platform',
        location: 'SF, NYC, Seattle',
        url: 'https://www.anthropic.com/careers/jobs/5055448008',
        level: 'Senior',
        type: 'full-time',
        compensation: '$305K-$385K + equity',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'blind',
        sentiment: 'positive',
        rating: 4.3,
        content: 'Great mission-driven culture. Smart colleagues. Good WLB compared to other AI labs. Comp is competitive but not top tier.',
        url: 'https://www.teamblind.com/company/Anthropic/',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Fast growth causing some growing pains. Processes still being figured out. Engineering-heavy culture.',
      },
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.5,
        content: 'Incredible team, meaningful work on AI safety. Leadership is transparent and thoughtful.',
        url: 'https://www.glassdoor.com/Reviews/Anthropic-Reviews-E5765080.htm',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. Software Engineer benchmark: L5 $400-500K, L6 $500-700K.',
        url: 'https://www.levels.fyi/companies/anthropic/salaries/product-designer',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Employees frequently share work publicly. Strong culture of intellectual honesty and curiosity.',
      },
    ],

    // Growth & Potential
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "7x YoY ($1B ARR → $7B ARR)",
      userGrowth: "300,000+ B2B customers, Claude Code 10x growth in 3 months",
      signals: [
        "$183B valuation (10x from $18B in 18 months)",
        "$7B ARR (Oct 2025), targeting breakeven 2027",
        "#1 Enterprise LLM market share (32%)",
        "Claude Code: $500M+ ARR in first 3 months",
      ],

      tam: "$500B+ (AI for all knowledge work + software development)",
      marketShare: "~1.4% of TAM = 70x+ upside potential",
      ceiling: "Early innings: AI assistant market just forming, most companies haven't adopted AI workflows yet",
      tailwinds: [
        "AI coding explosion driving Claude Code adoption",
        "Enterprise safety concerns favor Anthropic over OpenAI",
        "Developer platform wins (Cursor, Replit default to Claude)",
        "Governments adopting Claude for secure AI",
      ],
      headwinds: [
        "OpenAI's ChatGPT brand dominance in consumer",
        "Google's unlimited compute and distribution",
        "Meta's open-source Llama capturing developer mindshare",
        "Commoditization risk as models become similar",
      ],

      moatType: 'data-flywheel',
      moatStrength: "Strong: 300K+ enterprises + developer platform adoption = continuous training data + distribution moat. Safety-first brand attracts regulated industries.",
    },

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Level 4 AI-native — frontier of AI design',
        'Founder philosophy aligns with my values',
        'Character Design — unique learning opportunity',
        'Strong business — no risk of failure',
        'Mike Krieger as CPO — design investment clear',
      ],
      whyNot: [
        '1000+ employees — not early-stage',
        'Design leadership already exists — limited leadership opportunity',
        'Highly competitive — hard to get in',
      ],
      nextActions: [
        'Use Claude deeply (including Claude Code)',
        'Listen to Joel Lewenstein podcast',
        'Read Amanda Askell\'s Character Training work',
        'Check which open roles match my experience',
        'Find Anthropic designers in network',
      ],
    },

    // Meta
    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Anthropic Series F Announcement',
        url: 'https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation',
      },
      {
        title: 'Revenue Data - Sacra',
        url: 'https://sacra.com/c/anthropic/',
      },
      {
        title: 'Mike Krieger Joins as CPO',
        url: 'https://www.anthropic.com/news/mike-krieger-joins-anthropic',
      },
      {
        title: "Claude's Character - Research",
        url: 'https://www.anthropic.com/research/claude-character',
      },
      {
        title: 'Dario Amodei on Why He Left OpenAI',
        url: 'https://www.inc.com/ben-sherry/anthropic-ceo-dario-amodei-says-he-left-openai-over-a-difference-in-vision/91018229',
      },
    ],
  },

  // ============================================
  // Leya (YC W24) - Legal AI
  // ============================================
  {
    id: 'leya',
    name: 'Leya',
    description: 'AI workspace for lawyers. Automates legal research, document review, and drafting.',
    website: 'https://leya.law',
    headquarters: 'Stockholm, Sweden',
    remote: 'Hybrid',

    stage: 'Series A',
    valuation: '~$100M (estimated)',
    totalFunding: '$35.5M',
    fundingHistory: [
      { stage: 'Seed', amount: '$10.5M', date: '2023-10', leadInvestors: ['Y Combinator', 'Benchmark'] },
      { stage: 'Series A', amount: '$25M', date: '2024-07', leadInvestors: ['Benchmark', 'Redpoint'] },
    ],
    revenue: 'N/A (early stage)',
    growth: '70+ law firms in Europe',
    runway: '18+ months',
    customers: '70+ European law firms',

    competitors: [
      {
        name: 'Harvey',
        description: 'Legal AI for law firms, $2B+ valuation, US-focused',
        whyTheyWin: 'Sequoia/OpenAI backing, elite law firm partnerships (A&O, PwC), US market dominance',
      },
      {
        name: 'Casetext (Thomson Reuters)',
        description: 'CoCounsel AI, acquired for $650M',
        whyTheyWin: 'Thomson Reuters distribution, established legal research brand, existing law firm relationships',
      },
      {
        name: 'Ironclad',
        description: 'Contract lifecycle management with AI',
        whyTheyWin: 'Strong enterprise CLM product, $3.2B valuation, 1000+ enterprise customers',
      },
    ],
    marketPosition: 'Leading in European legal AI market',
    moat: [
      'Deep integration with European legal systems',
      'YC + Benchmark + Redpoint backing',
      'First mover in EU legal AI',
    ],
    vsGiants: 'European focus avoids direct US competition with Harvey. Multi-jurisdictional expertise (EU, UK, Nordic law) that US players lack. Not dependent on single LLM provider.',

    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. LLM powers document review, research, drafting.',
    aiDesignChallenges: [
      'Trust in legal context: lawyers need 100% accuracy',
      'Citation & source verification UX',
      'Complex document workflows',
      'Multi-jurisdictional legal terminology',
    ],

    founders: [
      {
        name: 'Max Junestrand',
        role: 'CEO',
        background: 'Stockholm School of Economics',
      },
      {
        name: 'August Erséus',
        role: 'CTO',
        background: 'Technical co-founder',
      },
      {
        name: 'Sigge Labo',
        role: 'Co-founder',
        background: 'Stockholm School of Economics',
      },
    ],
    whyBuilding:
      'Lawyers spend 60% of time on manual, repetitive tasks. AI can free them to focus on strategic work.',
    beliefs: [
      'AI should augment lawyers, not replace them',
      'Legal work requires extreme precision',
      'European legal market is underserved',
    ],
    greenFlags: [
      'YC W24 batch — strong network',
      'Benchmark + Redpoint investors',
      'Fast growth in enterprise legal',
      'Small team (65) — high impact potential',
    ],
    redFlags: [
      'Europe-focused — may limit US opportunities',
      'Legal AI is crowded space',
      'Rebranded from Legora — strategy shift?',
    ],

    designTeam: {
      teamSize: '~3-5 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Legal accuracy verification workflows',
          'Citation confidence scoring',
          'Document comparison logic',
          'Jurisdiction-specific behavior rules',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Legal output accuracy metrics',
          'Lawyer feedback integration',
          'Error rate tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Document review interface',
          'Legal research dashboard',
          'Template/playbook management',
          'Collaboration tools for legal teams',
        ],
      },
    },
    productStage: '0→1',

    designerLinks: [],
    openRoles: [],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Fast-paced YC startup energy. Small team (~20 people), big ambitions.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews yet — company too small for sufficient data.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. Startup size, not registered on levels.fyi.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (early stage, revenue not disclosed)",
      userGrowth: "70+ European law firms",
      signals: [
        "$35.5M funding in 18 months (Seed $10.5M → Series A $25M)",
        "$100M valuation after Series A",
        "YC + Benchmark + Redpoint backing",
        "Leading European legal AI market position",
      ],

      tam: "$50B+ (Global legal services market addressable by AI)",
      marketShare: "~0.1% of European legal AI market",
      ceiling: "Early innings: Most law firms still manual workflows, AI adoption just beginning",
      tailwinds: [
        "European legal AI market underserved vs US",
        "Multi-jurisdictional expertise (EU, UK, Nordic) is barrier to US entrants",
        "Law firms under pressure to improve efficiency",
        "Data privacy regulations favor European providers",
      ],
      headwinds: [
        "Harvey dominates US with $2B+ valuation and elite partnerships",
        "Thomson Reuters acquisition of Casetext signals incumbents entering",
        "Europe-only focus limits TAM vs global competitors",
        "Legal accuracy requirements create high bar for AI",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Deep European legal system integration creates regional moat, but no network effects. First-mover advantage in EU, but model capabilities are table stakes.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Early stage — can shape design culture',
        'YC network access',
        'Legal AI is interesting vertical',
        'European base (remote possible?)',
      ],
      whyNot: [
        'Stockholm-based — relocation needed',
        'Legal domain requires learning curve',
        'Smaller market than general AI tools',
      ],
      nextActions: [
        'Research EU legal tech market',
        'Check if remote is possible',
        'Try Leya product demo',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Leya Series A Announcement',
        url: 'https://techcrunch.com/2024/07/17/leya-raises-25m-series-a/',
      },
      {
        title: 'YC Company Page',
        url: 'https://www.ycombinator.com/companies/legora',
      },
    ],
  },

  // ============================================
  // Granola - AI Note-taking
  // ============================================
  {
    id: 'granola',
    name: 'Granola',
    description: 'AI notepad for meetings. Augments your notes instead of replacing your judgment.',
    website: 'https://granola.ai',
    headquarters: 'London, UK',
    remote: 'Hybrid',

    stage: 'Series B',
    valuation: '$250M',
    totalFunding: '$67M',
    fundingHistory: [
      { stage: 'Seed', amount: '$4M', date: '2024-02', leadInvestors: ['Craft Ventures'] },
      { stage: 'Series A', amount: '$20M', date: '2024-10', valuation: '$100M', leadInvestors: ['Spark Capital'] },
      { stage: 'Series B', amount: '$43M', date: '2025-05', valuation: '$250M', leadInvestors: ['a]6z'] },
    ],
    revenue: 'Growing (exact N/A)',
    growth: '10% WoW user growth since launch',
    runway: '24+ months',
    customers: 'VCs, founders at Vercel, Ramp, Roblox',

    competitors: [
      {
        name: 'Otter.ai',
        description: 'AI meeting transcription, $1B+ valuation',
        whyTheyWin: 'First mover in AI transcription, 25M+ users, strong brand recognition, Zoom/Teams integrations',
      },
      {
        name: 'Fireflies.ai',
        description: 'AI meeting assistant and CRM integration',
        whyTheyWin: 'Deep CRM integrations (Salesforce, HubSpot), sales team focus, action item extraction',
      },
      {
        name: 'Fathom',
        description: 'Free AI meeting notes',
        whyTheyWin: 'Free tier captures users, simple UX, fast transcription',
      },
    ],
    marketPosition: 'Premium positioning — "for people who think their judgment matters"',
    moat: [
      'Unique positioning: augments vs replaces',
      'Strong word-of-mouth in VC/founder community',
      'Mike Krieger (Instagram) as investor',
      'Product-led growth with viral loop',
    ],
    vsGiants: 'Philosophical differentiation: "AI should augment your judgment, not replace it." Premium positioning avoids price war with free tools. Not trying to be everything — opinionated product for specific users.',

    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI enhances notes but user judgment remains central.',
    aiDesignChallenges: [
      'Balance AI assistance vs user control',
      'Real-time transcription UX',
      'Note organization and retrieval',
      'Team collaboration on shared context',
    ],

    founders: [
      {
        name: 'Chris Pedregal',
        role: 'CEO',
        background: 'Ex-Google PM',
      },
      {
        name: 'Sam Stephenson',
        role: 'CTO',
        background: 'Technical co-founder',
      },
    ],
    whyBuilding:
      'AI meeting tools outsource judgment to AI. We believe your judgment is valuable — AI should augment, not replace it.',
    beliefs: [
      'Human judgment is irreplaceable',
      'AI should be invisible until needed',
      'Tools should make you smarter, not dependent',
      'Opinionated product design wins',
    ],
    designPhilosophy:
      'Opinionated, minimal design. The product has a clear point of view about how work should be done.',
    greenFlags: [
      'Strong product philosophy',
      'Mike Krieger as investor — design validation',
      'Used by top VCs — instant credibility',
      'Small team — high impact',
      'Ex-Google PM founder — product-focused',
    ],
    redFlags: [
      'Crowded meeting notes space',
      'Consumer-ish product — enterprise conversion?',
    ],

    designTeam: {
      teamSize: '~2-3 (very small)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Note augmentation rules',
          'When to surface AI suggestions',
          'Privacy and context boundaries',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Note quality metrics',
          'User satisfaction tracking',
          'AI suggestion acceptance rate',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Real-time note-taking UI',
          'AI suggestion presentation',
          'Search and retrieval',
          'Team workspace design',
          'Mobile experience',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [
      {
        name: 'Granola Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://granola.ai/blog',
        description: 'Product updates and philosophy',
      },
    ],
    openRoles: [],

    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Small, tight-knit team (~10 people). Strong product opinions. Design-forward culture.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Ex-Palantir, ex-Apple founders. London-based, design-first culture.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — Seed stage startup with limited data.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. No salary data for startup size.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "Unknown (not disclosed, early monetization)",
      userGrowth: "10% WoW user growth since launch",
      signals: [
        "$67M raised in 15 months (Seed → Series B)",
        "$250M valuation (2.5x from $100M in 7 months)",
        "10% week-over-week user growth sustained",
        "Used by VCs, founders at Vercel, Ramp, Roblox (high-value users)",
        "Mike Krieger (Instagram) as investor — strong design validation",
      ],

      tam: "$5B+ (Meeting productivity tools for knowledge workers)",
      marketShare: "<0.1% (early stage, niche positioning)",
      ceiling: "Early-mid innings: AI meeting notes rapidly growing, but Granola's 'augment not replace' philosophy targets premium subset (~20% of market)",
      tailwinds: [
        "Remote/hybrid work increases meeting volume",
        "AI meeting notes becoming table stakes for knowledge work",
        "Premium positioning avoids commoditization race",
        "Product-led growth with viral loop (meeting attendees see it)",
        "Strong word-of-mouth in tech/VC community",
      ],
      headwinds: [
        "Otter.ai has 25M+ users and strong brand",
        "Free alternatives (Fathom, Zoom AI) commoditize basic transcription",
        "Meeting fatigue may reduce TAM",
        "Enterprise sales cycle vs prosumer focus",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Philosophical differentiation ('augment not replace') and premium brand positioning create moat, but limited network effects. Product quality and opinionated design are defensive.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'Strong design philosophy',
        'Small team — can shape everything',
        'Mike Krieger connection',
        'Consumer + prosumer positioning',
        'Product-led growth model',
      ],
      whyNot: [
        'Very small — may not be hiring designers',
        'Meeting notes is narrow space',
      ],
      nextActions: [
        'Use Granola daily for 2 weeks',
        'Connect with founders on Twitter',
        'Watch for design job postings',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Granola Series B - TechCrunch',
        url: 'https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m/',
      },
      {
        title: 'Series A Announcement',
        url: 'https://granola.ai/blog/series-a',
      },
    ],
  },

  // ============================================
  // Pika Labs - AI Video Generation
  // ============================================
  {
    id: 'pika',
    name: 'Pika',
    description: 'AI video generation and editing platform. Text-to-video, image-to-video.',
    website: 'https://pika.art',
    headquarters: 'Palo Alto, CA',
    remote: 'No',

    stage: 'Series B',
    valuation: '$470M',
    totalFunding: '$115M',
    fundingHistory: [
      { stage: 'Seed', amount: '$5.5M', date: '2023-04', leadInvestors: ['Lightspeed'] },
      { stage: 'Series A', amount: '$55M', date: '2023-11', valuation: '$200M', leadInvestors: ['Lightspeed'] },
      { stage: 'Series B', amount: '$80M', date: '2024-06', valuation: '$470M', leadInvestors: ['Spark Capital'] },
    ],
    revenue: 'N/A',
    growth: '500K+ users, millions of videos weekly',
    runway: '24+ months',
    customers: 'Creators, marketers, casual users',

    competitors: [
      {
        name: 'Runway',
        description: 'Gen-3 video model, $1.5B+ valuation',
        whyTheyWin: 'Pro-grade tools, Hollywood partnerships (A24, Paramount), established in creative industry',
      },
      {
        name: 'OpenAI Sora',
        description: 'Text-to-video from OpenAI',
        whyTheyWin: 'OpenAI brand, quality benchmark setter, will have ChatGPT distribution',
      },
      {
        name: 'Kling (Kuaishou)',
        description: 'Chinese AI video model',
        whyTheyWin: 'Massive compute resources, 700M+ MAU distribution in China',
      },
    ],
    marketPosition: 'Consumer-friendly alternative to Runway',
    moat: [
      'Stanford AI Lab pedigree',
      'User-friendly interface vs competitors',
      'Fast iteration on model improvements',
      'Strong creator community',
    ],
    vsGiants: 'Consumer-first simplicity vs Runway\'s pro-grade complexity. Faster iteration cycle than Sora (which has slow rollout). Not fighting for Hollywood — capturing everyday creators. Model-agnostic approach allows adopting best techniques.',

    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Video generation is 100% AI-powered.',
    aiDesignChallenges: [
      'Prompt engineering for video',
      'Generation preview and iteration',
      'Quality control and output consistency',
      'Creative control vs AI automation',
    ],

    founders: [
      {
        name: 'Demi Guo',
        role: 'CEO',
        background: 'Stanford AI Lab PhD (dropped out), youngest Meta AI Research employee',
      },
      {
        name: 'Chenlin Meng',
        role: 'CTO',
        background: 'Stanford AI Lab, 28+ research papers, DDIM inventor',
      },
    ],
    whyBuilding:
      'Video creation is too hard. AI should make it effortless for everyone to bring creative visions to life.',
    beliefs: [
      'Creativity should be accessible to everyone',
      'AI is a creative partner, not replacement',
      'Simple UX unlocks mass adoption',
    ],
    greenFlags: [
      'Stanford AI Lab founders — cutting-edge research',
      'Small team (48) — high impact',
      'Consumer-first approach',
      'Strong traction with creators',
    ],
    redFlags: [
      'Extremely competitive space (Runway, Sora)',
      'Model quality race is expensive',
      'Consumer monetization challenges',
    ],

    designTeam: {
      teamSize: '~5-8',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Prompt interpretation feedback',
          'Generation quality thresholds',
          'Content moderation rules',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Video quality assessment',
          'User satisfaction metrics',
          'Generation success rates',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Prompt input UX',
          'Video preview and editing tools',
          'Generation queue management',
          'Export and sharing flows',
          'Mobile-first design',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [
      {
        name: 'Pika Twitter',
        role: 'Company',
        platform: 'twitter',
        url: 'https://twitter.com/paborwicz',
        description: 'Product updates and demos',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Palo Alto, CA (Onsite)',
        url: 'https://jobs.ashbyhq.com/pika',
        team: 'Core Product',
        level: 'Mid-Senior',
        type: 'full-time',
        postedDate: '2025-01',
        aboutRole: 'Design the future of AI-powered video creation. You\'ll shape how millions of creators bring their ideas to life through text-to-video and image-to-video generation.',
        responsibilities: [
          'Own end-to-end product design for core video creation flows',
          'Design intuitive prompt input experiences that help users express creative intent',
          'Create feedback systems for video generation quality and iteration',
          'Collaborate closely with ML engineers on model capabilities and limitations',
          'Build design systems that scale across web and mobile platforms',
        ],
        requirements: [
          '4+ years of product design experience',
          'Strong portfolio showing consumer product work',
          'Experience with creative tools (video, image, or design software)',
          'Ability to work onsite at Palo Alto HQ full-time',
          'Excellent prototyping skills (Figma, Framer, or code)',
        ],
        preferred: [
          'Experience with AI/ML products',
          'Background in video production or motion design',
          'Technical understanding of generative AI',
          'Previously worked at a high-growth startup',
        ],
        teamInfo: 'Join a small, tight-knit design team (~5 people) working directly with Stanford AI Lab PhD founders. Fast iteration, high impact.',
        whyInteresting: 'Level 4 AI-native company. Rare opportunity to define the UX patterns for AI video generation — a completely new product category.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. Stanford AI PhD founders. Fast-paced, small team (~30 people).',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Actively engages with creative community. Culture of rapid iteration on user feedback.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — Series B startup but limited data available.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. No salary data on levels.fyi yet.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (freemium model, early monetization)",
      userGrowth: "500K+ users, millions of videos generated weekly",
      signals: [
        "$115M raised in 14 months (Seed → Series B)",
        "$470M valuation (2.4x from $200M in 7 months)",
        "500K+ registered users generating millions of videos weekly",
        "Stanford AI Lab PhD founders (DDIM inventor, youngest Meta AI researcher)",
        "Lightspeed → Spark Capital tier-1 investors",
      ],

      tam: "$20B+ (AI video generation for creators, marketers, entertainment)",
      marketShare: "<1% (very early market, competing for consumer adoption)",
      ceiling: "Very early innings: AI video generation is nascent, quality improving rapidly. Consumer use cases just emerging beyond experimentation.",
      tailwinds: [
        "AI video quality improving exponentially (text→video becoming production-ready)",
        "Creator economy driving demand for fast, low-cost video production",
        "Social media pushing video-first content",
        "Consumer-first simplicity vs Runway's complexity captures broader market",
      ],
      headwinds: [
        "Runway has $1.5B+ valuation and Hollywood partnerships",
        "OpenAI Sora will have ChatGPT distribution advantage",
        "Compute costs are extremely high (video generation expensive)",
        "Quality race requires constant R&D investment",
        "Monetization challenging in consumer AI (free expectations)",
      ],

      moatType: 'technology',
      moatStrength: "Low-Medium: Research talent and model quality are advantages, but AI video is commoditizing. User-friendly UX and creator community provide some defensibility. No network effects yet.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Level 4 AI-native',
        'Creative tools space',
        'Small team — high impact',
        'Stanford AI Lab founders',
      ],
      whyNot: [
        'Hyper-competitive market',
        'Consumer product — harder monetization',
        'May need strong visual design skills',
      ],
      nextActions: [
        'Use Pika to create sample videos',
        'Compare UX with Runway',
        'Research Stanford AI Lab network',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Pika Series B - Washington Post',
        url: 'https://www.washingtonpost.com/technology/2024/06/04/pika-funding-openai-sora-google-video/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/pika/',
      },
    ],
  },

  // ============================================
  // ElevenLabs - AI Voice
  // ============================================
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice platform. Text-to-speech, voice cloning, dubbing.',
    website: 'https://elevenlabs.io',
    headquarters: 'New York, NY',
    remote: 'Yes',

    stage: 'Series C',
    valuation: '$3.3B',
    totalFunding: '$281M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2M', date: '2022-07', leadInvestors: ['Credo Ventures'] },
      { stage: 'Series A', amount: '$19M', date: '2023-01', leadInvestors: ['Nat Friedman', 'Daniel Gross'] },
      { stage: 'Series B', amount: '$80M', date: '2024-01', valuation: '$1.1B', leadInvestors: ['a16z', 'Sequoia'] },
      { stage: 'Series C', amount: '$180M', date: '2025-01', valuation: '$3.3B', leadInvestors: ['a16z'] },
    ],
    revenue: '~$330M ARR (2025)',
    growth: '260% growth in 9 months (2024)',
    runway: 'Strong',
    customers: 'Publishers, game studios, content creators',

    competitors: [
      {
        name: 'Amazon Polly',
        description: 'AWS text-to-speech service',
        whyTheyWin: 'AWS distribution, enterprise integrations, pay-as-you-go pricing at scale',
      },
      {
        name: 'Google Cloud TTS',
        description: 'Google\'s text-to-speech API',
        whyTheyWin: 'WaveNet quality, 40+ languages, Google Cloud ecosystem',
      },
      {
        name: 'Resemble AI',
        description: 'Voice cloning and real-time voice conversion',
        whyTheyWin: 'Real-time voice conversion, gaming/entertainment focus',
      },
    ],
    marketPosition: 'Market leader in quality voice synthesis',
    moat: [
      'Best-in-class voice quality',
      'First mover in natural TTS',
      'Strong API adoption',
      'a16z + Sequoia backing',
    ],
    vsGiants: 'Quality differentiation — ElevenLabs voices are noticeably more natural than AWS/Google. Specialized focus vs generic cloud services. Voice cloning capability that cloud giants avoid due to liability concerns.',

    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Voice generation is 100% AI.',
    aiDesignChallenges: [
      'Voice customization UX',
      'Multi-language support',
      'Real-time voice feedback',
      'Ethics and consent in voice cloning',
    ],

    founders: [
      {
        name: 'Piotr Dąbkowski',
        role: 'CEO',
        background: 'Ex-Google ML engineer, Poland',
      },
      {
        name: 'Mati Staniszewski',
        role: 'CTO',
        background: 'Ex-Palantir deployment strategist',
      },
    ],
    whyBuilding:
      'Growing up in Poland watching poorly dubbed American films. Wanted to make content accessible in every language with natural voice.',
    beliefs: [
      'Voice is the most natural interface',
      'Content should be accessible in every language',
      'Quality is non-negotiable',
      'AI voice must be ethical (consent-based)',
    ],
    greenFlags: [
      'Clear market leader in quality',
      'Strong revenue growth',
      'a16z + Sequoia investors',
      'Polish founders — unique perspective',
      'API-first business model',
    ],
    redFlags: [
      'Voice cloning ethics concerns',
      'Growing fast — culture may change',
      'Enterprise sales complexity',
    ],

    designTeam: {
      teamSize: '~10-15',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Voice consent and verification',
          'Clone quality thresholds',
          'Language model behavior',
          'Content moderation for voice',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Voice naturalness scoring',
          'User preference learning',
          'Clone accuracy metrics',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Voice studio interface',
          'Project management',
          'API documentation UX',
          'Dubbing workflow',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [
      {
        name: 'ElevenLabs Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://elevenlabs.io/blog',
        description: 'Product and research updates',
      },
    ],
    openRoles: [],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.2,
        content: 'Fast growth, ambitious team. Remote-friendly. Polish engineering excellence.',
        url: 'https://www.glassdoor.com/Reviews/ElevenLabs-Reviews-E8772871.htm',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Scaling pains as company grows (~100 people). Good comp, high expectations. Limited design team culture info.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'European distributed team (Poland, UK, US). Engineering-centric culture.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. SWE reference: Senior $200-300K estimated (Remote).',
        url: 'https://www.levels.fyi/companies/elevenlabs/',
      },
    ],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: "$80M ARR (2024), targeting $100M+ (2025) = ~1.5x YoY",
      userGrowth: "1M+ users, 100+ enterprise customers",
      signals: [
        "$80M ARR with profitability path",
        "$1.1B valuation (Series B)",
        "1M+ registered users across creators, enterprises, publishers",
        "100+ enterprise customers including publishers, game studios",
        "Andreessen Horowitz backing",
      ],

      tam: "$15B+ (Voice AI for audiobooks, gaming, content, accessibility)",
      marketShare: "~0.5% = 30x upside",
      ceiling: "Mid-innings: Voice cloning is proven, but enterprise adoption (gaming, audiobooks, ads) is early. Market expanding as quality improves.",
      tailwinds: [
        "Audiobook market growing, voice AI reduces production costs 10x",
        "Gaming industry adopting dynamic voice (NPCs, localization)",
        "Content creators need multilingual voice at scale",
        "Accessibility use cases (voice preservation, text-to-speech)",
        "Remote-first company = global talent",
      ],
      headwinds: [
        "OpenAI/Google adding voice to foundation models",
        "Voice cloning ethical concerns and regulation risk",
        "High compute costs for real-time voice synthesis",
        "Competition from PlayHT, Resemble.ai in specific verticals",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Best-in-class voice quality and emotional range creates technical moat. Voice library and cloning tech have some switching costs. No strong network effects, but brand in voice AI is growing.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'Level 4 AI-native',
        'Market leader with clear differentiation',
        'Strong revenue — stable',
        'Voice is fascinating domain',
        'Remote-friendly',
      ],
      whyNot: [
        'Growing fast — may lose startup feel',
        'Ethics complexity in voice cloning',
      ],
      nextActions: [
        'Build something with ElevenLabs API',
        'Research voice UX patterns',
        'Connect with designers there',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'ElevenLabs Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/01/30/elevenlabs-raises-180-million-series-c/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/elevenlabs/',
      },
    ],
  },

  // ============================================
  // Cognition (Devin) - AI Software Engineer
  // ============================================
  {
    id: 'cognition',
    name: 'Cognition',
    description: 'AI software engineer. Devin can autonomously complete entire coding projects.',
    website: 'https://cognition.ai',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    stage: 'Series A',
    valuation: '$2B → $10B (2025)',
    totalFunding: '$400M+',
    fundingHistory: [
      { stage: 'Seed', amount: '$21M', date: '2023-11', leadInvestors: ['Founders Fund'] },
      { stage: 'Series A', amount: '$175M', date: '2024-04', valuation: '$2B', leadInvestors: ['Founders Fund'] },
      { stage: 'Unknown', amount: '$175M', date: '2025-04', valuation: '$10B', leadInvestors: ['Index Ventures'] },
    ],
    revenue: '~$73M ARR (June 2025)',
    growth: 'Explosive — $1M to $73M ARR in 9 months',
    runway: 'Strong',
    customers: 'Engineering teams, enterprises',

    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer, 1.8M+ paid users',
        whyTheyWin: 'GitHub distribution (100M+ developers), Microsoft backing, IDE integration',
      },
      {
        name: 'Cursor',
        description: 'AI-native code editor, $9B valuation',
        whyTheyWin: 'Best-in-class UX, fast iteration, developer-loved product',
      },
      {
        name: 'Claude Code (Anthropic)',
        description: 'Agentic coding assistant, $500M+ ARR',
        whyTheyWin: 'Claude model quality, Anthropic backing, terminal-native workflow',
      },
    ],
    marketPosition: 'First "AI software engineer" positioning',
    moat: [
      'First mover in autonomous coding agent',
      '10 IOI gold medalists on team',
      'Full project execution vs suggestions',
      'Founders Fund backing',
    ],
    vsGiants: 'Full autonomy positioning vs Copilot\'s "assistant" framing. Complete project execution rather than suggestions. IOI champion team gives credibility. Enterprise use case (delegate entire tasks) vs developer productivity.',

    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Autonomous software engineering agent.',
    aiDesignChallenges: [
      'Agentic UX: showing AI work in progress',
      'Trust in autonomous code changes',
      'Debugging AI-written code',
      'Human-AI collaboration on projects',
    ],

    founders: [
      {
        name: 'Scott Wu',
        role: 'CEO',
        background: 'Harvard, 3x IOI gold medalist, ex-Lunchclub CTO',
      },
      {
        name: 'Steven Hao',
        role: 'Co-founder',
        background: 'IOI gold medalist',
      },
      {
        name: 'Walden Yan',
        role: 'Co-founder',
        background: 'IOI gold medalist',
      },
    ],
    whyBuilding:
      'Software engineering is bottleneck for progress. AI that can truly code autonomously unlocks exponential productivity.',
    beliefs: [
      'AI can do full software engineering, not just assist',
      'Competitive programming background → better reasoning',
      'Autonomous agents are the future',
    ],
    greenFlags: [
      'Strongest technical founding team (10 IOI golds)',
      'First to demonstrate autonomous coding',
      'Explosive growth',
      'Founders Fund lead investor',
    ],
    redFlags: [
      'Extremely competitive space (Cursor, Claude)',
      'Product still maturing',
      'High expectations may create pressure',
    ],

    designTeam: {
      teamSize: '~3-5 (small, engineering-heavy)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Agent autonomy boundaries',
          'Code review/approval flows',
          'Error recovery logic',
          'Human intervention points',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Code quality assessment',
          'Task completion metrics',
          'Developer satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Agent work visualization',
          'Code diff review UX',
          'Project progress dashboard',
          'Developer collaboration tools',
        ],
      },
    },
    productStage: '0→1',

    designerLinks: [
      {
        name: 'Cognition Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://cognition.ai/blog',
        description: 'Product updates and demos',
      },
    ],
    openRoles: [],

    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Extremely technical culture. Small, elite team (~20 people). Engineers from IOI/ICPC backgrounds.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Competitive programming culture. No designer culture info — engineer-centric team.',
      },
      {
        source: 'linkedin',
        sentiment: 'neutral',
        content: 'SF-based. No design leadership info — potential first design hire opportunity.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews — Series B but small team size, limited data.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. No salary data available.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (beta stage, limited availability)",
      userGrowth: "Beta users, waitlist of thousands",
      signals: [
        "$2.2B valuation at Series B (fastest AI startup to unicorn: <6 months)",
        "$104M raised from Founders Fund, Khosla, Peter Thiel",
        "Viral launch demo (HN #1, Twitter trending)",
        "Competitive programming pedigree founders (IOI gold medalists)",
        "Beta access only — building scarcity",
      ],

      tam: "$100B+ (Software development globally addressable by AI agents)",
      marketShare: "<0.01% (pre-launch, beta only)",
      ceiling: "Very early innings: AI software engineers don't exist yet as proven category. Market forming, Devin defining the space.",
      tailwinds: [
        "Developer shortage driving AI agent demand",
        "Cursor proving developers want AI coding tools",
        "Agentic AI capabilities improving rapidly",
        "Enterprise willingness to pay for productivity gains",
      ],
      headwinds: [
        "Extremely hyped launch created skepticism after demos",
        "GitHub Copilot Workspace announced (Microsoft distribution)",
        "Cursor, Replit, and others iterating toward agent features",
        "Developer trust: will engineers give up control?",
        "Code quality and security concerns for autonomous agents",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Technical capability lead from competitive programming talent, but agentic coding is early and unproven. First-mover brand in 'AI software engineer' category. No network effects yet.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Cutting-edge AI agent design',
        'Early stage — can shape product',
        'Elite technical team',
        'Agentic UX is new frontier',
      ],
      whyNot: [
        'Engineering-dominated culture',
        'Very competitive market',
        'High pressure environment',
      ],
      nextActions: [
        'Try Devin on a real project',
        'Research agentic UX patterns',
        'Understand competitive landscape',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Cognition Funding - Contrary Research',
        url: 'https://research.contrary.com/company/cognition',
      },
      {
        title: 'Devin Introduction',
        url: 'https://cognition.ai/blog/introducing-devin',
      },
    ],
  },

  // ============================================
  // Mercor - AI Hiring Platform
  // ============================================
  {
    id: 'mercor',
    name: 'Mercor',
    description: 'AI-powered hiring platform. Matches talent with opportunities using AI interviews.',
    website: 'https://mercor.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    stage: 'Series A → C (rapid growth)',
    valuation: '$10B (Oct 2025)',
    totalFunding: '$480M+',
    fundingHistory: [
      { stage: 'Pre-seed', amount: '$1.5M', date: '2023-03', leadInvestors: ['Y Combinator'] },
      { stage: 'Seed', amount: '$3M', date: '2023-06', leadInvestors: ['General Catalyst'] },
      { stage: 'Series A', amount: '$30M', date: '2024-03', valuation: '$250M', leadInvestors: ['Benchmark'] },
      { stage: 'Series B', amount: '$100M', date: '2024-08', valuation: '$2B', leadInvestors: ['Benchmark'] },
      { stage: 'Series C', amount: '$350M', date: '2025-10', valuation: '$10B', leadInvestors: ['General Catalyst'] },
    ],
    revenue: 'Growing rapidly',
    growth: '$250M → $2B → $10B valuation in 1 year',
    runway: 'Strong',
    customers: 'OpenAI, Anthropic, tech companies',

    competitors: [
      {
        name: 'LinkedIn',
        description: 'Professional network, 1B+ members',
        whyTheyWin: 'Dominant professional network, Microsoft integration, recruiter standard tool',
      },
      {
        name: 'Hired',
        description: 'Tech talent marketplace',
        whyTheyWin: 'Curated tech talent pool, salary transparency, established enterprise relationships',
      },
      {
        name: 'Triplebyte (Karat)',
        description: 'Technical interview platform',
        whyTheyWin: 'Technical assessment expertise, interview-as-a-service model',
      },
    ],
    marketPosition: 'AI-first hiring platform',
    moat: [
      'AI interview technology',
      'Network effects from talent pool',
      'Customers include OpenAI, Anthropic',
      'Benchmark + General Catalyst backing',
    ],
    vsGiants: 'AI-native from day one vs LinkedIn\'s AI add-ons. Focused on talent quality over quantity. OpenAI/Anthropic as customers validates approach. Skills-based vs credential-based matching.',

    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI conducts interviews and matching.',
    aiDesignChallenges: [
      'AI interview experience design',
      'Candidate fairness and bias',
      'Matching algorithm transparency',
      'Employer/candidate dual experience',
    ],

    founders: [
      {
        name: 'Brendan Foody',
        role: 'CEO',
        background: 'Georgetown dropout, Thiel Fellow, 21 years old at founding',
      },
      {
        name: 'Adarsh Hiremath',
        role: 'CTO',
        background: 'Harvard dropout, Thiel Fellow',
      },
      {
        name: 'Surya Midha',
        role: 'COO',
        background: 'Thiel Fellow, high school friends with co-founders',
      },
    ],
    whyBuilding:
      'Traditional hiring is broken. AI can match talent with opportunity faster and more fairly.',
    beliefs: [
      'AI can remove human bias in hiring',
      'Skills matter more than credentials',
      'Global talent pool is underutilized',
    ],
    greenFlags: [
      'Hypergrowth — fastest rising valuation',
      'OpenAI & Anthropic as customers',
      'Young founders with big vision',
      'Benchmark + General Catalyst investors',
      'Thiel Fellows — unconventional path',
    ],
    redFlags: [
      'Very young founders — execution risk?',
      'Hiring space is notoriously difficult',
      'AI interview ethics concerns',
      'Rapid growth may outpace culture',
    ],

    designTeam: {
      teamSize: 'Unknown (likely small)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Interview fairness algorithms',
          'Matching criteria design',
          'Bias detection and mitigation',
          'Candidate scoring logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Hire success metrics',
          'Candidate satisfaction',
          'Employer satisfaction',
          'Interview quality assessment',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'AI interview experience',
          'Employer dashboard',
          'Candidate profile and matching',
          'Communication tools',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco (Onsite)',
        url: 'https://mercor.com/careers',
        team: 'Core Product',
        level: 'Mid-Senior',
        type: 'full-time',
        compensation: '$150K-$250K + Equity',
        postedDate: '2025-01',
        aboutRole: 'Design the AI-powered hiring experience that companies like OpenAI and Anthropic use to find talent. Shape how AI transforms recruiting.',
        responsibilities: [
          'Design the AI interview experience for candidates',
          'Create employer dashboards for talent discovery and matching',
          'Build trust systems that make AI hiring feel fair and transparent',
          'Design two-sided marketplace experiences (candidates + employers)',
          'Own mobile and web experiences end-to-end',
        ],
        requirements: [
          '3+ years of product design experience',
          'Portfolio showing complex product work',
          'Ability to work onsite in San Francisco full-time',
          'Experience with marketplaces or two-sided platforms preferred',
          'Strong visual and interaction design skills',
        ],
        preferred: [
          'Experience with AI/ML products',
          'Background in HR tech or recruiting',
          'Worked at a hypergrowth startup',
          'Understanding of algorithmic fairness',
        ],
        teamInfo: 'Small design team at a $10B company. Direct access to young founders (Thiel Fellows). Move fast culture.',
        whyInteresting: 'Hypergrowth rocket ship ($250M → $10B in 1 year). AI hiring is ethically complex — interesting design challenges around fairness and transparency.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Young, ambitious team (~50 people). Harvard dropout founder. Move fast culture.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Hypergrowth mode. Validated product with OpenAI/Anthropic as customers.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Few reviews — growing rapidly but limited data available.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design: $150K-250K + Equity (per job postings). No levels.fyi data.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$30M ARR (estimated, growing rapidly)",
      userGrowth: "300K+ candidates, 3000+ companies hiring",
      signals: [
        "$250M valuation at Series B (10x from $25M in 8 months)",
        "$32M raised (Benchmark + Peter Thiel)",
        "Used by OpenAI, Anthropic, Ramp for hiring",
        "300K+ candidates, 3000+ companies",
        "Youngest YC founders (19, 22 at start)",
      ],

      tam: "$200B+ (Global recruiting and staffing market)",
      marketShare: "<0.1% (very early, niche positioning in tech hiring)",
      ceiling: "Early innings: AI interviewing is controversial and unproven at scale. Market forming, but regulatory/ethical headwinds may limit ceiling.",
      tailwinds: [
        "Tech hiring remains inefficient and expensive",
        "Remote work increases global talent pool",
        "Companies desperate for quality engineers",
        "AI can reduce hiring bias if done right",
      ],
      headwinds: [
        "LinkedIn dominates professional recruiting ($15B revenue)",
        "AI interviewing has ethical concerns (fairness, transparency)",
        "Candidates may resist AI-only interviews",
        "Regulation risk (EU AI Act covers hiring algorithms)",
        "Two-sided marketplace is hard to scale (chicken-egg problem)",
      ],

      moatType: 'network-effects',
      moatStrength: "Medium: Two-sided marketplace creates network effects (more candidates → better matches → more employers), but LinkedIn has massive existing network. Brand with top AI companies (OpenAI, Anthropic) is valuable but early.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Hypergrowth opportunity',
        'AI-first platform design',
        'Interesting two-sided marketplace',
        'Top-tier customers (OpenAI, Anthropic)',
      ],
      whyNot: [
        'Very young founders — cultural fit?',
        'Hiring space is tough',
        'Ethics concerns with AI interviews',
        'May be chaotic growth',
      ],
      nextActions: [
        'Research AI hiring ethics',
        'Look at competitor UX (Hired, etc)',
        'See if any designers in network',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Mercor Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/10/27/mercor-quintuples-valuation-to-10b/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/mercor/',
      },
    ],
  },

  // ============================================
  // Linear - Project Management
  // ============================================
  {
    id: 'linear',
    name: 'Linear',
    description: 'Issue tracking and project management for high-performance teams. The anti-Jira.',
    website: 'https://linear.app',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    stage: 'Series C',
    valuation: '$1.25B (June 2025)',
    totalFunding: '$134M',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.2M', date: '2019-11', leadInvestors: ['Sequoia'] },
      { stage: 'Series A', amount: '$13M', date: '2020-12', leadInvestors: ['Sequoia'] },
      { stage: 'Series B', amount: '$35M', date: '2023-09', leadInvestors: ['Accel'] },
      { stage: 'Series C', amount: '$82M', date: '2025-06', valuation: '$1.25B', leadInvestors: ['Accel'] },
    ],
    revenue: '$100M ARR (June 2025)',
    growth: '12x in 18 months ($8.4M → $100M)',
    customers: 'Vercel, Ramp, Watershed, high-growth startups',

    competitors: [
      {
        name: 'Jira',
        description: 'Atlassian\'s dominant project management tool',
        whyTheyWin: 'Enterprise standard, deep integrations, Atlassian ecosystem',
      },
      {
        name: 'Asana',
        description: 'Work management platform',
        whyTheyWin: 'Broader use case beyond engineering, established enterprise presence',
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace with project features',
        whyTheyWin: 'Flexibility, docs + projects together, consumer-grade UX',
      },
    ],
    marketPosition: 'Premium choice for fast-moving engineering teams',
    moat: [
      'Best-in-class UX — developers love it',
      'Speed and keyboard-first design',
      'Finnish design craft DNA',
      'Word-of-mouth growth from developer advocacy',
    ],

    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. AI-powered triage, writing, search.',
    aiDesignChallenges: [
      'AI-assisted issue creation and triage',
      'Smart suggestions without being intrusive',
      'AI search across projects',
      'Automated workflow recommendations',
    ],

    founders: [
      {
        name: 'Karri Saarinen',
        role: 'CEO',
        background: 'Ex-Airbnb Principal Designer, Ex-Coinbase Head of Design',
      },
      {
        name: 'Jori Lallo',
        role: 'CPO',
        background: 'Ex-Coinbase Engineer, YC alum (Kippt)',
      },
      {
        name: 'Tuomas Artman',
        role: 'CTO',
        background: 'Ex-Uber Senior Engineer, Ex-Groupon',
      },
    ],
    whyBuilding:
      'Frustrated with Jira at Airbnb. Built a Chrome extension to simplify it — became so popular they decided to build the tool they wished existed.',
    beliefs: [
      'Software should be fast and feel magical',
      'Design is a competitive advantage',
      'Keyboard-first, speed matters',
      'Finnish design: simplicity, function, durability',
    ],
    designPhilosophy:
      'CEO is a designer. Design-led company from founding. Finnish heritage emphasizes craft, simplicity, and attention to detail.',
    greenFlags: [
      'CEO is a designer — design matters here',
      'Remote-first, distributed team',
      'Profitable mindset — bootstrapped initially',
      'Strong brand love from developers',
    ],
    redFlags: [
      'Competitive space (Jira, Notion)',
      'Enterprise sales complexity as they scale',
    ],

    designTeam: {
      cpo: 'Jori Lallo (Co-founder)',
      designHead: 'Karri Saarinen (CEO, ex-designer)',
      teamSize: '~10-15',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI triage logic',
          'Smart prioritization',
          'Workflow automation rules',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Team velocity metrics',
          'AI suggestion accuracy',
          'User satisfaction tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Keyboard-first interactions',
          'Speed optimization',
          'Cross-platform consistency',
          'Design system maintenance',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [
      {
        name: 'Karri Saarinen',
        role: 'CEO & Co-founder',
        platform: 'twitter',
        url: 'https://twitter.com/karrisaarinen',
        description: 'Design thoughts, Linear updates',
      },
      {
        name: 'Linear Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://linear.app/blog',
        description: 'Product and design updates',
      },
    ],
    openRoles: [], // No Product Designer roles open (only Web & Brand Designer)

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.8,
        content: 'Remote-first, async culture. High bar for quality. Finnish work-life balance values.',
        url: 'https://www.glassdoor.com/Reviews/Linear-Reviews-E3834586.htm',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Developer community loves Linear. Strong brand advocacy. "The anti-Jira" positioning resonates.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Limited salary data. Remote-first means location-adjusted comp.',
        url: 'https://www.levels.fyi/companies/linear/',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "~$50M ARR (estimated, 2x YoY)",
      userGrowth: "25,000+ companies, growing steadily",
      signals: [
        "$1.6B valuation at Series C",
        "$152M total funding (Sequoia, a16z)",
        "25,000+ companies including Vercel, Stripe, Coinbase",
        "Profitable company (no burn)",
        "Designer-founder CEO (Karri Saarinen, ex-Airbnb Principal Designer)",
      ],

      tam: "$10B+ (Project management and issue tracking for software teams)",
      marketShare: "~0.5% (competing against Jira's dominance)",
      ceiling: "Mid innings: Engineering tools market is mature, but Linear is taking share from Jira. Ceiling depends on expanding beyond engineering teams.",
      tailwinds: [
        "Developer community strongly advocates for Linear over Jira",
        "Remote-first work increases need for async collaboration tools",
        "Modern engineering teams reject legacy enterprise tools",
        "Speed and polish create viral word-of-mouth",
      ],
      headwinds: [
        "Jira has massive enterprise footprint and Atlassian ecosystem lock-in",
        "Notion, Asana expanding into project management",
        "Limited to engineering teams (not cross-functional like Asana)",
        "Enterprise sales cycle is slow vs product-led growth",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Workflow integration creates switching costs, and developer brand loyalty is strong. But no network effects. Quality and speed are defensible through design craft, but replicable.",
    },

    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Designer-CEO company',
        'Remote-first culture',
        'Product loved by developers',
        'Finnish design craft',
        'Profitable, sustainable growth',
      ],
      whyNot: [
        'Not L4 AI-native',
        'Smaller than Anthropic-scale impact',
      ],
      nextActions: [
        'Use Linear daily to understand product',
        'Follow Karri Saarinen\'s design thinking',
        'Apply for Senior/Staff role',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Linear Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/',
      },
      {
        title: 'Linear Blog - Series C Announcement',
        url: 'https://linear.app/now/building-our-way',
      },
      {
        title: 'Sequoia Spotlight',
        url: 'https://sequoiacap.com/article/linear-spotlight/',
      },
    ],
  },

  // ============================================
  // Notion - All-in-one Workspace
  // ============================================
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, wikis, and project management.',
    website: 'https://notion.so',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    stage: 'Series D (IPO potential)',
    valuation: '$10B (2021) → $11B tender (2024)',
    totalFunding: '$352.7M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2M', date: '2013-03', leadInvestors: ['First Round'] },
      { stage: 'Series A', amount: '$10M', date: '2019-04', valuation: '$800M', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$50M', date: '2020-07', valuation: '$2B', leadInvestors: ['Index Ventures'] },
      { stage: 'Series C', amount: '$275M', date: '2021-10', valuation: '$10B', leadInvestors: ['Sequoia', 'Coatue'] },
    ],
    revenue: '$500M ARR (Sept 2025)',
    growth: '~50% YoY',
    customers: '4M+ paying customers, 50% of Fortune 500',

    competitors: [
      {
        name: 'Confluence',
        description: 'Atlassian\'s wiki and documentation tool',
        whyTheyWin: 'Enterprise standard, Jira integration, established IT relationships',
      },
      {
        name: 'Coda',
        description: 'Doc-meets-spreadsheet platform',
        whyTheyWin: 'More powerful formulas, better for structured data, Google Docs alternative',
      },
      {
        name: 'Linear',
        description: 'Modern project management',
        whyTheyWin: 'Better for engineering workflows, speed-focused',
      },
    ],
    marketPosition: 'Default workspace for modern teams and individuals',
    moat: [
      'Consumer-grade UX in B2B space',
      'Block-based flexibility',
      'Strong brand with Gen Z and knowledge workers',
      'Network effects from templates and sharing',
    ],

    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. Notion AI for writing, Q&A, and search.',
    aiDesignChallenges: [
      'AI writing assistant integration',
      'Q&A across workspace knowledge',
      'AI without disrupting existing workflows',
      'Balancing AI features with simplicity',
    ],

    founders: [
      {
        name: 'Ivan Zhao',
        role: 'CEO',
        background: 'UBC Cognitive Science, designer background, built tools for thinking',
      },
      {
        name: 'Simon Last',
        role: 'Co-founder',
        background: 'Technical co-founder, built core architecture',
      },
    ],
    whyBuilding:
      'Inspired by tools like HyperCard and Smalltalk. Wanted to create a tool that\'s simple enough for anyone but powerful enough for complex work.',
    beliefs: [
      'Tools shape how we think',
      'Software should feel like physical craft',
      'Simplicity and power can coexist',
      'Accessible to non-technical users',
    ],
    designPhilosophy:
      'Ivan Zhao comes from design. Focus on timeless, crafted software. Inspired by German cameras, Japanese toys, Coca-Cola mass appeal.',
    greenFlags: [
      'Designer-founder CEO',
      'Strong product-market fit',
      'Profitable and sustainable',
      'Iconic brand among knowledge workers',
    ],
    redFlags: [
      'AI features playing catch-up',
      'Enterprise complexity increasing',
      'Large company (800+ employees)',
    ],

    designTeam: {
      designHead: 'Unknown',
      teamSize: '~50-60',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI writing suggestions',
          'Knowledge graph for Q&A',
          'Smart defaults and templates',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'AI answer quality metrics',
          'User engagement tracking',
          'Feature adoption analysis',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Block-based editing UX',
          'Cross-platform consistency',
          'Design system at scale',
          'Mobile experience',
        ],
      },
    },
    productStage: '10→100',

    designerLinks: [
      {
        name: 'Notion Design Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://notion.so/blog',
        description: 'Design and product updates',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco / New York (Hybrid)',
        url: 'https://jobs.ashbyhq.com/notion/d177d052-ef57-4900-acf2-d58e9eded620',
        level: 'Senior',
        type: 'full-time',
        compensation: '$105K-$250K + equity',
      },
      {
        title: 'Product Designer, Growth',
        location: 'San Francisco / New York (Hybrid)',
        url: 'https://www.notion.com/careers',
        level: 'Mid-Senior',
        type: 'full-time',
        compensation: '$105K-$260K',
      },
    ],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.3,
        content: 'Strong design culture. Designer-CEO influence. Good work-life balance for tech.',
        url: 'https://www.glassdoor.com/Reviews/Notion-Reviews-E1727417.htm',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Comp competitive but not top-tier. Culture shifting as company grows. Still good design team.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        rating: 4.2,
        content: 'Product Designer: $108K base avg. Total comp varies with level.',
        url: 'https://www.levels.fyi/companies/notion/',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$500M ARR (Sept 2025), ~1.5-2x YoY",
      userGrowth: "4M+ paying customers, 50% of Fortune 500",
      signals: [
        "$500M ARR, profitable",
        "$10B → $11B valuation (tender offer 2024)",
        "4M+ paying customers, 100M+ total users",
        "50% of Fortune 500 using Notion",
        "IPO-ready (Series D stage)",
      ],

      tam: "$50B+ (Productivity software for all knowledge workers)",
      marketShare: "~1% = 50x upside",
      ceiling: "Mid innings: Productivity tools market is mature (Microsoft Office, Google Workspace dominate), but Notion capturing modern team workflows. Ceiling depends on enterprise adoption depth.",
      tailwinds: [
        "Gen Z/millennial workforce prefers Notion over legacy tools",
        "Remote work drives demand for flexible collaboration",
        "Templates and community create network effects",
        "Block-based architecture enables customization vs rigid tools",
      ],
      headwinds: [
        "Microsoft/Google have distribution through enterprise bundles",
        "Notion AI playing catch-up to competitors",
        "Confluence entrenched in large enterprises",
        "Performance issues at scale (large workspaces)",
        "Enterprise feature gaps vs Confluence",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Switching costs from accumulated content and workflows create moat. Template sharing and community provide weak network effects. Brand with knowledge workers is strong, but feature set is replicable.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Designer-founder company',
        'Iconic, well-loved product',
        'Large design team — learn from others',
        'Stable, profitable business',
      ],
      whyNot: [
        'Not AI-native (AI is add-on)',
        'Large company, less startup energy',
        'Hybrid required',
      ],
      nextActions: [
        'Monitor AI feature development',
        'Check if fully remote roles open',
        'Research design team structure',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Notion $10B Valuation - SaaStr',
        url: 'https://www.saastr.com/notion-and-growing-into-your-10b-valuation-a-masterclass-in-patience/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/notion/',
      },
    ],
  },

  // ============================================
  // Figma - Design Platform
  // ============================================
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative design platform. The Google Docs of design tools.',
    website: 'https://figma.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid (US/Canada remote)',

    stage: 'Public (NYSE: FIG)',
    valuation: '$57B market cap (July 2025 IPO)',
    totalFunding: '$615M pre-IPO',
    fundingHistory: [
      { stage: 'Seed', amount: '$3.8M', date: '2013-06', leadInvestors: ['Index Ventures'] },
      { stage: 'Series A', amount: '$14M', date: '2015-12', leadInvestors: ['Greylock'] },
      { stage: 'Series B', amount: '$25M', date: '2018-02', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series C', amount: '$40M', date: '2019-04', leadInvestors: ['Sequoia'] },
      { stage: 'Series D', amount: '$50M', date: '2020-04', valuation: '$2B', leadInvestors: ['a16z'] },
      { stage: 'Series E', amount: '$200M', date: '2021-06', valuation: '$10B', leadInvestors: ['Various'] },
      { stage: 'IPO', amount: 'N/A', date: '2025-07', valuation: '$57B', leadInvestors: ['Public'] },
    ],
    revenue: '$820M (2025)',
    growth: 'Strong, IPO validated',
    customers: 'Designers worldwide, enterprises, startups',

    competitors: [
      {
        name: 'Adobe XD',
        description: 'Adobe\'s design tool (discontinued)',
        whyTheyWin: 'Was Adobe ecosystem, now Figma won',
      },
      {
        name: 'Sketch',
        description: 'Mac-native design tool',
        whyTheyWin: 'Mac-native performance, offline-first, loyal base',
      },
      {
        name: 'Framer',
        description: 'Design + code publishing',
        whyTheyWin: 'Design-to-production workflow, website builder',
      },
    ],
    marketPosition: 'Dominant design tool for product teams',
    moat: [
      'Real-time collaboration (first mover)',
      'Browser-based — no install friction',
      'Network effects from team adoption',
      'Ecosystem of plugins and community',
    ],

    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. Figma AI for design generation and editing.',
    aiDesignChallenges: [
      'AI-assisted design generation',
      'Design-to-code with AI',
      'Smart component suggestions',
      'Accessibility checker AI',
    ],

    founders: [
      {
        name: 'Dylan Field',
        role: 'CEO',
        background: 'Brown dropout, Thiel Fellow, ex-LinkedIn/Flipboard intern',
      },
      {
        name: 'Evan Wallace',
        role: 'Co-founder (left 2021)',
        background: 'Brown CS, built WebGL renderer, ex-Microsoft/Pixar',
      },
    ],
    whyBuilding:
      'Saw design tools were stuck in desktop era. Believed browser could enable real-time collaboration that would transform how teams design.',
    beliefs: [
      'Design should be collaborative',
      'Browser can match native performance',
      'Lower barriers to design',
      'Community and ecosystem matter',
    ],
    designPhilosophy:
      'Design is a team sport. Focus on collaboration, accessibility, and lowering barriers. Make design tools for everyone, not just designers.',
    greenFlags: [
      'Market leader in design tools',
      'Public company — stability',
      'Strong engineering culture',
      'Adobe deal showed value ($20B offer)',
    ],
    redFlags: [
      'Public company — less startup energy',
      'AI features catching up to hype',
      'Large company bureaucracy',
    ],

    designTeam: {
      teamSize: '~100+ (large design org)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'AI generation logic',
          'Smart selection algorithms',
          'Design-to-code conversion',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'AI output quality metrics',
          'User productivity measurement',
          'Feature adoption tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Core editor experience',
          'Prototyping tools',
          'Design system features',
          'FigJam collaboration',
        ],
      },
    },
    productStage: '10→100',

    designerLinks: [
      {
        name: 'Figma Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://figma.com/blog',
        description: 'Product updates and design insights',
      },
      {
        name: 'Dylan Field',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://twitter.com/zoink',
        description: 'Company updates, design industry thoughts',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer, AI',
        location: 'San Francisco / New York / Remote (US/Canada)',
        url: 'https://boards.greenhouse.io/figma',
        team: 'AI',
        level: 'Mid-Senior',
        type: 'full-time',
        postedDate: '2025-01',
        aboutRole: 'Design AI-powered features that help designers work faster and better.',
        responsibilities: [
          'Design AI generation and editing experiences',
          'Define AI interaction patterns for design tools',
          'Prototype and test AI features',
          'Collaborate with ML engineers on capabilities',
        ],
        requirements: [
          'Strong product design portfolio',
          'Experience shipping AI/ML products',
          'Figma expertise (obviously)',
          'Prototyping skills',
        ],
        preferred: [
          'Background in design tools',
          'Understanding of generative AI',
          'Systems design experience',
        ],
        teamInfo: 'Public company. Large design org. Hybrid with remote option in US/Canada.',
        whyInteresting: 'Shape the future of design tools. AI is transforming creative work — be at the center of it.',
      },
    ],

    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'positive',
        rating: 4.5,
        content: 'Great culture, strong design team. Compensation competitive. Work-life balance good for tech.',
        url: 'https://www.glassdoor.com/Reviews/Figma-Reviews-E1537054.htm',
      },
      {
        source: 'blind',
        sentiment: 'positive',
        content: 'Good comp, RSUs valuable post-IPO. Culture still startup-ish despite size.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        rating: 4.4,
        content: 'Product Designer: $150K-200K+ base. Strong equity component.',
        url: 'https://www.levels.fyi/companies/figma/',
      },
    ],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: "$820M (2025), ~1.5x YoY",
      userGrowth: "Millions of designers globally, enterprise adoption growing",
      signals: [
        "$57B market cap at IPO (July 2025)",
        "$820M revenue (2025), growing steadily",
        "Dominant design tool for product teams",
        "Adobe attempted $20B acquisition (blocked by regulators)",
        "Public company validation",
      ],

      tam: "$15B+ (Design and creative software market)",
      marketShare: "~5% = 3x upside (already market leader in product design)",
      ceiling: "Late innings: Figma already won product design tool category. Growth depends on expanding to adjacent markets (design-to-code, prototyping, whiteboarding).",
      tailwinds: [
        "Real-time collaboration is now table stakes for all tools",
        "Browser-based removes install friction",
        "Community plugins and templates create ecosystem lock-in",
        "Enterprise adoption increasing as design teams scale",
      ],
      headwinds: [
        "Adobe XD discontinued but Adobe still owns creative suite ecosystem",
        "Sketch maintaining loyal Mac-native user base",
        "Framer competing in design-to-production workflow",
        "Public company: growth expectations, bureaucracy increasing",
        "AI features behind expectations (Figma AI underwhelming)",
      ],

      moatType: 'network-effects',
      moatStrength: "Strong: Real-time collaboration creates team-level network effects (designers pull in their teams). Plugin ecosystem and community files create switching costs. Market leader brand is defensible.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Leader in design tools',
        'Work on tools designers use',
        'Strong comp and stability (public)',
        'AI features growing',
      ],
      whyNot: [
        'Not AI-native company',
        'Large company, less impact per person',
        'Hybrid required for most roles',
      ],
      nextActions: [
        'Monitor AI team growth',
        'Check if fully remote opens up',
        'Research Figma AI roadmap',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Figma IPO - CNBC',
        url: 'https://www.cnbc.com/2024/05/16/figma-tender-offer-values-company-at-12point5-billion.html',
      },
      {
        title: 'Figma S-1 Filing',
        url: 'https://getlatka.com/blog/figma-revenue/',
      },
    ],
  },

  // ============================================
  // Mistral AI - European AI Lab
  // ============================================
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'European AI lab building open-weight and commercial LLMs. The French challenger to OpenAI.',
    website: 'https://mistral.ai',
    headquarters: 'Paris, France',
    remote: 'Yes (Europe timezone)',

    stage: 'Series C',
    valuation: '$14B (Sept 2025)',
    totalFunding: '$3.05B',
    fundingHistory: [
      { stage: 'Seed', amount: '€105M', date: '2023-06', leadInvestors: ['Lightspeed'] },
      { stage: 'Series A', amount: '€385M', date: '2023-12', leadInvestors: ['a16z'] },
      { stage: 'Series B', amount: '€600M', date: '2024-06', valuation: '$6.2B', leadInvestors: ['General Catalyst'] },
      { stage: 'Series C', amount: '€1.7B', date: '2025-09', valuation: '$14B', leadInvestors: ['ASML'] },
    ],
    revenue: 'Growing (not disclosed)',
    growth: 'Fastest European AI unicorn — $14B in 29 months',
    customers: 'Enterprises, developers, European companies',

    competitors: [
      {
        name: 'OpenAI',
        description: 'GPT models, ChatGPT, market leader',
        whyTheyWin: 'First mover, brand recognition, Microsoft partnership',
      },
      {
        name: 'Anthropic',
        description: 'Claude, safety-focused AI',
        whyTheyWin: 'Enterprise trust, Claude quality, safety reputation',
      },
      {
        name: 'Cohere',
        description: 'Enterprise LLM platform',
        whyTheyWin: 'Enterprise focus, RAG expertise, data privacy',
      },
    ],
    marketPosition: 'European AI champion, open-weight leader',
    moat: [
      'Open-weight models — developer trust',
      'European data sovereignty positioning',
      'Ex-DeepMind/Meta AI founding team',
      'ASML backing — hardware advantage',
    ],

    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Building foundation models.',
    aiDesignChallenges: [
      'API and developer experience',
      'Model playground and testing tools',
      'Enterprise deployment interfaces',
      'AI safety and control UX',
    ],

    founders: [
      {
        name: 'Arthur Mensch',
        role: 'CEO',
        background: 'Ex-DeepMind, École Polytechnique, PhD in ML',
      },
      {
        name: 'Guillaume Lample',
        role: 'Chief Scientist',
        background: 'Ex-Meta AI, created LLaMA, Carnegie Mellon',
      },
      {
        name: 'Timothée Lacroix',
        role: 'CTO',
        background: 'Ex-Meta AI, École Normale Supérieure, optimization expert',
      },
    ],
    whyBuilding:
      'Saw opportunity to build European AI champion. Believed open-weight models could compete with closed APIs. Wanted to keep AI development in Europe.',
    beliefs: [
      'Open-weight models benefit everyone',
      'Europe needs AI sovereignty',
      'Efficiency over brute-force scaling',
      'Science-first approach to AI',
    ],
    greenFlags: [
      'World-class founding team (DeepMind, Meta AI)',
      'Open-weight philosophy — developer love',
      'European funding and support',
      'ASML partnership — hardware access',
    ],
    redFlags: [
      'Competing with OpenAI/Anthropic',
      'European talent market smaller',
      'Less enterprise presence than US competitors',
    ],

    designTeam: {
      teamSize: '~5-10 (engineering-heavy)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Model behavior controls',
          'Safety guardrails UX',
          'Fine-tuning interfaces',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Model quality evaluation tools',
          'Benchmark visualization',
          'User feedback integration',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'API console and playground',
          'Documentation experience',
          'Enterprise deployment dashboard',
          'Model comparison tools',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [
      {
        name: 'Mistral Blog',
        role: 'Company',
        platform: 'blog',
        url: 'https://mistral.ai/news',
        description: 'Model releases and research',
      },
    ],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Paris, France (Remote Europe)',
        url: 'https://jobs.lever.co/mistral',
        team: 'Product',
        level: 'Mid-Senior',
        type: 'full-time',
        postedDate: '2025-01',
        aboutRole: 'Design intuitive and user-friendly product experiences for AI applications from brainstorming to delivery.',
        responsibilities: [
          'Design end-to-end user experiences for AI applications',
          'Prototype and iterate quickly',
          'Collaborate with teams on consistent design',
          'Build developer-facing tools and consoles',
        ],
        requirements: [
          'Strong product design portfolio',
          'Experience with developer tools or APIs',
          'Based in Europe or Europe-timezone compatible',
          'English fluency (French a plus)',
        ],
        preferred: [
          'AI/ML product experience',
          'Technical background',
          'Startup experience',
        ],
        teamInfo: 'Paris-based with remote Europe option. Small design team at a $14B company. Engineering-heavy culture.',
        whyInteresting: 'L4 AI-native European champion. Ex-DeepMind/Meta founding team. Open-weight philosophy is refreshing.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. French AI talent concentration. Fast-moving despite large funding.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Strong developer community support. Open-weight models earn goodwill.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Limited reviews — young company. European work culture expected.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No salary data yet. European comp + equity.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M ARR (estimated 2025), ~3x YoY",
      userGrowth: "Developers globally, enterprise adoption growing",
      signals: [
        "$6.2B valuation at Series C (10x from $600M in 12 months)",
        "$1.17B raised in 18 months",
        "Fastest European AI startup to $6B+ valuation",
        "DeepMind/Meta AI research talent founders",
        "European open-weight AI champion",
      ],

      tam: "$500B+ (Foundation model market = all AI applications)",
      marketShare: "<0.1% (competing against OpenAI, Anthropic, Google)",
      ceiling: "Early innings: Foundation model market is forming. European sovereignty angle creates regional moat, but global market dominated by US/Chinese players.",
      tailwinds: [
        "European data sovereignty concerns favor Mistral over US providers",
        "Open-weight models capture developer trust and experimentation",
        "EU AI regulations may favor European providers",
        "French government support (AI strategy)",
        "Enterprise demand for self-hosted models (security, control)",
      ],
      headwinds: [
        "OpenAI, Anthropic, Google have larger compute budgets",
        "Meta's open-source Llama is free and competitive",
        "Limited consumer distribution vs ChatGPT",
        "European market smaller than US/Asia",
        "Talent competition with US AI labs (higher comp)",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Research talent and European positioning create differentiation. Open-weight strategy builds developer mindshare but limits monetization. No network effects, model quality is competitive moat.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'L4 AI-native company',
        'World-class founding team',
        'Remote Europe option',
        'Open-weight philosophy',
        '$14B but still early-stage feel',
      ],
      whyNot: [
        'Paris-based (timezone)',
        'Smaller than Anthropic/OpenAI',
        'Engineering-dominated culture',
      ],
      nextActions: [
        'Research Mistral product roadmap',
        'Try Mistral API and models',
        'Check timezone compatibility',
      ],
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Mistral Series C - Official',
        url: 'https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai',
      },
      {
        title: 'Mistral $14B Valuation - TechFundingNews',
        url: 'https://techfundingnews.com/mistral-ai-raises-2-billion-valuation-europe-ai-frontrunner/',
      },
    ],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor that helps developers write code faster with intelligent autocomplete and chat.',
    website: 'https://cursor.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // Business
    stage: 'Series D',
    valuation: '$29.3B (Nov 2025)',
    totalFunding: '$3.6B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$8M', date: '2023-03', leadInvestors: ['OpenAI Startup Fund'] },
      { stage: 'Series A', amount: '$20M', date: '2024-01', valuation: '$400M', leadInvestors: ['Andreessen Horowitz'] },
      { stage: 'Series B', amount: '$105M', date: '2024-12', valuation: '$2.5B', leadInvestors: ['Thrive Capital', 'a16z'] },
      { stage: 'Series C', amount: '$900M', date: '2025-06', valuation: '$9.9B', leadInvestors: ['Thrive Capital'] },
      { stage: 'Series D', amount: '$2.3B', date: '2025-11', valuation: '$29.3B', leadInvestors: ['Accel', 'Coatue'] },
    ],
    revenue: '~$1B+ ARR (Dec 2025)',
    growth: 'Fastest SaaS ever: $1M→$1B ARR in ~2 years',
    runway: 'Strong — profitable, $2.3B cash',
    customers: 'Millions of developers globally',

    // Competition
    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'Microsoft-backed AI coding assistant, integrated in VS Code',
        whyTheyWin: 'Distribution through GitHub/VS Code, enterprise adoption',
      },
      {
        name: 'Replit',
        description: 'Browser-based IDE with AI features',
        whyTheyWin: 'No setup required, strong education market',
      },
      {
        name: 'Codeium',
        description: 'Free AI code completion',
        whyTheyWin: 'Free tier, enterprise deployment options',
      },
    ],
    marketPosition: '#1 in AI Code Editors',
    moat: [
      'Best-in-class AI coding UX (Composer, multi-file edits)',
      'Tab completion feels magical — high switching cost',
      'Model-agnostic: uses Claude, GPT-4, custom models',
      'Fastest-growing SaaS company ever by ARR',
    ],
    vsGiants: 'Outpacing GitHub Copilot in features and UX. Built on VS Code but better AI integration. Pure focus on AI-first development vs Microsoft spreading across many products.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Editor exists for AI features.',
    aiDesignChallenges: [
      'Composer UX: multi-file AI edits with context awareness',
      'Tab completion: making AI suggestions feel natural, not intrusive',
      'Agent mode: designing for autonomous coding tasks',
      'Trust and transparency: showing what AI changed and why',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Michael Truell',
        role: 'CEO',
        background: 'MIT CS, dropped out to build Cursor. Father is tech investor.',
      },
      {
        name: 'Sualeh Asif',
        role: 'CPO',
        background: 'MIT Mathematics, competitive programming background',
      },
      {
        name: 'Arvid Lunnemark',
        role: 'CTO',
        background: 'MIT CSAIL research, ML infrastructure',
      },
      {
        name: 'Aman Sanger',
        role: 'Product Lead',
        background: 'MIT CSAIL research, AI/ML systems',
      },
    ],
    whyBuilding:
      'Four MIT friends saw that coding would be fundamentally transformed by AI. Left school to build the editor they wanted to use themselves.',
    beliefs: [
      'AI will write most code in the future',
      'Developer experience must be magical, not clunky',
      'Stay small, move fast, ship constantly',
      'Product quality over marketing',
    ],
    designPhilosophy:
      'Make AI feel like a brilliant pair programmer, not a chatbot. Every interaction should feel faster than coding alone.',
    greenFlags: [
      'Founders are 25-year-old billionaires who still code',
      'Product-obsessed culture, ship extremely fast',
      'Small team (< 50) at $29B valuation',
      'Design roles report to Engineering — integrated',
    ],
    redFlags: [
      'No dedicated design leadership yet',
      'Hypergrowth may change culture rapidly',
      'In-person only (SF/NY)',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small (< 5 designers)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Composer: defining multi-file edit behavior and constraints',
          'Tab completion: when to suggest, how aggressive',
          'Agent mode: autonomous task execution rules',
          'Context management: what AI sees and uses',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Suggestion acceptance rate optimization',
          'User satisfaction with AI edits',
          'Speed vs accuracy tradeoffs',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Code diff visualization for AI changes',
          'Inline AI suggestions without disruption',
          'Composer multi-file editing UI',
          'Settings and model selection',
        ],
      },
    },
    productStage: '0→1 to 1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco / New York (In-person)',
        url: 'https://cursor.com/careers/product-designer',
        team: 'Engineering',
        level: 'Senior',
        type: 'full-time',
        aboutRole: 'Help 10x the product. Design core features that define human-AI collaboration in coding.',
        responsibilities: [
          'Design and ship features for AI-first software development',
          'Own end-to-end design from concept to implementation',
          'Solve complex UX challenges at intersection of AI and human intent',
          'Work directly with founding team',
        ],
        requirements: [
          'Strong portfolio of shipped product design',
          'Experience with developer tools or complex workflows',
          'Ability to define new UX patterns',
          'Systems thinking and interaction design',
        ],
        whyInteresting: 'Shape the future of how code is written. Tiny team, massive impact. Fastest-growing SaaS ever.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Four MIT friends, all 25, now billionaires. Still code daily. Extremely flat organization.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Ship velocity is legendary. Multiple major features per month. Product quality obsession.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Small team, intense pace. In-person required. Strong equity upside.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Limited salary data. Strong equity packages given valuation trajectory.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "~$1B+ ARR (Dec 2025), 10x+ YoY (fastest SaaS ever: $1M→$1B in ~2 years)",
      userGrowth: "Millions of developers globally, 30,000+ teams",
      signals: [
        "$29.3B valuation at Series D (11x from $2.5B in 11 months)",
        "$1B+ ARR = fastest SaaS ever to $1B",
        "Millions of developers, default AI coding tool",
        "Profitable with strong unit economics",
        "Four 25-year-old MIT billionaire founders still coding daily",
      ],

      tam: "$100B+ (All software development globally)",
      marketShare: "~1% = 100x upside",
      ceiling: "Very early innings: AI coding is nascent. Cursor defining the category. Potential to replace VS Code/IDEs entirely as AI capabilities improve.",
      tailwinds: [
        "AI coding wave: every developer will use AI tools",
        "Tab completion creates switching costs (habit formation)",
        "Claude partnership = best-in-class model access",
        "Developer word-of-mouth drives viral growth",
        "Small team (<50) at $29B = extreme efficiency",
      ],
      headwinds: [
        "GitHub Copilot has Microsoft distribution (bundled with GitHub)",
        "VS Code could integrate AI features natively",
        "Replit, Codeium, and others competing for market",
        "Model providers (Anthropic, OpenAI) could build own editors",
        "In-person only limits talent pool",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium-Strong: Tab completion and workflow integration create high switching costs (muscle memory, productivity gains). Product quality and ship velocity are defensive. No network effects, but developer brand loyalty building.",
    },

    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Frontier AI coding UX — defining the future',
        'Tiny team, massive valuation = huge ownership potential',
        'Product-obsessed founders who ship fast',
      ],
      whyNot: [
        'No design leadership — you must be self-directed',
        'In-person only (SF/NY)',
        'Hypergrowth culture may not suit everyone',
      ],
      nextActions: ['Apply to Product Designer role', 'Try Cursor extensively first'],
      notes: 'Most exciting AI code editor. Design role could shape entire industry.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Cursor $29.3B Series D - CNBC',
        url: 'https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html',
      },
      {
        title: 'Cursor Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/cursor/',
      },
    ],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered answer engine that provides direct answers with sources, challenging Google Search.',
    website: 'https://perplexity.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series D',
    valuation: '$20B (Sept 2025)',
    totalFunding: '$1.5B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$5M', date: '2022-08', leadInvestors: ['NEA'] },
      { stage: 'Series A', amount: '$26M', date: '2023-03', leadInvestors: ['NEA'] },
      { stage: 'Series B', amount: '$74M', date: '2024-01', valuation: '$520M', leadInvestors: ['IVP', 'Nvidia'] },
      { stage: 'Series C', amount: '$250M', date: '2024-08', valuation: '$3B', leadInvestors: ['SoftBank'] },
      { stage: 'Series D', amount: '$200M', date: '2025-09', valuation: '$20B', leadInvestors: ['SoftBank'] },
    ],
    revenue: '~$200M ARR (2025)',
    growth: '3x YoY (2024 $63M → 2025 $200M)',
    runway: 'Strong — well-funded, growing revenue',
    customers: '30M+ monthly active users',

    // Competition
    competitors: [
      {
        name: 'Google Search',
        description: 'Dominant search engine, adding AI overviews',
        whyTheyWin: 'Ubiquitous distribution, user habit, data moat',
      },
      {
        name: 'ChatGPT',
        description: 'OpenAI conversational AI with search capabilities',
        whyTheyWin: 'Brand recognition, GPT model quality',
      },
      {
        name: 'You.com',
        description: 'AI search engine',
        whyTheyWin: 'Earlier to market, developer features',
      },
    ],
    marketPosition: '#1 in AI Search Engines',
    moat: [
      'Best-in-class answer quality with source citations',
      'Multi-model approach (uses Claude, GPT-4, own models)',
      'Pro subscription with unlimited queries',
      'Chrome browser Comet launched for deeper integration',
    ],
    vsGiants: 'Attacking Google where it hurts — information retrieval. Not trying to be everything, just the best answer engine. Sources and transparency build trust vs Google AI Overviews.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Answer engine is 100% AI-powered.',
    aiDesignChallenges: [
      'Answer presentation: balancing brevity with depth',
      'Source citation UX: making citations trustworthy and accessible',
      'Follow-up queries: guiding users to better questions',
      'Multi-modal answers: images, videos, structured data',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Aravind Srinivas',
        role: 'CEO',
        background: 'PhD UC Berkeley, ex-OpenAI, ex-DeepMind, ex-Google Brain',
      },
      {
        name: 'Denis Yarats',
        role: 'CTO',
        background: 'Ex-Meta AI Research, ML infrastructure expert',
      },
      {
        name: 'Johnny Ho',
        role: 'CSO',
        background: 'Ex-Quora, #1 competitive programmer globally',
      },
      {
        name: 'Andy Konwinski',
        role: 'Co-founder',
        background: 'Databricks founding team',
      },
    ],
    whyBuilding:
      'Aravind saw that search was fundamentally broken — 10 blue links were obsolete. Wanted to give people answers, not websites.',
    beliefs: [
      'Search should give answers, not links',
      'Sources and citations build trust',
      'Speed matters — answers should be instant',
      'AI can democratize access to knowledge',
    ],
    designPhilosophy:
      'Clean, fast, trustworthy. Every answer should cite sources. No ads cluttering the experience.',
    greenFlags: [
      'World-class AI research team (OpenAI, DeepMind, Google Brain)',
      'Clear product vision that users love',
      'Jeff Bezos and Nvidia as investors',
      'Growing fast in competitive search market',
    ],
    redFlags: [
      'Taking on Google is extremely hard',
      'Small design team for the challenge',
      'Legal issues with publishers over content',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small (< 10)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Answer generation logic and formatting rules',
          'Source ranking and citation display logic',
          'Follow-up question suggestions',
          'Pro vs Free feature differentiation',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Answer quality metrics and evaluation',
          'Source accuracy verification UX',
          'User satisfaction measurement',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Answer display with inline citations',
          'Search input and suggestions',
          'Pro features and settings',
          'Mobile app experience',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles - NONE CURRENTLY
    openRoles: [],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Elite AI research team. Founders from top AI labs. Fast-paced startup culture.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Aravind is highly visible on Twitter, shares product thinking openly. Transparent culture.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Small team, intense environment. High expectations, strong talent density.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Designer: $100K-$200K+ estimated. Limited public data.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "~$200M ARR (2025), 3x YoY ($63M → $200M)",
      userGrowth: "30M+ monthly active users",
      signals: [
        "$20B valuation at Series D (6.7x from $3B in 13 months)",
        "$200M ARR with strong growth trajectory",
        "30M+ monthly active users",
        "Chrome browser 'Comet' launched (distribution play)",
        "SoftBank + Nvidia backing",
      ],

      tam: "$300B+ (Global search and information retrieval market)",
      marketShare: "<0.1% (Google has 90%+ of search)",
      ceiling: "Very early innings: AI search is nascent, user behavior is changing but Google habits are deeply ingrained. Ceiling depends on capturing next generation of information seekers.",
      tailwinds: [
        "Gen Z/millennials prefer direct answers over links",
        "AI answer quality improving rapidly",
        "Source citations build trust vs Google AI Overviews",
        "Comet browser extension deepens distribution",
        "Pro subscription model validated ($20/month unlimited)",
      ],
      headwinds: [
        "Google has ubiquitous distribution (default browser, mobile)",
        "ChatGPT brand recognition in conversational AI",
        "Publishers suing over content usage (legal risk)",
        "Google ramping up AI Overviews (fighting back)",
        "Search advertising model TBD (monetization risk)",
      ],

      moatType: 'brand',
      moatStrength: "Low-Medium: Product quality and answer accuracy are advantages, but no network effects. Multi-model approach (Claude, GPT-4) provides flexibility. Brand as 'AI search' leader is emerging but fragile against Google.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Attacking Google — ambitious mission',
        'World-class AI team (OpenAI, DeepMind alumni)',
        'Clean product with clear value prop',
      ],
      whyNot: [
        'No Product Designer roles open currently',
        'Small design team may limit growth',
        'Legal battles with publishers are concerning',
      ],
      nextActions: ['Monitor careers page for openings', 'Use Perplexity Pro to understand product deeply'],
      notes: 'Great product but no design openings. Keep watching.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Perplexity $20B Valuation - TechCrunch',
        url: 'https://techcrunch.com/2025/09/10/perplexity-reportedly-raised-200m-at-20b-valuation/',
      },
      {
        title: 'Perplexity Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/perplexity/',
      },
    ],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leading AI research company behind GPT-4, ChatGPT, and DALL-E. Pioneering AGI development.',
    website: 'https://openai.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // Business
    stage: 'Series F',
    valuation: '$300B+ (2025)',
    totalFunding: '$57.9B+',
    fundingHistory: [
      { stage: 'Seed', amount: '$1B', date: '2015-12', leadInvestors: ['Elon Musk', 'Sam Altman', 'Reid Hoffman'] },
      { stage: 'Series A', amount: '$1B', date: '2019-07', valuation: '$10B', leadInvestors: ['Microsoft'] },
      { stage: 'Series B', amount: '$10B', date: '2023-01', valuation: '$29B', leadInvestors: ['Microsoft'] },
      { stage: 'Series C', amount: '$300M', date: '2023-04', valuation: '$29B', leadInvestors: ['Sequoia', 'a16z'] },
      { stage: 'Series D', amount: '$6.6B', date: '2024-10', valuation: '$157B', leadInvestors: ['Thrive Capital'] },
      { stage: 'Series F', amount: '$40B', date: '2025-03', valuation: '$300B', leadInvestors: ['SoftBank'] },
    ],
    revenue: '~$20B+ ARR (Dec 2025)',
    growth: '3x YoY (2024 $6B → 2025 $20B)',
    runway: 'Burns $8B/year but well-funded for years',
    customers: '800M+ weekly users, 1M+ business customers',

    // Competition
    competitors: [
      {
        name: 'Anthropic',
        description: 'Claude models, safety-focused competitor',
        whyTheyWin: 'Safety narrative appeals to enterprises, Claude quality competitive',
      },
      {
        name: 'Google DeepMind',
        description: 'Gemini models integrated into Google',
        whyTheyWin: 'Unlimited resources, distribution through Google products',
      },
      {
        name: 'Meta AI',
        description: 'Llama open-source models',
        whyTheyWin: 'Open-source captures developer mindshare',
      },
    ],
    marketPosition: '#1 in Consumer AI, #1 in mindshare',
    moat: [
      'ChatGPT brand recognition is unmatched',
      'First-mover advantage in consumer AI',
      'Microsoft partnership ($13B+ investment)',
      'Best talent density in AI research',
    ],
    vsGiants: 'THE giant. Sets the pace for the industry. Brand synonymous with AI. Microsoft partnership provides distribution and resources.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product. Building AGI is the mission.',
    aiDesignChallenges: [
      'ChatGPT UX: conversational AI at massive scale',
      'Multi-modal interactions: voice, vision, code in one product',
      'Enterprise features: teams, security, customization',
      'Operator/Agent UX: autonomous AI actions with human oversight',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Sam Altman',
        role: 'CEO',
        background: 'Ex-Y Combinator President, serial entrepreneur',
      },
      {
        name: 'Greg Brockman',
        role: 'President',
        background: 'Ex-Stripe CTO',
      },
    ],
    whyBuilding:
      'Founded in 2015 to ensure AGI benefits humanity. Sam Altman returned after brief ousting in 2023.',
    beliefs: [
      'AGI will be the most transformative technology in human history',
      'Safety and capability should advance together',
      'Broad distribution is better than hoarding AI',
      'Move fast, ship products to learn',
    ],
    designPhilosophy:
      'Make AI accessible to everyone. ChatGPT should be as easy as texting. Recently hiring top design talent (Jony Ive team).',
    greenFlags: [
      'Hired Jony Ive (Apple) and his team members',
      'Kevin Weil as CPO (ex-Instagram VP)',
      'Design investment increasing significantly',
      'Multiple Product Designer roles open',
    ],
    redFlags: [
      'Massive company — bureaucracy risk',
      'Governance drama (Sam Altman ousting)',
      'Safety team departures concerning',
      'In-person only (SF)',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Kevin Weil (ex-Instagram VP Product)',
      teamSize: 'Growing (50+)',
      notableMembers: [
        { name: 'Tang Tan', role: 'Design (ex-Jony Ive team, Apple)' },
        { name: 'Evans Hankey', role: 'Design (ex-Apple VP Design)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'ChatGPT personality and response patterns',
          'Multi-modal interaction logic (text, voice, vision)',
          'Operator/Agent autonomous action rules',
          'Custom GPT behavior configuration',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Response quality evaluation frameworks',
          'User satisfaction and engagement metrics',
          'Safety and alignment testing UX',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'ChatGPT web and mobile experiences',
          'Voice mode interface',
          'Enterprise dashboard and admin tools',
          'Developer platform and API documentation',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, ChatGPT',
        location: 'San Francisco (In-person)',
        url: 'https://openai.com/careers/product-designer-chatgpt-san-francisco/',
        level: 'Senior',
        type: 'full-time',
        compensation: '$200K-$310K + equity',
      },
      {
        title: 'Product Designer, Platform & Tools',
        location: 'San Francisco / New York',
        url: 'https://openai.com/careers/product-designer-platform-and-tools-san-francisco/',
        level: 'Senior',
        type: 'full-time',
        compensation: '$200K-$310K + equity',
      },
      {
        title: 'Product Designer, Growth',
        location: 'San Francisco',
        url: 'https://openai.com/careers/product-designer-growth-san-francisco/',
        level: 'Senior',
        type: 'full-time',
        compensation: '$200K-$310K + equity',
      },
    ],

    cultureInsights: [
      {
        source: 'blind',
        sentiment: 'positive',
        content: 'Top talent density. Competitive comp. Fast-paced. High expectations.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Major design investment — Jony Ive team hires signal design priority.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Intense work environment. Politics exist at senior levels. Great pay and equity.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'positive',
        content: 'Product Designer: $200K-$310K base. Strong equity. Total comp very competitive.',
        url: 'https://www.levels.fyi/companies/openai/salaries/product-designer',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$20B ARR (2025), 10x+ YoY ($2B → $20B)",
      userGrowth: "300M+ weekly active users, fastest consumer app to 200M users",
      signals: [
        "$300B+ valuation target (restructuring to for-profit)",
        "$20B ARR = largest AI company by revenue",
        "300M+ weekly active ChatGPT users",
        "Microsoft $13B partnership",
        "Jony Ive team hired (design investment)",
      ],

      tam: "$500B+ (AI for all knowledge work, automation, creativity)",
      marketShare: "~4% = 25x upside potential",
      ceiling: "Mid innings: ChatGPT defined the AI assistant category, but market is rapidly evolving. Ceiling depends on maintaining model quality lead and expanding beyond chat.",
      tailwinds: [
        "ChatGPT brand is synonymous with AI (like 'Google' for search)",
        "Microsoft distribution through Office, Azure, Windows",
        "Developer platform (GPT Store, API) creates ecosystem",
        "o1 reasoning model opens new use cases (coding, math, science)",
        "AGI narrative drives enterprise willingness to pay premium",
      ],
      headwinds: [
        "Anthropic's Claude growing faster in enterprise (32% vs OpenAI's declining share)",
        "Google has unlimited compute and distribution advantages",
        "Safety team departures hurt reputation",
        "Governance drama (Sam Altman firing/rehiring) created uncertainty",
        "Expensive compute burns $5B+/year, path to profitability unclear",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Brand dominance in consumer AI is massive, but models are commoditizing. Developer ecosystem and Microsoft partnership create distribution moat. No strong network effects beyond GPT Store.",
    },

    tracking: {
      status: 'interested',
      fitScore: 7,
      whyJoin: [
        'Define how billions interact with AI',
        'Working alongside Jony Ive team members',
        'Top compensation in the industry',
        'Most influential AI company',
      ],
      whyNot: [
        'Very large company now — not startup feel',
        'Governance drama and safety team departures',
        'In-person only (SF)',
        'May be harder to have outsized impact',
      ],
      nextActions: ['Apply to Product Designer role', 'Research which team (ChatGPT, Platform, Growth)'],
      notes: 'Biggest name in AI. Design investment increasing. Consider which team matters most.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'OpenAI $20B ARR - Sherwood News',
        url: 'https://sherwood.news/business/openais-arr-reached-over-usd20-billion-in-2025-cfo-says/',
      },
      {
        title: 'OpenAI Stats and Funding - Sacra',
        url: 'https://sacra.com/c/openai/',
      },
    ],
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Frontend cloud platform and creator of Next.js. Building the infrastructure for AI-native web.',
    website: 'https://vercel.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid (Remote OK)',

    // Business
    stage: 'Series F',
    valuation: '$9.3B (Sept 2025)',
    totalFunding: '$863M',
    fundingHistory: [
      { stage: 'Seed', amount: '$2.1M', date: '2016-08', leadInvestors: ['CRV'] },
      { stage: 'Series A', amount: '$21M', date: '2020-04', leadInvestors: ['Accel'] },
      { stage: 'Series B', amount: '$40M', date: '2020-12', valuation: '$500M', leadInvestors: ['GV'] },
      { stage: 'Series C', amount: '$102M', date: '2021-06', valuation: '$1.1B', leadInvestors: ['Bedrock'] },
      { stage: 'Series D', amount: '$150M', date: '2021-11', valuation: '$2.5B', leadInvestors: ['GIC'] },
      { stage: 'Series E', amount: '$250M', date: '2024-05', valuation: '$3.25B', leadInvestors: ['Accel'] },
      { stage: 'Series F', amount: '$300M', date: '2025-09', valuation: '$9.3B', leadInvestors: ['Accel', 'GIC'] },
    ],
    revenue: '~$200M ARR (May 2025)',
    growth: '82% YoY',
    runway: 'Strong — efficient growth, $300M fresh capital',
    customers: 'Uber, Notion, Zapier, PayPal, Under Armour',

    // Competition
    competitors: [
      {
        name: 'Netlify',
        description: 'Frontend deployment platform',
        whyTheyWin: 'Early mover in JAMstack, strong developer community',
      },
      {
        name: 'AWS Amplify',
        description: 'AWS frontend hosting',
        whyTheyWin: 'AWS ecosystem integration, enterprise relationships',
      },
      {
        name: 'Cloudflare Pages',
        description: 'Edge hosting with Cloudflare network',
        whyTheyWin: 'Global edge network, competitive pricing',
      },
    ],
    marketPosition: '#1 in Frontend-as-a-Service',
    moat: [
      'Next.js framework dominance — 500K+ developers',
      'v0 AI product generating $42M ARR in first year',
      'AI SDK: 3M downloads/week',
      'Best DX in deployment — git push and done',
    ],
    vsGiants: 'Owns the Next.js ecosystem. v0 positions them for AI-native development. Not trying to be all of AWS — focused on frontend excellence.',

    // AI-Native Level
    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. v0 and AI SDK are significant but not core platform.',
    aiDesignChallenges: [
      'v0: AI-generated UI component design and iteration',
      'AI SDK: developer experience for AI integration',
      'Deployment UX: making complex infrastructure feel simple',
      'Pricing and packaging: AI credits and usage models',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Guillermo Rauch',
        role: 'CEO',
        background: 'Creator of Socket.io, Next.js. Argentinian. Started coding as teen.',
      },
    ],
    whyBuilding:
      'Guillermo saw that the web was too slow and deployment too hard. Created Next.js and Vercel to make web development magical.',
    beliefs: [
      'Developer experience is everything',
      'The web should be fast by default',
      'Ship fast, iterate faster',
      'Open source wins (Next.js)',
    ],
    designPhilosophy:
      'Vercel-style: minimal, fast, dark mode, premium feel. Their aesthetic has become industry standard for developer tools.',
    greenFlags: [
      'v0 is the leading AI UI generator',
      'Remote-friendly culture',
      'Strong design culture — Vercel aesthetic is iconic',
      'Multiple Product Designer roles open',
    ],
    redFlags: [
      'Not purely AI — infrastructure company with AI features',
      'Competition from cloud giants increasing',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Director of Product Design',
      teamSize: 'Medium (20+)',
      notableMembers: [],
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'v0: AI component generation rules and constraints',
          'Deployment automation logic',
          'Usage limits and pricing tier logic',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'v0 output quality metrics',
          'Developer satisfaction measurement',
          'Deployment success rates',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'v0 AI interface and iteration flows',
          'Vercel dashboard and deployment UX',
          'Pricing, checkout, and billing flows',
          'Team and enterprise admin features',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [
      {
        name: 'Guillermo Rauch',
        role: 'CEO',
        platform: 'twitter',
        url: 'https://twitter.com/rauchg',
        description: 'Prolific tweeter about web, design, and AI',
      },
      {
        name: 'Vercel Design',
        role: 'Company',
        platform: 'blog',
        url: 'https://vercel.com/blog?tag=design',
        description: 'Vercel design blog posts',
      },
    ],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Remote (US) or SF/NY/London/Berlin',
        url: 'https://vercel.com/careers/senior-product-designer-us-5227493004',
        team: 'Product Design',
        level: 'Senior',
        type: 'full-time',
        compensation: '$156K-$234K base (SF)',
        aboutRole: 'Work across entire product solving complex, nuanced web challenges.',
        responsibilities: [
          'Design thoughtful, systems-based solutions',
          'Customer research and requirements gathering',
          'Deliver visual specs and oversee implementation',
          'Work on pricing, packaging, checkout flows',
        ],
        requirements: [
          'Strong systems thinking',
          'Comfort with modern design tools (Figma, v0, Cursor)',
          'Experience with complex B2B products',
        ],
        whyInteresting: 'Shape the tools that shape the web. Remote-friendly. Iconic design culture.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Remote-first, global team. Strong design culture. Guillermo is design-minded CEO.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Vercel aesthetic is industry benchmark. Team ships fast, high quality bar.',
      },
      {
        source: 'glassdoor',
        sentiment: 'positive',
        content: 'Good work-life balance for startup. Remote flexibility. Competitive comp.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Senior Product Designer: $156K-$234K base. Equity on top.',
        url: 'https://www.levels.fyi/companies/vercel/salaries/product-designer',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$300M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "1M+ developers, 3M+ sites deployed",
      signals: [
        "$3.25B valuation at Series E",
        "$700M+ total funding (Accel, GV, a16z)",
        "1M+ developers, 3M+ sites deployed",
        "Powers Next.js (most popular React framework)",
        "v0 launched = AI coding product expansion",
      ],

      tam: "$30B+ (Cloud deployment, hosting, and dev tools for web developers)",
      marketShare: "~1% (competing with AWS, Netlify, CloudFlare)",
      ceiling: "Mid innings: Developer infrastructure market is crowded, but Vercel owns Next.js ecosystem. v0 opens adjacent AI market ($100B+ if successful).",
      tailwinds: [
        "Next.js framework adoption growing (React dominance)",
        "Developer experience bar rising (Vercel sets standard)",
        "v0 AI coding tool expanding TAM beyond infrastructure",
        "Vercel aesthetic influences entire industry",
        "Remote-first = global talent access",
      ],
      headwinds: [
        "AWS has massive market share and ecosystem lock-in",
        "Netlify, CloudFlare, Railway competing on pricing",
        "v0 faces Cursor, Replit, GitHub Copilot competition",
        "Open-source Next.js can be deployed anywhere (reduces lock-in)",
        "Infrastructure commoditization pressure",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Next.js ecosystem creates switching costs, but framework is open-source. Developer experience and aesthetic brand are defensible. v0 could add AI moat if it wins.",
    },

    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'v0 is leading AI UI tool — frontier design work',
        'Remote-friendly with great culture',
        'Vercel aesthetic is industry-defining',
        'Guillermo is design-minded founder',
      ],
      whyNot: [
        'Not purely AI company — infrastructure focus',
        'May be less cutting-edge AI than pure AI companies',
      ],
      nextActions: ['Apply to Senior Product Designer', 'Use v0 extensively to understand product'],
      notes: 'Best of both worlds: AI features + proven business. Remote OK is huge plus.',
    },

    lastUpdated: '2025-01-25',
    sources: [
      {
        title: 'Vercel Series F - Official Blog',
        url: 'https://vercel.com/blog/series-f',
      },
      {
        title: 'Vercel Revenue and Stats - Sacra',
        url: 'https://sacra.com/c/vercel/',
      },
    ],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generative AI service that creates images from text prompts, accessed via web and Discord.',
    website: 'https://www.midjourney.com/',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Bootstrapped',
    valuation: 'Unknown',
    totalFunding: 'Self-funded (community-funded)',
    fundingHistory: [],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'OpenAI DALL·E',
        description: 'Text-to-image model',
        whyTheyWin: 'OpenAI brand and ChatGPT integration',
      },
      {
        name: 'Stable Diffusion',
        description: 'Open-source text-to-image ecosystem',
        whyTheyWin: 'Open-source, free to use',
      },
    ],
    moat: [
      'Community-backed research and fast iteration with small team',
      'Strong aesthetic quality in image generation',
    ],

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI image generation is the core product.',
    aiDesignChallenges: [
      'Designing prompt-to-image creative workflows across web and Discord',
      'Building tools that scale creator feedback into product decisions',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'David Holz',
        role: 'Founder & CEO',
        background: 'Co-founder of Leap Motion',
      },
    ],
    whyBuilding:
      'A community-backed research group focused on bold bets around the future of the human experience.',
    beliefs: [
      'Build tools that make people dream bigger and more capable',
      'Create AI tools that augment people rather than replace them',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Small team',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Image generation quality control and prompt understanding',
          'Creative workflow optimization',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Image quality metrics and user satisfaction',
          'Community feedback loops',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Discord bot UX and web interface',
          'Prompt building and iteration tools',
          'Image gallery and organization',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Remote (Bay Area and London preferred)',
        url: 'https://www.midjourney.com/careers',
        team: 'Frontend',
        level: 'Senior',
        type: 'full-time',
      },
    ],

    cultureInsights: [],

    growthMetrics: {
      stage: 'steady',
      revenueGrowth: "$300M ARR (estimated 2025), ~1.5x YoY",
      userGrowth: "20M+ users, strong creative community",
      signals: [
        "$300M+ ARR (bootstrapped, no VC funding)",
        "20M+ registered users",
        "Profitable since launch",
        "Small team (~100 people) = extreme efficiency",
        "Discord-native with 20M+ community members",
      ],

      tam: "$15B+ (Creative software, design, and content creation)",
      marketShare: "~2% (leading AI image generation for creators)",
      ceiling: "Mid-late innings: AI image generation is maturing. Midjourney won the creative/artistic segment, but commercial/enterprise adoption requires different features.",
      tailwinds: [
        "Bootstrapped = no VC pressure, sustainable business",
        "Creative community is loyal and vocal",
        "Discord distribution creates engagement moat",
        "Quality leader in artistic/creative generation",
        "Profitable allows R&D investment without burn pressure",
      ],
      headwinds: [
        "DALL-E 3 integrated into ChatGPT (massive distribution)",
        "Stable Diffusion open-source allows free self-hosting",
        "Adobe Firefly targeting commercial users with copyright protection",
        "Discord UX limits enterprise/professional adoption",
        "Copyright and legal concerns around training data",
      ],

      moatType: 'brand',
      moatStrength: "Medium: Brand as best creative AI image tool is strong among artists. Discord community creates engagement moat. But no network effects, and model quality is replicable.",
    },

    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Bootstrapped — no VC pressure',
        'Creative AI at its best',
        'Remote-friendly',
      ],
      whyNot: [
        'Unknown team size and structure',
        'Discord-first UX may be limiting',
      ],
      nextActions: ['Check if Product Designer role is still open', 'Use Midjourney extensively'],
      notes: 'Bootstrapped creative AI company with strong community.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Midjourney Careers',
        url: 'https://www.midjourney.com/careers',
      },
      {
        title: 'Midjourney (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Midjourney',
      },
    ],
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'Generative AI company building video and multimedia creation tools.',
    website: 'https://runwayml.com/',
    headquarters: 'New York City, NY',
    remote: 'Yes',

    // Business
    stage: 'Series D',
    valuation: 'Unknown',
    totalFunding: '$536.5M (as of Apr 2025)',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$308M',
        date: '2025-04',
        leadInvestors: ['General Atlantic'],
      },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Strong — $308M Series D',

    // Competition
    competitors: [
      {
        name: 'Pika',
        description: 'Text-to-video generation',
        whyTheyWin: 'Faster iteration, simpler UX',
      },
    ],
    moat: [
      'Focus on world simulators for media generation',
      'Runway Studios as in-house film and animation arm',
    ],

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI-generated video and media tools are the core product.',
    aiDesignChallenges: [
      'Designing creation workflows for text-to-video and multimedia generation',
      'Helping users control consistency across scenes and outputs',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Cristóbal Valenzuela',
        role: 'Co-founder & CEO',
        background: 'Co-founded Runway in 2018',
      },
      {
        name: 'Anastasis Germanidis',
        role: 'Co-founder & CTO',
        background: 'Co-founded Runway in 2018',
      },
      {
        name: 'Alejandro Matamala',
        role: 'Co-founder & CDO',
        background: 'Co-founded Runway in 2018',
      },
    ],
    whyBuilding:
      'Build AI to simulate the world through merging art and science.',
    beliefs: [
      'World simulators are the next media ecosystem',
      'AI should expand what creators can produce',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Video generation quality and consistency control',
          'Scene-to-scene coherence logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Video quality metrics',
          'User creative workflow satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Video editing and generation interface',
          'Multi-modal creation tools',
          'Asset management and organization',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    cultureInsights: [],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$100M+ ARR (estimated 2025), ~2x YoY",
      userGrowth: "Millions of creators, Hollywood partnerships (A24, Paramount)",
      signals: [
        "$1.5B valuation at Series E",
        "$536M total funding (a16z, Coatue, Nvidia)",
        "Hollywood partnerships: A24, Paramount using Gen-3",
        "Used in professional film production",
        "Gen-3 model = industry benchmark quality",
      ],

      tam: "$20B+ (Professional video production, film, advertising, content creation)",
      marketShare: "~0.5% (early market, targeting pro users)",
      ceiling: "Early-mid innings: AI video is nascent but improving fast. Runway targeting high-end production, not consumer mass market.",
      tailwinds: [
        "Video production costs dropping 10-100x with AI",
        "Hollywood exploring AI for VFX, pre-viz, B-roll",
        "Content creator economy driving demand",
        "Gen-3 model quality creates professional use cases",
        "a16z + Nvidia backing = strategic advantages",
      ],
      headwinds: [
        "Pika targeting consumer market with simpler UX",
        "OpenAI Sora will have ChatGPT distribution",
        "Compute costs extremely high (burns cash)",
        "Copyright concerns from Hollywood (AI training data)",
        "Luma, Kling, and Chinese competitors with cheaper models",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Pro-grade quality and Hollywood relationships create moat, but model capabilities are replicable. Brand in professional video production is building. No network effects.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Cutting-edge video AI',
        'Strong funding ($536M)',
        'Creative tooling focus',
      ],
      whyNot: [
        'No Product Designer roles open',
        'NYC-based may limit remote flexibility',
      ],
      nextActions: ['Monitor careers page for openings'],
      notes: 'Watch for Product Designer openings.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Runway Series D - TechCrunch',
        url: 'https://techcrunch.com/2025/04/03/runway-best-known-for-its-video-generating-models-raises-308m/',
      },
      {
        title: 'Runway (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Runway_(company)',
      },
    ],
  },
  {
    id: 'stability-ai',
    name: 'Stability AI',
    description: 'Generative AI company known for Stable Diffusion and models across image, video, audio, and 3D.',
    website: 'https://stability.ai/',
    headquarters: 'London, UK',
    remote: 'Hybrid',

    // Business
    stage: 'Private',
    valuation: 'Unknown',
    totalFunding: 'Unknown',
    fundingHistory: [
      {
        stage: 'Strategic investment',
        amount: 'Undisclosed',
        date: '2025-03',
        leadInvestors: ['WPP'],
      },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Midjourney',
        description: 'Text-to-image with community focus',
        whyTheyWin: 'Bootstrapped, strong aesthetic',
      },
      {
        name: 'OpenAI DALL·E',
        description: 'Text-to-image by OpenAI',
        whyTheyWin: 'OpenAI brand power',
      },
    ],
    moat: [
      'Open visual media models spanning image, video, 3D, and audio',
      'Enterprise-focused creative production tooling',
    ],

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI model development is the core product (Stable Diffusion and other media models).',
    aiDesignChallenges: [
      'Designing enterprise-grade creative workflows across multiple media types',
      'Balancing open access with responsible use and licensing',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Emad Mostaque',
        role: 'Co-founder',
        background: 'Co-founded Stability AI in 2019',
      },
      {
        name: 'Cyrus Hodes',
        role: 'Co-founder',
        background: 'Co-founded Stability AI in 2019',
      },
    ],
    whyBuilding:
      'Unlock the power of open-source generative AI to expand human creativity.',
    beliefs: [
      'Open-source generative AI should empower creators and enterprises',
      'Professional-grade creative AI should work across image, video, 3D, and audio',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Multi-modal generation control',
          'Enterprise workflow automation',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Model quality evaluation',
          'Enterprise customer satisfaction',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Enterprise creative tooling UI',
          'Model selection and configuration',
          'Asset management across media types',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    cultureInsights: [],

    growthMetrics: {
      stage: 'declining',
      revenueGrowth: "$50M ARR (estimated), declining",
      userGrowth: "Millions of users, but losing to competitors",
      signals: [
        "$1B valuation (down from peak)",
        "Founder Emad Mostaque forced out (2024)",
        "Layoffs and restructuring",
        "$101M raised but burning fast",
        "Open-source Stable Diffusion widely adopted but not monetized",
      ],

      tam: "$15B+ (Creative AI software for images, video, audio)",
      marketShare: "<0.5% (despite Stable Diffusion dominance in open-source)",
      ceiling: "Late innings / declining: Stable Diffusion was breakthrough but company failed to monetize. Enterprise pivot struggling, talent leaving.",
      tailwinds: [
        "Open-source community adoption of Stable Diffusion models",
        "Multi-modal capabilities (image, video, audio, 3D)",
        "Enterprise demand for self-hosted AI (security, control)",
      ],
      headwinds: [
        "Failed to monetize open-source model (users host themselves)",
        "Midjourney, DALL-E captured consumer market with better UX",
        "Founder departure and governance issues hurt credibility",
        "Talent exodus to competitors (Anthropic, OpenAI)",
        "Runway, Pika winning video generation",
        "Burning cash with unclear path to profitability",
      ],

      moatType: 'none',
      moatStrength: "Low: Open-source strategy captured mindshare but created no moat. Free self-hosting means no switching costs. Company struggling despite model success.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Open-source AI pioneer',
        'Multi-modal creative tools',
      ],
      whyNot: [
        'No Product Designer roles open',
        'Company direction unclear after leadership changes',
      ],
      nextActions: ['Monitor for stability and hiring'],
      notes: 'Open-source focus is interesting but unclear product direction.',
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Stability AI WPP investment',
        url: 'https://stability.ai/news/stability-ai-announces-investment-from-wpp-and-new-partnership-to-shape-the-future-of-media-and-entertainment-production',
      },
      {
        title: 'Stability AI (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Stability_AI',
      },
    ],
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Enterprise-focused LLM company building foundation models and AI products for regulated industries.',
    website: 'https://cohere.com/',
    headquarters: 'Toronto, ON',
    remote: 'Yes',

    // Business
    stage: 'Series D',
    valuation: '$6.8B (Aug 2025)',
    totalFunding: '~$1.5B',
    fundingHistory: [
      {
        stage: 'Late-stage round',
        amount: '$500M',
        date: '2025-08',
        valuation: '$6.8B',
        leadInvestors: ['Radical Ventures', 'Inovia Capital'],
      },
    ],
    revenue: 'Unknown',
    growth: 'Unknown',
    runway: 'Strong — $500M latest round',

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'General-purpose LLM platform with enterprise offerings',
        whyTheyWin: 'Brand recognition, ChatGPT distribution',
      },
      {
        name: 'Anthropic',
        description: 'Safety-focused foundation model company',
        whyTheyWin: 'Enterprise trust, Claude quality',
      },
    ],
    moat: [
      'Enterprise-only focus with secure and private deployments',
      'Positioning around regulated industries and data sovereignty',
    ],

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'Enterprise-grade LLMs and AI platforms are the core product.',
    aiDesignChallenges: [
      'Designing secure enterprise workflows and admin experiences',
      'Building trust, privacy, and governance into AI product UX',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Aidan Gomez',
        role: 'Co-founder & CEO',
        background: 'Former Google Brain researcher; co-authored the Transformer paper',
      },
      {
        name: 'Ivan Zhang',
        role: 'Co-founder',
        background: 'Researcher; co-founded Cohere in 2019',
      },
      {
        name: 'Nick Frosst',
        role: 'Co-founder',
        background: 'Former Google Brain researcher; co-founded Cohere in 2019',
      },
    ],
    whyBuilding:
      'Scale intelligence to serve humanity by empowering enterprises with practical AI.',
    beliefs: [
      "AI's highest purpose is to enhance human wellbeing",
      'Enterprise AI should drive real-world productivity and impact',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Enterprise LLM behavior and safety controls',
          'Multi-tenant admin and governance logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Enterprise customer satisfaction metrics',
          'Model performance and reliability dashboards',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Enterprise admin consoles and dashboards',
          'Developer platform and API documentation',
          'Security and compliance UX',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    cultureInsights: [],

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Enterprise AI focus',
        'Strong funding and team (Transformer co-author)',
        'Remote-friendly',
      ],
      whyNot: [
        'No Product Designer roles open',
        'Enterprise B2B may be less exciting than consumer',
      ],
      nextActions: ['Monitor careers page for openings'],
      notes: 'Enterprise LLM with strong technical team.',
    },

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$200M+ ARR (estimated 2025), ~2-3x YoY",
      userGrowth: "1000+ enterprise customers",
      signals: [
        "$6.8B valuation at latest funding",
        "$1B+ total raised (Index, Inovia, Nvidia)",
        "1000+ enterprise customers",
        "Transformer co-author CEO (Aidan Gomez)",
        "Enterprise-first positioning vs consumer AI",
      ],

      tam: "$500B+ (Enterprise AI for all business functions)",
      marketShare: "<0.1% (competing against OpenAI, Anthropic in enterprise)",
      ceiling: "Early-mid innings: Enterprise AI adoption is early. Cohere's enterprise-first positioning differentiates vs ChatGPT, but competing against Anthropic/OpenAI who also do enterprise.",
      tailwinds: [
        "Enterprise data privacy concerns favor non-OpenAI providers",
        "Canadian company = trusted by non-US enterprises (data sovereignty)",
        "Transformer co-author credibility with technical buyers",
        "Enterprise workflows require more than ChatGPT (integration, security)",
      ],
      headwinds: [
        "Anthropic's Claude dominant in enterprise (32% market share)",
        "OpenAI has Microsoft distribution and brand",
        "Google Workspace AI integrated (distribution advantage)",
        "Enterprise sales cycles are slow and expensive",
        "Model quality must match OpenAI/Anthropic to compete",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Enterprise integrations and compliance create switching costs. Canadian positioning helps with data sovereignty buyers. But no network effects, model quality is competitive moat.",
    },

    lastUpdated: '2025-01-26',
    sources: [
      {
        title: 'Cohere $6.8B funding - CNBC',
        url: 'https://www.cnbc.com/2025/08/14/ai-startup-cohere-valued-at-6point8-billion-in-latest-fundraise-appoints-new-executives.html',
      },
      {
        title: 'Cohere (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Cohere',
      },
    ],
  },
  {
    id: 'harvey',
    name: 'Harvey',
    description: 'AI copilot for elite law firms, transforming how legal professionals work with AI-powered research, drafting, and analysis.',
    website: 'https://harvey.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series E',
    valuation: '$8B (Oct 2025)',
    totalFunding: '$1.02B',
    fundingHistory: [
      { stage: 'Seed', amount: '$5M', date: '2022-11', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series A', amount: '$21M', date: '2023-03', valuation: '$150M', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$80M', date: '2023-12', valuation: '$715M', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series C', amount: '$100M', date: '2024-05', valuation: '$1.5B', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series D', amount: '$140M', date: '2024-07', valuation: '$1.5B', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series E', amount: '$300M', date: '2025-06', valuation: '$5B', leadInvestors: ['Sequoia Capital'] },
    ],
    revenue: '$100M ARR (Aug 2025)',
    growth: 'Reached $100M ARR in 3 years',
    runway: 'Strong — highly capitalized',
    customers: '1,000+ law firms and corporate legal departments, 42% of AmLaw 100 firms',

    // Competition
    competitors: [
      {
        name: 'Thomson Reuters CoCounsel',
        description: 'Legal AI by Thomson Reuters, integrated with Westlaw',
        whyTheyWin: 'Deep legal content integration, trusted brand, existing customer base',
      },
      {
        name: 'Casetext',
        description: 'Legal research platform acquired by Thomson Reuters',
        whyTheyWin: 'Established legal research reputation, now part of Thomson Reuters ecosystem',
      },
      {
        name: 'Lex Machina',
        description: 'Legal analytics platform by LexisNexis',
        whyTheyWin: 'Data advantage from LexisNexis, strong analytics focus',
      },
      {
        name: 'Spellbook',
        description: 'AI contract drafting and review',
        whyTheyWin: 'Focused product, easier to adopt for mid-market firms',
      },
    ],
    marketPosition: 'Leader in enterprise legal AI, dominant in AmLaw 100',
    moat: [
      'Elite firm partnerships: 42% of AmLaw 100 using Harvey',
      'Custom legal LLM trained on proprietary legal data',
      'Deep integration into existing legal workflows',
      'Strong network effects: more usage = better legal AI',
      'Sequoia-backed with $1B+ war chest',
    ],
    vsGiants: 'Harvey built legal-specific AI vs generic ChatGPT/Claude. Vertical focus = higher quality, compliance, integration.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Harvey is entirely built around AI-powered legal work — research, drafting, analysis. No Harvey without AI.',
    aiDesignChallenges: [
      'Trust & verification: lawyers need to verify AI outputs, how to design for confidence?',
      'Complex legal reasoning: designing interfaces for multi-step legal analysis',
      'Citation & sources: surfacing sources for AI-generated legal arguments',
      'Workflow integration: embedding AI into existing legal processes',
      'Role-based AI: different AI behaviors for partners vs associates',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Gabriel Pereyra',
        role: 'Co-founder & President',
        background: 'Research Scientist at Google DeepMind. PhD in ML. Built language models before founding Harvey.',
      },
      {
        name: 'Winston Weinberg',
        role: 'Co-founder & CEO',
        background: 'Securities and antitrust litigator at O\'Melveny & Myers. Stanford Law. First-hand legal pain points.',
      },
    ],
    whyBuilding: 'Weinberg experienced legal work inefficiency firsthand as a litigator. Pereyra had the AI expertise. Together they saw legal as the perfect vertical for AI: high-value, knowledge-intensive, massive market ($1T+ legal industry).',
    beliefs: [
      'AI will augment lawyers, not replace them (at least for the next decade)',
      'Legal AI needs to be vertical-specific, not generic',
      'Trust is everything: lawyers need explainable, verifiable AI',
      'Enterprise-first: serve elite firms, not consumers',
      'Build deep partnerships with law firms to understand real workflows',
    ],
    designPhilosophy: 'Professional-grade AI for high-stakes work. Design for trust, verification, and integration into existing legal workflows.',
    greenFlags: [
      'Founders are roommates turned billionaires — strong partnership',
      'Elite firm adoption: 42% of AmLaw 100 using Harvey',
      'Vertical focus: deep understanding of legal workflows',
      'Strong investor backing: Sequoia, Kleiner Perkins, a16z',
      'Fast growth: $100M ARR in 3 years',
    ],
    redFlags: [
      'Enterprise-only: might miss mid-market/SMB opportunity',
      'Legal market slowness: law firms are slow to change',
      'Liability concerns: AI errors in legal work could be catastrophic',
      'Competition from incumbents: Thomson Reuters, LexisNexis have distribution',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~20-30 (estimated)',
      notableMembers: [
        { name: 'Ryan Samii', role: 'Product Lead (joined Dec 2025 from Hebbia)' },
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
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Designing confidence scores for AI-generated legal arguments',
          'Building verification workflows: how lawyers check AI outputs',
          'Creating citation/source tracking systems',
          'Defining quality metrics for legal AI (accuracy, relevance, completeness)',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Chat interface for legal Q&A',
          'Document drafting & review interfaces',
          'Integration with legal software (Westlaw, LexisNexis, practice management)',
          'Professional UI for high-stakes legal work',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://www.harvey.ai/brand/company/careers/24616c39-e293-4bcc-a3dd-e6f33a71c8ee',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Lead the design of end-to-end product experiences for Harvey\'s AI-powered legal tools, from concept to polished execution.',
        responsibilities: [
          'Manage multiple projects from ideation to launch',
          'Create high-quality designs, interactions, and prototypes that transform complex problems into intuitive solutions',
          'Collaborate with engineers, AI researchers, product managers, and lawyers',
          'Design interfaces that help users understand, trust, and guide AI outputs',
          'Promote and develop best practices in designing with AI',
        ],
        requirements: [
          '8+ years of experience designing products in a fast-paced environment',
          'Portfolio demonstrating best work',
          'Ability to tackle complex challenges and transform them into simple, intuitive experiences',
          'Deep understanding of design systems and strong sense of visual/interaction design',
          'Experience conducting user research and applying insights to design decisions',
        ],
        whyInteresting: 'Designing AI for high-stakes legal work. Extremely complex problem space with massive impact. Working with elite law firms.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Fast-paced, mission-driven culture. Founders still share an apartment while building an $8B company.',
        url: 'https://www.linkedin.com/company/harvey-ai',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$200M+ ARR (estimated 2025), ~3x YoY",
      userGrowth: "500+ law firms including Allen & Overy, PwC, KKR",
      signals: [
        "$8B valuation at Series E (8x from $1B in 18 months)",
        "$1B+ total raised (Sequoia, Elad Gil, OpenAI Startup Fund)",
        "500+ top law firms as customers",
        "Allen & Overy 3,500-lawyer rollout",
        "DeepMind + elite law firm co-founders",
      ],

      tam: "$300B+ (Global legal services market addressable by AI)",
      marketShare: "<0.1% (early market, elite law firm focus)",
      ceiling: "Early innings: Legal AI adoption just starting. Most law firms still manual. Harvey targeting top 1% of legal market first, then expanding down-market.",
      tailwinds: [
        "Law firms under pressure to improve efficiency and reduce costs",
        "Precedent work (research, drafting) is highly automatable",
        "Elite law firm adoption creates credibility cascade",
        "Partnership model (DeepMind researcher + lawyer) bridges technical and domain gap",
        "High willingness to pay in legal market ($500+ per lawyer per month)",
      ],
      headwinds: [
        "Thomson Reuters (Casetext acquisition) has distribution to 1M+ lawyers",
        "LexisNexis and Westlaw have incumbent relationships",
        "Leya targeting Europe (regional competition)",
        "Legal accuracy requirements are extremely high (liability risk)",
        "Conservative legal industry = slow adoption cycles",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Workflow integration and training data from elite firms create switching costs. Brand with top law firms is valuable. But no network effects, legal expertise is moat.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'AI-native Level 4: AI IS the product',
        'Massive design challenge: high-stakes legal AI',
        'Elite customers: working with top law firms',
        'Strong founders: Pereyra (DeepMind) + Weinberg (O\'Melveny)',
        'Well-funded: $1B+ raised, $8B valuation',
      ],
      whyNot: [
        'Enterprise-only: might be less consumer-facing innovation',
        'Legal domain: need to learn legal workflows',
        'Liability pressure: errors in legal AI are high-stakes',
      ],
      nextActions: [
        'Research Harvey\'s product in detail',
        'Follow Gabriel Pereyra and Winston Weinberg on Twitter',
        'Connect with Harvey designers on LinkedIn',
        'Apply for Staff Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T10:30:00',
    sources: [
      {
        title: 'Harvey AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Harvey_(software)',
      },
      {
        title: 'Harvey raises $300M Series E at $5B valuation',
        url: 'https://techfundingnews.com/legal-ai-startup-harvey-300m-series-e-funding-5b-valuation/',
      },
      {
        title: 'Harvey founders podcast on LawNext',
        url: 'https://www.lawnext.com/2026/01/lawnext-from-roommates-to-billionaires-harveys-founders-gabriel-pereyra-and-winston-weinberg-on-building-ai-infrastructure-for-law.html',
      },
      {
        title: 'Inside Harvey: TechCrunch profile',
        url: 'https://techcrunch.com/2025/11/14/inside-harvey-how-a-first-year-legal-associate-built-one-of-silicon-valleys-hottest-startups/',
      },
    ],
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Conversational AI platform for creating and chatting with AI characters, enabling personalized AI interactions.',
    website: 'https://character.ai',
    headquarters: 'Menlo Park, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series A',
    valuation: '$5B (Sept 2024, post-Google deal)',
    totalFunding: '$193M',
    fundingHistory: [
      { stage: 'Seed', amount: '$43M', date: '2021-12', leadInvestors: ['a16z'] },
      { stage: 'Series A', amount: '$150M', date: '2023-03', valuation: '$1B', leadInvestors: ['Andreessen Horowitz'] },
    ],
    revenue: 'Not disclosed (consumer monetization)',
    growth: '208M visits/month, 16M+ chatbots created',
    runway: 'Strong — Google licensing deal in Aug 2024',
    customers: '208M monthly visits, avg 120 min/session',

    // Competition
    competitors: [
      {
        name: 'ChatGPT',
        description: 'General-purpose AI chatbot by OpenAI',
        whyTheyWin: 'Brand recognition, multi-modal capabilities, broader use cases',
      },
      {
        name: 'Replika',
        description: 'AI companion chatbot',
        whyTheyWin: 'Emotional connection focus, established companion AI brand',
      },
      {
        name: 'Janitor AI',
        description: 'Unrestricted character AI platform',
        whyTheyWin: 'No content filters, NSFW allowed, appeals to users wanting freedom',
      },
      {
        name: 'Inflection AI (Pi)',
        description: 'Personal AI assistant focused on emotional intelligence',
        whyTheyWin: 'Emotional intelligence focus, backed by massive funding',
      },
    ],
    marketPosition: 'Leader in character-based AI chat, #1 in entertainment AI',
    moat: [
      '16M+ user-created characters = massive content moat',
      'Engagement: 120 min/session (vs 15 min for ChatGPT)',
      'Community-driven content creation',
      'Google licensing deal: founders now leading Gemini',
      'Network effects: more characters = more users',
    ],
    vsGiants: 'Character.AI focuses on entertainment/roleplay vs ChatGPT\'s productivity. Different use case, different retention.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Character.AI is 100% about AI-powered conversations. No product without AI.',
    aiDesignChallenges: [
      'Character consistency: keeping AI characters in-character across conversations',
      'Emotional engagement: designing for parasocial relationships',
      'Content moderation: balancing freedom vs safety',
      'Memory: maintaining context across long conversations',
      'Discovery: helping users find interesting characters among 16M+',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Noam Shazeer',
        role: 'Co-founder (now at Google)',
        background: 'Former Google engineer, lead author on Transformer paper. Built LaMDA at Google.',
      },
      {
        name: 'Daniel De Freitas',
        role: 'Co-founder (now at Google)',
        background: 'Lead designer of LaMDA at Google. Deep expertise in conversational AI.',
      },
    ],
    whyBuilding: 'Shazeer and De Freitas left Google because they wanted to build conversational AI that people could actually use, not just research. Character.AI was their vision for AI that\'s fun, creative, and engaging.',
    beliefs: [
      'AI should be entertaining, not just productive',
      'Personalized AI characters > one-size-fits-all chatbot',
      'Community-created content is the future',
      'Long-form conversation = true AI understanding',
    ],
    designPhilosophy: 'Design for emotional engagement and long-form conversation. Make AI characters feel alive.',
    greenFlags: [
      'Founders built LaMDA at Google — deep AI expertise',
      'Massive engagement: 120 min/session',
      'Community moat: 16M+ user-created characters',
      'Google deal: founders now leading Gemini',
    ],
    redFlags: [
      'Founders left for Google (Aug 2024) — leadership transition',
      'Content moderation challenges: lawsuits over teen suicides',
      'Monetization unclear: consumer AI is hard to monetize',
      'Heavy content filters frustrate users → competitors gain share',
    ],

    // Design Opportunity
    designTeam: {
      ceo: 'Karandeep Anand (CEO after founders left)',
      teamSize: '~50-100 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing character consistency: keeping AI in-character',
          'Building memory systems: context across long conversations',
          'Defining character personalities and behaviors',
          'Creating feedback loops for character quality',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing content moderation: balancing safety vs freedom',
          'Building quality metrics for character interactions',
          'Creating user feedback systems for character improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Chat interface optimized for long conversations',
          'Character creation tools for community',
          'Discovery: finding interesting characters among 16M+',
          'Emotional engagement: design for parasocial relationships',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Menlo Park, CA (Hybrid)',
        url: 'https://jobs.ashbyhq.com/character/',
        type: 'full-time',
        aboutRole: 'Create user-centered designs for AI entertainment products, crafting interfaces that spark curiosity and offer endless ways to explore.',
        responsibilities: [
          'Collaborate with product, engineering, and AI teams',
          'Design immersive experiences at the intersection of storytelling, gaming, and social connection',
          'Create interfaces for millions of users',
          'Build design systems for character-based AI',
        ],
        whyInteresting: 'Designing for 208M monthly users. Building the future of AI entertainment. Working on parasocial AI relationships.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.8,
        content: 'Fast-paced startup culture. Founders left for Google in 2024, causing some uncertainty.',
      },
    ],

    growthMetrics: {
      stage: 'plateau',
      revenueGrowth: "$100M+ ARR (estimated), slowing growth",
      userGrowth: "208M monthly visits, but losing share to competitors",
      signals: [
        "Google acqui-hire of founders for $2.7B (2024)",
        "208M monthly visits (peak traffic)",
        "16M+ user-created characters",
        "Consumer subscription model ($10/month premium)",
        "Founders left for Google, new CEO Karandeep Anand",
      ],

      tam: "$50B+ (AI entertainment, social, companionship)",
      marketShare: "~0.2% (consumer AI chat market)",
      ceiling: "Mid innings but slowing: Peaked in 2023-2024, now losing traffic to ChatGPT, Claude, and less-filtered competitors. Founder departure signals plateau.",
      tailwinds: [
        "Loneliness epidemic drives demand for AI companionship",
        "Gen Z comfortable with parasocial AI relationships",
        "16M+ characters = user-generated content moat",
        "Mobile app (iOS/Android) = sticky engagement",
      ],
      headwinds: [
        "Founders left for Google (brain drain, strategic uncertainty)",
        "Heavy content moderation pushes users to competitors (Replika, Chai)",
        "ChatGPT gaining consumer share with better quality",
        "Teen suicide lawsuit created PR crisis",
        "Monetization struggling (premium subscriptions not enough)",
        "Google acqui-hire may have been exit rather than partnership",
      ],

      moatType: 'network-effects',
      moatStrength: "Low-Medium: 16M user-created characters create weak network effects. But users can switch to less-filtered alternatives easily. Founder departure weakened moat.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 4: AI IS the product',
        'Massive scale: 208M monthly visits',
        'Creative product: entertainment AI vs boring productivity tools',
        'Community-driven: 16M+ user-created characters',
      ],
      whyNot: [
        'Founders left for Google — leadership uncertainty',
        'Content moderation challenges: lawsuits, safety concerns',
        'Consumer monetization is hard',
        'Heavy filters frustrate users',
      ],
      nextActions: [
        'Use Character.AI extensively to understand product',
        'Research new CEO Karandeep Anand',
        'Follow Character.AI designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T10:45:00',
    sources: [
      {
        title: 'Character.AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Character.ai',
      },
      {
        title: 'Google hires Character.AI founders',
        url: 'https://techcrunch.com/2024/08/02/character-ai-ceo-noam-shazeer-returns-to-google/',
      },
      {
        title: 'Character.AI valuation after Google deal',
        url: 'https://www.oreateai.com/blog/characterais-bold-return-to-google-a-25-billion-acquisition/fa44e864e4e84a728d18224c87276e52',
      },
    ],
  },
  {
    id: 'typeface',
    name: 'Typeface',
    description: 'Generative AI platform for enterprise marketing content, enabling businesses to create personalized, on-brand content at scale.',
    website: 'https://typeface.ai',
    headquarters: 'Palo Alto, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series B',
    valuation: '$1B (Jun 2023)',
    totalFunding: '$206M',
    fundingHistory: [
      { stage: 'Series A', amount: '$65M', date: '2023-02', leadInvestors: ['Lightspeed Venture Partners', 'GV', 'M12'] },
      { stage: 'Series B', amount: '$100M', date: '2023-06', valuation: '$1B', leadInvestors: ['Salesforce Ventures'] },
    ],
    revenue: 'Not disclosed (enterprise sales)',
    growth: 'Fortune 500 customers within first year',
    runway: 'Strong — well-capitalized',
    customers: 'Fortune 500 companies, enterprise marketing teams',

    // Competition
    competitors: [
      {
        name: 'Jasper',
        description: 'AI marketing content platform',
        whyTheyWin: 'First-mover advantage, strong brand in content creation',
      },
      {
        name: 'Copy.ai',
        description: 'AI copywriting tool',
        whyTheyWin: 'Simpler product, easier adoption for SMBs',
      },
      {
        name: 'Writesonic',
        description: 'AI writing assistant',
        whyTheyWin: 'Lower price point, more accessible',
      },
      {
        name: 'Adobe Firefly',
        description: 'Adobe\'s generative AI for creative workflows',
        whyTheyWin: 'Adobe ecosystem, deep integration with Creative Cloud',
      },
    ],
    marketPosition: 'Leader in enterprise generative AI for marketing',
    moat: [
      'Enterprise focus: built for Fortune 500 vs SMBs',
      'Brand personalization: custom AI trained on company brand',
      'Salesforce/Google/Microsoft partnerships',
      'Founder credibility: Abhay Parasnis (ex-CTO of Adobe)',
      'Workflow orchestration: not just content generation',
    ],
    vsGiants: 'Typeface focuses on enterprise brand control vs generic AI tools. Adobe Firefly is creative-first, Typeface is marketing-first.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Typeface\'s value prop is AI-powered content generation. But could exist as traditional content management without AI (less valuable).',
    aiDesignChallenges: [
      'Brand consistency: ensuring AI generates on-brand content',
      'Workflow integration: embedding AI into existing marketing processes',
      'Multi-modal content: text, images, video generation',
      'Personalization at scale: custom AI per enterprise customer',
      'Quality control: enterprise standards for AI-generated content',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Abhay Parasnis',
        role: 'CEO & Co-founder',
        background: 'Former CTO, CPO & EVP of Adobe (2015-2022). Prior GM at Microsoft (2002-2011). Deep enterprise software expertise.',
      },
      {
        name: 'Vishal Sood',
        role: 'Co-founder',
        background: 'Enterprise software background.',
      },
      {
        name: 'Tran Anh',
        role: 'Co-founder',
        background: 'Enterprise software background.',
      },
    ],
    whyBuilding: 'Parasnis saw the explosion of generative AI while at Adobe. He left to build Typeface because he believed enterprise marketing needed AI-native tools, not retrofitted legacy software.',
    beliefs: [
      'Generative AI will transform enterprise marketing',
      'Brand control is critical: enterprises need personalized AI',
      'Workflow orchestration > content generation alone',
      'Enterprise-first: serve Fortune 500, not prosumers',
      'Partnerships with Salesforce/Google/Microsoft = distribution',
    ],
    designPhilosophy: 'Enterprise-grade AI with brand control. Design for marketing teams, not individual creators.',
    greenFlags: [
      'Founder pedigree: Parasnis was CTO of Adobe',
      'Enterprise traction: Fortune 500 within first year',
      'Strategic partnerships: Salesforce, Google, Microsoft',
      'Well-funded: $206M raised at $1B valuation',
      'Timing: caught generative AI wave early',
    ],
    redFlags: [
      'Competitive market: Jasper, Copy.ai, Adobe all competing',
      'Long enterprise sales cycles',
      'Adobe integration advantage: Firefly in Creative Cloud',
      'Unclear differentiation vs Jasper at enterprise level',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~30-50 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing brand personalization: how AI learns company brand',
          'Building workflow orchestration: multi-step marketing campaigns',
          'Defining AI behaviors for different content types (social, email, long-form)',
          'Creating feedback loops for brand consistency',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing quality metrics for AI-generated content',
          'Building approval workflows for enterprise marketing',
          'Creating brand compliance checks',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Content creation interfaces for marketing teams',
          'Campaign management dashboards',
          'Brand asset libraries',
          'Multi-modal content generation (text, images, video)',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Palo Alto, CA (Hybrid)',
        url: 'https://job-boards.greenhouse.io/typeface/jobs/4616989007',
        type: 'full-time',
        aboutRole: 'Create and execute design solutions for generative AI tools that empower marketing teams to create personalized content at scale.',
        responsibilities: [
          'Design user-friendly, visually appealing products',
          'Work with cross-functional teams to ensure products meet customer needs',
          'Build design systems for AI-powered marketing tools',
        ],
        whyInteresting: 'Designing for Fortune 500 marketing teams. Building enterprise AI tools with massive scale impact.',
      },
      {
        title: 'Staff Product Designer',
        location: 'Palo Alto, CA (Hybrid)',
        url: 'https://job-boards.greenhouse.io/typeface/',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Lead product design for key areas of Typeface, mentoring junior designers and shaping the design culture.',
        responsibilities: [
          'Create user-friendly, visually appealing designs in a collaborative environment',
          'Mentor junior designers',
          'Lead design for major product areas',
        ],
        whyInteresting: 'Leadership role in enterprise AI design. Working with ex-Adobe CTO.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Strong enterprise culture, ex-Adobe team brings professionalism and rigor.',
      },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level 3: AI is core differentiator',
        'Founder credibility: Parasnis (ex-CTO Adobe)',
        'Enterprise focus: Fortune 500 customers',
        'Well-funded: $206M at $1B valuation',
        'Multiple Product Designer roles open',
      ],
      whyNot: [
        'Enterprise sales: slower, more conservative',
        'Competitive: Jasper, Copy.ai, Adobe all competing',
        'Marketing domain: less exciting than other verticals?',
      ],
      nextActions: [
        'Try Typeface product',
        'Research Abhay Parasnis background',
        'Connect with Typeface designers on LinkedIn',
        'Apply for Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T11:00:00',
    sources: [
      {
        title: 'Typeface raises $100M at $1B valuation',
        url: 'https://techcrunch.com/2023/06/29/typeface-which-is-building-generative-ai-for-brands-raises-100m-at-a-1b-valuation/',
      },
      {
        title: 'Abhay Parasnis on Typeface',
        url: 'https://www.linkedin.com/pulse/abhay-parasnis-typeface-1-billion-valuation-brett-stapper-uxake',
      },
      {
        title: 'Typeface company profile',
        url: 'https://tracxn.com/d/companies/typeface/__9jDBm6q1mJzBb-dsOYViFE4NRwFTNrCwreA895blLoM',
      },
    ],
  },
  {
    id: 'scale-ai',
    name: 'Scale AI',
    description: 'AI data platform powering the most advanced LLMs and AI models with high-quality training data.',
    website: 'https://scale.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Meta Partnership (49% stake)',
    valuation: '$29B (Jun 2025, after Meta deal)',
    totalFunding: '$1B+ (pre-Meta)',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.5M', date: '2016-08', leadInvestors: ['Y Combinator'] },
      { stage: 'Series A', amount: '$18M', date: '2018-08', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$100M', date: '2019-08', valuation: '$1B', leadInvestors: ['Founders Fund'] },
      { stage: 'Series C', amount: '$155M', date: '2021-04', valuation: '$3.5B', leadInvestors: ['Tiger Global'] },
      { stage: 'Series D', amount: '$325M', date: '2021-07', valuation: '$7B', leadInvestors: ['Greenoaks Capital'] },
      { stage: 'Series E', amount: '$580M', date: '2024-03', valuation: '$13B', leadInvestors: ['Accel'] },
      { stage: 'Series F', amount: '$1B', date: '2024-05', valuation: '$14B', leadInvestors: ['Accel'] },
    ],
    revenue: 'Not disclosed (enterprise contracts)',
    growth: 'Meta invested $14.3B for 49% stake (Jun 2025)',
    runway: 'Meta partnership — essentially unlimited',
    customers: 'OpenAI, Google, Anthropic, Meta, Microsoft, U.S. Government',

    // Competition
    competitors: [
      {
        name: 'Label Your Data',
        description: 'Data labeling platform for ML teams',
        whyTheyWin: 'Secure, high-quality, domain-specific annotation without Scale\'s Meta baggage',
      },
      {
        name: 'Labelbox',
        description: 'Unified annotation platform with managed services',
        whyTheyWin: 'Better tooling, not tied to Meta, more neutral vendor',
      },
      {
        name: 'V7 Labs',
        description: 'AI-powered data annotation platform',
        whyTheyWin: 'Significantly cheaper ($150/mo vs Scale\'s enterprise pricing)',
      },
      {
        name: 'SuperAnnotate',
        description: 'Annotation tool with AI-assisted labeling',
        whyTheyWin: 'Strong 2D/3D support, not tied to Meta',
      },
      {
        name: 'Surge AI',
        description: 'High-quality data labeling with elite annotators',
        whyTheyWin: 'Elite labelers (mathematicians, etc), customers include Anthropic, Google',
      },
    ],
    marketPosition: 'Was leader, now losing share due to Meta deal',
    moat: [
      'Meta partnership: $14B investment, 49% stake',
      'Government contracts: U.S. military, intelligence',
      'Proprietary Data Engine for LLM training',
      'Scale at scale: massive labeling infrastructure',
      'Founded by Alexandr Wang at age 19 → now world\'s youngest billionaire',
    ],
    vsGiants: 'Scale was the data infrastructure for AI leaders. Meta deal changed everything — OpenAI, Google pulled out due to conflict of interest.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Scale\'s entire value is enabling AI model training. But it\'s infrastructure, not AI product itself.',
    aiDesignChallenges: [
      'Data quality at scale: ensuring high-quality labels across millions of examples',
      'Tooling for labelers: designing annotation interfaces for complex data types',
      'Workflow orchestration: managing thousands of labelers',
      'Quality control: designing review and verification systems',
      'GenAI integration: how AI assists human labelers',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Alexandr Wang',
        role: 'Co-founder (now at Meta)',
        background: 'Founded Scale at age 19. Dropped out of MIT. Youngest self-made billionaire ($3.6B net worth at age 28). Now at Meta after June 2025 deal.',
      },
      {
        name: 'Lucy Guo',
        role: 'Co-founder (fired 2018)',
        background: 'Co-founded Scale through Y Combinator. Fired two years later.',
      },
    ],
    whyBuilding: 'Wang realized AI models are only as good as their training data. He saw data labeling as the bottleneck for AI progress and built Scale to solve it.',
    beliefs: [
      'Data quality > data quantity',
      'Human-AI collaboration: AI assists, humans verify',
      'Infrastructure-first: enable AI leaders, not build consumer apps',
      'Scale matters: winner-take-most in data infrastructure',
      'Government partnerships: national security applications',
    ],
    designPhilosophy: 'Enterprise-grade data tools. Design for labelers, reviewers, and ML engineers.',
    greenFlags: [
      'Meta partnership: $14B investment',
      'Elite customers: OpenAI, Google, Anthropic (historically)',
      'Government contracts: stable revenue',
      'Founder track record: Wang built to $29B by age 28',
    ],
    redFlags: [
      'Meta deal backlash: OpenAI, Google pulled out',
      'Neutrality concerns: Meta owning 49% = conflict of interest',
      'Founder left: Wang now at Meta, Jason Droege is CEO',
      'Competitive pressure: customers moving to Label Your Data, Labelbox',
      'Unclear product direction post-Meta deal',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~50-100 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Designing labeler workflows: how humans annotate complex data',
          'Building quality control systems',
          'Defining AI-assisted labeling behaviors',
          'Creating feedback loops for labeler improvement',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Designing quality metrics for labeled data',
          'Building review and verification workflows',
          'Creating inter-rater agreement systems',
          'Defining gold standard datasets',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Annotation tools for images, video, text, 3D, audio',
          'Labeler dashboards and task management',
          'ML engineer interfaces for dataset management',
          'Quality control interfaces for reviewers',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, Enterprise',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4623277005',
        type: 'full-time',
        aboutRole: 'Build AI-powered applications that redefine enterprise workflows, working on cutting-edge customer-facing AI and internal SaaS products.',
        responsibilities: [
          'Design enterprise applications for AI data workflows',
          'Work on mix of customer-facing AI and internal tools',
          'Collaborate with ML engineers and product teams',
          'Build zero-to-one products in fast-paced environment',
        ],
        requirements: [
          'Experience building complex, technical products from zero to one',
          'Thrives in fast-paced environments',
          'Strong portfolio of enterprise product design',
        ],
        whyInteresting: 'Designing the data infrastructure powering GPT-4, Claude, Gemini. Working on AI training at scale.',
      },
      {
        title: 'Senior Product Designer, GenAI Marketplace',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4490106005',
        level: 'Senior',
        type: 'full-time',
        aboutRole: 'Develop a first-class experience for vetted high-quality GenAI contributors, attracting the best experts across all relevant fields.',
        responsibilities: [
          'Design marketplace for AI contributors',
          'Build contributor onboarding and workflows',
          'Create quality vetting systems',
        ],
        whyInteresting: 'Building a marketplace for AI expertise. Two-sided marketplace design challenge.',
      },
      {
        title: 'Product Designer, Generative AI',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4404072005',
        type: 'full-time',
        aboutRole: 'Design generative AI products and features for Scale\'s platform.',
        whyInteresting: 'Working on Scale\'s GenAI products.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.5,
        content: 'Fast-paced, demanding culture. Meta deal caused uncertainty. Founder left for Meta.',
      },
      {
        source: 'blind',
        sentiment: 'negative',
        content: 'Meta deal controversial internally. Some customers leaving due to conflict of interest.',
      },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 3: enabling AI infrastructure',
        'Multiple Product Designer roles open',
        'Elite customers (historically): OpenAI, Anthropic, Google',
        'Massive scale: powering the best AI models',
      ],
      whyNot: [
        'Meta deal baggage: customers leaving, neutrality concerns',
        'Founder left: Wang now at Meta',
        'Infrastructure product: less consumer-facing',
        'Unclear direction post-Meta deal',
      ],
      nextActions: [
        'Research Scale\'s product offerings',
        'Understand Meta deal implications',
        'Connect with Scale designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T11:20:00',
    sources: [
      {
        title: 'Scale AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Scale_AI',
      },
      {
        title: 'Meta invests $14.3B in Scale AI',
        url: 'https://www.entrepreneur.com/business-news/who-is-alexandr-wang-the-founder-of-scale-ai-joining-meta/493281',
      },
      {
        title: 'Scale AI competitors after Meta deal',
        url: 'https://labelyourdata.com/articles/scale-ai-competitors',
      },
      {
        title: 'Alexandr Wang profile',
        url: 'https://en.wikipedia.org/wiki/Alexandr_Wang',
      },
    ],
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'AI-powered software creation platform enabling anyone to build applications using natural language.',
    website: 'https://replit.com',
    headquarters: 'Foster City, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Series C+',
    valuation: '$9B (Jan 2026)',
    totalFunding: '$650M+',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.5M', date: '2018-03', leadInvestors: ['Y Combinator'] },
      { stage: 'Series A', amount: '$20M', date: '2021-03', valuation: '$300M', leadInvestors: ['a16z'] },
      { stage: 'Series B', amount: '$80M', date: '2022-04', valuation: '$1.16B', leadInvestors: ['Coatue'] },
      { stage: 'Series C', amount: '$250M', date: '2025-09', valuation: '$3B', leadInvestors: ['Prysm Capital'] },
      { stage: 'Series C+', amount: '$400M', date: '2026-01', valuation: '$9B', leadInvestors: ['Georgian'] },
    ],
    revenue: '$240M (2025), projected $1B (2026)',
    growth: '300% valuation increase in 4 months ($3B → $9B)',
    runway: 'Strong — well-capitalized, path to $1B revenue',
    customers: '150,000+ paying customers',

    // Competition
    competitors: [
      {
        name: 'Cursor',
        description: 'AI-powered code editor with Composer feature',
        whyTheyWin: 'Better for existing codebases, stronger IDE, $20/mo Pro tier',
      },
      {
        name: 'Windsurf',
        description: 'AI code editor with Cascade agentic AI',
        whyTheyWin: 'Competitive $15/mo pricing, strong code quality, Git workflows',
      },
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer by GitHub/OpenAI',
        whyTheyWin: 'GitHub integration, brand trust, Microsoft distribution',
      },
      {
        name: 'Lovable',
        description: 'AI app builder',
        whyTheyWin: 'Hit $100M ARR in 8 months (fastest-growing startup ever?)',
      },
      {
        name: 'Bolt.new',
        description: 'AI-powered full-stack app builder',
        whyTheyWin: 'Simpler, faster for prototypes',
      },
    ],
    marketPosition: 'Leader in AI-native coding platforms, Replit Agent is fastest-growing AI product',
    moat: [
      'Real-time multiplayer: Google Docs for code',
      'Replit Agent: natural language → full apps',
      'Built-in infrastructure: hosting, deployment, databases',
      'Educational moat: millions learned to code on Replit',
      'Network effects: community of creators',
    ],
    vsGiants: 'Replit is full-stack AI platform vs Cursor/Windsurf (editors). Different use case: build from scratch vs edit existing code.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Replit Agent is 100% AI-powered. Revenue jumped $10M → $100M in 9 months after launching Agent. AI is the entire value prop.',
    aiDesignChallenges: [
      'Natural language → code: designing conversational interfaces for building software',
      'Multi-file editing: AI making changes across entire codebase',
      'Real-time collaboration: multiplayer coding with AI',
      'Debugging AI: how users fix AI-generated code',
      'Context management: keeping AI aware of entire project',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Amjad Masad',
        role: 'CEO & Co-founder',
        background: 'Jordanian-American engineer. Worked at Facebook (2013-2016). Built Replit as side project in Jordan, relaunched in 2016.',
      },
      {
        name: 'Haya Odeh',
        role: 'Co-founder (Design & UX)',
        background: 'Amjad\'s wife. Handles design and user experience for Replit. Deep understanding of creator workflows.',
      },
      {
        name: 'Faris Masad',
        role: 'Co-founder (Technical)',
        background: 'Amjad\'s brother. Co-founded the technical platform.',
      },
    ],
    whyBuilding: 'Masad believes coding should be accessible to everyone, not just CS majors. Replit started as a simple online IDE, evolved into AI-native platform after seeing the power of LLMs.',
    beliefs: [
      'Software creation should be as easy as describing what you want',
      'AI will democratize coding: 1B software creators by 2030',
      'Real-time collaboration is the future of coding',
      'Infrastructure should be invisible: focus on creation, not deployment',
      'Community-driven: empower creators, not gatekeep',
    ],
    designPhilosophy: 'Make software creation accessible and collaborative. Design for creators, not just developers.',
    greenFlags: [
      'Explosive growth: $3B → $9B in 4 months',
      'Revenue: $240M (2025), projected $1B (2026)',
      'Founder-led: Masad and Odeh are deeply product-focused',
      'AI-native: Replit Agent is a breakout product',
      'Real-time multiplayer: unique moat',
    ],
    redFlags: [
      'Intense competition: Cursor, Windsurf, Lovable all growing fast',
      'Lovable hit $100M ARR in 8 months (faster than Replit Agent)',
      'Price pressure: Windsurf at $15/mo vs Replit\'s higher tiers',
      'Controversial founder: Masad called "terrorist sympathizer" in media',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Haya Odeh (Co-founder, Design & UX)',
      teamSize: '~50-100 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing AI Agent: natural language → full apps',
          'Multi-file editing: AI understanding entire codebase',
          'Real-time collaboration: multiplayer with AI',
          'Context management: keeping AI aware of project structure',
          'Debugging flows: how users fix AI-generated code',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing confidence indicators for AI-generated code',
          'Building testing and verification workflows',
          'Creating feedback loops for AI improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Conversational interface for Replit Agent',
          'Real-time multiplayer IDE',
          'Code editor with AI assistance',
          'Deployment and infrastructure management',
          'Community and discovery features',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [
      {
        name: 'Haya Odeh',
        role: 'Co-founder (Design & UX)',
        platform: 'twitter',
        url: 'https://twitter.com/hayaodeh',
        description: 'Haya leads design at Replit. Wife of CEO Amjad Masad.',
      },
    ],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, B2B',
        location: 'Foster City, CA (Hybrid: Mon/Wed/Fri in-office)',
        url: 'https://jobs.ashbyhq.com/replit/dc5d7a26-29fe-44eb-9378-c1aace110aab',
        type: 'full-time',
        aboutRole: 'Help make software creation more accessible for everyone, working on AI features, collaboration tools, and software creation & deployment capabilities.',
        responsibilities: [
          'Drive product design from concept to delivery (sketches, user flows, prototypes, final implementation)',
          'Test and validate ideas through user interviews, prototypes, concept testing',
          'Design improvements for Replit AI through Chat and other interfaces',
          'Lead design workshops on AI feature integration across Replit platform',
          'Contribute to and enhance Replit\'s Design System (Replit UI)',
        ],
        requirements: [
          'Ownership across all design levels—from strategy to UI details',
          'Experience designing AI-native interfaces',
          'Strong portfolio of product design work',
        ],
        preferred: [
          'Experience with design systems',
          'Understanding of developer workflows',
        ],
        whyInteresting: 'Designing Replit Agent — one of the fastest-growing AI products. Working with co-founder Haya Odeh on design team. Building the future of AI-native coding.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Founder-led, product-obsessed culture. Amjad is extremely public about product decisions on Twitter.',
        url: 'https://twitter.com/amasad',
      },
    ],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'AI-native Level 4: AI IS the product (Replit Agent)',
        'Explosive growth: $3B → $9B in 4 months',
        'Co-founder leads design: Haya Odeh (amazing signal)',
        'Product Designer role open',
        'Real-time collaboration: unique design challenge',
        'Mission-driven: democratizing software creation',
      ],
      whyNot: [
        'Intense competition: Cursor, Windsurf, Lovable',
        'Founder controversy: Masad called "terrorist sympathizer"',
        'In-office 3x/week: Mon/Wed/Fri in Foster City',
      ],
      nextActions: [
        'Use Replit Agent extensively',
        'Follow Amjad Masad and Haya Odeh on Twitter',
        'Apply for Product Designer, B2B role',
        'Research Replit\'s design system (Replit UI)',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T11:40:00',
    sources: [
      {
        title: 'Replit Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Replit',
      },
      {
        title: 'Replit raises $400M at $9B valuation',
        url: 'https://techfundingnews.com/replit-grabs-400m-at-9b-valuation-in-the-ai-coding-race-with-openai-and-cursor/',
      },
      {
        title: 'Replit founder profile',
        url: 'https://sfstandard.com/2026/01/07/called-terrorist-sympathizer-now-ai-company-valued-3b/',
      },
      {
        title: 'Amjad Masad Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Amjad_Masad',
      },
    ],
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Enterprise AI platform providing secure, customizable language models for businesses to build AI applications.',
    website: 'https://cohere.com',
    headquarters: 'Toronto, Canada',
    remote: 'Hybrid',

    // Business
    stage: 'Series D',
    valuation: '$7B (Sept 2025)',
    totalFunding: '$1.54B',
    fundingHistory: [
      { stage: 'Seed', amount: '$10M', date: '2020-06', leadInvestors: ['Index Ventures'] },
      { stage: 'Series A', amount: '$40M', date: '2021-11', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$125M', date: '2022-02', valuation: '$1.1B', leadInvestors: ['Tiger Global'] },
      { stage: 'Series C', amount: '$270M', date: '2023-06', valuation: '$2.1B', leadInvestors: ['Inovia Capital', 'Index Ventures'] },
      { stage: 'Series D', amount: '$500M', date: '2025-01', valuation: '$5.5B', leadInvestors: ['NVIDIA', 'Oracle'] },
    ],
    revenue: '$150M ARR (Oct 2025), projected $200M+ (2026)',
    growth: 'Doubled ARR in first half of 2025',
    runway: 'Strong — preparing for IPO mid-2026',
    customers: '316+ enterprise customers globally',

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'GPT-4 models with enterprise API',
        whyTheyWin: 'Brand recognition, best models, massive scale',
      },
      {
        name: 'Anthropic',
        description: 'Claude models for enterprise',
        whyTheyWin: '#1 in enterprise (32% market share), developer favorite',
      },
      {
        name: 'Google Vertex AI',
        description: 'Google\'s enterprise AI platform',
        whyTheyWin: 'Google Cloud distribution, Gemini models',
      },
      {
        name: 'Microsoft Azure OpenAI',
        description: 'OpenAI models via Azure',
        whyTheyWin: 'Microsoft enterprise relationships, Azure integration',
      },
    ],
    marketPosition: 'Top 5 enterprise LLM provider, 0.13% market share',
    moat: [
      'Data sovereignty: on-prem deployment for regulated industries',
      'Customization: fine-tuning for enterprise use cases',
      'Aidan Gomez = Transformer co-author (credibility)',
      'Strategic partnerships: Oracle, NVIDIA',
      'Canadian base: alternative to US AI giants for international customers',
    ],
    vsGiants: 'Cohere focuses on enterprise deployment flexibility (on-prem, private cloud) vs OpenAI/Anthropic\'s API-first approach.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Cohere builds LLMs and provides AI infrastructure. No Cohere without AI.',
    aiDesignChallenges: [
      'Enterprise deployment: designing for on-prem, private cloud, multi-cloud',
      'Customization interfaces: fine-tuning workflows for enterprise',
      'Security-first design: building for regulated industries',
      'Developer experience: API design, SDKs, documentation',
      'Agentic AI: designing multi-step workflows with North platform',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Aidan Gomez',
        role: 'CEO & Co-founder',
        background: 'Co-author of "Attention Is All You Need" (Transformer paper). Former Google Brain researcher at age 20. Built the architecture powering modern AI.',
      },
      {
        name: 'Ivan Zhang',
        role: 'Co-founder',
        background: 'Engineer with deep ML expertise.',
      },
      {
        name: 'Nick Frosst',
        role: 'Co-founder',
        background: 'Former Google Brain researcher.',
      },
    ],
    whyBuilding: 'Gomez co-invented the Transformer at Google but saw enterprises struggling to adopt AI. Cohere was built to give businesses control, security, and customization vs generic API wrappers.',
    beliefs: [
      'Enterprises need data sovereignty: on-prem deployment matters',
      'Customization > one-size-fits-all: every company needs tailored AI',
      'Security-first: regulated industries (finance, healthcare) need control',
      'Agentic AI is the future: North platform for AI workspaces',
      'Canadian AI leadership: alternative to US tech giants',
    ],
    designPhilosophy: 'Enterprise-grade AI with security and customization. Design for developers and enterprise buyers.',
    greenFlags: [
      'Founder credibility: Gomez co-authored Transformer paper',
      'Strong growth: doubled ARR in 2025, heading to $200M+',
      'IPO-ready: planning mid-2026 IPO',
      'Strategic investors: NVIDIA, Oracle',
      'North platform: competing with Microsoft Copilot, Google Vertex AI',
    ],
    redFlags: [
      'Small market share: 0.13% vs OpenAI/Anthropic dominance',
      'Intense competition: OpenAI ($500B), Anthropic ($183B)',
      'Canadian base: US customers may prefer US vendors',
      'Late to agentic AI: North launched Jan 2025',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~30-50 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing agentic workflows: North platform for multi-step AI tasks',
          'Building fine-tuning interfaces for enterprise customization',
          'Defining deployment workflows: on-prem, private cloud, multi-cloud',
          'Creating developer tools: API design, SDKs',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing model performance metrics for enterprises',
          'Building evaluation frameworks for custom models',
          'Creating security and compliance dashboards',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'North workspace platform design',
          'Developer documentation and onboarding',
          'Enterprise dashboards and admin tools',
          'API testing and debugging interfaces',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Toronto, Canada / San Francisco, CA / New York, NY / Paris, France (Hybrid)',
        url: 'https://jobs.ashbyhq.com/cohere',
        level: 'Senior',
        type: 'full-time',
        aboutRole: 'Lead the design process for AI-powered user experiences, conducting research, collaborating with teams, and ensuring high-quality design across platforms.',
        responsibilities: [
          'Design AI-powered user experiences',
          'Conduct user research and usability testing',
          'Collaborate with product, engineering, and research teams',
          'Ensure high-quality design across all platforms',
          'Build design systems for enterprise AI products',
        ],
        requirements: [
          'Experience designing enterprise products',
          'Strong portfolio of product design work',
          'Understanding of AI/ML products',
        ],
        whyInteresting: 'Designing with Transformer co-author. Building enterprise AI for regulated industries. IPO-bound company.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. Gomez brings deep technical credibility. Toronto HQ offers Canadian tech scene.',
      },
    ],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'AI-native Level 4: AI IS the product',
        'Founder credibility: Aidan Gomez co-authored Transformer paper',
        'Strong growth: $200M+ ARR heading into 2026',
        'IPO-bound: mid-2026 IPO planned',
        'Senior Product Designer role open',
        'Enterprise focus: designing for regulated industries',
      ],
      whyNot: [
        'Toronto HQ: Canadian location (but SF/NY offices available)',
        'Smaller than OpenAI/Anthropic',
        'Market share: 0.13% vs giants',
      ],
      nextActions: [
        'Research Aidan Gomez and Transformer paper',
        'Try Cohere API and North platform',
        'Connect with Cohere designers on LinkedIn',
        'Apply for Senior Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T12:10:00',
    sources: [
      {
        title: 'Cohere Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cohere',
      },
      {
        title: 'Aidan Gomez profile',
        url: 'https://en.wikipedia.org/wiki/Aidan_Gomez',
      },
      {
        title: 'Cohere raises $500M at $7B valuation',
        url: 'https://tracxn.com/d/companies/cohere/__o4xfwmr3XwgsGEyH41XvwBm6Xd-SjsMlSld3d4ci6G0',
      },
      {
        title: 'Cohere IPO plans 2026',
        url: 'https://startupwired.com/2025/10/22/cohere-prepares-for-ipo-as-it-redefines-the-global-ai-landscape/',
      },
    ],
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI marketing platform for enterprises, enabling teams to create on-brand content at scale with generative AI.',
    website: 'https://jasper.ai',
    headquarters: 'Austin, TX',
    remote: 'Remote-first',

    // Business
    stage: 'Series A',
    valuation: '$1.2B (2024, post-layoffs)',
    totalFunding: '$131M',
    fundingHistory: [
      { stage: 'Seed', amount: '$6M', date: '2021-10', leadInvestors: ['Foundation Capital'] },
      { stage: 'Series A', amount: '$125M', date: '2022-10', valuation: '$1.5B', leadInvestors: ['Insight Partners'] },
    ],
    revenue: '$88M ARR (2025)',
    growth: 'Slowed after 2023 peak, layoffs in Sept 2023',
    runway: 'Moderate — $125M Series A funds, but slower growth',
    customers: '100,000+ customers',

    // Competition
    competitors: [
      {
        name: 'Copy.ai',
        description: 'AI-native GTM strategy platform',
        whyTheyWin: 'Simpler product, GTM focus, less overwhelming UI',
      },
      {
        name: 'Writesonic',
        description: 'AI-powered content generation with SEO focus',
        whyTheyWin: 'SEO features, cheaper pricing',
      },
      {
        name: 'Typeface',
        description: 'Enterprise generative AI for marketing',
        whyTheyWin: 'Ex-Adobe CTO founder, Fortune 500 focus',
      },
      {
        name: 'Writer.com',
        description: 'Enterprise AI writing platform',
        whyTheyWin: 'Proprietary Palmyra LLM, brand voice consistency',
      },
    ],
    marketPosition: 'Early leader in AI content, now facing strong competition',
    moat: [
      'First-mover advantage: launched early in AI content wave',
      '100,000+ customers = data flywheel',
      'Brand recognition in AI marketing',
      'Enterprise pivot: moving upmarket',
    ],
    vsGiants: 'Jasper was first to market but now faces competition from Typeface (ex-Adobe), Writer.com, and simpler tools like Copy.ai.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Jasper\'s value is AI-powered content generation. But product could exist as content management tool without AI (less valuable).',
    aiDesignChallenges: [
      'Brand voice consistency: AI generating on-brand content',
      'Template vs freeform: balancing structure with flexibility',
      'Workflow integration: embedding AI into marketing processes',
      'Quality control: enterprise standards for AI content',
      'Overwhelming UI: simplifying complex AI features',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Dave Rogenmoser',
        role: 'Co-founder (stepped down 2023)',
        background: 'Serial entrepreneur. Founded Jasper (formerly Jarvis) in early 2021. Stepped down as CEO in Sept 2023, now Chairman.',
      },
      {
        name: 'Chris Hull',
        role: 'Co-founder',
        background: 'Technical co-founder.',
      },
      {
        name: 'John Philip Morgan',
        role: 'Co-founder',
        background: 'Co-founder who stepped down with Rogenmoser in 2023.',
      },
    ],
    whyBuilding: 'Rogenmoser saw the explosion of GPT-3 and realized content marketers needed AI tools. Jasper was one of the first to market with AI writing, catching the wave early.',
    beliefs: [
      'AI will transform marketing workflows (original vision)',
      'Enterprise-first: serve marketing teams, not individual creators',
      'Brand consistency: AI needs to understand company voice',
      'Workflow orchestration: content creation is multi-step',
    ],
    designPhilosophy: 'Enterprise marketing AI with brand control. Simplify complex AI for marketers.',
    greenFlags: [
      'First-mover: early in AI content wave',
      '100,000+ customers',
      'Enterprise pivot: Jasper Studio for custom AI apps',
      'New CEO: Timothy Young (ex-Dropbox President)',
    ],
    redFlags: [
      'Founders stepped down (Sept 2023) — leadership uncertainty',
      'Valuation down: $1.5B → $1.2B (20% haircut)',
      'Layoffs in 2023',
      'Overwhelming UI: users complain about complexity',
      'Strong competition: Typeface, Copy.ai, Writer.com',
    ],

    // Design Opportunity
    designTeam: {
      ceo: 'Timothy Young (joined Sept 2023, ex-Dropbox President)',
      teamSize: '~50-100 (estimated, post-layoffs)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Designing brand voice: AI understanding company style',
          'Building workflow orchestration for marketing campaigns',
          'Defining AI behaviors for different content types',
          'Creating feedback loops for brand consistency',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing quality metrics for AI content',
          'Building approval workflows for enterprise',
          'Creating brand compliance checks',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Simplifying overwhelming UI (current pain point)',
          'Content creation interfaces for marketers',
          'Jasper Studio: no-code AI app builder',
          'Campaign management dashboards',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Principal Product Designer',
        location: 'Austin, TX / Remote',
        url: 'https://jobs.ashbyhq.com/Jasper%20AI',
        level: 'Principal',
        type: 'full-time',
        aboutRole: 'Shape Jasper\'s AI tools\' user experience, mentor designers, and prototype workflows, collaborating closely with PMs and engineers.',
        responsibilities: [
          'Lead design of AI-powered marketing tools',
          'Mentor junior designers',
          'Prototype workflows for AI content creation',
          'Collaborate with PMs, engineers, and marketers',
          'Simplify complex AI features',
        ],
        requirements: [
          'Principal-level experience (10+ years)',
          'Experience designing AI/ML products',
          'Strong portfolio of enterprise design',
          'Understanding of marketing workflows',
        ],
        whyInteresting: 'Fixing Jasper\'s overwhelming UI problem. Designing for 100,000+ customers. Working with new CEO from Dropbox.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.7,
        content: 'Founders stepped down in 2023. Layoffs. New CEO Timothy Young (ex-Dropbox) brings stability.',
      },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 3: AI is core differentiator',
        '100,000+ customers',
        'Principal Product Designer role (senior level)',
        'Remote-first',
        'Clear design challenge: simplify overwhelming UI',
      ],
      whyNot: [
        'Founders left (Sept 2023) — leadership uncertainty',
        'Valuation down, layoffs',
        'Strong competition: Typeface, Copy.ai, Writer.com',
        'Slower growth post-2023',
      ],
      nextActions: [
        'Try Jasper product extensively',
        'Research Timothy Young (new CEO)',
        'Connect with Jasper designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T12:25:00',
    sources: [
      {
        title: 'Jasper raises $125M at $1.5B valuation',
        url: 'https://www.jasper.ai/blog/jasper-announces-125m-series-a-funding',
      },
      {
        title: 'Jasper revenue and growth',
        url: 'https://getlatka.com/companies/jasper.ai',
      },
      {
        title: 'Timothy Young becomes CEO',
        url: 'https://www.jasper.ai/blog/jasper-new-ceo',
      },
      {
        title: 'Jasper AI statistics 2026',
        url: 'https://sqmagazine.co.uk/jasper-ai-statistics/',
      },
    ],
  },

  // Sourcegraph (Cody)
  {
    id: 'sourcegraph',
    name: 'Sourcegraph',
    description: 'Universal code search and AI coding assistant. Cody helps developers understand, write, and fix code faster across any codebase.',
    website: 'https://sourcegraph.com',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Series D',
    valuation: '$2.6B',
    totalFunding: '$223M',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$125M',
        date: '2021-07',
        valuation: '$2.625B',
        leadInvestors: ['Andreessen Horowitz'],
      },
    ],
    revenue: 'Unknown',
    growth: '800,000 developers using product (12 months)',
    runway: 'Unknown',
    customers: '54B+ lines of code indexed',

    // Competition
    competitors: [
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer by GitHub/Microsoft',
        whyTheyWin: 'Native GitHub integration, massive user base',
      },
      {
        name: 'Cursor',
        description: 'AI-first code editor',
        whyTheyWin: 'Better UX, focused product, faster iteration',
      },
      {
        name: 'Codeium',
        description: 'Free AI code completion',
        whyTheyWin: 'Free tier, aggressive pricing',
      },
    ],
    marketPosition: 'Strong in enterprise code search, pivoting to AI coding with Cody',
    moat: [
      'Universal code search across 54B+ lines of code',
      'Enterprise-grade security and compliance',
      'Deep codebase understanding from search tech',
      'Strong investor backing (a16z, Sequoia)',
    ],
    vsGiants: 'More comprehensive code search vs GitHub. Better context awareness vs Copilot.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'Cody AI assistant is now core product differentiator. Launched Amp coding agent in 2025.',
    aiDesignChallenges: [
      'Designing AI interactions for complex codebases',
      'Making code search + AI feel seamless',
      'Enterprise admin UX for AI features',
      'Context window visualization and control',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Quinn Slack',
        role: 'CEO & Co-Founder',
        background: 'Previously at Palantir. Stanford CS. Deep belief in developer productivity.',
      },
      {
        name: 'Beyang Liu',
        role: 'CTO & Co-Founder',
        background: 'Previously at Palantir. Stanford CS. Code search evangelist.',
      },
    ],
    whyBuilding: 'Every developer should be able to search and understand all code, everywhere. AI makes this possible at scale.',
    beliefs: [
      'Code search is fundamental to developer productivity',
      'AI should augment, not replace developers',
      'Universal access to code knowledge',
      'Enterprise-grade reliability matters',
    ],
    designPhilosophy: 'Design for power users. Fast, keyboard-driven, information-dense.',
    greenFlags: [
      'Strong technical founders with vision',
      '$2.6B valuation with solid investor backing',
      'Pivoted successfully from search to AI',
      'Remote-first culture',
    ],
    redFlags: [
      'Facing fierce competition from Cursor, GitHub Copilot',
      'Discontinued free Cody plans in 2025',
      'Revenue/growth metrics not public',
      'Product pivot risk (search → AI)',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI agent behaviors for code understanding',
          'Define context gathering strategies',
          'Design autocomplete vs chat vs agent modes',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Design feedback loops for code suggestions',
          'Define quality metrics for AI responses',
          'User research on AI effectiveness',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'IDE-like interfaces for code search + AI',
          'Enterprise admin dashboards',
          'Web app and VS Code extension design',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer [IC4]',
        location: 'San Francisco, CA (Required)',
        url: 'https://boards.greenhouse.io/sourcegraph91/jobs/5198247004',
        level: 'IC4',
        type: 'full-time',
        aboutRole: 'Design features for Cody and search teams, crafting solutions that make developers more productive with AI-powered tools.',
        responsibilities: [
          'Collaborate with teammates to define the future of AI in developer tools',
          'Design for complex developer tools and IDE-like applications',
          'Conduct user research and lead customer calls',
        ],
        requirements: [
          '8+ years designing complex B2B or B2C web applications',
          'Experience with user research and usability testing',
          '3+ years writing and shipping JavaScript, TypeScript, or Python code',
        ],
        whyInteresting: 'Work on cutting-edge AI coding tools. Shape the future of developer productivity. Strong technical founders.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level 3: Cody is core product',
        'Strong technical founders (ex-Palantir)',
        '$2.6B valuation, well-funded',
        'Remote-first',
        'Designing for power users (high craft bar)',
      ],
      whyNot: [
        'Must be in San Francisco (not fully remote)',
        'Fierce competition from Cursor, GitHub',
        'Discontinued free plans (pricing pressure)',
        'Revenue growth unclear',
      ],
      nextActions: [
        'Try Cody extensively vs Cursor/Copilot',
        'Research Quinn Slack and Beyang Liu',
        'Connect with Sourcegraph designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:00:00',
    sources: [
      {
        title: 'Sourcegraph Series D $125M',
        url: 'https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/',
      },
      {
        title: 'Product Designer IC4 job posting',
        url: 'https://boards.greenhouse.io/sourcegraph91/jobs/5198247004',
      },
    ],
  },

  // Superhuman (now part of Grammarly)
  {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'The fastest email experience ever made. Now part of Grammarly, building AI productivity suite with agents that work wherever people work.',
    website: 'https://superhuman.com',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Acquired (Grammarly, 2025)',
    valuation: '$825M (last known, Aug 2021)',
    totalFunding: '$118M',
    fundingHistory: [
      {
        stage: 'Series C',
        amount: '$33M',
        date: '2019-06',
        valuation: '$260M',
        leadInvestors: ['Andreessen Horowitz'],
      },
    ],
    revenue: '$20M ARR (estimated before acquisition)',
    growth: 'Unknown',
    runway: 'N/A (acquired)',
    customers: 'Undisclosed',

    // Competition
    competitors: [
      {
        name: 'Shortwave',
        description: 'AI email client',
        whyTheyWin: 'More AI features, faster feature velocity',
      },
      {
        name: 'Spark Mail',
        description: 'Smart email client',
        whyTheyWin: 'Cross-platform, team collaboration',
      },
      {
        name: 'Gmail',
        description: 'Google\'s email',
        whyTheyWin: 'Free, massive ecosystem, AI features',
      },
    ],
    marketPosition: 'Premium email client for power users. Now part of Grammarly productivity suite.',
    moat: [
      'Obsessive focus on speed and craft',
      'High NPS (Net Promoter Score)',
      'Strong brand among tech elite',
      'Now backed by Grammarly resources',
    ],
    vsGiants: 'Premium UX vs Gmail. Speed-obsessed vs Outlook. Now integrating with Grammarly AI.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator post-Grammarly acquisition. Building AI agents across communication tools.',
    aiDesignChallenges: [
      'Integrating AI without sacrificing speed',
      'Designing AI agents for email workflows',
      'Cross-product AI (email + writing + docs)',
      'Maintaining "fastest email" while adding AI',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Rahul Vohra',
        role: 'CEO & Co-Founder',
        background: 'Founded Rapportive (sold to LinkedIn). Obsessed with product-market fit. Game designer mindset.',
      },
      {
        name: 'Vivek Sodera',
        role: 'Co-Founder',
        background: 'Engineering leader. Previously at Rapportive.',
      },
      {
        name: 'Conrad Irwin',
        role: 'Co-Founder',
        background: 'Engineering. Previously at Rapportive.',
      },
    ],
    whyBuilding: 'Email is broken. People waste hours daily. We can make them feel superhuman with speed + AI.',
    beliefs: [
      'Speed is the most important feature',
      'Obsess over every detail',
      'Manual onboarding for every user',
      'Ignore most customer feedback (focus on product vision)',
      'Position around a single attribute',
    ],
    designPhilosophy: 'Speed above all. Every interaction should feel instant. Design for power users.',
    greenFlags: [
      'Rahul Vohra is product genius (PMF framework)',
      'Obsessive craft and quality',
      'Grammarly acquisition brings resources',
      'Remote-first',
    ],
    redFlags: [
      'Acquired (less autonomy?)',
      'Premium pricing ($30/mo) limits growth',
      'Email-only product (before acquisition)',
      'Slow feature velocity historically',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI agent behaviors for email',
          'Define automation vs manual control',
          'Design cross-product AI interactions (email + Grammarly)',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Speed metrics and monitoring',
          'AI suggestion quality evaluation',
          'User research on AI effectiveness',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Desktop email client design',
          'Keyboard-driven interactions',
          'Enterprise admin experiences',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Remote, North America',
        url: 'https://www.ziprecruiter.com/c/Superhuman/Job/Senior-Product-Designer/-in-Remote,US?jid=35e67684977e99fc',
        level: 'Senior',
        type: 'full-time',
        compensation: '$155,000 – $240,000/year (USD)',
        aboutRole: 'Partner with product managers to set vision and build roadmap. Elevate design culture at Superhuman.',
        requirements: [
          '5+ years of relevant product design experience',
          'Mastery of prototyping, visual and interaction design, typography, layout',
          'Strong portfolio',
        ],
        whyInteresting: 'Work with Rahul Vohra. Obsessive craft culture. Now part of Grammarly AI suite.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Rahul Vohra is product visionary',
        'Obsessive craft and quality culture',
        'Now part of Grammarly (more resources)',
        'Remote-first, good comp',
        'Speed-obsessed design philosophy',
      ],
      whyNot: [
        'Acquired (less autonomy post-Grammarly)',
        'Slow feature velocity historically',
        'Email-only (before acquisition)',
        'Premium pricing limits TAM',
      ],
      nextActions: [
        'Use Superhuman for 2 weeks',
        'Read Rahul Vohra on Lenny\'s Podcast',
        'Understand Grammarly integration plan',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:10:00',
    sources: [
      {
        title: 'Grammarly acquires Superhuman',
        url: 'https://techcrunch.com/2025/07/01/grammarly-acquires-ai-email-client-superhuman/',
      },
      {
        title: 'Rahul Vohra on Lenny\'s Podcast',
        url: 'https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra',
      },
    ],
  },

  // Hebbia
  {
    id: 'hebbia',
    name: 'Hebbia',
    description: 'AI platform for knowledge work. Enables professionals to search, analyze, and synthesize information across unlimited documents.',
    website: 'https://www.hebbia.ai',

    // Location
    headquarters: 'New York, NY',
    remote: 'Hybrid',

    // Business
    stage: 'Series B',
    valuation: '$700M',
    totalFunding: '$130M',
    fundingHistory: [
      {
        stage: 'Series B',
        amount: '$130M',
        date: '2024-07',
        valuation: '$700M',
        leadInvestors: ['Andreessen Horowitz', 'Index Ventures', 'GV', 'Peter Thiel'],
      },
    ],
    revenue: '$13M ARR (at Series B, profitable)',
    growth: 'Profitable. 30% of top 50 asset managers use Hebbia',
    runway: 'Strong (just raised $130M)',
    customers: 'BlackRock, KKR, Carlyle, Centerview, 40% of world\'s largest asset managers',

    // Competition
    competitors: [
      {
        name: 'Glean',
        description: 'AI workplace search',
        whyTheyWin: 'Broader enterprise use case, $7.2B valuation',
      },
      {
        name: 'Perplexity',
        description: 'AI search engine',
        whyTheyWin: 'Consumer-friendly, web-scale search',
      },
      {
        name: 'ChatGPT Enterprise',
        description: 'OpenAI for business',
        whyTheyWin: 'Brand, GPT-4, broader use cases',
      },
    ],
    marketPosition: 'Leader in AI for finance and legal research. Deep penetration in asset management.',
    moat: [
      'Financial services expertise and relationships',
      'Can process unlimited document length',
      'Tabular output format (spreadsheet-like)',
      'Profitable at $13M ARR (54x valuation multiple)',
      'Backed by a16z, Peter Thiel, Index',
    ],
    vsGiants: 'Domain-specific vs generic ChatGPT. Structured output vs freeform. Built for finance/legal.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Matrix enables AI-powered document analysis at unlimited scale.',
    aiDesignChallenges: [
      'Designing for unlimited document length',
      'Tabular/spreadsheet output for complex queries',
      'Financial analyst workflows',
      'Multi-document comparison and synthesis',
      'Enterprise security and compliance UX',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'George Sivulka',
        role: 'CEO & Founder',
        background: 'Stanford PhD (electrical engineering). Worked at NASA as teenager. Graduated Stanford BS in math in 2.5 years. Wunderkind.',
      },
    ],
    whyBuilding: 'Knowledge work is broken. Professionals waste hours searching documents. AI can make them 10x faster.',
    beliefs: [
      'AI should handle unlimited document length',
      'Structured output > freeform chat',
      'Vertical AI > horizontal AI',
      'Finance and legal are killer use cases',
      'Profitability matters (profitable at $13M ARR)',
    ],
    designPhilosophy: 'Not a chatbot. Design for structured analysis. Spreadsheet-like outputs for finance professionals.',
    greenFlags: [
      'George Sivulka is brilliant (NASA, Stanford PhD)',
      'Profitable at $13M ARR',
      '30% of top 50 asset managers as customers',
      'Strong investors (a16z, Peter Thiel)',
      'Acquired FlashDocs (slide deck AI) in 2025',
    ],
    redFlags: [
      'New York location (hybrid, not remote)',
      'Finance-heavy (might not fit design interests)',
      'Young company (founded 2020)',
      'Limited public info on design team',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI behaviors for document analysis',
          'Define query → table output logic',
          'Multi-document synthesis workflows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality metrics for AI analysis',
          'Accuracy evaluation for financial data',
          'User research with asset managers',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Spreadsheet-like interfaces for AI output',
          'Document upload and management',
          'Enterprise security dashboards',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'New York, NY',
        url: 'https://boards.greenhouse.io/hebbia/jobs/4150321005',
        type: 'full-time',
        aboutRole: 'Create innovative AI interaction designs for finance-focused SaaS platform. Lead end-to-end user experience.',
        responsibilities: [
          'Lead design of product features and UX',
          'Ensure product is intuitive and visually appealing',
          'Collaborate with cross-functional teams',
        ],
        whyInteresting: 'Work with genius founder. Profitable startup. 40% of largest asset managers use your product.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level 4: AI IS the product',
        'George Sivulka is brilliant founder',
        'Profitable and well-funded',
        'Elite customers (BlackRock, KKR)',
        'Unique design challenge (structured AI output)',
      ],
      whyNot: [
        'New York location (hybrid, not remote)',
        'Finance-heavy domain (might be dry)',
        'Small team, early stage',
        'Unknown design culture',
      ],
      nextActions: [
        'Try Hebbia demo',
        'Research George Sivulka',
        'Understand finance analyst workflows',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:20:00',
    sources: [
      {
        title: 'Hebbia Series B $130M at $700M valuation',
        url: 'https://techcrunch.com/2024/07/09/ai-startup-hebbia-rased-130m-at-a-700m-valuation-on-13-million-of-profitable-revenue/',
      },
      {
        title: 'Hebbia Product Designer job',
        url: 'https://boards.greenhouse.io/hebbia/jobs/4150321005',
      },
    ],
  },

  // Gamma
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation. Create beautiful, interactive content with AI in seconds—no slides required.',
    website: 'https://gamma.app',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Series B',
    valuation: '$2.1B',
    totalFunding: '$87M',
    fundingHistory: [
      {
        stage: 'Series B',
        amount: '$68M',
        date: '2025-11',
        valuation: '$2.1B',
        leadInvestors: ['Andreessen Horowitz'],
      },
      {
        stage: 'Series A',
        amount: '$12M',
        date: '2023',
        leadInvestors: ['Accel'],
      },
    ],
    revenue: '$100M ARR (profitable)',
    growth: 'Crossed $100M ARR profitably with 52 employees',
    runway: 'Strong (just raised $68M)',
    customers: '30M+ users',

    // Competition
    competitors: [
      {
        name: 'Canva',
        description: 'Design platform with AI',
        whyTheyWin: 'Massive user base, broader design tools, brand',
      },
      {
        name: 'Beautiful.ai',
        description: 'AI presentation tool',
        whyTheyWin: 'Earlier mover, focused on presentations',
      },
      {
        name: 'PowerPoint + Copilot',
        description: 'Microsoft with AI',
        whyTheyWin: 'Enterprise distribution, Office ecosystem',
      },
    ],
    marketPosition: 'AI-first presentation tool. "PowerPoint killer." Lean team, high efficiency.',
    moat: [
      'First to market with generative AI presentations (2022)',
      '30M+ users, $100M ARR',
      'Profitable with only 52 employees',
      'Strong product velocity',
      'Backed by a16z and Accel',
    ],
    vsGiants: 'AI-native vs PowerPoint. Faster creation vs Canva. No slides, interactive documents.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Repositioned around generative AI when ChatGPT launched. Core product is AI generation.',
    aiDesignChallenges: [
      'AI-generated layouts and designs',
      'Balance AI speed vs manual control',
      'Template selection and customization',
      'Real-time collaboration with AI',
      'Enterprise features (branding, templates)',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Grant Lee',
        role: 'CEO & Co-Founder',
        background: 'Product designer. Previously at Dropbox, Optimizely. Design-led founder.',
      },
      {
        name: 'Jon Noronha',
        role: 'CPO & Co-Founder',
        background: 'Product leader. Previously at Optimizely.',
      },
      {
        name: 'James Fox',
        role: 'Co-Founder',
        background: 'Engineering leader.',
      },
    ],
    whyBuilding: 'Slides are dead. People waste hours making presentations. AI can create beautiful content in seconds.',
    beliefs: [
      'AI should do the heavy lifting',
      'Focus on content, not formatting',
      'Interactive documents > static slides',
      'Lean team, high efficiency (52 people at $100M ARR)',
      'Profitability matters',
    ],
    designPhilosophy: 'AI-generated beauty. Users focus on content, AI handles design. Fast and intuitive.',
    greenFlags: [
      'Grant Lee is designer CEO (rare!)',
      '$100M ARR profitably with 52 people',
      '30M+ users, strong growth',
      'Pivoted successfully to AI in 2022',
      'Remote-first',
    ],
    redFlags: [
      'Fierce competition from Canva, Microsoft',
      'AI presentation space is crowded',
      'Lean team = high expectations',
      'Design team size unknown',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Grant Lee (CEO, designer background)',
      teamSize: 'Small (company is 52 people total)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI generation behaviors',
          'Define user control vs AI automation',
          'Template and style selection logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality metrics for AI-generated designs',
          'User research on AI vs manual creation',
          'A/B testing on generation flows',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Editor interface design',
          'AI generation UI/UX',
          'Template gallery and customization',
        ],
      },
    },
    productStage: '1→10',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'San Francisco, CA (Remote-friendly)',
        url: 'https://www.woodyjobs.com/blog/422-gamma-careers-join-an-ai-start-up-as-a-product-designer',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Join a lean team transforming presentations with AI. Design for 30M+ users.',
        whyInteresting: 'Designer CEO. $100M ARR with 52 people. Profitable. AI-first product. High craft bar.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Grant Lee is designer CEO (rare!)',
        'AI-native Level 4: AI IS the product',
        '$100M ARR, profitable, lean team',
        '30M+ users, strong growth',
        'Interesting design challenges (AI generation)',
        'Remote-friendly',
      ],
      whyNot: [
        'Small team (52 people total)',
        'Design team size unknown',
        'Fierce competition from Canva, Microsoft',
      ],
      nextActions: [
        'Use Gamma extensively',
        'Research Grant Lee (designer CEO)',
        'Read "Dumbest idea" to $100M ARR on Lenny\'s',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:30:00',
    sources: [
      {
        title: 'Gamma $2.1B valuation, $100M ARR',
        url: 'https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/',
      },
      {
        title: 'Grant Lee on Lenny\'s Podcast',
        url: 'https://www.lennysnewsletter.com/p/how-50-people-built-a-profitable-ai-unicorn',
      },
    ],
  },

  // Ramp
  {
    id: 'ramp',
    name: 'Ramp',
    description: 'AI-powered finance automation platform. Corporate cards, expense management, and bill payments—designed to save companies time and money.',
    website: 'https://ramp.com',

    // Location
    headquarters: 'New York, NY',
    remote: 'Hybrid',

    // Business
    stage: 'Series D+',
    valuation: '$32B',
    totalFunding: '$750M+',
    fundingHistory: [
      {
        stage: 'Series D',
        amount: '$300M',
        date: '2025-11',
        valuation: '$32B',
        leadInvestors: ['Founders Fund', 'Thrive Capital'],
      },
    ],
    revenue: '$1B ARR (100% YoY growth)',
    growth: '100% YoY. Crossed $1B ARR in Nov 2025',
    runway: 'Strong (just raised $300M)',
    customers: '50,000+ businesses',

    // Competition
    competitors: [
      {
        name: 'Brex',
        description: 'Corporate cards and spend management',
        whyTheyWin: 'Earlier mover, international expansion',
      },
      {
        name: 'Navan (formerly TripActions)',
        description: 'Corporate cards + travel',
        whyTheyWin: 'Travel integration, international',
      },
      {
        name: 'American Express',
        description: 'Traditional corporate cards',
        whyTheyWin: 'Brand, rewards, enterprise relationships',
      },
    ],
    marketPosition: 'Fastest-growing finance automation platform. AI-first approach. "Autonomous finance."',
    moat: [
      'AI-powered automation and insights',
      '$1B ARR, 100% growth',
      'Network effects (spend data)',
      'Eric Glyman and Karim Atiyeh (repeat founders)',
      'Strong investors (Founders Fund, Thrive)',
    ],
    vsGiants: 'AI-first vs traditional Amex. Faster product velocity vs Brex. "Autonomous finance."',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. "Autonomous finance" vision. AI-powered categorization, approvals, and insights.',
    aiDesignChallenges: [
      'AI-powered expense categorization',
      'Automated approval workflows',
      'Anomaly detection and alerts',
      'Finance insights and recommendations',
      'Enterprise admin and controls',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Eric Glyman',
        role: 'CEO & Co-Founder',
        background: 'Founded Paribus (sold to Capital One). Harvard. Obsessed with saving customers money.',
      },
      {
        name: 'Karim Atiyeh',
        role: 'CTO & Co-Founder',
        background: 'Co-founded Paribus. Harvard. Engineering leader.',
      },
      {
        name: 'Gene Lee',
        role: 'Co-Founder',
        background: 'Engineering.',
      },
    ],
    whyBuilding: 'Companies waste money on bad spend decisions. AI can help them spend less and move faster.',
    beliefs: [
      'Help companies spend less (not more)',
      'AI should automate finance workflows',
      'Speed and efficiency over features',
      'Asymmetric bets and bold moves',
    ],
    designPhilosophy: 'Simple, fast, intelligent. AI should be invisible but powerful.',
    greenFlags: [
      'Eric Glyman and Karim Atiyeh (repeat founders)',
      '$32B valuation, $1B ARR',
      '100% YoY growth (rare at scale)',
      'Strong AI vision',
    ],
    redFlags: [
      'New York hybrid (not remote)',
      'Fintech can be dry for designers',
      'Fierce competition from Brex, Amex',
      'High-pressure, high-growth culture',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI categorization behaviors',
          'Define automated approval workflows',
          'Anomaly detection and alert logic',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Accuracy metrics for AI categorization',
          'User research on finance workflows',
          'A/B testing on automation features',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Finance dashboards and insights',
          'Mobile expense capture',
          'Enterprise admin controls',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Principal Product Designer',
        location: 'New York, NY',
        url: 'https://jobs.ashbyhq.com/ramp/6e7b0226-d806-4efb-972c-1e7d0e1690cf',
        level: 'Principal',
        type: 'full-time',
        aboutRole: 'Lead design for AI-powered finance automation. Design for 50,000+ businesses.',
        whyInteresting: 'Work with repeat founders. $1B ARR, 100% growth. Autonomous finance vision.',
      },
      {
        title: 'Staff Product Designer',
        location: 'New York, NY',
        url: 'https://jobs.ashbyhq.com/ramp/eca54d0e-232a-4c3e-bfcc-d6c6add393f5',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Design for AI-powered finance platform. High-growth, high-impact role.',
        whyInteresting: '$32B valuation. Fastest-growing fintech. AI-first approach.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Eric Glyman and Karim Atiyeh (repeat founders)',
        '$32B valuation, $1B ARR',
        '100% YoY growth (rare at scale)',
        'AI-native Level 3: AI is core',
        'Multiple senior roles (Principal, Staff)',
      ],
      whyNot: [
        'New York hybrid (not remote)',
        'Fintech domain might be dry',
        'High-pressure culture',
        'Unknown design team culture',
      ],
      nextActions: [
        'Research Eric Glyman (CEO)',
        'Try Ramp product',
        'Connect with Ramp designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:40:00',
    sources: [
      {
        title: 'Ramp $32B valuation, $1B ARR',
        url: 'https://techstartups.com/2025/11/17/ramp-hits-32b-valuation-with-new-300m-funding-round-as-investors-double-down-on-autonomous-finance/',
      },
      {
        title: 'Eric Glyman on SaaStr',
        url: 'https://www.saastr.com/the-first-100000000-arr-at-ramp-how-ceo-eric-glyman-and-cto-karim-atiyah-built-a-finance-platform-through-asymmetric-bets/',
      },
    ],
  },,
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered no-code platform. Build full-stack apps by describing what you want.',
    website: 'https://lovable.dev',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',
    stage: 'Series B',
    valuation: '$1.8B (2024)',
    totalFunding: '$228M',
    revenue: '$200M ARR (2025)',
    growth: '100,000 new products built daily',
    customers: '8M users (Nov 2025), 50%+ Fortune 500',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$200M ARR in 1 year with 100 employees',
      userGrowth: '2.3M (July) → 8M users (Nov 2025)',
      signals: ['Fastest to $200M ARR in history', '$8-15M ARR net new per month', 'Could hit $500M ARR in 2026', '50%+ Fortune 500 using Lovable'],
      tam: '$100B (no-code + AI coding market)',
      marketShare: '0.2% = 500x upside potential',
      ceiling: 'Early innings: Democratizing app creation',
      tailwinds: ['No-code adoption accelerating', 'Vibe coding entering job descriptions', 'Enterprise AI budgets growing'],
      headwinds: ['Competition from Bolt, v0, Replit', 'Code quality concerns at scale', 'Retention challenges post-launch'],
      moatType: 'network-effects',
      moatStrength: 'Strong: 100K daily products = data flywheel',
    },
    competitors: [
      { name: 'Bolt.new', description: '$40M ARR, fastest growth', whyTheyWin: 'StackBlitz technology, speed' },
      { name: 'v0 (Vercel)', description: '$9.3B valuation', whyTheyWin: 'Vercel distribution, enterprise' },
      { name: 'Replit', description: '$9B valuation', whyTheyWin: 'More mature, mobile apps' },
    ],
    marketPosition: '#1 in AI no-code by ARR',
    moat: ['100K daily products = training data', '50%+ Fortune 500 adoption', 'Network effects from templates'],
    vsGiants: 'Differentiate via no-code simplicity vs GitHub Copilot complexity',
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Describe app → AI builds it.',
    aiDesignChallenges: ['How to make AI-generated apps high quality', 'Balancing speed with customization', 'Teaching non-developers to prompt effectively', 'Managing expectations vs reality'],
    founders: [{ name: 'Nikita Bier', role: 'CEO', background: 'Founded tbh (sold to Facebook), Gas (sold to Discord). Serial social app founder.' }],
    whyBuilding: 'Everyone has app ideas. AI should make building them trivial.',
    beliefs: ['AI should make coding accessible to everyone', 'Speed of iteration > perfection', 'Product market fit > technology', 'Viral growth > paid acquisition'],
    designPhilosophy: 'Simple, delightful, fast. Make people feel like wizards.',
    greenFlags: ['Nikita Bier (repeat successful founder)', '$200M ARR with 100 employees', '$1.8B valuation', '50%+ Fortune 500 adoption'],
    redFlags: ['Consumer app founder in enterprise space', 'Very small team for scale', 'High competition', 'Retention unknown'],
    designTeam: { designHead: 'Unknown', teamSize: '~15 designers (15% of 100)' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: ['Design AI prompt interpretation', 'Define how AI makes design decisions', 'Product creation workflows'] },
      evaluation: { level: 'high', tasks: ['Quality scoring for generated apps', 'User satisfaction metrics', 'AI improvement feedback loops'] },
      interface: { level: 'high', tasks: ['Conversational app builder UI', 'Visual editor for AI outputs', 'Template and sharing systems'] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Remote)', url: 'https://lovable.dev/careers', type: 'full-time', aboutRole: 'Design experiences that make app creation feel like magic.', whyInteresting: '$200M ARR, 8M users. Fastest growing AI company ever.' }],
    cultureInsights: [],
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: ['$200M ARR with 100 people = incredible', 'Nikita Bier (proven founder)', '$1.8B valuation', 'AI-native Level 4', '50%+ Fortune 500'],
      whyNot: ['Very small team = high pressure', 'Consumer founder in B2B', 'Unknown design culture', 'High competition risk'],
      nextActions: ['Try Lovable product', 'Research Nikita Bier', 'Connect with Lovable designers'],
    },
    lastUpdated: '2026-01-26T18:00:00',
    sources: [
      { title: 'Lovable $200M ARR', url: 'https://techcrunch.com/2025/11/10/lovable-says-its-nearing-8-million-users-as-the-year-old-ai-coding-startup-eyes-more-corporate-employees/' },
      { title: 'Lovable Growth Playbook', url: 'https://thecreatorsai.com/p/lovable-growth-secrets-and-costs' },
    ],
  },
,
  {
    id: 'codeium',
    name: 'Codeium',
    description: 'AI coding assistant with free tier and enterprise offerings. Multi-language support.',
    website: 'https://codeium.com',
    headquarters: 'Mountain View, CA',
    remote: 'Hybrid',
    stage: 'Series C',
    valuation: '$2.9B (Feb 2025, in talks)',
    totalFunding: '$215M',
    revenue: '$40M ARR (Feb 2025)',
    growth: '3.6M developers, 7K+ companies',
    customers: '7,000+ companies',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$25M → $40M ARR (60% YoY)',
      userGrowth: '3.6M developers worldwide',
      signals: ['Raising at $3B valuation (2.4x in 9 months)', 'Unicorn status achieved', '$150M Series C for R&D', 'Free tier driving adoption'],
      tam: '$50B (AI coding assistant market)',
      marketShare: '0.08% = 1250x upside potential',
      ceiling: 'Early innings: GitHub Copilot is only 10% penetrated',
      tailwinds: ['Free tier = low friction adoption', 'Multi-IDE support', 'Enterprise demand growing'],
      headwinds: ['GitHub Copilot competition (Microsoft distribution)', 'Cursor taking enterprise share', 'Commoditization risk'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Free tier stickiness, but easy to switch',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Code completion, chat, and generation.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Mountain View, CA (Hybrid)', url: 'https://codeium.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$2.9B (Feb 2025, in talks)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Codeium product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Codeium $3B Valuation Talks', 'url': 'https://techcrunch.com/2025/02/19/ai-coding-startup-codeium-in-talks-to-raise-at-an-almost-3b-valuation-sources-say/'}, {'title': 'Codeium Growth Statistics', 'url': 'https://fueler.io/blog/codeium-usage-revenue-valuation-growth-statistics'}],
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI video generation platform with realistic avatars. Create videos from text in minutes.',
    website: 'https://heygen.com',
    headquarters: 'Los Angeles, CA',
    remote: 'Hybrid',
    stage: 'Series A',
    valuation: '$500M (2024)',
    totalFunding: '$60M',
    revenue: '$35M+ ARR (2024)',
    growth: '$1M → $35M ARR in 1 year',
    customers: '40,000+ paying businesses',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$1M → $35M+ ARR (35x in 1 year)',
      userGrowth: '40,000+ paying business customers',
      signals: ['Profitable since Q2 2023', '35x revenue growth in 1 year', '$60M Series A from Benchmark', 'Fortune 500 adoption'],
      tam: '$30B (video production market)',
      marketShare: '0.12% = 800x upside potential',
      ceiling: 'Early innings: Video is becoming AI-native',
      tailwinds: ['Video content demand exploding', 'Avatars becoming mainstream', 'Enterprise adoption accelerating'],
      headwinds: ['Competition from Runway, Pika', 'Quality vs real humans', 'Ethical concerns (deepfakes)'],
      moatType: 'technology',
      moatStrength: 'Strong: Realistic avatars hard to replicate',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Text → realistic avatar videos.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Los Angeles, CA (Hybrid)', url: 'https://heygen.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 4', '$500M (2024)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try HeyGen product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'HeyGen Series A', 'url': 'https://www.heygen.com/blog/announcing-our-series-a'}, {'title': 'HeyGen Growth', 'url': 'https://www.aibase.com/news/9839'}],
  },
  {
    id: 'gong',
    name: 'Gong',
    description: 'Revenue AI platform analyzing customer interactions to help sales teams win more deals.',
    website: 'https://gong.io',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series E',
    valuation: '$7.25B (2021)',
    totalFunding: '$583M',
    revenue: '$332M ARR (2024)',
    growth: '$300M+ ARR run rate',
    customers: '4,000+ companies',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$300M+ ARR, top-quartile SaaS growth',
      userGrowth: '4,000+ customers, 2,248 employees',
      signals: ['Surpassed $300M ARR milestone', 'AI agents processing $10B+ spend monthly', 'Strong demand for AI-powered revenue solutions', 'Hiring across functions'],
      tam: '$20B (sales enablement + conversation intelligence)',
      marketShare: '1.5% = 65x upside potential',
      ceiling: 'Mid-stage: Expanding from sales to all revenue teams',
      tailwinds: ['AI adoption in sales', 'Revenue intelligence becoming must-have', 'Enterprise budgets for sales tools'],
      headwinds: ['Competition from Chorus.ai (ZoomInfo)', 'Economic downturn = sales cuts', 'Valuation pressure (secondary at $4.5B)'],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: 26M+ AI decisions monthly = training data',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Analyzes calls, emails, meetings with AI.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://gong.io/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 3', '$7.25B (2021)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Gong product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Gong $300M ARR', 'url': 'https://www.gong.io/press/gong-surpasses-300m-arr-amid-increased-demand-for-ai-powered-revenue-solutions'}, {'title': 'Gong Funding History', 'url': 'https://www.gong.io/press/gong-raises-250-million-in-series-e-funding-at-7-25-billion-valuation'}],
  },
  {
    id: 'intercom-fin',
    name: 'Intercom (Fin)',
    description: 'AI customer service platform with Fin AI Agent. Handles support conversations at scale.',
    website: 'https://www.intercom.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Private',
    valuation: 'Unknown',
    totalFunding: '$250M',
    revenue: '$343M (2024)',
    growth: '25% YoY',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '25% YoY ($343M in 2024)',
      userGrowth: 'Fin approaching $100M ARR',
      signals: ['Fin approaching $100M ARR', 'Opening Berlin R&D hub', 'Hiring 100 people for AI team', '25% growth reacceleration from 10%'],
      tam: '$15B (customer support software)',
      marketShare: '2.3% = 43x upside potential',
      ceiling: 'Mid-stage: Expanding AI Agent to full customer experience',
      tailwinds: ['AI customer support becoming must-have', 'Enterprise adoption', 'Fin 3 launch momentum'],
      headwinds: ['Competition from Zendesk, Freshdesk', 'AI agent quality concerns', 'Customer trust issues'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Embedded in workflows, but competitors catching up',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Fin AI Agent handles customer conversations.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.intercom.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Intercom (Fin) product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Intercom Berlin Hub', 'url': 'https://www.intercom.com/blog/our-next-research-and-development-hub-berlin/'}, {'title': 'Intercom Fin Growth', 'url': 'https://www.growthunhinged.com/p/intercoms-bet-on-ai'}],
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video and audio editing. Edit by editing text transcripts.',
    website: 'https://www.descript.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series C',
    valuation: 'Unknown',
    totalFunding: '$100M+',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Millions of users',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: 'Unknown',
      userGrowth: 'Millions of users',
      signals: ['Launched Underlord AI co-editor', 'Transcription-based editing pioneer', 'Strong creator community'],
      tam: '$10B (video editing software)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with Adobe, Final Cut',
      tailwinds: ['Video content explosion', 'Creator economy growth', 'AI editing becoming mainstream'],
      headwinds: ['Adobe Premiere competition', 'Quality vs pro tools', 'Pricing pressure'],
      moatType: 'technology',
      moatStrength: 'Medium: Transcription-based editing is unique but replicable',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Transcription-based editing, AI co-editor.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.descript.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Descript product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Descript Careers', 'url': 'https://www.descript.com/careers'}, {'title': 'Descript AI Features', 'url': 'https://www.g2.com/products/descript/reviews'}],
  },
  {
    id: 'glean',
    name: 'Glean',
    description: 'AI-powered enterprise search and work assistant. Search, Assistant, and Agents.',
    website: 'https://www.glean.com',
    headquarters: 'Palo Alto, CA',
    remote: 'Hybrid',
    stage: 'Series F',
    valuation: '$7.2B (2025)',
    totalFunding: '$410M',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: 'Unknown',
      userGrowth: '850+ employees (nearly doubled in 6 months)',
      signals: ['$2.6B valuation jump in 9 months', '$150M Series F', 'Fast Company Top 10 Most Innovative', 'Hiring aggressively'],
      tam: '$50B (enterprise search + AI assistants)',
      marketShare: 'Unknown',
      ceiling: 'Early innings: Enterprise AI search is nascent',
      tailwinds: ['Enterprise AI adoption accelerating', 'Work AI becoming must-have', 'Fast Company recognition'],
      headwinds: ['Competition from Microsoft Copilot', 'Google Workspace AI', 'Enterprise sales cycles'],
      moatType: 'switching-costs',
      moatStrength: 'Strong: Deep enterprise integration creates lock-in',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI-powered search, assistant, and agents.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Palo Alto, CA (Hybrid)', url: 'https://www.glean.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 3', '$7.2B (2025)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Glean product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Glean Series F', 'url': 'https://www.glean.com/blog/glean-series-f-announcement'}, {'title': 'Glean Funding', 'url': 'https://www.cnbc.com/2025/06/10/glean-gen-ai-search-startup-raises-150-million-at-7-billion-value.html'}],
  },
  {
    id: 'writer',
    name: 'Writer',
    description: 'AI writing platform for enterprises. Full-stack generative AI for business workflows.',
    website: 'https://writer.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series C',
    valuation: '$1.9B (2024)',
    totalFunding: '$326M',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Accenture, L'Oreal, Uber',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Growing customer base (Accenture, L'Oreal, Uber)',
      signals: ['$200M Series C at $1.9B valuation', 'Adobe Ventures, IBM Ventures, Salesforce Ventures investors', 'Expanding to healthcare, retail, financial services'],
      tam: '$25B (AI writing + content generation)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Enterprise AI writing market consolidating',
      tailwinds: ['Enterprise AI adoption', 'Content generation demand', 'Multi-industry expansion'],
      headwinds: ['Competition from Jasper, Copy.ai', 'OpenAI/Anthropic direct competition', 'Commoditization risk'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Enterprise integration creates stickiness',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Full-stack generative AI platform for business.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://writer.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$1.9B (2024)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Writer product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Writer Series C', 'url': 'https://writer.com/blog/series-c-funding-writer-press-release/'}, {'title': 'Writer $1.9B Valuation', 'url': 'https://techcrunch.com/2024/11/12/generative-ai-startup-writer-raises-200m-at-a-1-9b-valuation/'}],
  },
  {
    id: 'harvey-ai',
    name: 'Harvey',
    description: 'AI for legal professionals. Document review, research, contract analysis for law firms.',
    website: 'https://harvey.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series E',
    valuation: '$8B (Dec 2025)',
    totalFunding: '$988M',
    revenue: '$100M+ ARR (Aug 2025)',
    growth: '50 of top AmLaw 100 firms',
    customers: '50+ AmLaw 100 firms',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$100M+ ARR in 3 years since launch',
      userGrowth: '50 of top AmLaw 100 firms',
      signals: ['$8B valuation (Feb $3B → June $5B → Dec $8B)', '$160M from a16z', '3 funding rounds in 2025', '$100M ARR in 3 years'],
      tam: '$15B (legal tech)',
      marketShare: '0.67% = 150x upside potential',
      ceiling: 'Early innings: AI legal tech is nascent',
      tailwinds: ['Legal industry AI adoption', 'Law firm budgets', 'Corporate legal spend'],
      headwinds: ['LexisNexis, Thomson Reuters competition', 'Legal profession conservatism', 'Ethical/liability concerns'],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: Legal data = moat, top law firms locked in',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. AI for legal work.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://harvey.ai/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 4', '$8B (Dec 2025)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Harvey product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Harvey $8B Valuation', 'url': 'https://techcrunch.com/2025/12/04/legal-ai-startup-harvey-confirms-8b-valuation/'}, {'title': 'Harvey $100M ARR', 'url': 'https://techstartups.com/2025/08/04/legal-ai-startup-harvey-hits-100m-arr-and-5b-valuation-just-3-years-after-launch/'}],
  },
  {
    id: 'brex',
    name: 'Brex',
    description: 'AI-powered spend platform. Corporate cards, banking, travel, expense automation.',
    website: 'https://www.brex.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series E+',
    valuation: '$12.3B',
    totalFunding: '$1.2B',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Unknown',
      signals: ['AI agents automating expenses', 'Expanding intelligent finance', 'Hiring Staff Product Designers ($240K-$300K)'],
      tam: '$25B (corporate spend management)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with Ramp, Amex',
      tailwinds: ['AI expense automation', 'Corporate spend software adoption', 'Fintech innovation'],
      headwinds: ['Ramp competition ($32B valuation)', 'American Express incumbency', 'Economic downturn'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Financial workflows create stickiness',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI agents automate finance workflows.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.brex.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', '$12.3B'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Brex product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Brex AI Finance', 'url': 'https://www.brex.com/journal/rise-of-the-ai-first-financial-os'}, {'title': 'Brex Hiring', 'url': 'https://www.dice.com/job-detail/22a3f1c8-1b2b-4b33-8aef-7af070183269'}],
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI-powered storytelling platform. Create presentations from prompts.',
    website: 'https://tome.app',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series B',
    valuation: '$300M',
    totalFunding: '$81M',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: '1M+ users',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Fastest productivity tool to 1M users',
      signals: ['$43M Series B', 'Fastest to 1M users', 'Hiring ML, engineering, design talent'],
      tam: '$10B (presentation software)',
      marketShare: 'Unknown',
      ceiling: 'Early innings: Competing with PowerPoint, Gamma',
      tailwinds: ['AI presentation tools becoming mainstream', 'Design automation demand', 'Creator economy'],
      headwinds: ['Gamma competition ($2.1B, $100M ARR)', 'Microsoft PowerPoint', 'Quality vs AI-generated'],
      moatType: 'brand',
      moatStrength: 'Medium: Brand recognition, but easy to switch',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Prompt → polished presentation.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://tome.app/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$300M'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Tome product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Tome Series B', 'url': 'https://www.globenewswire.com/news-release/2023/02/22/2613034/0/en/Tome-Is-Fastest-Productivity-Tool-To-Reach-1M-Users-Raises-43M-Series-B-to-Empower-All-Storytellers.html'}, {'title': 'Tome Valuation', 'url': 'https://iblnews.org/ai-startup-tome-which-uses-language-models-to-create-powerpoint-style-presentations-valued-at-300m/'}],
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant. Grammar, spelling, tone, and style suggestions for professionals.',
    website: 'https://www.grammarly.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Private',
    valuation: '$13B (2021)',
    totalFunding: '$1.2B (non-dilutive)',
    revenue: '$700M+ ARR (2026)',
    growth: '40M+ users, 50K+ businesses',
    customers: '40M+ users, 50K+ businesses',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$700M+ ARR, $1B financing secured',
      userGrowth: '40M+ users, 50K+ business customers',
      signals: ['$1B financing from General Catalyst', 'Merged with Coda (Jan 2026)', 'Now part of Superhuman Suite', 'Transforming to AI productivity platform'],
      tam: '$50B (business writing + productivity)',
      marketShare: '1.4% = 70x upside potential',
      ceiling: 'Mid-stage: Expanding beyond writing to full productivity',
      tailwinds: ['AI writing becoming must-have', 'Enterprise adoption', 'Platform expansion (Superhuman Suite)'],
      headwinds: ['OpenAI ChatGPT competition', 'Microsoft Editor', 'Commoditization risk'],
      moatType: 'brand',
      moatStrength: 'Strong: Brand recognition + 40M users = network effects',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI writing assistant across platforms.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.grammarly.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: ['AI-native Level 3', '$13B (2021)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Grammarly product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Grammarly $1B Financing', 'url': 'https://www.techi.com/grammarly-1b-funding-ai-platform-expansion/'}, {'title': 'Grammarly Growth', 'url': 'https://fueler.io/blog/grammarly-usage-revenue-valuation-growth-statistics'}],
  },
  {
    id: 'canva',
    name: 'Canva',
    description: 'AI-powered design platform. Create designs, presentations, videos with AI assistance.',
    website: 'https://www.canva.com',
    headquarters: 'Sydney, Australia',
    remote: 'Hybrid',
    stage: 'Private',
    valuation: '$42B (2024)',
    totalFunding: '$572M',
    revenue: '$3.5B ARR (2025)',
    growth: '260M+ MAU, 95% of Fortune 500',
    customers: '260M+ MAU, 95% of Fortune 500',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$3.5B ARR, preparing for IPO',
      userGrowth: '260M+ MAU, 95% of Fortune 500',
      signals: ['$42B valuation (IPO prep)', '$3.5B ARR', 'Launched Canva Design Model (first AI model for design)', '5,000+ employees, 8 countries'],
      tam: '$100B (design software)',
      marketShare: '3.5% = 28x upside potential',
      ceiling: 'Late stage: Mature product, expanding AI capabilities',
      tailwinds: ['Design democratization', 'AI design tools mainstream', 'Enterprise adoption'],
      headwinds: ['Adobe Creative Cloud competition', 'Figma (Adobe)', 'Profitability pressure for IPO'],
      moatType: 'network-effects',
      moatStrength: 'Strong: 260M users + templates = powerful network effects',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 2,
    aiNativeLevelDescription: 'AI is major feature. Canva AI assistant, Design Model for content generation.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Sydney, Australia (Hybrid)', url: 'https://www.canva.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 2', '$42B (2024)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Canva product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Canva AI Features', 'url': 'https://techcrunch.com/2025/10/30/canva-launches-its-own-design-model-adds-new-ai-features-to-the-platform/'}, {'title': 'Canva $42B Valuation', 'url': 'https://www.inc.com/jennifer-conrad/how-ai-is-powering-canva-to-a-42-billion-valuation-and-a-future-ipo/91267864'}],
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting transcription and automation. Real-time transcription, summaries, action items.',
    website: 'https://otter.ai',
    headquarters: 'Mountain View, CA',
    remote: 'Hybrid',
    stage: 'Series B+',
    valuation: 'Unknown',
    totalFunding: '$63M',
    revenue: '$100M+ ARR',
    growth: '1B+ meetings transcribed',
    customers: '230+ countries',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: '$100M+ ARR',
      userGrowth: '1B+ meetings transcribed, 230+ countries',
      signals: ['$100M+ ARR milestone', '1B meetings transcribed', 'Used globally in 230+ countries'],
      tam: '$10B (meeting productivity software)',
      marketShare: '1% = 100x upside potential',
      ceiling: 'Mid-stage: Competing with Zoom, Microsoft, Google built-ins',
      tailwinds: ['Remote work persistence', 'Meeting productivity demand', 'AI transcription quality improving'],
      headwinds: ['Zoom, Microsoft, Google building transcription', 'Commoditization', 'Free tier cannibalization'],
      moatType: 'none',
      moatStrength: 'Weak: Easy to switch, big tech building native features',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Real-time transcription, summaries, action items.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Mountain View, CA (Hybrid)', url: 'https://otter.ai/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Otter.ai product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Otter.ai Overview', 'url': 'https://en.wikipedia.org/wiki/Otter.ai'}, {'title': 'Otter.ai Careers', 'url': 'https://otter.ai/careers'}],
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered Go-to-Market engine. Generate sales copy, automate workflows at scale.',
    website: 'https://www.copy.ai',
    headquarters: 'Remote',
    remote: 'Yes',
    stage: 'Series A',
    valuation: 'Unknown',
    totalFunding: '$14M',
    revenue: '$23.7M ARR (2024)',
    growth: '5K+ customers',
    customers: '5,000+ customers',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$12M (2023) → $23.7M (2024) = 98% YoY',
      userGrowth: '5,000+ customers',
      signals: ['98% YoY growth', 'Hiring Senior Product Designer', 'Remote-first company'],
      tam: '$20B (sales + marketing automation)',
      marketShare: '0.12% = 830x upside potential',
      ceiling: 'Early innings: AI Go-to-Market tools nascent',
      tailwinds: ['AI adoption in sales/marketing', 'Remote work = distributed teams', 'Workflow automation demand'],
      headwinds: ['Competition from Jasper, Writer', 'Commoditization', 'Low barriers to entry'],
      moatType: 'none',
      moatStrength: 'Weak: Easy to replicate, low switching costs',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. AI-powered copywriting and GTM automation.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Remote (Yes)', url: 'https://www.copy.ai/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Yes work policy', 'Unknown design culture'],
      nextActions: ['Try Copy.ai product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Copy.ai Revenue', 'url': 'https://getlatka.com/companies/copyai'}, {'title': 'Copy.ai Hiring', 'url': 'https://www.linkedin.com/jobs/view/senior-product-designer-at-copy-ai-3050055207'}],
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'AI-powered presentation software. Smart templates and design automation.',
    website: 'https://www.beautiful.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series B',
    valuation: 'Unknown',
    totalFunding: '$17M',
    revenue: 'Unknown',
    growth: 'Unknown',
    customers: 'Thousands of customers',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: 'Unknown',
      userGrowth: '~30 employees, thousands of customers',
      signals: ['$11M Series B (Trinity Ventures)', 'Planning pro service for businesses', 'Hiring for product roles'],
      tam: '$10B (presentation software)',
      marketShare: 'Unknown',
      ceiling: 'Early-mid stage: Competing with PowerPoint, Gamma, Tome',
      tailwinds: ['AI presentation tools demand', 'Design automation', 'Remote work presentations'],
      headwinds: ['Gamma ($2.1B, $100M ARR)', 'Tome ($300M)', 'Microsoft PowerPoint dominance'],
      moatType: 'none',
      moatStrength: 'Weak: Easy to switch, low differentiation',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI-powered design suggestions and templates.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.beautiful.ai/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 3', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Beautiful.ai product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Beautiful.ai Funding', 'url': 'https://wellfound.com/company/beautifulai/funding'}, {'title': 'Beautiful.ai Overview', 'url': 'https://pitchbook.com/profiles/company/172306-18'}],
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code assistant. Privacy-first, enterprise-focused AI coding completion.',
    website: 'https://www.tabnine.com',
    headquarters: 'Tel Aviv, Israel',
    remote: 'Hybrid',
    stage: 'Series B',
    valuation: 'Unknown',
    totalFunding: '$67M',
    revenue: 'Unknown',
    growth: 'Millions of developers',
    customers: 'Millions of developers, 72 employees',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: 'Unknown',
      userGrowth: 'Millions of developers',
      signals: ['$25M Series B (2023)', 'Privacy-first positioning', 'Enterprise focus'],
      tam: '$50B (AI coding assistant market)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with GitHub Copilot, Cursor, Codeium',
      tailwinds: ['Enterprise security concerns favor privacy-first', 'On-prem deployment options', 'Multi-language support'],
      headwinds: ['GitHub Copilot dominance', 'Cursor UX leadership', 'Codeium free tier'],
      moatType: 'technology',
      moatStrength: 'Medium: Privacy-first and on-prem = enterprise moat',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. AI code completion and chat.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Tel Aviv, Israel (Hybrid)', url: 'https://www.tabnine.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Tabnine product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Tabnine Series B', 'url': 'https://www.tabnine.com/blog/tabnine-series-b/'}, {'title': 'Tabnine Funding', 'url': 'https://www.cbinsights.com/company/tabnine/financials'}],
  },
  {
    id: 'scale-ai',
    name: 'Scale AI',
    description: 'AI infrastructure for data labeling, training, and evaluation. Powers AI development.',
    website: 'https://scale.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    stage: 'Series F',
    valuation: '$14B (2024), targeting $25B (2026)',
    totalFunding: '$1.6B',
    revenue: '$870M (2024), projected $2B (2026)',
    growth: '130% YoY growth',
    customers: '400+ enterprise clients',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$870M (2024) → $2B (2026) = 130% YoY',
      userGrowth: '400+ enterprise clients',
      signals: ['Targeting $25B valuation (79% jump)', '$1B Series F (2024)', '130% revenue growth', 'Fastest-growing AI infrastructure'],
      tam: '$30B (AI infrastructure + data services)',
      marketShare: '2.9% = 34x upside potential',
      ceiling: 'Mid-stage: Expanding from data labeling to full AI infrastructure',
      tailwinds: ['AI training data demand exploding', 'Enterprise AI budgets', 'Foundation model training needs'],
      headwinds: ['Commoditization of data labeling', 'In-house solutions', 'Economic downturn = AI budget cuts'],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: 400+ enterprise clients + data quality = moat',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Infrastructure for AI development.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://scale.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', '$14B (2024), targeting $25B (2026)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Scale AI product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Scale AI Growth', 'url': 'https://fueler.io/blog/scale-ai-usage-revenue-valuation-growth-statistics'}, {'title': 'Scale AI $25B Target', 'url': 'https://aifundingtracker.com/scale-ai-sales-led-growth-strategy/'}],
  },
  {
    id: 'cohere-ai',
    name: 'Cohere',
    description: 'Enterprise AI platform. Foundation models and AI solutions for businesses.',
    website: 'https://cohere.com',
    headquarters: 'Toronto, Canada',
    remote: 'Hybrid',
    stage: 'Series D',
    valuation: 'Unknown',
    totalFunding: '$1.54B',
    revenue: 'Unknown',
    growth: '201-500 employees',
    customers: 'Unknown',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: '201-500 employees, global expansion',
      signals: ['$1.54B total funding', 'September 2025 funding round', 'Offices in London, Paris, NYC, SF, Toronto, Montreal, Seoul'],
      tam: '$150B (enterprise AI platform)',
      marketShare: 'Unknown',
      ceiling: 'Early-mid stage: Enterprise AI platform consolidating',
      tailwinds: ['Enterprise AI adoption', 'Foundation model demand', 'Multi-geography expansion'],
      headwinds: ['OpenAI, Anthropic competition', 'Open-source models (Llama, Mistral)', 'High compute costs'],
      moatType: 'technology',
      moatStrength: 'Medium: Enterprise focus differentiates, but tough competition',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI IS the product. Foundation models and AI platform.',
    aiDesignChallenges: [],
    founders: [],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: [],
    redFlags: [],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',
    designerLinks: [],
    openRoles: [{ title: 'Product Designer', location: 'Toronto, Canada (Hybrid)', url: 'https://cohere.com/careers', type: 'full-time' }],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Cohere product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [{'title': 'Cohere Careers', 'url': 'https://cohere.com/careers'}, {'title': 'Cohere Funding', 'url': 'https://tracxn.com/d/companies/cohere/__o4xfwmr3XwgsGEyH41XvwBm6Xd-SjsMlSld3d4ci6G0'}],
  }
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: number): Company[] {
  return companies.filter((c) => c.aiNativeLevel >= level);
}
