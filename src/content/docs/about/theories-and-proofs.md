---
title: Creating Theories and Building Proofs
description: Creating Theories and Building Proofs is the core of my approach to software development, architecture, and organizational design.
---

I've struggled to articulate my approach to software development, architecture,
and organizational design, and what I am actually good at.

I had a strong intuition that a single underlying activity connects these domains,
but it was difficult to express without collapsing into role labels or tool-centric language.
Reading Peter Naur's *Programming as Theory Building* crystallized this intuition.

I create theories and verify them against reality by building proofs:
through code, architecture, and organizational structures.
I protect these theories from erosion by maintaining boundaries,
managing change explicitly, and ensuring shared understanding.

### Theories as Mental Models for Reality

A theory is a mental model that makes reality intelligible and navigable.

It defines the *shape of the problem space* before any solution is attempted.
Without such a model, actions may still occur, but they are reactive,
local, and difficult to reason about beyond immediate effects.

A theory establishes:

- What belongs to the system and what belongs to the environment
- Which elements are internal, which are external, and why
- What is under control, what is influenced indirectly, and what is not controllable
- Which interactions matter and which can be ignored without consequence

By doing so, it makes trade-offs explicit.
It clarifies what must be protected, what may be sacrificed,
and what must never be assumed away.

Boundaries are a direct consequence of the theory.
They separate domains where different assumptions hold
and prevent accidental reasoning across incompatible models.

A weak or implicit theory blurs these distinctions.
As a result, responsibility leaks, invariants erode,
and the system becomes harder to explain than to operate.

A strong theory does not guarantee correctness,
but it makes incorrectness visible.

### Architecture as a Concept of Proof

Architecture is the *conceptual proof* that a theory is internally consistent.

It demonstrates that:

- The system can exist under stated constraints
- Responsibilities are separable without contradiction
- Critical invariants can be preserved over time
- Failure and recovery are intelligible within the theory

Architectural structures are not chosen for elegance.
They are chosen because they make the theory *provable* under real constraints.

An architecture that cannot explain its own failure modes
is an unproven hypothesis.

### Code as a Proof of Theory

Code is an executable proof that the theory survives contact with reality.

It forces precision where informal reasoning is ambiguous:

- Assumptions must become explicit
- Edge cases must be named
- Invariants must be enforced or violated

If the theory is wrong, code does not fail politely.
It fails operationally.

Bugs are not primarily coding errors.
They are places where the theory was incomplete, incorrect, or unstated.

### Tests, Linters, and Metrics as Feedback Loops

Tests, linters, and code metrics are not quality signals in isolation.
They are **feedback mechanisms** about the quality of the proof.

They indicate:

- Where the theory is under-specified
- Where invariants are weak or leaking
- Where local reasoning no longer composes

An increase in defensive code, excessive tests, or metric gaming
often signals theory degradation, not improved rigor.

The goal is not compliance with tools. <br/>
The goal is early detection of theory decay.

### Summary

I create theories. <br/>
I build proofs to verify them against reality. <br/>
I protect them from erosion using boundaries, tests, and feedback mechanisms. <br/>

### References

- [Peter Naur, Programming as Theory Building](https://pages.cs.wisc.edu/~remzi/Naur.pdf)
- [Programming as Theory Building OCR](https://gist.github.com/chrisjrn/4d2cebdd7dbea7fa41ae6c94e046f752)
- [Programming as Theory Building and LLM](https://cekrem.github.io/posts/programming-as-theory-building-naur/)
