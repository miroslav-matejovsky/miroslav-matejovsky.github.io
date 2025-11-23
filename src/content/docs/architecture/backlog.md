---
title: Technical Backlog
description: Technical backlog is not worth maintaining.
---

I do no believe in technical backlog. The idea of having a list of technical tasks
that are not directly related to business value seems counterproductive to me.
Organizations are always driven by business needs, so purely technical tasks
will not be prioritized unless they are tied to business outcomes.

Instead of maintaining a separate technical backlog, I prefer to integrate technical tasks
into the main product backlog.
This way, technical debt and improvements are addressed as part of the overall product development process.

### Hot, Warm, Cold Storage Analogy

I like to think of technical tasks in terms of hot, warm, and cold storage:

- **Hot Storage**: Tasks that are urgent and directly impact current development.
  These should be prioritized and addressed immediately.
- **Warm Storage**: Tasks that are important but not urgent.
  These can be scheduled for upcoming sprints or releases.
- **Cold Storage**: Tasks that are low priority and have minimal impact.
  These can be deferred indefinitely or revisited during major refactoring efforts.

### Boy Scout Rule

On the dev team level, I advocate for the "Boy Scout Rule": always leave the codebase cleaner than you found it.
When working on a feature or bug fix, take the opportunity to improve the surrounding code,
refactor, and address technical debt.
This incremental approach helps keep the codebase healthy without the need for a separate technical backlog.
