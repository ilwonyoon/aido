import { Company } from '../types';

export const overjet: Company = {
  id: 'overjet',
  name: 'Overjet',
  description: 'AI-powered dental diagnostics platform that analyzes dental X-rays to detect cavities, bone loss, and periodontal disease, serving both dental providers and insurance payers.',
  website: 'https://www.overjet.com',
  headquarters: 'Boston, MA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/overjet-og.webp',

  // Category
  category: 'vertical-saas',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  industries: ['healthcare'],

  // Business
  stage: 'Series C',
  valuation: '$550M (Mar 2024)',
  totalFunding: '$133M+',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$7.85M',
      date: '2020-04',
      leadInvestors: ['Crosslink Capital'],
    },
    {
      stage: 'Series A',
      amount: '$27M',
      date: '2021-08',
      leadInvestors: ['General Catalyst', 'Insight Partners'],
    },
    {
      stage: 'Series B',
      amount: '$42.5M',
      date: '2021-12',
      valuation: '$425M',
      leadInvestors: ['General Catalyst', 'Insight Partners'],
    },
    {
      stage: 'Series C',
      amount: '$53.2M',
      date: '2024-03',
      valuation: '$550M',
      leadInvestors: ['March Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Strong customer expansion; largest dental AI deal in history (Series C)',
  customers: 'Thousands of dentists + payers covering 120M+ members including majority of top 10 U.S. dental insurers',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    signals: [
      '$550M valuation at Series C (Mar 2024)',
      'Acquired DentalBee for voice documentation (Dec 2025)',
      'Partners with majority of top 10 U.S. dental insurers',
      'Only dental AI cleared to both detect and quantify bone loss',
      'Hiring 20+ roles across engineering, product, and sales',
    ],
    tam: '$3.1B (AI in dentistry market, projected by 2034 at 22.3% CAGR)',
    ceiling: 'Early innings: dental AI adoption still nascent, building universal OS for dentistry',
    tailwinds: [
      'AI in dentistry market growing at 28% CAGR through 2030',
      'DSO consolidation creating larger enterprise buyers',
      'Regulatory push for standardized dental diagnostics',
      'Patient demand for transparent treatment communication',
    ],
    headwinds: [
      'Pearl and VideaHealth competing for the same dental practices',
      'Dentist resistance to AI-assisted diagnosis adoption',
      'Long enterprise sales cycles in healthcare',
      'Regulatory complexity across different insurance markets',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong: FDA-cleared AI trained on millions of dental X-rays, deep integrations with major insurers and DSOs, only platform with both detection and quantification clearance',
  },

  // Competition
  competitors: [
    {
      name: 'Pearl',
      description: 'First dental AI to receive FDA clearance for both 2D and 3D image analysis, real-time caries detection',
      whyTheyWin: 'First mover on 3D imaging clearance, strong case presentation tools, partnership with Bola AI for voice charting',
    },
    {
      name: 'VideaHealth',
      description: 'AI platform for early-stage caries to bone loss detection, targeting DSOs and individual clinicians',
      whyTheyWin: 'Strong DSO penetration, focus on periapical lesions and early detection',
    },
    {
      name: 'Dentistry Dashboard',
      description: 'AI-powered dental practice management and analytics platform',
      whyTheyWin: 'Broader practice management features beyond just diagnostics',
    },
    {
      name: 'Bola AI',
      description: 'AI voice-powered charting and note-taking for dental practices',
      whyTheyWin: 'Pure focus on documentation workflow, partnership with Pearl',
    },
  ],
  marketPosition: '#1 dental AI platform by funding and insurer partnerships',
  moat: [
    'Only dental AI FDA-cleared for both detection and quantification of bone loss',
    'Trained on millions of dental X-rays with proprietary clinical datasets',
    'Deep integrations with majority of top 10 U.S. dental insurers covering 120M+ members',
    'DentalBee acquisition creates full diagnostic-to-documentation pipeline',
    'American Dental Association as an investor — institutional credibility',
  ],
  vsGiants: 'Unlike horizontal AI companies, Overjet has deep vertical specialization in dentistry with FDA clearances, clinical validation, and insurer partnerships that would take years for large tech companies to replicate.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Overjet\'s core value proposition is AI-powered dental X-ray analysis — without AI, the product does not exist. The platform uses computer vision and deep learning to detect, classify, and quantify dental conditions from radiographic images.',
  aiDesignChallenges: [
    'Clinical trust: Designing AI overlays that dentists trust for diagnosis without over-reliance',
    'Uncertainty communication: Conveying AI confidence levels for different dental conditions',
    'Dual-persona design: Same AI platform must serve clinicians (diagnosis) and insurers (claims review)',
    'Regulatory visualization: Making complex insurance pre-treatment estimates intuitive for patients',
    'Integration UX: Seamless embedding into existing practice management and imaging workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Wardah Inam',
      role: 'CEO & Co-founder',
      background: 'PhD in Electrical Engineering from MIT, postdoc at MIT CSAIL focused on ML for remote health monitoring. Former lead product manager at Q Bio (biotech). Co-founded uLink (autonomous grid tech, recognized by National Geographic).',
    },
    {
      name: 'Deepak Ramaswamy',
      role: 'CTO & Co-founder',
      background: 'PhD from MIT with 17+ years of expertise in computational science. Technical architect of Overjet\'s AI platform.',
    },
  ],
  whyBuilding: 'Wardah Inam experienced inconsistent dental diagnoses when switching dentists, motivating her to apply AI to make dental assessments more accurate, consistent, and understandable for patients and insurers alike.',
  beliefs: [
    'Patients deserve consistent, transparent dental diagnoses regardless of which dentist they visit',
    'AI should augment clinicians, not replace them — enhancing communication and accuracy',
    'Aligning providers, payers, and patients through shared data creates better outcomes',
    'Building the universal operating system for dentistry',
    'High-performing teams dedicated to improving millions of patients\' oral health',
  ],
  designPhilosophy: 'Simplifying complex dental workflows and regulatory requirements into intuitive user experiences. Design-led and product-led company with design leads owning entire verticals.',
  greenFlags: [
    'MIT + Harvard founding team with deep technical and clinical expertise',
    'FDA-cleared AI with real clinical validation — not vaporware',
    'ADA (American Dental Association) as investor — rare institutional endorsement',
    'DentalBee acquisition shows strategic M&A capability',
    'Named to Forbes AI 50, Fast Company, Most Loved Workplace 2024',
  ],
  redFlags: [
    'Glassdoor 3.4/5 with concerns about CEO micromanagement',
    'Below industry-standard compensation reported by some employees',
    'Revenue not publicly disclosed — unclear path to profitability',
    'Niche vertical market may limit total career growth opportunities',
    'Heavy sales-driven culture may deprioritize design investment',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Small but growing (hiring 2 lead designers)',
    notableMembers: [],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI diagnostic overlay logic: what to highlight, when, and how prominently',
        'Insurance claims review workflow automation rules',
        'Voice documentation workflow design (DentalBee integration)',
        'Pre-treatment estimate logic and patient communication flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Clinical accuracy feedback loops: dentist corrections improving AI models',
        'Patient treatment acceptance rate tracking and optimization',
        'AI confidence calibration visualization for different dental conditions',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'IRIS flagship diagnostic AI platform used daily by thousands of clinicians',
        'Revenue Cycle Management (RCM) tool — 0-to-1 new product',
        'Insurance payer dashboard and claims review interface',
        'Dental X-ray annotation and overlay visualization',
        'Practice analytics and patient engagement screens',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Dental clinicians (dentists, hygienists) using AI diagnostics daily in practice',
    secondary: 'Dental insurance payers reviewing claims and managing 120M+ member coverage',
  },
  userProblems: [
    'Patients dismiss nearly half of treatment recommendations due to confusion or lack of understanding',
    'Dental diagnoses are inconsistent between different dentists, eroding patient trust',
    'Insurance claims processing is slow, manual, and error-prone for dental organizations',
    'Dental practices struggle to scale quality of care across multiple locations (DSOs)',
    'Clinical documentation is click-heavy and takes clinicians away from patient care',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Overjet Careers',
      role: 'Company',
      platform: 'careers',
      url: 'https://www.overjet.com/careers',
      description: 'Design-led company hiring Lead AI Product Designers',
    },
  ],

  // Open Roles
  openRoles: [
    {
      title: 'Lead AI Product Designer, Flagship Product',
      location: 'San Mateo, CA (Hybrid)',
      url: 'https://jobs.ashbyhq.com/Overjet/c76fd02b-11e1-4630-bfb1-2f5fedb82295',
      team: 'IRIS Flagship Product',
      level: 'Lead',
      type: 'full-time',
      aboutRole: 'Lead design for IRIS, Overjet\'s flagship diagnostic AI product used by thousands of clinicians daily. Scale the core experience powering Overjet\'s mission to improve patient care.',
      responsibilities: [
        'Define and evangelize design principles and practices across the organization',
        'Lead user research to inform UX strategy',
        'Simplify complex dental workflows and regulatory requirements into intuitive experiences',
        'Partner cross-functionally with PMs, engineers, data scientists, CSMs, and clinical researchers',
        'Mature Overjet\'s design function through best practices and design system development',
      ],
      requirements: [
        '10+ years product design experience at high-growth B2B SaaS companies',
        'Strong portfolio demonstrating personal and collaborative work',
        'User-centered design thinking proficiency',
        'Outstanding visual design combined with holistic UX approach',
        'Strong AI-first mindset with daily AI tool leverage',
      ],
      preferred: [
        'Prior diagnostic imaging experience',
        'Design system creation background',
      ],
      whyInteresting: 'Shape the AI diagnostic experience used by thousands of dentists daily. High-impact healthcare product with real clinical outcomes.',
    },
    {
      title: 'Lead AI Product Designer, New Product',
      location: 'San Mateo, CA (Hybrid)',
      url: 'https://jobs.ashbyhq.com/Overjet/d34856aa-2e72-4a96-9e12-dece535938ae',
      team: 'Revenue Cycle Management (RCM)',
      level: 'Lead',
      type: 'full-time',
      aboutRole: '0-to-1 initiative: define the product experience for a Revenue Cycle Management tool that bridges clinicians and insurance organizations. Greenfield opportunity to establish vision for an entirely new category.',
      responsibilities: [
        'Establish and champion design principles and practices at Overjet',
        'Lead user research initiatives to inform UX decisions',
        'Transform intricate dental practices and regulatory requirements into streamlined experiences',
        'Collaborate with Product Managers, Engineers, Data Scientists, and Clinical Researchers',
        'Mentor and inspire product teams toward UX vision achievement',
      ],
      requirements: [
        '10+ years product design experience at high-growth B2B SaaS companies',
        'Strong portfolio demonstrating individual and collaborative work',
        'Proficiency in user-centered design methodologies',
        'Data-informed design and conversion/acquisition knowledge',
        'Strong AI-first mindset and experience leveraging AI tools',
      ],
      preferred: [
        'Diagnostic imaging background',
        'Design System development experience',
      ],
      whyInteresting: 'Rare 0-to-1 opportunity at a well-funded company. Define a new product category in dental revenue cycle management from scratch.',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      rating: 3.4,
      content: '3.4/5 overall (65 reviews). 60% would recommend. Praised for innovative AI product and talented team. Concerns about management structure and CEO micromanagement.',
      url: 'https://www.glassdoor.com/Reviews/Overjet-Reviews-E5510317.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Amazing team, innovative products, and unmatched flexibility. Low ego culture but high-performance team with meritocratic approach.',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-Overjet-E5510317-RVW92160723.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Some report subpar benefits and below industry standard salaries. Concerns about unstructured management and heavy workload expectations.',
      url: 'https://www.glassdoor.com/Reviews/Overjet-Reviews-E5510317.htm',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'AI-native healthcare product with real clinical impact — meaningful work',
      'Two Lead Designer roles open — strong signal of design investment',
      '0-to-1 new product opportunity (RCM) — rare greenfield role',
      'FDA-cleared AI product — cutting-edge technical challenges',
      'Well-funded ($133M+) with $550M valuation — stable runway',
    ],
    whyNot: [
      'Glassdoor 3.4/5 with management concerns — culture risk',
      'Below-market compensation reported by some employees',
      'Niche dental vertical may limit transferable experience',
      'Small design team — could mean less mentorship and design maturity',
      'Healthcare enterprise sales culture may deprioritize design influence',
    ],
    nextActions: [
      'Research the dental AI space deeper to understand design challenges',
      'Try to find Overjet designers on LinkedIn/Twitter for cultural signal',
      'Evaluate compensation range vs. market for Lead Product Designer',
      'Assess whether healthcare vertical aligns with long-term career goals',
    ],
  },

  // Meta
  lastUpdated: '2026-02-10',
  sources: [
    {
      title: 'Overjet Careers Page',
      url: 'https://www.overjet.com/careers',
    },
    {
      title: 'Overjet About Page',
      url: 'https://www.overjet.com/about',
    },
    {
      title: 'Overjet Series C Announcement ($53M)',
      url: 'https://www.overjet.com/blog/overjet-raises-53-million-the-largest-investment-in-the-history-of-dental-ai',
    },
    {
      title: 'Overjet Series B Announcement ($42.5M at $425M valuation)',
      url: 'https://www.overjet.com/blog/overjet-raises-42-5-million-series-b-following-explosive-customer-demand-reaching-425-million-valuation',
    },
    {
      title: 'Overjet Series A Announcement ($27M)',
      url: 'https://www.overjet.com/blog/overjet-raises-27-million-in-series-a-financing-to-accelerate-adoption-of-ai-driven-dentistry',
    },
    {
      title: 'DentalBee Acquisition (Dec 2025)',
      url: 'https://www.overjet.com/blog/overjet-adds-voice-powered-clinical-documentation-through-dentalbee-acquisition',
    },
    {
      title: '5 Qs for Wardah Inam, CEO of Overjet',
      url: 'https://datainnovation.org/2025/01/5-qs-for-wardah-inam-ceo-of-overjet/',
    },
    {
      title: 'Overjet $550M Valuation (Fintech Global)',
      url: 'https://fintech.global/2024/03/06/overjet-bags-53-2m-in-latest-funding-round-to-see-valuation-soar-to-550m/',
    },
    {
      title: 'Glassdoor Reviews (65 reviews, 3.4/5)',
      url: 'https://www.glassdoor.com/Reviews/Overjet-Reviews-E5510317.htm',
    },
    {
      title: 'Overjet CTO Bjorn Freeman-Benson Announcement',
      url: 'https://www.prnewswire.com/news-releases/overjet-welcomes-bjorn-freeman-benson-as-chief-technology-officer-301799528.html',
    },
  ],
};
