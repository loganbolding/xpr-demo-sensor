import { clamp, isValidReading, mgdlToMmol, MAX_GLUCOSE_MGDL, MIN_GLUCOSE_MGDL } from 'xpr-demo-core';

export type ProcessedReading = {
  mgdl: number;
  mmol: number;
  valid: boolean;
  timestamp: string;
};

export function processReading(rawMgdl: number, timestamp: Date): ProcessedReading {
  const valid = isValidReading(rawMgdl);
  const mgdl = clamp(rawMgdl, MIN_GLUCOSE_MGDL, MAX_GLUCOSE_MGDL);
  return { mgdl, mmol: mgdlToMmol(mgdl), valid, timestamp: timestamp.toISOString() };
}
