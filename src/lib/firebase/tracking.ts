import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';
import type { UserTracking } from '@/lib/tracking/types';

export async function getUserTracking(
  userId: string,
  companyId: string
): Promise<UserTracking | null> {
  const db = await getFirebaseDb();
  const docRef = doc(db, 'users', userId, 'tracking', companyId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    companyId: snapshot.id,
    ...snapshot.data(),
  } as UserTracking;
}

export async function getAllUserTracking(userId: string): Promise<UserTracking[]> {
  const db = await getFirebaseDb();
  const trackingRef = collection(db, 'users', userId, 'tracking');
  const snapshot = await getDocs(trackingRef);

  return snapshot.docs.map(doc => ({
    companyId: doc.id,
    ...doc.data(),
  })) as UserTracking[];
}

export async function setUserTracking(
  userId: string,
  companyId: string,
  data: Partial<UserTracking>
): Promise<void> {
  const db = await getFirebaseDb();
  const docRef = doc(db, 'users', userId, 'tracking', companyId);

  await setDoc(
    docRef,
    {
      ...data,
      userId,
      companyId,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function deleteUserTracking(
  userId: string,
  companyId: string
): Promise<void> {
  const db = await getFirebaseDb();
  const docRef = doc(db, 'users', userId, 'tracking', companyId);
  await deleteDoc(docRef);
}
