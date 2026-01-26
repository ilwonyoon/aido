import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit as limitQuery,
  serverTimestamp,
  type QueryConstraint,
} from 'firebase/firestore';
import { db } from './config';
import type { MacroEvent } from '@/lib/macro/types';

const MACRO_EVENTS_COLLECTION = 'macro_events';

export async function getMacroEvents(options: {
  limit?: number;
  startDate?: string;
  endDate?: string;
  type?: MacroEvent['type'];
  companyId?: string;
} = {}): Promise<MacroEvent[]> {
  const { limit, startDate, endDate, type, companyId } = options;
  const eventsRef = collection(db, MACRO_EVENTS_COLLECTION);
  const constraints: QueryConstraint[] = [];

  if (startDate) {
    constraints.push(where('date', '>=', startDate));
  }
  if (endDate) {
    constraints.push(where('date', '<=', endDate));
  }
  if (type) {
    constraints.push(where('type', '==', type));
  }
  if (companyId) {
    constraints.push(where('companyIds', 'array-contains', companyId));
  }

  constraints.push(orderBy('date', 'desc'));

  if (limit) {
    constraints.push(limitQuery(limit));
  }

  const q = query(eventsRef, ...constraints);
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as MacroEvent[];
}

export async function getMacroEventById(id: string): Promise<MacroEvent | null> {
  const docRef = doc(db, MACRO_EVENTS_COLLECTION, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as MacroEvent;
}

export async function addMacroEvent(
  event: Omit<MacroEvent, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const docRef = await addDoc(collection(db, MACRO_EVENTS_COLLECTION), {
    ...event,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function updateMacroEvent(
  id: string,
  data: Partial<MacroEvent>
): Promise<void> {
  const docRef = doc(db, MACRO_EVENTS_COLLECTION, id);
  const { id: _id, createdAt: _createdAt, ...rest } = data;

  await updateDoc(docRef, {
    ...rest,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteMacroEvent(id: string): Promise<void> {
  const docRef = doc(db, MACRO_EVENTS_COLLECTION, id);
  await deleteDoc(docRef);
}
