import { Company } from '../types';

export const terminalUse: Company = {
    id: 'terminal-use',
    name: 'Terminal Use',
    description: 'Applied research lab building frontier agentic systems to run enterprises. Originally launched as infrastructure for deploying filesystem-based AI coding agents — "Vercel for background agents."',
    website: 'https://www.terminaluse.com',
    screenshot: '/screenshots/terminal-use-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/terminal-use-og.webp',

    // Multi-dimensional Tags
    aiTypes: ['code-assistant', 'ai-infrastructure'],
    markets: ['b2b'],
    category: 'developer-tools' as const,

    industries: ['developer-tools', 'infrastructure'],

    // Business
    stage: 'Seed',
    valuation: 'Unknown',
    totalFunding: '$30M (estimated)',
    fundingHistory: [
      { stage: 'Seed', amount: '$30M', date: '2026-01', leadInvestors: ['Y Combinator'] },
    ],
    revenue: 'Unknown',
    growth: 'YC W26 launch; 4-person team; rapidly evolving from agent infra to enterprise agentic systems',
    runway: 'Strong (well-funded seed)',
    customers: 'Engineering teams deploying background AI agents',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Pre-revenue (estimated)',
      userGrowth: 'Early launch; developer adoption via HN and YC network',
      signals: [
        'YC W26 batch selection',
        '$30M raised at seed stage (reported)',
        'HN Launch post gained strong traction',
        'Pivoted positioning from agent-hosting infra to broader "frontier agentic systems"',
      ],
      tam: '$50B+ developer infrastructure and AI agent platform market (estimated)',
      marketShare: '<0.1% of TAM = massive upside potential',
      ceiling: 'Very early innings; agent infrastructure is a new category forming rapidly in 2025–2026',
      tailwinds: [
        'Explosive growth in AI coding agents (Cursor, Claude Code, Devin) driving demand for agent hosting infrastructure',
        'Developer pain of stitching together sandboxes, state persistence, file I/O, and streaming for agents',
        'Enterprise pressure to deploy autonomous agents at scale',
        'YC ecosystem provides early enterprise customers',
        'Race among dev teams to ship agent-native applications',
      ],
      headwinds: [
        'Crowded sandbox/agent infra space (E2B, Daytona, Modal, Northflank)',
        'Category still being defined — positioning risk if "agentic systems" is too broad',
        'Very small team (4 people) competing against better-funded incumbents',
        'AWS, GCP, Azure will inevitably build native agent deployment primitives',
      ],
      moatType: 'technology',
      moatStrength: 'Early-mover advantage in filesystem-native agent hosting; Palantir pedigree in enterprise agent deployment. Moat is thin at this stage.',
    },

    // Competition
    competitors: [
      {
        name: 'E2B',
        description: 'Open-source cloud infra for AI agent code execution using Firecracker microVMs. ~150ms cold starts.',
        whyTheyWin: 'Open source adoption, Fortune 100 penetration, fastest cold starts in class.',
      },
      {
        name: 'Modal',
        description: 'Python-native serverless compute platform used for AI workloads.',
        whyTheyWin: 'Fast, developer-friendly, strong Python ecosystem, venture-backed.',
      },
      {
        name: 'Daytona',
        description: 'Pivoted to AI agent sandboxes in early 2025; raised $24M Series A (Feb 2026).',
        whyTheyWin: 'Sub-90ms sandbox creation, strong pivot execution, well-funded.',
      },
    ],
    marketPosition: 'Frontier agentic systems for enterprise deployment',
    moat: [
      'Founder experience deploying large-scale agent use cases at Palantir (including US hospital networks)',
      'Filesystem-native design — built for agents that persist state across turns, not ephemeral execution',
    ],
    vsGiants: 'Specialized filesystem-native agent infra vs general-purpose compute platforms from hyperscalers.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI IS the product: Terminal Use exists entirely to deploy and run AI agents. Remove AI and there is no product.',
    aiDesignChallenges: [
      'Designing developer dashboards for long-running, multi-step agent workflows',
      'Visualizing agent state, filesystem snapshots, and execution traces',
      'Streaming output UX — how do you show a background agent\'s work in real time?',
      'Error states for non-deterministic agent failures (vs traditional software errors)',
      'Trust and observability UI for enterprise customers deploying autonomous agents',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Vivek Raja',
        role: 'Co-founder',
        background: 'Ex-Palantir; led technical delivery of one of the largest agent use cases at Palantir, including deployment across US hospital networks.',
      },
      {
        name: 'Filip Balucha',
        role: 'Co-founder',
        background: 'Ex-Palantir; worked on Ontology at Palantir. Went to university with Vivek Raja.',
      },
      {
        name: 'Stavros Filosidis',
        role: 'Co-founder',
        background: 'Ex-Palantir; worked on coding infrastructure at Palantir.',
      },
    ],
    whyBuilding:
      'Three ex-Palantir engineers saw the pain of stitching together sandboxes, state persistence, file I/O, and message streaming for agent deployments and built the abstraction layer they wished existed.',
    beliefs: [
      'Agents are fundamentally different from web apps — they need filesystem-native infrastructure',
      'The missing primitive in the AI stack is persistent, stateful agent hosting',
      'Enterprise agent deployment at scale requires Palantir-grade reliability',
    ],
    designPhilosophy: 'Minimal, terminal-aesthetic product design (monospace fonts, sparse UI). The website itself is a signal.',
    greenFlags: [
      'All three founders are ex-Palantir with direct enterprise agent deployment experience',
      '$30M raised at seed — exceptional for a 4-person team',
      'Strong HN traction at launch',
      'YC W26 batch (curated, high-signal cohort)',
    ],
    redFlags: [
      'Only 4 employees — very early, thin execution capacity',
      'Website pivoted from "Vercel for agents" to vague "frontier agentic systems" — positioning unclear',
      'No public product, pricing, or customer case studies yet',
      'Crowded infrastructure space with better-resourced competitors',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (likely no dedicated designer at 4 people)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Agent lifecycle design (spawn, pause, resume, kill)',
          'State persistence and snapshot UX',
          'Multi-turn agent context and handoff flows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Agent execution trace visualization',
          'Error classification for non-deterministic agent failures',
          'Cost and performance dashboards for background agent runs',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Developer dashboard for monitoring deployed agents',
          'CLI and SDK documentation site',
          'Enterprise onboarding and agent deployment wizard',
        ],
      },
    },
    productStage: '0→1',

    // Product & User Context
    targetAudiences: {
        primary: 'Engineering teams at companies building AI agents that require persistent filesystem state and long-running background execution',
        secondary: 'Enterprise AI/ML teams deploying autonomous agent workflows at scale',
    },
    userProblems: [
        'No standard hosting layer for agents that read/write files and persist state across multi-turn interactions',
        'Stitching together sandboxes + state persistence + file I/O + streaming output is painful and bespoke for every team',
        'Existing compute platforms (Lambda, Modal) are stateless and built for web apps, not agents',
        'Lack of observability into what background agents are actually doing',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [
      {
        source: 'ycombinator',
        sentiment: 'neutral',
        content: 'Tiny team (4 people), high ownership expected.',
      },
      {
        source: 'careers',
        sentiment: 'neutral',
        content: 'Terminal-aesthetic brand suggests engineering-first, minimalist culture.',
      },
      {
        source: 'linkedin',
        sentiment: 'neutral',
        content: 'San Francisco based, likely in-person given team size.',
      },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        '0→1 design opportunity — no designer exists yet, high impact',
        'Deeply technical AI product with unique UX challenges (agent observability, streaming, state)',
        'Strong founder pedigree (Palantir enterprise agent experience)',
        '$30M seed means real runway for a first design hire',
      ],
      whyNot: [
        'Only 4 people — product barely exists, design scope is speculative',
        'Positioning unclear (pivoted from specific "Vercel for agents" to vague "frontier agentic systems")',
        'No public product to evaluate — hard to know what you\'d actually be designing',
        'Crowded infra space with many better-known competitors',
      ],
      nextActions: [
        'Monitor for product/docs launch at terminaluse.com',
        'Follow Vivek Raja and Filip Balucha on LinkedIn for updates',
        'Check if they post on HN or open design roles',
      ],
    },

    // Meta
    lastUpdated: '2026-05-05T00:00:00',
    sources: [
      { title: 'YC Company Page', url: 'https://www.ycombinator.com/companies/terminal-use' },
      { title: 'Launch HN Thread', url: 'https://news.ycombinator.com/item?id=47311657' },
      { title: 'Terminal Use Website', url: 'https://www.terminaluse.com/' },
      { title: 'Extruct AI: Terminal Use Funding $30M', url: 'https://www.extruct.ai/hub/terminaluse-com/' },
      { title: 'StartupHub: Terminal Use — Vercel for Background AI Agents', url: 'https://www.startuphub.ai/ai-news/claude\'s-corner/2026/claudes-corner-terminal-use-yc-w2026' },
      { title: 'Filip Balucha LinkedIn', url: 'https://www.linkedin.com/in/filip-balucha/' },
      { title: 'Stavros Filosidis LinkedIn', url: 'https://uk.linkedin.com/in/stavrosfilosidis' },
    ],
};
