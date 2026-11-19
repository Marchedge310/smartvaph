import type {
  AdvancedRuleDefinition
} from "../AdvancedRuleDefinition";

import {
  AdultRulePriorities
} from "./AdultRulePriorities";

export const StrokeRule:
AdvancedRuleDefinition = {

  id: "adult-stroke",

  priority:
    AdultRulePriorities.STROKE,

  causeId: 44,

  condition: {

    operator: "OR",

    conditions: [

      // Path 1
      // Stroke AND
      // (Left Paralysis OR Right Paralysis)

      {
        operator: "AND",

        conditions: [

          {
            symptom: "stroke",
            expected: true
          },

          {
            operator: "OR",

            conditions: [

              {
                symptom:
                  "paralysis_left",

                expected: true
              },

              {
                symptom:
                  "paralysis_right",

                expected: true
              }
            ]
          }
        ]
      },

      // Path 2
      // Diabetes AND Paralysis

      {
        operator: "AND",

        conditions: [

          {
            symptom:
              "diabetes",

            expected: true
          },

          {
            symptom:
              "paralysis",

            expected: true
          }
        ]
      },

      // Path 3
      // Pneumonia AND Paralysis

      {
        operator: "AND",

        conditions: [

          {
            symptom:
              "pneumonia",

            expected: true
          },

          {
            symptom:
              "paralysis",

            expected: true
          }
        ]
      }
    ]
  }
};
