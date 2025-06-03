# What is it?

An *array* is a linear [[Data Structures|data structure]], which is also referred to as a *list*, *collection*, or [[Tensors]]. They are [[Vectors]] which necessarily work **allocating sequential data in memory**.
Each data point inside the *array* is called an *element*. Elements must be of the **same type**, and are **indexed from start to finish**, normally starting on $0$ in programming languages.

![[array.png]]
___
# Types of arrays

An implementation of the *array* structure can be divided in two types: *static arrays* and *dynamic arrays*.

- #### Static arrays
	*Static arrays* have **fixed sizes** defined at *compile time*, being stored in the *stack*. This means that once the *array* is instantiated, **it can't change its size**, and [[Pointers]] are needed to access variables.

- #### Dynamic arrays
	*Dynamic arrays* can have **unknown sizes** at *compile time*, being stored on *heap*. Each time its size changes at *run time* , it **re-allocates in a memory space that fits all data**, meaning that you can change the size in the *heap*, while maintaining a [[Pointers|pointer]] in the *stack*.
	
![[dynamic vs stack arry.png]]

>[!tip] Where dynamic arrays are not enough
> Dynamic arrays flexibility to change its size at *run time* may be not enough. This is where [[Linked Lists]] come in! They can be more flexible regarding *memory allocation*.