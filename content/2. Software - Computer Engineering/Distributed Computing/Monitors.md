# What is it?

In a [[Multi-Threading]] application or [[Distributed Computing]] system, a *monitor* is a construct that handles [[Race Condition|Race Conditions]] without causing [[Deadlocks]] or [[Livelocks]]. *Monitors* can handle multiple [[Threads|threads]] which **will check for a condition to acquire the [[Locks|lock]] for the resource**.

*Monitors* need to be **explicitly set by the programmer**, and it works s