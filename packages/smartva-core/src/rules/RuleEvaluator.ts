import type { RuleDefinition } from "../models";
import type { SymptomVector } from "../types";
import type { RuleEvaluationResult }
from "./RuleEvaluationResult";

export function evaluateRules(
  rules: RuleDefinition[],
  symptoms: SymptomVector
): RuleEvaluationResult {

  const orderedRules =
    [...rules].sort(
      (a, b) =>
        a.priority - b.priority
    );

  for (const rule of orderedRules) {

    const matched =
      rule.requiredSymptoms.every(
        symptom => symptoms[symptom]
      );

    if (matched) {

      return {
        matched: true,
        causeId: rule.causeId,
        ruleId: rule.id
      };
    }
  }

  return {
    matched: false
  };
}
