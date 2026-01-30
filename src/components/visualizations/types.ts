export interface FundingRound {
  readonly name: string;
  readonly amount: string;
  readonly date: string;
  readonly monthsFromSeed: number;
}

export interface CompanyFunding {
  readonly id: string;
  readonly name: string;
  readonly emoji: string;
  readonly tagline: string;
  readonly rounds: readonly FundingRound[];
  readonly currentValuation: string;
  readonly seedToSeriesBMonths: number;
  readonly totalFunding: string;
  readonly color: string;
}

export interface EraData {
  readonly era: string;
  readonly range: readonly [number, number];
  readonly label: string;
}
