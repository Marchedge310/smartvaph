# TASK 003

Read:

SMARTVA_PH_MASTER_NOTEBOOK.md

SMARTVA_RUNTIME_SPEC_V1.md

SMARTVA_DATA_MODEL_V1.md

Goal:

Create SmartVA runtime model definitions.

Requirements:

TypeScript only.

No UI.

No browser APIs.

No business logic.

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

Requirements:

TariffMatrix

Represents:

cause → symptom → tariff score

RuleDefinition

Represents:

rule id
priority
cause id
conditions

CauseReductionMap

Represents:

46 → 34 mappings

RedistributionWeights

Represents:

country
age
sex
questionnaire
hce

RuntimeModel

Represents a complete SmartVA model.

AdultModel

Supports:

rules
cause reduction
restrictions

ChildModel

Supports:

tariff
ranking

NeonateModel

Supports:

tariff
ranking

Create:

src/models/index.ts

Export everything.
