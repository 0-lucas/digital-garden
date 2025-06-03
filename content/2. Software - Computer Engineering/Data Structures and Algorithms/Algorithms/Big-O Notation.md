# What is it?

*Big-O notation* is the most common way of comparing the [[Algorithm Complexity]] between different [[Algorithms]]. It refers to the mathematical function that describes the *order of magnitude* of the **functions executed on each data point $n$**.

![[big o notation.png]]

When using *Big-O*, is also known as the **worst case scenario** of an [[Algorithms|algorithm]], which can be affected
 by how the data is presented — if it's sorted, distinct, etc.

___
# Understanding Big-O

To write a *Big-O notation* of any mathematical function describing an [[Algorithms|algorithm]], one would just **consider the element of highest order**.

![[big o example.png]]

*Big-O* is not a direct translation of the time it'll take to run an [[Algorithms|algorithm]]. The time needed to run any step is **directly dependent on the hardware**  and **on the data size** $n$.

A bigger *Big-O* value means that the [[Algorithms|algorithm]] is **more complex**, taking more time to run.

![[big o graph.png]]
___
# Finding Big-O

To discover the *Big-O notation* of any given [[Algorithms|algorithm]], one need to analyze the operation done in the code.

- #### No repetition
	For any code that doesn't contain a *repetition structure*, like the `for loop` or a [[Recursion]], with **no dependency of the input data**, the *Big-O* notation is $O(1)$.

- #### Single repetition
	A code that **walks through every single data point**, performing a given procedure, **only once**, can be considered $O(n)$.

>[!tip] The sum property
> Every time a code block follows **another independent code block**, each *Big-O* notation is summed. 
> However, a **sum doesn't change the order** of the *Big-O* function.

- #### Nested repetition
	*Nested repetition structures* walk through **every single data point for every data point**. So a `for loop` inside another `for loop` results in $O(n^2)$

>[!tip] The multiplication property
> A *nested* code block inside another code block creates a *dependency relationship* between blocks. In this case, each *Big-O* notation in multiplied.
> For a number of nesting $i$, the *Big-O* notation is $O(n^i)$. 

___
## Recursive complexity

To find the *time complexity* of a *recursive [[Algorithms|algorithm]]*, one can follow some steps:

- ##### Calculate the complexity of a single function call
- ##### Find how many times the recursion is called for each object
- ##### Calculate $O(step1 * (step2)^n)$
