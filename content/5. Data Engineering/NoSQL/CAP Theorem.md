# What is it?

The *CAP Theorem*, also known as *Brewer's theorem*, states that any [[Distributed Computing]] database **can only provide two** of the following guarantees: **consistency**, **availability** and **partition tolerance**.

- ##### Consistency
**Every read will receive the last write**. As soon as the value is inserted or updated, it's replicated across the entire cluster.

- ##### Availability
Every request received **should result in a successful response** even if one or more nodes are down.

- ##### Partition tolerance
The cluster **should be operational even if the connection between nodes is down**, or messages are **delayed or dropped** by the network.
___
# The possible choices

However, one can **only choose two of the statements above**. A system containing all of three is **impossible in a distributed environment**.