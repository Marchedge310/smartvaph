import type {
  LikelihoodLevel
} from "./LikelihoodLevel";

export function determineLikelihood(
  rank: number
): LikelihoodLevel {

  if (rank <= 1) {
    return "Very Likely";
  }

  if (rank <= 3) {
    return "Likely";
  }

  if (rank <= 5) {
    return "Somewhat Likely";
  }

  return "Possible";
}
