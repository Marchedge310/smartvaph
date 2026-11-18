import type {
  RankedCandidate
} from "../ranking";

export interface PredictionEngineResult {
  primaryCause: number;

  primaryCauseName: string;

  topThreeCauses: RankedCandidate[];

  ruleTriggered: boolean;
}
