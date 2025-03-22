# What is it?

In any [[Software Architecture|software-based]] system, **compute is always required** to perform a task. If a task gets **too complex to handle**, more compute will be required. This is called *scaling the system*, where **more compute is added to be able to handle the new workload**.

For example, in [[Data Engineering]] systems, a database may need **more storage and compute power**. This could be solved in two different ways: *vertical scaling* or *horizontal scaling*.

![[scaling.png]]
___
## Vertical scaling

*Vertical scaling* of a system is based on **improving and adding more resources to a single node of compute**. This node can grow in resources, but will always be a **single node**.
While the **flexibility** of upgrading only the needed resource like *RAM* or *CPU*, and the **easier maintenance** may favor *vertical scaling*, the whole **application will be contained in a single node**, which if it fails, will bring down the whole application. 

## Horizontal scaling

*Horizontal scaling*, however, is based on adding more **compute nodes**, **increasing the quantity of machines**, instead improving their actual hardware.
This works really well with [[Distributed Computing]] and [[Hadoop]], making it more **cost-effective in the long run**. However, the **development overhead** to connect all the different nodes and the **harder maintenance** can make it very **expensive in the short-term**.



