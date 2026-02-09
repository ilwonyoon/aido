import { Company } from '../types';

export const insightHealthAi: Company = {
    id: 'insight-health-ai',
    name: 'Insight Health AI',
    description: 'Healthcare solution that automates patient conversations through AI agent Lumi, reducing clinical workload.',
    website: 'https://insighthealth.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['healthcare'],
    stage: 'Early-Stage',
  totalFunding: '$4.6M (Seed)',
    valuation: 'Unknown',
    growth: 'High (Backed by Kindred Ventures, RTP Global)',
  competitors: ['Eko Health', 'Viz.ai', 'Cleerly'],
  moat: ['AI agent Lumi trained on clinical workflows for automated patient intake', 'Co-founded by physicians with deep clinical domain expertise'],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Jaimal Soni', role: 'CEO', background: 'Unknown' },
      { name: 'Saran Siva', role: 'CTO', background: 'Unknown' },
      { name: 'Dr. Pankaj Gore', role: 'Co-founder', background: 'Unknown' },
      { name: 'Dr. Eric Stecker', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Automating 50% of routine clinical tasks so healthcare providers can focus on patient care.',
    beliefs: [
            'Automating medical data analysis and patient communication is the key to personalized healthcare.',
            'AI should augment healthcare providers\' work to maximize efficiency, not replace them.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Conversation design that naturally handles intake questionnaires and medication list updates based on disease-specific characteristics.',
            'Interface that summarizes AI-collected information in a trustworthy format for clinicians.',
        ],
    userProblems: [
            'Excessive time clinicians spend on administrative and pre-visit tasks outside of patient care.',
            'Inefficiency in patient history intake and follow-up processes.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Clinical Excellence, Automation for Care. Benefits: Collaborative experience in a team co-founded by physicians and engineers, the reward of solving real clinical problems with technology.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI agent Lumi conversation flows for cardiac risk assessment intake', 'Automated follow-up logic based on patient risk scores and medication adherence'] },
    evaluation: { level: 'medium', tasks: ['Measuring AI accuracy in patient data collection vs. manual intake', 'Tracking clinician time savings and patient satisfaction metrics'] },
    interface: { level: 'medium', tasks: ['Clinician-facing dashboard summarizing AI-collected patient data', 'Patient-facing conversational interface for health history and symptom reporting'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.310Z',
  sources: [
    { title: 'Source', url: 'https://insighthealth.ai' },
    { title: 'Source', url: 'https://www.twilio.com/blog/ai-startup-searchlight-honorees-2025' }
  ],
};
