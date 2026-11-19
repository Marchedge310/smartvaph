import type {
  AdvancedRuleDefinition
} from "../AdvancedRuleDefinition";

export const RoadTrafficRule:
AdvancedRuleDefinition = {

  id: "adult-road-traffic",

  priority: 1,

  causeId: 19,

  condition: {

    operator: "AND",

    conditions: [

      {
        symptom: "road_traffic_injury",
        expected: true
      }
    ]
  }
};
