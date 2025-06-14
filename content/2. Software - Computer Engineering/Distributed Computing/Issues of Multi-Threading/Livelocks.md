# What is it?

*Livelocks* are similar to [[Deadlocks]]. In any [[Multi-Threading]] application or [[Distributed Computing]] system, a *livelock* occurs when two or more [[Threads|threads]] **continuously change their states in response of process**, **without being able to acquire a [[Locks|lock]]** in a needed resource.

The [[Threads|threads]] are **not exactly locked**, but they will try to respond to each other continuously, without **ever getting out of place**. These [[Threads|threads]] are **not in waiting state**, but running *concurrently*.

![[livelock.png]]