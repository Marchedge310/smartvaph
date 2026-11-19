export interface ValidationResult {

  testName: string;

  expectedCauseId?: number;

  actualCauseId?: number;

  passed: boolean;
}
