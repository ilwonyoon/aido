import { Company } from '../types';

export const serval: Company = {
  id: 'serval',
  name: 'Serval',
  description:
    'AI-native enterprise automation and IT service management platform that uses agents and natural-language workflows to resolve tickets, automate access, and orchestrate operational work across IT and other business teams.',
  website: 'https://www.serval.com',
  screenshot: '/screenshots/serval-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',
  ogImage: '/og-images/serval-og.webp',

  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure', 'security'],

  stage: 'Series B',
  valuation: '$1B (Dec 2025)',
  totalFunding: '$127M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Undisclosed',
      date: '2024-08',
    },
    {
      stage: 'Series A',
      amount: '$47M',
      date: '2025-10',
      leadInvestors: ['Redpoint Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$75M',
      date: '2025-12',
      valuation: '$1B',
      leadInvestors: ['Sequoia Capital'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth:
    'Revenue grew 500% in the 90 days after Series A, while headcount more than tripled by Dec 2025.',
  runway: 'Well-capitalized after a $75M Series B in Dec 2025.',
  customers:
    'General Motors, Notion, Perplexity, Vercel, Mercor, LangChain, and Verkada.',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '500% in the 90 days after Series A (reported Dec 2025)',
    signals: [
      '$75M Series B at a $1B valuation in Dec 2025, bringing total funding to $127M',
      'Customers automate more than 50% of IT tickets on the platform',
      'Product expanded beyond IT into HR, Finance, Legal, Security, and Engineering workflows',
      'Headcount more than tripled after Series A',
    ],
    tam: '$100B+ combined ITSM, service management, and enterprise workflow automation market',
    ceiling:
      'If Serval becomes the AI-native system of record for service operations, it can expand from IT into a horizontal enterprise automation layer.',
    tailwinds: [
      'Enterprises want to replace brittle ticketing and workflow stacks with AI-native automation',
      'Internal service teams are under pressure to do more with less headcount',
      'Agentic AI is becoming acceptable for repetitive operational workflows with approval layers',
    ],
    headwinds: [
      'Trust and safety requirements are high for access, provisioning, and compliance workflows',
      'Incumbents like ServiceNow have deep distribution and workflow lock-in',
      'Enterprise rollout speed can be slowed by integration and security reviews',
    ],
    moatType: 'platform-ecosystem',
    moatStrength:
      'Moderate-strong if the combined ITSM system of record, workflow engine, and enterprise integrations become embedded across multiple teams.',
  },

  competitors: [
    {
      name: 'ServiceNow',
      description: 'Incumbent enterprise ITSM and workflow platform.',
      whyTheyWin: 'Deep enterprise penetration, broad suite coverage, and strong buyer familiarity.',
    },
    {
      name: 'Moveworks',
      description: 'AI enterprise support platform focused on internal employee requests and automation.',
      whyTheyWin: 'Strong enterprise brand and distribution, now backed by ServiceNow.',
    },
    {
      name: 'Aisera',
      description: 'AI service desk and support automation platform for enterprise teams.',
      whyTheyWin: 'Established automation and ITSM integrations with enterprise buyers.',
    },
  ],
  marketPosition:
    'AI-native alternative to legacy ITSM and service automation stacks, starting with IT and expanding into broader enterprise operations.',
  moat: [
    'Combines system-of-record ITSM with agentic workflow automation',
    'Natural-language-to-code workflow builder with auditable, permissioned automations',
    'Cross-functional expansion beyond IT increases product surface area and switching costs',
  ],
  vsGiants:
    'Serval is trying to replace legacy ticketing and workflow stacks with AI-native agents and automation, rather than bolting AI onto traditional ITSM suites.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the core product: Serval uses agents and natural-language workflow generation to execute and improve enterprise service operations.',
  aiDesignChallenges: [
    'Trust design for autonomous actions in access, onboarding, and compliance workflows',
    'Making generated workflows explainable, editable, and safe for operators',
    'Designing approvals, observability, and audit trails for agentic systems in enterprise environments',
  ],

  founders: [
    {
      name: 'Jake Stauch',
      role: 'Co-founder & CEO',
      background:
        'Product leader from Verkada who helped build Serval around the idea of freeing IT teams from repetitive operational work.',
    },
    {
      name: 'Alex McLeod',
      role: 'Co-founder & CTO',
      background:
        'Engineering leader from Verkada who co-founded Serval to build an AI-native operations platform for enterprise service workflows.',
    },
  ],
  whyBuilding:
    'The founders saw IT teams stuck in legacy ticketing and workflow tools, and wanted to replace manual operational work with AI-native agents that can reason, act, and improve over time.',
  beliefs: [
    'Enterprise automation should be simple enough to create from natural language',
    'AI agents need clear permissions, traceability, and human oversight',
    'Operational teams should spend less time routing tickets and more time on high-impact work',
  ],
  designPhilosophy:
    'Make powerful enterprise automation feel understandable, editable, and trustworthy for operators.',
  greenFlags: [
    'Strong fundraising velocity: Series A in Oct 2025, Series B in Dec 2025',
    'Early enterprise logos and visible workflow expansion beyond IT',
    'High compensation and explicit design-system ownership for the Product Designer role',
  ],
  redFlags: [
    'Five-day in-office expectation in San Francisco',
    'Enterprise reliability bar is extremely high for access, provisioning, and compliance workflows',
    'Competing against entrenched incumbents with deep distribution',
  ],

  designTeam: {
    teamSize:
      'Early design function; hiring a Product Designer and Senior Motion Designer as of Apr 2026.',
    notableMembers: [{ name: 'Sounak Gupta', role: 'Product Designer' }],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent workflow authoring and permissions models',
        'Escalation, approval, and exception handling for service operations',
        'Cross-system orchestration for onboarding, access, and ticket resolution',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Automation quality metrics and resolution-rate reporting',
        'Confidence, traceability, and auditability of agent actions',
        'Usability testing for complex workflow setup with IT operators',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'ITSM console, ticket views, and workflow builders',
        'Admin experiences for integrations, access, and policy controls',
        'Design-system foundations for an emerging enterprise platform',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise IT and service operations teams',
    secondary:
      'HR, Finance, Legal, Security, and Engineering teams adopting internal workflow automation.',
  },
  userProblems: [
    'Legacy ITSM tools are slow and manual for repetitive service work',
    'Access and onboarding workflows require brittle scripts and too much operator time',
    'Teams need automation that is auditable and safe, not opaque black-box AI',
    'Operational workflows are fragmented across separate tools and approvals systems',
  ],

  designerLinks: [
    {
      name: 'Sounak Gupta',
      role: 'Product Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/sounak-gupta',
      description: '0-1 product designer and developer building at Serval.',
    },
  ],
  openRoles: [
    {
      title: "Design Engineer",
      location: "San Francisco",
      type: "full-time",
      url: "https://jobs.ashbyhq.com/Serval/581f8b72-9a8c-46d2-9bf7-7fddad5d8750",
      roleFamily: "design-engineering",
      roleSignal: "standard",
      verificationStatus: "confirmed",
      sourceType: "ashby",
      lastVerifiedAt: "2026-05-07",
      whyInteresting: "Current design role verified on Ashby.",
    },
    {
      title: "Product Designer",
      location: "San Francisco",
      type: "full-time",
      url: "https://jobs.ashbyhq.com/Serval/f71a1d3f-9c1b-485e-964b-58e071510eac",
      team: "Product",
      compensation: "$175K-$300K + equity",
      postedDate: "2026-02",
      aboutRole: "Work with the founding team to shape Serval’s platform from the ground up, focusing on intuitive interfaces for powerful automation workflows.",
      responsibilities: [
        "Turn a complex operational domain into simple, elegant product flows",
        "Explore ideas through mockups, prototypes, and customer usability testing",
        "Partner with engineering on pragmatic tradeoffs from concept through shipped UI",
        "Build the foundations of a flexible, scalable design system"
      ],
      requirements: [
        "5+ years of in-house product design experience building end-to-end applications",
        "Experience with Figma and interactive prototyping",
        "Comfort with ambiguity, complex B2B workflows, and fast iteration",
        "Strong craft and willingness to make product tradeoffs to ship"
      ],
      preferred: [
        "Experience as a founding or early product designer at a startup",
        "Experience with B2B SaaS tools"
      ],
      whyInteresting: "Early design ownership on an AI-native enterprise platform where design influences workflow logic, system foundations, and brand expression.",
      roleFamily: "product-design",
      roleSignal: "standard",
      verificationStatus: "confirmed",
      sourceType: "ashby",
      lastVerifiedAt: "2026-05-07",
    }
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content:
        'Serval describes its culture as valuing innovation, ownership, accountability, and fun, and highlights flexible PTO, daily lunches, an onsite gym, and team events.',
      url: 'https://jobs.ashbyhq.com/Serval/f71a1d3f-9c1b-485e-964b-58e071510eac',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content:
        'The Product Designer role requires in-person presence in San Francisco, indicating an office-first culture rather than remote flexibility.',
      url: 'https://jobs.ashbyhq.com/Serval/f71a1d3f-9c1b-485e-964b-58e071510eac',
    },
    {
      source: 'careers',
      sentiment: 'negative',
      content:
        'A Serval founding engineer described the company as lean with high ownership and no handoff culture, which suggests an intense environment that is not for everyone.',
      url: 'https://www.serval.com/updates/why-i-joined-serval-kaz-hishida',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'The open Product Designer role owns workflow-builder UX, systems foundations, and early brand expression',
      'Serval is moving from an IT point solution toward a horizontal enterprise automation platform',
      'Strong enterprise traction and fundraising momentum create real product surface area to shape',
    ],
    whyNot: [
      'Office-first in San Francisco with no remote option',
      'High-ambiguity, high-ownership environment with lean team expectations',
      'Enterprise trust and security constraints can slow iteration and raise the quality bar',
    ],
    nextActions: [
      'Monitor whether the Product Designer role remains open and whether a broader product design team forms',
      'Track additional customer stories outside IT to validate horizontal expansion',
    ],
  },

  lastUpdated: '2026-04-13T11:05:00',
  sources: [
    { title: 'Serval Official Website', url: 'https://www.serval.com' },
    {
      title: 'Serval Series A Announcement',
      url: 'https://www.serval.com/updates/series-a',
    },
    {
      title: 'Serval Series B Announcement',
      url: 'https://www.serval.com/updates/serval%E2%80%99s-next-chapter-raising-75m-to-build-the-new-era-of-enterprise-automation-and-service-management',
    },
    {
      title: 'Serval Product Designer Role (Ashby)',
      url: 'https://jobs.ashbyhq.com/Serval/f71a1d3f-9c1b-485e-964b-58e071510eac',
    },
    {
      title: 'General Catalyst on Serval',
      url: 'https://www.generalcatalyst.com/stories/doubling-down-on-serval',
    },
    {
      title: 'Serval Careers',
      url: 'https://www.serval.com/careers',
    },
    {
      title: 'Following the Founders: Why I Joined Serval',
      url: 'https://www.serval.com/updates/why-i-joined-serval-kaz-hishida',
    },
  ],
};
