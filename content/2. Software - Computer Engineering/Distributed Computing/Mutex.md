# What is it?

*Mutex* stands for *Mutual Exclusion*, and it's used in [[Multi-Threading]] applications and [[Distributed Computing]] systems to handle situations like [[Livelocks]], [[Deadlocks]] and any [[Race Condition]].

*Mutex* is **explicitly set by the programmer** to ensure that **only the first [[Threads|thread]] is allowed to use the resource**, and others [[Threads|threads]] need to **wait until the first is complete** and **unset the *mutex***. Think of it like a gate which only allows one [[Threads|thread]] to use a resource at a time.

![[mutex.png]]
___
# How does it work?

A *mutex* implementation is basically a **flag which a [[Threads|thread]] will set** when beginning to use the resource, and **unsetting it when it completes**. This way, all other [[Threads|threads]] wait for the *mutex* and they will perform the the *set-unset* work when using the resource.

```csharp
using System;
using System.Threading;

class Program
{
    static Mutex mutex = new Mutex();

    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            Thread t = new Thread(DoWork);
            t.Name = $"Thread {i}";
            t.Start();
        }
    }

    static void DoWork()
    {
        Console.WriteLine($"{Thread.CurrentThread.Name} is waiting");

        mutex.WaitOne();  // Wait until it can enter the critical section
        try
        {
            Console.WriteLine($"{Thread.CurrentThread.Name} has entered");
            Thread.Sleep(1000);  // Simulate some work
            Console.WriteLine($"{Thread.CurrentThread.Name} is leaving");
        }
        finally
        {
            mutex.ReleaseMutex();  // Always release the mutex
        }
    }
}
```