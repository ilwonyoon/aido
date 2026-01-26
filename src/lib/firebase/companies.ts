import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from './config';
import type { Company } from '@/data/types';

const COMPANIES_COLLECTION = 'companies';

/**
 * Get all companies from Firestore
 */
export async function getCompaniesFromFirestore(): Promise<Company[]> {
  const companiesRef = collection(db, COMPANIES_COLLECTION);
  const q = query(companiesRef, orderBy('name'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Company[];
}

/**
 * Get a single company by ID
 */
export async function getCompanyFromFirestore(id: string): Promise<Company | null> {
  const docRef = doc(db, COMPANIES_COLLECTION, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Company;
}

/**
 * Add or update a company
 */
export async function setCompanyInFirestore(company: Company): Promise<void> {
  const docRef = doc(db, COMPANIES_COLLECTION, company.id);
  await setDoc(docRef, company);
}

/**
 * Update specific fields of a company
 */
export async function updateCompanyInFirestore(
  id: string,
  data: Partial<Company>
): Promise<void> {
  const docRef = doc(db, COMPANIES_COLLECTION, id);
  await updateDoc(docRef, data);
}

/**
 * Delete a company
 */
export async function deleteCompanyFromFirestore(id: string): Promise<void> {
  const docRef = doc(db, COMPANIES_COLLECTION, id);
  await deleteDoc(docRef);
}

/**
 * Get companies by AI native level
 */
export async function getCompaniesByAiLevel(level: 'A' | 'B' | 'C' | 'D'): Promise<Company[]> {
  const companiesRef = collection(db, COMPANIES_COLLECTION);
  const q = query(companiesRef, where('aiNativeLevel', '==', level));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Company[];
}

/**
 * Seed Firestore with companies data
 * Use this to migrate from static JSON to Firestore
 */
export async function seedCompaniesFromArray(companies: Company[]): Promise<void> {
  const promises = companies.map(company => setCompanyInFirestore(company));
  await Promise.all(promises);
  console.log(`Seeded ${companies.length} companies to Firestore`);
}
