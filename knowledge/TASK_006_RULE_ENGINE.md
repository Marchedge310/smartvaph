# TASK 006

Goal:

Implement SmartVA Rule Engine foundation.

Requirements:

TypeScript only.

Framework independent.

No UI.

Create:

src/rules/

Files:

RuleEvaluationResult.ts

RuleEvaluator.ts

RuleRegistry.ts

index.ts

Behavior:

Rules are evaluated by priority.

First matching rule wins.

Adult-only for Version 1.

Inputs:

SymptomVector

Rules

Outputs:

RuleEvaluationResult

No actual stroke implementation yet.

Only engine infrastructure.

Prepare support for:

- Stroke
- Drowning
- Road Traffic
- Fire
- Falls
- Poisoning
- Homicide
- Suicide
- Other Injury
