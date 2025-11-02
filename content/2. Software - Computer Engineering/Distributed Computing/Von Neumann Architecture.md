# What is it?

*John Von Neumann* was important scientist and engineer which, among other things, proposed in a **high level of abstraction**, a **general system architecture which is used to this day**.

![[von neumann arch.png]]

It consists of four elements:
- ##### Memory
	Stores **data**, **variables**, and **all instructions** of the program.

- ##### Processor
	Actually **executes the instructions read from memory** into the data also in memory, in cycles of **read-execute-write**.
	- ##### Control Unit
		The *control unit* **decodes the instructions** and "guide" the data in the system.
	
	- ##### Arithmetic Logic Unit
		**Calculates** all logical and arithmetic calculations needed by the program.
	
	- ##### Accumulator
		Temporarily registers the calculation made by the *ALU*.

- ##### Input/ Output
	Represents **all devices which interact** with the *bus*, as keyboards, mouses, displays.

- ##### Bus
	The *bus* connects the *memory*, *processor* and all *I/O devices* together.