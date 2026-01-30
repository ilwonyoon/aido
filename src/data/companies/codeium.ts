import { Company } from '../types';

export const codeium: Company = {
    id: 'codeium',
    name: 'Codeium (now Windsurf)',
    description: 'AI coding platform with Windsurf Editor (agentic IDE) and plugins. Features Cascade AI for flow-based reasoning. Free tier and enterprise offerings.',
    website: 'https://codeium.com',
    headquarters: 'Mountain View, CA',
    remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['enterprise'],
  industries: ['infrastructure', 'developer-tools'],

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
    competitors: [
      {
        name: 'Cursor',
        description: 'AI code editor with Composer feature',
        whyTheyWin: 'Better for existing codebases, stronger IDE features, $20/mo pricing',
      },
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer by GitHub/OpenAI',
        whyTheyWin: 'GitHub integration, Microsoft distribution, brand trust',
      },
      {
        name: 'Replit',
        description: 'AI-native coding platform with Replit Agent',
        whyTheyWin: 'Full-stack platform with hosting, deployment, no local setup',
      },
      {
        name: 'Tabnine',
        description: 'AI code completion with enterprise focus',
        whyTheyWin: 'Strong enterprise compliance, self-hosted options',
      },
    ],
    marketPosition: 'Free-tier AI coding leader. Windsurf Editor is first agentic IDE with Cascade AI.',
    moat: [
      'Free tier: low-friction adoption (3.6M developers)',
      'Windsurf Editor: agentic IDE with Cascade AI for multi-step reasoning',
      'Multi-IDE support: VS Code, JetBrains, and more',
      'Enterprise self-hosted options',
    ],
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building free AI code completion to democratize AI coding. Zero-to-one in accessible AI development.',
    aiDesignChallenges: [
      'Designing Cascade AI: flow-based reasoning for multi-step edits',
      'Agentic IDE: balancing AI autonomy vs developer control',
      'Terminal integration: AI understanding command-line context',
      'Workflow automation: reusable markdown commands',
      'Free tier UX: making AI accessible without overwhelming users',
    ],
    founders: [
      {
        name: 'Varun Mohan',
        role: 'Co-founder & CEO',
        background: 'MIT grad (BS & MS in Computer Science). Previously Tech Lead Manager at Nuro (autonomous vehicles). Interned at Databricks, Quora, LinkedIn. Born to Indian immigrant parents in Sunnyvale, CA. Friends with Douglas Chen since middle school.',
      },
      {
        name: 'Douglas Chen',
        role: 'Co-founder',
        background: 'MIT grad. Co-founded with Varun in 2021. Long-time friends since middle school. Initially built Exafunction (GPU virtualization), pivoted to Codeium in 2022.',
      },
    ],
    whyBuilding: 'Democratize AI-powered coding by making it free and accessible. Started as Exafunction (GPU virtualization), pivoted to Codeium after seeing demand for AI coding tools. Launched Windsurf Editor to create first agentic IDE.',
    beliefs: [
      'AI coding tools should be free and accessible to all developers',
      'Agentic AI requires new UX paradigm: flows, not just chat',
      'Developer productivity is the next frontier for AI',
      'Free tier drives adoption and feedback loops',
      'Multi-IDE support is critical—developers have strong preferences',
    ],
    greenFlags: ['AI-native company', 'Growth potential'],
    redFlags: ['Unknown design culture', 'Competitive market'],
    designTeam: { designHead: 'Unknown', teamSize: 'Unknown' },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing Cascade AI: flow-based reasoning for multi-step edits',
          'Agentic IDE behavior: when AI acts autonomously vs asks for confirmation',
          'Terminal context awareness: AI understanding command-line workflows',
          'Workflow automation: creating reusable markdown commands',
          'Context management: keeping AI aware of entire codebase',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Code quality indicators for AI-generated code',
          'Testing and verification workflows',
          'User feedback loops for AI improvement',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Windsurf Editor: agentic IDE interface',
          'Cascade chat: conversational interface for multi-step edits',
          'Autocomplete and Supercomplete UX',
          'Terminal integration and command suggestions',
          'App previews and deployment UI',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Software developers seeking free AI code completion',
        secondary: 'Enterprise engineering teams needing self-hosted AI coding tools',
    },
    userProblems: [
        'GitHub Copilot and Cursor charge monthly fees limiting adoption by budget-conscious developers',
        'Enterprises need self-hosted AI code assistants for security and compliance',
        'Context-aware code suggestions from AI require deep codebase understanding',
        'Developers using non-standard languages lack good AI completion options',
        'Switching between IDE and AI chat for code questions breaks flow',
    ],

    designerLinks: [],
    openRoles: [],
    cultureInsights: [
      {
        source: 'techcrunch',
        sentiment: 'neutral',
        content: 'Varun Mohan and Douglas Chen joined Google DeepMind in July 2025. Codeium continues operating independently. Fast-paced startup culture focused on AI research and developer tools.',
        url: 'https://www.business-standard.com/technology/tech-news/google-hires-windsurf-ceo-varun-mohan-gemini-ai-project-openai-douglas-chen-125071200543_1.html',
      },
    ],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$2.9B (Feb 2025, in talks)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Codeium product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T23:40:00',
    sources: [
      {'title': 'Codeium $3B Valuation Talks', 'url': 'https://techcrunch.com/2025/02/19/ai-coding-startup-codeium-in-talks-to-raise-at-an-almost-3b-valuation-sources-say/'},
      {'title': 'Codeium Growth Statistics', 'url': 'https://fueler.io/blog/codeium-usage-revenue-valuation-growth-statistics'},
      {'title': 'Windsurf Editor Launch', 'url': 'https://codeium.com/windsurf'},
      {'title': 'Windsurf Review 2026', 'url': 'https://vibecoding.app/blog/windsurf-review'},
      {'title': 'Varun Mohan Interview (Lenny\'s Podcast)', 'url': 'https://www.lennysnewsletter.com/p/the-untold-story-of-windsurf-varun-mohan'},
      {'title': 'Google Hires Windsurf CEO', 'url': 'https://www.business-standard.com/technology/tech-news/google-hires-windsurf-ceo-varun-mohan-gemini-ai-project-openai-douglas-chen-125071200543_1.html'},
    ],
  };
