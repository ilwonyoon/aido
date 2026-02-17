import { Company } from '../types';

export const backflipAi: Company = {
  id: 'backflip-ai',
  name: 'Backflip AI',
  description: 'AI-powered 3D generative design platform that turns text, photos, and sketches into 3D-printable models for physical products.',
  website: 'https://www.backflip.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',
  ogImage: '/og-images/backflip-ai-og.webp',
  category: 'creative-media' as const,
  aiTypes: ['image-generation'],
  markets: ['prosumer', 'b2b'],
  industries: ['creative-media'],
  stage: 'Series A',
  totalFunding: '$38M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$8M',
      date: '2022-05',
      leadInvestors: [],
    },
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2024-12',
      leadInvestors: ['NEA', 'Andreessen Horowitz (a16z)'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Unknown',
  competitors: [
    {
      name: 'Meshy',
      description: '3D generative AI suite for text-to-3D and AI texturing',
      whyTheyWin: 'Consumer-friendly UX with fast generation for gaming/creative assets',
    },
    {
      name: 'Zoo (KittyCAD)',
      description: 'Open-source AI-powered CAD software for hardware design',
      whyTheyWin: 'Open-source approach attracts developer community and hobbyists',
    },
    {
      name: 'Vizcom',
      description: 'AI-powered industrial design rendering from sketches',
      whyTheyWin: 'Strong in early-stage concept rendering for industrial designers',
    },
  ],
  marketPosition: 'First mover in text-to-physical-part 3D AI, bridging generative AI with manufacturing',
  moat: [
    'Founders invented carbon fiber & metal 3D printing at Markforged (NYSE: MKFG)',
    'Novel neural representation: 60x training efficiency, 10x inference speed, 100x spatial resolution',
    'Deep manufacturing domain expertise from Markforged (ISS, BMW, Tesla deployments)',
    'Tier-1 investor backing from a16z and NEA plus notable angels (Kevin Scott, Ashish Vaswani)',
  ],
  vsGiants: 'Unlike Autodesk/SolidWorks incumbents, Backflip is AI-native from day one. Targets the gap between consumer 3D tools and professional CAD that legacy players cannot bridge.',
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Backflip built a novel 3D foundation model that generates manufacturable 3D models from text/photo inputs. Without AI, the product does not exist.',
  aiDesignChallenges: [
    'Bridging creative intent to manufacturing constraints in AI-generated 3D models',
    'Designing intuitive controls for non-engineers to refine AI-generated parts',
    'Communicating printability and material constraints within the generation workflow',
  ],
  founders: [
    {
      name: 'Greg Mark',
      role: 'CEO & Co-founder',
      background: 'MIT Aeronautics & Astronautics. Co-founded Markforged (NYSE: MKFG, $2.1B SPAC), invented carbon fiber 3D printing.',
    },
    {
      name: 'David Benhaim',
      role: 'CTO & Co-founder',
      background: 'MIT. Co-founded Markforged, led development of Eiger cloud CAD platform used by 50K+ designers/engineers.',
    },
  ],
  whyBuilding: 'After Markforged, realized 3D design is the biggest barrier to physical product creation. Building AI to collapse the gap between idea and physical reality.',
  beliefs: [
    'Physical product design has lagged 50 years behind software innovation',
    'AI can democratize manufacturing by removing the 3D modeling bottleneck',
    'A small team with AI tools should match the velocity of the biggest engineering army',
  ],
  designPhilosophy: 'Making 3D design accessible to anyone — from text prompt to 3D-printable part in minutes, not days.',
  greenFlags: [
    'Repeat founders with $2.1B exit (Markforged IPO)',
    'Deep domain expertise in manufacturing + AI research (MIT team)',
    'a16z + NEA co-led $30M Series A with high-profile angels',
    'Novel AI architecture with measurable technical advantages (60x/10x/100x improvements)',
  ],
  redFlags: [
    'Very early stage (9 employees), product just emerged from stealth Dec 2024',
    'Crowded text-to-3D space with well-funded competitors (Meshy, Luma AI)',
    'Manufacturing-grade 3D AI is unproven at scale for production use cases',
  ],
  designTeam: {
    teamSize: 'Unknown (~9 total employees, design team likely 0-1)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Defining AI generation parameters and constraints for manufacturable outputs',
        'Designing iterative refinement workflows for AI-generated 3D models',
        'Mapping user intent (text/sketch/photo) to 3D generation logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality assessment UX for AI-generated 3D models (printability, accuracy)',
        'User feedback loops for model refinement and regeneration',
        'Benchmarking AI output quality against professional CAD standards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        '3D model viewer and editor interface',
        'Text/sketch/photo input interfaces for diverse user types',
        'CAD plugin UX (SOLIDWORKS integration)',
      ],
    },
  },
  productStage: '0→1',
  targetAudiences: {
    primary: 'Engineers and designers who need rapid 3D prototyping',
    secondary: 'Hobbyists, makers, and non-technical creators wanting to 3D print custom parts',
  },
  userProblems: [
    'Creating 3D models for printing takes days of CAD expertise',
    'Existing 3D AI tools produce visually interesting but non-manufacturable models',
    'Bridging the gap from a photo/sketch idea to a physical, printable part is too complex',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Small MIT-heavy research team (~9 people) with deep manufacturing domain expertise from Markforged. In-office culture in San Francisco.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$30M Series A co-led by a16z and NEA (Dec 2024)',
      'Emerged from stealth with working product (Idea to Mesh)',
      'Notable angel investors: Microsoft CTO Kevin Scott, Ashish Vaswani (Attention Is All You Need co-author)',
    ],
    tam: '$50B+ (CAD/3D modeling + additive manufacturing software)',
    ceiling: 'Early innings: AI-native 3D design for manufacturing is a new category',
    tailwinds: [
      'Generative AI adoption accelerating across industries',
      'US manufacturing reshoring creating demand for faster design tools',
      '3D printing market growing 20%+ annually',
    ],
    headwinds: [
      'Text-to-3D space becoming crowded quickly',
      'Manufacturing-grade accuracy is a much higher bar than creative 3D',
      'Incumbent CAD vendors (Autodesk, Dassault) adding AI features',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: Novel neural representation with 60x/10x/100x advantages over SOTA, deep manufacturing expertise from Markforged',
  },
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level A AI-native company — designing an entirely new product category',
      '0→1 stage means high design impact and ownership',
      'Repeat founders with proven track record ($2.1B exit)',
    ],
    whyNot: [
      'Very small team (9 people) — may not have dedicated design role yet',
      'No current Product Design openings',
      'Hardware/manufacturing domain requires steep learning curve',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Track product launch reception and user growth',
    ],
  },
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'TechCrunch — Backflip raises $30M Series A', url: 'https://techcrunch.com/2024/12/19/backed-by-a16z-and-nea-backflip-raises-30m-series-a-to-turn-text-into-ai-generated-designs/' },
    { title: 'a16z — Investing in Backflip', url: 'https://a16z.com/announcement/investing-in-backflip/' },
    { title: 'BusinessWire — Backflip press release', url: 'https://www.businesswire.com/news/home/20241218887310/en/Backflip-Releases-AI-Model-That-Turns-Text-Into-Physical-Reality-Backed-By-$30M-from-NEA-and-Andreessen-Horowitz' },
    { title: 'Backflip AI Careers — no Product Design roles found', url: 'https://builtin.com/company/backflip-backflipai' },
    { title: 'Crunchbase — Backflip AI funding profile', url: 'https://www.crunchbase.com/organization/backflip-ai' },
  ],
};
