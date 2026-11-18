import type {
  RuleEvaluationResult
} from "../rules";

import type {
  RankedCandidate
} from "../ranking";

import type {
  PredictionEngineResult
} from "./PredictionEngineResult";

import { selectTopCauses }
from "./TopCauseSelector";

export function buildPrediction(
  ruleResult: RuleEvaluationResult,
  rankedCandidates: RankedCandidate[]
): PredictionEngineResult {

  if (
    ruleResult.matched &&
    ruleResult.causeId
  ) {

    return {
      primaryCause:
        ruleResult.causeId,

      topThreeCauses:
        selectTopCauses(
          rankedCandidates
        ),

      ruleTriggered: true
    };
  }

  const topThree =
    selectTopCauses(
      rankedCandidates
    );

  return {
    primaryCause:
      topThree[0].causeId,

    topThreeCauses:
      topThree,

    ruleTriggered: false
  };
}
