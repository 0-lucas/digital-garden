# What is it?

The *CAP Theorem*, also known as *Brewer's theorem*, states that any [[Distributed Computing]] database **can only provide two** of the following guarantees: **consistency**, **availability** and **partition tolerance**.

- ##### Consistency
**Every read will receive the last write**. As soon as the value is inserted or updated, it's already available to be read.