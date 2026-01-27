import type { Timestamp } from 'firebase/firestore';

export type TrackingStatus =
  | 'tier_0'
  | 'tier_1'
  | 'not_interested'
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected';

export interface UserTracking {
  companyId: string;
  userId: string;
  status: TrackingStatus;
  fitScore: number; // 1-5
  notes: string;
  whyJoin: string[];
  whyNot: string[];
  nextActions: string[];
  updatedAt: Timestamp;
}
