import { Company } from '../types';

export const comfyUi: Company = {
  id: 'comfy-ui',
  name: 'Comfy',
  description: 'Open-source, node-based "Operating System for Generative AI" for prosumer and professional creative production across image, video, 3D, and audio.',
  website: 'https://www.comfy.org/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  ogImage: 'https://framerusercontent.com/images/0BcAr9INx6VHF0VtAXa30RHfqPo.png',
  screenshot: '/screenshots/comfy-ui-screenshot.png',

  category: 'creative-media' as const,
  subcategories: ['creative-media'],
  aiTypes: ['image-generation', 'video-generation', 'automation'],
  markets: ['prosumer', 'b2b', 'enterprise'],
  industries: ['creative-media', 'developer-tools'],

  stage: 'Series B',
  valuation: '$500M',
  totalFunding: '$48M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2024-2025',
      leadInvestors: ['Pace Capital'],
    },
    {
      stage: 'Series B',
      amount: '$30M',
      date: '2026-04',
      valuation: '$500M',
      leadInvestors: ['Craft Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: '4M+ users, 60K+ community nodes, 150K+ daily downloads',
  customers: 'Artists, filmmakers, game creators, VFX teams, researchers, and AI-native studios',

  competitors: [
    {
      name: 'Krea',
      description: 'AI creative suite with real-time image, video, and 3D generation.',
      whyTheyWin: 'More polished hosted UX for visual creators who want speed over node-level control.',
    },
    {
      name: 'Invoke',
      description: 'Open-source and hosted AI image generation platform for creative teams.',
      whyTheyWin: 'Clearer canvas/editor metaphor and enterprise-friendly deployment story.',
    },
    {
      name: 'Scenario',
      description: 'Creative AI infrastructure for teams to train custom models and build workflows.',
      whyTheyWin: 'Enterprise workflow, API, and team collaboration emphasis.',
    },
    {
      name: 'fal / Replicate / Runware',
      description: 'Model inference and API platforms that let developers build creative AI products.',
      whyTheyWin: 'Cleaner API abstraction and production infrastructure for developers.',
    },
  ],
  marketPosition: 'Emerging visual/creative AI OS for prosumer creators and technical artists who need precise control over model pipelines.',
  moat: [
    'Open-source community and ecosystem: tens of thousands of nodes and extensions compound as new models arrive.',
    'Professional workflow depth: node graph exposes the full pipeline instead of hiding model logic behind a prompt box.',
    'Category standard potential: ComfyUI skill is becoming a hiring signal for technical artists and AI creative roles.',
  ],
  vsGiants: 'Adobe, OpenAI, and Google can ship powerful generation models, but Comfy wins where professional users need inspectable pipelines, custom nodes, local workflows, and fast community adaptation to new models.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI workflows are the product itself: ComfyUI is a visual programming environment for assembling and controlling generative AI pipelines.',
  aiDesignChallenges: [
    'Making node-based workflow power understandable without flattening the expert controls that advanced users value.',
    'Designing desktop, cloud, asset, and community-node surfaces that feel like one coherent creative system.',
    'Helping users debug model chains, missing dependencies, broken nodes, and generation failures in a humane way.',
  ],

  founders: [
    {
      name: 'Yannik Marek',
      role: 'Co-founder / Creator of ComfyUI',
      background: 'Original creator of ComfyUI, the open-source node-based workflow platform for generative AI.',
    },
    {
      name: 'Yoland Yan',
      role: 'CEO',
      background: 'Leads Comfy Org, the company commercializing and scaling the ComfyUI ecosystem.',
    },
  ],
  whyBuilding: 'Comfy is trying to turn open-source, controllable creative AI production into a broader operating-system-like layer for generative AI, scaling from expert local workflows into a prosumer-friendly desktop and cloud platform.',
  beliefs: [
    'Creative AI tools should expose control rather than force creators into one-size-fits-all generation flows.',
    'Open ecosystems can adapt faster than closed creative suites when new models and techniques emerge weekly.',
    'The future creative stack will look more like a programmable visual AI OS than static editing tools.',
  ],
  greenFlags: [
    '$30M financing at $500M valuation announced in Apr 2026.',
    '4M+ users, 60K+ community nodes, and 150K+ daily downloads reported by company announcement.',
    'Three Product Design roles open in San Francisco, which signals active investment in UX maturity.',
    'Strong design challenge: make a deeply technical tool usable without dumbing it down.',
  ],
  redFlags: [
    'Open-source monetization is delicate: cloud revenue, marketplace, enterprise, and community trust must be balanced.',
    'Node graphs can become intimidating for mainstream creative users.',
    'Competitive pressure from polished closed tools, API platforms, and model labs is intense.',
  ],

  designTeam: {
    teamSize: 'Hiring multiple senior/staff product designers; design team appears early but expanding.',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Node graph interaction model and workflow debugging',
        'Model, node, dependency, and cloud execution state design',
        'Desktop-to-cloud workflow continuity',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Generation quality comparison and iteration loops',
        'Workflow reliability and error recovery feedback',
        'Template and community node trust signals',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Professional creative tool UI across desktop and cloud',
        'Design system for complex technical controls',
        'Onboarding for users who are new to node-based AI workflows',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Prosumer AI creators, technical artists, filmmakers, game creators, VFX teams, and designers who need controllable generative workflows',
    secondary: 'Developers and enterprise creative teams building repeatable AI production pipelines',
  },
  userProblems: [
    'Prompt-only tools hide too much of the generation pipeline for professional production needs.',
    'Creative teams need repeatable, inspectable workflows across many models and formats.',
    'Open-source AI model releases move faster than traditional creative software release cycles.',
    'Beginners need a path into node-based workflows without losing the power that expert users depend on.',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Senior Product Designer',
      location: 'San Francisco, CA',
      url: 'https://jobs.ashbyhq.com/comfy-org/b2e864c6-4754-4e04-8f46-1022baa103c3',
      team: 'Design',
      level: 'Senior',
      type: 'full-time',
      postedDate: '2026-01',
      aboutRole: 'Design the next generation of ComfyUI across desktop and cloud, translating a highly technical creative tool into elegant, approachable workflows.',
      responsibilities: [
        'Own end-to-end UX flows, wireframes, prototypes, and polished UI for ComfyUI product surfaces.',
        'Translate technical systems into interactions that preserve flexibility for expert users.',
        'Design empty states, loading states, edge cases, and workflow feedback for AI generation.',
      ],
      requirements: [
        'Portfolio showing strong product thinking and craft.',
        'Experience simplifying complex creative, technical, or professional tools.',
        'Figma and design-system fluency; ComfyUI experience is a strong plus.',
      ],
      whyInteresting: 'This is a rare chance to define the UX of a tool that already has massive open-source adoption but still needs product design maturity.',
    },
    {
      title: 'Senior Product Designer - Craft',
      location: 'San Francisco, CA',
      url: 'https://jobs.ashbyhq.com/comfy-org/a32c6769-b791-41f4-9225-50bbd8a1cf0f',
      team: 'Design',
      level: 'Senior',
      type: 'full-time',
      postedDate: '2026-04',
      aboutRole: 'Focus on interaction polish, visual quality, and making ComfyUI feel refined without sacrificing workflow power.',
      responsibilities: [
        'Raise product craft across complex creative and technical surfaces.',
        'Prototype high-fidelity interactions for AI workflow creation and iteration.',
        'Partner with engineering to ship polished details in a fast-moving product.',
      ],
      requirements: [
        'Strong UI craft and interaction design taste.',
        'Experience with creative tools, editors, developer tools, games, 3D, VFX, or similarly complex products.',
        'Comfort working in an in-person San Francisco team.',
      ],
      whyInteresting: 'A strong fit if you want to work on the feel of a professional creative tool rather than only dashboard flows.',
    },
    {
      title: 'Staff Product Designer - Systems',
      location: 'San Francisco, CA',
      url: 'https://jobs.ashbyhq.com/comfy-org/0bc8356b-615e-4f40-b632-fd3b2691be34',
      team: 'Design',
      level: 'Staff',
      type: 'full-time',
      postedDate: '2026-04',
      aboutRole: 'Define product and experience systems for ComfyUI, including interaction patterns, design principles, and reusable product language.',
      responsibilities: [
        'Build system-level interaction patterns for node-based AI workflows.',
        'Shape design principles and reusable components across Comfy desktop and cloud.',
        'Create consistency across a product that spans expert workflows, onboarding, assets, and cloud execution.',
      ],
      requirements: [
        'Experience designing systems for complex products.',
        'Ability to think in interaction models, not only screens.',
        'Background in professional tools, developer tools, creative software, or similarly technical domains.',
      ],
      whyInteresting: 'This role sits close to the core product architecture: how ComfyUI should feel and scale as a platform.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Current Product Design roles are San Francisco on-site, matching the company emphasis on in-person product velocity.',
      url: 'https://jobs.ashbyhq.com/comfy-org',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Directly relevant to AI-native creative tooling and product design systems.',
      'Multiple senior/staff design openings create a real entry point.',
      'Open-source adoption gives the product uncommon distribution before full UX maturity.',
      'Complex product surface would generate strong portfolio and interview stories.',
    ],
    whyNot: [
      'Five-day San Francisco onsite requirement.',
      'Open-source community expectations can constrain monetization and product decisions.',
      'The product is technically dense, so onboarding ramp may be steep.',
    ],
    nextActions: [
      'Try ComfyUI desktop and build a simple image workflow.',
      'Compare Comfy UX against Krea, Invoke, Scenario, and OpenArt.',
      'Prepare interview notes on node graphs, workflow debugging, and progressive disclosure.',
    ],
  },

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown',
    userGrowth: '4M+ users; 150K+ daily downloads reported in Apr 2026 announcement',
    signals: [
      '$30M financing at $500M valuation in Apr 2026',
      '60K+ community-built nodes reported by company',
      'Multiple senior/staff product design roles open',
      'ComfyUI skills increasingly visible in creative AI hiring',
    ],
    tam: '$30B+ creative tools and AI production workflow market',
    marketShare: 'Early category-defining position inside open-source AI workflow tools',
    ceiling: 'Potential to become the default workflow layer for controllable creative AI production.',
    tailwinds: [
      'Rapid growth of open-weight image and video models',
      'Creative teams need controllable, repeatable AI pipelines',
      'Professional users are outgrowing simple prompt-box interfaces',
    ],
    headwinds: [
      'Closed creative suites can offer smoother mainstream UX',
      'Cloud/API providers may abstract away workflow complexity',
      'Open-source governance and monetization expectations are hard to balance',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Strong: community nodes, workflow templates, technical-artist skill adoption, and open-source distribution compound together.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Comfy official site', url: 'https://www.comfy.org/' },
    { title: 'ComfyUI turns 2: OS for Gen AI vision', url: 'https://blog.comfy.org/p/comfyui-turns-2-a-journey-and-call' },
    { title: 'Chemistry VC investment thesis', url: 'https://www.chemistry.vc/post/why-we-invested-in-comfy' },
    { title: 'ComfyUI funding announcement', url: 'https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html' },
    { title: 'Comfy careers', url: 'https://jobs.ashbyhq.com/comfy-org' },
    { title: 'ComfyUI GitHub', url: 'https://github.com/comfyanonymous/ComfyUI' },
  ],
};
