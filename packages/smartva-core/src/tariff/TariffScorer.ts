import type {
  SymptomVector
} from "../types";

import type {
  TariffMatrix
} from "../models";

import type {
  TariffCandidate
} from "./TariffCandidate";

import type {
  TariffScoreResult
} from "./TariffScoreResult";

export function scoreCauses(
  symptoms: SymptomVector,
  tariffs: TariffMatrix
): TariffScoreResult {

  const candidates:
  TariffCandidate[] = [];

  for (
    const causeId of
    Object.keys(tariffs)
  ) {

    let score = 0;

    const causeTariffs =
      tariffs[
        Number(causeId)
      ];

    for (
      const symptom
      of Object.keys(symptoms)
    ) {

      if (
        symptoms[symptom]
      ) {

        score +=
          causeTariffs[
            symptom
          ] ?? 0;
      }
    }

    candidates.push({
      causeId:
        Number(causeId),
      score
    });
  }

  return { candidates };
}
