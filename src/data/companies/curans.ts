import { Company } from '../types';

export const curans: Company = {
    id: 'curans',
    name: 'Curans',
    description: 'AI edtech that provides virtual patient simulators for medical students, revolutionizing clinical practice experience.',
    website: 'https://curans.org',
    headquarters: 'Unknown',
    region: 'other-intl' as const,
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2c'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
    normalizedStage: 'other' as const,
  totalFunding: 'Unknown (Twilio AI Startup Searchlight 2025 Honoree)',
    valuation: 'Unknown',
    growth: 'Early Stage',
  competitors: [
    { name: 'Luma Health', description: 'Patient engagement platform automating scheduling, referrals, and communication.' },
    { name: 'Phreesia', description: 'Patient intake and registration software for healthcare organizations.' },
    { name: 'Relatient', description: 'Patient relationship management platform for appointment reminders and messaging.' },
  ],
  moat: ['AI-powered virtual patient simulation with realistic clinical scenarios', 'Voice and text-based interaction for clinical reasoning training'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Unknown', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Bridging the gap between theory and clinical practice, developing medical students\' diagnostic skills in a safe environment.',
    beliefs: [
            'Students need to experience diverse clinical cases through AI simulation that are difficult to practice on real patients.',
            'Realistic voice and text-based interactions build clinical critical thinking skills.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Conversational interface with emotional expression that creates an immersive experience of consulting a real patient.',
            'Assessment system UX where AI provides specific, constructive feedback on the student\'s diagnostic process.',
        ],
    userProblems: [
            'Lack of clinical practice opportunities for medical students and spatial constraints.',
            'High cost and limitations of hiring standardized patient actors.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Educational Innovation, Clinical Accuracy. Benefits: Social impact in shaping the future of medical education, technical challenges leveraging Twilio\'s diverse communication APIs.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Virtual patient conversation branching based on student diagnostic questions', 'Clinical scenario progression logic with symptom revelation patterns'] },
    evaluation: { level: 'medium', tasks: ['Scoring rubrics for student diagnostic accuracy and clinical reasoning', 'Feedback generation quality for different medical specialties'] },
    interface: { level: 'medium', tasks: ['Patient simulator chat interface with voice and text modes', 'Student progress dashboard with case history and performance analytics'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.297Z',
  sources: [
    { title: 'Source', url: 'https://curans.org' },
    { title: 'Source', url: 'https://www.twilio.com/blog/ai-startup-searchlight-honorees-2025' }
  ],
};
