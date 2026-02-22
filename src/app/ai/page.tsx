import { ChatPanel } from '@/components/ai/ChatPanel';

export default function AISearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-0 sm:px-2 py-4 sm:py-8">
      <h1 className="text-2xl font-bold mb-2">AI Search</h1>
      <p className="text-[var(--muted)] mb-6 sm:mb-8">
        Ask me anything about AI companies and design roles.
      </p>
      <ChatPanel />
    </div>
  );
}
