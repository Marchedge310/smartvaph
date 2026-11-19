# TASK 021

Goal

Create Runtime Validation Framework.

Purpose

Every SmartVA rule must have:

- Source
- Positive test cases
- Negative test cases
- Expected outputs

No SmartVA rule may be implemented without validation data.

---

Validation Structure

tests/

adult/

child/

neonate/

---

Adult

tests/adult/

stroke/

road-traffic/

drowning/

fire/

falls/

poisoning/

suicide/

homicide/

other-injury/

---

For every rule:

positive-01.json

positive-02.json

negative-01.json

expected.md

---

Purpose

Prevent SmartVA PH from diverging from SmartVA-Analyze behavior.

---

Validation Rules

Every test case must document:

- Source file
- Cause ID
- Inputs
- Expected result

---

Future Goal

Allow automatic runtime verification.
