export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">✅ Test Page Works!</h1>
      <p>If you see this, Next.js routing is working.</p>
      <div className="mt-8">
        <a href="/test-typography" className="text-blue-500 underline">
          Go to Typography Test
        </a>
      </div>
    </div>
  );
}
