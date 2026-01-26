/**
 * Seed Firestore with companies data
 *
 * Usage: npx tsx scripts/seed-firestore.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { companies } from '../src/data/companies';

// Firebase config (hardcoded for script - same as .env.local)
const firebaseConfig = {
  apiKey: "AIzaSyDOr9qR3qxmM3HVOufob3njszlfgrpHp4A",
  authDomain: "aido-d2cc0.firebaseapp.com",
  projectId: "aido-d2cc0",
  storageBucket: "aido-d2cc0.firebasestorage.app",
  messagingSenderId: "244273326394",
  appId: "1:244273326394:web:c98203a368603ab5258803",
};

async function seedFirestore() {
  console.log('🔥 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log(`📦 Seeding ${companies.length} companies to Firestore...`);

  for (const company of companies) {
    try {
      const docRef = doc(db, 'companies', company.id);
      await setDoc(docRef, company);
      console.log(`  ✅ ${company.name}`);
    } catch (error) {
      console.error(`  ❌ ${company.name}:`, error);
    }
  }

  console.log('\n🎉 Seed complete!');
  console.log(`Total: ${companies.length} companies uploaded`);

  process.exit(0);
}

seedFirestore().catch(console.error);
