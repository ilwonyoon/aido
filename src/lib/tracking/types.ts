import type { Timestamp } from 'firebase/firestore';

export type TrackingStatus =
  | 'tier_0'
  | 'tier_1'
  | 'not_interested'
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected';

export type InterestStatus = 'tier_0' | 'tier_1' | 'not_interested';

export type ApplicationStatus =
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected'
  | 'withdrawn';

export interface UserTracking {
  companyId: string;
  userId: string;
  // Legacy combined field. Prefer interestStatus/applicationStatus for new code.
  status?: TrackingStatus | null;
  interestStatus?: InterestStatus | null;
  applicationStatus?: ApplicationStatus | null;
  fitScore: number; // 1-5
  notes: string;
  whyJoin: string[];
  whyNot: string[];
  nextActions: string[];
  updatedAt: Timestamp;
}
