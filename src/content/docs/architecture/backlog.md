---
title: Backlog and Tech Debt
description: Technical backlog is not worth maintaining.
---

## Why I Don’t Believe in a Separate Technical Backlog

The concept of maintaining a list of technical tasks that are not directly tied to business value is,
in my view, counterproductive.  
Organizations are driven by business outcomes,
so purely technical tasks rarely receive priority unless they clearly support those outcomes.

Instead of maintaining a separate technical backlog, I integrate technical tasks into the main product backlog.
This ensures technical debt and improvements are addressed as part of the overall product development process,
aligned with business priorities.

***

### **Technical Debt as a Sign of Team Growth**

As teams deepen their understanding of a system, they naturally uncover opportunities for improvement.
In many cases, they prioritize delivering new features over immediate refactoring,
which results in technical debt.

Rather than viewing this debt solely as a negative, recognize it as a byproduct of learning and progress.
It often indicates that the team is evolving, gaining insight, and identifying ways to build better solutions.

***

### **Hot, Warm, Cold Storage Analogy**

I categorize technical tasks using a storage analogy:

- **Hot Storage**: Urgent tasks that directly impact current development.  
    These require immediate attention and prioritization.
- **Warm Storage**: Important but not urgent tasks.  
    These can be scheduled for upcoming sprints or releases.
- **Cold Storage**: Low-priority tasks with minimal impact.  
    These can be deferred indefinitely or revisited during major refactoring efforts.

***

### **The Boy Scout Rule**

At the team level, I advocate for the *Boy Scout Rule*:  
**Always leave the codebase cleaner than you found it.**  
When implementing a feature or fixing a bug, take the opportunity to improve surrounding code,
refactor, and address technical debt.
This incremental approach keeps the codebase healthy without relying on a separate technical backlog.

***

### **Why This Approach Improves Alignment**

Integrating technical tasks into the product backlog creates transparency and shared ownership.
Stakeholders see how technical improvements contribute to business outcomes,
reducing friction between engineering and product teams.
This alignment ensures that technical debt is managed proactively without competing against business priorities,
fostering collaboration and trust.
