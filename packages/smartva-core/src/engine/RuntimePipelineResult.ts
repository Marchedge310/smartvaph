import type {
  PredictionEngineResult
} from "./PredictionEngineResult";

import type {
  LikelihoodLevel
} from "../likelihood";

export interface RuntimePipelineResult {

  prediction:
    PredictionEngineResult;

  likelihood:
    LikelihoodLevel;
}
