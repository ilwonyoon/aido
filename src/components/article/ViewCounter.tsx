'use client';

import { useEffect, useState } from 'react';

interface ViewCounterProps {
  readonly slug: string;
  readonly increment?: boolean;
}

export function ViewCounter({ slug, increment = false }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function trackView() {
      try {
        const { getFirebaseDb } = await import('@/lib/firebase/lazy-config');
        const { doc, getDoc, setDoc, increment: firestoreIncrement } = await import('firebase/firestore');
        const db = await getFirebaseDb();
        const docRef = doc(db, 'articleViews', slug);

        if (increment) {
          await setDoc(docRef, { count: firestoreIncrement(1) }, { merge: true });
        }

        const snap = await getDoc(docRef);
        if (!cancelled) {
          setViews(snap.exists() ? (snap.data().count ?? 0) : 0);
        }
      } catch {
        if (!cancelled) {
          setViews(null);
        }
      }
    }

    trackView();
    return () => { cancelled = true; };
  }, [slug, increment]);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {views.toLocaleString()}
    </span>
  );
}
