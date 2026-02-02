'use client';

import type { DailyStats } from '@/lib/firebase/visitors';
import {
  computeTrafficSources,
  computeDeviceBreakdown,
  computeBrowserBreakdown,
} from '@/lib/analytics/queries';
import { DonutChart } from '@/components/analytics/charts';

interface AcquisitionBreakdownProps {
  readonly dailyStats: readonly DailyStats[];
}

export function AcquisitionBreakdown({ dailyStats }: AcquisitionBreakdownProps) {
  const trafficSources = computeTrafficSources([...dailyStats]);
  const devices = computeDeviceBreakdown([...dailyStats]);
  const browsers = computeBrowserBreakdown([...dailyStats]);

  const hasTraffic = trafficSources.length > 0;
  const hasDevices = devices.length > 0;
  const hasBrowsers = browsers.length > 0;

  if (!hasTraffic && !hasDevices && !hasBrowsers) {
    return (
      <section>
        <h2 className="text-lg font-semibold mb-3">Acquisition</h2>
        <div className="card p-5 text-center text-[var(--muted)] text-sm">
          Acquisition data will appear as visitors arrive
        </div>
      </section>
    );
  }

  const totalTraffic = trafficSources.reduce((s, d) => s + d.value, 0);
  const totalDevices = devices.reduce((s, d) => s + d.value, 0);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Acquisition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Traffic Sources */}
        <div className="card p-5">
          <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Traffic Sources</h3>
          {hasTraffic ? (
            <DonutChart
              data={trafficSources}
              size={180}
              centerValue={totalTraffic}
              centerLabel="total"
            />
          ) : (
            <div className="text-xs text-[var(--muted)] text-center py-4">No data</div>
          )}
        </div>

        {/* Device Types */}
        <div className="card p-5">
          <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Devices</h3>
          {hasDevices ? (
            <DonutChart
              data={devices}
              size={180}
              centerValue={totalDevices}
              centerLabel="sessions"
            />
          ) : (
            <div className="text-xs text-[var(--muted)] text-center py-4">No data</div>
          )}
        </div>

        {/* Browsers */}
        <div className="card p-5">
          <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Browsers</h3>
          {hasBrowsers ? (
            <DonutChart data={browsers} size={180} />
          ) : (
            <div className="text-xs text-[var(--muted)] text-center py-4">No data</div>
          )}
        </div>
      </div>
    </section>
  );
}
