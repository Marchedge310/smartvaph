import type {
  CauseScore
} from "../types";

import type {
  RankingReference
} from "./RankingReference";

import type {
  RankedCandidate
} from "./RankedCandidate";

import type {
  RankingResult
} from "./RankingResult";

export function rankCauses(
  scores: CauseScore[],
  references: RankingReference[]
): RankingResult {

  const candidates:
  RankedCandidate[] =
    scores.map(score => ({

      causeId:
        score.causeId,

      score:
        score.score,

      rank:
        score.score

    }));

  candidates.sort(
    (a, b) =>
      b.score - a.score
  );

  return {
    candidates
  };
}
