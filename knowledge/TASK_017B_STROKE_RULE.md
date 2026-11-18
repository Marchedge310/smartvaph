# TASK 017B

Goal

Implement Adult Stroke Rule.

Source:

Reverse-engineered SmartVA stroke.py

Cause ID:

44

Rule Paths

Path 1

Stroke
AND
(
Left Paralysis
OR
Right Paralysis
)

Path 2

Diabetes
AND
Any Paralysis

Path 3

Pneumonia
AND
Any Paralysis

Requirements

TypeScript only.

No UI.

Create:

src/rules/adult/

StrokeRule.ts

Use advanced rule condition system.

Return cause 44.
