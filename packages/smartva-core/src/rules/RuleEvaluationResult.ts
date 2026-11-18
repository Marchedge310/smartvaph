export interface RuleEvaluationResult {
  matched: boolean;

  causeId?: number;

  ruleId?: string;
}
