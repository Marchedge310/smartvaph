import type {
  AdvancedRuleDefinition
} from "../AdvancedRuleDefinition";

import {
  AdultRulePriorities
} from "./AdultRulePriorities";

export const DrowningRule:
AdvancedRuleDefinition = {

  id: "adult-drowning",

  priority:
    AdultRulePriorities.DROWNING,

  causeId: 4,

  condition: {

    operator: "AND",

    conditions: [

      {
        symptom:
          "drowning",

        expected: true
      }
    ]
  }
};
