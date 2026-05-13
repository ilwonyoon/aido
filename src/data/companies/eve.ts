import { Company } from '../types';

export const eve: Company = {
  id: 'eve',
  name: 'Eve',
  description:
    'AI-native legal platform for plaintiff law firms, helping teams evaluate cases, draft legal documents, generate medical chronologies, and manage discovery.',
  website: 'https://www.eve.legal',
  headquarters: 'San Mateo, CA',
  remote: 'Hybrid',

  aiTypes: ['text-assistant', 'search-retrieval', 'automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['legal'],
  industries: ['legal'],

  stage: 'Series B',
  valuation: 'Over $1B',
  totalFunding: '$164M+',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$47M',
      date: '2025-01',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series B',
      amount: '$103M',
      date: '2025-09',
      valuation: 'Over $1B',
      leadInvestors: ['Spark Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Rapidly scaling legal AI platform for plaintiff firms',
  runway: 'Strong after Series B',
  customers: 'Plaintiff law firms using AI for casework and legal operations',

  growthMetrics: {
    stage: 'hypergrowth',
    signals: [
      '$103M Series B at over $1B valuation',
      '$164M+ raised according to company careers page',
      'Head of Product Design role open',
    ],
    tam: '$50B+ legal software and legal services automation market',
    ceiling:
      'High if Eve becomes the AI operating system for plaintiff-side legal work.',
    tailwinds: [
      'Legal AI adoption is accelerating',
      'Plaintiff firms have high casework volume and strong ROI pressure',
      'AI can automate document-heavy workflows with measurable impact',
    ],
    headwinds: [
      'Legal AI requires high accuracy, compliance, and trust',
      'Hallucination risk and professional responsibility concerns',
      'Competitive market with Harvey, Legora, Filevine AI, and vertical specialists',
    ],
    moatType: 'vertical-specialization',
    moatStrength:
      'Strong if Eve owns plaintiff-firm workflows, case data, and end-to-end legal work product.',
  },

  competitors: [
    {
      name: 'Harvey',
      description: 'AI legal platform for law firms and enterprises.',
      whyTheyWin: 'Strong brand and enterprise/legal-market traction.',
    },
    {
      name: 'Legora',
      description: 'AI platform for lawyers and legal teams.',
      whyTheyWin: 'Fast growth and broad legal workflow positioning.',
    },
    {
      name: 'Filevine',
      description: 'Legal case management platform with AI expansion.',
      whyTheyWin: 'Existing plaintiff-firm workflow distribution.',
    },
  ],
  marketPosition: 'AI-native legal platform focused on plaintiff law firms.',
  moat: [
    'Vertical focus on plaintiff-side legal workflows',
    'Workflow coverage across intake, case analysis, drafting, discovery, and medical chronologies',
    'Strong funding and rapid market momentum',
  ],
  vsGiants:
    'More workflow-native for plaintiff firms than generic LLMs or horizontal legal AI tools.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-native: Eve exists to transform legal casework through AI workflows tailored to plaintiff law firms.',
  aiDesignChallenges: [
    'Designing legal AI workflows that lawyers can trust and audit',
    'Making citations, source grounding, and generated work product reviewable',
    'Balancing speed with legal risk and professional judgment',
    'Designing complex case timelines, medical chronologies, and discovery workflows',
  ],

  founders: [
    {
      name: 'Jay Madheswaran',
      role: 'Founder & CEO',
      background:
        'Former Lightspeed Venture Partners; AI/ML experience at Facebook and Rubrik.',
    },
    {
      name: 'Matt Noe',
      role: 'Co-founder & CPO',
      background:
        'Former founding engineer at Rubrik; built AI products before co-founding Eve.',
    },
    {
      name: 'David Zeng',
      role: 'Co-founder & Head of Engineering',
      background: 'AI and machine learning background; former Rubrik engineer.',
    },
  ],
  whyBuilding:
    'Help plaintiff law firms deliver higher-quality representation to more clients by automating tedious casework.',
  beliefs: [
    'Plaintiff firms can become AI-native without losing legal judgment',
    'AI should amplify case quality and client outcomes',
    'Legal software should own workflows end to end, not just assist with text',
  ],
  designPhilosophy:
    'High-trust vertical AI design: combine fast-moving product pods with direct client feedback and domain-specific workflows.',
  greenFlags: [
    'Head of Product Design role matches senior leadership profile',
    'Strong funding and rapid growth',
    'Design-heavy challenge around AI trust, workflows, and legal judgment',
  ],
  redFlags: [
    'Legal domain requires deep domain learning',
    'Role may be more management/leadership than IC portfolio-building',
    'Less aligned with coding-agent interests than devtool targets',
  ],

  designTeam: {
    designHead: 'Head of Product Design role open',
    teamSize: 'Existing design presence; careers page includes product designer testimonial',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Casework workflow design and AI task orchestration',
        'Source grounding, citation, and review logic',
        'Human approval and legal judgment checkpoints',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Work-product quality and accuracy review',
        'Legal risk, hallucination, and citation tracking',
        'Client/firm productivity and case outcome metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Legal case workspace and drafting surfaces',
        'Document review, chronology, and discovery interfaces',
        'Admin and workflow configuration for law firms',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Plaintiff law firms',
    secondary: 'Legal operations teams and attorneys managing high-volume casework',
  },
  userProblems: [
    'Legal teams spend too much time on repetitive document-heavy casework',
    'Case facts, medical records, and discovery materials are hard to synthesize',
    'AI-generated legal work must be reviewable, grounded, and trustworthy',
    'Small and mid-sized plaintiff firms need leverage without adding headcount',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Head of Product Design',
      location: 'San Mateo, CA (Hybrid)',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/eve/jobs/4204222009',
      roleFamily: 'product-design',
      roleSignal: 'head',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: '2026-05-12',
      compensation: '$230K-$315K',
      level: 'Head',
      whyInteresting:
        'Senior design leadership role for AI-native legal workflows with high trust and evaluation complexity.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Head of Product Design role fits leadership experience',
      'AI-native workflow and trust design challenges are strong',
      'Strong funding and high-growth signal',
    ],
    whyNot: [
      'Legal vertical is less aligned with coding-agent target narrative',
      'May require deep legal domain commitment',
    ],
    nextActions: [
      'Review Head of Product Design scope',
      'Decide whether legal AI leadership fits current application strategy',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Eve Company', url: 'https://www.eve.legal/company' },
    { title: 'Eve Careers', url: 'https://www.eve.legal/careers' },
    { title: 'Eve Series B / $1B valuation', url: 'https://www.prnewswire.com/news-releases/eve-raises-103-million-at-1-billion-valuation-to-help-plaintiff-firms-deliver-justice-through-ai-transformation-302570807.html' },
    { title: 'Built In: Eve Series A', url: 'https://www.builtinsf.com/articles/eve-raises-47m-series-a-20250116' },
    { title: 'Head of Product Design', url: 'https://job-boards.greenhouse.io/eve/jobs/4204222009' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};

