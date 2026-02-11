// Newsletter subscriber management via Firestore
// Uses the same lazy-loading pattern as other Firebase modules

import { getFirebaseDb } from './lazy-config';

export interface NewsletterSubscriber {
  readonly email: string;
  readonly subscribedAt: unknown; // Firestore Timestamp
  readonly status: 'active' | 'unsubscribed';
  readonly unsubscribedAt?: unknown;
  readonly unsubscribeToken: string;
  readonly preferences: {
    readonly jobAlerts: boolean;
    readonly articles: boolean;
  };
  readonly source: 'footer' | 'newsletter-page';
}

export async function subscribeToNewsletter(
  email: string,
  source: 'footer' | 'newsletter-page' = 'footer'
): Promise<{ success: boolean; alreadySubscribed?: boolean; error?: string }> {
  try {
    const normalizedEmail = email.toLowerCase().trim();

    if (!isValidEmail(normalizedEmail)) {
      return { success: false, error: 'Invalid email address' };
    }

    const db = await getFirebaseDb();
    const { doc, getDoc, setDoc, Timestamp } = await import('firebase/firestore');

    const subscriberRef = doc(db, 'newsletter_subscribers', normalizedEmail);
    const existing = await getDoc(subscriberRef);

    if (existing.exists()) {
      const data = existing.data();
      if (data.status === 'active') {
        return { success: true, alreadySubscribed: true };
      }
      // Re-subscribe if previously unsubscribed
    }

    const unsubscribeToken = crypto.randomUUID();

    await setDoc(subscriberRef, {
      email: normalizedEmail,
      subscribedAt: Timestamp.now(),
      status: 'active',
      unsubscribeToken,
      preferences: { jobAlerts: true, articles: true },
      source,
    });

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return { success: false, error: 'Subscription failed. Please try again.' };
  }
}

export async function unsubscribeFromNewsletter(
  email: string,
  token: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    const db = await getFirebaseDb();
    const { doc, getDoc, updateDoc, Timestamp } = await import('firebase/firestore');

    const subscriberRef = doc(db, 'newsletter_subscribers', normalizedEmail);
    const subscriberDoc = await getDoc(subscriberRef);

    if (!subscriberDoc.exists()) {
      return { success: false, error: 'Subscriber not found' };
    }

    const data = subscriberDoc.data();

    if (data.unsubscribeToken !== token) {
      return { success: false, error: 'Invalid unsubscribe token' };
    }

    if (data.status === 'unsubscribed') {
      return { success: true }; // Already unsubscribed
    }

    await updateDoc(subscriberRef, {
      status: 'unsubscribed',
      unsubscribedAt: Timestamp.now(),
    });

    return { success: true };
  } catch (error) {
    console.error('Newsletter unsubscribe failed:', error);
    return { success: false, error: 'Unsubscribe failed. Please try again.' };
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
