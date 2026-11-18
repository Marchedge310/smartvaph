import type {
  RankedCandidate
} from "../ranking";

export function selectTopCauses(
  candidates: RankedCandidate[]
): RankedCandidate[] {

  return [...candidates]
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, 3);
}
