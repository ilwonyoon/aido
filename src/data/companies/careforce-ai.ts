import { Company } from '../types';

export const careforceAi: Company = {
    id: 'careforce-ai',
    name: 'CareForce AI',
    description: 'A platform that builds AI workers for healthcare organizations to automate patient outreach and scheduling.',
    website: 'https://careforce.ai',
    headquarters: 'New York, NY',
    region: 'nyc' as const,
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
    normalizedStage: 'other' as const,
  totalFunding: '$500K (Accelerator/Incubator)',
    valuation: 'Unknown',
    growth: 'High (Twilio AI Startup Searchlight 2025 Honoree)',
  competitors: [
    { name: 'CareRev', description: 'On-demand healthcare staffing marketplace connecting facilities with local professionals.' },
    { name: 'Hallmark Healthcare', description: 'Healthcare workforce solutions provider specializing in staffing and recruitment.' },
    { name: 'AlayaCare', description: 'End-to-end home care software platform for scheduling, billing, and clinical documentation.' },
  ],
  moat: ['AI-first scheduling for home care workforce', 'YC-backed with domain-specific training data'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Huzaifa Sial', role: 'Founder & CEO', background: 'YC-backed founder building AI for home care workforce management' }
    ],
    whyBuilding: 'Scaling global care capacity through AI workers while reducing administrative burden on healthcare organizations.',
    beliefs: [
            'Repetitive administrative tasks like patient scheduling should be handled autonomously by AI.',
            'AI agents should be able to independently perform outreach without requiring integration with existing systems.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'UX that maintains trust in sensitive healthcare communication while appropriately disclosing AI identity.',
            'Maintaining context across omnichannel (phone, text, email) to deliver a consistent patient experience.',
        ],
    userProblems: [
            'Healthcare worker burnout from excessive administrative tasks, reducing time for patient care.',
            'Reduced patient access to care due to complex scheduling procedures.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Operational Efficiency, Patient-centric Care. Benefits: Leveraging robust communication infrastructure on the Twilio platform, contributing to solving global healthcare problems.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI scheduling rules for caregiver-patient matching', 'Automated outreach workflow logic for home care visits'] },
    evaluation: { level: 'medium', tasks: ['Measuring scheduling accuracy and patient satisfaction', 'Tracking caregiver utilization and no-show rates'] },
    interface: { level: 'medium', tasks: ['Caregiver scheduling dashboard for home care agencies', 'Patient-facing appointment booking and confirmation UX'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.290Z',
  sources: [
    { title: 'Source', url: 'https://careforce.ai' },
    { title: 'Source', url: 'https://www.twilio.com/en-us/signal/london/awards' }
  ],
};
