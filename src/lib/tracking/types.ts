import type { Timestamp } from 'firebase/firestore';

export type TrackingStatus =
  | 'interested'
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
