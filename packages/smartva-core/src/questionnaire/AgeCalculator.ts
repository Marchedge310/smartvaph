import type { AgeCalculationResult } from "./AgeCalculationResult";

export function calculateAge(
  birthDate: Date,
  deathDate: Date
): AgeCalculationResult {
  const diff =
    deathDate.getTime() -
    birthDate.getTime();

  const totalDays =
    Math.floor(diff / 86400000);

  const years =
    Math.floor(totalDays / 365);

  const months =
    Math.floor(
      (totalDays % 365) / 30
    );

  const days =
    totalDays % 30;

  return {
    years,
    months,
    days
  };
}
