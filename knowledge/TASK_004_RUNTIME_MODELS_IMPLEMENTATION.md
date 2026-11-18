# TASK 004

Read:

SMARTVA_PH_MASTER_NOTEBOOK.md

SMARTVA_RUNTIME_SPEC_V1.md

SMARTVA_DATA_MODEL_V1.md

SMARTVA_CORE_INTERFACES_V1.md

TASK_003_RUNTIME_MODELS.md

Goal:

Implement SmartVA runtime model interfaces.

Create:

src/models/

Files:

TariffMatrix.ts

RuleDefinition.ts

CauseReductionMap.ts

RedistributionWeights.ts

RuntimeModel.ts

AdultModel.ts

ChildModel.ts

NeonateModel.ts

index.ts

Requirements:

TypeScript only.

No UI.

No framework dependencies.

No business logic.

Strict typing.

Design these interfaces to support:

Adult:
- Rules
- Restrictions
- Cause Reduction
- Redistribution

Child:
- Tariff
- Ranking
- Redistribution

Neonate:
- Tariff
- Ranking
- Redistribution

Use composition instead of inheritance whenever possible.

Do not implement scoring logic yet.

Only interfaces and type definitions.
