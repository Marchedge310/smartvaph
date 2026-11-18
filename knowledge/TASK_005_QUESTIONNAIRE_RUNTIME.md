# TASK 005

Goal:

Implement questionnaire runtime foundation.

Create:

src/questionnaire/

Files:

AgeCalculationResult.ts

AgeCalculator.ts

ModuleRouter.ts

index.ts

Requirements:

TypeScript only.

No UI.

Framework independent.

---

AgeCalculator

Inputs:

- Birth Date
- Death Date

Outputs:

- years
- months
- days

Validation:

- Birth date cannot be after death date.
- Missing values should be handled.

---

ModuleRouter

Inputs:

AgeCalculationResult

Outputs:

adult

child

neonate

Rules:

0–27 days
→ neonate

28 days–14 years
→ child

15+ years
→ adult

Support fallback age entry if birth date is unknown.

---

Create barrel exports.

No database.

No browser APIs.
