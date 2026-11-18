# TASK 019

Goal

Implement Adult Stroke Rule.

Source

Reverse engineered from SmartVA stroke.py

Cause ID

44

Conditions

Path 1

Stroke
AND
(
Paralysis Left
OR
Paralysis Right
)

Path 2

Diabetes
AND
Paralysis

Path 3

Pneumonia
AND
Paralysis

Requirements

TypeScript only.

No UI.

Register rule in runtime rule registry.

Use AdvancedRuleDefinition.
