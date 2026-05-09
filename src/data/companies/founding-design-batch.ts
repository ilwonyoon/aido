import { Company, OpenRole } from '../types';

type BatchCompanyInput = {
  id: string;
  name: string;
  description: string;
  website: string;
  headquarters?: string;
  remote?: Company['remote'];
  category?: Company['category'];
  subcategories?: Company['subcategories'];
  industries?: Company['industries'];
  aiTypes?: Company['aiTypes'];
  markets?: Company['markets'];
  stage?: string;
  totalFunding?: string;
  customers?: string;
  aiNativeLevel?: Company['aiNativeLevel'];
  role: OpenRole;
  fitScore?: number;
  whyJoin?: string[];
  whyNot?: string[];
  sources?: Company['sources'];
};

function makeCompany(input: BatchCompanyInput): Company {
  const roleSignal = input.role.roleSignal === 'first-design-hire' ? 'first design hire' : 'founding design';
  return {
    id: input.id,
    name: input.name,
    description: input.description,
    website: input.website,
    headquarters: input.headquarters ?? 'San Francisco, CA',
    remote: input.remote ?? 'No',
    category: input.category ?? 'vertical-saas',
    subcategories: input.subcategories ?? ['other-vertical'],
    aiTypes: input.aiTypes ?? ['automation'],
    markets: input.markets ?? ['b2b'],
    industries: input.industries ?? ['other'],
    stage: input.stage ?? 'Seed',
    valuation: 'Unknown',
    totalFunding: input.totalFunding ?? 'Not publicly disclosed',
    revenue: 'Unknown',
    growth: `Live ${roleSignal} role verified on 2026-05-06.`,
    runway: 'Unknown',
    customers: input.customers ?? 'Unknown',
    competitors: [
      {
        name: 'Incumbent workflow software',
        description: 'Existing tools and manual workflows in the company target market.',
      },
      {
        name: 'Horizontal AI platforms',
        description: 'General AI tools that can automate parts of the same workflow.',
      },
    ],
    marketPosition: input.description,
    moat: ['Vertical workflow focus', 'Early design ownership', 'AI-native product surface'],
    vsGiants: 'Competes through domain focus and workflow depth rather than a general-purpose AI surface.',
    aiNativeLevel: input.aiNativeLevel ?? 'A',
    aiNativeLevelDescription: 'AI is central to the product value proposition and core user workflow.',
    aiDesignChallenges: [
      'Making AI behavior legible and controllable',
      'Designing trust, supervision, and escalation flows',
      'Turning complex workflows into usable product systems',
    ],
    founders: [
      {
        name: 'Founding team',
        role: 'Founding team',
        background: 'Founder details pending deeper AIDO research.',
      },
    ],
    whyBuilding: input.description,
    beliefs: [
      'AI-native products need clear human control',
      'Design quality matters more when workflows become agentic',
      'Early design hires can shape the product and the company operating system',
    ],
    greenFlags: input.whyJoin ?? [
      'Live role verified from a primary source',
      'High-ownership founding or first-design-hire scope',
      'Relevant AI-native product design surface',
    ],
    redFlags: input.whyNot ?? [
      'Early-stage public information is limited',
      'Role scope and design support need clarification',
      'AI workflow reliability may be a hard product constraint',
    ],
    designTeam: {
      teamSize: input.role.roleSignal === 'first-design-hire' ? 'First design hire' : 'Founding design hire',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: ['Agent/workflow behavior design', 'User journey design', 'System states and controls'],
      },
      evaluation: {
        level: 'high',
        tasks: ['Trust evaluation', 'User research', 'Workflow success metrics'],
      },
      interface: {
        level: 'high',
        tasks: ['Product UX/UI', 'Design system foundations', 'High-fidelity prototyping'],
      },
    },
    productStage: '0→1',
    targetAudiences: {
      primary: 'Business users adopting AI-native workflows',
      secondary: 'Founders and operators evaluating early AI products',
    },
    userProblems: [
      'Existing workflows are manual, fragmented, or too slow',
      'AI outputs need trust, context, and human control',
      'Early products need design systems that can scale quickly',
    ],
    designerLinks: [],
    openRoles: [
      {
        ...input.role,
        type: input.role.type ?? 'full-time',
        roleFamily: input.role.roleFamily ?? 'product-design',
        roleSignal: input.role.roleSignal ?? 'founding',
        verificationStatus: input.role.verificationStatus ?? 'confirmed',
        lastVerifiedAt: input.role.lastVerifiedAt ?? '2026-05-06',
      },
    ],
    cultureInsights: [
      {
        source: input.role.sourceType === 'yc' ? 'ycombinator' : 'careers',
        sentiment: 'neutral',
        content: `${input.role.title} role verified as live on 2026-05-06.`,
        url: input.role.url,
      },
    ],
    tracking: {
      status: 'researching',
      fitScore: input.fitScore ?? 7,
      whyJoin: input.whyJoin ?? [
        'Live founding or first-design-hire opportunity',
        'AI-native product design problems',
        'Direct early ownership over product experience',
      ],
      whyNot: input.whyNot ?? [
        'Early-stage risk and limited public data',
        'Design mentorship and team support need diligence',
        'Role scope may include brand, GTM, and product work together',
      ],
      nextActions: [
        'Confirm how much of the role is core product vs. GTM or brand',
        'Review product demo and current UX quality',
        'Prepare AI workflow, trust, and systems-thinking portfolio examples',
      ],
    },
    growthMetrics: {
      stage: 'early-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Unknown',
      signals: ['Live role verified on 2026-05-06'],
      tam: 'AI-native workflow software',
      marketShare: 'Early',
      ceiling: 'High if the company owns a durable AI-native workflow wedge.',
      tailwinds: ['AI adoption in workflow software', 'Demand for clearer human-agent UX'],
      headwinds: ['Fast-moving competition', 'Reliability and trust requirements'],
      moatType: 'vertical-specialization',
      moatStrength: 'Early; depends on workflow depth and customer adoption.',
    },
    lastUpdated: '2026-05-06',
    sources: input.sources ?? [{ title: `${input.role.title} at ${input.name}`, url: input.role.url }],
  };
}

