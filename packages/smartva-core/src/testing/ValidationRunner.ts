import type {
  TestCase
} from "./TestCase";

import type {
  ValidationResult
} from "./ValidationResult";

import {
  runRuleTest
} from "./RuleTestRunner";

export function validateRule(
  testCase: TestCase
): ValidationResult {

  const passed =
    runRuleTest(
      testCase
    );

  return {

    testName:
      testCase.name,

    expectedCauseId:
      testCase.expectedCauseId,

    actualCauseId:
      passed
        ? testCase.expectedCauseId
        : undefined,

    passed
  };
}
