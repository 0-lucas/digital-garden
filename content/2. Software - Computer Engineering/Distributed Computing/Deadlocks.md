# What is it?

In [[Multi Threading|multi-threading]] applications or [[Distributed Computing]] systems, a *deadlock* occurs when a **waiting [[Threads|thread]] is [[Locks|locking]] a resource that the other one needs it before it can finish**.

![[deadlock.png]]

To avoid having *deadlocks* one can:
- ###### Avoid applying [[Locks]] at all, if possible;
- ###### Avoid having multiple [[Locks]];
- ###### Always take [[Locks]] explicitly in the same order.