---
title: Stoicism in Software Architecture
description: What we can learn from Stoicism in Software Architecture and Engineering.
---

In my early years as a software developer, I often found myself frustrated by factors beyond my control.
Whether it was unreliable third-party services, not consistent product requirements,
or changing priorities, I struggled to accept these uncertainties.
I wanted to deliver perfect software, but the reality of software development was often messy and chaotic.

This eventually led me to discover Stoicism, an ancient philosophy that teaches us to focus on what we can control
and accept what we cannot.

## Accept the State of Things as They Are

Doesn't matter if it is an organizational structure, a legacy system, or a poorly defined requirement.
Accepting the current state of things allows you to work with what you have, rather than what you wish you had.
Find ways to work within the constraints, and focus on delivering value despite the imperfections.
Do not waste time and energy on things you cannot change. Do or do not do, there is no try.

## Identify What Is Not in Your Control

Even in the most well-managed projects, there are always factors beyond your control and
you can only influence them to a limited extent. Examples include:

- Infrastructure that is managed by customers or third parties
- The behavior of users and their interactions with your software
- The state of external systems and services
- Market trends and competition

As you gain experience, you will be able to influence some of these factors more effectively,
but there will always be elements that are outside your control.
Trying to control these factors can lead to frustration, wasted effort, and poor decision-making.
It is more efficient to accept them as they are, transform them to constraints and requirements.

In many cases it will make your decisions easier, as you will have fewer options to consider.

## Focus on What You Can Control

Investing your time and energy into things you can control will lead to better outcomes
and higher quality software.
Set of these things will vary depending on your role, project, and context, and will evolve over time.

For example:

- Communicate clearly and effectively with your team and stakeholders
- Show the facts and implications of various choices to influence decisions
- Design your architecture to be resilient to failures of external systems
- Implement monitoring and alerting to detect issues early
- Write clean, maintainable, and well-tested code
- Shorten feedback loops to quickly identify and fix problems

We can control what we put in our code, how we design our systems, what metrics we monitor,
and how our systems respond to failures.
We can influence our team, stakeholders, and users by accepting their requests,
and educating them about the implications of their choices.

## Don't Worry about Internal States of External Systems

Internal states of external systems are beyond our control. This includes third-party APIs, databases,
but also organizational processes, team dynamics and even human thoughts and behaviors.

Technical systems can and will fail, and so do people.

When integrating with external systems, it is important to accept that we cannot control their internal states or behaviors.
Therefore we should design our APIs to be easy to use, well-documented, and resilient to changes in the external systems.

Don't assume that external systems will always behave as expected, and be prepared to handle errors and failures gracefully.
External systems might even behave like attackers, and our APIs should be designed with that in mind.
