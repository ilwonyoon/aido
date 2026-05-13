import { Company } from '../types';

export const conductorAi: Company = {
  id: 'conductorai',
  name: 'ConductorAI',
  description:
    'AI platform for government and regulated organizations that turns policy, approvals, reviews, and institutional knowledge into agentic workflows.',
  website: 'https://www.conductorai.com',
  headquarters: 'New York, NY',
  remote: 'Hybrid',

  aiTypes: ['automation', 'search-retrieval', 'text-assistant'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['govtech'],
  industries: ['productivity', 'other'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$15M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2025-04',
      leadInvestors: ['Lux Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Deployed in highly secure government environments including FedRAMP High and classified networks',
  runway: 'Unknown',
  customers: 'Government agencies, defense organizations, and regulated mission partners',

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$15M Series A led by Lux Capital',
      'Booz Allen Ventures strategic investment',
      'FedRAMP High and classified environment deployment claims',
      'Product Design Lead role open',
    ],
    tam: '$30B+ government workflow, compliance, and secure AI modernization market',
    ceiling:
      'High if ConductorAI becomes the AI workflow layer for policy-heavy government decisions.',
    tailwinds: [
      'Government agencies need AI modernization in secure environments',
      'Policy and approval workflows are document-heavy and slow',
      'Agentic search and review can accelerate regulated decisions',
    ],
    headwinds: [
      'Govtech sales cycles and security requirements are difficult',
      'Domain complexity is high',
      'Brand confusion with Conductor coding-agent company',
    ],
    moatType: 'vertical-specialization',
    moatStrength:
      'Medium to strong if secure deployments and policy workflow data create trust and procurement advantage.',
  },

  competitors: [
    {
      name: 'Palantir',
      description: 'Enterprise and government data/AI platform.',
      whyTheyWin: 'Deep government relationships and deployment credibility.',
    },
    {
      name: 'Scale AI',
      description: 'Data and AI infrastructure for government and enterprises.',
      whyTheyWin: 'Strong defense AI footprint and operational scale.',
    },
    {
      name: 'GovDash',
      description: 'AI-assisted government contracting and compliance workflow platform.',
      whyTheyWin: 'Focused federal workflow specialization.',
    },
  ],
  marketPosition:
    'Agentic workflow and search platform for policy-heavy government approvals and reviews.',
  moat: [
    'Secure government deployment requirements',
    'Policy and review workflow specialization',
    'Booz Allen Ventures relationship and mission partner access',
  ],
  vsGiants:
    'More focused on policy/approval workflow orchestration than horizontal cloud AI platforms.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-native: ConductorAI turns complex policy documents and mission workflows into AI-augmented decision processes.',
  aiDesignChallenges: [
    'Designing agentic decision trees for policy and compliance review',
    'Making source citations, policy logic, and redactions auditable',
    'Supporting human judgment in high-stakes government workflows',
    'Building AI-native design systems that engineers and coding agents can consume',
  ],

  founders: [
    {
      name: 'Zachary Long',
      role: 'CEO',
      background:
        'CEO of ConductorAI; quoted by Booz Allen Ventures on AI-driven government modernization.',
    },
  ],
  whyBuilding:
    'Cut through government red tape by turning complex policy, documents, and approvals into AI-assisted workflows that support human judgment.',
  beliefs: [
    'AI should accelerate mission-critical decisions without replacing expert judgment',
    'Policy and institutional know-how can be encoded into operational workflows',
    'Secure environments need purpose-built AI products',
  ],
  designPhilosophy:
    'AI-native operational design for dense, regulated workflows where clarity, auditability, and speed matter.',
  greenFlags: [
    'Product Design Lead role is unusually aligned with AI-native design systems and Claude/Codex workflows',
    'Small team and seed stage imply high ownership',
    'Strong overlap with complex workflow and human judgment design',
  ],
  redFlags: [
    'Different company from Conductor coding-agent target; name confusion risk',
    'Govtech/security domain may be slower and more constrained',
    'Less aligned with consumer/devtool portfolio aesthetics',
  ],

  designTeam: {
    designHead: 'Product Design Lead role open',
    teamSize: 'Likely no mature design team at 26 employees',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Policy review and approval workflow modeling',
        'Agentic search, document review, and redaction logic',
        'Design-system components consumable by AI coding tools',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Audit trails and source citation quality',
        'Policy compliance and review outcome metrics',
        'Human-in-the-loop decision quality tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Dense operational workflow UI',
        'React-based design system for engineering velocity',
        'Secure enterprise admin and collaboration surfaces',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Government operators and subject-matter experts handling policy-heavy review workflows',
    secondary: 'Regulated organizations with approvals, compliance, and document-review processes',
  },
  userProblems: [
    'Government approvals and reviews are slowed by complex policy documents',
    'Experts need AI help without losing source traceability or judgment',
    'Secure environments need AI workflows that meet strict deployment constraints',
    'Design and engineering velocity can become bottlenecks in dense operational products',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Design Lead',
      location: 'New York City, NY (Hybrid)',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/conductorai/98e3918c-8769-4013-b0bd-978db7b7c3b7',
      roleFamily: 'product-design',
      roleSignal: 'lead',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$150K-$180K + equity',
      level: 'Lead',
      aboutRole:
        'Hybrid design-technical leader to own UX, build an AI-native React design system, and remove design bottlenecks in a fast-moving team.',
      whyInteresting:
        'Very strong match for AI-native design systems, Claude/Codex workflow fluency, and complex operational UX.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 8,
    whyJoin: [
      'Product Design Lead role directly asks for AI-native, code-ready design systems',
      'Small seed-stage team with founding-level design impact',
      'Complex human judgment workflows match Backtick/Steer thesis',
    ],
    whyNot: [
      'Not the same Conductor as coding-agent target',
      'Govtech domain may be less aligned with current portfolio target companies',
      'NYC hybrid requirement',
    ],
    nextActions: [
      'Decide whether to treat as serious apply target or adjacent lead-role option',
      'If applying, emphasize AI-native design system and complex workflow leadership',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'ConductorAI Website', url: 'https://www.conductorai.com/' },
    { title: 'Booz Allen Ventures investment', url: 'https://www.govconwire.com/articles/booz-allen-ventures-conductorai-artificial-intelligence-investment' },
    { title: 'ConductorAI Series A announcement', url: 'https://www.conductorai.co/press-releases-and-blog/conductorai-series-a-announcement' },
    { title: 'Product Design Lead', url: 'https://jobs.ashbyhq.com/conductorai/98e3918c-8769-4013-b0bd-978db7b7c3b7' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};
