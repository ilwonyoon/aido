import { Company } from '../types';

export const holomd: Company = {
    id: 'holomd',
    name: 'HoloMD',
    description: 'AI-powered remote therapeutic monitoring (RTM) platform for psychiatrists and nurse practitioners.',
    website: 'https://holomd.ai',
    headquarters: 'Unknown',
    remote: 'Yes',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
  totalFunding: 'Unknown (Twilio AI Startup Searchlight 2025 Honoree)',
    valuation: 'Unknown',
    growth: 'Early Stage (Founded July 2024)',
  competitors: [
    { name: 'Microsoft HoloLens', description: 'Mixed reality headset platform used for enterprise spatial computing applications.' },
    { name: 'Magic Leap', description: 'Augmented reality platform focused on enterprise visualization and spatial computing.' },
    { name: 'Medivis', description: 'Surgical AR platform providing 3D anatomical visualization for medical procedures.' },
  ],
  moat: ['AI companion (Dr. Holo) for continuous mental health monitoring between visits', 'HIPAA-compliant remote therapeutic monitoring with clinician dashboards'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Unknown', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Continuously caring for patients outside of appointment hours to improve mental health treatment outcomes and reduce clinician burnout.',
    beliefs: [
            'Mental health treatment requires continuous care in daily life, not just during hospital visits.',
            'The AI companion (Dr. Holo) is a tool that extends clinicians\' care capacity, not a replacement for them.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Designing a friendly, empathetic AI persona that checks in on patients daily without feeling intrusive.',
            'Dashboard UX that lets clinicians quickly grasp patient data and never miss the right moment to intervene.',
        ],
    userProblems: [
            'Difficulty detecting early signs of patient deterioration during gaps between appointments.',
            'Heavy workload and administrative burden on psychiatric clinicians.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Empathy in AI, Clinician Support. Benefits: Technical contribution in the sensitive and critical field of mental health, experience with high-level data security and ethical responsibility including HIPAA compliance.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI companion check-in conversation logic for mental health patients', 'Alert escalation rules when patient responses indicate deterioration'] },
    evaluation: { level: 'medium', tasks: ['Measuring patient engagement and treatment adherence rates', 'Clinician satisfaction with AI-generated patient summaries'] },
    interface: { level: 'medium', tasks: ['Clinician dashboard for remote therapeutic monitoring with intervention alerts', 'Patient-facing AI companion interface for daily mental health check-ins'] },
  },
  
  designerLinks: [],
  openRoles: [],
    
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [],
    whyNot: [],
    nextActions: [],
  },
  
  lastUpdated: '2026-02-09T18:12:58.308Z',
  sources: [
    { title: 'Source', url: 'https://holomd.ai' },
    { title: 'Source', url: 'https://www.twilio.com/en-us/signal/london/awards' }
  ],
};
