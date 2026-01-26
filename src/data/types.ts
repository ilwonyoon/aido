export interface FundingRound {
  stage: 'Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D' | 'Series E' | 'Series F' | 'Unknown';
  amount: string; // e.g., "$50M"
  date: string; // e.g., "2024-03"
  valuation?: string; // post-money valuation if known
  leadInvestors?: string[];
}

export interface DesignWorkType {
  logicBehavior: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
  evaluation: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
  interface: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
}

export interface DesignerLink {
  name: string;
  role: string;
  platform: 'twitter' | 'threads' | 'substack' | 'blog' | 'linkedin' | 'podcast';
  url: string;
  description?: string;
}

export interface OpenRole {
  title: string;
  location: string;
  url: string;
  // Enhanced job description fields
  team?: string; // e.g., "Claude Code Team", "Growth Team"
  level?: string; // e.g., "Senior", "Staff", "Lead"
  type?: 'full-time' | 'contract' | 'intern';
  compensation?: string; // e.g., "$180K-$250K + Equity"
  postedDate?: string; // e.g., "2025-01"
  aboutRole?: string; // Brief description of what you'll do
  responsibilities?: string[]; // Key responsibilities
  requirements?: string[]; // Required qualifications (keeping for backward compat)
  preferred?: string[]; // Nice-to-have qualifications
  teamInfo?: string; // About the team you'll join
  whyInteresting?: string; // Why this role is interesting for designers
}

export interface CultureInsight {
  source: 'blind' | 'glassdoor' | 'linkedin' | 'twitter' | 'threads' | 'levels.fyi';
  sentiment: 'positive' | 'neutral' | 'negative';
  rating?: number; // e.g., 4.2 out of 5
  content: string;
  url?: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;

  // Location
  headquarters: string; // e.g., "San Francisco, CA"
  remote?: 'Yes' | 'Hybrid' | 'No' | 'Unknown';

  // Business
  stage: string;
  valuation?: string;
  totalFunding?: string;
  fundingHistory?: FundingRound[]; // All funding rounds with dates
  revenue?: string;
  growth?: string;
  runway?: string;
  customers?: string;

  // Competition
  competitors: {
    name: string;
    description: string;
    whyTheyWin?: string;
  }[];
  marketPosition?: string;
  moat: string[];
  vsGiants?: string; // How they differentiate vs Google/OpenAI/Anthropic

  // AI-Native Level
  aiNativeLevel: 1 | 2 | 3 | 4;
  aiNativeLevelDescription: string;
  aiDesignChallenges: string[];

  // Founders & Vision
  founders: {
    name: string;
    role: string;
    background: string;
  }[];
  whyBuilding: string;
  beliefs: string[];
  designPhilosophy?: string;
  greenFlags: string[];
  redFlags: string[];

  // Design Opportunity
  designTeam: {
    cpo?: string;
    designHead?: string;
    teamSize?: string;
    notableMembers?: { name: string; role: string }[];
  };
  designWorkType: DesignWorkType;
  productStage: '0→1' | '1→10' | '10→100';

  // Designer Links
  designerLinks: DesignerLink[];

  // Open Roles
  openRoles: OpenRole[];

  // Culture Insights (Blind, Glassdoor, etc.)
  cultureInsights?: CultureInsight[];

  // My Tracking
  tracking: {
    status: 'watching' | 'interested' | 'researching' | 'applied' | 'rejected' | 'dead';
    fitScore: number; // 1-10
    whyJoin: string[];
    whyNot: string[];
    nextActions: string[];
    notes?: string;
  };

  // Meta
  lastUpdated: string; // ISO format: "2025-01-25T14:30:00" for minute precision
  sources: { title: string; url: string }[];
}
