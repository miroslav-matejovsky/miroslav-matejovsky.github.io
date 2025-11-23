---
title: Complexity
description: How I see complexity in software architecture.
---

## Complexity is Inevitable

Software systems are inherently complex due to their nature and the environments they operate in.
By observation I have found some types of complexity that can be found in most systems:

### Essential Complexity

This is the complexity that arises from the fundamental requirements and constraints of the problem domain.
It is the complexity that cannot be removed without changing the problem itself.

### Accidental Complexity

This is the complexity that arises from the implementation choices, tools, and technologies used to solve the problem.
It is the complexity that can be reduced or eliminated through better design, practices, and tools.
Usually acceptable and can be mitigated by good architecture and engineering practices.

### Latent Complexity

This complexity arises from not fully understanding the system, its requirements, or its environment.
Usually it means that Product team does not have enough knowledge about the domain or the users.
Developers then make product decisions based on incorrect assumptions, leading to increased complexity.
This type of complexity can be reduced through better communication, research, and learning.

### Complexity by Design

Can be usually seen in systems designed by external consultants and highly experienced architects,
that are focusing more on showcasing their skills and knowledge than on solving the actual problem at hand.
These systems may incorporate advanced patterns, abstractions, and optimizations
that are not necessary for the current requirements.
Although this is understandable from the perspective of future-proofing,
it can lead to unnecessary complexity that hinders development and maintenance.

### Complexity by Ignorance

This complexity arises from lack of knowledge, experience, or understanding of the problem domain,
technologies, or best practices.
It often leads to poor design decisions, inefficient implementations, and increased technical debt.
Very often seen in junior developers or teams unfamiliar with the domain or technology stack.
Usually it is easier to rewrite the system from scratch than to maintain it.
