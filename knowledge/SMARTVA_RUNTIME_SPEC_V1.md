# SmartVA Runtime Specification V1

## Purpose

Framework-independent runtime engine implementing SmartVA-compatible behavior.

No UI.

No Vue.

No browser-specific code.

---

## Supported Models

### Adult

Features:

- Rules Engine
- Tariff Scoring
- Ranking
- Cause Reduction
- Redistribution

### Child

Features:

- Tariff Scoring
- Ranking
- Redistribution

No rules engine.

### Neonate

Features:

- Tariff Scoring
- Ranking
- Redistribution

No rules engine.

---

## Runtime Flow

Questionnaire Responses
↓
Question Mapping
↓
Feature Engineering
↓
Symptom Vector
↓
Rule Engine (Adult only)
↓
Tariff Scores
↓
Ranking
↓
Prediction
↓
Likelihood
↓
Cause Reduction
↓
Redistribution (when needed)

---

## Core Modules

questionnaire

Responsibilities:

- age calculation
- routing
- derived variables

---

symptoms

Responsibilities:

- symptom generation
- symptom vector creation

---

rules

Adult only.

Supports:

- Stroke
- Road Traffic Injury
- Drowning
- Falls
- Fire
- Poisoning
- Homicide
- Suicide
- Other Injury

Priority:

Rule Cause > Tariff Cause

---

tariff

Responsibilities:

score =
sum(positive tariff weights)

---

ranking

Responsibilities:

Convert scores into ranks using validated reference distributions.

---

likelihood

Convert rank into:

- Very Likely
- Likely
- Somewhat Likely
- Possible

---

causes

Adult:

46 → 34 reduction

Child:

Identity

Neonate:

Identity

---

redistribution

Handle:

Undetermined cases

Using:

- country
- age
- sex
- questionnaire type
- hce status

weights

---

## Validation Goal

Target:

95%+ agreement with SmartVA-Analyze.

Comparison:

- primary cause
- top 3 causes
- likelihood
