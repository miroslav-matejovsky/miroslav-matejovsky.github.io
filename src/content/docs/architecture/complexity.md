---
title: Complexity
description: How I see complexity in software architecture.
---

## Complexity Is Inevitable

Software systems are inherently complex due to their nature and the environments in which they operate.
Understanding the sources of complexity is critical for architects and decision-makers
because it shapes design choices, influences maintainability, and determines long-term sustainability.
By identifying the type of complexity, we can decide whether to accept it, reduce it, or eliminate it.
Through observation, several common types of complexity emerge in most systems:

***

### **Essential Complexity**

Complexity that stems from the fundamental requirements and constraints of the problem domain.  
It cannot be removed without altering the problem itself.

***

### **Accidental Complexity**

Complexity introduced by implementation choices, tools, and technologies.  
It can be reduced or eliminated through better design, practices, and tooling.  
Generally acceptable when mitigated by sound architecture and engineering principles.

***

### **Latent Complexity**

Complexity caused by incomplete understanding of the system, its requirements, or its environment.  
Often a result of insufficient domain knowledge within the product team.  
Developers then make decisions based on incorrect assumptions, increasing complexity.  
This can be reduced through improved communication, research, and continuous learning.

***

### **Complexity by Design**

Common in systems shaped by external consultants or highly experienced architects
who prioritize showcasing expertise over solving the actual problem.
Such systems may include advanced patterns, abstractions, and optimizations unnecessary for current requirements.
While intended for future-proofing, this often results in avoidable complexity that slows development and maintenance.

***

### **Complexity by Ignorance**

Complexity arising from lack of knowledge, experience, or understanding of the domain,
technologies, or best practices.
Leads to poor design decisions, inefficient implementations, and technical debt.
Frequently seen in teams unfamiliar with the domain or technology stack.
In some cases cases, rewriting the system from scratch becomes easier than maintaining it.
