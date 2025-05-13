# The shared-nothing architecture

In [[Data Engineering]], an [[Hadoop]] *cluster* is a **group of computers**, which can be called *nodes*, that act as a **single system working on the same task**. Each *node* is its own machine, with isolated memory and disk which is **not shared between other nodes**.

This is called the [[Shared Nothing Architecture]], which enables better [[Scaling|scalability]], and makes the *cluster* **fault-tolerant to any failing node**, which can quickly recover, **not impacting other nodes**.

![[hadoop shared nothing.png]]
___
# The cluster architecture

While *nodes* are independent, they all work for the inside the **same structure**. Inside a *cluster*, a *node* can take **one of the three** forms:

- ##### Worker nodes
	*Worker nodes* are the **bulk of all available nodes** inside a *cluster*. They only **process and perform the jobs assigned to them** by the *master node*. They also run services to **supervise and manage** the its assigned job.

- ##### Master node
	The *master node* are responsible for **coordinating resource allocation** and **job assignments** to *worker nodes*. The *master node* also is **responsible for storing data** in the [[Hadoop Distributed File System|HDFS]].

- ##### Client node
	The *client node* stays **outside the master-worker hierarchy**, acting as a *gateway* between the *cluster* and outer systems. They **load the data into the cluster**, and then **fetch the results** once it's completed.