export const foundingDesignBatch: Company[] = [
  makeCompany({
    id: 'simple-ai',
    name: 'Simple AI',
    description: 'Voice AI agents for enterprise phone operations, from support to order intake and lead qualification.',
    website: 'https://www.simple.ai/',
    totalFunding: '$14M',
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/simple-ai/bf145877-af7d-4d16-8feb-5f3b62b3abc7',
      compensation: '$150K-$280K + equity',
      sourceType: 'ashby',
      roleSignal: 'founding',
      aboutRole: 'Shape product experience for enterprise voice AI agents.',
    },
  }),
  makeCompany({
    id: 'typesafe-ai',
    name: 'TypeSafe AI',
    description: 'Frontier model lab building reliable general AI systems for economically valuable automation.',
    website: 'https://www.typesafe.ai/',
    category: 'ai-models',
    industries: ['infrastructure'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco Office',
      url: 'https://jobs.ashbyhq.com/typesafe-ai/5b6c4a51-c4c7-4598-9e74-8cb45b17044e',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'arnata',
    name: 'arnata',
    description: 'AI workers for logistics operations, automating repetitive shipper workflows and coordinating operations end to end.',
    website: 'https://arnata.com/',
    subcategories: ['other-vertical'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco',
      url: 'https://www.ycombinator.com/companies/arnata/jobs/WHv3neF-founding-product-designer',
      compensation: '$100K-$200K + 0.10%-0.75%',
      sourceType: 'yc',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'hockeystack',
    name: 'HockeyStack',
    description: 'Agent infrastructure for enterprise revenue teams, automating sales, marketing, and customer success workflows.',
    website: 'https://hockeystack.com/',
    category: 'sales-marketing',
    industries: ['sales-marketing'],
    totalFunding: '$50M+',
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/hockeystack/ece59ab1-bf38-480f-80f6-96db5def25b6/',
      compensation: '$150K-$200K',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'genmo',
    name: 'Genmo',
    description: 'AI video generation research lab building next-generation creative tools.',
    website: 'https://www.genmo.ai/',
    category: 'creative-media',
    industries: ['creative-media'],
    aiTypes: ['video-generation'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco HQ',
      url: 'https://jobs.ashbyhq.com/genmo/1eec9a21-b686-498c-8ca5-27fe9c44e2b6',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'fabrion',
    name: 'Fabrion',
    description: 'AI-powered industrial enterprise workflow product for complex operational teams.',
    website: 'https://fabrion.com/',
    role: {
      title: 'Founding Designer',
      location: 'San Francisco Bay Area',
      url: 'https://jobs.ashbyhq.com/fabrion/dad50bef-5190-46a3-aa2d-2dc7af5cfa9a',
      sourceType: 'ashby',
      roleSignal: 'founding',
      roleFamily: 'other-design',
    },
  }),
  makeCompany({
    id: 'sentra',
    name: 'Sentra',
    description: 'AI teammate for company memory and alignment, helping startups scale without losing strategic context.',
    website: 'https://www.withsentra.com/',
    category: 'productivity',
    industries: ['productivity'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco / Bay Area',
      url: 'https://jobs.ashbyhq.com/sentra/9717d4c7-7500-47af-a5f5-964ae51c1258',
      compensation: '$150K-$200K + 0.2%-0.4%',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'scout',
    name: 'Scout',
    description: 'AI-native software engineering agent for long-horizon codebase tasks.',
    website: 'https://www.scout.new/',
    category: 'developer-tools',
    industries: ['developer-tools'],
    role: {
      title: 'Founding Design Engineer',
      location: 'San Francisco',
      url: 'https://www.ycombinator.com/companies/capy/jobs/FBbRyVg-founding-design-engineer',
      sourceType: 'yc',
      roleSignal: 'founding',
      roleFamily: 'design-engineering',
    },
  }),
  makeCompany({
    id: 'jinba',
    name: 'Jinba.io',
    description: 'Enterprise AI workflow builder that turns natural-language instructions into APIs, MCP servers, and automations.',
    website: 'https://jinba.io/',
    category: 'enterprise-ops',
    industries: ['productivity'],
    role: {
      title: 'Product Designer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/carnot-ai/38a7a3ff-eea9-473a-8ad3-cc3581c20715',
      sourceType: 'ashby',
      roleSignal: 'first-design-hire',
      aboutRole: 'First design hire shaping enterprise AI automation workflows.',
    },
  }),
  makeCompany({
    id: 'claren',
    name: 'Claren / WilsonAI',
    description: 'AI-native workflow product with design-engineering hiring signal.',
    website: 'https://www.getclaren.com/',
    role: {
      title: 'Founding Design Engineer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/wilsonai/8ad92ef1-8a05-466f-9a27-9bc83fe9a430',
      sourceType: 'ashby',
      roleSignal: 'founding',
      roleFamily: 'design-engineering',
    },
  }),
  makeCompany({
    id: 'agave',
    name: 'Agave',
    description: 'AI financial operations and ERP-sync platform for construction companies.',
    website: 'https://www.agaveapi.com/',
    industries: ['fintech'],
    subcategories: ['fintech'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco',
      url: 'https://www.ycombinator.com/companies/agave/jobs/Wr9IXT8-founding-product-designer',
      compensation: '$125K-$170K + 0.05%-0.20%',
      sourceType: 'yc',
      roleSignal: 'first-design-hire',
    },
  }),
  makeCompany({
    id: 'blueberry',
    name: 'Blueberry',
    description: 'AI marketer for consumer brands, helping teams research followers and personalize engagement at scale.',
    website: 'https://www.tryblueberry.ai/',
    category: 'sales-marketing',
    industries: ['sales-marketing'],
    role: {
      title: 'Founding Designer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/pear-vc/be379450-38d0-44c1-928e-d8603c6923f7/',
      compensation: '$150K-$200K + equity',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'arkham-technologies',
    name: 'Arkham Technologies',
    description: 'Data and AI platform helping enterprises unify operational data and deploy AI systems for complex workflows.',
    website: 'https://www.arkham.tech/',
    category: 'enterprise-ops',
    industries: ['other'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco',
      url: 'https://www.builtinsf.com/job/founding-product-designer/8314100',
      sourceType: 'other',
      roleSignal: 'founding',
      verificationStatus: 'needs_review',
    },
  }),
  makeCompany({
    id: 'tomo-ai',
    name: 'Tomo',
    description: 'Consumer AI personal agent with real-time generative interfaces.',
    website: 'https://tomo.inc/',
    markets: ['b2c', 'prosumer'],
    category: 'productivity',
    industries: ['productivity'],
    role: {
      title: 'Product Designer',
      location: 'San Francisco',
      url: 'https://jobs.ashbyhq.com/tomo.ai/f77a861f-acdc-4ae4-b88e-bde4e33ebc12',
      sourceType: 'ashby',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'mage-legal',
    name: 'Mage Legal',
    description: 'AI-native legal diligence platform for M&A, private equity, and corporate legal teams.',
    website: 'https://www.magelegal.com/',
    industries: ['legal'],
    subcategories: ['legal'],
    role: {
      title: 'Founding Designer',
      location: 'San Francisco, CA',
      url: 'https://www.ycombinator.com/companies/mage-legal/jobs/HQwuocB-founding-designer',
      compensation: '$80K-$130K + 1.50%',
      sourceType: 'yc',
      roleSignal: 'founding',
      roleFamily: 'other-design',
    },
  }),
  makeCompany({
    id: 'parrot',
    name: 'Parrot',
    description: 'AI-enhanced language learning app that turns short-form native videos into interactive lessons.',
    website: 'https://parrotapp.com/',
    markets: ['b2c', 'prosumer'],
    industries: ['education'],
    subcategories: ['education'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      url: 'https://www.ycombinator.com/companies/parrot/jobs/DCavRV9-founding-product-designer',
      compensation: '$120K-$180K + 0.50%-2.00%',
      sourceType: 'yc',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'wayline',
    name: 'Wayline',
    description: 'AI voice and text operator for property managers, automating leasing, maintenance, and tenant communication.',
    website: 'https://wayline.com',
    aiTypes: ['conversation-ai', 'automation'],
    role: {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      url: 'https://www.ycombinator.com/companies/wayline/jobs/d6ugYvj-founding-product-designer',
      compensation: '$150K-$250K + 1.00%-3.00%',
      sourceType: 'yc',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'closure',
    name: 'Closure',
    description: 'AI-powered evidence search and investigation platform helping law enforcement and prosecutors reduce evidence overload.',
    website: 'https://closure-intel.com/',
    headquarters: 'New York, NY',
    remote: 'Hybrid',
    industries: ['security', 'other'],
    subcategories: ['security', 'other-vertical'],
    role: {
      title: 'Founding Product Designer',
      location: 'New York, NY / San Francisco, CA / Palo Alto, CA',
      url: 'https://www.ycombinator.com/companies/closure/jobs/z5WK1E2-founding-product-designer',
      compensation: '$125K-$185K',
      sourceType: 'yc',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'peer-ai',
    name: 'Peer AI',
    description: 'AI platform for life sciences regulatory submissions, helping teams author documents and anticipate regulatory review questions.',
    website: 'https://getpeer.ai/',
    headquarters: 'San Francisco Bay Area',
    remote: 'Yes',
    industries: ['healthcare'],
    subcategories: ['healthcare'],
    role: {
      title: 'Founding Product Designer - Enterprise AI Platform',
      location: 'SF Bay Area (Remote)',
      url: 'https://getpeer.ai/careers/founding-product-designer',
      sourceType: 'company',
      roleSignal: 'founding',
    },
  }),
  makeCompany({
    id: 'capy',
    name: 'Capy',
    description: 'Cloud-native AI software engineering agent and IDE for long-horizon codebase tasks.',
    website: 'https://www.capy.ai/',
    category: 'developer-tools',
    industries: ['developer-tools'],
    role: {
      title: 'Founding Design Engineer',
      location: 'SF',
      url: 'https://www.ycombinator.com/companies/capy/jobs/FBbRyVg-founding-design-engineer',
      compensation: '$150K-$250K + 0.50%-1.50%',
      sourceType: 'yc',
      roleSignal: 'founding',
      roleFamily: 'design-engineering',
    },
  }),
];
