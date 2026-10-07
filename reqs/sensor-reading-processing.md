---
itemId: reqs-sensor-reading-processing
itemType: Requirement
Requirement type: Functional
---

# Sensor reading processing

## Overview

The system shall turn a raw sensor value into a processed reading that can be displayed and transmitted.

## Acceptance criteria

1. Each processed reading shall record whether the raw value was valid.
2. A raw value outside the measurable range shall be limited to the nearest range boundary.
3. Each processed reading shall include the glucose value in both mg/dL and mmol/L.
4. Each processed reading shall include the time it was taken, in ISO 8601 format.
