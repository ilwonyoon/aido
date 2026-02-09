import { Company } from '../types';

export const consioAi: Company = {
    id: 'consio-ai',
    name: 'ConsioAI',
    description: 'AI phone agent for ecommerce brands that automates purchase consultations and cart recovery to drive revenue.',
    website: 'https://www.consio.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['sales-marketing'],
    stage: 'Early-Stage',
  totalFunding: '$3.3M (Seed)',
    valuation: 'Unknown',
    growth: 'High (Founded by early Gorgias employees)',
  competitors: ['Gorgias', 'Zendesk', 'Intercom'],
  moat: ['Founded by early Gorgias employees with deep ecommerce CS domain expertise', 'Voice-first approach to ecommerce sales conversion'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Philippe Roireau', role: 'Co-founder', background: 'Unknown' },
      { name: 'Martin Latrille', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Expanding the "phone layer" of ecommerce to maximize purchase conversion rates for high-consideration products.',
    beliefs: [
            'For complex, expensive products, customers prefer voice consultations over text.',
            'A hybrid model where human sales teams and AI agents collaborate seamlessly delivers the best results.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Voice UX (VUX) that naturally weaves product data and real-time inventory into conversational AI interactions.',
            'Interaction design that detects purchase intent and offers discounts or consultations at the right timing.',
        ],
    userProblems: [
            'Low purchase conversion rates and high cart abandonment in online stores.',
            'Customer support teams getting buried in simple inquiries, missing sales opportunities.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Sales Effectiveness, Human-Touch Automation. Benefits: Founding team with successful B2B SaaS (Gorgias) growth experience, early-stage journey of finding product-market fit.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI voice agent conversation flow for product recommendations', 'Cart recovery trigger logic and escalation to human sales reps'] },
    evaluation: { level: 'medium', tasks: ['Measuring call-to-conversion rates and cart recovery success', 'A/B testing voice scripts for different product categories'] },
    interface: { level: 'medium', tasks: ['Merchant dashboard for AI call analytics and sales performance', 'Voice agent configuration UI for product catalog and scripts'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.296Z',
  sources: [
    { title: 'Source', url: 'https://www.consio.ai' },
    { title: 'Source', url: 'https://techfundingnews.com/consio-ai-3-3m-ecommerce-voice-sales/' }
  ],
};
