import {
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';

const COLLECTION_NAME = 'companyRequests';

export type RequestStatus = 'pending' | 'researching' | 'completed' | 'failed';

export interface CompanyRequest {
  readonly id: string;
  readonly companyName: string;
  readonly websiteUrl?: string;
  readonly status: RequestStatus;
  readonly createdAt: Timestamp;
  readonly updatedAt: Timestamp;
  readonly requestedBy: string;
  readonly companyId?: string;
  readonly errorMessage?: string;
}

export async function createCompanyRequest(
  companyName: string,
  websiteUrl: string | undefined,
  requestedBy: string
): Promise<string> {
  const db = await getFirebaseDb();
  const ref = collection(db, COLLECTION_NAME);

  const data: Record<string, unknown> = {
    companyName: companyName.trim(),
    status: 'pending' as RequestStatus,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    requestedBy,
  };

  if (websiteUrl?.trim()) {
    data.websiteUrl = websiteUrl.trim();
  }

  const docRef = await addDoc(ref, data);
  return docRef.id;
}

export async function getCompanyRequests(): Promise<readonly CompanyRequest[]> {
  const db = await getFirebaseDb();
  const ref = collection(db, COLLECTION_NAME);
  const q = query(ref, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(d => ({
    id: d.id,
    ...d.data(),
  })) as CompanyRequest[];
}

export async function updateCompanyRequestStatus(
  id: string,
  status: RequestStatus,
  additionalFields?: Partial<Pick<CompanyRequest, 'companyId' | 'errorMessage'>>
): Promise<void> {
  const db = await getFirebaseDb();
  const docRef = doc(db, COLLECTION_NAME, id);

  await setDoc(docRef, {
    status,
    updatedAt: serverTimestamp(),
    ...additionalFields,
  }, { merge: true });
}
