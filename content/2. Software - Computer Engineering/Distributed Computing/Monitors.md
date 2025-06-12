# What is it?

In a [[Multi-Threading]] application or [[Distributed Computing]] system, a *monitor* is a construct that handles [[Race Condition|Race Conditions]] without causing [[Deadlocks]] or [[Livelocks]]. *Monitors* can handle multiple [[Threads|threads]] which **will check for a condition to acquire the [[Locks|lock]] for the resource**.

*Monitors* need to be **explicitly set by the programmer**, and it works using a [[Mutex]] construct together with a **variable conditional flag chosen by the programmer**, in which **each [[Threads|thread]] will check for** to see if the **resource will be usable for them or not**.

``` csharp
using System;
using System.Threading;

class Program
{
    static readonly object locker = new object();
    static bool conditionMet = false;

    static void Main()
    {
        Thread waitingThread = new Thread(WaitForCondition);
        Thread signalingThread = new Thread(SignalCondition);

        waitingThread.Start();
        Thread.Sleep(1000);  // Ensure the waiting thread starts first
        signalingThread.Start();
    }

    static void WaitForCondition()
    {
        lock (locker)
        {
            Console.WriteLine("Waiting thread: Waiting for condition...");
            while (!conditionMet)
            {
                Monitor.Wait(locker);  // Release lock and wait
            }
            Console.WriteLine("Waiting thread: Condition met, proceeding...");
        }
    }

    static void SignalCondition()
    {
        lock (locker)
        {
            Console.WriteLine("Signaling thread: Doing some work...");
            Thread.Sleep(2000);  // Simulate work before signaling
            conditionMet = true;
            Console.WriteLine("Signaling thread: Condition met, sending pulse.");
            Monitor.Pulse(locker);  // Wake up one waiting thread
        }
    }
}

```