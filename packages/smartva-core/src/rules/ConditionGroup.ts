import type { ConditionOperator }
from "./ConditionOperator";

import type { RuleCondition }
from "./RuleCondition";

export interface ConditionGroup {
  operator: ConditionOperator;

  conditions: Array<
    RuleCondition |
    ConditionGroup
  >;
}
