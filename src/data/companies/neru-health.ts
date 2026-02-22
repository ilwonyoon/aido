import { Company } from '../types';

export const neruHealth: Company = {
    id: 'neru-health',
    name: 'Neru Health',
    description: 'AI-powered patient support platform that automates chronic disease and durable medical equipment (DME) management.',
    website: 'https://neruhealth.com',
    headquarters: 'Allston, MA',
    region: 'other-us' as const,
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
    normalizedStage: 'other' as const,
  totalFunding: '$4M (Seed/Venture)',
    valuation: '$16M Cap (Venture Round)',
    growth: 'Early Stage',
  competitors: [
    { name: 'Big Health', description: 'Digital therapeutics company offering FDA-authorized apps for insomnia and anxiety.' },
    { name: 'Pear Therapeutics', description: 'Pioneer in prescription digital therapeutics for substance abuse and insomnia treatment.' },
    { name: 'Somryst', description: 'FDA-authorized prescription digital therapeutic for chronic insomnia using CBT-I.' },
  ],
  moat: ['Harvard spinout with clinical research foundation in sleep therapy', 'AI-trained on medical device adherence coaching for chronic conditions'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Morgan Moncada', role: 'CEO', background: 'Unknown' },
      { name: 'Maria Grebenshchikova', role: 'CTO', background: 'Unknown' },
      { name: 'Catherine Tadina', role: 'CPO', background: 'Unknown' }
    ],
    whyBuilding: 'Improving treatment adherence for chronic disease patients such as sleep apnea through technology.',
    beliefs: [
            'Helping patients consistently use medical devices requires emotional support and 24/7 coaching, not just reminders.',
            'Clinically-trained AI that helps patients resolve minor issues reduces the burden on the healthcare system.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Proactive alert design that detects early signs of treatment dropout and intervenes.',
            'Voice-based intuitive interface that is easy to use even for elderly patients.',
        ],
    userProblems: [
            'Treatment dropout due to complex medical device usage and management difficulties.',
            'Treatment interruption from missing the timing for consumable reorders.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Patient Adherence, Tech-Enabled Care. Benefits: Women-led healthcare innovation team, a service that directly improves patients\' quality of life.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI sleep therapy coaching conversation logic with adherence tracking', 'Proactive intervention triggers based on device usage patterns and dropout signals'] },
    evaluation: { level: 'medium', tasks: ['Measuring patient treatment adherence rates and device usage consistency', 'Tracking consumable reorder timing accuracy and patient retention'] },
    interface: { level: 'medium', tasks: ['Patient-facing sleep therapy companion with voice-first interaction for elderly users', 'Provider dashboard for patient adherence monitoring and DME management'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.326Z',
  sources: [
    { title: 'Source', url: 'https://neruhealth.com' },
    { title: 'Source', url: 'https://www.twilio.com/blog/ai-startup-searchlight-honorees-2025' }
  ],
};
