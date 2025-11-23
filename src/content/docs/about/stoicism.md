---
title: Stoicism in Software Architecture
description: What we can learn from Stoicism in Software Architecture and Engineering.
---

In my early years as a software developer, I often felt frustrated by factors beyond my control.  
Unreliable third-party services, inconsistent product requirements,
and shifting priorities made software development feel chaotic.
I wanted to deliver perfect software, but reality was messy.

This frustration led me to Stoicism—an ancient philosophy
that teaches us to focus on what we can control and accept what we cannot.

***

## Accept the State of Things as They Are

Whether it’s an organizational structure, a legacy system,
or poorly defined requirements, accept the current state.
Work with what you have, not what you wish you had.
Find ways to deliver value within constraints instead of wasting energy on things you cannot change.
Do or do not—there is no try.

***

## Identify What Is Not in Your Control

Even in well-managed projects, some factors remain outside your control. Examples include:

- Infrastructure managed by customers or third parties
- User behavior and interactions with your software
- External systems and services
- Market trends and competition

Experience may increase your influence, but complete control is impossible.
Trying to control these factors leads to frustration and poor decisions.
Instead, treat them as constraints and incorporate them into your design.
This often simplifies decision-making by reducing unnecessary options.

***

## Focus on What You Can Control

Direct your time and energy toward areas you can control. These vary by role, project, and context, but examples include:

- Communicating clearly with your team and stakeholders
- Presenting facts and implications to guide decisions
- Designing architectures resilient to external failures
- Implementing monitoring and alerting for early issue detection
- Writing clean, maintainable, well-tested code
- Shortening feedback loops to identify and resolve problems quickly

We control what goes into our code, how we design systems, what metrics we monitor,
and how systems respond to failure.
We can influence stakeholders by asking the right questions, providing options,
accepting requests, and educating them about consequences.

***

## Don’t Worry About Internal States of External Systems

Internal states of external systems—third-party APIs, databases, organizational processes,
even human behavior—are beyond our control.
Systems fail. People fail.

When integrating with external systems, assume they will behave unpredictably.
Design APIs that are easy to use, well-documented, and resilient to change.
Handle errors gracefully.
Expect failures and plan for them.  
External systems might even behave like attackers—design defensively.
