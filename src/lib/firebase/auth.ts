import type { User } from 'firebase/auth';
import { getFirebaseAuth, getGoogleProvider } from './lazy-config';

/**
 * Sign in with Google popup
 */
export async function signInWithGoogle(): Promise<User> {
  const [auth, provider] = await Promise.all([
    getFirebaseAuth(),
    getGoogleProvider(),
  ]);
  const { signInWithPopup } = await import('firebase/auth');
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

/**
 * Sign out current user
 */
export async function signOut(): Promise<void> {
  const auth = await getFirebaseAuth();
  const { signOut: firebaseSignOut } = await import('firebase/auth');
  await firebaseSignOut(auth);
}

/**
 * Subscribe to auth state changes
 */
export async function onAuthChange(callback: (user: User | null) => void): Promise<() => void> {
  const auth = await getFirebaseAuth();
  const { onAuthStateChanged } = await import('firebase/auth');
  return onAuthStateChanged(auth, callback);
}

/**
 * Get current user (async to support lazy loading)
 */
export async function getCurrentUser(): Promise<User | null> {
  const auth = await getFirebaseAuth();
  return auth.currentUser;
}
