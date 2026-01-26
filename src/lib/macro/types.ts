import type { Timestamp } from 'firebase/firestore';

export type MacroEventType =
  | 'funding'
  | 'product_launch'
  | 'leadership'
  | 'acquisition'
  | 'layoff'
  | 'partnership';

export interface MacroEvent {
  id: string;
  date: string; // ISO date string
  type: MacroEventType;
  title: string;
  summary: string;
  impactLevel: 1 | 2 | 3;
  companyIds: string[];
  sourceUrls: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
