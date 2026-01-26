'use client';

import { useState, useEffect } from 'react';
import { getCompaniesFromFirestore, getCompanyFromFirestore } from '@/lib/firebase/companies';
import { companies as staticCompanies, getCompanyById as getStaticCompanyById } from '@/data/companies';
import type { Company } from '@/data/types';

const USE_FIRESTORE = process.env.NEXT_PUBLIC_USE_FIRESTORE === 'true';

/**
 * Hook to fetch all companies
 * Falls back to static data if Firestore fails or is disabled
 */
export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>(staticCompanies);
  const [loading, setLoading] = useState(USE_FIRESTORE);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!USE_FIRESTORE) {
      setLoading(false);
      return;
    }

    async function fetchCompanies() {
      try {
        const data = await getCompaniesFromFirestore();
        if (data.length > 0) {
          setCompanies(data);
        }
      } catch (err) {
        console.error('Failed to fetch from Firestore, using static data:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  return { companies, loading, error };
}

/**
 * Hook to fetch a single company by ID
 */
export function useCompany(id: string) {
  const [company, setCompany] = useState<Company | null>(getStaticCompanyById(id));
  const [loading, setLoading] = useState(USE_FIRESTORE);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!USE_FIRESTORE) {
      setLoading(false);
      return;
    }

    async function fetchCompany() {
      try {
        const data = await getCompanyFromFirestore(id);
        if (data) {
          setCompany(data);
        }
      } catch (err) {
        console.error('Failed to fetch from Firestore, using static data:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompany();
  }, [id]);

  return { company, loading, error };
}
