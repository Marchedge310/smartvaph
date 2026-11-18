# TASK 008

Goal

Build SmartVA Tariff Engine foundation.

Requirements

TypeScript only.

Framework independent.

No UI.

Create:

src/tariff/

Files:

TariffScoreResult.ts

TariffScorer.ts

TariffCandidate.ts

index.ts

Behavior

Input:

- SymptomVector
- TariffMatrix

Output:

- Cause scores

Formula:

Cause Score =
sum(
tariff values for
all endorsed symptoms
)

Only positive symptoms
are evaluated.

No ranking yet.

No prediction yet.

No redistribution.

Support:

adult
child
neonate
