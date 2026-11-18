import type {
  AdvancedRuleDefinition
} from "./AdvancedRuleDefinition";

import type {
  SymptomVector
} from "../types";

import type {
  RuleEvaluationResult
} from "./RuleEvaluationResult";

import {
  evaluateCondition
} from "./ConditionEvaluator";

export function evaluateRules(
  rules: AdvancedRuleDefinition[],
  symptoms: SymptomVector
): RuleEvaluationResult {

  const orderedRules = [...rules]
    .sort(
      (a, b) =>
        a.priority - b.priority
    );

  for (const rule of orderedRules) {

    const matched =
      evaluateCondition(
        rule.condition,
        symptoms
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
