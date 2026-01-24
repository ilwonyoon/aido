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
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;

  // Business
  stage: string;
  valuation?: string;
  totalFunding?: string;
  revenue?: string;
  growth?: string;
  runway?: string;
  customers?: string;

  // Competition
  competitors: string[];
  marketPosition?: string;
  moat: string[];

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
  lastUpdated: string;
  sources: { title: string; url: string }[];
}
