'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { BadgeVariant } from '@/design/tokens';
import {
  createCompanyRequest,
  getCompanyRequests,
  type CompanyRequest,
  type RequestStatus,
} from '@/lib/firebase/company-requests';

const STATUS_BADGE: Record<RequestStatus, { variant: BadgeVariant; label: string }> = {
  pending: { variant: 'default', label: 'Pending' },
  researching: { variant: 'accent', label: 'Researching' },
  completed: { variant: 'success', label: 'Completed' },
  failed: { variant: 'warning', label: 'Failed' },
};

function formatDate(timestamp: { toDate?: () => Date } | undefined): string {
  if (!timestamp?.toDate) return '-';
  const date = timestamp.toDate();
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function RequestsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [requests, setRequests] = useState<readonly CompanyRequest[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [formData, setFormData] = useState({ companyName: '', websiteUrl: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user || user.email !== 'ilwonyoon@gmail.com') {
      router.push('/');
    }
  }, [user, loading, router]);

  const loadRequests = useCallback(async () => {
    setDataLoading(true);
    try {
      const data = await getCompanyRequests();
      setRequests(data);
    } catch (error) {
      console.error('Failed to load requests:', error);
    } finally {
      setDataLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user || user.email !== 'ilwonyoon@gmail.com') return;
    void loadRequests();
  }, [user, loadRequests]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !user?.email) return;

    setSubmitting(true);
    setMessage(null);

    const name = formData.companyName;

    try {
      await createCompanyRequest(
        name,
        formData.websiteUrl || undefined,
        user.email
      );
      setFormData({ companyName: '', websiteUrl: '' });
      setMessage({ type: 'success', text: `"${name}" added to research queue.` });
      await loadRequests();
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Failed to submit request:', error);
      setMessage({ type: 'error', text: 'Failed to submit request.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || !user || user.email !== 'ilwonyoon@gmail.com') {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-4 inline-block"
        >
          &larr; Back
        </Link>
        <h1 className="text-3xl font-semibold">Requests</h1>
        <p className="text-sm text-[var(--muted)] mt-1">
          Submit company names to auto-research
        </p>
      </div>

      {/* Submit Form */}
      <form onSubmit={handleSubmit} className="card p-5 mb-8">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1.5">Company Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Anthropic"
              required
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">
              Website URL <span className="text-[var(--muted)] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              placeholder="https://anthropic.com (optional)"
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={submitting || !formData.companyName.trim()}
          >
            {submitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>

        {message && (
          <p
            className="mt-3 text-sm"
            style={{ color: message.type === 'success' ? 'var(--success)' : 'var(--warning)' }}
          >
            {message.text}
          </p>
        )}
      </form>

      {/* Request List */}
      <div>
        <h2 className="section-title mb-4">Past Requests</h2>

        {dataLoading ? (
          <div className="text-sm text-[var(--muted)] py-8 text-center">Loading...</div>
        ) : requests.length === 0 ? (
          <div className="text-sm text-[var(--muted)] py-8 text-center">
            No requests yet. Submit a company above.
          </div>
        ) : (
          <div className="space-y-3">
            {requests.map((req) => {
              const badge = STATUS_BADGE[req.status];
              return (
                <div key={req.id} className="card p-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {req.status === 'completed' && req.companyId ? (
                        <Link
                          href={`/?company=${req.companyId}`}
                          className="font-medium text-[var(--accent-light)] hover:underline truncate"
                        >
                          {req.companyName}
                        </Link>
                      ) : (
                        <span className="font-medium truncate">{req.companyName}</span>
                      )}
                      <Badge variant={badge.variant}>{badge.label}</Badge>
                    </div>
                    <div className="text-xs text-[var(--muted)] mt-1 flex items-center gap-3">
                      <span>{formatDate(req.createdAt)}</span>
                      {req.websiteUrl && (
                        <a
                          href={req.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-light)] hover:underline truncate"
                        >
                          {req.websiteUrl}
                        </a>
                      )}
                    </div>
                    {req.status === 'failed' && req.errorMessage && (
                      <p className="text-xs mt-1" style={{ color: 'var(--warning)' }}>
                        {req.errorMessage}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
