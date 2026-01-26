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
    aiNativeLevelDescription: 'AI IS the product. Without AI, no product exists.',
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
        location: 'San Francisco, NYC, Seattle (Remote OK)',
        url: 'https://www.anthropic.com/jobs',
        team: 'Claude Code',
        level: 'Senior',
        type: 'full-time',
        compensation: '$300K-$405K (L5 SF)',
        postedDate: '2025-01',
        aboutRole: 'Design the agentic coding experience for Claude Code — the AI coding assistant that\'s changing how developers work. This is frontier AI design work.',
        responsibilities: [
          'Define UX patterns for agentic AI interactions (multi-step tasks, autonomous actions)',
          'Design trust and transparency systems for AI code changes',
          'Create intuitive flows for reviewing and approving AI-generated code',
          'Collaborate with Character Training team on Claude\'s coding personality',
          'Ship quickly in a fast-moving product area ($500M+ ARR in 3 months)',
        ],
        requirements: [
          'Strong portfolio of shipped product design work',
          'Experience designing developer tools or complex workflows',
          'Ability to work in ambiguity — defining new UX patterns',
          'Excellent systems thinking and interaction design skills',
          'Comfort with AI/ML product constraints',
        ],
        preferred: [
          'Background in code editors, IDEs, or developer tools',
          'Understanding of LLM capabilities and limitations',
          'Previous startup or high-growth experience',
          'Technical literacy (can read code)',
        ],
        teamInfo: 'Report to Joel Lewenstein (Head of Design). Work alongside Character Training team. Small, high-impact design org under CPO Mike Krieger (Instagram co-founder).',
        whyInteresting: 'Claude Code is the fastest-growing product in Anthropic\'s history. Agentic UX is the frontier of AI design — you\'d be defining patterns that don\'t exist yet.',
      },
      {
        title: 'Product Designer, Growth',
        location: 'San Francisco, NYC, Seattle',
        url: 'https://www.anthropic.com/jobs',
        team: 'Growth',
        level: 'Senior',
        type: 'full-time',
        compensation: '$300K-$405K (L5 SF)',
        postedDate: '2025-01',
        aboutRole: 'Drive user acquisition and activation for Claude. Design experiences that help users discover Claude\'s capabilities and form lasting habits.',
        responsibilities: [
          'Design onboarding flows that demonstrate Claude\'s unique value',
          'Create growth loops and viral mechanics',
          'Optimize conversion funnels across web and mobile',
          'Design experiments and analyze results',
          'Collaborate with marketing on landing pages and campaigns',
        ],
        requirements: [
          'Strong portfolio with measurable growth impact',
          'Experience with experimentation and A/B testing',
          'Data-informed design approach',
          'Consumer product experience preferred',
        ],
        preferred: [
          'Previous growth design role at a tech company',
          'Experience with AI products',
          'Strong copywriting skills',
        ],
        teamInfo: 'Growth-focused design role. Fast experimentation culture. Direct impact on user metrics.',
        whyInteresting: 'Help scale Claude from millions to billions of users. Growth at an AI lab is unique — you\'re introducing people to a new way of thinking and working.',
      },
      {
        title: 'Content Designer, Enterprise Growth',
        location: 'San Francisco, NYC, Seattle',
        url: 'https://www.anthropic.com/jobs',
        team: 'Enterprise',
        level: 'Mid-Senior',
        type: 'full-time',
        postedDate: '2025-01',
        aboutRole: 'Craft the voice and content strategy for enterprise Claude products. Help businesses understand and adopt AI safely.',
        responsibilities: [
          'Write UX copy for enterprise features and workflows',
          'Create documentation and help content',
          'Define content guidelines for Claude\'s enterprise voice',
          'Collaborate with product and design on messaging strategy',
        ],
        requirements: [
          'Portfolio of UX writing and content design work',
          'Experience with B2B/enterprise products',
          'Strong understanding of AI concepts for non-technical audiences',
        ],
        teamInfo: 'Enterprise team serving 300,000+ B2B customers. High-stakes content work — your words guide important business decisions.',
        whyInteresting: 'Enterprise AI adoption is at an inflection point. You\'d be shaping how businesses think about and trust AI.',
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
        content: '리뷰 없음 — Seed 단계 스타트업으로 데이터 부족.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design 데이터 없음. 스타트업 규모로 연봉 데이터 없음.',
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
    aiNativeLevelDescription: 'AI IS the product. Video generation is 100% AI-powered.',
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
        content: 'Research-driven culture. Stanford AI PhD 파운더들. Fast-paced, small team (~30명).',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Creative 커뮤니티와 적극 소통. 유저 피드백 빠르게 반영하는 문화.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: '리뷰 없음 — Series B 스타트업이지만 아직 데이터 부족.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design 데이터 없음. 아직 levels.fyi에 연봉 데이터 없음.',
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
    aiNativeLevelDescription: 'AI IS the product. Voice generation is 100% AI.',
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
        content: 'Scaling pains as company grows (~100명). Good comp, high expectations. 아직 디자인 팀 문화 정보 적음.',
      },
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'European distributed team (Poland, UK, US). 엔지니어링 중심 문화.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design 데이터 없음. SWE 기준: Senior $200-300K 추정 (Remote).',
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
    aiNativeLevelDescription: 'AI IS the product. Autonomous software engineering agent.',
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
        content: 'Extremely technical culture. Small, elite team (~20명). IOI/ICPC 출신 엔지니어들.',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        content: 'Competitive programming culture. 디자이너 문화 정보 없음 — 엔지니어 중심 팀.',
      },
      {
        source: 'linkedin',
        sentiment: 'neutral',
        content: 'SF 기반. 디자인 리더십 정보 없음 — first design hire 가능성.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: '리뷰 없음 — Series B지만 팀 규모 작아 데이터 부족.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design 데이터 없음. 연봉 데이터 없음.',
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
        content: 'Young, ambitious team (~50명). Harvard 중퇴 파운더. Move fast culture.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Hypergrowth mode. OpenAI/Anthropic를 고객으로 둔 검증된 제품.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: '리뷰 적음 — 빠르게 성장 중이지만 아직 데이터 부족.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design: $150K-250K + Equity (job posting 기준). Levels.fyi 데이터 없음.',
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
    openRoles: [
      {
        title: 'Senior / Staff Product Designer',
        location: 'Remote (Global)',
        url: 'https://linear.app/careers',
        team: 'Product',
        level: 'Senior/Staff',
        type: 'full-time',
        postedDate: '2025-01',
        aboutRole: 'Build project management software that empowers high-impact companies. Work in small, autonomous project teams with engineers.',
        responsibilities: [
          'Own end-to-end product design for Linear features',
          'Partner tightly with engineers from ideation to shipping',
          'Maintain and evolve Linear\'s design system',
          'Prototype and iterate quickly',
          'Shape product direction with leadership',
        ],
        requirements: [
          'Robust design skills and sharp product thinking',
          'Ability to engage in technical discussions',
          'Experience shipping high-quality products',
          'Strong systems thinking',
        ],
        preferred: [
          'Developer tools experience',
          'Design systems expertise',
          'Remote work experience',
        ],
        teamInfo: 'Fully remote team of 178 people. Designer-CEO culture. Small, autonomous project teams.',
        whyInteresting: 'Designer-led company (CEO is a designer). Remote-first. Building the tool developers love — rare for B2B software.',
      },
    ],

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
        title: 'Product Designer, Growth',
        location: 'New York, NY / San Francisco, CA',
        url: 'https://notion.com/careers',
        team: 'Growth',
        level: 'Mid-Senior',
        type: 'full-time',
        compensation: '$105K-$260K',
        postedDate: '2025-01',
        aboutRole: 'Design product concepts that balance vision, craft, speed, and business potential. Craft every detail from idea to pixel-perfect execution.',
        responsibilities: [
          'Design growth experiments and onboarding flows',
          'Optimize conversion and activation funnels',
          'Run projects end-to-end with engineers',
          'Partner with Customer Experience and Sales teams',
        ],
        requirements: [
          'Strong product design portfolio',
          'Growth mindset and data-informed approach',
          'Experience with experimentation',
          'Pixel-perfect execution skills',
        ],
        preferred: [
          'B2B SaaS experience',
          'Growth design background',
          'Experience with AI products',
        ],
        teamInfo: 'Hybrid work (Mon/Thu in office). ~800 employees. Offices in SF, NYC, Dublin, Tokyo, Seoul.',
        whyInteresting: 'Designer-founder company. Iconic product used by millions. Hybrid allows some flexibility.',
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
    aiNativeLevelDescription: 'AI IS the product. Building foundation models.',
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
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: number): Company[] {
  return companies.filter((c) => c.aiNativeLevel >= level);
}
