# What is it?

When writing *multi-threading* applications, or in any [[Distributed Computing]] environment, a *race condition* can occur when **two or more [[Threads|threads]] access shared data** and try to **change it at the same time**.  
In this case, multiple [[Threads|threads]] are *racing* to retrieve and change the data. The developer needs to **explicitly handle these cases** with solutions like [[Deadlocks]]. These may prove **not easily reproducible** because of the complex [[Concurrency and Parallelism|concurrency]] between multiple [[Threads|threads]].

![[race condition.png]]

>[!note]
>asd
>