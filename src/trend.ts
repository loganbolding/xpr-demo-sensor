import type { ProcessedReading } from './reading.ts';

export type Trend = 'rising' | 'falling' | 'stable';

const TREND_THRESHOLD_MGDL = 10;

export function computeTrend(previous: ProcessedReading, current: ProcessedReading): Trend {
  const delta = current.mgdl - previous.mgdl;
  if (delta > TREND_THRESHOLD_MGDL) return 'rising';
  if (delta < -TREND_THRESHOLD_MGDL) return 'falling';
  return 'stable';
}
