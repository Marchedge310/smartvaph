import type { ConditionGroup }
from "./ConditionGroup";

export interface AdvancedRuleDefinition {
  id: string;

  priority: number;

  causeId: number;

  condition: ConditionGroup;
}
