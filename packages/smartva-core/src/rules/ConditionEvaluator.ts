import type {
  ConditionGroup
} from "./ConditionGroup";

import type {
  RuleCondition
} from "./RuleCondition";

import type {
  SymptomVector
} from "../types";

export function evaluateCondition(
  group: ConditionGroup,
  symptoms: SymptomVector
): boolean {

  const evaluateNode = (
    node: RuleCondition | ConditionGroup
  ): boolean => {

    if ("symptom" in node) {
      return (
        symptoms[node.symptom] ===
        node.expected
      );
    }

    return evaluateCondition(
      node,
      symptoms
    );
  };

  switch (group.operator) {

    case "AND":
      return group.conditions.every(
        evaluateNode
      );

    case "OR":
      return group.conditions.some(
        evaluateNode
      );

    case "NOT":
      return !evaluateNode(
        group.conditions[0]
      );

    default:
      return false;
  }
}
