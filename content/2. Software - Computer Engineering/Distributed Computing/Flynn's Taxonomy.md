# What is it?

*Michael J. Flynn*, a Stanford's computer scientist, proposed in 1966, a **classification of all computer architectures**, based on the **instructions stream** and **data flow**, which is known as *Flynn's Taxonomy*. It defines four categories: *SISD*, *MISD*, *SIMD*, and *MIMD*.

![[flynn taxonomy.png]]

- ##### SISD - Single Instruction, Single Data
	Consists in a **single processor which runs instructions one at a time**, storing **data in a single memory**. Instructions are retrieved from memory, processed, and then returned to memory. e.g. [[Von Neumann Architecture]].

- ##### 