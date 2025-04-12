# What is it?

*Apache Spark* is a *cluster computing platform* widely used in [[Data Engineering]], designed to be **fast** and **general-purpose**. It extends other [[Distributed Computing]] frameworks like [[Hadoop]], and the [[MapReduce]] model to **efficiently handle** all needed workload. This is done mainly through the [[Resilient Distributed Datasets]] concept, which is *Spark*'s **main programming abstraction**.

![[spar.png]]

The *Spark* engine is **designed to be flexible enough** to cover wide ranges of workloads, including *batch processing*, *iterative [[Algorithms|algorithms]]*, *queries* and *stream processing*. *Spark* also offers [[API|APIs]] in [[Python]], [[Java]], [[Scala]], and *SQL*.
___
# Spark components

A *Spark* cluster could integrate many **different components** which have their own use-cases, like [[YARN]] from the [[Hadoop]] ecosystem. However, the **inner working** of *Spark* could be **generalized to five components**:

![[spark components.png]]

- ##### Spark Core
	Contains **basic functionality**, like **task scheduling**, **memory management**, **fault recovery**, and **storage interaction**. *Spark Core* houses the [[API]] which defines [[Resilient Distributed Datasets|RDD]].

- ##### Spark SQL
	Similar to *Hive* for [[Hadoop]], *Spark SQL* is a interface which **allows querying structured data**, using [[SQL]], [[Python]], [[Java]], and [[Scala]] as programming languages. Each language can used **intermediately with one another**, allowing clauses of *SQL* to interact with *Python*, allowing **great flexibility for data manipulation**.

 - ##### Spark Streaming
	 *Spark Streaming*, like the name implies, allows for *stream processing* of data, providing an [[API]] to **manipulate live streams of data**, similar to the [[Resilient Distributed Datasets|RDD]] [[API]] syntax.

- ##### MLlib
	*MLlib* is a **standard library** containing [[Machine Learning]] functionality, **providing multiple** [[Algorithms|algorithms]] for [[Regression]], [[Classification]], and [[Clustering]]. All methods in *MLlib* are designed to [[Scaling|scale]] across the cluster.

- ##### GraphX
	*GraphX* is a **standard library** for manipulating [[Graphs|graph data]], extending the [[Resilient Distributed Datasets]] [[API]], along other common [[Graphs|graph]] [[Algorithms|algorithms]].

