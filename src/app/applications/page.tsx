'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Timestamp } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';
import { isPrivateAppUser } from '@/lib/auth/private-access';
import {
  addApplicationEvent,
  createApplication,
  onApplicationEventsSnapshot,
  onApplicationsSnapshot,
  seedListenLabsApplication,
  updateApplication,
  type Application,
  type ApplicationAts,
  type ApplicationEvent,
  type ApplicationInput,
  type ApplicationPriority,
  type ApplicationStatus,
} from '@/lib/firebase/applications';
import { Badge, type BadgeVariant } from '@/components/ui/Badge';
import { Button, IconButton } from '@/components/ui/Button';

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  to_apply: 'To Apply',
  applied: 'Applied',
  waiting: 'Waiting',
  recruiter_screen: 'Recruiter',
  founder_or_hm: 'Founder / HM',
  portfolio_review: 'Portfolio',
  final: 'Final',
  offer: 'Offer',
  rejected: 'Rejected',
  withdrawn: 'Withdrawn',
  closed: 'Closed',
};

const BOARD_STATUSES: ApplicationStatus[] = [
  'to_apply',
  'applied',
  'waiting',
  'recruiter_screen',
  'founder_or_hm',
  'portfolio_review',
  'final',
  'offer',
  'closed',
];

const PRIORITIES: ApplicationPriority[] = ['P0', 'P1', 'P2', 'P3'];
const ATS_OPTIONS: ApplicationAts[] = ['ashby', 'greenhouse', 'lever', 'workable', 'other'];

interface ApplicationDraft {
  companyName: string;
  roleTitle: string;
  roleUrl: string;
  applicationUrl: string;
  ats: ApplicationAts;
  priority: ApplicationPriority;
  status: ApplicationStatus;
  plannedApplyAt: string;
  appliedAt: string;
  nextFollowUpAt: string;
  lastContactAt: string;
  source: 'manual' | 'aido' | 'gmail' | 'linkedin' | 'referral';
  location: string;
  contactName: string;
  contactEmail: string;
  notes: string;
}

const EMPTY_DRAFT: ApplicationDraft = {
  companyName: '',
  roleTitle: '',
  roleUrl: '',
  applicationUrl: '',
  ats: 'ashby' as ApplicationAts,
  priority: 'P1' as ApplicationPriority,
  status: 'to_apply' as ApplicationStatus,
  plannedApplyAt: '',
  appliedAt: '',
  nextFollowUpAt: '',
  lastContactAt: '',
  source: 'manual',
  location: 'San Francisco Bay Area',
  contactName: '',
  contactEmail: '',
  notes: '',
};

function statusVariant(status: ApplicationStatus): BadgeVariant {
  if (status === 'offer' || status === 'final' || status === 'founder_or_hm' || status === 'recruiter_screen') {
    return 'success';
  }
  if (status === 'waiting' || status === 'portfolio_review') return 'warning';
  if (status === 'applied' || status === 'to_apply') return 'accent';
  return 'default';
}

function priorityVariant(priority: ApplicationPriority): BadgeVariant {
  if (priority === 'P0') return 'success';
  if (priority === 'P1') return 'accent';
  if (priority === 'P2') return 'warning';
  return 'default';
}

