import { Company } from '../types';

export const ohmd: Company = {
    id: 'ohmd',
    name: 'OhMD',
    description: 'HIPAA-compliant patient messaging platform with AI voice assistant Nia that simplifies doctor-patient communication.',
    website: 'https://ohmd.com',
    headquarters: 'Burlington, VT',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
  totalFunding: '$1.2M+ (Seed/Venture)',
    valuation: 'Unknown',
    growth: 'Moderate (Established player leveraging AI)',
  competitors: ['Klara', 'Luma Health', 'Spruce Health'],
  moat: [],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Ethan Bechtel', role: 'CEO', background: 'Unknown' },
      { name: 'Nate Bechtel', role: 'Co-founder', background: 'Unknown' },
      { name: 'Junil Chon', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Eliminating communication friction outside the exam room so providers can focus on patient care.',
    beliefs: [
            'Patients prefer quick text communication over calling and waiting on hold.',
            'AI is safest and most effective when helping medical staff with a human-in-the-loop approach.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'UX for seamless handoff between AI-handled simple inquiries and situations requiring direct physician intervention.',
            'Methods for extracting and visualizing emergency situations or important clinical information from numerous patient messages.',
        ],
    userProblems: [
            'Patient frustration from long phone hold times when contacting the clinic.',
            'Front desk paralysis from handling simple appointment changes and routine inquiry calls.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Communication Simplicity, Human-in-the-loop. Benefits: AI transformation experience at a mature healthcare startup, deep technical integration leveraging Twilio\'s full product suite.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI triage logic for routing patient messages to appropriate staff', 'HIPAA-compliant automated response rules for common patient inquiries'] },
    evaluation: { level: 'medium', tasks: ['Patient response time and satisfaction tracking', 'AI voice assistant accuracy monitoring for clinical context'] },
    interface: { level: 'medium', tasks: ['Two-way patient messaging inbox for healthcare staff', 'AI voice assistant Nia configuration and monitoring dashboard'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.328Z',
  sources: [
    { title: 'Source', url: 'https://ohmd.com' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20170322005697/en/OhMD-Raises-1.2-Million-Simplify-Patient-Communication' }
  ],
};
