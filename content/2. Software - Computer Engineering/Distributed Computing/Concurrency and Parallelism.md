# What is it?

*Concurrency* and *parallelism* are two methods of running [[Threads|multi-threads]] or multiple [[Processes|processes]], executed by the [[Operational Systems|operational system]].

![[conc vs paral.png]]

___
## Concurrency

*Concurrency* executes task in an **overlapping time period**, but **neither task will be running at the same instant**: the *CPU* adjusts processing time per task and switch contexts. One task can begin before another is completed, but then **one is waited while other is running**.
Bottom line: **no task is running at the same time**, when **one is running**, **another is awaiting**.

![[concurrency.png]]

## Parallelism

*Parallelism* executes independent tasks **in the same instant of time**. Differently from *concurrency*, **tasks run simultaneously in different *CPU cores*, or even different computers**.
___
# Potential Issues

Because **multiple threads can access the same memory address**, it's possible that different tasks try to interact with the same piece of data. This can cause issues like:

- [[Race Condition]]
- [[Deadlock]]
- [[Livelock]]
- [[Starvation]]
- [[Producer–consumer problem]]

All of these can be summed in a single concept: **trying to interact with the same data simultaneously**. If a task wants to write something in a file, and another task deletes it in the middle of it, that surely is going to cause a problem.