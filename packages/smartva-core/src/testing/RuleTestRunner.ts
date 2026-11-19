import {
  evaluateRules,
  RuleRegistry
} from "../rules";

import type {
  TestCase
} from "./TestCase";

export function runRuleTest(
  testCase: TestCase
): boolean {

  const result =
    evaluateRules(
      RuleRegistry,
      testCase.symptoms
    );

  return (
    result.causeId ===
    testCase.expectedCauseId
  );
}
