# What is it?

The *CAP Theorem*, also known as *Brewer's theorem*, states that any [[Distributed Computing]] database **can only provide two** of the following guarantees: **consistency**, **availability** and **partition tolerance**.

- ##### Consistency
**Every read will receive the last write**. As soon as the value is inserted or updated, it's replicated across the entire cluster.

- ##### Availability
Every request received **should result in a successful response** even if one or more nodes are down.

- ##### Partition Tolerance
The cluster **should be operational even if the connection between nodes is down**, or messages are **delayed or dropped** by the network.
___
# The possible choices

However, one can **only choose two of the statements above**. A system containing all of three is **impossible in a distributed environment**.

![[CAP.png]]


- ##### CP - Consistency and Partition Tolerance
When a partition or conflict occurs in a node, the **node is shut-down** until the conflict is resolved, **but the cluster keeps working**.

- ##### AP  - Availability and Partition Tolerance
Recommended for applications **which cannot falter** and must be available 24/7. The system is **resilient to network failures and partitions**, but the user may see **outdated data that is not consistent with all nodes**.

- ##### CA - Consistency and Availability
Guarantees the **data is always up-to-date** and the system is available, but it does not tolerate network failures, which can cause the **whole application to go down**.