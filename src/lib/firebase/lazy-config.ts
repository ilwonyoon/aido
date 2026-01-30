// Lazy-loading Firebase config
// Firebase modules are only loaded when needed (on sign-in)

import type { FirebaseApp } from 'firebase/app';
import type { Auth, GoogleAuthProvider } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let appPromise: Promise<FirebaseApp> | null = null;
let authPromise: Promise<Auth> | null = null;
let dbPromise: Promise<Firestore> | null = null;
let googleProviderPromise: Promise<GoogleAuthProvider> | null = null;

export async function getFirebaseApp(): Promise<FirebaseApp> {
  if (!appPromise) {
    appPromise = (async () => {
      const { initializeApp, getApps } = await import('firebase/app');
      return getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    })();
  }
  return appPromise;
}

export async function getFirebaseAuth(): Promise<Auth> {
  if (!authPromise) {
    authPromise = (async () => {
      const app = await getFirebaseApp();
      const { getAuth } = await import('firebase/auth');
      return getAuth(app);
    })();
  }
  return authPromise;
}

export async function getFirebaseDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const app = await getFirebaseApp();
      const { getFirestore } = await import('firebase/firestore');
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

export async function getGoogleProvider(): Promise<GoogleAuthProvider> {
  if (!googleProviderPromise) {
    googleProviderPromise = (async () => {
      const { GoogleAuthProvider } = await import('firebase/auth');
      return new GoogleAuthProvider();
    })();
  }
  return googleProviderPromise;
}
