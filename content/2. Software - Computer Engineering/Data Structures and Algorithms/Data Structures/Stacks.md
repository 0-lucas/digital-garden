# What is it?

*Stacks* are not exactly a [[Data Structures|data structure]] in itself, but a **way of managing data** inside a built [[Data Structures|data structure]]. It can be implemented with both [[Arrays]] and [[Linked Lists]], or any other [[Data Structures|data structure]], once it's an *abstract data structure*.

Working with *stacks* mean that one **cannot handle data that's not on top** of the *stack*. To retrieve data which was inserted first, one must first ***unstack* the rest of the data**. Data which was inserted last, is more easily retrieved.

![[Stack.png]]

>[!tip] The FILO principle
> *Stacks* work with the *FILO* principle, which stands for *First In, Last Out*. This means that the first data inserted in the *stack*, will be the last to be retrieved.

___
# How to implement a stack?

We can easily implement a *stack* structure when working with *singly* [[Linked Lists]], because of the **nature of its structure**. If we only apply **element insertion and removal at the top of the list**, a *stack* structure will be **characterized.**

