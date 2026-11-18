import type {
  AdvancedRuleDefinition
} from "../AdvancedRuleDefinition";

export const StrokeRule:
AdvancedRuleDefinition = {

  id: "adult-stroke",

  priority: 10,

  causeId: 44,

  condition: {

    operator: "OR",

    conditions: [

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
