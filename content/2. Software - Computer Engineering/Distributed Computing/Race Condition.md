# What is it?

When writing *multi-threading* applications, or in any [[Distributed Computing]] environment, a *race condition* can occur when **two or more [[Threads|threads]] access shared data** and try to **change it at the same time**. The final result of the data can **differ depending of the order** each [[Threads|thread]] runs. Because of that, it **can cause unexpected bugs in runtime**.
In this case, multiple [[Threads|threads]] are *racing* to retrieve and change the data. The developer needs to **explicitly handle these cases**. These may prove **not easily reproducible** because of the complex [[Multi-Threading|concurrency]] between multiple [[Threads|threads]].

![[race condition.png]]

>[!tip] Better safe than sorry!
>*Race conditions* are widely used as a **security vulnerability** to change values in memory unexpectedly by a attacker. Try to handle them as much as possible!