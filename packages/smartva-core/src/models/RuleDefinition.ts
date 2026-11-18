export interface RuleDefinition {
  id: string;

  priority: number;

  causeId: number;

  requiredSymptoms: string[];
}
