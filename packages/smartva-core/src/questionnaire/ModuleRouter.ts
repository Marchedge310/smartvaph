import type { AgeCalculationResult }
from "./AgeCalculationResult";

export type ModuleRoute =
  | "adult"
  | "child"
  | "neonate";

export function determineModule(
  age: AgeCalculationResult
): ModuleRoute {

  if (
    age.years === 0 &&
    age.months === 0 &&
    age.days <= 27
  ) {
    return "neonate";
  }

  if (
    age.years < 15
  ) {
    return "child";
  }

  return "adult";
}
