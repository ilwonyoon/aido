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
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: number): Company[] {
  return companies.filter((c) => c.aiNativeLevel >= level);
}
