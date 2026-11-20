import type {
  TestCase
} from "./TestCase";

import type {
  RuleValidationReport
} from "./RuleValidationReport";

import {
  validateRule
} from "./ValidationRunner";

export function runValidationSuite(
  tests: TestCase[]
): RuleValidationReport {

  const results =
    tests.map(
      validateRule
    );

  const passed =
    results.filter(
      result =>
        result.passed
    ).length;

  return {

    total:
      results.length,

    passed,

    failed:
      results.length - passed,

    results
  };
}
