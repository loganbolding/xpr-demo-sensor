---
itemId: reqs-sensor-glucose-trend
itemType: Requirement
Requirement type: Functional
---

# Glucose trend

## Overview

The system shall indicate whether glucose is rising, falling or stable between two consecutive readings.

## Acceptance criteria

1. The trend shall be rising when glucose increased by more than 10 mg/dL.
2. The trend shall be falling when glucose decreased by more than 10 mg/dL.
3. The trend shall be stable when glucose changed by 10 mg/dL or less.
