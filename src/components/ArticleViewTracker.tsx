'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { trackFirestoreEvent } from '@/lib/firebase/events';

export function ArticleViewTracker({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const { user } = useAuth();

  useEffect(() => {
    void trackFirestoreEvent('article_view', {
      articleSlug: slug,
      articleTitle: title,
    }, user?.email);
  }, [slug, title, user?.email]);

  return null;
}
