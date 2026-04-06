---
title: Creating Theories and Building Proofs
description: Creating Theories and Building Proofs is the core of my approach to software development, architecture, and organizational design.
---

I've been struggling to articulate my approach to software development, architecture, and organizational design and what I am good at.
I have a strong intuition that there is a common thread, but it has been elusive to put into words.
Recently I read Peter Naur's "Programming as Theory Building" and it crystallized my thinking.

I create theories and verify them against reality by building proofs through implementing code, designing architecture, and organizing teams.
I protect them from erosion by maintaining boundaries, managing change, and ensuring shared understanding.

### Theories as Mental Models for Reality

- define boundaries of a problem space
- identify what is external, what is internal, what is important, what is not
- what you have under control, what you do not have under control
- what is the system, what is the environment, what are the interactions

### Architecture as a Concept of Proof

Architecture is the *conceptual proof* that a theory is internally consistent.

It demonstrates that:

- The system can exist under stated constraints
- Responsibilities are separable without contradiction
- Critical invariants can be preserved over time
- Failure and recovery are intelligible within the theory

Architectural structures are not chosen for elegance.
They are chosen because they make the theory *provable* under real constraints.

An architecture that cannot explain its own failure modes is an unproven hypothesis.

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

The goal is not compliance with tools. <br>
The goal is early detection of theory decay.

### Summary

I create theories. <br>
I build proofs to verify them against reality. <br>
I protect them from erosion using linters, tests, and metrics.

### References

- [Peter Naur, Programming as Theory Building](https://pages.cs.wisc.edu/~remzi/Naur.pdf)
- [Programming as Theory Building OCR](https://gist.github.com/chrisjrn/4d2cebdd7dbea7fa41ae6c94e046f752)
- [Programming as Theory Building and LLM](https://cekrem.github.io/posts/programming-as-theory-building-naur/)
