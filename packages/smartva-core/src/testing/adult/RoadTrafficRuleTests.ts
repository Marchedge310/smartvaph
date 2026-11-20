import type {
  TestCase
} from "../TestCase";

export const RoadTrafficRuleTests:
TestCase[] = [

  {
    name:
      "road-traffic-positive-01",

    symptoms: {
      road_traffic_injury: true
    },

    expectedCauseId: 19
  },

  {
    name:
      "road-traffic-negative-01",

    symptoms: {
      road_traffic_injury: false
    }
  }
];
