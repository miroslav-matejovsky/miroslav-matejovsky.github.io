---
title: Stoic
description: What we can learn from Stoicism in Software Architecture and Engineering.
---

Stoicism is a philosophy that teaches us to focus on what we can control and accept what we cannot.

## Accept what is not in your control

There are many things in software development that are outside our control, such as:

- Infrastructure that is managed by customers or third parties
- The behavior of users
- The decisions of stakeholders
- The state of external systems and services
- Market trends and competition

Trying to control these factors can lead to frustration, wasted effort, and poor decision-making.
It is more efficient to accept them as they are, transform them to constraints and requirements.

In many cases it will make your decisions easier, as you will have fewer options to consider.

## Focus on what you can control

Investing your time and energy into things you can control will lead to better outcomes
and higher quality software. For example:

- Design your architecture to be resilient to failures of external systems
- Implement monitoring and alerting to detect issues early
- Shorten feedback loops to quickly identify and fix problems

We can control what we put in our code, how we design our systems, what metrics we monitor,
and how our systems respond to failures.
We can influence our team, stakeholders, and users by accepting their requests,
and educating them about the implications of their choices.

## Don't worry about internal states of external systems

When integrating with external systems, it is important to accept that we cannot control their internal states or behaviors.
Therefore we should design our APIs to be easy to use, well-documented, and resilient to changes in the external systems.

Don't assume that external systems will always behave as expected, and be prepared to handle errors and failures gracefully.
External systems might even behave like attackers, and our APIs should be designed with that in mind.

## Embrace the Stoic mindset

Adopting a Stoic mindset can help us navigate the complexities of software development.
By accepting what is outside our control and focusing on what we can influence,
we can make more informed decisions and reduce anxiety about the unknown.
