import { Company } from '../types';

export const lomanAi: Company = {
    id: 'loman-ai',
    name: 'Loman AI',
    description: '24/7 AI voice agent service revolutionizing restaurant operations.',
    website: 'https://loman.ai',
    headquarters: 'Unknown',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['other'],
    stage: 'Early-Stage',
  totalFunding: 'Unknown (Twilio AI Startup Searchlight 2025 Honoree)',
    valuation: 'Unknown',
    growth: 'Early Stage',
  competitors: [
    { name: 'Kea', description: 'AI ordering assistant for restaurants that automates phone and digital orders.' },
    { name: 'ConverseNow', description: 'Voice AI platform for drive-thru and phone ordering at restaurant chains.' },
    { name: 'SoundHound', description: 'Voice AI platform powering conversational interfaces for restaurants and automotive.' },
  ],
  moat: ['Restaurant-specific AI voice agent trained on menu and ordering workflows', 'Deep POS and reservation system integrations for independent restaurants'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Unknown', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Helping independent and small-to-medium restaurants achieve enterprise-level customer service systems.',
    beliefs: [
            'In the restaurant business, phone service is the starting point and core of the customer experience.',
            'AI should go beyond simple order taking to remember customer preferences and provide hospitality.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Voice recognition that accurately captures and processes orders even in noisy kitchen or store environments.',
            'AI memory design that recognizes repeat customers and provides personalized recommendations.',
        ],
    userProblems: [
            'Revenue loss from missed phone calls during busy peak hours.',
            'Disruption to floor service and kitchen workflow due to phone answering duties.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Hospitality Tech, SMB Empowerment. Benefits: Building practical AI solutions for small businesses, experience integrating voice AI with payment and reservation systems.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI phone ordering conversation flow with menu item recognition and modifiers', 'Order routing logic between AI agent, POS system, and kitchen display'] },
    evaluation: { level: 'medium', tasks: ['Measuring order accuracy rates and customer satisfaction on AI calls', 'Tracking revenue captured from calls that would have been missed'] },
    interface: { level: 'medium', tasks: ['Restaurant owner dashboard for call analytics and order management', 'Menu and AI agent configuration interface for restaurant staff'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.317Z',
  sources: [
    { title: 'Source', url: 'https://loman.ai' },
    { title: 'Source', url: 'https://www.twilio.com/en-us/signal/london/awards' }
  ],
};
