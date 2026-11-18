import type {
  SymptomVector,
  CauseScore
} from "../types";

import type {
  RuntimeModel
} from "../models";

import {
  evaluateRules,
  RuleRegistry
} from "../rules";

import {
  scoreCauses
} from "../tariff";

import {
  rankCauses
} from "../ranking";

import {
  buildPrediction
} from "./PredictionEngine";

import {
  determineLikelihood
} from "../likelihood";

import type {
  RuntimePipelineResult
} from "./RuntimePipelineResult";

export function executePipeline(
  model: RuntimeModel,
  symptoms: SymptomVector
): RuntimePipelineResult {

  const ruleResult =
    evaluateRules(
      model.rules ?? RuleRegistry,
      symptoms
    );

  const tariffResults =
    scoreCauses(
      symptoms,
      model.tariffs
    );

  const scores:
  CauseScore[] =
    tariffResults.candidates.map(
      candidate => ({
        causeId:
          candidate.causeId,
        score:
          candidate.score
      })
    );

  const ranked =
    rankCauses(
      scores,
      []
    );

  const prediction =
    buildPrediction(
      ruleResult,
      ranked.candidates
    );

  const likelihood =
    determineLikelihood(1);

  return {
    prediction,
    likelihood
  };
}
