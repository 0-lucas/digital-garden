# What is it?

*Apache Hadoop* is a open-source software for reliable, [[Scaling|scalable]], [[Distributed Computing]], written in [[Java]]. It's mainly used in [[Data Engineering]] to **process large datasets** across **clusters of computers** using **simple programming models**, while [[Scaling|scaling]] from a single node to thousand of machines. After its development in 2006, by *Doug Cutting* and *Mike Cafarella*, it became a **standard** for [[Big Data]] analytics.
___
# The Hadoop ecosystem

*Hadoop* originally was based on only three components: 

- ##### [[MapReduce]]
	Takes care of all processing, **dividing** the workload to multiple nodes, **processing** the workload, and then **combining the output**.

- ##### [[Hadoop Distributed File System|HDFS]]
	*HDFS*, which stands for [[Hadoop Distributed File System]], is exactly what is sounds like. It divides a **large file into smaller ones**, and **focuses on read speed** rather than write speed.

- ##### [[YARN]]
	*YARN*, which stands for *Yet Another Resource Negotiator*, it's the **brain of *Hadoop***, controlling all resources and scheduling tasks. It can support other *processing engines* like [[Spark]], instead of [[MapReduce]], for example.

However, with the advance of technology and better data processing techniques, **more components can be inserted** into a *Hadoop cluster*, **extending its functionality** and speed.

![[hadoop ecosystem.png]]