function formatDate(timestamp?: Timestamp): string {
  if (!timestamp) return '-';
  return timestamp.toDate().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function timestampToInput(timestamp?: Timestamp): string {
  if (!timestamp) return '';
  return timestamp.toDate().toISOString().slice(0, 10);
}

function inputToTimestamp(value: string): Timestamp | undefined {
  if (!value) return undefined;
  return Timestamp.fromDate(new Date(`${value}T12:00:00`));
}

function buildApplicationInput(draft: ApplicationDraft): ApplicationInput {
  return {
    companyName: draft.companyName.trim(),
    roleTitle: draft.roleTitle.trim(),
    roleUrl: draft.roleUrl.trim(),
    applicationUrl: draft.applicationUrl.trim() || undefined,
    ats: draft.ats,
    priority: draft.priority,
    status: draft.status,
    plannedApplyAt: inputToTimestamp(draft.plannedApplyAt),
    appliedAt: inputToTimestamp(draft.appliedAt),
    nextFollowUpAt: inputToTimestamp(draft.nextFollowUpAt),
    lastContactAt: inputToTimestamp(draft.lastContactAt),
    source: draft.source,
    location: draft.location.trim() || undefined,
    contactName: draft.contactName.trim() || undefined,
    contactEmail: draft.contactEmail.trim() || undefined,
    notes: draft.notes.trim() || undefined,
    needsEmailReview: false,
  };
}

function applicationToDraft(application: Application): ApplicationDraft {
  return {
    companyName: application.companyName,
    roleTitle: application.roleTitle,
    roleUrl: application.roleUrl,
    applicationUrl: application.applicationUrl ?? '',
    ats: application.ats,
    priority: application.priority,
    status: application.status,
    plannedApplyAt: timestampToInput(application.plannedApplyAt),
    appliedAt: timestampToInput(application.appliedAt),
    nextFollowUpAt: timestampToInput(application.nextFollowUpAt),
    lastContactAt: timestampToInput(application.lastContactAt),
    source: application.source ?? 'manual',
    location: application.location ?? '',
    contactName: application.contactName ?? '',
    contactEmail: application.contactEmail ?? '',
    notes: application.notes ?? '',
  };
}

function TextInput({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-[var(--muted)] mb-1">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="w-full h-10 rounded-lg bg-[var(--card)] border border-[var(--border)] px-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
      />
    </label>
  );
}

function SelectInput<T extends string>({
  label,
  value,
  options,
  onChange,
  labels,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
  labels?: Record<string, string>;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-[var(--muted)] mb-1">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="w-full h-10 rounded-lg bg-[var(--card)] border border-[var(--border)] px-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {labels?.[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ApplicationForm({
  draft,
  setDraft,
  onSubmit,
  submitLabel,
  busy,
}: {
  draft: ApplicationDraft;
  setDraft: (draft: ApplicationDraft) => void;
  onSubmit: () => void;
  submitLabel: string;
  busy: boolean;
}) {
  const update = <K extends keyof ApplicationDraft>(key: K, value: ApplicationDraft[K]) => {
    setDraft({ ...draft, [key]: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextInput label="Company" value={draft.companyName} onChange={(value) => update('companyName', value)} required />
        <TextInput label="Role" value={draft.roleTitle} onChange={(value) => update('roleTitle', value)} required />
        <TextInput label="Role URL" value={draft.roleUrl} onChange={(value) => update('roleUrl', value)} required />
        <TextInput label="Application URL" value={draft.applicationUrl} onChange={(value) => update('applicationUrl', value)} />
        <SelectInput label="Status" value={draft.status} options={Object.keys(STATUS_LABELS) as ApplicationStatus[]} labels={STATUS_LABELS} onChange={(value) => update('status', value)} />
        <SelectInput label="Priority" value={draft.priority} options={PRIORITIES} onChange={(value) => update('priority', value)} />
        <SelectInput label="ATS" value={draft.ats} options={ATS_OPTIONS} onChange={(value) => update('ats', value)} />
        <TextInput label="Location" value={draft.location} onChange={(value) => update('location', value)} />
        <TextInput label="Planned apply date" type="date" value={draft.plannedApplyAt} onChange={(value) => update('plannedApplyAt', value)} />
        <TextInput label="Applied date" type="date" value={draft.appliedAt} onChange={(value) => update('appliedAt', value)} />
        <TextInput label="Next follow-up" type="date" value={draft.nextFollowUpAt} onChange={(value) => update('nextFollowUpAt', value)} />
        <TextInput label="Last contact" type="date" value={draft.lastContactAt} onChange={(value) => update('lastContactAt', value)} />
        <TextInput label="Contact name" value={draft.contactName} onChange={(value) => update('contactName', value)} />
        <TextInput label="Contact email" type="email" value={draft.contactEmail} onChange={(value) => update('contactEmail', value)} />
      </div>
      <label className="block">
        <span className="block text-xs text-[var(--muted)] mb-1">Notes</span>
        <textarea
          value={draft.notes}
          onChange={(event) => update('notes', event.target.value)}
          rows={5}
          className="w-full rounded-lg bg-[var(--card)] border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] resize-y"
        />
      </label>
      <Button onClick={onSubmit} disabled={busy || !draft.companyName.trim() || !draft.roleTitle.trim() || !draft.roleUrl.trim()}>
        {submitLabel}
      </Button>
    </div>
  );
}

function SummaryCards({ applications }: { applications: readonly Application[] }) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const active = applications.filter(app => !['rejected', 'withdrawn', 'closed'].includes(app.status)).length;
  const interviews = applications.filter(app => ['recruiter_screen', 'founder_or_hm', 'portfolio_review', 'final'].includes(app.status)).length;
  const followUpsDue = applications.filter(app => app.nextFollowUpAt && app.nextFollowUpAt.toDate() <= today).length;
  const needsEmailReview = applications.filter(app => app.needsEmailReview).length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {[
        ['Active', active],
        ['Applied', applications.filter(app => app.status === 'applied').length],
        ['Interviews', interviews],
        ['Follow-ups due', followUpsDue],
      ].map(([label, value]) => (
        <div key={label} className="border border-[var(--border)] rounded-lg bg-[var(--card)] p-4">
          <div className="text-xs text-[var(--muted)]">{label}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
        </div>
      ))}
      {needsEmailReview > 0 && (
        <div className="col-span-2 lg:col-span-4 border border-[var(--warning)] rounded-lg bg-[var(--card)] p-3 text-sm text-[var(--warning)]">
          {needsEmailReview} application needs email review.
        </div>
      )}
    </div>
  );
}

function ApplicationTable({
  applications,
  onSelect,
}: {
  applications: readonly Application[];
  onSelect: (application: Application) => void;
}) {
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-x-auto">
      <table className="w-full min-w-[900px] text-sm">
        <thead className="bg-[var(--card)] text-xs text-[var(--muted)]">
          <tr>
            <th className="text-left font-medium px-4 py-3">Company</th>
            <th className="text-left font-medium px-4 py-3">Role</th>
            <th className="text-left font-medium px-4 py-3">Priority</th>
            <th className="text-left font-medium px-4 py-3">Status</th>
            <th className="text-left font-medium px-4 py-3">Applied</th>
            <th className="text-left font-medium px-4 py-3">Last contact</th>
            <th className="text-left font-medium px-4 py-3">Follow-up</th>
            <th className="text-left font-medium px-4 py-3">ATS</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr
              key={application.id}
              onClick={() => onSelect(application)}
              className="border-t border-[var(--border)] cursor-pointer hover:bg-[var(--card-hover)]"
            >
              <td className="px-4 py-3 font-medium">{application.companyName}</td>
              <td className="px-4 py-3 text-[var(--muted)]">{application.roleTitle}</td>
              <td className="px-4 py-3"><Badge variant={priorityVariant(application.priority)}>{application.priority}</Badge></td>
              <td className="px-4 py-3"><Badge variant={statusVariant(application.status)}>{STATUS_LABELS[application.status]}</Badge></td>
              <td className="px-4 py-3 text-[var(--muted)]">{formatDate(application.appliedAt)}</td>
              <td className="px-4 py-3 text-[var(--muted)]">{formatDate(application.lastContactAt)}</td>
              <td className="px-4 py-3 text-[var(--muted)]">{formatDate(application.nextFollowUpAt)}</td>
              <td className="px-4 py-3 text-[var(--muted)]">{application.ats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BoardView({
  applications,
  onSelect,
}: {
  applications: readonly Application[];
  onSelect: (application: Application) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3">
      {BOARD_STATUSES.map((status) => {
        const columnApps = applications.filter(app => app.status === status || (status === 'closed' && ['rejected', 'withdrawn'].includes(app.status)));
        return (
          <section key={status} className="border border-[var(--border)] rounded-lg bg-[var(--card)] min-h-[180px]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border)]">
              <h2 className="text-xs font-medium text-[var(--muted)]">{STATUS_LABELS[status]}</h2>
              <span className="text-xs text-[var(--muted-dim)]">{columnApps.length}</span>
            </div>
            <div className="p-2 space-y-2">
              {columnApps.map((application) => (
                <button
                  key={application.id}
                  onClick={() => onSelect(application)}
                  className="w-full text-left border border-[var(--border)] rounded-lg p-3 hover:border-[var(--muted)] bg-[var(--background)]"
                >
                  <div className="font-medium text-sm">{application.companyName}</div>
                  <div className="text-xs text-[var(--muted)] mt-1 line-clamp-2">{application.roleTitle}</div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant={priorityVariant(application.priority)}>{application.priority}</Badge>
                    <span className="text-xs text-[var(--muted)]">{application.ats}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function DetailDrawer({
  application,
  events,
  draft,
  setDraft,
  onClose,
  onSave,
  onStatusChange,
  busy,
}: {
  application: Application;
  events: readonly ApplicationEvent[];
  draft: ApplicationDraft;
  setDraft: (draft: ApplicationDraft) => void;
  onClose: () => void;
  onSave: () => void;
  onStatusChange: (status: ApplicationStatus) => void;
  busy: boolean;
}) {
  const [note, setNote] = useState('');

  const handleAddNote = async () => {
    if (!note.trim()) return;
    await addApplicationEvent(application.ownerUid, application.id, {
      type: 'note_added',
      title: 'Note added',
      body: note.trim(),
      occurredAt: Timestamp.now(),
    });
    setNote('');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[70] animate-fadeIn" onClick={onClose} />
      <aside className="fixed right-0 top-0 bottom-0 z-[80] w-full sm:w-[560px] bg-[var(--background)] border-l border-[var(--border)] overflow-y-auto animate-slideInRight">
        <div className="sticky top-0 bg-[var(--background)] border-b border-[var(--border)] p-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={priorityVariant(application.priority)}>{application.priority}</Badge>
              <Badge variant={statusVariant(application.status)}>{STATUS_LABELS[application.status]}</Badge>
            </div>
            <h2 className="text-xl font-semibold">{application.companyName}</h2>
            <p className="text-sm text-[var(--muted)]">{application.roleTitle}</p>
          </div>
          <IconButton label="Close application detail" onClick={onClose} size="sm">
            <span aria-hidden>×</span>
          </IconButton>
        </div>

        <div className="p-4 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Link href={application.roleUrl} target="_blank" className="text-xs text-[var(--accent-light)] hover:underline">
              Role URL
            </Link>
            {application.applicationUrl && (
              <Link href={application.applicationUrl} target="_blank" className="text-xs text-[var(--accent-light)] hover:underline">
                Application URL
              </Link>
            )}
          </div>

          <div className="border border-[var(--border)] rounded-lg p-4">
            <h3 className="text-sm font-medium mb-3">Quick status</h3>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(STATUS_LABELS) as ApplicationStatus[]).map((status) => (
                <button
                  key={status}
                  onClick={() => onStatusChange(status)}
                  className={`text-left rounded-lg border px-3 py-2 text-xs transition-colors ${
                    application.status === status
                      ? 'border-[var(--accent)] text-[var(--foreground)]'
                      : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
                  }`}
                >
                  {STATUS_LABELS[status]}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-4">
            <h3 className="text-sm font-medium mb-3">Application details</h3>
            <ApplicationForm draft={draft} setDraft={setDraft} onSubmit={onSave} submitLabel="Save changes" busy={busy} />
          </div>

          <div className="border border-[var(--border)] rounded-lg p-4">
            <h3 className="text-sm font-medium mb-3">Timeline</h3>
            <div className="space-y-3 mb-4">
              {events.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">No events yet.</p>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="border-l border-[var(--border)] pl-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-medium">{event.title}</div>
                      <div className="text-xs text-[var(--muted)]">{formatDate(event.occurredAt)}</div>
                    </div>
                    {event.body && <p className="text-sm text-[var(--muted)] mt-1">{event.body}</p>}
                    {event.subject && <p className="text-xs text-[var(--muted-dim)] mt-1">{event.subject}</p>}
                  </div>
                ))
              )}
            </div>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Add a note, email summary, or interview update..."
              rows={3}
              className="w-full rounded-lg bg-[var(--card)] border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)] resize-y"
            />
            <Button className="mt-2" variant="secondary" size="sm" onClick={handleAddNote} disabled={!note.trim()}>
              Add note
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function ApplicationsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [applications, setApplications] = useState<readonly Application[]>([]);
  const [events, setEvents] = useState<readonly ApplicationEvent[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState('');
  const [view, setView] = useState<'table' | 'board'>('table');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<ApplicationPriority | 'all'>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [draft, setDraft] = useState<ApplicationDraft>(EMPTY_DRAFT);
  const [selected, setSelected] = useState<Application | null>(null);
  const [selectedDraft, setSelectedDraft] = useState<ApplicationDraft>(EMPTY_DRAFT);
  const [busy, setBusy] = useState(false);

  const allowed = isPrivateAppUser(user?.email);

  useEffect(() => {
    if (loading) return;
    if (!user || !allowed) {
      router.push('/');
    }
  }, [allowed, loading, router, user]);

  useEffect(() => {
    if (!user || !allowed) return;
    let unsubscribe: (() => void) | undefined;
    setDataLoading(true);
    void onApplicationsSnapshot(
      user.uid,
      (items) => {
        setApplications(items);
        setDataLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError.message);
        setDataLoading(false);
      }
    ).then((unsub) => {
      unsubscribe = unsub;
    });

    return () => unsubscribe?.();
  }, [allowed, user]);

  useEffect(() => {
    if (!selected) {
      setEvents([]);
      return;
    }

    let unsubscribe: (() => void) | undefined;
    void onApplicationEventsSnapshot(
      selected.ownerUid,
      selected.id,
      setEvents,
      (snapshotError) => setError(snapshotError.message)
    ).then((unsub) => {
      unsubscribe = unsub;
    });

    return () => unsubscribe?.();
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const latest = applications.find(app => app.id === selected.id);
    if (latest) {
      setSelected(latest);
      setSelectedDraft(applicationToDraft(latest));
    }
  }, [applications, selected]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();
    return applications.filter((application) => {
      const matchesSearch =
        !query ||
        application.companyName.toLowerCase().includes(query) ||
        application.roleTitle.toLowerCase().includes(query) ||
        application.notes?.toLowerCase().includes(query);
      const matchesStatus = statusFilter === 'all' || application.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || application.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [applications, priorityFilter, search, statusFilter]);

  const hasListenLabs = applications.some(app => app.id === 'listen-labs-founding-product-designer');

  const openDetail = useCallback((application: Application) => {
    setSelected(application);
    setSelectedDraft(applicationToDraft(application));
  }, []);

  const handleCreate = async () => {
    if (!user?.email) return;
    setBusy(true);
    setError('');
    try {
      await createApplication(user.uid, user.email, buildApplicationInput(draft));
      setDraft(EMPTY_DRAFT);
      setShowAddForm(false);
    } catch (createError) {
      setError(createError instanceof Error ? createError.message : 'Failed to create application.');
    } finally {
      setBusy(false);
    }
  };

  const handleSaveSelected = async () => {
    if (!selected) return;
    setBusy(true);
    setError('');
    try {
      await updateApplication(selected.ownerUid, selected.id, buildApplicationInput(selectedDraft));
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Failed to save application.');
    } finally {
      setBusy(false);
    }
  };

  const handleStatusChange = async (status: ApplicationStatus) => {
    if (!selected || selected.status === status) return;
    setBusy(true);
    setError('');
    try {
      await updateApplication(selected.ownerUid, selected.id, {
        status,
      });
      await addApplicationEvent(selected.ownerUid, selected.id, {
        type: 'status_changed',
        title: `Moved to ${STATUS_LABELS[status]}`,
        previousStatus: selected.status,
        nextStatus: status,
        occurredAt: Timestamp.now(),
      });
    } catch (statusError) {
      setError(statusError instanceof Error ? statusError.message : 'Failed to update status.');
    } finally {
      setBusy(false);
    }
  };

  const handleSeedListenLabs = async () => {
    if (!user?.email) return;
    setBusy(true);
    setError('');
    try {
      await seedListenLabsApplication(user.uid, user.email);
    } catch (seedError) {
      setError(seedError instanceof Error ? seedError.message : 'Failed to seed Listen Labs.');
    } finally {
      setBusy(false);
    }
  };

  if (loading || !user || !allowed) return null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-4 inline-block">
          &larr; Back
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-semibold">Applications</h1>
            <p className="text-sm text-[var(--muted)] mt-1">
              Private tracker for applications, follow-ups, interviews, and recruiting email signals.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {!hasListenLabs && (
              <Button variant="secondary" size="sm" onClick={handleSeedListenLabs} disabled={busy}>
                Add Listen Labs
              </Button>
            )}
            <Button variant="secondary" size="sm" onClick={() => setShowAddForm(value => !value)}>
              {showAddForm ? 'Close form' : 'Add Application'}
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setError('Use Codex Gmail MCP daily check, then paste or add matched email summaries into the timeline.');
              }}
            >
              Check Gmail
            </Button>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 border border-[var(--warning)] rounded-lg bg-[var(--card)] p-3 text-sm text-[var(--warning)]">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <SummaryCards applications={applications} />

        {showAddForm && (
          <div className="border border-[var(--border)] rounded-lg bg-[var(--card)] p-4">
            <h2 className="text-lg font-semibold mb-3">Add application</h2>
            <ApplicationForm draft={draft} setDraft={setDraft} onSubmit={handleCreate} submitLabel="Create application" busy={busy} />
          </div>
        )}

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search..."
              className="h-9 w-[220px] rounded-full bg-[var(--card)] border border-[var(--border)] px-4 text-sm outline-none focus:border-[var(--accent)]"
            />
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as ApplicationStatus | 'all')}
              className="h-9 rounded-full bg-[var(--card)] border border-[var(--border)] px-3 text-sm text-[var(--foreground)] outline-none"
            >
              <option value="all">All statuses</option>
              {(Object.keys(STATUS_LABELS) as ApplicationStatus[]).map(status => (
                <option key={status} value={status}>{STATUS_LABELS[status]}</option>
              ))}
            </select>
            <select
              value={priorityFilter}
              onChange={(event) => setPriorityFilter(event.target.value as ApplicationPriority | 'all')}
              className="h-9 rounded-full bg-[var(--card)] border border-[var(--border)] px-3 text-sm text-[var(--foreground)] outline-none"
            >
              <option value="all">All priorities</option>
              {PRIORITIES.map(priority => <option key={priority} value={priority}>{priority}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--card)]">
            {(['table', 'board'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setView(mode)}
                className="px-3 py-1.5 text-xs rounded-md transition-colors"
                style={{
                  background: view === mode ? 'var(--accent)' : 'transparent',
                  color: view === mode ? 'white' : 'var(--muted)',
                }}
              >
                {mode === 'table' ? 'Table' : 'Board'}
              </button>
            ))}
          </div>
        </div>

        {dataLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-[var(--muted)] text-sm">Loading applications...</div>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="border border-[var(--border)] rounded-lg bg-[var(--card)] p-8 text-center">
            <h2 className="text-lg font-semibold">No applications yet</h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Add Listen Labs or create the first application manually.
            </p>
          </div>
        ) : view === 'table' ? (
          <ApplicationTable applications={filteredApplications} onSelect={openDetail} />
        ) : (
          <BoardView applications={filteredApplications} onSelect={openDetail} />
        )}
      </div>

      {selected && (
        <DetailDrawer
          application={selected}
          events={events}
          draft={selectedDraft}
          setDraft={setSelectedDraft}
          onClose={() => setSelected(null)}
          onSave={handleSaveSelected}
          onStatusChange={handleStatusChange}
          busy={busy}
        />
      )}
    </div>
  );
}
