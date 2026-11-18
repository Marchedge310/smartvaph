import {
  resolveAdultCause
} from "../causes";

import type {
  RuleEvaluationResult
} from "../rules";

import type {
  RankedCandidate
} from "../ranking";

import type {
  PredictionEngineResult
} from "./PredictionEngineResult";

import {
  selectTopCauses
} from "./TopCauseSelector";

export function buildPrediction(
  ruleResult: RuleEvaluationResult,
  rankedCandidates: RankedCandidate[]
): PredictionEngineResult {

  const topThree =
    selectTopCauses(
      rankedCandidates
    );

  if (
    ruleResult.matched &&
    ruleResult.causeId
  ) {

    const cause =
      resolveAdultCause(
        ruleResult.causeId
      );

    return {
      primaryCause:
        cause.id,

      primaryCauseName:
        cause.name,

      topThreeCauses:
        topThree,

      ruleTriggered: true
    };
  }

  const cause =
    resolveAdultCause(
      topThree[0].causeId
    );

  return {
    primaryCause:
      cause.id,

    primaryCauseName:
      cause.name,

    topThreeCauses:
      topThree,

    ruleTriggered: false
  };
}
