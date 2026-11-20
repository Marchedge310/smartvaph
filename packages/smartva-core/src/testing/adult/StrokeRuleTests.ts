import type {
  TestCase
} from "../TestCase";

export const StrokeRuleTests:
TestCase[] = [

  {
    name:
      "stroke-positive-01",

    symptoms: {
      stroke: true,
      paralysis_left: true
    },

    expectedCauseId: 44
  },

  {
    name:
      "stroke-positive-02",

    symptoms: {
      diabetes: true,
      paralysis: true
    },

    expectedCauseId: 44
  },

  {
    name:
      "stroke-positive-03",

    symptoms: {
      pneumonia: true,
      paralysis: true
    },

    expectedCauseId: 44
  },

  {
    name:
      "stroke-negative-01",

    symptoms: {
      stroke: true
    }
  }
];
