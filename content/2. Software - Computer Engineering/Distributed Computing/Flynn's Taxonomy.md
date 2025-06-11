# What is it?

*Michael J. Flynn*, a Stanford's computer scientist, proposed in 1966, a **classification of all computer architectures**, based on the **instructions stream** and **data flow**, which is known as *Flynn's Taxonomy*. It defines four categories: *SISD*, *MISD*, *SIMD*, and *MIMD*.

![[flynn taxonomy.png]]

- ##### SISD - Single Instruction, Single Data
	Consists in a **single processor which runs instructions one at a time**, storing **data in a single memory**. Instructions are retrieved from memory, processed, and then returned to memory. *e.g. [[Von Neumann Architecture]]*


- ##### SIMD - Single Instruction, Multiple Data
	Consists in **multiple processing units** which run the **same instruction simultaneously**, with **each processing unit with its own data set**, obtaining different results for the same instruction. *e.g. GPUs fall into this category*
	A **heavy workload is divided into multiple smaller pieces**, with each processing unit taking a small piece. The results are later re-assembled. [[MapReduce]] works similarly.


![[SIMD.png]]

- ##### MISD - Multiple Instruction, Single Data
	*MISD* systems are **the least used**, once *MIMD* and *SIMD* are more flexible and scalable. However, when running a pipeline of instructions, *MISD* systems are **extremely resistant to partition and failures**, where nodes validate each other results. *e.g. NASA used it for flight-control algorithms*


- ##### MIMD - Multiple Instruction, Multiple Data
	Consists in **multiple processors running different instructions in different data**, at the same time, **asynchronously** and **independently**. These can be divided into two groups: *shared memory* and *distributed memory*.
	
	- ###### Distributed Memory
		Each processor has its own memory and runs independently. The **communication between processors are made in a external bus**. *i.e. Clusters and [[Scaling|horizontal scaling]]*


	- ###### Shared Memory
		**Multiple processors access the same memory**, normally using *SMP (Symmetric Multi Processing)* to manage memory. This is the architecture used in most devices today. with uniform access to memory for all processors.
		However, a recent architecture with **non-uniform access to memory** has been created. *NUMA (Non-Uniform Memory Access)* is normally used in servers, which is basically a cluster of multiple *SMP* nodes.