import type { CauseRank } from "./CauseRank";

export interface PredictionResult {
  primaryCause: number;

  likelihood?: string;

  topThreeCauses: CauseRank[];

  ruleTriggered?: boolean;

  keySymptom?: string;
}
