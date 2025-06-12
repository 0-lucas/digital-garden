# What is it?

*Mutex* stands for *Mutual Exclusion*, and it's used in [[Multi-Threading]] applications and [[Distributed Computing]] systems to handle situations like [[Livelocks]], [[Deadlocks]] and any [[Race Condition]].

*Mutex* is **explicitly set by the programmer** to ensure that **only the first [[Threads|thread]] is allowed to use the resource**, and others [[Threads|threads]] need to **wait until the first is complete** and **unset the *mutex***. Think of it like a gate which only allows one [[Threads|thread]] to use a resource at a time.

![[Pasted image 20250612070604.png]]
___
# How does it work?

A *mutex* implementation is basically a flag which a [[Threads|thread]] will set when beginning to use the resource, and unsetting when it completes.