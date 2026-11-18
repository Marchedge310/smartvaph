import type {
  RankedCandidate
} from "../ranking";

export interface PredictionEngineResult {
  primaryCause: number;

  topThreeCauses: RankedCandidate[];

  ruleTriggered: boolean;
}
