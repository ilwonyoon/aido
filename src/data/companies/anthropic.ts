import { Company } from '../types';

export const anthropic: Company = {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'AI safety company building Claude, a helpful, harmless, and honest AI assistant.',
    website: 'https://anthropic.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/anthropic-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  industries: ['other'],

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
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building foundational models and defining new category of AI assistants. High risk, high upside, transforming human-computer interaction.',
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

    // Product & User Context
    targetAudiences: {
        primary: 'Software developers and technical teams building AI products',
        secondary: 'Enterprise knowledge workers using AI assistants for research, writing, and analysis',
    },
    userProblems: [
        'Building safe, reliable AI systems requires deep ML expertise most teams lack',
        'Existing LLMs produce hallucinations and unreliable outputs in production',
        'AI assistants struggle with complex, multi-step reasoning tasks requiring deep analysis',
        'Developers need AI that follows instructions precisely without constant supervision',
        'Enterprises need trustworthy AI with strong safety guarantees for regulated industries',
    ],

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
        location: 'New York City, NY; Remote-Friendly (Travel Required) | San Francisco, CA | New York City, NY | Seattle, WA',
        url: 'https://job-boards.greenhouse.io/anthropic/jobs/5025976008',
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
        'Level A AI-native — frontier of AI design',
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
  };
