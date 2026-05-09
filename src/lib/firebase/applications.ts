import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  type FieldValue,
  type Unsubscribe,
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';

export type ApplicationStatus =
  | 'to_apply'
  | 'applied'
  | 'waiting'
  | 'recruiter_screen'
  | 'founder_or_hm'
  | 'portfolio_review'
  | 'final'
  | 'offer'
  | 'rejected'
  | 'withdrawn'
  | 'closed';

export type ApplicationPriority = 'P0' | 'P1' | 'P2' | 'P3';
export type ApplicationAts = 'ashby' | 'greenhouse' | 'lever' | 'workable' | 'other';
export type ApplicationSource = 'aido' | 'manual' | 'gmail' | 'linkedin' | 'referral';
type FirestoreDateValue = Timestamp | FieldValue;

export type ApplicationEventType =
  | 'created'
  | 'planned'
  | 'applied'
  | 'email_received'
  | 'email_sent'
  | 'status_changed'
  | 'interview_scheduled'
  | 'interview_completed'
  | 'follow_up_due'
  | 'note_added';

export interface Application {
  readonly id: string;
  readonly companyId?: string;
  readonly companyName: string;
  readonly roleTitle: string;
  readonly roleUrl: string;
  readonly applicationUrl?: string;
  readonly ats: ApplicationAts;
  readonly priority: ApplicationPriority;
  readonly status: ApplicationStatus;
  readonly plannedApplyAt?: Timestamp;
  readonly appliedAt?: Timestamp;
  readonly nextFollowUpAt?: Timestamp;
  readonly lastContactAt?: Timestamp;
  readonly lastCheckedEmailAt?: Timestamp;
  readonly source?: ApplicationSource;
  readonly location?: string;
  readonly compensationNote?: string;
  readonly contactName?: string;
  readonly contactEmail?: string;
  readonly notes?: string;
  readonly needsEmailReview?: boolean;
  readonly ownerUid: string;
  readonly ownerEmail: string;
  readonly createdAt?: Timestamp;
  readonly updatedAt?: Timestamp;
}

export interface ApplicationEvent {
  readonly id: string;
  readonly type: ApplicationEventType;
  readonly title: string;
  readonly body?: string;
  readonly occurredAt?: Timestamp;
  readonly createdAt?: Timestamp;
  readonly gmailMessageId?: string;
  readonly gmailThreadId?: string;
  readonly from?: string;
  readonly to?: string;
  readonly subject?: string;
  readonly previousStatus?: ApplicationStatus;
  readonly nextStatus?: ApplicationStatus;
}

export type ApplicationInput = Omit<
  Application,
  'id' | 'ownerUid' | 'ownerEmail' | 'createdAt' | 'updatedAt'
>;

export type ApplicationEventInput = Omit<ApplicationEvent, 'id' | 'createdAt' | 'occurredAt'> & {
  readonly occurredAt?: FirestoreDateValue;
};

function applicationsPath(userId: string) {
  return ['users', userId, 'applications'] as const;
}

function eventsPath(userId: string, applicationId: string) {
  return ['users', userId, 'applications', applicationId, 'events'] as const;
}

function withoutUndefined<T extends Record<string, unknown>>(value: T): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => entryValue !== undefined)
  );
}

export async function onApplicationsSnapshot(
  userId: string,
  callback: (applications: readonly Application[]) => void,
  onError?: (error: Error) => void
): Promise<Unsubscribe> {
  const db = await getFirebaseDb();
  const ref = collection(db, ...applicationsPath(userId));
  const q = query(ref, orderBy('updatedAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as Application[]);
    },
    onError
  );
}

export async function onApplicationEventsSnapshot(
  userId: string,
  applicationId: string,
  callback: (events: readonly ApplicationEvent[]) => void,
  onError?: (error: Error) => void
): Promise<Unsubscribe> {
  const db = await getFirebaseDb();
  const ref = collection(db, ...eventsPath(userId, applicationId));
  const q = query(ref, orderBy('occurredAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as ApplicationEvent[]);
    },
    onError
  );
}

export async function createApplication(
  userId: string,
  ownerEmail: string,
  input: ApplicationInput
): Promise<string> {
  const db = await getFirebaseDb();
  const ref = collection(db, ...applicationsPath(userId));
  const data = {
    ...withoutUndefined(input as unknown as Record<string, unknown>),
    ownerUid: userId,
    ownerEmail,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const docRef = await addDoc(ref, data);

  await addApplicationEvent(userId, docRef.id, {
    type: input.status === 'applied' ? 'applied' : 'created',
    title: input.status === 'applied' ? 'Application submitted' : 'Application created',
    body: `${input.companyName} - ${input.roleTitle}`,
    occurredAt: input.appliedAt ?? serverTimestamp(),
  });

  return docRef.id;
}

export async function updateApplication(
  userId: string,
  applicationId: string,
  updates: Partial<ApplicationInput>
): Promise<void> {
  const db = await getFirebaseDb();
  const ref = doc(db, ...applicationsPath(userId), applicationId);
  await updateDoc(ref, {
    ...withoutUndefined(updates as unknown as Record<string, unknown>),
    updatedAt: serverTimestamp(),
  });
}

export async function deleteApplication(userId: string, applicationId: string): Promise<void> {
  const db = await getFirebaseDb();
  const ref = doc(db, ...applicationsPath(userId), applicationId);
  await deleteDoc(ref);
}

export async function addApplicationEvent(
  userId: string,
  applicationId: string,
  event: ApplicationEventInput
): Promise<string> {
  const db = await getFirebaseDb();
  const ref = collection(db, ...eventsPath(userId, applicationId));
  const docRef = await addDoc(ref, {
    ...withoutUndefined(event as unknown as Record<string, unknown>),
    occurredAt: event.occurredAt ?? serverTimestamp(),
    createdAt: serverTimestamp(),
  });

  const applicationRef = doc(db, ...applicationsPath(userId), applicationId);
  await setDoc(applicationRef, { updatedAt: serverTimestamp() }, { merge: true });

  return docRef.id;
}

export async function seedListenLabsApplication(userId: string, ownerEmail: string): Promise<void> {
  const db = await getFirebaseDb();
  const applicationId = 'listen-labs-founding-product-designer';
  const applicationRef = doc(db, ...applicationsPath(userId), applicationId);
  const existing = await getDoc(applicationRef);
  if (existing.exists()) return;

  const appliedAt = Timestamp.fromDate(new Date('2026-05-07T12:00:00-07:00'));

  await setDoc(applicationRef, {
    companyId: 'listen-labs',
    companyName: 'Listen Labs',
    roleTitle: 'Founding Product Designer',
    roleUrl: 'https://jobs.ashbyhq.com/listenlabs/a8d40c4f-2367-493e-bd41-f3987abb4d4b',
    applicationUrl: 'https://jobs.ashbyhq.com/listenlabs/a8d40c4f-2367-493e-bd41-f3987abb4d4b/application',
    ats: 'ashby',
    priority: 'P0',
    status: 'applied',
    appliedAt,
    source: 'aido',
    location: 'San Francisco, CA',
    notes:
      'Submitted with an additional note about O!makers, the 200-person standing user panel and UXR system built at Bucketplace/Ohouse.',
    needsEmailReview: false,
    ownerUid: userId,
    ownerEmail,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  await addApplicationEvent(userId, applicationId, {
    type: 'applied',
    title: 'Application submitted',
    body:
      'Submitted via Ashby. Additional note covered O!makers, reducing time-to-user-insight from about two weeks to about one hour.',
    occurredAt: appliedAt,
  });
}
