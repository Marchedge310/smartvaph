import type {
  ValidationResult
} from "./ValidationResult";

export interface RuleValidationReport {

  total: number;

  passed: number;

  failed: number;

  results:
    ValidationResult[];
}
