/**
 * Seed Firestore with macro events data
 *
 * Usage: npx tsx scripts/seed-macro.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOr9qR3qxmM3HVOufob3njszlfgrpHp4A",
  authDomain: "aido-d2cc0.firebaseapp.com",
  projectId: "aido-d2cc0",
  storageBucket: "aido-d2cc0.firebasestorage.app",
  messagingSenderId: "244273326394",
  appId: "1:244273326394:web:c98203a368603ab5258803",
};

const sampleEvents = [
  {
    date: '2025-01-12',
    type: 'funding',
    title: 'Anthropic closes a new funding round',
    summary: 'Fresh capital to scale enterprise adoption and safety research.',
    impactLevel: 3,
    companyIds: ['anthropic'],
    sourceUrls: ['https://www.anthropic.com/news'],
  },
  {
    date: '2025-01-18',
    type: 'product_launch',
    title: 'Granola launches an agentic workflow update',
    summary: 'New workflow primitives aimed at reducing manual handoffs.',
    impactLevel: 2,
    companyIds: ['granola'],
    sourceUrls: ['https://www.granola.so/blog'],
  },
  {
    date: '2024-12-20',
    type: 'leadership',
    title: 'Cognition adds a new Head of Design',
    summary: 'Signals a deeper investment in product experience and quality.',
    impactLevel: 2,
    companyIds: ['cognition'],
    sourceUrls: ['https://www.cognition.ai/blog'],
  },
  {
    date: '2024-11-28',
    type: 'partnership',
    title: 'ElevenLabs announces a strategic platform partnership',
    summary: 'Expands distribution across creator and enterprise channels.',
    impactLevel: 2,
    companyIds: ['elevenlabs'],
    sourceUrls: ['https://elevenlabs.io/blog'],
  },
  {
    date: '2024-11-05',
    type: 'product_launch',
    title: 'Pika ships a new real-time generation experience',
    summary: 'Improves speed and iteration for creative workflows.',
    impactLevel: 2,
    companyIds: ['pika'],
    sourceUrls: ['https://pika.art/blog'],
  },
  {
    date: '2024-10-14',
    type: 'acquisition',
    title: 'Mercor acquires a small AI recruiting startup',
    summary: 'Adds candidate matching infrastructure to the core platform.',
    impactLevel: 1,
    companyIds: ['mercor'],
    sourceUrls: ['https://www.mercor.com/blog'],
  },
  {
    date: '2024-09-25',
    type: 'layoff',
    title: 'Leya restructures its go-to-market team',
    summary: 'Refocuses on core product and enterprise sales motion.',
    impactLevel: 2,
    companyIds: ['leya'],
    sourceUrls: ['https://www.leya.com/blog'],
  },
  {
    date: '2024-09-02',
    type: 'partnership',
    title: 'Anthropic and ElevenLabs announce a model integration pilot',
    summary: 'Explores tighter alignment between language and voice stacks.',
    impactLevel: 1,
    companyIds: ['anthropic', 'elevenlabs'],
    sourceUrls: ['https://www.anthropic.com/news'],
  },
];

async function seedMacroEvents() {
  console.log('🔥 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log(`📦 Seeding ${sampleEvents.length} macro events to Firestore...`);

  for (const event of sampleEvents) {
    try {
      await addDoc(collection(db, 'macro_events'), {
        ...event,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      console.log(`  ✅ ${event.title}`);
    } catch (error) {
      console.error(`  ❌ ${event.title}:`, error);
    }
  }

  console.log('\n🎉 Seed complete!');
  console.log(`Total: ${sampleEvents.length} macro events uploaded`);

  process.exit(0);
}

seedMacroEvents().catch(console.error);
