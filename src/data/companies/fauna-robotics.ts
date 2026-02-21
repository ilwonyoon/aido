import { Company } from '../types';

export const faunaRobotics: Company = {
  id: 'fauna-robotics',
  name: 'Fauna Robotics',
  description: 'Robotics company building Sprout, a safe and lightweight humanoid robot platform for developers, enterprises, and researchers.',
  website: 'https://faunarobotics.com',
  headquarters: 'New York, NY',
  region: 'nyc',
  remote: 'No',
  ogImage: '/og-images/fauna-robotics-og.webp',

  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$30M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$30M',
      date: '2024-09',
      leadInvestors: ['Kleiner Perkins', 'Lux Capital', 'Quiet Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Disney, Boston Dynamics, UC San Diego, NYU',

  competitors: [
    {
      name: 'Figure AI',
      description: 'Humanoid robot for manufacturing and logistics',
      whyTheyWin: '$2.6B funding, OpenAI partnership, industrial automation focus',
    },
    {
      name: 'Unitree Robotics',
      description: 'Low-cost humanoid G1 platform at $16K',
      whyTheyWin: 'Aggressive pricing undercuts Sprout by 3x, strong in education and research',
    },
    {
      name: 'Agility Robotics',
      description: 'Digit humanoid for warehouse and logistics',
      whyTheyWin: 'Amazon partnership, purpose-built for industrial logistics',
    },
  ],
  marketPosition: 'First US company shipping humanoid robots as a developer platform for human-centric environments',
  moat: [
    'Safety-first soft-bodied design: uniquely positioned for human-occupied spaces',
    'Developer platform approach: SDK enables rapid prototyping vs building from scratch',
    'Marquee early customers: Disney, Boston Dynamics validation',
    'NYC-based domestic manufacturing with tight engineering-production feedback loop',
  ],
  vsGiants: 'While Tesla Optimus and Figure AI target factory labor, Fauna focuses on hospitality, homes, and education — human-centric spaces where safety and approachability matter more than raw lifting power.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: AI powers Sprout\'s locomotion, perception, motor control, and conversational abilities. The product is a physical robot platform, but AI is the core differentiator enabling autonomous behavior in human spaces.',
  aiDesignChallenges: [
    'Human-robot interaction: designing expressive robot behavior that feels approachable, not uncanny',
    'Teleoperation UX: intuitive VR/MR control interfaces for remote robot operation',
    'Developer experience: making robotics SDK accessible to non-roboticists',
  ],

  founders: [
    {
      name: 'Rob Cochran',
      role: 'Co-founder & CEO',
      background: 'Former Head of Product at CTRL-labs (sold to Facebook 2019), Goldman Sachs. Duke BS Engineering, Harvard MBA.',
    },
    {
      name: 'Josh Merel',
      role: 'Co-founder & CTO',
      background: 'Former Research Scientist at Google DeepMind (2016-2021) and Meta Reality Labs (2021-2024). Expert in robot locomotion and computational neuroscience.',
    },
  ],
  whyBuilding: 'Believed robots belong around people, not just in factories. Existing humanoid efforts delivered heavy, dangerous machinery poorly suited to human spaces.',
  beliefs: [
    'Robots should be safe, lightweight, and approachable enough for homes and schools',
    'Breakthrough robotics applications will come from a developer ecosystem, not a single company',
    'Robots will become as familiar as laptops or smartphones within a generation',
  ],
  designPhilosophy: 'Safety and delight over raw power. Sprout\'s soft-touch materials, expressive face, and compact 3.5ft form factor prioritize trust and approachability.',
  greenFlags: [
    'Tier-1 investors: Kleiner Perkins, Lux Capital backing',
    'Disney and Boston Dynamics as early customers — strong product validation',
    'Contrarian bet on human-centric robotics while competitors chase factory labor',
    'Domestic US manufacturing with tight iteration cycles',
  ],
  redFlags: [
    'Early-stage with no disclosed revenue — $50K price point limits market size',
    'Hardware company: high capex, margins harder than software',
    'Competing for AI talent against much better-funded robotics companies (Figure: $2.6B)',
  ],

  designTeam: {
    teamSize: '~2-3 (1 Senior Industrial Designer + VR/MR UI/UX role open)',
    notableMembers: [
      { name: 'Dario Narvaez', role: 'Senior Industrial Designer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Robot behavior design: expressiveness, gaze control, body language',
        'Autonomy boundaries: when robot acts vs waits for human input',
        'Safety interaction patterns: how robot responds to unexpected contact',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Human-robot interaction quality metrics',
        'Developer satisfaction and SDK usability testing',
        'Safety compliance validation for human-occupied spaces',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'VR/MR teleoperation UI design',
        'Robot face/expression design (LED displays, eyebrow articulation)',
        'Developer SDK documentation and onboarding experience',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Robotics developers and researchers building humanoid applications',
    secondary: 'Enterprise buyers in hospitality, entertainment, and education',
  },
  userProblems: [
    'Building robotics from scratch takes months — developers need a ready platform',
    'Existing humanoid robots are unsafe for human-occupied spaces (heavy, sharp, dangerous)',
    'No affordable developer-friendly humanoid platform for prototyping social robot applications',
    'Enterprise venues (hotels, theme parks) need interactive robots that delight, not frighten',
  ],

  designerLinks: [
    {
      name: 'Dario Narvaez',
      role: 'Senior Industrial Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/dario-narvaez/',
      description: 'Former BMW Designworks and Peloton designer. Advocates for industrial designers having a "louder voice" beyond portfolios.',
    },
  ],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.3,
      content: 'Talented team, strong camaraderie, incredible technology with real differentiation. Early stage means ownership — "you\'ll never hear that\'s not my problem."',
      url: 'https://www.glassdoor.com/Reviews/Fauna-Reviews-E2089464.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: '"More, more, more and also faster, faster, faster" — everyone stretched thin. Smart people hired but sometimes micromanaged.',
      url: 'https://www.glassdoor.com/Reviews/Fauna-Reviews-E2089464.htm',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$30M seed from Kleiner Perkins, Lux Capital, Quiet Capital',
      'Disney and Boston Dynamics as early customers',
      'Sprout Creator Edition shipping at $50K',
      '46 employees, 16 open roles — rapid hiring',
    ],
    tam: '$38B (humanoid robot market by 2035, Goldman Sachs estimate)',
    ceiling: 'Very early innings: humanoid robotics for human spaces is nascent, no dominant platform yet',
    tailwinds: [
      'AI advances enabling more capable autonomous robots',
      'Enterprise demand for interactive service robots (hospitality, retail)',
      'Developer ecosystem model proven in adjacent markets (Arduino, Raspberry Pi)',
    ],
    headwinds: [
      'Big Tech and well-funded competitors (Tesla, Figure AI) entering humanoid space',
      'Hardware margins and manufacturing complexity',
      'Consumer trust in humanoid robots still low',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Early: developer SDK approach could create ecosystem lock-in if community grows',
  },

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-Core: genuinely novel design challenges in human-robot interaction',
      '0-to-1 product stage: shape the future of humanoid robot UX from scratch',
      'NYC-based with domestic manufacturing — tangible product, not just software',
    ],
    whyNot: [
      'No Product Design roles open — current design is industrial/hardware focused',
      'Early seed stage with no disclosed revenue — higher risk',
      'Hardware company dynamics differ from software/AI companies',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Follow Sprout platform adoption and developer community growth',
    ],
  },

  lastUpdated: '2026-02-21',
  sources: [
    { title: 'Fauna Robotics Official Website', url: 'https://faunarobotics.com' },
    { title: 'Fauna Robotics Company Page', url: 'https://faunarobotics.com/company' },
    { title: 'Fauna Robotics Careers — no Product Design roles found', url: 'https://faunarobotics.com/careers' },
    { title: 'Fauna Robotics X — $30M funding announcement', url: 'https://x.com/faunarobotics/status/1909366422993580336' },
    { title: 'TechSpot — Sprout launch coverage', url: 'https://www.techspot.com/news/111106-new-york-startup-builds-foam-covered-humanoid-inspired.html' },
    { title: 'Glassdoor — Fauna Reviews (4.3/5)', url: 'https://www.glassdoor.com/Reviews/Fauna-Reviews-E2089464.htm' },
  ],
};
