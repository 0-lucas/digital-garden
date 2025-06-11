# What is it?

In [[Multi-Threading|Multi-threading]] applications or [[Distributed Computing]] systems, a *lock* is used when **multiple [[Threads|threads]] try to access the same resource at the same time**. One [[Threads|thread]] will **lose and will need to wait the other to finish**, so it can use the resource. 
A *lock* is also a mechanism which some *programming languages* such as [[Java]] use to explicitly control access to a shared resource. Applying *locks* provides **exclusive access** to a single [[Threads|thread]], and every other need for the lock to be acquired by it first.

![[lock.png]]